//Performance optimization utilities
export default {
  initialize() {
    //Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      console.log('Performance optimizer initialized');
    }
  },
  
  lazyLoadImages() {
    //Lazy load images for better performance
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
    //Measure page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart);
      });
    }
  },
  
  reportWebVitals() {
    //Report web vitals
    if (typeof window !== 'undefined') {
      console.log('Web vitals reporting initialized');
    }
  }
};
 */
 */export interface PerformanceBudget {
interface PerformanceBudget {
interface PerformanceBudget {
  maxBundleSize: number; //in KB
  maxImageSize: number; //in KB
  maxFirstLoad: number; //in ms
  maxInteractive: number; //in ms
}

//Performance optimization utilities
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  //Lazy load images with intersection observer
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

  //Preload critical resources
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

  //Optimize scroll performance
  optimizeScroll(): void {
    let ticking = false;
    
    const updateScrollPosition = () => {
      //Throttled scroll handling
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

  //Measure performance metrics
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

  //Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  //Add critical resource hints method
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

  //Measure page load performance
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

  //Report web vitals
  reportWebVitals(metrics: WebVitalsMetrics): void {
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', metrics);
    }

    //Send to analytics service
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

  //Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
    this.measurePerformance('addCriticalResourceHints', () => this.addCriticalResourceHints());
  }
}

/**
 * Resource hints for performance
 */export const prefetchResources = (urls: string[]): void => {
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
 */export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T, wait: number): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function
 */export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T, limit: number): ((...args: Parameters<T>) => void) => {
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
 */export const lazyLoadImages = (): void => {
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
  
  //Check bundle size (would need to be passed in)
  //Check image sizes (would need to be measured)
  //Check load times
  if (metrics.TTFB && metrics.TTFB > budget.maxFirstLoad) {
    return false;
  }

  return true;
};

/**
 * Optimize images
 */export const optimizeImages = (): void => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
  });
};

