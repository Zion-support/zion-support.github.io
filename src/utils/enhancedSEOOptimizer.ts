/**
 * Enhanced SEO Optimizer
 * Provides comprehensive SEO analysis and optimization features
 */

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  structuredData?: any;
}

interface SEOAnalysis {
  score: number;
  issues: SEOIssue[];
  recommendations: string[];
  metrics: SEOMetrics;
}

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  suggestion?: string;
}

interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  headingCount: number;
  imageCount: number;
  linkCount: number;
  wordCount: number;
  readingTime: number;
}

class EnhancedSEOOptimizer {
  private seoData: SEOData | null = null;
  private analysis: SEOAnalysis | null = null;

  constructor() {
    this.initializeSEO();
  }

  private initializeSEO(): void {
    if (typeof window === 'undefined') return;

    // Set up meta tag monitoring
    this.setupMetaTagObserver();
    
    // Initialize structured data
    this.initializeStructuredData();
  }

  private setupMetaTagObserver(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target.nodeName === 'HEAD') {
          this.analyzeCurrentPage();
        }
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });
  }

  private initializeStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Advanced AI and IT Solutions for Modern Enterprises",
      "url": "https://zion.app",
      "logo": "https://zion.app/logo.png",
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/zion-tech-group"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service"
      }
    };

    this.addStructuredData(structuredData);
  }

  private addStructuredData(data: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  public updateSEOData(data: SEOData): void {
    this.seoData = data;
    this.updateMetaTags();
    this.analyzeCurrentPage();
  }

  private updateMetaTags(): void {
    if (!this.seoData || typeof document === 'undefined') return;

    const { title, description, keywords, canonical, ogTitle, ogDescription, ogImage, twitterCard, twitterTitle, twitterDescription } = this.seoData;

    // Update title
    document.title = title;

    // Update meta description
    this.updateMetaTag('description', description);
    
    // Update keywords
    this.updateMetaTag('keywords', keywords.join(', '));
    
    // Update canonical URL
    this.updateLinkTag('canonical', canonical);
    
    // Update Open Graph tags
    this.updateMetaTag('og:title', ogTitle);
    this.updateMetaTag('og:description', ogDescription);
    this.updateMetaTag('og:image', ogImage);
    this.updateMetaTag('og:url', canonical);
    this.updateMetaTag('og:type', 'website');
    
    // Update Twitter Card tags
    this.updateMetaTag('twitter:card', twitterCard);
    this.updateMetaTag('twitter:title', twitterTitle);
    this.updateMetaTag('twitter:description', twitterDescription);
    this.updateMetaTag('twitter:image', ogImage);
  }

  private updateMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
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

  public analyzeCurrentPage(): SEOAnalysis {
    const issues: SEOIssue[] = [];
    const metrics = this.calculateMetrics();
    
    // Analyze title
    this.analyzeTitle(issues);
    
    // Analyze description
    this.analyzeDescription(issues);
    
    // Analyze headings
    this.analyzeHeadings(issues);
    
    // Analyze images
    this.analyzeImages(issues);
    
    // Analyze links
    this.analyzeLinks(issues);
    
    // Analyze content
    this.analyzeContent(issues, metrics);
    
    // Calculate score
    const score = this.calculateScore(issues);
    
    // Generate recommendations
    const recommendations = this.generateRecommendations(issues, metrics);
    
    this.analysis = {
      score,
      issues,
      recommendations,
      metrics
    };
    
    return this.analysis;
  }

  private calculateMetrics(): SEOMetrics {
    const title = document.title;
    const description = this.getMetaContent('description') || '';
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const images = document.querySelectorAll('img');
    const links = document.querySelectorAll('a');
    const content = document.body.textContent || '';
    const words = content.split(/\s+/).filter(word => word.length > 0);
    
    return {
      titleLength: title.length,
      descriptionLength: description.length,
      headingCount: headings.length,
      imageCount: images.length,
      linkCount: links.length,
      wordCount: words.length,
      readingTime: Math.ceil(words.length / 200) // Assuming 200 words per minute
    };
  }

  private getMetaContent(name: string): string | null {
    const meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    return meta ? meta.content : null;
  }

  private analyzeTitle(issues: SEOIssue[]): void {
    const title = document.title;
    
    if (!title) {
      issues.push({
        type: 'error',
        message: 'Page title is missing',
        element: 'title',
        suggestion: 'Add a descriptive page title'
      });
    } else if (title.length < 30) {
      issues.push({
        type: 'warning',
        message: 'Page title is too short',
        element: 'title',
        suggestion: 'Make the title more descriptive (30-60 characters)'
      });
    } else if (title.length > 60) {
      issues.push({
        type: 'warning',
        message: 'Page title is too long',
        element: 'title',
        suggestion: 'Shorten the title to under 60 characters'
      });
    }
  }

  private analyzeDescription(issues: SEOIssue[]): void {
    const description = this.getMetaContent('description');
    
    if (!description) {
      issues.push({
        type: 'error',
        message: 'Meta description is missing',
        element: 'meta[name="description"]',
        suggestion: 'Add a compelling meta description'
      });
    } else if (description.length < 120) {
      issues.push({
        type: 'warning',
        message: 'Meta description is too short',
        element: 'meta[name="description"]',
        suggestion: 'Make the description more detailed (120-160 characters)'
      });
    } else if (description.length > 160) {
      issues.push({
        type: 'warning',
        message: 'Meta description is too long',
        element: 'meta[name="description"]',
        suggestion: 'Shorten the description to under 160 characters'
      });
    }
  }

  private analyzeHeadings(issues: SEOIssue[]): void {
    const h1s = document.querySelectorAll('h1');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (h1s.length === 0) {
      issues.push({
        type: 'error',
        message: 'No H1 heading found',
        element: 'h1',
        suggestion: 'Add a main H1 heading to structure your content'
      });
    } else if (h1s.length > 1) {
      issues.push({
        type: 'warning',
        message: 'Multiple H1 headings found',
        element: 'h1',
        suggestion: 'Use only one H1 heading per page'
      });
    }
    
    if (headings.length < 3) {
      issues.push({
        type: 'info',
        message: 'Consider adding more headings',
        element: 'h1-h6',
        suggestion: 'Use headings to structure your content better'
      });
    }
  }

  private analyzeImages(issues: SEOIssue[]): void {
    const images = document.querySelectorAll('img');
    
    images.forEach((img, index) => {
      if (!img.alt) {
        issues.push({
          type: 'error',
          message: `Image ${index + 1} is missing alt text`,
          element: `img[${index}]`,
          suggestion: 'Add descriptive alt text for accessibility and SEO'
        });
      }
    });
  }

  private analyzeLinks(issues: SEOIssue[]): void {
    const links = document.querySelectorAll('a');
    
    links.forEach((link, index) => {
      if (!link.textContent?.trim()) {
        issues.push({
          type: 'warning',
          message: `Link ${index + 1} has no text content`,
          element: `a[${index}]`,
          suggestion: 'Add descriptive text to your links'
        });
      }
    });
  }

  private analyzeContent(issues: SEOIssue[], metrics: SEOMetrics): void {
    if (metrics.wordCount < 300) {
      issues.push({
        type: 'warning',
        message: 'Content is too short',
        element: 'body',
        suggestion: 'Add more substantial content (300+ words recommended)'
      });
    }
  }

  private calculateScore(issues: SEOIssue[]): number {
    let score = 100;
    
    issues.forEach(issue => {
      switch (issue.type) {
        case 'error':
          score -= 20;
          break;
        case 'warning':
          score -= 10;
          break;
        case 'info':
          score -= 5;
          break;
      }
    });
    
    return Math.max(0, score);
  }

  private generateRecommendations(issues: SEOIssue[], metrics: SEOMetrics): string[] {
    const recommendations: string[] = [];
    
    issues.forEach(issue => {
      if (issue.suggestion) {
        recommendations.push(issue.suggestion);
      }
    });
    
    // Add general recommendations based on metrics
    if (metrics.readingTime < 1) {
      recommendations.push('Consider adding more content to improve user engagement');
    }
    
    if (metrics.imageCount === 0) {
      recommendations.push('Add relevant images to make your content more engaging');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Your SEO looks great! Keep up the excellent work.');
    }
    
    return recommendations;
  }

  public getAnalysis(): SEOAnalysis | null {
    return this.analysis;
  }

  public generateReport(): string {
    if (!this.analysis) {
      return 'No SEO analysis available. Run analyzeCurrentPage() first.';
    }
    
    const { score, issues, recommendations, metrics } = this.analysis;
    
    return `
SEO Analysis Report
==================
Overall Score: ${score}/100

Issues Found: ${issues.length}
- Errors: ${issues.filter(i => i.type === 'error').length}
- Warnings: ${issues.filter(i => i.type === 'warning').length}
- Info: ${issues.filter(i => i.type === 'info').length}

Content Metrics:
- Title Length: ${metrics.titleLength} characters
- Description Length: ${metrics.descriptionLength} characters
- Word Count: ${metrics.wordCount} words
- Reading Time: ${metrics.readingTime} minutes
- Headings: ${metrics.headingCount}
- Images: ${metrics.imageCount}
- Links: ${metrics.linkCount}

Recommendations:
${recommendations.map(rec => `- ${rec}`).join('\n')}
    `.trim();
  }
}

// Export singleton instance
export const enhancedSEOOptimizer = new EnhancedSEOOptimizer();
export { EnhancedSEOOptimizer };
export type { SEOData, SEOAnalysis, SEOIssue, SEOMetrics };