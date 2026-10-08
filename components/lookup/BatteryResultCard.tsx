'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { getBatteryGroupBySlug } from '@/data/battery-groups'

export interface VehicleMatchData {
  registration?: string
  make: string
  model: string
  year?: number | string
  engineSize?: string
  fuelType?: string
  colour?: string
  hasStopStart: boolean
  batteryGroup: string
  alternativeGroups?: string[]
  batteryLocation?: string
  requiresCoding?: boolean
  motStatus?: string
  taxStatus?: string
  isDemo?: boolean
}

interface BatteryResultCardProps {
  vehicle: VehicleMatchData
  onReset?: () => void
}

export default function BatteryResultCard({ vehicle, onReset }: BatteryResultCardProps) {
  const [selectedTier, setSelectedTier] = useState<'all' | 'premium' | 'agm' | 'budget'>('all')
  const groupData = getBatteryGroupBySlug(vehicle.batteryGroup)

  const isStopStart = vehicle.hasStopStart || vehicle.batteryGroup.includes('AGM') || vehicle.batteryGroup.includes('EFB')
  const products = groupData?.products || []

  const filteredProducts = selectedTier === 'all' 
    ? products 
    : products.filter(p => p.tier === selectedTier)

  return (
    <div className="w-full space-y-8 animate-fadeIn">
      {/* Vehicle Summary Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-gray-700/60">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              {vehicle.registration && (
                <div className="inline-flex items-center bg-[#FFD200] text-black font-mono font-black text-lg sm:text-xl px-3 py-1 rounded border-2 border-black tracking-widest shadow-inner">
                  <span className="inline-block bg-[#003399] text-white text-[10px] px-1 py-0.5 rounded-sm mr-2 font-sans font-bold leading-none">
                    UK
                  </span>
                  {vehicle.registration}
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl font-bold font-heading">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mt-2 flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-white">{vehicle.engineSize || 'Standard Engine'}</span>
              <span>•</span>
              <span>{vehicle.fuelType || 'Petrol'}</span>
              {vehicle.colour && (
                <>
                  <span>•</span>
                  <span>{vehicle.colour}</span>
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {vehicle.isDemo && (
              <Badge variant="demo" className="text-xs">
                Verified Match
              </Badge>
            )}
            {onReset && (
              <button
                type="button"
                onClick={onReset}
                className="text-xs text-gray-300 hover:text-white underline px-3 py-1.5 rounded bg-gray-800/80 hover:bg-gray-700 transition-colors"
              >
                Change Vehicle
              </button>
            )}
          </div>
        </div>

        {/* DVLA Status & Battery Specs Pill Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-sm">
          <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-700/40">
            <span className="text-gray-400 text-xs block">Required Battery Size</span>
            <span className="text-lg font-bold text-amber-400">
              Type {vehicle.batteryGroup}
            </span>
          </div>

          <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-700/40">
            <span className="text-gray-400 text-xs block">Stop-Start System</span>
            <span className={`text-base font-bold ${isStopStart ? 'text-emerald-400' : 'text-gray-300'}`}>
              {isStopStart ? '✓ Stop-Start Active' : '✗ Non-Stop-Start'}
            </span>
          </div>

          <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-700/40">
            <span className="text-gray-400 text-xs block">Battery Location</span>
            <span className="text-sm font-semibold text-gray-200">
              {vehicle.batteryLocation || 'Engine Bay'}
            </span>
          </div>

          <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-700/40">
            <span className="text-gray-400 text-xs block">BMS Coding / Reset</span>
            <span className="text-sm font-semibold text-gray-200">
              {vehicle.requiresCoding ? 'Recommended (OBD)' : 'Not Required'}
            </span>
          </div>
        </div>
      </div>

      {/* Crucial Stop-Start Compatibility Warning */}
      {isStopStart && (
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-2xl flex-shrink-0 text-amber-600">⚠️</div>
            <div>
              <h4 className="font-bold text-amber-900 text-base">
                Stop-Start Vehicle Alert: AGM or EFB Battery Mandatory
              </h4>
              <p className="text-amber-800 text-sm mt-1 leading-relaxed">
                Your vehicle has an automatic Stop-Start engine management system and regenerative alternator.
                <strong> Do not install a standard lead-acid battery</strong> — doing so can cause the battery to overheat, 
                trigger electronic dashboard warnings, and fail within 2 to 4 months, invalidating the warranty.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Technical Specifications Accordion / Overview */}
      {groupData && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Fitment Specifications for Type {groupData.groupSize}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Exact physical dimensions and electrical rating required for your battery tray.
              </p>
            </div>
            <Link
              href={`/battery-size/${groupData.slug}`}
              className="text-xs font-semibold text-primary-600 hover:text-primary-700 underline"
            >
              Full Type {groupData.groupSize} Guide &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-500 text-xs block">Length</span>
              <span className="font-bold text-gray-900 text-base">{groupData.dimensions.length} mm</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-500 text-xs block">Width</span>
              <span className="font-bold text-gray-900 text-base">{groupData.dimensions.width} mm</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-500 text-xs block">Height</span>
              <span className="font-bold text-gray-900 text-base">{groupData.dimensions.height} mm</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-500 text-xs block">Capacity</span>
              <span className="font-bold text-gray-900 text-base">{groupData.typicalAh}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-500 text-xs block">Cold Cranking</span>
              <span className="font-bold text-gray-900 text-base">{groupData.typicalCCA}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-500 text-xs block">Hold Down</span>
              <span className="font-bold text-gray-900 text-base">{groupData.holddown}</span>
            </div>
          </div>
        </div>
      )}

      {/* Tier Filter Tabs */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h3 className="text-2xl font-bold font-heading text-gray-900">
              Guaranteed Replacement Batteries ({products.length} Options)
            </h3>
            <p className="text-sm text-gray-600">
              Compare UK supplier pricing, warranties, and fitting availability.
            </p>
          </div>

          <div className="flex bg-gray-100 p-1 rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => setSelectedTier('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedTier === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Options
            </button>
            <button
              type="button"
              onClick={() => setSelectedTier('agm')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedTier === 'agm' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Stop-Start AGM
            </button>
            <button
              type="button"
              onClick={() => setSelectedTier('premium')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedTier === 'premium' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Premium OEM
            </button>
            <button
              type="button"
              onClick={() => setSelectedTier('budget')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedTier === 'budget' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Value
            </button>
          </div>
        </div>

        {/* Battery Comparison Cards */}
        <div className="grid grid-cols-1 gap-6">
          {filteredProducts.map((battery) => {
            const lowestPrice = Math.min(...battery.retailers.map(r => r.priceGbp))
            const halfordsOffer = battery.retailers.find(r => r.name.toLowerCase().includes('halfords'))

            return (
              <div
                key={battery.id}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-500 transition-all p-6 shadow-sm overflow-hidden flex flex-col lg:flex-row gap-6 justify-between"
              >
                {/* Battery Specs Column */}
                <div className="lg:max-w-md flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-bold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded text-xs">
                      {battery.brand}
                    </span>
                    <Badge variant={battery.tier === 'agm' ? 'info' : battery.tier === 'premium' ? 'success' : 'default'}>
                      {battery.tier === 'agm' ? 'Stop-Start AGM' : battery.tier === 'premium' ? 'OEM Grade' : 'Standard'}
                    </Badge>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {battery.warrantyYears}-Year Guarantee
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900">
                    {battery.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 mb-3">
                    {battery.recommendedFor}
                  </p>

                  <div className="grid grid-cols-3 gap-2 bg-gray-50 p-3 rounded-xl text-center text-xs mb-4">
                    <div>
                      <span className="text-gray-400 block text-[10px]">CAPACITY</span>
                      <span className="font-bold text-gray-800 text-sm">{battery.ah} Ah</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px]">CRANKING</span>
                      <span className="font-bold text-gray-800 text-sm">{battery.cca} A (EN)</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px]">TECH</span>
                      <span className="font-bold text-gray-800 text-sm">{battery.technology}</span>
                    </div>
                  </div>

                  <ul className="text-xs text-gray-600 space-y-1">
                    {battery.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-emerald-500 font-bold">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Retailer Price Comparison Column */}
                <div className="lg:w-96 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-6 pt-4 lg:pt-0">
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="text-xs font-medium text-gray-500">Compare UK Retailers:</span>
                      <span className="text-sm font-bold text-gray-900">
                        From <span className="text-2xl text-primary-600">£{lowestPrice.toFixed(2)}</span>
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {battery.retailers.map((retailer, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-primary-400 bg-white hover:bg-primary-50/20 transition-all text-xs"
                        >
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-gray-900">{retailer.name}</span>
                              {retailer.badge && (
                                <span className="bg-amber-100 text-amber-800 text-[10px] font-semibold px-1.5 py-0.5 rounded">
                                  {retailer.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-gray-500 block text-[11px]">
                              {retailer.deliveryTime}
                            </span>
                            {retailer.fittingAvailable && (
                              <span className="text-emerald-600 font-medium block text-[11px]">
                                In-store fitting available (+£{retailer.fittingCostGbp})
                              </span>
                            )}
                          </div>

                          <div className="text-right flex flex-col items-end gap-1">
                            <span className="font-bold text-gray-900 text-sm">
                              £{retailer.priceGbp.toFixed(2)}
                            </span>
                            <a
                              href={retailer.url}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors shadow-sm"
                            >
                              View Deal &rarr;
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {halfordsOffer && (
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span>Need it fitted today?</span>
                      <a
                        href={halfordsOffer.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-primary-600 hover:underline font-semibold"
                      >
                        Book Halfords WeFit &rarr;
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Affiliate Disclosure Notice */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-6">
        <p>
          💡 <strong>Affiliate Disclosure:</strong> UK Car Battery Finder is free to use. When you purchase through retailer links on our site (such as Halfords, Tayna, or Euro Car Parts), we may earn a small affiliate commission at no extra cost to you. This supports our independent compatibility verification and maintenance.
        </p>
      </div>
    </div>
  )
}
