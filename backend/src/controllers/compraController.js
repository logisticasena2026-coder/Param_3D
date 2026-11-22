const db = require('../config/db');
const { PEDIDO_COMPRA_FLOW, INVENTARIO_LEVELS } = require('../erp/models');

// Listar pedidos de compra (Admin, filtros: estado, proveedor)
const getAllCompras = (req, res, next) => {
  try {
    const { estado, proveedorId } = req.query;
    let pedidos = db.getCollection('pedidos_compra');
    if (estado) pedidos = pedidos.filter(p => p.estado === estado);
    if (proveedorId) pedidos = pedidos.filter(p => p.proveedorId === proveedorId);
    pedidos = pedidos.sort((a, b) => new Date(b.fechaConfirmada || b.fechaPromesa || b.fechaCreacion) - new Date(a.fechaConfirmada || a.fechaPromesa || a.fechaCreacion));
    res.json(pedidos);
  } catch (error) { next(error); }
};

// Obtener pedido por ID
const getComproById = (req, res, next) => {
  try {
    const pedido = db.getCollection('pedidos_compra').find(p => p.id === req.params.id);
    if (!pedido) return res.status(404).json({ error: 'Pedido de compra no encontrado' });
    res.json(pedido);
  } catch (error) { next(error); }
};

// Crear pedido de compra (Admin)
const createCompra = (req, res, next) => {
  try {
    const { proveedorId, productId, cantidad, precioUnitario, numeroPropuesto, fechaPromesa, nota } = req.body;

    const proveedor = db.getCollection('proveedores').find(p => p.id === proveedorId);
    if (!proveedor) return res.status(400).json({ error: 'Proveedor no encontrado' });

    const producto = db.getCollection('products').find(p => p.id === productId);
    if (!producto) return res.status(400).json({ error: 'Producto no encontrado' });

    const cant = Number(cantidad) || 1;
    if (cant <= 0) return res.status(400).json({ error: 'La cantidad debe ser > 0.' });

    const precio = Number(precioUnitario ?? producto.price ?? 0);
    const subtotal = Math.round(cant * precio * 100) / 100;

    const numero = numeroPropuesto || `PCO-${Date.now().toString().slice(-6)}`;

    const newCompra = {
      id: `pco-${Date.now()}`,
      numero,
      proveedorId,
      proveedorNombre: proveedor.nombre,
      productId,
      productNombre: producto.name,
      cantidad: cant,
      precioUnitario: precio,
      subtotal,
      estado: 'borrador',
      fechaPromesa: fechaPromesa || null,
      fechaRecepcion: null,
      fechaConfirmada: null,
      nota: nota || '',
      mensajesDeConfirmacion: [],
      fechaCreacion: new Date().toISOString()
    };

    const compras = db.getCollection('pedidos_compra');
    compras.push(newCompra);
    db.setCollection('pedidos_compra', compras);
    res.status(201).json({ message: 'Pedido de compra creado', pedido: newCompra });
  } catch (error) { next(error); }
};

// Aprobar pedido de compra
const confirmCompra = (req, res, next) => {
  try {
    const compras = db.getCollection('pedidos_compra');
    const index = compras.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Pedido de compra no encontrado' });

    const note = req.body?.nota;
    compras[index].estado = 'aprobado';
    compras[index].fechaConfirmada = new Date().toISOString();
    compras[index].notaDeConfirmacion = note || '';
    compras[index].updatedAt = new Date().toISOString();

    db.setCollection('pedidos_compra', compras);
    res.json({ message: 'Pedido de compra aprobado', pedido: compras[index] });
  } catch (error) { next(error); }
};

// Marcar como en tránsito
const markInTransit = (req, res, next) => {
  try {
    const compras = db.getCollection('pedidos_compra');
    const index = compras.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Pedido no encontrado' });
    if (compras[index].estado !== 'aprobado') return res.status(409).json({ error: 'Solo se puede marcar en tránsito si está aprobado.' });

    compras[index].estado = 'en_transito';
    compras[index].updatedAt = new Date().toISOString();
    db.setCollection('pedidos_compra', compras);
    res.json({ message: 'Pedido marcado como en tránsito', pedido: compras[index] });
  } catch (error) { next(error); }
};

// Recibir stock (marca recibido y actualiza stockActual del producto + total completado)
const receiveCompra = (req, res, next) => {
  try {
    const compras = db.getCollection('pedidos_compra');
    const products = db.getCollection('products');

    const index = compras.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Pedido no encontrado' });

    const lote = req.body?.codigoLote;
    if (lote) {
      const lotes = db.getCollection('lotes');
      const newLot = {
        id: `lot-${Date.now()}`,
        codigo: lote,
        numeroSeries: 1,
        productId: compras[index].productId,
        proveedorId: compras[index].proveedorId,
        ubicacion: 'almacen_central',
        fechaRecibido: new Date().toISOString()
      };
      lotes.push(newLot);
      db.setCollection('lotes', lotes);
    }

    const compra = compras[index];
    compra.estado = 'recibido';
    compra.fechaRecepcion = new Date().toISOString();
    compra.updatedAt = new Date().toISOString();

    // Inflar el stock del producto
    const pIdx = products.findIndex(p => p.id === compra.productId);
    if (pIdx >= 0) {
      products[pIdx].stockActual = (Number(products[pIdx].stockActual) || 0) + compra.cantidad;
      products[pIdx].ultimaConteo = new Date().toISOString();
      products[pIdx].updatedAt = new Date().toISOString();
    }

    db.setCollection('pedidos_compra', compras);
    db.setCollection('products', products);

    const p = products[pIdx];
    res.json({
      message: 'Stock recibido y registrado en el inventario',
      pedido: compra,
      stockActualizado: p ? p.stockActual : 0
    });
  } catch (error) { next(error); }
};

// Eliminar pedido de compra (solo si no está confirmado y no tiene recepciones)
const deleteCompra = (req, res, next) => {
  try {
    const compras = db.getCollection('pedidos_compra');
    const index = compras.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Pedido no encontrado' });
    const compra = compras[index];
    if (compra.estado !== 'borrador') return res.status(409).json({ error: 'Solo se puede borrar pedidos en borrador.' });

    compras.splice(index, 1);
    db.setCollection('pedidos_compra', compras);
    res.json({ message: 'Pedido de compra eliminado' });
  } catch (error) { next(error); }
};

// Meta para el UI: flujos, categorías
const getComprasMeta = (req, res) => {
  res.json({
    flujo: PEDIDO_COMPRA_FLOW,
    ubicaciones: ['almacen_central', 'taller', 'sitio_cliente', 'otro']
  });
};

module.exports = {
  getAllCompras, getComproById, createCompra,
  confirmCompra, markInTransit, receiveCompra, deleteCompra,
  getComprasMeta
};
