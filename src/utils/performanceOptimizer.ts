/**
 * Performance optimization utilities
 */

/**
 * Web Vitals metrics tracking
 */
export interface WebVitalsMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
  INP?: number; // Interaction to Next Paint
}

/**
 * Resource hints for performance
 */
export interface ResourceHint {
  rel: 'preload' | 'prefetch' | 'dns-prefetch' | 'preconnect';
  href: string;
  as?: 'script' | 'style' | 'image' | 'font' | 'document';
  crossOrigin?: 'anonymous' | 'use-credentials';
}

/**
 * Performance budget configuration
 */
export interface PerformanceBudget {
  maxBundleSize: number; // in KB
  maxImageSize: number; // in KB
  maxLoadTime: number; // in ms
  maxFirstContentfulPaint: number; // in ms
  maxLargestContentfulPaint: number; // in ms
  maxCumulativeLayoutShift: number; // score
}

/**
 * Performance metrics
 */
export interface PerformanceMetrics {
  bundleSize: number;
  imageSize: number;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

/**
 * Optimization result
 */
export interface OptimizationResult {
  score: number;
  recommendations: string[];
  metrics: PerformanceMetrics;
  budget: PerformanceBudget;
}

/**
 * Performance Optimizer Class
 */
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private budget: PerformanceBudget;
  private metrics: PerformanceMetrics;

  constructor() {
    this.budget = {
      maxBundleSize: 500, // 500KB
      maxImageSize: 200, // 200KB
      maxLoadTime: 3000, // 3 seconds
      maxFirstContentfulPaint: 1800, // 1.8 seconds
      maxLargestContentfulPaint: 2500, // 2.5 seconds
      maxCumulativeLayoutShift: 0.1 // 0.1 score
    };

    this.metrics = {
      bundleSize: 0,
      imageSize: 0,
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0
    };
  }

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  /**
   * Add resource hints for performance
   */
  addResourceHints(hints: ResourceHint[]): void {
    if (typeof document === 'undefined') return;

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.as) {
        link.as = hint.as;
      }
      if (hint.crossOrigin) {
        link.crossOrigin = hint.crossOrigin;
      }
      document.head.appendChild(link);
    });
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(resources: string[]): void {
    if (typeof document === 'undefined') return;

    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Measure page load performance
   */
  measurePageLoad(): Record<string, number> | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    
    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = window.performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
    const lcp = window.performance.getEntriesByType('largest-contentful-paint')[0];
    
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      timeToFirstByte: navigation.responseStart - navigation.requestStart
    };
  }

  /**
   * Optimize images with lazy loading
   */
  optimizeImages(): void {
    if (typeof document === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img['src'] = img.dataset['src'] || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }

  /**
   * Initialize performance optimizations
   */
  initialize(): void {
    this.optimizeImages();
    this.enableServiceWorker();
  }

  /**
   * Lazy load images (alias for optimizeImages)
   */
  lazyLoadImages(): void {
    this.optimizeImages();
  }

  /**
   * Enable service worker for caching
   */
  enableServiceWorker(): void {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  }

  /**
   * Analyze performance and provide recommendations
   */
  analyzePerformance(): OptimizationResult {
    const currentMetrics = this.measurePageLoad();
    
    if (!currentMetrics) {
      return {
        score: 0,
        recommendations: ['Performance measurement not available'],
        metrics: this.metrics,
        budget: this.budget
      };
    }

    const recommendations: string[] = [];
    let score = 100;

    // Check bundle size
    if (currentMetrics['loadComplete'] && currentMetrics['loadComplete'] > this.budget.maxLoadTime) {
      recommendations.push('Consider code splitting to reduce bundle size');
      score -= 20;
    }

    // Check FCP
    if (currentMetrics['firstContentfulPaint'] && currentMetrics['firstContentfulPaint'] > this.budget.maxFirstContentfulPaint) {
      recommendations.push('Optimize critical rendering path');
      score -= 15;
    }

    // Check LCP
    if (currentMetrics['largestContentfulPaint'] && currentMetrics['largestContentfulPaint'] > this.budget.maxLargestContentfulPaint) {
      recommendations.push('Optimize largest contentful paint');
      score -= 15;
    }

    return {
      score: Math.max(0, score),
      recommendations,
      metrics: {
        bundleSize: 0, // Would need to be calculated separately
        imageSize: 0, // Would need to be calculated separately
        loadTime: currentMetrics['loadComplete'] || 0,
        firstContentfulPaint: currentMetrics['firstContentfulPaint'] || 0,
        largestContentfulPaint: currentMetrics['largestContentfulPaint'] || 0,
        cumulativeLayoutShift: 0 // Would need to be measured separately
      },
      budget: this.budget
    };
  }

  /**
   * Check performance budget compliance
   */
  checkBudgetCompliance(): { passed: boolean; violations: string[] } {
    const analysis = this.analyzePerformance();
    const violations: string[] = [];

    if (analysis.metrics.loadTime > this.budget.maxLoadTime) {
      violations.push(`Load time ${analysis.metrics.loadTime}ms exceeds budget ${this.budget.maxLoadTime}ms`);
    }

    if (analysis.metrics.firstContentfulPaint > this.budget.maxFirstContentfulPaint) {
      violations.push(`FCP ${analysis.metrics.firstContentfulPaint}ms exceeds budget ${this.budget.maxFirstContentfulPaint}ms`);
    }

    if (analysis.metrics.largestContentfulPaint > this.budget.maxLargestContentfulPaint) {
      violations.push(`LCP ${analysis.metrics.largestContentfulPaint}ms exceeds budget ${this.budget.maxLargestContentfulPaint}ms`);
    }

    return {
      passed: violations.length === 0,
      violations
    };
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();

// Default export for convenience
export default performanceOptimizer;