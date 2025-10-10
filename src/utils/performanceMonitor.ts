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

<<<<<<< HEAD
  private setupCoreWebVitals(): void {
=======
  private setupWebVitals(): void {
>>>>>>> origin/main
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
<<<<<<< HEAD
        for (const entry of list.getEntries()) {
          if (entry.name === name) {
            this._metrics[metric] = entry.startTime;
            this.reportMetric(metric, entry.startTime);
          }
=======
        const entries = list.getEntries();
        const entry = entries[entries.length - 1];
        if (entry) {
          (this._metrics as any)[metric] = entry.startTime;
>>>>>>> origin/main
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
<<<<<<< HEAD
      console.warn('Performance observer not supported:', error);
=======
      console.warn(`Failed to observe ${name}:`, error);
>>>>>>> origin/main
    }
  }

  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
<<<<<<< HEAD
        this._metrics.lcp = lastEntry.startTime;
        this.reportMetric('lcp', lastEntry.startTime);
=======
        if (lastEntry) {
          this._metrics.lcp = lastEntry.startTime;
        }
>>>>>>> origin/main
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
<<<<<<< HEAD
      console.warn('LCP observer not supported:', error);
=======
      console.warn('Failed to observe LCP:', error);
>>>>>>> origin/main
    }
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
<<<<<<< HEAD
        for (const entry of list.getEntries()) {
          this._metrics.fid = entry.processingStart - entry.startTime;
          this.reportMetric('fid', this._metrics.fid);
        }
=======
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this._metrics.fid = entry.processingStart - entry.startTime;
        });
>>>>>>> origin/main
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
<<<<<<< HEAD
      console.warn('FID observer not supported:', error);
=======
      console.warn('Failed to observe FID:', error);
>>>>>>> origin/main
    }
  }

  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
<<<<<<< HEAD
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            this._metrics.cls = clsValue;
            this.reportMetric('cls', clsValue);
          }
        }
=======
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
<<<<<<< HEAD
      console.warn('CLS observer not supported:', error);
=======
      console.warn('Failed to observe CLS:', error);
>>>>>>> origin/main
    }
  }

  private setupCustomMetrics(): void {
    // Time to First Byte
    if (performance.timing) {
      this._metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
<<<<<<< HEAD
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
=======
    }

    // Navigation timing
    if (performance.navigation) {
      this.addCustomMetric('navigation_type', performance.navigation.type);
    }
  }

  addCustomMetric(name: string, value: number): void {
    this._metrics.customMetrics[name] = value;
>>>>>>> origin/main
  }

  getMetrics(): PerformanceMetrics {
    return { ...this._metrics };
  }

<<<<<<< HEAD
  addCustomMetric(name: string, value: number): void {
    this._metrics.customMetrics[name] = value;
    this.reportMetric(name, value);
=======
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
      });
    }
>>>>>>> origin/main
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

// Global instance
const performanceMonitor = new PerformanceMonitor();
<<<<<<< HEAD

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
=======

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
>>>>>>> origin/main

export default performanceMonitor;