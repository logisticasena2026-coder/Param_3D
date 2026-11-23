const db = require('../config/db');

const VALID_STATUS = ['pendiente', 'completado'];

// Validar que el pedido y el ítem (producto) existen y que hay cantidad pendiente
const validarDevolucion = (orders, devoluciones, reqBody) => {
  const order = orders.find(o => o.id === reqBody.orderId || o.orderNumber === reqBody.orderId);
  if (!order) return { error: 'Pedido no encontrado. Ingresa un ID o número de pedido válido.' };

  const producto = order.items.find(i => i.productId === reqBody.productId);
  if (!producto) return { error: `El producto no pertenece a este pedido (${order.orderNumber}).` };

  const pedidosReferencia = devoluciones.filter(d => d.orderId === order.id && d.productId === reqBody.productId);
  const pendientes = pedidosReferencia.reduce((acc, d) => acc + (Number(d.cantidad) || 0), 0);
  const ctd = Number(reqBody.cantidad) || 0;

  if (!ctd || ctd < 0) return { error: 'La cantidad debe ser > 0.' };
  if (order.items.find(i => i.productId === reqBody.productId).quantity - pendientes < ctd) {
    return { error: `Exceso: no se pueden devolver más unidades del pedido disponibles (${order.items.find(i => i.productId === reqBody.productId).quantity - pendientes}).` };
  }

  return null;
};

// Crear Devolución (Ventas)
const createDevolucion = (req, res, next) => {
  try {
    const { orderId, productId, cantidad, motivo, isGananciaVencida = false } = req.body;
    if (!orderId || !productId) return res.status(400).json({ error: 'Ingresa orderId y productId.' });

    const orders = db.getCollection('orders');
    const devoluciones = db.getCollection('devoluciones');
    const error = validarDevolucion(orders, devoluciones, { orderId, productId, cantidad });
    if (error) return res.status(400).json({ error: error.error });

    const order = orders.find(o => o.id === orderId || o.orderNumber === orderId);
    const product = order.items.find(i => i.productId === productId);

    const newDevolucion = {
      id: `dev-${Date.now()}`,
      orderId: order.id,
      orderNumber: order.orderNumber,
      cliente: { id: order.userId, nombre: order.customerName, email: order.customerEmail },
      productId,
      productName: product.name,
      cantidad: Number(cantidad),
      motivo: motivo || 'No aplica',
      isGananciaVencida,
      estado: 'pendiente',
      fisicoUbicado: false, // FALISOFS -item no enviado al centro de stock
      fechaSolicitud: new Date().toISOString(),
      fechaResolucion: null,
      precioUnitario: product.price
    };

    devoluciones.push(newDevolucion);

    // Update order: devolucionesCount
    const orderIdx = orders.findIndex(o => o.id === order.id);
    orders[orderIdx].devolucionesCount = (orders[orderIdx].devolucionesCount || 0) + 1;

    db.setCollection('orders', orders);
    db.setCollection('devoluciones', devoluciones);

    res.status(201).json({ message: 'Devolución registrada exitosamente', devolucion: newDevolucion });
  } catch (error) {
    next(error);
  }
};

// Listar devoluciones (Admin + ventas), filtros: orderId, productId, estado, clientId
const getDevoluciones = (req, res, next) => {
  try {
    const { orderId, productId, estado, clienteId } = req.query;
    let list = db.getCollection('devoluciones');

    if (orderId) list = list.filter(d => d.orderId === orderId || d.orderNumber === orderId);
    if (productId) list = list.filter(d => d.productId === productId);
    if (estado) list = list.filter(d => d.estado === estado);

    // Enriquecer con info del producto + pedido
    const orders = db.getCollection('orders');
    list = list.map(d => {
      const order = orders.find(o => o.id === d.orderId);
      const product = order ? order.items.find(i => i.productId === d.productId) : null;
      return { ...d, productName: d.productName || (product?.name || 'Producto eliminado'), estadoLabel: d.estado };
    });

    res.json(list);
  } catch (error) {
    next(error);
  }
};

// Obtener una devolución por ID
const getDevolucionById = (req, res, next) => {
  try {
    const d = db.getCollection('devoluciones').find(x => x.id === req.params.id);
    if (!d) return res.status(404).json({ error: 'Devolución no encontrada' });
    res.json(d);
  } catch (error) {
    next(error);
  }
};

// Estado de la devolución: pendiente -> completado (Ventas)
const updateDevolucion = (req, res, next) => {
  try {
    const { estado, fisicoUbicado } = req.body;
    if (!VALID_STATUS.includes(estado)) return res.status(400).json({ error: `Estado inválido. Permitidos: ${VALID_STATUS.join(', ')}` });

    const devoluciones = db.getCollection('devoluciones');
    const index = devoluciones.findIndex(d => d.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Devolución no encontrada' });

    devoluciones[index].estado = estado;
    devoluciones[index].fisicoUbicado = Boolean(fisicoUbicado || devoluciones[index].fisicoUbicado);
    if (estado === 'completado' && !devoluciones[index].fechaResolucion) {
      devoluciones[index].fechaResolucion = new Date().toISOString();
    }
    devoluciones[index].updatedAt = new Date().toISOString();

    // Restituir stock si la devolución está completa
    if (estado === 'completado') {
      const d = devoluciones[index];
      const products = db.getCollection('products');
      const product = products.find(p => p.id === d.productId);
      if (product) {
        product.stockActual = (Number(product.stockActual) || 0) + d.cantidad;
        product.updatedAt = new Date().toISOString();
        db.setCollection('products', products);
      }
    }

    db.setCollection('devoluciones', devoluciones);
    res.json({ message: `Devolución ${estado}`, devolucion: devoluciones[index] });
  } catch (error) {
    next(error);
  }
};

// Eliminar devolución (Ventas)
const deleteDevolucion = (req, res, next) => {
  try {
    const devoluciones = db.getCollection('devoluciones');
    const index = devoluciones.findIndex(d => d.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Devolución no encontrada' });

    const d = devoluciones[index];
    devoluciones.splice(index, 1);
    db.setCollection('devoluciones', devoluciones);

    // Back-out: si no se resolvió el stock, no se devuelve
    if (d.estado !== 'completado') {
      // stock ya había sido descontado en createOrder - no devuelve
    } else {
      const products = db.getCollection('products');
      const product = products.find(p => p.id === d.productId);
      if (product) {
        product.stockActual = Math.max(0, (Number(product.stockActual) || 0) - d.cantidad);
        product.updatedAt = new Date().toISOString();
        db.setCollection('products', products);
      }
    }

    // Reempujar orders.devolucionesCount
    const orders = db.getCollection('orders');
    const orderIdx = orders.findIndex(o => o.id === d.orderId);
    if (orderIdx !== -1) {
      orders[orderIdx].devolucionesCount = Math.max(0, (orders[orderIdx].devolucionesCount || 0) - 1);
      db.setCollection('orders', orders);
    }

    res.json({ message: 'Devolución eliminada' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDevoluciones, getDevolucionById, createDevolucion, updateDevolucion, deleteDevolucion };
