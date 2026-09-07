import React, { useState } from 'react';
import { DeletedPartItem, EngineVersionId, Language } from '../types';
import { VANISHED_PARTS_DATA, UI_TRANSLATIONS } from '../data/raptorData';
import {
  Layers,
  Sparkles,
  Quote,
  CheckCircle2,
  AlertCircle,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowDownRight,
  Cpu,
  Flame,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface VanishedPartsExplorerProps {
  currentEngineId: EngineVersionId;
  onSelectEngine?: (id: EngineVersionId) => void;
  selectedPartId: string | null;
  onSelectPart: (id: string | null) => void;
  language: Language;
}

export const VanishedPartsExplorer: React.FC<VanishedPartsExplorerProps> = ({
  currentEngineId,
  onSelectEngine,
  selectedPartId,
  onSelectPart,
  language
}) => {
  const t = UI_TRANSLATIONS;
  const isRtl = language === 'ar';

  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredParts = VANISHED_PARTS_DATA.filter((part) => {
    if (activeCategoryFilter === 'all') return true;
    return part.id === activeCategoryFilter;
  });

  const getStatusVisuals = (state: 'prominent' | 'reduced' | 'eliminated') => {
    switch (state) {
      case 'prominent':
        return {
          icon: AlertCircle,
          badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          dotBg: 'bg-amber-400',
          label: t.statusProminent[language]
        };
      case 'reduced':
        return {
          icon: ArrowDownRight,
          badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
          dotBg: 'bg-sky-400',
          label: t.statusReduced[language]
        };
      case 'eliminated':
        return {
          icon: CheckCircle2,
          badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          dotBg: 'bg-emerald-400',
          label: t.statusEliminated[language]
        };
    }
  };

  return (
    <div className="bg-[#0B0C0E] rounded-xl border border-white/10 p-5 sm:p-6 space-y-6">
      {/* Header: Yishan Wong vs. Elon Musk Context */}
      <div className="border-b border-white/10 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-bold">
                {language === 'ar' ? 'تحليل القطع المحذوفة' : 'THE DELETED PARTS MATRIX'}
              </span>
              <span className="text-[10px] font-mono text-white/40">
                {language === 'ar' ? 'إجابة إيلون ماسك على ييشان وونغ' : 'Elon Musk reply to Yishan Wong'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white">
              {t.vanishedPartsTab[language]}
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-3xl leading-relaxed">
              {t.vanishedPartsSubtitle[language]}
            </p>
          </div>

          {/* Quick Engine Switcher Indicator */}
          {onSelectEngine && (
            <div className="flex items-center gap-1.5 p-1 bg-white/[0.02] rounded-full border border-white/15">
              {(['raptor1', 'raptor2', 'raptor3'] as EngineVersionId[]).map((id) => (
                <button
                  key={id}
                  onClick={() => onSelectEngine(id)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-colors ${
                    currentEngineId === id
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {id.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filter Chips for the 7 Subsystems */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1">
          <button
            onClick={() => {
              setActiveCategoryFilter('all');
              onSelectPart(null);
            }}
            className={`px-3 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase transition-colors whitespace-nowrap border ${
              activeCategoryFilter === 'all'
                ? 'border-white bg-white text-black font-semibold'
                : 'border-white/15 text-white/40 hover:text-white hover:border-white/30'
            }`}
          >
            {t.allDeletedParts[language]} (7)
          </button>
          {VANISHED_PARTS_DATA.map((part) => (
            <button
              key={part.id}
              onClick={() => {
                setActiveCategoryFilter(part.id);
                onSelectPart(part.id);
              }}
              className={`px-3 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase transition-colors whitespace-nowrap border ${
                activeCategoryFilter === part.id || selectedPartId === part.id
                  ? 'border-white bg-white/10 text-white font-medium'
                  : 'border-white/15 text-white/40 hover:text-white hover:border-white/30'
              }`}
            >
              {part.name[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid: Deep Dive for Each Vanished Subsystem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filteredParts.map((item) => {
          const isSelected = selectedPartId === item.id;
          const currentStatus = item.statusByVersion[currentEngineId];
          const visuals = getStatusVisuals(currentStatus.state);
          const StatusIcon = visuals.icon;

          return (
            <div
              key={item.id}
              id={`deleted-part-card-${item.id}`}
              onClick={() => onSelectPart(isSelected ? null : item.id)}
              className={`rounded-xl border p-5 sm:p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-white bg-white/[0.04] ring-1 ring-white/30 shadow-2xl'
                  : 'border-white/10 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02]'
              }`}
            >
              <div>
                {/* Top Row: Category + Current Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                    {item.category[language]}
                  </span>
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono tracking-wider uppercase ${visuals.badgeBg}`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    <span>
                      {currentEngineId.toUpperCase()}: {currentStatus.label[language]}
                    </span>
                  </div>
                </div>

                {/* Subsystem Name */}
                <h4 className="text-lg font-light tracking-tight text-white mb-2 leading-snug">
                  {item.name[language]}
                </h4>

                {/* Elon Musk Quote Box */}
                <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02] mb-4 flex items-start gap-2.5">
                  <Quote className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5 rotate-180" />
                  <p className="text-xs text-white/80 italic font-mono leading-relaxed">
                    {item.elonKeypoint[language]}
                  </p>
                </div>

                {/* Question 1: What did it do? */}
                <div className="mb-3.5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 flex items-center gap-1.5 mb-1 font-bold">
                    <Zap className="w-3 h-3 text-white/60" />
                    <span>{t.whatItDid[language]}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed pl-3.5 border-l border-white/10">
                    {item.whatItDid[language]}
                  </p>
                </div>

                {/* Question 2: Why on Raptor 1? */}
                <div className="mb-3.5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 flex items-center gap-1.5 mb-1 font-bold">
                    <AlertCircle className="w-3 h-3 text-amber-400/80" />
                    <span>{t.whyOnRaptor1[language]}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed pl-3.5 border-l border-white/10">
                    {item.whyOnRaptor1[language]}
                  </p>
                </div>

                {/* Question 3: How was it eliminated / cast in R2 & R3? */}
                <div className="mb-4">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 flex items-center gap-1.5 mb-1 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{t.howEliminated[language]}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed pl-3.5 border-l border-white/10">
                    {item.howEliminatedInR2R3[language]}
                  </p>
                </div>
              </div>

              {/* 3-Step Lifecycle Stepper (R1 -> R2 -> R3) */}
              <div className="pt-3.5 border-t border-white/10 mt-2">
                <div className="text-[9px] font-mono uppercase tracking-widest text-white/40 mb-2">
                  {language === 'ar' ? 'مسار التقشير والتصفية' : 'PEELING TIMELINE ACROSS GENERATIONS'}:
                </div>
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                  {(['raptor1', 'raptor2', 'raptor3'] as EngineVersionId[]).map((vId) => {
                    const st = item.statusByVersion[vId];
                    const vVis = getStatusVisuals(st.state);
                    const isCurrent = currentEngineId === vId;
                    return (
                      <div
                        key={vId}
                        className={`p-2 rounded border ${
                          isCurrent
                            ? 'border-white bg-white/5 ring-1 ring-white/20'
                            : 'border-white/10 bg-white/[0.01]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`font-bold ${
                              isCurrent ? 'text-white' : 'text-white/40'
                            }`}
                          >
                            {vId.toUpperCase()}
                          </span>
                          <span className={`w-1.5 h-1.5 rounded-full ${vVis.dotBg}`} />
                        </div>
                        <div className="text-[9px] text-white/60 line-clamp-1">
                          {st.label[language]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
