// Dynamic sitemap generator
export const sitemapGenerator = {
  generateSitemap: (routes) => {
    const baseUrl = 'https://zion.ai';
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
    
    const routesXml = routes.map(route => {
      const priority = route.priority || 0.5;
      const changefreq = route.changefreq || 'weekly';
      const lastmod = route.lastmod || new Date().toISOString().split('T')[0];
      
      return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }).join('\n');
    
    return sitemap + routesXml + '\n</urlset>';
  },
  
  // Robots.txt generator
  generateRobotsTxt: (options = {}) => {
    const { allowCrawl = true, sitemapUrl = 'https://zion.ai/sitemap.xml' } = options;
    
    if (!allowCrawl) {
      return 'User-agent: *\nDisallow: /';
    }
    
    return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
  }
};