'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { UKRegistrationLookup } from '@/components/lookup/UKRegistrationLookup'
import MakeModelSelector from '@/components/lookup/MakeModelSelector'
import BatteryResultCard, { VehicleMatchData } from '@/components/lookup/BatteryResultCard'
import BatteryGroupCard from '@/components/battery/BatteryGroupCard'
import BatteryHealthQuiz from '@/components/tools/BatteryHealthQuiz'
import FAQSection from '@/components/content/FAQSection'
import JsonLd from '@/components/seo/JsonLd'
import { generateFAQSchema } from '@/lib/seo/jsonld'
import { batteryGroups } from '@/data/battery-groups'
import { UK_VEHICLES_DATABASE } from '@/data/uk-vehicles'

const HOMEPAGE_FAQS = [
  {
    question: 'How does the UK registration number plate battery finder work?',
    answer: 'When you enter your UK registration plate, our system identifies the exact vehicle year, engine displacement, fuel type, and electrical equipment specification (including Stop-Start and brake energy regeneration). We then match these exact parameters against manufacturer OEM fitment catalogues to present the guaranteed physical group size (e.g. 096, 027, 075, 019) and technology (AGM, EFB, or Standard).'
  },
  {
    question: 'Can I put a standard lead-acid battery into a Stop-Start car?',
    answer: 'No. If your vehicle has automatic Stop-Start or Smart Regenerative Alternator management, fitting a standard conventional flooded battery is dangerous and ill-advised. A standard battery cannot withstand the constant high-amperage charge cycling and will typically suffer plate sulfation and total failure within 2 to 4 months, invalidating the retailer warranty.'
  },
  {
    question: 'What is the difference between an AGM and an EFB battery?',
    answer: 'AGM (Absorbent Glass Mat) batteries hold the electrolyte acid absorbed inside micro-glass fibre mats, providing 3x the cyclic durability of conventional batteries. They are mandatory for vehicles with regenerative braking and heavy electronic systems. EFB (Enhanced Flooded Batteries) are an upgraded version of standard wet batteries, suitable for entry-level stop-start vehicles with lower electrical demands.'
  },
  {
    question: 'Do I need to "code" or register my new car battery in the UK?',
    answer: 'Modern vehicles (especially BMW, Audi, Volkswagen, Mercedes-Benz, Ford, and Jaguar Land Rover) feature an active Battery Monitoring System (BMS). When you install a fresh battery, the vehicle computer needs to be told that a new battery with full capacity has been installed. If you do not perform a BMS reset or coding, the car may overcharge the new battery based on the old degraded battery profile, leading to shortened lifespan.'
  },
  {
    question: 'How much should a replacement car battery cost in the UK?',
    answer: 'Typical replacement battery costs in the UK range from £55 to £85 for a standard small hatchback battery (e.g. Type 063 or 027), £90 to £135 for a standard mid-size battery (Type 096 or 110), and £125 to £220 for a high-specification Stop-Start AGM battery (Type 096AGM or 019AGM). Buying online via Tayna or Euro Car Parts typically saves 25% to 40% compared to franchised main dealers.'
  }
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'reg' | 'make'>('reg')
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleMatchData | null>(null)

  const popularGroups = batteryGroups.slice(0, 6)

  return (
    <div>
      <JsonLd data={generateFAQSchema(HOMEPAGE_FAQS)} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
              <span>🇬🇧</span> UK Vehicle Battery Matching Engine
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
              Find the Right Replacement Car Battery by <span className="text-[#FFD200]">Reg Number</span>
            </h1>

            <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Instant OE fitment verification for cars in Great Britain and Northern Ireland. Compare guaranteed sizes, Stop-Start AGM compatibility, and real retailer prices.
            </p>
          </div>

          {/* Active Lookup Container */}
          <div className="max-w-3xl mx-auto">
            {!selectedVehicle && (
              <div className="flex justify-center mb-4">
                <div className="inline-flex bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700 backdrop-blur shadow-lg">
                  <button
                    type="button"
                    onClick={() => setActiveTab('reg')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      activeTab === 'reg'
                        ? 'bg-[#FFD200] text-black shadow-md'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>🔤</span> By UK Number Plate
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('make')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      activeTab === 'make'
                        ? 'bg-[#FFD200] text-black shadow-md'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>🚗</span> By Make, Model &amp; Year
                  </button>
                </div>
              </div>
            )}

            {/* Tab 1: Reg Lookup */}
            {!selectedVehicle && activeTab === 'reg' && (
              <UKRegistrationLookup onVehicleFound={(v) => setSelectedVehicle(v)} />
            )}

            {/* Tab 2: Make/Model Drilldown */}
            {!selectedVehicle && activeTab === 'make' && (
              <MakeModelSelector onSelectVehicle={(v) => setSelectedVehicle(v)} />
            )}

            {/* Vehicle Result Card */}
            {selectedVehicle && (
              <div className="mt-2">
                <BatteryResultCard
                  vehicle={selectedVehicle}
                  onReset={() => setSelectedVehicle(null)}
                />
              </div>
            )}
          </div>

          {/* Trust Value Props */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <span className="text-amber-400 text-lg block mb-1">🎯</span>
              <span className="font-bold text-xs sm:text-sm block text-white">100% Fit Guarantee</span>
              <span className="text-[11px] text-slate-400">OE dimensions &amp; layout</span>
            </div>
            <div className="p-3">
              <span className="text-amber-400 text-lg block mb-1">⚡</span>
              <span className="font-bold text-xs sm:text-sm block text-white">Stop-Start Safe</span>
              <span className="text-[11px] text-slate-400">AGM &amp; EFB identification</span>
            </div>
            <div className="p-3">
              <span className="text-amber-400 text-lg block mb-1">💷</span>
              <span className="font-bold text-xs sm:text-sm block text-white">Compare Retailers</span>
              <span className="text-[11px] text-slate-400">Halfords, Tayna &amp; ECP</span>
            </div>
            <div className="p-3">
              <span className="text-amber-400 text-lg block mb-1">🛡️</span>
              <span className="font-bold text-xs sm:text-sm block text-white">3 to 5 Year Warranty</span>
              <span className="text-[11px] text-slate-400">Bosch, Varta &amp; Yuasa</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900">
              How Our UK Car Battery Finder Works
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Three simple steps to the correct car battery delivered to your door or fitted at a local depot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 relative">
              <span className="w-10 h-10 rounded-xl bg-primary-600 text-white font-black text-lg flex items-center justify-center mb-4">
                1
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Enter Registration or Model
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Type your number plate into our yellow UK plate lookup box. We instantly decode your engine size, fuel type, and generation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 relative">
              <span className="w-10 h-10 rounded-xl bg-amber-500 text-white font-black text-lg flex items-center justify-center mb-4">
                2
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                We Detect Stop-Start &amp; Size
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our database checks whether your vehicle requires an advanced AGM or EFB battery, preventing costly premature battery failure.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 relative">
              <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mb-4">
                3
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Compare Prices &amp; Fitting
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Compare live prices from leading UK suppliers like Tayna, Halfords, and Euro Car Parts with options for next-day delivery or same-day branch collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Battery Group Sizes Directory */}
      <section className="py-16 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                UK Standard Group Sizes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 mt-1">
                Most Common UK Car Battery Types
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Explore dimensions, cranking specifications, and popular vehicles for each DIN size.
              </p>
            </div>
            <Link
              href="/battery-size"
              className="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1 hover:underline"
            >
              View All Battery Sizes &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGroups.map((group) => (
              <BatteryGroupCard key={group.slug} group={group} />
            ))}
          </div>
        </div>
      </section>

      {/* Critical Stop-Start Education Banner */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-3xl border border-amber-300 p-8 sm:p-12">
            <div className="max-w-3xl">
              <span className="bg-amber-400 text-black text-xs font-black px-2.5 py-1 rounded uppercase tracking-wider">
                UK MOT &amp; Reliability Alert
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-gray-950 mt-4 mb-4">
                Why Conventional Batteries Destroy Stop-Start Cars
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                Over 70% of cars registered in the UK since 2015 feature automatic engine Start-Stop systems and regenerative braking. When stationary at UK traffic lights, the engine shuts off while headlights, wipers, and heaters continue draining power.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
                  <span className="text-red-600 font-bold text-sm block mb-1">❌ Standard Lead-Acid</span>
                  <p className="text-xs text-gray-600">
                    Only supports ~20,000 engine starts. Micro-cycling in a stop-start vehicle strips the lead plates, leading to battery failure in just 8 to 16 weeks.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
                  <span className="text-emerald-700 font-bold text-sm block mb-1">✓ AGM (Absorbent Glass Mat)</span>
                  <p className="text-xs text-gray-600">
                    Engineered for up to 360,000 engine starts with 3x cyclic endurance. Absorbs aggressive regenerative braking energy safely with zero acid stratification.
                  </p>
                </div>
              </div>

              <Link
                href="/guides/agm-vs-efb-batteries"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-900 bg-amber-300 hover:bg-amber-400 px-5 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                Read Full AGM vs EFB Technology Guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Interactive Diagnostic Tool */}
      <section className="py-16 bg-slate-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900">
              Is Your Car Battery Failing?
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Use our interactive diagnostic quiz to evaluate slow-cranking symptoms before booking a garage.
            </p>
          </div>
          <BatteryHealthQuiz />
        </div>
      </section>

      {/* Directory of UK Makes */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900">
              Browse Batteries by Car Make
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Select your vehicle manufacturer to view models, engine specs, and recommended batteries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {UK_VEHICLES_DATABASE.map((make) => (
              <Link
                key={make.slug}
                href={`/batteries/${make.slug}`}
                className="p-4 rounded-xl border border-gray-200 hover:border-primary-500 bg-slate-50 hover:bg-white text-center transition-all group shadow-sm"
              >
                <span className="font-bold text-gray-900 text-sm block group-hover:text-primary-600">
                  {make.make}
                </span>
                <span className="text-[11px] text-gray-500 block mt-0.5">
                  {make.models.length} models
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={HOMEPAGE_FAQS}
            title="Frequently Asked Questions (UK Motorists)"
          />
        </div>
      </section>
    </div>
  )
}
