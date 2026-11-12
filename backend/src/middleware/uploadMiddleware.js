const multer = require('multer');
const path = require('path');
const fs = require('fs');

const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = 'images';
    if (file.fieldname === 'model3d' || file.fieldname === 'customerFile') {
      folder = req.path.includes('quote') ? 'quotes' : 'models3d';
    } else if (file.fieldname === 'video') {
      folder = 'images';
    }
    const dest = path.join(__dirname, '..', '..', 'uploads', folder);
    createDirIfNotExists(dest);
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedExts = [
    // 3D files
    '.stl', '.obj', '.step', '.stp', '.3mf', '.gcode',
    // Media files
    '.png', '.jpg', '.jpeg', '.webp', '.mp4', '.webm'
  ];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExts.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error(`Tipo de archivo no soportado (${ext}). Formatos permitidos: STL, OBJ, STEP, 3MF, imágenes y videos.`));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // Límite 50MB para archivos 3D
  fileFilter
});

module.exports = upload;
