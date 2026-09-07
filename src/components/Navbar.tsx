import React from 'react';
import { EngineVersionId, Language, UnitSystem } from '../types';
import { ENGINES_DATA, UI_TRANSLATIONS } from '../data/raptorData';
import { Flame, Compass, Globe, Sliders, Layers, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentEngine: EngineVersionId;
  onSelectEngine: (id: EngineVersionId) => void;
  isCompareMode: boolean;
  onToggleCompareMode: (compare: boolean) => void;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  unitSystem: UnitSystem;
  onToggleUnitSystem: (unit: UnitSystem) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentEngine,
  onSelectEngine,
  isCompareMode,
  onToggleCompareMode,
  language,
  onToggleLanguage,
  unitSystem,
  onToggleUnitSystem
}) => {
  const isRtl = language === 'ar';
  const t = UI_TRANSLATIONS;

  const engines: EngineVersionId[] = ['raptor1', 'raptor2', 'raptor3'];

  return (
    <header className="sticky top-0 z-40 bg-[#0B0C0E]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 sm:py-5 gap-4">
          
          {/* Logo & Clean Minimalism Title */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold">
                {language === 'ar' ? 'نظام الدفع الصاروخي' : 'PROPULSION SYSTEM'}
              </span>
              <h1 className="text-xl sm:text-2xl font-light tracking-tighter text-[#E0E2E5] flex items-center gap-2">
                <span>RAPTOR</span>
                <span className="font-bold text-white">SERIES</span>
                <span className="hidden sm:inline-block ml-2 text-[10px] tracking-widest font-mono text-white/30 border border-white/10 px-2 py-0.5 rounded uppercase">
                  FFSC METHALOX
                </span>
              </h1>
            </div>

            {/* Mobile Quick Action Buttons */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                id="btn-unit-toggle-mobile"
                onClick={() => onToggleUnitSystem(unitSystem === 'metric' ? 'imperial' : 'metric')}
                className="px-2.5 py-1 border border-white/20 rounded-full text-[10px] font-mono tracking-widest text-white/70 hover:bg-white hover:text-black uppercase transition-colors"
              >
                {unitSystem === 'metric' ? 'SI' : 'USCS'}
              </button>
              <button
                id="btn-lang-toggle-mobile"
                onClick={() => onToggleLanguage(language === 'en' ? 'ar' : 'en')}
                className="px-3 py-1 border border-white/20 rounded-full text-[10px] tracking-widest text-white/80 hover:bg-white hover:text-black uppercase transition-colors font-mono"
              >
                {language === 'en' ? 'AR / EN' : 'EN / AR'}
              </button>
            </div>
          </div>

          {/* Engine Selector Navigation Tabs - Clean Minimalism Style */}
          <div className="flex items-center gap-6 sm:gap-8 text-xs tracking-widest uppercase font-medium overflow-x-auto max-w-full pb-1 sm:pb-0">
            {engines.map((engineId) => {
              const engine = ENGINES_DATA[engineId];
              const isActive = !isCompareMode && currentEngine === engineId;

              return (
                <button
                  key={engineId}
                  id={`btn-nav-engine-${engineId}`}
                  onClick={() => {
                    onToggleCompareMode(false);
                    onSelectEngine(engineId);
                  }}
                  className={`transition-all duration-150 whitespace-nowrap pb-1 border-b-2 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white border-white font-bold'
                      : 'text-white/40 hover:text-white border-transparent'
                  }`}
                >
                  <span>{engine.name[language]}</span>
                  {engineId === 'raptor3' && (
                    <span className={`text-[9px] font-mono px-1 py-0.2 rounded border ${
                      isActive ? 'border-white text-white' : 'border-white/20 text-white/40'
                    }`}>
                      V3
                    </span>
                  )}
                </button>
              );
            })}

            {/* Compare All Mode Tab */}
            <button
              id="btn-nav-compare-mode"
              onClick={() => onToggleCompareMode(true)}
              className={`transition-all duration-150 whitespace-nowrap pb-1 border-b-2 flex items-center gap-1.5 ${
                isCompareMode
                  ? 'text-white border-white font-bold'
                  : 'text-white/40 hover:text-white border-transparent'
              }`}
            >
              <span>{t.compareMode[language]}</span>
            </button>
          </div>

          {/* Desktop Controls: Minimal Unit & Language Pills */}
          <div className="hidden md:flex items-center gap-3">
            {/* Unit Toggle Button */}
            <button
              id="btn-unit-toggle"
              onClick={() => onToggleUnitSystem(unitSystem === 'metric' ? 'imperial' : 'metric')}
              className="px-3.5 py-1.5 border border-white/20 rounded-full text-[10px] tracking-widest hover:bg-white hover:text-black uppercase text-white/70 transition-colors font-mono"
              title="Toggle Metric SI / Imperial USCS"
            >
              {unitSystem === 'metric' ? 'METRIC (SI)' : 'IMPERIAL'}
            </button>

            {/* Language Switcher Pill matching design HTML "AR / EN" */}
            <button
              id="btn-language-selector"
              onClick={() => onToggleLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-4 py-1.5 border border-white/20 rounded-full text-[10px] tracking-widest hover:bg-white hover:text-black uppercase text-white/80 transition-colors font-mono"
            >
              {language === 'en' ? 'AR / EN' : 'EN / AR'}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
