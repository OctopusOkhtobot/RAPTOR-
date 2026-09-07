import { ComponentHotspot, DeletedPartItem, EngineVersionData, LocalizedString } from '../types';

export const ENGINES_DATA: Record<'raptor1' | 'raptor2' | 'raptor3', EngineVersionData> = {
  raptor1: {
    id: 'raptor1',
    name: {
      en: 'Raptor 1',
      ar: 'رابتور 1 (Raptor 1)'
    },
    codeName: 'Raptor V1 / SN20-SN60 Era',
    generation: {
      en: 'First Generation (Prototype to Flight)',
      ar: 'الجيل الأول (من النماذج الأولية إلى أولى الرحلات)'
    },
    era: '2019 – 2021',
    tagline: {
      en: 'The breakthrough pioneer: First full-flow staged combustion engine to ever fly in history.',
      ar: 'الرائد التاريخي: أول محرك احتراق مرحلي بتدفق كامل يحلق في رحلة فعلية في تاريخ الصواريخ.'
    },
    summary: {
      en: 'Raptor 1 proved that the legendary Full-Flow Staged Combustion (FFSC) cycle could be successfully manufactured, ignited, throttle-controlled, and flown. Powered the historic Starhopper 150m hop and Starship high-altitude flights (SN8 through SN15). As an early developmental testbed, it was heavily instrumented like a "Christmas Tree" with hundreds of external diagnostic sensors, separate purge gas tubing, bolted mechanical flanges, and thick thermal shielding blankets.',
      ar: 'أثبت رابتور 1 إمكانية تصنيع دورة الاحتراق المرحلي بتدفق كامل المعقدة وتشغيلها وتوجيهها في رحلات فعلية. دفع قفزات ستارهوبر التاريخية ورحلات ستارشيب لارتفاعات شاهقة (SN8 إلى SN15). ولكونه منصة تطوير تجريبية، كُسي بشبكة مكثفة كـ "شجرة عيد الميلاد" شملت مئات الحساسات التشخيصية الخارجية، وأنابيب غازات التطهير المنفصلة، والفلنجات المسننة ببراغي، ودروع العزل الحراري الثقيلة.'
    },
    keyInnovations: [
      {
        en: 'World’s first *flown* Full-Flow Staged Combustion (FFSC) rocket engine (Soviet RD-270 & US IPD were ground test stand projects only).',
        ar: 'أول محرك احتراق مرحلي بتدفق كامل (FFSC) يحلق في رحلة صاروخية فعلية في العالم (مشروع RD-270 السوفييتي وIPD الأمريكي كانا على منصات اختبار أرضية فقط ولم يطيرا).'
      },
      {
        en: 'Demonstrated 250+ bar chamber pressure in test spikes (paving the way for Raptor 2 to surpass the Russian RD-180 record of ~257–267 bar).',
        ar: 'سجل ضغط حجرة تجاوز 250 بار في ومضات الاختبارات (ممهداً الطريق لرابتور 2 لكسر الرقم القياسي لمحرك RD-180 الروسي البالغ ~257–267 بار).'
      },
      {
        en: 'Pioneered deep throttling down to 40% for precision rocket vertical flip and landing maneuvers.',
        ar: 'ابتكر قدرة تقليص الدفع العميق حتى 40% لتنفيذ مناورات الشقلبة والهبوط العمودي الدقيق.'
      },
      {
        en: 'Validated operational sub-cooled liquid methane and liquid oxygen (Methalox) handling at cryogenic densities.',
        ar: 'أثبت الجدارة التشغيلية للتعامل مع وقود الميثالوك المبرد فائق الكثافة (الميثان والأكسجين السائلين).'
      }
    ],
    imagePath: '/src/assets/images/raptor_one_engine_1788644277532.jpg',
    specs: {
      thrustSeaLevel: {
        kN: 1814,
        tf: 185,
        lbf: 407850
      },
      thrustVacuum: {
        kN: 1961,
        tf: 200,
        lbf: 440900
      },
      chamberPressure: {
        bar: 250,
        psi: 3625,
        note: {
          en: 'Operational ~250 bar (test spikes reached ~268 bar)',
          ar: 'تشغيلي ~250 بار (بلغت ومضات الاختبار ~268 بار)'
        }
      },
      engineMass: {
        kg: 2080,
        lbs: 4585
      },
      thrustToWeight: 89,
      specificImpulseSL: 330,
      specificImpulseVac: 356,
      exitDiameter: {
        meters: 1.3,
        feet: 4.26
      },
      height: {
        meters: 3.1,
        feet: 10.17
      },
      combinedTurbopumpPowerEstimated: {
        en: 'Estimated ~50,000+ HP combined across both turbopumps (~37 MW total)',
        ar: 'تقديري ~50,000+ حصان إجمالي للمضختين التوربينيتين معاً (~37 ميغاواط)'
      },
      propellant: {
        en: 'Deep-Cryogenic Sub-Cooled Liquid Methane (CH4) & Liquid Oxygen (LOX)',
        ar: 'ميثان سائل مبرد فائق الكثافة (CH4) وأكسجين سائل (LOX)'
      },
      cycle: {
        en: 'Full-Flow Staged Combustion (FFSC)',
        ar: 'احتراق مرحلي كامل التدفق (FFSC)'
      },
      status: {
        en: 'Retired (Historical prototype & sub-orbital test campaign)',
        ar: 'متقاعد (الجيل الأولي التاريخي وحملة اختبارات القفز دون المدارية)'
      },
      firstFlight: {
        en: 'July 2019 (Starhopper 20m Tethered / 150m Untethered Hop)',
        ar: 'يوليو 2019 (قفزة ستارهوبر الشهيرة بارتفاع 150 متراً)'
      },
      costEstimateOrTarget: {
        en: 'Estimated ~$2,000,000+ (High prototype manual fabrication and assembly costs)',
        ar: 'تقديري ~$2,000,000+ (تكلفة تصنيع يدوي وتجميع نماذج أولية عالية)'
      }
    },
    architectureHighlights: {
      plumbing: {
        en: 'Extremely intricate web of hundreds of external pipes, individual stainless braided flex hoses, welded joints, and manual bolted flanged connections.',
        ar: 'شبكة خارجية فائقة التعقيد تضم مئات الأنابيب الملتوية والوصلات المرنة واللحامات اليدوية والفلنجات المسننة ببراغي.'
      },
      sensorsAndWiring: {
        en: 'Over 400 experimental diagnostic sensors and discrete wire bundles wrapped in gold/amber Kapton foil to gather telemetry on unverified thermal and acoustic loads.',
        ar: 'أكثر من 400 حساس تشخيصي تجريبي وحزم أسلاك مغلفة بأغشية الكابتون العاكسة لرصد الإجهادات الحرارية والصوتية غير المؤكدة مسبقاً.'
      },
      coolingAndShielding: {
        en: 'Required thick conical base heat shields, individual thermal blankets, and inert gas purge manifolds to prevent the external plumbing from incinerating in the engine bay.',
        ar: 'تطلب دروعاً حرارية مخروطية ثقيلة وبطانيات عزل فردية وأنابيب تطهير بالغاز الخامل لحماية الأنابيب الخارجية من الاحتراق في حجرة المحركات.'
      },
      productionCost: {
        en: 'Estimated ~$2M+ per unit; required several weeks of intensive manual assembly and sensor harness routing per engine.',
        ar: 'تكلفة تقديرية تفوق 2 مليون دولار للمحرك؛ مع استغراق أسابيع من التجميع اليدوي المكثف ومد شبكات الأسلاك.'
      }
    }
  },
  raptor2: {
    id: 'raptor2',
    name: {
      en: 'Raptor 2',
      ar: 'رابتور 2 (Raptor 2)'
    },
    codeName: 'Raptor V2 / Production Workhorse',
    generation: {
      en: 'Second Generation (Mass-Produced Orbital Workhorse)',
      ar: 'الجيل الثاني (المحرك المداري للإنتاج الضخم)'
    },
    era: '2022 – 2024',
    tagline: {
      en: 'Streamlined brute force: Radical parts reduction, 24% thrust increase, and breaking the RD-180 world pressure record.',
      ar: 'القوة المجرّدة المبسطة: تقليص جذري للأجزاء، زيادة الدفع 24%، وكسر الرقم القياسي العالمي لضغط RD-180.'
    },
    summary: {
      en: 'Raptor 2 was a clean-sheet redesign focused on manufacturing simplicity, reliability, and sheer thrust. Flown on Starship Integrated Flight Tests 1 through 4 (IFT-1 to IFT-4), powering 33 engines on the Super Heavy booster. It eliminated hundreds of discrete parts: the main combustion chamber spark igniter was deleted in favor of preburner gas auto-ignition, bolted flanges were replaced with robotic welds, dry mass dropped by ~450 kg, and chamber pressure reached a record sustained 300 bar.',
      ar: 'كان رابتور 2 بمثابة إعادة تصميم جذرية من الصفر ركزت على بساطة التصنيع والموثوقية وقوة الدفع. حلق في رحلات الاختبار المتكاملة لستارشيب (IFT-1 إلى IFT-4) مشغلاً 33 محركاً في المعزز. ألغى مئات الأجزاء: حُذف مشعل غرفة الاحتراق الرئيسية اعتماداً على الاشتعال الذاتي لغازات المسبقتين، واستُبدلت الفلنجات بلحامات روبوتية، وانخفض الوزن بـ ~450 كغ، وبلغ ضغط الحجرة رقماً قياسياً مستقراً عند 300 بار.'
    },
    keyInnovations: [
      {
        en: 'Massive external parts reduction; eliminated Main Chamber spark igniter through spontaneous gas auto-ignition.',
        ar: 'تقليص هائل للأجزاء الخارجية؛ وإلغاء مشعل شرارة الغرفة الرئيسية بالاعتماد على الاشتعال الذاتي الفوري للغازات.'
      },
      {
        en: 'Sustained 300 bar chamber pressure, decisively surpassing the Russian RD-180 (~257–267 bar) world operational record.',
        ar: 'تحقيق ضغط حجرة مستمر بلغ 300 بار، متفوقاً بشكل قاطع على الرقم القياسي التشغيلي العالمي لـ RD-180 الروسي (~257–267 بار).'
      },
      {
        en: 'Thrust boosted from 185 tf to 230 tf (+24%) while cutting dry mass by over 450 kg.',
        ar: 'رفع قوة الدفع من 185 إلى 230 طن-قوة (+24%) مع تقليص الوزن الجاف بأكثر من 450 كغ.'
      },
      {
        en: 'Scaled to mass manufacturing exceeding 1 engine built per calendar day at the Starbase Megafactory.',
        ar: 'تسريع وتيرة التصنيع الضخم لتتجاوز محركاً كاملاً واحداً يومياً في مصنع ستاربايس الضخم.'
      }
    ],
    imagePath: '/src/assets/images/raptor_two_engine_1788644296189.jpg',
    specs: {
      thrustSeaLevel: {
        kN: 2256,
        tf: 230,
        lbf: 507170
      },
      thrustVacuum: {
        kN: 2452,
        tf: 250,
        lbf: 551150
      },
      chamberPressure: {
        bar: 300,
        psi: 4351,
        note: {
          en: '300 bar continuous operating pressure (Record holder until Raptor 3)',
          ar: '300 بار ضغط تشغيلي مستمر (حامل الرقم القياسي حتى ظهور رابتور 3)'
        }
      },
      engineMass: {
        kg: 1630,
        lbs: 3593
      },
      thrustToWeight: 141,
      specificImpulseSL: 327,
      specificImpulseVac: 350,
      exitDiameter: {
        meters: 1.3,
        feet: 4.26
      },
      height: {
        meters: 3.0,
        feet: 9.84
      },
      combinedTurbopumpPowerEstimated: {
        en: 'Estimated ~50,000+ HP combined across both turbopumps (~37 MW total)',
        ar: 'تقديري ~50,000+ حصان إجمالي للمضختين التوربينيتين معاً (~37 ميغاواط)'
      },
      propellant: {
        en: 'Deep-Cryogenic Sub-Cooled Liquid Methane (CH4) & Liquid Oxygen (LOX)',
        ar: 'ميثان سائل مبرد فائق الكثافة (CH4) وأكسجين سائل (LOX)'
      },
      cycle: {
        en: 'Full-Flow Staged Combustion (FFSC)',
        ar: 'احتراق مرحلي كامل التدفق (FFSC)'
      },
      status: {
        en: 'Operational Workhorse (Propelling Starship orbital test flights)',
        ar: 'محرك العمليات التشغيلي (يدفع رحلات اختبارات طيران ستارشيب المدارية)'
      },
      firstFlight: {
        en: 'April 2023 (Starship Integrated Flight Test 1 - IFT-1)',
        ar: 'أبريل 2023 (رحلة ستارشيب الاختبارية المتكاملة الأولى IFT-1)'
      },
      costEstimateOrTarget: {
        en: 'Estimated ~$1,000,000 per engine (Achieved significant manufacturing automation)',
        ar: 'تقديري ~$1,000,000 للمحرك الواحد (بفضل أتمتة التصنيع الملحوظة)'
      }
    },
    architectureHighlights: {
      plumbing: {
        en: 'Consolidated into cast single-piece manifolds; replaced numerous bolted flanges with direct structural orbital welds.',
        ar: 'دمج الأنابيب في مجمعات مصبوبة من قطعة واحدة واستبدال عشرات الفلنجات المسننة بلحامات هيكلية مدارية.'
      },
      sensorsAndWiring: {
        en: 'Sensors reduced by over 50% to strictly flight-critical readings; wiring harnesses routed inside rigid stainless steel conduits.',
        ar: 'تقليص الحساسات بنسبة تجاوزت 50% للاقتصار على القراءات الحرجة للرحلة، وتمرير الأسلاك داخل قنوات صلبة مدرعة.'
      },
      coolingAndShielding: {
        en: 'Simplified base heat shield interface with improved regenerative throat passages capable of resisting 300 bar continuous thermal loads.',
        ar: 'تبسيط واجهة الدرع الحراري مع قنوات تبريد مطورة لعنق الفوهة لتحمل 300 بار من الضغط الحراري المستمر.'
      },
      productionCost: {
        en: 'Dropped to ~$1M per unit; assembly cycle compressed to under 48 hours in automated production cells.',
        ar: 'انخفضت التكلفة لتقارب مليون دولار للمحرك؛ وانضغطت دورة التجميع لأقل من 48 ساعة.'
      }
    }
  },
  raptor3: {
    id: 'raptor3',
    name: {
      en: 'Raptor 3',
      ar: 'رابتور 3 (Raptor 3)'
    },
    codeName: 'Raptor V3 / Monolithic Masterpiece',
    generation: {
      en: 'Third Generation (Monolithic Internalized Marvel)',
      ar: 'الجيل الثالث (أعجوبة الدمج الهيكلي الداخلي)'
    },
    era: '2024 – Present (Unveiled August 2024)',
    tagline: {
      en: 'The ultimate peeled engine: Zero external secondary plumbing, internal fluid passages, 280 tf test peak / 250 tf flight rating, and zero heat shield needed.',
      ar: 'المحرك المقشر الأقصى: صفر أنابيب ثانوية خارجية، قنوات موائع مدمجة بالداخل، ذروة 280 طن تجريبياً / 250 طن تشغيلياً، وبدون أي درع حراري.'
    },
    summary: {
      en: 'Unveiled in August 2024, Raptor 3 represents the complete realization of Elon Musk’s design philosophy: peeling away the external "Christmas Tree" until the engine looks like a seamless sculpture. All secondary fluid lines, purge circuits, and wiring channels are 3D-printed or cast directly inside the structural metal matrix. Demonstrated 280 tf (2.75 MN) at 350 bar on test stands in August 2024, with a targeted 250 tf (2.45 MN) operational flight rating for Starship V3 flights. Its regenerative skin eliminates the need for any base heat shielding.',
      ar: 'كشف عنه في أغسطس 2024، ويمثل رابتور 3 التجسيد الكامل لفلسفة إيلون ماسك: تقشير "شجرة عيد الميلاد" الخارجية حتى يتحول المحرك إلى منحوتة ناعمة. دُمجت كافة خطوط الموائع الثانوية، ومسارات التطهير، وقنوات الأسلاك مباشرة داخل المعدن عبر الطباعة ثلاثية الأبعاد وقوالب الصب. أثبت قوة 280 طن-قوة (2.75 ميغانيوتن) عند 350 بار في اختبارات منصة ماكغريغور (أغسطس 2024)، مع استهداف تصنيف تشغيلي للرحلات يبلغ 250 طن-قوة (2.45 ميغانيوتن). وبفضل تبريد غلافه داخلياً، استغنى تماماً عن أي درع حراري خارجي.'
    },
    keyInnovations: [
      {
        en: 'Zero exposed secondary plumbing: Purge, chill, and drain channels 3D-printed inside casing walls.',
        ar: 'صفر أنابيب ثانوية مكشوفة: قنوات التطهير والتبريد والتصريف مطبوعة ثلاثياً داخل جدران الغلاف المعدني.'
      },
      {
        en: 'Zero base heat shield required: Cold propellant circulating inside the jacket turns the engine body into its own heat shield.',
        ar: 'الاستغناء التام عن الدرع الحراري الخارجي: يدور الوقود البارد داخل القنوات الداخلية ليصبح جسم المحرك درعاً لنفسه.'
      },
      {
        en: 'World-record 350 bar test stand pressure (280 tf peak); targeted at ~330 bar and 250 tf for operational orbital flights.',
        ar: 'رقم قياسي عالمي بـ 350 بار على منصة الاختبار (280 طن ذروة)؛ ومستهدف عند ~330 بار و250 طن للرحلات التشغيلية.'
      },
      {
        en: 'Dry mass slashed to 1,525 kg (engine only) / 1,720 kg (engine plus vehicle-side commodities and mount hardware — not gimbal actuators alone), delivering a peak 183:1 TWR (~164:1 at the operational flight rating).',
        ar: 'انخفاض الوزن الجاف إلى 1,525 كغ (المحرك فقط) / 1,720 كغ (المحرك مضافاً إليه عتاد جانب المركبة وعتاد التثبيت — وليست مشغلات التوجيه الجيمبالي وحدها)، محققاً 183:1 نسبة دفع للوزن ذروة (~164:1 عند التصنيف التشغيلي).'
      }
    ],
    imagePath: '/src/assets/images/raptor_three_engine_1788644311047.jpg',
    specs: {
      thrustSeaLevel: {
        kN: 2746,
        tf: 280,
        lbf: 617290,
        testStandPeak: {
          tf: 280,
          kN: 2746,
          lbf: 617290,
          label: {
            en: 'Test Stand Record (August 2024 Peak)',
            ar: 'ذروة منصة الاختبار (أغسطس 2024)'
          }
        },
        operationalFlight: {
          tf: 250,
          kN: 2452,
          lbf: 551155,
          label: {
            en: 'Operational Flight Target (May 2026 Starship V3 Rating)',
            ar: 'الهدف التشغيلي للرحلات (تصنيف ستارشيب V3)'
          }
        }
      },
      thrustVacuum: {
        kN: 2991,
        tf: 305,
        lbf: 672400,
        testStandPeak: {
          tf: 305,
          kN: 2991,
          lbf: 672400,
          label: {
            en: 'Test Stand Peak Vacuum',
            ar: 'ذروة الفراغ التجريبية'
          }
        },
        operationalFlight: {
          tf: 275,
          kN: 2697,
          lbf: 606270,
          label: {
            en: 'Operational Flight Target Vacuum',
            ar: 'الهدف التشغيلي في الفراغ'
          }
        }
      },
      chamberPressure: {
        bar: 350,
        psi: 5076,
        testStandBar: 350,
        operationalBar: 330,
        note: {
          en: '350 bar test stand record (August 2024); ~330 bar operational flight target',
          ar: '350 بار رقم قياسي لمنصة الاختبار (أغسطس 2024)؛ ~330 بار الهدف التشغيلي للرحلات'
        }
      },
      engineMass: {
        kg: 1525,
        lbs: 3362,
        withVehicleInterfaceHardware: {
          kg: 1720,
          lbs: 3792,
          note: {
            en: 'Engine mass plus vehicle-side commodities, feed lines, and mount/interface hardware — not the gimbal actuators alone.',
            ar: 'كتلة المحرك مضافاً إليها عتاد الجانب المرتبط بالمركبة، وخطوط التغذية، وعتاد التثبيت والواجهة — وليست مشغّلات التوجيه الجيمبالي وحدها.'
          }
        }
      },
      thrustToWeight: 183,
      twrPeak: 183,
      twrOperational: 164,
      specificImpulseSL: 332,
      specificImpulseVac: 350,
      ispVacRVacTarget: 380,
      ispVacRVacTargetLabel: {
        en: 'Long-term Target (Estimated, not yet demonstrated in flight)',
        ar: 'هدف طويل الأمد (تقديري، لم يُثبت بعد في رحلة فعلية)'
      },
      exitDiameter: {
        meters: 1.3,
        feet: 4.26
      },
      height: {
        meters: 2.9,
        feet: 9.51
      },
      combinedTurbopumpPowerEstimated: {
        en: 'Estimated ~50,000+ HP combined across both turbopumps (~37 MW total)',
        ar: 'تقديري ~50,000+ حصان إجمالي للمضختين التوربينيتين معاً (~37 ميغاواط)'
      },
      propellant: {
        en: 'Deep-Cryogenic Sub-Cooled Liquid Methane (CH4) & Liquid Oxygen (LOX)',
        ar: 'ميثان سائل مبرد فائق الكثافة (CH4) وأكسجين سائل (LOX)'
      },
      cycle: {
        en: 'Full-Flow Staged Combustion (FFSC)',
        ar: 'احتراق مرحلي كامل التدفق (FFSC)'
      },
      status: {
        en: 'Active Testing & Starship V3 Flight Preparation',
        ar: 'قيد الاختبار المكثف والتجهيز لرحلات ستارشيب V3'
      },
      firstFlight: {
        en: 'Targeted for upcoming Starship Version 3 orbital missions',
        ar: 'مستهدف لرحلات ستارشيب الجيل الثالث (Starship V3) القادمة'
      },
      costEstimateOrTarget: {
        en: '$250k–$500k (Long-term Target Goal / هدف مستقبلي غير مؤكد، ليس تكلفة حالية مثبتة)',
        ar: '$250k–$500k (هدف مستقبلي طموح للإنتاج الكثيف، غير مؤكد حالياً)'
      }
    },
    architectureHighlights: {
      plumbing: {
        en: 'Non-existent externally: Secondary purge, chill, and recirculation conduits are additive-printed and cast directly within the thick powerhead casing.',
        ar: 'منعدمة تماماً من الخارج: قنوات التطهير والتبريد وتدوير السوائل الثانوية مطبوعة ثلاثياً ومصبوبة داخل جدران هيكل رأس المحرك.'
      },
      sensorsAndWiring: {
        en: 'Internalized micro-probes; cabling is concealed inside structural channels in the casing, interfacing via a single combined digital bus.',
        ar: 'حساسات دقيقة مدمجة؛ والأسلاك ممررة داخل قنوات هيكلية خفية تتصل عبر حافلة رقمية موحدة.'
      },
      coolingAndShielding: {
        en: 'The engine itself is the heat shield. Cold propellants circulate through internal regenerative passages in the outer shell, eliminating external protective blankets.',
        ar: 'المحرك بحد ذاته هو الدرع الحراري. يدور الوقود البارد داخل قنوات تجديدية مدمجة في الغلاف الخارجي، مما يلغي دروع وبطانيات الحماية الخارجية.'
      },
      productionCost: {
        en: 'Targeted at $250k–$500k at scale (future goal, not confirmed current production cost); assembly heavily automated via laser additive printing.',
        ar: 'مستهدف بين 250 إلى 500 ألف دولار للإنتاج الضخم (هدف مستقبلي غير مثبت حالياً)؛ مع أتمتة فائقة بالطباعة الإضافية.'
      }
    }
  }
};


