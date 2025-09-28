/**
 * Advanced Performance Optimizations
 * Comprehensive performance enhancement utilities for the Zion Tech Group website
 */

// Performance monitoring and optimization utilities
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  constructor() {
    this.initializePerformanceMonitoring();
  }

  private initializePerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor resource loading
    this.observeResourceTiming();
    
    // Monitor long tasks
    this.observeLongTasks();
    
    // Monitor layout shifts
    this.observeLayoutShifts();
  }

  private observeWebVitals(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              this.metrics.set('LCP', entry.startTime);
            } else if (entry.entryType === 'first-input') {
              this.metrics.set('FID', (entry as any).processingStart - entry.startTime);
            } else if (entry.entryType === 'layout-shift') {
              if (!(entry as any).hadRecentInput) {
                this.metrics.set('CLS', (this.metrics.get('CLS') || 0) + (entry as any).value);
              }
            }
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        this.observers.push(observer);
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }
    }
  }

  private observeResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'resource') {
              const resourceEntry = entry as PerformanceResourceTiming;
              const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
              
              // Track slow resources
              if (loadTime > 1000) {
                console.warn(`Slow resource detected: ${resourceEntry.name} (${loadTime}ms)`);
              }
            }
          }
        });

        observer.observe({ entryTypes: ['resource'] });
        this.observers.push(observer);
      } catch (error) {
        console.warn('Resource timing observer not supported:', error);
      }
    }
  }

  private observeLongTasks(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.warn(`Long task detected: ${entry.duration}ms`);
          }
        });

        observer.observe({ entryTypes: ['longtask'] });
        this.observers.push(observer);
      } catch (error) {
        console.warn('Long task observer not supported:', error);
      }
    }
  }

  private observeLayoutShifts(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              const clsValue = (entry as any).value;
              if (clsValue > 0.1) {
                console.warn(`Significant layout shift detected: ${clsValue}`);
              }
            }
          }
        });

        observer.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(observer);
      } catch (error) {
        console.warn('Layout shift observer not supported:', error);
      }
    }
  }

  // Image optimization
  optimizeImages(): void {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });
  }

  // Lazy loading implementation
  setupLazyLoading(): void {
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

  // Preload critical resources
  preloadCriticalResources(): void {
    const criticalResources = [
      '/assets/css/main.css',
      '/assets/js/main.js',
      '/assets/js/vendor-react.js'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  // Bundle splitting optimization
  optimizeBundleSplitting(): void {
    // Dynamically import non-critical components
    const nonCriticalComponents = [
      'AdvancedAnalyticsDashboard',
      'ComprehensiveSystemDashboard',
      'EnhancedPerformanceDashboard'
    ];

    nonCriticalComponents.forEach((component) => {
      // This would be implemented with dynamic imports in the actual components
      console.log(`Optimizing bundle splitting for ${component}`);
    });
  }

  // Memory optimization
  optimizeMemory(): void {
    // Clean up unused event listeners
    this.cleanupEventListeners();
    
    // Clear unused caches
    this.clearUnusedCaches();
    
    // Optimize garbage collection
    this.optimizeGarbageCollection();
  }

  private cleanupEventListeners(): void {
    // Remove event listeners from removed DOM elements
    const removedElements = document.querySelectorAll('[data-removed="true"]');
    removedElements.forEach((element) => {
      element.remove();
    });
  }

  private clearUnusedCaches(): void {
    // Clear unused service worker caches
    if ('caches' in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          if (cacheName.includes('unused')) {
            caches.delete(cacheName);
          }
        });
      });
    }
  }

  private optimizeGarbageCollection(): void {
    // Force garbage collection if available
    if ('gc' in window) {
      (window as any).gc();
    }
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Generate performance report
  generateReport(): string {
    const metrics = this.getMetrics();
    const report = {
      timestamp: new Date().toISOString(),
      metrics,
      recommendations: this.generateRecommendations(metrics)
    };

    return JSON.stringify(report, null, 2);
  }

  private generateRecommendations(metrics: Record<string, number>): string[] {
    const recommendations: string[] = [];

    if (metrics.LCP && metrics.LCP > 2500) {
      recommendations.push('LCP is too high. Consider optimizing images and critical CSS.');
    }

    if (metrics.FID && metrics.FID > 100) {
      recommendations.push('FID is too high. Consider reducing JavaScript execution time.');
    }

    if (metrics.CLS && metrics.CLS > 0.1) {
      recommendations.push('CLS is too high. Consider fixing layout shifts.');
    }

    return recommendations;
  }

  // Cleanup
  destroy(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();

// Utility functions
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Performance monitoring hooks
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = React.useState<Record<string, number>>({});

  React.useEffect(() => {
    const updateMetrics = () => {
      setMetrics(performanceOptimizer.getMetrics());
    };

    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  return metrics;
};

// React import for hooks
import React from 'react';