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
          }
        }
      });

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
