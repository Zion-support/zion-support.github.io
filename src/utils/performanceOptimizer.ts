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
 * Check if performance budget is exceeded
 */
export const checkPerformanceBudget = (
  metrics: WebVitalsMetrics,
  budget: PerformanceBudget
): { passed: boolean; violations: string[] } => {
  const violations: string[] = [];

  if (metrics.FCP && metrics.FCP > budget.maxFirstLoad) {
    violations.push(`FCP ${metrics.FCP}ms exceeds budget ${budget.maxFirstLoad}ms`);
  }

  if (metrics.LCP && metrics.LCP > budget.maxInteractive) {
    violations.push(`LCP ${metrics.LCP}ms exceeds budget ${budget.maxInteractive}ms`);
  }

  return {
    passed: violations.length === 0,
    violations
  };
};

/**
 * Get performance metrics from browser
 */
export const getPerformanceMetrics = (): WebVitalsMetrics => {
  if (typeof window === 'undefined') {
    return {};
  }

  const metrics: WebVitalsMetrics = {};

  // Get FCP
  const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
  if (fcpEntry) {
    metrics.FCP = fcpEntry.startTime;
  }

  // Get LCP
  const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
  if (lcpEntries.length > 0) {
    metrics.LCP = lcpEntries[lcpEntries.length - 1].startTime;
  }

  // Get TTFB
  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigationEntry) {
    metrics.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
  }

  return metrics;
};

/**
 * Optimize images for performance
 */
export const optimizeImage = (src: string, width?: number, quality: number = 80): string => {
  // This would typically integrate with an image optimization service
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  
  return `${src}?${params.toString()}`;
};

/**
 * Preload critical resources
 */
export const preloadResource = (href: string, as: string): void => {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

/**
 * Lazy load images
 */
export const lazyLoadImage = (img: HTMLImageElement): void => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
            observer.unobserve(image);
          }
        }
      });
    });

    observer.observe(img);
  } else {
    // Fallback for older browsers
    img.src = img.dataset.src || '';
  }
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

  startMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
  }

  private observeLCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.LCP = lastEntry.startTime;
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private observeFID(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.FID = entry.processingStart - entry.startTime;
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  private observeCLS(): void {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        this.metrics.CLS = clsValue;
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  checkBudget(): { passed: boolean; violations: string[] } {
    return checkPerformanceBudget(this.metrics, this.budget);
  }
}

/**
 * Default performance budget
 */
export const DEFAULT_BUDGET: PerformanceBudget = {
  maxBundleSize: 500, // 500KB
  maxImageSize: 200, // 200KB
  maxFirstLoad: 2000, // 2s
  maxInteractive: 3000 // 3s
};