/**
<<<<<<< HEAD
 * Performance utilities for optimizing the application
 */

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

// Lazy load images with intersection observer
export function lazyLoadImage(img: HTMLImageElement, src: string) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(img);
}

// Preload critical resources
export function preloadResource(href: string, as: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
}

// Check if element is in viewport
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Performance monitoring
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTiming(name: string): void {
    this.metrics.set(name, performance.now());
  }

  endTiming(name: string): number {
    const startTime = this.metrics.get(name);
    if (startTime) {
      const duration = performance.now() - startTime;
      this.metrics.delete(name);
      return duration;
    }
    return 0;
  }

  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }
}

// Memory usage monitoring
export function getMemoryUsage(): {
  used: number;
  total: number;
  percentage: number;
} {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      percentage: (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100,
    };
  }
  return { used: 0, total: 0, percentage: 0 };
}

// Bundle size optimization helpers
export function createChunkLoader<T>(
  importFn: () => Promise<{ default: T }>
): () => Promise<T> {
  let promise: Promise<T> | null = null;
  
  return () => {
    if (!promise) {
      promise = importFn().then(module => module.default);
    }
    return promise;
  };
}

// Critical resource hints
export function addResourceHints(): void {
  const hints = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/api/health', as: 'fetch', crossorigin: 'anonymous' },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.entries(hint).forEach(([key, value]) => {
      link.setAttribute(key, value);
    });
    document.head.appendChild(link);
  });
}
=======
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
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
