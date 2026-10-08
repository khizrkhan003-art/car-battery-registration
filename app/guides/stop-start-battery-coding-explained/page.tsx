import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQSection from '@/components/content/FAQSection'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/jsonld'

export const metadata: Metadata = generatePageMetadata({
  title: 'Why Stop-Start Car Batteries Require BMS Coding & Registration',
  description: 'Understand why BMW, Audi, VW, Ford, and Mercedes require battery registration when fitted with a new battery. What happens if you skip BMS coding.',
  path: '/guides/stop-start-battery-coding-explained',
  keywords: ['battery registration uk', 'battery coding explained', 'bmw battery registration', 'what happens if you dont code car battery']
})

export default function StopStartCodingGuidePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Battery Coding Explained', href: '/guides/stop-start-battery-coding-explained' },
  ]

  const faqs = [
    {
      question: 'Will my car start and drive if I do not code the new battery?',
      answer: 'Yes, your car will start and drive normally immediately after physical installation. However, the alternator will continue running an aggressive charging programme designed for your old dying battery, which can overcharge and boil the electrolyte in the new battery, shortening its lifespan by up to 50%.'
    },
    {
      question: 'Which car brands require battery coding in the UK?',
      answer: 'Vehicles with intelligent Battery Monitoring Sensors (BMS) include BMW (from 2002 onwards), Audi, Volkswagen, Skoda, Seat (from 2008 onwards), Mercedes-Benz, Ford, Volvo, and Jaguar Land Rover.'
    },
    {
      question: 'How much does battery coding cost in the UK?',
      answer: 'Halfords and independent garages typically charge £15 to £30 for battery registration when purchased in-store. Alternatively, DIY handheld OBD scanners (like Carly, OBDeleven, or Autel) can register batteries in under two minutes at home.'
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
              Technical Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950 mt-3 mb-4 leading-tight">
              Why Modern Stop-Start Batteries Must Be &ldquo;Coded&rdquo;
            </h1>
            <div className="text-xs text-gray-500 flex items-center gap-3">
              <span>By UK Automotive Diagnostics Specialist</span>
              <span>•</span>
              <span>5 Min Read</span>
              <span>•</span>
              <span>Updated October 2026</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed text-sm sm:text-base space-y-6">
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              If you have recently asked for a quote to replace your car battery at Halfords or a local garage, you may have noticed an additional line item: <strong>Battery Registration / Coding (£15 to £30)</strong>. Many motorists wonder if this is an unnecessary garage upsell. Here is what is actually occurring.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">What is a Battery Monitoring System (BMS)?</h2>
            <p>
              On modern vehicles equipped with Stop-Start systems, the negative battery cable is fitted with an electronic sensor known as the <strong>Battery Monitoring Sensor (BMS)</strong> or Intelligent Battery Sensor (IBS).
            </p>
            <p>
              This sensor monitors current flow, voltage, and internal battery temperature 24 hours a day, calculating the battery&apos;s <em>State of Health (SoH)</em> and <em>State of Charge (SoC)</em>.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">Why Alternator Charging Changes Over Time</h2>
            <p>
              As a lead-acid or AGM battery ages over 4 or 5 years, its internal resistance steadily increases. To compensate and ensure the car continues starting, the engine ECU commands the alternator to deliver higher charging voltages and currents.
            </p>
            <p>
              When you install a brand-new battery with low internal resistance, the car&apos;s computer <strong>does not know a new battery has been fitted</strong> unless you perform a BMS reset. As a result, the alternator blasts the fresh battery with excessive voltage, causing thermal stress, acid gassing, and premature failure.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 not-prose">
              <h4 className="font-bold text-gray-900 text-base mb-2">What Coding Tells the Vehicle:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Resets the internal battery age counter to zero.</li>
                <li>• Updates the Ah capacity (if upgrading from e.g. 70Ah to 80Ah).</li>
                <li>• Updates the battery technology type (e.g. from EFB to AGM).</li>
                <li>• Re-enables dormant features like automatic Stop-Start and heated seat high mode.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <FAQSection faqs={faqs} title="Frequently Asked Questions" />
          </div>

          <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-heading mb-2">Find Your Vehicle&apos;s Exact Specs</h3>
            <p className="text-gray-300 text-sm mb-6">Our tool indicates whether your specific model requires BMS registration.</p>
            <Link
              href="/"
              className="inline-block bg-[#FFD200] text-black font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-[#ffdb33] transition-colors shadow-md"
            >
              Check Your Registration &rarr;
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
