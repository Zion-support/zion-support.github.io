import React from 'react';

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
  '/contact',
  '/ai-services',
  '/it-services',
  '/quantum-computing',
  '/autonomous-systems',
  '/blockchain-web3',
  '/iot-edge-computing',
  '/business-intelligence',
  '/robotics',
  '/pricing',
  '/team',
  '/careers',
  '/news',
  '/blog',
  '/demo',
  '/consultation'
];

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
// const generateStaticSitemap = () => {
//   return generateSitemap(getAllPages());
// };

export default Sitemap;