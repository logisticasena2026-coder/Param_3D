const bcrypt = require('bcryptjs');
const db = require('./config/db');

async function seed() {
  console.log('Sembrando datos iniciales en Maquinamos 3D...');

  // 1. Usuarios (Admin y Cliente)
  const passwordAdmin = await bcrypt.hash('Admin123*', 10);
  const passwordClient = await bcrypt.hash('Cliente123*', 10);

  const users = [
    {
      id: 'usr-admin-1',
      name: 'Mauricio Montalvo (Admin)',
      email: 'mmontalvova@gmail.com',
      password: passwordAdmin,
      phone: '3005076700',
      role: 'admin',
      preferences: {
        theme: 'dark',
        palette: 'cyan',
        fontSize: 'md'
      },
      createdAt: new Date().toISOString()
    },
    {
      id: 'usr-client-1',
      name: 'Carlos Mendoza',
      email: 'cliente@maquinamos3d.com',
      password: passwordClient,
      phone: '3109876543',
      role: 'client',
      preferences: {
        theme: 'dark',
        palette: 'orange',
        fontSize: 'md'
      },
      createdAt: new Date().toISOString()
    }
  ];

  // 2. Productos
  const products = [
    // Subcategoría: Artesanales (Impresión 3D)
    {
      id: 'prod-3d-jarron',
      name: 'Jarrón Paramétrico Voronoi',
      category: 'Impresión 3D',
      subcategory: 'Artesanales',
      description: 'Jarrón de diseño generativo con textura espiral orgánica. Perfecto para flores secas y decoración moderna minimalista.',
      price: 45000,
      printTime: '4h 20m',
      filamentWeight: '95g',
      dimensions: { x: 12, y: 12, z: 22, unit: 'cm' },
      isFree: false,
      availableMaterials: ['PLA', 'PETG'],
      colorOptionsPerMaterial: {
        PLA: ['Blanco', 'Negro', 'Rojo Ferrari', 'Azul Eléctrico', 'Amarillo Oro'],
        PETG: ['Negro', 'Azul Translúcido', 'Rojo Translúcido']
      },
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=60',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      model3dUrl: '',
      meshGeometry: 'vase',
      createdAt: new Date().toISOString()
    },
    // Subcategoría: Fútbol (Impresión 3D)
    {
      id: 'prod-3d-trofeo',
      name: 'Trofeo Réplica Copa Dorada',
      category: 'Impresión 3D',
      subcategory: 'Fútbol',
      description: 'Réplica a escala con soporte para grabado personalizado de torneos y fanáticos de fútbol. Base lastrada opcional.',
      price: 68000,
      printTime: '6h 45m',
      filamentWeight: '140g',
      dimensions: { x: 14, y: 14, z: 28, unit: 'cm' },
      isFree: false,
      availableMaterials: ['PLA', 'ABS'],
      colorOptionsPerMaterial: {
        PLA: ['Amarillo Oro', 'Negro', 'Gris Plata'],
        ABS: ['Negro', 'Blanco']
      },
      imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=800&auto=format&fit=crop&q=60',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      model3dUrl: '',
      meshGeometry: 'trophy',
      createdAt: new Date().toISOString()
    },
    // Subcategoría: Navidad (Impresión 3D)
    {
      id: 'prod-3d-arbol-navidad',
      name: 'Árbol Navideño Geométrico Fractal',
      category: 'Impresión 3D',
      subcategory: 'Navidad',
      description: 'Centro de mesa navideño con capas facetadas para difusión de luz LED interior. Modelo descargable gratis para clientes de la comunidad.',
      price: 0,
      printTime: '3h 10m',
      filamentWeight: '60g',
      dimensions: { x: 10, y: 10, z: 18, unit: 'cm' },
      isFree: true, // Modelo gratuito: descarga permitida a todos
      availableMaterials: ['PLA', 'PETG', 'TPU'],
      colorOptionsPerMaterial: {
        PLA: ['Verde Militar', 'Blanco', 'Rojo Ferrari'],
        PETG: ['Azul Translúcido', 'Rojo Translúcido'],
        TPU: ['Rojo Flúor']
      },
      imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&auto=format&fit=crop&q=60',
      videoUrl: '',
      model3dUrl: '',
      meshGeometry: 'tree',
      createdAt: new Date().toISOString()
    },
    // Subcategoría: Electrónica (Impresión 3D)
    {
      id: 'prod-3d-enclosure',
      name: 'Gabinete Enclosure Ventilado IoT',
      category: 'Impresión 3D',
      subcategory: 'Electrónica',
      description: 'Caja protectora con ranuras de ventilación térmica pasiva, orificios para conectores USB-C, HDMI y riel DIN.',
      price: 32000,
      printTime: '2h 50m',
      filamentWeight: '55g',
      dimensions: { x: 11, y: 8, z: 4, unit: 'cm' },
      isFree: false,
      availableMaterials: ['PETG', 'ABS'],
      colorOptionsPerMaterial: {
        PETG: ['Negro', 'Gris Humo', 'Azul Translúcido'],
        ABS: ['Negro', 'Blanco']
      },
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
      videoUrl: '',
      model3dUrl: '',
      meshGeometry: 'box',
      createdAt: new Date().toISOString()
    },
    // Subcategoría: Juguetes (Impresión 3D)
    {
      id: 'prod-3d-robot',
      name: 'Robot Articulado Print-In-Place',
      category: 'Impresión 3D',
      subcategory: 'Juguetes',
      description: 'Robot mecánico articulado que se imprime ensamblado sin soportes en una sola sesión. Extremidades con 14 puntos de flexión.',
      price: 38000,
      printTime: '3h 30m',
      filamentWeight: '75g',
      dimensions: { x: 9, y: 5, z: 15, unit: 'cm' },
      isFree: false,
      availableMaterials: ['PLA', 'TPU'],
      colorOptionsPerMaterial: {
        PLA: ['Azul Eléctrico', 'Rojo Ferrari', 'Naranja', 'Negro'],
        TPU: ['Negro Mate', 'Azul Neón']
      },
      imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop&q=60',
      videoUrl: '',
      model3dUrl: '',
      meshGeometry: 'robot',
      createdAt: new Date().toISOString()
    },
    // Subcategoría: Esculturas (Impresión 3D)
    {
      id: 'prod-3d-escultura-busto',
      name: 'Busto Escultura Neoclásica Low-Poly',
      category: 'Impresión 3D',
      subcategory: 'Esculturas',
      description: 'Interpretación poligonal de arte clásico. Superficie optimizada para capturar sombras de iluminación arquitectónica.',
      price: 52000,
      printTime: '5h 15m',
      filamentWeight: '110g',
      dimensions: { x: 15, y: 12, z: 24, unit: 'cm' },
      isFree: false,
      availableMaterials: ['PLA', 'PETG', 'ABS'],
      colorOptionsPerMaterial: {
        PLA: ['Blanco', 'Negro', 'Gris Plata'],
        PETG: ['Negro', 'Blanco'],
        ABS: ['Blanco']
      },
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=60',
      videoUrl: '',
      model3dUrl: '',
      meshGeometry: 'bust',
      createdAt: new Date().toISOString()
    },
    // Categoría: Router CNC
    {
      id: 'prod-cnc-celosia',
      name: 'Celosía Divisoria en Cedro y Roble',
      category: 'Router CNC',
      subcategory: 'Celosías',
      description: 'Panel tallado en madera maciza para separación de ambientes con patrón geométrico contemporáneo. Medida dentro del límite de 100 × 75 × 15 cm.',
      price: 340000,
      printTime: '3h mecanizado',
      filamentWeight: 'N/A (Madera 8.5 kg)',
      dimensions: { x: 95, y: 70, z: 4, unit: 'cm' },
      isFree: false,
      availableMaterials: ['Roble', 'Cedro', 'MDF Hidrófugo'],
      colorOptionsPerMaterial: {
        Roble: ['Natural Brillante', 'Nogal Oscuro'],
        Cedro: ['Tono Natural', 'Caoba'],
        'MDF Hidrófugo': ['Crudo para pintar', 'Lacado Blanco']
      },
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60',
      videoUrl: '',
      model3dUrl: '',
      meshGeometry: 'box',
      createdAt: new Date().toISOString()
    },
    // Categoría: Avisos Publicitarios
    {
      id: 'prod-aviso-neon',
      name: 'Aviso Neón Flex sobre Acrílico Cristal',
      category: 'Avisos',
      subcategory: 'Neón Flex',
      description: 'Letrero luminoso con tecnología LED Neón Flex de 12V con base en acrílico cristal corte láser. Se fabrica en cualquier dimensión requerida.',
      price: 280000,
      printTime: '48h fabricación y ensamble',
      filamentWeight: 'Acrílico 4mm + LED 6x12mm',
      dimensions: { x: 80, y: 40, z: 5, unit: 'cm (A medida)' },
      isFree: false,
      availableMaterials: ['Acrílico 3mm', 'Acrílico 5mm'],
      colorOptionsPerMaterial: {
        'Acrílico 3mm': ['Neón Blanco Cálido', 'Neón Azul Hielo', 'Neón Fucsia'],
        'Acrílico 5mm': ['Neón RGB Programable', 'Neón Amarillo Cálido']
      },
      imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=60',
      videoUrl: '',
      model3dUrl: '',
      meshGeometry: 'box',
      createdAt: new Date().toISOString()
    },
    // Categoría: Corte y Metal
    {
      id: 'prod-metal-placa',
      name: 'Placa Estructural en Lámina de Hierro al Carbón',
      category: 'Metal',
      subcategory: 'Lámina Hierro al Carbón',
      description: 'Pieza de ingeniería cortada por oxicorte/plasma CNC de alta precisión en lámina de hierro al carbón de hasta 3 cm de espesor o acero inoxidable de hasta 2 cm.',
      price: 195000,
      printTime: '45m corte plasma',
      filamentWeight: 'Metal 12.4 kg',
      dimensions: { x: 120, y: 80, z: 2.5, unit: 'cm' },
      isFree: false,
      availableMaterials: ['Hierro al Carbón', 'Acero Inoxidable 304'],
      colorOptionsPerMaterial: {
        'Hierro al Carbón': ['Acabado Industrial Crudo', 'Fondo Anticorrosivo Gris'],
        'Acero Inoxidable 304': ['Satinado Esmerilado', 'Brillo Mecánico']
      },
      imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60',
      videoUrl: '',
      model3dUrl: '',
      meshGeometry: 'box',
      createdAt: new Date().toISOString()
    }
  ];

  // 3. Patrocinadores
  const sponsors = [
    {
      id: 'spon-1',
      commercialName: 'Polímeros Industriales del Valle',
      activityDescription: 'Distribución mayorista de filamentos de grado técnico (PETG, ABS ignífugo, TPU y Nylon) para la industria de manufactura aditiva y prototipado rápido.',
      websiteUrl: 'https://ejemplo-polimeros.com',
      logoUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=60',
      contactPerson: 'Ing. Rodrigo Cárdenas',
      status: 'active',
      createdAt: new Date().toISOString()
    },
    {
      id: 'spon-2',
      commercialName: 'CNC Tools & Router Colombia',
      activityDescription: 'Suministro de fresas de carburo sólido, boquillas ER20 y lubricantes de refrigeración para routers CNC de alto rendimiento y corte en madera y acrílico.',
      websiteUrl: 'https://ejemplo-cnctools.com',
      logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop&q=60',
      contactPerson: 'Diana Salazar',
      status: 'active',
      createdAt: new Date().toISOString()
    },
    {
      id: 'spon-3',
      commercialName: 'Acrílicos y Neón Medellín S.A.S.',
      activityDescription: 'Comercializadora de planchas de acrílico colado óptico de 3mm a 20mm y tiras Neón LED flex de silicona grado IP67 para avisos publicitarios.',
      websiteUrl: 'https://ejemplo-acrilicos.com',
      logoUrl: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=300&auto=format&fit=crop&q=60',
      contactPerson: 'Carlos Mario Vélez',
      status: 'active',
      createdAt: new Date().toISOString()
    }
  ];

  // 4. Pedido inicial de demostración con seguimiento
  const orders = [
    {
      id: 'ord-demo-1001',
      orderNumber: 'MQ3D-882319',
      userId: 'usr-client-1',
      customerName: 'Carlos Mendoza',
      customerEmail: 'cliente@maquinamos3d.com',
      items: [
        {
          productId: 'prod-3d-jarron',
          name: 'Jarrón Paramétrico Voronoi',
          category: 'Impresión 3D',
          material: 'PETG',
          color: 'Azul Translúcido',
          price: 45000,
          quantity: 1,
          itemTotal: 45000
        }
      ],
      subtotal: 45000,
      shippingCost: 12000,
      total: 57000,
      shippingAddress: {
        city: 'Medellín',
        address: 'Calle 10 # 43E - 22, El Poblado',
        phone: '3109876543'
      },
      paymentMethod: 'Transferencia Bancolombia / Nequi',
      status: 'Preparado', // Flujo: 'Pedido' -> 'Preparado' -> 'Terminado' -> 'Entregado'
      statusHistory: [
        {
          status: 'Pedido',
          timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
          note: 'Pedido recibido exitosamente en Maquinamos 3D.'
        },
        {
          status: 'Preparado',
          timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
          note: 'Laminado en OrcaSlicer completado. Calibración de cama y extrusor a 240°C para PETG.'
        }
      ],
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
    }
  ];

  db.setCollection('users', users);
  db.setCollection('products', products);
  db.setCollection('sponsors', sponsors);
  db.setCollection('orders', orders);

  console.log('✅ Base de datos sembrada con éxito:');
  console.log(` - Usuarios: ${users.length} (Admin: mmontalvova@gmail.com / Admin123*)`);
  console.log(` - Productos: ${products.length} con subcategorías y combinaciones material+color`);
  console.log(` - Patrocinadores: ${sponsors.length}`);
  console.log(` - Pedidos: ${orders.length}`);
}

seed();
