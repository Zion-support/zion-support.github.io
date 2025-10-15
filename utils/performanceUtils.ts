interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fcp?: number;
}

export const performanceOptimizer = {
  init() {
    if (typeof window === 'undefined') return;
    
    this.setupPerformanceMonitoring();
    this.optimizeImages();
    this.setupLazyLoading();
  },

  setupPerformanceMonitoring() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log('Performance metric:', entry.name, entry.value);
      });
    });

    observer.observe({ 
      entryTypes: [
        'largest-contentful-paint', 
        'first-input', 
        'layout-shift',
        'navigation',
        'paint'
      ] 
    });
  },

  optimizeImages() {
    if (typeof document === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  },

  setupLazyLoading() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const images = document.querySelectorAll('img[data-src]');
    if (images.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );

    images.forEach((img) => {
      observer.observe(img);
    });
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
    if (typeof window === 'undefined') {
      return {
        fps: 0,
        memoryUsage: 0,
        loadTime: 0
      };
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const memory = (performance as any).memory;

    return {
      fps: 60, // Default assumption
      memoryUsage: memory ? memory.usedJSHeapSize : 0,
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      lcp: this.getLCP(),
      fid: this.getFID(),
      cls: this.getCLS(),
      ttfb: navigation ? navigation.responseStart - navigation.requestStart : 0,
      fcp: this.getFCP()
    };
  },

  getLCP(): number {
    const entries = performance.getEntriesByType('largest-contentful-paint');
    return entries.length > 0 ? entries[entries.length - 1].startTime : 0;
  },

  getFID(): number {
    const entries = performance.getEntriesByType('first-input');
    return entries.length > 0 ? (entries[0] as any).processingStart - entries[0].startTime : 0;
  },

  getCLS(): number {
    let clsValue = 0;
    const entries = performance.getEntriesByType('layout-shift');
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value || 0;
      }
    });
    return clsValue;
  },

  getFCP(): number {
    const entries = performance.getEntriesByType('paint');
    const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
    return fcpEntry ? fcpEntry.startTime : 0;
  }
};

export const cacheOptimizer = {
  setCacheHeaders: (response: Response): Response => {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  },

  clearCache: async (): Promise<void> => {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(name => caches.delete(name))
      );
    }
  }
};

export default performanceOptimizer;