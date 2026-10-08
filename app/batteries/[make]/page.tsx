import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { UKRegistrationLookup } from '@/components/lookup/UKRegistrationLookup'
import FAQSection from '@/components/content/FAQSection'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/jsonld'
import { UK_VEHICLES_DATABASE } from '@/data/uk-vehicles'

interface PageProps {
  params: {
    make: string
  }
}

export function generateStaticParams() {
  return UK_VEHICLES_DATABASE.map((m) => ({
    make: m.slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const makeData = UK_VEHICLES_DATABASE.find(m => m.slug === params.make.toLowerCase())
  if (!makeData) return { title: 'Make Not Found' }

  return generatePageMetadata({
    title: `${makeData.make} Car Battery Finder | Find By Reg Number`,
    description: `Find the guaranteed replacement car battery for your ${makeData.make}. Lookup battery sizes, Stop-Start AGM compatibility, and compare Halfords & Tayna prices.`,
    path: `/batteries/${makeData.slug}`,
    keywords: [
      `${makeData.make} car battery`,
      `${makeData.make} battery finder`,
      `${makeData.make} stop start battery`,
      `${makeData.make} battery replacement cost UK`
    ]
  })
}

export default function MakePage({ params }: PageProps) {
  const makeData = UK_VEHICLES_DATABASE.find(m => m.slug === params.make.toLowerCase())
  if (!makeData) notFound()

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Car Makes', href: '/#makes' },
    { label: makeData.make, href: `/batteries/${makeData.slug}` },
  ]

  const faqs = [
    {
      question: `How do I know which battery fits my ${makeData.make}?`,
      answer: `Enter your vehicle registration plate in our free lookup tool above. We verify your exact ${makeData.make} model, year of manufacture, and engine displacement to provide guaranteed fitting batteries.`
    },
    {
      question: `Do modern ${makeData.make} cars require battery coding?`,
      answer: `Most ${makeData.make} vehicles manufactured after 2012 fitted with automatic Stop-Start technology require Battery Management System (BMS) registration when replacing the battery. This ensures the alternator charging curve is reset for maximum lifespan.`
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JsonLd data={generateBreadcrumbSchema(breadcrumbs.map(b => ({ label: b.label, url: b.href })))} />
        <JsonLd data={generateFAQSchema(faqs)} />

        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
            Vehicle Manufacturer Guide
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950 mt-2 mb-4">
            {makeData.make} Replacement Car Batteries
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Select your {makeData.make} model below or enter your UK registration plate to find guaranteed fitting OEM, AGM, and heavy-duty replacement batteries.
          </p>
        </div>

        {/* Reg Lookup Box */}
        <div className="max-w-2xl mx-auto mb-16">
          <UKRegistrationLookup />
        </div>

        {/* Models Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
            Select Your {makeData.make} Model
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {makeData.models.map((model) => (
              <Link
                key={model.slug}
                href={`/batteries/${makeData.slug}/${model.slug}`}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary-500 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-950 group-hover:text-primary-600 transition-colors">
                    {makeData.make} {model.name}
                  </h3>
                  <span className="text-primary-600 font-bold text-sm">&rarr;</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Generations: {model.years.map(y => y.range).join(', ')}
                </p>
                <div className="text-xs font-semibold text-primary-600 bg-primary-50 py-1.5 px-3 rounded-lg inline-block">
                  View Battery Sizes &amp; Deals
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <FAQSection faqs={faqs} title={`${makeData.make} Battery FAQs`} />
        </div>
      </div>
    </div>
  )
}
