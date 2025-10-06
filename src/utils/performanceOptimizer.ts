<<<<<<< HEAD
// Performance optimization utilities
export default {
  initialize() {
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      console.log('Performance optimizer initialized');
    }
  },
  
  lazyLoadImages() {
    // Lazy load images for better performance
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      images.forEach(img => imageObserver.observe(img));
    }
  },
  
  measurePageLoad() {
    // Measure page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart);
      });
    }
  },
  
  reportWebVitals() {
    // Report web vitals
    if (typeof window !== 'undefined') {
      console.log('Web vitals reporting initialized');
    }
  }
};
=======
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e6f9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> 71655f282840ed9a4a2a6696e410390223898ad3
>>>>>>> main
>>>>>>> main
 */
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
export interface PerformanceBudget {
=======
interface PerformanceBudget {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
interface PerformanceBudget {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
  maxBundleSize: number; // in KB
  maxImageSize: number; // in KB
  maxFirstLoad: number; // in ms
  maxInteractive: number; // in ms
}

<<<<<<< HEAD
// Performance optimization utilities
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  // Lazy load images with intersection observer
  lazyLoadImages(): void {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
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

  // Measure performance metrics
  measurePerformance(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    this.metrics.set(name, duration);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
    }
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Add critical resource hints method
  addCriticalResourceHints(): void {
    if (typeof document === 'undefined') return;
    
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
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
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  // Add Web Vitals reporting method
  reportWebVitals(metrics: WebVitalsMetrics): void {
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', metrics);
    }

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
      const gtag = (window as unknown as { gtag: (command: string, event: string, data: Record<string, unknown>) => void }).gtag;
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== undefined) {
          gtag('event', key, {
            value: Math.round(value),
            event_category: 'Web Vitals',
            non_interaction: true
          });
        }
      });
    }
  }

=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
  // Measure page load performance
  measurePageLoad(): WebVitalsMetrics | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    
    const timing = window.performance.timing;
    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    const interactiveTime = timing.domInteractive - timing.navigationStart;
    
    return { 
      loadTime, 
      interactiveTime,
      FCP: navigation?.responseStart - navigation?.fetchStart,
      TTFB: timing.responseStart - timing.navigationStart
    };
  }

<<<<<<< HEAD
=======
  // Report web vitals
  reportWebVitals(metrics: WebVitalsMetrics): void {
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', metrics);
    }

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
  }

>>>>>>> main
  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
    this.measurePerformance('addCriticalResourceHints', () => this.addCriticalResourceHints());
  }
}

/**
=======
/**
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
 * Debounce function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
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
export const throttle = <T extends (...args: unknown[]) => unknown>(
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * Lazy load images
 */
export const lazyLoadImages = (): void => {
<<<<<<< HEAD
  if (typeof window === 'undefined') return;
<<<<<<< HEAD
  if (!('IntersectionObserver' in window)) return;
<<<<<<< HEAD

=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  const imageObserver = new IntersectionObserver(
    entries => {
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
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );
<<<<<<< HEAD

=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
=======
 * Check if performance monitoring is supported
 */
export const isPerformanceSupported = (): boolean => {
  return typeof window !== 'undefined' && 'performance' in window;
};

/**
 * Get performance metrics
 */
export const getPerformanceMetrics = (): WebVitalsMetrics => {
  if (!isPerformanceSupported()) {
    return {};
  }

  const metrics: WebVitalsMetrics = {};
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (navigation) {
    metrics.TTFB = navigation.responseStart - navigation.requestStart;
  }

  return metrics;
};

/**
 * Check performance budget
 */
export const checkPerformanceBudget = (budget: PerformanceBudget): boolean => {
  const metrics = getPerformanceMetrics();
  
  // Check bundle size (would need to be passed in)
  // Check image sizes (would need to be measured)
  // Check load times
  if (metrics.TTFB && metrics.TTFB > budget.maxFirstLoad) {
    return false;
  }

  return true;
};

/**
 * Optimize images
 */
export const optimizeImages = (): void => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
  });
};

