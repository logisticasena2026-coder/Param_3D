import React from 'react';
import { Box, Phone, Mail, MapPin, Clock, Award, ShieldCheck, Heart } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="surface-card border-t border-slate-800/80 mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Columna 1: Identidad */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-300 flex items-center justify-center text-slate-950">
                <Box className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                MAQUINAMOS<span className="text-brand-500 ml-1">3D</span>
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Taller de ingeniería y manufactura digital avanzada. Especialistas en impresión 3D FDM de gran formato (36 × 36 × 36 cm), tallado CNC en madera, avisos luminosos en neón flex y corte de metales.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-brand-400">
              <Award className="w-4 h-4" />
              <span>Precisión dimensional y calibración industrial</span>
            </div>
          </div>

          {/* Columna 2: Líneas de Fabricación */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Líneas de Producción
            </h4>
            <ul className="space-y-2.5 text-xs text-muted">
              <li>
                <button
                  onClick={() => onNavigate('catalog', { category: 'Impresión 3D' })}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Impresión 3D (PETG, PLA, ABS, TPU hasta 36cm)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', { category: 'Router CNC' })}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Router CNC Madera (100 × 75 × 15 cm)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', { category: 'Avisos' })}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Avisos en Acrílico y Neón Flex (Cualquier tamaño)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', { category: 'Metal' })}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Corte Metal (Hierro al carbón 3cm / Acero Inox 2cm)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('special-services')}
                  className="hover:text-brand-400 transition-colors text-left text-brand-400"
                >
                  Maquetas Arquitectónicas y Servicios Especiales →
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Empresa e Institucional */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Institucional y Alianzas
            </h4>
            <ul className="space-y-2.5 text-xs text-muted">
              <li>
                <button onClick={() => onNavigate('institutional')} className="hover:text-brand-400 transition-colors">
                  Misión y Visión
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('institutional')} className="hover:text-brand-400 transition-colors">
                  Política de Calidad y Objetivos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sponsors')} className="hover:text-brand-400 transition-colors">
                  Empresas Patrocinadoras y Aliados
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-design')} className="hover:text-brand-400 transition-colors">
                  Generador Paramétrico con IA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tracking')} className="hover:text-brand-400 transition-colors">
                  Rastreo en Vivo de Pedidos
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto Oficial y Ubicación */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contacto y Taller
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href="tel:3005076700"
                className="flex items-center space-x-2.5 hover:text-brand-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-brand-400 group-hover:border-brand-500/40">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-muted">Línea de Atención Directa</span>
                  <span className="font-bold text-sm">Tel. 3005076700</span>
                </div>
              </a>

              <a
                href="mailto:mmontalvova@gmail.com"
                className="flex items-center space-x-2.5 hover:text-brand-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-brand-400 group-hover:border-brand-500/40">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-muted">Correo Corporativo</span>
                  <span className="font-mono text-xs">mmontalvova@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center space-x-2.5 text-muted">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <Clock className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <span className="block text-[10px] text-muted">Horario de Producción</span>
                  <span>Lunes a Sábado: 8:00 AM - 6:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
          <p>© {new Date().getFullYear()} Maquinamos 3D · Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6">
            <span>Fabricación Digital Confiable</span>
            <span>·</span>
            <span className="font-mono text-brand-400">Medellín, Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
