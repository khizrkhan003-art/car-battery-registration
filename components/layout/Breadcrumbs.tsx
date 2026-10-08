import React from 'react'
import Link from 'next/link'
import { JsonLd } from '@/components/seo/JsonLd'

export interface BreadcrumbItem {
  label: string
  href?: string
  url?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null

  const getUrl = (item: BreadcrumbItem) => item.href || item.url || ''

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const link = getUrl(item)
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: link ? (link.startsWith('http') ? link : `https://www.carbatteryfinder.co.uk${link}`) : undefined,
      }
    }),
  }

  return (
    <nav aria-label="Breadcrumb" className={`text-xs text-gray-500 ${className}`}>
      <JsonLd data={schemaData} />
      <ol className="flex items-center space-x-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const link = getUrl(item)

          return (
            <li key={index} className="flex items-center space-x-2">
              {index > 0 && (
                <span className="text-gray-400 select-none">/</span>
              )}
              {isLast || !link ? (
                <span className="text-gray-900 font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={link} className="hover:text-primary-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
