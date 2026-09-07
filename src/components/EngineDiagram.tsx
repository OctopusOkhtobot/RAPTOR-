import React, { useState } from 'react';
import { ComponentHotspot, DeletedPartItem, EngineVersionData, Language } from '../types';
import { COMPONENT_HOTSPOTS, VANISHED_PARTS_DATA, UI_TRANSLATIONS } from '../data/raptorData';
import { Activity, Eye, Info, Sparkles, Layers, ZoomIn, AlertTriangle, ShieldCheck, Flame } from 'lucide-react';

interface EngineDiagramProps {
  engine: EngineVersionData;
  selectedHotspotId: string;
  onSelectHotspot: (id: string) => void;
  selectedDeletedPartId?: string | null;
  onSelectDeletedPart?: (id: string | null) => void;
  language: Language;
}

export const EngineDiagram: React.FC<EngineDiagramProps> = ({
  engine,
  selectedHotspotId,
  onSelectHotspot,
  selectedDeletedPartId,
  onSelectDeletedPart,
  language
}) => {
  const [viewMode, setViewMode] = useState<'blueprint' | 'render'>('blueprint');
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);
  const [hoveredVanishedId, setHoveredVanishedId] = useState<string | null>(null);
  const [activeCircuitFilter, setActiveCircuitFilter] = useState<string>('all');
  const [showFlows, setShowFlows] = useState<boolean>(true);
  const [showDeletedLayer, setShowDeletedLayer] = useState<boolean>(true);
  const [activeMarkerMode, setActiveMarkerMode] = useState<'all' | 'hotspots' | 'vanished'>('all');

  const t = UI_TRANSLATIONS;
  const isRtl = language === 'ar';
  const engineId = engine.id;

  const filteredHotspots = COMPONENT_HOTSPOTS.filter(spot => {
    if (activeMarkerMode === 'vanished') return false;
    if (activeCircuitFilter === 'all') return true;
    return spot.flowCircuit === activeCircuitFilter;
  });

  const getCircuitColor = (circuit: string) => {
    switch (circuit) {
      case 'lox':
        return {
          bg: 'bg-cyan-500',
          border: 'border-cyan-400',
          text: 'text-cyan-300',
          glow: 'rgba(6, 182, 212, 0.6)'
        };
      case 'methane':
        return {
          bg: 'bg-amber-500',
          border: 'border-amber-400',
          text: 'text-amber-300',
          glow: 'rgba(245, 158, 11, 0.6)'
        };
      case 'combustion':
        return {
          bg: 'bg-rose-500',
          border: 'border-rose-400',
          text: 'text-rose-300',
          glow: 'rgba(244, 63, 94, 0.6)'
        };
      default:
        return {
          bg: 'bg-emerald-500',
          border: 'border-emerald-400',
          text: 'text-emerald-300',
          glow: 'rgba(16, 185, 129, 0.6)'
        };
    }
  };

  return (
    <div className="bg-[#0B0C0E] rounded-xl border border-white/10 p-5 sm:p-6 flex flex-col">
      {/* Top Diagram Controls & Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold">
              {t.engineSelector[language]}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/20 bg-white/5 text-white/60 font-mono uppercase">
              {engine.era}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-light tracking-tight text-white mt-0.5">
            {engine.name[language]}
          </h3>
          <p className="text-xs text-white/40 mt-0.5">
            {t.pinpointInstruction[language]}
          </p>
        </div>

        {/* View Mode Toggle: Blueprint vs Aerospace Render */}
        <div className="flex items-center gap-2">
          <div className="flex bg-white/[0.03] p-1 rounded-full border border-white/15 text-xs">
            <button
              id="btn-view-blueprint"
              onClick={() => setViewMode('blueprint')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase transition-colors ${
                viewMode === 'blueprint'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>{t.diagramMode[language]}</span>
            </button>
            <button
              id="btn-view-render"
              onClick={() => setViewMode('render')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase transition-colors ${
                viewMode === 'render'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>{t.photoMode[language]}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Layer Toggles & Marker Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/5 text-xs">
        {/* Deleted Parts Layer On/Off Toggle */}
        <div className="flex items-center gap-2">
          <button
            id="toggle-deleted-layer"
            onClick={() => setShowDeletedLayer(!showDeletedLayer)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase transition-colors border ${
              showDeletedLayer
                ? 'border-amber-400/80 bg-amber-500/15 text-amber-300 font-semibold'
                : 'border-white/15 text-white/40 hover:text-white'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${showDeletedLayer ? 'bg-amber-400' : 'bg-white/30'}`} />
            <span>{t.toggleDeletedLayer[language]}: {showDeletedLayer ? 'ON' : 'OFF'}</span>
          </button>

          {/* Marker Filter: All vs Hotspots vs Vanished Systems */}
          <div className="hidden sm:flex items-center bg-white/[0.02] p-0.5 rounded-full border border-white/10 text-[10px] font-mono">
            <button
              onClick={() => setActiveMarkerMode('all')}
              className={`px-2.5 py-0.5 rounded-full transition-colors ${
                activeMarkerMode === 'all' ? 'bg-white/20 text-white font-medium' : 'text-white/40 hover:text-white'
              }`}
            >
              ALL PINS (15)
            </button>
            <button
              onClick={() => setActiveMarkerMode('hotspots')}
              className={`px-2.5 py-0.5 rounded-full transition-colors ${
                activeMarkerMode === 'hotspots' ? 'bg-white/20 text-white font-medium' : 'text-white/40 hover:text-white'
              }`}
            >
              CORE ARCH (8)
            </button>
            <button
              onClick={() => setActiveMarkerMode('vanished')}
              className={`px-2.5 py-0.5 rounded-full transition-colors ${
                activeMarkerMode === 'vanished' ? 'bg-amber-500/20 text-amber-300 font-medium' : 'text-white/40 hover:text-white'
              }`}
            >
              VANISHED (7)
            </button>
          </div>
        </div>

        {/* Generation Peeling Status Indicator */}
        <div className="text-[10px] font-mono text-white/50 flex items-center gap-1.5">
          {engineId === 'raptor1' && (
            <span className="text-amber-400/90 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {language === 'ar' ? 'R1: شجرة عيد الميلاد (كاملة القطع الخارجية)' : 'R1: "CHRISTMAS TREE" (MAX EXTERNAL CLUTTER)'}
            </span>
          )}
          {engineId === 'raptor2' && (
            <span className="text-sky-400/90 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              {language === 'ar' ? 'R2: تقشير 50% من القطع (حذف مشعل الغرفة)' : 'R2: 50% PEEL-DOWN (MCC IGNITER DELETED)'}
            </span>
          )}
          {engineId === 'raptor3' && (
            <span className="text-emerald-400/90 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {language === 'ar' ? 'R3: هيكل موحد مصبوب (حذف 100% من الأنابيب والأسلاك)' : 'R3: MONOLITHIC SKIN (100% EXTERNAL DELETION)'}
            </span>
          )}
        </div>
      </div>

      {/* Main Interactive Diagram Canvas Area */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] max-h-[580px] bg-[#0B0C0E] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
        
        {/* Background Grid Pattern - Clean Minimalism 40px dot grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-dot-grid"
        />

        {/* Schematic Watermark */}
        <div className="absolute bottom-10 text-center w-full pointer-events-none">
          <span className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-mono">
            {engineId.toUpperCase()} • FFSC SCHEMATIC
          </span>
        </div>

        {/* VIEW 1: Schematic Blueprint View (SVG Vector) */}
        {viewMode === 'blueprint' ? (
          <div className="relative w-full h-full p-2 sm:p-4 flex items-center justify-center">
            <svg
              viewBox="0 0 500 650"
              className="w-full h-full max-h-[540px] drop-shadow-2xl"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Gradient Shaders */}
                <linearGradient id="loxFlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="ch4FlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="chamberFlameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="20%" stopColor="#fef08a" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#fb923c" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="nozzleMetalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="25%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#475569" />
                  <stop offset="75%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="monolithicSkinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="30%" stopColor="#1e293b" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="70%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Central Thrust Mount & Puck Interface */}
              <rect x="200" y="25" width="100" height="24" rx="6" fill="#334155" stroke="#64748b" strokeWidth="2" />
              <text x="250" y="41" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                STARSHIP THRUST PUCK
              </text>

              {/* Gimbal Spherical Bearing */}
              <circle cx="250" cy="62" r="14" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="250" cy="62" r="6" fill="#cbd5e1" />

              {/* Left Feed Conduit: Liquid Oxygen (LOX) */}
              <path
                d="M 210,35 Q 165,35 155,90 L 155,120"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 210,35 Q 165,35 155,90 L 155,120"
                fill="none"
                stroke="#e0f2fe"
                strokeWidth="2"
                strokeDasharray={showFlows ? "6 4" : "none"}
                className={showFlows ? "animate-flow" : ""}
              />
              <text x="130" y="70" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                LOX INLET (-180°C)
              </text>

              {/* Right Feed Conduit: Liquid Methane (LCH4) */}
              <path
                d="M 290,35 Q 335,35 345,90 L 345,120"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 290,35 Q 335,35 345,90 L 345,120"
                fill="none"
                stroke="#fef3c7"
                strokeWidth="2"
                strokeDasharray={showFlows ? "6 4" : "none"}
                className={showFlows ? "animate-flow" : ""}
              />
              <text x="370" y="70" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold">
                CH4 INLET (-160°C)
              </text>

              {/* Left Powerhead: LOX Preburner & Turbopump */}
              <g transform="translate(120, 115)">
                {/* Turbopump housing */}
                <rect x="0" y="0" width="70" height="75" rx="10" fill={engineId === 'raptor3' ? 'url(#monolithicSkinGrad)' : '#0f172a'} stroke="#0284c7" strokeWidth="2.5" />
                {/* Internal Turbine Blades indicator */}
                <circle cx="35" cy="38" r="22" fill="#0369a1" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
                <path d="M 20,38 L 50,38 M 35,23 L 35,53 M 24,27 L 46,49 M 24,49 L 46,27" stroke="#38bdf8" strokeWidth="2" />
                <text x="35" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  OX PUMP (30k RPM)
                </text>
              </g>

              {/* Right Powerhead: Fuel Preburner & Methane Turbopump */}
              <g transform="translate(310, 115)">
                {/* Turbopump housing */}
                <rect x="0" y="0" width="70" height="75" rx="10" fill={engineId === 'raptor3' ? 'url(#monolithicSkinGrad)' : '#0f172a'} stroke="#d97706" strokeWidth="2.5" />
                {/* Internal Turbine Blades indicator */}
                <circle cx="35" cy="38" r="22" fill="#b45309" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1.5" />
                <path d="M 20,38 L 50,38 M 35,23 L 35,53 M 24,27 L 46,49 M 24,49 L 46,27" stroke="#fbbf24" strokeWidth="2" />
                <text x="35" y="70" textAnchor="middle" fill="#fde68a" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  CH4 PUMP (40k RPM)
                </text>
              </g>

              {/* Hot Gas Transfer Ducts (Preburner exhaust to Main Injector) */}
              {/* Left duct: hot oxygen-rich gas */}
              <path
                d="M 165,190 C 165,220 220,230 235,245"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M 165,190 C 165,220 220,230 235,245"
                fill="none"
                stroke="#cffafe"
                strokeWidth="2.5"
                strokeDasharray={showFlows ? "5 4" : "none"}
                className={showFlows ? "animate-flow" : ""}
              />

              {/* Right duct: hot methane-rich gas */}
              <path
                d="M 335,190 C 335,220 280,230 265,245"
                fill="none"
                stroke="#f97316"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M 335,190 C 335,220 280,230 265,245"
                fill="none"
                stroke="#ffedd5"
                strokeWidth="2.5"
                strokeDasharray={showFlows ? "5 4" : "none"}
                className={showFlows ? "animate-flow" : ""}
              />

              {/* TVC Gimbal Actuators (Structural pitch/yaw pistons) */}
              <g opacity="0.85">
                {/* Left Actuator strut */}
                <line x1="100" y1="80" x2="185" y2="250" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                <line x1="100" y1="80" x2="185" y2="250" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="100" cy="80" r="5" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
                <circle cx="185" cy="250" r="5" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />

                {/* Right Actuator strut */}
                <line x1="400" y1="80" x2="315" y2="250" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                <line x1="400" y1="80" x2="315" y2="250" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="400" cy="80" r="5" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
                <circle cx="315" cy="250" r="5" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
              </g>

              {/* Main Injector Dome */}
              <path
                d="M 195,240 C 215,225 285,225 305,240 L 300,265 L 200,265 Z"
                fill="#1e293b"
                stroke="#94a3b8"
                strokeWidth="2"
              />
              <text x="250" y="255" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="monospace" fontWeight="bold">
                100% GASEOUS INJECTOR
              </text>

              {/* Main Combustion Chamber Body */}
              <path
                d="M 200,265 L 300,265 L 290,320 C 285,340 270,355 265,365 L 235,365 C 230,355 215,340 210,320 Z"
                fill={engineId === 'raptor3' ? 'url(#monolithicSkinGrad)' : '#0f172a'}
                stroke="#f43f5e"
                strokeWidth="2.5"
              />

              {/* Flame / Plasma inside Chamber */}
              <path
                d="M 215,270 L 285,270 L 275,320 Q 250,360 250,365 Q 250,360 225,320 Z"
                fill="url(#chamberFlameGrad)"
                filter="url(#glowEffect)"
              />
              <text x="250" y="310" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                {engine.specs.chamberPressure.bar} BAR
              </text>
              <text x="250" y="325" textAnchor="middle" fill="#fecdd3" fontSize="8" fontFamily="monospace">
                (3,300°C FLAME)
              </text>

              {/* Regenerative Cooling Channels in Throat Jacket */}
              <path
                d="M 195,265 Q 200,325 220,365 L 228,365 Q 210,325 205,265 Z"
                fill="#0284c7"
                opacity="0.7"
              />
              <path
                d="M 305,265 Q 300,325 280,365 L 272,365 Q 290,325 295,265 Z"
                fill="#0284c7"
                opacity="0.7"
              />

              {/* Throat Constriction */}
              <line x1="230" y1="365" x2="270" y2="365" stroke="#f43f5e" strokeWidth="3" strokeDasharray="3 2" />

              {/* Bell Nozzle Outer Shell (Regeneratively Cooled) */}
              <path
                d="M 235,365 C 225,410 160,520 120,590 L 380,590 C 340,520 275,410 265,365 Z"
                fill={engineId === 'raptor3' ? 'url(#monolithicSkinGrad)' : 'url(#nozzleMetalGrad)'}
                stroke="#64748b"
                strokeWidth="2.5"
              />

              {/* Internal Nozzle Expansion Flare & Exhaust Plume */}
              <path
                d="M 238,368 C 229,410 170,520 135,585 L 365,585 C 330,520 271,410 262,368 Z"
                fill="#0b0f19"
              />
              {/* Exhaust Plume Glow */}
              <polygon
                points="245,368 255,368 280,450 250,510 220,450"
                fill="#818cf8"
                opacity="0.3"
                filter="url(#glowEffect)"
              />
              <polygon
                points="248,370 252,370 265,420 250,460 235,420"
                fill="#e0e7ff"
                opacity="0.6"
              />

              {/* Nozzle Stiffener Ring / Strakes */}
              <line x1="140" y1="550" x2="360" y2="550" stroke="#475569" strokeWidth="2.5" />
              <line x1="160" y1="510" x2="340" y2="510" stroke="#475569" strokeWidth="2" />
              <text x="250" y="540" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                REGENERATIVE COOLING JACKET
              </text>
              <text x="250" y="580" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                1.3m BELL EXIT DIAMETER
              </text>

              {/* ========================================================= */}
              {/* DYNAMIC "DELETED PARTS" / VANISHED SUBSYSTEMS SVG OVERLAYS */}
              {/* ========================================================= */}
              {showDeletedLayer && (
                <g id="vanished-parts-dynamic-layer">
                  {/* GENERATION 1: RAPTOR 1 "CHRISTMAS TREE" OF EXTERNAL CLUTTER */}
                  {engineId === 'raptor1' && (
                    <g id="r1-christmas-tree-clutter" className="transition-all duration-300">
                      {/* 1. Base Heat Shield & Thermal Blanket Envelope */}
                      <path
                        d="M 80,75 C 160,45 340,45 420,75 L 435,235 L 65,235 Z"
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        opacity="0.5"
                      />
                      <rect x="140" y="80" width="220" height="16" rx="4" fill="#0b0c0e" stroke="#64748b" strokeWidth="1" />
                      <text x="250" y="91" fill="#cbd5e1" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        R1 EXTERNAL BASE HEAT SHIELD & BLANKETS
                      </text>

                      {/* 2. Kapton-Wrapped Golden Wiring Harnesses Web */}
                      <g stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 2" fill="none" opacity="0.9">
                        <path d="M 230,65 Q 180,95 150,140 T 140,210 Q 150,235 185,250" />
                        <path d="M 270,65 Q 320,95 350,140 T 360,210 Q 350,235 315,250" />
                        <path d="M 200,45 L 125,110 L 125,180" stroke="#d97706" />
                        <path d="M 300,45 L 375,110 L 375,180" stroke="#d97706" />
                        <path d="M 185,250 L 195,290 L 175,340" stroke="#b45309" strokeWidth="1.5" />
                        <path d="M 315,250 L 305,290 L 325,340" stroke="#b45309" strokeWidth="1.5" />
                      </g>

                      {/* 3. Secondary Fluid & Purge Lines (~60+ external bypasses) */}
                      <g stroke="#ea580c" strokeWidth="2.5" fill="none" opacity="0.85">
                        <path d="M 115,135 Q 90,170 105,215 T 165,240" />
                        <path d="M 385,135 Q 410,170 395,215 T 335,240" />
                        <path d="M 190,155 Q 175,195 185,260" stroke="#fdba74" strokeDasharray="4 2" />
                        <path d="M 310,155 Q 325,195 315,260" stroke="#fdba74" strokeDasharray="4 2" />
                        <path d="M 155,90 Q 105,105 100,140 L 100,200 Q 105,240 190,270" />
                        <path d="M 345,90 Q 395,105 400,140 L 400,200 Q 395,240 310,270" />
                      </g>

                      {/* 4. External Avionics / Sensor Concentrator Enclosures */}
                      <g transform="translate(70, 150)">
                        <rect x="0" y="0" width="36" height="46" rx="4" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="4" y1="8" x2="32" y2="8" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="4" y1="14" x2="32" y2="14" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="4" y1="20" x2="32" y2="20" stroke="#64748b" strokeWidth="1.5" />
                        <circle cx="18" cy="32" r="3" fill="#38bdf8" />
                        <text x="18" y="42" fill="#94a3b8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">AV-BOX 1</text>
                      </g>
                      <g transform="translate(394, 150)">
                        <rect x="0" y="0" width="36" height="46" rx="4" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="4" y1="8" x2="32" y2="8" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="4" y1="14" x2="32" y2="14" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="4" y1="20" x2="32" y2="20" stroke="#64748b" strokeWidth="1.5" />
                        <circle cx="18" cy="32" r="3" fill="#fbbf24" />
                        <text x="18" y="42" fill="#94a3b8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">AV-BOX 2</text>
                      </g>

                      {/* 5. 400+ External Diagnostic Sensors & Pressure Taps */}
                      <g fill="#ec4899" stroke="#ffe4e6" strokeWidth="1">
                        <circle cx="125" cy="130" r="3" />
                        <circle cx="375" cy="130" r="3" />
                        <circle cx="165" cy="205" r="3" />
                        <circle cx="335" cy="205" r="3" />
                        <circle cx="205" cy="285" r="2.5" />
                        <circle cx="295" cy="285" r="2.5" />
                        <circle cx="225" cy="365" r="2.5" />
                        <circle cx="275" cy="365" r="2.5" />
                        <circle cx="115" cy="175" r="2.5" />
                        <circle cx="385" cy="175" r="2.5" />
                      </g>

                      {/* 6. Bolted Flanges with Visible Circular Bolt Patterns */}
                      <g stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round">
                        <line x1="150" y1="190" x2="180" y2="190" />
                        <line x1="320" y1="190" x2="350" y2="190" />
                        <line x1="220" y1="240" x2="248" y2="240" />
                        <line x1="252" y1="240" x2="280" y2="240" />
                      </g>
                      <g fill="#0f172a">
                        <circle cx="155" cy="190" r="1.5" /><circle cx="165" cy="190" r="1.5" /><circle cx="175" cy="190" r="1.5" />
                        <circle cx="325" cy="190" r="1.5" /><circle cx="335" cy="190" r="1.5" /><circle cx="345" cy="190" r="1.5" />
                        <circle cx="225" cy="240" r="1.5" /><circle cx="235" cy="240" r="1.5" /><circle cx="245" cy="240" r="1.5" />
                      </g>

                      {/* 7. MCC Spark Torch Igniter Module Bolted to Dome */}
                      <g transform="translate(236, 218)">
                        <rect x="0" y="0" width="28" height="24" rx="4" fill="#334155" stroke="#f43f5e" strokeWidth="2" />
                        <circle cx="14" cy="12" r="5" fill="#f43f5e" />
                        <line x1="14" y1="24" x2="14" y2="35" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="3 1" />
                        {/* Spark tube lines */}
                        <path d="M 4,6 Q -8,12 -8,25" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
                        <path d="M 24,6 Q 36,12 36,25" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
                      </g>
                      <rect x="180" y="202" width="140" height="15" rx="3" fill="#0b0c0e" stroke="#f43f5e" strokeWidth="1" />
                      <text x="250" y="213" fill="#f43f5e" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        MCC SPARK TORCH IGNITER (ACTIVE)
                      </text>
                    </g>
                  )}

                  {/* GENERATION 2: RAPTOR 2 PARTIAL PEEL-DOWN & DELETED IGNITER */}
                  {engineId === 'raptor2' && (
                    <g id="r2-transition-clutter" className="transition-all duration-300">
                      {/* Reduced secondary lines in cast channels */}
                      <g stroke="#94a3b8" strokeWidth="2" fill="none" opacity="0.6">
                        <path d="M 125,140 Q 115,180 145,225" />
                        <path d="M 375,140 Q 385,180 355,225" />
                      </g>

                      {/* Rigid armored conduits replacing Kapton bundles */}
                      <g stroke="#cbd5e1" strokeWidth="2" fill="none" opacity="0.75">
                        <path d="M 230,65 L 160,135 L 155,220" />
                        <path d="M 270,65 L 340,135 L 345,220" />
                      </g>

                      {/* Minimal flight redline sensors only */}
                      <g fill="#ec4899" stroke="#ffe4e6" strokeWidth="1">
                        <circle cx="165" cy="205" r="2.5" />
                        <circle cx="335" cy="205" r="2.5" />
                        <circle cx="250" cy="285" r="2.5" />
                      </g>

                      {/* Consolidated single avionics box */}
                      <rect x="390" y="160" width="28" height="34" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="404" y="180" fill="#38bdf8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">R2-AV</text>

                      {/* KEY VISUAL: MCC SPARK IGNITER DELETED & CROSSED OUT */}
                      <g transform="translate(210, 215)">
                        <rect x="0" y="0" width="80" height="26" rx="4" fill="#0b0c0e" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                        <line x1="2" y1="2" x2="78" y2="24" stroke="#ef4444" strokeWidth="2" />
                        <text x="40" y="16" fill="#ef4444" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                          MCC IGNITER DELETED
                        </text>
                      </g>
                      <rect x="160" y="246" width="180" height="15" rx="3" fill="#0b0c0e" stroke="#38bdf8" strokeWidth="1" />
                      <text x="250" y="257" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        GAS-GAS AUTO-IGNITION FROM PREBURNERS
                      </text>

                      {/* Orbital Welds indicator replacing heavy bolted flanges */}
                      <text x="250" y="195" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle">
                        [ ORBITAL ROBOT WELDS REPLACE FLANGE BOLTS ]
                      </text>
                    </g>
                  )}

                  {/* GENERATION 3: RAPTOR 3 MONOLITHIC CHASSIS (100% EXTERNAL DELETION) */}
                  {engineId === 'raptor3' && (
                    <g id="r3-monolithic-clean-layer" className="transition-all duration-300">
                      {/* Subtly illuminated INTERNAL laser-printed conduits inside metal skin */}
                      <g stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.8">
                        <path d="M 155,120 L 155,245 Q 155,270 200,270" />
                        <path d="M 345,120 L 345,245 Q 345,270 300,270" />
                        <path d="M 210,270 L 210,365" />
                        <path d="M 290,270 L 290,365" />
                      </g>

                      {/* Monolithic Top Banner Callout */}
                      <rect x="90" y="8" width="320" height="22" rx="11" fill="#0b0c0e" stroke="#10b981" strokeWidth="1.5" />
                      <text x="250" y="23" fill="#10b981" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        MONOLITHIC CASTING • ZERO EXTERNAL LINES OR WIRES
                      </text>

                      {/* No Base Heat Shield Needed Annotation */}
                      <rect x="135" y="475" width="230" height="22" rx="11" fill="#0b0c0e" stroke="#10b981" strokeWidth="1.5" />
                      <text x="250" y="490" fill="#10b981" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        REGEN-COOLED SKIN = ZERO BASE HEAT SHIELD
                      </text>

                      {/* Internalized Sensing Callout */}
                      <rect x="160" y="228" width="180" height="18" rx="4" fill="#0b0c0e" stroke="#38bdf8" strokeWidth="1" />
                      <text x="250" y="240" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        ALL SENSORS & VALVES CAST INTERNALLY
                      </text>
                    </g>
                  )}
                </g>
              )}
            </svg>
          </div>
        ) : (
          /* VIEW 2: Realistic Aerospace Render View */
          <div className="relative w-full h-full flex items-center justify-center p-3">
            <img
              src={engine.imagePath}
              alt={engine.name[language]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-lg drop-shadow-2xl"
            />
            {/* Version Identity Badge overlay */}
            <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700 max-w-[260px]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{engine.name[language]}</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1 leading-tight">
                {engine.architectureHighlights.plumbing[language]}
              </p>
            </div>
          </div>
        )}

        {/* Hotspot Markers Overlaid on Top of Active View */}
        {filteredHotspots.map((hotspot) => {
          const isSelected = selectedHotspotId === hotspot.id;
          const isHovered = hoveredHotspotId === hotspot.id;
          const colors = getCircuitColor(hotspot.flowCircuit);

          return (
            <div
              key={hotspot.id}
              id={`hotspot-pin-${hotspot.id}`}
              style={{
                position: 'absolute',
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: isSelected ? 30 : 20
              }}
              onMouseEnter={() => setHoveredHotspotId(hotspot.id)}
              onMouseLeave={() => setHoveredHotspotId(null)}
              onClick={() => onSelectHotspot(hotspot.id)}
              className="cursor-pointer group select-none"
            >
              {/* Radar Pulsing Wave */}
              <div
                className={`absolute inset-0 rounded-full animate-ping opacity-60 ${colors.bg}`}
                style={{
                  width: isSelected ? '34px' : '26px',
                  height: isSelected ? '34px' : '26px',
                  transform: 'translate(-5px, -5px)'
                }}
              />

              {/* Pin Button */}
              <button
                type="button"
                className={`relative flex items-center justify-center rounded-full font-mono font-bold text-xs transition-all duration-200 ${
                  isSelected
                    ? 'w-8 h-8 text-black bg-white ring-2 ring-white/50 scale-110 shadow-lg'
                    : `w-6 h-6 text-[#E0E2E5] bg-[#0B0C0E]/90 border ${colors.border} hover:scale-110 hover:border-white`
                }`}
                aria-label={hotspot.title[language]}
              >
                <span>{hotspot.pinNumber}</span>
              </button>

              {/* Floating Tooltip Label on Hover or Select */}
              {(isHovered || isSelected) && (
                <div
                  className={`absolute z-30 pointer-events-none whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-mono backdrop-blur-md border shadow-xl transition-opacity duration-150 ${
                    isSelected
                      ? 'bg-[#0B0C0E] text-white border-white/60'
                      : 'bg-[#0B0C0E]/95 text-white/80 border-white/20'
                  }`}
                  style={{
                    top: hotspot.y > 75 ? '-34px' : '30px',
                    left: hotspot.x > 70 ? 'auto' : '50%',
                    right: hotspot.x > 70 ? '0' : 'auto',
                    transform: hotspot.x > 70 ? 'none' : 'translateX(-50%)'
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
                    <span>{hotspot.title[language]}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Vanished Parts Interactive Markers Overlaid on Top */}
        {(activeMarkerMode === 'all' || activeMarkerMode === 'vanished') &&
          VANISHED_PARTS_DATA.map((vanishedItem) => {
            const isSelected = selectedDeletedPartId === vanishedItem.id;
            const isHovered = hoveredVanishedId === vanishedItem.id;
            const status = vanishedItem.statusByVersion[engineId];

            const getVanishedMarkerColor = () => {
              if (status.state === 'eliminated') return { bg: 'bg-emerald-500', border: 'border-emerald-400', text: 'text-emerald-300' };
              if (status.state === 'reduced') return { bg: 'bg-sky-500', border: 'border-sky-400', text: 'text-sky-300' };
              return { bg: 'bg-amber-500', border: 'border-amber-400', text: 'text-amber-300' };
            };

            const colors = getVanishedMarkerColor();

            return (
              <div
                key={`vanished-${vanishedItem.id}`}
                id={`vanished-pin-${vanishedItem.id}`}
                style={{
                  position: 'absolute',
                  left: `${vanishedItem.diagramPosition.x}%`,
                  top: `${vanishedItem.diagramPosition.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isSelected ? 35 : 25
                }}
                onMouseEnter={() => setHoveredVanishedId(vanishedItem.id)}
                onMouseLeave={() => setHoveredVanishedId(null)}
                onClick={() => onSelectDeletedPart && onSelectDeletedPart(isSelected ? null : vanishedItem.id)}
                className="cursor-pointer group select-none"
              >
                {/* Diamond Marker for Vanished Parts to distinguish from Hotspots */}
                <button
                  type="button"
                  className={`relative flex items-center justify-center font-mono font-bold text-[10px] transition-all duration-200 rotate-45 ${
                    isSelected
                      ? 'w-7 h-7 text-black bg-amber-400 ring-2 ring-amber-300 scale-110 shadow-lg'
                      : `w-5 h-5 text-white bg-[#0B0C0E]/90 border ${colors.border} hover:scale-110 hover:border-white`
                  }`}
                  aria-label={vanishedItem.name[language]}
                >
                  <span className="-rotate-45 text-[8px]">⚡</span>
                </button>

                {/* Tooltip on Hover or Select */}
                {(isHovered || isSelected) && (
                  <div
                    className={`absolute z-35 pointer-events-none whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-mono backdrop-blur-md border shadow-xl transition-opacity duration-150 ${
                      isSelected
                        ? 'bg-[#0B0C0E] text-white border-amber-400'
                        : 'bg-[#0B0C0E]/95 text-white/90 border-white/20'
                    }`}
                    style={{
                      top: vanishedItem.diagramPosition.y > 75 ? '-36px' : '28px',
                      left: vanishedItem.diagramPosition.x > 70 ? 'auto' : '50%',
                      right: vanishedItem.diagramPosition.x > 70 ? '0' : 'auto',
                      transform: vanishedItem.diagramPosition.x > 70 ? 'none' : 'translateX(-50%)'
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
                      <span className="font-semibold">{vanishedItem.name[language]}:</span>
                      <span className="text-white/60 text-[10px]">[{status.label[language]}]</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

        {/* Bottom Legend Overlay - Minimalist Hairline Bar */}
        <div className="absolute bottom-2 left-2 right-2 flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 bg-[#0B0C0E]/90 backdrop-blur-md rounded-lg border border-white/10 text-[10px] uppercase font-mono tracking-wider text-white/50">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full border border-cyan-400 text-white font-mono text-[8px] flex items-center justify-center">●</span>
              HOTSPOTS (1-8)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rotate-45 border border-amber-400 bg-amber-400/30 text-amber-300 font-mono text-[8px] flex items-center justify-center" />
              VANISHED (7)
            </span>
          </div>
          {viewMode === 'blueprint' && (
            <button
              onClick={() => setShowFlows(!showFlows)}
              className="text-[10px] text-white/60 hover:text-white transition-colors"
            >
              {showFlows ? '[ PAUSE FLOWS ]' : '[ RESUME FLOWS ]'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

