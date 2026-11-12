const { AIProviderFactory } = require('../services/aiParametricProvider');

// Generar modelo paramétrico a partir de un texto o nombre
const generateByText = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({ error: 'El nombre o descripción para la IA es obligatorio.' });
    }

    const provider = AIProviderFactory.getProvider();
    const result = await provider.generateFromPrompt(prompt, req.body.options || {});

    res.json({
      message: 'Modelo 3D paramétrico generado exitosamente por IA',
      result
    });
  } catch (error) {
    next(error);
  }
};

// Generar modelo paramétrico a partir de una foto subida
const generateByImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Debe adjuntar una imagen fotográfica para el análisis paramétrico.' });
    }

    const provider = AIProviderFactory.getProvider();
    const result = await provider.generateFromImage(req.file, req.body.options || {});

    res.json({
      message: 'Modelo 3D sintetizado exitosamente a partir de la imagen',
      result
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateByText,
  generateByImage
};
