import React, { useState, useEffect } from 'react';
import { apiClient } from '../api/client';
import { useAuth } from '../context/AuthContext';
import { OrderTimeline } from '../components/OrderTimeline';
import {
  Compass,
  Search,
  Package,
  Calendar,
  AlertCircle,
  Clock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const OrderTrackingPage = ({ initialOrderNumber = '', onNavigate }) => {
  const { isAuthenticated, user } = useAuth();
  const [orderQuery, setOrderQuery] = useState(initialOrderNumber);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialOrderNumber) {
      searchOrder(initialOrderNumber);
    }
  }, [initialOrderNumber]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserOrders();
    }
  }, [isAuthenticated]);

  const fetchUserOrders = async () => {
    try {
      const data = await apiClient.request('/orders/my-orders');
      setUserOrders(data);
      if (data.length > 0 && !initialOrderNumber && !currentOrder) {
        setCurrentOrder(data[0]);
      }
    } catch (err) {
      console.warn('Error cargando historial de pedidos:', err);
    }
  };

  const searchOrder = async (orderNum) => {
    const num = orderNum || orderQuery;
    if (!num) return;

    setLoading(true);
    setError(null);

    try {
      const data = await apiClient.request(`/orders/track/${encodeURIComponent(num.trim())}`);
      setCurrentOrder(data);
    } catch (err) {
      setError(err.message || 'No se encontró ningún pedido con ese número de guía.');
      setCurrentOrder(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchOrder(orderQuery);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Encabezado */}
      <div>
        <span className="text-xs font-mono font-bold tracking-wider text-brand-400 uppercase">
          Trazabilidad y Control de Calidad
        </span>
        <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">
          Seguimiento de Pedidos en Taller
        </h1>
        <p className="text-xs sm:text-sm text-muted mt-1 max-w-2xl">
          Visualiza el avance de tu pieza en el orden obligatorio de producción: 
          <strong className="text-white ml-1">Pedido → Preparado → Terminado → Entregado</strong>.
        </p>
      </div>

      {/* Buscador de pedido por código */}
      <div className="surface-card p-6 rounded-3xl border border-slate-800/80 shadow-xl">
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Ingresa tu número de guía (Ej: MQ3D-882319)"
              value={orderQuery}
              onChange={(e) => setOrderQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 surface-subtle border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 font-mono"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-brand-500/20"
          >
            <Compass className="w-4 h-4" />
            <span>Consultar Estado</span>
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Detalle y Timeline del Pedido Seleccionado */}
        <div className="lg:col-span-8 space-y-6">
          {loading ? (
            <div className="min-h-[300px] flex items-center justify-center surface-card rounded-3xl border border-slate-800">
              <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : currentOrder ? (
            <div className="surface-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
                    Orden de Trabajo en Taller
                  </span>
                  <div className="flex items-center space-x-3 mt-1">
                    <h2 className="text-2xl font-extrabold text-white font-mono">
                      {currentOrder.orderNumber}
                    </h2>
                    <span className="px-3 py-1 rounded-full text-xs font-bold border border-brand-500/40 bg-brand-500/15 text-brand-400">
                      Estado: {currentOrder.status}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-muted font-mono flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-400" />
                  <span>{new Date(currentOrder.createdAt).toLocaleDateString('es-CO')}</span>
                </div>
              </div>

              {/* TIMELINE DE ESTADOS SECUENCIALES */}
              <OrderTimeline
                currentStatus={currentOrder.status}
                statusHistory={currentOrder.statusHistory || []}
              />

              {/* Ítems del Pedido */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                  Detalle de Piezas en Fabricación
                </h4>
                <div className="space-y-2">
                  {(currentOrder.items || currentOrder.itemsSummary || []).map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl surface-subtle border border-slate-800 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center space-x-3">
                        <Package className="w-4 h-4 text-brand-400 shrink-0" />
                        <div>
                          <span className="font-bold text-white block">{item.name}</span>
                          <span className="text-muted text-[11px] font-mono">
                            Cant: {item.quantity} · Mat: {item.material || 'PLA'} · Color: {item.color || 'Blanco'}
                          </span>
                        </div>
                      </div>
                      {item.itemTotal && (
                        <span className="font-mono font-bold text-brand-400">
                          ${Number(item.itemTotal).toLocaleString('es-CO')} COP
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {currentOrder.total && (
                <div className="pt-4 border-t border-slate-800 flex justify-between items-baseline text-xs">
                  <span className="text-muted">Valor total cancelado:</span>
                  <span className="text-lg font-extrabold text-white font-mono">
                    ${Number(currentOrder.total).toLocaleString('es-CO')} COP
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16 surface-card rounded-3xl border border-slate-800 space-y-3">
              <Compass className="w-10 h-10 text-slate-500 mx-auto" />
              <h3 className="text-base font-bold text-white">Ingresa un número de pedido</h3>
              <p className="text-xs text-muted max-w-sm mx-auto">
                Puedes buscar por tu código de guía (Ej: MQ3D-882319) para ver la máquina asignada y el estado actual.
              </p>
            </div>
          )}
        </div>

        {/* Historial de pedidos del usuario logueado */}
        <div className="lg:col-span-4 space-y-4">
          <div className="surface-card p-6 rounded-3xl border border-slate-800/80 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Package className="w-4 h-4 text-brand-400" />
              <span>Mis Pedidos Registrados</span>
            </h3>

            {!isAuthenticated ? (
              <div className="p-4 rounded-xl surface-subtle text-xs text-muted space-y-2">
                <p>Inicia sesión para ver tu historial de compras de forma automática.</p>
                <button
                  onClick={() => onNavigate('login')}
                  className="text-xs font-bold text-brand-400 hover:underline block"
                >
                  Iniciar Sesión →
                </button>
              </div>
            ) : userOrders.length === 0 ? (
              <p className="text-xs text-muted">Aún no tienes pedidos registrados en tu cuenta.</p>
            ) : (
              <div className="space-y-2">
                {userOrders.map((ord) => (
                  <button
                    key={ord.id}
                    onClick={() => {
                      setCurrentOrder(ord);
                      setOrderQuery(ord.orderNumber);
                    }}
                    className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                      currentOrder?.orderNumber === ord.orderNumber
                        ? 'border-brand-500 bg-brand-500/15 text-white font-bold'
                        : 'border-slate-800 surface-subtle text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-mono font-bold text-brand-400">{ord.orderNumber}</div>
                      <div className="text-[11px] text-muted">
                        {new Date(ord.createdAt).toLocaleDateString('es-CO')} · {ord.items?.length || 1} pieza(s)
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 border border-slate-800">
                      {ord.status}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
