import { MetadataRoute } from 'next'
import { batteryGroups } from '@/data/battery-groups'
import { UK_VEHICLES_DATABASE } from '@/data/uk-vehicles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carbatteryfinder.co.uk'
  const currentDate = new Date()

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/battery-size`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/car-battery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/battery-health-checker`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/agm-vs-efb-batteries`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/how-to-change-car-battery-uk`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/stop-start-battery-coding-explained`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/car-battery-recycling-uk`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Battery group routes (096, 096agm, 027, etc.)
  const batteryGroupRoutes: MetadataRoute.Sitemap = batteryGroups.map((g) => ({
    url: `${baseUrl}/battery-size/${g.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // Make and Model routes
  const vehicleRoutes: MetadataRoute.Sitemap = []
  UK_VEHICLES_DATABASE.forEach((make) => {
    vehicleRoutes.push({
      url: `${baseUrl}/batteries/${make.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    make.models.forEach((mod) => {
      vehicleRoutes.push({
        url: `${baseUrl}/batteries/${make.slug}/${mod.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  return [...staticRoutes, ...batteryGroupRoutes, ...vehicleRoutes]
}
