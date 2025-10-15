export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export interface PerformanceOptions {
  enableMonitoring?: boolean;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

export class PerformanceOptimizer {
  private options: PerformanceOptions;
  private metrics: PerformanceMetrics | null = null;

  constructor(options: PerformanceOptions = {}) {
    this.options = {
      enableMonitoring: true,
      enableImageOptimization: true,
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enableCaching: true,
      ...options,
    };
  }

  init() {
    if (this.options.enableMonitoring) {
      this.setupPerformanceMonitoring();
    }
    if (this.options.enableImageOptimization) {
      this.optimizeImages();
    }
    if (this.options.enableLazyLoading) {
      this.setupLazyLoading();
    }
    if (this.options.enableCodeSplitting) {
      this.setupCodeSplitting();
    }
    if (this.options.enableCaching) {
      this.setupCaching();
    }
  }

  private setupPerformanceMonitoring() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        this.captureMetrics();
      });
    }
  }

  private optimizeImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });
  }

  private setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  private setupCodeSplitting() {
    // Code splitting is typically handled at build time
    // This could include dynamic imports for route-based splitting
  }

  private setupCaching() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }

  private captureMetrics() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      this.metrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: 0, // Would need to be measured with LCP API
        firstInputDelay: 0, // Would need to be measured with FID API
        cumulativeLayoutShift: 0, // Would need to be measured with CLS API
        timeToInteractive: navigation.domInteractive - navigation.fetchStart,
      };
    }
  }

  getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  reportMetrics(): void {
    if (this.metrics) {
      console.log('Performance Metrics:', this.metrics);
    }
  }
}

export const performanceOptimizer = new PerformanceOptimizer();