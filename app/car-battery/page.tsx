import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQSection from '@/components/content/FAQSection'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo/jsonld'
import JsonLd from '@/components/seo/JsonLd'

export const metadata: Metadata = generatePageMetadata({
  title: 'UK Car Battery Guide | Types, Sizes & Specifications Explained',
  description: 'Everything UK drivers need to know about car batteries. Learn about AGM, EFB, lead-acid, DIN sizes, CCA ratings, and choosing the right replacement.',
  path: '/car-battery',
})

export default function CarBatteryGuidePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Car Battery Guide', href: '/car-battery' },
  ]

  const faqs = [
    {
      question: 'How long does a car battery last in the UK?',
      answer: 'In the UK climate, a typical car battery lasts between 3 and 5 years. Extreme winter cold, repeated short journeys with heater and lights running, and high electrical loads reduce lifespan. AGM batteries often achieve 5 to 7 years when correctly charged.'
    },
    {
      question: 'What are the main symptoms of a failing car battery?',
      answer: 'Common symptoms include a sluggish engine crank in cold weather, automatic Stop-Start refusing to activate, flickering dashboard lights, clicking solenoids, and a battery warning indicator on the instrument cluster.'
    },
    {
      question: 'Can I replace a car battery myself at home?',
      answer: 'Yes! Replacing a car battery is a straightforward DIY task taking around 20 minutes with basic 10mm and 13mm spanners. Just remember to always disconnect the negative terminal first and reconnect it last for safety.'
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <JsonLd data={generateBreadcrumbSchema(breadcrumbs.map(b => ({ label: b.label, url: b.href })))} />
        <JsonLd data={generateFAQSchema(faqs)} />

        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <article className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="mb-8 pb-6 border-b border-gray-100">
            <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2.5 py-1 rounded">
              Comprehensive Buyer Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950 mt-3 mb-4 leading-tight">
              Car Battery Guide: Types, Sizes &amp; Specs Explained
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Your car battery provides the heavy electrical surge needed to crank the starter motor and stabilises voltage for delicate onboard electronics.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed text-sm sm:text-base space-y-6">
            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-2">Types of Car Batteries</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Conventional (Standard Flooded):</strong> The classic lead-acid battery. Reliable and economical for older vehicles without automatic Stop-Start technology.
              </li>
              <li>
                <strong>AGM (Absorbent Glass Mat):</strong> Premium electrolyte-absorbed glass fleece construction. Mandatory for vehicles with regenerative braking and heavy Stop-Start duty cycles.{' '}
                <Link href="/guides/agm-vs-efb-batteries" className="text-primary-600 hover:underline font-semibold">
                  Read our full AGM vs EFB guide &rarr;
                </Link>
              </li>
              <li>
                <strong>EFB (Enhanced Flooded Battery):</strong> Polyfleece scrim reinforced plates. Designed for entry-level stop-start superminis.
              </li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">Key Specifications Explained</h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <span className="font-bold text-gray-950 text-base block mb-1">Cold Cranking Amps (CCA / EN)</span>
                <p className="text-xs text-gray-600">
                  Measures the electrical current a 12V battery can discharge for 30 seconds at -18°C while maintaining at least 7.2 volts. Essential for diesel and cold UK winter starting.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <span className="font-bold text-gray-950 text-base block mb-1">Amp Hours (Ah)</span>
                <p className="text-xs text-gray-600">
                  Measures total stored energy capacity discharged over a standard 20-hour European test cycle. A 70Ah battery can supply 3.5 Amps continuously for 20 hours.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">UK Group Codes vs Dimensions</h2>
            <p>
              In Britain, batteries are identified by traditional Type numbers such as <strong>063, 075, 027, 096, and 019</strong>. Each number corresponds to an exact millimeter tray dimension and terminal polarity:
            </p>
            <div className="mt-4 not-prose">
              <Link
                href="/battery-size"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:underline"
              >
                Browse all UK Battery Sizes &amp; Dimensions &rarr;
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <FAQSection faqs={faqs} title="Frequently Asked Questions" />
          </div>

          <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-heading mb-2">Find Your Exact Battery in 10 Seconds</h3>
            <p className="text-gray-300 text-sm mb-6">Enter your UK registration plate to verify guaranteed dimensions.</p>
            <Link
              href="/"
              className="inline-block bg-[#FFD200] text-black font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-[#ffdb33] transition-colors shadow-md"
            >
              Start Registration Lookup &rarr;
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
