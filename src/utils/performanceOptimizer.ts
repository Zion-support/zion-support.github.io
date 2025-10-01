/**
 * Performance Optimization Utility
 * Monitors and optimizes application performance in real-time
 */

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface OptimizationRecommendation {
  metric: string;
  currentValue: number;
  targetValue: number;
  priority: 'high' | 'medium' | 'low';
  recommendation: string;
}

class PerformanceOptimizer {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: Map<string, PerformanceObserver> = new Map();

  constructor() {
    this.initializeObservers();
  }

  /**
   * Initialize Web Vitals observers
   */
  private initializeObservers(): void {
    if (typeof window === 'undefined') return;

    // Observe First Contentful Paint (FCP)
    this.observeFCP();

    // Observe Largest Contentful Paint (LCP)
    this.observeLCP();

    // Observe First Input Delay (FID)
    this.observeFID();

    // Observe Cumulative Layout Shift (CLS)
    this.observeCLS();

    // Measure Time to First Byte (TTFB)
    this.measureTTFB();
  }

  /**
   * Observe First Contentful Paint
   */
  private observeFCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime;
          this.reportMetric('FCP', fcpEntry.startTime);
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.set('fcp', observer);
    } catch (e) {
      console.warn('FCP observation not supported', e);
    }
  }

  /**
   * Observe Largest Contentful Paint
   */
  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('lcp', observer);
    } catch (e) {
      console.warn('LCP observation not supported', e);
    }
  }

  /**
   * Observe First Input Delay
   */
  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          this.reportMetric('FID', this.metrics.fid);
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.set('fid', observer);
    } catch (e) {
      console.warn('FID observation not supported', e);
    }
  }

  /**
   * Observe Cumulative Layout Shift
   */
  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = clsValue;
            this.reportMetric('CLS', clsValue);
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('cls', observer);
    } catch (e) {
      console.warn('CLS observation not supported', e);
    }
  }

  /**
   * Measure Time to First Byte
   */
  private measureTTFB(): void {
    try {
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        this.metrics.ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
        this.reportMetric('TTFB', this.metrics.ttfb);
      }
    } catch (e) {
      console.warn('TTFB measurement failed', e);
    }
  }

  /**
   * Report metric to console and analytics
   */
  private reportMetric(name: string, value: number): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}: ${value.toFixed(2)}ms`);
    }

    // Send to analytics (e.g., Google Analytics, custom backend)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value),
        non_interaction: true,
      });
    }
  }

  /**
   * Get current metrics
   */
  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  /**
   * Analyze metrics and provide recommendations
   */
  public analyzePerformance(): OptimizationRecommendation[] {
    const recommendations: OptimizationRecommendation[] = [];

    // FCP Analysis (Target: <1800ms for good)
    if (this.metrics.fcp && this.metrics.fcp > 1800) {
      recommendations.push({
        metric: 'First Contentful Paint',
        currentValue: this.metrics.fcp,
        targetValue: 1800,
        priority: this.metrics.fcp > 3000 ? 'high' : 'medium',
        recommendation: 'Optimize critical rendering path, reduce render-blocking resources, use code splitting',
      });
    }

    // LCP Analysis (Target: <2500ms for good)
    if (this.metrics.lcp && this.metrics.lcp > 2500) {
      recommendations.push({
        metric: 'Largest Contentful Paint',
        currentValue: this.metrics.lcp,
        targetValue: 2500,
        priority: this.metrics.lcp > 4000 ? 'high' : 'medium',
        recommendation: 'Optimize images, use CDN, implement lazy loading, preload critical resources',
      });
    }

    // FID Analysis (Target: <100ms for good)
    if (this.metrics.fid && this.metrics.fid > 100) {
      recommendations.push({
        metric: 'First Input Delay',
        currentValue: this.metrics.fid,
        targetValue: 100,
        priority: this.metrics.fid > 300 ? 'high' : 'medium',
        recommendation: 'Reduce JavaScript execution time, break up long tasks, use web workers',
      });
    }

    // CLS Analysis (Target: <0.1 for good)
    if (this.metrics.cls && this.metrics.cls > 0.1) {
      recommendations.push({
        metric: 'Cumulative Layout Shift',
        currentValue: this.metrics.cls,
        targetValue: 0.1,
        priority: this.metrics.cls > 0.25 ? 'high' : 'medium',
        recommendation: 'Set explicit dimensions for images/videos, avoid inserting content above existing content',
      });
    }

    // TTFB Analysis (Target: <600ms for good)
    if (this.metrics.ttfb && this.metrics.ttfb > 600) {
      recommendations.push({
        metric: 'Time to First Byte',
        currentValue: this.metrics.ttfb,
        targetValue: 600,
        priority: this.metrics.ttfb > 1000 ? 'high' : 'low',
        recommendation: 'Optimize server response time, use CDN, implement caching strategies',
      });
    }

    return recommendations;
  }

  /**
   * Generate performance report
   */
  public generateReport(): string {
    const recommendations = this.analyzePerformance();
    
    let report = '=== Performance Analysis Report ===\n\n';
    report += 'Current Metrics:\n';
    report += `- FCP: ${this.metrics.fcp?.toFixed(2) || 'N/A'} ms\n`;
    report += `- LCP: ${this.metrics.lcp?.toFixed(2) || 'N/A'} ms\n`;
    report += `- FID: ${this.metrics.fid?.toFixed(2) || 'N/A'} ms\n`;
    report += `- CLS: ${this.metrics.cls?.toFixed(4) || 'N/A'}\n`;
    report += `- TTFB: ${this.metrics.ttfb?.toFixed(2) || 'N/A'} ms\n\n`;

    if (recommendations.length === 0) {
      report += '✅ All metrics are within acceptable ranges!\n';
    } else {
      report += 'Recommendations:\n\n';
      recommendations.forEach((rec, index) => {
        const priorityEmoji = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
        report += `${index + 1}. ${priorityEmoji} ${rec.metric}\n`;
        report += `   Current: ${rec.currentValue.toFixed(2)}\n`;
        report += `   Target: ${rec.targetValue}\n`;
        report += `   Recommendation: ${rec.recommendation}\n\n`;
      });
    }

    return report;
  }

  /**
   * Cleanup observers
   */
  public cleanup(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
  }

  /**
   * Prefetch resources for faster navigation
   */
  public prefetchResources(urls: string[]): void {
    if (typeof document === 'undefined') return;

    urls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  /**
   * Preload critical resources
   */
  public preloadCriticalResources(resources: Array<{ url: string; as: string }>): void {
    if (typeof document === 'undefined') return;

    resources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.url;
      link.as = resource.as;
      document.head.appendChild(link);
    });
  }

  /**
   * Lazy load images
   */
  public enableLazyLoading(): void {
    if (typeof document === 'undefined' || !('IntersectionObserver' in window)) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Utility functions
export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export default performanceOptimizer;
