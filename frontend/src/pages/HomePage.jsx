import React from 'react';
import {
  Box,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Flame,
  CheckCircle2,
  Clock,
  Compass,
  FileCode,
  Zap,
  Phone
} from 'lucide-react';
import { OrcaSlicerCanvas } from '../components/OrcaSlicerCanvas';

export const HomePage = ({ onNavigate }) => {
  const categories = [
    {
      id: 'Impresión 3D',
      title: 'Impresión 3D Técnica',
      specs: 'PETG · PLA · ABS · TPU (Hasta 36 × 36 × 36 cm)',
      desc: 'Prototipos mecánicos y piezas decorativas con alta resistencia térmica y mecánica.',
      icon: Box,
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20'
    },
    {
      id: 'Router CNC',
      title: 'Router CNC Madera',
      specs: 'Puertas · Biombos · Celosías (100 × 75 × 15 cm)',
      desc: 'Tallado tridimensional en cedro, roble y tableros decorativos con acabado milimétrico.',
      icon: Layers,
      accent: 'border-amber-500/30 text-amber-400 bg-amber-950/20'
    },
    {
      id: 'Avisos',
      title: 'Avisos y Neón Flex',
      specs: 'Acrílico cristal y LED Neón (Cualquier tamaño)',
      desc: 'Diseño, fabricación y montaje de señalética luminosa y logotipos corporativos 3D.',
      icon: Zap,
      accent: 'border-purple-500/30 text-purple-400 bg-purple-950/20'
    },
    {
      id: 'Metal',
      title: 'Corte y Fabricación Metálica',
      specs: 'Hierro carbón (hasta 3cm) · Inox (hasta 2cm)',
      desc: 'Placas industriales y estructuras metálicas de alta resistencia hasta 150 × 250 cm.',
      icon: Cpu,
      accent: 'border-rose-500/30 text-rose-400 bg-rose-950/20'
    }
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto de Presentación */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Fabricación Digital y Prototipado 4.0</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Materializamos tus ideas con <span className="text-brand-500">precisión 3D</span> y tecnología CNC.
              </h1>

              <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
                En <strong>Maquinamos 3D</strong> transformamos diseños digitales en piezas reales. Desde impresión FDM industrial de hasta <strong>36 × 36 × 36 cm</strong> en materiales de ingeniería, hasta tallado en router CNC, avisos publicitarios luminosos y corte de placas metálicas pesadas.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => onNavigate('quote')}
                  className="px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-sm flex items-center space-x-2 transition-all shadow-xl shadow-brand-500/25 hover:scale-105"
                >
                  <FileCode className="w-4 h-4" />
                  <span>Cotizar mi Archivo 3D</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('catalog')}
                  className="px-6 py-3.5 rounded-xl surface-card hover:bg-slate-900 border border-slate-700 font-semibold text-sm flex items-center space-x-2 transition-colors"
                >
                  <Box className="w-4 h-4 text-brand-400" />
                  <span>Explorar Catálogo</span>
                </button>

                <button
                  onClick={() => onNavigate('ai-design')}
                  className="px-5 py-3.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold text-sm flex items-center space-x-2 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Diseño IA Paramétrico</span>
                </button>
              </div>

              {/* Estadísticas de Taller */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                <div>
                  <div className="text-2xl font-extrabold text-white">36 cm³</div>
                  <div className="text-[11px] text-muted font-medium">Volumen Máx. 3D FDM</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">4 Filamentos</div>
                  <div className="text-[11px] text-muted font-medium">PETG · PLA · ABS · TPU</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-brand-400">100% Real</div>
                  <div className="text-[11px] text-muted font-medium">Trazabilidad por Slicer</div>
                </div>
              </div>
            </div>

            {/* Visor 3D Interactivo Hero */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>
              <OrcaSlicerCanvas
                geometryType="vase"
                selectedColor="Azul Translúcido"
                material="PETG"
                dimensions={{ largo: 12, ancho: 12, alto: 22, unit: 'cm' }}
                height="440px"
              />
              <div className="mt-3 text-center">
                <span className="text-[11px] text-muted font-mono">
                  * Visor 3D interactivo con cama de impresión calibrada (36 × 36 cm). Rota con el cursor.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Categorías Principales de Maquinamos 3D */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-400 uppercase">
            Capacidades Industriales
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Nuestras 4 Divisiones de Fabricación Digital
          </h2>
          <p className="text-sm text-muted">
            Soluciones para empresas, ingenieros, diseñadores y particulares con especificaciones técnicas rigurosas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onNavigate('catalog', { category: cat.id })}
                className="surface-card p-6 rounded-2xl border hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${cat.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-brand-500/90 font-medium block mt-1">
                      {cat.specs}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-400">
                  <span>Ver Catálogo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Flujo de Estados de Pedido: Pedido -> Preparado -> Terminado -> Entregado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-card p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider text-brand-400 uppercase">
              Trazabilidad en Tiempo Real
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Seguimiento Transparente de tu Fabricación
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Conoce en qué etapa exacta de máquina se encuentra tu producto desde que ordenas hasta que lo tienes en tus manos:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                1
              </div>
              <h4 className="text-sm font-bold text-white">1. Pedido</h4>
              <p className="text-xs text-muted">
                Registro de orden, comprobante y verificación de geometría de malla 3D o plano CAD.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-xs">
                2
              </div>
              <h4 className="text-sm font-bold text-white">2. Preparado</h4>
              <p className="text-xs text-muted">
                Laminación (Slicer), calibración térmica, nivelación de cama y puesta en máquina.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                3
              </div>
              <h4 className="text-sm font-bold text-white">3. Terminado</h4>
              <p className="text-xs text-muted">
                Impresión concluida, retiro de soportes, pulido, curado o ensamble electrónico.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                4
              </div>
              <h4 className="text-sm font-bold text-white">4. Entregado</h4>
              <p className="text-xs text-muted">
                Despachado a transportadora con número de guía o retirado en taller por el cliente.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => onNavigate('tracking')}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center space-x-2 transition-colors"
            >
              <Compass className="w-4 h-4 text-brand-400" />
              <span>Consultar mi Pedido con Código de Guía →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Banner de Contacto y Cotización Inmediata */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-950 via-slate-900 to-slate-950 border border-brand-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-white">
              ¿Tienes un proyecto especial o maqueta arquitectónica?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Contáctanos de inmediato para asesoría técnica, planos a medida y visitas a taller.
            </p>
            <div className="flex items-center space-x-4 pt-2 text-xs font-mono text-brand-400">
              <span>Tel. 3005076700</span>
              <span>·</span>
              <span>mmontalvova@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <a
              href="tel:3005076700"
              className="flex-1 md:flex-initial px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-brand-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar al Taller</span>
            </a>
            <button
              onClick={() => onNavigate('special-services')}
              className="flex-1 md:flex-initial px-5 py-3 rounded-xl surface-card hover:bg-slate-800 border border-slate-700 font-semibold text-xs transition-colors"
            >
              Ver Servicios Especiales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
