import React from 'react';
import { EngineVersionData, Language, UnitSystem } from '../types';
import { UI_TRANSLATIONS, ENGINES_DATA } from '../data/raptorData';
import { Gauge, Scale, Weight, Zap, Clock, ShieldAlert, DollarSign, CheckCircle2 } from 'lucide-react';

interface SpecsPanelProps {
  engine: EngineVersionData;
  unitSystem: UnitSystem;
  language: Language;
}

export const SpecsPanel: React.FC<SpecsPanelProps> = ({
  engine,
  unitSystem,
  language
}) => {
  const t = UI_TRANSLATIONS;
  const isRtl = language === 'ar';
  const { specs } = engine;

  // Format values according to unitSystem
  const thrustSLFormatted =
    unitSystem === 'metric'
      ? `${specs.thrustSeaLevel.tf.toLocaleString()} tf (${specs.thrustSeaLevel.kN.toLocaleString()} kN)`
      : `${specs.thrustSeaLevel.lbf.toLocaleString()} lbf`;

  const thrustVacFormatted =
    unitSystem === 'metric'
      ? `${specs.thrustVacuum.tf.toLocaleString()} tf (${specs.thrustVacuum.kN.toLocaleString()} kN)`
      : `${specs.thrustVacuum.lbf.toLocaleString()} lbf`;

  const pressureFormatted =
    unitSystem === 'metric'
      ? `${specs.chamberPressure.bar} bar`
      : `${specs.chamberPressure.psi.toLocaleString()} psi`;

  const massFormatted =
    unitSystem === 'metric'
      ? `${specs.engineMass.kg.toLocaleString()} kg`
      : `${specs.engineMass.lbs.toLocaleString()} lbs`;

  // Benchmark values are derived live from Raptor 3's own data, never hardcoded,
  // so the progress bars can never drift out of sync with the specs shown above them.
  const r3Specs = ENGINES_DATA.raptor3.specs;
  const benchmarkThrustTf = r3Specs.thrustSeaLevel.testStandPeak?.tf ?? r3Specs.thrustSeaLevel.tf;
  const benchmarkPressureBar = r3Specs.chamberPressure.testStandBar ?? r3Specs.chamberPressure.bar;
  const benchmarkTwr = r3Specs.twrPeak ?? r3Specs.thrustToWeight;

  const thrustPct = Math.min(100, Math.round((specs.thrustSeaLevel.tf / benchmarkThrustTf) * 100));
  const pressurePct = Math.min(100, Math.round((specs.chamberPressure.bar / benchmarkPressureBar) * 100));
  const twrPct = Math.min(100, Math.round((specs.thrustToWeight / benchmarkTwr) * 100));
  // For mass, lower is better: benchmark against 2100kg baseline
  const massEfficiencyPct = Math.min(100, Math.round(((2200 - specs.engineMass.kg) / (2200 - 1500)) * 100));

  // Peak-vs-operational figures only exist for Raptor 3 so far; render them when present
  // instead of silently showing only the peak/test-stand number as if it were the flight rating.
  const thrustHasSplit = !!(specs.thrustSeaLevel.testStandPeak && specs.thrustSeaLevel.operationalFlight);
  const pressureHasSplit = specs.chamberPressure.operationalBar !== undefined;
  const twrHasSplit = specs.twrOperational !== undefined;

  return (
    <div className="bg-[#0B0C0E] rounded-xl border border-white/10 p-5 sm:p-6">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold block mb-0.5">
            {t.specifications[language]}
          </span>
          <h3 className="text-lg sm:text-xl font-light tracking-tight text-white flex items-center gap-2">
            <span>{engine.name[language]}</span>
            <span className="text-xs text-white/40 font-mono">
              ({engine.generation[language]} • {engine.codeName})
            </span>
          </h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/70">
          {unitSystem === 'metric' ? 'METRIC (SI)' : 'IMPERIAL (USCS)'}
        </span>
      </div>

      {/* Key Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        
        {/* Thrust Sea Level */}
        <div className="p-4 bg-white/[0.02] rounded-lg border border-white/10">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1.5">
            {t.thrustSeaLevel[language]}
          </div>
          <div className="text-lg sm:text-2xl font-light font-mono text-white">
            {thrustSLFormatted}
          </div>
          {/* Visual Progress Bar */}
          <div className="mt-3 w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${thrustPct}%` }}
            />
          </div>
          <div className="text-[9px] text-white/40 mt-1.5 font-mono uppercase tracking-wider">
            {thrustPct}% of V3 test-stand benchmark
          </div>
          {thrustHasSplit && (
            <div className="text-[9px] text-amber-400/80 mt-1 font-mono">
              {language === 'en'
                ? `Shown = ${specs.thrustSeaLevel.testStandPeak!.label.en}. Flight rating: ${specs.thrustSeaLevel.operationalFlight!.tf} tf.`
                : `القيمة المعروضة = ${specs.thrustSeaLevel.testStandPeak!.label.ar}. التصنيف التشغيلي: ${specs.thrustSeaLevel.operationalFlight!.tf} طن.`}
            </div>
          )}
        </div>

        {/* Chamber Pressure */}
        <div className="p-4 bg-white/[0.02] rounded-lg border border-white/10">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1.5">
            {t.chamberPressure[language]}
          </div>
          <div className="text-lg sm:text-2xl font-light font-mono text-white">
            {pressureFormatted}
          </div>
          {/* Visual Progress Bar */}
          <div className="mt-3 w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${pressurePct}%` }}
            />
          </div>
          <div className="text-[9px] text-white/40 mt-1.5 font-mono uppercase tracking-wider">
            {pressurePct}% of {benchmarkPressureBar} bar test-stand record
          </div>
          {pressureHasSplit && (
            <div className="text-[9px] text-amber-400/80 mt-1 font-mono">
              {language === 'en'
                ? `Test-stand peak shown. Operational flight target: ~${specs.chamberPressure.operationalBar} bar.`
                : `القيمة المعروضة ذروة اختبار. الهدف التشغيلي للرحلات: ~${specs.chamberPressure.operationalBar} بار.`}
            </div>
          )}
        </div>

        {/* Thrust-to-Weight (TWR) */}
        <div className="p-4 bg-white/[0.02] rounded-lg border border-white/10">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1.5">
            {t.twr[language]}
          </div>
          <div className="text-lg sm:text-2xl font-light font-mono text-white">
            {specs.thrustToWeight}:1
          </div>
          {/* Visual Progress Bar */}
          <div className="mt-3 w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${twrPct}%` }}
            />
          </div>
          <div className="text-[9px] text-white/40 mt-1.5 font-mono uppercase tracking-wider">
            {twrPct}% of {benchmarkTwr}:1 peak world record
          </div>
          {twrHasSplit && (
            <div className="text-[9px] text-amber-400/80 mt-1 font-mono">
              {language === 'en'
                ? `Peak (test-stand) value shown. Operational flight rating: ~${specs.twrOperational}:1.`
                : `القيمة المعروضة هي الذروة (اختبار). التصنيف التشغيلي للرحلات: ~${specs.twrOperational}:1.`}
            </div>
          )}
        </div>

        {/* Engine Dry Mass */}
        <div className="p-4 bg-white/[0.02] rounded-lg border border-white/10">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1.5">
            {t.dryMass[language]}
          </div>
          <div className="text-lg sm:text-2xl font-light font-mono text-white">
            {massFormatted}
          </div>
          {/* Visual Progress Bar */}
          <div className="mt-3 w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${massEfficiencyPct}%` }}
            />
          </div>
          <div className="text-[9px] text-white/40 mt-1.5 font-mono uppercase tracking-wider">
            Mass reduction index
          </div>
          {specs.engineMass.withVehicleInterfaceHardware && (
            <div className="text-[9px] text-amber-400/80 mt-1 font-mono leading-snug">
              {language === 'en'
                ? `${specs.engineMass.withVehicleInterfaceHardware.kg.toLocaleString()} kg incl. vehicle-side commodities & mount hardware (not gimbal actuators alone).`
                : `${specs.engineMass.withVehicleInterfaceHardware.kg.toLocaleString()} كغ شاملة عتاد جانب المركبة والتثبيت (وليست مشغلات الجيمبال وحدها).`}
            </div>
          )}
        </div>

      </div>

      {/* Secondary Specs Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 text-xs sm:text-sm">
        <div className="bg-white/[0.02] rounded-lg border border-white/10 p-4 divide-y divide-white/10">
          <div className="flex justify-between py-2.5">
            <span className="text-white/40 font-mono uppercase text-[11px]">{t.thrustVac[language]}</span>
            <span className="font-mono text-white font-medium">{thrustVacFormatted}</span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-white/40 font-mono uppercase text-[11px]">{t.ispSeaLevel[language]}</span>
            <span className="font-mono text-white font-medium">{specs.specificImpulseSL} s</span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-white/40 font-mono uppercase text-[11px]">{t.ispVac[language]}</span>
            <span className="font-mono text-white font-medium">{specs.specificImpulseVac} s</span>
          </div>
          {specs.ispVacRVacTarget !== undefined && (
            <div className="flex justify-between py-2.5">
              <span className="text-white/40 font-mono uppercase text-[11px]">
                {language === 'en' ? 'Isp (Vac, R-Vac Target)' : 'النبض النوعي (فراغ، هدف R-Vac)'}
              </span>
              <span className="font-mono text-amber-400/90 font-medium text-right">
                {specs.ispVacRVacTarget} s
                {specs.ispVacRVacTargetLabel && (
                  <span className="block text-[9px] text-white/40 font-normal mt-0.5">
                    {specs.ispVacRVacTargetLabel[language]}
                  </span>
                )}
              </span>
            </div>
          )}
          <div className="flex justify-between py-2.5">
            <span className="text-white/40 font-mono uppercase text-[11px]">Exit Bell Diameter</span>
            <span className="font-mono text-white font-medium">
              {unitSystem === 'metric' ? `${specs.exitDiameter.meters} m` : `${specs.exitDiameter.feet} ft`}
            </span>
          </div>
        </div>

        <div className="bg-white/[0.02] rounded-lg border border-white/10 p-4 divide-y divide-white/10">
          <div className="flex justify-between py-2.5">
            <span className="text-white/40 font-mono uppercase text-[11px]">{t.cycle[language]}</span>
            <span className="font-mono text-white font-medium">{specs.cycle[language]}</span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-white/40 font-mono uppercase text-[11px]">{t.firstFlight[language]}</span>
            <span className="font-mono text-white/80">{specs.firstFlight[language]}</span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-white/40 font-mono uppercase text-[11px]">{t.status[language]}</span>
            <span className="text-white font-mono font-medium">{specs.status[language]}</span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-white/40 font-mono uppercase text-[11px]">Total Height</span>
            <span className="font-mono text-white font-medium">
              {unitSystem === 'metric' ? `${specs.height.meters} m` : `${specs.height.feet} ft`}
            </span>
          </div>
        </div>
      </div>

      {/* Architectural & Physical Highlights of this Generation */}
      <div>
        <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 mb-3 font-bold">
          {t.evolutionHighlights[language]}: {engine.name[language]}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Plumbing & Tubing */}
          <div className="p-4 bg-white/[0.02] rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-white mb-1.5 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-white/50" />
              <span>{t.plumbingTitle[language]}</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {engine.architectureHighlights.plumbing[language]}
            </p>
          </div>

          {/* Sensors & Wiring */}
          <div className="p-4 bg-white/[0.02] rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-white mb-1.5 uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5 text-white/50" />
              <span>{t.sensorsTitle[language]}</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {engine.architectureHighlights.sensorsAndWiring[language]}
            </p>
          </div>

          {/* Shielding & Cooling */}
          <div className="p-4 bg-white/[0.02] rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-white mb-1.5 uppercase tracking-wider">
              <Weight className="w-3.5 h-3.5 text-white/50" />
              <span>{t.shieldingTitle[language]}</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {engine.architectureHighlights.coolingAndShielding[language]}
            </p>
          </div>

          {/* Manufacturing Cost & Cycle */}
          <div className="p-4 bg-white/[0.02] rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-white mb-1.5 uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-white/50" />
              <span>{t.costTitle[language]}</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {engine.architectureHighlights.productionCost[language]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
