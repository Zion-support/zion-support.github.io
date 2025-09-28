/**
 * Advanced SEO Optimization Utility
 */

export interface SEOAnalysis {
  score: number;
  issues: SEOIssue[];
  recommendations: SEORecommendation[];
  timestamp: number;
}

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: 'meta' | 'content' | 'structure';
  message: string;
  severity: 'high' | 'medium' | 'low';
}

export interface SEORecommendation {
  category: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
}

class SEOOptimizer {
  private document: Document;

  constructor() {
    this.document = document;
  }

  public analyzePage(): SEOAnalysis {
    const issues = this.detectIssues();
    const recommendations = this.generateRecommendations(issues);
    const score = this.calculateScore(issues);

    return {
      score,
      issues,
      recommendations,
      timestamp: Date.now()
    };
  }

  private detectIssues(): SEOIssue[] {
    const issues: SEOIssue[] = [];

    // Check title
    const title = this.document.title;
    if (!title) {
      issues.push({
        type: 'error',
        category: 'meta',
        message: 'Missing page title',
        severity: 'high'
      });
    } else if (title.length < 30) {
      issues.push({
        type: 'warning',
        category: 'meta',
        message: 'Title is too short',
        severity: 'medium'
      });
    }

    // Check meta description
    const metaDescription = this.document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      issues.push({
        type: 'error',
        category: 'meta',
        message: 'Missing meta description',
        severity: 'high'
      });
    }

    // Check H1
    const h1Elements = this.document.querySelectorAll('h1');
    if (h1Elements.length === 0) {
      issues.push({
        type: 'error',
        category: 'structure',
        message: 'Missing H1 heading',
        severity: 'high'
      });
    }

    return issues;
  }

  private generateRecommendations(issues: SEOIssue[]): SEORecommendation[] {
    const recommendations: SEORecommendation[] = [];

    if (issues.some(issue => issue.category === 'meta')) {
      recommendations.push({
        category: 'Meta Tags',
        priority: 'high',
        title: 'Optimize Meta Tags',
        description: 'Improve title and meta description for better SEO'
      });
    }

    return recommendations;
  }

  private calculateScore(issues: SEOIssue[]): number {
    if (issues.length === 0) return 100;
    const errorCount = issues.filter(issue => issue.type === 'error').length;
    const warningCount = issues.filter(issue => issue.type === 'warning').length;
    const penalty = (errorCount * 20) + (warningCount * 10);
    return Math.max(0, 100 - penalty);
  }
}

export const seoOptimizer = new SEOOptimizer();
export const analyzeSEO = () => seoOptimizer.analyzePage();
export const getSEOScore = () => seoOptimizer.analyzePage().score;