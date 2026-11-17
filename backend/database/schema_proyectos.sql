-- =====================================================================
--  MAQUINAMOS 3D — Base de Datos de Gestión de Proyectos y Servicios
--  Motor elegido: PostgreSQL 14+ (recomendado 15/16)
--  Descripción: Esquema relacional para un negocio de servicios de
--  impresión 3D / fabricación digital. Incluye tipos ENUM, claves
--  foráneas con políticas de borrado, índices de búsqueda frecuente,
--  columnas calculadas, comentarios de documentación y datos de prueba.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 0. CREACIÓN DE LA BASE DE DATOS (ejecutar como superusuario, opcional)
-- ---------------------------------------------------------------------
-- CREATE DATABASE maquinamos3d
--     WITH ENCODING = 'UTF8'
--     LC_COLLATE = 'es_CO.UTF-8'
--     LC_CTYPE   = 'es_CO.UTF-8'
--     TEMPLATE   = template0;
-- \c maquinamos3d;

-- Limpieza para poder re-ejecutar el script de forma idempotente
DROP TABLE IF EXISTS pagos               CASCADE;
DROP TABLE IF EXISTS archivos_multimedia CASCADE;
DROP TABLE IF EXISTS costos              CASCADE;
DROP TABLE IF EXISTS piezas              CASCADE;
DROP TABLE IF EXISTS proyectos           CASCADE;
DROP TABLE IF EXISTS clientes            CASCADE;

DROP TYPE IF EXISTS tipo_proyecto_enum   CASCADE;
DROP TYPE IF EXISTS estado_proyecto_enum CASCADE;
DROP TYPE IF EXISTS prioridad_enum       CASCADE;
DROP TYPE IF EXISTS tipo_archivo_enum    CASCADE;
DROP TYPE IF EXISTS metodo_pago_enum     CASCADE;
DROP TYPE IF EXISTS estado_pago_enum     CASCADE;

-- ---------------------------------------------------------------------
-- 1. TIPOS ENUMERADOS (buenas prácticas: valores controlados a nivel BD)
-- ---------------------------------------------------------------------

-- Tipos de proyecto que maneja el taller (varios tipos de proyectos)
CREATE TYPE tipo_proyecto_enum AS ENUM (
    'impresion_3d',        -- Piezas FDM en PLA, PETG, ABS, TPU
    'router_cnc',          -- Tallado en madera: puertas, biombos, celosías
    'avisos',              -- Avisos publicitarios en acrílico y neón flex
    'metal',               -- Corte y fabricación metálica
    'diseno_parametrico',  -- Modelado generativo / paramétrico con IA
    'otro'                 -- Servicios especiales no clasificados
);

CREATE TYPE estado_proyecto_enum AS ENUM (
    'pendiente',
    'en_proceso',
    'completado',
    'cancelado'
);

CREATE TYPE prioridad_enum AS ENUM (
    'baja',
    'media',
    'alta',
    'urgente'
);

CREATE TYPE tipo_archivo_enum AS ENUM (
    'foto',
    'render',
    'plano',
    'otro'
);

CREATE TYPE metodo_pago_enum AS ENUM (
    'efectivo',
    'transferencia',
    'tarjeta',
    'otro'
);

CREATE TYPE estado_pago_enum AS ENUM (
    'pendiente',
    'parcial',
    'completado'
);

-- =====================================================================
-- 2. TABLA: CLIENTES
-- =====================================================================
CREATE TABLE clientes (
    cliente_id      BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre          VARCHAR(120)  NOT NULL,
    email           VARCHAR(160)  NOT NULL,
    telefono        VARCHAR(25),
    direccion       VARCHAR(255),
    fecha_registro  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    notas           TEXT,

    -- Restricciones de integridad
    CONSTRAINT uq_clientes_email   UNIQUE (email),
    CONSTRAINT chk_clientes_nombre CHECK (char_length(btrim(nombre)) >= 2),
    CONSTRAINT chk_clientes_email  CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')
);

