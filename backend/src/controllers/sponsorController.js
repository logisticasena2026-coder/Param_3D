const db = require('../config/db');

// Listar patrocinadores activos para el módulo público
const getSponsors = (req, res, next) => {
  try {
    const sponsors = db.getCollection('sponsors');
    res.json(sponsors);
  } catch (error) {
    next(error);
  }
};

// Crear patrocinador (Admin)
const createSponsor = (req, res, next) => {
  try {
    const { commercialName, activityDescription, websiteUrl, logoUrl, contactPerson, status = 'active' } = req.body;

    if (!commercialName || !activityDescription) {
      return res.status(400).json({ error: 'Nombre comercial y descripción de actividades son obligatorios.' });
    }

    const sponsors = db.getCollection('sponsors');
    const newSponsor = {
      id: `spon-${Date.now()}`,
      commercialName: commercialName.trim(),
      activityDescription: activityDescription.trim(),
      websiteUrl: websiteUrl || '',
      logoUrl: logoUrl || '/uploads/images/default-sponsor.png',
      contactPerson: contactPerson || '',
      status,
      createdAt: new Date().toISOString()
    };

    sponsors.unshift(newSponsor);
    db.setCollection('sponsors', sponsors);

    res.status(201).json({
      message: 'Patrocinador creado exitosamente',
      sponsor: newSponsor
    });
  } catch (error) {
    next(error);
  }
};

// Actualizar patrocinador (Admin)
const updateSponsor = (req, res, next) => {
  try {
    const { id } = req.params;
    const sponsors = db.getCollection('sponsors');
    const index = sponsors.findIndex(s => s.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Patrocinador no encontrado' });
    }

    const updated = {
      ...sponsors[index],
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    sponsors[index] = updated;
    db.setCollection('sponsors', sponsors);

    res.json({
      message: 'Patrocinador actualizado exitosamente',
      sponsor: updated
    });
  } catch (error) {
    next(error);
  }
};

// Eliminar patrocinador (Admin)
const deleteSponsor = (req, res, next) => {
  try {
    const { id } = req.params;
    let sponsors = db.getCollection('sponsors');
    const exists = sponsors.some(s => s.id === id);

    if (!exists) {
      return res.status(404).json({ error: 'Patrocinador no encontrado' });
    }

    sponsors = sponsors.filter(s => s.id !== id);
    db.setCollection('sponsors', sponsors);

    res.json({ message: 'Patrocinador eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSponsors,
  createSponsor,
  updateSponsor,
  deleteSponsor
};
