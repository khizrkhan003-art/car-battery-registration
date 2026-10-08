// ============================================
// AutoBatteryFinder - Core Type Definitions
// ============================================

// --- Vehicle Types ---

export interface Vehicle {
  year?: number
  make: string
  model: string
  engine?: string
  trim?: string
  fuelType?: string
  bodyType?: string
}

export interface VehicleMakeInfo {
  slug: string
  name: string
  country: 'uk' | 'us' | 'both'
  popular: boolean
  models: VehicleModelInfo[]
}

export interface VehicleModelInfo {
  slug: string
  name: string
  years?: number[]
  engines?: string[]
}

// --- Battery Types ---

export type BatteryTechnology = 'Conventional' | 'AGM' | 'EFB' | 'Gel'

export interface BatterySpec {
  groupSize: string
  technology: BatteryTechnology
  voltage: number
  cca: number
  rc?: number
  ah?: number
  length: number
  width: number
  height: number
  terminalLayout: string
  startStopCompatible: boolean
  notes?: string
}

export interface BatteryGroupInfo {
  slug: string
  groupSize: string
  alternateNames?: string[]
  bciGroup?: string
  dinCode?: string
  enCode?: string
  dimensions: {
    length: number
    width: number
    height: number
  }
  commonVehicles: string[]
  description: string
  technology?: BatteryTechnology
}

// --- Lookup Result Types ---

export interface VehicleBatteryResult {
  vehicle: Vehicle
  battery: BatterySpec
  compatibilityNotes?: string
  source?: string
  lastUpdated?: string
  isDemo: boolean
}

export interface UKRegistrationResult {
  registration: string
  make?: string
  model?: string
  year?: number
  engineSize?: string
  fuelType?: string
  colour?: string
  isDemo: boolean
}

export interface LookupError {
  code: string
  message: string
  details?: string
}

// --- Content Types ---

export interface GuideContent {
  slug: string
  title: string
  metaDescription: string
  content: string
  publishedAt: string
  updatedAt: string
  category: string
  readingTime: number
  relatedGuides?: string[]
}

export interface FAQItem {
  question: string
  answer: string
}

// --- SEO Types ---

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface PageMetadata {
  title: string
  description: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: string
  }
}

// --- API Types ---

export interface SearchResult {
  type: 'make' | 'model' | 'battery-group' | 'guide'
  title: string
  description?: string
  url: string
  relevance: number
}

export interface APIResponse<T> {
  success: boolean
  data?: T
  error?: LookupError
}
