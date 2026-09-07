import React from 'react';
import { ComponentHotspot, EngineVersionId, Language } from '../types';
import { COMPONENT_HOTSPOTS, UI_TRANSLATIONS } from '../data/raptorData';
import { Layers, Cpu, ShieldCheck, ArrowRight, ArrowLeft, Zap, Wrench, Sparkles } from 'lucide-react';

interface ComponentInspectorProps {
  selectedHotspotId: string;
  onSelectHotspot: (id: string) => void;
  currentEngineId: EngineVersionId;
  language: Language;
}

export const ComponentInspector: React.FC<ComponentInspectorProps> = ({
  selectedHotspotId,
  onSelectHotspot,
  currentEngineId,
  language
}) => {
  const t = UI_TRANSLATIONS;
  const isRtl = language === 'ar';

  const currentHotspot =
    COMPONENT_HOTSPOTS.find(h => h.id === selectedHotspotId) || COMPONENT_HOTSPOTS[0];

  const currentIndex = COMPONENT_HOTSPOTS.findIndex(h => h.id === currentHotspot.id);
  const prevHotspot = COMPONENT_HOTSPOTS[(currentIndex - 1 + COMPONENT_HOTSPOTS.length) % COMPONENT_HOTSPOTS.length];
  const nextHotspot = COMPONENT_HOTSPOTS[(currentIndex + 1) % COMPONENT_HOTSPOTS.length];

  const getCircuitBadge = (circuit: string) => {
    switch (circuit) {
      case 'lox':
        return {
          label: t.oxCircuit[language],
          className: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
        };
      case 'methane':
        return {
          label: t.fuelCircuit[language],
          className: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
        };
      case 'combustion':
        return {
          label: t.combustionCircuit[language],
          className: 'bg-rose-500/10 text-rose-400 border-rose-500/30'
        };
      default:
        return {
          label: t.structuralCircuit[language],
          className: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
        };
    }
  };

  const badge = getCircuitBadge(currentHotspot.flowCircuit);

  return (
    <div className="bg-[#0B0C0E] rounded-xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between">
      <div>
        {/* Header with Navigation and Pin Indicator */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/30 text-white bg-white/10 font-mono font-bold text-xs">
              #{currentHotspot.pinNumber}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-white/20 bg-white/5 text-white/70">
              {badge.label}
            </span>
          </div>

          {/* Quick Prev/Next Component Switcher */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onSelectHotspot(prevHotspot.id)}
              className="p-1 rounded-full border border-white/15 hover:border-white text-white/50 hover:text-white transition-colors"
              title={prevHotspot.title[language]}
              aria-label="Previous component"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono text-white/40 px-1">
              {currentIndex + 1} / {COMPONENT_HOTSPOTS.length}
            </span>
            <button
              onClick={() => onSelectHotspot(nextHotspot.id)}
              className="p-1 rounded-full border border-white/15 hover:border-white text-white/50 hover:text-white transition-colors"
              title={nextHotspot.title[language]}
              aria-label="Next component"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Component Title & Subtitle */}
        <div className="mb-4">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1">
            {currentHotspot.category[language]}
          </div>
          <h2 className="text-xl sm:text-2xl font-light text-white tracking-tight leading-snug">
            {currentHotspot.title[language]}
          </h2>
        </div>

        {/* Function Summary Card */}
        <div className="p-4 border border-white/10 rounded-lg bg-white/5 mb-4">
          <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed">
            {currentHotspot.functionSummary[language]}
          </p>
        </div>

        {/* Physics & Operating Principles */}
        <div className="mb-4">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-1.5 mb-2 font-bold">
            <Zap className="w-3 h-3 text-white/60" />
            <span>{t.operatingCondHeading[language]}</span>
          </h3>
          <p className="text-xs text-white/60 leading-relaxed bg-white/[0.02] p-3.5 rounded-lg border border-white/10">
            {currentHotspot.technicalDetails[language]}
          </p>
        </div>

        {/* Metallurgy & Materials */}
        <div className="mb-5">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-1.5 mb-2 font-bold">
            <ShieldCheck className="w-3 h-3 text-white/60" />
            <span>{t.materialsHeading[language]}</span>
          </h3>
          <p className="text-xs text-white/60 leading-relaxed bg-white/[0.02] p-3.5 rounded-lg border border-white/10">
            {currentHotspot.materials[language]}
          </p>
        </div>

        {/* Evolution Across Versions (Raptor 1 vs 2 vs 3 for this specific component) */}
        <div className="pt-4 border-t border-white/10">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-1.5 mb-3 font-bold">
            <Sparkles className="w-3 h-3 text-white/60" />
            <span>{t.howVersionsDiffer[language]}</span>
          </h3>

          <div className="grid grid-cols-1 gap-2.5">
            {/* Raptor 1 Evolution */}
            <div
              className={`p-3.5 rounded-lg border transition-colors ${
                currentEngineId === 'raptor1'
                  ? 'bg-white/5 border-white/40'
                  : 'bg-white/[0.02] border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold font-mono text-white">
                  Raptor 1 (2019–2021)
                </span>
                {currentEngineId === 'raptor1' && (
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded border border-white/30 bg-white/10 text-white">
                    ACTIVE
                  </span>
                )}
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                {currentHotspot.evolution.raptor1[language]}
              </p>
            </div>

            {/* Raptor 2 Evolution */}
            <div
              className={`p-3.5 rounded-lg border transition-colors ${
                currentEngineId === 'raptor2'
                  ? 'bg-white/5 border-white/40'
                  : 'bg-white/[0.02] border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold font-mono text-white">
                  Raptor 2 (2022–2024)
                </span>
                {currentEngineId === 'raptor2' && (
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded border border-white/30 bg-white/10 text-white">
                    ACTIVE
                  </span>
                )}
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                {currentHotspot.evolution.raptor2[language]}
              </p>
            </div>

            {/* Raptor 3 Evolution */}
            <div
              className={`p-3.5 rounded-lg border transition-colors ${
                currentEngineId === 'raptor3'
                  ? 'bg-white/5 border-white/40'
                  : 'bg-white/[0.02] border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold font-mono text-white">
                  Raptor 3 (2024+ Monolithic)
                </span>
                {currentEngineId === 'raptor3' && (
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded border border-white/30 bg-white/10 text-white">
                    ACTIVE
                  </span>
                )}
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                {currentHotspot.evolution.raptor3[language]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Pin Grid Navigation */}
      <div className="mt-5 pt-4 border-t border-white/10">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">
          {t.componentBreakdown[language]} ({COMPONENT_HOTSPOTS.length}):
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
          {COMPONENT_HOTSPOTS.map((hotspot) => {
            const isSelected = hotspot.id === selectedHotspotId;
            return (
              <button
                key={hotspot.id}
                onClick={() => onSelectHotspot(hotspot.id)}
                className={`py-1.5 px-2 rounded text-xs font-mono font-bold transition-all border ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-sm'
                    : 'bg-white/[0.02] border-white/15 text-white/50 hover:text-white hover:border-white/40'
                }`}
                title={hotspot.title[language]}
              >
                #{hotspot.pinNumber}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
