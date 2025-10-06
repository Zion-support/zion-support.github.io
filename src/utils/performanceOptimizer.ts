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
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined') return;
  
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset['src'] || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
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
 * Prefetch resources
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
 * Measure page load performance
 */
export const measurePageLoad = (): WebVitalsMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const perfData = window.performance.timing;
  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (!perfData || !navigation) return null;

  return {
    FCP: navigation.responseStart - navigation.fetchStart,
    LCP: navigation.loadEventEnd - navigation.loadEventStart,
    FID: 0, // First Input Delay - requires user interaction
    CLS: 0, // Cumulative Layout Shift - requires layout shift observer
    TTFB: navigation.responseStart - navigation.requestStart,
    INP: 0 // Interaction to Next Paint - requires user interaction
  };
};

/**
 * Report Web Vitals metrics
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metrics);
  }
  
  // Send to analytics service
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'web_vitals', {
      event_category: 'Performance',
      event_label: 'Web Vitals',
      value: Math.round(metrics.LCP || 0)
    });
  }
};

/**
 * Check if WebP is supported
 */
export const shouldUseWebP = (): boolean => {
  if (typeof document === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Get connection quality
 */
export const getConnectionQuality = (): 'slow' | 'fast' | 'unknown' => {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return 'unknown';
  }
  
  const connection = (navigator as any).connection;
  const effectiveType = connection.effectiveType;
  
  if (effectiveType === 'slow-2g' || effectiveType === '2g') {
    return 'slow';
  }
  
  return 'fast';
};

/**
 * Check if heavy assets should be loaded
 */
export const shouldLoadHeavyAssets = (): boolean => {
  const connectionQuality = getConnectionQuality();
  const isSlowConnection = connectionQuality === 'slow';
  const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
  
  return !isSlowConnection && !isLowEndDevice;
};

/**
 * Request idle callback polyfill
 */
export const requestIdleCallback = (callback: () => void, options?: { timeout?: number }): number => {
  if (typeof window !== 'undefined' && window.requestIdleCallback) {
    return window.requestIdleCallback(callback, options);
  }
  
  return setTimeout(callback, 1) as unknown as number;
};

/**
 * Cancel idle callback polyfill
 */
export const cancelIdleCallback = (id: number): void => {
  if (typeof window !== 'undefined' && window.cancelIdleCallback) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
};

/**
 * Preload route
 */
export const preloadRoute = (route: string): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !window.PerformanceObserver) {
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
};

/**
 * Cache static assets
 */
export const cacheStaticAssets = (): void => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  
  const assets = [
    '/fonts/inter.woff2',
    '/icons/favicon.ico',
    '/images/logo.png'
  ];
  
  caches.open('static-assets').then(cache => {
    assets.forEach(asset => {
      cache.add(asset).catch(() => {
        // Ignore cache errors
      });
    });
  });
};

/**
 * Clear old caches
 */
export const clearOldCaches = (): void => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  
  caches.keys().then(cacheNames => {
    cacheNames.forEach(cacheName => {
      if (cacheName !== 'static-assets') {
        caches.delete(cacheName);
      }
    });
  });
};

/**
 * Check performance budget
 */
export const checkPerformanceBudget = (budget: PerformanceBudget): boolean => {
  if (typeof window === 'undefined' || !window.performance) return true;
  
  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return true;
  
  const loadTime = navigation.loadEventEnd - navigation.fetchStart;
  const isWithinBudget = loadTime <= budget.maxFirstLoad;
  
  if (!isWithinBudget) {
    console.warn('Performance budget exceeded:', {
      loadTime,
      maxFirstLoad: budget.maxFirstLoad
    });
  }
  
  return isWithinBudget;
};

/**
 * Add critical resource hints
 */
export const addCriticalResourceHints = (): void => {
  if (typeof document === 'undefined') return;
  
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossOrigin) {
      link.crossOrigin = hint.crossOrigin;
    }
    document.head.appendChild(link);
  });
};

// Performance metrics storage
const metrics = new Map<string, number>();

// Get performance metrics
const getMetrics = (): Record<string, number> => {
  return Object.fromEntries(metrics);
};

// Initialize all optimizations
const initialize = (): void => {
  lazyLoadImages();
  addCriticalResourceHints();
};

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
  checkPerformanceBudget,
  getMetrics,
  initialize
};