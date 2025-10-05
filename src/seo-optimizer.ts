// SEO optimization utilities
export class SEOOptimizer {
  private static instance: SEOOptimizer;
  private isInitialized = false;

  static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupMetaTags();
    this.setupStructuredData();
    this.setupSitemap();
    this.setupRobotsTxt();
    
    this.isInitialized = true;
    console.log('SEO optimizer initialized');
  }

  private setupMetaTags(): void {
    // Set up basic meta tags
    this.setMetaTag('description', 'Zion Tech Group - Advanced AI and IT Solutions');
    this.setMetaTag('keywords', 'AI, IT solutions, enterprise, digital transformation');
    this.setMetaTag('author', 'Zion Tech Group');
    this.setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  }

  private setMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  private setupStructuredData(): void {
    // Set up structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI-powered enterprise solutions and digital transformation services",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private setupSitemap(): void {
    // Generate sitemap
    const sitemap = this.generateSitemap();
    console.log('Sitemap generated:', sitemap);
  }

  private generateSitemap(): string[] {
    return [
      '/',
      '/about',
      '/services',
      '/blog',
      '/contact',
      '/team',
      '/privacy',
      '/terms'
    ];
  }

  private setupRobotsTxt(): void {
    // Set up robots.txt content
    const robotsContent = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://ziontechgroup.com/sitemap.xml`;
    
    console.log('Robots.txt content:', robotsContent);
  }

  trackPageView(): void {
    // Track page views for analytics
    const pageData = {
      url: window.location.href,
      title: document.title,
      timestamp: new Date().toISOString()
    };
    
    console.log('Page view tracked:', pageData);
    
    // Send to analytics service
    this.sendToAnalytics(pageData);
  }

  private sendToAnalytics(data: { url: string; title: string; timestamp: string }): void {
    // Send data to analytics service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: data.title,
        page_location: data.url
      });
    }
  }

  updateTitle(title: string): void {
    document.title = `${title} | Zion Tech Group`;
  }

  updateDescription(description: string): void {
    this.setMetaTag('description', description);
  }

  updateKeywords(keywords: string): void {
    this.setMetaTag('keywords', keywords);
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('SEO optimizer cleaned up');
  }
}

export default SEOOptimizer;
