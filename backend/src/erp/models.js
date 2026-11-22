/**
 * Modelos de dominio del ERP — registro declarativo de entidades
 * con sus metadatos (colección base, campos únicos, validaciones).
 */

const MODELS = {
  // ---------- Proveedores (Módulo 1a: Compras/Proveedores) ----------
  proveedor: {
    table: 'proveedores',
    uniqueFields: ['email'],
    idPrefix: 'prov-',
    relations: [{ field: 'categoria', enum: ['filamentos', 'moldes', 'paneles', 'utensilios', 'otros'] }],
    requiredFields: ['nombre']
  },

  // ---------- Inventario (Módulo 1b) ----------
  lote: {
    table: 'lotes',
    uniqueFields: ['codigo'],
    idPrefix: 'lot-',
    relations: [{ field: 'ubicacion', enum: ['almacen_central', 'taller', 'sitio_cliente', 'otro'] }],
    requiredFields: ['codigo', 'numero_series']
  },

  pedido_compra: {
    table: 'pedidos_compra',
    uniqueFields: ['numero'],
    idPrefix: 'pco-',
    relations: [
      { field: 'proveedorId', reference: 'proveedores', fk: 'id' },
      { field: 'estado', enum: ['borrador', 'aprobado', 'en_transito', 'recibido', 'completado', 'cancelado'] }
    ],
    requiredFields: ['numero', 'proveedorId']
  },

  stock_alert: {
    table: 'productos', // El inventario apunta a products (stockActual en productos)
    kind: 'alertas_stock',
    // Valores: stockActual <= 0 (negativo) o stockActual < stockMin (bajo)
    computed: true
  }
};

// Flujo de estados de pedido de compra
const PEDIDO_COMPRA_FLOW = ['borrador', 'aprobado', 'en_transito', 'recibido', 'completado'];

// Categorías de proveedores (servicios -> insumos -> mano de obra)
const PROVEEDOR_CATEGORIAS = ['filamentos', 'moldes', 'paneles', 'utensilios', 'servicios', 'otros'];

// Niveles de inventario
const INVENTARIO_LEVELS = ['stock_critico', 'stock_bajo', 'stock_normal', 'sin_agotar'];

module.exports = { MODELS, PEDIDO_COMPRA_FLOW, PROVEEDOR_CATEGORIAS, INVENTARIO_LEVELS };
