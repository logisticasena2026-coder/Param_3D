const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Cotizar archivo 3D (público o autenticado)
router.post('/estimate', upload.single('customerFile'), quoteController.calculateEstimate);

// Rutas de usuario y admin
router.get('/my-quotes', verifyToken, quoteController.getUserQuotes);
router.get('/admin/all', verifyToken, requireAdmin, quoteController.getAllQuotes);

module.exports = router;