<<<<<<< HEAD
/**
 * Preload critical resources
 */
export const preloadCriticalResources = (resources: string[]): void => {
  if (typeof window === 'undefined') return;

  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = 'script';
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
    document.head.appendChild(link);
  });
};

/**
<<<<<<< HEAD
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = (): void => {
  if (!isPerformanceSupported()) return;

<<<<<<< HEAD
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
=======
  if (typeof document === 'undefined') return;
  
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
<<<<<<< HEAD
<<<<<<< HEAD
        img.classList.remove('lazy');
=======
=======
=======
<<<<<<< HEAD
>>>>>>> main
        img.src = img.dataset['src'] || '';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
        img.removeAttribute('data-src');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
/**
 * Performance monitoring class
 */
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
/**
 * Optimize scroll performance
 */
<<<<<<< HEAD
export const measurePageLoad = (): WebVitalsMetrics | null => {
<<<<<<< HEAD
  if (typeof window === 'undefined' || !window.performance) return null;
<<<<<<< HEAD
  
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
=======
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    interactiveTime: navigation.domInteractive - navigation.fetchStart,
    TTFB: navigation.responseStart - navigation.fetchStart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    interactiveTime: navigation.domInteractive - navigation.fetchStart,
    TTFB: navigation.responseStart - navigation.fetchStart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
=======
export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    // Scroll optimization logic here
    ticking = false;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
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
<<<<<<< HEAD
 * Monitor long tasks
<<<<<<< HEAD
=======
 */
export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    callback(entries);
  });

  observer.observe({ entryTypes: ['longtask'] });
  return observer;
};

/**
 * Report Web Vitals
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
 */
<<<<<<< HEAD
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
<<<<<<< HEAD
  if (typeof window === 'undefined') return;
  
  // Send to analytics service
<<<<<<< HEAD
  // Performance metrics logged for monitoring
=======
<<<<<<< HEAD
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
    const gtag = (window as unknown as { gtag: (command: string, event: string, data: Record<string, unknown>) => void }).gtag;
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== undefined) {
        gtag('event', key, {
          value: Math.round(value),
          event_category: 'Web Vitals',
          non_interaction: true
        });
      }
    });
=======
  console.log('Web Vitals:', metrics);
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
};

/**
 * Check if WebP is supported
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
  
  const connection = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
  if (!connection) return 'medium';
  
  const effectiveType = connection.effectiveType;
  if (effectiveType === 'slow-2g' || effectiveType === '2g') return 'slow';
  if (effectiveType === '3g') return 'medium';
  return 'fast';
};

/**
 * Check if heavy assets should be loaded
 */
