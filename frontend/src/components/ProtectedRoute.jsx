import React from 'react';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children, requireAdminRole = false, onRedirect }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 surface-card rounded-2xl border border-slate-800 text-center space-y-4">
        <h3 className="text-lg font-bold text-white">Inicio de Sesión Requerido</h3>
        <p className="text-xs text-muted">
          Debes estar registrado e iniciar sesión para acceder a esta sección o completar una compra.
        </p>
        <button
          onClick={() => onRedirect('login')}
          className="w-full py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl text-sm transition-colors"
        >
          Ir a Iniciar Sesión / Registro
        </button>
      </div>
    );
  }

  if (requireAdminRole && user?.role !== 'admin') {
    return (
      <div className="max-w-md mx-auto my-16 p-8 surface-card rounded-2xl border border-rose-900/50 text-center space-y-4">
        <h3 className="text-lg font-bold text-rose-400">Acceso No Autorizado</h3>
        <p className="text-xs text-muted">
          Esta vista está reservada exclusivamente para el equipo de administración de Maquinamos 3D.
        </p>
        <button
          onClick={() => onRedirect('home')}
          className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition-colors"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  return children;
};
