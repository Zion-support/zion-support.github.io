/**
 * Enhanced SEO Optimization System
 * Advanced SEO monitoring, optimization, and analytics
 */

interface SEOAuditResult {
  score: number;
  issues: SEOIssue[];
  recommendations: SEORecommendation[];
  metrics: SEOMetrics;
  timestamp: number;
}

interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  category: 'content' | 'technical' | 'performance' | 'accessibility';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  fixable: boolean;
  element?: string;
}

interface SEORecommendation {
  id: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  title: string;
  description: string;
  implementation: string;
  expectedImpact: string;
}

interface SEOMetrics {
  pageSpeed: number;
  mobileUsability: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  contentQuality: number;
  technicalSEO: number;
  socialMedia: number;
}

interface StructuredData {
  type: string;
  data: Record<string, any>;
  valid: boolean;
  errors: string[];
}

class EnhancedSEOOptimizer {
  private auditResults: SEOAuditResult[] = [];
  private currentMetrics: SEOMetrics;
  private structuredData: StructuredData[] = [];
  private isMonitoring = false;

  constructor() {
    this.currentMetrics = this.initializeMetrics();
    this.setupSEOObservers();
  }

  private initializeMetrics(): SEOMetrics {
    return {
      pageSpeed: 0,
      mobileUsability: 0,
      accessibility: 0,
      bestPractices: 0,
      seo: 0,
      contentQuality: 0,
      technicalSEO: 0,
      socialMedia: 0
    };
  }

