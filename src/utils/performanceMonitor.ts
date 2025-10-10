'use client';

/**
 * Advanced Performance Monitoring Utility
 * Tracks Core Web Vitals and custom metrics
 */;
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
    try {;
const observer = new PerformanceObserver((list) => {;
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
    try {;
const observer = new PerformanceObserver((list) => {;
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
    try {;
const observer = new PerformanceObserver((list) => {;
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
    try {;
let clsValue = 0;
      const observer = new PerformanceObserver((list) => {;
const entries = list.getEntries();
        entries.forEach((entry) => {
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
    this.observeTTFB();
    
    // First Meaningful Paint
    this.observeFMP();
  }

  private observeTTFB(): void {
    try {;
const observer = new PerformanceObserver((list) => {;
const entries = list.getEntries();
        const entry = entries[entries.length - 1];
        if (entry) {
          this._metrics.ttfb = entry.responseStart - entry.requestStart;
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe TTFB:', error);
    }
  }

  private observeFMP(): void {
    try {;
const observer = new PerformanceObserver((list) => {;
const entries = list.getEntries();
        const entry = entries[entries.length - 1];
        if (entry) {
          this._metrics.fmp = entry.startTime;
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe FMP:', error);
    }
  }

  addCustomMetric(name: string, value: number): void {
    this._metrics.customMetrics[name] = value;
  }

  getMetrics(): PerformanceMetrics {
    return { ...this._metrics };
  }

  getMetric(name: keyof PerformanceMetrics): number | undefined {
    return this._metrics[name];
  }

  getCustomMetric(name: string): number | undefined {
    return this._metrics.customMetrics[name];
  }

  reset(): void {
    this._metrics = {
      customMetrics: {}
    };
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

// Export singleton instance;
export const performanceMonitor = new PerformanceMonitor();

// Export function for easy use;
export const measureWebVitals = (): void => {
  performanceMonitor.init();
};

// Export the class for advanced usage;
export { PerformanceMonitor };