/**
 * Preload critical resources
 */export const preloadCriticalResources = (resources: string[]): void => {
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
 */export const initPerformanceMonitoring = (): void => {
  if (!isPerformanceSupported()) return;

  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        img.src = img.dataset['src'] || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

/**
 * Optimize scroll performance
 */export const measurePageLoad = (): WebVitalsMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const perfData = window.performance.timing;
  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (!perfData || !navigation) return null;

  return {
    FCP: navigation.responseStart - navigation.fetchStart,
    LCP: navigation.loadEventEnd - navigation.loadEventStart,
    FID: 0, //First Input Delay - requires user interaction
    CLS: 0, //Cumulative Layout Shift - requires layout shift observer
    TTFB: navigation.responseStart - navigation.requestStart,
    INP: 0 //Interaction to Next Paint - requires user interaction

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    interactiveTime: navigation.domInteractive - navigation.fetchStart,
    TTFB: navigation.responseStart - navigation.fetchStart,
export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    //Scroll optimization logic here
    ticking = false;
 * Check if performance budget is exceeded
 */
export const checkPerformanceBudget = (
  metrics: WebVitalsMetrics, budget: PerformanceBudget): { passed: boolean; violations: string[] } => {
  const violations: string[] = [];

  if (metrics.FCP && metrics.FCP > budget.maxFirstLoad) {
    violations.push(`FCP ${metrics.FCP}ms exceeds budget ${budget.maxFirstLoad}ms`);
  }

  if (metrics.LCP && metrics.LCP > budget.maxInteractive) {
    violations.push(`LCP ${metrics.LCP}ms exceeds budget ${budget.maxInteractive}ms`);
  }

  return {
    passed: violations.length === 0,
    violations
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
 * Monitor long tasks
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  if (typeof window === 'undefined') return;
  
  //Send to analytics service
  //Performance metrics logged for monitoring
};

/**
 * Check if WebP is supported
 */export const shouldUseWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Get connection quality
 */export const getConnectionQuality = (): 'slow' | 'medium' | 'fast' => {
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
 */export const shouldLoadHeavyAssets = (): boolean => {
  const quality = getConnectionQuality();
  const saveData = typeof navigator !== 'undefined' && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  return quality === 'fast' && !saveData;
};

/**
 * Request Idle Callback wrapper with fallback
 */export const requestIdleCallback = (callback: IdleRequestCallback): number => {
  if (typeof window === 'undefined') return 0;
  
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback);
  }
  
  //Fallback for browsers that don't support requestIdleCallback
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
 */export const cancelIdleCallback = (id: number): void => {
  if (typeof window === 'undefined') return;
  
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    window.clearTimeout(id);
 * Get performance metrics from browser
 */
export const getPerformanceMetrics = (): WebVitalsMetrics => {
  if (typeof window === 'undefined') {
    return {};
  }

  const metrics: WebVitalsMetrics = {};

  //Get FCP
  const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
  if (fcpEntry) {
    metrics.FCP = fcpEntry.startTime;
  }

  //Get LCP
  const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
  if (lcpEntries.length > 0) {
    metrics.LCP = lcpEntries[lcpEntries.length - 1].startTime;
  }

  //Get TTFB
  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigationEntry) {
    metrics.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
  }

  return metrics;
};

  constructor(budget: PerformanceBudget) {
    this.budget = budget;
  }

  /**
   * Record a performance metric
   */recordMetric(name: keyof WebVitalsMetrics, value: number): void {
    this.metrics[name] = value;
  }

/**
 * Optimize images for performance
 */export function debounce<T extends (...args: unknown[]) => unknown>(
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

/**
 * Lazy load images
 */export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;
  
  try {
    const observer = new PerformanceObserver(list => {
      callback(list.getEntries());
    });
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  } catch (e) {
    //PerformanceObserver not supported in this environment
    return null;
  }

/**
 * Cache static assets
 */export const cacheStaticAssets = async (urls: string[]): Promise<void> => {
  if (typeof caches === 'undefined') return;
  
  const cache = await caches.open('static-assets-v1');
  await cache.addAll(urls);
};

/**
 * Clear old caches
 */export const clearOldCaches = async (currentVersion: string): Promise<void> => {
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
 */export const checkPerformanceBudget = (budget: PerformanceBudget): {
  passed: boolean;
  violations: string[];
} => {
  const violations: string[] = [];
  
  if (typeof window === 'undefined' || !window.performance) {
    return { passed: true, violations };
  }
  
  //Check bundle size (simplified)
  const scripts = document.querySelectorAll('script[src]');
  let totalSize = 0;
  scripts.forEach(script => {
    const src = (script as HTMLScriptElement).src;
    if (src && !src.startsWith('data:')) {
      totalSize += 100; //Simplified size estimation
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== undefined) {
          this.metrics[key] = value;
        }
      });
    }
    }
    }
    }
  });
  
  if (totalSize > budget.maxBundleSize) {
    violations.push(`Bundle size ${totalSize}KB exceeds budget ${budget.maxBundleSize}KB`);
  }
  
  //Check load time
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  if (loadTime > budget.maxFirstLoad) {
    violations.push(`Load time ${loadTime}ms exceeds budget ${budget.maxFirstLoad}ms`);
  }
  
  const memory = (performance as any).memory;
  }
  
  //Check load time
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  if (loadTime > budget.maxFirstLoad) {
    violations.push(`Load time ${loadTime}ms exceeds budget ${budget.maxFirstLoad}ms`);
  }
  
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
    }
    document.head.appendChild(link);
  });
    }
    document.head.appendChild(link);
  });
    }
    document.head.appendChild(link);
  });
    }
    document.head.appendChild(link);
  });
};

/**
 * Performance Optimizer Class
 */class PerformanceOptimizer {
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();
 * Performance monitoring class
 */
export class PerformanceMonitor {
  private metrics: WebVitalsMetrics = {};
  private budget: PerformanceBudget;
export const collectPerformanceMetrics = (): WebVitalsMetrics => {
  if (typeof window === 'undefined') {
    return {};
  }

  const metrics: WebVitalsMetrics = {};
          }
        }
      });
    });

    observer.observe(img);
  } else {
    //Fallback for older browsers
    img.src = img.dataset.src || '';
  }
};

