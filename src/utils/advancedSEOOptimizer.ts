/**
 * Advanced SEO Optimizer
 * Comprehensive SEO optimization utilities for the Zion Tech Group website
 */

interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle: string;
  facebookAppId: string;
  googleAnalyticsId: string;
  googleTagManagerId: string;
  enableStructuredData: boolean;
  enableSitemap: boolean;
  enableRobotsTxt: boolean;
  enableCanonical: boolean;
  enableOpenGraph: boolean;
  enableTwitterCards: boolean;
  enableMetaOptimization: boolean;
  enableSitemapGeneration: boolean;
  enableCanonicalUrls: boolean;
  enableSchemaMarkup: boolean;
  enablePerformanceSEO: boolean;
  enableAccessibilitySEO: boolean;
}

interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
  canonical: string;
  noindex: boolean;
  nofollow: boolean;
  structuredData: Record<string, unknown>;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
    creator: string;
    site: string;
  };
}

interface SEOAuditResult {
  score: number;
  issues: Array<{
    type: 'error' | 'warning' | 'info';
    message: string;
    suggestion: string;
    priority: 'high' | 'medium' | 'low';
  }>;
  recommendations: string[];
  metrics: {
    titleLength: number;
    descriptionLength: number;
    keywordDensity: number;
    headingStructure: boolean;
    imageAltText: boolean;
    internalLinks: number;
    externalLinks: number;
  };
}

const defaultConfig: SEOConfig = {
  siteName: 'Zion Tech Group',
  siteUrl: 'https://ziontechgroup.com',
  defaultTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  defaultDescription: 'Leading provider of AI-powered IT solutions, cloud services, and digital transformation consulting for enterprises worldwide.',
  defaultImage: 'https://ziontechgroup.com/og-image.jpg',
  twitterHandle: '@ZionTechGroup',
  facebookAppId: '',
  googleAnalyticsId: '',
  googleTagManagerId: '',
  enableStructuredData: true,
  enableSitemap: true,
  enableRobotsTxt: true,
  enableCanonical: true,
  enableOpenGraph: true,
  enableTwitterCards: true,
};

export class AdvancedSEOOptimizer {
  private config: SEOConfig;
  private pages: Map<string, PageSEOData> = new Map();

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  /**
   * Generate comprehensive SEO data for a page
   */
  generatePageSEO(pageData: Partial<PageSEOData>): PageSEOData {
    const url = pageData.url || window.location.href;
    const title = pageData.title || this.config.defaultTitle;
    const description = pageData.description || this.config.defaultDescription;
    const image = pageData.image || this.config.defaultImage;

    const seoData: PageSEOData = {
      title: this.optimizeTitle(title),
      description: this.optimizeDescription(description),
      keywords: pageData.keywords || this.extractKeywords(title, description),
      image,
      url,
      canonical: this.generateCanonicalUrl(url),
      noindex: pageData.noindex || false,
      nofollow: pageData.nofollow || false,
      structuredData: this.generateStructuredData(pageData),
      openGraph: this.generateOpenGraphData(title, description, image, url) as any,
      twitter: this.generateTwitterCardData(title, description, image) as any,
    };

    this.pages.set(url, seoData);
    return seoData;
  }

  /**
   * Optimize page title for SEO
   */
  private optimizeTitle(title: string): string {
    // Ensure title is within optimal length (50-60 characters)
    if (title.length > 60) {
      title = title.substring(0, 57) + '...';
    }
    
    // Add site name if not present
    if (!title.includes(this.config.siteName)) {
      title = `${title} | ${this.config.siteName}`;
    }

    return title;
  }

  /**
   * Optimize meta description for SEO
   */
  private optimizeDescription(description: string): string {
    // Ensure description is within optimal length (150-160 characters)
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    } else if (description.length < 120) {
      // Add call-to-action if description is too short
      description += ' Contact us for a free consultation.';
    }

