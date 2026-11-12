import React from 'react';
import { Target, Compass, Award, CheckCircle, ShieldCheck, Phone, Mail, Building2 } from 'lucide-react';

export const InstitutionalPage = ({ onNavigate }) => {
  const objectives = [
    {
      title: 'Tolerancia Dimensional Milimétrica',
      desc: 'Mantener un margen de desviación menor a ±0.15 mm en piezas de ingeniería FDM y ±0.5 mm en tallado CNC y corte metálico.'
    },
    {
      title: 'Sostenibilidad y Optimización de Material',
      desc: 'Maximizar el aprovechamiento de filamentos biodegradables (PLA) y reciclaje de mermas y soportes de producción limpia.'
    },
    {
      title: 'Capacitación y Transformación Digital',
      desc: 'Democratizar el acceso a la fabricación aditiva 4.0 mediante herramientas de laminado online y diseño asistido por IA.'
    },
    {
      title: 'Cumplimiento Estricto de Tiempos de Entrega',
      desc: 'Monitoreo en tiempo real del ciclo completo de pedido (Pedido → Preparado → Terminado → Entregado) sin demoras injustificadas.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Encabezado */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-wider text-brand-400 uppercase">
          Marco Filosófico y Corporativo
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Sobre Maquinamos 3D
        </h1>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          Somos un centro de fabricación digital integral comprometido con la excelencia técnica, la precisión geométrica y la satisfacción de nuestros clientes en todo el territorio nacional.
        </p>
      </div>

      {/* Misión y Visión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Misión */}
        <div className="surface-card p-8 rounded-3xl border border-slate-800/80 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-400 flex items-center justify-center border border-brand-500/20">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">Nuestra Misión</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Brindar soluciones avanzadas de fabricación digital —abarcando impresión 3D multimaterial, router CNC de madera, avisos luminosos y corte de placas metálicas— combinando tecnología de punta, asesoría técnica experta y materiales certificados para convertir las ideas, prototipos y necesidades industriales de nuestros clientes en realidades tangibles y de máxima calidad.
          </p>
        </div>

        {/* Visión */}
        <div className="surface-card p-8 rounded-3xl border border-slate-800/80 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">Nuestra Visión</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Consolidarnos para el año 2030 como el taller de fabricación digital y prototipado rápido de mayor referencia, reconocido por la integración pionera de algoritmos paramétricos, inteligencia artificial aplicada al modelado tridimensional y un sistema de control de trazabilidad riguroso que garantice fiabilidad operativa y sostenibilidad en cada pieza producida.
          </p>
        </div>
      </div>

      {/* Política de Calidad */}
      <div className="surface-card p-8 sm:p-10 rounded-3xl border border-brand-500/30 space-y-4 shadow-xl">
        <div className="flex items-center space-x-3 text-brand-400">
          <Award className="w-6 h-6" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">Política de Calidad Integral</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          En <strong>Maquinamos 3D</strong> orientamos todos nuestros procesos productivos hacia la precisión milimétrica y la mejora continua. Seleccionamos rigurosamente materias primas (filamentos técnicos PETG, PLA, ABS y TPU con control constante de diámetro e hidratación, maderas selectas curadas y metales de grado estructural), calibrando nuestras máquinas previo a cada ciclo de trabajo. Aseguramos la confidencialidad de los archivos CAD de nuestros usuarios y validamos cada pieza antes de su entrega definitiva.
        </p>
      </div>

      {/* Objetivos Estratégicos */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white">Objetivos de Calidad y Fabricación</h2>
          <p className="text-xs text-muted mt-1">Metas claras que orientan nuestra labor diaria de taller.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {objectives.map((obj, i) => (
            <div key={i} className="p-5 surface-card rounded-2xl border border-slate-800 flex items-start space-x-3.5">
              <div className="p-2 rounded-xl bg-brand-500/15 text-brand-400 shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">{obj.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{obj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Datos Institucionales y de Contacto */}
      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-300">
        <div>
          <span className="font-bold text-white block text-sm">Maquinamos 3D · Taller Central</span>
          <span className="text-muted">Línea directa y correo para alianzas institucionales y convenios educativos.</span>
        </div>
        <div className="flex flex-wrap gap-4 font-mono">
          <a href="tel:3005076700" className="hover:text-brand-400 font-bold">
            Tel. 3005076700
          </a>
          <span>·</span>
          <a href="mailto:mmontalvova@gmail.com" className="hover:text-brand-400">
            mmontalvova@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
