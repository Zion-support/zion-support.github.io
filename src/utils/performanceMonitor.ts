'use client'
/**
 * Advanced Performance Monitoring for Zion Tech Group
 * Tracks Core Web Vitals and custom metrics
 */

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  customMetrics: Record<string, number>;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    customMetrics: {}
  };

  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  constructor() {
    this.initializeObservers();
    this.trackCustomMetrics();
  }

  private initializeObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }
  }

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return
    this.isInitialized = true
    this.setupWebVitals()
    this.setupCustomMetrics()
  }

  private setupWebVitals(): void {
    // First Contentful Paint
    this.observePaint('first-contentful-paint', 'fcp')
    // Largest Contentful Paint
    this.observeLCP()
    // First Input Delay
    this.observeFID()
    // Cumulative Layout Shift
    this.observeCLS()
  }

  private observePaint(name: string, metric: keyof PerformanceMetrics): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const entry = entries[entries.length - 1]
        if (entry) {
          (this.metrics as any)[metric] = entry.startTime
        }
      })
      observer.observe({ entryTypes: ['paint'] })
      this.observers.push(observer)
    } catch (error) {
      console.warn(`Failed to observe ${name}:`, error)
    }
  }

  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe LCP:', error)
    }
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          this.reportMetric('FID', this.metrics.fid);
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe FID:', error)
    }
  }

  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        this.metrics.cls = clsValue;
        this.reportMetric('CLS', clsValue);
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe CLS:', error)
    }
  }

  private setupCustomMetrics(): void {
    // Track page load time
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        this.metrics.customMetrics.pageLoadTime = loadTime;
        this.reportMetric('Page Load Time', loadTime);
      });
    }
  }

  private trackCustomMetrics(): void {
    // Track scroll depth
    if (typeof window !== 'undefined') {
      let maxScrollDepth = 0;
      window.addEventListener('scroll', () => {
        const scrollDepth = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
        this.metrics.customMetrics.scrollDepth = maxScrollDepth;
      });
    }
  }

  private reportMetric(name: string, value: number): void {
    // Send to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        event_category: 'Performance'
      });
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();
export default PerformanceMonitor;