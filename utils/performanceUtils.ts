// Performance utilities for the Zion Tech Group website
interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
}

export const performanceUtils = {
  // Measure performance of a function
  measure(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  },

  // Get current performance metrics
  getMetrics(): PerformanceMetrics {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const largestContentfulPaint = performance.getEntriesByType('largest-contentful-paint')[0];
    
    return {
      fps: this.getFPS(),
      memoryUsage: this.getMemoryUsage(),
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : undefined,
      largestContentfulPaint: largestContentfulPaint ? largestContentfulPaint.startTime : undefined,
      cumulativeLayoutShift: this.getCumulativeLayoutShift()
    };
  },

  // Get FPS (approximate)
  getFPS(): number {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        lastTime = currentTime;
        frameCount = 0;
        return fps;
      }
      
      requestAnimationFrame(measureFPS);
      return 0;
    };
    
    return measureFPS();
  },

  // Get memory usage (if available)
  getMemoryUsage(): number {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }
    return 0;
  },

  // Get Cumulative Layout Shift
  getCumulativeLayoutShift(): number {
    let clsValue = 0;
    const clsEntries: PerformanceEntry[] = [];
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);
        }
      }
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
    
    return clsValue;
  },

  // Debounce function
  debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
    let timeout: NodeJS.Timeout;
    return ((...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    }) as T;
  },

  // Throttle function
  throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
    let inThrottle: boolean;
    return ((...args: any[]) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }) as T;
  }
};

// Performance optimizer
export const performanceOptimizer = {
  init(): void {
    this.setupPerformanceMonitoring();
    this.optimizeImages();
    this.setupLazyLoading();
  },

  setupPerformanceMonitoring(): void {
    // Monitor performance metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
        }
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    }
  },

  optimizeImages(): void {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  },

  setupLazyLoading(): void {
    // Add loading="lazy" to images that don't have it
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  }
};

// Cache optimizer
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

export default performanceUtils;