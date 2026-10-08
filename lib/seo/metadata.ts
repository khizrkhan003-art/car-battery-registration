import { Metadata } from 'next'

interface GenerateMetadataProps {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
  image,
  type = 'website',
  noIndex = false
}: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carbatteryfinder.co.uk'
  const canonicalUrl = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`

  const defaultKeywords = [
    'car battery finder',
    'car battery by reg',
    'UK car battery lookup',
    'number plate battery finder',
    'replacement car battery UK',
    'start stop battery AGM EFB',
    'Halfords battery comparison',
    'Tayna batteries price comparison',
    'Euro Car Parts battery lookup'
  ]

  const ogImage = image || `${baseUrl}/og-battery-finder.png`

  return {
    title: `${title} | UK Car Battery Finder`,
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      title: `${title} | UK Car Battery Finder`,
      description,
      url: canonicalUrl,
      siteName: 'UK Car Battery Finder',
      locale: 'en_GB',
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | UK Car Battery Finder`,
      description,
      images: [ogImage],
    },
    other: {
      'geo.region': 'GB',
      'geo.placename': 'United Kingdom',
    },
  }
}
