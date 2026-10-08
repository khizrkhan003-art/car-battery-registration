import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQSection from '@/components/content/FAQSection'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/jsonld'

export const metadata: Metadata = generatePageMetadata({
  title: 'AGM vs EFB Car Batteries: What UK Drivers Need to Know',
  description: 'Understand the difference between AGM (Absorbent Glass Mat) and EFB (Enhanced Flooded) batteries for Stop-Start cars. Learn why downgrading to standard lead-acid causes failure.',
  path: '/guides/agm-vs-efb-batteries',
  keywords: ['agm vs efb battery', 'stop start car battery difference', 'can i replace agm with efb', 'varta agm battery uk']
})

export default function AgmVsEfbGuidePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'AGM vs EFB Batteries', href: '/guides/agm-vs-efb-batteries' },
  ]

  const faqs = [
    {
      question: 'Can I replace an AGM battery with a cheaper EFB or standard battery?',
      answer: 'No. If your vehicle was fitted with an AGM battery from the factory, you must always replace it with another AGM battery. Downgrading to an EFB or conventional flooded battery will cause premature plate degradation, error codes on the dashboard, and early failure.'
    },
    {
      question: 'Can I replace an EFB battery with an AGM battery?',
      answer: 'Yes! Upgrading from an EFB battery to an AGM battery is safe and provides higher cold cranking power and longer service life, provided the physical dimensions match and your vehicle BMS is recalibrated if required.'
    },
    {
      question: 'How long do AGM batteries last compared to standard batteries?',
      answer: 'In typical UK driving conditions, high-quality AGM batteries (such as Varta Silver Dynamic or Bosch S5 A) last between 5 and 7 years, compared to 3 to 5 years for conventional lead-acid batteries.'
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
              Battery Technology Explained
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950 mt-3 mb-4 leading-tight">
              AGM vs EFB Batteries: The Complete UK Stop-Start Guide
            </h1>
            <div className="text-xs text-gray-500 flex items-center gap-3">
              <span>By UK Automotive Engineering Team</span>
              <span>•</span>
              <span>6 Min Read</span>
              <span>•</span>
              <span>Updated October 2026</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed text-sm sm:text-base space-y-6">
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              If your vehicle was registered in the UK within the last ten years, there is an 80% chance it has an automatic engine Stop-Start system. When replacing the battery, you will see two prominent options: <strong>AGM</strong> and <strong>EFB</strong>. Understanding the differences is vital to avoid wasting money and damaging your car.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">What is an AGM Battery?</h2>
            <p>
              <strong>AGM stands for Absorbent Glass Mat</strong>. Rather than submerging lead plates in liquid sulphuric acid like traditional batteries, an AGM battery uses ultra-fine fibreglass mats sandwiched between the plates. These mats absorb 100% of the electrolyte acid like a sponge.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zero Spillage:</strong> Completely sealed valve-regulated (VRLA) construction; cannot leak even if the outer casing cracks.</li>
              <li><strong>3x Cyclic Endurance:</strong> Capable of withstanding up to 360,000 engine start cycles without internal plate distortion.</li>
              <li><strong>Regenerative Braking Absorption:</strong> Accepts rapid, high-current charging surges produced by modern smart alternators when coasting or braking.</li>
              <li><strong>Cold Cranking Amps:</strong> Delivers superior cranking current on freezing British winter mornings.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">What is an EFB Battery?</h2>
            <p>
              <strong>EFB stands for Enhanced Flooded Battery</strong>. It is an improved, heavy-duty evolution of the classic wet flooded lead-acid battery. Inside, a polyfleece scrim retains the active mass on the positive plate, providing approximately double the cyclic endurance of a basic battery.
            </p>
            <p>
              EFB batteries are primarily fitted to entry-level small hatchbacks with basic Stop-Start systems that do <em>not</em> feature regenerative braking.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">Comparison: AGM vs EFB vs Standard</h2>
            <div className="overflow-x-auto not-prose my-6">
              <table className="w-full text-left text-xs sm:text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-gray-900 font-bold">
                  <tr>
                    <th className="p-3 border-b">Feature</th>
                    <th className="p-3 border-b">Standard Wet</th>
                    <th className="p-3 border-b">EFB</th>
                    <th className="p-3 border-b text-primary-700">AGM (Best)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-semibold">Engine Starts</td>
                    <td className="p-3 text-gray-600">~20,000</td>
                    <td className="p-3 text-gray-600">~85,000</td>
                    <td className="p-3 font-bold text-emerald-600">360,000+</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Stop-Start Compatible</td>
                    <td className="p-3 text-red-600">No</td>
                    <td className="p-3 text-amber-600">Basic systems only</td>
                    <td className="p-3 text-emerald-600 font-bold">Full Smart &amp; Hybrid</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Regenerative Braking</td>
                    <td className="p-3 text-red-600">No</td>
                    <td className="p-3 text-red-600">No</td>
                    <td className="p-3 text-emerald-600 font-bold">Yes (Essential)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Typical UK Lifespan</td>
                    <td className="p-3">3-4 years</td>
                    <td className="p-3">4-5 years</td>
                    <td className="p-3 font-bold">5-7 years</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Typical UK Price</td>
                    <td className="p-3">£55 - £85</td>
                    <td className="p-3">£85 - £120</td>
                    <td className="p-3">£120 - £180</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl not-prose my-8">
              <h4 className="font-bold text-amber-950 text-base">The Golden Rule of Battery Replacement:</h4>
              <p className="text-amber-900 text-sm mt-1">
                <strong>Always replace like-for-like or upgrade.</strong> You can safely upgrade an EFB car to an AGM battery. You must <em>never</em> replace an AGM battery with an EFB or conventional battery.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <FAQSection faqs={faqs} title="Frequently Asked Questions" />
          </div>

          <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-heading mb-2">Check What Your Car Needs</h3>
            <p className="text-gray-300 text-sm mb-6">Enter your UK registration number to instantly detect whether your vehicle requires AGM or EFB.</p>
            <Link
              href="/"
              className="inline-block bg-[#FFD200] text-black font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-[#ffdb33] transition-colors shadow-md"
            >
              Start Free Registration Lookup &rarr;
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
