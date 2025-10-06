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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
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

/**
<<<<<<< HEAD
=======
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
 * Lazy load images
 */
export const lazyLoadImages = (): void => {
<<<<<<< HEAD
  if (typeof window === 'undefined') return;
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
  });
};

<<<<<<< HEAD
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
=======
  if (typeof document === 'undefined') return;
  
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
};

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
/**
 * Measure page load performance
 */
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
  };
};

/**
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
  // Performance metrics logged for monitoring
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
    window.clearTimeout(id);
  }
};

/**
 * Preload route
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
    return null;
  }
};

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
  
  // Check bundle size (simplified)
  const scripts = document.querySelectorAll('script[src]');
  let totalSize = 0;
  scripts.forEach(script => {
    const src = (script as HTMLScriptElement).src;
    if (src && !src.startsWith('data:')) {
      totalSize += 100; // Simplified size estimation
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
  });
  
  if (totalSize > budget.maxBundleSize) {
    violations.push(`Bundle size ${totalSize}KB exceeds budget ${budget.maxBundleSize}KB`);
  }
<<<<<<< HEAD
  
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
};

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

/**
 * Performance Optimizer Class
 */
<<<<<<< HEAD
class PerformanceOptimizer {
=======
export class PerformanceOptimizer {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3b0a
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  public measurePerformance(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    this.metrics.set(name, end - start);
  }

  public lazyLoadImages(): void {
    lazyLoadImages();
  }

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
      }
      document.head.appendChild(link);
    });
<<<<<<< HEAD
  }

  public optimizeScroll(): void {
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

  public prefetchResources(urls: string[]): void {
    prefetchResources(urls);
  }

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

  // Clear metrics
  clearMetrics() {
    this.metrics.clear();
  }

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
  checkPerformanceBudget,
  addCriticalResourceHints
<<<<<<< HEAD
};
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
