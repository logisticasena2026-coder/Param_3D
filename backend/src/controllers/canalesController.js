const db = require('../config/db');

const CANALES_TIPOS = ['Store Web', 'API', 'WHL', 'Lista de proveedor', 'CRM', 'Otros'];

// Listar canales de venta (Admin)
const getCanales = (req, res, next) => {
  try {
    res.json(db.getCollection('canales'));
  } catch (error) { next(error); }
};

// Obtener canal por id
const getCanalById = (req, res, next) => {
  try {
    const canal = db.getCollection('canales').find(c => c.id === req.params.id);
    if (!canal) return res.status(404).json({ error: 'Canal no encontrado' });
    res.json(canal);
  } catch (error) { next(error); }
};

// Crear canal de venta (Admin)
const createCanal = (req, res, next) => {
  try {
    const { nombre, tipo = 'Otros', descripcion = '', status = 'activo', ultimaVenta = null } = req.body;

    if (!nombre || !nombre.trim()) return res.status(400).json({ error: 'El nombre del canal es obligatorio.' });
    if (tipo && !CANALES_TIPOS.includes(tipo)) {
      return res.status(400).json({ error: `Tipo inválido. Permitidos: ${CANALES_TIPOS.join(', ')}` });
    }

    const canales = db.getCollection('canales');
    const newCanal = {
      id: `cnal-${Date.now()}`,
      nombre: nombre.trim(),
      tipo: tipo || 'Otros',
      descripcion: descripcion || '',
      status: status || 'activo',
      ultimaVenta: ultimaVenta || null,
      fechaCreacion: new Date().toISOString()
    };

    canales.push(newCanal);
    db.setCollection('canales', canales);
    res.status(201).json({ message: 'Canal creado exitosamente', canal: newCanal });
  } catch (error) { next(error); }
};

// Actualizar canal (Admin)
const updateCanal = (req, res, next) => {
  try {
    const canales = db.getCollection('canales');
    const index = canales.findIndex(c => c.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Canal no encontrado' });

    const upd = ['nombre', 'tipo', 'descripcion', 'status'];
    upd.forEach(f => {
      if (req.body[f] !== undefined) canales[index][f] = req.body[f];
    });
    if (req.body.ultimaVenta !== undefined) canales[index].ultimaVenta = req.body.ultimaVenta;
    canales[index].updatedAt = new Date().toISOString();

    db.setCollection('canales', canales);
    res.json({ message: 'Canal actualizado', canal: canales[index] });
  } catch (error) { next(error); }
};

// Eliminar canal (Admin)
const deleteCanal = (req, res, next) => {
  try {
    const canales = db.getCollection('canales');
    const index = canales.findIndex(c => c.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Canal no encontrado' });
    const nombre = canales[index].nombre;
    canales.splice(index, 1);
    db.setCollection('canales', canales);
    res.json({ message: `Canal "${nombre}" eliminado` });
  } catch (error) { next(error); }
};

// Estadísticas de ventas por canal (para AdminVentas)
const getReporteVentasPorCanal = (req, res, next) => {
  try {
    const canales = db.getCollection('canales');
    const orders = db.getCollection('orders');
    const report = canales.map(c => {
      const channelOrders = orders.filter(o => o.canalesId === c.id);
      const total = channelOrders.reduce((acc, o) => acc + (Number(o.total) || 0), 0);
      return {
        ...c,
        totalVentas: total,
        orders: channelOrders.length,
        ultimosPedidos: channelOrders.slice(0, 5).map(o => ({
          orderNumber: o.orderNumber,
          cliente: o.customerName,
          fecha: o.createdAt,
          total: o.total,
          estado: o.status
        }))
      };
    });
    res.json(report);
  } catch (error) { next(error); }
};

module.exports = { getCanales, getCanalById, createCanal, updateCanal, deleteCanal, getReporteVentasPorCanal };
