import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Box, Lock, Mail, User, Phone, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const LoginPage = ({ initialMode = 'login', redirectPath = 'home', onNavigate }) => {
  const { login, register } = useAuth();
  const [isRegister, setIsRegister] = useState(initialMode === 'register');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isRegister) {
        await register(formData.name, formData.email, formData.password, formData.phone);
      } else {
        await login(formData.email, formData.password);
      }
      onNavigate(redirectPath);
    } catch (err) {
      setError(err.message || 'Error en la autenticación.');
    } finally {
      setLoading(false);
    }
  };

  const fillQuickCredentials = (role) => {
    if (role === 'admin') {
      setFormData({
        name: 'Mauricio Montalvo (Admin)',
        email: 'mmontalvova@gmail.com',
        password: 'Admin123*',
        phone: '3005076700'
      });
      setIsRegister(false);
    } else {
      setFormData({
        name: 'Carlos Mendoza',
        email: 'cliente@maquinamos3d.com',
        password: 'Cliente123*',
        phone: '3109876543'
      });
      setIsRegister(false);
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md surface-card border border-slate-800/80 rounded-3xl p-8 shadow-2xl space-y-6">
        
        {/* Encabezado */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-300 flex items-center justify-center text-slate-950 mx-auto shadow-lg shadow-brand-500/20">
            <Box className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            {isRegister ? 'Crear Cuenta de Cliente' : 'Iniciar Sesión'}
          </h2>
          <p className="text-xs text-muted">
            {isRegister
              ? 'Regístrate para comprar piezas, descargar STL y rastrear tus órdenes.'
              : 'Accede a tu panel y gestión de fabricación digital en Maquinamos 3D.'}
          </p>
        </div>

        {/* Botones de Credenciales de Demostración Rápidas */}
        <div className="p-3 rounded-xl surface-subtle border border-slate-800 text-[11px] space-y-2">
          <span className="text-muted block text-center font-bold uppercase tracking-wider">
            Accesos de Prueba Disponibles:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => fillQuickCredentials('admin')}
              className="py-1.5 px-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold hover:bg-amber-500/25 transition-colors"
            >
              Cargar Admin
            </button>
            <button
              type="button"
              onClick={() => fillQuickCredentials('client')}
              className="py-1.5 px-2 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-bold hover:bg-cyan-500/25 transition-colors"
            >
              Cargar Cliente
            </button>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                Nombre Completo
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                Teléfono de Contacto (WhatsApp)
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="tel"
                  placeholder="3005076700"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 font-mono"
                />
              </div>
            </div>
          )}

          {error && (
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-brand-500/25"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>{isRegister ? 'Registrarme y Continuar' : 'Entrar a mi Cuenta'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-slate-800">
          <button
            type="button"
            onClick={() => {
              setIsRegister(!isRegister);
              setError(null);
            }}
            className="text-xs text-brand-400 hover:text-brand-300 font-semibold"
          >
            {isRegister
              ? '¿Ya tienes una cuenta? Inicia sesión aquí'
              : '¿No tienes cuenta aún? Regístrate aquí para comprar'}
          </button>
        </div>

      </div>
    </div>
  );
};
