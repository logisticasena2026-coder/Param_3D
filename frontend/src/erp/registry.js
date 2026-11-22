/**
 * ModuleRegistry — arquitectura de módulos estilo Odoo (frontend)
 * Cada módulo declara {id, name, icon, version, summary, dependsOn, component, componentProps}.
 * El ModuleProvisioner renderiza solo los módulos activos y verifica dependencias.
 */

class ModuleRegistry {
  constructor() {
    this.modules = [];
    this.activeModule = null;
  }

  // Registro (debe usarse a partir de dependencias; pero la UI adapta al orden registro)
  registerModule(moduleDef) {
    if (!moduleDef || !moduleDef.id) throw new Error('Definición de módulo inválida');
    this.modules = this.modules.filter(m => m.id !== moduleDef.id);
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

  getActiveModule() {
    return this.getModule(this.activeModule) || null;
  }

  setActiveModule(id) {
    this.activeModule = id;
    this.emit();
  }

  listeners = [];
  onChange(fn) {
    this.listeners.push(fn);
    return () => { this.listeners = this.listeners.filter(l => l !== fn); };
  }
  emit() {
    this.listeners.forEach(l => l());
  }
}

import React, { useState, useEffect } from 'react';

export const MODULE_REGISTRY = new ModuleRegistry();
export const Modules = MODULE_REGISTRY;

// ---------------------------------------------------------------------
// Portal de módulos (estilo Odoo): hook reactivo al registro
// ---------------------------------------------------------------------

/**
 * useModules — Subscripción reactiva al registro de módulos.
 * Cada registerModule() emite cambio y los componentes se re-renderizan
 * con los módulos disponibles.
 */
export const useModules = () => {
  const [, setVersion] = useState(0);
  useEffect(() => MODULE_REGISTRY.onChange(() => setVersion(v => v + 1)), []);
  return MODULE_REGISTRY;
};

export const useAvailableModules = () => {
  useModules();
  return MODULE_REGISTRY.modules;
};

export const useActiveModule = () => {
  useModules();
  return MODULE_REGISTRY.getActiveModule();
};
