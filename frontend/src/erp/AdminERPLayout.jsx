import React, { useState, useEffect } from 'react';
import { useModules, MODULE_REGISTRY } from './registry';
import { Package, Warehouse, ArrowLeft } from 'lucide-react';
import { AdminProveedores } from './modules/compras/AdminProveedores';
import { AdminInventario } from './modules/compras/AdminInventario';
import { AdminCompras } from './modules/compras/AdminCompras';

const MODULE_ICONS = {
  proveedores: Package,
  inventario: Warehouse,
  compras: Package
};

/**
 * AdminERPLayout — Layout de AdminERP (Módulo Compra: proveedores, inventario, compras)
 * Renderiza un sidebar de módulos seleccionable y cada módulo en su ruta.
 */
export const AdminERPLayout = ({ onNavigate, initialModule = 'proveedores' }) => {
  const registry = useModules();
  const [active, setActive] = useState(initialModule);

  useEffect(() => {
    // Registro de módulos (acceso al catálogo de módulos)
    registry.registerModule({
      id: 'proveedores',
      name: 'Proveedores',
      icon: Package,
      version: '1.0.0',
      summary: 'Gestiona proveedores de insumos, materiales y servicios con contacto y categorización.',
      dependsOn: ['base'],
      component: AdminProveedores
    });
    registry.registerModule({
      id: 'inventario',
      name: 'Inventario',
      icon: Warehouse,
      version: '1.0.0',
      summary: ' stocks reales, alertas de nivel, registro de lotes con series y ciclos de vida.',
      dependsOn: ['base', 'proveedores'],
      component: AdminInventario
    });
    registry.registerModule({
      id: 'compras',
      name: 'Compras',
      icon: Package,
      version: '1.0.0',
      summary: 'Pedidos de Compra: Borrador → Aprobado → En tránsito → Recibido. El recibir actualiza stock.',
      dependsOn: ['base', 'inventario', 'proveedores'],
      component: AdminCompras
    });
    registry.setActiveModule(initialModule);
  }, []);

  // Sincronizar cuando active se cambia
  useEffect(() => {
    registry.setActiveModule(active);
  }, [active, registry]);

  // Recalcular los módulos activos en cada render (registrados en useEffect)
  const modules = registry.getModules().filter(m => registry.isModuleReady(m.id));
  const activeModule = modules.find(m => m.id === active) || modules[0] || null;

  const ActiveComponent = activeModule?.component;

  return (
    <div className="min-h-[calc(100vh-10rem)] space-y-6 animate-fadeIn">
      {/* Header: back + título del módulo activo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigate('admin')}
            className="p-2 rounded-xl surface-subtle border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Volver al Admin Panel"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-extrabold text-white">Módulo {activeModule?.name || 'Sin módulo activo'}</h1>
            <span className="text-xs text-amber-400 font-mono font-medium">
              {activeModule?.summary || ''} · v{activeModule?.version || '0'}
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar: módulos activos */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-5">
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2">Módulos activos</h4>
          <div className="space-y-2">
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className={`w-full text-left px-3 py-3 rounded-xl transition-all flex items-start space-x-2.5 ${
                    activeModule?.id === m.id
                      ? 'bg-brand-500 text-slate-950 shadow-md border border-brand-500/80'
                      : 'border border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <Icon className={`w-4.5 h-4.5 mt-0.5 ${activeModule?.id === m.id ? 'text-slate-950' : 'text-amber-400'}`} />
                  <div className="min-w-0">
                    <div className={`text-xs font-extrabold mt-0.5 ${activeModule?.id === m.id ? 'text-slate-950' : 'text-slate-200'}`}>{m.name}</div>
                    <div className="text-[10px] leading-tight">{m.version ? `v${m.version}` : '—'} · {m.id.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join('')}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="rounded-2xl border border-slate-800 surface-card min-h-[480px]">
          {ActiveComponent ? (
            <ActiveComponent />
          ) : (
            <div className="flex items-center justify-center py-20 text-sm text-muted">
              Selecciona un módulo en la barra lateral para ver su contenido.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminERPLayout;
