const db = require('../config/db');

// Validación básica de correo electrónico
const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Listar todos los clientes con conteo de proyectos asociados (Admin)
const getAllClients = (req, res, next) => {
  try {
    const clients = db.getCollection('clients');
    const projects = db.getCollection('projects');

    const enriched = clients.map(c => ({
      ...c,
      projectsCount: projects.filter(p => p.clientId === c.id).length
    }));

    res.json(enriched);
  } catch (error) {
    next(error);
  }
};

// Obtener un cliente por ID con sus proyectos
const getClientById = (req, res, next) => {
  try {
    const clients = db.getCollection('clients');
    const client = clients.find(c => c.id === req.params.id);

    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const projects = db.getCollection('projects').filter(p => p.clientId === client.id);
    res.json({ ...client, projects });
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
    res.json({ message: 'Cliente actualizado exitosamente', client: clients[index] });
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

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
};