export const COMPONENT_HOTSPOTS: ComponentHotspot[] = [
  {
    id: 'ox-preburner-pump',
    pinNumber: 1,
    x: 35,
    y: 18,
    flowCircuit: 'lox',
    title: {
      en: 'Oxygen Turbopump & Oxidizer-Rich Preburner',
      ar: 'المضخة التوربينية ومسخن الأكسجين الأولي فائق الأكسدة'
    },
    category: {
      en: 'Oxidizer Powerhead',
      ar: 'رأس طاقة المؤكسد'
    },
    functionSummary: {
      en: 'Powers the high-pressure liquid oxygen pump by burning all the LOX with a small amount of methane, spinning the turbine at an estimated ~30,000+ RPM to feed the main chamber (SpaceX has not published an official figure).',
      ar: 'يقوم بتدوير مضخة الأكسجين السائل فائق الضغط عن طريق حرق كل الأكسجين السائل مع كمية ضئيلة من الميثان، مدوراً التوربين بسرعة تقديرية تفوق 30,000 دورة/دقيقة لتغذية حجرة الاحتراق (رقم غير معلن رسمياً من سبيس إكس).'
    },
    technicalDetails: {
      en: 'Operates in a fiercely hostile oxygen-rich environment at cryogenic inlet temperatures transitioning instantly to high-temperature gas. Estimated shaft power on the order of ~20 MW (~27,000 HP) — SpaceX has not published exact turbopump power figures; independent estimates vary.',
      ar: 'يعمل في بيئة شديدة العدوانية غنية بالأكسجين الحارق عند درجات حرارة تنتقل فورياً من برودة السوائل الفائقة إلى غازات ملتهبة. القدرة التقديرية على المحور تقارب 20 ميغاواط (~27,000 حصان) — سبيس إكس لم تنشر رقماً رسمياً دقيقاً، والتقديرات المستقلة تتفاوت.'
    },
    materials: {
      en: 'SpaceX proprietary SX500 superalloy (nickel-based, custom-formulated to resist burning in hot, high-pressure gaseous oxygen).',
      ar: 'سبيكة SX500 الخارقة المسجلة باسم سبيس إكس (سبيكة نيكل فائقة المقاومة للاحتراق في الأكسجين الغازي الساخن عالي الضغط).'
    },
    evolution: {
      raptor1: {
        en: 'Exposed oxygen preburner with separate external flange connections, multiple burst disks, and external hydraulic lines.',
        ar: 'مسخن أكسجين أولي مكشوف مع وصلات شفة خارجية منفصلة وأقراص تمزق أمان وخطوط هيدروليكية خارجية.'
      },
      raptor2: {
        en: 'Redesigned impeller geometry, doubled shaft torque, and integrated bearing cooling directly into the casing.',
        ar: 'إعادة تصميم دافعة التوربين ومضاعفة عزم الدوران ودمج تبريد المحامل مباشرة في الغلاف.'
      },
      raptor3: {
        en: 'Completely concealed within the upper powerhead casting. Zero external flanges; purge, chill, and seal vents routed internally.',
        ar: 'مدمج ومخفي بالكامل داخل صب الجزء العلوي من رأس المحرك. بدون أي فلانشات خارجية وتمرير خطوط التطهير داخلياً.'
      }
    }
  },
  {
    id: 'fuel-preburner-pump',
    pinNumber: 2,
    x: 65,
    y: 18,
    flowCircuit: 'methane',
    title: {
      en: 'Methane Turbopump & Fuel-Rich Preburner',
      ar: 'المضخة التوربينية ومسخن الميثان الأولي فائق الوقود'
    },
    category: {
      en: 'Fuel Powerhead',
      ar: 'رأس طاقة الوقود'
    },
    functionSummary: {
      en: 'Drives the liquid methane turbopump by burning all the incoming methane with a tiny portion of oxygen, turning it into hot gaseous methane for the main injector.',
      ar: 'يدير مضخة الميثان السائل عن طريق حرق كامل الميثان القادم مع نسبة ضئيلة من الأكسجين، محولاً إياه إلى غاز ميثان ساخن يغذي حاقن الحجرة الرئيسية.'
    },
    technicalDetails: {
      en: 'Estimated to spin at ~40,000+ RPM (unconfirmed). Because it operates fuel-rich (excess methane), it avoids soot formation thanks to methane’s clean-burning chemistry compared to kerosene (RP-1). Estimated shaft power on the order of ~17 MW (~23,000 HP) — not an official figure.',
      ar: 'يُقدَّر دورانه بسرعة تفوق 40,000 دورة في الدقيقة (رقم غير مؤكد رسمياً). وبفضل العمل في بيئة غنية بالوقود والميثان النظيف، فإنه يتجنب تراكم السناج والكربون بخلاف وقود الكيروسين (RP-1)، بقدرة تقديرية على المحور تقارب 17 ميغاواط (~23,000 حصان) — وهو رقم غير رسمي.'
    },
    materials: {
      en: 'Monocrystalline Inconel superalloys and high-strength titanium impellers, designed for zero coking over 100+ reuses.',
      ar: 'سبائك إنكونيل أحادية البلورة ودافعات من التيتانيوم عالي الصلابة، مصممة لمنع أي ترسبات كربونية عبر أكثر من 100 عملية إعادة استخدام.'
    },
    evolution: {
      raptor1: {
        en: 'Had prominent fuel return bypass pipes and separate external igniter lines wrapping around the turbopump body.',
        ar: 'احتوى على أنابيب التفافية خارجية بارزة لإرجاع الوقود وخطوط إشعال خارجية ملفوفة حول جسم المضخة.'
      },
      raptor2: {
        en: 'Larger impeller and turbine disc, higher mass flow rate, eliminated 4 external bypass conduits.',
        ar: 'قرص توربين ودافعة أكبر بمعدل تدفق كتلي أعلى، وتم إلغاء 4 قنوات التفاف خارجية.'
      },
      raptor3: {
        en: 'Turbopump volute and preburner body cast seamlessly as a single contiguous structure into the engine top frame.',
        ar: 'صُب غلاف المضخة الحلزوني وجسم المسخن الأولي في كتلة هيكلية واحدة متصلة بأعلى إطار المحرك.'
      }
    }
  },
  {
    id: 'main-injector-chamber',
    pinNumber: 3,
    x: 50,
    y: 40,
    flowCircuit: 'combustion',
    title: {
      en: 'Main Injector Head & Combustion Chamber',
      ar: 'رأس الحاقن الرئيسي وحجرة الاحتراق المركزية'
    },
    category: {
      en: 'Combustion System',
      ar: 'منظومة الاحتراق'
    },
    functionSummary: {
      en: 'The heart of the engine where 100% gaseous oxygen and 100% gaseous methane mix and detonate at a world-record pressure of up to 350 bar (5,076 psi).',
      ar: 'قلب المحرك حيث يختلط 100% من غاز الأكسجين الساخن مع 100% من غاز الميثان الساخن في حالة غازية نقية، مشتعلين بضغط قياسي عالمي يصل إلى 350 بار.'
    },
    technicalDetails: {
      en: 'Because both propellants enter as hot gases (unlike Merlin or RS-25 where liquids are sprayed), combustion is near-instantaneous and reaches ~99% combustion efficiency. Operating temperature inside exceeds 3,300°C (6,000°F).',
      ar: 'نظراً لأن كلا الوقودين يدخلان في حالة غازية ساخنة (على عكس المحركات التقليدية التي ترش سوائل)، يكون الاحتراق فورياً وكاملاً بكفاءة ~99%، وتتجاوز درجة الحرارة في الداخل 3,300 درجة مئوية.'
    },
    materials: {
      en: 'Milled copper alloy liner with laser-welded outer jacket and high-conductivity electroformed nickel-chromium shell.',
      ar: 'بطانة داخلية من سبائك النحاس المشغولة آلياً مع قنوات تبريد مغلفة بقشرة ليزرية من النيكل والكروم عالي التوصيل.'
    },
    evolution: {
      raptor1: {
        en: 'Operated at 250 bar pressure. Had external sensor ports and heavy bolted flange joints between injector and chamber.',
        ar: 'عمل عند ضغط 250 بار مع منافذ حساسات خارجية وفلانشات مسننة ثقيلة بين الحاقن وحجرة الاحتراق.'
      },
      raptor2: {
        en: 'Pushed pressure to 300 bar with improved injector swirl elements; eliminated flange bolted seams using electron-beam welding.',
        ar: 'رفع الضغط إلى 300 بار مع تحسين دوامات الحواضن، واستبدال الفلانشات بلحام حزمة الإلكترونات.'
      },
      raptor3: {
        en: 'Reaches historic 350 bar chamber pressure. Complete internal regenerative jacket integration with zero external sensor taps.',
        ar: 'وصل إلى ضغط 350 بار القياسي تاريخياً، مع تكامل كامل لممرات التبريد الجدارية دون أي ثقوب لحساسات خارجية.'
      }
    }
  },
  {
    id: 'nozzle-regenerative',
    pinNumber: 4,
    x: 50,
    y: 72,
    flowCircuit: 'combustion',
    title: {
      en: 'Regeneratively Cooled Nozzle Bell',
      ar: 'جرس الفوهة ذو التبريد التجديدي'
    },
    category: {
      en: 'Expansion & Cooling',
      ar: 'التمدد والتبريد'
    },
    functionSummary: {
      en: 'Expands the hypersonic combustion exhaust to maximize thrust and velocity, while circulating cryogenic liquid methane through thousands of microscopic channels in the nozzle walls to keep the metal from melting.',
      ar: 'يقوم بتمديد الغازات الصاروخية الأسرع من الصوت لتوليد أقصى قوة دفع، بينما يدور الميثان السائل فائق البرودة عبر آلاف القنوات الدقيقة داخل جدران الفوهة لمنع انصهار المعدن.'
    },
    technicalDetails: {
      en: 'Area expansion ratio optimized for sea-level operation (ae/at ~40:1 for Sea Level variant; Vacuum variant uses massive carbon/niobium skirt extending to ~150:1). Exhaust velocity reaches ~3.3 km/second.',
      ar: 'نسبة تمدد الفوهة محسنة لمستوى سطح البحر (حوالي 40:1 لموديل الأرض؛ بينما يستخدم الموديل الفراغي امتداداً ضخماً بنسبة ~150:1). وتبلغ سرعة خروج العادم نحو 3.3 كم/ثانية.'
    },
    materials: {
      en: 'Brazed and 3D-printed regeneratively cooled high-strength stainless steel tubes and refractory alloy skirt.',
      ar: 'أنابيب فولاذية فائقة القوة مبردة تجديدياً باللحام بالنحاس والطباعة ثلاثية الأبعاد مع حافة من السبائك المقاومة للحرارة.'
    },
    evolution: {
      raptor1: {
        en: 'Visible brazed tube lines along outer bell with multiple external manifold feed rings and stiffener bands.',
        ar: 'أنابيب لحام خارجية مرئية على طول الفوهة مع حلقات توزيع علوية ودعامات دائرية لمقاومة التشوه.'
      },
      raptor2: {
        en: 'Refined throat curvature for reduced boundary layer heat loss; reduced stiffener rings and lower manufacturing cycle time.',
        ar: 'انحناء عنق فوهة مطور لتقليل الفواقد الحرارية، مع تقليص حلقات التدعيم وتسريع وقت التصنيع.'
      },
      raptor3: {
        en: 'Monolithic nozzle throat-to-skirt transition with variable wall thickness additive channels and internal structural ribs.',
        ar: 'انتقال سلس أحادي الكتلة من عنق الفوهة إلى الحافة مع قنوات تبريد داخلية متغيرة السماكة مطبوعة بتقنية الإضافة.'
      }
    }
  },
  {
    id: 'gimbal-actuators',
    pinNumber: 5,
    x: 25,
    y: 35,
    flowCircuit: 'structural',
    title: {
      en: 'Thrust Vector Control (TVC) Gimbal Actuators',
      ar: 'مشغلات التوجيه الجيمبالي (TVC) لناقل الدفع'
    },
    category: {
      en: 'Flight Guidance & Control',
      ar: 'التوجيه والتحكم في الطيران'
    },
    functionSummary: {
      en: 'Pivots the entire engine up to ±15 degrees along pitch and yaw axes to steer Starship and Super Heavy during ascent, flip maneuvers, and vertical landing.',
      ar: 'يقوم بإمالة وتوجيه المحرك بزاوية تصل إلى ±15 درجة على محاور الانعراج والانحدار لتوجيه ستارشيب والمعزز أثناء الصعود، ومناورة الشقلبة، والهبوط العمودي.'
    },
    technicalDetails: {
      en: 'Applies tens of thousands of Newtons of force at high slew rates (>20 deg/sec) to orient the 280-ton thrust vector with sub-millimeter precision.',
      ar: 'يطبق عشرات الآلاف من النيوتنات بقوة هائلة وسرعة استجابة فائقة (>20 درجة/ثانية) لتوجيه ناقل الدفع البالغ 280 طناً بدقة متناهية.'
    },
    materials: {
      en: 'Aircraft-grade hardened titanium struts, ceramic ball-screws, and high-voltage brushless DC electric servo drives.',
      ar: 'دعامات من التيتانيوم المقسى، وكرات لولبية سيراميكية، ومحركات مؤازرة كهربائية بدون فرش تعمل بجهد كهربائي مرتفع.'
    },
    evolution: {
      raptor1: {
        en: 'Hydraulic actuators powered by high-pressure fluid lines that were prone to leaks and required hydraulic reservoirs.',
        ar: 'مشغلات هيدروليكية تعمل بخطوط سوائل عالية الضغط كانت عرضة للتسريب وتطلبت خزانات هيدروليك معقدة.'
      },
      raptor2: {
        en: 'Transitioned to powerful electric linear actuators powered by Starship’s central high-voltage battery packs.',
        ar: 'الانتقال إلى مشغلات خطية كهربائية متطورة تعمل بحزم بطاريات الجهد العالي المركزية لمركبة ستارشيب.'
      },
      raptor3: {
        en: 'Actuators mounted directly to internal structural hardpoints inside the gimbal ring, shaving 195 kg off the installation mass.',
        ar: 'تثبيت المشغلات مباشرة في نقاط ارتكاز هيكلية مدمجة داخل حلقة الجيمبال، مما وفر 195 كغ من كتلة التركيب.'
      }
    }
  },
  {
    id: 'propellant-inlets',
    pinNumber: 6,
    x: 50,
    y: 6,
    flowCircuit: 'structural',
    title: {
      en: 'High-Pressure LOX & LCH4 Inlets & Gimbal Bearing',
      ar: 'مداخل الوقود فائقة الضغط ومحمل الجيمبال الكروي'
    },
    category: {
      en: 'Feed System & Mount',
      ar: 'نظام التغذية والتعليق'
    },
    functionSummary: {
      en: 'The top interface connecting the engine to the Starship thrust puck. Transfers the entire 280 tons of thrust into the vehicle while routing cryogenic propellants through flexible bellows.',
      ar: 'واجهة الربط العلوية التي تثبت المحرك في قرص الدفع لمركبة ستارشيب. تنقل كامل قوة الدفع البالغة 280 طناً لهيكل الصاروخ وتمرر السوائل الفائقة البرودة عبر وصلات متموجة مرنة.'
    },
    technicalDetails: {
      en: 'Propellant inlets feed liquid oxygen at -180°C (-292°F) and liquid methane at -160°C (-256°F) at flow rates exceeding 800 kg/sec per engine.',
      ar: 'تضخ المداخل الأكسجين السائل عند -180 درجة مئوية والميثان السائل عند -160 درجة مئوية بمعدل تدفق يفوق 800 كغ في الثانية للمحرك الواحد.'
    },
    materials: {
      en: 'Forged cryogenic stainless steel and multi-ply Inconel bellows flex joints.',
      ar: 'فولاذ مقاوم للصدأ مطروق لدرجات البرودة الفائقة مع وصلات تمدد مرنة متعددة الطبقات من الإنكونيل.'
    },
    evolution: {
      raptor1: {
        en: 'Large, exposed quick-disconnects with bulky bolt flanges, dual pneumatic purge couplers, and external insulation clamps.',
        ar: 'وصلات فصل سريع خارجية ضخمة ذات فلانشات وبراغي معقدة وموصلات تطهير نيوماتية ومشابك عزل بارزة.'
      },
      raptor2: {
        en: 'Compact standardized flange mount with integrated pre-valves and automated purge ports.',
        ar: 'قاعدة تثبيت موحدة مدمجة مع صمامات تمهيدية ومنافذ تطهير مؤتمتة.'
      },
      raptor3: {
        en: 'Direct drop-in thrust dome interface. Connects fluid, power, and high-speed data buses simultaneously upon bolting to vehicle.',
        ar: 'واجهة تثبيت مباشرة تنقر في قبة الدفع، وتربط خطوط الموائع والطاقة وبيانات التحكم فائقة السرعة فورياً وبشكل مدمج.'
      }
    }
  },
  {
    id: 'torch-igniters',
    pinNumber: 7,
    x: 48,
    y: 28,
    flowCircuit: 'combustion',
    title: {
      en: 'Ignition System & MCC Auto-Ignition Evolution',
      ar: 'منظومة الإشعال وتطور الاشتعال الذاتي للحجرة (MCC Auto-Ignition)'
    },
    category: {
      en: 'Ignition System',
      ar: 'منظومة الإشعال'
    },
    functionSummary: {
      en: 'Replaces chemical hypergolic fluids with reusable electric spark-torch ignition. Crucially: while Raptor 1 needed spark igniters on the preburners AND the main chamber (MCC), Raptor 2 completely deleted the MCC spark igniter by leveraging spontaneous gas-gas auto-ignition!',
      ar: 'يستبدل السوائل الكيميائية السامة بمشاعل كهربائية بلازمية قابلة لإعادة الإشعال. والأهم هندسياً: بينما احتاج رابتور 1 لمشعلات شرارة على المسبقات وحجرة الاحتراق الرئيسية (MCC) معاً، ألغى رابتور 2 مشعل الحجرة الرئيسية كلياً بالاعتماد على الاشتعال الذاتي الفوري للغازات الساخنة!'
    },
    technicalDetails: {
      en: 'Injects small streams of gaseous methane and oxygen across high-energy spark gaps in the preburners. Once hot preburner gases enter the 300+ bar chamber, the oxygen-rich and fuel-rich streams auto-ignite spontaneously upon mixing without needing a chamber spark.',
      ar: 'يحقن تيارات صغيرة من الميثان والأكسجين عبر فجوات شرارة عالية الطاقة في المسبقات الأولية. وبمجرد تدفق غازات المسبقات الساخنة نحو حجرة الضغط العالي (300+ بار)، تشتعل تيارات المؤكسد والوقود ذاتياً فور تلامسها دون الحاجة لأي شرارة في الحجرة.'
    },
    materials: {
      en: 'High-voltage silicon-nitride ceramic electrodes and refractory tungsten-rhenium tips.',
      ar: 'أقطاب سيراميكية عالية الجهد من نيتريد السيليكون مع رؤوس من سبائك التنغستن والرينيوم المقاومة للحرارة الفائقة.'
    },
    evolution: {
      raptor1: {
        en: 'Required separate spark torch igniters on BOTH preburners AND the main combustion chamber head, with external high-voltage coils, external gas lines, and exciter electronics.',
        ar: 'تطلب مشعلات شرارة منفصلة على كلا المسخنين الأوليين وعلى رأس حجرة الاحتراق الرئيسية (MCC)، مع ملفات إشعال عالية الجهد وأنابيب غازات خارجية.'
      },
      raptor2: {
        en: 'MCC spark torch igniter completely DELETED! The hot pre-burned oxygen-rich gas and hot fuel-rich gas auto-ignite spontaneously upon mixing in the 300-bar chamber.',
        ar: 'أُلغي مشعل شرارة حجرة الاحتراق الرئيسية (MCC) تماماً! فالغازات الساخنة الناتجة عن مسبقة الأكسجين ومسبقة الوقود تشتعل ذاتياً وفورياً بمجرد التقائها في الحجرة.'
      },
      raptor3: {
        en: 'Ignition hardware for preburners is 100% enclosed within the monolithic upper casting; no external wiring, exciter coils, or fluid lines visible. Exact internal ignition architecture is proprietary. Whether the main chamber still relies on gas-gas auto-ignition (as in Raptor 2) or a different internal method is not officially confirmed by SpaceX.',
        ar: 'منظومة إشعال المسبقات مدمجة 100% داخل قوالب رأس المحرك دون أي أسلاك أو ملفات أو أنابيب خارجية؛ وبنية الإشعال الدقيقة داخلية وغير معلنة رسمياً. أما استمرار الاعتماد على الاشتعال الذاتي للغازات في الحجرة الرئيسية (كما في رابتور 2) أو استخدام آلية داخلية مختلفة، فهذا أمر غير مؤكد رسمياً من سبيس إكس.'
      }
    }
  },
  {
    id: 'fluid-routing-architecture',
    pinNumber: 8,
    x: 72,
    y: 36,
    flowCircuit: 'structural',
    title: {
      en: 'Fluid Routing & Manifold Architecture (Evolution Core)',
      ar: 'بنية نقل وتوزيع الموائع (جوهر التطور الهندسي)'
    },
    category: {
      en: 'Structural & Fluid Integration',
      ar: 'التكامل الهيكلي والمائعي'
    },
    functionSummary: {
      en: 'Demonstrates the defining visual and engineering leap between Raptor 1, 2, and 3: the transformation from hundreds of external pipes to a sleek, monolithic printed casting.',
      ar: 'يجسد القفزة البصرية والهندسية الفاصلة بين رابتور 1 و2 و3: التحول من مئات الأنابيب الخارجية المعقدة إلى هيكل مسبوك ومطبوع ثلاثياً فائق النعومة وخالٍ من التعقيد الخارجي.'
    },
    technicalDetails: {
      en: 'Raptor 1 had ~3,000 discrete parts and external lines. Raptor 3 eliminated virtually all external tubing by routing secondary chill, spin-start, and telemetry passages inside the metal matrix.',
      ar: 'احتوى رابتور 1 على قرابة 3000 جزء وخط خارجي منفصل. بينما ألغى رابتور 3 كل الأنابيب الخارجية عبر توجيه خطوط التبريد والبدء والحساسات داخل مصفوفة المعدن ذاتها.'
    },
    materials: {
      en: 'Advanced metal additive laser powder bed fusion (LPBF) and precision investment casting alloys.',
      ar: 'تقنيات الطباعة ثلاثية الأبعاد المتقدمة بالليزر لمساحيق المعادن (LPBF) وسبائك الصب الدقيق.'
    },
    evolution: {
      raptor1: {
        en: 'A dense jungle of tubing, sensors, braided hoses, and wiring harnesses requiring individual thermal shielding.',
        ar: 'غابة كثيفة من الأنابيب والحساسات والخراطيم المجدولة وأحزمة الأسلاك التي تطلبت عوازل حرارية فردية.'
      },
      raptor2: {
        en: 'Consolidated manifolds, cast pump volutes, and roughly 50% fewer total parts and joints.',
        ar: 'مجمعات مدمجة، وحلزونات مضخات مصبوبة، وتقليص قطع المحرك ووصلاته بنسبة تقارب 50%.'
      },
      raptor3: {
        en: 'Sculptural monolithic shell. Zero external small tubes or sensors. The engine requires NO individual heat shield in the vehicle bay.',
        ar: 'هيكل منحوت ناعم خالٍ تماماً من الأنابيب الصغيرة أو الحساسات الخارجية، ولا يحتاج المحرك لأي درع حراري إضافي.'
      }
    }
  }
];

