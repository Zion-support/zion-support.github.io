// Utility functions

export function utilityFunction() {
  // Implementation here
  return null;
}

  optimizeImages() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
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
  },

  setupLazyLoading() {
    // Preload critical resources
    const criticalResources = [
//       '/app/styles/futuristic.css',
//       '/app/styles/futuristic-enhanced.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'style';
      document.head.appendChild(link);
    });
  },

  cleanup() {
    // Cleanup performance monitoring
    if (typeof window !== 'undefined') {
      // Remove any performance observers
      const observers = (window as any).__performanceObservers || [];
      observers.forEach((observer: any) => observer.disconnect());
    }
  }
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, height?: number, quality = 80) => {
  if (!src) return src;
  
  // If it's already an optimized URL, return as is
  if (src.includes('w_') || src.includes('q_')) return src;
  
  // For placeholder images, return as is
  if (src.includes('placeholder') || src.includes('api/placeholder')) return src;
  
  // Add optimization parameters
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  params.set('f', 'auto'); // Auto format
  
  const separator = src.includes('?') ? '&' : '?';
  return `${src}${separator}${params.toString()}`;
};

// Bundle size optimization
export const optimizeBundle = {
  // Lazy load non-critical components
  lazyLoadComponent: (importFn: () => Promise<any>) => {
    return React.lazy(importFn);
  },
  
  // Preload critical routes
  preloadRoute: (routePath: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = routePath;
      document.head.appendChild(link);
    }
  }
};

// Memory optimization
export const memoryOptimizer = {
  // Clean up unused objects
  cleanup: () => {
    if (typeof window !== 'undefined' && 'gc' in window) {
      (window as any).gc();
    }
  },
  
  // Monitor memory usage
  getMemoryUsage: () => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  }
};

// Cache optimization
export const cacheOptimizer = {
  // Set cache headers for static assets
  setCacheHeaders: (response: Response) => {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  },
  
  // Clear cache when needed
  clearCache: () => {
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
  }
};

export default performanceOptimizer;
