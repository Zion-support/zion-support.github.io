import React from 'react';
import { generateSitemap, getAllPages } from './sitemap-utils';

const Sitemap: React.FC = () => {
<<<<<<< HEAD
  const _sitemap = generateSitemap(getAllPages());
=======
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
</urlset>`;
>>>>>>> cursor/fix-errors-and-merge-to-main-55cf
  
  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  );
};

export default Sitemap;