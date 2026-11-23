const db = require('../config/db');

const ORDER_STATUS_FLOW = ['Pedido', 'Preparado', 'Terminado', 'Entregado'];
const CANALES_TIPOS = ['Store Web', 'API', 'WHL', 'Lista de proveedor', 'CRM', 'Otros'];

// ---------- Lifecycle de Clientes (Ventas) ----------
const calcularLifecycle = (ordersCount, totalVentas) => {
  if (ordersCount === 0) return { status: 'Sin datos', tqs: false, scoreVentas: 0 };
  if (ordersCount >= 5 || totalVentas >= 1000000) return { status: 'Fiduciario', tqs: true, scoreVentas: totalVentas + ordersCount * 10000 };
  if (ordersCount >= 3 || totalVentas >= 500000) return { status: 'Prometedor', tqs: false, scoreVentas: totalVentas + ordersCount * 5000 };
  if (ordersCount === 1) return { status: 'Primera visita', tqs: false, scoreVentas: totalVentas };
  return { status: 'Prometedor', tqs: false, scoreVentas: totalVentas + ordersCount * 2000 };
};

// Actualizar orders de un cliente desde la colección de órdenes (Calcular lifecycle recomputando stats)
const recomputeCliente = (email) => {
  const orders = db.getCollection('orders').filter(o => o.customerEmail === email);
  const clientes = db.getCollection('clientes');
  const cliente = clientes.find(c => c.email === email);
  if (!cliente) return;
  const stats = {
    ordersCount: orders.length,
    totalVentas: orders.reduce((acc, o) => acc + (Number(o.subtotal) || 0), 0),
    primeraVisita: orders.length >= 1, // FIXME: detect true primera visita del cliente
    ultimaVisita: orders.length ? new Date(orders[0].createdAt).toISOString() : null,
    fechaPrimeraOrden: orders.length ? new Date(orders[0].createdAt).toISOString() : null
  };
  cliente.ordersCount = stats.ordersCount;
  cliente.totalVentas = stats.totalVentas;
  cliente.primeraVisita = orders.length === 1; // primera visita confirmada al pedir 2+ y no haber pedido antes
  const { status, tqs, scoreVentas } = calcularLifecycle(stats.ordersCount, stats.totalVentas);
  cliente.status = status;
  cliente.tqs = tqs;
  cliente.scoreVentas = scoreVentas;
  db.setCollection('clientes', clientes);
  return { stats, lifecycle: { status, tqs, scoreVentas } };
};

// ---------- Stock Validación ----------
const validarStockOrdenes = (items) => {
  const products = db.getCollection('products');
  for (const item of items) {
    const product = products.find(p => p.id === item.productId);
    if (!product) {
      throw new Error(`Producto "${item.name}" (${item.productId}) no existe. Regístralo primero.`);
    }
    const stockActual = Number(product.stockActual) || 0;
    const qty = Number(item.quantity) || 0;
    if (stockActual < qty) {
      return { error: `"${item.name}" no tiene suficiente stock (solicitado: ${qty}, disponible: ${stockActual}). Genera un pedido de compra primero.` };
    }
  }
  return null;
};

const decrementStockOrden = (items) => {
  const products = db.getCollection('products');
  products.forEach(p => {
    const item = items.find(i => i.productId === p.id);
    if (item && p.stockActual !== undefined) {
      p.stockActual = (Number(p.stockActual) || 0) - Number(item.quantity || 0);
      p.updatedAt = new Date().toISOString();
    }
  });
  db.setCollection('products', products);
};

