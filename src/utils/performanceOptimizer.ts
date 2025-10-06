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
  interactiveTime?: number; // Interactive time
  domContentLoaded?: number; // DOM content loaded time
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
 * Performance Optimizer Class
 */
class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();
  private budget: PerformanceBudget = {
    maxBundleSize: 500, // 500KB
    maxImageSize: 200, // 200KB
    maxFirstLoad: 3000, // 3s
    maxInteractive: 5000, // 5s
  };

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  /**
   * Measure page load timing
   */
  measurePageLoad(): WebVitalsMetrics | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      loadTime: navigation.loadEventEnd - navigation.fetchStart,
      interactiveTime: navigation.domInteractive - navigation.fetchStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
      TTFB: navigation.responseStart - navigation.fetchStart,
    };
  }

  /**
   * Report Web Vitals
   */
  reportWebVitals(metrics: WebVitalsMetrics): void {
    if (typeof window === 'undefined') return;

    // Log metrics for debugging
    console.log('Web Vitals:', metrics);

    // Send to analytics if available
    if ('gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: 'Page Load',
        value: Math.round(metrics.loadTime || 0),
      });
    }
  }

  /**
   * Lazy load images
   */
  lazyLoadImages(): void {
    if (typeof window === 'undefined') return;

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
      return observer;
    } catch (error) {
      console.warn('Long task monitoring not supported:', error);
      return null;
    }
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(): void {
    if (typeof document === 'undefined') return;

    const criticalResources = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ];

    criticalResources.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = 'style';
      document.head.appendChild(link);
    });
  }

  /**
   * Check performance budget
   */
  checkPerformanceBudget(): boolean {
    const metrics = this.measurePageLoad();
    if (!metrics) return true;

    const loadTime = metrics.loadTime || 0;
    return loadTime <= this.budget.maxFirstLoad;
  }

  /**
   * Clear old caches
   */
  clearOldCaches(): void {
    if (typeof window === 'undefined' || !('caches' in window)) return;

    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        if (cacheName.includes('old-') || cacheName.includes('v1-')) {
          caches.delete(cacheName);
        }
      });
    });
  }

  /**
   * Get performance metrics
   */
  getMetrics(): Record<string, number> {
    const result: Record<string, number> = {};
    this.metrics.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }

  /**
   * Initialize performance monitoring
   */
  initialize(): void {
    this.preloadCriticalResources();
    this.lazyLoadImages();
    
    const metrics = this.measurePageLoad();
    if (metrics) {
      this.reportWebVitals(metrics);
    }
  }
}

// Create singleton instance
const performanceOptimizer = PerformanceOptimizer.getInstance();

// Get performance metrics
const getMetrics = (): Record<string, number> => {
  return performanceOptimizer.getMetrics();
};

// Export utility functions
export const performanceUtils = {
  measurePageLoad: () => performanceOptimizer.measurePageLoad(),
  reportWebVitals: (metrics: WebVitalsMetrics) => performanceOptimizer.reportWebVitals(metrics),
  lazyLoadImages: () => performanceOptimizer.lazyLoadImages(),
  monitorLongTasks: (callback: (entries: PerformanceEntry[]) => void) => 
    performanceOptimizer.monitorLongTasks(callback),
  preloadCriticalResources: () => performanceOptimizer.preloadCriticalResources(),
  measurePageLoadMetrics: () => performanceOptimizer.measurePageLoad(),
  getMetrics,
  clearOldCaches: () => performanceOptimizer.clearOldCaches(),
  checkPerformanceBudget: () => performanceOptimizer.checkPerformanceBudget(),
};

// Export the instance and utility functions
export {
  performanceOptimizer,
  PerformanceOptimizer,
};

// Default export
export default performanceOptimizer;