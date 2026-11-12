import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Layers,
  RotateCcw,
  Eye,
  Maximize2,
  CheckCircle2,
  AlertTriangle,
  Sliders
} from 'lucide-react';

const COLOR_MAP = {
  'Blanco': 0xf8fafc,
  'Negro': 0x1e293b,
  'Rojo Ferrari': 0xdc2626,
  'Rojo': 0xdc2626,
  'Rojo Translúcido': 0xef4444,
  'Rojo Flúor': 0xf43f5e,
  'Azul Eléctrico': 0x2563eb,
  'Azul Translúcido': 0x38bdf8,
  'Azul': 0x2563eb,
  'Azul Neón': 0x00f0ff,
  'Amarillo Oro': 0xeab308,
  'Amarillo Cálido': 0xfacc15,
  'Verde Militar': 0x4d7c0f,
  'Gris Plata': 0x94a3b8,
  'Gris Humo': 0x475569,
  'Naranja': 0xf97316,
  'Negro Mate': 0x18181b,
  'Translúcido Natural': 0xe2e8f0,
  'Roble': 0xb45309,
  'Cedro': 0x9a3412
};

// Parser binario de archivos STL para renderizado directo en cliente
function parseSTL(buffer) {
  const reader = new DataView(buffer);
  const isBinary = buffer.byteLength > 84 && !String.fromCharCode.apply(null, new Uint8Array(buffer, 0, 5)).startsWith('solid');

  if (isBinary) {
    const faces = reader.getUint32(80, true);
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(faces * 9);
    const normals = new Float32Array(faces * 9);

    let offset = 84;
    for (let i = 0; i < faces; i++) {
      const nx = reader.getFloat32(offset, true);
      const ny = reader.getFloat32(offset + 4, true);
      const nz = reader.getFloat32(offset + 8, true);
      offset += 12;

      for (let j = 0; j < 3; j++) {
        const vOffset = (i * 3 + j) * 3;
        vertices[vOffset] = reader.getFloat32(offset, true);
        vertices[vOffset + 1] = reader.getFloat32(offset + 4, true);
        vertices[vOffset + 2] = reader.getFloat32(offset + 8, true);

        normals[vOffset] = nx;
        normals[vOffset + 1] = ny;
        normals[vOffset + 2] = nz;
        offset += 12;
      }
      offset += 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geometry.center();
    return geometry;
  }
  return null;
}

export const OrcaSlicerCanvas = ({
  geometryType = 'vase',
  selectedColor = 'Blanco',
  material = 'PLA',
  dimensions = { x: 12, y: 12, z: 22, unit: 'cm' },
  customFile = null,
  height = '440px',
  interactive = true
}) => {
  const mountRef = useRef(null);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [layerHeightPercent, setLayerHeightPercent] = useState(100);

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const clippingPlaneRef = useRef(null);

  const fitsBuildPlate = dimensions.x <= 36 && dimensions.y <= 36 && dimensions.z <= 36;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const canvasHeight = container.clientHeight;

    // 1. Escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x080e1a);

    // 2. Cámara
    const camera = new THREE.PerspectiveCamera(45, width / canvasHeight, 0.1, 1000);
    camera.position.set(28, 22, 28);
    camera.lookAt(0, 6, 0);

    // 3. Renderizador con localClippingEnabled para capas
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    rendererRef.current = renderer;
    renderer.setSize(width, canvasHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.localClippingEnabled = true;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Luces de estudio técnico
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.3);
    dirLight1.position.set(25, 45, 25);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    scene.add(dirLight1);

    const rimLight = new THREE.DirectionalLight(0x06b6d4, 0.5);
    rimLight.position.set(-25, 20, -25);
    scene.add(rimLight);

    // 5. Cama de Impresión de 36 × 36 cm (360 mm) estilo OrcaSlicer
    const plateSize = 36;
    const plateGeometry = new THREE.BoxGeometry(plateSize, 0.6, plateSize);

    const textureLoader = new THREE.TextureLoader();
    const plateTexture = textureLoader.load('/Fondo_Laminador.png');

    const plateMaterial = new THREE.MeshStandardMaterial({
      map: plateTexture,
      color: 0x1e293b,
      metalness: 0.2,
      roughness: 0.8
    });
    const plateMesh = new THREE.Mesh(plateGeometry, plateMaterial);
    plateMesh.position.y = -0.3;
    plateMesh.receiveShadow = true;
    scene.add(plateMesh);

    const gridHelper = new THREE.GridHelper(plateSize, 36, 0x06b6d4, 0x334155);
    gridHelper.position.y = 0.02;
    scene.add(gridHelper);

    const bboxGeo = new THREE.BoxGeometry(plateSize, plateSize, plateSize);
    const bboxEdges = new THREE.EdgesGeometry(bboxGeo);
    const bboxLines = new THREE.LineSegments(
      bboxEdges,
      new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.15 })
    );
    bboxLines.position.y = plateSize / 2;
    scene.add(bboxLines);

    const axesHelper = new THREE.AxesHelper(6);
    axesHelper.position.set(-plateSize / 2 + 1, 0.1, plateSize / 2 - 1);
    scene.add(axesHelper);

    // 6. Plano de corte para laminado interactivo de capas
    const clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 30);
    clippingPlaneRef.current = clippingPlane;

    const setupMesh = (geometry, targetHeight) => {
      const initialColor = COLOR_MAP[selectedColor] || 0x06b6d4;
      const mat = new THREE.MeshStandardMaterial({
        color: initialColor,
        roughness: material === 'TPU' ? 0.9 : 0.35,
        metalness: material === 'PETG' ? 0.2 : 0.05,
        wireframe: wireframeMode,
        side: THREE.DoubleSide,
        clippingPlanes: [clippingPlane],
        clipShadows: true
      });
      materialRef.current = mat;

      const mesh = new THREE.Mesh(geometry, mat);
      mesh.position.y = targetHeight / 2 + 0.05;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      meshRef.current = mesh;
      scene.add(mesh);
    };

    const scaleFactor = Math.min(1.2, 14 / Math.max(dimensions.x || 10, dimensions.y || 10, dimensions.z || 10));
    const h = (dimensions.z || 12) * scaleFactor;
    const r = ((dimensions.x || 10) / 2) * scaleFactor;

    if (customFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        try {
          const parsedGeo = parseSTL(e.target.result);
          if (parsedGeo) {
            parsedGeo.computeBoundingBox();
            const bbox = parsedGeo.boundingBox;
            const sizeZ = bbox.max.z - bbox.min.z;
            setupMesh(parsedGeo, sizeZ || h);
          } else {
            const fallbackGeo = new THREE.CylinderGeometry(r * 0.7, r * 1.1, h, 32);
            setupMesh(fallbackGeo, h);
          }
        } catch (err) {
          const fallbackGeo = new THREE.CylinderGeometry(r * 0.7, r * 1.1, h, 32);
          setupMesh(fallbackGeo, h);
        }
      };
      fileReader.readAsArrayBuffer(customFile);
    } else {
      let geom;
      switch (geometryType) {
        case 'vase':
          geom = new THREE.CylinderGeometry(r * 0.7, r * 1.1, h, 32, 24, true);
          break;
        case 'trophy':
          geom = new THREE.ConeGeometry(r * 1.2, h, 28, 16, true);
          break;
        case 'tree':
          geom = new THREE.ConeGeometry(r * 1.3, h, 8, 12);
          break;
        case 'robot':
          geom = new THREE.DodecahedronGeometry(r, 1);
          break;
        case 'bust':
          geom = new THREE.IcosahedronGeometry(r, 2);
          break;
        case 'gear':
          geom = new THREE.CylinderGeometry(r, r, h * 0.4, 16);
          break;
        default:
          geom = new THREE.BoxGeometry(r * 1.6, h, r * 1.6);
          break;
      }
      setupMesh(geom, h);
    }

    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let spherical = { radius: 36, theta: Math.PI / 4, phi: Math.PI / 3.2 };

    const updateCameraPos = () => {
      spherical.phi = Math.max(0.1, Math.min(Math.PI / 2.05, spherical.phi));
      camera.position.x = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
      camera.position.y = spherical.radius * Math.cos(spherical.phi);
      camera.position.z = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
      camera.lookAt(0, 5, 0);
    };
    updateCameraPos();

    const onMouseDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      spherical.theta -= deltaX * 0.01;
      spherical.phi -= deltaY * 0.01;
      updateCameraPos();

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      spherical.radius = Math.max(14, Math.min(65, spherical.radius + e.deltaY * 0.04));
      updateCameraPos();
    };

    if (interactive) {
      container.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      container.addEventListener('wheel', onWheel, { passive: false });
    }

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (autoRotate && meshRef.current && !isDragging) {
        meshRef.current.rotation.y += 0.008;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        container.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('wheel', onWheel);
      }
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [geometryType, dimensions.x, dimensions.y, dimensions.z, material, customFile]);

  useEffect(() => {
    if (clippingPlaneRef.current) {
      const maxZ = dimensions.z || 15;
      const currentCutZ = (layerHeightPercent / 100) * (maxZ * 1.2);
      clippingPlaneRef.current.constant = currentCutZ + 0.1;
    }
  }, [layerHeightPercent, dimensions.z]);

  useEffect(() => {
    if (materialRef.current) {
      const colorHex = COLOR_MAP[selectedColor] || 0x06b6d4;
      materialRef.current.color.setHex(colorHex);
      materialRef.current.wireframe = wireframeMode;
      materialRef.current.needsUpdate = true;
    }
  }, [selectedColor, wireframeMode]);

  const currentLayerNumber = Math.max(1, Math.round((layerHeightPercent / 100) * ((dimensions.z || 15) * 50)));
  const totalLayers = Math.round((dimensions.z || 15) * 50);

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex flex-col slicer-grid-bg group select-none"
      style={{ height }}
    >
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center space-x-2 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 shadow-lg pointer-events-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs font-mono font-bold tracking-wider text-cyan-300">ORCA-VIEW 36×36 cm</span>
          <span className="text-xs text-slate-400">|</span>
          <span className="text-xs font-semibold text-slate-300">{material} · {selectedColor}</span>
        </div>

        <div className="pointer-events-auto">
          {fitsBuildPlate ? (
            <div className="flex items-center space-x-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-700/50 px-2.5 py-1 rounded-md text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Cama 360 mm OK</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1.5 bg-rose-950/80 text-rose-400 border border-rose-700/50 px-2.5 py-1 rounded-md text-xs font-medium">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Excede 36×36×36 cm</span>
            </div>
          )}
        </div>
      </div>

      {/* Slider Lateral Vertical Estilo OrcaSlicer / Bambu Studio */}
      <div className="absolute right-3 top-16 bottom-16 z-20 flex flex-col items-center justify-center pointer-events-auto">
        <div className="bg-slate-900/90 backdrop-blur-md px-2 py-3 rounded-2xl border border-slate-800 flex flex-col items-center space-y-2 shadow-2xl">
          <div className="text-[9px] font-mono font-bold text-cyan-400 flex items-center space-x-1">
            <Sliders className="w-3 h-3" />
            <span className="hidden sm:inline">CAPA</span>
          </div>

          <div className="h-40 sm:h-48 flex items-center">
            <input
              type="range"
              orient="vertical"
              min="2"
              max="100"
              value={layerHeightPercent}
              onChange={(e) => setLayerHeightPercent(Number(e.target.value))}
              className="h-full w-2 accent-cyan-400 cursor-ns-resize"
              style={{ appearance: 'slider-vertical', WebkitAppearance: 'slider-vertical' }}
              title="Simulador de laminado por capas"
            />
          </div>

          <span className="text-[9px] font-mono text-slate-400 text-center leading-none">
            {currentLayerNumber}<br/><span className="text-[8px] text-slate-600">/{totalLayers}</span>
          </span>
        </div>
      </div>

      <div ref={mountRef} className="w-full flex-1 cursor-grab active:cursor-grabbing" />

      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300 space-x-2 pointer-events-auto">
          <span>X: <strong className="text-rose-400">{dimensions.x} cm</strong></span>
          <span>Y: <strong className="text-emerald-400">{dimensions.y} cm</strong></span>
          <span>Z: <strong className="text-cyan-400">{dimensions.z} cm</strong></span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">Z-Cut: {((layerHeightPercent / 100) * (dimensions.z || 15)).toFixed(1)} cm</span>
        </div>

        <div className="flex items-center space-x-1.5 bg-slate-900/90 backdrop-blur-md p-1 rounded-lg border border-slate-800 shadow-xl pointer-events-auto">
          <button
            type="button"
            title="Alternar Capas / Alambre"
            onClick={() => setWireframeMode(!wireframeMode)}
            className={`p-1.5 rounded-md transition-colors ${
              wireframeMode ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            type="button"
            title="Auto-rotación 360°"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 rounded-md transition-colors ${
              autoRotate ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
