/**
 * Performance Utilities
 */
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/performanceUtils.ts

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
export const debounce = <T extends (...args: any[]) => any>(

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  
>>>>>>> origin/main
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
=======
>>>>>>> origin/main
  };
};

// Throttle function for performance optimization
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/performanceUtils.ts
=======
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  _limit: number // eslint-disable-line @typescript-eslint/no-unused-vars
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function executedFunction(this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
>>>>>>> origin/main
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
=======
  return function executedFunction(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  
  return function executedFunction(...args: Parameters<T>) {
=======
  return (...args: Parameters<T>) => {
=======
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
  return function executedFunction(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
  return function executedFunction(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
  
  return function executedFunction(...args: Parameters<T>) {
>>>>>>> origin/main
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

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
=======

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/performanceUtils.ts
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    return (performance as any).memory;
  }
  return null;
};

// Lazy loading utility
export const lazyLoad = (callback: () => void, options?: IntersectionObserverInit) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  return observer;
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, height?: number): string => {
  // This is a placeholder for image optimization logic
  return src;
};

// Bundle size monitoring
export const getBundleSize = () => {
  // This would typically integrate with webpack-bundle-analyzer or similar
  return {
    totalSize: 0,
    gzippedSize: 0,
    chunks: []
  };
};

// Performance metrics collection
  return metrics;
};

// Performance optimization recommendations
export const getOptimizationRecommendations = () => {
  const recommendations = [];
  
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
=======
  // Check for large images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.naturalWidth > 1920 || img.naturalHeight > 1080) {
      recommendations.push('Consider optimizing large images');
    }
  });

  // Check for unused CSS
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  if (stylesheets.length > 5) {
    recommendations.push('Consider reducing the number of stylesheets');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/performanceUtils.ts
  }

  return recommendations;
};

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

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/performanceUtils.ts
export default {
  debounce,
  throttle,
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
=======
  measurePerformance,
  getMemoryUsage,
  lazyLoad,
  optimizeImage,
  getBundleSize,
  collectMetrics,
  getOptimizationRecommendations
};
=======

// Preload critical resources
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;
  
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/css/critical.css'
  ];
  
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
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    link.crossOrigin = 'anonymous';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    }

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
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

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('scroll', requestTick, { passive: true });
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
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};
// Performance monitoring

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
export const performanceMonitor = {
  start: (name: string) => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    performance.mark(`${name}-start`);
  },
  end: (name: string) => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  },

export default {
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
  debounce,
  throttle,
  lazyLoadImages,
  preloadCriticalResources,
  optimizeScrollPerformance,
  performanceMonitor,
  collectPerformanceMetrics,
  getMemoryUsage
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
  

// Preload critical resources
export const preloadCriticalResources = (resources: string[] = []): void => {
  if (typeof document === 'undefined') return;

  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = 'script';
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
  
  window.addEventListener('scroll', requestTick, { passive: true });
};
};

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
>>>>>>> origin/main
