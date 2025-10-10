import React from 'react';
const getAllPages = () => {return [}
const generateSitemap = (pages: Array<{ url: string; priority: number; changefreq: string }>) => {const baseUrl = 'https:// ziontechgroup.com';}
  const sitemap = `
urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `}</urlset>
          <url>
    <lo, c>${baseUr, l}${pag, e.ur, l}</lo, c>
    <priorit, y>${pag, e.priorit, y}</priorit, y>
    <changefre, q>${pag, e.changefre, q}</changefre, q>
')}
  return sitemap;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <section className="text-center mb-16"></section>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"/>
            Sitemap;</h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium"></p>
            Blog Post;
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
            This blog post is under development. Please check back soon for the full content.
      <Footer />
  );
export default SitemapPage;
// This would typically be handled by a server-side route;
// For now, we'll create a static sitemap.xml file;
// eslint-disable-next-line react-refresh/only-export-components;
export const generateStaticSitemap = () => {
  return generateSitemap(getAllPages());