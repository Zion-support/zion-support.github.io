// Performance monitoring utilities
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  };

  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeWebVitals();
    this.initializePerformanceObserver();
  }

  private initializeWebVitals() {
    // Core Web Vitals
    getCLS((metric) => {
      this.metrics.cls = metric.value;
      this.reportMetric('CLS', metric.value);
    });

    getFID((metric) => {
      this.metrics.fid = metric.value;
      this.reportMetric('FID', metric.value);
    });

    getFCP((metric) => {
      this.metrics.fcp = metric.value;
      this.reportMetric('FCP', metric.value);
    });

    getLCP((metric) => {
      this.metrics.lcp = metric.value;
      this.reportMetric('LCP', metric.value);
    });

    getTTFB((metric) => {
      this.metrics.ttfb = metric.value;
      this.reportMetric('TTFB', metric.value);
    });
  }

  private initializePerformanceObserver() {
    // Long Task Observer
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
            this.reportMetric('LongTask', entry.duration);
          }
        }
      });

      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        this.observers.push(longTaskObserver);
      } catch (e) {
        console.warn('Long task observer not supported');
      }

      // Navigation Observer
      const navigationObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming;
          this.reportMetric('DOMContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
          this.reportMetric('LoadComplete', navEntry.loadEventEnd - navEntry.loadEventStart);
        }
      });

      try {
        navigationObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navigationObserver);
      } catch (e) {
        console.warn('Navigation observer not supported');
      }
    }
  }

  private reportMetric(name: string, value: number) {
    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        custom_map: {
          metric_name: 'metric_name',
          metric_value: 'metric_value',
        },
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    const { cls, fid, lcp } = this.metrics;
    
    if (cls === null || fid === null || lcp === null) {
      return 0;
    }

    // Simple scoring algorithm based on Core Web Vitals thresholds
    let score = 100;
    
    // CLS scoring (0.1 is good, 0.25 is poor)
    if (cls > 0.25) score -= 30;
    else if (cls > 0.1) score -= 15;
    
    // FID scoring (100ms is good, 300ms is poor)
    if (fid > 300) score -= 30;
    else if (fid > 100) score -= 15;
    
    // LCP scoring (2.5s is good, 4s is poor)
    if (lcp > 4000) score -= 30;
    else if (lcp > 2500) score -= 15;
    
    return Math.max(0, score);
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Utility functions
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;
  
  if (duration > 16) { // More than one frame at 60fps
    console.warn(`Slow operation detected: ${name} took ${duration.toFixed(2)}ms`);
  }
  
  return duration;
};

export const measureAsyncPerformance = async (name: string, fn: () => Promise<any>) => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  const duration = end - start;
  
  if (duration > 100) { // More than 100ms
    console.warn(`Slow async operation detected: ${name} took ${duration.toFixed(2)}ms`);
  }
  
  return { result, duration };
};

// Resource timing utilities
export const getResourceTimings = () => {
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  return resources.map(resource => ({
    name: resource.name,
    duration: resource.duration,
    size: resource.transferSize,
    type: resource.initiatorType,
  }));
};

// Memory usage utilities
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit,
    };
  }
  return null;
<<<<<<< HEAD
};

export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
    if (!img.decoding) {
      img.decoding = 'async';
    }
  });
};

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

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const reportWebVitals = (onPerfEntry?: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-035f
};