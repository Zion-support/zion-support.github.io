/**


export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: string;
  type: 'timing' | 'counter' | 'gauge';
  tags?: Record<string, string>;
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
          this.recordMetric('fcp', entry.startTime);
        }
      });
    });

    // Largest Contentful Paint (LCP)
    this.observeMetric('largest-contentful-paint', (entries) => {
      const lastEntry = entries[entries.length - 1];
      this.recordMetric('lcp', lastEntry.startTime);
    });

    // First Input Delay (FID)
    this.observeMetric('first-input', (entries) => {
      entries.forEach((entry) => {
        const fid = (entry as any).processingStart - entry.startTime;
        this.recordMetric('fid', fid);
      });
    });

    // Cumulative Layout Shift (CLS)
    this.observeMetric('layout-shift', (entries) => {
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          this.recordMetric('cls', (entry as any).value);
        }
      });
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
        this.recordMetric('resource_load_time', resourceEntry.duration, {
          resource: resourceEntry.name,
          type: resourceEntry.initiatorType
        });
      });
    });
  }

  /**
   * Observe a specific metric type
   */
  private observeMetric(entryType: string, callback: (entries: PerformanceEntry[]) => void): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ entryTypes: [entryType] });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Failed to observe ${entryType}:`, error);
    }
  }

  /**
   * Record a performance metric
   */
  private recordMetric(name: string, value: number, tags?: Record<string, string>): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: new Date().toISOString(),
      type: 'timing',
      tags
    };

    this.metrics.push(metric);

    // Keep only the most recent metrics
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
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
   * Clear all metrics
   */
  public clearMetrics(): void {
    this.metrics = [];
  }

  /**
   * Measure render performance
   */
  public measureRender(componentName: string, renderFn: () => React.ReactNode): React.ReactNode {
    const start = performance.now();
    const result = renderFn();
    const end = performance.now();
    
    this.recordMetric('render_time', end - start, { component: componentName });
    return result;
  }

  /**
   * Measure async function performance
   */
  public async measureAsyncFunction<T>(
    name: string,
    fn: () => Promise<T>,
    tags?: Record<string, string>
  ): Promise<T> {
    const start = performance.now();
    try {
      const result = await fn();
      const end = performance.now();
      this.recordMetric('async_function_time', end - start, { function: name, ...tags });
      return result;
    } catch (error) {
      const end = performance.now();
      this.recordMetric('async_function_error', end - start, { function: name, error: 'true', ...tags });
      throw error;
    }
  }

  /**
   * Cleanup observers
   */
  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
const performanceMonitor = PerformanceMonitor.getInstance();

// Hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const measureRender = (renderFn: () => React.ReactNode) => {
    return performanceMonitor.measureRender(componentName, renderFn);
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

export default performanceMonitor;


// Debounce function for search and input handling
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for scroll and resize events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Memory usage utility
export function getMemoryUsage(): { used: number; total: number; limit: number } | null {
  if (typeof window !== 'undefined' && (performance as any).memory) {
    const memory = (performance as any).memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit
    };
  }
  return null;

