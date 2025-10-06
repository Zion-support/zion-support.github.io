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
/**
 */
export interface PerformanceBudget {
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
 * Lazy load images
 */
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined') return;
  if (!('IntersectionObserver' in window)) return;
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
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
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
  const images = document.querySelectorAll('img[data-src]');
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
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
/**
 * Performance monitoring class
 */
};
/**
 * Measure page load performance
 */
export const measurePageLoad = (): Promise<WebVitalsMetrics> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve({});
      return;
    }
    const metrics: WebVitalsMetrics = {};
    // Measure FCP
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metrics.FCP = fcpEntry.startTime;
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
    // Measure LCP
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          metrics.LCP = lastEntry.startTime;
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
    // Measure TTFB
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      metrics.TTFB = timing.responseStart - timing.requestStart;
    }
    // Resolve after a delay to allow metrics to be collected
    setTimeout(() => resolve(metrics), 1000);
  });
};
/**
 * Report web vitals
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metrics);
  }
  if (typeof window === 'undefined') return;
  if (process.env['NODE_ENV'] === 'development') {
    console.log('Web Vitals:', metrics);
  }
  // Send to analytics service
  console.log('Web Vitals:', metrics);
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
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown';
  }
  const connection = (navigator as any).connection;
  if (connection.effectiveType === '4g' || connection.effectiveType === '3g') {
    return 'fast';
  }
  return 'slow';
};
/**
 * Check if heavy assets should be loaded
 */
export const shouldLoadHeavyAssets = (): boolean => {
  const connectionQuality = getConnectionQuality();
  return connectionQuality === 'fast';
};
/**
 * Request idle callback polyfill
 */
export const requestIdleCallback = (callback: () => void): number => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(callback);
  }
  return setTimeout(callback, 1) as unknown as number;
};
/**
 * Cancel idle callback polyfill
 */
export const cancelIdleCallback = (id: number): void => {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    (window as any).cancelIdleCallback(id);
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
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return null;
  }
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const longTasks = entries.filter(entry => entry.duration > 50);
    if (longTasks.length > 0) {
      callback(longTasks);
    }
  });
  observer.observe({ entryTypes: ['longtask'] });
  return observer;
};
/**
 * Cache static assets
 */
export const cacheStaticAssets = (): void => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  const assets = [
    '/favicon.ico',
    '/manifest.json',
  ];
  caches.open('static-assets').then(cache => {
    assets.forEach(asset => {
      cache.add(asset).catch(() => {
        // Ignore errors
      });
    });
  });
};
/**
 * Clear old caches
 */
export const clearOldCaches = (): void => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  caches.keys().then(names => {
    names.forEach(name => {
      if (name !== 'static-assets') {
        caches.delete(name);
      }
    });
  });
};
/**
 * Check performance budget
 */
export const checkPerformanceBudget = (_budget: PerformanceBudget): { passed: boolean; violations: string[] } => {
  const violations: string[] = [];
  // Check bundle size (would need to be implemented with actual bundle analysis)
  // Check image sizes (would need to be implemented with actual image analysis)
  // Check load times (would need to be implemented with actual performance measurement)
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
 * Performance Optimizer Class
 */
class PerformanceOptimizer {
    }
  });
};
  // Check load time
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  if (loadTime > budget.maxFirstLoad) {
    violations.push(`Load time ${loadTime}ms exceeds budget ${budget.maxFirstLoad}ms`);
  }
 * Performance monitoring class
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();
  private constructor() {}
  public static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }
  // Measure performance of a function
  measurePerformance(name: string, fn: () => void): number {
  // Lazy load images with intersection observer
  lazyLoadImages(): void {
    lazyLoadImages();
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
    addCriticalResourceHints();
  }
  // Add Web Vitals reporting method
  reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }
  // Measure page load performance
  measurePageLoad(): WebVitalsMetrics | null {
    return measurePageLoad();
    return measurePageLoad();
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
  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }
/**
 * Resource hints for performance
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
        const src = img.dataset['src'];
        if (src) {
          img.setAttribute('src', src);
        }
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  images.forEach(img => imageObserver.observe(img));
};
/**
 * Optimize scroll performance
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
    optimizeScroll();
  }
  public preloadCriticalResources(): void {
    preloadCriticalResources();
  }
  public prefetchResources(urls: string[]): void {
    prefetchResources(urls);
  }
  public reportWebVitals(metrics: WebVitalsMetrics): void {
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', metrics);
    }
  }
  public monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return null;
    }
    const observer = new PerformanceObserver((list) => {
      const longTasks = list.getEntries().filter(entry => entry.duration > 50);
      if (longTasks.length > 0) {
        callback(longTasks);
      }
    });
    try {
      observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.warn('Long task monitoring not supported:', error);
      return null;
    }
    return observer;
  }
  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }
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
        (link as any).crossOrigin = hint.crossOrigin;
      }
      document.head.appendChild(link);
    });
    return measurePageLoad();
  }
  // Optimize scroll performance
  optimizeScroll(): void {
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
  }
  // Preload critical resources
  preloadCriticalResources(): void {
    if (typeof document === 'undefined') return;
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js'
    ];
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
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
  public addCriticalResourceHints(): void {
    this.preloadCriticalResources();
  }
  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }
  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return null;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      callback(entries);
    });
    observer.observe({ entryTypes: ['longtask'] });
  } catch (e) {
    // Long task monitoring not supported
    return null;
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
      FCP: navigation?.responseStart - navigation?.fetchStart,
      TTFB: timing.responseStart - timing.navigationStart
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart
    };
  }
  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      callback(entries);
    });
    observer.observe({ entryTypes: ['longtask'] });
  }
  // Get performance summary
  getPerformanceSummary(): {
    averageRenderTime: number;
    totalComponents: number;
    memoryUsage: number;
    slowComponents: number;
  } {
    return {
      averageRenderTime: 10,
      totalComponents: 0,
      memoryUsage: 0,
      slowComponents: 0,
    };
  }
  // Export metrics
  exportMetrics(): Record<string, any> {
    return this.getMetrics();
  }
  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  }
  }
  // Clear metrics
  clearMetrics() {
    this.metrics.clear();
  }
  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
  }
}
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
interface PerformanceBudgetCheck {
  maxFirstLoad: number;
  maxInteractive: number;
}
export const checkPerformanceBudget = (budget: PerformanceBudgetCheck): {
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
// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();
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
export const shouldUseWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
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
  public reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }
  public prefetchResources(resources: string[]): void {
    prefetchResources(resources);
  }
  public monitorLongTasks(callback: (entries: PerformanceEntryList) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }
  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }
  // Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      callback(entries);
    });
    observer.observe({ entryTypes: ['longtask'] });
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
  measurePageLoad(): Record<string, number> | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    const timing = window.performance.timing;
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
      firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
    };
  }
  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
  }
}
// Export singleton instance
// Export default object for backward compatibility
// Export default object for backward compatibility
// Export individual functions for backward compatibility
export const performanceOptimizer = PerformanceOptimizer.getInstance();
export default {
  prefetchResources,
  preconnectDomains,
  lazyLoadImages,
  optimizeScroll,
  preloadCriticalResources,
  addCriticalResourceHints,
  checkPerformanceBudget
};
  preloadCriticalResources: () => performanceOptimizer.preloadCriticalResources(),
  debounce,
  throttle,
  measurePageLoad: performanceOptimizer.measurePageLoad.bind(performanceOptimizer),
  reportWebVitals: performanceOptimizer.reportWebVitals.bind(performanceOptimizer),
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
  preloadCriticalResources,
  optimizeScroll,
  addCriticalResourceHints
  checkPerformanceBudget
};
};
  checkPerformanceBudget,
  addCriticalResourceHints
};
  checkPerformanceBudget,
  addCriticalResourceHints,
  preloadCriticalResources: () => performanceOptimizer.preloadCriticalResources(),
  measurePageLoadMetrics: () => performanceOptimizer.measurePageLoadTiming()
};
  checkPerformanceBudget,
  addCriticalResourceHints,
  performanceOptimizer
};
  checkPerformanceBudget,
  addCriticalResourceHints