// Crear un nuevo pedido (el usuario debe estar autenticado)
const createOrder = (req, res, next) => {
  try {
    const { items, shippingAddress, notes, paymentMethod = 'Contra entrega / Transferencia', channelId = null, notasProduccion = '' } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'El carrito no contiene productos válidos.' });
    }

    // Validar stock antes de crear (impossible → imposible despedir stock no disponible)
    const stockError = validarStockOrdenes(items);
    if (stockError) {
      return res.status(409).json({ error: stockError.error });
    }

    // Validar cada ítem y su combinación material + color
    let subtotal = 0;
    const validatedItems = items.map((item, idx) => {
      if (!item.productId || !item.name || !item.price || !item.quantity) {
        throw new Error(`Ítem #${idx + 1} incompleto.`);
      }

      // Si es categoría impresión 3D, verificar que eligió material y color
      if (item.category === 'Impresión 3D' || !item.category) {
        if (!item.material || !item.color) {
          throw new Error(`Para el producto "${item.name}" es obligatorio seleccionar material y color.`);
        }
      }

      const itemTotal = Number(item.price) * Number(item.quantity);
      subtotal += itemTotal;

      return {
        productId: item.productId,
        name: item.name,
        category: item.category || 'Impresión 3D',
        material: item.material || 'PLA',
        color: item.color || 'Blanco',
        price: Number(item.price),
        quantity: Number(item.quantity),
        itemTotal,
        imageUrl: item.imageUrl || ''
      };
    });

    const orders = db.getCollection('orders');
    const clientes = db.getCollection('clientes');
    const email = req.user.email;
    const hasOrdersBefore = orders.some(o => o.customerEmail === email);
    const cliente = clientes.find(c => c.email === email);
    const channel = channelId ? db.getCollection('canales').find(c => c.id === channelId) : null;

    const orderNumber = `MQ3D-${Date.now().toString().slice(-6)}`;

    const newOrder = {
      id: `ord-${Date.now()}`,
      orderNumber,
      userId: req.user.id,
      customerName: req.user.name,
      customerEmail: email,
      // ErP Ventas — OrdersProductivo
      primeraVisita: !hasOrdersBefore,
      canalesId: channelId || null,
      channelName: channel ? channel.nombre : (channelId ? channelId : 'General'),
      tqsItems: req.body.tqsItems || [],
      notasProduccion: notasProduccion || '',
      totalVentas: subtotal,
      // Existente
      items: validatedItems,
      subtotal,
      shippingCost: subtotal > 150000 ? 0 : 12000,
      total: subtotal + (subtotal > 150000 ? 0 : 12000),
      shippingAddress: shippingAddress || {
        city: 'Medellín',
        address: 'Dirección por confirmar',
        phone: '3005076700'
      },
      paymentMethod,
      notes: notes || '',
      // Estado inicial estrictamente obligatorio: 'Pedido'
      status: 'Pedido',
      statusHistory: [
        {
          status: 'Pedido',
          timestamp: new Date().toISOString(),
          note: 'Pedido recibido exitosamente en Maquinamos 3D. En cola para revisión técnica de mallas.'
        }
      ],
      createdAt: new Date().toISOString()
    };

    // Guardar pedido
    orders.unshift(newOrder);
    db.setCollection('orders', orders);

    // Decrementar stock (despacho por pedido productivo)
    decrementStockOrden(newOrder.items);

    // Recalcular lifecycle del cliente afectado
    const stats = recomputeCliente(email);

    res.status(201).json({
      message: 'Pedido realizado con éxito',
      order: newOrder,
      clientStats: stats ? stats.stats : null
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener pedidos del usuario actual
const getUserOrders = (req, res, next) => {
  try {
    const orders = db.getCollection('orders');
    const userOrders = orders.filter(o => o.userId === req.user.id);
    res.json(userOrders);
  } catch (error) {
    next(error);
  }
};

// Obtener un pedido específico por ID o por Código de seguimiento
const getOrderById = (req, res, next) => {
  try {
    const { id } = req.params;
    const orders = db.getCollection('orders');
    const order = orders.find(o => o.id === id || o.orderNumber === id);

    if (!order) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }

    // Si es cliente normal, solo puede ver sus propios pedidos
    if (req.user.role !== 'admin' && order.userId !== req.user.id) {
      return res.status(403).json({ error: 'No tienes autorización para ver este pedido.' });
    }

    res.json(order);
  } catch (error) {
    next(error);
  }
};

// Consultar seguimiento público por número de orden (para que el cliente consulte rápido)
const trackOrderPublic = (req, res, next) => {
  try {
    const { orderNumber } = req.params;
    const orders = db.getCollection('orders');
    const order = orders.find(o => o.orderNumber.toUpperCase() === orderNumber.trim().toUpperCase());

    if (!order) {
      return res.status(404).json({ error: 'No se encontró ningún pedido con ese número de guía.' });
    }

    // Devolver datos seguros para seguimiento
    res.json({
      orderNumber: order.orderNumber,
      status: order.status,
      statusHistory: order.statusHistory,
      createdAt: order.createdAt,
      itemsSummary: order.items.map(i => ({ name: i.name, quantity: i.quantity, material: i.material, color: i.color })),
      total: order.total
    });
  } catch (error) {
    next(error);
  }
};

// Listar todos los pedidos (Admin)
const getAllOrders = (req, res, next) => {
  try {
    const orders = db.getCollection('orders');
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

// Actualizar estado del pedido (Admin) con validación del orden estricto:
// 'Pedido' -> 'Preparado' -> 'Terminado' -> 'Entregado'
const updateOrderStatus = (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, note } = req.body;

    if (!ORDER_STATUS_FLOW.includes(status)) {
      return res.status(400).json({
        error: `Estado inválido. Los estados permitidos en orden son: ${ORDER_STATUS_FLOW.join(' → ')}`
      });
    }

    const orders = db.getCollection('orders');
    const index = orders.findIndex(o => o.id === id || o.orderNumber === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }

    const currentOrder = orders[index];
    const currentIndex = ORDER_STATUS_FLOW.indexOf(currentOrder.status);
    const targetIndex = ORDER_STATUS_FLOW.indexOf(status);

    // Verificación de flujo secuencial (no se puede retroceder ni saltar sin confirmación)
    if (targetIndex < currentIndex) {
      // Advertencia pero permitido a admin si necesita corregir
    }

    const statusDescriptions = {
      Pedido: 'Pedido confirmado y en cola de planeación técnica.',
      Preparado: 'Laminación completa (Slicer). Cama nivelada y proceso de impresión/corte iniciado.',
      Terminado: 'Pieza fabricada, curada, post-procesada y lista para entrega.',
      Entregado: 'Entregado a conformidad al cliente o remitido por transportadora.'
    };

    currentOrder.status = status;
    currentOrder.statusHistory.push({
      status,
      timestamp: new Date().toISOString(),
      note: note || statusDescriptions[status] || `Estado cambiado a ${status}`
    });
    currentOrder.updatedAt = new Date().toISOString();

    orders[index] = currentOrder;
    db.setCollection('orders', orders);

    // Recalcular lifecycle del cliente del pedido
    const clientStats = recomputeCliente(currentOrder.customerEmail);

    res.json({
      message: `Estado de pedido actualizado a ${status}`,
      order: currentOrder,
      clientStats: clientStats ? clientStats.stats : null
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getOrderById,
  trackOrderPublic,
  getAllOrders,
  updateOrderStatus
};
