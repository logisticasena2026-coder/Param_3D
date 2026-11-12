import React, { useState, useEffect } from 'react';
import { apiClient } from '../api/client';
import { Users, ExternalLink, ShieldCheck, Award, Building, Sparkles } from 'lucide-react';

export const SponsorsPage = ({ onNavigate }) => {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    setLoading(true);
    try {
      const data = await apiClient.request('/sponsors');
      setSponsors(data);
    } catch (err) {
      console.error('Error cargando patrocinadores:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Encabezado */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-wider text-brand-400 uppercase">
          Alianzas Estratégicas y Cadena de Suministro
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Nuestros Patrocinadores y Aliados Comerciales
        </h1>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          Empresas líderes del sector industrial, importadores de filamentos técnicos, insumos para router CNC y componentes ópticos que respaldan la calidad operativa de <strong>Maquinamos 3D</strong>.
        </p>
      </div>

      {/* Grid de Patrocinadores administrados desde la base de datos */}
      {loading ? (
        <div className="min-h-[300px] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : sponsors.length === 0 ? (
        <div className="text-center py-16 surface-card rounded-2xl border border-slate-800">
          <Users className="w-10 h-10 text-slate-500 mx-auto mb-2" />
          <h3 className="text-base font-bold text-white">No hay patrocinadores registrados</h3>
          <p className="text-xs text-muted">Los patrocinadores son administrados desde el módulo de gestión.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="surface-card p-6 sm:p-7 rounded-3xl border border-slate-800/80 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-2 group-hover:border-brand-500/40 transition-colors">
                    <img
                      src={sponsor.logoUrl}
                      alt={sponsor.commercialName}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=60';
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 font-bold">
                    Aliado Activo
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                    {sponsor.commercialName}
                  </h3>
                  {sponsor.contactPerson && (
                    <span className="text-[11px] text-muted block mt-0.5">
                      Contacto: {sponsor.contactPerson}
                    </span>
                  )}
                </div>

                <div className="p-3.5 rounded-xl surface-subtle border border-slate-800/70">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Descripción de Actividades:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sponsor.activityDescription}
                  </p>
                </div>
              </div>

              {sponsor.websiteUrl && (
                <div className="pt-4 mt-4 border-t border-slate-800/60">
                  <a
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    <span>Visitar Sitio Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Llamado para nuevas empresas aliadas */}
      <div className="p-8 rounded-3xl surface-card border border-slate-800 text-center space-y-3">
        <h3 className="text-xl font-bold text-white">¿Tu empresa desea unirse a nuestra red de aliados?</h3>
        <p className="text-xs text-muted max-w-xl mx-auto">
          Ofrecemos convenios institucionales para proveedores de polímeros, herramientas de mecanizado y distribuidores de insumos de manufactura.
        </p>
        <div className="pt-2">
          <a
            href="mailto:mmontalvova@gmail.com?subject=Propuesta%20de%20Patrocinio%20Maquinamos%203D"
            className="px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs inline-flex items-center space-x-2 transition-colors"
          >
            <span>Presentar Propuesta Comercial</span>
          </a>
        </div>
      </div>
    </div>
  );
};
