/**
 * SEO Optimizer
 * Comprehensive SEO optimization and monitoring
 */

export interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  suggestion: string;
  severity: 'high' | 'medium' | 'low';
  category: 'meta' | 'content' | 'structure' | 'performance' | 'technical';
}

export interface SEOMetrics {
  totalIssues: number;
  errors: number;
  warnings: number;
  info: number;
  score: number;
  lastChecked: number;
  pageTitle: string;
  metaDescription: string;
  headingStructure: string[];
  imageCount: number;
  linkCount: number;
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  private issues: SEOIssue[] = [];
  private isMonitoring = false;

  static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  /**
   * Start SEO monitoring
   */
  startMonitoring(): void {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    this.scanForIssues();
    this.optimizePage();
  }

  /**
   * Stop SEO monitoring
   */
  stopMonitoring(): void {
    this.isMonitoring = false;
  }

  /**
   * Get current SEO issues
   */
  getIssues(): SEOIssue[] {
    return this.issues;
  }

  /**
   * Get SEO metrics
   */
  getMetrics(): SEOMetrics {
    const errors = this.issues.filter(issue => issue.type === 'error').length;
    const warnings = this.issues.filter(issue => issue.type === 'warning').length;
    const info = this.issues.filter(issue => issue.type === 'info').length;
    
    const score = this.calculateSEOScore();
    const pageTitle = document.title;
    const metaDescription = this.getMetaDescription();
    const headingStructure = this.getHeadingStructure();
    const imageCount = document.querySelectorAll('img').length;
    const linkCount = document.querySelectorAll('a').length;
    
    return {
      totalIssues: this.issues.length,
      errors,
      warnings,
      info,
      score,
      lastChecked: Date.now(),
      pageTitle,
      metaDescription,
      headingStructure,
      imageCount,
      linkCount
    };
  }

  /**
   * Scan for SEO issues
   */
  scanForIssues(): void {
    this.issues = [];
    
    // Check page title
    this.checkPageTitle();
    
    // Check meta description
    this.checkMetaDescription();
    
    // Check meta tags
    this.checkMetaTags();
    
    // Check heading structure
    this.checkHeadingStructure();
    
    // Check images
    this.checkImages();
    
    // Check links
    this.checkLinks();
    
    // Check content structure
    this.checkContentStructure();
    
    // Check technical SEO
    this.checkTechnicalSEO();
  }

  /**
   * Check page title
   */
  private checkPageTitle(): void {
    const title = document.title;
    
    if (!title) {
      this.addIssue({
        id: 'missing-title',
        type: 'error',
        element: 'title',
        message: 'Page title is missing',
        suggestion: 'Add a descriptive page title',
        severity: 'high',
        category: 'meta'
      });
    } else if (title.length < 30) {
      this.addIssue({
        id: 'title-too-short',
        type: 'warning',
        element: 'title',
        message: 'Page title is too short',
        suggestion: 'Make title at least 30 characters long',
        severity: 'medium',
        category: 'meta'
      });
    } else if (title.length > 60) {
      this.addIssue({
        id: 'title-too-long',
        type: 'warning',
        element: 'title',
        message: 'Page title is too long',
        suggestion: 'Keep title under 60 characters',
        severity: 'medium',
        category: 'meta'
      });
    }
  }

  /**
   * Check meta description
   */
  private checkMetaDescription(): void {
    const metaDescription = this.getMetaDescription();
    
    if (!metaDescription) {
      this.addIssue({
        id: 'missing-meta-description',
        type: 'error',
        element: 'meta[name="description"]',
        message: 'Meta description is missing',
        suggestion: 'Add a compelling meta description',
        severity: 'high',
        category: 'meta'
      });
    } else if (metaDescription.length < 120) {
      this.addIssue({
        id: 'meta-description-too-short',
        type: 'warning',
        element: 'meta[name="description"]',
        message: 'Meta description is too short',
        suggestion: 'Make description at least 120 characters long',
        severity: 'medium',
        category: 'meta'
      });
    } else if (metaDescription.length > 160) {
      this.addIssue({
        id: 'meta-description-too-long',
        type: 'warning',
        element: 'meta[name="description"]',
        message: 'Meta description is too long',
        suggestion: 'Keep description under 160 characters',
        severity: 'medium',
        category: 'meta'
      });
    }
  }

