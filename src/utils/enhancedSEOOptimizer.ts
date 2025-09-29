/**
 * Enhanced SEO Optimizer
 * Comprehensive SEO optimization and monitoring system
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  robots?: string;
  language?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  keywordsCount: number;
  hasCanonical: boolean;
  hasOpenGraph: boolean;
  hasTwitterCard: boolean;
  hasStructuredData: boolean;
  hasRobots: boolean;
  score: number;
  recommendations: string[];
}

export interface PagePerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  speedIndex: number;
  totalBlockingTime: number;
  timeToInteractive: number;
}

class EnhancedSEOOptimizer {
  private currentSEOData: SEOData | null = null;
  private isInitialized = false;
  private performanceMetrics: PagePerformanceMetrics | null = null;
  private observer: PerformanceObserver | null = null;

  /**
   * Initialize the SEO optimizer
   */
  initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }

    this.isInitialized = true;
    this.setupPerformanceObserver();
    this.setupStructuredData();
  }

  /**
   * Update SEO data
   */
  updateSEOData(data: SEOData): void {
    this.currentSEOData = data;
    this.updateMetaTags(data);
    this.updateOpenGraphTags(data);
    this.updateTwitterCardTags(data);
    this.updateStructuredData(data);
    this.updateCanonicalUrl(data.canonical);
  }

  /**
   * Update meta tags
   */
  private updateMetaTags(data: SEOData): void {
    this.setMetaTag('title', data.title);
    this.setMetaTag('description', data.description);
    this.setMetaTag('keywords', data.keywords.join(', '));
    
    if (data.robots) {
      this.setMetaTag('robots', data.robots);
    }
    
    if (data.language) {
      this.setMetaTag('language', data.language);
    }
  }

  /**
   * Set meta tag
   */
  private setMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  /**
   * Update Open Graph tags
   */
  private updateOpenGraphTags(data: SEOData): void {
    const ogTags = {
      'og:title': data.ogTitle || data.title,
      'og:description': data.ogDescription || data.description,
      'og:image': data.ogImage || '/og-image.png',
      'og:type': data.ogType || 'website',
      'og:url': data.ogUrl || window.location.href
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      this.setMetaProperty(property, content);
    });
  }

  /**
   * Set meta property
   */
  private setMetaProperty(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  /**
   * Update Twitter Card tags
   */
  private updateTwitterCardTags(data: SEOData): void {
    const twitterTags = {
      'twitter:card': data.twitterCard || 'summary_large_image',
      'twitter:title': data.twitterTitle || data.title,
      'twitter:description': data.twitterDescription || data.description,
      'twitter:image': data.twitterImage || data.ogImage || '/og-image.png'
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      this.setMetaTag(name, content);
    });
  }

  /**
   * Update structured data
   */
  private updateStructuredData(data: SEOData): void {
    if (!data.structuredData) return;

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data.structuredData);
    document.head.appendChild(script);
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  /**
   * Setup performance observer for Core Web Vitals
   */
  private setupPerformanceObserver(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'navigation':
              this.handleNavigationTiming(entry as PerformanceNavigationTiming);
              break;
            case 'paint':
              this.handlePaintTiming(entry as PerformancePaintTiming);
              break;
            case 'largest-contentful-paint':
              this.handleLCPTiming(entry as PerformanceEntry);
              break;
            case 'first-input':
              this.handleFIDTiming(entry as PerformanceEventTiming);
              break;
            case 'cumulative-layout-shift':
              this.handleCLSTiming(entry as PerformanceEntry);
              break;
          }
        }
      });

      this.observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'cumulative-layout-shift'] });
    } catch (error) {
      console.error('Failed to setup performance observer:', error);
    }
  }

  private setupStructuredData(): void {
    // Add JSON-LD structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Zion Tech Group',
      'url': window.location.origin,
      'logo': window.location.origin + '/logo.png',
      'description': 'Advanced AI and IT Solutions',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+1-555-0123',
        'contactType': 'customer service'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private handleNavigationTiming(entry: PerformanceNavigationTiming): void {
    // Handle navigation timing
  }

  private handlePaintTiming(entry: PerformancePaintTiming): void {
    // Handle paint timing
  }

  private handleLCPTiming(entry: PerformanceEntry): void {
    // Handle LCP timing
  }

  private handleFIDTiming(entry: PerformanceEventTiming): void {
    // Handle FID timing
  }

  private handleCLSTiming(entry: PerformanceEntry): void {
    // Handle CLS timing
  }

  /**
   * Get current performance metrics
   */
  getPerformanceMetrics(): PagePerformanceMetrics | null {
    return this.performanceMetrics;
  }

  /**
   * Get current SEO data
   */
  getCurrentSEOData(): SEOData | null {
    return this.currentSEOData;
  }

  /**
   * Cleanup
   */
  cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

// Export singleton instance
export const enhancedSEOOptimizer = new EnhancedSEOOptimizer();

// Auto-initialize
if (typeof window !== 'undefined') {
  enhancedSEOOptimizer.initialize();
}