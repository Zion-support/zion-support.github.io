import React from 'react';

const getAllPages = () => {
  return [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog', priority: 0.8, changefreq: 'weekly' },
  ];
};

const generateSitemap = (pages: Array<{ url: string; priority: number; changefreq: string }>) => {
  const baseUrl = 'https://ziontechgroup.com';
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;
  return sitemap;
};

const Sitemap: React.FC = () => {
  const sitemap = generateSitemap(getAllPages());
  
  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  );
};

// This would typically be handled by a server-side route
// For now, we'll create a static sitemap.xml file
export const generateStaticSitemap = () => {
  return generateSitemap(getAllPages());
};

export default Sitemap;