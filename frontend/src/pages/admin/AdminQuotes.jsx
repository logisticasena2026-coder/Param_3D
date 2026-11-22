import React, { useState, useEffect, useMemo } from 'react';
import { apiClient } from '../../api/client';
import { ViewsBar } from '../../components/ViewsBar';
import { FileCode, Clock, Weight, Download, CheckCircle2 } from 'lucide-react';

export const AdminQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Toolbar y vistas: Tabla, Grid
  const [view, setView] = useState('grid');
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('createdAt');
  const [sortDir, setSortDir] = useState(-1);

  const visibleQuotes = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = quotes.filter((quote) =>
      !q ||
      (quote.originalName || '').toLowerCase().includes(q) ||
      (quote.material || '').toLowerCase().includes(q) ||
      (quote.color || '').toLowerCase().includes(q)
    );
    if (sortKey) {
      const dir = sortDir;
      list = [...list].sort((a, b) => {
        let res = 0;
        if (sortKey === 'material') res = (a.material || '').localeCompare(b.material || '');
        else if (sortKey === 'color') res = (a.color || '').localeCompare(b.color || '');
        else res = new Date(a.createdAt) - new Date(b.createdAt);
        return res * dir;
      });
    }
    return list;
  }, [quotes, search, sortKey, sortDir]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const data = await apiClient.request('/quotes/admin/all');
      setQuotes(data);
    } catch (err) {
      console.error('Error cargando cotizaciones:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white">Bandeja de Cotizaciones de Clientes</h2>
        <p className="text-xs text-muted">
          Archivos 3D subidos y procesados por el motor de Slicer para revisión técnica y cotización.
        </p>
      </div>

      {/* Toolbar: búsqueda, ordenamiento y botones de vistas */}
      <ViewsBar
        views={['grid', 'table']}
        view={view}
        onView={setView}
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Buscar cotización..."
        sortOptions={[
          { value: 'createdAt', label: 'Fecha (más reciente primero)' },
          { value: 'material', label: 'Material' },
          { value: 'color', label: 'Color' }
        ]}
        sortValue={sortKey}
        onSort={(v) => { setSortKey(v); setSortDir(v === 'createdAt' ? -1 : 1); }}
      />

      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : visibleQuotes.length === 0 ? (
        <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
          No hay cotizaciones que coincidan con la búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {view === 'grid' && visibleQuotes.map((q) => (
            <div key={q.id} className="surface-card p-5 rounded-2xl border border-slate-800 space-y-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">{q.originalName}</h4>
                    <span className="text-[10px] text-muted font-mono">{q.id}</span>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 border border-slate-800 text-brand-400">
                  {q.material} · {q.color}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-xl surface-subtle border border-slate-800">
                  <span className="text-[10px] text-muted block">Filamento</span>
                  <span className="font-bold font-mono text-white mt-0.5 block">
                    {q.estimation?.filamentGrams} g
                  </span>
                </div>
                <div className="p-2.5 rounded-xl surface-subtle border border-slate-800">
                  <span className="text-[10px] text-muted block">Tiempo Máquina</span>
                  <span className="font-bold font-mono text-white mt-0.5 block">
                    {q.estimation?.printTimeFormatted}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl surface-subtle border border-slate-800">
                  <span className="text-[10px] text-muted block">Precio Calculado</span>
                  <span className="font-bold font-mono text-brand-400 mt-0.5 block">
                    ${q.estimation?.breakdown?.totalPrice?.toLocaleString('es-CO')}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-muted font-mono">
                <span>Relleno: {q.infillPercent}%</span>
                <span>Dim: {q.dimensions?.x}×{q.dimensions?.y}×{q.dimensions?.z} cm</span>
                <span>{new Date(q.createdAt).toLocaleDateString('es-CO')}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'table' && (
          <table className="w-full text-left text-xs">
            <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
              <tr>
                <th className="py-3 px-4">Archivo</th>
                <th className="py-3 px-4">Material</th>
                <th className="py-3 px-4">Color</th>
                <th className="py-3 px-4">Filamento</th>
                <th className="py-3 px-4">Tiempo</th>
                <th className="py-3 px-4">Precio</th>
                <th className="py-3 px-4">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {visibleQuotes.map((q) => (
                <tr key={q.id} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-4 text-white font-semibold">{q.originalName}</td>
                  <td className="py-3 px-4"><span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-800 text-slate-300">{q.material}</span></td>
                  <td className="py-3 px-4 text-slate-300">{q.color || '—'}</td>
                  <td className="py-3 px-4 text-slate-300">{q.estimation?.filamentGrams} g</td>
                  <td className="py-3 px-4 text-slate-300">{q.estimation?.printTimeFormatted}</td>
                  <td className="py-3 px-4 font-mono font-bold text-brand-400">${q.estimation?.breakdown?.totalPrice?.toLocaleString('es-CO')}</td>
                  <td className="py-3 px-4 font-mono text-slate-300">{new Date(q.createdAt).toLocaleDateString('es-CO')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
};
