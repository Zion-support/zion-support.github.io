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
=======
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/performanceUtils.ts
  };
};

// Throttle function for performance optimization
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/performanceUtils.ts
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/performanceUtils.ts
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/performanceUtils.ts
