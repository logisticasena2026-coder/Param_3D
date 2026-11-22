import React from 'react';
import { Table, LayoutGrid, Kanban, GanttChart, Search, ArrowUpDown } from 'lucide-react';

const VIEW_META = {
  table: { label: 'Tabla', Icon: Table },
  grid: { label: 'Grid', Icon: LayoutGrid },
  kanban: { label: 'Kanban', Icon: Kanban },
  gantt: { label: 'Gantt', Icon: GanttChart }
};

/**
 * Toolbar compartido para las ventanas del panel admin:
 * búsqueda, filtros, ordenamiento y botones de vistas (Kanban/Grid/Tabla/Gantt).
 */
export const ViewsBar = ({
  views = ['table', 'grid', 'kanban', 'gantt'],
  view = 'table',
  onView,
  search = '',
  onSearch = null,
  searchPlaceholder = 'Buscar...',
  sortOptions = [],
  sortValue = '',
  onSort = null,
  filters = []
}) => (
  <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl surface-card border border-slate-800 shadow-lg">
    {/* Búsqueda */}
    {onSearch && (
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-44 pl-8 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-brand-500"
        />
      </div>
    )}

    {/* Filtros */}
    {filters.map((f, i) => (
      <select
        key={i}
        value={f.value}
        onChange={(e) => f.onChange(e.target.value)}
        className="py-1.5 px-2.5 text-xs bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-brand-500"
      >
        <option value="">{f.label}</option>
        {f.options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    ))}

    {/* Ordenamiento */}
    {onSort && (
      <select
        value={sortValue}
        onChange={(e) => onSort(e.target.value)}
        className="py-1.5 px-2.5 text-xs bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-brand-500"
      >
        <option value="">{sortOptions.find(o => o.value === '')?.label || 'Ordenar'}</option>
        {sortOptions.filter(o => o.value !== '').map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    )}

    {/* Botones de vistas */}
    <div className="ml-auto flex items-center gap-1">
      {views.map((v) => {
        const meta = VIEW_META[v];
        if (!meta) return null;
        const Icon = meta.Icon;
        return (
          <button
            key={v}
            onClick={() => onView(v)}
            title={meta.label}
            className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center space-x-1.5 transition-all ${
              view === v
                ? 'bg-brand-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{meta.label}</span>
            <span className="sm:hidden">{v === 'table' ? 'Tab' : v === 'grid' ? 'G' : v === 'kanban' ? 'K' : 'Gan'}</span>
          </button>
        );
      })}
    </div>
  </div>
);
