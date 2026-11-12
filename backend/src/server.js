const express = require('express');
const cors = require('cors');
const path = require('path');
const { PORT, CONTACT } = require('./config/env');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const sponsorRoutes = require('./routes/sponsorRoutes');
const preferenceRoutes = require('./routes/preferenceRoutes');
const aiRoutes = require('./routes/aiRoutes');

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
