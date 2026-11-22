import React, { useState } from 'react';
import { AdminDashboard } from './AdminDashboard';
import { AdminProducts } from './AdminProducts';
import { AdminOrders } from './AdminOrders';
import { AdminSponsors } from './AdminSponsors';
import { AdminQuotes } from './AdminQuotes';
import { AdminProjects } from './AdminProjects';
import { AdminERPLayout } from '../../erp/AdminERPLayout';
import {
  LayoutDashboard,
  Box,
  ShoppingCart,
  Users,
  FileCode,
  FolderKanban,
  ArrowLeft,
  ShieldAlert,
  Package,
  Warehouse
} from 'lucide-react';

export const AdminLayout = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'erp' | 'projects' | 'products' | 'orders' | 'sponsors' | 'quotes'

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'erp', label: 'ERP — Compras & Inv.', icon: Package, badge: 'ERP' },
    { id: 'projects', label: 'Proyectos', icon: FolderKanban },
    { id: 'products', label: 'Productos y Modelos', icon: Box },
    { id: 'orders', label: 'Control de Pedidos', icon: ShoppingCart },
    { id: 'sponsors', label: 'Patrocinadores', icon: Users },
    { id: 'quotes', label: 'Cotizaciones 3D', icon: FileCode }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Barra de cabecera de administración */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 rounded-xl surface-subtle border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Volver a la vista pública"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-extrabold text-white">Panel de Administración Taller</h1>
            <span className="text-xs text-amber-400 font-mono font-medium">
              Maquinamos 3D · Módulo de Operaciones Industriales
            </span>
          </div>
        </div>

        {/* Pestañas de Navegación del Panel Admin */}
        <div className="flex items-center space-x-1.5 overflow-x-auto p-1 rounded-2xl surface-card border border-slate-800">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isTabActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all shrink-0 ${
                  isTabActive
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenido de la pestaña activa */}
      <div>
        {activeTab === 'dashboard' && (
          <AdminDashboard
            onNavigate={onNavigate}
            onSelectAdminTab={(tab) => setActiveTab(tab)}
          />
        )}
        {activeTab === 'erp' && <AdminERPLayout onNavigate={onNavigate} />}
        {activeTab === 'projects' && <AdminProjects />}
        {activeTab === 'products' && <AdminProducts />}
        {activeTab === 'orders' && <AdminOrders />}
        {activeTab === 'sponsors' && <AdminSponsors />}
        {activeTab === 'quotes' && <AdminQuotes />}
      </div>
    </div>
  );
};
