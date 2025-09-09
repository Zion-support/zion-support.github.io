/**
 * Performance Monitoring Utility
 * Tracks and reports performance metrics
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: string;
  type: 'timing' | 'counter' | 'gauge';
  tags?: Record<string, string>;
}

export interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private maxMetrics = 1000;

  private constructor() {
    this.initializeWebVitals();
    this.initializeResourceTiming();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Initialize Web Vitals monitoring
   */
  private initializeWebVitals(): void {
    if (typeof window === 'undefined') return;

    // First Contentful Paint (FCP)
    this.observeMetric('paint', (entries) => {
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          this.recordMetric('FCP', entry.startTime, 'timing');
        }
      });
    });

    // Largest Contentful Paint (LCP)
    this.observeMetric('largest-contentful-paint', (entries) => {
      const lastEntry = entries[entries.length - 1];
      this.recordMetric('LCP', lastEntry.startTime, 'timing');
    });

    // First Input Delay (FID)
    this.observeMetric('first-input', (entries) => {
      entries.forEach((entry) => {
        const fidEntry = entry as any; // Type assertion for FID-specific properties
        if (fidEntry.processingStart) {
          this.recordMetric('FID', fidEntry.processingStart - entry.startTime, 'timing');
        }
      });
    });

    // Cumulative Layout Shift (CLS)
    this.observeMetric('layout-shift', (entries) => {
      let clsValue = 0;
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      this.recordMetric('CLS', clsValue, 'gauge');
    });
  }

  /**
   * Initialize resource timing monitoring
   */
  private initializeResourceTiming(): void {
    if (typeof window === 'undefined') return;

    this.observeMetric('resource', (entries) => {
      entries.forEach((entry) => {
        const resourceEntry = entry as PerformanceResourceTiming;
        this.recordMetric('Resource Load Time', resourceEntry.duration, 'timing', {
          resource: resourceEntry.name,
          type: resourceEntry.initiatorType
        });
      });
    });
  }

  /**
   * Observe a specific performance metric
   */
  private observeMetric(type: string, callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined') return;

    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ type, buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Failed to observe ${type} metric:`, error);
    }
  }

  /**
   * Record a performance metric
   */
  private recordMetric(name: string, value: number, type: 'timing' | 'counter' | 'gauge', tags?: Record<string, string>): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: new Date().toISOString(),
      type,
      tags
    };

    this.metrics.push(metric);

    // Keep only the most recent metrics
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }

    // Log in development
    if (import.meta.env.DEV) {
      console.log('Performance Metric:', metric);
    }
  }

  /**
   * Get all recorded metrics
   */
  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  /**
   * Get metrics by name
   */
  public getMetricsByName(name: string): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.name === name);
  }

  /**
   * Get average value for a metric
   */
  public getAverageMetric(name: string): number {
    const metrics = this.getMetricsByName(name);
    if (metrics.length === 0) return 0;
    
    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / metrics.length;
  }

  /**
   * Clear all metrics
   */
  public clearMetrics(): void {
    this.metrics = [];
  }

  /**
   * Disconnect all observers
   */
  public disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  /**
   * Get performance summary
   */
  public getSummary(): Record<string, any> {
    const fcp = this.getAverageMetric('FCP');
    const lcp = this.getAverageMetric('LCP');
    const fid = this.getAverageMetric('FID');
    const cls = this.getAverageMetric('CLS');

    return {
      firstContentfulPaint: fcp,
      largestContentfulPaint: lcp,
      firstInputDelay: fid,
      cumulativeLayoutShift: cls,
      totalMetrics: this.metrics.length,
      resourceLoadTimes: this.getMetricsByName('Resource Load Time').length
    };
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Export utility functions
export const measurePerformance = () => {
  return performanceMonitor.getSummary();
};

export const getPerformanceMetrics = () => {
  return performanceMonitor.getMetrics();
};

export const clearPerformanceMetrics = () => {
  performanceMonitor.clearMetrics();
};

// Debounce utility for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Memory usage utility
export const getMemoryUsage = (): any => {
  if (typeof window !== 'undefined' && (window.performance as any).memory) {
    return (window.performance as any).memory;
  }
  return null;
};

// Performance timing utility
export const getNavigationTiming = (): PerformanceNavigationTiming | null => {
  if (typeof window !== 'undefined') {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation;
  }
  return null;
};