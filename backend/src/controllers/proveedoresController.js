const db = require('../config/db');
const { validarProveedor } = require('../erp/lib');
const { PROVEEDOR_CATEGORIAS } = require('../erp/models');

// Listar todos los proveedores (Admin)
const getAll = (req, res, next) => {
  try {
    const proveedores = db.getCollection('proveedores');
    const categorias = proveedores.reduce((acc, p) => {
      if (p.categoria && !acc.includes(p.categoria)) acc.push(p.categoria);
      return acc;
    }, []);
    res.json({ proveedores, categorias });
  } catch (error) { next(error); }
};

// Obtener un proveedor por ID
const getById = (req, res, next) => {
  try {
    const proveedor = db.getCollection('proveedores').find(p => p.id === req.params.id);
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
    res.json(proveedor);
  } catch (error) { next(error); }
};

// Crear proveedor (Admin)
const create = (req, res, next) => {
  try {
    const error = validarProveedor(req.body);
    if (error) return res.status(400).json({ error });
    if (PROVEEDOR_CATEGORIAS.length && req.body.categoria && !PROVEEDOR_CATEGORIAS.includes(req.body.categoria)) {
      return res.status(400).json({ error: `Categoría inválida. Permitidas: ${PROVEEDOR_CATEGORIAS.join(', ')}` });
    }

    const proveedores = db.getCollection('proveedores');
    const emailNormalizado = req.body.email.trim().toLowerCase();
    if (proveedores.some(p => p.email && p.email.toLowerCase() === emailNormalizado)) {
      return res.status(409).json({ error: 'Ya existe un proveedor con ese email.' });
    }

    const proveedor = {
      id: `prov-${Date.now()}`,
      nombre: req.body.nombre.trim(),
      email: emailNormalizado,
      telefono: (req.body.telefono || '').trim(),
      webpage: (req.body.webpage || '').trim(),
      ubicacion: (req.body.ubicacion || '').trim(),
      categoria: req.body.categoria || 'otros',
      descripcion: (req.body.descripcion || '').trim(),
      nota: (req.body.nota || '').trim(),
      fechaAlta: new Date().toISOString(),
      estado: 'activo'
    };

    proveedores.unshift(proveedor);
    db.setCollection('proveedores', proveedores);
    res.status(201).json({ message: 'Proveedor creado exitosamente', proveedor });
  } catch (error) { next(error); }
};

// Actualizar proveedor
const update = (req, res, next) => {
  try {
    const proveedores = db.getCollection('proveedores');
    const index = proveedores.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Proveedor no encontrado' });

    if (req.body.nombre !== undefined) {
      const error = validarProveedor(req.body);
      if (error) return res.status(400).json({ error });
    }
    if (req.body.email !== undefined) {
      const emailNorm = req.body.email.trim().toLowerCase();
      const dup = proveedores.some(p => p.id !== proveedores[index].id && p.email && p.email.toLowerCase() === emailNorm);
      if (dup) return res.status(409).json({ error: 'Ya existe un proveedor con ese email.' });
      proveedores[index].email = emailNorm;
    }
    if (req.body.categoria !== undefined && !PROVEEDOR_CATEGORIAS.includes(req.body.categoria)) {
      return res.status(400).json({ error: `Categoría inválida. Permitidas: ${PROVEEDOR_CATEGORIAS.join(', ')}` });
    }

    const upd = ['nombre', 'telefono', 'webpage', 'ubicacion', 'categoria', 'descripcion', 'nota', 'estado'];
    upd.forEach(f => { if (req.body[f] !== undefined) proveedores[index][f] = (typeof req.body[f] === 'string' ? req.body[f].trim() : req.body[f]) || (f === 'categoria' ? 'otros' : ''); });

    proveedores[index].updatedAt = new Date().toISOString();
    db.setCollection('proveedores', proveedores);
    res.json({ message: 'Proveedor actualizado', proveedor: proveedores[index] });
  } catch (error) { next(error); }
};

// Eliminar proveedor — no se puede borrar si hay pedidos de compra asociados (RESTRICT)
const remove = (req, res, next) => {
  try {
    const proveedores = db.getCollection('proveedores');
    const index = proveedores.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Proveedor no encontrado' });

    const pedidos = db.getCollection('pedidos_compra').filter(pc => pc.proveedorId === proveedores[index].id);
    if (pedidos.length > 0) {
      return res.status(409).json({
        error: `No se puede eliminar al proveedor "${proveedores[index].nombre}": tiene ${pedidos.length} pedido(s) de compra asociados. (POLÍTICA: RESTRICT)`
      });
    }

    const nombre = proveedores[index].nombre;
    proveedores.splice(index, 1);
    db.setCollection('proveedores', proveedores);
    res.json({ message: `Proveedor "${nombre}" eliminado exitosamente` });
  } catch (error) { next(error); }
};

// Buscar proveedores por name/email/telefono
const search = (req, res, next) => {
  try {
    const q = (req.query.q || '').toLowerCase();
    if (!q) return res.json(db.getCollection('proveedores'));
    const proveedores = db.getCollection('proveedores');
    res.json(proveedores.filter(p =>
      (p.nombre && p.nombre.toLowerCase().includes(q)) ||
      (p.email && p.email.toLowerCase().includes(q)) ||
      (p.telefono && p.telefono.toLowerCase().includes(q)) ||
      (p.categoria && p.categoria.toLowerCase().includes(q))
    ));
  } catch (error) { next(error); }
};

module.exports = { getAll, getById, create, update, remove, search };
