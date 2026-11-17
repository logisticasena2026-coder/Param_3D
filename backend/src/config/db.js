const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '..', '..', 'database.json');

const defaultData = {
  users: [],
  categories: [
    {
      id: 'cat-imp3d',
      name: 'Impresión 3D',
      slug: 'impresion-3d',
      description: 'Piezas personalizadas con tecnología FDM en PETG, PLA, ABS y TPU. Volumen de construcción hasta 36 × 36 × 36 cm.',
      maxDimensions: { x: 36, y: 36, z: 36, unit: 'cm' },
      subcategories: ['Artesanales', 'Fútbol', 'Navidad', 'Electrónica', 'Juguetes', 'Esculturas']
    },
    {
      id: 'cat-cnc',
      name: 'Router CNC',
      slug: 'router-cnc',
      description: 'Objetos tallados en madera para puertas, biombos, celosías y tableros decorativos o estructurales.',
      maxDimensions: { x: 100, y: 75, z: 15, unit: 'cm' },
      subcategories: ['Puertas', 'Biombos', 'Celosías', 'Tableros']
    },
    {
      id: 'cat-avisos',
      name: 'Avisos',
      slug: 'avisos',
      description: 'Diseño, fabricación y montaje de letreros luminosos y corporativos en acrílico y neón flex, sin límite de tamaño.',
      maxDimensions: { x: null, y: null, z: null, unit: 'cm (Cualquier tamaño)' },
      subcategories: ['Neón Flex', 'Acrílico 3D', 'Cajas de Luz', 'Logos Corporativos']
    },
    {
      id: 'cat-metal',
      name: 'Metal',
      slug: 'metal',
      description: 'Corte y fabricación metálica en lámina de hierro al carbón (hasta 150 × 250 × 3 cm) y acero inoxidable (hasta 2 cm espesor).',
      maxDimensions: { x: 150, y: 250, z: 3, unit: 'cm (Hierro carbón hasta 3cm / Acero inox hasta 2cm)' },
      subcategories: ['Lámina Hierro al Carbón', 'Acero Inoxidable', 'Estructuras Industriales']
    }
  ],
  materials: [
    {
      id: 'mat-pla',
      name: 'PLA',
      category: 'Impresión 3D',
      density: 1.24, // g/cm3
      costPerGram: 120, // COP
      description: 'Biodegradable, excelente acabado superficial, ideal para prototipos visuales y figuras decorativas.',
      availableColors: ['Blanco', 'Negro', 'Rojo Ferrari', 'Azul Eléctrico', 'Amarillo Oro', 'Verde Militar', 'Gris Plata', 'Naranja']
    },
    {
      id: 'mat-petg',
      name: 'PETG',
      category: 'Impresión 3D',
      density: 1.27,
      costPerGram: 150,
      description: 'Alta resistencia mecánica y térmica, resistente a rayos UV e impactos. Ideal para piezas mecánicas de uso continuo.',
      availableColors: ['Negro', 'Blanco', 'Azul Translúcido', 'Rojo Translúcido', 'Gris Humo']
    },
    {
      id: 'mat-abs',
      name: 'ABS',
      category: 'Impresión 3D',
      density: 1.04,
      costPerGram: 140,
      description: 'Resistente a temperaturas elevadas y torsión, apto para pulido con acetona y piezas automotrices o electrónicas.',
      availableColors: ['Negro', 'Blanco', 'Rojo', 'Azul']
    },
    {
      id: 'mat-tpu',
      name: 'TPU',
      category: 'Impresión 3D',
      density: 1.21,
      costPerGram: 190,
      description: 'Polímero elástico y flexible, amortigua impactos y vibraciones. Piezas de agarre y fundas técnicas.',
      availableColors: ['Negro Mate', 'Rojo Flúor', 'Azul Neón', 'Translúcido Natural']
    }
  ],
  products: [],
  orders: [],
  quotes: [],
  sponsors: [],
  preferences: {},
  // Módulo de Proyectos (gestión de clientes, piezas, costos y pagos)
  clients: [],
  projects: [],
  pieces: [],
  costs: [],
  projectFiles: [],
  payments: []
};

class Database {
  constructor() {
    this.init();
  }

  init() {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
    }
  }

  read() {
    try {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.error('Error leyendo la base de datos:', error);
      return defaultData;
    }
  }

  write(data) {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
      return true;
    } catch (error) {
      console.error('Error escribiendo en la base de datos:', error);
      return false;
    }
  }

  getCollection(name) {
    const data = this.read();
    return data[name] || [];
  }

  setCollection(name, items) {
    const data = this.read();
    data[name] = items;
    this.write(data);
  }
}

const db = new Database();
module.exports = db;
