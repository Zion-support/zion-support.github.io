/**
 * SEO Optimizer
 * Lightweight SEO optimization utility
 */

import { SEOIssue } from '../types/comprehensive';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}

export class SEOOptimizer {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
    this.initialize();
  }

  private initialize(): void {
    this.setTitle(this.config.title);
    this.setDescription(this.config.description);
    this.setKeywords(this.config.keywords);
    if (this.config.canonical) {
      this.setCanonical(this.config.canonical);
    }
  }

  private setTitle(title: string): void {
    document.title = title;
    this.updateMeta('property', 'og:title', title);
  }

  private setDescription(description: string): void {
    this.updateMeta('name', 'description', description);
    this.updateMeta('property', 'og:description', description);
  }

  private setKeywords(keywords: string[]): void {
    this.updateMeta('name', 'keywords', keywords.join(', '));
  }

  private setCanonical(url: string): void {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
  }

  private updateMeta(attr: string, value: string, content: string): void {
    let meta = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attr, value);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  public updateConfig(config: Partial<SEOConfig>): void {
    this.config = { ...this.config, ...config };
    this.initialize();
  }

  public analyze(): { score: number; issues: SEOIssue[] } {
    const issues: SEOIssue[] = [];
    let score = 100;

    // Check title length
    if (this.config.title.length < 30) {
      issues.push({
        type: 'warning',
        message: 'Title too short',
        description: 'Title should be at least 30 characters long',
        priority: 'medium'
      });
      score -= 10;
    }

    // Check description length
    if (this.config.description.length < 120) {
      issues.push({
        type: 'warning',
        message: 'Description too short',
        description: 'Description should be at least 120 characters long',
        priority: 'medium'
      });
      score -= 10;
    }

    return { score: Math.max(0, score), issues };
  }

  public optimize(): Promise<void> {
    return new Promise((resolve) => {
      // Perform SEO optimizations
      this.optimizeMetaTags();
      this.optimizeStructuredData();
      this.optimizeImages();
      resolve();
    });
  }

  private optimizeMetaTags(): void {
    // Ensure all meta tags are properly set
    this.initialize();
  }

  private optimizeStructuredData(): void {
    // Add structured data if not present
    if (!document.querySelector('script[type="application/ld+json"]')) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": this.config.title,
        "description": this.config.description
      });
      document.head.appendChild(script);
    }
  }

  private optimizeImages(): void {
    // Add alt text to images without it
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.alt = 'Zion Tech Group image';
      }
    });
  }
}

export const seoOptimizer = new SEOOptimizer({
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered IT solutions, cloud services, cybersecurity, and digital transformation services.',
  keywords: ['AI solutions', 'IT consulting', 'cloud services', 'cybersecurity', 'digital transformation']
});