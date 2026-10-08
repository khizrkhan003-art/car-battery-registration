'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import BatteryResultCard, { VehicleMatchData } from './BatteryResultCard'

const QUICK_SAMPLES = [
  { reg: 'EA18 WXY', label: 'Golf 1.5 TSI (AGM)' },
  { reg: 'FL15 GTY', label: 'Fiesta 1.0 EcoBoost' },
  { reg: 'BV67 KLO', label: 'BMW 320d (Heavy Duty)' },
  { reg: 'SH19 BTR', label: 'Nissan Qashqai' },
  { reg: 'VO68 LME', label: 'Vauxhall Corsa' },
  { reg: 'MK21 ZPA', label: 'Yaris Hybrid 12V' },
]

interface UKRegistrationLookupProps {
  onVehicleFound?: (vehicle: VehicleMatchData) => void
  initialResult?: VehicleMatchData | null
}

export function UKRegistrationLookup({ onVehicleFound, initialResult = null }: UKRegistrationLookupProps) {
  const [reg, setReg] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<VehicleMatchData | null>(initialResult)

  const formatRegInput = (value: string) => {
    // Strip everything except alphanumeric
    const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, '')
    // Auto insert space for typical 7 char UK reg (e.g. AB12 CDE)
    if (cleaned.length > 4) {
      return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)}`
    }
    return cleaned
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReg(formatRegInput(e.target.value))
    if (error) setError('')
  }

  const performLookup = async (regToSearch: string) => {
    setError('')
    const cleaned = regToSearch.trim()

    if (!cleaned) {
      setError('Please enter a UK vehicle registration number.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/lookup/uk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ registration: cleaned })
      })

      const json = await response.json()

      if (!response.ok || !json.success) {
        throw new Error(json.error?.message || 'Vehicle not found. Please check registration or use manual selector.')
      }

      setResult(json.data)
      if (onVehicleFound) {
        onVehicleFound(json.data)
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    performLookup(reg)
  }

  const handleQuickSample = (sampleReg: string) => {
    setReg(sampleReg)
    performLookup(sampleReg)
  }

  const handleReset = () => {
    setResult(null)
    setReg('')
    setError('')
  }

  return (
    <div className="w-full">
      {!result ? (
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-xl shadow-slate-200/50">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="inline-block bg-primary-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Official DVLA &amp; OE Battery Database
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-gray-950 tracking-tight">
              Enter Your UK Registration
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              We&apos;ll identify your engine size, stop-start specification, and exact battery dimensions in seconds.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            {/* Authentic UK Yellow Number Plate Input Box */}
            <div className="relative mb-4">
              <div className="flex items-center rounded-2xl border-4 border-black bg-[#FFD200] shadow-2xl p-1.5 focus-within:ring-4 focus-within:ring-primary-500/30 transition-all">
                {/* Left Blue UK/Euro Band */}
                <div className="bg-[#003399] text-white flex flex-col items-center justify-between py-3 px-3.5 rounded-xl font-bold select-none h-16 w-14">
                  <span className="text-amber-300 text-sm leading-none font-serif">★</span>
                  <span className="text-xs tracking-wider leading-none">UK</span>
                </div>

                {/* Number Plate Text Input */}
                <input
                  type="text"
                  maxLength={8}
                  placeholder="ENTER REG"
                  value={reg}
                  onChange={handleInputChange}
                  aria-label="UK Vehicle Registration Number"
                  className="w-full bg-transparent text-center font-mono font-black text-3xl sm:text-5xl uppercase tracking-[0.18em] text-black placeholder:text-black/35 focus:outline-none focus:ring-0 selection:bg-black selection:text-[#FFD200]"
                />
              </div>

              {error && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{error}</span>
                </div>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              loading={loading}
              className="w-full text-lg py-4 font-bold bg-primary-600 hover:bg-primary-700 text-white rounded-xl shadow-lg shadow-primary-600/25 transition-all"
            >
              {loading ? 'Searching DVLA Database...' : 'Find My Battery &rarr;'}
            </Button>

            {/* Quick Test Chips */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <span className="block text-xs font-semibold text-gray-500 mb-2.5 text-center">
                Or try a sample registration number:
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {QUICK_SAMPLES.map((s) => (
                  <button
                    key={s.reg}
                    type="button"
                    onClick={() => handleQuickSample(s.reg)}
                    className="text-xs font-mono font-semibold bg-gray-100 hover:bg-amber-100 text-gray-800 hover:text-black px-2.5 py-1.5 rounded-lg border border-gray-200 hover:border-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="bg-[#FFD200] text-black px-1 rounded text-[10px] font-bold">
                      {s.reg}
                    </span>
                    <span className="font-sans text-gray-500 text-[11px]">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-gray-400 text-center mt-6">
              🔒 100% Free lookup. We do not store personal details. DVLA data &amp; OE manufacturer dimensions verified.
            </p>
          </form>
        </div>
      ) : (
        <BatteryResultCard vehicle={result} onReset={handleReset} />
      )}
    </div>
  )
}
