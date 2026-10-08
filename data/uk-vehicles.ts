export interface UKVehicleRegistrationEntry {
  registration: string
  make: string
  model: string
  year: number
  engineSize: string
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric'
  colour: string
  hasStopStart: boolean
  batteryGroup: string
  alternativeGroups?: string[]
  batteryLocation: string
  requiresCoding: boolean
  motStatus: 'Valid' | 'Expires Soon' | 'Expired'
  motExpiryDate?: string
  taxStatus: 'Taxed' | 'SORN'
}

export interface UKVehicleHierarchy {
  make: string
  slug: string
  popular: boolean
  models: {
    name: string
    slug: string
    years: {
      range: string
      variants: {
        engine: string
        fuel: string
        hasStopStart: boolean
        batteryGroup: string
        batteryLocation: string
        requiresCoding: boolean
      }[]
    }[]
  }[]
}

export const SAMPLE_UK_VEHICLES: UKVehicleRegistrationEntry[] = [
  {
    registration: 'EA18 WXY',
    make: 'Volkswagen',
    model: 'Golf Mk7.5',
    year: 2018,
    engineSize: '1.5 TSI EVO (150ps)',
    fuelType: 'Petrol',
    colour: 'Deep Black Pearl',
    hasStopStart: true,
    batteryGroup: '096AGM',
    alternativeGroups: ['096'],
    batteryLocation: 'Engine Bay (Front Left)',
    requiresCoding: true,
    motStatus: 'Valid',
    motExpiryDate: '2027-04-18',
    taxStatus: 'Taxed'
  },
  {
    registration: 'FL15 GTY',
    make: 'Ford',
    model: 'Fiesta Titanium',
    year: 2015,
    engineSize: '1.0 EcoBoost (100ps)',
    fuelType: 'Petrol',
    colour: 'Race Red',
    hasStopStart: true,
    batteryGroup: '075',
    alternativeGroups: ['027'],
    batteryLocation: 'Engine Bay (Under Cowl Panel)',
    requiresCoding: true,
    motStatus: 'Valid',
    motExpiryDate: '2027-02-11',
    taxStatus: 'Taxed'
  },
  {
    registration: 'BV67 KLO',
    make: 'BMW',
    model: '3 Series 320d M Sport',
    year: 2017,
    engineSize: '2.0 TwinPower Turbo Diesel',
    fuelType: 'Diesel',
    colour: 'Estoril Blue',
    hasStopStart: true,
    batteryGroup: '019AGM',
    alternativeGroups: ['110AGM'],
    batteryLocation: 'Luggage Compartment (Boot Right Flank)',
    requiresCoding: true,
    motStatus: 'Valid',
    motExpiryDate: '2026-11-20',
    taxStatus: 'Taxed'
  },
  {
    registration: 'SH19 BTR',
    make: 'Nissan',
    model: 'Qashqai Acenta Premium',
    year: 2019,
    engineSize: '1.3 DIG-T Petrol',
    fuelType: 'Petrol',
    colour: 'Gun Metallic Grey',
    hasStopStart: true,
    batteryGroup: '096AGM',
    alternativeGroups: ['096'],
    batteryLocation: 'Engine Bay (Right)',
    requiresCoding: true,
    motStatus: 'Valid',
    motExpiryDate: '2027-06-30',
    taxStatus: 'Taxed'
  },
  {
    registration: 'VO68 LME',
    make: 'Vauxhall',
    model: 'Corsa Energy',
    year: 2018,
    engineSize: '1.4 ecoFLEX',
    fuelType: 'Petrol',
    colour: 'Summit White',
    hasStopStart: false,
    batteryGroup: '063',
    alternativeGroups: ['075'],
    batteryLocation: 'Engine Bay (Front Left)',
    requiresCoding: false,
    motStatus: 'Valid',
    motExpiryDate: '2027-01-14',
    taxStatus: 'Taxed'
  },
  {
    registration: 'MK21 ZPA',
    make: 'Toyota',
    model: 'Yaris Design Hybrid',
    year: 2021,
    engineSize: '1.5 VVT-i Hybrid',
    fuelType: 'Hybrid',
    colour: 'Silver Flare Metallic',
    hasStopStart: true,
    batteryGroup: '054',
    batteryLocation: 'Under Rear Seat (Auxiliary 12V)',
    requiresCoding: false,
    motStatus: 'Valid',
    motExpiryDate: '2027-09-05',
    taxStatus: 'Taxed'
  },
  {
    registration: 'LR16 XPT',
    make: 'Land Rover',
    model: 'Discovery Sport HSE Luxury',
    year: 2016,
    engineSize: '2.0 TD4 Ingenium',
    fuelType: 'Diesel',
    colour: 'Corris Grey',
    hasStopStart: true,
    batteryGroup: '019AGM',
    batteryLocation: 'Engine Bay (Bulkhead)',
    requiresCoding: true,
    motStatus: 'Valid',
    motExpiryDate: '2026-12-10',
    taxStatus: 'Taxed'
  },
  {
    registration: 'AD14 HJK',
    make: 'Audi',
    model: 'A3 Sportback S Line',
    year: 2014,
    engineSize: '2.0 TDI (150ps)',
    fuelType: 'Diesel',
    colour: 'Daytona Grey',
    hasStopStart: true,
    batteryGroup: '096AGM',
    batteryLocation: 'Engine Bay (Front Left)',
    requiresCoding: true,
    motStatus: 'Valid',
    motExpiryDate: '2027-03-22',
    taxStatus: 'Taxed'
  },
  {
    registration: 'WP20 NCL',
    make: 'Mercedes-Benz',
    model: 'A-Class A200 AMG Line',
    year: 2020,
    engineSize: '1.3 Turbo Petrol',
    fuelType: 'Petrol',
    colour: 'Polar White',
    hasStopStart: true,
    batteryGroup: '096AGM',
    batteryLocation: 'Engine Bay (Top Left Bulkhead)',
    requiresCoding: true,
    motStatus: 'Valid',
    motExpiryDate: '2027-07-15',
    taxStatus: 'Taxed'
  },
  {
    registration: 'TE70 ELA',
    make: 'Tesla',
    model: 'Model 3 Long Range',
    year: 2020,
    engineSize: 'Dual Motor Electric',
    fuelType: 'Electric',
    colour: 'Pearl White Multi-Coat',
    hasStopStart: false,
    batteryGroup: '054',
    batteryLocation: 'Frunk (Under Cabin Intake Cover)',
    requiresCoding: false,
    motStatus: 'Valid',
    motExpiryDate: '2027-10-01',
    taxStatus: 'Taxed'
  }
]