export const VANISHED_PARTS_DATA: DeletedPartItem[] = [
  {
    id: 'secondary-fluid-lines',
    name: {
      en: 'Secondary Fuel, Purge & Chilldown Lines',
      ar: 'خطوط الوقود الثانوية وتطهير الغاز وتبريد المحامل'
    },
    category: {
      en: 'External Plumbing',
      ar: 'الأنابيب الخارجية'
    },
    elonKeypoint: {
      en: '"Secondary fuel lines and purge lines... were all eliminated or cast directly into the engine body."',
      ar: '"خطوط الوقود الثانوية وخطوط غازات التطهير... حُذفت جميعها أو صُبّت مباشرة داخل جسم المحرك."'
    },
    whatItDid: {
      en: 'Carried small bleed flows of cryogenic propellant, helium/nitrogen purge gases for pre-ignition clearing of explosive pockets, and bearing chilldown fluid throughout the powerhead.',
      ar: 'كانت تنقل تدفقات دقيقة من الوقود فائق البرودة، وغازات تطهير الهيليوم والنيتروجين لتنظيف التجاويف من الغازات المتفجرة قبل الإشعال، وتبريد محامل التوربينات.'
    },
    whyOnRaptor1: {
      en: 'On the early prototype, engineers needed separate, modular tubing for every subsystem, purge valve, manual drain port, and pressure relief tap to debug startups safely on the test stand.',
      ar: 'في النموذج الأولي، احتاج المهندسون لأنابيب منفصلة ونمطية لكل نظام فرعي، وصمام تطهير، ومنفذ تصريف يدوي، ومحبس تفريغ ضغط لمعايرة الإشعال الآمن على منصة الاختبار.'
    },
    howEliminatedInR2R3: {
      en: 'In Raptor 2, purge circuits were partially consolidated into cast manifolds. In Raptor 3, all secondary fluid and purge passages were 3D-printed directly inside the walls of the powerhead and nozzle casing. Zero external purge tubes remain.',
      ar: 'في رابتور 2، دُمجت دوائر التطهير جزئياً في مجمعات مصبوبة. وفي رابتور 3، طُبعت كافة مسارات السوائل الثانوية والتطهير مباشرة داخل جدران رأس المحرك وجرس الفوهة. ولم يبقَ أي أنبوب تطهير خارجي.'
    },
    statusByVersion: {
      raptor1: {
        state: 'prominent',
        label: {
          en: 'Fully Exposed (~60+ Lines)',
          ar: 'مكشوفة بالكامل (~60+ أنبوباً)'
        },
        detail: {
          en: 'Tangled web of stainless braided and rigid steel tubing wrapping around both turbopumps and chamber.',
          ar: 'شبكة متشابكة من الأنابيب الفولاذية المجدولة والصلبة تلتف حول المضختين وحجرة الاحتراق.'
        }
      },
      raptor2: {
        state: 'reduced',
        label: {
          en: 'Partially Consolidated (~25 Lines)',
          ar: 'مدمجة جزئياً (~25 أنبوباً)'
        },
        detail: {
          en: 'Cast intake manifolds replaced dozens of flexible jumper lines; major bypass loops deleted.',
          ar: 'حلت مجمعات السحب المصبوبة محل عشرات الوصلات المرنة؛ وحُذفت حلقات الالتفاف الرئيسية.'
        }
      },
      raptor3: {
        state: 'eliminated',
        label: {
          en: '100% Internalized (0 Lines)',
          ar: 'مدمجة داخلياً 100% (صفر أنابيب)'
        },
        detail: {
          en: 'Laser powder bed printed channels inside structural casting. Exterior is seamless, smooth metal.',
          ar: 'قنوات مطبوعة بالليزر داخل مصفوفة المعدن الهيكلية؛ والمظهر الخارجي معدن أملس تماماً.'
        }
      }
    },
    diagramPosition: { x: 68, y: 32 }
  },
  {
    id: 'wiring-harnesses',
    name: {
      en: 'Power & Sensor Wiring Harnesses',
      ar: 'شبكات أحزمة كابلات الطاقة وأسلاك الحساسات'
    },
    category: {
      en: 'Electrical & Cabling',
      ar: 'الكهرباء والتوصيلات'
    },
    elonKeypoint: {
      en: '"Power and sensor wiring harnesses... eliminated external wire bundles wrapped around the engine."',
      ar: '"أحزمة أسلاك الطاقة والحساسات... أزلنا حزم الأسلاك الخارجية الملفوفة حول المحرك."'
    },
    whatItDid: {
      en: 'Supplied high-voltage electric power to valve servos and spark exciter coils, while relaying analog telemetry signals from hundreds of pressure, temperature, and strain sensors.',
      ar: 'كانت تزود محركات الصمامات وملفات شعلات الإشعال بالكهرباء عالية الجهد، وتنقل إشارات القياس التناظرية من مئات حساسات الضغط والحرارة والإجهاد.'
    },
    whyOnRaptor1: {
      en: 'Every sensor and valve on Raptor 1 required its own dedicated wire pair routed back to external junction boxes, requiring thick bundles wrapped in reflective gold/amber Kapton tape.',
      ar: 'تطلب كل حساس وصمام في رابتور 1 زوجاً مخصصاً من الأسلاك المتجهة لصناديق التجميع الخارجية، مما استدعى حزماً سميكة مغلفة بأشرطة الكابتون الذهبية العاكسة.'
    },
    howEliminatedInR2R3: {
      en: 'Raptor 2 cut wire count by over half and encased remaining cables in armored stainless conduits. Raptor 3 eliminated external wire bundles altogether, routing digital multiplexed buses through hollow ribs inside the engine shell.',
      ar: 'قلص رابتور 2 عدد الأسلاك بأكثر من النصف وغلف ما تبقى في قنوات فولاذية مدرعة. أما رابتور 3 فألغى حزم الأسلاك الخارجية كلياً، ممرراً حافلات رقمية مدمجة عبر أضلاع هيكلية مجوفة داخل غلاف المحرك.'
    },
    statusByVersion: {
      raptor1: {
        state: 'prominent',
        label: {
          en: 'Thick Kapton Bundles',
          ar: 'حزم كابتون سميكة ومكشوفة'
        },
        detail: {
          en: 'Wrapped in gold Kapton foil like a Christmas tree; vulnerable to vibration damage and bay heat.',
          ar: 'ملفوفة برقائق الكابتون الذهبية كشجرة عيد الميلاد؛ وكانت عرضة للاهتزازات والحرارة.'
        }
      },
      raptor2: {
        state: 'reduced',
        label: {
          en: 'Armored Conduits',
          ar: 'قنوات مدرعة موجهة'
        },
        detail: {
          en: 'Cables consolidated into rigid stainless conduits clamped securely to the turbopump frames.',
          ar: 'كابلات مدمجة داخل قنوات فولاذية صلبة مثبتة بإحكام في هياكل المضخات التوربينية.'
        }
      },
      raptor3: {
        state: 'eliminated',
        label: {
          en: 'Concealed Internal Bus',
          ar: 'حافلة رقمية داخلية خفية'
        },
        detail: {
          en: 'Zero loose wiring visible. All internal electronics communicate via single sealed interface connector.',
          ar: 'لا توجد أي أسلاك سائبة؛ وتتواصل الإلكترونيات الداخلية عبر موصل واجهة مدمج ومحكم الإغلاق.'
        }
      }
    },
    diagramPosition: { x: 30, y: 38 }
  },
  {
    id: 'sensors-telemetry',
    name: {
      en: 'Diagnostic Sensor Suite & Test Probes',
      ar: 'حزمة الحساسات التشخيصية ومجسات الاختبار'
    },
    category: {
      en: 'Instrumentation',
      ar: 'أجهزة القياس والاستشعار'
    },
    elonKeypoint: {
      en: '"Sensors... we deleted hundreds of sensors. If a sensor didn’t save an engine, it was deleted."',
      ar: '"الحساسات... حذفنا مئات الحساسات. إذا لم يكن الحساس ينقذ المحرك من كارثة، فقد حُذف فوراً."'
    },
    whatItDid: {
      en: 'Sampled transient pressures, cryogenic temperatures, turbine shaft rotational speeds, and structural vibration harmonics at kilohertz frequencies across dozens of engine stations.',
      ar: 'كانت تقيس تغيرات الضغط العابرة، والبرودة الفائقة، وسرعة دوران محاور التوربينات، والاهتزازات الهيكلية بترددات كيلوهيرتزية عبر عشرات المحطات على المحرك.'
    },
    whyOnRaptor1: {
      en: 'Because full-flow staged combustion had never flown before, SpaceX needed exhaustive data to validate computer simulations and detect combustion resonance before catastrophic RUDs occurred.',
      ar: 'لأن دورة الاحتراق بالتدفق الكامل لم تحلق قط من قبل، احتاجت سبيس إكس لبيانات هائلة لتأكيد المحاكاة الحاسوبية وتفادي الانفجارات الكارثية أثناء التطوير.'
    },
    howEliminatedInR2R3: {
      en: 'After thousands of seconds of test stand firings and successful flights, SpaceX deleted non-essential test sensors (~75% reduction). In Raptor 3, remaining essential sensors are miniaturized probes embedded directly within printed cavities.',
      ar: 'بعد آلاف الثواني من التشغيل على منصات الاختبار والرحلات الناجحة، ألغت سبيس إكس الحساسات غير الضرورية (تقليص ~75%). وفي رابتور 3، أصبحت الحساسات المتبقية مجسات دقيقة مدمجة داخل التجاويف المطبوعة.'
    },
    statusByVersion: {
      raptor1: {
        state: 'prominent',
        label: {
          en: '400+ Test Sensors',
          ar: 'أكثر من 400 حساس اختباري'
        },
        detail: {
          en: 'Probes drilled into every pipe junction, pump volute, and preburner dome with individual taps.',
          ar: 'مجسات مثبتة في كل وصلة أنبوب، وحلزونة مضخة، وقبة مسخن أولي عبر ثقوب خارجية مستقلة.'
        }
      },
      raptor2: {
        state: 'reduced',
        label: {
          en: '~150 Critical Sensors',
          ar: '~150 حساساً حرجاً فقط'
        },
        detail: {
          en: 'Strictly limited to redline flight-abort parameters and thrust control loop feedback.',
          ar: 'اقتصرت على معايير الأمان الحرجة لإلغاء الرحلة وتغذية حلقة التحكم في الدفع.'
        }
      },
      raptor3: {
        state: 'eliminated',
        label: {
          en: 'Embedded Micro-Probes',
          ar: 'مجسات دقيقة مدمجة داخلياً'
        },
        detail: {
          en: 'No external sensor bosses or tap fittings. Remaining probes sit inside the printed cooling channels.',
          ar: 'لا توجد أي نتوءات أو ثقوب لحساسات خارجية؛ وتستقر المجسات داخل قنوات التبريد المطبوعة.'
        }
      }
    },
    diagramPosition: { x: 50, y: 22 }
  },
  {
    id: 'avionics-boxes',
    name: {
      en: 'External Avionics & Valve Controller Enclosures',
      ar: 'صناديق التحكم بالأفيونيكس ومحركات الصمامات'
    },
    category: {
      en: 'Control Hardware',
      ar: 'أجهزة التحكم والمعالجة'
    },
    elonKeypoint: {
      en: '"Avionics boxes... moved controller logic and eliminated bulky external electrical enclosures."',
      ar: '"صناديق الأفيونيكس... نقلنا منطق التحكم وتخلصنا من الصناديق الكهربائية الخارجية الضخمة."'
    },
    whatItDid: {
      en: 'Housed localized microcontrollers, signal conditioning circuitry, and high-current motor drivers that commanded electromechanical propellant valves and spark timing.',
      ar: 'كانت تحتوي على المتحكمات الدقيقة، ودوائر معالجة الإشارات، ومحركات الصمامات الكهروميكانيكية التي تتحكم بتدفق الوقود وتوقيت الشرارة.'
    },
    whyOnRaptor1: {
      en: 'Separate modular aluminum enclosures were bolted around the powerhead periphery on rubber vibration dampers to isolate delicate electronics from 150 dB acoustic roar.',
      ar: 'ثُبتت صناديق ألمنيوم منفصلة حول محيط رأس المحرك على مخمدات مطاطية لحماية الدوائر الحساسة من الضجيج الصوتي الهائل (150 ديسيبل).'
    },
    howEliminatedInR2R3: {
      en: 'Raptor 2 combined multiple controller cards into fewer housings. Raptor 3 eliminated exterior boxes completely: computing was relocated to the vehicle thrust structure, while localized gate drivers were integrated into sealed, fuel-cooled powerhead cavities.',
      ar: 'دمج رابتور 2 بطاقات التحكم في صناديق أقل. أما رابتور 3 فألغى الصناديق الخارجية تماماً: نُقلت المعالجة لهيكل قبة المركبة، بينما دُمجت دوائر تشغيل الصمامات داخل تجاويف مبردة بالوقود داخل رأس المحرك.'
    },
    statusByVersion: {
      raptor1: {
        state: 'prominent',
        label: {
          en: 'Multiple External Boxes',
          ar: 'عدة صناديق خارجية معلقة'
        },
        detail: {
          en: 'Heavy aluminum junction boxes bolted to structural brackets around the turbopump periphery.',
          ar: 'صناديق ألمنيوم ثقيلة مثبتة بحوامل معدنية حول محيط المضخات التوربينية.'
        }
      },
      raptor2: {
        state: 'reduced',
        label: {
          en: 'Consolidated Enclosures',
          ar: 'صناديق مدمجة ومبسطة'
        },
        detail: {
          en: 'Single integrated power and valve controller box with sealed aerospace circular connectors.',
          ar: 'صندوق تحكم موحد في الطاقة والصمامات مزود بموصلات دائرية فضائية محكمة.'
        }
      },
      raptor3: {
        state: 'eliminated',
        label: {
          en: 'Zero External Boxes',
          ar: 'صفر صناديق خارجية'
        },
        detail: {
          en: 'No exterior enclosures. Drive electronics are direct-printed and cooled inside the engine mount collar.',
          ar: 'لا توجد أي حاويات خارجية؛ وإلكترونيات القيادة مدمجة ومبردة داخل طوق تثبيت المحرك.'
        }
      }
    },
    diagramPosition: { x: 20, y: 24 }
  },
  {
    id: 'mcc-igniters',
    name: {
      en: 'Main Combustion Chamber (MCC) Spark Torch Igniter',
      ar: 'مشعل شرارة حجرة الاحتراق الرئيسية (MCC Spark Igniter)'
    },
    category: {
      en: 'Ignition Hardware',
      ar: 'مكونات الإشعال'
    },
    elonKeypoint: {
      en: '"The main combustion chamber spark igniter was completely removed. Hot gas from preburners auto-ignites upon contact."',
      ar: '"مشعل شرارة غرفة الاحتراق الرئيسية أُزيل بالكامل. الغاز الساخن من المسخنين الأوليين يشتعل ذاتياً بمجرد التلامس."'
    },
    whatItDid: {
      en: 'Fired an energetic spark-fed plasma flame directly into the main combustion chamber at T-0 to ensure positive ignition of propellants without a pressure surge (hard start).',
      ar: 'كان يطلق شعلة بلازما كهربائية قوية داخل غرفة الاحتراق الرئيسية في لحظة الإقلاع (T-0) لضمان إشعال الوقود بأمان ومنع الانفجار نتيجة تراكم الغازات.'
    },
    whyOnRaptor1: {
      en: 'Engineers required absolute certainty that the 250-bar chamber would ignite reliably, so redundant spark plugs and dedicated gas-feed tubes were installed directly on the chamber dome.',
      ar: 'احتاج المهندسون ليقين مطلق بأن الغرفة ستشتعل بموثوقية تحت ضغط 250 بار، فرُكبت شمعات شرارة احتياطية وأنابيب تغذية بالغاز على قبة الغرفة.'
    },
    howEliminatedInR2R3: {
      en: 'In Raptor 2, SpaceX completely ELIMINATED the main chamber igniter! Because both preburners ignite first, the converging hot gaseous oxygen and hot gaseous methane streams reach temperatures and pressures where they AUTO-IGNITE spontaneously upon mixing! Raptor 3 retains this auto-ignition with fully internalized preburner starters.',
      ar: 'في رابتور 2، حذفت سبيس إكس مشعل الغرفة الرئيسية بالكامل! لأن المسخنين الأوليين يشتعلان أولاً، فعندما يلتقي تيار الأكسجين الغازي الساخن مع تيار الميثان الغازي الساخن في الحجرة، يشتعلان ذاتياً وتلقائياً دون أي حاجة لشرارة! ويواصل رابتور 3 هذا الاشتعال الذاتي مع دمج مشعلات المسخنات داخلياً.'
    },
    statusByVersion: {
      raptor1: {
        state: 'prominent',
        label: {
          en: 'Active MCC Spark Torch',
          ar: 'مشعل شرارة MCC خارجي نشط'
        },
        detail: {
          en: 'Dedicated spark torch unit bolted to the injector head with separate gas tubes and ignition coil.',
          ar: 'وحدة مشعل شرارة مخصصة مثبتة في رأس الحاقن مع أنابيب غاز وملف إشعال مستقل.'
        }
      },
      raptor2: {
        state: 'eliminated',
        label: {
          en: 'DELETED: Auto-Ignition',
          ar: 'محذوف كلياً: اشتعال ذاتي'
        },
        detail: {
          en: 'Igniter hardware removed from chamber. Gas-gas mixture spontaneously auto-ignites upon entry.',
          ar: 'أزيلت معدات المشعل من الحجرة؛ ويشتعل خليط الغازات الساخنة ذاتياً بمجرد تدفقه.'
        }
      },
      raptor3: {
        state: 'eliminated',
        label: {
          en: 'Proprietary — Unconfirmed',
          ar: 'مدمج داخلياً — غير مؤكد رسمياً'
        },
        detail: {
          en: 'Preburner start hardware is 100% internalized. Main chamber ignition is presumed to remain auto-ignition as in Raptor 2, but SpaceX has not officially confirmed this for Raptor 3.',
          ar: 'معدات بدء المسخنات مدمجة داخلياً 100%. ويُفترض استمرار الاشتعال الذاتي للحجرة الرئيسية كما في رابتور 2، لكن سبيس إكس لم تؤكد ذلك رسمياً لرابتور 3.'
        }
      }
    },
    diagramPosition: { x: 50, y: 36 }
  },
  {
    id: 'bolted-flanges',
    name: {
      en: 'Bolted Flanges & Mechanical Crush Gaskets',
      ar: 'الفلنجات المثبتة ببراغي ووصلات السدادات الميكانيكية'
    },
    category: {
      en: 'Mechanical Joints',
      ar: 'المفاصل الميكانيكية'
    },
    elonKeypoint: {
      en: '"Bolted flanges were replaced with welds... every flange is a leak path and adds heavy mass."',
      ar: '"استُبدلت الفلنجات المسننة باللحامات... فكل فلنجة تمثل مسار تسريب محتمل وتضيف وزناً ثقيلاً."'
    },
    whatItDid: {
      en: 'Coupled separate pipe sections, pump volutes, valves, and manifold domes using circular bolted flange rings and metallic C-ring crush seals.',
      ar: 'كانت تربط مقاطع الأنابيب المنفصلة، وحلزونات المضخات، والصمامات، وقباب المجمعات باستخدام حلقات فلنجات مسننة وسدادات معدنية مانعة للتسريب.'
    },
    whyOnRaptor1: {
      en: 'Fast modular swaps: During early engine testing in McGregor, technicians constantly unbolted and swapped turbines, impellers, or valves after test runs without cutting metal.',
      ar: 'لسهولة التبديل النمطي السريع: أثناء اختبارات ماكغريغور الأولى، كان الفنيون يفككون التوربينات أو الصمامات بعد كل تجربة لفحصها دون الحاجة لقطع المعدن.'
    },
    howEliminatedInR2R3: {
      en: 'Bolted flanges are heavy and notorious leak vectors under severe acoustic vibration. Raptor 2 replaced dozens of flanges with automated orbital and electron-beam welds. Raptor 3 used laser powder bed fusion (LPBF) additive manufacturing to grow manifolds, runners, and valve housings as a single monolithic metal unit.',
      ar: 'الفلنجات ثقيلة وعرضة للتسريب تحت الاهتزازات الصوتية العنيفة. استبدل رابتور 2 عشرات الفلنجات بلحامات روبوتية مدارية وبالحزم الإلكترونية. واستخدم رابتور 3 الطباعة ثلاثية الأبعاد بالليزر لصناعة المجمعات وقنوات الصمامات كوحدة معدنية واحدة مصبوبة دون براغي.'
    },
    statusByVersion: {
      raptor1: {
        state: 'prominent',
        label: {
          en: '100+ Bolted Flange Rings',
          ar: 'أكثر من 100 حلقة فلنجة ببراغي'
        },
        detail: {
          en: 'Dozens of high-strength bolt circles with metallic crush gaskets throughout the powerhead.',
          ar: 'عشرات الدوائر المثبتة بمسامير فولاذية وسدادات ضغط ميكانيكية عبر كامل رأس المحرك.'
        }
      },
      raptor2: {
        state: 'reduced',
        label: {
          en: 'Robotic Welds (~60% Fewer)',
          ar: 'لحامات روبوتية (تقليص ~60%)'
        },
        detail: {
          en: 'Major joint flanges cut off and replaced by automated orbital friction and electron welds.',
          ar: 'استُغني عن فلنجات التوصيل الكبرى واستُبدلت بلحامات احتكاكية وشعاعية مؤتمتة.'
        }
      },
      raptor3: {
        state: 'eliminated',
        label: {
          en: 'Monolithic Printed Body',
          ar: 'هيكل موحد مطبوع بالكامل'
        },
        detail: {
          en: 'No bolt circles on fluid conduits. Powerhead is grown as unified continuous metal matrices.',
          ar: 'انعدام حلقات البراغي على خطوط السوائل؛ ورأس المحرك مطبوع كمصفوفة معدنية متصلة موحدة.'
        }
      }
    },
    diagramPosition: { x: 62, y: 15 }
  },
  {
    id: 'base-heat-shield',
    name: {
      en: 'Conical Base Heat Shield & Thermal Blankets',
      ar: 'الدرع الحراري المخروطي وبطانيات العزل الخارجية'
    },
    category: {
      en: 'Thermal Protection System',
      ar: 'نظام الحماية الحرارية'
    },
    elonKeypoint: {
      en: '"The engine itself is the heat shield. No separate thermal protection needed for Raptor 3."',
      ar: '"المحرك بحد ذاته هو الدرع الحراري. لا حاجة لأي درع حماية حرارية منفصل لرابتور 3."'
    },
    whatItDid: {
      en: 'Protected the delicate external spiderweb of sensors, thin purge lines, wiring harnesses, and actuators from the furnace-like radiant heat of 33 engines firing together and reentry plasma.',
      ar: 'كان يحمي شبكة الحساسات الهشة والأنابيب الدقيقة وأحزمة الأسلاك والمشغلات من الحرارة الإشعاعية الملتهبة المنبعثة من 33 محركاً تعمل معاً، وحرارة بلازما العودة للغلاف الجوي.'
    },
    whyOnRaptor1: {
      en: 'Without heavy conical metal shields and silicone-coated ceramic blankets around each powerhead, the external tubing and Kapton-wrapped wires would melt or catch fire within seconds.',
      ar: 'بدون دروع معدنية مخروطية ثقيلة وبطانيات سيراميكية معزولة حول كل رأس محرك، كانت الأنابيب والأسلاك الخارجية ستنصهر أو تشتعل في ثوانٍ معدودة.'
    },
    howEliminatedInR2R3: {
      en: 'Raptor 1 and 2 required heavy base heat shields and vehicle bay fire-suppression purge gas. In Raptor 3, Elon designed the engine skin itself to be the heat shield: cold propellants continuously circulate through integrated cooling channels inside the outer casing, withstanding radiant heat without any external blankets or shields.',
      ar: 'تطلب رابتور 1 و2 دروعاً حرارية ثقيلة وغازات إخماد حرائق في قاع الصاروخ. وفي رابتور 3، صمم إيلون ماسك جلد المحرك ليكون هو الدرع الحراري: يدور الوقود البارد باستمرار داخل قنوات تبريد مدمجة في الغلاف الخارجي، متحملاً الإشعاع الحراري الشديد دون أي بطانيات أو دروع منفصلة.'
    },
    statusByVersion: {
      raptor1: {
        state: 'prominent',
        label: {
          en: 'Heavy Conical Base Shield',
          ar: 'درع مخروطي ثقيل وبطانيات'
        },
        detail: {
          en: 'Required thick composite and metal conical heat shields plus individual ceramic blankets.',
          ar: 'تطلب دروعاً مخروطية مركبة ثقيلة وبطانيات سيراميكية فردية لتغطية رأس المحرك.'
        }
      },
      raptor2: {
        state: 'reduced',
        label: {
          en: 'Flat Bay Heat Shield',
          ar: 'درع قاع موحد ومبسط'
        },
        detail: {
          en: 'Simplified shield interface in the booster aft bay, but still required thermal boundary seals.',
          ar: 'واجهة درع مبسطة في حجرة المعزز السفلية، لكنها ظلت تتطلب سدادات عزل حراري.'
        }
      },
      raptor3: {
        state: 'eliminated',
        label: {
          en: 'ZERO Shield Needed',
          ar: 'صفر درع حراري إضافي'
        },
        detail: {
          en: 'The cooled structural metal skin resists all engine bay radiation. Engine operates completely naked.',
          ar: 'الغلاف المعدني المبرد ذاتياً يقاوم كافة الإشعاعات؛ والمحرك يعمل مجرداً تماماً دون أي درع.'
        }
      }
    },
    diagramPosition: { x: 50, y: 55 }
  }
];


