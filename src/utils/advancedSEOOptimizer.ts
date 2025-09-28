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
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schemaMarkup?: any;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

class AdvancedSEOOptimizer {
  private config: SEOConfig;
  private isInitialized = false;
  private currentPageData: PageSEOData | null = null;

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
export type { SEOConfig, PageSEOData };
