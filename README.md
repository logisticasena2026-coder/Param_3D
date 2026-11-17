# Maquinamos 3D — Plataforma Web de Fabricación Digital y E-Commerce

Plataforma full-stack para **Maquinamos 3D**, taller especializado en manufactura digital:
- **Impresión 3D Técnica FDM** en materiales **PETG, PLA, ABS y TPU** (cama de gran formato hasta **36 × 36 × 36 cm**).
- **Router CNC en Madera** para puertas, biombos, celosías y tableros (hasta **100 × 75 × 15 cm**).
- **Avisos Publicitarios** en acrílico cristal y neón flex (cualquier tamaño).
- **Corte y Fabricación Metálica** en lámina de hierro al carbón (hasta **150 × 250 × 3 cm**) y acero inoxidable (hasta **2 cm**).

---

## Datos Oficiales de Contacto
- **Empresa:** Maquinamos 3D
- **Teléfono:** [3005076700](tel:3005076700)
- **Correo Electrónico:** [mmontalvova@gmail.com](mailto:mmontalvova@gmail.com)

---

## 🚀 Inicio Rápido

### 1. Iniciar Backend (Node.js + Express)
```bash
cd backend
npm install
npm run seed     # Siembra base de datos inicial con productos, patrocinadores y usuarios
npm start        # Inicia API REST en http://localhost:5000
```

### 2. Iniciar Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev      # Inicia cliente en http://localhost:3000
```

### 3. Alternativa con Docker (todo-en-uno)
El `Dockerfile` de la raíz compila el frontend y lo sirve junto con la API en un solo contenedor:
```bash
docker build -t param3d .
docker run -d -p 5000:5000 --name param3d param3d
docker exec param3d npm run seed   # Opcional: siembra datos de prueba
```
- App completa en **http://localhost:5000** (API + frontend compilado).
- Persistencia de archivos subidos: agrega `-v param3d_uploads:/app/uploads`.
- La base de datos JSON se crea automáticamente en el primer arranque.

### 3. Credenciales de Prueba Preconfiguradas
- **Administrador:**
  - Correo: `mmontalvova@gmail.com`
  - Contraseña: `Admin123*`
- **Cliente:**
  - Correo: `cliente@maquinamos3d.com`
  - Contraseña: `Cliente123*`

---

## 📁 Módulo de Proyectos (Gestión de Taller)

Apartado administrativo para gestionar los **proyectos de fabricación** del negocio, con varios tipos de proyecto: **Impresión 3D, Router CNC, Avisos Publicitarios, Corte y Metal, Diseño Paramétrico y Otro**.

- **Esquema relacional:** `CLIENTES → PROYECTOS → PIEZAS → COSTOS (1:1) / ARCHIVOS_MULTIMEDIA / PAGOS`.
- **API REST:** `/api/projects` (solo administrador) — clientes, proyectos, piezas, costos con cálculo automático de totales y ganancia, archivos multimedia y pagos.
- **Políticas de borrado replicadas:** `RESTRICT` (no se puede borrar un cliente con proyectos, ni un proyecto con piezas/pagos) y `CASCADE` (al borrar una pieza se eliminan sus costos y archivos).
- **Panel Admin:** pestaña **"Proyectos"** con filtros por tipo/estado/prioridad, creación de proyectos, piezas, editor de costos con ganancia en vivo, registro de pagos y gestión de clientes.

### Script SQL (PostgreSQL) y Prisma
- **`backend/database/schema_proyectos.sql`** — Script completo: tipos ENUM, 6 tablas con constraints, columnas calculadas (`GENERATED ALWAYS AS`), índices de búsqueda frecuente, comentarios y datos de prueba (`INSERT INTO`). El esquema Prisma viene comentado al final del archivo.
- **`backend/prisma/schema.prisma`** — Esquema Prisma equivalente listo para usar con `DATABASE_URL` de PostgreSQL.

```bash
# Ejecutar el script SQL con PostgreSQL instalado:
psql -U postgres -f backend/database/schema_proyectos.sql
```

---

## 🛠️ Arquitectura y Decisiones Técnicas

- **Base de Datos Portable:** Motor JSON estructurado con transacciones sincrónicas en disco para máxima portabilidad sin necesidad de instalar compiladores C++ ni motores de base de datos pesados.
- **Visor 3D Estilo OrcaSlicer:** Desarrollado con Three.js puro, renderiza una cama cuadriculada milimétrica de 36 × 36 cm, indicador de ejes X, Y, Z y reactividad de color en tiempo real según el filamento seleccionado.
- **Seguridad en Descargas STL:** Validación del lado del servidor en `/api/products/:id/download`. Solo permite la descarga si el modelo está marcado como gratuito o si el usuario autenticado tiene una orden de compra registrada para dicha pieza.
- **Flujo Obligatorio de Pedidos:** `Pedido` → `Preparado` → `Terminado` → `Entregado`.
- **Diseño Paramétrico con IA Desacoplado:** Arquitectura *Adapter/Factory* que permite operar con el motor paramétrico procedural local o cambiar a proveedores en la nube (OpenAI Shap-E, Meshy 3D, Tripo3D) mediante variables de entorno.
- **Personalización de Interfaz:** Soporte para 5 paletas de color, 3 tamaños de tipografía y modo claro/oscuro persistidos por usuario.
