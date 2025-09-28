/**
 * Advanced SEO Optimizer for Zion Tech Group Website
 * Provides comprehensive SEO optimization and monitoring utilities
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
  enableStructuredData: boolean;
  enableSitemap: boolean;
  enableRobots: boolean;
}

interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
  type: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

class SEOOptimizer {
  private config: SEOConfig;
  private currentPageSEO: PageSEO | null = null;

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      siteName: 'Zion Tech Group',
      siteUrl: 'https://ziontechgroup.com',
      defaultTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
      defaultDescription: 'Leading provider of AI-powered IT solutions, cloud computing, cybersecurity, and digital transformation services for enterprises worldwide.',
      defaultImage: '/images/og-default.jpg',
      twitterHandle: '@ZionTechGroup',
      facebookAppId: '',
      googleAnalyticsId: '',
      enableStructuredData: true,
      enableSitemap: true,
      enableRobots: true,
      ...config
    };

    this.initializeSEO();
  }

  /**
   * Initialize SEO optimizations
   */
  private initializeSEO(): void {
    if (typeof window === 'undefined') return;

    // Set default meta tags
    this.setDefaultMetaTags();

    // Initialize structured data
    if (this.config.enableStructuredData) {
      this.initializeStructuredData();
    }

    // Initialize analytics
    if (this.config.googleAnalyticsId) {
      this.initializeAnalytics();
    }

    // Initialize social media optimization
    this.initializeSocialOptimization();

    // Initialize performance monitoring
    this.initializePerformanceMonitoring();
  }

  /**
   * Set default meta tags
   */
  private setDefaultMetaTags(): void {
    this.updateMetaTag('description', this.config.defaultDescription);
    this.updateMetaTag('keywords', 'AI, IT Solutions, Cloud Computing, Cybersecurity, Digital Transformation, Enterprise Technology');
    this.updateMetaTag('author', 'Zion Tech Group');
    this.updateMetaTag('robots', 'index, follow');
    this.updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    this.updateMetaTag('theme-color', '#1a1a1a');
  }

  /**
   * Initialize structured data
   */
  private initializeStructuredData(): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.config.siteName,
      url: this.config.siteUrl,
      logo: `${this.config.siteUrl}/images/logo.png`,
      description: this.config.defaultDescription,
      sameAs: [
        'https://twitter.com/ZionTechGroup',
        'https://linkedin.com/company/zion-tech-group',
        'https://github.com/Zion-Holdings'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      }
    };

    this.addStructuredData(structuredData);
  }

  /**
   * Initialize Google Analytics
   */
  private initializeAnalytics(): void {
    if (this.config.googleAnalyticsId) {
      // Google Analytics 4
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.googleAnalyticsId}`;
      document.head.appendChild(script);

      const configScript = document.createElement('script');
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${this.config.googleAnalyticsId}', {
          page_title: document.title,
          page_location: window.location.href
        });
      `;
      document.head.appendChild(configScript);
    }
  }

  /**
   * Initialize social media optimization
   */
  private initializeSocialOptimization(): void {
    // Open Graph tags
    this.updateMetaTag('og:site_name', this.config.siteName);
    this.updateMetaTag('og:type', 'website');
    this.updateMetaTag('og:locale', 'en_US');

    // Twitter Card tags
    this.updateMetaTag('twitter:card', 'summary_large_image');
    this.updateMetaTag('twitter:site', this.config.twitterHandle);
    this.updateMetaTag('twitter:creator', this.config.twitterHandle);

    // Facebook tags
    if (this.config.facebookAppId) {
      this.updateMetaTag('fb:app_id', this.config.facebookAppId);
    }
  }

  /**
   * Initialize performance monitoring
   */
  private initializePerformanceMonitoring(): void {
    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      
      // Track page load time
      this.trackEvent('page_load', {
        load_time: loadTime,
        page: window.location.pathname
      });
    });

    // Monitor user interactions
    this.trackUserInteractions();
  }

  /**
   * Track user interactions
   */
  private trackUserInteractions(): void {
    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        this.trackEvent('link_click', {
          url: link.href,
          text: link.textContent?.trim(),
          page: window.location.pathname
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent('form_submit', {
        form_id: form.id,
        form_class: form.className,
        page: window.location.pathname
      });
    });
  }

  /**
   * Update page SEO
   */
  updatePageSEO(seo: PageSEO): void {
    this.currentPageSEO = seo;

    // Update title
    document.title = seo.title;

    // Update meta tags
    this.updateMetaTag('description', seo.description);
    this.updateMetaTag('keywords', seo.keywords.join(', '));
    this.updateMetaTag('og:title', seo.title);
    this.updateMetaTag('og:description', seo.description);
    this.updateMetaTag('og:image', seo.image);
    this.updateMetaTag('og:url', seo.url);
    this.updateMetaTag('og:type', seo.type);
    this.updateMetaTag('twitter:title', seo.title);
    this.updateMetaTag('twitter:description', seo.description);
    this.updateMetaTag('twitter:image', seo.image);

    // Update canonical URL
    this.updateCanonicalURL(seo.url);

    // Add article-specific meta tags
    if (seo.type === 'article') {
      if (seo.publishedTime) {
        this.updateMetaTag('article:published_time', seo.publishedTime);
      }
      if (seo.modifiedTime) {
        this.updateMetaTag('article:modified_time', seo.modifiedTime);
      }
      if (seo.author) {
        this.updateMetaTag('article:author', seo.author);
      }
      if (seo.section) {
        this.updateMetaTag('article:section', seo.section);
      }
      if (seo.tags) {
        seo.tags.forEach(tag => {
          this.addMetaTag('article:tag', tag);
        });
      }
    }

    // Update structured data for current page
    this.updatePageStructuredData(seo);

    // Track page view
    this.trackEvent('page_view', {
      page: seo.url,
      title: seo.title,
      type: seo.type
    });
  }

  /**
   * Update meta tag
   */
  private updateMetaTag(property: string, content: string): void {
    let meta = document.querySelector(`meta[name="${property}"], meta[property="${property}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property.startsWith('og:') || property.startsWith('twitter:') || property.startsWith('article:')) {
        meta.setAttribute('property', property);
      } else {
        meta.setAttribute('name', property);
      }
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  }

  /**
   * Add meta tag (for multiple values)
   */
  private addMetaTag(property: string, content: string): void {
    const meta = document.createElement('meta');
    meta.setAttribute('property', property);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalURL(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    canonical.setAttribute('href', url);
  }

  /**
   * Add structured data
   */
  private addStructuredData(data: object): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Update page-specific structured data
   */
  private updatePageStructuredData(seo: PageSEO): void {
    const pageData = {
      '@context': 'https://schema.org',
      '@type': this.getSchemaType(seo.type),
      name: seo.title,
      description: seo.description,
      url: seo.url,
      image: seo.image,
      publisher: {
        '@type': 'Organization',
        name: this.config.siteName,
        url: this.config.siteUrl
      }
    };

    // Add article-specific data
    if (seo.type === 'article') {
      (pageData as any)['@type'] = 'Article';
      if (seo.publishedTime) (pageData as any).datePublished = seo.publishedTime;
      if (seo.modifiedTime) (pageData as any).dateModified = seo.modifiedTime;
      if (seo.author) (pageData as any).author = { '@type': 'Person', name: seo.author };
      if (seo.section) (pageData as any).articleSection = seo.section;
      if (seo.tags) (pageData as any).keywords = seo.tags.join(', ');
    }

    // Remove existing page structured data
    const existingScript = document.querySelector('script[type="application/ld+json"][data-page-specific]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-specific', 'true');
    script.textContent = JSON.stringify(pageData);
    document.head.appendChild(script);
  }

  /**
   * Get schema.org type for page type
   */
  private getSchemaType(type: string): string {
    switch (type) {
      case 'article': return 'Article';
      case 'product': return 'Product';
      case 'service': return 'Service';
      default: return 'WebPage';
    }
  }

  /**
   * Track custom event
   */
  trackEvent(eventName: string, parameters: Record<string, any> = {}): void {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }

    // Custom analytics tracking
    console.log('Event tracked:', eventName, parameters);
  }

  /**
   * Generate sitemap
   */
  generateSitemap(pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    ${page.lastmod ? `    <lastmod>${page.lastmod}</lastmod>` : ''}
    ${page.changefreq ? `    <changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority ? `    <priority>${page.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  /**
   * Generate robots.txt
   */
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: ${this.config.siteUrl}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /services/
Allow: /blog/
Allow: /about/
Allow: /contact/`;
  }

  /**
   * Optimize images for SEO
   */
  optimizeImageSEO(src: string, alt: string, title?: string): string {
    // Add proper alt text and title attributes
    return `<img src="${src}" alt="${alt}"${title ? ` title="${title}"` : ''} loading="lazy" decoding="async">`;
  }

  /**
   * Get current page SEO data
   */
  getCurrentPageSEO(): PageSEO | null {
    return this.currentPageSEO;
  }

  /**
   * Get SEO score based on current page
   */
  getSEOScore(): number {
    if (!this.currentPageSEO) return 0;

    let score = 0;
    const seo = this.currentPageSEO;

    // Title optimization (30 points)
    if (seo.title && seo.title.length >= 30 && seo.title.length <= 60) {
      score += 30;
    } else if (seo.title) {
      score += 15;
    }

    // Description optimization (25 points)
    if (seo.description && seo.description.length >= 120 && seo.description.length <= 160) {
      score += 25;
    } else if (seo.description) {
      score += 12;
    }

    // Keywords (15 points)
    if (seo.keywords && seo.keywords.length > 0) {
      score += 15;
    }

    // Image optimization (15 points)
    if (seo.image && seo.image !== this.config.defaultImage) {
      score += 15;
    }

    // URL optimization (10 points)
    if (seo.url && !seo.url.includes('undefined') && !seo.url.includes('null')) {
      score += 10;
    }

    // Type specification (5 points)
    if (seo.type && seo.type !== 'website') {
      score += 5;
    }

    return Math.min(100, score);
  }

  /**
   * Generate SEO report
   */
  generateSEOReport(): object {
    return {
      currentPage: this.currentPageSEO,
      score: this.getSEOScore(),
      timestamp: Date.now(),
      recommendations: this.getSEORecommendations()
    };
  }

  /**
   * Get SEO recommendations
   */
  private getSEORecommendations(): string[] {
    const recommendations: string[] = [];

    if (!this.currentPageSEO) {
      recommendations.push('Set page SEO data using updatePageSEO()');
      return recommendations;
    }

    const seo = this.currentPageSEO;

    if (!seo.title || seo.title.length < 30 || seo.title.length > 60) {
      recommendations.push('Optimize page title (should be 30-60 characters)');
    }

    if (!seo.description || seo.description.length < 120 || seo.description.length > 160) {
      recommendations.push('Optimize meta description (should be 120-160 characters)');
    }

    if (!seo.keywords || seo.keywords.length === 0) {
      recommendations.push('Add relevant keywords for better search visibility');
    }

    if (!seo.image || seo.image === this.config.defaultImage) {
      recommendations.push('Use unique, relevant images for better social sharing');
    }

    return recommendations;
  }
}

// Create and export singleton instance
export const seoOptimizer = new SEOOptimizer();

// Export class for custom configurations
export { SEOOptimizer };

// Export types
export type { SEOConfig, PageSEO };