COMMENT ON TABLE  clientes                 IS 'Clientes del taller de fabricación digital.';
COMMENT ON COLUMN clientes.cliente_id      IS 'Identificador único autoincremental del cliente (PK).';
COMMENT ON COLUMN clientes.email           IS 'Correo electrónico único, usado para búsquedas y notificaciones.';
COMMENT ON COLUMN clientes.fecha_registro  IS 'Fecha y hora en que el cliente se dio de alta en el sistema.';

-- =====================================================================
-- 3. TABLA: PROYECTOS
-- =====================================================================
CREATE TABLE proyectos (
    proyecto_id      BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cliente_id       BIGINT       NOT NULL,
    tipo_proyecto    tipo_proyecto_enum   NOT NULL DEFAULT 'impresion_3d',
    nombre_proyecto  VARCHAR(160) NOT NULL,
    descripcion      TEXT,
    fecha_inicio     DATE         NOT NULL DEFAULT CURRENT_DATE,
    fecha_entrega    DATE,
    fecha_completado TIMESTAMPTZ,
    estado           estado_proyecto_enum NOT NULL DEFAULT 'pendiente',
    prioridad        prioridad_enum       NOT NULL DEFAULT 'media',
    notas            TEXT,

    -- FK hacia CLIENTES con política RESTRICT: no se puede borrar un
    -- cliente que tenga proyectos asociados (protege la trazabilidad).
    CONSTRAINT fk_proyectos_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes (cliente_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    -- Restricciones de negocio
    CONSTRAINT chk_proyectos_nombre  CHECK (char_length(btrim(nombre_proyecto)) >= 3),
    CONSTRAINT chk_proyectos_fechas  CHECK (fecha_entrega IS NULL OR fecha_entrega >= fecha_inicio),
    CONSTRAINT chk_proyectos_completado CHECK (
        (estado = 'completado' AND fecha_completado IS NOT NULL)
        OR (estado <> 'completado')
    )
);

COMMENT ON TABLE  proyectos                    IS 'Proyectos de fabricación contratados por los clientes (varios tipos: impresión 3D, CNC, avisos, metal, diseño paramétrico).';
COMMENT ON COLUMN proyectos.tipo_proyecto      IS 'Clasificación del proyecto según la línea de producción del taller.';
COMMENT ON COLUMN proyectos.estado             IS 'Ciclo de vida: pendiente → en_proceso → completado | cancelado.';
COMMENT ON COLUMN proyectos.fecha_completado   IS 'Marca de tiempo real en que se terminó el proyecto (obligatoria si estado = completado).';

-- =====================================================================
-- 4. TABLA: PIEZAS
-- =====================================================================
CREATE TABLE piezas (
    pieza_id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    proyecto_id          BIGINT       NOT NULL,
    nombre_pieza         VARCHAR(160) NOT NULL,
    cantidad             INTEGER      NOT NULL DEFAULT 1,
    dimensiones_x        NUMERIC(10,2),           -- cm
    dimensiones_y        NUMERIC(10,2),           -- cm
    dimensiones_z        NUMERIC(10,2),           -- cm
    volumen_cm3          NUMERIC(12,3),
    peso_gramos          NUMERIC(10,2),
    material             VARCHAR(40)  NOT NULL DEFAULT 'PLA',  -- PLA, PETG, ABS, TPU...
    color                VARCHAR(60),
    altura_capa          NUMERIC(4,2),            -- mm (0.08 – 0.60 típico)
    relleno_porcentaje   SMALLINT     NOT NULL DEFAULT 20,
    soportes             BOOLEAN      NOT NULL DEFAULT FALSE,
    tiempo_impresion_min INTEGER,                 -- minutos estimados de máquina
    archivo_stl          VARCHAR(255),            -- ruta relativa del modelo fuente
    archivo_gcode        VARCHAR(255),            -- ruta relativa del laminado
    notas                TEXT,

    -- FK hacia PROYECTOS con política RESTRICT: un proyecto con piezas
    -- fabricadas no se puede eliminar directamente (hay que depurar antes).
    CONSTRAINT fk_piezas_proyecto
        FOREIGN KEY (proyecto_id)
        REFERENCES proyectos (proyecto_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT chk_piezas_cantidad   CHECK (cantidad > 0),
    CONSTRAINT chk_piezas_dimensiones CHECK (
        (dimensiones_x IS NULL OR dimensiones_x > 0) AND
        (dimensiones_y IS NULL OR dimensiones_y > 0) AND
        (dimensiones_z IS NULL OR dimensiones_z > 0)
    ),
    CONSTRAINT chk_piezas_relleno    CHECK (relleno_porcentaje BETWEEN 0 AND 100),
    CONSTRAINT chk_piezas_tiempo     CHECK (tiempo_impresion_min IS NULL OR tiempo_impresion_min >= 0)
);

COMMENT ON TABLE  piezas                    IS 'Piezas individuales que componen un proyecto (geometría, material y parámetros de impresión).';
COMMENT ON COLUMN piezas.altura_capa        IS 'Altura de capa de impresión FDM en milímetros.';
COMMENT ON COLUMN piezas.relleno_porcentaje IS 'Porcentaje de infill (0-100) configurado en el laminador.';
COMMENT ON COLUMN piezas.soportes           IS 'TRUE si la pieza requiere estructuras de soporte al imprimir.';

-- =====================================================================
-- 5. TABLA: COSTOS
-- =====================================================================
-- Los subtotales y la ganancia son COLUMNAS GENERADAS (STORED): la base
-- de datos los calcula sola, imposible que queden desincronizados.
-- =====================================================================
CREATE TABLE costos (
    costo_id               BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pieza_id               BIGINT        NOT NULL,

    -- Insumos de material
    costo_material_kg      DECIMAL(10,2) NOT NULL DEFAULT 0,   -- $/kg de filamento
    material_usado_gramos  DECIMAL(10,2) NOT NULL DEFAULT 0,

    -- Energía eléctrica
    costo_energia_kwh      DECIMAL(10,2) NOT NULL DEFAULT 0,   -- consumo kWh estimado
    precio_kwh             DECIMAL(10,2) NOT NULL DEFAULT 0,   -- tarifa $/kWh

    -- Diseño y mano de obra
    horas_diseno           DECIMAL(6,2)  NOT NULL DEFAULT 0,
    costo_hora_diseno      DECIMAL(10,2) NOT NULL DEFAULT 0,
    costo_mano_obra        DECIMAL(10,2) NOT NULL DEFAULT 0,
    otros_costos           DECIMAL(10,2) NOT NULL DEFAULT 0,

    -- Precio comercial acordado
    precio_venta           DECIMAL(10,2) NOT NULL DEFAULT 0,

    -- ---- Columnas calculadas automáticamente por PostgreSQL ----
    costo_material_total   DECIMAL(12,2) GENERATED ALWAYS AS
        (ROUND(costo_material_kg * material_usado_gramos / 1000.0, 2)) STORED,
    costo_energia_total    DECIMAL(12,2) GENERATED ALWAYS AS
        (ROUND(costo_energia_kwh * precio_kwh, 2)) STORED,
    costo_diseno_total     DECIMAL(12,2) GENERATED ALWAYS AS
        (ROUND(horas_diseno * costo_hora_diseno, 2)) STORED,
    costo_total            DECIMAL(12,2) GENERATED ALWAYS AS
        (ROUND(
              costo_material_kg * material_usado_gramos / 1000.0
            + costo_energia_kwh * precio_kwh
            + horas_diseno * costo_hora_diseno
            + costo_mano_obra
            + otros_costos
        , 2)) STORED,
    ganancia               DECIMAL(12,2) GENERATED ALWAYS AS
        (ROUND(
              precio_venta
            - ( costo_material_kg * material_usado_gramos / 1000.0
              + costo_energia_kwh * precio_kwh
              + horas_diseno * costo_hora_diseno
              + costo_mano_obra
              + otros_costos )
        , 2)) STORED,

    -- Un solo registro de costos por pieza (relación 1:1)
    CONSTRAINT uq_costos_pieza UNIQUE (pieza_id),

    -- FK hacia PIEZAS con política CASCADE: el costo no tiene sentido
    -- sin su pieza; si la pieza se borra, su costo desaparece con ella.
    CONSTRAINT fk_costos_pieza
        FOREIGN KEY (pieza_id)
        REFERENCES piezas (pieza_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT chk_costos_no_negativos CHECK (
           costo_material_kg     >= 0 AND material_usado_gramos >= 0
       AND costo_energia_kwh     >= 0 AND precio_kwh            >= 0
       AND horas_diseno          >= 0 AND costo_hora_diseno     >= 0
       AND costo_mano_obra       >= 0 AND otros_costos          >= 0
    ),
    CONSTRAINT chk_costos_precio CHECK (precio_venta >= 0)
);

COMMENT ON TABLE  costos                      IS 'Estructura de costos y rentabilidad por pieza (material, energía, diseño, mano de obra).';
COMMENT ON COLUMN costos.costo_material_total IS 'CALCULADA: (costo_material_kg / 1000) * gramos usados.';
COMMENT ON COLUMN costos.costo_total          IS 'CALCULADA: material + energía + diseño + mano de obra + otros.';
COMMENT ON COLUMN costos.ganancia             IS 'CALCULADA: precio_venta - costo_total.';

-- =====================================================================
-- 6. TABLA: ARCHIVOS_MULTIMEDIA
-- =====================================================================
CREATE TABLE archivos_multimedia (
    archivo_id    BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pieza_id      BIGINT            NOT NULL,
    tipo_archivo  tipo_archivo_enum NOT NULL DEFAULT 'foto',
    descripcion   VARCHAR(255),
    ruta_archivo  VARCHAR(255)      NOT NULL,
    fecha_subida  TIMESTAMPTZ       NOT NULL DEFAULT NOW(),

    -- FK hacia PIEZAS con política CASCADE: los archivos multimedia son
    -- evidencia adjunta de la pieza y se eliminan junto con ella.
    CONSTRAINT fk_archivos_pieza
        FOREIGN KEY (pieza_id)
        REFERENCES piezas (pieza_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT chk_archivos_ruta CHECK (char_length(btrim(ruta_archivo)) > 0)
);

COMMENT ON TABLE  archivos_multimedia               IS 'Fotos, renders y planos asociados a las piezas fabricadas.';
COMMENT ON COLUMN archivos_multimedia.tipo_archivo  IS 'Clasificación del recurso: foto, render, plano u otro.';

-- =====================================================================
-- 7. TABLA: PAGOS
-- =====================================================================
CREATE TABLE pagos (
    pago_id      BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    proyecto_id  BIGINT            NOT NULL,
    monto        DECIMAL(10,2)     NOT NULL,
    fecha_pago   TIMESTAMPTZ       NOT NULL DEFAULT NOW(),
    metodo_pago  metodo_pago_enum  NOT NULL DEFAULT 'transferencia',
    referencia   VARCHAR(120),
    estado       estado_pago_enum  NOT NULL DEFAULT 'pendiente',

    -- FK hacia PROYECTOS con política RESTRICT: un proyecto con pagos
    -- registrados no se puede borrar (auditoría contable protegida).
    CONSTRAINT fk_pagos_proyecto
        FOREIGN KEY (proyecto_id)
        REFERENCES proyectos (proyecto_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT chk_pagos_monto CHECK (monto > 0)
);

COMMENT ON TABLE  pagos            IS 'Abonos y pagos realizados por los clientes a cada proyecto.';
COMMENT ON COLUMN pagos.estado     IS 'pendiente = anunciado sin confirmar | parcial = abono | completado = pago confirmado.';
COMMENT ON COLUMN pagos.referencia IS 'Número de comprobante, transacción bancaria o recibo de caja.';

-- =====================================================================
-- 8. ÍNDICES (columnas de búsqueda frecuente y llaves foráneas)
-- =====================================================================

-- Búsqueda de clientes por correo (login, notificaciones)
CREATE INDEX idx_clientes_email        ON clientes (email);
CREATE INDEX idx_clientes_nombre       ON clientes (nombre);

-- Filtros habituales del tablero de producción
CREATE INDEX idx_proyectos_cliente     ON proyectos (cliente_id);
CREATE INDEX idx_proyectos_estado      ON proyectos (estado);
CREATE INDEX idx_proyectos_tipo        ON proyectos (tipo_proyecto);
CREATE INDEX idx_proyectos_prioridad   ON proyectos (prioridad);
CREATE INDEX idx_proyectos_entrega     ON proyectos (fecha_entrega);

-- Joins de piezas y costos
CREATE INDEX idx_piezas_proyecto       ON piezas (proyecto_id);
CREATE INDEX idx_piezas_material       ON piezas (material);
CREATE INDEX idx_costos_pieza          ON costos (pieza_id);

-- Galería multimedia por pieza
CREATE INDEX idx_archivos_pieza        ON archivos_multimedia (pieza_id);
CREATE INDEX idx_archivos_tipo         ON archivos_multimedia (tipo_archivo);

-- Reportes contables: por proyecto, por fecha y por estado del pago
CREATE INDEX idx_pagos_proyecto        ON pagos (proyecto_id);
CREATE INDEX idx_pagos_fecha           ON pagos (fecha_pago);
CREATE INDEX idx_pagos_estado          ON pagos (estado);

-- =====================================================================
-- 9. DATOS DE PRUEBA (INSERT INTO) — listos para probar de inmediato
-- =====================================================================

-- 9.1 Clientes
INSERT INTO clientes (nombre, email, telefono, direccion, notas) VALUES
    ('Carlos Mendoza',        'cliente@maquinamos3d.com',  '3109876543', 'Calle 10 # 43E-22, El Poblado, Medellín', 'Cliente frecuente de prototipos IoT.'),
    ('Laura Cifuentes',       'laura.cifuentes@correo.com','3015558899', 'Cra 70 # 32-15, Laureles, Medellín',      'Prefiere pago por transferencia Nequi.'),
    ('Arquitectura Viva SAS', 'proyectos@arqviva.co',      '6044441020', 'Av. Las Palmas # 120-30, Envigado',       'Cliente corporativo: maquetas y avisos.');

-- 9.2 Proyectos (varios TIPOS de proyecto y estados del ciclo de vida)
INSERT INTO proyectos
    (cliente_id, tipo_proyecto, nombre_proyecto, descripcion, fecha_inicio, fecha_entrega, fecha_completado, estado, prioridad, notas)
VALUES
    (1, 'impresion_3d',       'Carcasas para sensores IoT',      'Lote de gabinetes ventilados para red de monitoreo ambiental.',       CURRENT_DATE - INTERVAL '10 days', CURRENT_DATE + INTERVAL '5 days', NULL,        'en_proceso', 'alta',    'Imprimir en PETG por resistencia térmica.'),
    (2, 'diseno_parametrico', 'Jarrón generativo Voronoi',       'Diseño paramétrico único para regalo corporativo.',                   CURRENT_DATE - INTERVAL '2 days',  CURRENT_DATE + INTERVAL '8 days', NULL,        'pendiente',  'media',   'Cliente aprobará render antes de fabricar.'),
    (3, 'avisos',             'Aviso neón lobby torre empresarial','Letrero neón flex azul hielo 120x50 cm para recepción.',            CURRENT_DATE - INTERVAL '30 days', CURRENT_DATE - INTERVAL '7 days',  NOW() - INTERVAL '7 days', 'completado', 'urgente', 'Instalado y facturado.'),
    (3, 'router_cnc',         'Celosía divisoria sala juntas',   'Panel en MDF lacado blanco, patrón geométrico hexagonal 95x70 cm.',   CURRENT_DATE - INTERVAL '15 days', CURRENT_DATE - INTERVAL '2 days',  NULL,        'cancelado',  'baja',    'Cancelado por rediseño del cliente.');

-- 9.3 Piezas
INSERT INTO piezas
    (proyecto_id, nombre_pieza, cantidad, dimensiones_x, dimensiones_y, dimensiones_z, volumen_cm3, peso_gramos, material, color, altura_capa, relleno_porcentaje, soportes, tiempo_impresion_min, archivo_stl, archivo_gcode, notas)
VALUES
    (1, 'Gabinete enclosure ventilado', 12, 11.00, 8.00, 4.00,  95.500, 55.00,  'PETG', 'Negro',            0.20, 25, FALSE, 170, '/uploads/models3d/enclosure.stl', '/uploads/models3d/enclosure.gcode', 'Riel DIN interno incluido.'),
    (1, 'Tapa superior con rejilla',    12, 11.00, 8.00, 0.80,  22.100, 14.50,  'PETG', 'Negro',            0.20, 20, FALSE, 45,  '/uploads/models3d/tapa.stl',      NULL,                             'Rejilla de ventilación pasiva.'),
    (2, 'Jarrón Voronoi 22cm',           1, 12.00, 12.00, 22.00, 310.750, 95.00, 'PLA',  'Azul Eléctrico',   0.16, 15, FALSE, 260, '/uploads/models3d/voronoi.stl',   NULL,                             'Modo espiral (vase mode).'),
    (3, 'Base acrílico cristal 5mm',     1, 120.00, 50.00, 0.50, NULL,    4200.00,'Acrílico 5mm', 'Cristal', NULL,  0,  FALSE, NULL, NULL,                            NULL,                             'Corte láser + pulido de bordes.'),
    (3, 'Letrero neón flex 12V',         1, 110.00, 45.00, 1.20, NULL,    850.00, 'Neón Flex',   'Azul Hielo',NULL,  0,  FALSE, NULL, NULL,                            NULL,                             'Fuente 12V 5A incluida.');

-- 9.4 Costos (los subtotales y la ganancia se calculan solos)
INSERT INTO costos
    (pieza_id, costo_material_kg, material_usado_gramos, costo_energia_kwh, precio_kwh, horas_diseno, costo_hora_diseno, costo_mano_obra, otros_costos, precio_venta)
VALUES
    (1, 150000, 55.00, 1.20,  900, 2.50, 40000, 12000, 3000,  185000),
    (2, 150000, 14.50, 0.35,  900, 0.00, 40000,  4000, 1000,  12000),
    (3, 120000, 95.00, 1.80,  900, 3.00, 40000,  8000, 5000,  185000),
    (4, 380000, 4200.00, 0.50, 900, 1.00, 55000, 45000, 22000, 1950000),
    (5, 520000, 850.00, 0.20, 900, 0.50, 55000, 60000, 35000, 720000);

-- 9.5 Archivos multimedia
INSERT INTO archivos_multimedia (pieza_id, tipo_archivo, descripcion, ruta_archivo) VALUES
    (1, 'render', 'Render del gabinete en visor OrcaSlicer', '/uploads/images/enclosure-render.webp'),
    (1, 'foto',   'Primera unidad impresa en PETG negro',    '/uploads/images/enclosure-foto.jpg'),
    (3, 'render', 'Vista previa del jarrón en modo espiral', '/uploads/images/voronoi-render.png'),
    (4, 'plano',  'Plano de corte del acrílico cristal',     '/uploads/images/aviso-plano.png'),
    (5, 'foto',   'Prueba de encendido del neón flex',       '/uploads/images/neon-prueba.jpg');

-- 9.6 Pagos
INSERT INTO pagos (proyecto_id, monto, fecha_pago, metodo_pago, referencia, estado) VALUES
    (1, 250000, NOW() - INTERVAL '9 days',  'transferencia', 'NEQUI-88231',    'completado'),
    (1, 200000, NOW() - INTERVAL '1 day',   'transferencia', 'BANC-00981234',  'pendiente'),
    (3, 1130000, NOW() - INTERVAL '20 days','tarjeta',       'VISA-****4582',  'completado'),
    (4, 180000, NOW() - INTERVAL '14 days', 'efectivo',      'REC-CAJA-045',   'completado');

-- =====================================================================
-- 10. CONSULTAS DE VERIFICACIÓN RÁPIDA (descomentar para probar)
-- =====================================================================
-- Rentabilidad por pieza:
-- SELECT p.nombre_pieza, c.costo_total, c.precio_venta, c.ganancia
-- FROM costos c JOIN piezas p ON p.pieza_id = c.pieza_id;
--
-- Cartera por proyecto (pagado vs pendiente):
-- SELECT pr.nombre_proyecto, pr.estado,
--        SUM(pg.monto) FILTER (WHERE pg.estado = 'completado') AS pagado,
--        SUM(pg.monto) FILTER (WHERE pg.estado <> 'completado') AS pendiente
-- FROM proyectos pr LEFT JOIN pagos pg ON pg.proyecto_id = pr.proyecto_id
-- GROUP BY pr.proyecto_id ORDER BY pr.proyecto_id;

-- =====================================================================
-- 11. ESQUEMA EQUIVALENTE EN PRISMA (schema.prisma)
-- =====================================================================
-- Guardar este bloque como `prisma/schema.prisma` en un proyecto Node.js
-- moderno. Requiere: npm install prisma @prisma/client
-- y la variable de entorno DATABASE_URL apuntando a PostgreSQL.
-- ---------------------------------------------------------------------
/*

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// ---------- ENUMs ----------
enum TipoProyecto {
  impresion_3d
  router_cnc
  avisos
  metal
  diseno_parametrico
  otro
}

enum EstadoProyecto {
  pendiente
  en_proceso
  completado
  cancelado
}

enum Prioridad {
  baja
  media
  alta
  urgente
}

enum TipoArchivo {
  foto
  render
  plano
  otro
}

enum MetodoPago {
  efectivo
  transferencia
  tarjeta
  otro
}

enum EstadoPago {
  pendiente
  parcial
  completado
}

// ---------- MODELOS ----------
model Cliente {
  clienteId     BigInt     @id @default(autoincrement()) @map("cliente_id")
  nombre        String     @db.VarChar(120)
  email         String     @unique @db.VarChar(160)
  telefono      String?    @db.VarChar(25)
  direccion     String?    @db.VarChar(255)
  fechaRegistro DateTime   @default(now()) @map("fecha_registro") @db.Timestamptz(6)
  notas         String?

  proyectos     Proyecto[]

  @@map("clientes")
}

model Proyecto {
  proyectoId      BigInt          @id @default(autoincrement()) @map("proyecto_id")
  clienteId       BigInt          @map("cliente_id")
  tipoProyecto    TipoProyecto    @default(impresion_3d) @map("tipo_proyecto")
  nombreProyecto  String          @map("nombre_proyecto") @db.VarChar(160)
  descripcion     String?
  fechaInicio     DateTime        @default(now()) @map("fecha_inicio") @db.Date
  fechaEntrega    DateTime?       @map("fecha_entrega") @db.Date
  fechaCompletado DateTime?       @map("fecha_completado") @db.Timestamptz(6)
  estado          EstadoProyecto  @default(pendiente)
  prioridad       Prioridad       @default(media)
  notas           String?

  cliente         Cliente         @relation(fields: [clienteId], references: [clienteId], onDelete: Restrict, onUpdate: Cascade)
  piezas          Pieza[]
  pagos           Pago[]

  @@index([estado])
  @@index([tipoProyecto])
  @@index([prioridad])
  @@index([fechaEntrega])
  @@map("proyectos")
}

model Pieza {
  piezaId            BigInt   @id @default(autoincrement()) @map("pieza_id")
  proyectoId         BigInt   @map("proyecto_id")
  nombrePieza        String   @map("nombre_pieza") @db.VarChar(160)
  cantidad           Int      @default(1)
  dimensionesX       Decimal? @map("dimensiones_x") @db.Decimal(10, 2)
  dimensionesY       Decimal? @map("dimensiones_y") @db.Decimal(10, 2)
  dimensionesZ       Decimal? @map("dimensiones_z") @db.Decimal(10, 2)
  volumenCm3         Decimal? @map("volumen_cm3") @db.Decimal(12, 3)
  pesoGramos         Decimal? @map("peso_gramos") @db.Decimal(10, 2)
  material           String   @default("PLA") @db.VarChar(40)
  color              String?  @db.VarChar(60)
  alturaCapa         Decimal? @map("altura_capa") @db.Decimal(4, 2)
  rellenoPorcentaje  Int      @default(20) @map("relleno_porcentaje") @db.SmallInt
  soportes           Boolean  @default(false)
  tiempoImpresionMin Int?     @map("tiempo_impresion_min")
  archivoStl         String?  @map("archivo_stl") @db.VarChar(255)
  archivoGcode       String?  @map("archivo_gcode") @db.VarChar(255)
  notas              String?

  proyecto           Proyecto @relation(fields: [proyectoId], references: [proyectoId], onDelete: Restrict, onUpdate: Cascade)
  costo              Costo?
  archivos           ArchivoMultimedia[]

  @@index([material])
  @@map("piezas")
}

model Costo {
  costoId             BigInt  @id @default(autoincrement()) @map("costo_id")
  piezaId             BigInt  @unique @map("pieza_id")
  costoMaterialKg     Decimal @default(0) @map("costo_material_kg") @db.Decimal(10, 2)
  materialUsadoGramos Decimal @default(0) @map("material_usado_gramos") @db.Decimal(10, 2)
  costoEnergiaKwh     Decimal @default(0) @map("costo_energia_kwh") @db.Decimal(10, 2)
  precioKwh           Decimal @default(0) @map("precio_kwh") @db.Decimal(10, 2)
  horasDiseno         Decimal @default(0) @map("horas_diseno") @db.Decimal(6, 2)
  costoHoraDiseno     Decimal @default(0) @map("costo_hora_diseno") @db.Decimal(10, 2)
  costoManoObra       Decimal @default(0) @map("costo_mano_obra") @db.Decimal(10, 2)
  otrosCostos         Decimal @default(0) @map("otros_costos") @db.Decimal(10, 2)
  precioVenta         Decimal @default(0) @map("precio_venta") @db.Decimal(10, 2)

  // NOTA: los totales y la ganancia son columnas GENERADAS en PostgreSQL
  // (ver script SQL). Prisma los trata como campos de solo lectura:
  // se pueden incluir con Unsupported o leerlos por consultas crudas
  // ($queryRaw). Alternativa práctica: calcularlos en la capa de
  // aplicación antes de guardar.
  pieza               Pieza   @relation(fields: [piezaId], references: [piezaId], onDelete: Cascade, onUpdate: Cascade)

  @@map("costos")
}

model ArchivoMultimedia {
  archivoId   BigInt      @id @default(autoincrement()) @map("archivo_id")
  piezaId     BigInt      @map("pieza_id")
  tipoArchivo TipoArchivo @default(foto) @map("tipo_archivo")
  descripcion String?     @db.VarChar(255)
  rutaArchivo String      @map("ruta_archivo") @db.VarChar(255)
  fechaSubida DateTime    @default(now()) @map("fecha_subida") @db.Timestamptz(6)

  pieza       Pieza       @relation(fields: [piezaId], references: [piezaId], onDelete: Cascade, onUpdate: Cascade)

  @@index([tipoArchivo])
  @@map("archivos_multimedia")
}

model Pago {
  pagoId     BigInt      @id @default(autoincrement()) @map("pago_id")
  proyectoId BigInt      @map("proyecto_id")
  monto      Decimal     @db.Decimal(10, 2)
  fechaPago  DateTime    @default(now()) @map("fecha_pago") @db.Timestamptz(6)
  metodoPago MetodoPago  @default(transferencia) @map("metodo_pago")
  referencia String?     @db.VarChar(120)
  estado     EstadoPago  @default(pendiente)

  proyecto   Proyecto    @relation(fields: [proyectoId], references: [proyectoId], onDelete: Restrict, onUpdate: Cascade)

  @@index([fechaPago])
  @@index([estado])
  @@map("pagos")
}

*/
-- =====================================================================
-- FIN DEL SCRIPT
-- =====================================================================
