// Genera archivos de ejemplo descargables: ejemplo_jarron.stl y carpeta 3MF lista para comprimir.
// Uso: node scripts/generateExamples.js
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'uploads', 'models3d');
const BASE = 'ejemplo_jarron';
const SEGMENTS = 48;
const RINGS = 40;
const HEIGHT = 220; // mm
const WALL = 2; // mm

// Perfil del jarron: radio exterior segun altura (con onda tipo espiral)
const outerRadius = (t) => 45 + 18 * Math.sin(t * Math.PI * 1.6) + 6 * Math.sin(t * Math.PI * 6);

const vertices = [];
const triangles = [];

const addVertex = (x, y, z) => { vertices.push([x, y, z]); return vertices.length - 1; };

// Anillos exterior e interior
const outer = [];
const inner = [];
for (let i = 0; i <= RINGS; i++) {
  const t = i / RINGS;
  const z = t * HEIGHT;
  const ro = outerRadius(t);
  const ri = Math.max(ro - WALL, 1);
  const ringO = [];
  const ringI = [];
  for (let s = 0; s < SEGMENTS; s++) {
    const a = (s / SEGMENTS) * Math.PI * 2;
    ringO.push(addVertex(ro * Math.cos(a), ro * Math.sin(a), z));
    ringI.push(addVertex(ri * Math.cos(a), ri * Math.sin(a), z));
  }
  outer.push(ringO);
  inner.push(ringI);
}

for (let i = 0; i < RINGS; i++) {
  for (let s = 0; s < SEGMENTS; s++) {
    const n = (s + 1) % SEGMENTS;
    // Pared exterior (normal hacia afuera)
    triangles.push([outer[i][s], outer[i][n], outer[i + 1][s]]);
    triangles.push([outer[i][n], outer[i + 1][n], outer[i + 1][s]]);
    // Pared interior (normal hacia adentro)
    triangles.push([inner[i][s], inner[i + 1][s], inner[i][n]]);
    triangles.push([inner[i][n], inner[i + 1][s], inner[i + 1][n]]);
  }
}
for (let s = 0; s < SEGMENTS; s++) {
  const n = (s + 1) % SEGMENTS;
  // Borde superior (anillo entre exterior e interior)
  triangles.push([outer[RINGS][s], outer[RINGS][n], inner[RINGS][s]]);
  triangles.push([outer[RINGS][n], inner[RINGS][n], inner[RINGS][s]]);
}
// Base solida (fondo cerrado de 2 mm)
const centerBottom = addVertex(0, 0, 0);
const centerFloor = addVertex(0, 0, WALL);
for (let s = 0; s < SEGMENTS; s++) {
  const n = (s + 1) % SEGMENTS;
  triangles.push([centerBottom, outer[0][n], outer[0][s]]);
  triangles.push([centerFloor, inner[0][s], inner[0][n]]);
}

// --- STL binario ---
const normalOf = (a, b, c) => {
  const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
  const n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  const len = Math.hypot(...n) || 1;
  return n.map((x) => x / len);
};

const buffer = Buffer.alloc(84 + triangles.length * 50);
buffer.write('Maquinamos 3D - ejemplo de jarron parametrico', 0, 'ascii');
buffer.writeUInt32LE(triangles.length, 80);
let offset = 84;
for (const [ia, ib, ic] of triangles) {
  const a = vertices[ia]; const b = vertices[ib]; const c = vertices[ic];
  const n = normalOf(a, b, c);
  [n, a, b, c].forEach((vec) => vec.forEach((val) => { buffer.writeFloatLE(val, offset); offset += 4; }));
  buffer.writeUInt16LE(0, offset); offset += 2;
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, `${BASE}.stl`), buffer);

// --- Estructura 3MF (se comprime luego como .zip -> .3mf) ---
const pkg = path.join(OUT, `${BASE}_3mf_src`);
fs.mkdirSync(path.join(pkg, '_rels'), { recursive: true });
fs.mkdirSync(path.join(pkg, '3D'), { recursive: true });

fs.writeFileSync(path.join(pkg, '[Content_Types].xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
  '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
  '<Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>');

fs.writeFileSync(path.join(pkg, '_rels', '.rels'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
  '<Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>');

const vx = vertices.map((v) => `<vertex x="${v[0].toFixed(4)}" y="${v[1].toFixed(4)}" z="${v[2].toFixed(4)}"/>`).join('');
const tr = triangles.map((t) => `<triangle v1="${t[0]}" v2="${t[1]}" v3="${t[2]}"/>`).join('');
fs.writeFileSync(path.join(pkg, '3D', '3dmodel.model'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<model unit="millimeter" xml:lang="es-CO" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">' +
  '<metadata name="Title">Ejemplo jarron parametrico</metadata><metadata name="Designer">Maquinamos 3D</metadata>' +
  `<resources><object id="1" type="model"><mesh><vertices>${vx}</vertices><triangles>${tr}</triangles></mesh></object></resources>` +
  '<build><item objectid="1" transform="1 0 0 0 1 0 0 0 1 180 180 0"/></build></model>');

console.log(`OK: ${BASE}.stl (${triangles.length} triangulos) y carpeta 3MF generados en ${OUT}`);
