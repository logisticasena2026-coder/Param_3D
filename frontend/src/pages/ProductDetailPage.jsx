import React, { useState, useEffect } from 'react';
import { apiClient } from '../api/client';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { OrcaSlicerCanvas } from '../components/OrcaSlicerCanvas';
import {
  Box,
  Clock,
  Weight,
  Maximize2,
  Download,
  ShoppingBag,
  ShieldCheck,
  Video,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export const ProductDetailPage = ({ productId, onNavigate }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMaterial, setSelectedMaterial] = useState('PLA');
  const [selectedColor, setSelectedColor] = useState('Blanco');
  const [quantity, setQuantity] = useState(1);
  const [downloadError, setDownloadError] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('3d'); // '3d' | 'video' | 'gallery'

  const { addToCart } = useCart();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const data = await apiClient.request(`/products/${productId}`);
      setProduct(data);

      // Inicializar material y color según disponibilidad del producto
      const defaultMat = data.availableMaterials?.[0] || 'PLA';
      setSelectedMaterial(defaultMat);

      const colorsForMat = data.colorOptionsPerMaterial?.[defaultMat] || ['Blanco'];
      setSelectedColor(colorsForMat[0] || 'Blanco');
    } catch (err) {
      console.error('Error cargando producto:', err);
    } finally {
      setLoading(false);
    }
  };

  // Cuando cambia el material, actualizar los colores disponibles para ese material
  const handleMaterialChange = (material) => {
    setSelectedMaterial(material);
    const availableColors = product?.colorOptionsPerMaterial?.[material] || [];
    if (availableColors.length > 0) {
      setSelectedColor(availableColors[0]);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, selectedMaterial, selectedColor, quantity);
    onNavigate('cart');
  };

  const handleDownload = async () => {
    setDownloadError(null);
    setDownloadSuccess(false);

    try {
      await apiClient.downloadModel(product.id, `${product.name.replace(/\s+/g, '_')}.stl`);
      setDownloadSuccess(true);
    } catch (err) {
      setDownloadError(err.message || 'No se pudo descargar el modelo 3D.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 surface-card rounded-2xl border border-slate-800 text-center space-y-4">
        <h3 className="text-lg font-bold text-white">Producto no encontrado</h3>
        <button
          onClick={() => onNavigate('catalog')}
          className="px-4 py-2 bg-brand-500 text-slate-950 rounded-xl text-xs font-bold"
        >
          Volver al Catálogo
        </button>
      </div>
    );
  }

  const availableColors = product.colorOptionsPerMaterial?.[selectedMaterial] || ['Blanco', 'Negro'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Botón Volver */}
      <button
        onClick={() => onNavigate('catalog')}
        className="inline-flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al Catálogo</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Columna Izquierda: Visor 3D OrcaSlicer y Multimedia */}
        <div className="lg:col-span-7 space-y-4">
          {/* Pestañas de visualización */}
          <div className="flex items-center space-x-2 bg-slate-900/60 p-1 rounded-xl border border-slate-800/80 w-fit">
            <button
              onClick={() => setActiveTab('3d')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                activeTab === '3d' ? 'bg-brand-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Visor 3D Orca (Cama 36cm)</span>
            </button>
            {product.videoUrl && (
              <button
                onClick={() => setActiveTab('video')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                  activeTab === 'video' ? 'bg-brand-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Video de Proceso</span>
              </button>
            )}
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                activeTab === 'gallery' ? 'bg-brand-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Foto Real</span>
            </button>
          </div>

          {/* Contenedor Multimedia Activo */}
          <div className="min-h-[460px]">
            {activeTab === '3d' && (
              <OrcaSlicerCanvas
                geometryType={product.meshGeometry || 'vase'}
                selectedColor={selectedColor}
                material={selectedMaterial}
                dimensions={product.dimensions || { largo: 12, ancho: 12, alto: 22, unit: 'cm' }}
                height="480px"
              />
            )}

            {activeTab === 'video' && product.videoUrl && (
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video flex items-center justify-center">
                <video
                  src={product.videoUrl}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 h-[480px]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Nota técnica de calibración de Slicer */}
          <div className="p-3.5 rounded-xl surface-card border border-slate-800/80 text-xs text-muted flex items-start space-x-3">
            <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
            <p>
              La visualización 3D utiliza la cuadrícula estándar de <strong>36 × 36 cm</strong> de nuestras impresoras de producción. El color del modelo en el visor cambia al instante según el material y filamento que selecciones.
            </p>
          </div>
        </div>

        {/* Columna Derecha: Opciones de Compra y Especificaciones */}
        <div className="lg:col-span-5 space-y-6">
          
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-wider">
                {product.category} {product.subcategory ? `· ${product.subcategory}` : ''}
              </span>
              {product.isFree && (
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded">
                  Modelo 3D Gratuito
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {product.name}
            </h1>

            <div className="mt-3 flex items-baseline space-x-3">
              <span className="text-3xl font-extrabold text-brand-400">
                {product.isFree ? 'Descarga Gratuita' : `$${Number(product.price).toLocaleString('es-CO')} COP`}
              </span>
              {!product.isFree && (
                <span className="text-xs text-muted">IVA incluido · Fabricación a pedido</span>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {product.description}
          </p>

          {/* Panel de Propiedades Técnicas */}
          <div className="surface-card p-4 rounded-2xl border border-slate-800/80 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Especificaciones de Taller
            </h4>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-xl surface-subtle border border-slate-800">
                <span className="text-[10px] text-muted block">Tiempo Impresión</span>
                <span className="font-bold font-mono text-white flex items-center space-x-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                  <span>{product.printTime}</span>
                </span>
              </div>

              <div className="p-2.5 rounded-xl surface-subtle border border-slate-800">
                <span className="text-[10px] text-muted block">Peso Filamento</span>
                <span className="font-bold font-mono text-white flex items-center space-x-1 mt-0.5">
                  <Weight className="w-3.5 h-3.5 text-brand-400" />
                  <span>{product.filamentWeight}</span>
                </span>
              </div>

              <div className="p-2.5 rounded-xl surface-subtle border border-slate-800">
                <span className="text-[10px] text-muted block">Dimensiones (XYZ)</span>
                <span className="font-bold font-mono text-white text-[11px] block mt-0.5">
                  {product.dimensions?.largo}×{product.dimensions?.ancho}×{product.dimensions?.alto} cm
                </span>
              </div>
            </div>
          </div>

          {/* SELECTOR SIMULTÁNEO: Material + Color */}
          <div className="space-y-4 surface-card p-5 rounded-2xl border border-brand-500/20">
            {/* Paso 1: Material */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                1. Selecciona el Material Técnico:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {product.availableMaterials?.map((mat) => (
                  <button
                    key={mat}
                    type="button"
                    onClick={() => handleMaterialChange(mat)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      selectedMaterial === mat
                        ? 'border-brand-500 bg-brand-500/15 text-brand-400 shadow-md ring-1 ring-brand-500/40'
                        : 'border-slate-800 surface-subtle text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 2: Colores disponibles para ese material */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                2. Color Disponible para {selectedMaterial}:
              </label>
              <div className="flex flex-wrap gap-2">
                {availableColors.map((col) => {
                  const isColSelected = selectedColor === col;
                  return (
                    <button
                      key={col}
                      type="button"
                      onClick={() => setSelectedColor(col)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all flex items-center space-x-2 ${
                        isColSelected
                          ? 'border-brand-500 bg-brand-500/20 text-white font-bold ring-1 ring-brand-500/40'
                          : 'border-slate-800 surface-subtle text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-400" />
                      <span>{col}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cantidad y botón Comprar */}
            <div className="pt-2 flex items-center space-x-3">
              <div className="flex items-center border border-slate-800 rounded-xl overflow-hidden surface-subtle">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-slate-400 hover:text-white"
                >
                  -
                </button>
                <span className="px-3 py-2 text-xs font-bold font-mono text-white">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-slate-400 hover:text-white"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-3 px-4 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-brand-500/20"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Agregar al Carrito ({selectedMaterial} - {selectedColor})</span>
              </button>
            </div>
          </div>

          {/* DESCARGA SEGURA DE MODELO 3D (Validada por el Servidor) */}
          <div className="p-4 rounded-2xl surface-card border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <Download className="w-4 h-4 text-brand-400" />
                  <span>Descarga de Archivo 3D (.STL)</span>
                </h4>
                <p className="text-[11px] text-muted mt-0.5">
                  {product.isFree
                    ? 'Este modelo es de libre acceso. Puedes descargarlo sin costo.'
                    : 'Acceso restringido: requiere haber comprado la pieza o ser administrador.'}
                </p>
              </div>

              <button
                type="button"
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl border border-slate-700 hover:border-brand-500 surface-subtle hover:text-brand-400 font-bold text-xs flex items-center space-x-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar STL</span>
              </button>
            </div>

            {/* Mensaje de error de validación server-side */}
            {downloadError && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Validación del Servidor:</strong>
                  <span>{downloadError}</span>
                </div>
              </div>
            )}

            {/* Mensaje de éxito */}
            {downloadSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>¡Descarga iniciada exitosamente! Guardando archivo STL.</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