export const shouldLoadHeavyAssets = (): boolean => {
  const quality = getConnectionQuality();
  const saveData = typeof navigator !== 'undefined' && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
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
  return window.setTimeout(() => {
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
<<<<<<< HEAD
    window.clearTimeout(id);
=======
 * Performance monitoring
 */
export class PerformanceMonitor {
  private metrics: WebVitalsMetrics = {};
  private budget: PerformanceBudget;
=======
    clearTimeout(id);
>>>>>>> main
  }
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d

  constructor(budget: PerformanceBudget) {
    this.budget = budget;
  }

  /**
   * Record a performance metric
   */
  recordMetric(name: keyof WebVitalsMetrics, value: number): void {
    this.metrics[name] = value;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
  }

<<<<<<< HEAD
/**
 * Preload route
 */
<<<<<<< HEAD
export function debounce<T extends (...args: unknown[]) => unknown>(
=======
export const preloadRoute = (route: string): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'script';
  link.href = route;
  document.head.appendChild(link);
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;
  
  try {
    const observer = new PerformanceObserver(list => {
=======
export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !window.PerformanceObserver) {
    return null;
  }

  try {
    const observer = new PerformanceObserver((list) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
      callback(list.getEntries());
    });
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
<<<<<<< HEAD
  } catch (e) {
    // PerformanceObserver not supported in this environment
=======
 * Get memory usage
 */
export const getMemoryUsage = (): Record<string, number> | null => {
  if (typeof performance === 'undefined' || !(performance as any).memory) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
    return null;
  }

<<<<<<< HEAD
/**
 * Cache static assets
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
export const checkPerformanceBudget = (budget: PerformanceBudget): {
  passed: boolean;
  violations: string[];
} => {
  const violations: string[] = [];
  
  if (typeof window === 'undefined' || !window.performance) {
    return { passed: true, violations };
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
  // Check bundle size (simplified)
  const scripts = document.querySelectorAll('script[src]');
  let totalSize = 0;
  scripts.forEach(script => {
    const src = (script as HTMLScriptElement).src;
    if (src && !src.startsWith('data:')) {
      totalSize += 100; // Simplified size estimation
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  } catch (error) {
    console.warn('Long task monitoring not supported:', error);
    return null;
  }
};

/**
 * Performance Optimizer Class
 */
class PerformanceOptimizer {
  private metrics = new Map<string, number>();
  private budget: PerformanceBudget = {
    maxBundleSize: 500, // 500KB
    maxImageSize: 100, // 100KB
    maxFirstLoad: 3000, // 3 seconds
    maxInteractive: 5000, // 5 seconds
  };

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;
    
    // Initialize performance monitoring
    this.setupPerformanceMonitoring();
    
    // Setup lazy loading
    this.lazyLoadImages();
    
    // Setup resource optimization
    this.optimizeResources();
  }

  private setupPerformanceMonitoring(): void {
    // Monitor page load
    if (document.readyState === 'loading') {
      window.addEventListener('load', () => {
        this.trackPageLoad();
      });
    } else {
      this.trackPageLoad();
    }

    // Monitor long tasks
    this.monitorLongTasks((entries) => {
      entries.forEach((entry) => {
        this.metrics.set('longTasks', (this.metrics.get('longTasks') || 0) + 1);
        console.warn(`Long task detected: ${entry.duration}ms`);
      });
    });
  }

  private trackPageLoad(): void {
    const metrics = measurePageLoad();
    if (metrics) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== undefined) {
          this.metrics.set(key, value);
        }
      });
    }
  }

  private optimizeResources(): void {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];
    prefetchResources(criticalResources);
  }

  // Public methods
  public lazyLoadImages(): void {
    lazyLoadImages();
  }

  public measurePageLoad(): WebVitalsMetrics | null {
    return measurePageLoad();
  }

  public monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }

  public getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public getPerformanceSummary() {
    return {
      averageRenderTime: 12.5,
      totalComponents: 45,
      memoryUsage: (window as any).performance?.memory?.usedJSHeapSize || 0,
      slowComponents: this.metrics.get('longTasks') || 0
    };
  }

  public exportMetrics() {
    return this.getMetrics();
  }

  public clearMetrics() {
    this.metrics.clear();
  }

  public reportWebVitals(metrics: WebVitalsMetrics): void {
    if (process.env['NODE_ENV'] === 'development') {
      console.log('Web Vitals:', metrics);
    }
    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
=======
  console.log('Web Vitals:', metrics);
  // Here you would typically send metrics to your analytics service
};

/**
 * Performance Optimizer Class
 */
class PerformanceOptimizer {
  private metrics: Record<string, number> = {};
  private observers: PerformanceObserver[] = [];

  /**
   * Get current metrics
   */
  getMetrics(): Record<string, number> {
    return { ...this.metrics };
  }

  /**
   * Initialize performance monitoring
   */
  init(): void {
    this.measurePageLoad();
    this.setupLongTaskMonitoring();
    this.setupResourceMonitoring();
  }

  /**
   * Measure page load performance
   */
  measurePageLoad(): WebVitalsMetrics | null {
    const metrics = measurePageLoad();
    if (metrics) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== undefined) {
          this.metrics[key] = value;
        }
      });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
    }
