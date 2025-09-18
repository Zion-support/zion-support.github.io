import { MetadataRoute } from 'next'

export function GET(): Response {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap location
Sitemap: https://zion.app/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /temp/
Disallow: /test/
Disallow: /.env
Disallow: /node_modules/

# Allow important pages
Allow: /services
Allow: /solutions
Allow: /research
Allow: /blog
Allow: /updates
Allow: /insights
Allow: /news
Allow: /contact
Allow: /about

# Block duplicate content
Disallow: /*?*
Disallow: /*#

# Allow search engines to index our content
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}