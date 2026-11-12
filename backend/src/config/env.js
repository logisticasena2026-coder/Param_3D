require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || 'maquinamos3d_super_secret_jwt_key_2026',
  CONTACT: {
    name: 'Maquinamos 3D',
    phone: '3005076700',
    email: 'mmontalvova@gmail.com'
  }
};
