const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { PORT, CONTACT } = require('./config/env');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const sponsorRoutes = require('./routes/sponsorRoutes');
const preferenceRoutes = require('./routes/preferenceRoutes');
const aiRoutes = require('./routes/aiRoutes');
const projectRoutes = require('./routes/projectRoutes');

// Módulos ERP — Compras, Proveedores e Inventario (Fase 0 + 1a)
const proveedoresRoutes = require('./routes/proveedoresRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const compraRoutes = require('./routes/compraRoutes');
const { MODULE_MANAGER } = require('./erp');

const app = express();

// Configuración de CORS y parseo de peticiones
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Servir archivos estáticos subidos (modelos 3D, imágenes, cotizaciones)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Información de contacto y salud de la API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'Maquinamos 3D API Core',
    contact: CONTACT,
    serverTime: new Date().toISOString()
  });
});

// Rutas de la API REST
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/sponsors', sponsorRoutes);
app.use('/api/preferences', preferenceRoutes);
app.use('/api/ai-parametric', aiRoutes);
app.use('/api/projects', projectRoutes);

// Módulos ERP
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/compras', compraRoutes);

// Servir el frontend compilado (producción / Docker todo-en-uno).
// En desarrollo el frontend corre aparte con Vite (npm run dev, puerto 3000).
const FRONTEND_DIST = process.env.FRONTEND_DIST || path.join(__dirname, '..', 'public');
if (fs.existsSync(FRONTEND_DIST)) {
  app.use(express.static(FRONTEND_DIST));
  // Fallback SPA: cualquier GET que no sea /api ni /uploads devuelve index.html
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) return next();
    res.sendFile(path.join(FRONTEND_DIST, 'index.html'));
  });
}

// Manejador centralizado de errores
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  🚀 Maquinamos 3D - Servidor Backend Activo`);
  console.log(`  🌐 Puerto: http://localhost:${PORT}`);
  console.log(`  📞 Contacto: Tel. ${CONTACT.phone} | ${CONTACT.email}`);
  console.log(`====================================================`);
});

module.exports = app;
