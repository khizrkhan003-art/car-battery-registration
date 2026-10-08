'use client'

import React, { useState } from 'react'
import { UK_VEHICLES_DATABASE } from '@/data/uk-vehicles'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { VehicleMatchData } from './BatteryResultCard'

interface MakeModelSelectorProps {
  onSelectVehicle: (data: VehicleMatchData) => void
}

export default function MakeModelSelector({ onSelectVehicle }: MakeModelSelectorProps) {
  const [selectedMake, setSelectedMake] = useState<string>('')
  const [selectedModel, setSelectedModel] = useState<string>('')
  const [selectedYearRange, setSelectedYearRange] = useState<string>('')
  const [selectedEngine, setSelectedEngine] = useState<string>('')

  // Find models for selected make
  const currentMakeData = UK_VEHICLES_DATABASE.find(m => m.slug === selectedMake)
  const models = currentMakeData?.models || []

  // Find years for selected model
  const currentModelData = models.find(m => m.slug === selectedModel)
  const yearRanges = currentModelData?.years || []

  // Find variants for selected year
  const currentYearData = yearRanges.find(y => y.range === selectedYearRange)
  const variants = currentYearData?.variants || []

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(e.target.value)
    setSelectedModel('')
    setSelectedYearRange('')
    setSelectedEngine('')
  }

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value)
    setSelectedYearRange('')
    setSelectedEngine('')
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYearRange(e.target.value)
    setSelectedEngine('')
  }

  const handleFindBattery = () => {
    if (!currentMakeData || !currentModelData || !currentYearData || !selectedEngine) return

    const selectedVariant = variants.find(v => v.engine === selectedEngine)
    if (!selectedVariant) return

    onSelectVehicle({
      make: currentMakeData.make,
      model: currentModelData.name,
      year: selectedYearRange,
      engineSize: selectedVariant.engine,
      fuelType: selectedVariant.fuel,
      hasStopStart: selectedVariant.hasStopStart,
      batteryGroup: selectedVariant.batteryGroup,
      batteryLocation: selectedVariant.batteryLocation,
      requiresCoding: selectedVariant.requiresCoding,
      isDemo: true
    })
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">
          Find Battery by Make & Model
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Don&apos;t have your registration plate to hand? Select your car details below to find the correct battery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Make */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            1. Select Make
          </label>
          <select
            value={selectedMake}
            onChange={handleMakeChange}
            className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Choose Make...</option>
            {UK_VEHICLES_DATABASE.map(m => (
              <option key={m.slug} value={m.slug}>
                {m.make}
              </option>
            ))}
          </select>
        </div>

        {/* Model */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            2. Select Model
          </label>
          <select
            value={selectedModel}
            onChange={handleModelChange}
            disabled={!selectedMake}
            className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-100 disabled:text-gray-400"
          >
            <option value="">{selectedMake ? 'Choose Model...' : 'Select Make First'}</option>
            {models.map(m => (
              <option key={m.slug} value={m.slug}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        {/* Year / Generation */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            3. Year / Generation
          </label>
          <select
            value={selectedYearRange}
            onChange={handleYearChange}
            disabled={!selectedModel}
            className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-100 disabled:text-gray-400"
          >
            <option value="">{selectedModel ? 'Choose Year...' : 'Select Model First'}</option>
            {yearRanges.map((y, idx) => (
              <option key={idx} value={y.range}>
                {y.range}
              </option>
            ))}
          </select>
        </div>

        {/* Engine Variant */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            4. Engine & Trim
          </label>
          <select
            value={selectedEngine}
            onChange={(e) => setSelectedEngine(e.target.value)}
            disabled={!selectedYearRange}
            className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-100 disabled:text-gray-400"
          >
            <option value="">{selectedYearRange ? 'Choose Engine...' : 'Select Year First'}</option>
            {variants.map((v, idx) => (
              <option key={idx} value={v.engine}>
                {v.engine} ({v.fuel})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          type="button"
          onClick={handleFindBattery}
          disabled={!selectedEngine}
          className="w-full sm:w-auto px-8"
        >
          Find Matching Batteries &rarr;
        </Button>
      </div>
    </div>
  )
}
