/**
 * Performance Utilities
 */
=======
export const debounce = <T extends (...args: any[]) => any>(
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
export const debounce = <T extends (...args: any[]) => any>(
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a4f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
=======
  return function executedFunction(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a4f
=======
  return function executedFunction(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
      setTimeout(() => (inThrottle = false), limit);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
    }
    setTimeout(() => (inThrottle = false), limit);
  };
};
=======
=======

// Memory usage monitoring
export const getMemoryUsage = (): {
  used: number;
  total: number;
  percentage: number;
} => {
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return { used: 0, total: 0, percentage: 0 };
  }

  const memory = (performance as any).memory;
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
  const metrics: any = {};

  // Basic timing metrics
  if (typeof window !== 'undefined' && window.performance) {
    const timing = window.performance.timing;
    metrics.loadTime = timing.loadEventEnd - timing.navigationStart;
    metrics.domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
  }

  // Web Vitals
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      // First Paint
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-paint') {
            metrics.firstPaint = entry.startTime;
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });

      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime;
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          metrics.largestContentfulPaint = lastEntry.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        metrics.cumulativeLayoutShift = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

    } catch (error) {
      console.warn('Performance Observer not fully supported:', error);
    }
  }

  return metrics;
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
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.warn(`Long task detected: ${entry.duration}ms`);
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        this.observers.push(longTaskObserver);
      } catch (error) {
        console.warn('Long task monitoring not supported:', error);
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
export const performanceMonitor = new PerformanceMonitor();

// Lazy loading utilities
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset['src'];
          if (src) {
            img['src'] = src;
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

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a4f

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a61
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-11d4
// Preload critical resources
export const preloadCriticalResources = (): void => {
// Lazy load images with intersection observer
export const lazyLoadImages = (): void => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset['src']) {
            img['src'] = img.dataset['src'];
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};
// Preload critical resources
export const preloadCriticalResources = (): void => {
  const criticalResources = ['/fonts/main-font.woff2', '/css/critical.css'];
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
      link.crossOrigin = 'anonymous';
    }
=======
    link.crossOrigin = 'anonymous';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3b0a
=======
    link.crossOrigin = 'anonymous';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
    document.head.appendChild(link);
  });
};

export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a4f
    ticking = false;
  };
    }
  }

  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
  }
}

// Memory usage utility
export const getMemoryUsage = (): any => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }
  
  return (performance as any).memory;
};

// Collect performance metrics
export const collectPerformanceMetrics = (): any => {
  if (typeof window === 'undefined') return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
    tcp: navigation.connectEnd - navigation.connectStart,
    request: navigation.responseEnd - navigation.requestStart,
    response: navigation.responseEnd - navigation.responseStart,
    dom: navigation.domContentLoadedEventEnd - (navigation.activationStart || 0),
    load: navigation.loadEventEnd - (navigation.activationStart || 0)
  };
=======
  window.addEventListener('scroll', requestTick, { passive: true });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
};

// Memory usage monitoring
export const getMemoryUsage = (): {
  used: number;
  total: number;
  percentage: number;
} | null => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    const used = Math.round(memory.usedJSHeapSize / 1048576);
    const total = Math.round(memory.totalJSHeapSize / 1048576);
    const percentage = Math.round((used / total) * 100);
    return { used, total, percentage };
  }
  return null;
};

// Performance metrics collection
export const collectPerformanceMetrics = () => {
  const metrics: Record<string, number> = {};
  // Navigation timing
  if (performance.timing) {
    const timing = performance.timing;
    metrics.pageLoadTime = timing.loadEventEnd - timing.navigationStart;
    metrics.domContentLoaded =
      timing.domContentLoadedEventEnd - timing.navigationStart;
    metrics.firstPaint = timing.responseEnd - timing.requestStart;
  }
  
  // Resource timing
  if (performance.getEntriesByType) {
    const resources = performance.getEntriesByType('resource');
    metrics.resourceCount = resources.length;
    metrics.totalResourceSize = resources.reduce((total, resource: any) => {
      return total + (resource.transferSize || 0);
    }, 0);
  }
  
  // Memory usage
  const memory = getMemoryUsage();
  if (memory) {
    metrics.memoryUsed = memory.used;
    metrics.memoryTotal = memory.total;
    metrics.memoryPercentage = memory.percentage;
  }
  
  return metrics;
};

