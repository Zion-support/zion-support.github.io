/**
 * Performance Optimizer Utility
 * Comprehensive performance monitoring and optimization tools
 */

/**
 * Web Vitals metrics tracking
 */
export interface WebVitalsMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
  INP?: number; // Interaction to Next Paint
}

/**
 * Performance budget checker
 */
export interface PerformanceBudget {
  maxBundleSize: number; // in KB
  maxImageSize: number; // in KB
  maxFirstLoad: number; // in ms
  maxInteractive: number; // in ms
}

/**
 * Debounce function
 */
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

/**
 * Throttle function
 */
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

/**
 * Performance monitoring class
 */
export class PerformanceMonitor {
  private metrics: WebVitalsMetrics = {};
  private budget: PerformanceBudget;

  constructor(budget: PerformanceBudget) {
    this.budget = budget;
  }

  /**
   * Record a performance metric
   */
  recordMetric(name: keyof WebVitalsMetrics, value: number): void {
    this.metrics[name] = value;
  }

  /**
   * Check if performance is within budget
   */
  checkBudget(): { passed: boolean; violations: string[] } {
    const violations: string[] = [];

    if (this.metrics.FCP && this.metrics.FCP > this.budget.maxFirstLoad) {
      violations.push(`FCP ${this.metrics.FCP}ms exceeds budget ${this.budget.maxFirstLoad}ms`);
    }

    if (this.metrics.LCP && this.metrics.LCP > this.budget.maxInteractive) {
      violations.push(`LCP ${this.metrics.LCP}ms exceeds budget ${this.budget.maxInteractive}ms`);
    }

    return {
      passed: violations.length === 0,
      violations
    };
  }

  /**
   * Get current metrics
   */
  getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  /**
   * Start monitoring
   */
  start(): void {
    // Implementation for starting monitoring
    console.log('Performance monitoring started');
  }
}

/**
 * Image optimization utilities
 */
export const imageOptimizer = {
  /**
   * Generate responsive image srcset
   */
  generateSrcSet: (baseUrl: string, widths: number[]): string => {
    return widths
      .map(width => `${baseUrl}?w=${width} ${width}w`)
      .join(', ');
  },

  /**
   * Check if image needs optimization
   */
  needsOptimization: (fileSize: number, budget: number): boolean => {
    return fileSize > budget;
  }
};

/**
 * Bundle size analyzer
 */
export const bundleAnalyzer = {
  /**
   * Check bundle size against budget
   */
  checkBundleSize: (actualSize: number, budget: number): boolean => {
    return actualSize <= budget;
  },

  /**
   * Calculate compression ratio
   */
  calculateCompressionRatio: (originalSize: number, compressedSize: number): number => {
    return ((originalSize - compressedSize) / originalSize) * 100;
  }
};

/**
 * Resource preloading utilities
 */
export const resourcePreloader = {
  /**
   * Preload critical resources
   */
  preloadCritical: (resources: string[]): void => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  },

  /**
   * Prefetch non-critical resources
   */
  prefetchResources: (resources: string[]): void => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }
};

/**
 * Performance reporting
 */
export const performanceReporter = {
  /**
   * Send performance data to analytics
   */
  reportMetrics: (metrics: WebVitalsMetrics): void => {
    // Implementation would send to analytics service
    console.log('Performance metrics:', metrics);
  },

  /**
   * Generate performance report
   */
  generateReport: (metrics: WebVitalsMetrics): string => {
    return JSON.stringify(metrics, null, 2);
  }
};

/**
 * Main performance optimizer class
 */
export class PerformanceOptimizer {
  private monitor: PerformanceMonitor;
  private budget: PerformanceBudget;

  constructor(budget: PerformanceBudget) {
    this.monitor = new PerformanceMonitor(budget);
    this.budget = budget;
  }

  /**
   * Initialize performance optimization
   */
  initialize(): void {
    // Initialize performance monitoring
    this.monitor.start();
  }

  /**
   * Get performance metrics
   */
  getMetrics(): WebVitalsMetrics {
    return this.monitor.getMetrics();
  }

  /**
   * Check performance budget
   */
  checkBudget(): { passed: boolean; violations: string[] } {
    return this.monitor.checkBudget();
  }

  /**
   * Monitor long tasks
   */
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ entryTypes: ['longtask'] });
      return observer;
    } catch (e) {
      console.warn('Long task observer not supported');
      return null;
    }
  }

  /**
   * Lazy load images
   */
  lazyLoadImages(): void {
    // Implementation for lazy loading images
    console.log('Lazy loading images');
  }

  /**
   * Measure page load
   */
  measurePageLoad(): void {
    // Implementation for measuring page load
    console.log('Measuring page load');
  }

  /**
   * Report web vitals
   */
  reportWebVitals(): void {
    // Implementation for reporting web vitals
    console.log('Reporting web vitals');
  }
}

// Export a default instance
export const performanceOptimizer = new PerformanceOptimizer({
  maxBundleSize: 1000,
  maxImageSize: 500,
  maxFirstLoad: 3000,
  maxInteractive: 5000
});