  /**
   * Check meta tags
   */
  private checkMetaTags(): void {
    // Check viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      this.addIssue({
        id: 'missing-viewport',
        type: 'error',
        element: 'meta[name="viewport"]',
        message: 'Viewport meta tag is missing',
        suggestion: 'Add viewport meta tag for mobile responsiveness',
        severity: 'high',
        category: 'technical'
      });
    }

    // Check charset
    const charset = document.querySelector('meta[charset]');
    if (!charset) {
      this.addIssue({
        id: 'missing-charset',
        type: 'error',
        element: 'meta[charset]',
        message: 'Charset meta tag is missing',
        suggestion: 'Add charset meta tag',
        severity: 'high',
        category: 'technical'
      });
    }

    // Check Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      this.addIssue({
        id: 'missing-og-title',
        type: 'warning',
        element: 'meta[property="og:title"]',
        message: 'Open Graph title is missing',
        suggestion: 'Add og:title meta tag for social sharing',
        severity: 'medium',
        category: 'meta'
      });
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      this.addIssue({
        id: 'missing-og-description',
        type: 'warning',
        element: 'meta[property="og:description"]',
        message: 'Open Graph description is missing',
        suggestion: 'Add og:description meta tag for social sharing',
        severity: 'medium',
        category: 'meta'
      });
    }
  }

  /**
   * Check heading structure
   */
  private checkHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    
    if (h1Count === 0) {
      this.addIssue({
        id: 'missing-h1',
        type: 'error',
        element: 'h1',
        message: 'No h1 heading found',
        suggestion: 'Add a main h1 heading for the page',
        severity: 'high',
        category: 'structure'
      });
    } else if (h1Count > 1) {
      this.addIssue({
        id: 'multiple-h1',
        type: 'warning',
        element: 'h1',
        message: 'Multiple h1 headings found',
        suggestion: 'Use only one h1 per page',
        severity: 'medium',
        category: 'structure'
      });
    }

    // Check heading hierarchy
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        this.addIssue({
          id: `heading-hierarchy-${index}`,
          type: 'warning',
          element: heading.tagName,
          message: 'Heading hierarchy skipped',
          suggestion: 'Use proper heading hierarchy (h1 -> h2 -> h3, etc.)',
          severity: 'medium',
          category: 'structure'
        });
      }
      previousLevel = level;
    });
  }

  /**
   * Check images
   */
  private checkImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      const alt = img.getAttribute('alt');
      if (!alt) {
        this.addIssue({
          id: `image-alt-${index}`,
          type: 'error',
          element: 'img',
          message: 'Image missing alt text',
          suggestion: 'Add descriptive alt text for images',
          severity: 'high',
          category: 'content'
        });
      }
    });
  }

  /**
   * Check links
   */
  private checkLinks(): void {
    const links = document.querySelectorAll('a');
    links.forEach((link, index) => {
      const href = link.getAttribute('href');
      const text = link.textContent?.trim();
      
      if (!href) {
        this.addIssue({
          id: `link-href-${index}`,
          type: 'error',
          element: 'a',
          message: 'Link missing href attribute',
          suggestion: 'Add href attribute to links',
          severity: 'high',
          category: 'content'
        });
      } else if (href === '#' && !text) {
        this.addIssue({
          id: `empty-link-${index}`,
          type: 'warning',
          element: 'a',
          message: 'Empty link found',
          suggestion: 'Add text content or remove empty links',
          severity: 'medium',
          category: 'content'
        });
      }
    });
  }

  /**
   * Check content structure
   */
  private checkContentStructure(): void {
    const paragraphs = document.querySelectorAll('p');
    if (paragraphs.length === 0) {
      this.addIssue({
        id: 'no-paragraphs',
        type: 'warning',
        element: 'p',
        message: 'No paragraph content found',
        suggestion: 'Add paragraph content for better SEO',
        severity: 'medium',
        category: 'content'
      });
    }

    const wordCount = document.body.textContent?.split(/\s+/).length || 0;
    if (wordCount < 300) {
      this.addIssue({
        id: 'low-word-count',
        type: 'warning',
        element: 'body',
        message: 'Low word count',
        suggestion: 'Add more content (aim for at least 300 words)',
        severity: 'medium',
        category: 'content'
      });
    }
  }

  /**
   * Check technical SEO
   */
  private checkTechnicalSEO(): void {
    // Check for canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      this.addIssue({
        id: 'missing-canonical',
        type: 'warning',
        element: 'link[rel="canonical"]',
        message: 'Canonical URL is missing',
        suggestion: 'Add canonical URL to prevent duplicate content',
        severity: 'medium',
        category: 'technical'
      });
    }

    // Check for robots meta tag
    const robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      this.addIssue({
        id: 'missing-robots',
        type: 'info',
        element: 'meta[name="robots"]',
        message: 'Robots meta tag is missing',
        suggestion: 'Add robots meta tag for better crawl control',
        severity: 'low',
        category: 'technical'
      });
    }

    // Check for language attribute
    const html = document.documentElement;
    if (!html.getAttribute('lang')) {
      this.addIssue({
        id: 'missing-lang',
        type: 'error',
        element: 'html',
        message: 'Language attribute is missing',
        suggestion: 'Add lang attribute to html element',
        severity: 'high',
        category: 'technical'
      });
    }
  }

  /**
   * Optimize page for SEO
   */
  optimizePage(): void {
    this.addMissingMetaTags();
    this.optimizeImages();
    this.addStructuredData();
    this.improveContentStructure();
  }

  /**
   * Add missing meta tags
   */
  private addMissingMetaTags(): void {
    // Add viewport if missing
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Add charset if missing
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Add language attribute if missing
    if (!document.documentElement.getAttribute('lang')) {
      document.documentElement.setAttribute('lang', 'en');
    }
  }

  /**
   * Optimize images
   */
  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" if not present
      if (!img.getAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add alt text if missing
      if (!img.getAttribute('alt')) {
        img.setAttribute('alt', 'Image');
      }
    });
  }

  /**
   * Add structured data
   */
  private addStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": document.title,
      "description": this.getMetaDescription(),
      "url": window.location.href
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  /**
   * Improve content structure
   */
  private improveContentStructure(): void {
    // Add main landmark if missing
    if (!document.querySelector('main')) {
      const main = document.createElement('main');
      main.setAttribute('role', 'main');
      document.body.appendChild(main);
    }
  }

  /**
   * Get meta description
   */
  private getMetaDescription(): string {
    const meta = document.querySelector('meta[name="description"]');
    return meta?.getAttribute('content') || '';
  }

  /**
   * Get heading structure
   */
  private getHeadingStructure(): string[] {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    return Array.from(headings).map(heading => heading.tagName);
  }

  /**
   * Add an SEO issue
   */
  private addIssue(issue: SEOIssue): void {
    // Check if issue already exists
    const exists = this.issues.some(existing => 
      existing.element === issue.element && 
      existing.message === issue.message
    );
    
    if (!exists) {
      this.issues.push(issue);
    }
  }

  /**
   * Calculate SEO score (0-100)
   */
  private calculateSEOScore(): number {
    if (this.issues.length === 0) return 100;
    
    let score = 100;
    const errors = this.issues.filter(issue => issue.type === 'error').length;
    const warnings = this.issues.filter(issue => issue.type === 'warning').length;
    
    score -= errors * 15; // Each error reduces score by 15
    score -= warnings * 5; // Each warning reduces score by 5
    
    return Math.max(0, score);
  }

  /**
   * Generate SEO report
   */
  generateReport(): {
    metrics: SEOMetrics;
    issues: SEOIssue[];
    recommendations: string[];
  } {
    const metrics = this.getMetrics();
    const recommendations = this.generateRecommendations();
    
    return {
      metrics,
      issues: this.issues,
      recommendations
    };
  }

  /**
   * Generate recommendations
   */
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    if (this.issues.some(issue => issue.category === 'meta')) {
      recommendations.push('Improve meta tags and page titles');
    }
    
    if (this.issues.some(issue => issue.category === 'content')) {
      recommendations.push('Enhance content quality and structure');
    }
    
    if (this.issues.some(issue => issue.category === 'technical')) {
      recommendations.push('Fix technical SEO issues');
    }
    
    if (this.issues.some(issue => issue.category === 'structure')) {
      recommendations.push('Improve heading structure and hierarchy');
    }
    
    return recommendations;
  }
}

// Export singleton instance
export const seoOptimizer = SEOOptimizer.getInstance();