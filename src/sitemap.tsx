import React from 'react'
const getAllPages  = () => {return [}
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog', priority: 0.8, changefreq: 'weekly' }]
};
const generateSitemap = (pages: Array<{ url: string; priority: number, changefreq: string }>) =>
                {
    const baseUrl = 'https:// ziontechgroup.com'
  }
  const sitemap = `
          <?xml version="1.0" encoding="UTF-8"?></?xml>
<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9"></urlset>
${pages.map(page => `}
                <url></url>
    <loc>${baseUrl}${page.url}
                <priority>${page.priority}
                <changefreq>${page.changefreq}
                </url>`).join('
')}
                </urlset>`
  return sitemap
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <section className="text-center mb-16"></section>
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6"></h1>
            Sitemap
  
          <p className="text-xl text-cyan-400 mb-8 font-medium"></p>
            Blog Post
  
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
            This blog post is under development. Please check back soon for the full content.
      <Footer />
    </div>
  ),
}
export default SitemapPage
// This would typically be handled by a server-side route
// For now, we'll create a static sitemap.xml file
// eslint-disable-next-line react-refresh/only-export-components
export const generateStaticSitemap  = () => {return generateSitemap(getAllPages())
  }
                </p>
                </h1>
</p>
                </p></main>
                </section>