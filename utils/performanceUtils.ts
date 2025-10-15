interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
}

export const performanceOptimizer = {
  init() {
    this.setupPerformanceMonitoring();
    this.optimizeImages();
    this.setupLazyLoading();
  },

  setupPerformanceMonitoring() {
    // Monitor performance metrics
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
      });
    }
  },

  optimizeImages() {
    // Implement image optimization
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
      }
    });
  },

  setupLazyLoading() {
    // Implement lazy loading for images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.setAttribute('src', src);
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
};

export const performanceUtils = {
  // Measure performance
  measure: (name: string, fn: () => void): void => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  },

  // Get performance metrics
  getMetrics: (): PerformanceMetrics => {
    return {
      fps: 0,
      memoryUsage: 0,
      loadTime: 0
    };
  }
};

export const cacheOptimizer = {
  setCacheHeaders(response: Response): Response {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  },

  clearCache(): void {
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