const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

router.use(verifyToken, requireAdmin);

router.get('/panel', inventoryController.getInventoryPanel);
router.get('/productos/:id/lotes', inventoryController.getLotsByProduct);
router.put('/productos/:id/stock', inventoryController.updateStock);
router.get('/compras/proveedor/:id', inventoryController.getComprasByProveedor);
router.post('/lotes', inventoryController.createLot);

module.exports = router;
