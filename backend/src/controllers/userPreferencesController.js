const db = require('../config/db');

// Obtener preferencias del usuario
const getPreferences = (req, res, next) => {
  try {
    const users = db.getCollection('users');
    const user = users.find(u => u.id === req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const defaultPrefs = {
      theme: 'dark',
      palette: 'cyan',
      fontSize: 'md'
    };

    res.json(user.preferences || defaultPrefs);
  } catch (error) {
    next(error);
  }
};

// Actualizar y persistir preferencias
const updatePreferences = (req, res, next) => {
  try {
    const { theme, palette, fontSize } = req.body;
    const users = db.getCollection('users');
    const index = users.findIndex(u => u.id === req.user.id);

    if (index === -1) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const currentPrefs = users[index].preferences || {
      theme: 'dark',
      palette: 'cyan',
      fontSize: 'md'
    };

    const newPrefs = {
      theme: theme || currentPrefs.theme,
      palette: palette || currentPrefs.palette,
      fontSize: fontSize || currentPrefs.fontSize
    };

    users[index].preferences = newPrefs;
    db.setCollection('users', users);

    res.json({
      message: 'Preferencias actualizadas correctamente',
      preferences: newPrefs
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPreferences,
  updatePreferences
};