/**
 * Performance monitoring
 */export class PerformanceMonitor {
  private metrics: WebVitalsMetrics = {};
  private budget: PerformanceBudget;

  constructor(budget: PerformanceBudget) {
    this.budget = budget;
  }

  startMonitoring(): void {
    if (typeof window === 'undefined') return;

    //Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
  }

  private observeLCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.LCP = lastEntry.startTime;
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private observeFID(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.FID = entry.processingStart - entry.startTime;
        });
      });

  //Get navigation timing
  if (performance.timing) {
    const timing = performance.timing;
    const navigationStart = timing.navigationStart;
    metrics.TTFB = timing.responseStart - navigationStart;
  }

  //Get paint timing
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
 */export class PerformanceMonitor {
  private metrics: WebVitalsMetrics = {};
  private budget: PerformanceBudget;

  constructor(budget: PerformanceBudget) {
    this.budget = budget;
  }

  /**
   * Record a performance metric
   */recordMetric(name: keyof WebVitalsMetrics, value: number): void {
    this.metrics[name] = value;
  }

  /**
   * Check if performance is within budget
   */checkBudget(): { passed: boolean; violations: string[] } {
    const violations: string[] = [];

    if (this.metrics.FCP && this.metrics.FCP > this.budget.maxFirstLoad) {
      violations.push(`FCP ${this.metrics.FCP}ms exceeds budget ${this.budget.maxFirstLoad}ms`);
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

  public checkPerformanceBudget(): boolean {
    const metrics = this.getMetrics();
    const budget = this.budget;

    //Check bundle size (would need to be passed in)
    //Check image sizes (would need to be measured)
    //Check load times
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
      //Add loading="lazy" if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      //Add decoding="async" if not present
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
      document.head.appendChild(link);
    });
  }

  public optimizeScroll(): void {
    let ticking = false;

    const updateScrollPosition = () => {
      //Throttled scroll handling
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

  //Measure performance metrics
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

  //Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  //Add critical resource hints method
  addCriticalResourceHints(): void {
    addCriticalResourceHints();
  }

  //Add Web Vitals reporting method
  reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }

  //Measure page load performance
  measurePageLoad(): WebVitalsMetrics | null {
    return measurePageLoad();
/**
 * Resource hints for performance
 */export const preloadCriticalResources = (): void => {
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
 */export const preconnectDomains = (domains: string[]): void => {
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
 */export const lazyLoadImages = (): void => {
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
 */export function debounce<T extends (...args: any[]) => any>(
  func: T, wait: number): (...args: Parameters<T>) => void {
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
 */export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T, limit: number): (...args: Parameters<T>) => void {
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
 */export const measurePageLoad = (): WebVitalsMetrics | null => {
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
 */export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  //Web Vitals logged

  //Send to analytics service
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
 */export const shouldUseWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Get connection quality
 */export const getConnectionQuality = (): 'slow' | 'medium' | 'fast' => {
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
 */export const shouldLoadHeavyAssets = (): boolean => {
  const quality = getConnectionQuality();
  const saveData = typeof navigator !== 'undefined' && (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData;
  return quality === 'fast' && !saveData;
};

/**
 * Request Idle Callback wrapper with fallback
 */export const requestIdleCallback = (callback: IdleRequestCallback): number => {
  if (typeof window === 'undefined') return 0;
  
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback);
  }
  
  //Fallback for browsers that don't support requestIdleCallback
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
 */export const cancelIdleCallback = (id: number): void => {
  if (typeof window === 'undefined') return;
  
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    (window as unknown as { clearTimeout: (id: number) => void }).clearTimeout(id);
  }
};

/**
 * Preload critical resources
 */export const preloadCriticalResources = (): void => {
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
  //Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }

  //Get performance summary
  getPerformanceSummary() {
    return {
      averageRenderTime: 12.5,
      totalComponents: 45,
  memoryUsage: 0,
      slowComponents: 0
    };
  }

  //Export metrics
  exportMetrics() {
    return this.getMetrics();
  }

  //Clear metrics
  clearMetrics() {
    this.metrics.clear();
  }

  //Measure page load timing
  measurePageLoadTiming(): Record<string, number> | null {
  }

  public measurePageLoad(): WebVitalsMetrics | null {
    return measurePageLoad();
  }

  public monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }

  //Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  //Measure page load performance
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
      firstPaint: performance.getEntriesByType('paint')[0]?.['startTime'] || 0
    };
  }

  //Monitor long tasks
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    
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
    prefetchResources(urls);
  }

  //Get performance summary
  getPerformanceSummary() {
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      interactiveTime: timing.domInteractive - timing.navigationStart,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart
    };
  }

  //Monitor long tasks
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

  //Get performance summary
  getPerformanceSummary(): {
    averageRenderTime: number;
    totalComponents: number;
    memoryUsage: number;
    slowComponents: number;
  } {
    const metrics = this.getMetrics();
    return {
      averageRenderTime: metrics['averageRenderTime'] || 0,
      totalComponents: metrics['totalComponents'] || 0,
      memoryUsage: metrics['memoryUsage'] || 0,
      slowComponents: metrics['slowComponents'] || 0,
    };
  }

  //Export metrics
  exportMetrics(): Record<string, any> {
    return this.getMetrics();
  }

  //Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  }

  }

  exportMetrics() {
    return this.getMetrics();
  }

  }

  //Clear metrics
  clearMetrics() {
    this.metrics.clear();
  }

  //Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
  }
}

