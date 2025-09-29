/**
 * Enhanced SEO Optimizer
<<<<<<< HEAD
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

  constructor() {
    this.setupPerformanceObserver();
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

  /**
   * Update SEO data for the current page
   */
  updateSEO(data: SEOData): void {
    this.currentSEOData = data;

    // Update meta tags
    this.updateMetaTags(data);

    // Update Open Graph tags
    this.updateOpenGraphTags(data);

    // Update Twitter Card tags
    this.updateTwitterCardTags(data);

    // Update structured data
    if (data.structuredData) {
      this.updateStructuredData(data.structuredData);
    }

    // Update robots meta
    this.updateRobotsMeta(data);

    // Log SEO metrics
    const metrics = this.getSEOMetrics();
    console.log("SEO Metrics:", metrics);
  }

  /**
   * Update meta tags
   */
  private updateMetaTags(data: SEOData): void {
    // Title
    document.title = data.title;

    // Description
    this.setMetaTag("description", data.description);

    // Keywords
    if (data.keywords && data.keywords.length > 0) {
      this.setMetaTag("keywords", data.keywords.join(", "));
    }

    // Canonical
    this.setCanonicalUrl(data.canonical);

    // Language
    if (data.language) {
      document.documentElement.lang = data.language;
    }

    // Author
    if (data.author) {
      this.setMetaTag("author", data.author);
    }

    // Published time
    if (data.publishedTime) {
      this.setMetaTag("article:published_time", data.publishedTime);
    }

    // Modified time
    if (data.modifiedTime) {
      this.setMetaTag("article:modified_time", data.modifiedTime);
    }

    // Section
    if (data.section) {
      this.setMetaTag("article:section", data.section);
    }

    // Tags
    if (data.tags && data.tags.length > 0) {
      data.tags.forEach((tag) => {
        this.setMetaTag("article:tag", tag);
=======
 * Advanced SEO monitoring and optimization tools
 */

export interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
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

class EnhancedSEOOptimizer {
  private metrics: SEOMetrics | null = null;
  private issues: SEOIssue[] = [];
  private isMonitoring: boolean = false;

  constructor() {
    this.initializeSEOMonitoring();
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
    // Check title length
    const title = document.title;
    if (title.length < 30) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Title too short',
        suggestion: 'Increase title length to 30-60 characters',
        impact: 'medium'
      });
    } else if (title.length > 60) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Title too long',
        suggestion: 'Reduce title length to 30-60 characters',
        impact: 'medium'
      });
    }

    // Check meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      this.addIssue({
        type: 'error',
        category: 'content',
        message: 'Missing meta description',
        suggestion: 'Add meta description tag',
        impact: 'high'
      });
    } else {
      const description = metaDescription.getAttribute('content') || '';
      if (description.length < 120) {
        this.addIssue({
          type: 'warning',
          category: 'content',
          message: 'Meta description too short',
          suggestion: 'Increase description length to 120-160 characters',
          impact: 'medium'
        });
      } else if (description.length > 160) {
        this.addIssue({
          type: 'warning',
          category: 'content',
          message: 'Meta description too long',
          suggestion: 'Reduce description length to 120-160 characters',
          impact: 'medium'
        });
      }
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
        impact: 'medium'
      });
    }

    // Check for missing canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      this.addIssue({
        type: 'warning',
        category: 'technical',
        message: 'Missing canonical URL',
        suggestion: 'Add canonical link tag',
        impact: 'medium'
      });
    }

    // Check for missing Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (!ogTitle || !ogDescription || !ogImage) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Missing Open Graph tags',
        suggestion: 'Add og:title, og:description, and og:image meta tags',
        impact: 'medium'
>>>>>>> 4b999e7e8499b1d439e8efecb8a451947461db54
      });
    }
  }

