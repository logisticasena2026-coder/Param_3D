const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

// Consulta pública rápida por código de guía/pedido
router.get('/track/:orderNumber', orderController.trackOrderPublic);

// Rutas de cliente autenticado (Obligatorio registrarse para comprar)
router.post('/', verifyToken, orderController.createOrder);
router.get('/my-orders', verifyToken, orderController.getUserOrders);
router.get('/:id', verifyToken, orderController.getOrderById);

// Rutas de administración
router.get('/admin/all', verifyToken, requireAdmin, orderController.getAllOrders);
router.patch('/admin/:id/status', verifyToken, requireAdmin, orderController.updateOrderStatus);

module.exports = router;
