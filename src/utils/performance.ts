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
      const firstInput = entries[0];
      this.recordMetric('FID', firstInput.processingStart - firstInput.startTime, 'timing');
    });

    // Cumulative Layout Shift (CLS)
    this.observeMetric('layout-shift', (entries) => {
      let clsValue = 0;
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
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

    // Monitor resource loading times
    this.observeMetric('resource', (entries) => {
      entries.forEach((entry) => {
        const resource = entry as PerformanceResourceTiming;
        this.recordMetric('resource_load_time', resource.duration, 'timing', {
          resource_type: resource.initiatorType,
          resource_name: this.getResourceName(resource.name)
        });
      });
    });
  }

  /**
   * Observe performance metrics
   */
  private observeMetric(type: string, callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ type, buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.warn('PerformanceObserver not supported for', type);
    }
  }

  /**
   * Record a performance metric
   */
  public recordMetric(
    name: string,
    value: number,
    type: 'timing' | 'counter' | 'gauge' = 'timing',
    tags?: Record<string, string>
  ): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: new Date().toISOString(),
      type,
      tags
    };

    this.metrics.push(metric);

    // Maintain metrics size
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }

    // Send to analytics (if configured)
    this.sendToAnalytics(metric);
  }

  /**
   * Measure function execution time
   */
  public measureFunction<T>(
    name: string,
    fn: () => T,
    tags?: Record<string, string>
  ): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    this.recordMetric(name, end - start, 'timing', tags);
    return result;
  }

  /**
   * Measure async function execution time
   */
  public async measureAsyncFunction<T>(
    name: string,
    fn: () => Promise<T>,
    tags?: Record<string, string>
  ): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    
    this.recordMetric(name, end - start, 'timing', tags);
    return result;
  }

  /**
   * Measure component render time
   */
  public measureRender(componentName: string, renderFn: () => void): void {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    
    this.recordMetric('component_render', end - start, 'timing', {
      component: componentName
    });
  }

  /**
   * Get resource name for logging
   */
  private getResourceName(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.pathname.split('/').pop() || urlObj.pathname;
    } catch {
      return url;
    }
  }

  /**
   * Send metric to analytics
   */
  private sendToAnalytics(metric: PerformanceMetric): void {
    // This would integrate with your analytics service
    // For now, we'll just log it
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metric:', metric);
    }
  }

  /**
   * Get performance metrics
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
   * Get performance summary
   */
  public getPerformanceSummary(): {
    totalMetrics: number;
    averageLoadTime: number;
    slowestResources: PerformanceMetric[];
    webVitals: Record<string, number>;
  } {
    const resourceMetrics = this.metrics.filter(m => m.name === 'resource_load_time');
    const averageLoadTime = resourceMetrics.length > 0
      ? resourceMetrics.reduce((sum, m) => sum + m.value, 0) / resourceMetrics.length
      : 0;

    const slowestResources = resourceMetrics
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    const webVitals = this.metrics
      .filter(m => ['FCP', 'LCP', 'FID', 'CLS'].includes(m.name))
      .reduce((acc, metric) => {
        acc[metric.name] = metric.value;
        return acc;
      }, {} as Record<string, number>);

    return {
      totalMetrics: this.metrics.length,
      averageLoadTime,
      slowestResources,
      webVitals
    };
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
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Export utility functions
export const measureFunction = <T>(
  name: string,
  fn: () => T,
  tags?: Record<string, string>
): T => {
  return performanceMonitor.measureFunction(name, fn, tags);
};

export const measureAsyncFunction = <T>(
  name: string,
  fn: () => Promise<T>,
  tags?: Record<string, string>
): Promise<T> => {
  return performanceMonitor.measureAsyncFunction(name, fn, tags);
};

export const measureRender = (componentName: string, renderFn: () => void): void => {
  performanceMonitor.measureRender(componentName, renderFn);
};

// React hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const measureRender = (renderFn: () => void) => {
    performanceMonitor.measureRender(componentName, renderFn);
  };

  const measureAsync = <T>(
    name: string,
    fn: () => Promise<T>,
    tags?: Record<string, string>
  ) => {
    return performanceMonitor.measureAsyncFunction(name, fn, tags);
  };

  return { measureRender, measureAsync };
};

// Performance monitoring component
export const PerformanceWrapper: React.FC<{
  children: React.ReactNode;
  componentName: string;
}> = ({ children, componentName }) => {
  const { measureRender } = usePerformanceMonitor(componentName);

  return (
    <div>
      {measureRender(() => children)}
    </div>
  );
};

export default performanceMonitor;