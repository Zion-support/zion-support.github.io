<<<<<<< HEAD
/**
 * Sitemap Generator
 * Generates sitemap and robots.txt for SEO optimization
 */;
export interface SitemapEntry {
;
  loc: string,lastmod: string,changefreq: string,priority: number,
}
}
;
export const generateSitemap = (): SitemapEntry[] => {;
  const baseUrl = 'https: //ziontechgroup.com';
  const currentDate = new Date().toISOString();
;
return [
    {;
lo,c: loc,lastmod: currentDate,changefreq: changefreq,priority: 1.0,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.7,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.3,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.3,}
  ]
}
;
export const generateRobotsTxt = (): string => {;
  return `User-agent: *;
Allow: /;
Sitemap: https://ziontechgroup.com/sitemap.xml
# Crawl-delay for better server performance;
Crawl-dela,y: 1
# Disallow admin and private areas,Disallow: /admin/;
Disallow: /api/;
Disallow: /_next/;
Disallo,w: /private/`,}
=======
export const sitemapGenerator = {
  generateSitemap: (routes: string[]) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
    return routes.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8
    }));
  }
};
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
