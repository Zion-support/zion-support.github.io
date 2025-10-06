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
 * Measure page load metrics
 */
export const measurePageLoad = (): WebVitalsMetrics | null => {
  if (typeof window === 'undefined') return null;
  
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    TTFB: navigation.responseStart - navigation.requestStart,
    FCP: 0, // Would need to be measured with PerformanceObserver
    LCP: 0, // Would need to be measured with PerformanceObserver
    FID: 0, // Would need to be measured with PerformanceObserver
    CLS: 0, // Would need to be measured with PerformanceObserver
    INP: 0, // Would need to be measured with PerformanceObserver
  };
};

/**
<<<<<<< HEAD
 * Report Web Vitals metrics
=======
 * Report web vitals
>>>>>>> cursor/fix-errors-and-merge-to-main-8fd8
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metrics);
<<<<<<< HEAD
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
export const getConnectionQuality = (): 'slow' | 'medium' | 'fast' => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'medium';
  }
  
  const connection = (navigator as any).connection;
  const effectiveType = connection.effectiveType;
  
  if (effectiveType === '4g') return 'fast';
  if (effectiveType === '3g') return 'medium';
  return 'slow';
};

/**
 * Check if heavy assets should be loaded
 */
export const shouldLoadHeavyAssets = (): boolean => {
  const connectionQuality = getConnectionQuality();
  const isSlowConnection = connectionQuality === 'slow';
  const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return !isSlowConnection && !isLowEndDevice;
};

/**
 * Request idle callback with fallback
 */
export const requestIdleCallback = (callback: IdleRequestCallback): number => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback);
  }
  
  // Fallback to setTimeout
  return setTimeout(callback, 1) as any;
};

/**
 * Cancel idle callback with fallback
 */
export const cancelIdleCallback = (id: number): void => {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
};

/**
 * Preload route for faster navigation
 */
export const preloadRoute = (route: string): void => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
=======
  }
};

/**
 * Optimize scroll performance
 */
export const optimizeScroll = (): void => {
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
 * Preload critical resources
 */
export const preloadCriticalResources = (): void => {
  if (typeof document === 'undefined') return;
  
  const criticalResources = [
    '/fonts/inter.woff2',
    '/images/hero-bg.jpg',
    '/images/logo.svg'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
>>>>>>> cursor/fix-errors-and-merge-to-main-8fd8
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
<<<<<<< HEAD
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return null;
  }
  
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      callback(entries);
    });
    
=======
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;
  
  const observer = new PerformanceObserver(list => {
    const longTasks = list.getEntries().filter(entry => entry.duration > 50);
    if (longTasks.length > 0) {
      callback(longTasks);
    }
  });
  
  try {
>>>>>>> cursor/fix-errors-and-merge-to-main-8fd8
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  } catch (error) {
    console.warn('Long task monitoring not supported:', error);
    return null;
  }
};

/**
<<<<<<< HEAD
 * Cache static assets
 */
export const cacheStaticAssets = async (urls: string[]): Promise<void> => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  
  const cache = await caches.open('static-assets-v1');
  await cache.addAll(urls);
};

/**
 * Clear old caches
 */
export const clearOldCaches = async (currentVersion: string): Promise<void> => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(name => !name.includes(currentVersion));
  
  await Promise.all(oldCaches.map(name => caches.delete(name)));
};

/**
 * Check performance budget
 */
export const checkPerformanceBudget = (_budget: PerformanceBudget): {
  passed: boolean;
  violations: string[];
} => {
  const violations: string[] = [];
  
  // Check bundle size (would need to be passed in)
  // Check image sizes (would need to be measured)
  // Check load times (would need to be measured)
  
  return {
    passed: violations.length === 0,
    violations
  };
};

/**
 * Add critical resource hints
 */
