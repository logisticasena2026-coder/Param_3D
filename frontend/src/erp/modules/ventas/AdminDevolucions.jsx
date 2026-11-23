import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/client';
import { useModules } from '../../registry';
import { Badge } from '../../components/Field';
import { HandHeart, ArrowLeft, Save, X, Plus, Package, TrendingUp, Wallet, User } from 'lucide-react';

const STATUS_STYLES = {
  pendiente: 'bg-slate-500/10 text-slate-400 border-slate-500/40',
  completado: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40'
};

// AdminERP — Módulo Devoluciones (CRUD + restitución de stock)
export const AdminDevolucions = () => {
  useModules();
  const [devoluciones, setDevoluciones] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);
  const [filtro, setFiltro] = useState({ orderId: '', productId: '', estado: 'pendiente' });
  const [form, setForm] = useState({
    orderId: '',
    productId: '',
    cantidad: 1,
    motivo: '',
    isGananciaVencida: false
  });
  const [detalle, setDetalle] = useState(null);

  const fmt = (v) => `$${Number(v || 0).toLocaleString('es-CO')}`;

  const loadAll = async () => {
    setLoading(true);
    try {
      const [devs, ords, prods] = await Promise.all([
        apiClient.request('/devoluciones/'),
        apiClient.request('/orders/admin/all'),
        apiClient.request('/products')
      ]);
      setDevoluciones(devs);
      setOrders(ords);
      setProducts(prods);
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadAll(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.orderId || !form.productId) {
      setMsg({ type: 'error', text: 'Selecciona un pedido y un producto.' });
      return;
    }
    try {
      const res = await apiClient.request('/devoluciones/', {
        method: 'POST',
        body: JSON.stringify({
          orderId: form.orderId,
          productId: form.productId,
          cantidad: Number(form.cantidad) || 1,
          motivo: form.motivo.trim(),
          isGananciaVencida: Boolean(form.isGananciaVencida)
        })
      });
      setMsg({ type: 'success', text: res.message });
      setForm({ orderId: '', productId: '', cantidad: 1, motivo: '', isGananciaVencida: false });
      loadAll();
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
  };

  const handleUpdate = async (id, estado) => {
    try {
      const res = await apiClient.request(`/devoluciones/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ estado })
      });
      setMsg({ type: 'success', text: res.message });
      if (estado === 'completado') {
        showMsg('success', 'Stock restituido.');
      }
      loadAll();
      loadDetalle(id);
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
  };

  const showMsg = (type, text) => setMsg({ type, text });

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar esta devolución?\n\nSi está completada, se restituye el stock en Inventario.')) return;
    try {
      const res = await apiClient.request(`/devoluciones/${id}`, { method: 'DELETE' });
      setMsg({ type: 'success', text: res.message });
      loadAll();
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
  };

  const loadDetalle = async (id) => {
    try {
      const d = await apiClient.request(`/devoluciones/${id}`);
      setDetalle(d);
    } catch { setDetalle(null); }
  };

  const filtered = devoluciones.filter(d => {
    const orderMatch = !filtro.orderId || d.orderId === filtro.orderId || d.orderNumber === filtro.orderId;
    const productMatch = !filtro.productId || d.productId === filtro.productId;
    const statusMatch = !filtro.estado || d.estado === filtro.estado;
    return orderMatch && productMatch && statusMatch;
  });

  const pendientes = devoluciones.filter(d => d.estado === 'pendiente').length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <HandHeart className="w-5 h-5 text-amber-400" />
          <span>Módulo Devoluciones</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold border border-brand-500/30 bg-brand-500/10 text-brand-400">v1.0.0</span>
        </h2>
        <p className="text-xs text-muted mt-1">
          Gestiona devoluciones de productos. Al marcar como completada, el stock vuelve al inventario.
        </p>
      </div>

      {/* Toolbar: filtros */}
      <div className="flex flex-wrap items-center gap-2">
        <select value={filtro.orderId} onChange={(e) => setFiltro({ ...filtro, orderId: e.target.value })}
          className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-500">
          <option value="">Todos los pedidos</option>
          {orders.map(o => <option key={o.id} value={o.id}>{o.orderNumber} · {o.customerName}</option>)}
        </select>
        <select value={filtro.productId} onChange={(e) => setFiltro({ ...filtro, productId: e.target.value })}
          className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-500">
          <option value="">Todos los productos</option>
          {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <select value={filtro.estado} onChange={(e) => setFiltro({ ...filtro, estado: e.target.value })}
          className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-500">
          <option value="">Todos los estados</option>
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <Badge color="warning">{pendientes} pendientes</Badge>
      </div>

      {msg && (
        <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${msg.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'}`}>
          {msg.type === 'success' ? <span className="text-white">✓</span> : <span>✕</span>}
          <span>{msg.text}</span>
        </div>
      )}

      {/* Formulario crear devolución */}
      <div className="surface-card p-5 rounded-2xl border border-amber-500/30 space-y-3 animate-fadeIn">
        <h4 className="text-sm font-bold text-white flex items-center space-x-2">
          <Package className="w-4 h-4 text-amber-400" />
          <span>Crear Devolución</span>
        </h4>
        <form onSubmit={handleCreate} className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] font-bold text-muted block mb-1">Pedido *</label>
            <select required value={form.orderId} onChange={(e) => setForm({ ...form, orderId: e.target.value, productId: '' })}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500">
              <option value="">Selecciona un pedido...</option>
              {orders.map(o => (
                <option key={o.id} value={o.id}>
                  {o.orderNumber} · {o.customerName} · {fmt(o.total)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted block mb-1">Producto (del pedido)</label>
            <select required value={form.productId} onChange={(e) => setForm({ ...form, productId: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500">
              <option value="">Selecciona un producto...</option>
              {(orders.find(o => o.id === form.orderId)?.items || []).map(i => (
                <option key={i.productId} value={i.productId}>{i.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted block mb-1">Cantidad</label>
            <input type="number" min="1" required value={form.cantidad} onChange={(e) => setForm({ ...form, cantidad: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted block mb-1">Motivo</label>
            <input value={form.motivo} onChange={(e) => setForm({ ...form, motivo: e.target.value })}
              placeholder="Defecto, desiste, etc."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-2 text-[11px] text-slate-300">
              <input type="checkbox" checked={form.isGananciaVencida}
                onChange={(e) => setForm({ ...form, isGananciaVencida: e.target.checked })}
                className="accent-brand-500" />
              Ganancia vencida
            </label>
            <button type="submit"
              className="ml-auto px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 text-[11px] font-extrabold flex items-center space-x-2">
              <Package className="w-4 h-4" />
              <span>Registrar Devolución</span>
            </button>
          </div>
        </form>
      </div>

      {/* Lista de devoluciones */}
      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-7 h-7 border-3 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
          No hay devoluciones que coincidan con el filtro.
        </div>
      ) : (
        <div className="surface-card rounded-2xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
                <tr>
                  <th className="py-3 px-4">#Dev</th>
                  <th className="py-3 px-4">Pedido</th>
                  <th className="py-3 px-4">Cliente</th>
                  <th className="py-3 px-4">Producto</th>
                  <th className="py-3 px-4 text-center">Cant.</th>
                  <th className="py-3 px-4">Motivo</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4">Fecha</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filtered.map((d) => (
                  <tr key={d.id}
                    onClick={() => loadDetalle(d.id)}
                    className={`cursor-pointer transition-colors ${detalle?.id === d.id ? 'bg-brand-500/10' : 'hover:bg-slate-900/40'}`}>
                    <td className="py-3 px-4 text-white font-mono">{d.id}</td>
                    <td className="py-3 px-4 text-[10px] font-mono">{d.orderNumber}</td>
                    <td className="py-3 px-4 text-slate-300">{d.cliente?.nombre || '—'}</td>
                    <td className="py-3 px-4 text-slate-300">{d.productName}</td>
                    <td className="py-3 px-4 text-center text-white font-mono">{d.cantidad}</td>
                    <td className="py-3 px-4 text-[10px] text-slate-400">{d.motivo || '—'} {d.isGananciaVencida ? '· [GANANCIA VENCIDA]' : ''}</td>
                    <td className="py-3 px-4">
                      <Badge color={STATUS_STYLES[d.estado] ? 'default' : 'default'}>
                        <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold border ${STATUS_STYLES[d.estado]}`}>{d.estado}</span>
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-[10px] text-slate-400">{d.fechaSolicitud ? new Date(d.fechaSolicitud).toLocaleString('es-CO') : '—'}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <button onClick={(e) => { e.stopPropagation(); handleUpdate(d.id, 'completado'); }}
                          className="p-1.5 rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                          title="Marcar completado (restituye stock)">
                          <Save className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); handleDelete(d.id); }}
                          className="p-1.5 rounded-lg border border-rose-500/30 text-rose-400 hover:bg-rose-950/20 transition-colors"
                          title="Eliminar">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detalle de la devolución */}
      {detalle && (
        <div className="surface-card p-5 rounded-2xl border border-slate-800 animate-fadeIn space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Package className="w-4 h-4 text-amber-400" />
                <span>Detalle: {detalle.id}</span>
              </h3>
              <div className="text-[10px] text-slate-400">{detalle.orderNumber} · {detalle.cliente?.nombre} · {detalle.productName}</div>
            </div>
            <Badge color={STATUS_STYLES[detalle.estado] ? 'default' : 'default'}>{detalle.estado}</Badge>
          </div>
          <div className="grid grid-cols-3 gap-3 text-[11px]">
            <div className="p-3 rounded-xl surface-subtle border border-slate-800">
              <span className="text-[10px] text-muted block">Cantidad</span>
              <span className="text-white font-bold font-mono mt-0.5 block">{detalle.cantidad}</span>
            </div>
            <div className="p-3 rounded-xl surface-subtle border border-slate-800">
              <span className="text-[10px] text-muted block">Fecha</span>
              <span className="text-white font-mono mt-0.5 block">{detalle.fechaSolicitud ? new Date(detalle.fechaSolicitud).toLocaleString('es-CO') : '—'}</span>
            </div>
            <div className="p-3 rounded-xl surface-subtle border border-slate-800">
              <span className="text-[10px] text-muted block">Resolución</span>
              <span className="text-white font-mono mt-0.5 block">{detalle.fechaResolucion ? new Date(detalle.fechaResolucion).toLocaleString('es-CO') : '—'}</span>
            </div>
          </div>
          <div className="text-xs text-slate-300">
            <strong>Motivo:</strong> {detalle.motivo || '—'}
            {detalle.isGananciaVencida && <span className="text-amber-400 font-extrabold"> · [GANANCIA VENCIDA]</span>}
          </div>
        </div>
      )}
    </div>
  );
};
