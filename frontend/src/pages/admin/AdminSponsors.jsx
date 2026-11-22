import React, { useState, useEffect, useMemo } from 'react';
import { apiClient } from '../../api/client';
import { ViewsBar } from '../../components/ViewsBar';
import { Users, Plus, Trash2, Edit2, Save, X, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';

export const AdminSponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Toolbar y vistas: Tabla, Grid
  const [view, setView] = useState('table');
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('commercialName');

  const visibleSponsors = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = sponsors.filter((s) =>
      !q ||
      (s.commercialName || '').toLowerCase().includes(q) ||
      (s.activityDescription || '').toLowerCase().includes(q)
    );
    if (sortKey) {
      list = [...list].sort((a, b) => {
        if (sortKey === 'status') {
          return (a.status || '').localeCompare(b.status || '');
        }
        return (a[sortKey] || '').localeCompare(b[sortKey] || '');
      });
    }
    return list;
  }, [sponsors, search, sortKey]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const initialForm = {
    commercialName: '',
    activityDescription: '',
    websiteUrl: '',
    logoUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=60',
    contactPerson: '',
    status: 'active'
  };

  const [formData, setFormData] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    setLoading(true);
    try {
      const data = await apiClient.request('/sponsors');
      setSponsors(data);
    } catch (err) {
      console.error('Error cargando patrocinadores:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setEditingId(null);
    setFormData(initialForm);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (s) => {
    setEditingId(s.id);
    setFormData({
      commercialName: s.commercialName,
      activityDescription: s.activityDescription,
      websiteUrl: s.websiteUrl || '',
      logoUrl: s.logoUrl || '',
      contactPerson: s.contactPerson || '',
      status: s.status || 'active'
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMsg(null);

    try {
      if (editingId) {
        await apiClient.request(`/sponsors/${editingId}`, {
          method: 'PUT',
          body: JSON.stringify(formData)
        });
        setMsg({ type: 'success', text: 'Patrocinador actualizado exitosamente.' });
      } else {
        await apiClient.request('/sponsors', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
        setMsg({ type: 'success', text: 'Patrocinador registrado exitosamente.' });
      }

      setIsModalOpen(false);
      fetchSponsors();
    } catch (err) {
      setMsg({ type: 'error', text: err.message || 'Error guardando patrocinador.' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Deseas eliminar este patrocinador?')) return;
    try {
      await apiClient.request(`/sponsors/${id}`, { method: 'DELETE' });
      fetchSponsors();
    } catch (err) {
      alert('Error eliminando: ' + err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Gestión de Patrocinadores y Aliados</h2>
          <p className="text-xs text-muted">
            Administra nombres comerciales y descripción de actividades mostradas en el módulo público.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 transition-colors shadow-lg shadow-brand-500/20 w-fit"
        >
          <Plus className="w-4 h-4" />
          <span>Nuevo Patrocinador</span>
        </button>
      </div>

      {/* Toolbar: búsqueda, ordenamiento y botones de vistas */}
      <ViewsBar
        views={['grid', 'table', 'kanban']}
        view={view}
        onView={setView}
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Buscar patrocinador..."
        sortOptions={[
          { value: 'commercialName', label: 'Nombre comercial (A-Z)' },
          { value: 'status', label: 'Estado' }
        ]}
        sortValue={sortKey}
        onSort={setSortKey}
      />

      {msg && (
        <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
          msg.type === 'success' ? 'bg-emerald-950/60 border border-emerald-800 text-emerald-300' : 'bg-rose-950/60 border border-rose-800 text-rose-300'
        }`}>
          {msg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          <span>{msg.text}</span>
        </div>
      )}

      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {view === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleSponsors.map((s) => (
            <div key={s.id} className="surface-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <img
                    src={s.logoUrl}
                    alt={s.commercialName}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-800 bg-slate-900"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=60';
                    }}
                  />
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleOpenEdit(s)}
                      className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-950/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm">{s.commercialName}</h3>
                  {s.contactPerson && <span className="text-[11px] text-muted block">Contacto: {s.contactPerson}</span>}
                </div>

                <div className="p-3 rounded-xl surface-subtle border border-slate-800 text-xs text-slate-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Descripción de Actividades:
                  </span>
                  <p>{s.activityDescription}</p>
                </div>
              </div>

              {s.websiteUrl && (
                <a
                  href={s.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-brand-400 hover:underline flex items-center space-x-1"
                >
                  <span>{s.websiteUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {view === 'table' && (
        <table className="w-full text-left text-xs">
          <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
            <tr>
              <th className="py-3 px-4">Nombre Comercial</th>
              <th className="py-3 px-4">Estado</th>
              <th className="py-3 px-4">Contacto</th>
              <th className="py-3 px-4">Sitio Web</th>
              <th className="py-3 px-4">Descripción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {visibleSponsors.map((s) => (
              <tr key={s.id} className="hover:bg-slate-900/40 transition-colors">
                <td className="py-3 px-4 font-bold text-white">{s.commercialName}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                    s.status === 'active'
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                      : 'bg-slate-500/20 text-slate-400 border-slate-500/30'
                  }`}>
                    {s.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-300">{s.contactPerson || '—'}</td>
                <td className="py-3 px-4">
                  {s.websiteUrl ? (
                    <a href={s.websiteUrl} target="_blank" rel="noreferrer" className="text-brand-400 hover:underline text-[10px] flex items-center space-x-1">
                      <span>{s.websiteUrl}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : '—'}
                </td>
                <td className="py-3 px-4 text-[10px] text-slate-300 line-clamp-2" title={s.activityDescription}>
                  {s.activityDescription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

          {view === 'kanban' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[...new Set(sponsors.map((s) => s.status || 'active'))].map((st) => {
                const items = visibleSponsors.filter((s) => (s.status || 'active') === st);
                return (
                  <div key={st} className="space-y-3">
                    <h5 className="text-[11px] font-bold text-white px-1">{st === 'active' ? 'Activos' : st} ({items.length})</h5>
                    <div className="space-y-2">
                      {items.length === 0 && <p className="text-[11px] text-muted px-1">Vacío</p>}
                      {items.map((s) => (
                        <div key={s.id} className="surface-card p-4 rounded-xl border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">{s.commercialName}</span>
                            <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${s.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-900 text-muted'}`}>{s.status}</span>
                          </div>
                          <div className="text-[11px] text-slate-300">Contacto: {s.contactPerson || '—'}</div>
                          <div className="text-[10px] text-slate-400 truncate" title={s.websiteUrl}>{s.websiteUrl}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* Modal Crear / Editar Patrocinador */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="w-full max-w-lg surface-card border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">
                {editingId ? 'Editar Patrocinador' : 'Registrar Nuevo Patrocinador'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                  Nombre Comercial
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Polímeros Industriales del Valle"
                  value={formData.commercialName}
                  onChange={(e) => setFormData({ ...formData, commercialName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                  Descripción de Actividades Comerciales
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Distribución de filamentos técnicos grado ingeniería..."
                  value={formData.activityDescription}
                  onChange={(e) => setFormData({ ...formData, activityDescription: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Persona de Contacto
                  </label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Sitio Web
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                  URL del Logo
                </label>
                <input
                  type="url"
                  value={formData.logoUrl}
                  onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>{saving ? 'Guardando...' : 'Guardar Patrocinador'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
