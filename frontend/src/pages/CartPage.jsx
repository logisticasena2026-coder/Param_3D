import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { apiClient } from '../api/client';
import {
  ShoppingBag,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  AlertCircle
} from 'lucide-react';

export const CartPage = ({ onNavigate }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartSubtotal } = useCart();
  const { isAuthenticated, user } = useAuth();

  const [address, setAddress] = useState({
    city: 'Medellín',
    street: '',
    phone: user?.phone || '3005076700',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const shippingCost = cartSubtotal > 150000 || cartSubtotal === 0 ? 0 : 12000;
  const total = cartSubtotal + shippingCost;

  const handleCheckout = async (e) => {
    e.preventDefault();
    setError(null);

    // Requisito 6: Todos los usuarios deben registrarse para comprar
    if (!isAuthenticated) {
      onNavigate('login', { redirect: 'cart' });
      return;
    }

    if (!address.street) {
      setError('Por favor indica la dirección de entrega.');
      return;
    }

    setSubmitting(true);
    try {
      const orderPayload = {
        items: cartItems.map(item => ({
          productId: item.productId,
          name: item.name,
          category: item.category,
          material: item.material,
          color: item.color,
          price: item.price,
          quantity: item.quantity,
          imageUrl: item.imageUrl
        })),
        shippingAddress: {
          city: address.city,
          address: address.street,
          phone: address.phone
        },
        notes: address.notes,
        paymentMethod: 'Transferencia Bancolombia / Nequi / Contra Entrega'
      };

      const res = await apiClient.request('/orders', {
        method: 'POST',
        body: JSON.stringify(orderPayload)
      });

      clearCart();
      // Redirigir a seguimiento con el número de pedido recién creado
      onNavigate('tracking', { orderNumber: res.order.orderNumber });
    } catch (err) {
      setError(err.message || 'Error al procesar el pedido. Intente nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto my-16 p-8 surface-card rounded-3xl border border-slate-800 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-400 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-white">Tu carrito está vacío</h2>
        <p className="text-xs text-muted max-w-sm mx-auto">
          Explora nuestro catálogo de impresión 3D, router CNC, avisos y piezas metálicas para agregar tus primeros productos.
        </p>
        <button
          onClick={() => onNavigate('catalog')}
          className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl text-xs transition-colors"
        >
          Ir al Catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-xs font-mono font-bold tracking-wider text-brand-400 uppercase">
          Finalización de Compra
        </span>
        <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">
          Carrito de Compras y Pedido
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Lista de productos en el carrito */}
        <div className="lg:col-span-7 space-y-4">
          <div className="surface-card rounded-2xl border border-slate-800/80 overflow-hidden divide-y divide-slate-800">
            {cartItems.map((item) => (
              <div key={item.itemKey} className="p-4 sm:p-5 flex items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">{item.name}</h4>
                    
                    {/* Combinación Material + Color */}
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      <span className="px-2 py-0.5 rounded bg-brand-500/15 border border-brand-500/30 text-[11px] font-mono text-brand-400 font-semibold">
                        Mat: {item.material}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                        Color: {item.color}
                      </span>
                    </div>

                    <span className="text-xs font-extrabold text-brand-400 block mt-2">
                      ${Number(item.price).toLocaleString('es-CO')} COP
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {/* Selector de cantidad */}
                  <div className="flex items-center border border-slate-800 rounded-lg overflow-hidden surface-subtle text-xs">
                    <button
                      onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                      className="px-2.5 py-1 text-slate-400 hover:text-white"
                    >
                      -
                    </button>
                    <span className="px-2.5 py-1 font-mono font-bold text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                      className="px-2.5 py-1 text-slate-400 hover:text-white"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.itemKey)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => onNavigate('catalog')}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continuar explorando el catálogo</span>
          </button>
        </div>

        {/* Resumen y Formulario de Envío */}
        <div className="lg:col-span-5 space-y-6">
          <div className="surface-card p-6 rounded-3xl border border-slate-800/80 space-y-6">
            <h3 className="text-base font-bold text-white">Resumen del Pedido</h3>

            <div className="space-y-2 text-xs border-b border-slate-800 pb-4">
              <div className="flex justify-between text-muted">
                <span>Subtotal de productos:</span>
                <span className="font-mono text-white">${cartSubtotal.toLocaleString('es-CO')} COP</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Envío nacional / local:</span>
                <span className="font-mono text-white">
                  {shippingCost === 0 ? '¡GRATIS!' : `$${shippingCost.toLocaleString('es-CO')} COP`}
                </span>
              </div>
              {shippingCost > 0 && (
                <p className="text-[10px] text-brand-400">
                  * Envío gratis para compras superiores a $150.000 COP
                </p>
              )}
            </div>

            <div className="flex justify-between items-baseline text-base font-bold text-white">
              <span>Total a Pagar:</span>
              <span className="text-2xl font-extrabold text-brand-400 font-mono">
                ${total.toLocaleString('es-CO')} COP
              </span>
            </div>

            {/* Aviso de autenticación obligatoria */}
            {!isAuthenticated ? (
              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs space-y-3">
                <div className="flex items-center space-x-2 font-bold">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Registro Obligatorio para Comprar</span>
                </div>
                <p>
                  Por políticas de trazabilidad y asignación de cola de impresión, debes registrarte o iniciar sesión para completar la compra.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('login', { redirect: 'cart' })}
                  className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                >
                  Iniciar Sesión o Crear Cuenta
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted block">
                    Datos de Entrega (Taller o Domicilio)
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Ciudad (Ej. Medellín, Envigado, Bogotá)"
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Dirección exacta o 'Retiro en Taller Maquinamos 3D'"
                      value={address.street}
                      onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Teléfono de contacto / WhatsApp"
                      value={address.phone}
                      onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Notas adicionales para el operador de impresión (opcional)"
                      value={address.notes}
                      onChange={(e) => setAddress({ ...address, notes: e.target.value })}
                      rows="2"
                      className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center space-x-2"
                >
                  {submitting ? (
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirmar Compra (Iniciar en "Pedido")</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-muted text-center leading-relaxed">
                  Al confirmar, se genera el registro con estado inicial <strong>Pedido</strong> y podrás seguir el progreso en vivo en el taller.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
