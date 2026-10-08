import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema } from '@/lib/seo/jsonld'
import JsonLd from '@/components/seo/JsonLd'
import BatteryGroupCard from '@/components/battery/BatteryGroupCard'
import { batteryGroups } from '@/data/battery-groups'

export const metadata: Metadata = generatePageMetadata({
  title: 'UK Car Battery Sizes & Group Codes (096, 027, 063, 075, 019)',
  description: 'Complete guide to UK car battery DIN group codes. Compare exact physical dimensions, capacity (Ah), cold cranking amps (CCA), and Stop-Start AGM compatibility.',
  path: '/battery-size',
})

export default function BatterySizePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Battery Sizes', href: '/battery-size' },
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JsonLd data={generateBreadcrumbSchema(breadcrumbs.map(b => ({ label: b.label, url: b.href })))} />
        
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
            UK Automotive Battery Standards
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-gray-950 mt-2 mb-4">
            UK Car Battery Sizes &amp; Group Codes Explained
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            In the United Kingdom, automotive replacement batteries are classified using traditional three-digit UK Type Codes (such as 063, 027, 075, and 096) alongside European DIN/EN casing codes (such as LN1, LN2, LN3). Select a size below to view dimensions, vehicle fitments, and best prices.
          </p>
        </div>

        {/* Comparison Dimensions Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-12 overflow-x-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            UK Battery Code Quick Reference Chart
          </h2>
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-gray-700">
                <th className="py-3 px-4 font-bold">UK Type Code</th>
                <th className="py-3 px-4 font-bold">Dimensions (L × W × H)</th>
                <th className="py-3 px-4 font-bold">Typical Ah</th>
                <th className="py-3 px-4 font-bold">Cold Cranking (CCA)</th>
                <th className="py-3 px-4 font-bold">Technology</th>
                <th className="py-3 px-4 font-bold">Common Vehicles</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {batteryGroups.map((g) => (
                <tr key={g.slug} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-primary-600">
                    <Link href={`/battery-size/${g.slug}`} className="hover:underline">
                      Type {g.groupSize}
                    </Link>
                  </td>
                  <td className="py-3 px-4 font-mono text-gray-600">
                    {g.dimensions.length} × {g.dimensions.width} × {g.dimensions.height} mm
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{g.typicalAh}</td>
                  <td className="py-3 px-4 text-gray-700">{g.typicalCCA}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      g.technology === 'AGM' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {g.technology || 'Conventional'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-xs text-gray-500 max-w-xs truncate">
                    {g.commonVehicles.slice(0, 2).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {batteryGroups.map((group) => (
            <BatteryGroupCard key={group.slug} group={group} />
          ))}
        </div>

        {/* SEO Explanatory Content */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-2xl font-bold text-gray-900">Why Battery Physical Dimensions Matter</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            In modern European and UK vehicles, the battery tray in the engine bay or boot is engineered to exacting tolerances. Installing a battery that is too long (for instance fitting an 096 278mm unit into a 242mm 027 tray) will physically not clamp down, failing your annual UK MOT inspection under section 4.13 (Battery Security).
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Equally, height is critical: Ford and Vauxhall vehicles often require low-profile 175mm height batteries (such as Type 075). Installing a standard 190mm battery risks terminal contact with the metal bonnet underside, creating an electrical fire hazard.
          </p>
        </div>
      </div>
    </div>
  )
}
