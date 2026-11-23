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

  // 6. Módulo ERP — Proveedores
  const proveedores = [
    { id: 'prov-1', nombre: 'Polímeros Industriales del Valle', email: 'contacto@polimerosvalle.com', telefono: '6015551234', webpage: 'https://ejemplo-polimeros.com', ubicacion: 'Medellín, Antioquia', categoria: 'filamentos', descripcion: 'Filamentos técnicos: PETG, ABS ignífugo, TPU y Nylon grado industrial.', nota: '¡Mejores precios para volúmenes grandes!', fechaAlta: new Date(Date.now() - 86400000 * 90).toISOString(), estado: 'activo' },
    { id: 'prov-2', nombre: 'Koken Gaskets de Colombia S.A.', email: 'ventas@kokengaskets.com.co', telefono: '6015556789', webpage: 'https://ejemplo-kokengaskets.co', ubicacion: 'Cali, Valle del Cauca', categoria: 'moldes', descripcion: 'Moldes para placas de malla, embudos y tuercas de timón para impresoras FDM tamaño mediano.', nota: 'Requiere pedido mínimo de 12 unidades.', fechaAlta: new Date(Date.now() - 86400000 * 120).toISOString(), estado: 'activo' },
    { id: 'prov-3', nombre: 'Uttermost Matter S.A.S.', email: 'contacto@uttermost.com.co', telefono: '6015559988', webpage: 'https://ejemplo-uttermost.com', ubicacion: 'Bogotá, Cundinamarca', categoria: 'utensilios', descripcion: 'Boquillas de carburo, superes ER20 y lubricantes para routers CNC de impresión.', nota: 'Tiempo de entrega 5-10 días.', fechaAlta: new Date(Date.now() - 86400000 * 60).toISOString(), estado: 'activo' },
    { id: 'prov-4', nombre: 'Maquinamos Supply', email: 'supply@maquinamos3d.com', telefono: '3001234567', webpage: '', ubicacion: 'Medellín, Antioquia', categoria: 'servicios', descripcion: 'Suministro interno de Productos: filamentos y accesorios del taller.', nota: '', fechaAlta: new Date(Date.now() - 86400000 * 180).toISOString(), estado: 'activo' }
  ];

  // 2. Productos (con campos de inventario: stockActual, stockMin, stockMax, proveedor)
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
      dimensions: { largo: 12, ancho: 12, alto: 22, unit: 'cm' },
      stockActual: 60,
      stockMin: 10,
      stockMax: 30,
      proveedorId: 'prov-1',
      proveedor: 'Polímeros Industriales del Valle',
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
      dimensions: { largo: 14, ancho: 14, alto: 28, unit: 'cm' },
      stockActual: 5,
      stockMin: 2,
      stockMax: 10,
      proveedorId: 'prov-2',
      proveedor: 'Koken Gaskets de Colombia S.A.',
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
      dimensions: { largo: 10, ancho: 10, alto: 18, unit: 'cm' },
      stockActual: 200,
      stockMin: 5,
      stockMax: 15,
      proveedorId: 'prov-2',
      proveedor: 'Koken Gaskets de Colombia S.A.',
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
      dimensions: { largo: 11, ancho: 8, alto: 4, unit: 'cm' },
      stockActual: 50,
      stockMin: 10,
      stockMax: 20,
      proveedorId: 'prov-3',
      proveedor: 'Uttermost Matter S.A.S.',
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
      dimensions: { largo: 9, ancho: 5, alto: 15, unit: 'cm' },
      stockActual: 0,
      stockMin: 5,
      stockMax: 15,
      proveedorId: 'prov-2',
      proveedor: 'Koken Gaskets de Colombia S.A.',
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
      dimensions: { largo: 15, ancho: 12, alto: 24, unit: 'cm' },
      stockActual: 25,
      stockMin: 8,
      stockMax: 20,
      proveedorId: 'prov-2',
      proveedor: 'Koken Gaskets de Colombia S.A.',
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
      dimensions: { largo: 95, ancho: 70, alto: 4, unit: 'cm' },
      stockActual: 3,
      stockMin: 5,
      stockMax: 10,
      proveedorId: 'prov-3',
      proveedor: 'Uttermost Matter S.A.S.',
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
      dimensions: { largo: 80, ancho: 40, alto: 5, unit: 'cm (A medida)' },
      stockActual: 150,
      stockMin: 8,
      stockMax: 30,
      proveedorId: 'prov-3',
      proveedor: 'Uttermost Matter S.A.S.',
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
      dimensions: { largo: 120, ancho: 80, alto: 2.5, unit: 'cm' },
      stockActual: 0,
      stockMin: 5,
      stockMax: 10,
      proveedorId: 'prov-3',
      proveedor: 'Uttermost Matter S.A.S.',
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

  // 4. Pedido inicial de demostración con seguimiento (OrdersProductivo)
  const orders = [
    {
      id: 'ord-demo-1001',
      orderNumber: 'MQ3D-882319',
      userId: 'usr-client-1',
      customerName: 'Carlos Mendoza',
      customerEmail: 'cliente@maquinamos3d.com',
      primeraVisita: true,
      canalesId: 'cnal-store-web',
      channelName: 'Store Web',
      tqsItems: ['gabinete_1u'],
      notasProduccion: 'CAdulto: cualquier advertencia de vibración OK en placaglass.',
      devolucionesCount: 0,
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
      notes: 'Cliente preguntó sobre garantía.',
      totalVentas: 57000,
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

  // 4b. Canales de venta (OrdersProductivo — Canal de ventas)
  const canales = [
    { id: 'cnal-store-web', nombre: 'Store Web', tipo: 'Store Web', descripcion: 'Tienda online integrada Maquinamos 3D', status: 'activo', ultimaVenta: '2026-11-19', fechaCreacion: new Date(Date.now() - 86400000 * 180).toISOString() },
    { id: 'cnal-api', nombre: 'API', tipo: 'API', descripcion: 'API de sklearn/business — orders.routes', status: 'activo', ultimaVenta: '2026-11-20', fechaCreacion: new Date(Date.now() - 86400000 * 120).toISOString() },
    { id: 'cnal-lista-proveedor', nombre: 'Lista de proveedor', tipo: 'Lista de proveedor', descripcion: 'Ordenes generadas por proveedores', status: 'activo', ultimaVenta: null, fechaCreacion: new Date(Date.now() - 86400000 * 90).toISOString() },
    { id: 'cnal-crm', nombre: 'CRM', tipo: 'CRM', descripcion: 'Órdenes del módulo CRM', status: 'activo', ultimaVenta: null, fechaCreacion: new Date(Date.now() - 86400000 * 60).toISOString() },
    { id: 'cnal-otro', nombre: 'Otro', tipo: 'Otro', descripcion: 'Otros canales de venta', status: 'activo', ultimaVenta: null, fechaCreacion: new Date(Date.now() - 86400000 * 45).toISOString() }
  ];

  // 4c. Devoluciones de prueba (Ventas)
  const devoluciones = [
    {
      id: 'dev-demo-1',
      orderId: 'ord-demo-1001',
      orderNumber: 'MQ3D-882319',
      cliente: { id: 'usr-client-1', nombre: 'Carlos Mendoza', email: 'cliente@maquinamos3d.com' },
      productId: 'prod-3d-jarron',
      productName: 'Jarrón Paramétrico Voronoi',
      cantidad: 1,
      motivo: 'El jarrón está agrietado',
      isGananciaVencida: false,
      estado: 'pendiente',
      fisicoUbicado: false,
      fechaSolicitud: new Date(Date.now() - 86400000 * 3).toISOString(),
      fechaResolucion: null,
      precioUnitario: 45000
    }
  ];

  // 5. Módulo de Proyectos: clientes, proyectos, piezas, costos y pagos
  const clients = [
    {
      id: 'cli-demo-1',
      nombre: 'Carlos Mendoza',
      email: 'cliente@maquinamos3d.com',
      telefono: '3109876543',
      direccion: 'Calle 10 # 43E-22, El Poblado, Medellín',
      notas: 'Cliente frecuente de prototipos IoT.',
      fechaRegistro: new Date(Date.now() - 86400000 * 20).toISOString()
    },
    {
      id: 'cli-demo-2',
      nombre: 'Laura Cifuentes',
      email: 'laura.cifuentes@correo.com',
      telefono: '3015558899',
      direccion: 'Cra 70 # 32-15, Laureles, Medellín',
      notas: 'Prefiere pago por transferencia Nequi.',
      fechaRegistro: new Date(Date.now() - 86400000 * 12).toISOString()
    },
    {
      id: 'cli-demo-3',
      nombre: 'Arquitectura Viva SAS',
      email: 'proyectos@arqviva.co',
      telefono: '6044441020',
      direccion: 'Av. Las Palmas # 120-30, Envigado',
      notas: 'Cliente corporativo: maquetas y avisos.',
      fechaRegistro: new Date(Date.now() - 86400000 * 40).toISOString()
    }
  ];

  const projects = [
    {
      id: 'prj-demo-1',
      clientId: 'cli-demo-1',
      tipoProyecto: 'impresion_3d',
      nombreProyecto: 'Carcasas para sensores IoT',
      descripcion: 'Lote de gabinetes ventilados para red de monitoreo ambiental.',
      fechaInicio: new Date(Date.now() - 86400000 * 10).toISOString().slice(0, 10),
      fechaEntrega: new Date(Date.now() + 86400000 * 5).toISOString().slice(0, 10),
      fechaCompletado: null,
      estado: 'en_proceso',
      prioridad: 'alta',
      notas: 'Imprimir en PETG por resistencia térmica.',
      createdAt: new Date(Date.now() - 86400000 * 10).toISOString()
    },
    {
      id: 'prj-demo-2',
      clientId: 'cli-demo-2',
      tipoProyecto: 'diseno_parametrico',
      nombreProyecto: 'Jarrón generativo Voronoi',
      descripcion: 'Diseño paramétrico único para regalo corporativo.',
      fechaInicio: new Date(Date.now() - 86400000 * 2).toISOString().slice(0, 10),
      fechaEntrega: new Date(Date.now() + 86400000 * 8).toISOString().slice(0, 10),
      fechaCompletado: null,
      estado: 'pendiente',
      prioridad: 'media',
      notas: 'Cliente aprobará render antes de fabricar.',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
      id: 'prj-demo-3',
      clientId: 'cli-demo-3',
      tipoProyecto: 'avisos',
      nombreProyecto: 'Aviso neón lobby torre empresarial',
      descripcion: 'Letrero neón flex azul hielo 120x50 cm para recepción.',
      fechaInicio: new Date(Date.now() - 86400000 * 30).toISOString().slice(0, 10),
      fechaEntrega: new Date(Date.now() - 86400000 * 7).toISOString().slice(0, 10),
      fechaCompletado: new Date(Date.now() - 86400000 * 7).toISOString(),
      estado: 'completado',
      prioridad: 'urgente',
      notas: 'Instalado y facturado.',
      createdAt: new Date(Date.now() - 86400000 * 30).toISOString()
    },
    {
      id: 'prj-demo-4',
      clientId: 'cli-demo-3',
      tipoProyecto: 'router_cnc',
      nombreProyecto: 'Celosía divisoria sala juntas',
      descripcion: 'Panel en MDF lacado blanco, patrón geométrico hexagonal 95x70 cm.',
      fechaInicio: new Date(Date.now() - 86400000 * 15).toISOString().slice(0, 10),
      fechaEntrega: new Date(Date.now() - 86400000 * 2).toISOString().slice(0, 10),
      fechaCompletado: null,
      estado: 'cancelado',
      prioridad: 'baja',
      notas: 'Cancelado por rediseño del cliente.',
      createdAt: new Date(Date.now() - 86400000 * 15).toISOString()
    }
  ];

  const pieces = [
    {
      id: 'pza-demo-1',
      projectId: 'prj-demo-1',
      nombrePieza: 'Gabinete enclosure ventilado',
      cantidad: 12,
      largo: 11, ancho: 8, alto: 4,
      volumenCm3: 95.5, pesoGramos: 55,
      material: 'PETG', color: 'Negro', alturaCapa: 0.2,
      rellenoPorcentaje: 25, soportes: false, tiempoImpresionMin: 170,
      archivoStl: '/uploads/models3d/enclosure.stl',
      archivoGcode: '/uploads/models3d/enclosure.gcode',
      notas: 'Riel DIN interno incluido.',
      createdAt: new Date(Date.now() - 86400000 * 9).toISOString()
    },
    {
      id: 'pza-demo-2',
      projectId: 'prj-demo-1',
      nombrePieza: 'Tapa superior con rejilla',
      cantidad: 12,
      largo: 11, ancho: 8, alto: 0.8,
      volumenCm3: 22.1, pesoGramos: 14.5,
      material: 'PETG', color: 'Negro', alturaCapa: 0.2,
      rellenoPorcentaje: 20, soportes: false, tiempoImpresionMin: 45,
      archivoStl: '/uploads/models3d/tapa.stl',
      archivoGcode: '',
      notas: 'Rejilla de ventilación pasiva.',
      createdAt: new Date(Date.now() - 86400000 * 9).toISOString()
    },
    {
      id: 'pza-demo-3',
      projectId: 'prj-demo-2',
      nombrePieza: 'Jarrón Voronoi 22cm',
      cantidad: 1,
      largo: 12, ancho: 12, alto: 22,
      volumenCm3: 310.75, pesoGramos: 95,
      material: 'PLA', color: 'Azul Eléctrico', alturaCapa: 0.16,
      rellenoPorcentaje: 15, soportes: false, tiempoImpresionMin: 260,
      archivoStl: '/uploads/models3d/voronoi.stl',
      archivoGcode: '',
      notas: 'Modo espiral (vase mode).',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
      id: 'pza-demo-4',
      projectId: 'prj-demo-3',
      nombrePieza: 'Base acrílico cristal 5mm',
      cantidad: 1,
      largo: 120, ancho: 50, alto: 0.5,
      volumenCm3: null, pesoGramos: 4200,
      material: 'Acrílico 5mm', color: 'Cristal', alturaCapa: null,
      rellenoPorcentaje: 0, soportes: false, tiempoImpresionMin: null,
      archivoStl: '',
      archivoGcode: '',
      notas: 'Corte láser + pulido de bordes.',
      createdAt: new Date(Date.now() - 86400000 * 28).toISOString()
    },
    {
      id: 'pza-demo-5',
      projectId: 'prj-demo-3',
      nombrePieza: 'Letrero neón flex 12V',
      cantidad: 1,
      largo: 110, ancho: 45, alto: 1.2,
      volumenCm3: null, pesoGramos: 850,
      material: 'Neón Flex', color: 'Azul Hielo', alturaCapa: null,
      rellenoPorcentaje: 0, soportes: false, tiempoImpresionMin: null,
      archivoStl: '',
      archivoGcode: '',
      notas: 'Fuente 12V 5A incluida.',
      createdAt: new Date(Date.now() - 86400000 * 28).toISOString()
    }
  ];

  // Costos con totales calculados (equivalentes a las columnas GENERADAS del SQL)
  const buildCost = (id, pieceId, { costoMaterialKg, materialUsadoGramos, costoEnergiaKwh, precioKwh, horasDiseno, costoHoraDiseno, costoManoObra, otrosCostos, precioVenta }) => {
    const round2 = (v) => Math.round(v * 100) / 100;
    const costoMaterialTotal = round2(costoMaterialKg * materialUsadoGramos / 1000);
    const costoEnergiaTotal = round2(costoEnergiaKwh * precioKwh);
    const costoDisenoTotal = round2(horasDiseno * costoHoraDiseno);
    const costoTotal = round2(costoMaterialTotal + costoEnergiaTotal + costoDisenoTotal + costoManoObra + otrosCostos);
    return {
      id,
      pieceId,
      costoMaterialKg, materialUsadoGramos, costoMaterialTotal,
      costoEnergiaKwh, precioKwh, costoEnergiaTotal,
      horasDiseno, costoHoraDiseno, costoDisenoTotal,
      costoManoObra, otrosCostos,
      costoTotal, precioVenta,
      ganancia: round2(precioVenta - costoTotal),
      updatedAt: new Date().toISOString()
    };
  };

  const costs = [
    buildCost('cst-demo-1', 'pza-demo-1', { costoMaterialKg: 150000, materialUsadoGramos: 55, costoEnergiaKwh: 1.2, precioKwh: 900, horasDiseno: 2.5, costoHoraDiseno: 40000, costoManoObra: 12000, otrosCostos: 3000, precioVenta: 185000 }),
    buildCost('cst-demo-2', 'pza-demo-2', { costoMaterialKg: 150000, materialUsadoGramos: 14.5, costoEnergiaKwh: 0.35, precioKwh: 900, horasDiseno: 0, costoHoraDiseno: 40000, costoManoObra: 4000, otrosCostos: 1000, precioVenta: 12000 }),
    buildCost('cst-demo-3', 'pza-demo-3', { costoMaterialKg: 120000, materialUsadoGramos: 95, costoEnergiaKwh: 1.8, precioKwh: 900, horasDiseno: 3, costoHoraDiseno: 40000, costoManoObra: 8000, otrosCostos: 5000, precioVenta: 185000 }),
    buildCost('cst-demo-4', 'pza-demo-4', { costoMaterialKg: 380000, materialUsadoGramos: 4200, costoEnergiaKwh: 0.5, precioKwh: 900, horasDiseno: 1, costoHoraDiseno: 55000, costoManoObra: 45000, otrosCostos: 22000, precioVenta: 1950000 }),
    buildCost('cst-demo-5', 'pza-demo-5', { costoMaterialKg: 520000, materialUsadoGramos: 850, costoEnergiaKwh: 0.2, precioKwh: 900, horasDiseno: 0.5, costoHoraDiseno: 55000, costoManoObra: 60000, otrosCostos: 35000, precioVenta: 720000 })
  ];

  const projectFiles = [
    { id: 'fil-demo-1', pieceId: 'pza-demo-1', tipoArchivo: 'render', descripcion: 'Render del gabinete en visor OrcaSlicer', rutaArchivo: '/uploads/images/enclosure-render.webp', fechaSubida: new Date(Date.now() - 86400000 * 8).toISOString() },
    { id: 'fil-demo-2', pieceId: 'pza-demo-1', tipoArchivo: 'foto', descripcion: 'Primera unidad impresa en PETG negro', rutaArchivo: '/uploads/images/enclosure-foto.jpg', fechaSubida: new Date(Date.now() - 86400000 * 6).toISOString() },
    { id: 'fil-demo-3', pieceId: 'pza-demo-3', tipoArchivo: 'render', descripcion: 'Vista previa del jarrón en modo espiral', rutaArchivo: '/uploads/images/voronoi-render.png', fechaSubida: new Date(Date.now() - 86400000 * 1).toISOString() },
    { id: 'fil-demo-4', pieceId: 'pza-demo-4', tipoArchivo: 'plano', descripcion: 'Plano de corte del acrílico cristal', rutaArchivo: '/uploads/images/aviso-plano.png', fechaSubida: new Date(Date.now() - 86400000 * 25).toISOString() },
    { id: 'fil-demo-5', pieceId: 'pza-demo-5', tipoArchivo: 'foto', descripcion: 'Prueba de encendido del neón flex', rutaArchivo: '/uploads/images/neon-prueba.jpg', fechaSubida: new Date(Date.now() - 86400000 * 20).toISOString() }
  ];

  const payments = [
    { id: 'pag-demo-1', proyectoId: 'prj-demo-1', monto: 250000, fechaPago: new Date(Date.now() - 86400000 * 9).toISOString(), metodoPago: 'transferencia', referencia: 'NEQUI-88231', estado: 'completado', createdAt: new Date(Date.now() - 86400000 * 9).toISOString() },
    { id: 'pag-demo-2', proyectoId: 'prj-demo-1', monto: 200000, fechaPago: new Date(Date.now() - 86400000 * 1).toISOString(), metodoPago: 'transferencia', referencia: 'BANC-00981234', estado: 'pendiente', createdAt: new Date(Date.now() - 86400000 * 1).toISOString() },
    { id: 'pag-demo-3', proyectoId: 'prj-demo-3', monto: 1130000, fechaPago: new Date(Date.now() - 86400000 * 20).toISOString(), metodoPago: 'tarjeta', referencia: 'VISA-****4582', estado: 'completado', createdAt: new Date(Date.now() - 86400000 * 20).toISOString() },
    { id: 'pag-demo-4', proyectoId: 'prj-demo-4', monto: 180000, fechaPago: new Date(Date.now() - 86400000 * 14).toISOString(), metodoPago: 'efectivo', referencia: 'REC-CAJA-045', estado: 'completado', createdAt: new Date(Date.now() - 86400000 * 14).toISOString() }
  ];

  // Helper: recalcular stats de lifecycle de clientes a partir de órdenes
  const recomputeClienteStats = (clients, orderList) => {
    const perClient = {};
    orderList.forEach(o => {
      if (!perClient[o.customerEmail]) perClient[o.customerEmail] = [];
      perClient[o.customerEmail].push(o);
    });
    clients.forEach(c => {
      const list = perClient[c.email] || [];
      const totalVentas = list.reduce((acc, o) => acc + (Number(o.subtotal) || 0), 0);
      const ordersCount = list.length;
      const status = ordersCount >= 5 || totalVentas >= 1000000 ? 'Fiduciario' :
        ordersCount >= 3 || totalVentas >= 500000 ? 'Prometedor' :
        ordersCount === 1 ? 'Primera visita' :
        ordersCount > 0 ? 'Prometedor' : 'Sin datos';
      const tqs = status === 'Fiduciario' || ordersCount >= 5;
      const scoreVentas = totalVentas + ordersCount * (ordersCount >= 5 ? 10000 : ordersCount >= 3 ? 5000 : ordersCount === 1 ? 0 : 2000);
      c.ordersCount = ordersCount;
      c.totalVentas = totalVentas;
      c.primeraVisita = ordersCount === 1;
      c.status = status;
      c.tqs = tqs;
      c.scoreVentas = scoreVentas;
      c.ultimaVisita = list.length ? new Date(list[0].createdAt).toISOString() : null;
    });
    db.setCollection('clients', clients);
  };

  db.setCollection('users', users);
  db.setCollection('products', products);
  db.setCollection('sponsors', sponsors);
  db.setCollection('orders', orders);
  db.setCollection('clients', clients);
  db.setCollection('projects', projects);
  db.setCollection('pieces', pieces);
  db.setCollection('costs', costs);
  db.setCollection('projectFiles', projectFiles);
  db.setCollection('payments', payments);
  db.setCollection('proveedores', proveedores);
  db.setCollection('pedidos_compra', []);
  db.setCollection('lotes', []);
  db.setCollection('canales', canales);
  db.setCollection('devoluciones', devoluciones);
  recomputeClienteStats(clients, orders);

  console.log('✅ Base de datos sembrada con éxito:');
  console.log(` - Usuarios: ${users.length} (Admin: mmontalvova@gmail.com / Admin123*)`);
  console.log(` - Productos: ${products.length} con inventario integrado + proveedores`);
  console.log(` - Patrocinadores: ${sponsors.length}`);
  console.log(` - Pedidos: ${orders.length}`);
  console.log(` - Proyectos: ${projects.length} | Clientes: ${clients.length} | Piezas: ${pieces.length} | Costos: ${costs.length} | Pagos: ${payments.length}`);
  console.log(` - Módulo ERP: ${proveedores.length} proveedores | 0 pedidos de compra | 0 lotes (vacíos por inventario nuevo)`);
  console.log(` - Módulo Ventas: ${canales.length} canales | ${devoluciones.length} devoluciones`);
  const statsClientes = clients.map(c => `${c.nombre}: ${c.ordersCount || 0} pedidos, $${(c.totalVentas || 0).toLocaleString('es-CO')}, [${c.status || 'Sin datos'}]`);
  console.log(` - Lifecycle clientes: ${statsClientes.join(' | ')}`);
}

seed();