/**
 * Critical resource hints for better performance
 */export const addCriticalResourceHints = (): void => {
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

export const checkPerformanceBudget = (budget: PerformanceBudgetCheck): {
//PerformanceBudget interface is already defined above

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

//Export individual functions for backward compatibility
export {
  lazyLoadImagesStandalone as lazyLoadImages,
  measurePageLoadStandalone as measurePageLoad,
  reportWebVitalsStandalone as reportWebVitals
//Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();

export const throttle = <T extends (...args: any[]) => any>(
  func: T, limit: number): ((...args: Parameters<T>) => void) => {
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

  public measurePageLoad(): WebVitalsMetrics | null {
    return measurePageLoad();
  }

  public monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
    return monitorLongTasks(callback);
  }

  //Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

    });
  }

  //Get performance summary
  getPerformanceSummary() {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }
    
    const timing = window.performance.timing;
  /**
   * Get all metrics
   */getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  /**
   * Check if performance budget is exceeded
   */checkBudget(): { passed: boolean; violations: string[] } {
    const violations: string[] = [];

    if (this.metrics.FCP && this.metrics.FCP > this.budget.maxFirstLoad) {
      violations.push(`FCP ${this.metrics.FCP}ms exceeds budget ${this.budget.maxFirstLoad}ms`);
    }

    if (this.metrics.LCP && this.metrics.LCP > this.budget.maxInteractive) {
      violations.push(`LCP ${this.metrics.LCP}ms exceeds budget ${this.budget.maxInteractive}ms`);
    }

    return {
      passed: violations.length === 0,
      violations
    };
  }

  public preconnectDomains(domains: string[]): void {
    preconnectDomains(domains);
  }

  //Clear metrics
  clearMetrics() {
    this.metrics.clear();
  }

  }

  //Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
  }

  public preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];
    prefetchResources(criticalResources);
 * Performance monitoring class
 */
class PerformanceOptimizer {
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  /**
   * Track performance metrics
   */
  trackPerformance(name: string,
  value: number, unit: string = 'ms'): void {
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
    if (this.metrics.LCP && this.metrics.LCP > this.budget.maxInteractive) {
      violations.push(`LCP ${this.metrics.LCP}ms exceeds budget ${this.budget.maxInteractive}ms`);
    }

    return {
      passed: violations.length === 0,
      violations
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

//Export singleton instance
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
  checkPerformanceBudget,
  addCriticalResourceHints
};
  checkPerformanceBudget
};

//Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();
};
export const performanceOptimizer = new PerformanceOptimizer();
export default performanceOptimizer;
export const performanceOptimizer = new PerformanceOptimizer();

//Export default for compatibility
export default performanceOptimizer;
const performanceOptimizer = new PerformanceOptimizer();
export default performanceOptimizer;
  performanceOptimizer
};
};
   * Get current metrics
   */
  getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  /**
   * Start monitoring
   */
  start(): void {
    //Implementation for starting monitoring
    console.log('Performance monitoring started');
  }
}

