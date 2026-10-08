import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQSection from '@/components/content/FAQSection'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/jsonld'

export const metadata: Metadata = generatePageMetadata({
  title: 'Where to Recycle Old Car Batteries in the UK (& Scrap Cash Value)',
  description: 'How to legally dispose of an old car battery in the UK. Local council recycling centres, scrap metal merchant cash values (£5-£15), and hazardous waste laws.',
  path: '/guides/car-battery-recycling-uk',
  keywords: ['car battery recycling uk', 'scrap car battery value uk', 'where to dispose of car battery', 'halfords old battery recycle']
})

export default function CarBatteryRecyclingGuidePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Car Battery Recycling UK', href: '/guides/car-battery-recycling-uk' },
  ]

  const faqs = [
    {
      question: 'How much is an old scrap car battery worth in the UK?',
      answer: 'A standard car battery weighs approximately 15kg to 22kg and is made largely of refined lead. Licensed UK scrap metal merchants pay between £5 and £15 per battery depending on weight and current London Metal Exchange (LME) lead prices. Under the Scrap Metal Dealers Act 2013, payment must be made via bank transfer or cheque (cash is illegal).'
    },
    {
      question: 'Will Halfords or Euro Car Parts take my old car battery?',
      answer: 'Yes! Under the UK Waste Batteries and Accumulators Regulations, major automotive retailers including Halfords and Euro Car Parts offer free take-back of automotive batteries, even if you did not purchase your replacement from them.'
    },
    {
      question: 'Can I put an old car battery in my household wheelie bin?',
      answer: 'Strictly no. Car batteries contain concentrated sulphuric acid and toxic lead. Disposing of a lead-acid battery in household municipal waste is an offence under the Hazardous Waste (England and Wales) Regulations.'
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
              Recycling &amp; Environment
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950 mt-3 mb-4 leading-tight">
              Where to Recycle Old Car Batteries in the UK
            </h1>
            <div className="text-xs text-gray-500 flex items-center gap-3">
              <span>By UK Environmental Automotive Team</span>
              <span>•</span>
              <span>4 Min Read</span>
              <span>•</span>
              <span>Updated October 2026</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed text-sm sm:text-base space-y-6">
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              When you replace your car battery at home, you are left with an old unit containing 10kg to 15kg of pure lead and several litres of hazardous sulphuric acid. Over 98% of an automotive battery can be fully recycled.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">Option 1: Sell to a Scrap Metal Merchant (Earn £5 - £15)</h2>
            <p>
              Because automotive batteries have significant lead content, local scrap metal dealers purchase used batteries by weight. A typical 096 or 019 battery fetches around £8 to £15.
            </p>
            <p className="text-xs text-gray-500 italic">
              Note: Under the Scrap Metal Dealers Act 2013, merchants cannot pay in physical banknotes. You must bring valid UK photo ID (driving licence or passport) and proof of address, with payment sent directly to your UK bank account.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">Option 2: Local Council Household Waste Recycling Centre (HWRC)</h2>
            <p>
              Every local authority in England, Scotland, Wales, and Northern Ireland provides designated hazardous battery bins at council recycling centres (the &ldquo;tip&rdquo;). This service is completely free of charge for householders.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">Option 3: Retailer Free Drop-Off</h2>
            <p>
              If you live near a <strong>Halfords</strong>, <strong>Euro Car Parts</strong>, or <strong>GSF Car Parts</strong> branch, they will accept your old automotive battery for safe environmental recycling free of charge.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <FAQSection faqs={faqs} title="Frequently Asked Questions" />
          </div>
        </article>
      </div>
    </div>
  )
}
