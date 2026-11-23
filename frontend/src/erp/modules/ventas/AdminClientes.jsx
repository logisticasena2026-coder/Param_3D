import React, { useState, useEffect, useMemo } from 'react';
import { apiClient } from '../../../api/client';
import { useModules } from '../../registry';
import { Badge } from '../../components/Field';
import { Users, Phone, Mail, MapPin, TrendingUp, Award, Star, UserPlus, Trash2, CheckCircle2, AlertCircle, X, Save, ArrowRight } from 'lucide-react';

// Estilos por lifecycle (Ventas)
const LIFECYCLE_STYLES = {
  'Primera visita': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/40',
  Prometedor: 'bg-brand-500/10 text-brand-400 border-brand-500/40',
  Fiduciario: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40',
  'Sin datos': 'bg-slate-500/10 text-slate-400 border-slate-500/40'
};

const EMPTY_FORM = {
  nombre: '',
  email: '',
  telefono: '',
  direccion: '',
  notas: ''
};

// AdminERP — Módulo Clientes (Clientes CRM: lifecycle, TQs, scores, historial)
export const AdminClientes = () => {
  useModules();
  const [clientes, setClientes] = useState([]);
  const [proyectosPorCliente, setProyectosPorCliente] = useState({});
  const [filtro, setFiltro] = useState({ lifecycle: '', search: '' });
  const [form, setForm] = useState(EMPTY_FORM);
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const showMsg = (type, text) => setMsg({ type, text });

  const loadAll = async () => {
    setLoading(true);
    try {
      const data = await apiClient.request('/clientes/');
      setClientes(data);
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadAll(); }, []);

  const setField = (f, v) => setForm((prev) => ({ ...prev, [f]: v }));

  const validate = () => {
    const errors = {};
    if (!form.nombre.trim() || form.nombre.trim().length < 2) errors.nombre = 'Nombre es obligatorio.';
    if (!form.email.trim()) errors.email = 'Email es obligatorio.';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await apiClient.request('/clientes', {
        method: 'POST',
        body: JSON.stringify({
          nombre: form.nombre.trim(),
          email: form.email.trim().toLowerCase(),
          telefono: form.telefono.trim(),
          direccion: form.direccion.trim(),
          notas: form.notas.trim()
        })
      });
      showMsg('success', 'Cliente registrado exitosamente.');
      setForm(EMPTY_FORM); setErrors({}); setShowForm(false); loadAll();
    } catch (err) { showMsg('error', err.message); }
  };

  const handleEdit = async (id, c) => {
    setEditingId(id);
    setForm({ nombre: c.nombre, email: c.email || '', telefono: c.telefono || '', direccion: c.direccion || '', notas: c.notas || '' });
    setShowForm(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await apiClient.request(`/clientes/${editingId}`, {
        method: 'PUT',
        body: JSON.stringify({
          telefono: form.telefono.trim(),
          direccion: form.direccion.trim(),
          notas: form.notas.trim()
        })
      });
      showMsg('success', `Cliente ${editingId} actualizado. Recalculando lifecycle.`);
      if (res.clientStats) {
        showMsg('success', `Cliente actualizado · Lifecycle: ${res.clientStats.status} · Score: ${res.clientStats.scoreVentas}`);
      }
      setShowForm(false); setEditingId(null); loadAll();
    } catch (err) { showMsg('error', err.message); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar este cliente?')) return;
    try {
      const res = await apiClient.request(`/clientes/${id}`, { method: 'DELETE' });
      showMsg('success', res.message);
      loadAll();
    } catch (err) { showMsg('error', err.message); }
  };

  const visibleClients = useMemo(() => {
    return clientes.filter(c => {
      const q = filtro.search.toLowerCase();
      const textMatch = !q || (c.nombre || '').toLowerCase().includes(q) || (c.email || '').toLowerCase().includes(q);
      return textMatch && (!filtro.lifecycle || c.status === filtro.lifecycle);
    });
  }, [clientes, filtro]);

  const fmt = (v) => `$${Number(v || 0).toLocaleString('es-CO')}`;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <Users className="w-5 h-5 text-amber-400" />
          <span>Módulo Clientes (CRM de Ventas)</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold border border-brand-500/30 bg-brand-500/10 text-brand-400">v1.0.0</span>
        </h2>
        <p className="text-xs text-muted mt-1">
          Clientes con lifecycle (Primera visita, Prometedor, Fiduciario), TQs, score de ventas y histórico.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <input type="text" placeholder="Buscar nombre, email o teléfono..." value={filtro.search}
            onChange={(e) => setFiltro({ ...filtro, search: e.target.value })}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-500" />
          <Users className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted" />
        </div>
        <select value={filtro.lifecycle} onChange={(e) => setFiltro({ ...filtro, lifecycle: e.target.value })}
          className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-500">
          <option value="">Todos los lifecycle</option>
          <option value="Primera visita">Primera visita</option>
          <option value="Prometedor">Prometedor</option>
          <option value="Fiduciario">Fiduciario</option>
          <option value="Sin datos">Sin datos</option>
        </select>
        <button onClick={() => { setShowForm(true); setEditingId(null); setErrors({}); }}
          className="px-3.5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 text-xs font-extrabold transition-colors shadow-md shadow-brand-500/20">
          + Nuevo Cliente
        </button>
      </div>

      {msg && (
        <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${msg.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'}`}>
          {msg.type === 'success' ? <span className="text-white">✓</span> : <span>✕</span>}
          <span>{msg.text}</span>
        </div>
      )}

      {showForm && (
        <form onSubmit={(e) => (editingId ? handleUpdate(e) : handleCreate(e))} className="surface-card p-5 rounded-2xl border border-amber-500/30 space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-white">{editingId ? 'Editar Cliente' : 'Crear Cliente Nuevo'}</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-muted block mb-1">Nombre *</label>
              <input required value={form.nombre} onChange={(e) => setField('nombre', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
              {errors.nombre && <span className="text-rose-400 text-[11px] block">{errors.nombre}</span>}
            </div>
            <div>
              <label className="text-[11px] font-bold text-muted block mb-1">Email *</label>
              <input required type="email" value={form.email} onChange={(e) => setField('email', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
              {errors.email && <span className="text-rose-400 text-[11px] block">{errors.email}</span>}
            </div>
            <div>
              <label className="text-[11px] font-bold text-muted block mb-1">Teléfono</label>
              <input value={form.telefono} onChange={(e) => setField('telefono', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="text-[11px] font-bold text-muted block mb-1">Dirección</label>
              <input value={form.direccion} onChange={(e) => setField('direccion', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
            </div>
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted block mb-1">Notas internas</label>
            <input value={form.notas} onChange={(e) => setField('notas', e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500" />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-bold">Cancelar</button>
            <button type="submit" disabled={!!errors.nombre || !!errors.email}
              className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 text-xs font-extrabold">
              {editingId ? 'Guardar' : 'Crear'}
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-7 h-7 border-3 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : visibleClients.length === 0 ? (
        <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
          No hay clientes que coincidan.
        </div>
      ) : (
        <div className="surface-card rounded-2xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
                <tr>
                  <th className="py-3 px-4">Cliente</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Teléfono</th>
                  <th className="py-3 px-4">Lifecycle</th>
                  <th className="py-3 px-4 text-center">TQs</th>
                  <th className="py-3 px-4 text-right">Score de Ventas</th>
                  <th className="py-3 px-4 text-right">Pedidos</th>
                  <th className="py-3 px-4 text-right">Total Vendido</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {visibleClients.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">{c.nombre}</td>
                    <td className="py-3 px-4 text-[10px] font-mono">{c.email}</td>
                    <td className="py-3 px-4">{c.telefono || '—'}</td>
                    <td className="py-3 px-4">
                      <Badge color={c.status === 'Fiduciario' ? 'success' : c.status === 'Primera visita' ? 'info' : c.status === 'Prometedor' ? 'brand' : 'default'}>
                        {c.status || 'Sin datos'}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`text-[10px] font-extrabold ${c.tqs ? 'text-emerald-400' : 'text-slate-500'}`}>{c.tqs ? '✓' : '—'}</span>
                    </td>
                    <td className="py-3 px-4 text-right font-mono text-white">{Number(c.scoreVentas || 0).toLocaleString('es-CO')}</td>
                    <td className="py-3 px-4 text-right font-mono text-white">{c.ordersCount || 0}</td>
                    <td className="py-3 px-4 text-right font-mono text-white">{fmt(c.totalVentas || 0)}</td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <button onClick={() => handleEdit(c.id, c)} title="Editar"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 mr-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414l4.414 4.414L11.864 18H7.5v-4.414l5.586-5.586L16 13z"/></svg>
                      </button>
                      <button onClick={() => handleDelete(c.id)} title="Eliminar" className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/20">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Historial del cliente */}
      {(() => {
        if (!filtro.search && !filtro.lifecycle) return null;
        const filtered = visibleClients;
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Historial de Ventas por Cliente</span>
            </h3>
            {filtered.slice(0, 10).map((c) => (
              <div key={c.id} className="surface-card p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center font-extrabold text-sm">
                      {c.nombre?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{c.nombre}</h4>
                      <span className="text-[10px] text-muted block font-mono">{c.email}</span>
                    </div>
                  </div>
                  <Badge color={LIFECYCLE_STYLES[c.status || 'Sin datos'] ? c.status === 'Fiduciario' ? 'success' : c.status === 'Primera visita' ? 'info' : c.status === 'Prometedor' ? 'brand' : 'default' : 'default'}>
                    {c.status || 'Sin datos'}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                  <div className="text-[10px]">
                    <span className="text-slate-500 block">Total Vendido</span>
                    <span className="text-white font-mono font-bold">{fmt(c.totalVentas || 0)}</span>
                  </div>
                  <div className="text-[10px]">
                    <span className="text-slate-500 block">Pedidos</span>
                    <span className="text-white font-mono font-bold">{c.ordersCount || 0}</span>
                  </div>
                  <div className="text-[10px]">
                    <span className="text-slate-500 block">Score</span>
                    <span className={`font-mono font-bold ${(c.scoreVentas || 0) >= 5000 ? 'text-emerald-400' : (c.scoreVentas || 0) >= 1000 ? 'text-brand-400' : 'text-slate-400'}`}>
                      {Number(c.scoreVentas || 0).toLocaleString('es-CO')}
                    </span>
                  </div>
                  <div className="text-[10px]">
                    <span className="text-slate-500 block">Ultima Visita</span>
                    <span className="text-white font-mono">{c.ultimaVisita ? new Date(c.ultimaVisita).toLocaleDateString('es-CO') : '—'}</span>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 mb-2">
                  {c.pedidos ? c.pedidos.slice(0, 5).map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[10px] py-0.5 border-b border-slate-800/50">
                      <span>{p.orderNumber} · {new Date(p.fecha).toLocaleDateString('es-CO')}</span>
                      <span className={p.estado === 'Entregado' ? 'text-emerald-400' : p.estado === 'Terminado' ? 'text-amber-400' : 'text-slate-400'}>{p.estado}</span>
                    </div>
                  )) : <span>Sin pedidos.</span>}
                </div>
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
};
