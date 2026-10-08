import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { generateWebsiteSchema, generateOrganizationSchema } from '@/lib/seo/jsonld'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'UK Car Battery Finder | Find Exact Battery by Registration Number',
  description: 'Enter your UK registration plate to find the guaranteed correct replacement car battery. Compare prices across Halfords, Tayna & Euro Car Parts. Stop-Start AGM/EFB verified.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carbatteryfinder.co.uk'),
  keywords: [
    'car battery finder',
    'car battery by reg',
    'UK car battery lookup',
    'number plate battery finder',
    'stop start battery AGM',
    'halfords battery finder',
    'tayna batteries',
    'type 096 battery',
    'type 027 battery',
    'type 063 battery'
  ],
  authors: [{ name: 'UK Car Battery Finder Editorial & Engineering Team' }],
  creator: 'UK Car Battery Finder',
  publisher: 'UK Car Battery Finder',
  robots: {
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
  alternates: {
    canonical: 'https://www.carbatteryfinder.co.uk',
  },
  openGraph: {
    title: 'UK Car Battery Finder | Find Exact Battery by Registration',
    description: 'Find the guaranteed fitting replacement car battery by UK number plate. Compare Halfords, Tayna & Euro Car Parts prices with 3-5 year guarantees.',
    url: 'https://www.carbatteryfinder.co.uk',
    siteName: 'UK Car Battery Finder',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Car Battery Finder | Find Exact Battery by Registration',
    description: 'Find the guaranteed fitting replacement car battery by UK number plate. Compare Halfords, Tayna & Euro Car Parts prices.',
  },
  other: {
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-900 antialiased selection:bg-amber-200 selection:text-black">
        <JsonLd data={generateWebsiteSchema()} />
        <JsonLd data={generateOrganizationSchema()} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
