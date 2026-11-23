const express = require('express');
const router = express.Router();
const canalesController = require('../controllers/canalesController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

router.use(verifyToken, requireAdmin);

router.get('/', canalesController.getCanales);
router.get('/:id', canalesController.getCanalById);
router.post('/', canalesController.createCanal);
router.put('/:id', canalesController.updateCanal);
router.delete('/:id', canalesController.deleteCanal);
router.get('/reporte/ventas', canalesController.getReporteVentasPorCanal);

module.exports = router;
