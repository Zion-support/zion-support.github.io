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
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this._metrics.lcp = lastEntry.startTime;
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe LCP:', error);
    }
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this._metrics.fid = entry.processingStart - entry.startTime;
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe FID:', error);
    }
  }

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
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe CLS:', error);
    }
  }

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
      });
    }
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