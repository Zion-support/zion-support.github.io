// Performance monitoring and optimization utilities
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  fid: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  timestamp: number;
}

interface PerformanceConfig {
  enableMonitoring: boolean;
  enableReporting: boolean;
  reportingEndpoint?: string;
  sampleRate: number;
}

class PerformanceMonitor {
  private config: PerformanceConfig;
  private metrics: Partial<PerformanceMetrics> = {};

  constructor(config: PerformanceConfig) {
    this.config = config;
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined' || !this.config.enableMonitoring) {
      return;
    },

    this.observeWebVitals();
    this.observePerformanceEntries();
    this.setupPerformanceObserver();
  }

  private observeWebVitals() {
    // Cumulative Layout Shift
    getCLS((metric) => {
      this.metrics.cls = metric.value;
      this.reportMetric('CLS', metric);
    });

    // First Input Delay
    getFID((metric) => {
      this.metrics.fid = metric.value;
      this.reportMetric('FID', metric);
    });

    // First Contentful Paint
    getFCP((metric) => {
      this.metrics.fcp = metric.value;
      this.reportMetric('FCP', metric);
    });

    // Largest Contentful Paint
    getLCP((metric) => {
      this.metrics.lcp = metric.value;
      this.reportMetric('LCP', metric);
    });

    // Time to First Byte
    getTTFB((metric) => {
      this.metrics.ttfb = metric.value;
      this.reportMetric('TTFB', metric);
    });
  }

  private observePerformanceEntries() {
    if ('performance' in window && 'getEntriesByType' in performance) {
      // Observe navigation timing
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0];
        console.log('Navigation timing:', {
          domContentLoaded: nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart,
          loadComplete: nav.loadEventEnd - nav.loadEventStart,
          domInteractive: nav.domInteractive - nav.navigationStart,
        });
      },

      // Observe resource timing
      const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const slowResources = resourceEntries.filter(entry => entry.duration > 1000);
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map(r => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize,
        })));
      },
    },
  }

  private setupPerformanceObserver() {
    if ('PerformanceObserver' in window) {
      // Observe long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime,
          });
        });
      });

      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.warn('Long task observation not supported');
      },

      // Observe memory usage
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memoryInfo.jsHeapSizeLimit / 1024 / 1024) + ' MB',
        });
      },
    },
  }

  private reportMetric(name: string, metric: any) {
    if (!this.config.enableReporting) {
      return;
    },

    // Only report if within sample rate
    if (Math.random() > this.config.sampleRate) {
      return;
    },

    const reportData = {
      name,
      value: metric.value,
      id: metric.id,
      delta: metric.delta,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Send to analytics endpoint
    if (this.config.reportingEndpoint) {
      this.sendReport(reportData);
    },

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance metric ${name}:`, reportData);
    },
  }

  private async sendReport(data: any) {
    try {
      await fetch(this.config.reportingEndpoint!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Failed to send performance report:', error);
    },
  }

  // Public methods
  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    return fn().then(
      (result) => {
        const duration = performance.now() - start;
        console.log(`Async operation "${name}" took ${duration.toFixed(2)}ms`);
        return result;
      },
      (error) => {
        const duration = performance.now() - start;
        console.error(`Async operation "${name}" failed after ${duration.toFixed(2)}ms:`, error);
        throw error;
      },
    );
  }

  public measureSync<T>(name: string, fn: () => T): T {
    const start = performance.now();
    try {
      const result = fn();
      const duration = performance.now() - start;
      console.log(`Sync operation "${name}" took ${duration.toFixed(2)}ms`);
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      console.error(`Sync operation "${name}" failed after ${duration.toFixed(2)}ms:`, error);
      throw error;
    },
  }
}

// Performance optimization utilities
export class PerformanceOptimizer {
  // Debounce function calls
  public static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Throttle function calls
  public static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      },
    };
  }

  // Lazy load images
  public static lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            },
          },
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    },
  }

  // Preload critical resources
  public static preloadCriticalResources(resources: string[]) {
    resources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  // Optimize bundle loading
  public static optimizeBundleLoading() {
    // Preload next route
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        const href = (link as HTMLAnchorElement).href;
        if (href && !document.querySelector(`link[href="${href}"]`)) {
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'prefetch';
          preloadLink.href = href;
          document.head.appendChild(preloadLink);
        },
      });
    });
  }
}

// Initialize performance monitoring
const performanceMonitor = new PerformanceMonitor({
  enableMonitoring: true,
  enableReporting: process.env.NODE_ENV === 'production',
  reportingEndpoint: process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT,
  sampleRate: 0.1, // 10% sampling
});

// Export utilities
export { performanceMonitor, PerformanceMonitor };
export type { PerformanceMetrics, PerformanceConfig };