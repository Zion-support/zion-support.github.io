/**
 * Performance Optimizer Utility
 * Comprehensive performance monitoring and optimization tools
 */

/**
 * Web Vitals metrics tracking
 */
export interface WebVitalsMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
  INP?: number; // Interaction to Next Paint
  loadTime?: number; // Page load time
  interactiveTime?: number; // Time to interactive
}

/**
 * Performance budget checker
 */
export interface PerformanceBudget {
  maxBundleSize: number; // in KB
  maxImageSize: number; // in KB
  maxFirstLoad: number; // in ms
  maxInteractive: number; // in ms
}

/**
 * Resource hints for performance
 */
export const prefetchResources = (urls: string[]): void => {
  if (typeof document === 'undefined') return;
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait) as unknown as number;
  };
};

/**
 * Throttle function
 */
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

/**
 * Lazy load images
 */
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined') return;
  if (!('IntersectionObserver' in window)) return;
  
  const imageObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset['src'];
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
};

/**
 * Measure page load performance
 */
export const measurePageLoad = (): WebVitalsMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    interactiveTime: navigation.domInteractive - navigation.fetchStart,
    TTFB: navigation.responseStart - navigation.fetchStart,
  };
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    callback(entries);
  });

  observer.observe({ entryTypes: ['longtask'] });
  return observer;
};

/**
 * Report Web Vitals
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  console.log('Web Vitals:', metrics);
  // Here you would typically send metrics to your analytics service
};

/**
 * Performance Optimizer Class
 */
class PerformanceOptimizer {
  private metrics: Record<string, number> = {};
  private observers: PerformanceObserver[] = [];

  /**
   * Get current metrics
   */
  getMetrics(): Record<string, number> {
    return { ...this.metrics };
  }

  /**
   * Initialize performance monitoring
   */
  init(): void {
    this.measurePageLoad();
    this.setupLongTaskMonitoring();
    this.setupResourceMonitoring();
  }

  /**
   * Measure page load performance
   */
  measurePageLoad(): WebVitalsMetrics | null {
    const metrics = measurePageLoad();
    if (metrics) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== undefined) {
          this.metrics[key] = value;
        }
      });
    }
    return metrics;
  }

  /**
   * Setup long task monitoring
   */
  private setupLongTaskMonitoring(): void {
    const observer = monitorLongTasks((entries) => {
      entries.forEach(entry => {
        this.metrics[`long_task_${Date.now()}`] = entry.duration;
      });
    });
    
    if (observer) {
      this.observers.push(observer);
    }
  }

  /**
   * Setup resource monitoring
   */
  private setupResourceMonitoring(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          this.metrics[`resource_${resourceEntry.name.split('.').pop()}`] = resourceEntry.duration;
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
    this.observers.push(observer);
  }

  /**
   * Lazy load images
   */
  lazyLoadImages(): void {
    lazyLoadImages();
  }

  /**
   * Report Web Vitals
   */
  reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }

  /**
   * Monitor long tasks
   */
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }

  /**
   * Add critical resource hints
   */
  addCriticalResourceHints(urls: string[]): void {
    prefetchResources(urls);
  }

  /**
   * Cleanup observers
   */
  cleanup(): void {
    this.observers.forEach(observer => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    });
    this.observers = [];
  }
}

// Export singleton instance
const performanceOptimizer = new PerformanceOptimizer();
export default performanceOptimizer;