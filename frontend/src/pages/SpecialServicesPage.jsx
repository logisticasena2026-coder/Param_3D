import React, { useState } from 'react';
import {
  Layers,
  Building,
  Phone,
  Mail,
  CheckCircle2,
  Cpu,
  Zap,
  Box,
  Send,
  ArrowRight
} from 'lucide-react';

export const SpecialServicesPage = ({ onNavigate }) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Maquetas Arquitectónicas',
    description: ''
  });

  const specialServicesList = [
    {
      id: 'maquetas',
      title: 'Maquetas y Modelos Arquitectónicos',
      highlight: 'Alta Fidelidad de Escala (1:50, 1:100, 1:200)',
      description: 'Combinamos impresión 3D multimaterial, corte láser en acrílico e iluminación interior LED para proyectos de ingeniería civil, diseño urbano y facultades de arquitectura.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60',
      specs: [
        'Topografías en capas y volumetrías de predios',
        'Modelado de fachadas caladas y estructuras traslúcidas',
        'Acabados en blanco arquitectónico o texturizado realista'
      ]
    },
    {
      id: 'router-cnc-madera',
      title: 'Tallado Tridimensional en Router CNC',
      highlight: 'Límite Máximo: 100 cm (ancho) × 75 cm (alto) × 15 cm (profundidad)',
      description: 'Mecanizado y tallado de objetos en cedro, roble, pino y tableros MDF hidrófugos. Ideal para puertas con relieves artísticos, celosías árabes y biombos acústicos divisores.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60',
      specs: [
        'Puertas decorativas con bajo y altorrelieve',
        'Biombos y celosías caladas para separación de espacios',
        'Tableros de diseño tridimensional a medida'
      ]
    },
    {
      id: 'avisos-neon',
      title: 'Avisos Publicitarios y Neón Flex',
      highlight: 'Fabricación y Montaje en Cualquier Tamaño',
      description: 'Desarrollo integral de identidad visual corporativa. Cajas de luz, letras volumétricas 3D en acrílico termoformado y tiras de Neón Flex de bajo consumo energético.',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=60',
      specs: [
        'Acrílico cristal de 3mm a 10mm de espesor',
        'Neón flex de 12V con dimerizador y control remoto',
        'Montaje profesional garantizado en interiores y fachadas'
      ]
    },
    {
      id: 'corte-metal',
      title: 'Corte y Fabricación de Piezas Metálicas',
      highlight: 'Hierro Carbón (hasta 3 cm) · Acero Inox (hasta 2 cm)',
      description: 'Transformación de metales en banco de corte de alta potencia. Dimensiones de mesa de hasta 150 cm × 250 cm para placas estructurales, anclajes y herrajes de ingeniería pesada.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60',
      specs: [
        'Hierro al carbón de hasta 150 cm × 250 cm × 3 cm de grosor',
        'Acero inoxidable 304/316 de hasta 2 cm de espesor',
        'Tolerancia milimétrica en perforaciones y biseles'
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Encabezado */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-wider text-brand-400 uppercase">
          Taller de Ingeniería Especializada
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Servicios Especiales y Proyectos a Medida
        </h1>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          Diseños de alta complejidad cotizados directamente con el cliente. Contamos con capacidad industrial para maquetas arquitectónicas, mecanizado en madera maciza, avisos luminosos y placas metálicas.
        </p>
      </div>

      {/* Grid de Servicios Especiales con Imágenes Ilustrativas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {specialServicesList.map((service) => (
          <div
            key={service.id}
            className="surface-card rounded-3xl border border-slate-800/80 overflow-hidden shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700/60 text-[11px] font-mono text-brand-400 font-semibold">
                  {service.highlight}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-xs text-muted leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">
                    Especificaciones y Entregables:
                  </span>
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href="https://wa.me/573005076700?text=Hola%20Maquinamos%203D,%20deseo%20cotizar%20un%20servicio%20especial"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-brand-500 hover:text-slate-950 border border-slate-800 text-brand-400 font-bold text-xs flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Cotizar {service.title} por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Formulario de Cotización Directa con Datos de Contacto Oficiales */}
      <div className="surface-card p-8 sm:p-12 rounded-3xl border border-brand-500/30 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-brand-400 uppercase">
              Atención Personalizada
            </span>
            <h2 className="text-2xl font-extrabold text-white mt-1">
              Cotiza Directamente con Nuestro Equipo de Ingeniería
            </h2>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              Analizamos tus planos técnicos, archivos DWG, DXF, STL o bosquejos conceptuales para entregarte una propuesta técnica formal con tiempos de entrega garantizados.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-2xl surface-subtle border border-slate-800 flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-muted block">Teléfono / WhatsApp</span>
                <a href="tel:3005076700" className="text-sm font-bold text-white hover:text-brand-400 font-mono">
                  Tel. 3005076700
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl surface-subtle border border-slate-800 flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-muted block">Correo Electrónico Directo</span>
                <a href="mailto:mmontalvova@gmail.com" className="text-xs font-bold text-white hover:text-brand-400 font-mono">
                  mmontalvova@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="lg:col-span-7">
          {formSent ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Solicitud Recibida</h3>
              <p className="text-xs text-slate-300">
                Nos comunicaremos al número o correo indicado en menos de 2 horas hábiles con la evaluación técnica preliminar.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Nombre o Empresa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Arq. Daniel Morales"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 3005076700"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Servicio a Cotizar
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-500"
                  >
                    <option>Maquetas Arquitectónicas</option>
                    <option>Router CNC Madera (Puertas, Biombos, Celosías)</option>
                    <option>Avisos en Acrílico y Neón Flex</option>
                    <option>Corte Metal (Hierro al carbón / Inoxidable)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                  Descripción del Proyecto y Medidas Estimadas
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Detalla dimensiones aproximadas, tipo de material deseado y fecha estimada de entrega..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-brand-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitud de Cotización Directa</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