<<<<<<< HEAD
=======
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e6f9
=======
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
=======
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
  });
  
  if (totalSize > budget.maxBundleSize) {
    violations.push(`Bundle size ${totalSize}KB exceeds budget ${budget.maxBundleSize}KB`);
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e6f9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
  
  // Check load time
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  if (loadTime > budget.maxFirstLoad) {
    violations.push(`Load time ${loadTime}ms exceeds budget ${budget.maxFirstLoad}ms`);
  }
  
<<<<<<< HEAD
=======
  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  // Check bundle size (simplified)
  const scripts = document.querySelectorAll('script[src]');
  let totalSize = 0;
  scripts.forEach(script => {
    const src = (script as HTMLScriptElement).src;
    if (src && !src.startsWith('data:')) {
      totalSize += 100; // Simplified size estimation
    }
  });
  
  if (totalSize > budget.maxBundleSize) {
    violations.push(`Bundle size (${totalSize}KB) exceeds budget (${budget.maxBundleSize}KB)`);
=======
=======
  }
  
  // Check load time
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  if (loadTime > budget.maxFirstLoad) {
    violations.push(`Load time ${loadTime}ms exceeds budget ${budget.maxFirstLoad}ms`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
  }
  
  // Check load time
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  if (loadTime > budget.maxFirstLoad) {
    violations.push(`Load time ${loadTime}ms exceeds budget ${budget.maxFirstLoad}ms`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
  }
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
<<<<<<< HEAD
export const addCriticalResourceHints = (): void => {
  if (typeof document === 'undefined') return;
  
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossOrigin) {
      link.crossOrigin = hint.crossOrigin;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
    }
    document.head.appendChild(link);
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
  if (totalSize > budget.maxBundleSize) {
    violations.push(`Bundle size ${totalSize}KB exceeds budget ${budget.maxBundleSize}KB`);
  }
  
  // Check load time
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  if (loadTime > budget.maxFirstLoad) {
    violations.push(`Load time ${loadTime}ms exceeds budget ${budget.maxFirstLoad}ms`);
  }
  
  return {
    passed: violations.length === 0,
    violations
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
    }
    document.head.appendChild(link);
  });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e6f9
=======
    }
    document.head.appendChild(link);
  });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
    }
    document.head.appendChild(link);
  });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
    }
    document.head.appendChild(link);
  });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
};

/**
 * Performance Optimizer Class
 */
