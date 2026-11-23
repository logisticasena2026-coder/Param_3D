const db = require('../config/db');

// Validación básica de correo electrónico
const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// ---------- Helpers ERP — Clientes CRM (Ventas) ----------
const calcularLifecycleCliente = (ordersCount, totalVentas) => {
  if (ordersCount === 0) return { status: 'Sin datos', tqs: false, scoreVentas: 0 };
  if (ordersCount >= 5 || totalVentas >= 1000000) return { status: 'Fiduciario', tqs: true, scoreVentas: totalVentas + ordersCount * 10000 };
  if (ordersCount >= 3 || totalVentas >= 500000) return { status: 'Prometedor', tqs: false, scoreVentas: totalVentas + ordersCount * 5000 };
  if (ordersCount === 1) return { status: 'Primera visita', tqs: false, scoreVentas: totalVentas };
  return { status: 'Prometedor', tqs: false, scoreVentas: totalVentas + ordersCount * 2000 };
};

// Recalcular lifecycle del cliente (ordersCount, totalVentas, primeraVisita, status, tqs, scoreVentas)
const recomputeCliente = (email) => {
  const orders = db.getCollection('orders').filter(o => o.customerEmail === email);
  const clientes = db.getCollection('clients');
  const cliente = clientes.find(c => c.email === email);
  if (!cliente) return { error: 'Cliente no registrado' };
  const totalVentas = orders.reduce((acc, o) => acc + (Number(o.subtotal) || 0), 0);
  const ordersCount = orders.length;
  const { status, tqs, scoreVentas } = calcularLifecycleCliente(ordersCount, totalVentas);
  cliente.ordersCount = ordersCount;
  cliente.totalVentas = totalVentas;
  cliente.primeraVisita = ordersCount === 1;
  cliente.tqs = tqs;
  cliente.status = status;
  cliente.scoreVentas = scoreVentas;
  cliente.ultimaVisita = orders.length ? new Date(orders[0].createdAt).toISOString() : null;
  db.setCollection('clientes', clientes);
  return { stats: { ordersCount, totalVentas, primeraVisita: cliente.primeraVisita, status, tqs, scoreVentas, ultimaVisita: cliente.ultimaVisita } };
};

// Enriquecer un cliente con estadísticas de ventas
const enriquecerCliente = (c) => {
  const orders = db.getCollection('orders').filter(o => o.customerEmail === c.email);
  const ordersCount = c.ordersCount || orders.length || 0;
  const totalVentas = c.totalVentas || orders.reduce((acc, o) => acc + (Number(o.subtotal) || 0), 0);
  const { status, tqs, scoreVentas } = calcularLifecycleCliente(ordersCount, totalVentas);
  return {
    ...c,
    ordersCount,
    totalVentas,
    primeraVisita: c.primeraVisita !== undefined ? c.primeraVisita : orders.length === 1,
    tqs: c.tqs || false,
    status: c.status || status,
    scoreVentas: c.scoreVentas || scoreVentas,
    ultimaVisita: c.ultimaVisita || (orders.length ? new Date(orders[0].createdAt).toISOString() : null),
    orders: orders.map(o => ({ id: o.id, orderNumber: o.orderNumber, fecha: o.createdAt, total: o.total, status: o.status, channelName: o.channelName }))
  };
};

// Listar todos los clientes con conteo de proyectos y datos de ventas asociados (Admin)
const getAllClients = (req, res, next) => {
  try {
    const projects = db.getCollection('projects');
    const enriched = db.getCollection('clients').map(c => ({
      ...enriquecerCliente(c),
      projectsCount: projects.filter(p => p.clientId === c.id).length
    }));
    res.json(enriched);
  } catch (error) {
    next(error);
  }
};

// Obtener un cliente por ID con sus proyectos y historial de ventas
const getClientById = (req, res, next) => {
  try {
    const clients = db.getCollection('clients');
    const client = clients.find(c => c.id === req.params.id);

    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const projects = db.getCollection('projects').filter(p => p.clientId === client.id);
    const orders = db.getCollection('orders').filter(o => o.customerEmail === client.email);
    res.json({ ...enriquecerCliente(client), projects, pedidos: orders.map(o => ({ id: o.id, orderNumber: o.orderNumber, estado: o.status, fecha: o.createdAt, total: o.total })) });
  } catch (error) {
    next(error);
  }
};

