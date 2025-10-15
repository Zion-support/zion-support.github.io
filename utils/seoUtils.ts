export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
}

export interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
}

export class SEOOptimizer {
  private defaultData: Partial<SEOData>;

  constructor(defaultData: Partial<SEOData> = {}) {
    this.defaultData = {
      ogType: 'website',
      twitterCard: 'summary_large_image',
      ...defaultData,
    };
  }

  generateMetaTags(data: SEOData): Record<string, string> {
    const metaTags: Record<string, string> = {};

    // Basic meta tags
    metaTags['title'] = data.title;
    metaTags['description'] = data.description;
    
    if (data.keywords && data.keywords.length > 0) {
      metaTags['keywords'] = data.keywords.join(', ');
    }

    if (data.canonicalUrl) {
      metaTags['canonical'] = data.canonicalUrl;
    }

    // Open Graph tags
    metaTags['og:title'] = data.ogTitle || data.title;
    metaTags['og:description'] = data.ogDescription || data.description;
    metaTags['og:type'] = data.ogType || 'website';
    
    if (data.ogImage) {
      metaTags['og:image'] = data.ogImage;
    }

    // Twitter Card tags
    metaTags['twitter:card'] = data.twitterCard || 'summary_large_image';
    metaTags['twitter:title'] = data.twitterTitle || data.title;
    metaTags['twitter:description'] = data.twitterDescription || data.description;
    
    if (data.twitterImage) {
      metaTags['twitter:image'] = data.twitterImage;
    }

    return metaTags;
  }

  generateStructuredData(data: SEOData): any {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: data.title,
      description: data.description,
    };

    if (data.canonicalUrl) {
      (baseStructuredData as any)['url'] = data.canonicalUrl;
    }

    if (data.structuredData) {
      return {
        ...baseStructuredData,
        ...data.structuredData,
      };
    }

    return baseStructuredData;
  }

  generateSitemap(pages: Array<{ url: string; lastModified: Date; changeFrequency: string; priority: number }>): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  generateRobotsTxt(allowAll: boolean = true, disallowPaths: string[] = []): string {
    if (allowAll) {
      return `User-agent: *
Allow: /

Sitemap: ${this.defaultData.canonicalUrl || 'https://example.com'}/sitemap.xml`;
    }

    return `User-agent: *
${disallowPaths.map(path => `Disallow: ${path}`).join('\n')}

Sitemap: ${this.defaultData.canonicalUrl || 'https://example.com'}/sitemap.xml`;
  }
}

export const seoOptimizer = new SEOOptimizer();