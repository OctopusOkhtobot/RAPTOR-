import React, { useState } from 'react';
import { Language } from '../types';
import { FULL_FLOW_EXPLANATION } from '../data/raptorData';
import { Flame, ChevronDown, ChevronUp, Cpu, Award, Zap, ShieldAlert, Sparkles } from 'lucide-react';

interface FullFlowExplainerProps {
  language: Language;
}

export const FullFlowExplainer: React.FC<FullFlowExplainerProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const data = FULL_FLOW_EXPLANATION;
  const isRtl = language === 'ar';

  return (
    <div className="bg-[#0B0C0E] rounded-xl border border-white/10 p-5 sm:p-6">
      {/* Header with Collapsible Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer group select-none"
      >
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold block mb-0.5">
                FULL-FLOW STAGED COMBUSTION
              </span>
              <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded border border-white/20 text-white/60">
                ARCHITECTURE
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-light text-white group-hover:text-white/80 transition-colors">
              {data.title[language]}
            </h3>
            <p className="text-xs text-white/40 mt-0.5">
              {data.subtitle[language]}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="p-1.5 rounded-full border border-white/15 group-hover:border-white text-white/50 group-hover:text-white transition-colors"
          aria-label={isOpen ? 'Collapse section' : 'Expand section'}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Collapsed Brief Teaser */}
      {!isOpen && (
        <p className="text-xs text-white/50 mt-3 line-clamp-2">
          {data.summary[language]}
        </p>
      )}

      {/* Expanded Content */}
      {isOpen && (
        <div className="mt-5 pt-4 border-t border-white/10 space-y-6">
          <div className="p-4 bg-white/[0.02] rounded-lg border border-white/10 text-xs sm:text-sm text-white/70 leading-relaxed">
            {data.summary[language]}
          </div>

          {/* Interactive Flow Diagram Representation */}
          <div className="bg-white/[0.02] rounded-lg border border-white/10 p-4 sm:p-5">
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-4 font-bold text-center">
              {language === 'en'
                ? 'Simplified Full-Flow Combustion Architecture'
                : 'مخطط تدفق دورة الاحتراق المرحلي الكامل المبسط'}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              {/* Left Side: Oxygen Stream */}
              <div className="p-4 rounded-lg border border-white/15 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-white font-bold mb-2 uppercase tracking-wider text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>100% Liquid Oxygen Stream</span>
                </div>
                <div className="space-y-1.5 text-white/60">
                  <p>1. 100% of LOX enters pump.</p>
                  <p>2. Mixes with ~5% methane in Oxygen Preburner.</p>
                  <p>3. Drives Oxygen Turbopump at lower temp.</p>
                  <p className="text-white font-medium">→ 100% of oxygen enters chamber as hot gas</p>
                </div>
              </div>

              {/* Right Side: Methane Stream */}
              <div className="p-4 rounded-lg border border-white/15 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-white font-bold mb-2 uppercase tracking-wider text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>100% Liquid Methane Stream</span>
                </div>
                <div className="space-y-1.5 text-white/60">
                  <p>1. 100% of CH4 enters pump.</p>
                  <p>2. Circulates nozzle jacket for regenerative cooling.</p>
                  <p>3. Mixes with ~10% LOX in Fuel Preburner.</p>
                  <p className="text-white font-medium">→ 100% of methane enters chamber as hot gas</p>
                </div>
              </div>
            </div>

            {/* Chamber Convergence */}
            <div className="mt-3 p-3.5 rounded-lg border border-white/20 bg-white/[0.03] text-center font-mono text-xs">
              <span className="text-white font-bold uppercase tracking-wider text-[11px]">
                Convergence at Main Chamber Injector:
              </span>
              <p className="text-white/70 mt-1">
                Gas-Gas injection yields ~99% combustion efficiency at world-record 350 bar chamber pressure with zero wasted exhaust propellant.
              </p>
            </div>
          </div>

          {/* Why It's Revolutionary (4 Cards) */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-3 font-bold">
              {language === 'en' ? 'Core Engineering Advantages' : 'المزايا الهندسية الجوهرية'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.whyRevolutionary.map((adv, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/[0.02] rounded-lg border border-white/10"
                >
                  <h5 className="text-xs font-mono font-bold text-white mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <span>{adv.title[language]}</span>
                  </h5>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {adv.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