<<<<<<< HEAD
  /**
   * Update Open Graph tags
   */
  private updateOpenGraphTags(data: SEOData): void {
    const ogTags = {
      "og:title": data.ogTitle || data.title,
      "og:description": data.ogDescription || data.description,
      "og:type": data.ogType || "website",
      "og:url": data.ogUrl || data.canonical,
      "og:image": data.ogImage || "/og-image.png",
      "og:site_name": "Zion Tech Group",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      this.setMetaProperty(property, content);
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
      "twitter:image":
        data.twitterImage || data.ogImage || "/twitter-image.png",
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      this.setMetaName(name, content);
    });
  }

  /**
   * Update structured data
   */
  private updateStructuredData(data: Record<string, unknown>): void {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    existingScripts.forEach((script) => script.remove());

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Update robots meta tag
   */
  private updateRobotsMeta(data: SEOData): void {
    if (data.robots) {
      this.setMetaName("robots", data.robots);
    }
  }

  /**
   * Set meta tag by name
   */
  private setMetaTag(name: string, content: string): void {
    let meta = document.querySelector(
      `meta[name="${name}"]`,
    ) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  /**
   * Set meta property (for Open Graph)
   */
  private setMetaProperty(property: string, content: string): void {
    let meta = document.querySelector(
      `meta[property="${property}"]`,
    ) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  /**
   * Set meta name (for Twitter Cards)
   */
  private setMetaName(name: string, content: string): void {
    let meta = document.querySelector(
      `meta[name="${name}"]`,
    ) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  /**
   * Set canonical URL
   */
  private setCanonicalUrl(url: string): void {
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  /**
   * Setup performance observer for Core Web Vitals
   */
  private setupPerformanceObserver(): void {
    if (!("PerformanceObserver" in window)) return;

    try {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case "navigation":
              this.handleNavigationTiming(entry as PerformanceNavigationTiming);
              break;
            case "paint":
              this.handlePaintTiming(entry as PerformancePaintTiming);
              break;
            case "largest-contentful-paint":
              this.handleLCPTiming(entry as PerformanceEntry);
              break;
            case "first-input":
              this.handleFIDTiming(entry as PerformanceEventTiming);
              break;
            case "cumulative-layout-shift":
              this.handleCLSTiming(entry as PerformanceEntry);
              break;
=======
  private setupStructuredData(): void {
    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": window.location.origin,
      "logo": window.location.origin + "/logo.png",
      "description": "Advanced AI and IT Solutions",
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ]
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

    // Add theme-color meta tag
    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#1e40af';
    document.head.appendChild(themeColor);

    // Add robots meta tag
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'index, follow';
    document.head.appendChild(robots);
  }

  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            if (entry.startTime > 2500) {
              this.addIssue({
                type: 'warning',
                category: 'performance',
                message: 'Slow Largest Contentful Paint',
                suggestion: 'Optimize images and largest content elements',
                impact: 'high'
              });
            }
>>>>>>> 4b999e7e8499b1d439e8efecb8a451947461db54
          }
        }
      });

<<<<<<< HEAD
      const supportedEntryTypes = [
        "navigation",
        "paint",
        "largest-contentful-paint",
        "first-input",
        "cumulative-layout-shift",
      ].filter((type) =>
        PerformanceObserver.supportedEntryTypes.includes(type),
      );

      this.observer.observe({ entryTypes: supportedEntryTypes });
    } catch (error) {
      console.warn("Failed to setup performance observer:", error);
    }
  }

  /**
   * Handle navigation timing
   */
  private handleNavigationTiming(entry: PerformanceNavigationTiming): void {
    if (!this.performanceMetrics) {
      this.performanceMetrics = {} as PagePerformanceMetrics;
    }

    this.performanceMetrics.loadTime =
      entry.loadEventEnd - entry.loadEventStart;
    this.performanceMetrics.timeToInteractive =
      entry.domInteractive - (entry.activationStart || 0);
  }

  /**
   * Handle paint timing
   */
  private handlePaintTiming(entry: PerformancePaintTiming): void {
    if (!this.performanceMetrics) {
      this.performanceMetrics = {} as PagePerformanceMetrics;
    }

    if (entry.name === "first-contentful-paint") {
      this.performanceMetrics.firstContentfulPaint = entry.startTime;
    }
  }

  /**
   * Handle Largest Contentful Paint timing
   */
  private handleLCPTiming(entry: PerformanceEntry): void {
    if (!this.performanceMetrics) {
      this.performanceMetrics = {} as PagePerformanceMetrics;
    }

    this.performanceMetrics.largestContentfulPaint = entry.startTime;
  }

  /**
   * Handle First Input Delay timing
   */
  private handleFIDTiming(entry: PerformanceEventTiming): void {
    if (!this.performanceMetrics) {
      this.performanceMetrics = {} as PagePerformanceMetrics;
    }

    this.performanceMetrics.firstInputDelay =
      entry.processingStart - entry.startTime;
  }

  /**
   * Handle Cumulative Layout Shift timing
   */
  private handleCLSTiming(entry: PerformanceEntry): void {
    if (!this.performanceMetrics) {
      this.performanceMetrics = {} as PagePerformanceMetrics;
    }

    this.performanceMetrics.cumulativeLayoutShift =
      (entry as PerformanceEntry & { value?: number }).value || 0;
  }

  /**
   * Get SEO metrics and score
   */
  getSEOMetrics(): SEOMetrics {
    const title = document.title;
    const description = this.getMetaContent("description");
    const keywords = this.getMetaContent("keywords");
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogTags = document.querySelectorAll('meta[property^="og:"]');
    const twitterTags = document.querySelectorAll('meta[name^="twitter:"]');
    const structuredData = document.querySelector(
      'script[type="application/ld+json"]',
    );
    const robots = this.getMetaContent("robots");

    const recommendations: string[] = [];

    // Title analysis
    if (title.length < 30) {
      recommendations.push(
        "Title is too short (recommended: 30-60 characters)",
      );
    } else if (title.length > 60) {
      recommendations.push("Title is too long (recommended: 30-60 characters)");
    }

    // Description analysis
    if (!description) {
      recommendations.push("Missing meta description");
    } else if (description.length < 120) {
      recommendations.push(
        "Meta description is too short (recommended: 120-160 characters)",
      );
    } else if (description.length > 160) {
      recommendations.push(
        "Meta description is too long (recommended: 120-160 characters)",
      );
    }

    // Keywords analysis
    if (!keywords) {
      recommendations.push("Missing meta keywords");
    }

    // Canonical URL analysis
    if (!canonical) {
      recommendations.push("Missing canonical URL");
    }

    // Open Graph analysis
    if (ogTags.length === 0) {
      recommendations.push("Missing Open Graph tags");
    }

    // Twitter Card analysis
    if (twitterTags.length === 0) {
      recommendations.push("Missing Twitter Card tags");
    }

    // Structured data analysis
    if (!structuredData) {
      recommendations.push("Missing structured data");
    }

    // Calculate score
    let score = 100;
    score -= title.length < 30 || title.length > 60 ? 10 : 0;
    score -= !description
      ? 15
      : description.length < 120 || description.length > 160
        ? 10
        : 0;
    score -= !keywords ? 5 : 0;
    score -= !canonical ? 10 : 0;
    score -= ogTags.length === 0 ? 15 : 0;
    score -= twitterTags.length === 0 ? 10 : 0;
    score -= !structuredData ? 15 : 0;
    score -= !robots ? 5 : 0;

    return {
      titleLength: title.length,
      descriptionLength: description?.length || 0,
      keywordsCount: keywords ? keywords.split(",").length : 0,
      hasCanonical: !!canonical,
      hasOpenGraph: ogTags.length > 0,
      hasTwitterCard: twitterTags.length > 0,
      hasStructuredData: !!structuredData,
      hasRobots: !!robots,
      score: Math.max(0, score),
      recommendations,
    };
  }

  /**
   * Get meta content by name
   */
  private getMetaContent(name: string): string | null {
    const meta = document.querySelector(
      `meta[name="${name}"]`,
    ) as HTMLMetaElement;
    return meta?.content || null;
  }

  /**
   * Optimize existing meta tags
   */
  private optimizeExistingMetaTags(): void {
    // Ensure viewport meta tag exists
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement("meta");
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(viewport);
    }

    // Ensure charset meta tag exists
    if (!document.querySelector("meta[charset]")) {
      const charset = document.createElement("meta");
      charset.setAttribute("charset", "UTF-8");
      document.head.insertBefore(charset, document.head.firstChild);
    }
  }

  /**
   * Setup dynamic meta updates
   */
  private setupDynamicMetaUpdates(): void {
    // Update page title on focus/blur for better UX
    let originalTitle = document.title;

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        document.title = "👋 " + originalTitle;
      } else {
        document.title = originalTitle;
      }
    });
  }

  /**
   * Inject default structured data
   */
  private injectStructuredData(): void {
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Zion Tech Group",
      description: "Leading AI and technology solutions provider",
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      sameAs: [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-0123",
        contactType: "customer service",
      },
    };

    this.updateStructuredData(defaultStructuredData);
  }

  /**
   * Optimize images for SEO
   */
  private optimizeImages(): void {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      // Add alt text if missing
      if (!img.alt) {
        img.alt = img.title || "Image";
      }

      // Add loading="lazy" for better performance
      if (!img.loading) {
        img.loading = "lazy";
      }
    });
  }

  /**
   * Setup lazy loading
   */
  private setupLazyLoading(): void {
    // Intersection Observer for lazy loading
    if ("IntersectionObserver" in window) {
      const lazyImages = document.querySelectorAll("img[data-src]");
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || "";
            img.removeAttribute("data-src");
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    }
  }

  /**
   * Generate sitemap
   */
  generateSitemap(pages: string[]): string {
    const baseUrl = window.location.origin;

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach((page) => {
      sitemap += "  <url>\n";
      sitemap += `    <loc>${baseUrl}${page}</loc>\n`;
      sitemap += `    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>\n`;
      sitemap += "    <changefreq>weekly</changefreq>\n";
      sitemap += "    <priority>0.8</priority>\n";
      sitemap += "  </url>\n";
    });

    sitemap += "</urlset>";

    return sitemap;
  }

  /**
   * Get current performance metrics
   */
  getPerformanceMetrics(): PagePerformanceMetrics | null {
    return this.performanceMetrics;
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
if (typeof window !== "undefined") {
  enhancedSEOOptimizer.initialize();
}
=======
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private addIssue(issue: Omit<SEOIssue, 'id'>): void {
    const newIssue: SEOIssue = {
      ...issue,
      id: `seo_issue_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    this.issues.push(newIssue);
    
    // Keep only last 100 issues
    if (this.issues.length > 100) {
      this.issues = this.issues.slice(-100);
    }
  }

  public getMetrics(): SEOMetrics {
    const title = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = metaDescription?.getAttribute('content') || '';
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => h.tagName);
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.alt).length;
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="' + window.location.hostname + '"]').length;
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])').length;
    const metaTags = document.querySelectorAll('meta').length;
    const schemaMarkup = document.querySelector('script[type="application/ld+json"]') !== null;

    return {
      titleLength: title.length,
      descriptionLength: description.length,
      headingStructure: headings,
      imageAltText: imagesWithAlt,
      internalLinks,
      externalLinks,
      metaTags,
      schemaMarkup,
      sitemapExists: false, // Would need to check server
      robotsTxtExists: false, // Would need to check server
      pageSpeed: 0, // Would need to measure
      mobileFriendly: true // Would need to check
    };
  }

  public getIssues(): SEOIssue[] {
    return [...this.issues];
  }

  public getHighImpactIssues(): SEOIssue[] {
    return this.issues.filter(issue => issue.impact === 'high');
  }

  public getIssuesByCategory(category: SEOIssue['category']): SEOIssue[] {
    return this.issues.filter(issue => issue.category === category);
  }

  public generateSEOScore(): number {
    let score = 100;
    
    // Deduct points for issues
    this.issues.forEach(issue => {
      switch (issue.impact) {
        case 'high':
          score -= 10;
          break;
        case 'medium':
          score -= 5;
          break;
        case 'low':
          score -= 2;
          break;
      }
    });

    return Math.max(0, score);
  }

  public generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    const highImpactIssues = this.getHighImpactIssues();
    highImpactIssues.forEach(issue => {
      recommendations.push(issue.suggestion);
    });

    // Add general recommendations
    const metrics = this.getMetrics();
    
    if (metrics.titleLength < 30) {
      recommendations.push('Increase page title length');
    }
    
    if (metrics.descriptionLength < 120) {
      recommendations.push('Add or improve meta description');
    }
    
    if (metrics.internalLinks < 3) {
      recommendations.push('Add more internal links');
    }

    return recommendations;
  }

  public updateMetaTags(data: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonical?: string;
  }): void {
    if (data.title) {
      document.title = data.title;
    }

    if (data.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', data.description);
    }

    if (data.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', data.keywords.join(', '));
    }

    if (data.ogTitle) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', data.ogTitle);
    }

    if (data.ogDescription) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', data.ogDescription);
    }

    if (data.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', data.ogImage);
    }

    if (data.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', data.canonical);
    }
  }

  public cleanup(): void {
    this.isMonitoring = false;
  }
}

export const enhancedSEOOptimizer = new EnhancedSEOOptimizer();
>>>>>>> 4b999e7e8499b1d439e8efecb8a451947461db54
