import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/client';
import { useModules } from '../../registry';
import { Badge } from '../../components/Field';
import { Store, Briefcase, Plus, Trash2, X, Save, TrendingUp } from 'lucide-react';

const CHANNEL_TYPES = ['Store Web', 'API', 'WHL', 'Lista de proveedor', 'CRM', 'Otros'];
const STATUS_STYLES = {
  activo: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40',
  inactivo: 'bg-slate-500/10 text-slate-400 border-slate-500/40',
  vacío: 'bg-slate-500/10 text-slate-400 border-slate-500/40'
};

const fmtMoney = (v) => `$${Number(v || 0).toLocaleString('es-CO')}`;

// AdminERP — Módulo Canales (Canal de ventas + Reporte de ventas por canal)
export const AdminCanales = () => {
  useModules();
  const [canales, setCanales] = useState([]);
  const [reporte, setReporte] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    nombre: '',
    tipo: 'Store Web',
    descripcion: '',
    status: 'activo',
    ultimaVenta: ''
  });

  const loadAll = async () => {
    setLoading(true);
    try {
      const [can, rep] = await Promise.all([
        apiClient.request('/canales'),
        apiClient.request('/canales/reporte/ventas')
      ]);
      setCanales(can);
      setReporte(rep);
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadAll(); }, []);

  const setField = (f, v) => setForm((prev) => ({ ...prev, [f]: v }));

  const validate = () => {
    const errors = {};
    if (!form.nombre.trim()) errors.nombre = 'El nombre del canal es obligatorio.';
    if (!CHANNEL_TYPES.includes(form.tipo)) errors.tipo = 'Tipo inválido.';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await apiClient.request('/canales', {
        method: 'POST',
        body: JSON.stringify({
          nombre: form.nombre.trim(),
          tipo: form.tipo,
          descripcion: form.descripcion.trim(),
          status: form.status
        })
      });
      setMsg({ type: 'success', text: 'Canal creado exitosamente.' });
      setForm({ nombre: '', tipo: 'Store Web', descripcion: '', status: 'activo', ultimaVenta: '' });
      setErrors({}); setShowForm(false); loadAll();
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
  };

  const handleDelete = async (id, nombre) => {
    if (!window.confirm(`¿Eliminar el canal "${nombre}"?`)) return;
    try {
      const res = await apiClient.request(`/canales/${id}`, { method: 'DELETE' });
      setMsg({ type: 'success', text: res.message });
      loadAll();
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <Store className="w-5 h-5 text-amber-400" />
          <span>Módulo Canales (Ventas)</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold border border-brand-500/30 bg-brand-500/10 text-brand-400">v1.0.0</span>
        </h2>
        <p className="text-xs text-muted mt-1">
          Canales de venta (Store Web, API, WHL, Lista de proveedor, CRM) y reporte de ventas por canal.
        </p>
      </div>

      {msg && (
        <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${msg.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'}`}>
          {msg.type === 'success' ? <span className="text-white">✓</span> : <span>✕</span>}
          <span>{msg.text}</span>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-white flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-amber-400" />
          <span>Canales Registrados ({canales.length})</span>
        </h3>
        <button onClick={() => { setShowForm(true); setErrors({}); }}
          className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 text-xs font-extrabold flex items-center space-x-2 transition-colors shadow-md shadow-brand-500/20">
          + Nuevo Canal
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="surface-card p-5 rounded-2xl border border-amber-500/30 space-y-4 animate-fadeIn">
          <h4 className="text-sm font-bold text-white">Nuevo Canal de Venta</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-muted block mb-1">Nombre *</label>
              <input required value={form.nombre} onChange={(e) => setField('nombre', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" placeholder="Ej. Store Web" />
              {errors.nombre && <span className="text-rose-400 text-[11px] block">{errors.nombre}</span>}
            </div>
            <div>
              <label className="text-[11px] font-bold text-muted block mb-1">Tipo</label>
              <select value={form.tipo} onChange={(e) => setField('tipo', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500">
                {CHANNEL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold text-muted block mb-1">Última venta</label>
              <input value={form.ultimaVenta} onChange={(e) => setField('ultimaVenta', e.target.value)}
                placeholder="YYYY-MM-DD"
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="text-[11px] font-bold text-muted block mb-1">Estado</label>
              <select value={form.status} onChange={(e) => setField('status', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500">
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted block mb-1">Descripción</label>
            <input value={form.descripcion} onChange={(e) => setField('descripcion', e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
          </div>
          <div className="flex justify-end space-x-2 pt-2">
            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl text-[11px] font-bold text-slate-400 hover:text-white transition-colors">Cancelar</button>
            <button type="submit" disabled={!!errors.nombre} className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 text-[11px] font-extrabold">
              Crear Canal
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-7 h-7 border-3 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : canales.length === 0 ? (
        <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
          No hay canales registrados.
        </div>
      ) : (
        <div className="surface-card rounded-2xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
                <tr>
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Nombre</th>
                  <th className="py-3 px-4">Tipo</th>
                  <th className="py-3 px-4 text-center">Pedidos</th>
                  <th className="py-3 px-4">Última Venta</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {canales.map((c) => {
                  const stats = reporte.find((r) => r.id === c.id) || { orders: 0, totalVentas: 0 };
                  return (
                    <tr key={c.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 px-4 text-slate-400">{c.id}</td>
                      <td className="py-3 px-4 font-bold text-white">{c.nombre}</td>
                      <td className="py-3 px-4 text-[10px] text-slate-300">{c.tipo}</td>
                      <td className="py-3 px-4 text-center font-mono text-white">{stats.orders}</td>
                      <td className="py-3 px-4 font-mono text-slate-400">{c.ultimaVenta || '—'}</td>
                      <td className="py-3 px-4">
                        <Badge color={c.status === 'activo' ? 'success' : 'default'}>{c.status}</Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button onClick={() => handleDelete(c.id, c.nombre)} title="Eliminar"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/20">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reporte de ventas por canal */}
      <div>
        <h3 className="text-sm font-bold text-white flex items-center space-x-2 mb-3">
          <TrendingUp className="w-4 h-4 text-amber-400" />
          <span>Reporte de Ventas por Canal</span>
        </h3>
        {reporte.length === 0 ? (
          <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
            No hay datos de ventas en canales.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {reporte.map((r) => (
              <div key={r.id} className="surface-card p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white">{r.nombre}</span>
                  <Badge color={r.orders > 0 ? 'info' : 'default'}>{r.status}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl surface-subtle border border-slate-800">
                    <span className="text-[10px] text-muted block">Pedidos</span>
                    <span className="text-lg font-extrabold text-white font-mono">{r.orders}</span>
                  </div>
                  <div className="p-2.5 rounded-xl surface-subtle border border-slate-800">
                    <span className="text-[10px] text-muted block">Total</span>
                    <span className="text-lg font-extrabold text-white font-mono">{fmtMoney(r.totalVentas)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
