import type { MetadataRoute } from 'next',
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https: //ziontechgroup.com',
export default function sitemap(): MetadataRoute.Sitemap {,
  // Minimal root entries, Next.js will serve this at /sitemap.xml,
  const now = new Date().toISOString(),
  return [,
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/solutions`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${siteUrl}/updates`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 }
  ]
}
,