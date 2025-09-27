// Performance monitoring utilities

// Declare gtag for Google Analytics
declare global {
  function gtag(...args: unknown[]): void;
}

interface PerformanceEntryWithProcessingStart extends PerformanceEntry {
  processingStart: number;
}

interface PerformanceEntryWithValue extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.initializeObservers();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeObservers(): void {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.set('LCP', lastEntry.startTime);
          this.reportMetric('LCP', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch {
        console.warn('LCP observer not supported');
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntryWithProcessingStart;
            if ('processingStart' in fidEntry) {
              this.metrics.set('FID', fidEntry.processingStart - fidEntry.startTime);
              this.reportMetric('FID', fidEntry.processingStart - fidEntry.startTime);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch {
        console.warn('FID observer not supported');
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const clsEntry = entry as PerformanceEntryWithValue;
            if ('value' in clsEntry && 'hadRecentInput' in clsEntry && !clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          });
          this.metrics.set('CLS', clsValue);
          this.reportMetric('CLS', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch {
        console.warn('CLS observer not supported');
      }

      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.set('FCP', entry.startTime);
              this.reportMetric('FCP', entry.startTime);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch {
        console.warn('FCP observer not supported');
      }
    }
  }

  private reportMetric(name: string, value: number): void {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }

    // Send to analytics service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: name,
          value: Math.round(value),
          non_interaction: true
        });
      }
    }
  }

  public measurePageLoad(): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          this.metrics.set('TTFB', navigation.responseStart - navigation.requestStart);
          this.metrics.set('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.fetchStart);
          this.metrics.set('LoadComplete', navigation.loadEventEnd - navigation.fetchStart);
          
          this.reportMetric('TTFB', navigation.responseStart - navigation.requestStart);
          this.reportMetric('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.fetchStart);
          this.reportMetric('LoadComplete', navigation.loadEventEnd - navigation.fetchStart);
        }
      }, 0);
    });
  }

  public measureCustomMetric(name: string, startTime: number): void {
    const endTime = performance.now();
    const duration = endTime - startTime;
    this.metrics.set(name, duration);
    this.reportMetric(name, duration);
  }

  public getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Utility functions
export const measurePerformance = (name: string, fn: () => void): void => {
  const startTime = performance.now();
  fn();
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${duration.toFixed(2)}ms`);
  }
};

export const measureAsyncPerformance = async <T>(name: string, fn: () => Promise<T>): Promise<T> => {
  const startTime = performance.now();
  const result = await fn();
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${duration.toFixed(2)}ms`);
  }
  
  return result;
};

// React hook for performance monitoring
export const usePerformanceMonitor = () => {
  const monitor = PerformanceMonitor.getInstance();
  
  return {
    measureCustomMetric: (name: string, startTime: number) => monitor.measureCustomMetric(name, startTime),
    getMetrics: () => monitor.getMetrics(),
    getMetric: (name: string) => monitor.getMetric(name)
  };
};