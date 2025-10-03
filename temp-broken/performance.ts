/**
 * Performance monitoring and optimization utilities for Zion Tech Group
 */

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  bundleSize: number;
  resourceCount: number;
}

export interface PerformanceConfig {
  enableMonitoring: boolean;
  sampleRate: number;
  reportUrl?: string;
  thresholds: PerformanceThresholds;
}

export interface PerformanceThresholds {
  loadTime: number; // ms
  firstContentfulPaint: number; // ms
  largestContentfulPaint: number; // ms
  firstInputDelay: number; // ms
  cumulativeLayoutShift: number; // score
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private config: PerformanceConfig;
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  private constructor(config: PerformanceConfig) {
    this.config = config;
    this.initializeMonitoring();
  }

  static getInstance(config?: PerformanceConfig): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor(
        config || PerformanceMonitor.getDefaultConfig()
      );
    }
    return PerformanceMonitor.instance;
  }

  static getDefaultConfig(): PerformanceConfig {
    return {
      enableMonitoring: true,
      sampleRate: 1.0,
      thresholds: {
        loadTime: 3000,
        firstContentfulPaint: 1800,
        largestContentfulPaint: 2500,
        firstInputDelay: 100,
        cumulativeLayoutShift: 0.1,
      },
    };
  }

  private initializeMonitoring(): void {
    if (!this.config.enableMonitoring || typeof window === 'undefined') {
      return;
    }

    try {
      this.observeWebVitals();
      this.observeResourceTiming();
      this.measureBundleSize();
    } catch (error) {
      console.warn('Performance monitoring initialization failed:', error);
    }
  }

  private observeWebVitals(): void {
    // Observe Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
            renderTime: number;
          };
          this.metrics.largestContentfulPaint = lastEntry.renderTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (error) {
        console.warn('LCP observation failed:', error);
      }

      // Observe First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEventTiming) => {
            this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (error) {
        console.warn('FID observation failed:', error);
      }
    }
  }

  private observeResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          this.metrics.resourceCount = entries.length;
          
          // Calculate total load time
          const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigationEntry) {
            this.metrics.loadTime = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      } catch (error) {
        console.warn('Resource timing observation failed:', error);
      }
    }
  }

  private measureBundleSize(): void {
    if ('performance' in window && 'getEntriesByType' in performance) {
      try {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const jsResources = resources.filter(resource => 
          resource.name.includes('.js') && !resource.name.includes('node_modules')
        );
        
        this.metrics.bundleSize = jsResources.reduce((total, resource) => {
          return total + (resource.transferSize || 0);
        }, 0);
      } catch (error) {
        console.warn('Bundle size measurement failed:', error);
      }
    }
  }

  getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  reportMetrics(): void {
    if (!this.config.reportUrl || !this.config.enableMonitoring) {
      return;
    }

    try {
      fetch(this.config.reportUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metrics: this.metrics,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }),
      }).catch(error => {
        console.warn('Failed to report performance metrics:', error);
      });
    } catch (error) {
      console.warn('Performance metrics reporting failed:', error);
    }
  }

  checkThresholds(): { passed: boolean; violations: string[] } {
    const violations: string[] = [];
    
    if (this.metrics.loadTime && this.metrics.loadTime > this.config.thresholds.loadTime) {
      violations.push(`Load time ${this.metrics.loadTime}ms exceeds threshold ${this.config.thresholds.loadTime}ms`);
    }
    
    if (this.metrics.firstContentfulPaint && this.metrics.firstContentfulPaint > this.config.thresholds.firstContentfulPaint) {
      violations.push(`FCP ${this.metrics.firstContentfulPaint}ms exceeds threshold ${this.config.thresholds.firstContentfulPaint}ms`);
    }
    
    if (this.metrics.largestContentfulPaint && this.metrics.largestContentfulPaint > this.config.thresholds.largestContentfulPaint) {
      violations.push(`LCP ${this.metrics.largestContentfulPaint}ms exceeds threshold ${this.config.thresholds.largestContentfulPaint}ms`);
    }
    
    if (this.metrics.firstInputDelay && this.metrics.firstInputDelay > this.config.thresholds.firstInputDelay) {
      violations.push(`FID ${this.metrics.firstInputDelay}ms exceeds threshold ${this.config.thresholds.firstInputDelay}ms`);
    }
    
    if (this.metrics.cumulativeLayoutShift && this.metrics.cumulativeLayoutShift > this.config.thresholds.cumulativeLayoutShift) {
      violations.push(`CLS ${this.metrics.cumulativeLayoutShift} exceeds threshold ${this.config.thresholds.cumulativeLayoutShift}`);
    }

    return {
      passed: violations.length === 0,
      violations,
    };
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    PerformanceMonitor.instance = null as any;
  }
}

// Utility functions for performance optimization
export const optimizeImages = (images: HTMLImageElement[]): void => {
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
    
    if (!img.decoding) {
      img.decoding = 'async';
    }
  });
};

export const preloadCriticalResources = (resources: string[]): void => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
};

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

// Initialize performance monitoring
export const initializePerformanceMonitoring = (config?: Partial<PerformanceConfig>): PerformanceMonitor => {
  const defaultConfig = PerformanceMonitor.getDefaultConfig();
  const finalConfig = { ...defaultConfig, ...config };
  return PerformanceMonitor.getInstance(finalConfig);
};