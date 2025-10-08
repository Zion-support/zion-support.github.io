/**
 * Performance optimization utilities
 */

export interface WebVitalsMetrics {
  // Web Vitals metrics tracking
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
 * Performance budget checker
 */
export interface PerformanceBudget {
  maxBundleSize: number; // in KB
  maxImageSize: number; // in KB
  maxFirstLoad: number; // in ms
  maxInteractive: number; // in ms
}

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const imageObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset['src'];
          if (src) {
            img['src'] = src;
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
 * Add critical resource hints
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
 * Measure page load performance
 */
export const measurePageLoad = (): WebVitalsMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) return null;

  const perfData = window.performance.timing;
  const navigation = window.performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming;

  return {
    FCP: navigation?.responseStart - navigation?.fetchStart,
    TTFB: perfData.responseStart - perfData.navigationStart,
    loadTime: perfData.loadEventEnd - perfData.navigationStart,
    interactiveTime: perfData.domInteractive - perfData.navigationStart,
    domContentLoaded:
      perfData.domContentLoadedEventEnd - perfData.navigationStart,
  };
};

/**
 * Report Web Vitals to analytics
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  // Web Vitals metrics available for reporting

  // Send to analytics service
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag) {
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== undefined) {
        (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', key, {
          value: Math.round(value),
          event_category: 'Web Vitals',
          non_interaction: true,
        });
      }
    });
  }
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = (
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window))
    return null;

  try {
    const observer = new PerformanceObserver(list => {
      callback(list.getEntries());
    });
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  } catch {
    // Long task monitoring not supported - fallback handling
    return null;
  }
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
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
 * Performance Optimizer Class
 */
class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();

  private constructor() {}

  static getInstance(): PerformanceOptimizer {
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
    optimizeScroll();
  }

  public preloadCriticalResources(): void {
    preloadCriticalResources();
  }

  public addCriticalResourceHints(): void {
    addCriticalResourceHints();
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

  public getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages());
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources());
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll());
    this.measurePerformance('addCriticalResourceHints', () => this.addCriticalResourceHints());
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();

const performanceUtils = {
  lazyLoadImages,
  preloadCriticalResources,
  optimizeScroll,
  addCriticalResourceHints,
  measurePageLoad,
  reportWebVitals,
  monitorLongTasks,
  debounce,
  throttle,
  performanceOptimizer
};

export default performanceUtils;