  private setupSEOObservers(): void {
    // Monitor page changes for SEO analysis
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', () => {
        setTimeout(() => this.analyzeCurrentPage(), 100);
      });

      // Monitor DOM changes for dynamic content
      const observer = new MutationObserver(() => {
        if (this.isMonitoring) {
          this.analyzeCurrentPage();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }
  }

  public startMonitoring(): void {
    this.isMonitoring = true;
    this.analyzeCurrentPage();
    console.log('Enhanced SEO Optimization monitoring started');
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    console.log('Enhanced SEO Optimization monitoring stopped');
  }

  public async analyzeCurrentPage(): Promise<SEOAuditResult> {
    const issues: SEOIssue[] = [];
    const recommendations: SEORecommendation[] = [];

    // Analyze page title
    this.analyzePageTitle(issues, recommendations);

    // Analyze meta tags
    this.analyzeMetaTags(issues, recommendations);

    // Analyze headings structure
    this.analyzeHeadings(issues, recommendations);

    // Analyze images
    this.analyzeImages(issues, recommendations);

    // Analyze links
    this.analyzeLinks(issues, recommendations);

    // Analyze content
    this.analyzeContent(issues, recommendations);

    // Analyze technical SEO
    this.analyzeTechnicalSEO(issues, recommendations);

    // Analyze structured data
    await this.analyzeStructuredData(issues, recommendations);

    // Analyze performance metrics
    this.analyzePerformanceMetrics(issues, recommendations);

    // Calculate overall score
    const score = this.calculateSEOScore(issues);

    const auditResult: SEOAuditResult = {
      score,
      issues,
      recommendations,
      metrics: this.currentMetrics,
      timestamp: Date.now()
    };

    this.auditResults.push(auditResult);

    // Keep only recent audits
    if (this.auditResults.length > 50) {
      this.auditResults = this.auditResults.slice(-50);
    }

    return auditResult;
  }

  private analyzePageTitle(issues: SEOIssue[], recommendations: SEORecommendation[]): void {
    const title = document.title;
    
    if (!title) {
      issues.push({
        id: 'missing-title',
        type: 'error',
        category: 'content',
        title: 'Missing Page Title',
        description: 'The page does not have a title tag.',
        impact: 'high',
        fixable: true
      });
    } else {
      if (title.length < 30) {
        issues.push({
          id: 'title-too-short',
          type: 'warning',
          category: 'content',
          title: 'Title Too Short',
          description: `Title is only ${title.length} characters. Recommended: 30-60 characters.`,
          impact: 'medium',
          fixable: true,
          element: 'title'
        });
      } else if (title.length > 60) {
        issues.push({
          id: 'title-too-long',
          type: 'warning',
          category: 'content',
          title: 'Title Too Long',
          description: `Title is ${title.length} characters. Recommended: 30-60 characters.`,
          impact: 'medium',
          fixable: true,
          element: 'title'
        });
      }

      // Check for keyword stuffing
      const words = title.toLowerCase().split(' ');
      const wordCounts = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const repeatedWords = Object.entries(wordCounts).filter(([, count]) => count > 1);
      if (repeatedWords.length > 0) {
        issues.push({
          id: 'title-keyword-stuffing',
          type: 'warning',
          category: 'content',
          title: 'Potential Keyword Stuffing in Title',
          description: 'Title contains repeated words which may be considered keyword stuffing.',
          impact: 'low',
          fixable: true,
          element: 'title'
        });
      }
    }
  }

  private analyzeMetaTags(issues: SEOIssue[], recommendations: SEORecommendation[]): void {
    // Check meta description
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    
    if (!metaDescription || !metaDescription.content) {
      issues.push({
        id: 'missing-meta-description',
        type: 'error',
        category: 'content',
        title: 'Missing Meta Description',
        description: 'The page does not have a meta description tag.',
        impact: 'high',
        fixable: true
      });
    } else {
      const description = metaDescription.content;
      if (description.length < 120) {
        issues.push({
          id: 'meta-description-too-short',
          type: 'warning',
          category: 'content',
          title: 'Meta Description Too Short',
          description: `Meta description is ${description.length} characters. Recommended: 120-160 characters.`,
          impact: 'medium',
          fixable: true,
          element: 'meta[name="description"]'
        });
      } else if (description.length > 160) {
        issues.push({
          id: 'meta-description-too-long',
          type: 'warning',
          category: 'content',
          title: 'Meta Description Too Long',
          description: `Meta description is ${description.length} characters. Recommended: 120-160 characters.`,
          impact: 'medium',
          fixable: true,
          element: 'meta[name="description"]'
        });
      }
    }

    // Check viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!viewport) {
      issues.push({
        id: 'missing-viewport',
        type: 'error',
        category: 'technical',
        title: 'Missing Viewport Meta Tag',
        description: 'The page does not have a viewport meta tag for mobile optimization.',
        impact: 'high',
        fixable: true
      });
    }

    // Check canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      issues.push({
        id: 'missing-canonical',
        type: 'warning',
        category: 'technical',
        title: 'Missing Canonical URL',
        description: 'The page does not have a canonical URL to prevent duplicate content issues.',
        impact: 'medium',
        fixable: true
      });
    }
  }

  private analyzeHeadings(issues: SEOIssue[], recommendations: SEORecommendation[]): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingStructure: { level: number; text: string; element: Element }[] = [];

    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      headingStructure.push({
        level,
        text: heading.textContent || '',
        element: heading
      });
    });

    // Check for missing H1
    const h1Count = headingStructure.filter(h => h.level === 1).length;
    if (h1Count === 0) {
      issues.push({
        id: 'missing-h1',
        type: 'error',
        category: 'content',
        title: 'Missing H1 Tag',
        description: 'The page does not have an H1 tag.',
        impact: 'high',
        fixable: true
      });
    } else if (h1Count > 1) {
      issues.push({
        id: 'multiple-h1',
        type: 'warning',
        category: 'content',
        title: 'Multiple H1 Tags',
        description: `The page has ${h1Count} H1 tags. Recommended: 1 H1 per page.`,
        impact: 'medium',
        fixable: true
      });
    }

    // Check heading hierarchy
    let previousLevel = 0;
    for (const heading of headingStructure) {
      if (heading.level > previousLevel + 1) {
        issues.push({
          id: 'heading-hierarchy',
          type: 'warning',
          category: 'content',
          title: 'Improper Heading Hierarchy',
          description: `Heading level ${heading.level} follows level ${previousLevel}. Heading levels should not skip.`,
          impact: 'low',
          fixable: true,
          element: heading.element?.tagName || 'heading'
        });
      }
      previousLevel = heading.level;
    }
  }

  private analyzeImages(issues: SEOIssue[], recommendations: SEORecommendation[]): void {
    const images = document.querySelectorAll('img');
    
    images.forEach((img, index) => {
      // Check for missing alt text
      if (!img.alt) {
        issues.push({
          id: `missing-alt-${index}`,
          type: 'error',
          category: 'accessibility',
          title: 'Missing Alt Text',
          description: 'Image is missing alt text for accessibility and SEO.',
          impact: 'high',
          fixable: true,
          element: img.tagName
        });
      }

      // Check for very long alt text
      if (img.alt && img.alt.length > 125) {
        issues.push({
          id: `alt-too-long-${index}`,
          type: 'warning',
          category: 'accessibility',
          title: 'Alt Text Too Long',
          description: `Alt text is ${img.alt.length} characters. Recommended: under 125 characters.`,
          impact: 'low',
          fixable: true,
          element: img.tagName
        });
      }

      // Check for lazy loading
      if (!img.loading) {
        recommendations.push({
          id: `lazy-load-${index}`,
          priority: 'medium',
          category: 'performance',
          title: 'Add Lazy Loading to Images',
          description: 'Consider adding lazy loading to improve page performance.',
          implementation: 'Add loading="lazy" attribute to img tags',
          expectedImpact: 'Improved page load speed'
        });
      }
    });
  }

  private analyzeLinks(issues: SEOIssue[], recommendations: SEORecommendation[]): void {
    const links = document.querySelectorAll('a[href]');
    let externalLinks = 0;
    let internalLinks = 0;

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      // Check for missing link text
      if (!link.textContent?.trim()) {
        issues.push({
          id: `missing-link-text-${links.length}`,
          type: 'warning',
          category: 'accessibility',
          title: 'Link Missing Text',
          description: 'Link is missing descriptive text.',
          impact: 'medium',
          fixable: true,
          element: link.tagName
        });
      }

      // Categorize links
      if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        externalLinks++;
      } else {
        internalLinks++;
      }

      // Check for external links without rel="noopener"
      if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        if (!link.getAttribute('rel')?.includes('noopener')) {
          recommendations.push({
            id: `external-link-${links.length}`,
            priority: 'low',
            category: 'security',
            title: 'Add rel="noopener" to External Links',
            description: 'External links should include rel="noopener" for security.',
            implementation: 'Add rel="noopener" attribute to external links',
            expectedImpact: 'Improved security'
          });
        }
      }
    });

    // Check link distribution
    if (internalLinks === 0 && links.length > 0) {
      issues.push({
        id: 'no-internal-links',
        type: 'warning',
        category: 'technical',
        title: 'No Internal Links',
        description: 'The page does not have any internal links to other pages.',
        impact: 'medium',
        fixable: true
      });
    }
  }

  private analyzeContent(issues: SEOIssue[], recommendations: SEORecommendation[]): void {
    const textContent = document.body.textContent || '';
    const wordCount = textContent.trim().split(/\s+/).length;

    if (wordCount < 300) {
      issues.push({
        id: 'content-too-short',
        type: 'warning',
        category: 'content',
        title: 'Content Too Short',
        description: `Page has only ${wordCount} words. Recommended: at least 300 words for better SEO.`,
        impact: 'medium',
        fixable: true
      });
    }

    // Check for keyword density
    const title = document.title.toLowerCase();
    const titleWords = title.split(' ');
    const contentWords = textContent.toLowerCase().split(' ');
    
    titleWords.forEach(keyword => {
      if (keyword.length > 3) {
        const keywordCount = contentWords.filter(word => word.includes(keyword)).length;
        const density = (keywordCount / contentWords.length) * 100;
        
        if (density > 3) {
          issues.push({
            id: `keyword-density-${keyword}`,
            type: 'warning',
            category: 'content',
            title: 'High Keyword Density',
            description: `Keyword "${keyword}" appears ${density.toFixed(2)}% of the time. Recommended: 1-2%.`,
            impact: 'low',
            fixable: true
          });
        }
      }
    });
  }

  private analyzeTechnicalSEO(issues: SEOIssue[], recommendations: SEORecommendation[]): void {
    // Check for HTTPS
    if (location.protocol !== 'https:') {
      issues.push({
        id: 'not-https',
        type: 'error',
        category: 'technical',
        title: 'Not Using HTTPS',
        description: 'The page is not served over HTTPS.',
        impact: 'high',
        fixable: false
      });
    }

    // Check for robots meta tag
    const robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (robots && robots.content.includes('noindex')) {
      issues.push({
        id: 'noindex-tag',
        type: 'warning',
        category: 'technical',
        title: 'Noindex Meta Tag Present',
        description: 'The page has a noindex meta tag, which prevents search engine indexing.',
        impact: 'high',
        fixable: true,
        element: robots.tagName
      });
    }

    // Check for favicon
    const favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
    if (!favicon) {
      issues.push({
        id: 'missing-favicon',
        type: 'warning',
        category: 'technical',
        title: 'Missing Favicon',
        description: 'The page does not have a favicon.',
        impact: 'low',
        fixable: true
      });
    }
  }

  private async analyzeStructuredData(issues: SEOIssue[], recommendations: SEORecommendation[]): Promise<void> {
    const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (structuredDataScripts.length === 0) {
      recommendations.push({
        id: 'missing-structured-data',
        priority: 'high',
        category: 'technical',
        title: 'Add Structured Data',
        description: 'Consider adding structured data to help search engines understand your content.',
        implementation: 'Add JSON-LD structured data scripts',
        expectedImpact: 'Better search engine understanding and rich snippets'
      });
    } else {
      // Validate structured data
      structuredDataScripts.forEach((script, index) => {
        try {
          const data = JSON.parse(script.textContent || '');
          this.structuredData.push({
            type: data['@type'] || 'unknown',
            data,
            valid: true,
            errors: []
          });
        } catch (error) {
          issues.push({
            id: `invalid-structured-data-${index}`,
            type: 'error',
            category: 'technical',
            title: 'Invalid Structured Data',
            description: 'Structured data contains invalid JSON.',
            impact: 'medium',
            fixable: true,
            element: script.tagName
          });
        }
      });
    }
  }

  private analyzePerformanceMetrics(issues: SEOIssue[], recommendations: SEORecommendation[]): void {
    // This would integrate with the performance monitoring system
    // For now, we'll add some basic recommendations
    
    recommendations.push({
      id: 'optimize-images',
      priority: 'high',
      category: 'performance',
      title: 'Optimize Images',
      description: 'Optimize images to improve page load speed.',
      implementation: 'Compress images and use modern formats like WebP',
      expectedImpact: 'Faster page load times'
    });

    recommendations.push({
      id: 'minify-resources',
      priority: 'medium',
      category: 'performance',
      title: 'Minify CSS and JavaScript',
      description: 'Minify CSS and JavaScript files to reduce file sizes.',
      implementation: 'Use build tools to minify CSS and JS',
      expectedImpact: 'Reduced file sizes and faster loading'
    });
  }

  private calculateSEOScore(issues: SEOIssue[]): number {
    let score = 100;
    
    issues.forEach(issue => {
      switch (issue.impact) {
        case 'high':
          score -= issue.type === 'error' ? 15 : 10;
          break;
        case 'medium':
          score -= issue.type === 'error' ? 10 : 5;
          break;
        case 'low':
          score -= issue.type === 'error' ? 5 : 2;
          break;
      }
    });

    return Math.max(0, score);
  }

  public getAuditResults(): SEOAuditResult[] {
    return [...this.auditResults];
  }

  public getLatestAuditResult(): SEOAuditResult | null {
    return this.auditResults[this.auditResults.length - 1] || null;
  }

  public getStructuredData(): StructuredData[] {
    return [...this.structuredData];
  }

  public exportAuditData(): string {
    return JSON.stringify({
      auditResults: this.auditResults,
      structuredData: this.structuredData,
      exportTime: Date.now()
    }, null, 2);
  }
}

// Create singleton instance
export const enhancedSEOOptimizer = new EnhancedSEOOptimizer();

// Export types and utilities
export type { SEOAuditResult, SEOIssue, SEORecommendation, SEOMetrics, StructuredData };
export { EnhancedSEOOptimizer };