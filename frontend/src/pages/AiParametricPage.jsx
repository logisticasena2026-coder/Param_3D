import React, { useState } from 'react';
import { apiClient } from '../api/client';
import { useCart } from '../context/CartContext';
import { OrcaSlicerCanvas } from '../components/OrcaSlicerCanvas';
import {
  Sparkles,
  Camera,
  Type,
  Cpu,
  Layers,
  ShoppingBag,
  CheckCircle2,
  AlertCircle,
  Clock,
  Weight,
  Maximize2,
  RefreshCw,
  Send
} from 'lucide-react';

export const AiParametricPage = ({ onNavigate }) => {
  const { addToCart } = useCart();
  const [activeMode, setActiveMode] = useState('prompt'); // 'prompt' | 'image'
  const [promptText, setPromptText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setAiResult(null);
    }
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let res;
      if (activeMode === 'prompt') {
        if (!promptText.trim()) {
          throw new Error('Por favor escribe el nombre o descripción del producto a generar.');
        }

        res = await apiClient.request('/ai-parametric/generate-prompt', {
          method: 'POST',
          body: JSON.stringify({ prompt: promptText })
        });
      } else {
        if (!imageFile) {
          throw new Error('Por favor sube o toma una fotografía para reconstruir el modelo 3D.');
        }

        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('prompt', promptText || 'Reconstrucción 3D');

        res = await apiClient.request('/ai-parametric/generate-image', {
          method: 'POST',
          body: formData
        });
      }

      setAiResult(res.result);
    } catch (err) {
      setError(err.message || 'Error en la generación del modelo paramétrico con IA.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!aiResult) return;

    const pseudoProduct = {
      id: aiResult.modelId,
      name: aiResult.name,
      category: 'Impresión 3D',
      subcategory: aiResult.category,
      price: aiResult.specifications.estimatedPrice,
      dimensions: aiResult.dimensions,
      imageUrl: imagePreview || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60'
    };

    addToCart(pseudoProduct, aiResult.recommendedMaterial, aiResult.suggestedColor, 1);
    onNavigate('cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Encabezado */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Motor Paramétrico Neuronal · Arquitectura Aislada</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Diseño Paramétrico 3D Asistido por IA
        </h1>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          A partir de una fotografía real o una descripción en texto, nuestro generador sintetiza la geometría tridimensional, calcula parámetros técnicos de laminación e infill, y entrega un prototipo 100% imprimible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Panel Izquierdo: Entrada de IA (Texto o Foto) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="surface-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-6 shadow-xl">
            
            {/* Selector de modo: Texto vs Imagen */}
            <div className="grid grid-cols-2 gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setActiveMode('prompt');
                  setAiResult(null);
                }}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
                  activeMode === 'prompt'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Type className="w-4 h-4" />
                <span>Generar por Nombre / Texto</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveMode('image');
                  setAiResult(null);
                }}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
                  activeMode === 'image'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Camera className="w-4 h-4" />
                <span>Generar a partir de Foto</span>
              </button>
            </div>

            <form onSubmit={handleGenerate} className="space-y-4">
              {activeMode === 'prompt' ? (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
                    Describe la Pieza o Escribe su Nombre:
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Ej: 'Jarrón espiral orgánico con cuello estrecho para flores secas' o 'Soporte de pared con engranaje para motor paso a paso Nema 17'..."
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 leading-relaxed"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[10px] text-muted">Ejemplos rápidos:</span>
                    {['Engranaje mecánico reductor', 'Trofeo balón de fútbol', 'Escultura busto polígono', 'Árbol navideño geométrico'].map((sample) => (
                      <button
                        key={sample}
                        type="button"
                        onClick={() => setPromptText(sample)}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 hover:bg-purple-950/40 text-purple-300 border border-slate-800"
                      >
                        {sample}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted block mb-1">
                    Carga o Captura una Fotografía:
                  </label>
                  <div className="relative border-2 border-dashed border-slate-700 hover:border-purple-500 rounded-2xl p-6 text-center surface-subtle transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    {imagePreview ? (
                      <div className="flex flex-col items-center space-y-2 pointer-events-none">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-32 h-32 object-cover rounded-xl border border-purple-500/50 shadow-md"
                        />
                        <span className="text-xs text-purple-300 font-bold">Foto cargada exitosamente</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-2 pointer-events-none">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                          <Camera className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-white">Haz clic para subir foto del objeto</span>
                        <span className="text-[11px] text-muted">Formatos JPG, PNG, WEBP</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Nota opcional o escala estimada..."
                      value={promptText}
                      onChange={(e) => setPromptText(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500"
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-all shadow-xl shadow-purple-600/25 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Sintetizar Prototipo 3D con IA</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Panel Derecho: Visor 3D y Especificaciones Técnicas */}
        <div className="lg:col-span-6 space-y-6">
          <OrcaSlicerCanvas
            geometryType={aiResult?.shapeType || 'vase'}
            selectedColor={aiResult?.suggestedColor || 'Blanco'}
            material={aiResult?.recommendedMaterial || 'PLA'}
            dimensions={aiResult?.dimensions || { x: 12, y: 12, z: 15, unit: 'cm' }}
            height="340px"
          />

          {aiResult ? (
            <div className="surface-card p-6 rounded-3xl border border-purple-500/40 space-y-4 shadow-2xl animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Generado por {aiResult.provider}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Subcategoría: {aiResult.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{aiResult.name}</h3>
                <p className="text-xs text-muted mt-1">
                  Material sugerido: <strong className="text-white">{aiResult.recommendedMaterial}</strong> · 
                  Relleno: <strong className="text-white">{aiResult.specifications.infill}</strong>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl surface-subtle border border-slate-800">
                  <span className="text-[10px] text-muted block">Tiempo Máquina</span>
                  <span className="font-bold font-mono text-white mt-0.5 block">
                    {aiResult.specifications.printTimeEstimate}
                  </span>
                </div>
                <div className="p-3 rounded-xl surface-subtle border border-slate-800">
                  <span className="text-[10px] text-muted block">Peso Estimado</span>
                  <span className="font-bold font-mono text-white mt-0.5 block">
                    {aiResult.specifications.estimatedWeight}
                  </span>
                </div>
                <div className="p-3 rounded-xl surface-subtle border border-slate-800">
                  <span className="text-[10px] text-muted block">Precio Fabricación</span>
                  <span className="font-bold font-mono text-brand-400 mt-0.5 block">
                    ${aiResult.specifications.estimatedPrice.toLocaleString('es-CO')}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-purple-600/20"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ordenar Prototipo Generado por IA</span>
              </button>
            </div>
          ) : (
            <div className="surface-card p-6 rounded-3xl border border-slate-800 text-xs text-muted space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Arquitectura Desacoplada e Intercambiable</span>
              </h4>
              <p className="leading-relaxed">
                El módulo de IA está diseñado siguiendo el patrón <em>Adapter/Factory</em>. Puede operar de forma autónoma con el motor procedural interno o conectarse sin fricción a modelos cloud como OpenAI Shap-E, Meshy 3D o Tripo3D mediante variables de entorno en el backend.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
