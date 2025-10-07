/**
 * Performance optimization utilities
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
  loadTime?: number;
  interactiveTime?: number;
  domContentLoaded?: number;
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
 * Preconnect to external domains
 */
export const preconnectDomains = (domains: string[]): void => {
  if (typeof document === 'undefined') return;
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined') return;
  if (!('IntersectionObserver' in window)) return;

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset['src'];
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
};

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Measure page load performance
 */
export const measurePageLoad = (): WebVitalsMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const perfData = window.performance.timing;
  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    FCP: navigation?.responseStart - navigation?.fetchStart,
    TTFB: perfData.responseStart - perfData.navigationStart,
    loadTime: perfData.loadEventEnd - perfData.navigationStart,
    interactiveTime: perfData.domInteractive - perfData.navigationStart,
    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart
  };
};

/**
 * Report Web Vitals to analytics
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  console.log('Web Vitals: ', metrics);

  // Send to analytics service
  if (typeof window !== 'undefined' && (window as any).gtag) {
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== undefined) {
        (window as any).gtag('event', key, {
          value: Math.round(value),
          event_category: 'Web Vitals',
          non_interaction: true
        });
      }
    });
  }
};

/**
 * Optimize images by detecting slow connections
 */
export const shouldUseWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Get connection quality
 */
export const getConnectionQuality = (): 'slow' | 'medium' | 'fast' => {
  if (typeof navigator === 'undefined') return 'medium';
  
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  if (!connection) return 'medium';
  
  const effectiveType = connection.effectiveType;
  if (effectiveType === 'slow-2g' || effectiveType === '2g') return 'slow';
  if (effectiveType === '3g') return 'medium';
  return 'fast';
};

/**
 * Adaptive loading based on network conditions
 */
export const shouldLoadHeavyAssets = (): boolean => {
  const quality = getConnectionQuality();
  const saveData = typeof navigator !== 'undefined' && (navigator as any).connection?.saveData;
  return quality === 'fast' && !saveData;
};

/**
 * Request Idle Callback wrapper with fallback
 */
export const requestIdleCallback = (callback: IdleRequestCallback): number => {
  if (typeof window === 'undefined') return 0;
  
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback);
  }
  
  // Fallback for browsers that don't support requestIdleCallback
  return (window as any).setTimeout(() => {
    const start = Date.now();
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
    });
  }, 1) as unknown as number;
};

/**
 * Cancel Idle Callback wrapper with fallback
 */
export const cancelIdleCallback = (id: number): void => {
  if (typeof window === 'undefined') return;
  
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    (window as any).clearTimeout(id);
  }
};

/**
 * Optimize bundle loading with route-based code splitting
 */
export const preloadRoute = (route: string): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'script';
  link.href = route;
  document.head.appendChild(link);
};

/**
 * Monitor long tasks (> 50ms) for performance debugging
 */
export const monitorLongTasks = (callback: (entries: PerformanceEntryList) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;
  
  try {
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  } catch (e) {
    console.warn('Long task monitoring not supported: ', e);
    return null;
  }
};

/**
 * Cache-first strategy for static assets
 */
export const cacheStaticAssets = async (urls: string[]): Promise<void> => {
  if (typeof caches === 'undefined') return;
  
  const cache = await caches.open('static-assets-v1');
  await cache.addAll(urls);
};

/**
 * Clear old caches
 */
export const clearOldCaches = async (currentVersion: string): Promise<void> => {
  if (typeof caches === 'undefined') return;
  
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter(name => name !== currentVersion)
      .map(name => caches.delete(name))
  );
};

/**
 * Performance budget checker
 */
export interface PerformanceBudget {
  maxBundleSize: number; // in KB
  maxImageSize: number; // in KB
  maxFirstLoad: number; // in ms
  maxInteractive: number; // in ms
}

export const checkPerformanceBudget = (budget: PerformanceBudget): {
  passed: boolean;
  violations: string[];
} => {
  const violations: string[] = [];
  
  if (typeof window === 'undefined' || !window.performance) {
    return { passed: true, violations };
  }
  
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  const interactiveTime = timing.domInteractive - timing.navigationStart;
  
  if (loadTime > budget.maxFirstLoad) {
    violations.push(`First load time (${loadTime}ms) exceeds budget (${budget.maxFirstLoad}ms)`);
  }
  
  if (interactiveTime > budget.maxInteractive) {
    violations.push(`Time to interactive (${interactiveTime}ms) exceeds budget (${budget.maxInteractive}ms)`);
  }
  
  return {
    passed: violations.length === 0,
    violations
  };
};

/**
 * Performance monitoring class
 */
class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();

  private constructor() {}

  public static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  public measurePerformance(name: string, fn: () => void): number {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    this.metrics.set(name, duration);
    return duration;
  }

  public lazyLoadImages(): void {
    lazyLoadImages();
  }

  public optimizeScroll(): void {
    // Optimize scroll performance
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

  public preloadCriticalResources(): void {
    // Preload critical resources
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

  public reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }

  public measurePageLoad(): WebVitalsMetrics | null {
    return measurePageLoad();
  }

  public prefetchResources(resources: string[]): void {
    prefetchResources(resources);
  }

  // Monitor long tasks
  public monitorLongTasks(callback: (entries: PerformanceEntryList) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();

export default {
  prefetchResources,
  preconnectDomains,
  lazyLoadImages,
  debounce,
  throttle,
  measurePageLoad,
  reportWebVitals,
  shouldUseWebP,
  getConnectionQuality,
  shouldLoadHeavyAssets,
  requestIdleCallback,
  cancelIdleCallback,
  preloadRoute,
  monitorLongTasks,
  cacheStaticAssets,
  clearOldCaches,
  checkPerformanceBudget
};