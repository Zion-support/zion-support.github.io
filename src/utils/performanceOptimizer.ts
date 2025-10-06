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
 * Report web vitals
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metrics);
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
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;
  
  const observer = new PerformanceObserver(list => {
    const longTasks = list.getEntries().filter(entry => entry.duration > 50);
    if (longTasks.length > 0) {
      callback(longTasks);
    }
  });
  
  try {
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  } catch (error) {
    console.warn('Long task monitoring not supported:', error);
    return null;
  }
};

/**
 * Performance monitoring class
 */
export class PerformanceOptimizer {
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
        link.crossOrigin = hint.crossOrigin;
      }
      document.head.appendChild(link);
    });
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();