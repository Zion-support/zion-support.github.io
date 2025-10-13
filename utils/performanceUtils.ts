interface PerformanceUtilsConfig {
  enabled: boolean;
  measureCoreWebVitals?: boolean;
  measureResourceTiming?: boolean;
  measureUserTiming?: boolean;
  measureNavigationTiming?: boolean;
  reportToAnalytics?: boolean;
}

export class PerformanceUtils {
  private config: PerformanceUtilsConfig;
  private metrics: Map<string, number> = new Map();

  constructor(config: Partial<PerformanceUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      measureCoreWebVitals: true,
      measureResourceTiming: true,
      measureUserTiming: true,
      measureNavigationTiming: true,
      reportToAnalytics: false,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      this.setupCoreWebVitals();
      this.setupResourceTiming();
      this.setupUserTiming();
      this.setupNavigationTiming();
      console.log('PerformanceUtils initialized');
    }
  }

  private setupCoreWebVitals(): void {
    if (!this.config.measureCoreWebVitals) return;

    // Measure Largest Contentful Paint (LCP)
    this.measureLCP();
    
    // Measure First Input Delay (FID)
    this.measureFID();
    
    // Measure Cumulative Layout Shift (CLS)
    this.measureCLS();
    
    // Measure First Contentful Paint (FCP)
    this.measureFCP();
  }

  private measureLCP(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('LCP', lastEntry.startTime);
      this.reportMetric('LCP', lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private measureFID(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.processingStart) {
          this.metrics.set('FID', entry.processingStart - entry.startTime);
          this.reportMetric('FID', entry.processingStart - entry.startTime);
        }
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
  }

  private measureCLS(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.set('CLS', clsValue);
      this.reportMetric('CLS', clsValue);
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  }

  private measureFCP(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.set('FCP', entry.startTime);
        this.reportMetric('FCP', entry.startTime);
      });
    });

    observer.observe({ entryTypes: ['paint'] });
  }

  private setupResourceTiming(): void {
    if (!this.config.measureResourceTiming) return;

    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const resourceName = entry.name;
        const loadTime = entry.responseEnd - entry.requestStart;
        this.metrics.set(`resource_${resourceName}`, loadTime);
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }

  private setupUserTiming(): void {
    if (!this.config.measureUserTiming) return;

    // Example user timing measurements
    this.mark('app-start');
    
    // Measure component render times
    this.measureComponentRender = (componentName: string, renderFn: () => void) => {
      this.mark(`${componentName}-start`);
      renderFn();
      this.mark(`${componentName}-end`);
      this.measure(`${componentName}-render`, `${componentName}-start`, `${componentName}-end`);
    };
  }

  private setupNavigationTiming(): void {
    if (!this.config.measureNavigationTiming) return;

    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      this.metrics.set('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      this.metrics.set('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
      this.metrics.set('TotalLoadTime', navigation.loadEventEnd - navigation.fetchStart);
      
      this.reportMetric('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      this.reportMetric('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
      this.reportMetric('TotalLoadTime', navigation.loadEventEnd - navigation.fetchStart);
    });
  }

  mark(name: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
    }
  }

  measure(name: string, startMark: string, endMark: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name)[0];
        if (measure) {
          this.metrics.set(name, measure.duration);
        }
      } catch (error) {
        console.warn(`Failed to measure ${name}:`, error);
      }
    }
  }

  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  private reportMetric(name: string, value: number): void {
    if (!this.config.reportToAnalytics) return;

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        event_category: 'Performance'
      });
    }
  }

  // Public method for measuring component renders
  measureComponentRender: (componentName: string, renderFn: () => void) => void = () => {};

  // Method to measure async operations
  async measureAsync<T>(name: string, asyncFn: () => Promise<T>): Promise<T> {
    this.mark(`${name}-start`);
    try {
      const result = await asyncFn();
      this.mark(`${name}-end`);
      this.measure(name, `${name}-start`, `${name}-end`);
      return result;
    } catch (error) {
      this.mark(`${name}-error`);
      this.measure(`${name}-error`, `${name}-start`, `${name}-error`);
      throw error;
    }
  }

  // Method to measure function execution time
  measureFunction<T extends any[], R>(name: string, fn: (...args: T) => R) {
    return (...args: T): R => {
      this.mark(`${name}-start`);
      try {
        const result = fn(...args);
        this.mark(`${name}-end`);
        this.measure(name, `${name}-start`, `${name}-end`);
        return result;
      } catch (error) {
        this.mark(`${name}-error`);
        this.measure(`${name}-error`, `${name}-start`, `${name}-error`);
        throw error;
      }
    };
  }
}

export const performanceUtils = new PerformanceUtils();
export default performanceUtils;