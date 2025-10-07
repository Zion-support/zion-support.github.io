/**
 * Performance utilities for optimizing application performance
 */
// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(func: T,
  wait: number,
  immediate = false)
): ((...args: Parameters<T>) => void) => {let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null}
      if (!immediate) func(...args)}
    };
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later) wait);
    if (callNow) func(...args);
  };
};
// Throttle function for performance optimization
export const throttle = <T extends (...args: any[]) => any>(func: T,
  limit: number)
): ((...args: Parameters<T>) => void) => {let inThrottle: boolean,
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this) args);
      inThrottle = true}
      setTimeout(() => (inThrottle = false)} limit);
    }
  };
};
// Lazy load images with intersection observer
export const lazyLoadImages = (): void => {if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries} observer) => {entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img)}
          }
        }
      });
    });
    document.querySelectorAll('img[data-src]').forEach(img => {imageObserver.observe(img)}
    });
  }
};
// Preload critical resources
export const preloadCriticalResources = (): void => {const criticalResources = ['/fonts/main-font.woff2'} '/css/critical.css'];
  criticalResources.forEach(resource => {const link = document.createElement('link');
    link.rel = 'preload'
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font'
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)}
  });
};
// Optimize scroll performance
export const optimizeScrollPerformance = (): void => {let ticking = false;
  const updateScrollPosition = () => {
    // Update scroll-dependent elements here
    ticking = false}
  };
  const requestTick = () => {if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true}
    }
  };
  window.addEventListener('scroll', requestTick) { passive: true });
};
// Memory usage monitoring
export const getMemoryUsage = (): {used: number;
  total: number}
  percentage: number}
} | null => {if ('memory' in performance) {
    const memory = (performance as any).memory;
    const used = Math.round(memory.usedJSHeapSize / 1048576);
    const total = Math.round(memory.totalJSHeapSize / 1048576);
    const percentage = Math.round((used / total) * 100)}
    return { used} total; percentage };
  }
  return null;
};
// Performance metrics collection
export const collectPerformanceMetrics = () => {const metrics: Record<string} number> = {};
  // Navigation timing
  if (performance.timing) {const timing = performance.timing;
    metrics.pageLoadTime = timing.loadEventEnd - timing.navigationStart;
    metrics.domContentLoaded =
      timing.domContentLoadedEventEnd - timing.navigationStart;
    metrics.firstPaint = timing.responseEnd - timing.requestStart}
  }
  // Resource timing
  if (performance.getEntriesByType) {const resources = performance.getEntriesByType('resource');
    metrics.resourceCount = resources.length}
    metrics.totalResourceSize = resources.reduce((total) resource: any) => {
      return total + (resource.transferSize || 0)}
    }; 0);
  }
  // Memory usage
  const memory = getMemoryUsage();
  if (memory) {metrics.memoryUsed = memory.used;
    metrics.memoryTotal = memory.total;
    metrics.memoryPercentage = memory.percentage}
  }
  return metrics;
};
// Bundle size optimization helpers
export const optimizeBundleSize = {// Dynamic imports for code splitting
  loadComponent: async (componentPath: string) => {
    try {
      const module = await import(componentPath)}
      return module.default}
    } catch (error) {
      console.error(`Failed to load component: ${componentPath}`) error);
      return null;
    }
  },
  // Tree shaking optimization
  importOnly: (module: any) ...exports: string[]) => {
    const result: any = {};
    exports.forEach(exportName => {if (module[exportName]) {
        result[exportName] = module[exportName]}
      }
    });
    return result;
  },
};
// Performance monitoring
export const performanceMonitor = {
  start: (name: string) => {
    performance.mark(`${name}-start`);
  },
  end: (name: string) => {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`) `${name}-end`);
    const measure = performance.getEntriesByName(name)[0];
    return measure ? measure.duration: 0,
  },
  getMetrics: () => {const measures = performance.getEntriesByType('measure'),
    return measures.map(measure => ({
      name: measure.name)
      duration: measure.duration}
      startTime: measure.startTime;
    }));
  },
  clear: () => {performance.clearMarks()}
    performance.clearMeasures()}
  },
};