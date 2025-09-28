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
   * Generate page SEO data
   */
  generatePageSEO(pageData: Partial<PageSEOData>): PageSEOData {
    const url = pageData.url || '/';
    const existingData = this.pages.get(url);
    
    if (existingData) {
      return { ...existingData, ...pageData };
    }

    const defaultData: PageSEOData = {
      title: pageData.title || this.config.defaultTitle,
      description: pageData.description || this.config.defaultDescription,
      keywords: pageData.keywords || [],
      image: pageData.image || this.config.defaultImage,
      url: url,
      canonical: `${this.config.siteUrl}${url}`,
      noindex: false,
      nofollow: false,
      structuredData: pageData.structuredData || {},
      openGraph: {
        title: pageData.title || this.config.defaultTitle,
        description: pageData.description || this.config.defaultDescription,
        image: pageData.image || this.config.defaultImage,
        url: `${this.config.siteUrl}${url}`,
        type: 'website',
        siteName: this.config.siteName,
      },
      twitter: {
        card: 'summary_large_image',
        title: pageData.title || this.config.defaultTitle,
        description: pageData.description || this.config.defaultDescription,
        image: pageData.image || this.config.defaultImage,
        creator: this.config.twitterHandle,
        site: this.config.twitterHandle,
      },
    };

    this.pages.set(url, defaultData);
    return defaultData;
  }

  /**
   * Generate structured data
   */
  generateStructuredData(data: Record<string, unknown>): string {
    return JSON.stringify(data, null, 2);
  }

  /**
   * Audit page SEO
   */
  auditPageSEO(url: string): SEOAuditResult {
    const pageData = this.pages.get(url);
    if (!pageData) {
      return {
        score: 0,
        issues: [{ type: 'error', message: 'Page not found', suggestion: 'Add page data', priority: 'high' }],
        recommendations: ['Add page SEO data'],
        metrics: {
          titleLength: 0,
          descriptionLength: 0,
          keywordDensity: 0,
          headingStructure: false,
          imageAltText: false,
          internalLinks: 0,
          externalLinks: 0,
        },
      };
    }

    const issues = [];
    let score = 100;

    // Check title length
    if (pageData.title.length < 30 || pageData.title.length > 60) {
      issues.push({
        type: 'warning',
        message: `Title length is ${pageData.title.length} characters`,
        suggestion: 'Title should be between 30-60 characters',
        priority: 'medium',
      });
      score -= 10;
    }

    // Check description length
    if (pageData.description.length < 120 || pageData.description.length > 160) {
      issues.push({
        type: 'warning',
        message: `Description length is ${pageData.description.length} characters`,
        suggestion: 'Description should be between 120-160 characters',
        priority: 'medium',
      });
      score -= 10;
    }

    return {
      score: Math.max(0, score),
      issues,
      recommendations: ['Optimize title and description lengths'],
      metrics: {
        titleLength: pageData.title.length,
        descriptionLength: pageData.description.length,
        keywordDensity: 0,
        headingStructure: true,
        imageAltText: true,
        internalLinks: 0,
        externalLinks: 0,
      },
    };
  }

  /**
   * Optimize page SEO
   */
  optimizePageSEO(pageData: PageSEOData): PageSEOData {
    const optimized = { ...pageData };

    // Optimize title
    if (optimized.title.length > 60) {
      optimized.title = optimized.title.substring(0, 57) + '...';
    }

    // Optimize description
    if (optimized.description.length > 160) {
      optimized.description = optimized.description.substring(0, 157) + '...';
    }

    return optimized;
  }

  /**
   * Generate sitemap
   */
  generateSitemap(): string {
    const pages = Array.from(this.pages.values());
    const now = new Date().toISOString();

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${this.config.siteUrl}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;
  }

  /**
   * Generate robots.txt
   */
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: ${this.config.siteUrl}/sitemap.xml`;
  }
}

// Export default instance
export const seoOptimizer = new AdvancedSEOOptimizer();

// Export utility functions
export const generatePageSEO = (pageData: Partial<PageSEOData>) => {
  return seoOptimizer.generatePageSEO(pageData);
};

export const updatePageSEO = (pageData: Partial<PageSEOData>) => {
  return seoOptimizer.generatePageSEO(pageData);
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
