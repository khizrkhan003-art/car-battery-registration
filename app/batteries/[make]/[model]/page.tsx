import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Badge } from '@/components/ui/Badge'
import FAQSection from '@/components/content/FAQSection'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/jsonld'
import { UK_VEHICLES_DATABASE } from '@/data/uk-vehicles'
import { getBatteryGroupBySlug } from '@/data/battery-groups'

interface PageProps {
  params: {
    make: string
    model: string
  }
}

export function generateStaticParams() {
  const paths: { make: string; model: string }[] = []
  UK_VEHICLES_DATABASE.forEach((m) => {
    m.models.forEach((mod) => {
      paths.push({
        make: m.slug,
        model: mod.slug,
      })
    })
  })
  return paths
}

export function generateMetadata({ params }: PageProps): Metadata {
  const makeData = UK_VEHICLES_DATABASE.find(m => m.slug === params.make.toLowerCase())
  const modelData = makeData?.models.find(mod => mod.slug === params.model.toLowerCase())
  if (!makeData || !modelData) return { title: 'Vehicle Not Found' }

  return generatePageMetadata({
    title: `${makeData.make} ${modelData.name} Car Battery Size & Replacement Guide`,
    description: `Exact replacement car battery sizes for the ${makeData.make} ${modelData.name}. Stop-Start AGM/EFB compatibility, battery tray dimensions, locations, and UK price comparison.`,
    path: `/batteries/${makeData.slug}/${modelData.slug}`,
    keywords: [
      `${makeData.make} ${modelData.name} car battery`,
      `${makeData.make} ${modelData.name} battery size`,
      `${makeData.make} ${modelData.name} stop start battery`,
      `${makeData.make} ${modelData.name} battery replacement Halfords`
    ]
  })
}

export default function VehicleModelPage({ params }: PageProps) {
  const makeData = UK_VEHICLES_DATABASE.find(m => m.slug === params.make.toLowerCase())
  const modelData = makeData?.models.find(mod => mod.slug === params.model.toLowerCase())

  if (!makeData || !modelData) notFound()

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: makeData.make, href: `/batteries/${makeData.slug}` },
    { label: modelData.name, href: `/batteries/${makeData.slug}/${modelData.slug}` },
  ]

  const faqs = [
    {
      question: `What battery size does a ${makeData.make} ${modelData.name} take?`,
      answer: `Depending on the engine and year of manufacture, a ${makeData.make} ${modelData.name} typically takes either a Type 075, Type 027, or Type 096 battery. Models equipped with Stop-Start require an AGM (Absorbent Glass Mat) or EFB version.`
    },
    {
      question: `Where is the battery located in a ${makeData.make} ${modelData.name}?`,
      answer: `In most ${makeData.make} ${modelData.name} models, the battery is situated in the front engine bay. In certain performance or hybrid models, it may be located in the boot floor or under the rear seat.`
    },
    {
      question: `Does the ${makeData.make} ${modelData.name} need battery coding when replaced?`,
      answer: `If your ${modelData.name} features Stop-Start technology and a Battery Monitoring Sensor (BMS) on the negative terminal, performing an OBD BMS reset is strongly recommended to recalibrate the alternator.`
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JsonLd data={generateBreadcrumbSchema(breadcrumbs.map(b => ({ label: b.label, url: b.href })))} />
        <JsonLd data={generateFAQSchema(faqs)} />

        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        {/* Hero */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm mb-12">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
            Vehicle Fitment Guide
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950 mt-2 mb-4">
            {makeData.make} {modelData.name} Car Battery Guide
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Find the exact replacement battery for your {makeData.make} {modelData.name}. Below are the verified battery group sizes, stop-start specifications, and dimensions for every generation and engine option.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#FFD200] hover:bg-[#ffdb33] text-black font-bold px-5 py-3 rounded-xl border border-black/20 text-sm shadow-sm transition-all"
            >
              <span>🔍</span> Look Up Exact {modelData.name} by Reg Plate
            </Link>
          </div>
        </div>

        {/* Generations & Engines Breakdown */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl font-bold font-heading text-gray-900">
            {makeData.make} {modelData.name} Generations &amp; Engine Variants
          </h2>

          {modelData.years.map((gen, gIdx) => (
            <div
              key={gIdx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="bg-slate-900 text-white p-5 flex justify-between items-center">
                <h3 className="font-bold text-lg font-heading">
                  {gen.range}
                </h3>
                <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                  {gen.variants.length} engine variants
                </span>
              </div>

              <div className="divide-y divide-gray-100">
                {gen.variants.map((v, vIdx) => {
                  const bGroup = getBatteryGroupBySlug(v.batteryGroup)
                  return (
                    <div
                      key={vIdx}
                      className="p-5 sm:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-950 text-base">
                            {v.engine}
                          </h4>
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">
                            {v.fuel}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          Location: {v.batteryLocation} • BMS Coding: {v.requiresCoding ? 'Required' : 'Not Needed'}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span className="text-xs text-gray-500 block">Required Battery</span>
                          <span className="font-extrabold text-primary-600 text-base">
                            Type {v.batteryGroup}
                          </span>
                        </div>

                        {v.hasStopStart && (
                          <Badge variant="info">Stop-Start AGM</Badge>
                        )}

                        <Link
                          href={`/battery-size/${bGroup?.slug || v.batteryGroup.toLowerCase()}`}
                          className="bg-slate-900 hover:bg-primary-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                        >
                          View Battery Deals &rarr;
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <FAQSection faqs={faqs} title={`${makeData.make} ${modelData.name} Battery FAQs`} />
        </div>
      </div>
    </div>
  )
}
