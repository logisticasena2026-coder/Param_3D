const express = require('express');
const router = express.Router();
const devolucionesController = require('../controllers/devolucionesController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

router.use(verifyToken, requireAdmin);

router.get('/', devolucionesController.getDevoluciones);
router.get('/:id', devolucionesController.getDevolucionById);
router.post('/', devolucionesController.createDevolucion);
router.put('/:id', devolucionesController.updateDevolucion);
router.delete('/:id', devolucionesController.deleteDevolucion);

module.exports = router;
