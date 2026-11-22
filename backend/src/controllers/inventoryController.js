const db = require('../config/db');
const { inventoryLevel } = require('../erp/lib');

// Panel de Inventario: conecta stock actual sobre los productos
const getInventoryPanel = (req, res, next) => {
  try {
    const products = db.getCollection('products');
    const pedidos = db.getCollection('pedidos_compra');

    const inventory = products.map(p => ({
      id: p.id,
      name: p.name,
      category: p.category,
      dimensions: p.dimensions,
      material: p.availableMaterials?.[0] || 'Sin definir',
      stockActual: p.stockActual || 0,
      stockMin: p.stockMin || 0,
      stockMax: p.stockMax || null,
      proveedor: p.proveedor || '',
      proveedorId: p.proveedorId || null,
      level: inventoryLevel(p.stockActual || 0, p.stockMin || 0, p.stockMax),
      lastInventoryDate: p.ultimaConteo
    }));

    const pendienteRecepcion = pedidos
      .filter(p => p.estado === 'en_transito')
      .reduce((acc, p) => {
        const entry = acc.find(x => x.proveedorId === p.proveedorId);
        const cant = Number(p.cantidad) || 0;
        if (entry) entry.enTransito += cant; else acc.push({ proveedorId: p.proveedorId, enTransito: cant });
        return acc;
      }, []);

    const warning = inventory.filter(i => i.level === 'stock_critico');
    const low = inventory.filter(i => i.level === 'stock_bajo');

    res.json({
      summary: {
        totalProducts: inventory.length,
        withStock: inventory.filter(i => i.stockActual > 0).length,
        outOfStock: inventory.filter(i => i.stockActual <= 0).length,
        lowStock: low.length,
        criticalStock: warning.length,
        totalInTransit: pendienteRecepcion.reduce((a, x) => a + x.enTransito, 0)
      },
      alerts: { critical: warning.map(w => ({ ...w, name: w.name })), low: low.map(l => ({ ...l })) },
      inventory,
      transitPending: pendienteRecepcion
    });
  } catch (error) { next(error); }
};

// Update de stock (Admin, interno: nuevo lote o ajuste de inventario)
const updateStock = (req, res, next) => {
  try {
    const products = db.getCollection('products');
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Producto no encontrado' });

    const { stockActual, stockMin, stockMax, proveedorId, ultimaConteo, nota } = req.body;

    products[index].stockActual = Number(stockActual) || 0;
    if (stockMin !== undefined) products[index].stockMin = Number(stockMin) || 0;
    if (stockMax !== undefined) products[index].stockMax = Number(stockMax) || null;
    if (proveedorId !== undefined) products[index].proveedorId = proveedorId;
    if (ultimaConteo) products[index].ultimaConteo = ultimaConteo;
    products[index].updatedAt = new Date().toISOString();

    db.setCollection('products', products);
    const p = products[index];
    res.json({
      message: 'Stock actualizado',
      product: p,
      level: inventoryLevel(p.stockActual, p.stockMin, p.stockMax)
    });
  } catch (error) { next(error); }
};

// Listar lotes por producto
const getLotsByProduct = (req, res, next) => {
  try {
    const productId = req.params.id;
    const lotes = db.getCollection('lotes').filter(l => l.productId === productId);
    res.json(lotes);
  } catch (error) { next(error); }
};

// Registrar un lote (Admin)
const createLot = (req, res, next) => {
  try {
    const { codigo, numeroSeries, productId, proveedorId, fechaRecibido, ubicacion = 'almacen_central' } = req.body;

    if (!codigo || !codigo.trim()) return res.status(400).json({ error: 'El código de lote es obligatorio.' });
    if (!productId) return res.status(400).json({ error: 'Producto asociado requerido.' });

    const lotes = db.getCollection('lotes');
    if (lotes.some(l => l.codigo === codigo)) return res.status(409).json({ error: 'Código de lote duplicado.' });

    const newLot = {
      id: `lot-${Date.now()}`,
      codigo,
      numeroSeries: numeroSeries || 1,
      productId,
      proveedorId: proveedorId || null,
      ubicacion,
      fechaRecibido: fechaRecibido || new Date().toISOString(),
      fechaExpiracion: req.body.fechaExpiracion || null
    };

    lotes.push(newLot);
    db.setCollection('lotes', lotes);
    res.status(201).json({ message: 'Lote registrado', lote: newLot });
  } catch (error) { next(error); }
};

// Listar pedidos de compra asociados a un proveedor (summary)
const getComprasByProveedor = (req, res, next) => {
  try {
    const pedidos = db.getCollection('pedidos_compra').filter(p => p.proveedorId === req.params.id);
    res.json(pedidos);
  } catch (error) { next(error); }
};

module.exports = { getInventoryPanel, updateStock, getLotsByProduct, createLot, getComprasByProveedor };
