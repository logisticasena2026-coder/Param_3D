import React, { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../../api/client';
import {
  FolderKanban,
  Plus,
  Pencil,
  Trash2,
  X,
  Calendar,
  CreditCard,
  Users,
  UserPlus,
  Box,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Banknote,
  Paperclip,
  Filter,
  Wallet,
  Image
} from 'lucide-react';

// Etiquetas y colores de los ENUM del módulo
const STATUS_LABELS = { pendiente: 'Pendiente', en_proceso: 'En Proceso', completado: 'Completado', cancelado: 'Cancelado' };
const PRIORITY_LABELS = { baja: 'Baja', media: 'Media', alta: 'Alta', urgente: 'Urgente' };
const STATUS_COLORS = {
  pendiente: 'bg-slate-500/10 text-slate-300 border-slate-600/40',
  en_proceso: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/40',
  completado: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40',
  cancelado: 'bg-rose-500/10 text-rose-400 border-rose-500/40'
};
const PRIORITY_COLORS = {
  baja: 'bg-slate-500/10 text-slate-400 border-slate-700/40',
  media: 'bg-blue-500/10 text-blue-400 border-blue-500/40',
  alta: 'bg-amber-500/10 text-amber-400 border-amber-500/40',
  urgente: 'bg-rose-500/10 text-rose-400 border-rose-500/40'
};

const fmtMoney = (n) => `$${Number(n || 0).toLocaleString('es-CO')}`;
const fmtDate = (d) => (d ? new Date(d).toLocaleDateString('es-CO') : '—');

// Paleta de colores predefinidos para las piezas
const COLORS = [
  'Blanco', 'Negro', 'Gris Plata', 'Gris Humo', 'Gris Oscuro',
  'Rojo Ferrari', 'Rojo', 'Verde Limón', 'Verde Esmeralda',
  'Naranja', 'Amarillo Oro', 'Azul Eléctrico', 'Azul Brillo',
  'Azul Translúcido', 'Azul Neón', 'Morado'
];

const EMPTY_PROJECT_FORM = {
  clientId: '',
  tipoProyecto: 'impresion_3d',
  nombreProyecto: '',
  descripcion: '',
  fechaInicio: '',
  fechaEntrega: '',
  prioridad: 'media',
  notas: ''
};

const EMPTY_PIECE_FORM = {
  nombrePieza: '',
  cantidad: 1,
  largo: '',
  ancho: '',
  alto: '',
  pesoGramos: '',
  material: 'PLA',
  color: '',
  rellenoPorcentaje: 20,
  soportes: false,
  tiempoImpresionMin: '',
  notas: ''
};

const EMPTY_PAYMENT_FORM = { monto: '', metodoPago: 'transferencia', referencia: '', estado: 'pendiente' };
const EMPTY_CLIENT_FORM = { nombre: '', email: '', telefono: '', direccion: '', notas: '' };

export const AdminProjects = () => {
  const [section, setSection] = useState('projects'); // 'projects' | 'clients'
  const [meta, setMeta] = useState({ types: [], status: [], priorities: [], paymentMethods: [], paymentStatus: [] });
  const [summary, setSummary] = useState(null);
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [filters, setFilters] = useState({ estado: '', tipo: '', prioridad: '' });
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);

  // Formularios y paneles
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectForm, setProjectForm] = useState(EMPTY_PROJECT_FORM);
  const [showClientForm, setShowClientForm] = useState(false);
  const [clientForm, setClientForm] = useState(EMPTY_CLIENT_FORM);

  // Detalle expandido del proyecto
  const [expandedId, setExpandedId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [pieceForm, setPieceForm] = useState(EMPTY_PIECE_FORM);
  const [showPieceForm, setShowPieceForm] = useState(false);
  const [paymentForm, setPaymentForm] = useState(EMPTY_PAYMENT_FORM);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [costForms, setCostForms] = useState({}); // pieceId -> form de costos
  const [uploadingFile, setUploadingFile] = useState(null);
  const [colorOtro, setColorOtro] = useState(false);

  const showMsg = (type, text) => {
    setMsg({ type, text });
    setTimeout(() => setMsg(null), 5000);
  };

  const fetchMeta = useCallback(async () => {
    try {
      const data = await apiClient.request('/projects/meta');
      setMeta(data);
    } catch (err) {
      console.error('Error cargando metadatos:', err);
    }
  }, []);

  const fetchSummary = useCallback(async () => {
    try {
      const data = await apiClient.request('/projects/summary');
      setSummary(data);
    } catch (err) {
      console.error('Error cargando resumen:', err);
    }
  }, []);

  const fetchProjects = useCallback(async () => {
    try {
      const params = new URLSearchParams();
      if (filters.estado) params.append('estado', filters.estado);
      if (filters.tipo) params.append('tipo', filters.tipo);
      if (filters.prioridad) params.append('prioridad', filters.prioridad);
      const qs = params.toString();
      const data = await apiClient.request(`/projects/${qs ? `?${qs}` : ''}`);
      setProjects(data);
    } catch (err) {
      console.error('Error cargando proyectos:', err);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const fetchClients = useCallback(async () => {
    try {
      const data = await apiClient.request('/projects/clients');
      setClients(data);
    } catch (err) {
      console.error('Error cargando clientes:', err);
    }
  }, []);

  useEffect(() => {
    fetchMeta();
    fetchSummary();
    fetchClients();
  }, [fetchMeta, fetchSummary, fetchClients]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // -----------------------------------------------------------
  // Proyectos
  // -----------------------------------------------------------
  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      await apiClient.request('/projects/', {
        method: 'POST',
        body: JSON.stringify({
          ...projectForm,
          fechaInicio: projectForm.fechaInicio || undefined,
          fechaEntrega: projectForm.fechaEntrega || null
        })
      });
      showMsg('success', 'Proyecto creado exitosamente');
      setShowProjectForm(false);
      setProjectForm(EMPTY_PROJECT_FORM);
      fetchProjects();
      fetchSummary();
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  const handleUpdateProjectStatus = async (projectId, estado) => {
    try {
      await apiClient.request(`/projects/${projectId}`, {
        method: 'PUT',
        body: JSON.stringify({ estado })
      });
      showMsg('success', `Proyecto actualizado a "${STATUS_LABELS[estado]}"`);
      fetchProjects();
      fetchSummary();
      if (expandedId === projectId) loadProjectDetail(projectId);
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  const handleDeleteProject = async (project) => {
    if (!window.confirm(`¿Eliminar el proyecto "${project.nombreProyecto}"? (Solo posible si no tiene piezas ni pagos)`)) return;
    try {
      const res = await apiClient.request(`/projects/${project.id}`, { method: 'DELETE' });
      showMsg('success', res.message);
      if (expandedId === project.id) { setExpandedId(null); setDetail(null); }
      fetchProjects();
      fetchSummary();
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  // Subir imagen/video de una pieza (multipart a /pieces/:pieceId/files)
  const handleUploadPieceFile = async (pieceId, file) => {
    if (uploadingFile) return;
    setUploadingFile(pieceId);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const tipoArchivo = file.type.startsWith('video/') ? 'otro' : 'foto';
      fd.append('tipoArchivo', tipoArchivo);
      fd.append('descripcion', `Archivo subido a la pieza: ${file.name}`);
      await apiClient.request(`/projects/pieces/${pieceId}/files`, { method: 'POST', body: fd });
      showMsg('success', `Archivo subido a la pieza (${file.name})`);
      loadProjectDetail(expandedId);
    } catch (err) {
      showMsg('error', err.message);
    } finally {
      setUploadingFile(null);
    }
  };

  const toggleProjectDetail = async (projectId) => {
    if (expandedId === projectId) {
      setExpandedId(null);
      setDetail(null);
      return;
    }
    setExpandedId(projectId);
    loadProjectDetail(projectId);
  };

  const loadProjectDetail = async (projectId) => {
    try {
      const data = await apiClient.request(`/projects/${projectId}`);
      setDetail(data);
      // Inicializar formularios de costos con los valores existentes
      const initialCosts = {};
      (data.pieces || []).forEach(pz => {
        initialCosts[pz.id] = {
          costoMaterialKg: pz.cost?.costoMaterialKg || 0,
          materialUsadoGramos: pz.cost?.materialUsadoGramos || 0,
          costoEnergiaKwh: pz.cost?.costoEnergiaKwh || 0,
          precioKwh: pz.cost?.precioKwh || 0,
          horasDiseno: pz.cost?.horasDiseno || 0,
          costoHoraDiseno: pz.cost?.costoHoraDiseno || 0,
          costoManoObra: pz.cost?.costoManoObra || 0,
          otrosCostos: pz.cost?.otrosCostos || 0,
          precioVenta: pz.cost?.precioVenta || 0
        };
      });
      setCostForms(initialCosts);
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  // -----------------------------------------------------------
  // Piezas
  // -----------------------------------------------------------
  const handleAddPiece = async (e) => {
    e.preventDefault();
    try {
      await apiClient.request(`/projects/${expandedId}/pieces`, {
        method: 'POST',
        body: JSON.stringify({
          ...pieceForm,
          cantidad: Number(pieceForm.cantidad) || 1,
          largo: pieceForm.largo !== '' ? Number(pieceForm.largo) : null,
          ancho: pieceForm.ancho !== '' ? Number(pieceForm.ancho) : null,
          alto: pieceForm.alto !== '' ? Number(pieceForm.alto) : null,
          pesoGramos: pieceForm.pesoGramos !== '' ? Number(pieceForm.pesoGramos) : null,
          tiempoImpresionMin: pieceForm.tiempoImpresionMin !== '' ? Number(pieceForm.tiempoImpresionMin) : null
        })
      });
      showMsg('success', 'Pieza agregada al proyecto');
      setShowPieceForm(false);
      setPieceForm(EMPTY_PIECE_FORM);
      setColorOtro(false);
      loadProjectDetail(expandedId);
      fetchProjects();
      fetchSummary();
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  const handleDeletePiece = async (pieceId) => {
    if (!window.confirm('¿Eliminar la pieza? Sus costos y archivos se eliminarán en CASCADA.')) return;
    try {
      const res = await apiClient.request(`/projects/pieces/${pieceId}`, { method: 'DELETE' });
      showMsg('success', res.message);
      loadProjectDetail(expandedId);
      fetchProjects();
      fetchSummary();
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  // -----------------------------------------------------------
  // Costos
  // -----------------------------------------------------------
  const handleSaveCost = async (pieceId) => {
    try {
      const res = await apiClient.request(`/projects/pieces/${pieceId}/cost`, {
        method: 'PUT',
        body: JSON.stringify(costForms[pieceId])
      });
      showMsg('success', `Costos guardados. Total: ${fmtMoney(res.cost.costoTotal)} | Ganancia: ${fmtMoney(res.cost.ganancia)}`);
      loadProjectDetail(expandedId);
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  // -----------------------------------------------------------
  // Pagos
  // -----------------------------------------------------------
  const handleAddPayment = async (e) => {
    e.preventDefault();
    try {
      await apiClient.request(`/projects/${expandedId}/payments`, {
        method: 'POST',
        body: JSON.stringify({ ...paymentForm, monto: Number(paymentForm.monto) })
      });
      showMsg('success', 'Pago registrado exitosamente');
      setShowPaymentForm(false);
      setPaymentForm(EMPTY_PAYMENT_FORM);
      loadProjectDetail(expandedId);
      fetchProjects();
      fetchSummary();
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  const handleUpdatePaymentStatus = async (paymentId, estado) => {
    try {
      await apiClient.request(`/projects/payments/${paymentId}`, {
        method: 'PUT',
        body: JSON.stringify({ estado })
      });
      showMsg('success', 'Estado del pago actualizado');
      loadProjectDetail(expandedId);
      fetchProjects();
      fetchSummary();
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  const handleDeletePayment = async (paymentId) => {
    if (!window.confirm('¿Eliminar este pago registrado?')) return;
    try {
      await apiClient.request(`/projects/payments/${paymentId}`, { method: 'DELETE' });
      showMsg('success', 'Pago eliminado');
      loadProjectDetail(expandedId);
      fetchProjects();
      fetchSummary();
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  // -----------------------------------------------------------
  // Clientes
  // -----------------------------------------------------------
  const handleCreateClient = async (e) => {
    e.preventDefault();
    try {
      await apiClient.request('/projects/clients', {
        method: 'POST',
        body: JSON.stringify(clientForm)
      });
      showMsg('success', 'Cliente registrado exitosamente');
      setShowClientForm(false);
      setClientForm(EMPTY_CLIENT_FORM);
      fetchClients();
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  const handleDeleteClient = async (client) => {
    if (!window.confirm(`¿Eliminar al cliente "${client.nombre}"? (Solo posible si no tiene proyectos)`)) return;
    try {
      const res = await apiClient.request(`/projects/clients/${client.id}`, { method: 'DELETE' });
      showMsg('success', res.message);
      fetchClients();
    } catch (err) {
      showMsg('error', err.message);
    }
  };

  const typeLabel = (value) => meta.types.find(t => t.value === value)?.label || value;

  // -----------------------------------------------------------
  // Render
  // -----------------------------------------------------------
  return (
    <div className="space-y-6">
      {/* Encabezado y selector de sección */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <FolderKanban className="w-5 h-5 text-amber-400" />
            <span>Gestión de Proyectos del Taller</span>
          </h2>
          <p className="text-xs text-muted">
            Clientes, proyectos por tipo, piezas, estructura de costos y pagos (esquema relacional CLIENTES → PROYECTOS → PIEZAS → COSTOS / ARCHIVOS / PAGOS).
          </p>
        </div>

        <div className="flex items-center space-x-1.5 p-1 rounded-2xl surface-card border border-slate-800 w-fit">
          <button
            onClick={() => setSection('projects')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
              section === 'projects' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>Proyectos</span>
          </button>
          <button
            onClick={() => setSection('clients')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
              section === 'clients' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Clientes</span>
          </button>
        </div>
      </div>

      {/* Mensajes de operación */}
      {msg && (
        <div className={`p-3 rounded-xl border text-xs flex items-center space-x-2 ${
          msg.type === 'success'
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
        }`}>
          {msg.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
          <span>{msg.text}</span>
        </div>
      )}

      {section === 'projects' && (
        <>
          {/* Tarjetas de resumen */}
          {summary && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="surface-card p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-muted block">Proyectos Totales</span>
                <span className="text-xl font-extrabold text-white font-mono">{summary.totalProjects}</span>
                <span className="text-[10px] text-brand-400 block mt-0.5">{summary.activeProjects} activos en taller</span>
              </div>
              <div className="surface-card p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-muted block">Piezas Registradas</span>
                <span className="text-xl font-extrabold text-white font-mono">{summary.totalPieces}</span>
                <span className="text-[10px] text-cyan-400 block mt-0.5">en todos los proyectos</span>
              </div>
              <div className="surface-card p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-muted block">Recaudo Confirmado</span>
                <span className="text-xl font-extrabold text-emerald-400 font-mono">{fmtMoney(summary.totalCollected)}</span>
                <span className="text-[10px] text-muted block mt-0.5">pagos completados</span>
              </div>
              <div className="surface-card p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-muted block">Pagos por Confirmar</span>
                <span className="text-xl font-extrabold text-amber-400 font-mono">{summary.pendingPayments}</span>
                <span className="text-[10px] text-muted block mt-0.5">pendientes o parciales</span>
              </div>
            </div>
          )}

          {/* Barra de filtros y botón de nuevo proyecto */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold text-muted uppercase flex items-center space-x-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filtrar:</span>
              </span>
              <select
                value={filters.tipo}
                onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}
                className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
              >
                <option value="">Todos los tipos</option>
                {meta.types.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
              <select
                value={filters.estado}
                onChange={(e) => setFilters({ ...filters, estado: e.target.value })}
                className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
              >
                <option value="">Todos los estados</option>
                {meta.status.map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
              </select>
              <select
                value={filters.prioridad}
                onChange={(e) => setFilters({ ...filters, prioridad: e.target.value })}
                className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
              >
                <option value="">Todas las prioridades</option>
                {meta.priorities.map(p => <option key={p} value={p}>{PRIORITY_LABELS[p]}</option>)}
              </select>
            </div>

            <button
              onClick={() => setShowProjectForm(!showProjectForm)}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center space-x-2 transition-colors w-fit"
            >
              <Plus className="w-4 h-4" />
              <span>Nuevo Proyecto</span>
            </button>
          </div>

          {/* Formulario de creación de proyecto */}
          {showProjectForm && (
            <form onSubmit={handleCreateProject} className="surface-card p-5 rounded-2xl border border-amber-500/30 space-y-4 animate-fadeIn">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Plus className="w-4 h-4 text-amber-400" />
                <span>Registrar Nuevo Proyecto</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted uppercase">Cliente *</label>
                  <select
                    required
                    value={projectForm.clientId}
                    onChange={(e) => setProjectForm({ ...projectForm, clientId: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                  >
                    <option value="">Seleccione un cliente...</option>
                    {clients.map(c => <option key={c.id} value={c.id}>{c.nombre} ({c.email})</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted uppercase">Tipo de Proyecto *</label>
                  <select
                    value={projectForm.tipoProyecto}
                    onChange={(e) => setProjectForm({ ...projectForm, tipoProyecto: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                  >
                    {meta.types.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted uppercase">Prioridad</label>
                  <select
                    value={projectForm.prioridad}
                    onChange={(e) => setProjectForm({ ...projectForm, prioridad: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                  >
                    {meta.priorities.map(p => <option key={p} value={p}>{PRIORITY_LABELS[p]}</option>)}
                  </select>
                </div>
                <div className="space-y-1 sm:col-span-2 lg:col-span-1">
                  <label className="text-[10px] font-bold text-muted uppercase">Nombre del Proyecto *</label>
                  <input
                    required
                    type="text"
                    value={projectForm.nombreProyecto}
                    onChange={(e) => setProjectForm({ ...projectForm, nombreProyecto: e.target.value })}
                    placeholder="Ej. Lote de 50 soportes para celular"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted uppercase">Fecha Inicio</label>
                  <input
                    type="date"
                    value={projectForm.fechaInicio}
                    onChange={(e) => setProjectForm({ ...projectForm, fechaInicio: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted uppercase">Fecha Entrega</label>
                  <input
                    type="date"
                    value={projectForm.fechaEntrega}
                    onChange={(e) => setProjectForm({ ...projectForm, fechaEntrega: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted uppercase">Descripción</label>
                <textarea
                  rows={2}
                  value={projectForm.descripcion}
                  onChange={(e) => setProjectForm({ ...projectForm, descripcion: e.target.value })}
                  placeholder="Detalles del encargo, materiales solicitados, acabados..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500 resize-none"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button type="submit" className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-colors">
                  Guardar Proyecto
                </button>
                <button
                  type="button"
                  onClick={() => { setShowProjectForm(false); setProjectForm(EMPTY_PROJECT_FORM); }}
                  className="px-4 py-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-bold transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}

          {/* Lista de proyectos */}
          {loading ? (
            <div className="min-h-[200px] flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
              No hay proyectos que coincidan con los filtros seleccionados.
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.id} className="surface-card rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
                  {/* Cabecera del proyecto */}
                  <div className="p-5 space-y-3">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                      <div className="flex items-start space-x-3">
                        <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                          <FolderKanban className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm">{p.nombreProyecto}</h4>
                          <span className="text-[11px] text-muted block">
                            {p.clientName} · Inicio: {fmtDate(p.fechaInicio)} · Entrega: {fmtDate(p.fechaEntrega)}
                          </span>
                          <span className="text-[10px] text-muted font-mono block">{p.id}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border bg-brand-500/10 text-brand-400 border-brand-500/30">
                          {typeLabel(p.tipoProyecto)}
                        </span>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${PRIORITY_COLORS[p.prioridad]}`}>
                          {PRIORITY_LABELS[p.prioridad]}
                        </span>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${STATUS_COLORS[p.estado]}`}>
                          {STATUS_LABELS[p.estado]}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/70">
                      <div className="flex items-center space-x-4 text-[11px] text-muted">
                        <span className="flex items-center space-x-1">
                          <Box className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{p.piecesCount} pieza(s)</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Banknote className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Recaudado: <strong className="text-emerald-400 font-mono">{fmtMoney(p.totalPaid)}</strong></span>
                        </span>
                        {p.fechaCompletado && (
                          <span className="flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Completado: {fmtDate(p.fechaCompletado)}</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        {/* Cambio rápido de estado */}
                        <select
                          value={p.estado}
                          onChange={(e) => handleUpdateProjectStatus(p.id, e.target.value)}
                          className="bg-slate-900 border border-slate-800 rounded-xl px-2 py-1.5 text-[11px] text-slate-300 focus:outline-none focus:border-brand-500"
                        >
                          {meta.status.map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
                        </select>
                        <button
                          onClick={() => toggleProjectDetail(p.id)}
                          className="px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 text-[11px] font-bold flex items-center space-x-1.5 transition-colors"
                        >
                          {expandedId === p.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          <span>{expandedId === p.id ? 'Cerrar' : 'Detalle'}</span>
                        </button>
                        <button
                          onClick={() => handleDeleteProject(p)}
                          className="p-1.5 rounded-xl border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 transition-colors"
                          title="Eliminar proyecto (RESTRICT si tiene datos)"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Detalle expandido: piezas, costos y pagos */}
                  {expandedId === p.id && detail && detail.id === p.id && (
                    <div className="border-t border-slate-800 bg-slate-950/40 p-5 space-y-5 animate-fadeIn">
                      {detail.descripcion && (
                        <p className="text-xs text-slate-300 italic">"{detail.descripcion}"</p>
                      )}

                      {/* ---- Piezas ---- */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-bold text-white flex items-center space-x-2">
                            <Box className="w-4 h-4 text-cyan-400" />
                            <span>Piezas del Proyecto ({detail.pieces.length})</span>
                          </h5>
                          <button
                            onClick={() => { setColorOtro(false); setShowPieceForm(!showPieceForm); }}
                            className="px-2.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold flex items-center space-x-1 hover:bg-cyan-500/20 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Agregar Pieza</span>
                          </button>
                        </div>

                        {showPieceForm && (
                          <form onSubmit={handleAddPiece} className="p-4 rounded-xl surface-subtle border border-cyan-500/30 space-y-3 animate-fadeIn">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              <input required type="text" placeholder="Nombre de la pieza *" value={pieceForm.nombrePieza}
                                onChange={(e) => setPieceForm({ ...pieceForm, nombrePieza: e.target.value })}
                                className="col-span-2 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500" />
                              <input type="number" min="1" placeholder="Cantidad" value={pieceForm.cantidad}
                                onChange={(e) => setPieceForm({ ...pieceForm, cantidad: e.target.value })}
                                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500" />
                              <input type="text" placeholder="Tipo de material (PLA, PETG, ABS, TPU)" value={pieceForm.material}
                                onChange={(e) => setPieceForm({ ...pieceForm, material: e.target.value })}
                                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500" />
                              <input type="number" step="0.01" placeholder="Largo (cm)" value={pieceForm.largo}
                                onChange={(e) => setPieceForm({ ...pieceForm, largo: e.target.value })}
                                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500" />
                              <input type="number" step="0.01" placeholder="Ancho (cm)" value={pieceForm.ancho}
                                onChange={(e) => setPieceForm({ ...pieceForm, ancho: e.target.value })}
                                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500" />
                              <input type="number" step="0.01" placeholder="Alto (cm)" value={pieceForm.alto}
                                onChange={(e) => setPieceForm({ ...pieceForm, alto: e.target.value })}
                                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500" />
                              <input type="number" step="0.1" placeholder="Peso (g)" value={pieceForm.pesoGramos}
                                onChange={(e) => setPieceForm({ ...pieceForm, pesoGramos: e.target.value })}
                                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500" />
                              <div className="col-span-2 space-y-1">
                                <label className="text-[9px] text-muted uppercase block">Color *</label>
                                {colorOtro ? (
                                  <input
                                    type="text"
                                    placeholder="Escribe el color exacto (ej. Rojo Ferrari, Azul Translúcido)"
                                    value={pieceForm.color}
                                    autoFocus
                                    onBlur={(e) => { if (!e.target.value.trim()) setColorOtro(false); }}
                                    onChange={(e) => setPieceForm({ ...pieceForm, color: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                                  />
                                ) : (
                                  <select
                                    value={pieceForm.color}
                                    onChange={(e) => {
                                      const v = e.target.value;
                                      if (v === 'otro') {
                                        setColorOtro(true);
                                        setPieceForm({ ...pieceForm, color: '' });
                                      } else {
                                        setColorOtro(false);
                                        setPieceForm({ ...pieceForm, color: v });
                                      }
                                    }}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                                  >
                                    <option value="">Sin definir</option>
                                    {COLORS.map((c) => (
                                      <option key={c} value={c}>{c}</option>
                                    ))}
                                    <option value="otro">Otro (personalizado)</option>
                                  </select>
                                )}
                                {!colorOtro && pieceForm.color && (
                                  <span className="text-[10px] text-cyan-400 block">
                                    Seleccionado: <strong className="text-white">{pieceForm.color}</strong>
                                  </span>
                                )}
                                {pieceForm.color === 'Otro' ? (
                                  <span className="text-[10px] text-muted block">Abre el <strong>select de color</strong> y elige “Otro (personalizado)”.</span>
                                ) : null}
                              </div>
                              <input type="number" min="0" max="100" placeholder="Relleno %" value={pieceForm.rellenoPorcentaje}
                                onChange={(e) => setPieceForm({ ...pieceForm, rellenoPorcentaje: e.target.value })}
                                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500" />
                              <input type="number" min="0" placeholder="Tiempo impresión (min)" value={pieceForm.tiempoImpresionMin}
                                onChange={(e) => setPieceForm({ ...pieceForm, tiempoImpresionMin: e.target.value })}
                                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500" />
                              <label className="flex items-center space-x-2 text-[11px] text-slate-300 px-1">
                                <input type="checkbox" checked={pieceForm.soportes}
                                  onChange={(e) => setPieceForm({ ...pieceForm, soportes: e.target.checked })}
                                  className="accent-cyan-500" />
                                <span>Requiere soportes</span>
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button type="submit" className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-[11px] font-extrabold hover:bg-cyan-400 transition-colors">
                                Guardar Pieza
                              </button>
                              <button type="button" onClick={() => setShowPieceForm(false)}
                                className="px-3 py-1.5 rounded-lg border border-slate-800 text-slate-400 text-[11px] font-bold hover:text-white transition-colors">
                                Cancelar
                              </button>
                            </div>
                          </form>
                        )}

                        {detail.pieces.length === 0 ? (
                          <p className="text-[11px] text-muted">Este proyecto aún no tiene piezas registradas.</p>
                        ) : (
                          <div className="space-y-3">
                            {detail.pieces.map((pz) => (
                              <div key={pz.id} className="p-4 rounded-xl surface-subtle border border-slate-800 space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                  <div>
                                    <span className="text-xs font-bold text-white">{pz.nombrePieza}</span>
                                    <span className="text-[10px] text-muted block">
                                      ×{pz.cantidad} · {pz.material} {pz.color && `· ${pz.color}`}
                                      {pz.largo && ` · Largo: ${pz.largo} · Ancho: ${pz.ancho} · Alto: ${pz.alto} cm`}
                                      {pz.tiempoImpresionMin ? ` · ${pz.tiempoImpresionMin} min máquina` : ''}
                                      {pz.soportes ? ' · Con soportes' : ''}
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => handleDeletePiece(pz.id)}
                                    className="p-1.5 rounded-lg border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 transition-colors w-fit"
                                    title="Eliminar pieza (CASCADE: costos y archivos)"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>

                                {/* Archivos multimedia de la pieza */}
                                {pz.files && pz.files.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {pz.files.map(f => (
                                      <span key={f.id} className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-300 flex items-center space-x-1.5">
                                        <Paperclip className="w-3 h-3 text-purple-400" />
                                        <span>{f.tipoArchivo}: {f.descripcion || f.rutaArchivo}</span>
                                        <button
                                          onClick={async () => {
                                            try {
                                              await apiClient.request(`/projects/files/${f.id}`, { method: 'DELETE' });
                                              loadProjectDetail(expandedId);
                                            } catch (err) { showMsg('error', err.message); }
                                          }}
                                          className="text-rose-400 hover:text-rose-300"
                                          title="Eliminar archivo"
                                        >
                                          <X className="w-3 h-3" />
                                        </button>
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {/* Subida de imagen / video de la pieza */}
                                <div className="pt-1">
                                  <label className="text-[10px] font-bold text-muted uppercase flex items-center space-x-1 mb-1">
                                    <Image className="w-3.5 h-3.5" />
                                    <span>Imagen / Video del proceso</span>
                                  </label>
                                  <input
                                    type="file"
                                    accept="image/*,video/*"
                                    onChange={(e) => {
                                      if (e.target.files && e.target.files[0]) {
                                        handleUploadPieceFile(pz.id, e.target.files[0]);
                                      }
                                      e.target.value = '';
                                    }}
                                    disabled={uploadingFile === pz.id}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 cursor-pointer file:mr-2 file:py-1 file:px-2 file:rounded-lg file:border-0 file:bg-purple-500/10 file:text-purple-400 file:text-[10px] file:font-bold hover:file:bg-purple-500/20 disabled:opacity-50 transition-colors"
                                  />
                                  <span className="text-[10px] text-muted block mt-0.5">
                                    Sube fotos, render o video del proceso de esta pieza (máx. 50 MB).
                                  </span>
                                </div>

                                {/* Editor de costos de la pieza */}
                                {costForms[pz.id] && (
                                  <div className="pt-2 border-t border-slate-800/70 space-y-2">
                                    <span className="text-[10px] font-bold text-muted uppercase flex items-center space-x-1">
                                      <Wallet className="w-3.5 h-3.5 text-emerald-400" />
                                      <span>Estructura de Costos y Venta (COP)</span>
                                    </span>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                                      {[
                                        ['costoMaterialKg', 'Costo mat. $/kg'],
                                        ['materialUsadoGramos', 'Material usado (g)'],
                                        ['costoEnergiaKwh', 'Energía (kWh)'],
                                        ['precioKwh', 'Precio $/kWh'],
                                        ['horasDiseno', 'Horas diseño'],
                                        ['costoHoraDiseno', '$ hora diseño'],
                                        ['costoManoObra', 'Mano de obra'],
                                        ['otrosCostos', 'Otros costos'],
                                        ['precioVenta', 'Precio venta']
                                      ].map(([field, label]) => (
                                        <div key={field} className="space-y-0.5">
                                          <label className="text-[9px] text-muted block">{label}</label>
                                          <input
                                            type="number" min="0" step="0.01"
                                            value={costForms[pz.id][field]}
                                            onChange={(e) => setCostForms({
                                              ...costForms,
                                              [pz.id]: { ...costForms[pz.id], [field]: e.target.value }
                                            })}
                                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-[11px] font-mono text-slate-200 focus:outline-none focus:border-emerald-500"
                                          />
                                        </div>
                                      ))}
                                      <div className="flex items-end">
                                        <button
                                          onClick={() => handleSaveCost(pz.id)}
                                          className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold hover:bg-emerald-500/20 transition-colors w-full"
                                        >
                                          Calcular y Guardar
                                        </button>
                                      </div>
                                    </div>

                                    {pz.cost && (
                                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                                        <div className="text-[10px]">
                                          <span className="text-muted block">Costo Total</span>
                                          <span className="font-mono font-bold text-white">{fmtMoney(pz.cost.costoTotal)}</span>
                                        </div>
                                        <div className="text-[10px]">
                                          <span className="text-muted block">Precio Venta</span>
                                          <span className="font-mono font-bold text-white">{fmtMoney(pz.cost.precioVenta)}</span>
                                        </div>
                                        <div className="text-[10px]">
                                          <span className="text-muted block">Ganancia</span>
                                          <span className={`font-mono font-bold ${pz.cost.ganancia >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                            {fmtMoney(pz.cost.ganancia)}
                                          </span>
                                        </div>
                                        <div className="text-[10px]">
                                          <span className="text-muted block">Material + Energía + Diseño</span>
                                          <span className="font-mono text-slate-300">
                                            {fmtMoney(pz.cost.costoMaterialTotal)} + {fmtMoney(pz.cost.costoEnergiaTotal)} + {fmtMoney(pz.cost.costoDisenoTotal)}
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* ---- Pagos ---- */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-bold text-white flex items-center space-x-2">
                            <CreditCard className="w-4 h-4 text-emerald-400" />
                            <span>Pagos del Proyecto ({detail.payments.length})</span>
                          </h5>
                          <button
                            onClick={() => setShowPaymentForm(!showPaymentForm)}
                            className="px-2.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold flex items-center space-x-1 hover:bg-emerald-500/20 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Registrar Pago</span>
                          </button>
                        </div>

                        {showPaymentForm && (
                          <form onSubmit={handleAddPayment} className="p-4 rounded-xl surface-subtle border border-emerald-500/30 grid grid-cols-2 sm:grid-cols-5 gap-2 animate-fadeIn">
                            <input required type="number" min="1" placeholder="Monto (COP) *" value={paymentForm.monto}
                              onChange={(e) => setPaymentForm({ ...paymentForm, monto: e.target.value })}
                              className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500" />
                            <select value={paymentForm.metodoPago}
                              onChange={(e) => setPaymentForm({ ...paymentForm, metodoPago: e.target.value })}
                              className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500">
                              {meta.paymentMethods.map(m => <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>)}
                            </select>
                            <input type="text" placeholder="Referencia / comprobante" value={paymentForm.referencia}
                              onChange={(e) => setPaymentForm({ ...paymentForm, referencia: e.target.value })}
                              className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500" />
                            <select value={paymentForm.estado}
                              onChange={(e) => setPaymentForm({ ...paymentForm, estado: e.target.value })}
                              className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500">
                              {meta.paymentStatus.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                            </select>
                            <div className="flex items-center space-x-2">
                              <button type="submit" className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-[11px] font-extrabold hover:bg-emerald-400 transition-colors">
                                Guardar
                              </button>
                              <button type="button" onClick={() => setShowPaymentForm(false)}
                                className="px-3 py-1.5 rounded-lg border border-slate-800 text-slate-400 text-[11px] font-bold hover:text-white transition-colors">
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </form>
                        )}

                        {detail.payments.length === 0 ? (
                          <p className="text-[11px] text-muted">No hay pagos registrados para este proyecto.</p>
                        ) : (
                          <div className="space-y-2">
                            {detail.payments.map((pg) => (
                              <div key={pg.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl surface-subtle border border-slate-800">
                                <div className="flex items-center space-x-3">
                                  <Banknote className="w-4 h-4 text-emerald-400 shrink-0" />
                                  <div>
                                    <span className="text-xs font-bold text-white font-mono">{fmtMoney(pg.monto)}</span>
                                    <span className="text-[10px] text-muted block">
                                      {pg.metodoPago} · {fmtDate(pg.fechaPago)}{pg.referencia && ` · Ref: ${pg.referencia}`}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <select
                                    value={pg.estado}
                                    onChange={(e) => handleUpdatePaymentStatus(pg.id, e.target.value)}
                                    className={`border rounded-lg px-2 py-1 text-[10px] font-bold focus:outline-none bg-slate-900 ${
                                      pg.estado === 'completado' ? 'text-emerald-400 border-emerald-500/40'
                                      : pg.estado === 'parcial' ? 'text-amber-400 border-amber-500/40'
                                      : 'text-slate-300 border-slate-700'
                                    }`}
                                  >
                                    {meta.paymentStatus.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                                  </select>
                                  <button
                                    onClick={() => handleDeletePayment(pg.id)}
                                    className="p-1.5 rounded-lg border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 transition-colors"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {detail.notas && (
                        <p className="text-[11px] text-amber-400/80 bg-amber-500/5 border border-amber-500/20 rounded-xl p-3">
                          <strong>Notas del taller:</strong> {detail.notas}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ================= SECCIÓN CLIENTES ================= */}
      {section === 'clients' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Clientes Registrados ({clients.length})</span>
            </h3>
            <button
              onClick={() => setShowClientForm(!showClientForm)}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center space-x-2 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span>Nuevo Cliente</span>
            </button>
          </div>

          {showClientForm && (
            <form onSubmit={handleCreateClient} className="surface-card p-5 rounded-2xl border border-amber-500/30 space-y-3 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input required type="text" placeholder="Nombre completo *" value={clientForm.nombre}
                  onChange={(e) => setClientForm({ ...clientForm, nombre: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500" />
                <input required type="email" placeholder="Correo electrónico *" value={clientForm.email}
                  onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500" />
                <input type="text" placeholder="Teléfono" value={clientForm.telefono}
                  onChange={(e) => setClientForm({ ...clientForm, telefono: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500" />
                <input type="text" placeholder="Dirección" value={clientForm.direccion}
                  onChange={(e) => setClientForm({ ...clientForm, direccion: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500" />
              </div>
              <textarea rows={2} placeholder="Notas internas del cliente (opcional)" value={clientForm.notas}
                onChange={(e) => setClientForm({ ...clientForm, notas: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500 resize-none" />
              <div className="flex items-center space-x-2">
                <button type="submit" className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-colors">
                  Guardar Cliente
                </button>
                <button type="button" onClick={() => { setShowClientForm(false); setClientForm(EMPTY_CLIENT_FORM); }}
                  className="px-4 py-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-bold transition-colors">
                  Cancelar
                </button>
              </div>
            </form>
          )}

          {clients.length === 0 ? (
            <div className="surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted">
              No hay clientes registrados. Cree el primero para asociar proyectos.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {clients.map((c) => (
                <div key={c.id} className="surface-card p-5 rounded-2xl border border-slate-800 space-y-3 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-sm shrink-0">
                        {c.nombre.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs sm:text-sm">{c.nombre}</h4>
                        <span className="text-[10px] text-muted block">{c.email}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteClient(c)}
                      className="p-1.5 rounded-lg border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="Eliminar cliente (RESTRICT si tiene proyectos)"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-[11px] text-muted space-y-1">
                    {c.telefono && <span className="block">Tel: {c.telefono}</span>}
                    {c.direccion && <span className="block">Dir: {c.direccion}</span>}
                    <span className="block">Registrado: {fmtDate(c.fechaRegistro)}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-muted">Proyectos asociados</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                      c.projectsCount > 0
                        ? 'bg-brand-500/10 text-brand-400 border-brand-500/30'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}>
                      {c.projectsCount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
