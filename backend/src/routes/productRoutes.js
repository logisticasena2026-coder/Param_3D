const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const productController = require('../controllers/productController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const { JWT_SECRET } = require('../config/env');
const db = require('../config/db');

// Middleware opcional para verificar token si viene presente
const optionalAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const users = db.getCollection('users');
      const user = users.find(u => u.id === decoded.id);
      if (user) {
        req.user = { id: user.id, email: user.email, name: user.name, role: user.role };
      }
    } catch (e) {
      // Ignorar error si es opcional
    }
  }
  next();
};

router.get('/metadata', productController.getMetadata);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.get('/:id/download', optionalAuth, productController.downloadModel);

// Rutas de administración
router.post('/', verifyToken, requireAdmin, upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 },
  { name: 'model3d', maxCount: 1 }
]), (req, res, next) => {
  // Adjuntar paths si se subieron archivos
  if (req.files) {
    if (req.files.image && req.files.image[0]) {
      req.body.imageUrl = `/uploads/images/${req.files.image[0].filename}`;
    }
    if (req.files.video && req.files.video[0]) {
      req.body.videoUrl = `/uploads/images/${req.files.video[0].filename}`;
    }
    if (req.files.model3d && req.files.model3d[0]) {
      req.body.model3dUrl = `/uploads/models3d/${req.files.model3d[0].filename}`;
    }
  }
  productController.createProduct(req, res, next);
});

router.put('/:id', verifyToken, requireAdmin, productController.updateProduct);
router.delete('/:id', verifyToken, requireAdmin, productController.deleteProduct);

module.exports = router;