/**
 * Image optimization utilities
 */export const imageOptimizer = {
  /**
   * Generate responsive image srcset
   */generateSrcSet: (baseUrl: string, widths: number[]): string => {
    return widths
      .map(width => `${baseUrl}?w=${width} ${width}w`)
      .join(', ');
  },

  /**
   * Check if image needs optimization
   */needsOptimization: (fileSize: number, budget: number): boolean => {
    return fileSize > budget;
  }
};

/**
 * Bundle size analyzer
 */export const bundleAnalyzer = {
  /**
   * Check bundle size against budget
   */checkBundleSize: (actualSize: number, budget: number): boolean => {
    return actualSize <= budget;
  },

  /**
   * Calculate compression ratio
   */calculateCompressionRatio: (originalSize: number, compressedSize: number): number => {
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
    //Implementation would send to analytics service
    console.log('Performance metrics:', metrics);
  },

  /**
   * Generate performance report
   */generateReport: (metrics: WebVitalsMetrics): string => {
    return JSON.stringify(metrics, null, 2);
  }
};

/**
 * Main performance optimizer class
 */export class PerformanceOptimizer {
  private monitor: PerformanceMonitor;
  private budget: PerformanceBudget;

  constructor(budget: PerformanceBudget) {
    this.monitor = new PerformanceMonitor(budget);
    this.budget = budget;
  }

  /**
   * Initialize performance optimization
   */initialize(): void {
    //Initialize performance monitoring
    this.monitor.start();
  }

  /**
   * Get performance metrics
   */getMetrics(): WebVitalsMetrics {
    return this.monitor.getMetrics();
  }

  /**
   * Check performance budget
   */checkBudget(): { passed: boolean; violations: string[] } {
    return this.monitor.checkBudget();
  }

  /**
   * Monitor long tasks
   */monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {
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
   */lazyLoadImages(): void {
    //Implementation for lazy loading images
    console.log('Lazy loading images');
  }

  /**
   * Measure page load
   */measurePageLoad(): void {
    //Implementation for measuring page load
    console.log('Measuring page load');
  }

  /**
   * Report web vitals
   */reportWebVitals(): void {
    //Implementation for reporting web vitals
    console.log('Reporting web vitals');
  }
}

//Export a default instance
export const performanceOptimizer = new PerformanceOptimizer({
  maxBundleSize: 1000,
  maxImageSize: 500,
  maxFirstLoad: 3000,
  maxInteractive: 5000
});
      exceeded: violations.length > 0,
      violations,
    };
  }
}

/**
 * Default performance budget
 */export const defaultPerformanceBudget: PerformanceBudget = {
  maxBundleSize: 500, //500KB
  maxImageSize: 200, //200KB
  maxFirstLoad: 2000, //2 seconds
  maxInteractive: 3000, //3 seconds
};

/**
 * Initialize performance optimization
 */export const initializePerformanceOptimization = (): void => {
  if (typeof window === 'undefined') return;

  //Lazy load images
  lazyLoadImages();

  //Preload critical resources
  preloadCriticalResources();

  //Optimize scroll performance
  optimizeScrollPerformance();

  //Start performance monitoring
  const monitor = new PerformanceMonitor(defaultPerformanceBudget);
  monitor.startMonitoring();

  //Log performance metrics
  setTimeout(() => {
    const metrics = monitor.getMetrics();
    const budgetCheck = monitor.checkBudget();
    
    console.log('Performance Metrics:', metrics);
    if (budgetCheck.exceeded) {
      console.warn('Performance Budget Exceeded:', budgetCheck.violations);
    }
  }, 5000);
};
};
};
};
};
}

/**
 * Initialize performance monitoring
 */export const initPerformanceMonitoring = (budget: PerformanceBudget): PerformanceMonitor => {
  const monitor = new PerformanceMonitor(budget);

  //Monitor Web Vitals
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
 */export const performanceOptimizer = {
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
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  private observeCLS(): void {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        this.metrics.CLS = clsValue;
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  checkBudget(): { passed: boolean; violations: string[] } {
    return checkPerformanceBudget(this.metrics, this.budget);
  }
}

/**
 * Default performance budget
 */export const DEFAULT_BUDGET: PerformanceBudget = {
  maxBundleSize: 500, //500KB
  maxImageSize: 200, //200KB
  maxFirstLoad: 2000, //2s
  maxInteractive: 3000 // 3s
};
