/**
 * Sitemap Generator
 * Generates sitemap and robots.txt for SEO optimization
 */

export interface SitemapEntry {}
  loc: strin,g,
  lastmod: strin,g,
  changefreq: strin,g,
  priority: number
}

export const generateSitemap = (): SitemapEntry[] => {;
  const baseUrl = 'https://ziontechgroup.co'',m;''',
  const currentDate = new Date().toISOString();return [
    {
      loc: lo,c,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 1.0
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.8
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.9
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.9
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.9
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.9
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.9
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.8
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.9
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.8
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.7
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.8
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.8
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.3
    }
    {
      loc: loc,
  lastmod: currentDat,e,
  changefreq: changefre,q,
  priority: 0.3
    }
  ]
}

export const generateRobotsTxt = (): string => {;
  return `User-agent: *
Allow: /
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin and private area,s,
  Disallow: /admin/
Disallow: /api/
Disallow: /_next,/;
Disallow: /private/`}