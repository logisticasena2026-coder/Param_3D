/**
 * MóduloManager — arquitectura de módulos estilo Odoo (Fase 0)
 * Cada módulo declara su nombre, dependencias y metadatos.
 * El orden de registro debe poner "dependencias antes de dependientes".
 */
const MODULES = [
  { id: 'base',       name: 'Base',        version: '1.0.0', dependsOn: [] },
  { id: 'proveedores',name: 'Proveedores', version: '1.0.0', dependsOn: ['base'] },
  { id: 'inventario', name: 'Inventario',  version: '1.0.0', dependsOn: ['base'] },
  { id: 'compras',    name: 'Compras',     version: '1.0.0', dependsOn: ['base', 'inventario', 'proveedores'] },
  { id: 'ventas',     name: 'Ventas',      version: '1.0.0', dependsOn: ['base', 'compras', 'proveedores'] },
  { id: 'facturacion',name: 'Facturación', version: '1.0.0', dependsOn: ['compras', 'ventas'] }
];

class ModuleManager {
  constructor() {
    this.modules = [];
  }

  registerModule(moduleDef) {
    if (!moduleDef || !moduleDef.id) throw new Error('Definición de módulo inválida');
    const missingDeps = (moduleDef.dependsOn || []).filter(d => !this.hasModule(d));
    if (missingDeps.length) {
      throw new Error(`Módulo ${moduleDef.id} depende de ${missingDeps.join(', ')} que no está registrado.`);
    }
    this.modules.push(moduleDef);
    return moduleDef;
  }

  getModule(id) {
    return this.modules.find(m => m.id === id) || null;
  }

  hasModule(id) {
    return Boolean(this.getModule(id));
  }

  isModuleReady(id) {
    const mod = this.getModule(id);
    if (!mod) return false;
    return (mod.dependsOn || []).every(d => this.hasModule(d));
  }

  getModules() {
    return this.modules;
  }

  getModuleIds() {
    return this.modules.map(m => m.id);
  }
}

const MODULE_MANAGER = new ModuleManager();
MODULES.forEach(m => MODULE_MANAGER.registerModule(m));

module.exports = { MODULE_MANAGER, Modules: MODULES };
