import React from 'react';
import { EngineVersionId, Language, UnitSystem } from '../types';
import { ENGINES_DATA, UI_TRANSLATIONS } from '../data/raptorData';
import { TrendingUp, ArrowRight, Check, Zap, Gauge, Weight, Cpu, Sparkles, Rocket } from 'lucide-react';

interface ComparisonMatrixProps {
  onSelectEngine: (id: EngineVersionId) => void;
  unitSystem: UnitSystem;
  language: Language;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  onSelectEngine,
  unitSystem,
  language
}) => {
  const t = UI_TRANSLATIONS;
  const isRtl = language === 'ar';

  const r1 = ENGINES_DATA.raptor1;
  const r2 = ENGINES_DATA.raptor2;
  const r3 = ENGINES_DATA.raptor3;

  // All delta-banner figures are derived live from the data layer so they can never
  // silently drift out of sync with the specs shown elsewhere on the page.
  const r1Thrust = r1.specs.thrustSeaLevel.tf;
  const r3ThrustPeak = r3.specs.thrustSeaLevel.testStandPeak?.tf ?? r3.specs.thrustSeaLevel.tf;
  const thrustGainPct = Math.round(((r3ThrustPeak - r1Thrust) / r1Thrust) * 100);

  const r1Pressure = r1.specs.chamberPressure.bar;
  const r3PressurePeak = r3.specs.chamberPressure.testStandBar ?? r3.specs.chamberPressure.bar;
  const pressureGainPct = Math.round(((r3PressurePeak - r1Pressure) / r1Pressure) * 100);

  const r1Mass = r1.specs.engineMass.kg;
  const r3Mass = r3.specs.engineMass.kg;
  const massLossPct = Math.round(((r1Mass - r3Mass) / r1Mass) * 100);

  const r1Twr = r1.specs.thrustToWeight;
  const r3TwrPeak = r3.specs.twrPeak ?? r3.specs.thrustToWeight;
  const twrGainPct = Math.round(((r3TwrPeak - r1Twr) / r1Twr) * 100);

  return (
    <div className="space-y-6">
      {/* Title & Introduction */}
      <div className="bg-[#0B0C0E] rounded-xl border border-white/10 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold block mb-1">
              {language === 'en' ? 'HISTORICAL EVOLUTION' : 'التطور التاريخي للمحرك'}
            </span>
            <h2 className="text-xl sm:text-2xl font-light text-white tracking-tight">
              {language === 'en' ? 'Evolutionary Matrix: Raptor 1 vs 2 vs 3' : 'مصفوفة التطور المقارن: رابتور 1 مقابل 2 مقابل 3'}
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-1">
              {language === 'en'
                ? 'Side-by-side technical progression of SpaceX’s Full-Flow Staged Combustion engine generations.'
                : 'مقارنة تقنية مباشرة لمراحل تطور أجيال محركات الاحتراق المرحلي الكامل لسبيس إكس.'}
            </p>
          </div>
        </div>

        {/* Breakthrough Delta Banners */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-white/10">
          <div className="p-3.5 bg-white/[0.02] rounded-lg border border-white/10">
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">Sea-Level Thrust (Peak)</div>
            <div className="text-base sm:text-lg font-light font-mono text-white mt-0.5">
              +{thrustGainPct}% Gain
            </div>
            <div className="text-[10px] text-white/40 font-mono">{r1Thrust} tf → {r3ThrustPeak} tf</div>
          </div>

          <div className="p-3.5 bg-white/[0.02] rounded-lg border border-white/10">
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">Chamber Pressure (Peak)</div>
            <div className="text-base sm:text-lg font-light font-mono text-white mt-0.5">
              +{pressureGainPct}% Record
            </div>
            <div className="text-[10px] text-white/40 font-mono">{r1Pressure} bar → {r3PressurePeak} bar</div>
          </div>

          <div className="p-3.5 bg-white/[0.02] rounded-lg border border-white/10">
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">Engine Dry Mass</div>
            <div className="text-base sm:text-lg font-light font-mono text-white mt-0.5">
              -{massLossPct}% Lighter
            </div>
            <div className="text-[10px] text-white/40 font-mono">{r1Mass.toLocaleString()} kg → {r3Mass.toLocaleString()} kg</div>
          </div>

          <div className="p-3.5 bg-white/[0.02] rounded-lg border border-white/10">
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">Thrust-to-Weight (Peak)</div>
            <div className="text-base sm:text-lg font-light font-mono text-white mt-0.5">
              {r3TwrPeak}:1 Record
            </div>
            <div className="text-[10px] text-white/40 font-mono">{r1Twr}:1 → {r3TwrPeak}:1 (+{twrGainPct}%)</div>
            {r3.specs.twrOperational !== undefined && (
              <div className="text-[9px] text-amber-400/80 font-mono mt-1">
                Operational flight rating: ~{r3.specs.twrOperational}:1
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Side-by-Side 3-Engine Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[r1, r2, r3].map((eng) => {
          const isV3 = eng.id === 'raptor3';
          return (
            <div
              key={eng.id}
              className={`bg-[#0B0C0E] rounded-xl border p-5 flex flex-col justify-between transition-all duration-200 hover:border-white/30 ${
                isV3 ? 'border-white/40 ring-1 ring-white/20' : 'border-white/10'
              }`}
            >
              <div>
                {/* Engine Image Preview */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-white/[0.02] border border-white/10">
                  <img
                    src={eng.imagePath}
                    alt={eng.name[language]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-[#0B0C0E]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono font-bold text-white border border-white/20">
                    {eng.name[language]}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#0B0C0E]/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-white/70 border border-white/20">
                    {eng.era}
                  </div>
                </div>

                {/* Subtitle & Tagline */}
                <div className="mb-4">
                  <h3 className="text-lg font-light text-white flex items-center gap-1.5">
                    <span>{eng.name[language]}</span>
                    {isV3 && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded border border-white/30 text-white uppercase">
                        MONOLITHIC
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 line-clamp-2">
                    {eng.tagline[language]}
                  </p>
                </div>

                {/* Technical Specs Comparison List */}
                <div className="space-y-2 text-xs bg-white/[0.02] p-3.5 rounded-lg border border-white/10 mb-4 divide-y divide-white/10">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-white/40 font-mono uppercase text-[10px]">{t.thrustSeaLevel[language]}</span>
                    <span className="font-mono text-white font-medium">
                      {unitSystem === 'metric'
                        ? `${eng.specs.thrustSeaLevel.tf} tf`
                        : `${eng.specs.thrustSeaLevel.lbf.toLocaleString()} lbf`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1">
                    <span className="text-white/40 font-mono uppercase text-[10px]">{t.chamberPressure[language]}</span>
                    <span className="font-mono text-white font-medium">
                      {unitSystem === 'metric'
                        ? `${eng.specs.chamberPressure.bar} bar`
                        : `${eng.specs.chamberPressure.psi.toLocaleString()} psi`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1">
                    <span className="text-white/40 font-mono uppercase text-[10px]">{t.dryMass[language]}</span>
                    <span className="font-mono text-white font-medium">
                      {unitSystem === 'metric'
                        ? `${eng.specs.engineMass.kg.toLocaleString()} kg`
                        : `${eng.specs.engineMass.lbs.toLocaleString()} lbs`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1">
                    <span className="text-white/40 font-mono uppercase text-[10px]">{t.twr[language]}</span>
                    <span className="font-mono text-white font-medium">
                      {eng.specs.thrustToWeight}:1
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1">
                    <span className="text-white/40 font-mono uppercase text-[10px]">{t.firstFlight[language]}</span>
                    <span className="font-mono text-white/70 text-[11px] text-right">
                      {eng.specs.firstFlight[language].split('(')[0]}
                    </span>
                  </div>
                </div>

                {eng.specs.thrustSeaLevel.operationalFlight && (
                  <div className="text-[9px] text-amber-400/80 font-mono mb-4 -mt-2 px-1">
                    {language === 'en'
                      ? `Figures above are test-stand peak. Operational flight rating: ${eng.specs.thrustSeaLevel.operationalFlight.tf} tf${eng.specs.twrOperational ? ` / ${eng.specs.twrOperational}:1 TWR` : ''}${eng.specs.chamberPressure.operationalBar ? ` / ${eng.specs.chamberPressure.operationalBar} bar` : ''}.`
                      : `الأرقام أعلاه هي ذروة منصة الاختبار. التصنيف التشغيلي للرحلات: ${eng.specs.thrustSeaLevel.operationalFlight.tf} طن${eng.specs.twrOperational ? ` / ${eng.specs.twrOperational}:1` : ''}${eng.specs.chamberPressure.operationalBar ? ` / ${eng.specs.chamberPressure.operationalBar} بار` : ''}.`}
                  </div>
                )}

                {/* Plumbing & Architecture Highlights */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">
                    {t.plumbingTitle[language]}:
                  </div>
                  <p className="text-xs text-white/60 bg-white/[0.02] p-3 rounded-lg border border-white/10 leading-relaxed">
                    {eng.architectureHighlights.plumbing[language]}
                  </p>
                </div>
              </div>

              {/* View Deep Dive Button */}
              <button
                onClick={() => onSelectEngine(eng.id)}
                className="w-full py-2.5 px-4 rounded-full text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors"
              >
                <span>
                  {language === 'en' ? `Inspect ${eng.name.en}` : `فحص مخطط ${eng.name.ar}`}
                </span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Vacuum Variant (RVac) Reference Section */}
      <div className="bg-[#0B0C0E] rounded-xl border border-white/10 p-5 sm:p-6">
        <div className="mb-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold block mb-1">
            UPPER STAGE PROPULSION
          </span>
          <h3 className="text-base sm:text-lg font-light text-white">
            {language === 'en'
              ? 'Raptor Vacuum (RVac) Variant Reference'
              : 'مرجع نسخة الفراغ الفضائي (Raptor Vacuum / RVac)'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
          {language === 'en'
            ? 'Starship upper stage carries 3 Sea-Level Raptor engines and 3 Raptor Vacuum (RVac) engines. The RVac utilizes the identical powerhead and turbopumps but features a massive regenerative niobium and carbon-composite bell extension (2.8 meters diameter vs 1.3 meters), optimizing gas expansion in the vacuum of space to push specific impulse (Isp) from ~330s up to ~380s.'
            : 'تحمل المرحلة العليا لمركبة ستارشيب 3 محركات رابتور أرضية و3 محركات رابتور مخصصة للفراغ (RVac). تستخدم نسخة RVac نفس رأس الطاقة والمضخات التوربينية تماماً، لكنها تتميز بجرس فوهة عملاق مصنوع من سبائك النيوبيوم والكربون المبردة تجديدياً (بقطر 2.8 متر مقارنة بـ 1.3 متر للأرضي)، مما يزيد تمدد الغاز في الفراغ ويرفع النبض النوعي (Isp) من ~330 إلى ~380 ثانية.'}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3.5 bg-white/[0.02] rounded-lg border border-white/10">
            <span className="text-white/40 block text-[9px] uppercase tracking-wider">NOZZLE EXIT DIAMETER</span>
            <span className="text-white font-medium text-xs sm:text-sm mt-0.5 block">2.8 m (9.2 ft)</span>
          </div>
          <div className="p-3.5 bg-white/[0.02] rounded-lg border border-white/10">
            <span className="text-white/40 block text-[9px] uppercase tracking-wider">VACUUM ISP</span>
            <span className="text-white font-medium text-xs sm:text-sm mt-0.5 block">~380 seconds</span>
          </div>
          <div className="p-3.5 bg-white/[0.02] rounded-lg border border-white/10">
            <span className="text-white/40 block text-[9px] uppercase tracking-wider">EXPANSION RATIO (Ae/At)</span>
            <span className="text-white font-medium text-xs sm:text-sm mt-0.5 block">~150:1</span>
          </div>
          <div className="p-3.5 bg-white/[0.02] rounded-lg border border-white/10">
            <span className="text-white/40 block text-[9px] uppercase tracking-wider">GIMBAL CAPABILITY</span>
            <span className="text-white font-medium text-xs sm:text-sm mt-0.5 block">Fixed (Center Steered)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
