import React, { useState } from 'react';
import { apiClient } from '../api/client';
import { useCart } from '../context/CartContext';
import { OrcaSlicerCanvas } from '../components/OrcaSlicerCanvas';
import {
  UploadCloud,
  FileCode,
  Layers,
  Clock,
  Weight,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  ShoppingBag,
  Sparkles,
  Info
} from 'lucide-react';

const MATERIALS = [
  { id: 'PLA', name: 'PLA Estándar', desc: 'Decorativo y prototipos visuales (120 COP/g)', colors: ['Blanco', 'Negro', 'Rojo Ferrari', 'Azul Eléctrico', 'Amarillo Oro'] },
  { id: 'PETG', name: 'PETG Técnico', desc: 'Resistente a calor, impactos y rayos UV (150 COP/g)', colors: ['Negro', 'Blanco', 'Azul Translúcido', 'Rojo Translúcido'] },
  { id: 'ABS', name: 'ABS Industrial', desc: 'Torsión mecánica y piezas funcionales (140 COP/g)', colors: ['Negro', 'Blanco', 'Rojo'] },
  { id: 'TPU', name: 'TPU Flexible', desc: 'Goma elástica anti-impacto (190 COP/g)', colors: ['Negro Mate', 'Rojo Flúor', 'Azul Neón'] }
];