<<<<<<< HEAD
<<<<<<< HEAD
class PerformanceOptimizer {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export class PerformanceOptimizer {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3b0a
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e6f9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
=======
export class PerformanceOptimizer {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();
=======
 * Performance monitoring class
 */
export class PerformanceMonitor {
  private metrics: WebVitalsMetrics = {};
  private budget: PerformanceBudget;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
export const collectPerformanceMetrics = (): WebVitalsMetrics => {
  if (typeof window === 'undefined') {
    return {};
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const metrics: WebVitalsMetrics = {};
=======
  public measurePerformance(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    this.metrics.set(name, end - start);
  }

  public lazyLoadImages(): void {
    if ('IntersectionObserver' in window) {
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9

  // Get navigation timing
  if (performance.timing) {
    const timing = performance.timing;
    const navigationStart = timing.navigationStart;
    metrics.TTFB = timing.responseStart - navigationStart;
  }

<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d

  constructor(budget: PerformanceBudget) {
    this.budget = budget;
  }

  /**
<<<<<<< HEAD
   * Record a performance metric
   */
  recordMetric(name: keyof WebVitalsMetrics, value: number): void {
    this.metrics[name] = value;
  }

  /**
   * Check if performance is within budget
   */
  checkBudget(): { passed: boolean; violations: string[] } {
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
    const violations: string[] = [];

    if (this.metrics.FCP && this.metrics.FCP > this.budget.maxFirstLoad) {
      violations.push(`FCP ${this.metrics.FCP}ms exceeds budget ${this.budget.maxFirstLoad}ms`);
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
  public measurePerformance(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    this.metrics.set(name, end - start);
  }

  public lazyLoadImages(): void {
    lazyLoadImages();
  }

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  public preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      if (resource.endsWith('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
<<<<<<< HEAD
=======

  public checkPerformanceBudget(): boolean {
    const metrics = this.getMetrics();
    const budget = this.budget;

    // Check bundle size (would need to be passed in)
    // Check image sizes (would need to be measured)
    // Check load times
    const loadTime = metrics.loadTime || 0;
    const interactiveTime = metrics.interactiveTime || 0;

    return (
      loadTime <= budget.maxFirstLoad &&
      interactiveTime <= budget.maxInteractive
    );
  }

  public optimizeImages(): void {
    if (typeof document === 'undefined') return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" if not present
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
      } else {
        link.as = 'image';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
      }
      document.head.appendChild(link);
    });
<<<<<<< HEAD
  }

  public optimizeScroll(): void {
    let ticking = false;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  // Measure performance metrics
  measurePerformance(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    this.metrics.set(name, duration);
    
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {
=======
    if (process.env['NODE_ENV'] === 'development') {
>>>>>>> main
      console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
    }
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

<<<<<<< HEAD
  // Add critical resource hints method
  addCriticalResourceHints(): void {
    addCriticalResourceHints();
  }

  // Add Web Vitals reporting method
  reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }

  // Measure page load performance
<<<<<<< HEAD
  measurePageLoad(): WebVitalsMetrics | null {
<<<<<<< HEAD
    return measurePageLoad();
=======
<<<<<<< HEAD
    return measurePageLoad();
=======
<<<<<<< HEAD
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    
    const timing = window.performance.timing;
    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    return { 
      FCP: navigation?.responseStart - navigation?.fetchStart,
      TTFB: timing.responseStart - timing.navigationStart
    };
  }

<<<<<<< HEAD
  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

=======
<<<<<<< HEAD
=======
  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
  }
}

>>>>>>> main
/**
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
>>>>>>> main
 * Resource hints for performance
=======
 * Preload critical resources
>>>>>>> main
 */
export const preloadCriticalResources = (): void => {
  if (typeof document === 'undefined') return;
  
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/css/critical.css'
  ];
  
  criticalResources.forEach(resource => {
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
<<<<<<< HEAD
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
  
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
        const src = img.dataset['src'];
        if (src) {
          img.setAttribute('src', src);
        }
=======
        img.src = img.dataset['src'] || '';
>>>>>>> main
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
};

/**
=======
>>>>>>> main
 * Optimize scroll performance
 */
<<<<<<< HEAD
export function debounce<T extends (...args: any[]) => any>(
>>>>>>> main
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
export function throttle<T extends (...args: unknown[]) => unknown>(
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
    TTFB: perfData.responseStart - perfData.navigationStart
  };
};

/**
 * Report Web Vitals to analytics
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  // Web Vitals logged

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
  
  const connection = (navigator as unknown as { connection?: { effectiveType?: string } }).connection || 
                   (navigator as unknown as { mozConnection?: { effectiveType?: string } }).mozConnection || 
                   (navigator as unknown as { webkitConnection?: { effectiveType?: string } }).webkitConnection;
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
  const saveData = typeof navigator !== 'undefined' && (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData;
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
  return (window as unknown as { setTimeout: (fn: () => void, delay: number) => number }).setTimeout(() => {
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
=======
export const optimizeScroll = (): void => {
>>>>>>> main
  if (typeof window === 'undefined') return;
  
<<<<<<< HEAD
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    (window as unknown as { clearTimeout: (id: number) => void }).clearTimeout(id);
  }
=======
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
>>>>>>> main
};

/**
<<<<<<< HEAD
 * Preload critical resources
 */
export const preloadCriticalResources = (): void => {
  if (typeof document === 'undefined') return;
  
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/css/critical.css'
  ];
  
  criticalResources.forEach(resource => {
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

=======
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
>>>>>>> main
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    this.metrics.set(name, duration);
    return duration;
  }

<<<<<<< HEAD
  public lazyLoadImages(): void {
    lazyLoadImages();
  }

  public optimizeScroll(): void {
    optimizeScroll();
  }

  public preloadCriticalResources(): void {
    preloadCriticalResources();
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  public prefetchResources(urls: string[]): void {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    prefetchResources(urls);
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
    
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
<<<<<<< HEAD
  } catch (e) {
    // Long task monitoring not supported
    return null;
=======
=======
=======
>>>>>>> main
  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
>>>>>>> main
>>>>>>> main
  }

  // Get performance summary
  getPerformanceSummary() {
    return {
      averageRenderTime: 12.5,
      totalComponents: 45,
      memoryUsage: 0,
      slowComponents: 0
    };
  }

  // Export metrics
  exportMetrics() {
    return this.getMetrics();
  }

  // Clear metrics
  clearMetrics() {
    this.metrics.clear();
  }

<<<<<<< HEAD
=======
  // Measure page load timing
  measurePageLoadTiming(): Record<string, number> | null {
=======
  // Add critical resource hints for better performance
  addCriticalResourceHints(): void {
    if (typeof document === 'undefined') return;
    
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
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
=======
  public prefetchResources(urls: string[]): void {
    prefetchResources(urls);
  }

<<<<<<< HEAD
  // Add Web Vitals reporting method
  reportWebVitals(metrics: WebVitalsMetrics): void {
    if (process.env['NODE_ENV'] === 'development') {
      console.log('Web Vitals:', metrics);
    }

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
=======
  public reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
>>>>>>> main
  }

  public measurePageLoad(): WebVitalsMetrics | null {
    return measurePageLoad();
  }

  public monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
>>>>>>> 71655f282840ed9a4a2a6696e410390223898ad3
  }

<<<<<<< HEAD
  // Measure page load performance
<<<<<<< HEAD
  measurePageLoad(): WebVitalsMetrics | null {
=======
  measurePageLoad(): Record<string, number> | null {
>>>>>>> main
>>>>>>> main
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    
    const timing = window.performance.timing;
<<<<<<< HEAD
    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
<<<<<<< HEAD
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
      firstPaint: performance.getEntriesByType('paint')[0]?.['startTime'] || 0
    };
  }

  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    
=======
      FCP: navigation?.responseStart - navigation?.fetchStart,
      TTFB: timing.responseStart - timing.navigationStart
=======
<<<<<<< HEAD
=======
=======
  public prefetchResources(urls: string[]): void {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
<<<<<<< HEAD
  }

  public preconnectDomains(domains: string[]): void {
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
    prefetchResources(urls);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
  }

<<<<<<< HEAD
=======
  // Get performance summary
  getPerformanceSummary() {
>>>>>>> origin/cursor/install-dependencies-and-run-type-check-b1ae
>>>>>>> main
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart
>>>>>>> main
    };
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      callback(entries);
    });

>>>>>>> main
    observer.observe({ entryTypes: ['longtask'] });
  }

  // Get performance summary
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  getPerformanceSummary(): {
    averageRenderTime: number;
    totalComponents: number;
    memoryUsage: number;
    slowComponents: number;
  } {
<<<<<<< HEAD
    const metrics = this.getMetrics();
    return {
      averageRenderTime: metrics['averageRenderTime'] || 0,
      totalComponents: metrics['totalComponents'] || 0,
      memoryUsage: metrics['memoryUsage'] || 0,
      slowComponents: metrics['slowComponents'] || 0,
=======
    return {
      averageRenderTime: 10,
      totalComponents: 0,
      memoryUsage: 0,
      slowComponents: 0,
=======
  getPerformanceSummary() {
    const metrics = this.getMetrics();
    return {
      averageRenderTime: metrics['renderTime'] || 0,
      slowComponents: metrics['slowComponents'] || 0,
      totalOperations: metrics['totalOperations'] || 0,
>>>>>>> main
>>>>>>> main
    };
  }

  // Export metrics
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  exportMetrics(): Record<string, any> {
    return this.getMetrics();
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
<<<<<<< HEAD
  }

=======
>>>>>>> main
  }

=======
  exportMetrics() {
    return this.getMetrics();
  }

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  // Report web vitals
  reportWebVitals(metrics: Record<string, number>): void {
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', metrics);
    }
>>>>>>> main
  }

<<<<<<< HEAD
=======
>>>>>>> main
  // Clear metrics
  clearMetrics() {
    this.metrics.clear();
  }

<<<<<<< HEAD
=======
>>>>>>> 71655f282840ed9a4a2a6696e410390223898ad3
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
  }
}
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
/**
 * Critical resource hints for better performance
 */
export const addCriticalResourceHints = (): void => {
  if (typeof document === 'undefined') return;
  
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface PerformanceBudgetCheck {
  maxFirstLoad: number;
  maxInteractive: number;
}
>>>>>>> main

export const checkPerformanceBudget = (budget: PerformanceBudgetCheck): {
=======
<<<<<<< HEAD
=======
// PerformanceBudget interface is already defined above

>>>>>>> main
>>>>>>> main
export const checkPerformanceBudget = (budget: PerformanceBudget): {
>>>>>>> main
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

<<<<<<< HEAD
// Export individual functions for backward compatibility
export {
  lazyLoadImagesStandalone as lazyLoadImages,
  measurePageLoadStandalone as measurePageLoad,
  reportWebVitalsStandalone as reportWebVitals
=======
=======
>>>>>>> main
// Export singleton instance
<<<<<<< HEAD
export const performanceOptimizer = PerformanceOptimizer.getInstance();
<<<<<<< HEAD
=======
<<<<<<< HEAD

// Export default object with all functions
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
// Utility functions
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
>>>>>>> main

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
>>>>>>> main

export const shouldUseWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
>>>>>>> main
};

export const getConnectionQuality = (): 'slow' | 'fast' | 'unknown' => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown';
  }
  const connection = (navigator as any).connection;
  return connection.effectiveType === '4g' ? 'fast' : 'slow';
};

export const shouldLoadHeavyAssets = (): boolean => {
  return getConnectionQuality() === 'fast';
};

export const requestIdleCallback = (callback: () => void): ReturnType<typeof setTimeout> => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(callback);
  }
  return setTimeout(callback, 1);
};

export const cancelIdleCallback = (id: number): void => {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    (window as any).cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
};

export const preloadRoute = (route: string): void => {
  if (typeof document === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

export const monitorLongTasks = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 50) {
        console.warn('Long task detected:', entry);
      }
    }
  });
  
  try {
    observer.observe({ entryTypes: ['longtask'] });
  } catch (error) {
    console.warn('Long task monitoring not supported:', error);
  }
};

export const cacheStaticAssets = (): void => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  
  const cacheName = 'static-assets-v1';
  const assetsToCache = [
    '/',
    '/static/css/main.css',
    '/static/js/main.js'
  ];
  
  caches.open(cacheName).then((cache) => {
    cache.addAll(assetsToCache);
  });
};

export const clearOldCaches = (): void => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      if (cacheName !== 'static-assets-v1') {
        caches.delete(cacheName);
      }
    });
  });
};

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  public reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }

  public measurePageLoad(): WebVitalsMetrics | null {
    return measurePageLoad();
  }

  public monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // Get performance summary
  getPerformanceSummary() {
=======
=======
  public preconnectDomains(domains: string[]): void {
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
=======
  // Monitor long tasks
<<<<<<< HEAD
  public monitorLongTasks(callback: (entries: PerformanceEntryList) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
=======
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      callback(entries);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
    });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
  }

  // Get performance summary
  getPerformanceSummary() {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
    const timing = window.performance.timing;
=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
    return {
      passed: violations.length === 0,
      violations
    };
  }
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
=======
  // Report web vitals
  reportWebVitals(metrics: Record<string, number>): void {
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', metrics);
    }
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
  public preconnectDomains(domains: string[]): void {
    preconnectDomains(domains);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
  // Clear metrics
  clearMetrics() {
    this.metrics.clear();
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    if (typeof PerformanceObserver === 'undefined') return null;

    try {
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        callback(entries);
      });
      observer.observe({ entryTypes: ['longtask'] });
      return observer;
    } catch (error) {
      console.error('Error monitoring long tasks:', error);
      return null;
    }
  }

  // Measure page load
  measurePageLoad(): Record<string, number> | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    const timing = window.performance.timing;
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart
    };
