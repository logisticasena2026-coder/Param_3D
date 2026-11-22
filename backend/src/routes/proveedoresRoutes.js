const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

// Todas las rutas son Admin
router.use(verifyToken, requireAdmin);

router.get('/', proveedoresController.getAll);
router.get('/search', proveedoresController.search);
router.get('/:id', proveedoresController.getById);
router.post('/', proveedoresController.create);
router.put('/:id', proveedoresController.update);
router.delete('/:id', proveedoresController.remove);

module.exports = router;
