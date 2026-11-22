/**
 * Helpers comunes del ERP: calculadora de inventario, formato de valores
 * y rastreo de estado de pedidos de compra.
 */

// InventoryLevel: clasificación del stock de un producto
const inventoryLevel = (stockActual, stockMin, stockMax) => {
  const min = Number(stockMin ?? 0);
  const max = Number(stockMax ?? min * 2);
  if (stockActual <= 0) return 'stock_critico';
  if (stockActual <= min) return 'stock_bajo';
  if (stockActual >= max) return 'sin_agotar';
  return 'stock_normal';
};

// Calcular volumen de una pieza (usado en Facts de Inventario)
const calcularVolumen = (dimensions) => {
  if (!dimensions) return null;
  const { largo = 0, ancho = 0, alto = 0 } = dimensions;
  return Math.round((largo * ancho * alto) * 100) / 100;
};

// Validación estándar para proveedores
const validarProveedor = (proveedor) => {
  if (!proveedor?.nombre || proveedor.nombre.trim().length < 2) {
    return 'Nombre del proveedor es obligatorio (mínimo 2 caracteres).';
  }
  if (proveedor.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(proveedor.email.trim())) {
    return 'Correo electrónico inválido.';
  }
  return null;
};

// Comparador útil para estados y modelos con rango de alertas
const ordinalSort = (values) => Object.fromEntries(values.map((v, i) => [v, i]));

module.exports = { inventoryLevel, calcularVolumen, validarProveedor, ordinalSort };