>>>>>>> main
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
=======
  }

  public preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];
    prefetchResources(criticalResources);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
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
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
    if (this.metrics.LCP && this.metrics.LCP > this.budget.maxInteractive) {
      violations.push(`LCP ${this.metrics.LCP}ms exceeds budget ${this.budget.maxInteractive}ms`);
    }

    return {
<<<<<<< HEAD
      passed: violations.length === 0,
      violations
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
    };
  }

  /**
<<<<<<< HEAD
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

=======
    return metrics;
  }

  /**
   * Setup long task monitoring
   */
  private setupLongTaskMonitoring(): void {
    const observer = monitorLongTasks((entries) => {
      entries.forEach(entry => {
        this.metrics[`long_task_${Date.now()}`] = entry.duration;
      });
    });
    
    if (observer) {
      this.observers.push(observer);
    }
  }

  /**
   * Setup resource monitoring
   */
  private setupResourceMonitoring(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          this.metrics[`resource_${resourceEntry.name.split('.').pop()}`] = resourceEntry.duration;
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
    this.observers.push(observer);
  }

  /**
   * Lazy load images
   */
  lazyLoadImages(): void {
    lazyLoadImages();
  }

  /**
   * Report Web Vitals
   */
  reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }

  /**
   * Monitor long tasks
   */
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }

  /**
   * Add critical resource hints
   */
  addCriticalResourceHints(urls: string[]): void {
    prefetchResources(urls);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  /**
   * Cleanup observers
   */
  cleanup(): void {
<<<<<<< HEAD
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
    this.observers.forEach(observer => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    });
    this.observers = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  }
}

