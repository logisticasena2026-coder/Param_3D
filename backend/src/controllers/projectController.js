const db = require('../config/db');

// Catálogos controlados (equivalentes a los ENUM del esquema SQL)
const PROJECT_TYPES = ['impresion_3d', 'router_cnc', 'avisos', 'metal', 'diseno_parametrico', 'otro'];
const PROJECT_TYPE_LABELS = {
  impresion_3d: 'Impresión 3D',
  router_cnc: 'Router CNC',
  avisos: 'Avisos Publicitarios',
  metal: 'Corte y Metal',
  diseno_parametrico: 'Diseño Paramétrico',
  otro: 'Otro'
};
const PROJECT_STATUS = ['pendiente', 'en_proceso', 'completado', 'cancelado'];
const PROJECT_PRIORITY = ['baja', 'media', 'alta', 'urgente'];
const FILE_TYPES = ['foto', 'render', 'plano', 'otro'];
const PAYMENT_METHODS = ['efectivo', 'transferencia', 'tarjeta', 'otro'];
const PAYMENT_STATUS = ['pendiente', 'parcial', 'completado'];

// Metadatos del módulo para poblar selects del frontend
const getProjectsMeta = (req, res) => {
  res.json({
    types: PROJECT_TYPES.map(value => ({ value, label: PROJECT_TYPE_LABELS[value] })),
    status: PROJECT_STATUS,
    priorities: PROJECT_PRIORITY,
    fileTypes: FILE_TYPES,
    paymentMethods: PAYMENT_METHODS,
    paymentStatus: PAYMENT_STATUS
  });
};

// Resumen para el dashboard administrativo
const getProjectsSummary = (req, res, next) => {
  try {
    const projects = db.getCollection('projects');
    const payments = db.getCollection('payments');
    const pieces = db.getCollection('pieces');

    const byStatus = {};
    const byType = {};
    PROJECT_STATUS.forEach(s => { byStatus[s] = 0; });
    PROJECT_TYPES.forEach(t => { byType[t] = 0; });
    projects.forEach(p => {
      byStatus[p.estado] = (byStatus[p.estado] || 0) + 1;
      byType[p.tipoProyecto] = (byType[p.tipoProyecto] || 0) + 1;
    });

    const confirmedPayments = payments.filter(p => p.estado === 'completado');

    res.json({
      totalProjects: projects.length,
      totalPieces: pieces.length,
      activeProjects: projects.filter(p => p.estado === 'pendiente' || p.estado === 'en_proceso').length,
      byStatus,
      byType,
      totalCollected: confirmedPayments.reduce((acc, p) => acc + Number(p.monto || 0), 0),
      pendingPayments: payments.filter(p => p.estado !== 'completado').length
    });
  } catch (error) {
    next(error);
  }
};

// Listar proyectos con filtros opcionales: ?estado= &tipo= &prioridad= &clienteId=
const getAllProjects = (req, res, next) => {
  try {
    const { estado, tipo, prioridad, clienteId } = req.query;
    const projects = db.getCollection('projects');
    const clients = db.getCollection('clients');
    const pieces = db.getCollection('pieces');
    const payments = db.getCollection('payments');

    let filtered = projects;
    if (estado) filtered = filtered.filter(p => p.estado === estado);
    if (tipo) filtered = filtered.filter(p => p.tipoProyecto === tipo);
    if (prioridad) filtered = filtered.filter(p => p.prioridad === prioridad);
    if (clienteId) filtered = filtered.filter(p => p.clientId === clienteId);

    const enriched = filtered.map(p => {
      const client = clients.find(c => c.id === p.clientId);
      const projectPieces = pieces.filter(pz => pz.projectId === p.id);
      const projectPayments = payments.filter(pg => pg.proyectoId === p.id);
      return {
        ...p,
        clientName: client ? client.nombre : 'Cliente eliminado',
        piecesCount: projectPieces.length,
        totalPaid: projectPayments
          .filter(pg => pg.estado === 'completado')
          .reduce((acc, pg) => acc + Number(pg.monto || 0), 0)
      };
    });

    res.json(enriched);
  } catch (error) {
    next(error);
  }
};

