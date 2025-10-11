'use client';

/**
<<<<<<< HEAD
 * Advanced Performance Monitoring for Zion Tech Group
=======
 * Advanced Performance Monitoring Utility
>>>>>>> origin/main
 * Tracks Core Web Vitals and custom metrics
 */

interface PerformanceMetrics {
<<<<<<< HEAD
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
=======
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
>>>>>>> origin/main
  customMetrics: Record<string, number>;
}

class PerformanceMonitor {
<<<<<<< HEAD
  private metrics: PerformanceMetrics = {
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    customMetrics: {}
  };

=======
  private _metrics: PerformanceMetrics = {
    customMetrics: {}
  };
>>>>>>> origin/main
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

<<<<<<< HEAD
  constructor() {
    this.initializeObservers();
    this.trackCustomMetrics();
  }

  private initializeObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // LCP Observer
=======
  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    this.isInitialized = true;
    this.setupWebVitals();
    this.setupCustomMetrics();
  }

  private setupWebVitals(): void {
    // First Contentful Paint
    this.observePaint('first-contentful-paint', 'fcp');
    
    // Largest Contentful Paint
    this.observeLCP();
    
    // First Input Delay
    this.observeFID();
    
    // Cumulative Layout Shift
    this.observeCLS();
  }

  private observePaint(name: string, metric: keyof PerformanceMetrics): void {
>>>>>>> origin/main
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const entry = entries[entries.length - 1];
        if (entry) {
          (this._metrics as any)[metric] = entry.startTime;
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Failed to observe ${name}:`, error);
    }
  }

  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
<<<<<<< HEAD
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
=======
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this._metrics.lcp = lastEntry.startTime;
        }
>>>>>>> origin/main
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe LCP:', error);
    }
  }

<<<<<<< HEAD
    // FID Observer
=======
  private observeFID(): void {
>>>>>>> origin/main
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
<<<<<<< HEAD
          const fidEntry = entry as PerformanceEventTiming;
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          this.reportMetric('FID', this.metrics.fid);
=======
          this._metrics.fid = entry.processingStart - entry.startTime;
>>>>>>> origin/main
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe FID:', error);
    }
  }

<<<<<<< HEAD
    // CLS Observer
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            this.metrics.cls = clsValue;
            this.reportMetric('CLS', clsValue);
          }
        });
=======
  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this._metrics.cls = clsValue;
>>>>>>> origin/main
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe CLS:', error);
    }

<<<<<<< HEAD
    // FCP Observer
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.reportMetric('FCP', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (e) {
      console.warn('FCP observer not supported');
    }

    // TTFB Observer
    try {
      const ttfbObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
            this.reportMetric('TTFB', this.metrics.ttfb);
          }
        });
      });
      ttfbObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(ttfbObserver);
    } catch (e) {
      console.warn('TTFB observer not supported');
    }
  }

  private trackCustomMetrics() {
    // Track page load time
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        this.metrics.customMetrics.pageLoadTime = loadTime;
        this.reportMetric('Page Load Time', loadTime);
      });

      // Track DOM content loaded
      document.addEventListener('DOMContentLoaded', () => {
        const domContentLoaded = performance.now();
        this.metrics.customMetrics.domContentLoaded = domContentLoaded;
        this.reportMetric('DOM Content Loaded', domContentLoaded);
      });

      // Track resource loading
      this.trackResourceMetrics();
    }
  }

  private trackResourceMetrics() {
    if (typeof window === 'undefined') return;

    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
          
          // Track slow resources
          if (loadTime > 1000) {
            this.reportMetric('Slow Resource', loadTime, {
              name: resourceEntry.name,
              type: resourceEntry.initiatorType
            });
          }
        }
=======
  private setupCustomMetrics(): void {
    // Time to First Byte
    if (performance.timing) {
      this._metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
    }

    // Navigation timing
    if (performance.navigation) {
      this.addCustomMetric('navigation_type', performance.navigation.type);
    }
  }

  addCustomMetric(name: string, value: number): void {
    this._metrics.customMetrics[name] = value;
  }

  getMetrics(): PerformanceMetrics {
    return { ...this._metrics };
  }

  reportMetrics(): void {
    if (typeof window === 'undefined') return;
    
    console.log('Performance Metrics:', this._metrics);
    
    // Send to analytics service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: 'web_vitals',
        value: Math.round(this._metrics.lcp || 0),
        custom_parameter_1: this._metrics.fcp,
        custom_parameter_2: this._metrics.cls,
        custom_parameter_3: this._metrics.fid
>>>>>>> origin/main
      });
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (e) {
      console.warn('Resource observer not supported');
    }
  }

<<<<<<< HEAD
  private reportMetric(name: string, value: number, additionalData?: any) {
    // Report to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_rating: this.getMetricRating(name, value),
        ...additionalData
      });
    }

    // Report to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value, additionalData);
    }
  }

  private getMetricRating(name: string, value: number): string {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      'LCP': { good: 2500, needsImprovement: 4000 },
      'FID': { good: 100, needsImprovement: 300 },
      'CLS': { good: 0.1, needsImprovement: 0.25 },
      'FCP': { good: 1800, needsImprovement: 3000 },
      'TTFB': { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[name];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public reportMetrics() {
    const metrics = this.getMetrics();
    
    // Report all collected metrics
    Object.entries(metrics.customMetrics).forEach(([name, value]) => {
      this.reportMetric(name, value);
    });

    // Report Core Web Vitals
    if (metrics.lcp !== null) this.reportMetric('LCP', metrics.lcp);
    if (metrics.fid !== null) this.reportMetric('FID', metrics.fid);
    if (metrics.cls !== null) this.reportMetric('CLS', metrics.cls);
    if (metrics.fcp !== null) this.reportMetric('FCP', metrics.fcp);
    if (metrics.ttfb !== null) this.reportMetric('TTFB', metrics.ttfb);
  }

  public disconnect() {
=======
  cleanup(): void {
>>>>>>> origin/main
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

<<<<<<< HEAD
// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export class for testing
export { PerformanceMonitor };
=======
// Global instance
const performanceMonitor = new PerformanceMonitor();

// Initialize on load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    performanceMonitor.init();
    
    // Report metrics after a delay to ensure all metrics are collected
    setTimeout(() => {
      performanceMonitor.reportMetrics();
    }, 5000);
  });
}

export const measureWebVitals = () => {
  performanceMonitor.init();
};

export const getPerformanceMetrics = () => {
  return performanceMonitor.getMetrics();
};

export const addCustomMetric = (name: string, value: number) => {
  performanceMonitor.addCustomMetric(name, value);
};

export default performanceMonitor;
>>>>>>> origin/main
