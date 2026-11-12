import React, { useState, useEffect } from 'react';
import { apiClient } from '../../api/client';
import {
  Shield,
  Box,
  ShoppingCart,
  Users,
  FileCode,
  ArrowRight,
  Clock,
  TrendingUp,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const AdminDashboard = ({ onNavigate, onSelectAdminTab }) => {
  const [stats, setStats] = useState({
    productsCount: 0,
    ordersCount: 0,
    pendingOrdersCount: 0,
    sponsorsCount: 0,
    quotesCount: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [products, orders, sponsors, quotes] = await Promise.all([
        apiClient.request('/products'),
        apiClient.request('/orders/admin/all'),
        apiClient.request('/sponsors'),
        apiClient.request('/quotes/admin/all')
      ]);

      const pending = orders.filter(o => o.status !== 'Entregado').length;

      setStats({
        productsCount: products.length,
        ordersCount: orders.length,
        pendingOrdersCount: pending,
        sponsorsCount: sponsors.length,
        quotesCount: quotes.length
      });
    } catch (err) {
      console.error('Error cargando estadísticas admin:', err);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: 'Órdenes en Taller',
      value: stats.ordersCount,
      sub: `${stats.pendingOrdersCount} activas en máquina`,
      icon: ShoppingCart,
      color: 'text-brand-400 bg-brand-500/10 border-brand-500/30',
      tab: 'orders'
    },
    {
      title: 'Catálogo de Productos',
      value: stats.productsCount,
      sub: 'Impresión 3D, CNC, Avisos, Metal',
      icon: Box,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      tab: 'products'
    },
    {
      title: 'Cotizaciones 3D',
      value: stats.quotesCount,
      sub: 'Archivos subidos por clientes',
      icon: FileCode,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      tab: 'quotes'
    },
    {
      title: 'Patrocinadores Activos',
      value: stats.sponsorsCount,
      sub: 'Empresas y aliados de insumos',
      icon: Users,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      tab: 'sponsors'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Título */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
            Centro de Control de Manufactura
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Panel de Administración Maquinamos 3D
          </h1>
          <p className="text-xs text-muted mt-1">
            Gestión técnica de inventario, cambio de estados en orden estricto de pedidos y aliados.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-xl border border-amber-500/30 w-fit">
          <Shield className="w-4 h-4" />
          <span>Sesión de Administrador Autorizada</span>
        </div>
      </div>

      {/* Tarjetas de Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              onClick={() => onSelectAdminTab(card.tab)}
              className="surface-card p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl border ${card.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>

              <div className="text-2xl font-extrabold text-white font-mono">
                {card.value}
              </div>
              <h4 className="text-xs font-bold text-slate-300 mt-1">{card.title}</h4>
              <span className="text-[11px] text-muted block mt-0.5">{card.sub}</span>
            </div>
          );
        })}
      </div>

      {/* Regla Operativa Estricta de Estados de Pedido */}
      <div className="surface-card p-6 rounded-3xl border border-brand-500/30 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center space-x-2">
          <Clock className="w-4 h-4 text-brand-400" />
          <span>Flujo Secuencial Obligatorio de Pedidos en Taller</span>
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Para garantizar la trazabilidad del cliente, el taller actualiza los pedidos respetando la secuencia obligatoria:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-xl surface-subtle border border-slate-800 text-xs">
            <strong className="text-cyan-400 block font-mono">1. Pedido</strong>
            <span className="text-muted text-[11px]">Recepción de compra y verificación de malla.</span>
          </div>
          <div className="p-3 rounded-xl surface-subtle border border-slate-800 text-xs">
            <strong className="text-brand-400 block font-mono">2. Preparado</strong>
            <span className="text-muted text-[11px]">Laminación Slicer y calentamiento de extrusor.</span>
          </div>
          <div className="p-3 rounded-xl surface-subtle border border-slate-800 text-xs">
            <strong className="text-emerald-400 block font-mono">3. Terminado</strong>
            <span className="text-muted text-[11px]">Impresión completa, despegado y curado.</span>
          </div>
          <div className="p-3 rounded-xl surface-subtle border border-slate-800 text-xs">
            <strong className="text-purple-400 block font-mono">4. Entregado</strong>
            <span className="text-muted text-[11px]">Retiro en mostrador o remitido con guía.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
