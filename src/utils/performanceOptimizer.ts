/**
 * Advanced Performance Optimizer
 * Monitors and optimizes application performance in real-time
 */

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  tti: number; // Time to Interactive
}

interface OptimizationRecommendation {
  metric: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  action: string;
}

class PerformanceOptimizer {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];
  private recommendations: OptimizationRecommendation[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
      this.monitorWebVitals();
    }
  }

  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    try {
      // Observe Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
        this.analyzeMetric('lcp', this.metrics.lcp);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // Observe First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries() as any[];
        entries.forEach((entry) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          this.analyzeMetric('fid', this.metrics.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // Observe Layout Shifts
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries() as any[];
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = clsValue;
            this.analyzeMetric('cls', clsValue);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('Performance observers not fully supported:', error);
    }
  }

  /**
   * Monitor Core Web Vitals
   */
  private monitorWebVitals(): void {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('paint');
        const fcpEntry = perfData.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime;
          this.analyzeMetric('fcp', fcpEntry.startTime);
        }

        // Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
        if (navigationEntry) {
          this.metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          this.analyzeMetric('ttfb', this.metrics.ttfb);
        }
      });
    }
  }

  /**
   * Analyze metric and generate recommendations
   */
  private analyzeMetric(metric: string, value: number): void {
    const thresholds: Record<string, { good: number; poor: number }> = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
    };

    const threshold = thresholds[metric];
    if (!threshold) return;

    if (value > threshold.poor) {
      this.addRecommendation({
        metric,
        severity: 'critical',
        message: `${metric.toUpperCase()} is ${value.toFixed(2)}ms (poor)`,
        action: this.getOptimizationAction(metric, 'critical'),
      });
    } else if (value > threshold.good) {
      this.addRecommendation({
        metric,
        severity: 'medium',
        message: `${metric.toUpperCase()} is ${value.toFixed(2)}ms (needs improvement)`,
        action: this.getOptimizationAction(metric, 'medium'),
      });
    }
  }

  /**
   * Get optimization action based on metric and severity
   */
  private getOptimizationAction(metric: string, severity: string): string {
    const actions: Record<string, Record<string, string>> = {
      lcp: {
        critical: 'Consider lazy loading images, reducing bundle size, and implementing code splitting',
        medium: 'Optimize images and preload critical assets',
      },
      fid: {
        critical: 'Reduce JavaScript execution time and break up long tasks',
        medium: 'Optimize event handlers and reduce blocking JavaScript',
      },
      cls: {
        critical: 'Set explicit dimensions on images and media, avoid inserting content above existing content',
        medium: 'Reserve space for dynamic content and use CSS containment',
      },
      fcp: {
        critical: 'Minimize render-blocking resources and optimize critical rendering path',
        medium: 'Inline critical CSS and defer non-critical CSS',
      },
      ttfb: {
        critical: 'Optimize server response time, use CDN, and enable caching',
        medium: 'Reduce server processing time and optimize database queries',
      },
    };

    return actions[metric]?.[severity] || 'Optimize resource loading and reduce page complexity';
  }

  /**
   * Add optimization recommendation
   */
  private addRecommendation(recommendation: OptimizationRecommendation): void {
    // Avoid duplicate recommendations
    const exists = this.recommendations.some(
      (r) => r.metric === recommendation.metric && r.severity === recommendation.severity
    );
    if (!exists) {
      this.recommendations.push(recommendation);
    }
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  /**
   * Get optimization recommendations
   */
  public getRecommendations(): OptimizationRecommendation[] {
    return [...this.recommendations];
  }

  /**
   * Get performance score (0-100)
   */
  public getPerformanceScore(): number {
    const scores: Partial<Record<keyof PerformanceMetrics, number>> = {};
    
    // Calculate individual scores
    if (this.metrics.fcp) {
      scores.fcp = this.metrics.fcp <= 1800 ? 100 : this.metrics.fcp <= 3000 ? 50 : 0;
    }
    if (this.metrics.lcp) {
      scores.lcp = this.metrics.lcp <= 2500 ? 100 : this.metrics.lcp <= 4000 ? 50 : 0;
    }
    if (this.metrics.fid) {
      scores.fid = this.metrics.fid <= 100 ? 100 : this.metrics.fid <= 300 ? 50 : 0;
    }
    if (this.metrics.cls) {
      scores.cls = this.metrics.cls <= 0.1 ? 100 : this.metrics.cls <= 0.25 ? 50 : 0;
    }
    if (this.metrics.ttfb) {
      scores.ttfb = this.metrics.ttfb <= 800 ? 100 : this.metrics.ttfb <= 1800 ? 50 : 0;
    }

    const scoreValues = Object.values(scores);
    if (scoreValues.length === 0) return 100;

    return Math.round(scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length);
  }

  /**
   * Log performance summary to console
   */
  public logSummary(): void {
    console.group('🚀 Performance Summary');
    console.log('Metrics:', this.metrics);
    console.log('Score:', `${this.getPerformanceScore()}/100`);
    console.log('Recommendations:', this.recommendations);
    console.groupEnd();
  }

  /**
   * Optimize images with lazy loading
   */
  public optimizeImages(): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img:not([loading])');
    images.forEach((img) => {
      img.setAttribute('loading', 'lazy');
    });
  }

  /**
   * Preload critical resources
   */
  public preloadCriticalResources(resources: string[]): void {
    if (typeof window === 'undefined') return;

    resources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = this.getResourceType(resource);
      link.href = resource;
      document.head.appendChild(link);
    });
  }

  /**
   * Get resource type from URL
   */
  private getResourceType(url: string): string {
    if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|otf)$/i)) return 'font';
    if (url.match(/\.css$/i)) return 'style';
    if (url.match(/\.js$/i)) return 'script';
    return 'fetch';
  }

  /**
   * Enable connection optimization
   */
  public optimizeConnections(domains: string[]): void {
    if (typeof window === 'undefined') return;

    domains.forEach((domain) => {
      // DNS prefetch
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = domain;
      document.head.appendChild(dnsPrefetch);

      // Preconnect
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = domain;
      document.head.appendChild(preconnect);
    });
  }

  /**
   * Clean up observers
   */
  public destroy(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
let optimizerInstance: PerformanceOptimizer | null = null;

export const getPerformanceOptimizer = (): PerformanceOptimizer => {
  if (!optimizerInstance) {
    optimizerInstance = new PerformanceOptimizer();
  }
  return optimizerInstance;
};

export default PerformanceOptimizer;
