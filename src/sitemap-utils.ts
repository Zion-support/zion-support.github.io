// Mock functions for sitemap generation
export const getAllPages = () => [
  { path: '/', priority: 1.0 },
  { path: '/services', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
  { path: '/about', priority: 0.6 }
];

export const generateSitemap = (pages: Array<{ path: string; priority: number }>) => {
  const baseUrl = 'https://ziontechgroup.com';
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}${page.path}</loc>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });
  
  sitemap += '</urlset>';
  return sitemap;
};

// This would typically be handled by a server-side route
// For now, we'll create a static sitemap.xml file
export const generateStaticSitemap = () => {
  return generateSitemap(getAllPages());
};