export const FULL_FLOW_EXPLANATION: {
  title: LocalizedString;
  subtitle: LocalizedString;
  summary: LocalizedString;
  whyRevolutionary: {
    title: LocalizedString;
    description: LocalizedString;
  }[];
} = {
  title: {
    en: 'The Full-Flow Staged Combustion Cycle',
    ar: 'دورة الاحتراق المرحلي بالتدفق الكامل (FFSC)'
  },
  subtitle: {
    en: 'The Holy Grail of Rocket Propulsion',
    ar: 'الكأس المقدسة في عالم هندسة الدفع الصاروخي'
  },
  summary: {
    en: 'For over 60 years, the Full-Flow Staged Combustion (FFSC) cycle was considered theoretically superior but practically impossible due to extreme metallurgical and turbine challenges. SpaceX’s Raptor is the first FFSC engine in human history to leave the test stand and power orbital rocket flights.',
    ar: 'لأكثر من 60 عاماً، عُدت دورة الاحتراق المرحلي بالتدفق الكامل متفوقة نظرياً لكنها مستحيلة التطبيق عملياً بسبب الإجهادات المعدنية القصوى على التوربينات. ومحرك رابتور من سبيس إكس هو أول محرك في تاريخ البشرية يكسر هذا الحاجز ويحلق في رحلات صاروخية فعلية.'
  },
  whyRevolutionary: [
    {
      title: {
        en: '100% Propellant Utilization (Zero Wasted Mass)',
        ar: 'استغلال 100% من الوقود (انعدام الهدر الكتلي)'
      },
      description: {
        en: 'In open-cycle engines like Merlin (Falcon 9), turbine exhaust gas is dumped out a small side pipe without providing thrust. In Raptor, all fuel and all oxidizer pass through the preburners and enter the main chamber to create thrust.',
        ar: 'في المحركات ذات الدورة المفتوحة كـ Merlin (صاروخ فالكون 9)، يتم تفريغ غازات تشغيل التوربين جانباً دون توليد دفع. أما في رابتور، فإن 100% من الوقود والمؤكسد يدخل حجرة الاحتراق لإنتاج الدفع.'
      }
    },
    {
      title: {
        en: 'Both Propellants Enter as 100% Gas',
        ar: 'دخول كلا الوقودين في حالة غازية نقية'
      },
      description: {
        en: 'Traditional engines spray liquid propellants that must vaporize before combusting, creating combustion instabilities. Raptor pre-burns all LOX into hot oxygen gas and all CH4 into hot methane gas, leading to ultra-fast, smooth, high-efficiency burning.',
        ar: 'ترش المحركات التقليدية سوائل تحتاج وقتاً للتبخر قبل الاشتعال مما يسبب اهتزازات خطيرة. أما رابتور فيبخر كامل الأكسجين وكامل الميثان مسبقاً، مما يحقق احتراقاً غازياً سلساً وفائق السرعة والكفاءة.'
      }
    },
    {
      title: {
        en: 'Lower Turbine Temperatures at Extreme Chamber Pressures',
        ar: 'حرارة توربينات أقل مع ضغط حجرة أسطوري'
      },
      description: {
        en: 'Because 100% of the mass flows through the turbines rather than a small fraction, the turbines do not need to run white-hot to generate tens of thousands of horsepower. This allows chamber pressures of 350 bar while extending engine reusability.',
        ar: 'نظراً لمرور كامل التدفق الكتلي عبر التوربينات وليس جزءاً ضئيلاً فقط، فإن التوربينات لا تحتاج للعمل عند درجات حرارة انصهار حارقة لتوليد عشرات الآلاف من الأحصنة، مما يمكن من بلوغ ضغط 350 بار مع الحفاظ على طول عمر المحرك.'
      }
    },
    {
      title: {
        en: 'No Complex Inter-Propellant Dynamic Seals',
        ar: 'الاستغناء عن سدادات العزل الميكانيكية المعقدة'
      },
      description: {
        en: 'Engines like the Space Shuttle RS-25 had a single shaft or shared manifolds risking catastrophic fires if oxygen leaked into fuel. Raptor isolates the oxidizer turbopump completely from the fuel turbopump.',
        ar: 'كانت محركات مثل RS-25 لمكوك الفضاء تعتمد على محاور مشتركة تخاطر بحرائق كارثية عند تسرب الأكسجين إلى الوقود. رابتور يفصل مضخة الأكسجين تماماً وبشكل مستقل عن مضخة الميثان.'
      }
    }
  ]
};

