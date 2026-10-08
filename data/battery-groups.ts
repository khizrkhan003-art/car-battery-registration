import { BatteryGroupInfo } from '@/types'

export interface EnhancedBatteryProduct {
  id: string
  name: string
  brand: string
  tier: 'budget' | 'premium' | 'agm'
  groupSize: string
  ah: number
  cca: number
  warrantyYears: number
  technology: 'Conventional' | 'EFB' | 'AGM'
  features: string[]
  recommendedFor: string
  retailers: {
    name: string
    logo: string
    priceGbp: number
    inStock: boolean
    deliveryTime: string
    fittingAvailable: boolean
    fittingCostGbp?: number
    url: string
    badge?: string
  }[]
}

export const batteryGroups: (BatteryGroupInfo & {
  typeCode: string
  voltage: number
  typicalAh: string
  typicalCCA: string
  terminalType: string
  terminalLayout: string
  holddown: string
  products: EnhancedBatteryProduct[]
})[] = [
  {
    slug: '096',
    groupSize: '096',
    typeCode: '096 (LN3 / H6 / DIN 74)',
    alternateNames: ['096', 'Type 096', 'LN3', 'H6', 'DIN 74'],
    bciGroup: '48 / H6',
    dinCode: '574 012 068',
    enCode: 'LN3',
    voltage: 12,
    typicalAh: '70Ah - 77Ah',
    typicalCCA: '680A - 780A',
    terminalType: 'Standard DIN T1 Post (19.5mm / 17.9mm)',
    terminalLayout: 'Layout 0 (Right Hand Positive)',
    holddown: 'B13 Flange',
    dimensions: {
      length: 278,
      width: 175,
      height: 190
    },
    commonVehicles: [
      'Volkswagen Golf 1.4/1.6/2.0 TDI',
      'Audi A3, A4, A6',
      'BMW 1 Series, 3 Series (E90/F30)',
      'Ford Focus 2.0 TDCi, Mondeo',
      'Nissan Qashqai 1.5/1.6 dCi',
      'Skoda Octavia, Superb',
      'Vauxhall Insignia, Astra Diesel'
    ],
    description: 'The Type 096 battery is the single most common car battery size fitted to UK vehicles, particularly modern turbo-petrol and diesel family hatchbacks, saloons, and compact SUVs.',
    technology: 'Conventional',
    products: [
      {
        id: 'lion-096',
        name: 'Lion 096 Car Battery (Lead Acid)',
        brand: 'Lion',
        tier: 'budget',
        groupSize: '096',
        ah: 70,
        cca: 640,
        warrantyYears: 3,
        technology: 'Conventional',
        features: ['Maintenance-free design', 'Anti-spill sealed lid', 'Great value replacement for non-stop-start vehicles'],
        recommendedFor: 'Best for standard non-stop-start vehicles looking for an affordable, reliable replacement.',
        retailers: [
          {
            name: 'Euro Car Parts',
            logo: 'ECP',
            priceGbp: 74.99,
            inStock: true,
            deliveryTime: 'Same day Click & Collect',
            fittingAvailable: false,
            url: 'https://www.eurocarparts.com/search/096-lion?utm_source=autobatteryfinder&utm_medium=affiliate'
          },
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 69.95,
            inStock: true,
            deliveryTime: 'Next working day delivery',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/type-096/?utm_source=autobatteryfinder&utm_medium=affiliate',
            badge: 'Lowest Price'
          }
        ]
      },
      {
        id: 'bosch-s4-096',
        name: 'Bosch S4 008 096 Car Battery',
        brand: 'Bosch',
        tier: 'premium',
        groupSize: '096',
        ah: 74,
        cca: 680,
        warrantyYears: 4,
        technology: 'Conventional',
        features: ['Patented PowerFrame® grid technology', '15% higher cold start performance', 'Extended service life in British winters'],
        recommendedFor: 'The gold standard OEM quality battery for dependable daily starting.',
        retailers: [
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 109.00,
            inStock: true,
            deliveryTime: 'Collect in store in 1 hour',
            fittingAvailable: true,
            fittingCostGbp: 15.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/bosch-s4-096-car-battery.html?utm_source=autobatteryfinder',
            badge: 'Store Fitting Available'
          },
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 87.95,
            inStock: true,
            deliveryTime: 'Next working day (Tracked DPD)',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/bosch/s4008/?utm_source=autobatteryfinder',
            badge: 'Best Value'
          },
          {
            name: 'Amazon UK',
            logo: 'AMAZON',
            priceGbp: 92.40,
            inStock: true,
            deliveryTime: 'Free Prime One-Day',
            fittingAvailable: false,
            url: 'https://www.amazon.co.uk/dp/B002ZTSDE4?tag=ukcarbatteries-21'
          }
        ]
      },
      {
        id: 'yuasa-ybx5096',
        name: 'Yuasa YBX5096 Silver High Performance',
        brand: 'Yuasa',
        tier: 'premium',
        groupSize: '096',
        ah: 80,
        cca: 760,
        warrantyYears: 5,
        technology: 'Conventional',
        features: ['Up to 50,000 engine starts', 'Maximum cold-crank amp output', '5-year manufacturer guarantee', 'OE supplier to major car brands'],
        recommendedFor: 'Vehicles with high electrical loads (heated seats, dashcams, sound systems).',
        retailers: [
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 124.00,
            inStock: true,
            deliveryTime: 'Collect today',
            fittingAvailable: true,
            fittingCostGbp: 15.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/yuasa-ybx5096-car-battery.html?utm_source=autobatteryfinder'
          },
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 98.95,
            inStock: true,
            deliveryTime: 'Next day courier',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/yuasa/ybx5096/?utm_source=autobatteryfinder',
            badge: 'Editor Pick'
          }
        ]
      }
    ]
  },
  {
    slug: '096agm',
    groupSize: '096AGM',
    typeCode: '096 AGM (Stop-Start / LN3 AGM)',
    alternateNames: ['096AGM', 'Type 096 AGM', 'LN3 AGM', 'H6 AGM', '096 Start Stop'],
    bciGroup: '48 / H6 AGM',
    dinCode: '570 901 076',
    enCode: 'LN3-AGM',
    voltage: 12,
    typicalAh: '70Ah',
    typicalCCA: '760A',
    terminalType: 'Standard DIN T1 Post',
    terminalLayout: 'Layout 0 (Right Hand Positive)',
    holddown: 'B13 Flange',
    dimensions: {
      length: 278,
      width: 175,
      height: 190
    },
    commonVehicles: [
      'Volkswagen Golf Mk7 / Mk8 1.5 TSI / 2.0 TDI (with Stop-Start)',
      'Audi A3 / A4 / Q3 (with Stop-Start & Brake Energy Regeneration)',
      'BMW 1 Series (F20), 3 Series (F30)',
      'Mercedes-Benz A-Class (W176/W177), CLA, GLA',
      'Skoda Octavia Mk3 / Mk4 Stop-Start',
      'Seat Leon Mk3 / Mk4 Stop-Start',
      'Volvo V40 / XC40 Stop-Start'
    ],
    description: 'The 096 AGM is the UK standard Absorbent Glass Mat battery for modern vehicles equipped with automatic Stop-Start technology and regenerative braking systems. It provides 3x the cyclic life of standard batteries.',
    technology: 'AGM',
    products: [
      {
        id: 'varta-silver-agm-096',
        name: 'Varta Silver Dynamic AGM 096 (A7)',
        brand: 'Varta',
        tier: 'agm',
        groupSize: '096AGM',
        ah: 70,
        cca: 760,
        warrantyYears: 5,
        technology: 'AGM',
        features: ['Original Equipment (OE) in 8 out of 10 new European cars', '3x cyclic life compared to conventional batteries', 'Engineered in Germany for advanced Start-Stop with regenerative braking'],
        recommendedFor: 'OEM standard replacement for German and European vehicles with Stop-Start.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 129.95,
            inStock: true,
            deliveryTime: 'Next working day tracked',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/varta/a7-096agm/?utm_source=autobatteryfinder',
            badge: 'Best Seller'
          },
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 169.00,
            inStock: true,
            deliveryTime: 'Reserve & Collect in 1hr',
            fittingAvailable: true,
            fittingCostGbp: 25.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/halfords-advanced-096-start-stop-agm-battery.html?utm_source=autobatteryfinder',
            badge: 'Fitted While You Wait'
          },
          {
            name: 'Euro Car Parts',
            logo: 'ECP',
            priceGbp: 149.99,
            inStock: true,
            deliveryTime: 'Click & collect today',
            fittingAvailable: false,
            url: 'https://www.eurocarparts.com/search/096-agm?utm_source=autobatteryfinder'
          }
        ]
      },
      {
        id: 'yuasa-ybx9096',
        name: 'Yuasa YBX9096 AGM Stop-Start Battery',
        brand: 'Yuasa',
        tier: 'agm',
        groupSize: '096AGM',
        ah: 70,
        cca: 760,
        warrantyYears: 5,
        technology: 'AGM',
        features: ['Tested to 360,000 engine starts', 'Next-generation carbon additive for faster recharge acceptance', 'Maximum safety with sealed VRLA construction'],
        recommendedFor: 'Heavy city stop-and-go driving with continuous start-stop active.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 134.95,
            inStock: true,
            deliveryTime: 'Next day DPD delivery',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/yuasa/ybx9096/?utm_source=autobatteryfinder'
          },
          {
            name: 'Amazon UK',
            logo: 'AMAZON',
            priceGbp: 142.50,
            inStock: true,
            deliveryTime: 'Free Next-Day Prime',
            fittingAvailable: false,
            url: 'https://www.amazon.co.uk/dp/B07F2G4X11?tag=ukcarbatteries-21'
          }
        ]
      },
      {
        id: 'bosch-s5-a08',
        name: 'Bosch S5 A08 AGM Stop-Start Car Battery',
        brand: 'Bosch',
        tier: 'agm',
        groupSize: '096AGM',
        ah: 70,
        cca: 760,
        warrantyYears: 5,
        technology: 'AGM',
        features: ['Constant power even during short trips and traffic jams', 'High deep-cycle resilience', '100% leak-proof and tilt-proof'],
        recommendedFor: 'Maximum reliability for prestige modern family vehicles.',
        retailers: [
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 174.00,
            inStock: true,
            deliveryTime: 'Click & Collect',
            fittingAvailable: true,
            fittingCostGbp: 25.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/bosch-s5-a08-096-agm.html?utm_source=autobatteryfinder'
          },
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 139.95,
            inStock: true,
            deliveryTime: 'Next day dispatch',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/bosch/s5a08/?utm_source=autobatteryfinder',
            badge: 'Top Rated'
          }
        ]
      }
    ]
  },
  {
    slug: '027',
    groupSize: '027',
    typeCode: '027 (LN2 / H5 / DIN 60)',
    alternateNames: ['027', 'Type 027', 'LN2', 'H5', 'DIN 60'],
    bciGroup: '47 / H5',
    dinCode: '560 408 054',
    enCode: 'LN2',
    voltage: 12,
    typicalAh: '60Ah - 64Ah',
    typicalCCA: '540A - 640A',
    terminalType: 'Standard DIN T1 Post',
    terminalLayout: 'Layout 0 (Right Hand Positive)',
    holddown: 'B13 Flange',
    dimensions: {
      length: 242,
      width: 175,
      height: 190
    },
    commonVehicles: [
      'Ford Focus 1.0 / 1.6 EcoBoost (non-stop-start)',
      'Volkswagen Polo 1.2 / 1.4',
      'Vauxhall Astra 1.4 / 1.6 petrol',
      'Renault Clio, Megane',
      'Peugeot 208, 308',
      'Fiat 500, Punto',
      'Seat Ibiza 1.2 / 1.4 TSI'
    ],
    description: 'The Type 027 battery is standard fitment on thousands of UK hatchbacks and compact petrol cars. Measuring 242mm in length, it is slightly shorter than the 096.',
    technology: 'Conventional',
    products: [
      {
        id: 'bosch-s4-027',
        name: 'Bosch S4 005 027 Car Battery',
        brand: 'Bosch',
        tier: 'premium',
        groupSize: '027',
        ah: 60,
        cca: 540,
        warrantyYears: 4,
        technology: 'Conventional',
        features: ['PowerFrame® grid technology', 'Maintenance free', 'Corrosion resistant casing'],
        recommendedFor: 'Reliable all-weather starting for everyday hatchbacks.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 72.95,
            inStock: true,
            deliveryTime: 'Next day delivery',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/bosch/s4005/?utm_source=autobatteryfinder',
            badge: 'Top Value'
          },
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 98.00,
            inStock: true,
            deliveryTime: 'Collect in 1hr',
            fittingAvailable: true,
            fittingCostGbp: 15.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/halfords-advanced-027-car-battery.html?utm_source=autobatteryfinder'
          }
        ]
      },
      {
        id: 'yuasa-ybx5027',
        name: 'Yuasa YBX5027 Silver High Performance Battery',
        brand: 'Yuasa',
        tier: 'premium',
        groupSize: '027',
        ah: 65,
        cca: 640,
        warrantyYears: 5,
        technology: 'Conventional',
        features: ['5-year warranty', 'Extra high cold cranking power', 'Up to 50,000 engine starts'],
        recommendedFor: 'Drivers needing extra reserve power and cold-winter reliability.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 82.95,
            inStock: true,
            deliveryTime: 'Next day delivery',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/yuasa/ybx5027/?utm_source=autobatteryfinder'
          },
          {
            name: 'Euro Car Parts',
            logo: 'ECP',
            priceGbp: 89.99,
            inStock: true,
            deliveryTime: 'Same day collection',
            fittingAvailable: false,
            url: 'https://www.eurocarparts.com/search/027-yuasa?utm_source=autobatteryfinder'
          }
        ]
      }
    ]
  },
  {
    slug: '027agm',
    groupSize: '027AGM',
    typeCode: '027 AGM (Stop-Start / LN2 AGM)',
    alternateNames: ['027AGM', 'Type 027 AGM', 'LN2 AGM', 'H5 AGM', '027 Start Stop'],
    bciGroup: '47 / H5 AGM',
    dinCode: '560 901 068',
    enCode: 'LN2-AGM',
    voltage: 12,
    typicalAh: '60Ah',
    typicalCCA: '680A',
    terminalType: 'Standard DIN T1 Post',
    terminalLayout: 'Layout 0 (Right Hand Positive)',
    holddown: 'B13 Flange',
    dimensions: {
      length: 242,
      width: 175,
      height: 190
    },
    commonVehicles: [
      'Volkswagen Polo 1.0 TSI Stop-Start',
      'Ford Fiesta 1.0 EcoBoost (Mk8 Stop-Start models)',
      'Mini Cooper / One (F56 Stop-Start)',
      'Audi A1 1.0 / 1.4 TFSI Stop-Start',
      'Skoda Fabia 1.0 TSI Stop-Start',
      'Vauxhall Corsa 1.2 Turbo Stop-Start'
    ],
    description: 'Compact AGM battery engineered specifically for modern superminis and hatchbacks fitted with Stop-Start systems and micro-hybrid electrical technology.',
    technology: 'AGM',
    products: [
      {
        id: 'varta-silver-agm-027',
        name: 'Varta Silver Dynamic AGM 027 (D52)',
        brand: 'Varta',
        tier: 'agm',
        groupSize: '027AGM',
        ah: 60,
        cca: 680,
        warrantyYears: 5,
        technology: 'AGM',
        features: ['OE fitment on Mini and VW Group cars', 'Unmatched cyclic endurance', 'Spill-proof AGM matrix'],
        recommendedFor: 'The premier choice for stop-start hatchbacks.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 114.95,
            inStock: true,
            deliveryTime: 'Next day delivery',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/varta/d52-027agm/?utm_source=autobatteryfinder',
            badge: 'Top Pick'
          },
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 154.00,
            inStock: true,
            deliveryTime: 'Click & Collect',
            fittingAvailable: true,
            fittingCostGbp: 25.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/halfords-advanced-027-start-stop-agm-battery.html?utm_source=autobatteryfinder'
          }
        ]
      }
    ]
  },
  {
    slug: '063',
    groupSize: '063',
    typeCode: '063 (Small Petrol Hatchback)',
    alternateNames: ['063', 'Type 063', 'LB1', 'DIN 44'],
    bciGroup: 'B24 / Compact',
    dinCode: '544 402 044',
    enCode: 'LB1',
    voltage: 12,
    typicalAh: '44Ah - 50Ah',
    typicalCCA: '360A - 440A',
    terminalType: 'Standard DIN T1 Post',
    terminalLayout: 'Layout 0 (Right Hand Positive)',
    holddown: 'B13 Flange',
    dimensions: {
      length: 207,
      width: 175,
      height: 175
    },
    commonVehicles: [
      'Ford Fiesta Mk6 1.25 / 1.4 petrol',
      'Vauxhall Corsa D / E 1.2 / 1.4 (non-stop-start)',
      'Fiat 500 1.2 petrol',
      'Renault Clio 1.2 16V',
      'Peugeot 206 / 207 petrol',
      'Nissan Micra K12'
    ],
    description: 'The classic British budget hatchback battery. Compact and light with 175mm low-height profile, standard on naturally aspirated superminis.',
    technology: 'Conventional',
    products: [
      {
        id: 'bosch-s4-063',
        name: 'Bosch S4 001 063 Car Battery',
        brand: 'Bosch',
        tier: 'premium',
        groupSize: '063',
        ah: 44,
        cca: 440,
        warrantyYears: 4,
        technology: 'Conventional',
        features: ['Maintenance-free design', 'Optimal cold starting', 'Robust vibration protection'],
        recommendedFor: 'Perfect replacement for everyday small city cars.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 57.95,
            inStock: true,
            deliveryTime: 'Next day tracked',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/bosch/s4001/?utm_source=autobatteryfinder',
            badge: 'Great Value'
          },
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 82.00,
            inStock: true,
            deliveryTime: 'Collect today',
            fittingAvailable: true,
            fittingCostGbp: 15.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/halfords-advanced-063-car-battery.html?utm_source=autobatteryfinder'
          }
        ]
      }
    ]
  },
  {
    slug: '075',
    groupSize: '075',
    typeCode: '075 (Low Profile Ford / Vauxhall)',
    alternateNames: ['075', 'Type 075', 'LB2', 'DIN 60 Low'],
    bciGroup: '47 Low',
    dinCode: '560 409 054',
    enCode: 'LB2',
    voltage: 12,
    typicalAh: '60Ah',
    typicalCCA: '540A - 600A',
    terminalType: 'Standard DIN T1 Post',
    terminalLayout: 'Layout 0 (Right Hand Positive)',
    holddown: 'B13 Flange',
    dimensions: {
      length: 242,
      width: 175,
      height: 175
    },
    commonVehicles: [
      'Ford Focus Mk2 / Mk3 1.6 / 2.0 petrol & diesel',
      'Ford Fiesta Mk7 1.0 EcoBoost (standard)',
      'Vauxhall Astra J 1.4 / 1.6',
      'Vauxhall Zafira Tourer',
      'Ford Mondeo Mk4 2.0 petrol'
    ],
    description: 'The 075 is a specialized low-profile battery (175mm height compared to standard 190mm) required by Ford and Vauxhall models where engine bay clearance is tight.',
    technology: 'Conventional',
    products: [
      {
        id: 'yuasa-ybx5075',
        name: 'Yuasa YBX5075 Silver High Performance Battery',
        brand: 'Yuasa',
        tier: 'premium',
        groupSize: '075',
        ah: 60,
        cca: 600,
        warrantyYears: 5,
        technology: 'Conventional',
        features: ['Low profile 175mm height', '50,000 engine starts', '5-year warranty'],
        recommendedFor: 'Ford and Vauxhall vehicles requiring 175mm low height battery.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 79.95,
            inStock: true,
            deliveryTime: 'Next day delivery',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/yuasa/ybx5075/?utm_source=autobatteryfinder',
            badge: 'Popular Ford Fit'
          },
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 105.00,
            inStock: true,
            deliveryTime: 'Collect in 1hr',
            fittingAvailable: true,
            fittingCostGbp: 15.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/halfords-advanced-075-car-battery.html?utm_source=autobatteryfinder'
          }
        ]
      }
    ]
  },
  {
    slug: '019',
    groupSize: '019',
    typeCode: '019 (Large Saloon & 4x4 / LN5)',
    alternateNames: ['019', 'Type 019', 'LN5', 'H8', 'DIN 95-100'],
    bciGroup: '49 / H8',
    dinCode: '600 402 083',
    enCode: 'LN5',
    voltage: 12,
    typicalAh: '95Ah - 100Ah',
    typicalCCA: '800A - 900A',
    terminalType: 'Standard DIN T1 Post',
    terminalLayout: 'Layout 0 (Right Hand Positive)',
    holddown: 'B13 Flange',
    dimensions: {
      length: 353,
      width: 175,
      height: 190
    },
    commonVehicles: [
      'BMW 5 Series, 7 Series, X5, X6',
      'Range Rover, Land Rover Discovery 3 / 4 / 5',
      'Audi A6, A8, Q7 (3.0 TDI)',
      'Mercedes-Benz E-Class, S-Class, GLE',
      'Jaguar XF, XJ, F-Pace',
      'Porsche Cayenne, Macan'
    ],
    description: 'Heavyweight battery for executive saloons, luxury SUVs, and large turbodiesels. Measuring 353mm with massive cranking capacity for large multi-cylinder engines.',
    technology: 'Conventional',
    products: [
      {
        id: 'bosch-s5-019',
        name: 'Bosch S5 013 019 Heavy Duty Car Battery',
        brand: 'Bosch',
        tier: 'premium',
        groupSize: '019',
        ah: 100,
        cca: 830,
        warrantyYears: 5,
        technology: 'Conventional',
        features: ['Massive starting power for 3.0L+ diesels', 'PowerFrame® grid', '5-year warranty'],
        recommendedFor: 'Large diesel luxury cars without stop-start.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 119.95,
            inStock: true,
            deliveryTime: 'Next day courier',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/bosch/s5013/?utm_source=autobatteryfinder',
            badge: 'Heavy Duty'
          },
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 159.00,
            inStock: true,
            deliveryTime: 'Collect today',
            fittingAvailable: true,
            fittingCostGbp: 20.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/halfords-advanced-019-car-battery.html?utm_source=autobatteryfinder'
          }
        ]
      }
    ]
  },
  {
    slug: '019agm',
    groupSize: '019AGM',
    typeCode: '019 AGM (Luxury SUV & Stop-Start / LN5 AGM)',
    alternateNames: ['019AGM', 'Type 019 AGM', 'LN5 AGM', 'H8 AGM'],
    bciGroup: '49 / H8 AGM',
    dinCode: '595 901 085',
    enCode: 'LN5-AGM',
    voltage: 12,
    typicalAh: '95Ah - 105Ah',
    typicalCCA: '850A - 950A',
    terminalType: 'Standard DIN T1 Post',
    terminalLayout: 'Layout 0 (Right Hand Positive)',
    holddown: 'B13 Flange',
    dimensions: {
      length: 353,
      width: 175,
      height: 190
    },
    commonVehicles: [
      'BMW 330d/530d/X5 (F15/G05) with Stop-Start & EfficientDynamics',
      'Range Rover Sport / Discovery 5 (SDV6/TDV6 Stop-Start)',
      'Audi Q7 / Q8 3.0 TDI Mild Hybrid',
      'Mercedes-Benz E350d, GLE, GLS Stop-Start',
      'Jaguar F-Pace 3.0d Stop-Start',
      'Volvo XC90 T8 / D5 Stop-Start'
    ],
    description: 'The pinnacle of high-drain automotive batteries in the UK. Designed for high-spec luxury 4x4s and modern performance diesels with extensive electronics and start-stop.',
    technology: 'AGM',
    products: [
      {
        id: 'varta-silver-agm-019',
        name: 'Varta Silver Dynamic AGM 019 (A5)',
        brand: 'Varta',
        tier: 'agm',
        groupSize: '019AGM',
        ah: 95,
        cca: 850,
        warrantyYears: 5,
        technology: 'AGM',
        features: ['Factory-fitted OEM by BMW, Audi, Land Rover & Mercedes', 'Unrivalled regenerative braking absorption', 'Engineered in Germany'],
        recommendedFor: 'The OEM replacement for luxury German and British SUVs.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 154.95,
            inStock: true,
            deliveryTime: 'Next working day tracked',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/varta/a5-019agm/?utm_source=autobatteryfinder',
            badge: 'OEM Direct'
          },
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 219.00,
            inStock: true,
            deliveryTime: 'Collect in 1hr',
            fittingAvailable: true,
            fittingCostGbp: 25.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/halfords-advanced-019-start-stop-agm-battery.html?utm_source=autobatteryfinder',
            badge: 'Professional Fitting'
          }
        ]
      }
    ]
  },
  {
    slug: '110',
    groupSize: '110',
    typeCode: '110 (Mid-Sized Commercial & Estate / LN4)',
    alternateNames: ['110', 'Type 110', 'LN4', 'H7', 'DIN 80'],
    bciGroup: '94R / H7',
    dinCode: '580 406 074',
    enCode: 'LN4',
    voltage: 12,
    typicalAh: '80Ah - 85Ah',
    typicalCCA: '740A - 800A',
    terminalType: 'Standard DIN T1 Post',
    terminalLayout: 'Layout 0 (Right Hand Positive)',
    holddown: 'B13 Flange',
    dimensions: {
      length: 315,
      width: 175,
      height: 190
    },
    commonVehicles: [
      'Ford Transit Custom 2.0 EcoBlue',
      'Audi A6 2.0 TDI, VW Passat 2.0 TDI',
      'BMW 520d (F10/F11)',
      'Vauxhall Vivaro / Renault Trafic',
      'Volvo V60 / XC60 D4 / D5'
    ],
    description: 'The 315mm length Type 110 sits between the 096 and 019. Often chosen for mid-sized vans, estates, and long-wheelbase passenger vehicles.',
    technology: 'Conventional',
    products: [
      {
        id: 'bosch-s4-110',
        name: 'Bosch S4 010 110 Car Battery',
        brand: 'Bosch',
        tier: 'premium',
        groupSize: '110',
        ah: 80,
        cca: 740,
        warrantyYears: 4,
        technology: 'Conventional',
        features: ['Dependable commercial-grade starting', 'High endurance', 'Heavy-duty lead plates'],
        recommendedFor: 'Vans, taxis, and high-mileage diesel estates.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 94.95,
            inStock: true,
            deliveryTime: 'Next day delivery',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/bosch/s4010/?utm_source=autobatteryfinder',
            badge: 'Trade Favorite'
          },
          {
            name: 'Euro Car Parts',
            logo: 'ECP',
            priceGbp: 114.99,
            inStock: true,
            deliveryTime: 'Collect today',
            fittingAvailable: false,
            url: 'https://www.eurocarparts.com/search/110-battery?utm_source=autobatteryfinder'
          }
        ]
      }
    ]
  },
  {
    slug: '054',
    groupSize: '054',
    typeCode: '054 / S34B20R (Japanese & Hybrid Auxiliary)',
    alternateNames: ['054', 'Type 054', 'JIS 38B19R', 'Toyota Hybrid 12V'],
    bciGroup: 'JIS 38B19R',
    dinCode: '535 020 030',
    enCode: 'JIS-Small',
    voltage: 12,
    typicalAh: '35Ah - 40Ah',
    typicalCCA: '300A - 360A',
    terminalType: 'Pencil / Small Post (JIS) with adapter options',
    terminalLayout: 'Layout 0 or 1 depending on variant',
    holddown: 'Japanese B00 base hold-down',
    dimensions: {
      length: 187,
      width: 127,
      height: 227
    },
    commonVehicles: [
      'Toyota Yaris Hybrid (under rear seat 12V auxiliary)',
      'Toyota Prius / Auris Hybrid (12V low voltage bootstrap)',
      'Nissan Micra 1.0 / 1.2 petrol',
      'Honda Jazz (early models)',
      'Suzuki Swift / Alto'
    ],
    description: 'Compact Japanese Industrial Standard (JIS) battery. Very tall and narrow (227mm height), widely used as the 12V auxiliary boot-up battery in Toyota/Lexus self-charging hybrids.',
    technology: 'AGM',
    products: [
      {
        id: 'yuasa-hj-s34b20r',
        name: 'Yuasa HJ-S34B20R Toyota Hybrid Auxiliary AGM Battery',
        brand: 'Yuasa',
        tier: 'agm',
        groupSize: '054',
        ah: 35,
        cca: 272,
        warrantyYears: 3,
        technology: 'AGM',
        features: ['Specifically designed for Toyota hybrid internal cabin installation', 'Integrated vent tube port for vehicle exhaust safety', 'AGM zero-leak design'],
        recommendedFor: 'Essential direct replacement for Toyota Yaris, Auris, and Prius hybrids.',
        retailers: [
          {
            name: 'Tayna Batteries',
            logo: 'TAYNA',
            priceGbp: 99.95,
            inStock: true,
            deliveryTime: 'Next working day',
            fittingAvailable: false,
            url: 'https://www.tayna.co.uk/car-batteries/yuasa/hj-s34b20r/?utm_source=autobatteryfinder',
            badge: 'Hybrid Specialist'
          },
          {
            name: 'Halfords',
            logo: 'HALFORDS',
            priceGbp: 139.00,
            inStock: true,
            deliveryTime: 'Click & Collect',
            fittingAvailable: true,
            fittingCostGbp: 25.00,
            url: 'https://www.halfords.com/motoring/batteries/car-batteries/yuasa-hybrid-auxiliary-battery.html?utm_source=autobatteryfinder'
          }
        ]
      }
    ]
  }
]

export function getBatteryGroupBySlug(slug: string) {
  const clean = slug.toLowerCase().replace(/[^a-z0-9]/g, '')
  return batteryGroups.find(g => g.slug.toLowerCase().replace(/[^a-z0-9]/g, '') === clean)
}
