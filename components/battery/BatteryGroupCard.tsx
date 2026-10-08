import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'

interface BatteryGroupCardProps {
  group: {
    slug: string
    groupSize: string
    typeCode?: string
    dimensions: {
      length: number
      width: number
      height: number
    }
    technology?: string
    typicalAh?: string
    typicalCCA?: string
    description?: string
    commonVehicles?: string[]
  }
}

export default function BatteryGroupCard({ group }: BatteryGroupCardProps) {
  const isAgm = group.technology === 'AGM' || group.groupSize.includes('AGM')

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-400 transition-all flex flex-col justify-between overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase">
              UK Battery Code
            </span>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              Type {group.groupSize}
            </h3>
          </div>
          {isAgm ? (
            <Badge variant="info">Stop-Start AGM</Badge>
          ) : (
            <Badge variant="default">Standard / EFB</Badge>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-3 my-4 text-xs font-mono text-gray-700 flex justify-between">
          <div>
            <span className="text-gray-400 block text-[10px] uppercase font-sans">Dimensions</span>
            {group.dimensions.length} × {group.dimensions.width} × {group.dimensions.height} mm
          </div>
          {group.typicalAh && (
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-sans">Capacity</span>
              {group.typicalAh}
            </div>
          )}
        </div>

        {group.description && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
            {group.description}
          </p>
        )}

        {group.commonVehicles && group.commonVehicles.length > 0 && (
          <div className="text-xs text-gray-500 mb-2">
            <span className="font-semibold text-gray-700">Fitted to:</span>{' '}
            {group.commonVehicles.slice(0, 2).join(', ')}
            {group.commonVehicles.length > 2 ? ' & more' : ''}
          </div>
        )}
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-100 mt-auto flex items-center justify-between">
        <span className="text-xs font-medium text-gray-500">From £57.95</span>
        <Link
          href={`/battery-size/${group.slug}`}
          className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 group-hover:underline"
        >
          View Specs & Deals &rarr;
        </Link>
      </div>
    </div>
  )
}
