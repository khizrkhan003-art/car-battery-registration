import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Badge } from '@/components/ui/Badge'
import FAQSection from '@/components/content/FAQSection'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema, generateBatteryProductSchema, generateFAQSchema } from '@/lib/seo/jsonld'
import { batteryGroups, getBatteryGroupBySlug } from '@/data/battery-groups'

interface PageProps {
  params: {
    code: string
  }
}

export function generateStaticParams() {
  return batteryGroups.map((g) => ({
    code: g.slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const group = getBatteryGroupBySlug(params.code)
  if (!group) return { title: 'Battery Not Found' }

  return generatePageMetadata({
    title: `Type ${group.groupSize} Car Battery Guide & Price Comparison`,
    description: `Complete guide to Type ${group.groupSize} car batteries (${group.dimensions.length}x${group.dimensions.width}x${group.dimensions.height}mm, ${group.typicalAh}, ${group.typicalCCA}). Compare Halfords, Tayna & Euro Car Parts prices.`,
    path: `/battery-size/${group.slug}`,
    keywords: [
      `type ${group.groupSize} car battery`,
      `${group.groupSize} battery halfords`,
      `${group.groupSize} battery tayna`,
      `${group.groupSize} car battery euro car parts`,
      `${group.groupSize} battery dimensions`,
      `${group.technology} ${group.groupSize} battery`
    ]
  })
}

export default function BatteryGroupDetailPage({ params }: PageProps) {
  const group = getBatteryGroupBySlug(params.code)

  if (!group) {
    notFound()
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Battery Sizes', href: '/battery-size' },
    { label: `Type ${group.groupSize}`, href: `/battery-size/${group.slug}` },
  ]

  const faqs = [
    {
      question: `What are the exact dimensions of a Type ${group.groupSize} battery?`,
      answer: `A Type ${group.groupSize} battery measures exactly ${group.dimensions.length}mm in length, ${group.dimensions.width}mm in width, and ${group.dimensions.height}mm in height (including the recessed terminals). It typically uses a standard B13 hold-down base flange.`
    },
    {
      question: `What capacity and cold cranking amps (CCA) should a ${group.groupSize} battery have?`,
      answer: `Standard Type ${group.groupSize} batteries offer capacities between ${group.typicalAh} and cold cranking ratings between ${group.typicalCCA}. High-performance AGM variants typically sit at the top end of this range.`
    },
    {
      question: `Is Type ${group.groupSize} compatible with Stop-Start vehicles?`,
      answer: group.technology === 'AGM' || group.groupSize.includes('AGM')
        ? `Yes! Type ${group.groupSize} is an Absorbent Glass Mat (AGM) battery engineered specifically for modern Stop-Start vehicles and regenerative braking systems.`
        : `If your vehicle has Stop-Start, you should look for the AGM equivalent (e.g. Type 096AGM or 027AGM). Installing a conventional wet battery in a stop-start vehicle will cause premature failure.`
    }
  ]

  const lowestPrice = Math.min(
    ...group.products.flatMap(p => p.retailers.map(r => r.priceGbp))
  )

  const productSchema = generateBatteryProductSchema({
    name: `Type ${group.groupSize} Automotive Car Battery`,
    brand: 'Bosch / Varta / Yuasa',
    groupSize: group.groupSize,
    description: group.description,
    priceMin: lowestPrice,
    priceMax: lowestPrice * 1.8,
  })

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JsonLd data={generateBreadcrumbSchema(breadcrumbs.map(b => ({ label: b.label, url: b.href })))} />
        <JsonLd data={productSchema} />
        <JsonLd data={generateFAQSchema(faqs)} />

        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        {/* Header Hero Banner */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="bg-primary-50 text-primary-700 font-bold text-xs px-2.5 py-1 rounded">
                  UK Standard Group Code
                </span>
                <Badge variant={group.technology === 'AGM' ? 'info' : 'default'}>
                  {group.technology === 'AGM' ? 'Stop-Start AGM' : 'Standard Flooded / EFB'}
                </Badge>
                {group.enCode && (
                  <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded">
                    DIN / EN: {group.enCode}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950">
                Type {group.groupSize} Car Battery
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                {group.description}
              </p>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl text-center md:text-right min-w-[200px]">
              <span className="text-xs text-gray-400 block mb-1">UK Online Prices</span>
              <span className="text-3xl font-extrabold text-[#FFD200]">
                From £{lowestPrice.toFixed(2)}
              </span>
              <span className="text-[11px] text-gray-400 block mt-1">Next Day UK Delivery</span>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-6 text-center">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-gray-500 text-xs block mb-1">Length</span>
              <span className="font-extrabold text-gray-900 text-lg">{group.dimensions.length} mm</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-gray-500 text-xs block mb-1">Width</span>
              <span className="font-extrabold text-gray-900 text-lg">{group.dimensions.width} mm</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-gray-500 text-xs block mb-1">Height</span>
              <span className="font-extrabold text-gray-900 text-lg">{group.dimensions.height} mm</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-gray-500 text-xs block mb-1">Capacity</span>
              <span className="font-extrabold text-gray-900 text-lg">{group.typicalAh}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-gray-500 text-xs block mb-1">Cold Cranking</span>
              <span className="font-extrabold text-gray-900 text-lg">{group.typicalCCA}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-gray-500 text-xs block mb-1">Terminal Layout</span>
              <span className="font-extrabold text-gray-900 text-xs block pt-1">{group.terminalLayout}</span>
            </div>
          </div>
        </div>

        {/* Retailer Comparison Products */}
        <div className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-950">
              Top-Rated Type {group.groupSize} Batteries &amp; UK Retailer Deals
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Compare prices across Halfords, Tayna Batteries, Euro Car Parts, and Amazon UK.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {group.products.map((battery) => {
              const batteryMin = Math.min(...battery.retailers.map(r => r.priceGbp))
              return (
                <div
                  key={battery.id}
                  className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row justify-between gap-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-bold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded text-xs">
                        {battery.brand}
                      </span>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {battery.warrantyYears}-Year Guarantee
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-950">
                      {battery.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 mb-4 leading-relaxed">
                      {battery.recommendedFor}
                    </p>

                    <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl text-center text-xs mb-4 max-w-md">
                      <div>
                        <span className="text-gray-400 block text-[10px]">CAPACITY</span>
                        <span className="font-bold text-gray-900 text-sm">{battery.ah} Ah</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">CRANKING</span>
                        <span className="font-bold text-gray-900 text-sm">{battery.cca} A (EN)</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">TECH</span>
                        <span className="font-bold text-gray-900 text-sm">{battery.technology}</span>
                      </div>
                    </div>

                    <ul className="text-xs text-gray-600 space-y-1.5">
                      {battery.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Retailer Buttons */}
                  <div className="lg:w-96 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-8 pt-4 lg:pt-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-baseline mb-3">
                        <span className="text-xs font-semibold text-gray-500">Compare Retailers:</span>
                        <span className="text-sm font-bold text-gray-900">
                          From <span className="text-2xl text-primary-600 font-black">£{batteryMin.toFixed(2)}</span>
                        </span>
                      </div>

                      <div className="space-y-2">
                        {battery.retailers.map((ret, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl border border-gray-200 bg-white hover:border-primary-400 transition-colors flex items-center justify-between text-xs"
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-gray-900">{ret.name}</span>
                                {ret.badge && (
                                  <span className="text-[10px] bg-amber-100 text-amber-900 font-semibold px-1 rounded">
                                    {ret.badge}
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-gray-500 block">{ret.deliveryTime}</span>
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-gray-900 text-sm block mb-1">
                                £{ret.priceGbp.toFixed(2)}
                              </span>
                              <a
                                href={ret.url}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-3 py-1 rounded-md text-xs transition-colors"
                              >
                                View Deal &rarr;
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Common Vehicles Fitted */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-gray-950 mb-4">
            Popular UK Vehicles Fitted with Type {group.groupSize}
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            The Type {group.groupSize} battery is factory standard or upgraded fitment on the following models:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {group.commonVehicles.map((car, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl text-xs font-semibold text-gray-800 border border-slate-100 flex items-center gap-2">
                <span className="text-primary-600 font-bold">🚗</span>
                {car}
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <FAQSection faqs={faqs} title={`Frequently Asked Questions: Type ${group.groupSize}`} />
        </div>
      </div>
    </div>
  )
}
