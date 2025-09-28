/**
 * SEO Optimization Utility
 * Provides comprehensive SEO optimization features
 */

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface SEOConfig {
  enableStructuredData: boolean;
  enableSitemap: boolean;
  enableRobots: boolean;
  enableAnalytics: boolean;
  enableSocialSharing: boolean;
}

class SEOOptimizer {
  private config: SEOConfig;
  private currentData: SEOData | null = null;

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      enableStructuredData: true,
      enableSitemap: true,
      enableRobots: true,
      enableAnalytics: true,
      enableSocialSharing: true,
      ...config
    };
  }

  /**
   * Initialize SEO optimization
   */
  initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupAnalytics();
    this.setupSocialSharing();
    // Initialize with default structured data
  }

  /**
   * Update SEO data for current page
   */
  updateSEO(data: SEOData): void {
    this.currentData = data;
    
    this.updateMetaTags(data);
    this.updateOpenGraph(data);
    this.updateTwitterCard(data);
    this.updateStructuredData(data);
    
    if (this.config.enableAnalytics) {
      this.trackPageView(data);
    }
  }

  /**
   * Update basic meta tags
   */
  private updateMetaTags(data: SEOData): void {
    // Title
    document.title = data.title;

    // Description
    this.setMetaTag('description', data.description);

    // Keywords
    if (data.keywords.length > 0) {
      this.setMetaTag('keywords', data.keywords.join(', '));
    }

    // Author
    if (data.author) {
      this.setMetaTag('author', data.author);
    }

    // Robots
    if (data.robots) {
      this.setMetaTag('robots', data.robots);
    }

    // Canonical URL
    if (data.canonical) {
      this.setCanonical(data.canonical);
    }
  }

  /**
   * Update Open Graph tags
   */
  private updateOpenGraph(data: SEOData): void {
    if (!this.config.enableSocialSharing) return;

    const ogTags = [
      { property: 'og:title', content: data.ogTitle || data.title },
      { property: 'og:description', content: data.ogDescription || data.description },
      { property: 'og:image', content: data.ogImage || '/og-image.png' },
      { property: 'og:url', content: data.ogUrl || window.location.href },
      { property: 'og:type', content: data.ogType || 'website' },
      { property: 'og:site_name', content: 'Zion Tech Group' }
    ];

    ogTags.forEach(tag => {
      this.setMetaTag(tag.property, tag.content, 'property');
    });

    // Additional OG tags
    if (data.publishedTime) {
      this.setMetaTag('article:published_time', data.publishedTime, 'property');
    }
    if (data.modifiedTime) {
      this.setMetaTag('article:modified_time', data.modifiedTime, 'property');
    }
    if (data.section) {
      this.setMetaTag('article:section', data.section, 'property');
    }
    if (data.tags && data.tags.length > 0) {
      data.tags.forEach(tag => {
        this.setMetaTag('article:tag', tag, 'property');
      });
    }
  }

  /**
   * Update Twitter Card tags
   */
  private updateTwitterCard(data: SEOData): void {
    if (!this.config.enableSocialSharing) return;

    const twitterTags = [
      { name: 'twitter:card', content: data.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: data.twitterTitle || data.title },
      { name: 'twitter:description', content: data.twitterDescription || data.description },
      { name: 'twitter:image', content: data.twitterImage || data.ogImage || '/og-image.png' }
    ];

    twitterTags.forEach(tag => {
      this.setMetaTag(tag.name, tag.content);
    });
  }

  /**
   * Generate and update structured data
   */
  private generateStructuredData(_data: SEOData): void {
    if (!this.config.enableStructuredData) return;

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      description: 'Advanced AI and IT Solutions',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/zion-tech-group'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      }
    };

    this.setStructuredData(structuredData);
  }

  /**
   * Update structured data for current page
   */
  private updateStructuredData(data: SEOData): void {
    if (!this.config.enableStructuredData) return;

    const pageStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.title,
      description: data.description,
      url: window.location.href,
      mainEntity: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      breadcrumb: this.generateBreadcrumb(),
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime || new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      }
    };

    this.setStructuredData(pageStructuredData);
  }

  /**
   * Generate breadcrumb structured data
   */
  private generateBreadcrumb(): any {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: pathSegments.map((segment, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: this.formatBreadcrumbName(segment),
        item: `${window.location.origin}/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    };

    return breadcrumb;
  }

  /**
   * Format breadcrumb name
   */
  private formatBreadcrumbName(segment: string): string {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /**
   * Set meta tag
   */
  private setMetaTag(name: string, content: string, attribute: string = 'name'): void {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  }

  /**
   * Set canonical URL
   */
  private setCanonical(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    canonical.setAttribute('href', url);
  }

  /**
   * Set structured data
   */
  private setStructuredData(data: any): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Setup analytics tracking
   */
  private setupAnalytics(): void {
    if (!this.config.enableAnalytics) return;

    // Google Analytics setup would go here
    console.log('Analytics tracking initialized');
  }

  /**
   * Setup social sharing
   */
  private setupSocialSharing(): void {
    if (!this.config.enableSocialSharing) return;

    // Social sharing buttons and tracking would go here
    console.log('Social sharing initialized');
  }

  /**
   * Track page view
   */
  private trackPageView(data: SEOData): void {
    if ('gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: data.title,
        page_location: window.location.href
      });
    }

    // Send to other analytics services
    console.log('Page view tracked:', data.title);
  }

  /**
   * Generate sitemap
   */
  generateSitemap(): string {
    if (!this.config.enableSitemap) return '';

    const baseUrl = window.location.origin;
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'weekly' }
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';
    return sitemap;
  }

  /**
   * Get current SEO data
   */
  getCurrentData(): SEOData | null {
    return this.currentData;
  }

  /**
   * Validate SEO data
   */
  validateSEO(data: SEOData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.title || data.title.length < 30 || data.title.length > 60) {
      errors.push('Title should be between 30-60 characters');
    }

    if (!data.description || data.description.length < 120 || data.description.length > 160) {
      errors.push('Description should be between 120-160 characters');
    }

    if (!data.keywords || data.keywords.length === 0) {
      errors.push('Keywords should not be empty');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Export singleton instance
export const seoOptimizer = new SEOOptimizer();

// Export class for custom instances
export { SEOOptimizer };
export type { SEOData, SEOConfig };