// Bundle size optimization helpers
export const optimizeBundleSize = {
  // Dynamic imports for code splitting
  loadComponent: async (componentPath: string) => {
    try {
      const module = await import(componentPath);
      return module.default;
    } catch (error) {
      console.error(`Failed to load component: ${componentPath}`, error);
      return null;
    }
  },
  
  // Tree shaking optimization
  importOnly: (module: any, ...exports: string[]) => {
    const result: any = {};
    exports.forEach(exportName => {
      if (module[exportName]) {
        result[exportName] = module[exportName];
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};
// Performance monitoring
=======

// Get memory usage information
export const getMemoryUsage = (): any => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return null;
  }
  
  const memory = (performance as any).memory;
  if (!memory) return null;
  
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit
  };
};

// Collect performance metrics
export const collectPerformanceMetrics = (): any => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return null;
  }
  
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  return {
    navigation: navigation ? {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      domInteractive: navigation.domInteractive - navigation.fetchStart,
      firstByte: navigation.responseStart - navigation.fetchStart
    } : null,
    paint: paint.reduce((acc, entry) => {
      acc[entry.name] = entry.startTime;
      return acc;
    }, {} as Record<string, number>)
  };
};

// Performance monitor
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
export const performanceMonitor = {
  start: (name: string) => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    performance.mark(`${name}-start`);
  },
  end: (name: string) => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
=======

export default {
=======
export function getMemoryUsage(): any {
  return null;
}

export function collectPerformanceMetrics(): any {
  return {};
}

export const performanceMonitor = {
  start: () => {},
  stop: () => {},
};

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T {
  let inThrottle: boolean;
  return ((...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
}

export function lazyLoadImages(): void {
  // Lazy loading implementation
}

export function preloadCriticalResources(): void {
  // Preloading implementation
}

export function optimizeScrollPerformance(): void {
  // Scroll optimization implementation
}

export default {
  getMemoryUsage,
  collectPerformanceMetrics,
  performanceMonitor,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
  debounce,
  throttle,
  lazyLoadImages,
  preloadCriticalResources,
  optimizeScrollPerformance,
=======
  getMeasurements: (name: string) => {
    if (typeof window === 'undefined' || !('performance' in window)) return null;
    return performance.getEntriesByName(name);
  }
};

// Lazy load images
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined') return;
  
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img['src'] = img.dataset['src'] || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
};

// Preload critical resources
export const preloadCriticalResources = (resources: string[]): void => {
  if (typeof window === 'undefined') return;
  
=======

// Preload critical resources
export const preloadCriticalResources = (resources: string[] = []): void => {
  if (typeof document === 'undefined') return;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    document.head.appendChild(link);
  });
};

// Optimize scroll performance
export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;
  let ticking = false;
  
  const updateScrollPosition = () => {
    // Scroll optimization logic here
    ticking = false;
  };
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };
};
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Performance budget checker
export interface PerformanceBudget {
  maxBundleSize: number;
  maxImageSize: number;
  maxFirstLoad: number;
  maxInteractive: number;
}

export const checkPerformanceBudget = (budget: PerformanceBudget): boolean => {
  const metrics = collectPerformanceMetrics();
  if (!metrics) return true;

  return (
    metrics.load <= budget.maxFirstLoad &&
    metrics.dom <= budget.maxInteractive
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
    const measure = performance.getEntriesByName(name)[0];
    return measure ? measure.duration : 0;
  },
  getMetrics: () => {
    const measures = performance.getEntriesByType('measure');
    return measures.map(measure => ({
      name: measure.name,
      duration: measure.duration,
      startTime: measure.startTime
    }));
  },
  clear: () => {
    performance.clearMarks();
    performance.clearMeasures();
  },
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
