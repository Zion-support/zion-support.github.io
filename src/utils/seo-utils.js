
// SEO optimization utilities
export const generateMetaTags = (pageData) => {
  const {
    title = 'Zion Tech Group - Technology Solutions',
    description = 'Professional technology solutions and services',
    keywords = 'technology, solutions, services, consulting',
    image = '/og-image.jpg',
    url = 'https://zion.app'
  } = pageData;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      image,
      url,
      type: 'website',
      siteName: 'Zion Tech Group'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image
    }
  };
};

export const generateStructuredData = (data) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    description: 'Professional technology solutions and services',
    ...data
  };
};

export const generateSitemap = (pages) => {
  const baseUrl = 'https://zion.app';
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${page.priority || '0.5'}</priority>
  </url>
`).join('')}
</urlset>`;

  return sitemap;
};
