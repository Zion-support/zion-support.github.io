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

const Sitemap: React.FC = () => {
  const _sitemap = generateSitemap(getAllPages());
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
  </url>
    <loc>https://ziontechgroup.com/about</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
    <loc>https://ziontechgroup.com/services</loc>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
    <loc>https://ziontechgroup.com/contact</loc>
    <priority>0.7</priority>
  
  return (
    </p>
<div>
      <pre>{sitemap}</pre>
    </div>
  );

export default Sitemap;