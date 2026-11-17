# =====================================================================
#  MAQUINAMOS 3D (Param_3D) — Dockerfile todo-en-uno
#  Multi-stage: compila el frontend (React + Vite) y lo sirve junto con
#  la API (Node.js + Express) en un solo contenedor.
#
#  Construir:   docker build -t param3d .
#  Ejecutar:    docker run -d -p 5000:5000 --name param3d param3d
#  Con datos persistentes (base de datos JSON + archivos subidos):
#    docker run -d -p 5000:5000 --name param3d \
#      -v param3d_uploads:/app/uploads \
#      param3d
#  Sembrar datos de prueba (una vez el contenedor esté corriendo):
#    docker exec param3d npm run seed
#
#  App:  http://localhost:5000   (API en http://localhost:5000/api/health)
# =====================================================================

# ---------------------------------------------------------------------
# ETAPA 1: Compilación del frontend (React + Vite + Tailwind)
# ---------------------------------------------------------------------
FROM node:20-alpine AS frontend-build
WORKDIR /build

# Primero solo los manifiestos: aprovecha la caché de capas de Docker
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

# Luego el código fuente y compilación de producción -> /build/dist
COPY frontend/ ./
RUN npm run build

# ---------------------------------------------------------------------
# ETAPA 2: Imagen final de producción (API + frontend estático)
# ---------------------------------------------------------------------
FROM node:20-alpine

ENV NODE_ENV=production \
    PORT=5000 \
    FRONTEND_DIST=/app/public

WORKDIR /app

# Dependencias del backend (solo producción, con caché de capas)
COPY backend/package.json backend/package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Código fuente del backend
COPY --chown=node:node backend/ ./

# Frontend compilado desde la etapa 1, servido estáticamente por Express
COPY --from=frontend-build --chown=node:node /build/dist ./public

# Directorio de archivos subidos (escribible por el usuario no-root)
RUN mkdir -p /app/uploads && chown -R node:node /app

# Ejecutar como usuario no-root (buena práctica de seguridad)
USER node

EXPOSE 5000

# Verificación de salud del contenedor usando el endpoint existente
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:5000/api/health >/dev/null 2>&1 || exit 1

# La base de datos JSON (database.json) y el esquema por defecto se crean
# automáticamente en el primer arranque si no existen (ver src/config/db.js).
CMD ["node", "src/server.js"]
