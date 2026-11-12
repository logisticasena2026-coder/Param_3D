import React from 'react';
import { useThemePreferences } from '../context/ThemePreferencesContext';
import { X, Moon, Sun, Check, Palette, Type } from 'lucide-react';

const PALETTES = [
  { id: 'cyan', name: 'Cian Industrial (Orca)', color: '#06b6d4', class: 'bg-cyan-500' },
  { id: 'emerald', name: 'Verde Esmeralda', color: '#10b981', class: 'bg-emerald-500' },
  { id: 'orange', name: 'Naranja Prototipo', color: '#f97316', class: 'bg-orange-500' },
  { id: 'purple', name: 'Púrpura Neón', color: '#a855f7', class: 'bg-purple-500' },
  { id: 'amber', name: 'Ámbar Láser', color: '#f59e0b', class: 'bg-amber-500' }
];

const FONT_SIZES = [
  { id: 'sm', label: 'Compacta', desc: '14px - Máxima densidad de datos' },
  { id: 'md', label: 'Estándar', desc: '16px - Balance equilibrado' },
  { id: 'lg', label: 'Amplia', desc: '18px - Mayor legibilidad técnica' }
];

export const ThemeModal = () => {
  const {
    theme,
    setTheme,
    palette,
    setPalette,
    fontSize,
    setFontSize,
    isThemeModalOpen,
    setIsThemeModalOpen
  } = useThemePreferences();

  if (!isThemeModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md surface-card border border-slate-700/80 rounded-2xl p-6 shadow-2xl relative">
        <button
          onClick={() => setIsThemeModalOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2.5 bg-brand-500/10 text-brand-500 rounded-xl border border-brand-500/20">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Personalización de Interfaz</h3>
            <p className="text-xs text-muted">Ajusta paletas, contraste y tipografía a tu gusto.</p>
          </div>
        </div>

        {/* 1. Modo de contraste */}
        <div className="mb-6">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2.5 block">
            Modo de Pantalla
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${
                theme === 'dark'
                  ? 'border-brand-500 bg-brand-500/10 text-brand-400 shadow-md'
                  : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Modo Oscuro</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${
                theme === 'light'
                  ? 'border-brand-500 bg-brand-500/10 text-brand-600 shadow-md'
                  : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Modo Claro</span>
            </button>
          </div>
        </div>

        {/* 2. Paleta de colores */}
        <div className="mb-6">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2.5 block">
            Paleta de Acentos de Color
          </label>
          <div className="space-y-2">
            {PALETTES.map((p) => {
              const isSelected = palette === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPalette(p.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-sm transition-all ${
                    isSelected
                      ? 'border-brand-500 bg-brand-500/10 font-semibold'
                      : 'border-slate-800/80 hover:border-slate-700 surface-subtle'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`w-4 h-4 rounded-full ${p.class} shadow-sm`} />
                    <span>{p.name}</span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-brand-500" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Escala tipográfica */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2.5">
            <Type className="w-4 h-4 text-brand-500" />
            <label className="text-xs font-semibold uppercase tracking-wider text-muted block">
              Tamaño de Tipografía
            </label>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {FONT_SIZES.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFontSize(f.id)}
                className={`py-2 px-2 rounded-xl border text-center transition-all ${
                  fontSize === f.id
                    ? 'border-brand-500 bg-brand-500/10 text-brand-400 font-bold'
                    : 'border-slate-800 surface-subtle text-slate-400 hover:border-slate-700 text-xs'
                }`}
              >
                <div className="text-xs font-semibold">{f.label}</div>
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsThemeModalOpen(false)}
          className="w-full py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl transition-colors shadow-lg shadow-brand-500/25"
        >
          Aplicar y Cerrar
        </button>
      </div>
    </div>
  );
};
