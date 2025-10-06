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
 * Check if element is in viewport
 */
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Lazy load images
 */
export const lazyLoadImages = (): void => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset['src'] || '';
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = (urls: string[]): void => {
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * Performance monitoring
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
   * Get all metrics
   */
  getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  /**
   * Check if performance budget is exceeded
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
}

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = (budget: PerformanceBudget): PerformanceMonitor => {
  const monitor = new PerformanceMonitor(budget);

  // Monitor Web Vitals
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS((metric: any) => monitor.recordMetric('CLS', metric.value));
      onINP((metric: any) => monitor.recordMetric('INP', metric.value));
      onFCP((metric: any) => monitor.recordMetric('FCP', metric.value));
      onLCP((metric: any) => monitor.recordMetric('LCP', metric.value));
      onTTFB((metric: any) => monitor.recordMetric('TTFB', metric.value));
    });
  }

  return monitor;
};

/**
 * Performance optimizer instance for monitoring long tasks
 */
export const performanceOptimizer = {
  monitorLongTasks: (callback: (entries: PerformanceEntry[]) => void) => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return { disconnect: () => {} };
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      callback(entries);
    });

    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  },

  lazyLoadImages: () => {
    if (typeof window === 'undefined') return;
    lazyLoadImages();
  },

  measurePageLoad: () => {
    if (typeof window === 'undefined') return null;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstByte: navigation.responseStart - navigation.requestStart,
      totalLoadTime: navigation.loadEventEnd - (navigation as any).navigationStart,
    };
  },

  reportWebVitals: (metrics: any) => {
    console.log('Web Vitals:', metrics);
  }
};