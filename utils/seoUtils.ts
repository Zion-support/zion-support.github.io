interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export const seoUtils = {
  generateMetaTags(config: SEOConfig): string {
    const {
      title,
      description,
      keywords,
      ogImage,
      canonicalUrl
    } = config;

    let metaTags = `
      <title>${title}</title>
      <meta name="description" content="${description}" />
      <meta name="keywords" content="${keywords.join(', ')}" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${description}" />
    `;

    if (ogImage) {
      metaTags += `
        <meta property="og:image" content="${ogImage}" />
        <meta name="twitter:image" content="${ogImage}" />
      `;
    }

    if (canonicalUrl) {
      metaTags += `<link rel="canonical" href="${canonicalUrl}" />`;
    }

    return metaTags;
  },

  generateStructuredData(type: string, data: any): string {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    return `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
  },

  generateSitemap(pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>): string {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${page.url}</loc>\n`;
      if (page.lastmod) {
        sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
      }
      if (page.changefreq) {
        sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      }
      if (page.priority) {
        sitemap += `    <priority>${page.priority}</priority>\n`;
      }
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';
    return sitemap;
  },

  generateRobotsTxt(allowAll: boolean = true, sitemapUrl?: string): string {
    let robots = '';
    
    if (allowAll) {
      robots += 'User-agent: *\n';
      robots += 'Allow: /\n';
    } else {
      robots += 'User-agent: *\n';
      robots += 'Disallow: /\n';
    }

    if (sitemapUrl) {
      robots += `\nSitemap: ${sitemapUrl}`;
    }

    return robots;
  }
};

export default seoUtils;