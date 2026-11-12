import React, { useState, useEffect } from 'react';
import { apiClient } from '../api/client';
import {
  Box,
  Layers,
  Zap,
  Cpu,
  Search,
  Filter,
  ArrowRight,
  Clock,
  Weight,
  Sparkles,
  CheckCircle2,
  Tag
} from 'lucide-react';

const CATEGORIES = [
  { id: 'Todos', label: 'Todos los Productos', icon: Box },
  { id: 'Impresión 3D', label: 'Impresión 3D', icon: Box },
  { id: 'Router CNC', label: 'Router CNC', icon: Layers },
  { id: 'Avisos', label: 'Avisos y Neón', icon: Zap },
  { id: 'Metal', label: 'Metal y Placas', icon: Cpu }
];

const SUBCATEGORIES_3D = [
  'Todas',
  'Artesanales',
  'Fútbol',
  'Navidad',
  'Electrónica',
  'Juguetes',
  'Esculturas'
];

export const CatalogPage = ({ initialCategory = 'Todos', onNavigate }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedSubcategory]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let query = '';
      const params = [];
      if (selectedCategory && selectedCategory !== 'Todos') {
        params.push(`category=${encodeURIComponent(selectedCategory)}`);
      }
      if (selectedSubcategory && selectedSubcategory !== 'Todas' && selectedCategory === 'Impresión 3D') {
        params.push(`subcategory=${encodeURIComponent(selectedSubcategory)}`);
      }
      if (params.length > 0) {
        query = `?${params.join('&')}`;
      }

      const data = await apiClient.request(`/products${query}`);
      setProducts(data);
    } catch (err) {
      console.error('Error cargando catálogo:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(p => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-brand-400 uppercase">
            Catálogo Oficial de Fabricación
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Catálogo y Prototipos 3D
          </h1>
          <p className="text-xs sm:text-sm text-muted mt-1 max-w-xl">
            Piezas listas para producción en PETG, PLA, ABS y TPU (hasta 36cm), maderas talladas en CNC y corte de metales.
          </p>
        </div>

        {/* Buscador */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por nombre o material..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 surface-subtle border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
          />
        </div>
      </div>

      {/* Selector de Categorías Principales */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedSubcategory('Todas');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all shrink-0 ${
                isSelected
                  ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20'
                  : 'surface-card border border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Subcategorías exclusivas para Impresión 3D */}
      {(selectedCategory === 'Impresión 3D' || selectedCategory === 'Todos') && (
        <div className="surface-card p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-brand-400 font-semibold">
            <Filter className="w-3.5 h-3.5" />
            <span>Subcategorías de Impresión 3D:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {SUBCATEGORIES_3D.map((sub) => {
              const active = selectedSubcategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    active
                      ? 'bg-brand-500/20 text-brand-400 border border-brand-500/40 font-bold'
                      : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Grilla de Productos */}
      {loading ? (
        <div className="min-h-[300px] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-16 surface-card rounded-2xl border border-slate-800 space-y-3">
          <Box className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-white">No se encontraron productos</h3>
          <p className="text-xs text-muted max-w-sm mx-auto">
            No hay productos registrados que coincidan con la categoría o término de búsqueda seleccionado.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onNavigate('product-detail', { id: product.id })}
              className="surface-card rounded-2xl border border-slate-800/80 overflow-hidden hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Imagen del producto */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=60';
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                    <span className="bg-slate-950/85 backdrop-blur-md text-[10px] font-mono px-2 py-0.5 rounded-md border border-slate-700/60 text-slate-200">
                      {product.category}
                    </span>
                    {product.subcategory && (
                      <span className="bg-brand-500/90 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {product.subcategory}
                      </span>
                    )}
                  </div>
                  {product.isFree && (
                    <div className="absolute top-2.5 right-2.5 bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-md">
                      GRATIS (STL Libre)
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Panel de métricas técnicas de fabricación */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/70 text-[11px] font-mono text-slate-300">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-400" />
                      <span>{product.printTime || '3h 15m'}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Weight className="w-3.5 h-3.5 text-brand-400" />
                      <span>{product.filamentWeight || '65g'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pie de tarjeta con precio y acción */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-800/50">
                <div>
                  <span className="text-[10px] text-muted block uppercase">Precio</span>
                  <span className="text-lg font-extrabold text-brand-400">
                    {product.isFree ? 'Descarga Libre' : `$${Number(product.price).toLocaleString('es-CO')} COP`}
                  </span>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-brand-400 group-hover:bg-brand-500 group-hover:text-slate-950 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
