const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

router.use(verifyToken, requireAdmin);

router.get('/meta', compraController.getComprasMeta);
router.get('/', compraController.getAllCompras);
router.post('/', compraController.createCompra);
router.get('/:id', compraController.getComproById);
router.post('/:id/confirm', compraController.confirmCompra);
router.post('/:id/en-transito', compraController.markInTransit);
router.post('/:id/recibir', compraController.receiveCompra);
router.delete('/:id', compraController.deleteCompra);

module.exports = router;
