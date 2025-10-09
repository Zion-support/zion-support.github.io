export const generateSitemap = (pages: Array<{ url: string; lastmod: string; changefreq: string; priority: string }>) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return sitemap;
};

export const getAllPages = () => {
  return [
    { url: 'https://ziontechgroup.com/', lastmod: '2024-01-01', changefreq: 'daily', priority: '1.0' },
    { url: 'https://ziontechgroup.com/about', lastmod: '2024-01-01', changefreq: 'monthly', priority: '0.8' },
    { url: 'https://ziontechgroup.com/services', lastmod: '2024-01-01', changefreq: 'monthly', priority: '0.9' },
    { url: 'https://ziontechgroup.com/contact', lastmod: '2024-01-01', changefreq: 'monthly', priority: '0.7' },
  ];
};

export const generateStaticSitemap = () => {
  return generateSitemap(getAllPages());
};