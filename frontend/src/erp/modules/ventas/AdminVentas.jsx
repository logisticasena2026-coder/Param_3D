import React, { useState, useEffect, useMemo } from 'react';
import { apiClient } from '../../../api/client';
import { useModules } from '../../registry';
import { Badge } from '../../components/Field';
import { Box, ArrowRight, Clock, Store } from 'lucide-react';

// AdminERP — Módulo Ventas (Pedidos de venta + OrdenProductivo con validación de stock)
export const AdminVentas = () => {
  useModules();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fmt = (v) => `$${Number(v || 0).toLocaleString('es-CO')}`;

  const loadAll = async () => {
    setLoading(true);
    try {
      const ords = await apiClient.request('/orders/admin/all');
      setOrders(ords);
    } catch (err) { setMsg({ type: 'error', text: err.message }); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadAll(); }, []);

  const summary = useMemo(() => {
    const all = orders;
    return {
      total: all.length,
      pedidos: all.filter(o => o.status === 'Pedido').length,
      preparados: all.filter(o => o.status === 'Preparado').length,
      terminados: all.filter(o => o.status === 'Terminado').length,
      entregados: all.filter(o => o.status === 'Entregado').length,
      cobrados: all.filter(o => o.status === 'Entregado').reduce((acc, o) => acc + (Number(o.total) || 0), 0)
    };
  }, [orders]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <Store className="w-5 h-5 text-amber-400" />
          <span>Módulo Ventas</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold border border-brand-500/30 bg-brand-500/10 text-brand-400">v1.0.0</span>
        </h2>
        <p className="text-xs text-muted mt-1">
          Ordenes de venta (Pedido → Preparado → Terminado → Entregado) con detalle de productos y validación de stocks.
        </p>
      </div>

      {/* Resumen */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="surface-card p-4 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-muted block">Total Pedidos</span>
          <span className="text-xl font-extrabold text-white font-mono">{summary.total}</span>
        </div>
        <div className="surface-card p-4 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-muted block">Pedidos</span>
          <span className="text-xl font-extrabold text-cyan-400 font-mono">{summary.pedidos}</span>
        </div>
        <div className="surface-card p-4 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-muted block">Preparados</span>
          <span className="text-xl font-extrabold text-amber-400 font-mono">{summary.preparados}</span>
        </div>
        <div className="surface-card p-4 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-muted block">Entregados</span>
          <span className="text-xl font-extrabold text-emerald-400 font-mono">{summary.entregados}</span>
        </div>
        <div className="surface-card p-4 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-muted block">Total Cobrado</span>
          <span className="text-xl font-extrabold text-brand-400 font-mono">{fmt(summary.cobrados)}</span>
        </div>
      </div>

      {/* Message */}
      {msg && (
        <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${msg.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'}`}>
          {msg.type === 'success' ? <span className="text-white">✓</span> : <span>✕</span>}
          <span>{msg.text}</span>
        </div>
      )}

      {/* Tabla de órdenes */}
      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-7 h-7 border-3 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : orders.length === 0 ? (
        <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
          No hay pedidos registrados.
        </div>
      ) : (
        <div className="surface-card rounded-2xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase">
                <tr>
                  <th className="py-3 px-4">#Pedido</th>
                  <th className="py-3 px-4">Cliente</th>
                  <th className="py-3 px-4">Canal</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Fecha</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {orders.map((o) => (
                  <tr key={o.id} className={`cursor-pointer hover:bg-slate-900/40 transition-colors ${selectedOrder?.id === o.id ? 'bg-brand-500/10' : ''}`}
                    onClick={() => setSelectedOrder(o)}>
                    <td className="py-3 px-4 text-white font-mono">{o.orderNumber}</td>
                    <td className="py-3 px-4 text-slate-300">{o.customerName}</td>
                    <td className="py-3 px-4 text-slate-400">{o.channelName || 'General'}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        o.status === 'Pedido' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/40' :
                        o.status === 'Preparado' ? 'bg-amber-500/10 text-amber-400 border-amber-500/40' :
                        o.status === 'Terminado' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40' :
                        'bg-rose-500/10 text-rose-400 border-rose-500/40'
                      }`}>{o.status}</span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-white">{fmt(o.total)}</td>
                    <td className="py-3 px-4 font-mono text-slate-400">{o.createdAt ? new Date(o.createdAt).toLocaleString('es-CO') : '—'}</td>
                    <td className="py-3 px-4 text-right">
                      <button className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                        onClick={(e) => { e.stopPropagation(); setSelectedOrder(o); }}>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detalle del pedido */}
      {selectedOrder && (
        <div className="surface-card p-5 rounded-2xl border border-slate-800 animate-fadeIn space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white">{selectedOrder.orderNumber}</h3>
              <div className="text-[10px] text-slate-400">Cliente: {selectedOrder.customerName} · {selectedOrder.customerEmail}</div>
              <div className="text-[10px] text-slate-400">Dirección: {selectedOrder.shippingAddress?.address || '—'} · {selectedOrder.shippingAddress?.city}</div>
              {selectedOrder.notasProduccion && <div className="text-[10px] text-amber-400">Obs de producción: {selectedOrder.notasProduccion}</div>}
            </div>
            <Badge color={
              selectedOrder.status === 'Entregado' ? 'success' :
              selectedOrder.status === 'Terminado' ? 'success' :
              selectedOrder.status === 'Preparado' ? 'warning' : 'info'
            }>{selectedOrder.status}</Badge>
          </div>

          {/* Ítems de pedido */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Box className="w-3.5 h-3.5" />
              <span>Ítems</span>
            </h4>
            <div className="space-y-2">
              {selectedOrder.items?.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs text-slate-300">
                  <div>
                    <div>{item.name} ×{item.quantity}</div>
                    <div className="text-[10px] text-slate-500">
                      Material: {item.material || 'N/A'} · Color: {item.color || 'N/A'} · Valorado: {fmt(item.itemTotal || (item.price * item.quantity))}
                    </div>
                  </div>
                  <div className="text-right text-white font-mono font-bold">{fmt(item.itemTotal || (item.price * item.quantity))}</div>
                </div>
              ))}
            </div>
            {selectedOrder.devolucionesCount && selectedOrder.devolucionesCount > 0 && (
              <div className="mt-2 text-[10px] text-slate-500">Devoluciones: {selectedOrder.devolucionesCount}</div>
            )}
          </div>

          {/* Cobros */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl surface-subtle border border-slate-800">
              <span className="text-[10px] text-muted block">Subtotal</span>
              <span className="text-lg font-bold text-white font-mono">{fmt(selectedOrder.subtotal)}</span>
            </div>
            <div className="p-3 rounded-xl surface-subtle border border-slate-800">
              <span className="text-[10px] text-muted block">Total</span>
              <span className="text-lg font-bold text-white font-mono">{fmt(selectedOrder.total)}</span>
            </div>
          </div>

          {/* Historial */}
          {selectedOrder.statusHistory && (
            <div>
              <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Historial</span>
              </h4>
              <div className="space-y-1.5">
                {selectedOrder.statusHistory.slice().reverse().map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px]">
                    <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[9px] font-bold text-slate-400 mt-0.5">
                      {selectedOrder.statusHistory.length - i}
                    </span>
                    <div className="min-w-0">
                      <div className="font-bold text-white text-[10px]">{h.status}</div>
                      <div className="text-[10px] text-slate-500">{new Date(h.timestamp).toLocaleString('es-CO')}</div>
                      {h.note && <div className="text-[10px] text-slate-400">{h.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