// Export singleton instance
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e6f9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
export const performanceOptimizer = PerformanceOptimizer.getInstance();

<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
export default {
  prefetchResources,
  preconnectDomains,
  lazyLoadImages,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  measurePageLoad: performanceOptimizer.measurePageLoad.bind(performanceOptimizer),
  reportWebVitals: performanceOptimizer.reportWebVitals.bind(performanceOptimizer),
  checkPerformanceBudget,
  performanceOptimizer
};
=======
<<<<<<< HEAD
  optimizeScroll,
  preloadCriticalResources,
  addCriticalResourceHints,
=======
<<<<<<< HEAD
  optimizeScroll,
  preloadCriticalResources,
  addCriticalResourceHints,
  checkPerformanceBudget
};
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  preloadCriticalResources: () => performanceOptimizer.preloadCriticalResources(),
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  checkPerformanceBudget
};
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  checkPerformanceBudget,
<<<<<<< HEAD
  addCriticalResourceHints
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
>>>>>>> main
  checkPerformanceBudget
<<<<<<< HEAD
};
<<<<<<< HEAD

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();
=======
=======
<<<<<<< HEAD
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3b0a
=======
export const performanceOptimizer = new PerformanceOptimizer();
export default performanceOptimizer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
export const performanceOptimizer = new PerformanceOptimizer();

// Export default for compatibility
export default performanceOptimizer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
const performanceOptimizer = new PerformanceOptimizer();
export default performanceOptimizer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
=======
  performanceOptimizer
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e6f9
=======
  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log('Performance entry:', entry);
    });
  });

  observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-06a4
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8741
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
<<<<<<< HEAD
=======
=======
export const performanceOptimizer = PerformanceOptimizer.getInstance();
>>>>>>> origin/cursor/install-dependencies-and-run-type-check-b1ae
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
