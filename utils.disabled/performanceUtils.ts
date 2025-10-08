/**
 * Performance Utilities
 */

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
//     const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

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
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
      link.crossOrigin = 'anonymous';
    }
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
export const getMemoryUsage = (): unknown => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }
  
  return (performance as any).memory;
};

// Collect performance metrics
export const collectPerformanceMetrics = (): unknown => {
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
//   const recommendations = [];
  
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};
// Performance monitoring
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
      ticking = true;
    }
  };
};
