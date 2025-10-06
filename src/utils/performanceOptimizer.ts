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
  loadTime?: number; // Page load time
  interactiveTime?: number; // Time to interactive
}

/**
 * Performance budget checker
 */
interface PerformanceBudget {
  maxBundleSize: number; // in KB
  maxImageSize: number; // in KB
  maxFirstLoad: number; // in ms
  maxInteractive: number; // in ms
}

/**
 * Resource hints for performance
 */
export const prefetchResources = (urls: string[]): void => {
  if (typeof document === 'undefined') return;
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait) as unknown as number;
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
class PerformanceOptimizer {
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  /**
   * Track performance metrics
   */
  trackPerformance(name: string, value: number, unit: string = 'ms'): void {
    this.metrics.set(name, value);
    console.log(`Performance: ${name} = ${value}${unit}`);
  }

  /**
   * Get all metrics
   */
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  /**
   * Measure page load performance
   */
  measurePageLoad(): WebVitalsMetrics | null {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return null;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      TTFB: navigation.responseStart - navigation.requestStart,
      loadTime: navigation.loadEventEnd - navigation.fetchStart,
      interactiveTime: navigation.domInteractive - navigation.fetchStart,
    };
  }

  /**
   * Monitor long tasks
   */
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return null;
    }

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        callback(entries);
      });
      
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
      return observer;
    } catch (error) {
      console.warn('Long task monitoring not supported:', error);
      return null;
    }
  }

  /**
   * Report Web Vitals
   */
  reportWebVitals(metrics: WebVitalsMetrics): void {
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== undefined) {
        this.trackPerformance(`web_vital_${key}`, value);
      }
    });
  }

  /**
   * Lazy load images
   */
  lazyLoadImages(): void {
    if (typeof document === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset['src'] || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  /**
   * Add critical resource hints
   */
  addCriticalResourceHints(urls: string[]): void {
    if (typeof document === 'undefined') return;
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Cleanup observers
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export default for compatibility
export default performanceOptimizer;
