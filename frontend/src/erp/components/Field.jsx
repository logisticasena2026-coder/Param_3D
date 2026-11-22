import React from 'react';

/**
 * Field — componente de formulario de ERP, estilo Odoo
 * Etiqueta + control + requerido marker.
 */
export const Field = ({ label, children, required = false, className = '' }) => (
  <div className={`space-y-1.5 ${className}`}>
    {label && (
      <label className="text-[11px] font-bold uppercase tracking-wider text-muted block">
        {label}
        {required && <span className="text-rose-400 ml-1">*</span>}
      </label>
    )}
    {children}
  </div>
);

export const InputField = React.forwardRef(({ className = '', placeholder, value, onChange, type = 'text', disabled = false, ...rest }, ref) => (
  <input
    ref={ref}
    type={type}
    value={value}
    onChange={onChange}
    disabled={disabled}
    placeholder={placeholder}
    className={`w-full px-2.5 py-1.5 rounded-lg surface-subtle border border-slate-800 text-xs text-white font-mono focus:outline-none focus:border-brand-500 disabled:opacity-50 ${className}`}
    {...rest}
  />
));
InputField.displayName = 'InputField';

export const Badge = ({ children, color = 'default', className = '' }) => {
  const colors = {
    default: 'bg-slate-900 text-slate-400 border-slate-700',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/40',
    danger: 'bg-rose-500/10 text-rose-400 border-rose-500/40',
    info: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/40',
    brand: 'bg-brand-500/10 text-brand-400 border-brand-500/40'
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${colors[color] || colors.default} ${className}`}>
      {children}
    </span>
  );
};

export const EmptyState = ({ icon: Icon, title, description, action }) => (
  <div className="flex flex-col items-center gap-3 py-16 text-center">
    {Icon && <Icon className="w-10 h-10 text-muted" />}
    <div className="space-y-1.5">
      <h3 className="text-sm font-bold text-white">{title}</h3>
      {description && <p className="text-xs text-muted max-w-sm">{description}</p>}
    </div>
    {action}
  </div>
);

export const FieldError = ({ message }) => (
  message ? <span className="text-rose-400 text-[11px] block">{message}</span> : null
);
