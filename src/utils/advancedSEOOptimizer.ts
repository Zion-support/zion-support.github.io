/**
 * Advanced SEO Optimizer
 * Comprehensive SEO optimization utilities for the Zion Tech Group website
 */

interface SEOConfig {
  enableMetaOptimization: boolean;
  enableStructuredData: boolean;
  enableSitemapGeneration: boolean;
  enableRobotsTxt: boolean;
  enableCanonicalUrls: boolean;
  enableOpenGraph: boolean;
  enableTwitterCards: boolean;
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
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      if (this.config.enableMetaOptimization) {
        this.optimizeMetaTags();
      }

      if (this.config.enableStructuredData) {
        this.addStructuredData();
      }

      if (this.config.enableSitemapGeneration) {
        await this.generateSitemap();
      }

      if (this.config.enableRobotsTxt) {
        await this.generateRobotsTxt();
      }

      if (this.config.enablePerformanceSEO) {
        this.optimizeForPerformance();
      }

      if (this.config.enableAccessibilitySEO) {
        this.optimizeForAccessibility();
      }

      this.isInitialized = true;
      console.log('🔍 Advanced SEO Optimizer initialized');
    } catch (error) {
      console.error('Error initializing SEO optimizer:', error);
    }
  }

  /**
   * Optimize meta tags for better SEO
   */
  private optimizeMetaTags(): void {
    if (typeof document === 'undefined') return;

    // Ensure viewport meta tag
    this.ensureMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Add charset if not present
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'utf-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Add theme color
    this.ensureMetaTag('theme-color', '#667eea');

    // Add mobile web app capabilities
    this.ensureMetaTag('apple-mobile-web-app-capable', 'yes');
    this.ensureMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    this.ensureMetaTag('apple-mobile-web-app-title', 'Zion Tech Group');
  }

  /**
   * Ensure a meta tag exists with the given name and content
   */
  private ensureMetaTag(name: string, content: string): void {
    if (typeof document === 'undefined') return;

    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  /**
   * Add structured data for better search engine understanding
   */
  private addStructuredData(): void {
    if (typeof document === 'undefined') return;

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading AI and Technology Solutions Provider",
      "url": "https://zion.app",
      "logo": "https://zion.app/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      }
    };

    this.addStructuredDataScript(organizationSchema);
  }

  /**
   * Add structured data script to the page
   */
  private addStructuredDataScript(data: any): void {
    if (typeof document === 'undefined') return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Generate sitemap for better crawling
   */
  private async generateSitemap(): Promise<void> {
    if (typeof window === 'undefined') return;

    const pages = [
      { url: '/', priority: 1.0, changefreq: 'daily' },
      { url: '/about', priority: 0.8, changefreq: 'monthly' },
      { url: '/services', priority: 0.9, changefreq: 'weekly' },
      { url: '/contact', priority: 0.7, changefreq: 'monthly' },
      { url: '/blog', priority: 0.8, changefreq: 'weekly' },
      { url: '/portfolio', priority: 0.6, changefreq: 'monthly' }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://zion.app${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Store sitemap in localStorage for now (in production, this would be server-generated)
    localStorage.setItem('sitemap', sitemap);
  }

  /**
   * Generate robots.txt content
   */
  private async generateRobotsTxt(): Promise<void> {
    if (typeof window === 'undefined') return;

    const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://zion.app/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow important pages
Allow: /services/
Allow: /blog/
Allow: /portfolio/`;

    // Store robots.txt in localStorage for now
    localStorage.setItem('robots.txt', robotsTxt);
  }

  /**
   * Optimize for performance-related SEO
   */
  private optimizeForPerformance(): void {
    if (typeof window === 'undefined') return;

    // Add performance hints
    const hints = [
      { rel: 'preload', href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/images/hero-bg.webp', as: 'image' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      Object.entries(hint).forEach(([key, value]) => {
        link.setAttribute(key, value as string);
      });
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize for accessibility-related SEO
   */
  private optimizeForAccessibility(): void {
    if (typeof document === 'undefined') return;

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
    `;
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.hasAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    // Add language attribute
    if (!document.documentElement.hasAttribute('lang')) {
      document.documentElement.setAttribute('lang', 'en');
    }
  }

  /**
   * Update page SEO data
   */
  public updatePageSEO(data: PageSEOData): void {
    this.currentPageData = data;
    this.applyPageSEO();
  }

  /**
   * Apply page SEO data to the document
   */
  private applyPageSEO(): void {
    if (!this.currentPageData || typeof document === 'undefined') return;

    const data = this.currentPageData;

    // Update title
    document.title = data.title;

    // Update meta description
    this.ensureMetaTag('description', data.description);

    // Update keywords
    if (data.keywords.length > 0) {
      this.ensureMetaTag('keywords', data.keywords.join(', '));
    }

    // Update canonical URL
    this.ensureCanonicalUrl(data.canonicalUrl);

    // Update Open Graph tags
    if (this.config.enableOpenGraph) {
      this.updateOpenGraphTags(data);
    }

    // Update Twitter Card tags
    if (this.config.enableTwitterCards) {
      this.updateTwitterCardTags(data);
    }

    // Update schema markup
    if (this.config.enableSchemaMarkup && data.schemaMarkup) {
      this.addStructuredDataScript(data.schemaMarkup);
    }

    // Update robots
    if (data.robots) {
      this.ensureMetaTag('robots', data.robots);
    }
  }

  /**
   * Ensure canonical URL is set
   */
  private ensureCanonicalUrl(url: string): void {
    if (typeof document === 'undefined') return;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  /**
   * Update Open Graph tags
   */
  private updateOpenGraphTags(data: PageSEOData): void {
    if (typeof document === 'undefined') return;

    const ogTags = [
      { property: 'og:title', content: data.ogTitle || data.title },
      { property: 'og:description', content: data.ogDescription || data.description },
      { property: 'og:image', content: data.ogImage || 'https://zion.app/og-image.jpg' },
      { property: 'og:url', content: data.ogUrl || data.canonicalUrl },
      { property: 'og:type', content: data.ogType || 'website' },
      { property: 'og:site_name', content: 'Zion Tech Group' }
    ];

    ogTags.forEach(tag => {
      this.ensureMetaTag(tag.property, tag.content);
    });
  }

  /**
   * Update Twitter Card tags
   */
  private updateTwitterCardTags(data: PageSEOData): void {
    if (typeof document === 'undefined') return;

    const twitterTags = [
      { name: 'twitter:card', content: data.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: data.twitterTitle || data.title },
      { name: 'twitter:description', content: data.twitterDescription || data.description },
      { name: 'twitter:image', content: data.twitterImage || data.ogImage || 'https://zion.app/og-image.jpg' }
    ];

    twitterTags.forEach(tag => {
      this.ensureMetaTag(tag.name, tag.content);
    });
  }

  /**
   * Generate breadcrumb schema
   */
  public generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): any {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://zion.app${item.url}`
      }))
    };
  }

  /**
   * Generate FAQ schema
   */
  public generateFAQSchema(faqs: Array<{ question: string; answer: string }>): any {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  /**
   * Get current page SEO data
   */
  public getCurrentPageData(): PageSEOData | null {
    return this.currentPageData;
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