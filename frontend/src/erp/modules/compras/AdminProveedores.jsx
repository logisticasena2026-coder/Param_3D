import React, { useState, useEffect, useMemo } from 'react';
import { apiClient } from '../../../api/client';
import { useModules } from '../../registry';
import { Field, InputField, Badge } from '../../components/Field';
import { Package, X } from 'lucide-react';

const CATEGORIES = ['filamentos', 'moldes', 'paneles', 'utensilios', 'servicios', 'otros'];
const CATEGORY_LABELS = {
  filamentos: 'Filamentos', moldes: 'Moldes', paneles: 'Paneles',
  utensilios: 'Utensilios', servicios: 'Servicios', otros: 'Otros'
};
const CATEGORY_STYLES = {
  filamentos: 'info', moldes: 'brand', paneles: 'warning',
  utensilios: 'danger', servicios: 'warning', otros: 'default'
};

const EMPTY_FORM = { nombre: '', email: '', telefono: '', webpage: '', ubicacion: '', categoria: 'filamentos', descripcion: '', nota: '' };

// AdminERP — Módulo Proveedores (Panel de gestión de proveedores de insumos y servicios)
export const AdminProveedores = () => {
  useModules();
  const [form, setForm] = useState(EMPTY_FORM);
  const [categorias, setCategorias] = useState(CATEGORIES);
  const [proveedores, setProveedores] = useState([]);
  const [filtro, setFiltro] = useState({ nombre: '', categoria: '' });
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});

  const loadProveedores = async () => {
    setLoading(true);
    try {
      const { proveedores: items, categorias: cats } = await apiClient.request('/proveedores');
      setProveedores(items);
      if (cats && cats.length) setCategorias(cats);
    } catch (err) {
      setMsg({ type: 'error', text: err.message || 'Error al cargar proveedores.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadProveedores(); }, []);

  // Validación estándar
  const validate = () => {
    const errors = {};
    if (!form.nombre.trim()) errors.nombre = 'El nombre es obligatorio.';
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) errors.email = 'Email inválido.';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const setField = (f, v) => setForm((prev) => ({ ...prev, [f]: v }));

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await apiClient.request('/proveedores', {
        method: 'POST',
        body: JSON.stringify({
          nombre: form.nombre.trim(), email: form.email.trim().toLowerCase(),
          telefono: form.telefono.trim(), webpage: form.webpage.trim(),
          ubicacion: form.ubicacion.trim(), categoria: form.categoria || 'otros',
          descripcion: form.descripcion.trim(), nota: form.nota.trim()
        })
      });
      setMsg({ type: 'success', text: 'Proveedor creado exitosamente.' });
      setForm(EMPTY_FORM); setErrors({}); setShowForm(false); loadProveedores();
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await apiClient.request(`/proveedores/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          nombre: form.nombre.trim(), email: form.email.trim().toLowerCase(),
          telefono: form.telefono.trim(), webpage: form.webpage.trim(),
          ubicacion: form.ubicacion.trim(), categoria: form.categoria || 'otros',
          descripcion: form.descripcion.trim(), nota: form.nota.trim()
        })
      });
      setMsg({ type: 'success', text: 'Proveedor actualizado exitosamente.' });
      setForm(EMPTY_FORM); setErrors({}); setShowForm(false); loadProveedores();
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  };

  const handleEdit = (p) => {
    setForm({
      _id: p.id, nombre: p.nombre, email: p.email || '', telefono: p.telefono || '',
      webpage: p.webpage || '', ubicacion: p.ubicacion || '',
      categoria: p.categoria || 'otros', descripcion: p.descripcion || '', nota: p.nota || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (p) => {
    if (!window.confirm(`¿Eliminar el proveedor "${p.nombre}"?\n\nSi tiene pedidos de compra asociados, no se puede eliminar.`)) return;
    try {
      const res = await apiClient.request(`/proveedores/${p.id}`, { method: 'DELETE' });
      setMsg({ type: 'success', text: res.message });
      loadProveedores();
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  };

  const filtered = useMemo(() => proveedores.filter((p) => {
    const q = filtro.nombre.toLowerCase();
    return (
      (q ? ((p.nombre || '').toLowerCase().includes(q) || (p.email || '').toLowerCase().includes(q)) : true) &&
      (filtro.categoria ? p.categoria === filtro.categoria : true)
    );
  }), [proveedores, filtro]);

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <Package className="w-5 h-5 text-amber-400" />
          <span>Módulo Proveedores</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold border border-brand-500/30 bg-brand-500/10 text-brand-400">v1.0.0</span>
        </h2>
        <p className="text-xs text-muted mt-1">Gestiona proveedores de insumos, materiales y servicios del taller con contacto y categorización.</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Package className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted" />
          <input type="text" placeholder="Buscar nombre, email o teléfono..." value={filtro.nombre}
            onChange={(e) => setFiltro({ ...filtro, nombre: e.target.value })}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-500" />
        </div>
        <select value={filtro.categoria} onChange={(e) => setFiltro({ ...filtro, categoria: e.target.value })}
          className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-500">
          <option value="">Todas las categorías</option>
          {categorias.map(c => <option key={c} value={c}>{CATEGORY_LABELS[c] || c}</option>)}
        </select>
        <button onClick={() => { setMsg(null); setErrors({}); setForm(EMPTY_FORM); setShowForm(!showForm); }}
          className="px-3.5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 text-xs font-extrabold transition-colors shadow-md shadow-brand-500/20">
          + Nuevo Proveedor
        </button>
      </div>

      {/* Message */}
      {msg && (
        <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${msg.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'}`}>
          {msg.type === 'success' ? <span className="text-white">✓</span> : <span>✕</span>}
          <span>{msg.text}</span>
        </div>
      )}

      {/* Formulario */}
      {showForm && (
        <div className="surface-card p-5 rounded-2xl border border-amber-500/30 space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-white">
            {form.nombre ? `Editar: ${form.nombre}` : 'Crear Proveedor Nuevo'}
          </h3>
          <form onSubmit={(e) => (showForm && form.nombre ? handleUpdate(e, form._id) : handleCreate(e))} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Nombre *" required>
                <InputField required value={form.nombre} onChange={(e) => setField('nombre', e.target.value)} placeholder="Nombre del proveedor..." />
                {errors.nombre && <span className="text-rose-400 text-[11px] block">{errors.nombre}</span>}
              </Field>
              <Field label="Email">
                <InputField type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} placeholder="contacto@empresa.com" />
                {errors.email && <span className="text-rose-400 text-[11px] block">{errors.email}</span>}
              </Field>
              <Field label="Teléfono">
                <InputField value={form.telefono} onChange={(e) => setField('telefono', e.target.value)} placeholder="+57 XXX XXX XXXX" />
              </Field>
              <Field label="Página web">
                <InputField type="url" value={form.webpage} onChange={(e) => setField('webpage', e.target.value)} placeholder="https://empresa.com" />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Ubicación">
                <InputField value={form.ubicacion} onChange={(e) => setField('ubicacion', e.target.value)} placeholder="Ciudad, país" />
              </Field>
              <Field label="Categoría">
                <select value={form.categoria} onChange={(e) => setField('categoria', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-500">
                  {categorias.map(c => <option key={c} value={c}>{CATEGORY_LABELS[c] || c}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Descripción">
              <InputField value={form.descripcion} onChange={(e) => setField('descripcion', e.target.value)} rows={2} as="textarea"
                className="h-14" placeholder="Materiales que ofrece..." />
            </Field>
            <Field label="Notas">
              <InputField value={form.nota} onChange={(e) => setField('nota', e.target.value)} rows={2} as="textarea"
                className="h-14" placeholder="Observaciones internas..." />
            </Field>
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setShowForm(false)}
                className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-slate-400 hover:text-white transition-colors">
                Cancelar
              </button>
              <button type="submit" disabled={!!errors.nombre || !!errors.email}
                className="px-4 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 text-[11px] font-extrabold">
                {form.nombre ? 'Guardar' : 'Crear'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tabla */}
      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-7 h-7 border-3 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
          No hay proveedores que coincidan con la búsqueda.
        </div>
      ) : (
        <div className="surface-card rounded-2xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
                <tr>
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Proveedor</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Teléfono</th>
                  <th className="py-3 px-4">Ubicación</th>
                  <th className="py-3 px-4">Categoría</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 text-slate-400">{p.id}</td>
                    <td className="py-3 px-4">
                      <div className="font-bold text-white">{p.nombre}</div>
                      {p.webpage && (
                        <a href={p.webpage} target="_blank" rel="noreferrer" className="text-[10px] text-brand-400 hover:underline">
                          {p.webpage}
                        </a>
                      )}
                    </td>
                    <td className="py-3 px-4">{p.email || '—'}</td>
                    <td className="py-3 px-4">{p.telefono || '—'}</td>
                    <td className="py-3 px-4 text-[10px] text-muted">{p.ubicacion || '—'}</td>
                    <td className="py-3 px-4">
                      <Badge color={CATEGORY_STYLES[p.categoria] || 'default'}>{CATEGORY_LABELS[p.categoria] || p.categoria}</Badge>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <button onClick={() => handleEdit(p)} title="Editar" className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 mr-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414l4.414 4.414L11.864 18H7.5v-4.414l5.586-5.586L16 13z"/></svg>
                      </button>
                      <button onClick={() => handleDelete(p)} title="Eliminar" className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/20">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
