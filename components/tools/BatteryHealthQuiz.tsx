'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export default function BatteryHealthQuiz() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<{
    symptom?: string
    age?: string
    driving?: string
    headlights?: string
  }>({})

  const handleSelect = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }

  const handleNext = () => {
    setStep(prev => prev + 1)
  }

  const handleReset = () => {
    setStep(1)
    setAnswers({})
  }

  // Calculate diagnostic result
  const calculateResult = () => {
    let score = 0 // 0 to 10 scale of urgency
    if (answers.symptom === 'clicking') score += 4
    if (answers.symptom === 'slow-crank') score += 3
    if (answers.symptom === 'stop-start-disabled') score += 2
    if (answers.symptom === 'warning-light') score += 3
    if (answers.symptom === 'nothing') score += 5

    if (answers.age === '5-plus') score += 4
    if (answers.age === '3-4') score += 2
    if (answers.age === '1-2') score += 1

    if (answers.driving === 'short-trips') score += 1
    if (answers.driving === 'parked-weeks') score += 2

    if (answers.headlights === 'dim') score += 2

    if (score >= 6) {
      return {
        level: 'critical',
        badge: 'Critical: Immediate Replacement Needed',
        color: 'red',
        title: 'Your Battery is Failing and Likely to Leave You Stranded',
        summary: 'Based on your vehicle symptoms and battery age, the internal lead-calcium plates or AGM separator have degraded beyond safe operational capacity. Jump-starting will only be a temporary band-aid.',
        action: 'We strongly advise fitting a replacement battery before your next essential journey.',
        urgency: 'Replace within 24-48 hours'
      }
    } else if (score >= 3) {
      return {
        level: 'warning',
        badge: 'Warning: Moderate Degradation / Low Charge',
        color: 'amber',
        title: 'Battery Weakened: Requires Deep Charge or Load Test',
        summary: 'Your battery is showing signs of sulfation or low state-of-charge. If you primarily do short journeys, your alternator may not have sufficient runtime to replenish the energy used starting the engine.',
        action: 'Connect to an intelligent smart charger (e.g. CTEK or NOCO) for 12 hours. If slow-cranking persists after a full charge, replace the battery.',
        urgency: 'Monitor and test with a multimeter'
      }
    } else {
      return {
        level: 'good',
        badge: 'Healthy: Routine Maintenance',
        color: 'emerald',
        title: 'Battery Appears Healthy',
        summary: 'Your symptoms do not indicate a dying battery. Any hesitation could be due to dirty battery terminals, a loose ground strap, or starter motor solenoid wear.',
        action: 'Check that battery clamps are tight and corrosion-free. Consider a trickle charger if the car is parked for long periods.',
        urgency: 'All clear'
      }
    }
  }

  const result = calculateResult()

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
            Free UK Diagnostic Tool
          </span>
          <h3 className="text-2xl font-bold font-heading text-gray-900 mt-1">
            Car Battery Health &amp; Failure Diagnostic
          </h3>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 rounded-lg text-gray-600">
          Step {Math.min(step, 4)} of 4
        </span>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-800">
            What is the primary symptom you are experiencing when starting the engine?
          </p>
          <div className="space-y-2">
            {[
              { id: 'slow-crank', label: 'Engine turns over sluggishly or takes several seconds to fire' },
              { id: 'clicking', label: 'Rapid clicking sound when turning key / pressing Start button' },
              { id: 'stop-start-disabled', label: 'Stop-Start system has stopped functioning or shows error' },
              { id: 'warning-light', label: 'Battery / Alternator warning light illuminated on dashboard' },
              { id: 'nothing', label: 'Complete electrical blackout (no lights, no dash illumination)' },
              { id: 'routine', label: 'None, just checking as winter approaches' }
            ].map(opt => (
              <label
                key={opt.id}
                className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all text-sm ${
                  answers.symptom === opt.id
                    ? 'border-primary-600 bg-primary-50/40 text-primary-950 font-medium'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="symptom"
                  checked={answers.symptom === opt.id}
                  onChange={() => handleSelect('symptom', opt.id)}
                  className="mr-3 text-primary-600 focus:ring-primary-500"
                />
                {opt.label}
              </label>
            ))}
          </div>
          <div className="pt-4 flex justify-end">
            <Button
              type="button"
              disabled={!answers.symptom}
              onClick={handleNext}
            >
              Next Question &rarr;
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-800">
            Approximately how old is your vehicle&apos;s current battery?
          </p>
          <div className="space-y-2">
            {[
              { id: '1-2', label: 'Under 3 years old (recently replaced)' },
              { id: '3-4', label: '3 to 5 years old (typical UK average lifespan)' },
              { id: '5-plus', label: 'Over 5 years old (original factory or long overdue)' },
              { id: 'unknown', label: 'Not sure / came with the car when bought used' }
            ].map(opt => (
              <label
                key={opt.id}
                className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all text-sm ${
                  answers.age === opt.id
                    ? 'border-primary-600 bg-primary-50/40 text-primary-950 font-medium'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="age"
                  checked={answers.age === opt.id}
                  onChange={() => handleSelect('age', opt.id)}
                  className="mr-3 text-primary-600 focus:ring-primary-500"
                />
                {opt.label}
              </label>
            ))}
          </div>
          <div className="pt-4 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs text-gray-500 hover:text-gray-800 font-semibold"
            >
              &larr; Back
            </button>
            <Button
              type="button"
              disabled={!answers.age}
              onClick={handleNext}
            >
              Next Question &rarr;
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-800">
            What are your typical driving patterns in the UK?
          </p>
          <div className="space-y-2">
            {[
              { id: 'short-trips', label: 'Mostly short journeys under 15 minutes (school run, local grocery)' },
              { id: 'mixed', label: 'Balanced mix of town driving and weekly motorway trips' },
              { id: 'long-distance', label: 'High mileage commute (30+ minutes each way daily)' },
              { id: 'parked-weeks', label: 'Left parked for days or weeks at a time without use' }
            ].map(opt => (
              <label
                key={opt.id}
                className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all text-sm ${
                  answers.driving === opt.id
                    ? 'border-primary-600 bg-primary-50/40 text-primary-950 font-medium'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="driving"
                  checked={answers.driving === opt.id}
                  onChange={() => handleSelect('driving', opt.id)}
                  className="mr-3 text-primary-600 focus:ring-primary-500"
                />
                {opt.label}
              </label>
            ))}
          </div>
          <div className="pt-4 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs text-gray-500 hover:text-gray-800 font-semibold"
            >
              &larr; Back
            </button>
            <Button
              type="button"
              disabled={!answers.driving}
              onClick={handleNext}
            >
              Next Question &rarr;
            </Button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-800">
            Do your headlights dim when the engine is idling, or brighten when revving?
          </p>
          <div className="space-y-2">
            {[
              { id: 'dim', label: 'Yes, noticeable flickering or dimming at traffic lights' },
              { id: 'normal', label: 'No, lights remain consistently bright' },
              { id: 'unsure', label: 'Haven’t noticed or car has modern LED headlamps' }
            ].map(opt => (
              <label
                key={opt.id}
                className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all text-sm ${
                  answers.headlights === opt.id
                    ? 'border-primary-600 bg-primary-50/40 text-primary-950 font-medium'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="headlights"
                  checked={answers.headlights === opt.id}
                  onChange={() => handleSelect('headlights', opt.id)}
                  className="mr-3 text-primary-600 focus:ring-primary-500"
                />
                {opt.label}
              </label>
            ))}
          </div>
          <div className="pt-4 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="text-xs text-gray-500 hover:text-gray-800 font-semibold"
            >
              &larr; Back
            </button>
            <Button
              type="button"
              disabled={!answers.headlights}
              onClick={() => setStep(5)}
            >
              View Diagnosis &rarr;
            </Button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-6 animate-fadeIn">
          <div className={`p-6 rounded-2xl border ${
            result.level === 'critical'
              ? 'bg-red-50 border-red-200 text-red-950'
              : result.level === 'warning'
              ? 'bg-amber-50 border-amber-200 text-amber-950'
              : 'bg-emerald-50 border-emerald-200 text-emerald-950'
          }`}>
            <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
              result.level === 'critical'
                ? 'bg-red-200 text-red-800'
                : result.level === 'warning'
                ? 'bg-amber-200 text-amber-800'
                : 'bg-emerald-200 text-emerald-800'
            }`}>
              {result.badge}
            </span>

            <h4 className="text-xl sm:text-2xl font-bold font-heading mt-3 mb-2">
              {result.title}
            </h4>

            <p className="text-sm leading-relaxed mb-4 opacity-90">
              {result.summary}
            </p>

            <div className="bg-white/80 p-4 rounded-xl border border-current/10 text-xs sm:text-sm font-medium">
              <strong>Recommended Action:</strong> {result.action}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-gray-500 hover:text-gray-800 underline"
            >
              Retake Diagnostic Quiz
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
            >
              Find Correct Battery For My Car &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
