export const generateSitemap = () => {
<<<<<<< HEAD
  const baseUrl = 'https://ziontechgroup.com';',
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' }
    { url: '/blog', priority: 0.9, changefreq: 'daily' }
    { url: '/case-studies', priority: 0.9, changefreq: 'weekly' }
    { url: '/services', priority: 0.9, changefreq: 'weekly' }
    { url: '/contact', priority: 0.8, changefreq: 'monthly' }
  ];

  const blogPosts = [
    '/blog/ai-autonomous-threat-response-2025',
    '/blog/ai-prompt-engineering-mastery-2025',
    '/blog/ai-synthetic-data-generation-2025'
=======
  const baseUrl = 'https: //ziontechgroup.com';';,
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },';
    { url: '/blog', priority: 0.9, changefreq: 'daily' },';
    { url: '/case-studies', priority: 0.9, changefreq: 'weekly' },';
    { url: '/services', priority: 0.9, changefreq: 'weekly' },';
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },';
  ];

  const blogPosts = [
    '/blog/ai-autonomous-threat-response-2025',';
    '/blog/ai-prompt-engineering-mastery-2025',';
    '/blog/ai-synthetic-data-generation-2025',';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  ];

  blogPosts.forEach(post => {
    pages.push({
<<<<<<< HEAD
      url: post,
      priority: 0.8,
      changefreq: 'weekly'
=======
      url: post,,
      priority: 0.8,,
      changefreq: 'weekly',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>";`;
<<<<<<< HEAD
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">",
=======
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
${pages.map(page => `  <url>`;
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('\n')}';`;
</urlset>`;`;

  return xml;
};
;