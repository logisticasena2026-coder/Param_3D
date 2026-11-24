import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Package,
  Box,
  ShoppingCart,
  Users,
  FileCode,
  FolderKanban,
  Store,
  Wallet,
  Briefcase,
  HandHeart,
  ArrowLeft
} from 'lucide-react';

// Menu vertical de la izquierda, estilo ERP (Maquinamos 3D)
export const ADMIN_TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'erp', label: 'ERP — Compras', icon: Package, badge: 'ERP' },
  { id: 'ventas', label: 'ERP — Ventas', icon: Store, badge: 'VTA' },
  { id: 'clientes', label: 'Clientes', icon: Wallet, badge: 'CRM' },
  { id: 'canales', label: 'Canales', icon: Briefcase },
  { id: 'devoluciones', label: 'Devoluciones', icon: HandHeart },
  { id: 'projects', label: 'Proyectos', icon: FolderKanban },
  { id: 'products', label: 'Productos y Modelos', icon: Box },
  { id: 'orders', label: 'Control de Pedidos', icon: ShoppingCart },
  { id: 'sponsors', label: 'Patrocinadores', icon: Users },
  { id: 'quotes', label: 'Cotizaciones 3D', icon: FileCode }
];

export const AdminSidebar = ({ activeTab, setActiveTab, onNavigate }) => {
  const { user } = useAuth();

  return (
    <aside
      className="sticky top-16 w-64 h-[calc(100vh-4rem)] z-30 border-r border-slate-800/60 bg-slate-950/95 backdrop-blur-md shrink-0"
      aria-label="Menu vertical del panel de administración"
    >
      <div className="flex flex-col h-full">
        {/* Marca */}
        <div className="flex items-center space-x-2.5 p-4 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 via-brand-500 to-cyan-300 flex items-center justify-center shadow-lg shadow-brand-500/20">
            <Store className="w-4.5 h-4.5 text-slate-950 stroke-[2.5]" />
          </div>
          <div className="min-w-0">
            <span className="text-sm font-extrabold text-white leading-tight block">
              MAQUINAMOS<span className="text-brand-500">3D</span>
            </span>
            <span className="text-[10px] font-mono tracking-wider text-muted uppercase">
              Módulo de Operaciones Industriales
            </span>
          </div>
        </div>

        {/* Navegación vertical */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {ADMIN_TABS.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center space-x-2.5 transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                <Icon className={`w-4.5 h-4.5 shrink-0 ${isActive ? '' : 'text-amber-400'}`} />
                <span className="text-xs font-bold truncate flex-1">{t.label}</span>
                {t.badge && (
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded shrink-0 ${
                    isActive ? 'bg-slate-950/60 text-slate-950' : 'bg-brand-500 text-slate-950'
                  }`}>
                    {t.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Pie: identidad del admin */}
        <div className="p-3 border-t border-slate-800 flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center font-extrabold text-xs">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div className="min-w-0">
            <span className="text-xs font-bold text-white block truncate">{user?.name}</span>
            <span className="text-[10px] text-muted font-mono uppercase">{user?.role === 'admin' ? 'Administrador' : 'Usuario'}</span>
          </div>
          <button
            onClick={() => onNavigate('home')}
            title="Volver a la vista pública"
            className="ml-auto p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            aria-label="Volver al inicio"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
