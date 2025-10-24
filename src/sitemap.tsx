'use client';
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
const generateSitemap = (pages: Array<{ url: string; priority: number; changefreq: string }>) => {const baseUrl = 'https:// ziontechgroup.com';
  const sitemap = `
          
          
          
          
          
          
          
          
          <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  
          
          
          
          
          
          
          
          
          <url>
    <loc}>${baseUrl}${page.url}
        </loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;
  return sitemap;
  return (
    <React.Fragment>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Professional sitemap services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Sitemap</h1>
          <p className="text-lg text-gray-300">
            This page is currently under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SitemapPage;
