// PerformanceEnhancer utility
export class PerformanceEnhancer {
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.init();
  }

  init() {
    // Initialize performance monitoring
    this.setupPerformanceObserver();
    this.trackWebVitals();
    this.optimizeImages();
    this.preloadCriticalResources();
  }

  private setupPerformanceObserver() {
    if ('PerformanceObserver' in window) {
      // Observe navigation timing
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.metrics.set('domContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
            this.metrics.set('loadComplete', navEntry.loadEventEnd - navEntry.loadEventStart);
          }
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);

      // Observe paint timing
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            this.metrics.set(entry.name, entry.startTime);
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    }
  }

  private trackWebVitals() {
    // Track Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => this.metrics.set('CLS', metric.value));
        getFID((metric) => this.metrics.set('FID', metric.value));
        getFCP((metric) => this.metrics.set('FCP', metric.value));
        getLCP((metric) => this.metrics.set('LCP', metric.value));
        getTTFB((metric) => this.metrics.set('TTFB', metric.value));
      });
    }
  }

  private optimizeImages() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
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

  private preloadCriticalResources() {
    // Preload critical resources
    const criticalResources = [
      '/src/globals.css',
      '/src/components/Navigation.tsx',
      '/src/components/Footer.tsx'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export default PerformanceEnhancer;