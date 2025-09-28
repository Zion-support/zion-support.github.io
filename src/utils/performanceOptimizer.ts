/**
 * Performance Optimization Utility
 * Provides advanced performance monitoring and optimization features
 */

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  interactionToNextPaint: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableResourcePreloading: boolean;
  enableServiceWorker: boolean;
  enableCompression: boolean;
  enableCaching: boolean;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics | null = null;
  private config: OptimizationConfig;
  private observers: PerformanceObserver[] = [];

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enableImageOptimization: true,
      enableResourcePreloading: true,
      enableServiceWorker: true,
      enableCompression: true,
      enableCaching: true,
      ...config
    };
  }

  /**
   * Initialize performance monitoring and optimizations
   */
  initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupPerformanceObservers();
    this.optimizeImages();
    this.preloadCriticalResources();
    this.enableLazyLoading();
    this.optimizeCaching();
    
    // Monitor performance metrics
    this.measurePerformance();
  }

  /**
   * Setup performance observers for real-time monitoring
   */
  private setupPerformanceObservers(): void {
    // Core Web Vitals observer
    if ('PerformanceObserver' in window) {
      try {
        const vitalsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.handleVitalMetric(entry);
          }
        });
        vitalsObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        this.observers.push(vitalsObserver);
      } catch (error) {
        console.warn('Failed to setup vitals observer:', error);
      }
    }
  }

  /**
   * Handle Core Web Vitals metrics
   */
  private handleVitalMetric(entry: PerformanceEntry): void {
    const metric = {
      name: entry.name,
      value: entry.startTime,
      delta: entry.startTime,
      id: entry.name,
      navigationType: 'navigate'
    };

    // Send to analytics or logging service
    this.sendMetric(metric);
  }

  /**
   * Optimize images for better performance
   */
  private optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add error handling
      img.addEventListener('error', () => {
        console.warn('Image failed to load:', img.src);
      });
    });
  }

  /**
   * Preload critical resources
   */
  private preloadCriticalResources(): void {
    if (!this.config.enableResourcePreloading) return;

    const criticalResources = [
      '/og-image.png',
      '/favicon.ico',
      '/manifest.json'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'image';
      document.head.appendChild(link);
    });
  }

  /**
   * Enable lazy loading for components
   */
  private enableLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    // Lazy load components using Intersection Observer
    if ('IntersectionObserver' in window) {
      const lazyElements = document.querySelectorAll('[data-lazy]');
      const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('loaded');
            lazyObserver.unobserve(element);
          }
        });
      });

      lazyElements.forEach(element => lazyObserver.observe(element));
    }
  }

  /**
   * Optimize caching strategies
   */
  private optimizeCaching(): void {
    if (!this.config.enableCaching) return;

    // Set cache headers for static assets
    const cacheableResources = ['css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'woff', 'woff2'];
    
    // This would typically be handled by the server/CDN
    // Here we're just setting up the strategy
    console.log('Caching strategy configured for:', cacheableResources);
  }

  /**
   * Measure current performance metrics
   */
  private measurePerformance(): void {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          this.calculateMetrics();
        }, 1000);
      });
    }
  }

  /**
   * Calculate performance metrics
   */
  private calculateMetrics(): void {
    if (!('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    this.metrics = {
      loadTime: navigation.loadEventEnd - navigation.fetchStart,
      firstContentfulPaint: this.getMetric('first-contentful-paint'),
      largestContentfulPaint: this.getMetric('largest-contentful-paint'),
      cumulativeLayoutShift: this.getMetric('layout-shift'),
      firstInputDelay: this.getMetric('first-input'),
      interactionToNextPaint: this.getMetric('interaction-to-next-paint')
    };

    this.reportMetrics();
  }

  /**
   * Get specific performance metric
   */
  private getMetric(metricName: string): number {
    const entries = performance.getEntriesByName(metricName);
    return entries.length > 0 ? entries[0].startTime : 0;
  }

  /**
   * Report metrics to analytics
   */
  private reportMetrics(): void {
    if (!this.metrics) return;

    // Send to analytics service
    console.log('Performance Metrics:', this.metrics);
    
    // You can integrate with Google Analytics, Plausible, etc.
    if ('gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(this.metrics.largestContentfulPaint)
      });
    }
  }

  /**
   * Send metric to external service
   */
  private sendMetric(metric: any): void {
    // Implement your analytics integration here
    console.log('Metric:', metric);
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  /**
   * Cleanup observers
   */
  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export class for custom instances
export { PerformanceOptimizer };
export type { PerformanceMetrics, OptimizationConfig };