export const SlicerQuotePage = ({ onNavigate }) => {
  const { addToCart } = useCart();

  const [file, setFile] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('PLA');
  const [selectedColor, setSelectedColor] = useState('Blanco');
  const [infill, setInfill] = useState(20);
  const [dimensions, setDimensions] = useState({ x: 10, y: 10, z: 12 });
  
  const [loading, setLoading] = useState(false);
  const [quoteResult, setQuoteResult] = useState(null);
  const [error, setError] = useState(null);

  const currentMatObj = MATERIALS.find(m => m.id === selectedMaterial) || MATERIALS[0];

  const handleMaterialChange = (matId) => {
    setSelectedMaterial(matId);
    const m = MATERIALS.find(item => item.id === matId);
    if (m && m.colors.length > 0) {
      setSelectedColor(m.colors[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setQuoteResult(null);
      setError(null);
    }
  };

  const handleCalculateQuote = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      if (file) {
        formData.append('customerFile', file);
      }
      formData.append('material', selectedMaterial);
      formData.append('color', selectedColor);
      formData.append('infillPercent', infill);
      formData.append('dimensionX', dimensions.x);
      formData.append('dimensionY', dimensions.y);
      formData.append('dimensionZ', dimensions.z);

      const res = await apiClient.request('/quotes/estimate', {
        method: 'POST',
        body: formData
      });

      setQuoteResult(res.quote);
    } catch (err) {
      setError(err.message || 'Error al cotizar el modelo 3D.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddQuoteToCart = () => {
    if (!quoteResult) return;

    const pseudoProduct = {
      id: quoteResult.id,
      name: `Prototipo a Medida: ${file ? file.name : 'Modelo 3D Personalizado'}`,
      category: 'Impresión 3D',
      price: quoteResult.estimation.breakdown.totalPrice,
      dimensions: quoteResult.dimensions,
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60'
    };

    addToCart(pseudoProduct, selectedMaterial, selectedColor, 1);
    onNavigate('cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Encabezado */}
      <div>
        <span className="text-xs font-mono font-bold tracking-wider text-brand-400 uppercase">
          Laminador Online y Cotizador FDM
        </span>
        <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">
          Cotiza tu Propio Archivo 3D al Instante
        </h1>
        <p className="text-xs sm:text-sm text-muted mt-1 max-w-2xl leading-relaxed">
          Sube tu modelo tridimensional (.STL, .OBJ, .STEP o .3MF), elige material y color. Nuestro motor calcula el peso de filamento, tiempo de impresión en máquina y costo exacto con volumen máximo de <strong>36 × 36 × 36 cm</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Formulario y Carga de Archivo */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleCalculateQuote} className="surface-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-6 shadow-xl">
            
            {/* Zona Drag & Drop de Archivos */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                1. Sube tu Archivo 3D (.STL, .OBJ, .STEP, .3MF)
              </label>
              <div className="relative border-2 border-dashed border-slate-700 hover:border-brand-500 rounded-2xl p-6 text-center surface-subtle transition-colors group cursor-pointer">
                <input
                  type="file"
                  accept=".stl,.obj,.step,.stp,.3mf"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className="flex flex-col items-center space-y-2 pointer-events-none">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      {file ? file.name : 'Haz clic para seleccionar o arrastra tu archivo 3D aquí'}
                    </span>
                    <span className="text-[11px] text-muted font-mono block mt-0.5">
                      {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : 'Formatos: STL, OBJ, STEP, 3MF (Máx. 50MB)'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Selector de Materiales Técnicos */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                2. Selecciona el Filamento de Impresión:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MATERIALS.map((mat) => {
                  const isSelected = selectedMaterial === mat.id;
                  return (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => handleMaterialChange(mat.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-brand-500 bg-brand-500/15 text-white ring-1 ring-brand-500/30'
                          : 'border-slate-800 surface-subtle text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs">{mat.name}</span>
                        {isSelected && <span className="text-brand-400 text-xs font-bold">✓</span>}
                      </div>
                      <p className="text-[11px] text-muted mt-1 leading-tight">{mat.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector de Color disponible */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                3. Color Disponible para {selectedMaterial}:
              </label>
              <div className="flex flex-wrap gap-2">
                {currentMatObj.colors.map((colorName) => {
                  const isCol = selectedColor === colorName;
                  return (
                    <button
                      key={colorName}
                      type="button"
                      onClick={() => setSelectedColor(colorName)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                        isCol
                          ? 'border-brand-500 bg-brand-500/20 text-white font-bold ring-1 ring-brand-500/30'
                          : 'border-slate-800 surface-subtle text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {colorName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Relleno (Infill) y Dimensiones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">
                    Porcentaje de Relleno (Infill)
                  </label>
                  <span className="text-xs font-mono font-bold text-brand-400">{infill}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={infill}
                  onChange={(e) => setInfill(Number(e.target.value))}
                  className="w-full accent-brand-500 cursor-pointer"
                />
                <span className="text-[10px] text-muted block mt-1">
                  Recomendado: 20% para decorativo, 40-60% para mecánico.
                </span>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted block mb-1">
                  Dimensiones Bounding Box (cm)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="number"
                    min="1"
                    max="36"
                    value={dimensions.x}
                    onChange={(e) => setDimensions({ ...dimensions, x: Number(e.target.value) })}
                    placeholder="X"
                    title="Ancho X (máx 36cm)"
                    className="px-2 py-1.5 rounded-lg surface-subtle border border-slate-800 text-xs text-white text-center font-mono"
                  />
                  <input
                    type="number"
                    min="1"
                    max="36"
                    value={dimensions.y}
                    onChange={(e) => setDimensions({ ...dimensions, y: Number(e.target.value) })}
                    placeholder="Y"
                    title="Profundidad Y (máx 36cm)"
                    className="px-2 py-1.5 rounded-lg surface-subtle border border-slate-800 text-xs text-white text-center font-mono"
                  />
                  <input
                    type="number"
                    min="1"
                    max="36"
                    value={dimensions.z}
                    onChange={(e) => setDimensions({ ...dimensions, z: Number(e.target.value) })}
                    placeholder="Z"
                    title="Altura Z (máx 36cm)"
                    className="px-2 py-1.5 rounded-lg surface-subtle border border-slate-800 text-xs text-white text-center font-mono"
                  />
                </div>
                <span className="text-[10px] text-muted block mt-1 font-mono">
                  Límite FDM: 36 × 36 × 36 cm
                </span>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Calcular Estimación y Precio Slicer</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Panel de Resultados y Visor 3D */}
        <div className="lg:col-span-5 space-y-6">
          <OrcaSlicerCanvas
            geometryType="vase"
            selectedColor={selectedColor}
            material={selectedMaterial}
            dimensions={{ x: dimensions.x, y: dimensions.y, z: dimensions.z, unit: 'cm' }}
            customFile={file}
            height="340px"
          />

          {quoteResult ? (
            <div className="surface-card p-6 rounded-3xl border border-brand-500/40 space-y-4 shadow-2xl animate-fadeIn">
              <div className="flex items-center space-x-2 text-brand-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Estimación Calculada por el Servidor</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl surface-subtle border border-slate-800">
                  <span className="text-[10px] text-muted block">Filamento Requerido</span>
                  <span className="text-base font-bold font-mono text-white flex items-center space-x-1 mt-0.5">
                    <Weight className="w-4 h-4 text-brand-400" />
                    <span>{quoteResult.estimation.filamentGrams} g</span>
                  </span>
                </div>

                <div className="p-3 rounded-xl surface-subtle border border-slate-800">
                  <span className="text-[10px] text-muted block">Tiempo de Máquina</span>
                  <span className="text-base font-bold font-mono text-white flex items-center space-x-1 mt-0.5">
                    <Clock className="w-4 h-4 text-brand-400" />
                    <span>{quoteResult.estimation.printTimeFormatted}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl surface-subtle border border-slate-800 space-y-1 text-xs">
                <div className="flex justify-between text-muted">
                  <span>Costo materia prima ({quoteResult.material}):</span>
                  <span className="font-mono text-white">${quoteResult.estimation.breakdown.materialCost.toLocaleString('es-CO')} COP</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Operación de máquina y energía:</span>
                  <span className="font-mono text-white">${quoteResult.estimation.breakdown.machineCost.toLocaleString('es-CO')} COP</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Preparación y laminado Slicer:</span>
                  <span className="font-mono text-white">${quoteResult.estimation.breakdown.preparationCost.toLocaleString('es-CO')} COP</span>
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-white uppercase">Cotización Total:</span>
                <span className="text-2xl font-extrabold text-brand-400 font-mono">
                  ${quoteResult.estimation.breakdown.totalPrice.toLocaleString('es-CO')} COP
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const reportText = `====================================================
MAQUINAMOS 3D - FICHA TÉCNICA DE PRODUCCIÓN SLICER
Tel. 3005076700 | mmontalvova@gmail.com
====================================================
Cotización ID: ${quoteResult.id}
Archivo: ${file ? file.name : quoteResult.originalName}
Material Técnico: ${quoteResult.material} (${selectedColor})
Dimensiones: ${quoteResult.dimensions.x} x ${quoteResult.dimensions.y} x ${quoteResult.dimensions.z} cm
Cama de Fabricación: Compatible 36x36x36 cm (360x360 mm)

PARÁMETROS TÉCNICOS DE LAMINADO:
- Altura de Capa: 0.20 mm
- Porcentaje de Relleno: ${quoteResult.infillPercent}%
- Patrón de Relleno: Giroide / Cúbico adaptativo
- Peso de Filamento: ${quoteResult.estimation.filamentGrams} g
- Tiempo Estimado de Máquina: ${quoteResult.estimation.printTimeFormatted}

TEMPERATURAS RECOMENDADAS:
${quoteResult.material === 'PETG' ? '- Boquilla: 240°C | Cama Caliente: 75°C' :
  quoteResult.material === 'PLA' ? '- Boquilla: 210°C | Cama Caliente: 60°C' :
  quoteResult.material === 'ABS' ? '- Boquilla: 250°C | Cama Caliente: 100°C (Cámara Cerrada)' :
  '- Boquilla: 225°C | Cama Caliente: 50°C (Extrusión Directa)'}

DESGLOSE ECONÓMICO:
- Costo Materia Prima: $${quoteResult.estimation.breakdown.materialCost} COP
- Costo Operación Máquina: $${quoteResult.estimation.breakdown.machineCost} COP
- Preparación y Calibración: $${quoteResult.estimation.breakdown.preparationCost} COP
TOTAL COTIZADO: $${quoteResult.estimation.breakdown.totalPrice} COP
====================================================`;

                    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `Ficha_Tecnica_${quoteResult.id}.txt`;
                    link.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="py-2.5 px-3 rounded-xl surface-subtle border border-slate-700 hover:border-brand-500 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center justify-center space-x-1.5"
                >
                  <FileCode className="w-3.5 h-3.5 text-brand-400" />
                  <span>Ficha Técnica</span>
                </button>

                <button
                  type="button"
                  onClick={handleAddQuoteToCart}
                  className="py-2.5 px-3 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-lg shadow-brand-500/20"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Ordenar</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-5 surface-card rounded-2xl border border-slate-800 text-xs text-muted space-y-2">
              <div className="flex items-center space-x-2 text-white font-bold">
                <Info className="w-4 h-4 text-brand-400" />
                <span>Parámetros de Fabricación Garantizados</span>
              </div>
              <p>
                Al presionar "Calcular Estimación", la plataforma analiza la densidad volumétrica y genera la orden de trabajo para que nuestro taller inicie la impresión de inmediato al ordenar.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
