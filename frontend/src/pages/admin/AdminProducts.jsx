import React, { useState, useEffect, useMemo } from 'react';
import { apiClient } from '../../api/client';
import { ViewsBar } from '../../components/ViewsBar';
import {
  Box,
  Plus,
  Trash2,
  Edit2,
  Save,
  X,
  Clock,
  Weight,
  Layers,
  Image,
  Video,
  FileCode,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Toolbar y vistas: Tabla, Grid, Kanban
  const [view, setView] = useState('table');
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortDir, setSortDir] = useState(1);
  const [filters, setFilters] = useState({ category: '' });

  const initialForm = {
    name: '',
    category: 'Impresión 3D',
    subcategory: 'Artesanales',
    price: 35000,
    printTime: '3h 30m',
    filamentWeight: '70g',
    dimensions: { largo: 10, ancho: 10, alto: 12, unit: 'cm' },
    description: '',
    isFree: false,
    availableMaterials: ['PLA', 'PETG'],
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=60',
    videoUrl: '',
    meshGeometry: 'vase'
  };

  const [formData, setFormData] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);
  const [previewMedia, setPreviewMedia] = useState(null); // { type: 'image'|'video', url }

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await apiClient.request('/products');
      setProducts(data);
    } catch (err) {
      console.error('Error cargando productos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Productos filtrados/ordenados por la vista
  const visibleProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = products.filter((p) =>
      !q || (p.name || '').toLowerCase().includes(q) || (p.category || '').toLowerCase().includes(q)
    );
    if (filters.category) {
      list = list.filter((p) => p.category === filters.category);
    }
    if (sortKey) {
      list = [...list].sort((a, b) => {
        const A = a[sortKey];
        const B = b[sortKey];
        let cmp;
        if (typeof A === 'string' || typeof B === 'string') {
          cmp = String(A || '').localeCompare(String(B || ''));
        } else {
          cmp = (Number(A) || 0) - (Number(B) || 0);
        }
        return cmp * sortDir;
      });
    }
    return list;
  }, [products, search, sortKey, sortDir, filters.category]);

  const handleOpenCreate = () => {
    setEditingId(null);
    setFormData(initialForm);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (p) => {
    setEditingId(p.id);
    setFormData({
      name: p.name,
      category: p.category,
      subcategory: p.subcategory || 'General',
      price: p.price,
      printTime: p.printTime || '3h',
      filamentWeight: p.filamentWeight || '60g',
      dimensions: {
        largo: p.dimensions?.largo ?? p.dimensions?.x ?? 10,
        ancho: p.dimensions?.ancho ?? p.dimensions?.y ?? 10,
        alto: p.dimensions?.alto ?? p.dimensions?.z ?? 10,
        unit: p.dimensions?.unit || 'cm'
      },
      description: p.description || '',
      isFree: p.isFree || false,
      availableMaterials: p.availableMaterials || ['PLA', 'PETG'],
      imageUrl: p.imageUrl || '',
      videoUrl: p.videoUrl || '',
      meshGeometry: p.meshGeometry || 'vase'
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMsg(null);

    try {
      if (editingId) {
        await apiClient.request(`/products/${editingId}`, {
          method: 'PUT',
          body: JSON.stringify(formData)
        });
        setMsg({ type: 'success', text: 'Producto actualizado exitosamente.' });
      } else {
        await apiClient.request('/products', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
        setMsg({ type: 'success', text: 'Producto creado exitosamente.' });
      }

      setIsModalOpen(false);
      fetchProducts();
    } catch (err) {
      setMsg({ type: 'error', text: err.message || 'Error al guardar producto.' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este producto del catálogo?')) return;
    try {
      await apiClient.request(`/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    } catch (err) {
      alert('Error eliminando producto: ' + err.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Barra superior */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Inventario y Catálogo Técnico</h2>
          <p className="text-xs text-muted">
            Gestiona productos, tiempos de impresión, pesos de filamento y modelos 3D asociados.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 transition-colors shadow-lg shadow-brand-500/20 w-fit"
        >
          <Plus className="w-4 h-4" />
          <span>Nuevo Producto / Modelo</span>
        </button>
      </div>

      {msg && (
        <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
          msg.type === 'success' ? 'bg-emerald-950/60 border border-emerald-800 text-emerald-300' : 'bg-rose-950/60 border border-rose-800 text-rose-300'
        }`}>
          {msg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          <span>{msg.text}</span>
        </div>
      )}

      {/* Toolbar: búsqueda, filtros, ordenamiento y botones de vistas */}
      <ViewsBar
        views={['table', 'grid', 'gallery', 'kanban']}
        view={view}
        onView={setView}
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Buscar producto..."
        sortOptions={[
          { value: 'price_desc', label: 'Precio (mayor primero)' },
          { value: 'price_asc', label: 'Precio (menor primero)' },
          { value: 'name', label: 'Nombre (A-Z)' },
          { value: 'name_desc', label: 'Nombre (Z-A)' },
          { value: 'printTime', label: 'Tiempo de impresión' },
          { value: 'category', label: 'Categoría' }
        ]}
        sortValue={sortKey}
        onSort={(v) => { setSortKey(v.replace('_desc', '')); setSortDir(v.includes('_desc') ? -1 : 1); }}
        filters={[
          {
            label: 'Categoría',
            value: filters.category,
            onChange: (v) => setFilters({ ...filters, category: v }),
            options: [
              { value: '', label: 'Todas las categorías' },
              ...[...new Set(products.map((p) => p.category))].map((c) => ({ value: c, label: c }))
            ]
          }
        ]}
      />

      {/* Tabla de Productos */}
      {loading ? (
        <div className="min-h-[250px] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : view === 'table' && (
        <div className="surface-card rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
                <tr>
                  <th className="py-3.5 px-4">Producto</th>
                  <th className="py-3.5 px-4">Categoría / Subcat.</th>
                  <th className="py-3.5 px-4">Precio</th>
                  <th className="py-3.5 px-4">Tiempo / Peso</th>
                  <th className="py-3.5 px-4">Materiales</th>
                  <th className="py-3.5 px-4">Descarga</th>
                  <th className="py-3.5 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {visibleProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          className="w-10 h-10 rounded-lg object-cover bg-slate-900 border border-slate-800 shrink-0"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=300&auto=format&fit=crop&q=60';
                          }}
                        />
                        <div>
                          <strong className="text-white block font-semibold">{p.name}</strong>
                          <span className="text-[10px] text-muted font-mono">{p.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-800 text-slate-300">
                        {p.category}
                      </span>
                      {p.subcategory && (
                        <span className="block text-[10px] text-brand-400 mt-0.5">
                          {p.subcategory}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-white">
                      ${Number(p.price).toLocaleString('es-CO')}
                    </td>
                    <td className="py-3 px-4 text-muted font-mono">
                      <div>{p.printTime || 'N/A'}</div>
                      <div className="text-[10px] text-brand-400">{p.filamentWeight || 'N/A'}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1 max-w-[130px]">
                        {p.availableMaterials?.map((m) => (
                          <span key={m} className="px-1.5 py-0.2 rounded text-[9px] bg-brand-500/15 text-brand-300">
                            {m}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {p.isFree ? (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold">
                          Gratis (Libre)
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-muted">
                          Requiere Compra
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end space-x-1.5">
                        <button
                          onClick={() => handleOpenEdit(p)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(p.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/20"
                        >
                          <Trash2 className="w-4 h-4" />
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

      {view === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {visibleProducts.map((p) => (
            <div key={p.id} className="surface-card p-4 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors shadow-lg space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-12 h-12 rounded-xl object-cover bg-slate-900 border border-slate-800 shrink-0"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=300&auto=format&fit=crop&q=60';
                  }}
                />
                <div className="min-w-0">
                  <strong className="text-white block font-semibold text-xs truncate">{p.name}</strong>
                  <span className="text-[10px] text-muted block truncate">{p.category}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-300 space-y-0.5">
                <div className="font-mono font-bold text-white">${Number(p.price).toLocaleString('es-CO')} · {p.printTime}</div>
                <div className="text-[10px] text-brand-400">{p.filamentWeight}</div>
                {p.subcategory && <div className="text-[9px] text-muted">{p.subcategory}</div>}
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="px-2 py-0.5 rounded text-[9px] bg-brand-500/15 text-brand-300">
                  {p.availableMaterials?.[0] || 'Mat.'}
                </span>
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => handleOpenEdit(p)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                    title="Editar"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/20"
                    title="Eliminar"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'kanban' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[...new Set(products.map((p) => p.category))].map((cat) => {
            const items = visibleProducts.filter((p) => p.category === cat);
            return (
              <div key={cat} className="space-y-3">
                <h5 className="text-[11px] font-bold text-white px-1">{cat} ({items.length})</h5>
                <div className="space-y-2">
                  {items.length === 0 && <p className="text-[11px] text-muted px-1">Vacío</p>}
                  {items.map((p) => (
                    <div key={p.id} className="surface-card p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white truncate">{p.name}</span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${p.isFree ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-900 text-muted'}`}>
                          {p.isFree ? 'Gratis' : `$${Number(p.price).toLocaleString('es-CO')}`}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {p.availableMaterials?.slice(0, 4).map((m) => (
                          <span key={m} className="px-1.5 py-0.2 rounded text-[9px] bg-brand-500/15 text-brand-300">{m}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {view === 'gallery' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {visibleProducts.map((p) => (
            <div key={p.id} className="surface-card rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
              <div className="relative h-36 bg-slate-950 flex items-center justify-center">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="relative z-10 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-white/10 text-white backdrop-blur">
                  {p.isFree ? 'Gratis' : `$${Number(p.price).toLocaleString('es-CO')}`}
                </span>
              </div>
              <div className="p-3 space-y-2">
                <div>
                  <h4 className="text-sm font-bold text-white truncate">{p.name}</h4>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {p.availableMaterials?.slice(0, 4).map((m) => (
                      <span key={m} className="px-1.5 py-0.2 rounded text-[9px] bg-brand-500/15 text-brand-300">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">{p.printTime || 'N/A'}</span>
                  <div className="flex items-center space-x-1.5">
                    <button onClick={() => handleOpenEdit(p)} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800" title="Editar">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(p.id)} className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/20" title="Eliminar">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de Crear/Editar Producto */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-2xl surface-card border border-slate-700 rounded-3xl p-4 sm:p-6 shadow-2xl my-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">
                {editingId ? 'Editar Parámetros de Producto' : 'Crear Nuevo Producto en Catálogo'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Nombre del Modelo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Categoría
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"
                  >
                    <option>Impresión 3D</option>
                    <option>Router CNC</option>
                    <option>Avisos</option>
                    <option>Metal</option>
                  </select>
                </div>
              </div>

              {formData.category === 'Impresión 3D' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                      Subcategoría de Impresión 3D
                    </label>
                    <select
                      value={formData.subcategory}
                      onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"
                    >
                      <option>Artesanales</option>
                      <option>Fútbol</option>
                      <option>Navidad</option>
                      <option>Electrónica</option>
                      <option>Juguetes</option>
                      <option>Esculturas</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                      Geometría 3D Previsualizada
                    </label>
                    <select
                      value={formData.meshGeometry}
                      onChange={(e) => setFormData({ ...formData, meshGeometry: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"
                    >
                      <option value="vase">Jarrón / Ornamento</option>
                      <option value="trophy">Trofeo / Cáliz</option>
                      <option value="tree">Árbol Geométrico</option>
                      <option value="robot">Robot Articulado</option>
                      <option value="bust">Busto Escultura</option>
                      <option value="box">Gabinete / Caja Técnica</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Precio (COP)
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Tiempo de Impresión
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 4h 15m"
                    value={formData.printTime}
                    onChange={(e) => setFormData({ ...formData, printTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Peso Filamento
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 85g"
                    value={formData.filamentWeight}
                    onChange={(e) => setFormData({ ...formData, filamentWeight: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"
                  />
                </div>
              </div>

              {/* Dimensiones del producto: Largo, Ancho y Alto */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Largo (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.dimensions?.largo ?? 10}
                    onChange={(e) => setFormData({ ...formData, dimensions: { ...formData.dimensions, largo: Number(e.target.value) || '' } })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Ancho (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.dimensions?.ancho ?? 10}
                    onChange={(e) => setFormData({ ...formData, dimensions: { ...formData.dimensions, ancho: Number(e.target.value) || '' } })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Alto (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.dimensions?.alto ?? 12}
                    onChange={(e) => setFormData({ ...formData, dimensions: { ...formData.dimensions, alto: Number(e.target.value) || '' } })}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                  Descripción Técnica
                </label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"
                />
              </div>

              {/* Campos de imagen y video — 4 columnas; la imagen y el video de proceso a la derecha */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                {/* Campo de imagen + previsualización en línea a la derecha */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                      URL de Imagen
                    </label>
                    <button
                      type="button"
                      disabled={!formData.imageUrl}
                      onClick={() => formData.imageUrl && setPreviewMedia({ type: 'image', url: formData.imageUrl })}
                      className="px-2 py-1 text-[10px] font-extrabold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors disabled:opacity-50 shrink-0"
                    >
                      Ver Previsualización
                    </button>
                  </div>
                  <input
                    type="url"
                    placeholder="https://ejemplo.com/imagen.jpg"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg surface-subtle border border-slate-800 text-xs text-white font-mono focus:outline-none focus:border-brand-500"
                  />
                  {formData.imageUrl && (
                    <div className="relative h-36 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                      <img
                        src={formData.imageUrl}
                        alt="Vista previa de la imagen"
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => { e.target.src = '/assets/placeholder.jpg'; }}
                      />
                    </div>
                  )}
                </div>

                {/* Imagen del producto — a la derecha del campo */}
                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center">
                  {formData.imageUrl ? (
                    <img
                      src={formData.imageUrl}
                      alt="Imagen del producto"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { e.target.src = '/assets/placeholder.jpg'; }}
                    />
                  ) : (
                    <span className="text-[10px] text-muted">Sin imagen aún</span>
                  )}
                </div>

                {/* Campo de video + previsualización en línea a la derecha */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                      URL Video de Proceso (MP4)
                    </label>
                    <button
                      type="button"
                      disabled={!formData.videoUrl}
                      onClick={() => formData.videoUrl && setPreviewMedia({ type: 'video', url: formData.videoUrl })}
                      className="px-2 py-1 text-[10px] font-extrabold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors disabled:opacity-50 shrink-0"
                    >
                      Ver Previsualización
                    </button>
                  </div>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={formData.videoUrl}
                    onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg surface-subtle border border-slate-800 text-xs text-white font-mono focus:outline-none focus:border-brand-500"
                  />
                  {formData.videoUrl && (
                    <div className="relative h-36 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                      <video src={formData.videoUrl} controls className="absolute inset-0 w-full h-full object-cover bg-black" />
                    </div>
                  )}
                </div>

                {/* Video del proceso — a la derecha del campo */}
                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center">
                  {formData.videoUrl ? (
                    <video
                      src={formData.videoUrl}
                      controls
                      className="absolute inset-0 w-full h-full object-cover bg-black"
                    />
                  ) : (
                    <span className="text-[10px] text-muted">Sin video aún</span>
                  )}
                </div>
              </div>

              {/* Modal de previsualización (imagen y video) */}
              {previewMedia && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
                  <div className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setPreviewMedia(null)}
                      className="absolute -top-3 -right-3 p-1.5 rounded-full bg-slate-800 text-white hover:bg-rose-500 transition-colors"
                      title="Cerrar vista previa"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    {previewMedia.type === 'image' ? (
                      <img src={previewMedia.url} alt="Previsualización" className="w-full h-auto max-h-[80vh] object-cover rounded-2xl shadow-2xl" />
                    ) : (
                      <video
                        src={previewMedia.url}
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-auto max-h-[80vh] object-cover rounded-2xl shadow-2xl bg-black"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Switch de Modelo Gratuito */}
              <div className="p-3.5 rounded-xl surface-subtle border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">
                    Habilitar como Modelo Gratuito (Libre Descarga)
                  </span>
                  <span className="text-[11px] text-muted">
                    Si está activo, cualquier usuario podrá descargar el archivo STL sin necesidad de comprarlo.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.isFree}
                  onChange={(e) => setFormData({ ...formData, isFree: e.target.checked })}
                  className="w-5 h-5 accent-brand-500 rounded cursor-pointer"
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
                  <span>{saving ? 'Guardando...' : 'Guardar Producto'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
