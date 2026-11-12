import React from 'react';
import { ShoppingCart, Cog, CheckCircle, PackageCheck, Clock, Calendar } from 'lucide-react';

const STEPS = [
  {
    key: 'Pedido',
    title: 'Pedido',
    description: 'Comprado y registrado',
    icon: ShoppingCart
  },
  {
    key: 'Preparado',
    title: 'Preparado',
    description: 'En preparación para impresión / corte',
    icon: Cog
  },
  {
    key: 'Terminado',
    title: 'Terminado',
    description: 'Impreso y post-procesado',
    icon: CheckCircle
  },
  {
    key: 'Entregado',
    title: 'Entregado',
    description: 'Entregado a conformidad al cliente',
    icon: PackageCheck
  }
];

export const OrderTimeline = ({ currentStatus, statusHistory = [] }) => {
  const currentIndex = STEPS.findIndex(s => s.key === currentStatus);

  return (
    <div className="py-6">
      {/* Barra de progreso horizontal */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-slate-800 -z-0">
          <div
            className="h-full bg-brand-500 transition-all duration-700 rounded-full"
            style={{
              width: currentIndex >= 0 ? `${(currentIndex / (STEPS.length - 1)) * 100}%` : '0%'
            }}
          />
        </div>

        {STEPS.map((step, idx) => {
          const isDone = idx <= currentIndex;
          const isCurrent = idx === currentIndex;
          const Icon = step.icon;

          return (
            <div key={step.key} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all shadow-xl ${
                  isCurrent
                    ? 'border-brand-500 bg-brand-500 text-slate-950 ring-4 ring-brand-500/30 scale-110 font-bold'
                    : isDone
                    ? 'border-brand-500 bg-slate-900 text-brand-400'
                    : 'border-slate-800 bg-slate-900 text-slate-600'
                }`}
              >
                <Icon className={`w-5 h-5 ${isCurrent ? 'animate-bounce' : ''}`} />
              </div>
              <div className="text-center mt-3 max-w-[110px]">
                <span className={`text-xs block font-bold ${isDone ? 'text-white' : 'text-slate-500'}`}>
                  {step.title}
                </span>
                <span className="text-[10px] text-muted hidden sm:block mt-0.5 leading-tight">
                  {step.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bitácora de taller / Historial de cambios */}
      {statusHistory.length > 0 && (
        <div className="surface-card p-4 rounded-xl border border-slate-800/80 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-400" />
            <span>Bitácora de Taller y Fabricación</span>
          </h4>
          <div className="space-y-2.5">
            {statusHistory.map((item, i) => (
              <div key={i} className="flex items-start space-x-3 text-xs border-l-2 border-brand-500/50 pl-3 py-1">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white">{item.status}</span>
                    <span className="text-[11px] text-muted flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(item.timestamp).toLocaleString('es-CO')}</span>
                    </span>
                  </div>
                  <p className="text-slate-300 mt-1">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
