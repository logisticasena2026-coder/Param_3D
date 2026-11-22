import React, { useState, useEffect } from 'react';
import { apiClient } from '../../api/client';
import { ViewsBar } from '../../components/ViewsBar';
import {
  ShoppingCart,
  Clock,
  ArrowRight,
  CheckCircle,
  Package,
  Calendar,
  AlertCircle,
  FileText
} from 'lucide-react';
import { useMemo } from 'react';

const ORDER_FLOW = ['Pedido', 'Preparado', 'Terminado', 'Entregado'];

const statusColor = (s) =>
  s === 'Pedido' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' :
  s === 'Preparado' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
  s === 'Terminado' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
  s === 'Entregado' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
  'bg-slate-500/20 text-slate-400 border-slate-500/30';

export const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [nextStatus, setNextStatus] = useState('');
  const [statusNote, setStatusNote] = useState('');
  const [updating, setUpdating] = useState(false);
  const [msg, setMsg] = useState(null);

  // Toolbar y vistas: Tabla, Grid, Kanban
  const [view, setView] = useState('table');
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('createdAt');
  const [sortDir, setSortDir] = useState(-1);
  const [filters, setFilters] = useState({ estado: '', cliente: '' });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await apiClient.request('/orders/admin/all');
      setOrders(data);
    } catch (err) {
      console.error('Error cargando pedidos admin:', err);
    } finally {
      setLoading(false);
    }
  };

  const visibleOrders = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = orders.filter((o) => {
      const textMatch = !q ||
        (o.orderNumber || '').toLowerCase().includes(q) ||
        (o.customerName || '').toLowerCase().includes(q);
      return textMatch &&
        (!filters.estado || o.status === filters.estado) &&
        (!filters.cliente || o.customerEmail === filters.cliente);
    });
    if (sortKey) {
      const dir = sortDir;
      list = [...list].sort((a, b) => {
        let res = 0;
        if (sortKey === 'total') res = (a.total || 0) - (b.total || 0);
        else if (sortKey === 'status') res = ORDER_FLOW.indexOf(a.status) - ORDER_FLOW.indexOf(b.status);
        else if (sortKey === 'customerName') res = (a.customerName || '').localeCompare(b.customerName || '');
        else if (sortKey === 'orderNumber') res = (a.orderNumber || '').localeCompare(b.orderNumber || '');
        else res = new Date(a.createdAt) - new Date(b.createdAt);
        return res * dir;
      });
    }
    return list;
  }, [orders, search, sortKey, sortDir, filters]);

  const clientOptions = [...new Map(
    orders.map((o) => [o.customerEmail || o.customerName || '', {
      value: o.customerEmail || '',
      label: `${o.customerName} (${o.customerEmail || '—'})`
    }])
  ).values()];

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
    const currentIndex = ORDER_FLOW.indexOf(order.status);
    const candidateNext = currentIndex < ORDER_FLOW.length - 1 ? ORDER_FLOW[currentIndex + 1] : order.status;
    setNextStatus(candidateNext);
    setStatusNote('');
    setMsg(null);
  };

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    if (!selectedOrder) return;

    setUpdating(true);
    setMsg(null);

    try {
      const res = await apiClient.request(`/orders/admin/${selectedOrder.id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({
          status: nextStatus,
          note: statusNote || `Avance de producción a estado: ${nextStatus}`
        })
      });

      setMsg({ type: 'success', text: `Estado actualizado a "${nextStatus}" correctamente.` });
      setSelectedOrder(res.order);
      fetchOrders();
    } catch (err) {
      setMsg({ type: 'error', text: err.message || 'Error al actualizar estado del pedido.' });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white">Gestión y Trazabilidad de Pedidos</h2>
        <p className="text-xs text-muted">
          Control de máquinas en taller respetando el orden obligatorio: 
          <strong className="text-brand-400 ml-1">Pedido → Preparado → Terminado → Entregado</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Lista de Pedidos */}
        <div className="lg:col-span-7 space-y-3">
          {/* Toolbar: búsqueda, filtros, ordenamiento y botones de vistas */}
          <ViewsBar
            views={['table', 'grid', 'kanban']}
            view={view}
            onView={setView}
            search={search}
            onSearch={setSearch}
            searchPlaceholder="Buscar orden..."
            sortOptions={[
              { value: 'createdAt', label: 'Fecha (más reciente primero)' },
              { value: 'orderNumber', label: 'Número de orden' },
              { value: 'total', label: 'Total (mayor primero)' },
              { value: 'status', label: 'Estado (Avance)' }
            ]}
            sortValue={sortKey}
            onSort={(v) => { setSortKey(v); setSortDir(1); }}
            filters={[
              { label: 'Estado', value: filters.estado, onChange: (v) => setFilters({ ...filters, estado: v }), options: ORDER_FLOW.map((s) => ({ value: s, label: s })) },
              { label: 'Cliente', value: filters.cliente, onChange: (v) => setFilters({ ...filters, cliente: v }), options: clientOptions }
            ]}
          />
          {loading ? (
            <div className="min-h-[250px] flex items-center justify-center surface-card rounded-2xl border border-slate-800">
              <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : orders.length === 0 ? (
            <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
              No hay pedidos registrados en el sistema.
            </div>
          ) : (
            <>
            {view === 'table' && (
              <table className="w-full text-left text-xs">
                <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
                  <tr>
                    <th className="py-3 px-4">Orden</th>
                    <th className="py-3 px-4">Cliente</th>
                    <th className="py-3 px-4">Estado</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4">Fecha</th>
                    <th className="py-3 px-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {visibleOrders.map((o) => (
                    <tr key={o.id} onClick={() => handleSelectOrder(o)} className="cursor-pointer hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 px-4 font-mono text-white">{o.orderNumber}</td>
                      <td className="py-3 px-4 text-slate-300">{o.customerName}</td>
                      <td className="py-3 px-4"><span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${statusColor(o.status)}`}>{o.status}</span></td>
                      <td className="py-3 px-4 font-mono font-bold text-white">${o.total?.toLocaleString('es-CO')}</td>
                      <td className="py-3 px-4 font-mono text-slate-300">{new Date(o.createdAt).toLocaleString('es-CO')}</td>
                      <td className="py-3 px-4 text-right text-[11px] font-bold text-brand-400">Detalle</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {view === 'kanban' && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {ORDER_FLOW.map((st) => {
                  const items = visibleOrders.filter((o) => o.status === st);
                  return (
                    <div key={st} className="space-y-2">
                      <h5 className="text-[11px] font-bold text-white px-1">{st} ({items.length})</h5>
                      <div className="space-y-2">
                        {items.length === 0 && <p className="text-[11px] text-muted px-1">Vacío</p>}
                        {items.map((o) => (
                          <button
                            key={o.id}
                            onClick={() => handleSelectOrder(o)}
                            className="w-full text-left p-3 rounded-xl surface-card border border-slate-800 hover:border-slate-700 transition-colors space-y-1.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono font-bold text-white text-xs">{o.orderNumber}</span>
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${statusColor(o.status)}`}>{o.status}</span>
                            </div>
                            <div className="text-[11px] text-slate-300">{o.customerName} · ${o.total?.toLocaleString('es-CO')}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {view === 'grid' && visibleOrders.map((ord) => {
              const isSelected = selectedOrder?.id === ord.id;
              return (
                <div
                  key={ord.id}
                  onClick={() => handleSelectOrder(ord)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-brand-500 bg-brand-500/10 shadow-lg'
                      : 'border-slate-800 surface-card hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono font-bold text-white text-sm">{ord.orderNumber}</span>
                      <span className="text-[11px] text-muted font-sans">· {ord.customerName}</span>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      ord.status === 'Pedido' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                      ord.status === 'Preparado' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      ord.status === 'Terminado' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {ord.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1">
                    {ord.items?.map((it, idx) => (
                      <div key={idx} className="flex justify-between text-[11px] text-muted">
                        <span>{it.quantity}x {it.name} ({it.material} - {it.color})</span>
                        <span className="font-mono text-white">${it.itemTotal?.toLocaleString('es-CO')}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2.5 mt-2 border-t border-slate-800/80 text-[11px]">
                    <span className="text-muted font-mono">{new Date(ord.createdAt).toLocaleString('es-CO')}</span>
                    <span className="font-mono font-bold text-brand-400">Total: ${ord.total?.toLocaleString('es-CO')} COP</span>
                  </div>
                </div>
              );
            })}
            </>
          )}
        </div>

        {/* Panel de Actualización de Estado */}
        <div className="lg:col-span-5 space-y-4">
          {selectedOrder ? (
            <div className="surface-card p-6 rounded-3xl border border-slate-800 space-y-5 shadow-2xl sticky top-24">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                  Orden Seleccionada
                </span>
                <h3 className="text-xl font-bold text-white font-mono">{selectedOrder.orderNumber}</h3>
                <span className="text-xs text-muted block mt-0.5">
                  Cliente: <strong className="text-white">{selectedOrder.customerName}</strong> ({selectedOrder.customerEmail})
                </span>
                <span className="text-xs text-muted block">
                  Dirección: {selectedOrder.shippingAddress?.address}, {selectedOrder.shippingAddress?.city}
                </span>
              </div>

              {/* Formulario de cambio de estado */}
              <form onSubmit={handleUpdateStatus} className="space-y-4 pt-4 border-t border-slate-800">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-white block mb-1.5">
                    Avanzar Estado Secuencial:
                  </label>
                  <select
                    value={nextStatus}
                    onChange={(e) => setNextStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-bold focus:outline-none focus:border-brand-500"
                  >
                    {ORDER_FLOW.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted block mb-1.5">
                    Nota Técnica de Taller para el Cliente:
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Ej. Laminación completada en OrcaSlicer. Cama a 60°C y extrusor a 240°C. Entra a impresión en máquina 02."
                    value={statusNote}
                    onChange={(e) => setStatusNote(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500"
                  />
                </div>

                {msg && (
                  <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
                    msg.type === 'success' ? 'bg-emerald-950/60 border border-emerald-800 text-emerald-300' : 'bg-rose-950/60 border border-rose-800 text-rose-300'
                  }`}>
                    {msg.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    <span>{msg.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={updating}
                  className="w-full py-3 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-brand-500/20"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{updating ? 'Actualizando...' : `Actualizar a "${nextStatus}"`}</span>
                </button>
              </form>

              {/* Bitácora histórica del pedido */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">
                  Historial de Cambios:
                </span>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {selectedOrder.statusHistory?.map((h, i) => (
                    <div key={i} className="text-xs p-2 rounded-lg surface-subtle border border-slate-800">
                      <div className="flex justify-between font-bold text-white">
                        <span>{h.status}</span>
                        <span className="text-[10px] text-muted font-mono">{new Date(h.timestamp).toLocaleTimeString('es-CO')}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-1">{h.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="surface-card p-8 rounded-3xl border border-slate-800 text-center text-xs text-muted">
              Selecciona un pedido de la lista para actualizar su fase de producción.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