export const UK_VEHICLES_DATABASE: UKVehicleHierarchy[] = [
  {
    make: 'Ford',
    slug: 'ford',
    popular: true,
    models: [
      {
        name: 'Fiesta',
        slug: 'fiesta',
        years: [
          {
            range: '2017-2023 (Mk8)',
            variants: [
              { engine: '1.0 EcoBoost (100ps/125ps/140ps)', fuel: 'Petrol', hasStopStart: true, batteryGroup: '075', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.1 Ti-VCT (70ps/85ps)', fuel: 'Petrol', hasStopStart: true, batteryGroup: '063', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.5 TDCi Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.5 ST EcoBoost (200ps)', fuel: 'Petrol', hasStopStart: true, batteryGroup: '075', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          },
          {
            range: '2008-2017 (Mk7)',
            variants: [
              { engine: '1.0 EcoBoost (100ps/125ps)', fuel: 'Petrol', hasStopStart: true, batteryGroup: '075', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.25 Zetec (82ps)', fuel: 'Petrol', hasStopStart: false, batteryGroup: '063', batteryLocation: 'Engine Bay', requiresCoding: false },
              { engine: '1.4 / 1.6 Duratec', fuel: 'Petrol', hasStopStart: false, batteryGroup: '063', batteryLocation: 'Engine Bay', requiresCoding: false },
              { engine: '1.6 TDCi Diesel', fuel: 'Diesel', hasStopStart: false, batteryGroup: '075', batteryLocation: 'Engine Bay', requiresCoding: false }
            ]
          }
        ]
      },
      {
        name: 'Focus',
        slug: 'focus',
        years: [
          {
            range: '2018-2024 (Mk4)',
            variants: [
              { engine: '1.0 EcoBoost mHEV', fuel: 'Petrol/Hybrid', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.5 EcoBlue Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '2.0 EcoBlue Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          },
          {
            range: '2011-2018 (Mk3)',
            variants: [
              { engine: '1.0 EcoBoost Stop-Start', fuel: 'Petrol', hasStopStart: true, batteryGroup: '075', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.6 TDCi Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '2.0 TDCi Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'Puma',
        slug: 'puma',
        years: [
          {
            range: '2019-2024',
            variants: [
              { engine: '1.0 EcoBoost Hybrid mHEV (125ps/155ps)', fuel: 'Petrol/Hybrid', hasStopStart: true, batteryGroup: '075', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.5 EcoBoost ST (200ps)', fuel: 'Petrol', hasStopStart: true, batteryGroup: '075', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'Kuga',
        slug: 'kuga',
        years: [
          {
            range: '2013-2024',
            variants: [
              { engine: '2.0 TDCi / EcoBlue Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.5 EcoBoost Petrol', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      }
    ]
  },
  {
    make: 'Volkswagen',
    slug: 'volkswagen',
    popular: true,
    models: [
      {
        name: 'Golf',
        slug: 'golf',
        years: [
          {
            range: '2019-2024 (Mk8)',
            variants: [
              { engine: '1.5 eTSI Mild Hybrid', fuel: 'Petrol/Hybrid', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '2.0 TDI (115ps/150ps)', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '2.0 TSI GTI / R', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          },
          {
            range: '2012-2020 (Mk7)',
            variants: [
              { engine: '1.4 / 1.5 TSI Bluemotion', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.6 TDI / 2.0 TDI', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '2.0 TSI GTI', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'Polo',
        slug: 'polo',
        years: [
          {
            range: '2017-2024 (Mk6)',
            variants: [
              { engine: '1.0 TSI Stop-Start', fuel: 'Petrol', hasStopStart: true, batteryGroup: '027AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.0 MPI non-turbo', fuel: 'Petrol', hasStopStart: false, batteryGroup: '027', batteryLocation: 'Engine Bay', requiresCoding: false },
              { engine: '2.0 TSI GTI', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'Tiguan',
        slug: 'tiguan',
        years: [
          {
            range: '2016-2024',
            variants: [
              { engine: '2.0 TDI 4Motion', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.5 TSI EVO', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      }
    ]
  },
  {
    make: 'BMW',
    slug: 'bmw',
    popular: true,
    models: [
      {
        name: '3 Series',
        slug: '3-series',
        years: [
          {
            range: '2019-2024 (G20)',
            variants: [
              { engine: '320i 2.0 Turbo', fuel: 'Petrol', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Boot Flank', requiresCoding: true },
              { engine: '320d / 330d Mild Hybrid', fuel: 'Diesel', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Boot Flank', requiresCoding: true },
              { engine: '330e Plug-in Hybrid (12V)', fuel: 'Hybrid', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Boot Flank', requiresCoding: true }
            ]
          },
          {
            range: '2012-2019 (F30)',
            variants: [
              { engine: '320d EfficientDynamics', fuel: 'Diesel', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Boot Flank', requiresCoding: true },
              { engine: '318i / 320i Petrol', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Boot Flank', requiresCoding: true },
              { engine: '330d / 335d xDrive', fuel: 'Diesel', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Boot Flank', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: '1 Series',
        slug: '1-series',
        years: [
          {
            range: '2011-2019 (F20)',
            variants: [
              { engine: '116d / 118d / 120d', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Boot Well', requiresCoding: true },
              { engine: '116i / 118i Petrol', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Boot Well', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: '5 Series',
        slug: '5-series',
        years: [
          {
            range: '2010-2023 (F10 / G30)',
            variants: [
              { engine: '520d / 530d', fuel: 'Diesel', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Boot Floor Right', requiresCoding: true }
            ]
          }
        ]
      }
    ]
  },
  {
    make: 'Vauxhall',
    slug: 'vauxhall',
    popular: true,
    models: [
      {
        name: 'Corsa',
        slug: 'corsa',
        years: [
          {
            range: '2014-2019 (Corsa E)',
            variants: [
              { engine: '1.2 / 1.4 ecoFLEX (non-start-stop)', fuel: 'Petrol', hasStopStart: false, batteryGroup: '063', batteryLocation: 'Engine Bay', requiresCoding: false },
              { engine: '1.4 Turbo (Start-Stop)', fuel: 'Petrol', hasStopStart: true, batteryGroup: '027AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.3 CDTi Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '075', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          },
          {
            range: '2019-2024 (Corsa F)',
            variants: [
              { engine: '1.2 PureTech Turbo Stop-Start', fuel: 'Petrol', hasStopStart: true, batteryGroup: '027AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'Astra',
        slug: 'astra',
        years: [
          {
            range: '2015-2022 (Astra K)',
            variants: [
              { engine: '1.4 Turbo ecoTec Stop-Start', fuel: 'Petrol', hasStopStart: true, batteryGroup: '027AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.6 CDTi Whisper Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      }
    ]
  },
  {
    make: 'Nissan',
    slug: 'nissan',
    popular: true,
    models: [
      {
        name: 'Qashqai',
        slug: 'qashqai',
        years: [
          {
            range: '2014-2021 (J11)',
            variants: [
              { engine: '1.2 DIG-T Petrol Stop-Start', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.5 dCi Diesel Stop-Start', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '1.3 DIG-T Petrol Stop-Start', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'Juke',
        slug: 'juke',
        years: [
          {
            range: '2010-2019 (F15)',
            variants: [
              { engine: '1.2 DIG-T / 1.6 Petrol', fuel: 'Petrol', hasStopStart: true, batteryGroup: '027AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      }
    ]
  },
  {
    make: 'Toyota',
    slug: 'toyota',
    popular: true,
    models: [
      {
        name: 'Yaris',
        slug: 'yaris',
        years: [
          {
            range: '2020-2024 (Mk4)',
            variants: [
              { engine: '1.5 Hybrid 12V Auxiliary', fuel: 'Hybrid', hasStopStart: true, batteryGroup: '054', batteryLocation: 'Under Rear Seat', requiresCoding: false }
            ]
          },
          {
            range: '2011-2020 (Mk3)',
            variants: [
              { engine: '1.5 Hybrid 12V Boot Battery', fuel: 'Hybrid', hasStopStart: true, batteryGroup: '054', batteryLocation: 'Under Rear Seat', requiresCoding: false },
              { engine: '1.33 Dual VVT-i Stop-Start', fuel: 'Petrol', hasStopStart: true, batteryGroup: '027AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'Corolla',
        slug: 'corolla',
        years: [
          {
            range: '2019-2024',
            variants: [
              { engine: '1.8 / 2.0 Hybrid 12V Auxiliary', fuel: 'Hybrid', hasStopStart: true, batteryGroup: '027', batteryLocation: 'Boot / Engine Bay', requiresCoding: false }
            ]
          }
        ]
      }
    ]
  },
  {
    make: 'Audi',
    slug: 'audi',
    popular: true,
    models: [
      {
        name: 'A3',
        slug: 'a3',
        years: [
          {
            range: '2013-2020 (8V)',
            variants: [
              { engine: '1.4 / 1.5 TFSI CoD Stop-Start', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: '2.0 TDI Stop-Start', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'A4',
        slug: 'a4',
        years: [
          {
            range: '2015-2023 (B9)',
            variants: [
              { engine: '2.0 TDI Ultra Stop-Start', fuel: 'Diesel', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Boot Spare Wheel Well', requiresCoding: true },
              { engine: '2.0 TFSI Mild Hybrid', fuel: 'Petrol', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Boot Spare Wheel Well', requiresCoding: true }
            ]
          }
        ]
      }
    ]
  },
  {
    make: 'Mercedes-Benz',
    slug: 'mercedes-benz',
    popular: true,
    models: [
      {
        name: 'A-Class',
        slug: 'a-class',
        years: [
          {
            range: '2018-2024 (W177)',
            variants: [
              { engine: 'A180 / A200 1.3 Turbo', fuel: 'Petrol', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true },
              { engine: 'A200d / A220d Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '096AGM', batteryLocation: 'Engine Bay', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'C-Class',
        slug: 'c-class',
        years: [
          {
            range: '2014-2021 (W205)',
            variants: [
              { engine: 'C220d / C250d BlueTEC', fuel: 'Diesel', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Engine Bay Bulkhead', requiresCoding: true }
            ]
          }
        ]
      }
    ]
  },
  {
    make: 'Land Rover',
    slug: 'land-rover',
    popular: true,
    models: [
      {
        name: 'Discovery Sport',
        slug: 'discovery-sport',
        years: [
          {
            range: '2015-2024',
            variants: [
              { engine: '2.0 TD4 / D180 Ingenium Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Engine Bay Bulkhead', requiresCoding: true }
            ]
          }
        ]
      },
      {
        name: 'Range Rover Evoque',
        slug: 'range-rover-evoque',
        years: [
          {
            range: '2011-2024',
            variants: [
              { engine: '2.0 TD4 / D150 / D180 Diesel', fuel: 'Diesel', hasStopStart: true, batteryGroup: '019AGM', batteryLocation: 'Engine Bay Bulkhead', requiresCoding: true }
            ]
          }
        ]
      }
    ]
  }
]
