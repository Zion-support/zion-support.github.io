/**
 * Advanced SEO Optimization System
 * Comprehensive SEO utilities for better search engine visibility
 */

export interface SEOConfig {
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
  enableSchemaMarkup: boolean;
  enablePerformanceSEO: boolean;
  enableAccessibilitySEO: boolean;
}

export interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
  canonical: string;
  noindex: boolean;
  nofollow: boolean;
  ogType: string;
  twitterCard: string;
  structuredData: any;
}

export class SEOOptimizer {
  private config: SEOConfig;
  private currentPageData: Partial<PageSEOData> = {};

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      siteName: 'Zion Tech Group',
      siteUrl: 'https://zion.app',
      defaultTitle: 'Zion Tech Group - Advanced Technology Solutions',
      defaultDescription: 'Leading provider of cutting-edge technology solutions, AI services, and digital transformation consulting.',
      defaultImage: 'https://zion.app/og-image.jpg',
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
      enableSchemaMarkup: true,
      enablePerformanceSEO: true,
      enableAccessibilitySEO: true,
      ...config
    };
  }

  public initialize(): void {
    this.setupGoogleAnalytics();
    this.setupGoogleTagManager();
    this.generateRobotsTxt();
    this.generateSitemap();
    this.optimizePageSpeed();
    this.enhanceAccessibility();
  }

  public updatePageSEO(data: Partial<PageSEOData>): void {
    this.currentPageData = { ...this.currentPageData, ...data };
    this.applySEOData();
  }

  private applySEOData(): void {
    this.updateTitle();
    this.updateMetaDescription();
    this.updateKeywords();
    this.updateCanonicalUrl();
    this.updateOpenGraphTags();
    this.updateTwitterCards();
    this.updateStructuredData();
    this.updateRobotsMeta();
  }

  private updateTitle(): void {
    const title = this.currentPageData.title || this.config.defaultTitle;
    document.title = title;
    
    // Update meta title
    this.updateMetaTag('title', title);
  }

  private updateMetaDescription(): void {
    const description = this.currentPageData.description || this.config.defaultDescription;
    this.updateMetaTag('description', description, 'name');
  }

  private updateKeywords(): void {
    const keywords = this.currentPageData.keywords || [];
    if (keywords.length > 0) {
      this.updateMetaTag('keywords', keywords.join(', '), 'name');
    }
  }

  private updateCanonicalUrl(): void {
    if (!this.config.enableCanonical) return;
    
    const canonical = this.currentPageData.canonical || this.currentPageData.url || window.location.href;
    this.updateLinkTag('canonical', canonical);
  }

  private updateOpenGraphTags(): void {
    if (!this.config.enableOpenGraph) return;

    const ogData = {
      'og:title': this.currentPageData.title || this.config.defaultTitle,
      'og:description': this.currentPageData.description || this.config.defaultDescription,
      'og:image': this.currentPageData.image || this.config.defaultImage,
      'og:url': this.currentPageData.url || window.location.href,
      'og:type': this.currentPageData.ogType || 'website',
      'og:site_name': this.config.siteName
    };

    Object.entries(ogData).forEach(([property, content]) => {
      this.updateMetaTag(property, content, 'property');
    });
  }

  private updateTwitterCards(): void {
    if (!this.config.enableTwitterCards) return;

    const twitterData = {
      'twitter:card': this.currentPageData.twitterCard || 'summary_large_image',
      'twitter:site': this.config.twitterHandle,
      'twitter:title': this.currentPageData.title || this.config.defaultTitle,
      'twitter:description': this.currentPageData.description || this.config.defaultDescription,
      'twitter:image': this.currentPageData.image || this.config.defaultImage
    };

    Object.entries(twitterData).forEach(([name, content]) => {
      this.updateMetaTag(name, content, 'name');
    });
  }

  private updateStructuredData(): void {
    if (!this.config.enableStructuredData) return;

    const structuredData = this.currentPageData.structuredData || this.generateDefaultStructuredData();
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private updateRobotsMeta(): void {
    const noindex = this.currentPageData.noindex || false;
    const nofollow = this.currentPageData.nofollow || false;
    
    if (noindex || nofollow) {
      const content = [];
      if (noindex) content.push('noindex');
      if (nofollow) content.push('nofollow');
      
      this.updateMetaTag('robots', content.join(', '), 'name');
    }
  }

  private generateDefaultStructuredData(): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.config.siteName,
      url: this.config.siteUrl,
      logo: this.config.defaultImage,
      description: this.config.defaultDescription,
      sameAs: [
        `https://twitter.com/${this.config.twitterHandle.replace('@', '')}`,
        `https://facebook.com/${this.config.facebookAppId}`
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service'
      }
    };
  }

  private updateMetaTag(property: string, content: string, attribute: string = 'property'): void {
    let meta = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, property);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }

  private updateLinkTag(rel: string, href: string): void {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
    
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    
    link.href = href;
  }

  private setupGoogleAnalytics(): void {
    if (!this.config.googleAnalyticsId) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.googleAnalyticsId}`;
    document.head.appendChild(script);

    const gtagScript = document.createElement('script');
    gtagScript.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.config.googleAnalyticsId}');
    `;
    document.head.appendChild(gtagScript);
  }

  private setupGoogleTagManager(): void {
    if (!this.config.googleTagManagerId) return;

    const gtmScript = document.createElement('script');
    gtmScript.textContent = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${this.config.googleTagManagerId}');
    `;
    document.head.insertBefore(gtmScript, document.head.firstChild);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${this.config.googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);
  }

  private generateRobotsTxt(): void {
    if (!this.config.enableRobotsTxt) return;

    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${this.config.siteUrl}/sitemap.xml`;

    // In a real implementation, this would be served from the server
    console.log('Robots.txt content:', robotsContent);
  }

  private generateSitemap(): void {
    if (!this.config.enableSitemap) return;

    // In a real implementation, this would generate an XML sitemap
    console.log('Sitemap generation would happen here');
  }

  private optimizePageSpeed(): void {
    if (!this.config.enablePerformanceSEO) return;

    // Add performance hints
    this.addResourceHints();
    this.optimizeImages();
    this.enableCompression();
  }

  private addResourceHints(): void {
    // Add preconnect hints for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }

  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }

  private enableCompression(): void {
    // This would typically be handled by the server
    console.log('Compression would be enabled on the server');
  }

  private enhanceAccessibility(): void {
    if (!this.config.enableAccessibilitySEO) return;

    // Add ARIA labels where needed
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add alt text to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', 'Image');
    });
  }

  public trackEvent(eventName: string, parameters: Record<string, any> = {}): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }
  }

  public trackPageView(pagePath: string, pageTitle: string): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', this.config.googleAnalyticsId, {
        page_path: pagePath,
        page_title: pageTitle
      });
    }
  }
}

// Export singleton instance
export const seoOptimizer = new SEOOptimizer();

// Export utility functions
export const updatePageSEO = (data: Partial<PageSEOData>): void => {
  seoOptimizer.updatePageSEO(data);
};

export const trackSEOEvent = (eventName: string, parameters: Record<string, any> = {}): void => {
  seoOptimizer.trackEvent(eventName, parameters);
};

export const trackSEOPageView = (pagePath: string, pageTitle: string): void => {
  seoOptimizer.trackPageView(pagePath, pageTitle);
};

export default SEOOptimizer;