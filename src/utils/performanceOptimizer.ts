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
 * Lazy load images with intersection observer
 */
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset['src']) {
          img.src = img.dataset['src'];
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
};

/**
 * Prefetch resources
 */
export const prefetchResources = (urls: string[]): void => {
  if (typeof window === 'undefined') return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Preconnect to domains
 */
export const preconnectDomains = (domains: string[]): void => {
  if (typeof window === 'undefined') return;

  domains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });
};

/**
 * Cache static assets
 */
export const cacheStaticAssets = async (): Promise<void> => {
  if (typeof window === 'undefined' || !('caches' in window)) return;

  const cache = await caches.open('static-assets-v1');
  const staticAssets = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/enterprise',
  ];

  try {
    await cache.addAll(staticAssets);
  } catch (error) {
    console.warn('Failed to cache static assets:', error);
  }
};

/**
 * Clear old caches
 */
export const clearOldCaches = async (): Promise<void> => {
  if (typeof window === 'undefined' || !('caches' in window)) return;

  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter((name) => name.startsWith('static-assets-v'));

  await Promise.all(
    oldCaches.map((cacheName) => caches.delete(cacheName))
  );
};

/**
 * Check performance budget
 */
export const checkPerformanceBudget = (budget: PerformanceBudget): boolean => {
  if (typeof window === 'undefined' || !window.performance) return true;

  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return true;

  const loadTime = navigation.loadEventEnd - navigation.fetchStart;
  const interactiveTime = navigation.domInteractive - navigation.fetchStart;

  return (
    loadTime <= budget.maxFirstLoad &&
    interactiveTime <= budget.maxInteractive
  );
};

/**
 * Performance Optimizer Class
 */
class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  public metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  // Lazy load images with intersection observer
  lazyLoadImages(): void {
    lazyLoadImages();
  }

  // Preload critical resources
  preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }

  // Optimize scroll performance
  optimizeScroll(): void {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Throttled scroll handling
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  // Monitor long tasks
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

  // Measure page load performance
  measurePageLoad(): WebVitalsMetrics | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    
    const timing = window.performance.timing;
    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
      FCP: navigation?.responseStart - navigation?.fetchStart,
      TTFB: timing.responseStart - timing.navigationStart
    };
  }

  // Report web vitals
  reportWebVitals(metrics: WebVitalsMetrics): void {
    // Send metrics to analytics service
    console.log('Web Vitals:', metrics);
  }

  // Initialize performance monitoring
  initialize(): void {
    this.lazyLoadImages();
    this.preloadCriticalResources();
    this.optimizeScroll();
  }
}

// Performance metrics storage
const metrics = new Map<string, number>();

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();

export default {
  prefetchResources,
  preconnectDomains,
  lazyLoadImages,
  preloadCriticalResources: () => performanceOptimizer.preloadCriticalResources(),
  debounce,
  throttle,
  cacheStaticAssets,
  clearOldCaches,
  checkPerformanceBudget,
  measurePageLoad: () => performanceOptimizer.measurePageLoad(),
  reportWebVitals: (metrics: WebVitalsMetrics) => performanceOptimizer.reportWebVitals(metrics),
  monitorLongTasks: (callback: (entries: PerformanceEntry[]) => void) => performanceOptimizer.monitorLongTasks(callback),
  initialize: () => performanceOptimizer.initialize(),
  getMetrics: () => {
    const metricsObj: Record<string, number> = {};
    performanceOptimizer.metrics.forEach((value, key) => {
      metricsObj[key] = value;
    });
    return metricsObj;
  }
};