    return description;
  }

  /**
   * Extract keywords from title and description
   */
  private extractKeywords(title: string, description: string): string[] {
    const text = `${title} ${description}`.toLowerCase();
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'a', 'an'];
    
    const words = text
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3 && !commonWords.includes(word))
      .reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(words)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  }

  /**
   * Generate canonical URL
   */
  private generateCanonicalUrl(url: string): string {
    if (!this.config.enableCanonical) return '';
    
    // Remove query parameters and fragments
    const canonical = url.split('?')[0].split('#')[0];
    return canonical;
  }

  /**
   * Generate structured data for the page
   */
  private generateStructuredData(pageData: Partial<PageSEOData>): Record<string, unknown> {
    if (!this.config.enableStructuredData) return {};

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.config.siteName,
      url: this.config.siteUrl,
      logo: `${this.config.siteUrl}/logo.png`,
      description: this.config.defaultDescription,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://twitter.com/ZionTechGroup',
        'https://linkedin.com/company/zion-tech-group',
        'https://github.com/Zion-Holdings'
      ]
    };

    // Add page-specific structured data
    if (pageData.structuredData) {
      return { ...baseStructuredData, ...pageData.structuredData };
    }

    return baseStructuredData;
  }

  /**
   * Generate Open Graph data
   */
  private generateOpenGraphData(title: string, description: string, image: string, url: string) {
    if (!this.config.enableOpenGraph) return {};

    return {
      title: this.optimizeTitle(title),
      description: this.optimizeDescription(description),
      image,
      url,
      type: 'website',
      siteName: this.config.siteName,
    };
  }

  /**
   * Generate Twitter Card data
   */
  private generateTwitterCardData(title: string, description: string, image: string) {
    if (!this.config.enableTwitterCards) return {};

    return {
      card: 'summary_large_image',
      title: this.optimizeTitle(title),
      description: this.optimizeDescription(description),
      image,
      creator: this.config.twitterHandle,
      site: this.config.twitterHandle,
    };
  }
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

// Export default instance
export const seoOptimizer = new AdvancedSEOOptimizer();

// Export utility functions
export const generatePageSEO = (pageData: Partial<PageSEOData>) => {
  return seoOptimizer.generatePageSEO(pageData);
};

export const updatePageSEO = (pageData: Partial<PageSEOData>) => {
  return seoOptimizer.updatePageSEO(pageData);
};

export const generateSitemap = () => {
  return seoOptimizer.generateSitemap();
};

export const generateRobotsTxt = () => {
  return seoOptimizer.generateRobotsTxt();
};

// Export additional instance with different name
export const advancedSEOOptimizer = seoOptimizer;

// Export types
export type { SEOConfig, PageSEOData, SEOAuditResult };

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      enableMetaOptimization: true,
      enableStructuredData: true,
      enableSitemapGeneration: true,
      enableRobotsTxt: true,
      enableCanonicalUrls: true,
      enableOpenGraph: true,
      enableTwitterCards: true,
      enableSchemaMarkup: true,
      enablePerformanceSEO: true,
      enableAccessibilitySEO: true,
      ...config
    };
  }

  /**
   * Initialize the SEO optimizer
   */
  initialize(): void {
    if (this.isInitialized) return;
    
    this.isInitialized = true;
    console.log('Advanced SEO Optimizer initialized');
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    if (!this.config.enableRobotsTxt) return '';

    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${typeof window !== 'undefined' ? window.location.origin : 'https://ziontechgroup.com'}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow important pages
Allow: /services/
Allow: /blog/
Allow: /portfolio/`;
  }

  /**
   * Generate sitemap XML
   */
  generateSitemap(): string {
    if (!this.config.enableSitemapGeneration) return '';

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ziontechgroup.com';
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'weekly' }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    this.isInitialized = false;
    this.currentPageData = null;
  }
}

// Export singleton instance
export const advancedSEOOptimizer = new AdvancedSEOOptimizer();

// Export class for custom instances
export { AdvancedSEOOptimizer };
>>>>>>> a3a834dfcb21317e76bd8ab52f6bcaebffa03928
export type { SEOConfig, PageSEOData };
