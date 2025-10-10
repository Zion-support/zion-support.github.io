'use client';

import React from 'react';

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
      // console.warn removed for production
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
      // console.warn removed for production
    }
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstInput = entries[0];

        if (firstInput) {
          this._metrics.fid = (firstInput as any).processingStart - firstInput.startTime;
        }
      });

      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      // console.warn removed for production
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
      // console.warn removed for production
    }
  }

  private setupCustomMetrics(): void {
    // Time to First Byte
    if (performance.timing) {
      this._metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
    }

    // First Meaningful Paint (approximation)
    this.observePaint('first-meaningful-paint', 'fmp');
  }

  getMetrics(): PerformanceMetrics {
    return { ...this._metrics };
  }

  addCustomMetric(name: string, value: number): void {
    this._metrics.customMetrics[name] = value;
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

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export function for easy access
export const measureWebVitals = (): void => {
  performanceMonitor.init();
};

// Export hook for React components
export const usePerformanceMonitor = (): PerformanceMetrics => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>(() => 
    performanceMonitor.getMetrics()
  );

  React.useEffect(() => {
    performanceMonitor.init();
    
    const interval = setInterval(() => {
      setMetrics(performanceMonitor.getMetrics());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return metrics;
};

// Export the class for advanced usage
export { PerformanceMonitor };