// Crear un nuevo cliente
const createClient = (req, res, next) => {
  try {
    const { nombre, email, telefono = '', direccion = '', notas = '' } = req.body;

    if (!nombre || nombre.trim().length < 2) {
      return res.status(400).json({ error: 'El nombre del cliente es obligatorio (mínimo 2 caracteres).' });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'Debe proporcionar un correo electrónico válido.' });
    }

    const clients = db.getCollection('clients');
    const normalizedEmail = email.trim().toLowerCase();

    if (clients.some(c => c.email.toLowerCase() === normalizedEmail)) {
      return res.status(409).json({ error: 'Ya existe un cliente registrado con ese correo electrónico.' });
    }

    const newClient = {
      id: `cli-${Date.now()}`,
      nombre: nombre.trim(),
      email: normalizedEmail,
      telefono: telefono.trim(),
      direccion: direccion.trim(),
      notas,
      fechaRegistro: new Date().toISOString()
    };

    clients.unshift(newClient);
    db.setCollection('clients', clients);

    res.status(201).json({ message: 'Cliente registrado exitosamente', client: newClient });
  } catch (error) {
    next(error);
  }
};

// Actualizar datos de un cliente
const updateClient = (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre, email, telefono, direccion, notas } = req.body;

    const clients = db.getCollection('clients');
    const index = clients.findIndex(c => c.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    if (nombre !== undefined && nombre.trim().length < 2) {
      return res.status(400).json({ error: 'El nombre del cliente es obligatorio (mínimo 2 caracteres).' });
    }
    if (email !== undefined) {
      if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({ error: 'Debe proporcionar un correo electrónico válido.' });
      }
      const normalizedEmail = email.trim().toLowerCase();
      if (clients.some(c => c.id !== id && c.email.toLowerCase() === normalizedEmail)) {
        return res.status(409).json({ error: 'Otro cliente ya usa ese correo electrónico.' });
      }
      clients[index].email = normalizedEmail;
    }

    if (nombre !== undefined) clients[index].nombre = nombre.trim();
    if (telefono !== undefined) clients[index].telefono = telefono.trim();
    if (direccion !== undefined) clients[index].direccion = direccion.trim();
    if (notas !== undefined) clients[index].notas = notas;
    clients[index].updatedAt = new Date().toISOString();

    db.setCollection('clients', clients);

    // Actualizar lifecycle de ventas
    const stats = recomputeCliente(clients[index].email);

    res.json({
      message: 'Cliente actualizado exitosamente',
      client: clients[index],
      clientStats: stats?.stats || null
    });
  } catch (error) {
    next(error);
  }
};

// Eliminar cliente — política RESTRICT: no se puede borrar si tiene proyectos asociados
const deleteClient = (req, res, next) => {
  try {
    const { id } = req.params;
    const clients = db.getCollection('clients');
    const client = clients.find(c => c.id === id);

    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const projects = db.getCollection('projects');
    const associated = projects.filter(p => p.clientId === id);

    if (associated.length > 0) {
      return res.status(409).json({
        error: `No se puede eliminar al cliente "${client.nombre}": tiene ${associated.length} proyecto(s) asociado(s). Elimine o reasigne los proyectos primero (política RESTRICT).`
      });
    }

    db.setCollection('clients', clients.filter(c => c.id !== id));
    res.json({ message: `Cliente "${client.nombre}" eliminado exitosamente` });
  } catch (error) {
    next(error);
  }
};

// Estadísticas completas de un cliente (Clientes CRM)
const getClientStats = (req, res, next) => {
  try {
    const client = db.getCollection('clients').find(c => c.id === req.params.id);
    if (!client) return res.status(404).json({ error: 'Cliente no encontrado' });
    const stats = recomputeCliente(client.email);
    res.json({ client: enriquecerCliente(client), ...stats });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  getClientStats
};
