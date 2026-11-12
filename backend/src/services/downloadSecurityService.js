const db = require('../config/db');

/**
 * Servicio de seguridad para descarga de archivos 3D
 * Verifica reglas estrictas en el servidor:
 * 1. Acceso libre si el modelo está marcado como gratuito (isFree === true)
 * 2. Acceso para administradores
 * 3. Acceso si el usuario autenticado compró el producto en un pedido registrado
 */
class DownloadSecurityService {
  canDownload(user, product) {
    if (!product) {
      return { allowed: false, reason: 'Producto no encontrado' };
    }

    // Regla 1: Producto gratuito
    if (product.isFree || product.price === 0) {
      return { allowed: true, reason: 'Modelo 3D de acceso público y gratuito' };
    }

    // Si no es gratuito, el usuario debe estar autenticado
    if (!user) {
      return { allowed: false, reason: 'Debes iniciar sesión para descargar este modelo' };
    }

    // Regla 2: Administrador
    if (user.role === 'admin') {
      return { allowed: true, reason: 'Acceso autorizado como administrador' };
    }

    // Regla 3: Verificar compra previa en pedidos
    const orders = db.getCollection('orders');
    const userOrders = orders.filter(o => o.userId === user.id);

    const hasPurchased = userOrders.some(order => {
      // Pedidos válidos (no cancelados)
      const validStatuses = ['Pedido', 'Preparado', 'Terminado', 'Entregado'];
      if (!validStatuses.includes(order.status)) return false;

      return order.items && order.items.some(item => item.productId === product.id);
    });

    if (hasPurchased) {
      return { allowed: true, reason: 'Compra verificada en el historial de pedidos' };
    }

    return {
      allowed: false,
      reason: 'No tienes una orden de compra registrada para este modelo. Debes adquirir el producto para habilitar la descarga.'
    };
  }
}

module.exports = new DownloadSecurityService();
