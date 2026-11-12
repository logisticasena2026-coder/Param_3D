const path = require('path');
const db = require('../config/db');
const slicerEstimatorService = require('../services/slicerEstimatorService');

// Analizar archivo o especificaciones y generar estimación de cotización Slicer
const calculateEstimate = (req, res, next) => {
  try {
    const {
      material = 'PLA',
      color = 'Blanco',
      infillPercent = 20,
      dimensionX = 8,
      dimensionY = 8,
      dimensionZ = 8
    } = req.body;

    const dimensions = {
      x: parseFloat(dimensionX) || 8,
      y: parseFloat(dimensionY) || 8,
      z: parseFloat(dimensionZ) || 8
    };

    let filePath = null;
    let fileName = null;

    if (req.file) {
      filePath = req.file.path;
      fileName = req.file.filename;
    }

    const estimation = slicerEstimatorService.estimate({
      filePath,
      material,
      infillPercent: parseInt(infillPercent, 10),
      dimensions
    });

    const quoteId = `cot-${Date.now()}`;
    const quoteData = {
      id: quoteId,
      fileName: fileName || 'Geometría Paramétrica Manual',
      originalName: req.file ? req.file.originalname : 'modelo_3d.stl',
      filePath: req.file ? `/uploads/quotes/${req.file.filename}` : null,
      material,
      color,
      infillPercent: parseInt(infillPercent, 10),
      dimensions,
      estimation,
      userId: req.user ? req.user.id : null,
      customerEmail: req.user ? req.user.email : (req.body.email || null),
      customerName: req.user ? req.user.name : (req.body.name || null),
      createdAt: new Date().toISOString()
    };

    // Almacenar en la base de datos de cotizaciones
    const quotes = db.getCollection('quotes');
    quotes.unshift(quoteData);
    db.setCollection('quotes', quotes);

    res.json({
      message: 'Estimación calculada exitosamente',
      quote: quoteData
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar cotizaciones del usuario
const getUserQuotes = (req, res, next) => {
  try {
    const quotes = db.getCollection('quotes');
    const userQuotes = quotes.filter(q => q.userId === req.user.id);
    res.json(userQuotes);
  } catch (error) {
    next(error);
  }
};

// Admin: listar todas las cotizaciones
const getAllQuotes = (req, res, next) => {
  try {
    const quotes = db.getCollection('quotes');
    res.json(quotes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  calculateEstimate,
  getUserQuotes,
  getAllQuotes
};
