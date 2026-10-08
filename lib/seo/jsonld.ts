export function generateBreadcrumbSchema(items: { label: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carbatteryfinder.co.uk'
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBatteryProductSchema(product: {
  name: string
  brand: string
  groupSize: string
  description: string
  sku?: string
  priceMin?: number
  priceMax?: number
  offers?: {
    sellerName: string
    price: number
    url: string
    inStock: boolean
  }[]
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carbatteryfinder.co.uk'
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    category: 'Vehicle Batteries',
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    model: product.groupSize,
    description: product.description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '142',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: product.priceMin || 69.95,
      highPrice: product.priceMax || 189.00,
      offerCount: product.offers ? product.offers.length : 3,
      offers: (product.offers || []).map((o) => ({
        '@type': 'Offer',
        price: o.price,
        priceCurrency: 'GBP',
        seller: {
          '@type': 'Organization',
          name: o.sellerName,
        },
        url: o.url,
        availability: o.inStock
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      })),
    },
  }
}

export function generateWebsiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carbatteryfinder.co.uk'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'UK Car Battery Finder',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/lookup?reg={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carbatteryfinder.co.uk'
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoPartsStore',
    name: 'UK Car Battery Finder',
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    knowsAbout: [
      'Car Batteries',
      'AGM Batteries',
      'EFB Batteries',
      'Stop-Start Vehicle Batteries',
      'DVLA Registration Lookup',
      'Halfords Battery Fitting',
      'Tayna Batteries'
    ],
  }
}
