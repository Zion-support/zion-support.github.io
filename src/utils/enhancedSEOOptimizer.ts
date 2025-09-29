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
  headingStructure: string[];
  imageAltText: number;
  internalLinks: number;
  externalLinks: number;
  metaTags: number;
  schemaMarkup: boolean;
  sitemapExists: boolean;
  robotsTxtExists: boolean;
  pageSpeed: number;
  mobileFriendly: boolean;
}

export interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  category: 'content' | 'technical' | 'performance' | 'accessibility';
  message: string;
  suggestion: string;
  impact: 'high' | 'medium' | 'low';
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
  private metrics: SEOMetrics | null = null;
  private issues: SEOIssue[] = [];
  private isMonitoring: boolean = false;

  constructor() {
    this.setupPerformanceObserver();
    this.initializeSEOMonitoring();
  }

  /**
   * Initialize the SEO optimizer
   */
  initialize(): void {
    if (this.isInitialized) return;

    this.optimizeExistingMetaTags();
    this.setupDynamicMetaUpdates();
    this.injectStructuredData();
    this.optimizeImages();
    this.setupLazyLoading();
    this.isInitialized = true;

    console.log("✅ Enhanced SEO Optimizer initialized");
  }

  private initializeSEOMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;
    this.scanForSEOIssues();
    this.setupStructuredData();
    this.setupMetaTagOptimization();
    this.setupPerformanceMonitoring();
  }

  private scanForSEOIssues(): void {
    // Check title
    const title = document.title;
    if (!title || title.length < 10) {
      this.addIssue({
        type: 'error',
        category: 'content',
        message: 'Title too short or missing',
        suggestion: 'Add a descriptive title (10-60 characters)',
        impact: 'high'
      });
    } else if (title.length > 60) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Title too long',
        suggestion: 'Keep title under 60 characters',
        impact: 'medium'
      });
    }

    // Check meta description
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    if (!description || description.length < 120) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Meta description too short or missing',
        suggestion: 'Add a meta description (120-160 characters)',
        impact: 'medium'
      });
    }

    // Check heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    
    if (h1Count === 0) {
      this.addIssue({
        type: 'error',
        category: 'content',
        message: 'Missing H1 heading',
        suggestion: 'Add at least one H1 heading',
        impact: 'high'
      });
    } else if (h1Count > 1) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Multiple H1 headings',
        suggestion: 'Use only one H1 heading per page',
        impact: 'medium'
      });
    }

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    images.forEach(img => {
      if (!img.alt) {
        imagesWithoutAlt++;
      }
    });

    if (imagesWithoutAlt > 0) {
      this.addIssue({
        type: 'error',
        category: 'accessibility',
        message: `${imagesWithoutAlt} images missing alt text`,
        suggestion: 'Add alt attributes to all images',
        impact: 'high'
      });
    }

    // Check internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="' + window.location.hostname + '"]');
    if (internalLinks.length < 3) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Few internal links',
        suggestion: 'Add more internal links to improve site structure',
        impact: 'low'
      });
    }

    // Check Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
    const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');

    if (!ogTitle || !ogDescription || !ogImage) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Missing Open Graph tags',
        suggestion: 'Add og:title, og:description, and og:image meta tags',
        impact: 'medium'
      });
    }
  }

  private addIssue(issue: Omit<SEOIssue, 'id'>): void {
    const newIssue: SEOIssue = {
      ...issue,
      id: `seo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    this.issues.push(newIssue);
  }

  private setupStructuredData(): void {
    // Add basic structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": document.title,
      "url": window.location.href
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private setupMetaTagOptimization(): void {
    // Add viewport meta tag if missing
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }
  }

  private setupPerformanceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            this.performanceMetrics = {
              loadTime: entry.loadEventEnd - entry.loadEventStart,
              firstContentfulPaint: 0,
              largestContentfulPaint: 0,
              firstInputDelay: 0,
              cumulativeLayoutShift: 0,
              speedIndex: 0,
              totalBlockingTime: 0,
              timeToInteractive: 0
            };
          }
        }
      });
      this.observer.observe({ entryTypes: ['navigation'] });
    }
  }

  private setupPerformanceObserver(): void {
    if (typeof window === 'undefined') return;
    
    if ('PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            this.performanceMetrics = {
              loadTime: entry.loadEventEnd - entry.loadEventStart,
              firstContentfulPaint: 0,
              largestContentfulPaint: 0,
              firstInputDelay: 0,
              cumulativeLayoutShift: 0,
              speedIndex: 0,
              totalBlockingTime: 0,
              timeToInteractive: 0
            };
          }
        }
      });
      this.observer.observe({ entryTypes: ['navigation'] });
    }
  }

  /**
   * Update SEO data for the current page
   */
  updateSEO(data: SEOData): void {
    this.currentSEOData = data;
    this.updateMetaTags(data);
    this.updateOpenGraphTags(data);
    this.updateTwitterCardTags(data);
    
    if (data.structuredData) {
      this.updateStructuredData(data.structuredData);
    }
    
    this.updateRobotsMeta(data);
    const metrics = this.getSEOMetrics();
    console.log("SEO Metrics:", metrics);
  }

  /**
   * Update meta tags
   */
  private updateMetaTags(data: SEOData): void {
    document.title = data.title;
    this.setMetaTag("description", data.description);

    if (data.keywords && data.keywords.length > 0) {
      this.setMetaTag("keywords", data.keywords.join(", "));
    }

    this.setCanonicalUrl(data.canonical);

    if (data.language) {
      document.documentElement.lang = data.language;
    }

    if (data.author) {
      this.setMetaTag("author", data.author);
    }

    if (data.publishedTime) {
      this.setMetaTag("article:published_time", data.publishedTime);
    }

    if (data.modifiedTime) {
      this.setMetaTag("article:modified_time", data.modifiedTime);
    }

    if (data.section) {
      this.setMetaTag("article:section", data.section);
    }

    if (data.tags && data.tags.length > 0) {
      data.tags.forEach((tag) => {
        this.setMetaTag("article:tag", tag);
      });
    }
  }

  /**
   * Update Open Graph tags
   */
  private updateOpenGraphTags(data: SEOData): void {
    const ogTags = {
      "og:title": data.ogTitle || data.title,
      "og:description": data.ogDescription || data.description,
      "og:image": data.ogImage || "/og-image.png",
      "og:type": data.ogType || "website",
      "og:url": data.ogUrl || window.location.href
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      this.setMetaTag(property, content);
    });
  }

  /**
   * Update Twitter Card tags
   */
  private updateTwitterCardTags(data: SEOData): void {
    const twitterTags = {
      "twitter:card": data.twitterCard || "summary_large_image",
      "twitter:title": data.twitterTitle || data.title,
      "twitter:description": data.twitterDescription || data.description,
      "twitter:image": data.twitterImage || data.ogImage || "/og-image.png"
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      this.setMetaTag(name, content);
    });
  }

  /**
   * Update structured data
   */
  private updateStructuredData(structuredData: Record<string, unknown>): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  /**
   * Update robots meta tag
   */
  private updateRobotsMeta(data: SEOData): void {
    if (data.robots) {
      this.setMetaTag("robots", data.robots);
    }
  }

  /**
   * Set a meta tag
   */
  private setMetaTag(nameOrProperty: string, content: string): void {
    let meta = document.querySelector(`meta[name="${nameOrProperty}"], meta[property="${nameOrProperty}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      if (nameOrProperty.startsWith('og:') || nameOrProperty.startsWith('twitter:')) {
        meta.setAttribute('property', nameOrProperty);
      } else {
        meta.setAttribute('name', nameOrProperty);
      }
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  }

  /**
   * Set canonical URL
   */
  private setCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    canonical.setAttribute('href', url);
  }

  /**
   * Optimize existing meta tags
   */
  private optimizeExistingMetaTags(): void {
    // Add missing essential meta tags
    if (!document.querySelector('meta[name="viewport"]')) {
      this.setMetaTag("viewport", "width=device-width, initial-scale=1.0");
    }
    
    if (!document.querySelector('meta[name="theme-color"]')) {
      this.setMetaTag("theme-color", "#1e293b");
    }
  }

  /**
   * Setup dynamic meta updates
   */
  private setupDynamicMetaUpdates(): void {
    // Monitor for route changes and update meta tags accordingly
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', () => {
        this.scanForSEOIssues();
      });
    }
  }

  /**
   * Inject structured data
   */
  private injectStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": document.title,
      "url": window.location.href,
      "description": document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  /**
   * Optimize images
   */
  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  /**
   * Setup lazy loading
   */
  private setupLazyLoading(): void {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Get SEO metrics
   */
  getSEOMetrics(): SEOMetrics {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
    const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '';
    const structuredData = document.querySelector('script[type="application/ld+json"]')?.textContent || '';
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || '';

    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => h.tagName);
    const images = document.querySelectorAll('img');
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="' + window.location.hostname + '"]');
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    const metaTags = document.querySelectorAll('meta').length;

    const recommendations: string[] = [];
    let score = 100;

    if (title.length < 10 || title.length > 60) {
      recommendations.push('Optimize title length (10-60 characters)');
      score -= 10;
    }

    if (description.length < 120 || description.length > 160) {
      recommendations.push('Optimize meta description (120-160 characters)');
      score -= 10;
    }

    if (!canonical) {
      recommendations.push('Add canonical URL');
      score -= 5;
    }

    if (!ogTitle) {
      recommendations.push('Add Open Graph title');
      score -= 5;
    }

    if (!twitterCard) {
      recommendations.push('Add Twitter Card meta');
      score -= 5;
    }

    if (!structuredData) {
      recommendations.push('Add structured data');
      score -= 10;
    }

    return {
      titleLength: title.length,
      descriptionLength: description.length,
      keywordsCount: keywords.split(',').length,
      hasCanonical: !!canonical,
      hasOpenGraph: !!ogTitle,
      hasTwitterCard: !!twitterCard,
      hasStructuredData: !!structuredData,
      hasRobots: !!robots,
      score: Math.max(0, score),
      recommendations,
      headingStructure: headings,
      imageAltText: Array.from(images).filter(img => img.alt).length,
      internalLinks: internalLinks.length,
      externalLinks: externalLinks.length,
      metaTags,
      schemaMarkup: !!structuredData,
      sitemapExists: false, // Would need to check server-side
      robotsTxtExists: false, // Would need to check server-side
      pageSpeed: this.performanceMetrics?.loadTime || 0,
      mobileFriendly: true // Would need to check with Google's API
    };
  }

  /**
   * Get SEO issues
   */
  getIssues(): SEOIssue[] {
    return [...this.issues];
  }

  /**
   * Clear all issues
   */
  clearIssues(): void {
    this.issues = [];
  }

  /**
   * Get performance metrics
   */
  getPerformanceMetrics(): PagePerformanceMetrics | null {
    return this.performanceMetrics;
  }

  /**
   * Cleanup
   */
  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.isMonitoring = false;
    this.issues = [];
  }
}

// Export singleton instance
export const enhancedSEOOptimizer = new EnhancedSEOOptimizer();