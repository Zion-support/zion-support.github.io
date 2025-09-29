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

export interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  category: 'meta' | 'content' | 'technical' | 'performance' | 'accessibility';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  fix: string;
  element?: string;
  timestamp: number;
  resolved: boolean;
}

class EnhancedSEOOptimizer {
  private issues: SEOIssue[] = [];
  private currentUrl: string = '';

  constructor() {
    this.initializeOptimizer();
  }

  private initializeOptimizer(): void {
    if (typeof window === 'undefined') return;
    this.currentUrl = window.location.href;
    this.analyzeCurrentPage();
  }

  public analyzeCurrentPage(): void {
    this.issues = [];
    this.analyzeMetaTags();
    this.analyzeContent();
  }

  private analyzeMetaTags(): void {
    const title = document.querySelector('title')?.textContent || '';
    if (!title) {
      this.addIssue({
        type: 'error',
        category: 'meta',
        title: 'Missing Title Tag',
        description: 'No title tag found in the document',
        impact: 'high',
        fix: 'Add a descriptive title tag to the document head',
        timestamp: Date.now(),
        resolved: false
      });
    }

    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    if (!metaDescription) {
      this.addIssue({
        type: 'error',
        category: 'meta',
        title: 'Missing Meta Description',
        description: 'No meta description found',
        impact: 'high',
        fix: 'Add a compelling meta description (150-160 characters)',
        timestamp: Date.now(),
        resolved: false
      });
    }
  }

  private analyzeContent(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt) {
        this.addIssue({
          type: 'error',
          category: 'content',
          title: 'Image Missing Alt Text',
          description: `Image ${index + 1} has no alt attribute`,
          impact: 'high',
          fix: 'Add descriptive alt text to all images for accessibility and SEO',
          element: `img[${index}]`,
          timestamp: Date.now(),
          resolved: false
        });
      }
    });
  }

  private addIssue(issue: Omit<SEOIssue, 'id'>): void {
    const newIssue: SEOIssue = {
      ...issue,
      id: `seo_issue_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    this.issues.push(newIssue);
  }

  public getIssues(): SEOIssue[] {
    return this.issues.filter(issue => !issue.resolved);
  }

  public resolveIssue(issueId: string): void {
    const issue = this.issues.find(i => i.id === issueId);
    if (issue) {
      issue.resolved = true;
    }
  }
}

export const enhancedSEOOptimizer = new EnhancedSEOOptimizer();
export { EnhancedSEOOptimizer };