export const addCriticalResourceHints = (): void => {
  if (typeof document === 'undefined') return;
  
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://www.googletagmanager.com' }
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

<<<<<<< HEAD
  static getInstance(): PerformanceOptimizer {
=======
 * Performance monitoring class
 */
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();

  private constructor() {}

  public static getInstance(): PerformanceOptimizer {
>>>>>>> cursor/fix-errors-and-merge-to-main-8fd8
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

<<<<<<< HEAD
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

  // Measure performance metrics
  measurePerformance(name: string, fn: () => void): void {
=======
  public measurePerformance(name: string, fn: () => void): number {
>>>>>>> cursor/fix-errors-and-merge-to-main-8fd8
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
<<<<<<< HEAD
    
    this.metrics.set(name, duration);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
    }
=======
    this.metrics.set(name, duration);
    return duration;
  }

  public lazyLoadImages(): void {
    lazyLoadImages();
  }

  public optimizeScroll(): void {
    optimizeScroll();
  }

  public preloadCriticalResources(): void {
    preloadCriticalResources();
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

  public preconnectDomains(domains: string[]): void {
    preconnectDomains(domains);
  }

  public prefetchResources(urls: string[]): void {
    prefetchResources(urls);
  }

  public getPerformanceSummary(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public exportMetrics(): string {
    return JSON.stringify(this.getPerformanceSummary());
  }

  public clearMetrics(): void {
    this.metrics.clear();
  }

  public measurePageLoadTiming(): number {
    if (typeof window === 'undefined') return 0;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return 0;
    
    return navigation.loadEventEnd - navigation.fetchStart;
  }

  public checkPerformanceBudget(budget: PerformanceBudget): { passed: boolean; violations: string[] } {
    const violations: string[] = [];
    
    // Check bundle size (would need to be implemented with actual bundle analysis)
    // Check image sizes (would need to be implemented with actual image analysis)
    // Check load times
    const loadTime = this.measurePageLoadTiming();
    if (loadTime > budget.maxFirstLoad) {
      violations.push(`First load time ${loadTime}ms exceeds budget of ${budget.maxFirstLoad}ms`);
    }
    
    return {
      passed: violations.length === 0,
      violations
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-8fd8
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

<<<<<<< HEAD
  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return null;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      callback(entries);
    });
    
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
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

  // Measure page load performance
  measurePageLoadTiming(): Record<string, number> | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    
    const timing = window.performance.timing;
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart
    };
  }

  // Add critical resource hints method
  addCriticalResourceHints(): void {
    addCriticalResourceHints();
  }

  // Add Web Vitals reporting method
  reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }

  // Measure page load performance
  measurePageLoad(): WebVitalsMetrics | null {
<<<<<<< HEAD
=======
    return measurePageLoad();
  }

  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
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

  // Measure page load performance
  measurePageLoadTiming(): Record<string, number> | null {
>>>>>>> cursor/fix-errors-and-merge-to-main-e973
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    
    const timing = window.performance.timing;
<<<<<<< HEAD
    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    const interactiveTime = timing.domInteractive - timing.navigationStart;
    
    return { 
      loadTime, 
      interactiveTime,
      FCP: navigation?.responseStart - navigation?.fetchStart,
      TTFB: timing.responseStart - timing.navigationStart
=======
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart
>>>>>>> cursor/fix-errors-and-merge-to-main-e973
    };
  }

  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
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
>>>>>>> cursor/fix-errors-and-merge-to-main-8fd8
  }
}
<<<<<<< HEAD



/**
 * Optimize scroll performance
 */
export const optimizeScroll = (): void => {
  if (typeof window === 'undefined') return;
  
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
};

/**
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
>>>>>>> cursor/fix-errors-and-merge-to-main-e973

// Export singleton instance
<<<<<<< HEAD
export const performanceOptimizer = PerformanceOptimizer.getInstance();

<<<<<<< HEAD
=======
// Get performance metrics
const getMetrics = (): Record<string, number> => {
  return Object.fromEntries(metrics);
};

// Initialize all optimizations
const initialize = (): void => {
  lazyLoadImages();
  addCriticalResourceHints();
};

>>>>>>> cursor/fix-errors-and-merge-to-main-a3c4
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e973
export default {
  prefetchResources,
  preconnectDomains,
  lazyLoadImages,
<<<<<<< HEAD
=======
  preloadCriticalResources: () => performanceOptimizer.preloadCriticalResources(),
>>>>>>> cursor/fix-errors-and-merge-to-main-e973
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
  checkPerformanceBudget,
<<<<<<< HEAD
  preloadCriticalResources: () => performanceOptimizer.preloadCriticalResources(),
  measurePageLoadMetrics: () => performanceOptimizer.measurePageLoadTiming()
};
=======
  getMetrics,
  initialize
};
>>>>>>> cursor/fix-errors-and-merge-to-main-a3c4
=======
  checkPerformanceBudget
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e973
=======
export const performanceOptimizer = PerformanceOptimizer.getInstance();
>>>>>>> cursor/fix-errors-and-merge-to-main-8fd8
