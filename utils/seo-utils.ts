/**
 * SEO utilities for the application
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: Record<string, any>;
}

export interface PageSEOData extends SEOData {
  path: string;
  lastModified?: string;
  priority?: number;
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
}

export class SEOManager {
  private static instance: SEOManager;
  private defaultSEO: SEOData;

  private constructor() {
    this.defaultSEO = {
      title: 'Zion Tech Group - Leading AI and Technology Solutions',
      description:
        'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
      keywords: [
        'AI',
        'artificial intelligence',
        'technology solutions',
        'cloud computing',
        'cybersecurity',
        'data analytics',
        'digital transformation',
      ],
      ogType: 'website',
      twitterCard: 'summary_large_image',
      robots: 'index, follow',
      author: 'Zion Tech Group',
    };
  }

  public static getInstance(): SEOManager {
    if (!SEOManager.instance) {
      SEOManager.instance = new SEOManager();
    }
    return SEOManager.instance;
  }

  public generateMetaTags(seoData: Partial<SEOData>): Record<string, string> {
    const data = { ...this.defaultSEO, ...seoData };

    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords.join(', '),
      'og:title': data.title,
      'og:description': data.description,
      'og:type': data.ogType || 'website',
      'og:image': data.ogImage || '/og-image.jpg',
      'og:url': data.canonicalUrl || '',
      'twitter:card': data.twitterCard || 'summary_large_image',
      'twitter:title': data.title,
      'twitter:description': data.description,
      'twitter:image': data.ogImage || '/og-image.jpg',
      'twitter:site': data.twitterSite || '@ziontechgroup',
      'twitter:creator': data.twitterCreator || '@ziontechgroup',
      robots: data.robots || 'index, follow',
      author: data.author || 'Zion Tech Group',
      canonical: data.canonicalUrl || '',
    };
  }

  public generateStructuredData(
    seoData: Partial<SEOData>
  ): Record<string, any> {
    const data = { ...this.defaultSEO, ...seoData };

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: data.description,
      url: data.canonicalUrl || 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Tech Street',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US',
      },
    };

    if (data.structuredData) {
      return { ...structuredData, ...data.structuredData };
    }

    return structuredData;
  }

  public generateBreadcrumbStructuredData(
    breadcrumbs: Array<{ name: string; url: string }>
  ): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  }

  public generateArticleStructuredData(article: {
    title: string;
    description: string;
    author: string;
    publishedTime: string;
    modifiedTime?: string;
    image?: string;
    url: string;
  }): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      author: {
        '@type': 'Person',
        name: article.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ziontechgroup.com/logo.png',
        },
      },
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime || article.publishedTime,
      image: article.image || 'https://ziontechgroup.com/og-image.jpg',
      url: article.url,
    };
  }

  public generateServiceStructuredData(service: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    serviceType: string;
    url: string;
  }): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: service.provider,
      },
      areaServed: service.areaServed,
      serviceType: service.serviceType,
      url: service.url,
    };
  }

  public generateSitemapData(pages: PageSEOData[]): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${page.canonicalUrl || `https://ziontechgroup.com${page.path}`}</loc>
    <lastmod>${page.lastModified || new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq || 'weekly'}</changefreq>
    <priority>${page.priority || 0.5}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    return sitemap;
  }

  public generateRobotsTxt(allowAll: boolean = true): string {
    if (allowAll) {
      return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;
    }

    return `User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

Sitemap: https://ziontechgroup.com/sitemap.xml`;
  }

  public optimizeTitle(title: string, maxLength: number = 60): string {
    if (title.length <= maxLength) {
      return title;
    }

    // Try to cut at word boundary
    const truncated = title.substring(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');

    if (lastSpace > maxLength * 0.7) {
      return truncated.substring(0, lastSpace) + '...';
    }

    return truncated + '...';
  }

  public optimizeDescription(
    description: string,
    maxLength: number = 160
  ): string {
    if (description.length <= maxLength) {
      return description;
    }

    const truncated = description.substring(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');

    if (lastSpace > maxLength * 0.7) {
      return truncated.substring(0, lastSpace) + '...';
    }

    return truncated + '...';
  }

  public generateKeywords(content: string, maxKeywords: number = 10): string[] {
    // Simple keyword extraction (in production, use a more sophisticated approach)
    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);

    const wordCount: Record<string, number> = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return Object.entries(wordCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word);
  }

  public validateSEOData(seoData: Partial<SEOData>): {
    isValid: boolean;
    errors: string[];
    warnings: string[];
  } {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!seoData.title || seoData.title.length < 30) {
      warnings.push('Title should be at least 30 characters long');
    }

    if (seoData.title && seoData.title.length > 60) {
      warnings.push('Title should be no more than 60 characters long');
    }

    if (!seoData.description || seoData.description.length < 120) {
      warnings.push('Description should be at least 120 characters long');
    }

    if (seoData.description && seoData.description.length > 160) {
      warnings.push('Description should be no more than 160 characters long');
    }

    if (!seoData.keywords || seoData.keywords.length === 0) {
      warnings.push('Keywords should be provided');
    }

    if (seoData.keywords && seoData.keywords.length > 10) {
      warnings.push('Too many keywords (recommended: 5-10)');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }
}

// Utility functions
export function generatePageTitle(
  pageName: string,
  siteName: string = 'Zion Tech Group'
): string {
  return `${pageName} | ${siteName}`;
}

export function generatePageDescription(
  content: string,
  maxLength: number = 160
): string {
  const manager = SEOManager.getInstance();
  return manager.optimizeDescription(content, maxLength);
}

export function generateCanonicalUrl(
  path: string,
  baseUrl: string = 'https://ziontechgroup.com'
): string {
  return `${baseUrl}${path}`;
}

export function generateOGImageUrl(
  imagePath: string,
  baseUrl: string = 'https://ziontechgroup.com'
): string {
  return `${baseUrl}${imagePath}`;
}

// React hook for SEO
export function useSEO(seoData: Partial<SEOData>) {
  const manager = SEOManager.getInstance();

  React.useEffect(() => {
    const metaTags = manager.generateMetaTags(seoData);

    // Update document title
    if (metaTags.title) {
      document.title = metaTags.title;
    }

    // Update meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      if (name === 'title') return; // Already handled above

      let element = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement;
      if (!element) {
        element = document.querySelector(
          `meta[property="${name}"]`
        ) as HTMLMetaElement;
      }

      if (!element) {
        element = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    // Add structured data
    if (seoData.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(seoData.structuredData);
      document.head.appendChild(script);
    }
  }, [seoData]);
}
