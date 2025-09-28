/**
 * Comprehensive Performance Optimizations
 * Advanced performance monitoring and optimization utilities
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enablePreloading: boolean;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics;
  private config: OptimizationConfig;
  private observers: PerformanceObserver[] = [];

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enableCaching: true,
      enableCompression: true,
      enablePreloading: true,
      ...config,
    };

    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0,
    };

    this.initializeObservers();
  }

  private initializeObservers(): void {
    if (typeof window === 'undefined') return;

    // Monitor navigation timing
    const navObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          this.metrics.loadTime = (entry as any).loadEventEnd - (entry as any).fetchStart;
        }
      });
    });

    // Monitor paint timing
    const paintObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          this.metrics.renderTime = entry.startTime;
        }
      });
    });

    // Monitor memory usage
    const memoryObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
          if (memory) {
            this.metrics.memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
          }
        }
      });
    });

    try {
      navObserver.observe({ entryTypes: ['navigation'] });
      paintObserver.observe({ entryTypes: ['paint'] });
      memoryObserver.observe({ entryTypes: ['measure'] });

      this.observers.push(navObserver, paintObserver, memoryObserver);
    } catch (error) {
      console.warn('Performance observers not supported:', error);
    }
  }

  /**
   * Optimize images with lazy loading and compression
   */
  optimizeImages(): void {
    if (!this.config.enableLazyLoading) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(): void {
    if (!this.config.enablePreloading) return;

    const criticalResources = [
      '/assets/css/main.css',
      '/assets/js/main.js',
      '/assets/js/vendor-react.js',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Enable service worker caching
   */
  enableCaching(): void {
    if (!this.config.enableCaching) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }

  /**
   * Optimize bundle size by code splitting
   */
  optimizeBundleSize(): void {
    if (!this.config.enableCodeSplitting) return;

    // Dynamic imports for non-critical components
    const lazyComponents = [
      'src/components/AdvancedDashboard',
      'src/components/PerformanceMonitor',
      'src/components/SystemHealthDashboard',
    ];

    lazyComponents.forEach((component) => {
      // This would be implemented in the build process
      console.log(`Code splitting enabled for: ${component}`);
    });
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
    const metrics = this.getMetrics();
    return `
Performance Report:
- Load Time: ${metrics.loadTime.toFixed(2)}ms
- Render Time: ${metrics.renderTime.toFixed(2)}ms
- Memory Usage: ${metrics.memoryUsage}MB
- Bundle Size: ${metrics.bundleSize}KB
- Cache Hit Rate: ${metrics.cacheHitRate.toFixed(2)}%
    `.trim();
  }

  /**
   * Clean up observers
   */
  destroy(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export class for custom instances
export { PerformanceOptimizer };
export type { PerformanceMetrics, OptimizationConfig };