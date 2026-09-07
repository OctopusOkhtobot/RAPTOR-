/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { EngineVersionId, Language, UnitSystem } from './types';
import { ENGINES_DATA, COMPONENT_HOTSPOTS, UI_TRANSLATIONS } from './data/raptorData';
import { Navbar } from './components/Navbar';
import { EngineDiagram } from './components/EngineDiagram';
import { ComponentInspector } from './components/ComponentInspector';
import { VanishedPartsExplorer } from './components/VanishedPartsExplorer';
import { SpecsPanel } from './components/SpecsPanel';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { FullFlowExplainer } from './components/FullFlowExplainer';
import { Rocket, Sparkles, Layers, ShieldCheck, Flame, Zap } from 'lucide-react';

export default function App() {
  const [currentEngine, setCurrentEngine] = useState<EngineVersionId>('raptor1');
  const [isCompareMode, setIsCompareMode] = useState<boolean>(false);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>(COMPONENT_HOTSPOTS[0].id);
  const [selectedDeletedPartId, setSelectedDeletedPartId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric');

  const activeEngineData = ENGINES_DATA[currentEngine];
  const t = UI_TRANSLATIONS;
  const isRtl = language === 'ar';

  // Synchronize document direction and language attribute
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRtl]);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#0B0C0E] text-[#E0E2E5] flex flex-col selection:bg-white selection:text-black font-sans"
    >
      {/* Top Navigation */}
      <Navbar
        currentEngine={currentEngine}
        onSelectEngine={setCurrentEngine}
        isCompareMode={isCompareMode}
        onToggleCompareMode={setIsCompareMode}
        language={language}
        onToggleLanguage={setLanguage}
        unitSystem={unitSystem}
        onToggleUnitSystem={setUnitSystem}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {isCompareMode ? (
          /* Full Comparison Matrix View */
          <ComparisonMatrix
            onSelectEngine={(id) => {
              setCurrentEngine(id);
              setIsCompareMode(false);
            }}
            unitSystem={unitSystem}
            language={language}
          />
        ) : (
          /* "Each engine on a page" View with Diagrams, Inspector & Specs */
          <div className="space-y-6 sm:space-y-8">
            
            {/* Engine Hero Banner / Header with Clean Minimalism aesthetic */}
            <div className="bg-[#0B0C0E] rounded-xl border border-white/10 p-6 sm:p-8 relative overflow-hidden">
              {/* Minimalist dot grid overlay */}
              <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-white/20 bg-white/5 text-white/70">
                      {activeEngineData.era}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 font-bold">
                      {activeEngineData.generation[language]}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white flex items-center gap-3">
                    <span className="tracking-tight">{activeEngineData.name[language]}</span>
                    {currentEngine === 'raptor3' && (
                      <span className="text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border border-white bg-white text-black uppercase">
                        MONOLITHIC V3
                      </span>
                    )}
                  </h2>

                  <p className="text-xs sm:text-sm text-white/60 mt-2.5 max-w-3xl leading-relaxed">
                    {activeEngineData.summary[language]}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href="#vanished-parts-section"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono border border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition-colors"
                    >
                      <Zap className="w-3 h-3" />
                      <span>
                        {language === 'ar'
                          ? 'استكشف طبقة القطع المحذوفة (حوار ييشان وإيلون) ←'
                          : 'Explore "Deleted Parts" Matrix (Yishan vs. Elon) →'}
                      </span>
                    </a>
                  </div>
                </div>

                {/* Quick Switcher Between Engines */}
                <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                  {(['raptor1', 'raptor2', 'raptor3'] as EngineVersionId[]).map((id) => (
                    <button
                      key={id}
                      onClick={() => setCurrentEngine(id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                        currentEngine === id
                          ? 'border border-white bg-white text-black font-semibold'
                          : 'border border-white/20 text-white/40 hover:text-white hover:border-white/40'
                      }`}
                    >
                      {id.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Innovations Minimalist Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
                {activeEngineData.keyInnovations.map((innov, idx) => (
                  <div key={idx} className="p-3 border border-white/10 rounded-lg bg-white/[0.02] flex items-start gap-2.5 text-xs text-white/70">
                    <Sparkles className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{innov[language]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Interactive Workspace: Diagram on Left, Inspector on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Interactive Diagram (7 cols on lg) */}
              <div className="lg:col-span-7 space-y-4">
                <EngineDiagram
                  engine={activeEngineData}
                  selectedHotspotId={selectedHotspotId}
                  onSelectHotspot={setSelectedHotspotId}
                  selectedDeletedPartId={selectedDeletedPartId}
                  onSelectDeletedPart={setSelectedDeletedPartId}
                  language={language}
                />
              </div>

              {/* Right Column: Component Deep Dive Inspector (5 cols on lg) */}
              <div className="lg:col-span-5 space-y-4">
                <ComponentInspector
                  selectedHotspotId={selectedHotspotId}
                  onSelectHotspot={setSelectedHotspotId}
                  currentEngineId={currentEngine}
                  language={language}
                />
              </div>
            </div>

            {/* The Vanished Parts Layer (Yishan vs. Elon Deep Dive Cards) */}
            <div id="vanished-parts-section">
              <VanishedPartsExplorer
                currentEngineId={currentEngine}
                onSelectEngine={setCurrentEngine}
                selectedPartId={selectedDeletedPartId}
                onSelectPart={setSelectedDeletedPartId}
                language={language}
              />
            </div>

            {/* Comprehensive Specifications Panel */}
            <SpecsPanel
              engine={activeEngineData}
              unitSystem={unitSystem}
              language={language}
            />

            {/* Full-Flow Staged Combustion Explainer Accordion */}
            <FullFlowExplainer language={language} />

          </div>
        )}
      </main>

      {/* Footer with Minimalist SpaceX Aerospace Aesthetic */}
      <footer className="border-t border-white/10 bg-[#0B0C0E] mt-16 py-6 text-xs text-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Flame className="w-3.5 h-3.5 text-white/60" />
            <span className="font-semibold text-white/70 tracking-wider text-[11px] uppercase">
              {t.appName[language]}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] tracking-widest uppercase text-white/40 font-mono">STATUS: NOMINAL</span>
          </div>

          <div className="flex items-center gap-6 text-[10px] tracking-widest uppercase font-mono">
            <button
              onClick={() => {
                setIsCompareMode(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white/40 hover:text-white transition-colors"
            >
              {t.compareMode[language]}
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="text-white/40 hover:text-white transition-colors"
            >
              {language === 'en' ? 'العربية' : 'ENGLISH'}
            </button>
            <span className="text-white/20">•</span>
            <span className="text-white/30">
              {language === 'en'
                ? 'Unofficial fan project. Public sources only.'
                : 'مشروع غير رسمي من عشاق سبيس إكس. مصادر عامة فقط.'}
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 mt-3 border-t border-white/5 text-[10px] text-white/30 text-center sm:text-left">
          {language === 'en'
            ? 'Not affiliated with or endorsed by SpaceX. Not SpaceX CAD or engineering data — an educational schematic assembled from public statements and independent estimates. Figures marked "Estimated" or "Target" are not officially confirmed and may be inaccurate.'
            : 'هذا المشروع غير تابع لسبيس إكس ولا معتمد منها. ليس بيانات CAD أو هندسية رسمية من سبيس إكس — بل مخطط تعليمي مبني على تصريحات عامة وتقديرات مستقلة. الأرقام الموسومة بـ"تقديري" أو "هدف" غير مؤكدة رسمياً وقد تكون غير دقيقة.'}
        </div>
      </footer>
    </div>
  );
}
