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
 * Lazy load images
 */
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined') return;

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
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    '/fonts/main.woff2',
    '/css/critical.css',
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

/**
 * Optimize scroll performance
 */
export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    // Scroll optimization logic here
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

/**
 * Get memory usage
 */
export const getMemoryUsage = (): Record<string, number> | null => {
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
  };
};

/**
 * Collect performance metrics
 */
export const collectPerformanceMetrics = (): WebVitalsMetrics => {
  if (typeof window === 'undefined') {
    return {};
  }

  const metrics: WebVitalsMetrics = {};

  // Get navigation timing
  if (performance.timing) {
    const timing = performance.timing;
    const navigationStart = timing.navigationStart;
    metrics.TTFB = timing.responseStart - navigationStart;
  }

  // Get paint timing
  if (performance.getEntriesByType) {
    const paintEntries = performance.getEntriesByType('paint');
    paintEntries.forEach((entry) => {
      if (entry.name === 'first-contentful-paint') {
        metrics.FCP = entry.startTime;
      }
    });
  }

  return metrics;
};

/**
 * Performance monitor
 */
export class PerformanceMonitor {
  private metrics: WebVitalsMetrics = {};
  private budget: PerformanceBudget;

  constructor(budget: PerformanceBudget) {
    this.budget = budget;
  }

  /**
   * Start monitoring
   */
  public startMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
  }

  /**
   * Observe Largest Contentful Paint
   */
  private observeLCP(): void {
    if (typeof PerformanceObserver === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      this.metrics.LCP = lastEntry.startTime;
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  /**
   * Observe First Input Delay
   */
  private observeFID(): void {
    if (typeof PerformanceObserver === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        this.metrics.FID = entry.processingStart - entry.startTime;
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
  }

  /**
   * Observe Cumulative Layout Shift
   */
  private observeCLS(): void {
    if (typeof PerformanceObserver === 'undefined') return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.CLS = clsValue;
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  }

  /**
   * Get current metrics
   */
  public getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  /**
   * Check if performance budget is exceeded
   */
  public checkBudget(): { exceeded: boolean; violations: string[] } {
    const violations: string[] = [];

    if (this.metrics.FCP && this.metrics.FCP > this.budget.maxFirstLoad) {
      violations.push(`FCP ${this.metrics.FCP}ms exceeds budget ${this.budget.maxFirstLoad}ms`);
    }

    if (this.metrics.LCP && this.metrics.LCP > this.budget.maxInteractive) {
      violations.push(`LCP ${this.metrics.LCP}ms exceeds budget ${this.budget.maxInteractive}ms`);
    }

    return {
      exceeded: violations.length > 0,
      violations,
    };
  }
}

/**
 * Default performance budget
 */
export const defaultPerformanceBudget: PerformanceBudget = {
  maxBundleSize: 500, // 500KB
  maxImageSize: 200, // 200KB
  maxFirstLoad: 2000, // 2 seconds
  maxInteractive: 3000, // 3 seconds
};

/**
 * Initialize performance optimization
 */
export const initializePerformanceOptimization = (): void => {
  if (typeof window === 'undefined') return;

  // Lazy load images
  lazyLoadImages();

  // Preload critical resources
  preloadCriticalResources();

  // Optimize scroll performance
  optimizeScrollPerformance();

  // Start performance monitoring
  const monitor = new PerformanceMonitor(defaultPerformanceBudget);
  monitor.startMonitoring();

  // Log performance metrics
  setTimeout(() => {
    const metrics = monitor.getMetrics();
    const budgetCheck = monitor.checkBudget();
    
    console.log('Performance Metrics:', metrics);
    if (budgetCheck.exceeded) {
      console.warn('Performance Budget Exceeded:', budgetCheck.violations);
    }
  }, 5000);
};