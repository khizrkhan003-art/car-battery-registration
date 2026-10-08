import { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import BatteryHealthQuiz from '@/components/tools/BatteryHealthQuiz'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema } from '@/lib/seo/jsonld'
import JsonLd from '@/components/seo/JsonLd'

export const metadata: Metadata = generatePageMetadata({
  title: 'Free Car Battery Health Checker & Failure Diagnostic Tool UK',
  description: 'Is your car battery dead or just flat? Use our free interactive diagnostic tool to check slow-cranking symptoms, battery age, and whether you need a replacement or recharge.',
  path: '/battery-health-checker',
  keywords: ['car battery health checker', 'is my car battery dead', 'signs car battery dying uk', 'car battery test online']
})

export default function BatteryHealthCheckerPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Battery Health Diagnostic', href: '/battery-health-checker' },
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <JsonLd data={generateBreadcrumbSchema(breadcrumbs.map(b => ({ label: b.label, url: b.href })))} />

        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
            Free UK Diagnostic Tool
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950 mt-2 mb-4">
            Car Battery Health Diagnostic
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Answer 4 quick questions about your starting symptoms and battery age to receive an instant assessment of whether your battery can be recharged or needs urgent replacement.
          </p>
        </div>

        <BatteryHealthQuiz />

        <div className="mt-16 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm prose prose-slate max-w-none text-sm text-gray-700">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Common UK Winter Battery Failure Causes</h2>
          <p>
            Automotive batteries lose up to 35% of their starting capacity when ambient temperatures drop to 0°C, while thicker engine oil requires up to 50% more cranking power from the starter motor. This is why marginal batteries fail on freezing British mornings.
          </p>
          <p>
            If your battery is over 4 years old and struggles to crank after a cold night, the internal lead plates have likely suffered sulfation, reducing the active surface area permanently.
          </p>
        </div>
      </div>
    </div>
  )
}
