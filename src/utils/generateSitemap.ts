export const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/blog', priority: 0.9, changefreq: 'daily' },
    { url: '/case-studies', priority: 0.9, changefreq: 'weekly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
  ];

  const blogPosts = [
    '/blog/ai-autonomous-threat-response-2025',
    '/blog/ai-prompt-engineering-mastery-2025',
    '/blog/ai-synthetic-data-generation-2025',
  ];

  blogPosts.forEach((post) => {
    pages.push({
      url: post,
      priority: 0.8,
      changefreq: 'weekly',
    });
  });

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urls = pages
    .map(
      (page) =>
        `  <url>\n    <loc>${baseUrl}${page.url}</loc>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </url>`
    )
    .join('\n');

  return `${xmlHeader}\n${urlsetOpen}\n${urls}\n${urlsetClose}`;
};