const errorHandler = (err, req, res, next) => {
  console.error(`[Error ${new Date().toISOString()}]:`, err.message || err);

  if (err.name === 'MulterError') {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'El archivo excede el tamaño máximo permitido (50MB).' });
    }
    return res.status(400).json({ error: `Error en la carga de archivo: ${err.message}` });
  }

  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor. Intente nuevamente más tarde.'
  });
};

module.exports = errorHandler;