// Detalle completo de un proyecto: piezas con costos y archivos + pagos
const getProjectById = (req, res, next) => {
  try {
    const projects = db.getCollection('projects');
    const project = projects.find(p => p.id === req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const client = db.getCollection('clients').find(c => c.id === project.clientId);
    const pieces = db.getCollection('pieces').filter(pz => pz.projectId === project.id);
    const costs = db.getCollection('costs');
    const files = db.getCollection('projectFiles');
    const payments = db.getCollection('payments').filter(pg => pg.proyectoId === project.id);

    const detailedPieces = pieces.map(pz => ({
      ...pz,
      cost: costs.find(c => c.pieceId === pz.id) || null,
      files: files.filter(f => f.pieceId === pz.id)
    }));

    res.json({
      ...project,
      client: client || null,
      pieces: detailedPieces,
      payments
    });
  } catch (error) {
    next(error);
  }
};

// Crear proyecto (valida tipo, estado, prioridad y existencia del cliente)
const createProject = (req, res, next) => {
  try {
    const {
      clientId,
      tipoProyecto = 'impresion_3d',
      nombreProyecto,
      descripcion = '',
      fechaInicio,
      fechaEntrega = null,
      prioridad = 'media',
      notas = ''
    } = req.body;

    if (!clientId) {
      return res.status(400).json({ error: 'Debe asociar el proyecto a un cliente existente.' });
    }
    const client = db.getCollection('clients').find(c => c.id === clientId);
    if (!client) {
      return res.status(404).json({ error: 'El cliente indicado no existe. Regístrelo primero.' });
    }
    if (!nombreProyecto || nombreProyecto.trim().length < 3) {
      return res.status(400).json({ error: 'El nombre del proyecto es obligatorio (mínimo 3 caracteres).' });
    }
    if (!PROJECT_TYPES.includes(tipoProyecto)) {
      return res.status(400).json({ error: `Tipo de proyecto inválido. Permitidos: ${PROJECT_TYPES.join(', ')}` });
    }
    if (!PROJECT_PRIORITY.includes(prioridad)) {
      return res.status(400).json({ error: `Prioridad inválida. Permitidas: ${PROJECT_PRIORITY.join(', ')}` });
    }
    if (fechaEntrega && fechaInicio && new Date(fechaEntrega) < new Date(fechaInicio)) {
      return res.status(400).json({ error: 'La fecha de entrega no puede ser anterior a la fecha de inicio.' });
    }

    const projects = db.getCollection('projects');
    const newProject = {
      id: `prj-${Date.now()}`,
      clientId,
      tipoProyecto,
      nombreProyecto: nombreProyecto.trim(),
      descripcion,
      fechaInicio: fechaInicio || new Date().toISOString().slice(0, 10),
      fechaEntrega,
      fechaCompletado: null,
      estado: 'pendiente',
      prioridad,
      notas,
      createdAt: new Date().toISOString()
    };

    projects.unshift(newProject);
    db.setCollection('projects', projects);

    res.status(201).json({ message: 'Proyecto creado exitosamente', project: newProject });
  } catch (error) {
    next(error);
  }
};

// Actualizar proyecto (al pasar a 'completado' se sella fechaCompletado)
const updateProject = (req, res, next) => {
  try {
    const { id } = req.params;
    const projects = db.getCollection('projects');
    const index = projects.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const {
      clientId, tipoProyecto, nombreProyecto, descripcion,
      fechaInicio, fechaEntrega, estado, prioridad, notas
    } = req.body;

    if (clientId !== undefined) {
      const client = db.getCollection('clients').find(c => c.id === clientId);
      if (!client) {
        return res.status(404).json({ error: 'El cliente indicado no existe.' });
      }
      projects[index].clientId = clientId;
    }
    if (tipoProyecto !== undefined) {
      if (!PROJECT_TYPES.includes(tipoProyecto)) {
        return res.status(400).json({ error: `Tipo de proyecto inválido. Permitidos: ${PROJECT_TYPES.join(', ')}` });
      }
      projects[index].tipoProyecto = tipoProyecto;
    }
    if (estado !== undefined) {
      if (!PROJECT_STATUS.includes(estado)) {
        return res.status(400).json({ error: `Estado inválido. Permitidos: ${PROJECT_STATUS.join(', ')}` });
      }
      projects[index].estado = estado;
      // Sello de fecha de completado al cerrar el proyecto
      if (estado === 'completado' && !projects[index].fechaCompletado) {
        projects[index].fechaCompletado = new Date().toISOString();
      }
      if (estado !== 'completado') {
        projects[index].fechaCompletado = null;
      }
    }
    if (prioridad !== undefined) {
      if (!PROJECT_PRIORITY.includes(prioridad)) {
        return res.status(400).json({ error: `Prioridad inválida. Permitidas: ${PROJECT_PRIORITY.join(', ')}` });
      }
      projects[index].prioridad = prioridad;
    }
    if (nombreProyecto !== undefined) {
      if (nombreProyecto.trim().length < 3) {
        return res.status(400).json({ error: 'El nombre del proyecto es obligatorio (mínimo 3 caracteres).' });
      }
      projects[index].nombreProyecto = nombreProyecto.trim();
    }
    if (descripcion !== undefined) projects[index].descripcion = descripcion;
    if (fechaInicio !== undefined) projects[index].fechaInicio = fechaInicio;
    if (fechaEntrega !== undefined) projects[index].fechaEntrega = fechaEntrega;
    if (notas !== undefined) projects[index].notas = notas;

    const finalInicio = new Date(projects[index].fechaInicio);
    const finalEntrega = projects[index].fechaEntrega ? new Date(projects[index].fechaEntrega) : null;
    if (finalEntrega && finalEntrega < finalInicio) {
      return res.status(400).json({ error: 'La fecha de entrega no puede ser anterior a la fecha de inicio.' });
    }

    projects[index].updatedAt = new Date().toISOString();
    db.setCollection('projects', projects);

    res.json({ message: 'Proyecto actualizado exitosamente', project: projects[index] });
  } catch (error) {
    next(error);
  }
};

// Eliminar proyecto — política RESTRICT: no se borra si tiene piezas o pagos
const deleteProject = (req, res, next) => {
  try {
    const { id } = req.params;
    const projects = db.getCollection('projects');
    const project = projects.find(p => p.id === id);

    if (!project) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const piecesCount = db.getCollection('pieces').filter(pz => pz.projectId === id).length;
    const paymentsCount = db.getCollection('payments').filter(pg => pg.proyectoId === id).length;

    if (piecesCount > 0 || paymentsCount > 0) {
      return res.status(409).json({
        error: `No se puede eliminar el proyecto "${project.nombreProyecto}": tiene ${piecesCount} pieza(s) y ${paymentsCount} pago(s) asociados. Depure sus datos primero (política RESTRICT).`
      });
    }

    db.setCollection('projects', projects.filter(p => p.id !== id));
    res.json({ message: `Proyecto "${project.nombreProyecto}" eliminado exitosamente` });
  } catch (error) {
    next(error);
  }
};

// ---------------------------------------------------------------------
// PIEZAS del proyecto
// ---------------------------------------------------------------------

const addPiece = (req, res, next) => {
  try {
    const { projectId } = req.params;
    const project = db.getCollection('projects').find(p => p.id === projectId);
    if (!project) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const {
      nombrePieza,
      cantidad = 1,
      largo = null,
      ancho = null,
      alto = null,
      volumenCm3 = null,
      pesoGramos = null,
      material = 'PLA',
      color = '',
      alturaCapa = null,
      rellenoPorcentaje = 20,
      soportes = false,
      tiempoImpresionMin = null,
      archivoStl = '',
      archivoGcode = '',
      notas = ''
    } = req.body;

    if (!nombrePieza || nombrePieza.trim().length < 2) {
      return res.status(400).json({ error: 'El nombre de la pieza es obligatorio.' });
    }
    if (Number(cantidad) < 1) {
      return res.status(400).json({ error: 'La cantidad debe ser mayor a cero.' });
    }
    const infill = Number(rellenoPorcentaje);
    if (infill < 0 || infill > 100) {
      return res.status(400).json({ error: 'El relleno debe estar entre 0 y 100%.' });
    }

    const pieces = db.getCollection('pieces');
    const newPiece = {
      id: `pza-${Date.now()}`,
      projectId,
      nombrePieza: nombrePieza.trim(),
      cantidad: Number(cantidad),
      largo, ancho, alto,
      volumenCm3, pesoGramos,
      material, color, alturaCapa,
      rellenoPorcentaje: infill,
      soportes: Boolean(soportes),
      tiempoImpresionMin,
      archivoStl, archivoGcode, notas,
      createdAt: new Date().toISOString()
    };

    pieces.push(newPiece);
    db.setCollection('pieces', pieces);

    res.status(201).json({ message: 'Pieza agregada al proyecto', piece: newPiece });
  } catch (error) {
    next(error);
  }
};

const updatePiece = (req, res, next) => {
  try {
    const pieces = db.getCollection('pieces');
    const index = pieces.findIndex(pz => pz.id === req.params.pieceId);

    if (index === -1) {
      return res.status(404).json({ error: 'Pieza no encontrada' });
    }

    const fields = [
      'nombrePieza', 'cantidad', 'largo', 'ancho', 'alto',
      'volumenCm3', 'pesoGramos', 'material', 'color', 'alturaCapa',
      'rellenoPorcentaje', 'soportes', 'tiempoImpresionMin',
      'archivoStl', 'archivoGcode', 'notas'
    ];

    fields.forEach(f => {
      if (req.body[f] !== undefined) pieces[index][f] = req.body[f];
    });

    if (pieces[index].rellenoPorcentaje < 0 || pieces[index].rellenoPorcentaje > 100) {
      return res.status(400).json({ error: 'El relleno debe estar entre 0 y 100%.' });
    }

    pieces[index].updatedAt = new Date().toISOString();
    db.setCollection('pieces', pieces);

    res.json({ message: 'Pieza actualizada', piece: pieces[index] });
  } catch (error) {
    next(error);
  }
};

// Eliminar pieza — política CASCADE: se eliminan sus costos y archivos multimedia
const deletePiece = (req, res, next) => {
  try {
    const { pieceId } = req.params;
    const pieces = db.getCollection('pieces');
    const piece = pieces.find(pz => pz.id === pieceId);

    if (!piece) {
      return res.status(404).json({ error: 'Pieza no encontrada' });
    }

    db.setCollection('pieces', pieces.filter(pz => pz.id !== pieceId));
    db.setCollection('costs', db.getCollection('costs').filter(c => c.pieceId !== pieceId));
    db.setCollection('projectFiles', db.getCollection('projectFiles').filter(f => f.pieceId !== pieceId));

    res.json({ message: `Pieza "${piece.nombrePieza}" eliminada junto con sus costos y archivos (CASCADE)` });
  } catch (error) {
    next(error);
  }
};

// ---------------------------------------------------------------------
// COSTOS de la pieza (relación 1:1, cálculo automático de totales)
// ---------------------------------------------------------------------

const upsertCost = (req, res, next) => {
  try {
    const { pieceId } = req.params;
    const piece = db.getCollection('pieces').find(pz => pz.id === pieceId);
    if (!piece) {
      return res.status(404).json({ error: 'Pieza no encontrada' });
    }

    const num = (v) => Math.max(0, Number(v) || 0);
    const costoMaterialKg = num(req.body.costoMaterialKg);
    const materialUsadoGramos = num(req.body.materialUsadoGramos);
    const costoEnergiaKwh = num(req.body.costoEnergiaKwh);
    const precioKwh = num(req.body.precioKwh);
    const horasDiseno = num(req.body.horasDiseno);
    const costoHoraDiseno = num(req.body.costoHoraDiseno);
    const costoManoObra = num(req.body.costoManoObra);
    const otrosCostos = num(req.body.otrosCostos);
    const precioVenta = num(req.body.precioVenta);

    // Totales calculados (equivalentes a las columnas GENERADAS de PostgreSQL)
    const round2 = (v) => Math.round(v * 100) / 100;
    const costoMaterialTotal = round2(costoMaterialKg * materialUsadoGramos / 1000);
    const costoEnergiaTotal = round2(costoEnergiaKwh * precioKwh);
    const costoDisenoTotal = round2(horasDiseno * costoHoraDiseno);
    const costoTotal = round2(costoMaterialTotal + costoEnergiaTotal + costoDisenoTotal + costoManoObra + otrosCostos);
    const ganancia = round2(precioVenta - costoTotal);

    const costs = db.getCollection('costs');
    const existingIndex = costs.findIndex(c => c.pieceId === pieceId);

    const costData = {
      pieceId,
      costoMaterialKg, materialUsadoGramos, costoMaterialTotal,
      costoEnergiaKwh, precioKwh, costoEnergiaTotal,
      horasDiseno, costoHoraDiseno, costoDisenoTotal,
      costoManoObra, otrosCostos,
      costoTotal, precioVenta, ganancia,
      updatedAt: new Date().toISOString()
    };

    if (existingIndex >= 0) {
      costs[existingIndex] = { ...costs[existingIndex], ...costData };
      db.setCollection('costs', costs);
      return res.json({ message: 'Costos actualizados', cost: costs[existingIndex] });
    }

    const newCost = { id: `cst-${Date.now()}`, ...costData };
    costs.push(newCost);
    db.setCollection('costs', costs);

    res.status(201).json({ message: 'Costos registrados', cost: newCost });
  } catch (error) {
    next(error);
  }
};

// ---------------------------------------------------------------------
// ARCHIVOS MULTIMEDIA de la pieza
// ---------------------------------------------------------------------

const addProjectFile = (req, res, next) => {
  try {
    const { pieceId } = req.params;
    const piece = db.getCollection('pieces').find(pz => pz.id === pieceId);
    if (!piece) {
      return res.status(404).json({ error: 'Pieza no encontrada' });
    }

    const { tipoArchivo = 'foto', descripcion = '', rutaArchivo } = req.body;

    if (!FILE_TYPES.includes(tipoArchivo)) {
      return res.status(400).json({ error: `Tipo de archivo inválido. Permitidos: ${FILE_TYPES.join(', ')}` });
    }

    // La ruta puede venir del upload (multer) o como ruta manual
    const finalPath = req.file ? `/uploads/images/${req.file.filename}` : (rutaArchivo || '');
    if (!finalPath) {
      return res.status(400).json({ error: 'Debe adjuntar un archivo o indicar una ruta válida.' });
    }

    const files = db.getCollection('projectFiles');
    const newFile = {
      id: `fil-${Date.now()}`,
      pieceId,
      tipoArchivo,
      descripcion,
      rutaArchivo: finalPath,
      fechaSubida: new Date().toISOString()
    };

    files.push(newFile);
    db.setCollection('projectFiles', files);

    res.status(201).json({ message: 'Archivo multimedia registrado', file: newFile });
  } catch (error) {
    next(error);
  }
};

const deleteProjectFile = (req, res, next) => {
  try {
    const files = db.getCollection('projectFiles');
    const file = files.find(f => f.id === req.params.fileId);

    if (!file) {
      return res.status(404).json({ error: 'Archivo no encontrado' });
    }

    db.setCollection('projectFiles', files.filter(f => f.id !== file.id));
    res.json({ message: 'Archivo multimedia eliminado' });
  } catch (error) {
    next(error);
  }
};

// ---------------------------------------------------------------------
// PAGOS del proyecto
// ---------------------------------------------------------------------

const addPayment = (req, res, next) => {
  try {
    const { projectId } = req.params;
    const project = db.getCollection('projects').find(p => p.id === projectId);
    if (!project) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const { monto, metodoPago = 'transferencia', referencia = '', estado = 'pendiente', fechaPago } = req.body;

    if (!monto || Number(monto) <= 0) {
      return res.status(400).json({ error: 'El monto del pago debe ser mayor a cero.' });
    }
    if (!PAYMENT_METHODS.includes(metodoPago)) {
      return res.status(400).json({ error: `Método de pago inválido. Permitidos: ${PAYMENT_METHODS.join(', ')}` });
    }
    if (!PAYMENT_STATUS.includes(estado)) {
      return res.status(400).json({ error: `Estado de pago inválido. Permitidos: ${PAYMENT_STATUS.join(', ')}` });
    }

    const payments = db.getCollection('payments');
    const newPayment = {
      id: `pag-${Date.now()}`,
      proyectoId: projectId,
      monto: Number(monto),
      fechaPago: fechaPago || new Date().toISOString(),
      metodoPago,
      referencia,
      estado,
      createdAt: new Date().toISOString()
    };

    payments.push(newPayment);
    db.setCollection('payments', payments);

    res.status(201).json({ message: 'Pago registrado exitosamente', payment: newPayment });
  } catch (error) {
    next(error);
  }
};

const updatePayment = (req, res, next) => {
  try {
    const payments = db.getCollection('payments');
    const index = payments.findIndex(pg => pg.id === req.params.paymentId);

    if (index === -1) {
      return res.status(404).json({ error: 'Pago no encontrado' });
    }

    const { monto, metodoPago, referencia, estado, fechaPago } = req.body;

    if (monto !== undefined) {
      if (Number(monto) <= 0) return res.status(400).json({ error: 'El monto del pago debe ser mayor a cero.' });
      payments[index].monto = Number(monto);
    }
    if (metodoPago !== undefined) {
      if (!PAYMENT_METHODS.includes(metodoPago)) return res.status(400).json({ error: 'Método de pago inválido.' });
      payments[index].metodoPago = metodoPago;
    }
    if (estado !== undefined) {
      if (!PAYMENT_STATUS.includes(estado)) return res.status(400).json({ error: 'Estado de pago inválido.' });
      payments[index].estado = estado;
    }
    if (referencia !== undefined) payments[index].referencia = referencia;
    if (fechaPago !== undefined) payments[index].fechaPago = fechaPago;

    db.setCollection('payments', payments);
    res.json({ message: 'Pago actualizado', payment: payments[index] });
  } catch (error) {
    next(error);
  }
};

const deletePayment = (req, res, next) => {
  try {
    const payments = db.getCollection('payments');
    const payment = payments.find(pg => pg.id === req.params.paymentId);

    if (!payment) {
      return res.status(404).json({ error: 'Pago no encontrado' });
    }

    db.setCollection('payments', payments.filter(pg => pg.id !== payment.id));
    res.json({ message: 'Pago eliminado' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjectsMeta,
  getProjectsSummary,
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  addPiece,
  updatePiece,
  deletePiece,
  upsertCost,
  addProjectFile,
  deleteProjectFile,
  addPayment,
  updatePayment,
  deletePayment
};