export const UI_TRANSLATIONS = {
  appName: {
    en: 'SpaceX Raptor Explorer',
    ar: 'مستكشف محركات سبيس إكس رابتور'
  },
  tagline: {
    en: 'Interactive Component Diagrams & Technical Evolution (Raptor 1, 2, 3)',
    ar: 'المخططات التفاعلية والتطور الهندسي (رابتور 1، 2، 3)'
  },
  engineSelector: {
    en: 'Select Engine Version',
    ar: 'اختر إصدار المحرك'
  },
  compareMode: {
    en: 'Compare All 3 Versions',
    ar: 'مقارنة الإصدارات الثلاثة'
  },
  diagramMode: {
    en: 'Interactive Blueprint',
    ar: 'المخطط الهندسي التفاعلي'
  },
  photoMode: {
    en: 'Aerospace Render',
    ar: 'النموذج البصري عالي الدقة'
  },
  componentBreakdown: {
    en: 'Component Deep Dive',
    ar: 'التحليل التفصيلي للمكون'
  },
  pinpointInstruction: {
    en: 'Click any numbered hotspot pin on the diagram to inspect component function and version differences.',
    ar: 'انقر على أي نقطة مرقمة على المخطط لمعاينة وظيفة المكون والفروقات بين الإصدارات.'
  },
  specifications: {
    en: 'Technical Specifications',
    ar: 'المواصفات التقنية'
  },
  evolutionHighlights: {
    en: 'Architectural Evolution',
    ar: 'التطور المعماري والهيكلي'
  },
  thrustSeaLevel: {
    en: 'Sea-Level Thrust',
    ar: 'الدفع عند مستوى سطح البحر'
  },
  thrustVac: {
    en: 'Vacuum Thrust',
    ar: 'الدفع في الفراغ'
  },
  chamberPressure: {
    en: 'Chamber Pressure',
    ar: 'ضغط حجرة الاحتراق'
  },
  dryMass: {
    en: 'Engine Dry Mass',
    ar: 'الوزن الجاف للمحرك'
  },
  twr: {
    en: 'Thrust-to-Weight (TWR)',
    ar: 'نسبة الدفع إلى الوزن'
  },
  ispSeaLevel: {
    en: 'Specific Impulse (SL)',
    ar: 'النبض النوعي (سطح البحر)'
  },
  ispVac: {
    en: 'Specific Impulse (Vac)',
    ar: 'النبض النوعي (الفراغ)'
  },
  cycle: {
    en: 'Engine Cycle',
    ar: 'دورة عمل المحرك'
  },
  propellant: {
    en: 'Propellant Mixture',
    ar: 'خليط الوقود والمؤكسد'
  },
  status: {
    en: 'Operational Status',
    ar: 'الحالة التشغيلية'
  },
  firstFlight: {
    en: 'Flight Debut',
    ar: 'أول تحليق فعلي'
  },
  plumbingTitle: {
    en: 'Plumbing & Manifolds',
    ar: 'الأنابيب والمجمعات'
  },
  sensorsTitle: {
    en: 'Sensors & Harnessing',
    ar: 'الحساسات وشبكات الأسلاك'
  },
  shieldingTitle: {
    en: 'Cooling & Shielding',
    ar: 'التبريد والحماية الحرارية'
  },
  costTitle: {
    en: 'Manufacturing Cost',
    ar: 'تكلفة التصنيع'
  },
  unitMetric: {
    en: 'Metric (kN / bar / kg)',
    ar: 'متري (كيلونيوتن / بار / كغ)'
  },
  unitImperial: {
    en: 'Imperial (lbf / psi / lbs)',
    ar: 'إمبراطوري (باوند-قوة / رطل)'
  },
  activeInCurrentView: {
    en: 'Inspecting Component',
    ar: 'المكون قيد المعاينة'
  },
  filterByCircuit: {
    en: 'Filter Components',
    ar: 'تصفية المكونات'
  },
  allCircuits: {
    en: 'All Components',
    ar: 'كافة المكونات'
  },
  oxCircuit: {
    en: 'Oxidizer Circuit (LOX)',
    ar: 'مسار المؤكسد (الأكسجين)'
  },
  fuelCircuit: {
    en: 'Fuel Circuit (CH4)',
    ar: 'مسار الوقود (الميثان)'
  },
  combustionCircuit: {
    en: 'Combustion & Chamber',
    ar: 'الاحتراق والغرفة'
  },
  structuralCircuit: {
    en: 'Structure & Controls',
    ar: 'الهيكل والتحكم'
  },
  howVersionsDiffer: {
    en: 'Evolution Across Raptor 1 → 2 → 3',
    ar: 'تطور هذا المكون عبر رابتور 1 ← 2 ← 3'
  },
  materialsHeading: {
    en: 'Materials & Metallurgy',
    ar: 'المعادن والمواد المستخدمة'
  },
  operatingCondHeading: {
    en: 'Operating Principles & Physics',
    ar: 'مبادئ التشغيل والفيزياء'
  },
  vanishedPartsTab: {
    en: 'The "Deleted Parts" Layer (Yishan vs. Elon)',
    ar: 'طبقة "القطع التي حُذفت" (حوار ييشان وإيلون)'
  },
  vanishedPartsSubtitle: {
    en: 'How SpaceX stripped down the "Christmas Tree" of Raptor 1 to the monolithic skin of Raptor 3',
    ar: 'كيف قشرت سبيس إكس "شجرة عيد الميلاد" في رابتور 1 وصولاً إلى جلد رابتور 3 الموحد'
  },
  toggleDeletedLayer: {
    en: 'Deleted Parts Overlay',
    ar: 'طبقة الأجزاء المحذوفة'
  },
  showDeletedPartsOnly: {
    en: 'Highlight Removed Subsystems',
    ar: 'إبراز الأنظمة الفرعية المحذوفة'
  },
  whatItDid: {
    en: 'Subsystem Role & Function',
    ar: 'وظيفة ودور النظام الفرعي'
  },
  whyOnRaptor1: {
    en: 'Why It Was Necessary on Raptor 1',
    ar: 'لماذا كان ضرورياً في رابتور 1'
  },
  howEliminated: {
    en: 'How It Was Eliminated / Cast into R2 & R3',
    ar: 'كيف حُذف أو دُمج صباً في رابتور 2 و3'
  },
  elonDirectQuote: {
    en: 'Elon Musk Direct Breakdown',
    ar: 'نص إيلون ماسك المباشر'
  },
  statusProminent: {
    en: 'Active & Exposed',
    ar: 'مكشوف ومرئي بكثافة'
  },
  statusReduced: {
    en: 'Partially Eliminated',
    ar: 'مقلص ومدمج جزئياً'
  },
  statusEliminated: {
    en: '100% Deleted / Cast In',
    ar: 'محذوف بالكامل / مدمج صباً'
  },
  filterDeletedParts: {
    en: 'Select Vanished Subsystem',
    ar: 'اختر المكون المحذوف'
  },
  allDeletedParts: {
    en: 'All 7 Eliminated Systems',
    ar: 'كافة الأنظمة الـ 7 المحذوفة'
  }
};
