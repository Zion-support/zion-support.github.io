/**
 * Performance utilities for optimizing application performance
 */

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return function executedFunction(this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Memory usage monitoring
export const getMemoryUsage = (): {
  used: number;
  total: number;
  percentage: number;
} => {
  if (
    typeof performance === 'undefined' ||
    !(
      performance as Performance & {
        memory?: {
          usedJSHeapSize: number;
          totalJSHeapSize: number;
          jsHeapSizeLimit: number;
        };
      }
    ).memory
  ) {
    return { used: 0, total: 0, percentage: 0 };
  }

  const memory = (
    performance as Performance & {
      memory: {
        usedJSHeapSize: number;
        totalJSHeapSize: number;
        jsHeapSizeLimit: number;
      };
    }
  ).memory;
  const used = memory.usedJSHeapSize;
  const total = memory.totalJSHeapSize;
  const percentage = (used / total) * 100;

  return { used, total, percentage };
};

// Performance metrics collection
export const collectPerformanceMetrics = async (): Promise<{
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}> => {
  const metrics: {
    loadTime: number;
    domContentLoaded: number;
    firstPaint: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
  } = {
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  };

  // Basic timing metrics
  if (typeof window !== 'undefined' && window.performance) {
    const timing = window.performance.timing;
    metrics.loadTime = timing.loadEventEnd - timing.navigationStart;
    metrics.domContentLoaded =
      timing.domContentLoadedEventEnd - timing.navigationStart;
  }

  // Web Vitals
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      // First Paint
      const paintObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-paint') {
            metrics.firstPaint = entry.startTime;
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });

      // First Contentful Paint
      const fcpObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime;
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          metrics.largestContentfulPaint = lastEntry.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          metrics.firstInputDelay =
            (entry as PerformanceEventTiming).processingStart - entry.startTime;
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (!(entry as LayoutShift).hadRecentInput) {
            clsValue += (entry as LayoutShift).value;
          }
        }
        metrics.cumulativeLayoutShift = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Performance Observer not fully supported:', error);
      }
    }
  }

  return metrics as {
    loadTime: number;
    domContentLoaded: number;
    firstPaint: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
  };
};

// Performance monitor class
export class PerformanceMonitor {
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];
  private isRunning = false;

  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (process.env.NODE_ENV === 'development') {
              console.warn(`Long task detected: ${entry.duration}ms`);
            }
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        this.observers.push(longTaskObserver);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Long task monitoring not supported:', error);
        }
      }
    }
  }

  stop(): void {
    this.isRunning = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  measure(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    this.metrics.set(name, end - start);
  }

  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  clearMetrics(): void {
    this.metrics.clear();
  }
}

// Export singleton instance
export const performanceMonitorInstance = new PerformanceMonitor();

// Lazy loading utilities
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window))
    return;

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

// Preload critical resources
export const preloadCriticalResources = (): void => {
  if (typeof document === 'undefined') return;

  const criticalResources = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
    { href: '/images/hero-bg.jpg', as: 'image' },
    { href: '/images/logo.svg', as: 'image' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) {
      link.type = resource.type;
    }
    if (resource.as === 'font') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Scroll performance optimization
export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    // Throttled scroll handling
    // Update scroll position indicators
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

    // Update progress bar if exists
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
      (progressBar as HTMLElement).style.width = `${scrollPercent}%`;
    }

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Performance monitor object (alternative implementation)
export const performanceMonitorObject = {
  start: () => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (process.env.NODE_ENV === 'development') {
            console.log(
              'Performance metric:',
              entry.name,
              (entry as PerformanceEntry & { value?: number }).value
            );
          }
        });
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    }
  },

  stop: () => {
    // Cleanup if needed
  },
};

// Collect performance metrics array
export const collectPerformanceMetricsArray = async (): Promise<
  Array<{ name: string; value: number }>
> => {
  if (typeof window === 'undefined') return [];

  const metrics: Array<{ name: string; value: number }> = [];

  // Navigation timing
  if (performance.timing) {
    const timing = performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    metrics.push({ name: 'loadTime', value: loadTime });
  }

  // Memory usage
  const memory = getMemoryUsage();
<<<<<<< HEAD
  if (memory && memory.used > 0) {
=======
  if (memory) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0475
    metrics.push({ name: 'memoryUsage', value: memory.used });
  }

  // Resource timing
  const resources = performance.getEntriesByType('resource');
  const totalResourceSize = resources.reduce((total, resource) => {
    return total + (resource.transferSize || 0);
  }, 0);
  metrics.push({ name: 'totalResourceSize', value: totalResourceSize });

  return metrics;
};

// Get memory usage (duplicate removed - using the one above)

const performanceUtils = {
  debounce,
  throttle,
  lazyLoadImages,
  preloadCriticalResources,
  optimizeScrollPerformance,
  performanceMonitor,
  collectPerformanceMetrics,
  collectPerformanceMetricsArray,
  getMemoryUsage,
};

export default performanceUtils;
