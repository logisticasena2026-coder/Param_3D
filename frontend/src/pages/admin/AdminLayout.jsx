import React, { useState } from 'react';
import { AdminDashboard } from './AdminDashboard';
import { AdminProducts } from './AdminProducts';
import { AdminOrders } from './AdminOrders';
import { AdminVentas } from '../../erp/modules/ventas/AdminVentas';
import { AdminClientes } from '../../erp/modules/ventas/AdminClientes';
import { AdminCanales } from '../../erp/modules/ventas/AdminCanales';
import { AdminDevolucions } from '../../erp/modules/ventas/AdminDevolucions';
import { AdminSponsors } from './AdminSponsors';
import { AdminQuotes } from './AdminQuotes';
import { AdminProjects } from './AdminProjects';
import { AdminERPLayout } from '../../erp/AdminERPLayout';
import { ArrowLeft } from 'lucide-react';
import { AdminSidebar } from '../../components/AdminSidebar';

export const AdminLayout = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'erp' | 'ventas' | 'clientes' | 'canales' | 'devoluciones' | 'projects' | 'products' | 'orders' | 'sponsors' | 'quotes'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 flex min-h-[calc(100vh-10rem)] gap-6">
      {/* Sidebar vertical de la izquierda, estilo ERP (siempre visible) */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigate={onNavigate}
      />

      <div className="flex-1 min-w-0 space-y-8">
        {/* Barra de cabecera de administración */}
        <div className="flex items-center space-x-3 pb-5 border-b border-slate-800">
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

        {/* Contenido de la pestaña activa */}
        <div>
          {activeTab === 'dashboard' && (
            <AdminDashboard
              onNavigate={onNavigate}
              onSelectAdminTab={(tab) => setActiveTab(tab)}
            />
          )}
          {activeTab === 'erp' && <AdminERPLayout onNavigate={onNavigate} />}
          {activeTab === 'ventas' && <AdminVentas />}
          {activeTab === 'clientes' && <AdminClientes />}
          {activeTab === 'canales' && <AdminCanales />}
          {activeTab === 'devoluciones' && <AdminDevolucions />}
          {activeTab === 'projects' && <AdminProjects />}
          {activeTab === 'products' && <AdminProducts />}
          {activeTab === 'orders' && <AdminOrders />}
          {activeTab === 'sponsors' && <AdminSponsors />}
          {activeTab === 'quotes' && <AdminQuotes />}
        </div>
      </div>
    </div>
  );
};
