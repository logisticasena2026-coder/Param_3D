import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useThemePreferences } from '../context/ThemePreferencesContext';
import {
  Box,
  Layers,
  Sparkles,
  ShoppingBag,
  User,
  Shield,
  Palette,
  Menu,
  X,
  Compass,
  FileCode,
  Users,
  Building2,
  Search
} from 'lucide-react';

export const Navbar = ({ currentPath, onNavigate }) => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { cartCount } = useCart();
  const { setIsThemeModalOpen } = useThemePreferences();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'catalog', label: 'Catálogo', icon: Box },
    { id: 'quote', label: 'Cotizador 3D', icon: FileCode },
    { id: 'ai-design', label: 'Diseño IA', icon: Sparkles, badge: 'IA' },
    { id: 'tracking', label: 'Seguimiento', icon: Compass },
    { id: 'special-services', label: 'Servicios Especiales', icon: Layers },
    { id: 'sponsors', label: 'Patrocinadores', icon: Users },
    { id: 'institutional', label: 'Institucional', icon: Building2 }
  ];

  const handleLinkClick = (pageId, query = null) => {
    onNavigate(pageId, query);
    setMobileMenuOpen(false);
    setCatalogDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full surface-card border-b border-slate-800/80 backdrop-blur-md bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-cyan-300 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Box className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight block leading-none">
                MAQUINAMOS<span className="text-brand-500 ml-1">3D</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-muted uppercase">
                Fabricación Digital · CNC · Metal
              </span>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPath === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    isActive
                      ? 'bg-brand-500/15 text-brand-400 border border-brand-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="bg-brand-500 text-slate-950 text-[9px] px-1.5 py-0.2 rounded font-extrabold">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Acciones Derecha (Tema, Carrito, Usuario/Admin) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Botón personalizador de interfaz */}
            <button
              onClick={() => setIsThemeModalOpen(true)}
              title="Personalizar colores y tipografía"
              className="p-2 sm:p-2.5 rounded-xl text-slate-300 hover:text-brand-400 hover:bg-slate-900 border border-slate-800 transition-colors"
            >
              <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Carrito de compras */}
            <button
              onClick={() => handleLinkClick('cart')}
              className="relative p-2 sm:p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-500 text-slate-950 text-[11px] font-extrabold rounded-full flex items-center justify-center ring-2 ring-slate-950 animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Módulo Admin */}
            {isAdmin && (
              <button
                onClick={() => handleLinkClick('admin')}
                className={`hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  currentPath.startsWith('admin')
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Panel Admin</span>
              </button>
            )}

            {/* Auth Button */}
            {isAuthenticated ? (
              <div className="relative group">
                <button
                  onClick={() => handleLinkClick('tracking')}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-xl border border-slate-800 hover:border-slate-700 surface-subtle text-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <span className="hidden md:inline font-medium text-slate-200">
                    {user?.name?.split(' ')[0]}
                  </span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleLinkClick('login')}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-brand-500/20"
              >
                Ingresar
              </button>
            )}

            {/* Botón Menú Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden surface-card border-b border-slate-800 p-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-brand-400" />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="bg-brand-500 text-slate-950 text-[10px] px-2 py-0.5 rounded font-bold">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}

          {isAdmin && (
            <button
              onClick={() => handleLinkClick('admin')}
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30"
            >
              <Shield className="w-5 h-5" />
              <span>Panel de Administración</span>
            </button>
          )}

          {isAuthenticated && (
            <button
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs text-rose-400 hover:bg-rose-950/20 rounded-xl"
            >
              Cerrar Sesión ({user?.email})
            </button>
          )}
        </div>
      )}
    </header>
  );
};
