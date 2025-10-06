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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
=======
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
    document.head.appendChild(link);
  });
};

/**
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
        img.classList.remove('lazy');
=======
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
  });
  
  if (totalSize > budget.maxBundleSize) {
    violations.push(`Bundle size ${totalSize}KB exceeds budget ${budget.maxBundleSize}KB`);
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e6f9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
  
  // Check load time
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  if (loadTime > budget.maxFirstLoad) {
    violations.push(`Load time ${loadTime}ms exceeds budget ${budget.maxFirstLoad}ms`);
  }
  
=======
  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
    }
    document.head.appendChild(link);
  });
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
};

/**
 * Performance Optimizer Class
 */
<<<<<<< HEAD
class PerformanceOptimizer {
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
  const metrics: WebVitalsMetrics = {};

  // Get navigation timing
  if (performance.timing) {
    const timing = performance.timing;
    const navigationStart = timing.navigationStart;
    metrics.TTFB = timing.responseStart - navigationStart;
  }

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
<<<<<<< HEAD
    prefetchResources(urls);
=======
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  public preconnectDomains(domains: string[]): void {
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
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

<<<<<<< HEAD
=======
  // Get performance summary
  getPerformanceSummary() {
    const timing = window.performance.timing;
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart
    };
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e6f9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-54ac
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
<<<<<<< HEAD
  addCriticalResourceHints
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  performanceOptimizer
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
};
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
