import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema } from '@/lib/seo/jsonld'
import JsonLd from '@/components/seo/JsonLd'

export const metadata: Metadata = generatePageMetadata({
  title: 'UK Car Battery Guides, Fitting & Technology Advice',
  description: 'In-depth automotive battery advice for UK motorists. Learn about AGM vs EFB technologies, step-by-step DIY fitting, Stop-Start coding, and scrap lead recycling.',
  path: '/guides',
})

const GUIDES = [
  {
    slug: 'agm-vs-efb-batteries',
    title: 'AGM vs EFB Batteries: Which One Does Your Stop-Start Car Need?',
    description: 'Learn the critical differences between Absorbent Glass Mat and Enhanced Flooded Batteries. Understand what happens if you install the wrong one in a stop-start vehicle.',
    category: 'Battery Technology',
    readTime: '6 min read',
    date: 'Updated October 2026'
  },
  {
    slug: 'how-to-change-car-battery-uk',
    title: 'How to Change a Car Battery at Home (UK Step-by-Step DIY Guide)',
    description: 'Safe step-by-step instructions on removing and installing a replacement battery, terminal safety, retaining radio codes, and tools required.',
    category: 'DIY Maintenance',
    readTime: '8 min read',
    date: 'Updated October 2026'
  },
  {
    slug: 'stop-start-battery-coding-explained',
    title: 'Why Modern Stop-Start Batteries Must Be Coded (BMS Reset Explained)',
    description: 'Why BMW, Audi, VW, Ford, and Mercedes-Benz require Battery Management System registration. How driving with an uncoded battery damages alternator charging.',
    category: 'Technical Guide',
    readTime: '5 min read',
    date: 'Updated October 2026'
  },
  {
    slug: 'car-battery-recycling-uk',
    title: 'Where to Recycle Old Car Batteries in the UK (& Scrap Value Guide)',
    description: 'UK environmental disposal regulations, local council household recycling centres, and how to get paid £5 to £15 cash scrap value for old lead-acid units.',
    category: 'Recycling & Legal',
    readTime: '4 min read',
    date: 'Updated October 2026'
  }
]

export default function GuidesHubPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JsonLd data={generateBreadcrumbSchema(breadcrumbs.map(b => ({ label: b.label, url: b.href })))} />

        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
            Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950 mt-2 mb-4">
            Car Battery Guides &amp; Technical Advice
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Written and verified by UK automotive technicians. Everything you need to know about battery chemistry, fitment warnings, and saving money on replacement costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-primary-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2.5 py-1 rounded">
                    {guide.category}
                  </span>
                  <span className="text-xs text-gray-400">{guide.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-heading text-gray-950 group-hover:text-primary-600 transition-colors mb-3">
                  {guide.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs font-semibold text-primary-600">
                <span>{guide.date}</span>
                <span className="group-hover:translate-x-1 transition-transform">Read Guide &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
