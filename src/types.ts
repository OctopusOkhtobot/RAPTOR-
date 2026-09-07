export type Language = 'en' | 'ar';
export type UnitSystem = 'metric' | 'imperial';
export type EngineVersionId = 'raptor1' | 'raptor2' | 'raptor3';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface EngineSpec {
  thrustSeaLevel: {
    kN: number;
    tf: number;
    lbf: number;
    operationalFlight?: {
      kN: number;
      tf: number;
      lbf: number;
      label: LocalizedString;
    };
    testStandPeak?: {
      kN: number;
      tf: number;
      lbf: number;
      label: LocalizedString;
    };
  };
  thrustVacuum: {
    kN: number;
    tf: number;
    lbf: number;
    operationalFlight?: {
      kN: number;
      tf: number;
      lbf: number;
      label: LocalizedString;
    };
    testStandPeak?: {
      kN: number;
      tf: number;
      lbf: number;
      label: LocalizedString;
    };
  };
  chamberPressure: {
    bar: number;
    psi: number;
    operationalBar?: number;
    testStandBar?: number;
    note?: LocalizedString;
  };
  engineMass: {
    kg: number;
    lbs: number;
    withVehicleInterfaceHardware?: {
      kg: number;
      lbs: number;
      note?: LocalizedString;
    };
  };
  thrustToWeight: number;
  twrOperational?: number;
  twrPeak?: number;
  specificImpulseSL: number; // seconds
  specificImpulseVac: number; // seconds
  ispVacRVacTarget?: number;
  ispVacRVacTargetLabel?: LocalizedString;
  exitDiameter: {
    meters: number;
    feet: number;
  };
  height: {
    meters: number;
    feet: number;
  };
  combinedTurbopumpPowerEstimated?: LocalizedString;
  propellant: LocalizedString;
  cycle: LocalizedString;
  status: LocalizedString;
  firstFlight: LocalizedString;
  costEstimateOrTarget?: LocalizedString;
}

export interface DeletedPartItem {
  id: string;
  name: LocalizedString;
  category: LocalizedString;
  elonKeypoint: LocalizedString;
  whatItDid: LocalizedString;
  whyOnRaptor1: LocalizedString;
  howEliminatedInR2R3: LocalizedString;
  statusByVersion: {
    raptor1: {
      state: 'prominent' | 'reduced' | 'eliminated';
      label: LocalizedString;
      detail: LocalizedString;
    };
    raptor2: {
      state: 'prominent' | 'reduced' | 'eliminated';
      label: LocalizedString;
      detail: LocalizedString;
    };
    raptor3: {
      state: 'prominent' | 'reduced' | 'eliminated';
      label: LocalizedString;
      detail: LocalizedString;
    };
  };
  diagramPosition: {
    x: number;
    y: number;
  };
}

export interface ComponentHotspot {
  id: string;
  pinNumber: number;
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  title: LocalizedString;
  category: LocalizedString;
  flowCircuit: 'lox' | 'methane' | 'combustion' | 'structural';
  functionSummary: LocalizedString;
  technicalDetails: LocalizedString;
  materials: LocalizedString;
  evolution: {
    raptor1: LocalizedString;
    raptor2: LocalizedString;
    raptor3: LocalizedString;
  };
}

export interface EngineVersionData {
  id: EngineVersionId;
  name: LocalizedString;
  codeName: string;
  generation: LocalizedString;
  era: string;
  tagline: LocalizedString;
  summary: LocalizedString;
  keyInnovations: LocalizedString[];
  imagePath: string;
  specs: EngineSpec;
  architectureHighlights: {
    plumbing: LocalizedString;
    sensorsAndWiring: LocalizedString;
    coolingAndShielding: LocalizedString;
    productionCost: LocalizedString;
  };
}

