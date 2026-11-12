const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const { JWT_SECRET } = require('../config/env');

const register = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nombre, correo electrónico y contraseña son obligatorios.' });
    }

    const users = db.getCollection('users');
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return res.status(409).json({ error: 'Ya existe una cuenta registrada con este correo electrónico.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: `usr-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
      phone: phone || '',
      role: users.length === 0 ? 'admin' : 'client', // El primer usuario se convierte en admin por comodidad
      preferences: {
        theme: 'dark',
        palette: 'cyan',
        fontSize: 'md'
      },
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    db.setCollection('users', users);

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const { password: _, ...userSafe } = newUser;
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: userSafe,
      token
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Por favor ingrese correo y contraseña.' });
    }

    const users = db.getCollection('users');
    const user = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas. Usuario no registrado.' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Credenciales inválidas. Contraseña errónea.' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const { password: _, ...userSafe } = user;
    res.json({
      message: 'Inicio de sesión exitoso',
      user: userSafe,
      token
    });
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    const users = db.getCollection('users');
    const user = users.find(u => u.id === req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    const { password: _, ...userSafe } = user;
    res.json(userSafe);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getProfile
};
