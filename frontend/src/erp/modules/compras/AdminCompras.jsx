import React, { useState, useEffect, useMemo } from 'react';
import { apiClient } from '../../../api/client';
import { useModules } from '../../registry';
import { Field, InputField } from '../../components/Field';
import { Package, Save, Box, Clock, TrendingUp } from 'lucide-react';

const FLOW = ['borrador', 'aprobado', 'en_transito', 'recibido', 'completado'];
const STATUS_STYLE = {
  borrador: 'bg-slate-900/10 text-slate-400 border-slate-800',
  aprobado: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  en_transito: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  recibido: 'bg-brand-500/10 text-brand-400 border-brand-500/30',
  completado: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
};

const EMPTY_CREATE = { proveedorId: '', productId: '', cantidad: 1, precioUnitario: 0, fechaPromesa: '', nota: '' };

// AdminERP — Módulo Compras (Pedidos de Compra: borrador → aprobado → en transito → recibido)
export const AdminCompras = () => {
  useModules();
  const [pedidos, setPedidos] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState(EMPTY_CREATE);
  const [errors, setErrors] = useState({});
  const [selectedPCO, setSelectedPCO] = useState(null);
  const [detail, setDetail] = useState(null);
  const [reciboCodigoLote, setReciboCodigoLote] = useState('');

  const loadAll = async () => {
    setLoading(true);
    try {
      const [pcos, provs, prods] = await Promise.all([
        apiClient.request('/compras/'),
        apiClient.request('/proveedores/'),
        apiClient.request('/products')
      ]);
      setPedidos(pcos);
      setProveedores(provs);
      setProducts(prods);
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadAll(); }, []);

  const setField = (f, v) => setForm((prev) => ({ ...prev, [f]: v }));

  const validate = () => {
    const errors = {};
    if (!form.proveedorId) errors.proveedorId = 'El proveedor es obligatorio.';
    if (!form.productId) errors.productId = 'El producto es obligatorio.';
    if (Number(form.cantidad) < 1) errors.cantidad = 'La cantidad debe ser > 0.';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await apiClient.request('/compras/', {
        method: 'POST',
        body: JSON.stringify({
          proveedorId: form.proveedorId,
          productId: form.productId,
          cantidad: Number(form.cantidad),
          precioUnitario: Number(form.precioUnitario),
          fechaPromesa: form.fechaPromesa || null,
          nota: form.nota
        })
      });
      showMsg('success', 'Pedido de compra creado exitosamente.');
      setForm(EMPTY_CREATE); setErrors({}); setShowCreate(false); loadAll();
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  };

  const showMsg = (type, text) => { setMsg({ type, text }); };

  // Flujo: confirmar / en tránsito / recibir
  const confirma = async (id) => {
    try {
      await apiClient.request(`/compras/${id}/confirm`, { method: 'POST' });
      setMsg({ type: 'success', text: 'Pedido aprobado — recolección de stock pendiente.' });
      loadAll();
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
  };

  const markTransit = async (id) => {
    try {
      await apiClient.request(`/compras/${id}/en-transito`, { method: 'POST' });
      setMsg({ type: 'success', text: 'Pedido marcado como en tránsito.' });
      loadAll();
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
  };

  const recibir = async (id) => {
    try {
      const body = reciboCodigoLote ? { codigoLote: reciboCodigoLote } : {};
      const res = await apiClient.request(`/compras/${id}/recibir`, { method: 'POST', body: JSON.stringify(body) });
      setMsg({ type: 'success', text: res.message });
      setReciboCodigoLote(''); setDetail(null);
      loadAll();
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
  };

  const toggleDetail = async (id) => {
    if (detail?.id === id) { setDetail(null); setSelectedPCO(null); return; }
    setReciboCodigoLote('');
    try {
      const d = await apiClient.request(`/compras/${id}`);
      setDetail(d);
      setSelectedPCO(id);
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
  };

  const stats = useMemo(() => {
    const byStatus = {};
    FLOW.forEach(s => (byStatus[s] = 0));
    pedidos.forEach(p => { byStatus[p.estado] = (byStatus[p.estado] || 0) + 1; });
    const suma = pedidos.filter(p => p.estado === 'completado').reduce((a, p) => a + Number(p.subtotal), 0);
    return { total: pedidos.length, borrados: byStatus.borrador, aprobados: byStatus.aprobado, enTransito: byStatus.en_transito, recibidos: byStatus.recibido, totalIngresos: suma };
  }, [pedidos]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <Package className="w-5 h-5 text-amber-400" />
          <span>Módulo Compras</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold border border-brand-500/30 bg-brand-500/10 text-brand-400">v1.0.0</span>
        </h2>
        <p className="text-xs text-muted mt-1">
          Pedidos de Compra: Borrador → Aprobado → En tránsito → Recibido. El recibir registra el stock en Inventario.
        </p>
      </div>

      {/* Resumen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="surface-card p-4 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-muted block">Pedidos activos</span>
          <span className="text-xl font-extrabold text-white font-mono">{stats.total}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">en operación</span>
        </div>
        <div className="surface-card p-4 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-muted block">En tránsito</span>
          <span className="text-xl font-extrabold text-cyan-400 font-mono">{stats.enTransito}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">enviados a taller</span>
        </div>
        <div className="surface-card p-4 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-muted block">Recibidos</span>
          <span className="text-xl font-extrabold text-brand-400 font-mono">{stats.recibidos}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">stock disponible</span>
        </div>
        <div className="surface-card p-4 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-muted block">Total ingresos</span>
          <span className="text-xl font-extrabold text-white font-mono">${stats.totalIngresos.toLocaleString('es-CO')}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">crounder los pedidos recibidos</span>
        </div>
      </div>

      {/* Flujo obliatorio */}
      <div className="surface-card p-4 rounded-2xl border border-slate-800/80 bg-slate-950/40">
        <h5 className="text-[11px] font-bold text-white flex items-center space-x-1.5 mb-2">
          <Clock className="w-3.5 h-3.5 text-brand-400" />
          <span>Ciclo de vida del Pedido de Compra</span>
        </h5>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 text-[11px]">
          <div className="text-center p-2 rounded-lg bg-slate-900/60"><strong className="text-slate-300">Borrador</strong><br/><span className="text-slate-500">Iniciado</span></div>
          <div className="text-center p-2 rounded-lg bg-slate-900/60"><strong className="text-amber-400">Aprobado</strong><br/><span className="text-slate-500">Respuesta confirmada</span></div>
          <div className="text-center p-2 rounded-lg bg-slate-900/60"><strong className="text-cyan-400">En tránsito</strong><br/><span className="text-slate-500">Pedido de envío</span></div>
          <div className="text-center p-2 rounded-lg bg-slate-900/60"><strong className="text-brand-400">Recibido</strong><br/><span className="text-slate-500">Stock c9f9</span></div>
          <div className="text-center p-2 rounded-lg bg-slate-900/60"><strong className="text-emerald-400">Completado</strong><br/><span className="text-slate-500">Factura y términos</span></div>
        </div>
      </div>

      {/* Message */}
      {msg && (
        <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${msg.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'}`}>
          {msg.type === 'success' ? <span className="text-white">✓</span> : <span>✕</span>}
          <span>{msg.text}</span>
        </div>
      )}

      {/* Formulario nuevo PCO */}
      {showCreate && (
        <div className="surface-card p-5 rounded-2xl border border-amber-500/30 animate-fadeIn space-y-4">
          <h3 className="text-sm font-bold text-white">Crear Pedido de Compra</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <Field label="Proveedor *" required>
              <select value={form.proveedorId} onChange={(e) => setField('proveedorId', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-500">
                <option value="">Selecciona proveedor...</option>
                {proveedores.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
              </select>
              {errors.proveedorId && <span className="text-rose-400 text-[11px] block">{errors.proveedorId}</span>}
            </Field>
            <Field label="Producto *" required>
              <select value={form.productId} onChange={(e) => setField('productId', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-500">
                <option value="">Selecciona producto...</option>
                {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
              {errors.productId && <span className="text-rose-400 text-[11px] block">{errors.productId}</span>}
            </Field>
            <Field label="Cantidad">
              <InputField type="number" min="1" value={form.cantidad} onChange={(e) => setField('cantidad', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
              {errors.cantidad && <span className="text-rose-400 text-[11px] block">{errors.cantidad}</span>}
            </Field>
            <Field label="Precio unitario (COP)">
              <InputField type="number" value={form.precioUnitario} onChange={(e) => setField('precioUnitario', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-2 text-xs text-white font-mono focus:outline-none focus:border-brand-500" />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Fecha promesa">
              <InputField type="date" value={form.fechaPromesa} onChange={(e) => setField('fechaPromesa', e.target.value)} />
            </Field>
            <Field label="Nota">
              <InputField value={form.nota} onChange={(e) => setField('nota', e.target.value)} rows={2} as="textarea" className="h-16" />
            </Field>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => { setShowCreate(false); setMsg(null); }} className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-slate-400 hover:text-white transition-colors">
              Cancelar
            </button>
            <button type="submit" onClick={handleCreate} disabled={!!errors.proveedorId || !!errors.productId}
              className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-[11px] font-extrabold">
              Crear Pedido de Compra
            </button>
          </div>
        </div>
      )}

      {/* Tabla de pedidos */}
      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-7 h-7 border-3 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : pedidos.length === 0 ? (
        <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
          No hay pedidos de compra registrados.
        </div>
      ) : (
        <div className="surface-card rounded-2xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
                <tr>
                  <th className="py-3 px-4">#PCO</th>
                  <th className="py-3 px-4">Proveedor</th>
                  <th className="py-3 px-4">Producto</th>
                  <th className="py-3 px-4">Cant</th>
                  <th className="py-3 px-4">Subtotal (COP)</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4">Fecha conf.</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {pedidos.map((p) => (
                  <tr key={p.id} className={`cursor-pointer transition-colors ${selectedPCO === p.id ? 'bg-brand-500/10' : 'hover:bg-slate-900/40'}`} onClick={() => toggleDetail(p.id)}>
                    <td className="py-3 px-4 text-slate-400">{p.numero}</td>
                    <td className="py-3 px-4 text-white">{p.proveedorNombre}</td>
                    <td className="py-3 px-4 text-slate-300">{p.productNombre}</td>
                    <td className="py-3 px-4 text-white">{p.cantidad}</td>
                    <td className="py-3 px-4 text-brand-400 font-mono">${p.subtotal?.toLocaleString('es-CO')}</td>
                    <td className="py-3 px-4">
                      <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold border ${STATUS_STYLE[p.estado]}`}>
                        {p.estado.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-300 font-mono">{p.fechaConfirmada ? new Date(p.fechaConfirmada).toLocaleDateString('es-CO') : '—'}</td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <button onClick={(e) => { e.stopPropagation(); toggleDetail(p.id); }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 mr-0.5" title="Detalle">
                        <Clock className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detalle del pedido seleccionado */}
      {detail && detail.id === selectedPCO && (
        <div className="surface-card p-5 rounded-2xl border border-slate-800 shadow-lg animate-fadeIn space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white">{detail.numero}</h3>
              <div className="text-[10px] text-slate-400">{detail.proveedorNombre} · Producto: {detail.productNombre} · Cant: {detail.cantidad}</div>
            </div>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold border ${STATUS_STYLE[detail.estado]}`}>{detail.estado.replace(/_/g, ' ')}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl surface-subtle border border-slate-800">
              <span className="text-[10px] text-muted block">Subtotal</span>
              <span className="text-lg font-bold text-white font-mono">${detail.subtotal?.toLocaleString('es-CO')}</span>
            </div>
            <div className="p-3 rounded-xl surface-subtle border border-slate-800">
              <span className="text-[10px] text-muted block">Fecha promesa</span>
              <span className="text-[10px] text-white">{detail.fechaPromesa ? new Date(detail.fechaPromesa).toLocaleDateString('es-CO') : '—'}</span>
            </div>
            <div className="p-3 rounded-xl surface-subtle border border-slate-800">
              <span className="text-[10px] text-muted block">Fecha confirmada</span>
              <span className="text-[10px] text-white">{detail.fechaConfirmada ? new Date(detail.fechaConfirmada).toLocaleDateString('es-CO') : '—'}</span>
            </div>
            <div className="p-3 rounded-xl surface-subtle border border-slate-800">
              <span className="text-[10px] text-muted block">Fecha recepción</span>
              <span className="text-[10px] text-white">{detail.fechaRecepcion ? new Date(detail.fechaRecepcion).toLocaleDateString('es-CO') : '—'}</span>
            </div>
            {detail.nota && (
              <div className="col-span-2 p-3 rounded-xl surface-subtle border border-slate-800">
                <span className="text-[10px] text-muted block">Nota</span>
                <span className="text-[11px] text-slate-300">{detail.nota}</span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 pt-3 border-t border-slate-800">
            <button onClick={() => confirma(detail.id)} className="px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-bold text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Confirmar pedido
            </button>
            <button onClick={() => markTransit(detail.id)} className="px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-bold text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Marcar en tránsito
            </button>
            {detail.estado === 'en_transito' && (
              <div className="flex items-center space-x-2">
                <input type="text" placeholder="Código de lote (opcional)"
                  value={reciboCodigoLote}
                  onChange={(e) => setReciboCodigoLote(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-500"
                />
                <button onClick={() => recibir(detail.id)} className="px-3 py-1.5 rounded-xl bg-brand-500 text-slate-950 text-[11px] font-extrabold hover:bg-brand-600 transition-colors">
                  Recibir Stock
                </button>
              </div>
            )}
            <button onClick={() => toggleDetail(detail.id)} className="ml-auto px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-bold text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
              Cerrar
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 text-xs font-extrabold transition-colors shadow-md shadow-brand-500/20">
        <Package className="w-4 h-4" />
        Nuevo Pedido de Compra
      </button>
    </div>
  );
};
