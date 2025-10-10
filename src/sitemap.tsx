import React from 'react';
<<<<<<< HEAD
const getAllPages = () => {return [}
=======
;
const getAllPages = () => {return [};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
<<<<<<< HEAD
    { url: '/blog', priority: 0.8, changefreq: 'weekly' }];
}
const generateSitemap = (pages: Array<{ url: string; priority: number, changefreq: string }>) => {
    const baseUrl = 'https:// ziontechgroup.com'
  }
=======
    { url: '/blog', priority: 0.8, changefreq: 'weekly' }]};
const generateSitemap = (pages: Array<{ url: string; priority: number; changefreq: string }>) => {const baseUrl = 'https:// ziontechgroup.com'};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const sitemap = `
          <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `};
          <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('
')};
</urlset>`;
  return sitemap;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
            Sitemap
  </
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Blog Post
  </
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This blog post is under development. Please check back soon for the full content.
          </p>
        </section>
      </main>
      <Footer />
    </div>
<<<<<<< HEAD
  ),
}
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default SitemapPage;
// This would typically be handled by a server-side route
// For now, we'll create a static sitemap.xml file
// eslint-disable-next-line react-refresh/only-export-components
export const generateStaticSitemap = () => {
<<<<<<< HEAD
    return generateSitemap(getAllPages())
  }
  </p>
  </h1>
=======
};
  return generateSitemap(getAllPages())};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
