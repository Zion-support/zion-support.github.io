// Sitemap generation utilities
const generateSitemap = (pages: string[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://ziontechgroup.com${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;
};

const getAllPages = () => [
  '/',
  '/about',
  '/services',
  '/ai-services',
  '/it-services',
  '/contact',
  '/pricing',
  '/team',
  '/careers',
  '/news',
  '/blog',
  '/demo',
  '/consultation'
];

// This would typically be handled by a server-side route
// For now, we'll create a static sitemap.xml file
export const generateStaticSitemap = () => {
  return generateSitemap(getAllPages());
};