interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
}

export const seoUtils = {
  generateMetaTags: (data: SEOData): string => {
    const tags = [
      `<title>${data.title}</title>`,
      `<meta name="description" content="${data.description}">`,
      `<meta name="keywords" content="${data.keywords.join(', ')}">`,
      data.canonical ? `<link rel="canonical" href="${data.canonical}">` : '',
      data.ogTitle ? `<meta property="og:title" content="${data.ogTitle}">` : '',
      data.ogDescription ? `<meta property="og:description" content="${data.ogDescription}">` : '',
      data.ogImage ? `<meta property="og:image" content="${data.ogImage}">` : '',
      data.ogUrl ? `<meta property="og:url" content="${data.ogUrl}">` : '',
      `<meta property="og:type" content="website">`,
      data.twitterCard ? `<meta name="twitter:card" content="${data.twitterCard}">` : '',
      data.twitterTitle ? `<meta name="twitter:title" content="${data.twitterTitle}">` : '',
      data.twitterDescription ? `<meta name="twitter:description" content="${data.twitterDescription}">` : '',
      data.twitterImage ? `<meta name="twitter:image" content="${data.twitterImage}">` : '',
      data.structuredData ? `<script type="application/ld+json">${JSON.stringify(data.structuredData)}</script>` : ''
    ].filter(Boolean);

    return tags.join('\n');
  },

  generateSitemap: (pages: Array<{ url: string; lastModified: string; changeFrequency: string; priority: number }>): string => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  },

  generateRobotsTxt: (allowAll: boolean = true, disallowPaths: string[] = []): string => {
    const rules = allowAll ? ['User-agent: *', 'Allow: /'] : ['User-agent: *', 'Disallow: /'];
    
    if (disallowPaths.length > 0) {
      disallowPaths.forEach(path => {
        rules.push(`Disallow: ${path}`);
      });
    }

    rules.push('', 'Sitemap: https://ziontechgroup.com/sitemap.xml');

    return rules.join('\n');
  },

  validateSEO: (data: SEOData): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!data.title || data.title.length === 0) {
      errors.push('Title is required');
    } else if (data.title.length > 60) {
      errors.push('Title should be 60 characters or less');
    }

    if (!data.description || data.description.length === 0) {
      errors.push('Description is required');
    } else if (data.description.length > 160) {
      errors.push('Description should be 160 characters or less');
    }

    if (!data.keywords || data.keywords.length === 0) {
      errors.push('Keywords are required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  },

  generateStructuredData: (type: 'Organization' | 'WebSite' | 'WebPage', data: any): any => {
    const baseStructure = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    return baseStructure;
  }
};

export default seoUtils;