import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { apiClient } from '../../../api/client';
import { useModules } from '../../registry';
import { Field, InputField, Badge } from '../../components/Field';
import { Warehouse, Plus, X, Paperclip } from 'lucide-react';

const INVENTARIO_LEVELS = [
  { value: '', label: 'Todos los niveles' },
  { value: 'stock_critico', label: 'Crítico (inactivo)' },
  { value: 'stock_bajo', label: 'Bajo' },
  { value: 'stock_normal', label: 'Normal' },
  { value: 'sin_agotar', label: 'Sin agotar' }
];

const LEVEL_STYLE = {
  stock_critico: 'danger', stock_bajo: 'warning', stock_normal: 'brand', sin_agotar: 'default'
};

// AdminERP — Módulo Inventario (Panel de stock real, alertas, lotes y enlaces a Compras)
export const AdminInventario = () => {
  useModules();
  const [inventory, setInventory] = useState([]);
  const [summary, setSummary] = useState(null);
  const [lotesByProducto, setLotesByProducto] = useState({});
  const [nuevoLote, setNuevoLote] = useState({});
  const [form, setForm] = useState({ productId: '', stockActual: '', stockMin: '', stockMax: '', nota: '' });
  const [filtro, setFiltro] = useState({ level: '' });
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);

  const showMsg = (type, text) => { setMsg({ type, text }); setTimeout(() => setMsg(null), 5000); };

  const loadAll = useCallback(async () => {
    try {
      const panel = await apiClient.request('/inventory/panel');
      setInventory(panel.inventory || []);
      setSummary(panel.summary);
    } catch (err) { showMsg('error', err.message); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { loadAll(); }, [loadAll]);

  const loadLotes = async (productId) => {
    try {
      const lotes = await apiClient.request(`/inventory/productos/${productId}/lotes`);
      setLotesByProducto(prev => ({ ...prev, [productId]: lotes }));
    } catch (err) { console.error('Lotes:', err); }
  };

  // Formulario de nuevo lote
  const handleCreateLot = async (productId) => {
    if (!nuevoLote[productId]?.codigo) { showMsg('error', 'El código de lote es obligatorio.'); return; }
    try {
      await apiClient.request('/inventory/lotes', {
        method: 'POST',
        body: JSON.stringify({
          codigo: nuevoLote[productId].codigo,
          productId,
          ubicacion: 'almacen_central'
        })
      });
      showMsg('success', 'Lote registrado en el inventario.');
      setNuevoLote(prev => ({ ...prev, [productId]: null }));
      loadAll();
      loadLotes(productId);
    } catch (err) { showMsg('error', err.message); }
  };

  // Editar stock de un producto (inline)
  const handleUpdateStock = async (productId) => {
    try {
      const res = await apiClient.request(`/inventory/productos/${productId}/stock`, {
        method: 'PUT',
        body: JSON.stringify({
          stockActual: form[productId]?.stockActual,
          stockMin: form[productId]?.stockMin,
          stockMax: form[productId]?.stockMax,
          ultimaConteo: new Date().toISOString(),
          nota: form[productId]?.nota
        })
      });
      showMsg('success', `Stock actualizado: ${res.level}`);
      setInventory(inv => inv.map(i => i.id === productId ? { ...i, ...res.product } : i));
    } catch (err) { showMsg('error', err.message); }
  };

  const setField = (productId, field, value) => {
    setForm(prev => ({ ...prev, [productId]: { ...(prev[productId] || { productId }), [field]: value } }));
  };

  const filtered = useMemo(() => {
    if (!filtro.level) return inventory;
    return inventory.filter(i => i.level === filtro.level);
  }, [inventory, filtro]);

  const expanded = { ...lotesByProducto, ...{ '_nuevoLote': nuevoLote, '_form': form } };
  const totalOpen = Object.keys(lotesByProducto).length + 1;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <Warehouse className="w-5 h-5 text-amber-400" />
          <span>Módulo Inventario</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold border border-brand-500/30 bg-brand-500/10 text-brand-400">v1.0.0</span>
        </h2>
        <p className="text-xs text-muted mt-1">
          Stock real de Productos, alertas por nivel, registro de lotes con series y ciclos de vida. Conexión con módulo Compras.
        </p>
      </div>

      {/* Summary */}
      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`surface-card p-4 rounded-2xl border ${summary.summary.criticalStock > 0 ? 'border-rose-500/40' : 'border-slate-800'}`}>
            <span className="text-[10px] text-muted block">Crítico (inactivo)</span>
            <span className="text-xl font-extrabold text-rose-400 font-mono">{summary.summary.criticalStock}</span>
            <span className="text-[10px] text-rose-400 block mt-0.5">Reordena PRIORITARIO</span>
          </div>
          <div className="surface-card p-4 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-muted block">Bajo</span>
            <span className="text-xl font-extrabold text-amber-400 font-mono">{summary.summary.lowStock}</span>
            <span className="text-[10px] text-amber-400 block mt-0.5">Reordena suministro</span>
          </div>
          <div className="surface-card p-4 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-muted block">Sin agotar</span>
            <span className="text-xl font-extrabold text-emerald-400 font-mono">{summary.summary.withStock}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">activos en inventario</span>
          </div>
          <div className="surface-card p-4 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-muted block">En tránsito</span>
            <span className="text-xl font-extrabold text-brand-400 font-mono">{summary.summary.totalInTransit}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">esperando confirmación</span>
          </div>
        </div>
      )}

      {/* Toolbar de filtros */}
      <div className="flex flex-wrap items-center gap-3">
        <select value={filtro.level} onChange={(e) => setFiltro({ level: e.target.value })}
          className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-500">
          {INVENTARIO_LEVELS.map(l => (
            <option key={l.value} value={l.value}>{l.label}</option>
          ))}
        </select>
        <button
          onClick={() => {
            // Expandir todos los lotes
            const openLotes = {};
            inventory.forEach(i => { openLotes[i.id] = true; loadLotes(i.id); });
            setMsg(null);
          }}
          className="px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-bold text-slate-300 hover:text-white transition-colors"
        >
          Expandir Lotes
        </button>
      </div>

      {/* Message */}
      {msg && (
        <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${msg.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'}`}>
          {msg.type === 'success' ? <span className="text-white">✓</span> : <span>✕</span>}
          <span>{msg.text}</span>
        </div>
      )}

      {/* Tabla de inventario */}
      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-7 h-7 border-3 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
          No hay productos que coincidan con los filtros seleccionados.
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((inv) => {
            const formData = form[inv.id];
            const lotes = lotesByProducto[inv.id] || [];
            const showLotes = lotes.length > 0;
            const showNuevoLote = nuevoLote[inv.id];
            return (
              <div key={inv.id} className="surface-card p-4 rounded-2xl border border-slate-800 shadow-lg">
                {/* Row principal */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr_auto] gap-3 items-center">
                  <div className="truncate">
                    <h4 className="font-bold text-white text-xs">{inv.name}</h4>
                    <div className="text-[10px] text-muted">{inv.category} · {inv.material}</div>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      type="number" min="0"
                      value={formData?.stockActual ?? inv.stockActual}
                      onChange={(e) => setField(inv.id, 'stockActual', e.target.value)}
                      className="w-24 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-brand-500"
                    />
                    <span className="text-[10px] text-muted">actual</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input type="number" min="0" placeholder="0"
                      value={formData?.stockMin ?? ''}
                      onChange={(e) => setField(inv.id, 'stockMin', e.target.value)}
                      className="w-16 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-brand-500"
                    />
                    <span className="text-[10px] text-muted">min</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input type="number" min="0" placeholder="—"
                      value={formData?.stockMax ?? ''}
                      onChange={(e) => setField(inv.id, 'stockMax', e.target.value)}
                      className="w-16 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-brand-500"
                    />
                    <span className="text-[10px] text-muted">max</span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    <Badge color={LEVEL_STYLE[inv.level] || 'default'}>{inv.level.replace(/_/g, ' ')}</Badge>
                    {inv.proveedor && <span className="text-[10px] text-slate-400">{inv.proveedor}</span>}
                  </div>

                  <div className="flex items-center space-x-1.5">
                    <button onClick={() => handleUpdateStock(inv.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-brand-500 text-slate-950 text-[10px] font-extrabold hover:bg-brand-600 transition-colors">
                      Guardar stock
                    </button>
                    <button onClick={() => {
                      if (!showNuevoLote) {
                        setNuevoLote(prev => ({ ...prev, [inv.id]: { codigo: '' } }));
                      } else {
                        setNuevoLote(prev => ({ ...prev, [inv.id]: null }));
                      }
                      setMsg(null);
                    }}
                      title="Registrar nuevo lote"
                      className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Nuevo lote */}
                {showNuevoLote && (
                  <div className="mt-3 pt-3 border-t border-slate-800 flex gap-2">
                    <input
                      type="text"
                      placeholder="Código de lote (único)"
                      value={nuevoLote[inv.id]?.codigo || ''}
                      onChange={(e) => setNuevoLote(prev => ({ ...prev, [inv.id]: { ...(prev[inv.id] || {}), codigo: e.target.value } }))}
                      className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-[11px] text-white font-mono focus:outline-none focus:border-brand-500"
                    />
                    <button onClick={() => handleCreateLot(inv.id)} className="px-3 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-slate-950 text-[11px] font-extrabold">
                      Crear Lote
                    </button>
                    <button onClick={() => setNuevoLote(prev => ({ ...prev, [inv.id]: null }))} className="px-3 py-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Lotes existentes */}
                {showLotes && (
                  <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
                    <h5 className="text-[10px] font-bold text-muted uppercase flex items-center gap-1.5">
                      <Paperclip className="w-3.5 h-3.5" />
                      Lotes registrados ({lotes.length})
                    </h5>
                    <div className="space-y-1.5 flex-wrap gap-2">
                      {lotes.map(lot => (
                        <div key={lot.id} className="px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800 text-[11px] text-slate-300">
                          <strong className="text-brand-400 font-mono">{lot.codigo}</strong>
                          <span className="text-slate-500"> · series: {lot.numeroSeries || '—'}</span>
                          <span className="text-slate-500"> · {lot.ubicacion.replace('_', ' ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
