const express = require('express');
const router = express.Router();
const aiParametricController = require('../controllers/aiParametricController');
const upload = require('../middleware/uploadMiddleware');

// Generar a partir de prompt o nombre
router.post('/generate-prompt', aiParametricController.generateByText);

// Generar a partir de fotografía
router.post('/generate-image', upload.single('image'), aiParametricController.generateByImage);

module.exports = router;
