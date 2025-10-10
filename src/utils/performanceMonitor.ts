'use client';

/**
 * Advanced Performance Monitoring Utility
 * Tracks Core Web Vitals and custom metrics
 */

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  customMetrics: Record<string, number>;
}

class PerformanceMonitor {
  private _metrics: PerformanceMetrics = {
    customMetrics: {}
  };
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    this.isInitialized = true;
    this.setupCoreWebVitals();
    this.setupCustomMetrics();
  }

  private setupCoreWebVitals(): void {
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
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === name) {
            this._metrics[metric] = entry.startTime,
            this.reportMetric(metric, entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] }),
      this.observers.push(observer);
    } catch (error) {
      console.warn('Performance observer not supported:', error);
    }
  }

  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this._metrics.lcp = lastEntry.startTime;
        this.reportMetric('lcp', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] }),
      this.observers.push(observer);
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this._metrics.fid = entry.processingStart - entry.startTime;
          this.reportMetric('fid', this._metrics.fid);
        }
      });
      observer.observe({ entryTypes: ['first-input'] }),
      this.observers.push(observer);
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }
  }

  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            this._metrics.cls = clsValue;
            this.reportMetric('cls', clsValue);
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] }),
      this.observers.push(observer);
    } catch (error) {
      console.warn('CLS observer not supported:', error);
    }
  }

  private setupCustomMetrics(): void {
    // Time to First Byte
    if (performance.timing) {
      this._metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.reportMetric('ttfb', this._metrics.ttfb);
    }

    // First Meaningful Paint (approximation)
    this.observePaint('first-meaningful-paint', 'fmp');
  }

  private reportMetric(name: string, value: number): void {
    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: Math.round(value),
        event_category: 'Performance'
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}: ${value}ms`);
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this._metrics };
  }

  addCustomMetric(name: string, value: number): void {
    this._metrics.customMetrics[name] = value,
    this.reportMetric(name, value);
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

// Global instance
const performanceMonitor = new PerformanceMonitor();

// Initialize on load
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => performanceMonitor.init());
  } else {
    performanceMonitor.init();
  }
}

// Export functions
export const measureWebVitals = () => performanceMonitor.init();
export const getPerformanceMetrics = () => performanceMonitor.getMetrics();
export const addCustomMetric = (name: string, value: number) => performanceMonitor.addCustomMetric(name, value);
export const cleanupPerformanceMonitor = () => performanceMonitor.cleanup();

export default performanceMonitor;