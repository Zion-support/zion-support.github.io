/**
 * Performance Optimizer Utility
 * Simple performance monitoring and optimization tools
 */

export interface WebVitalsMetrics {
  FCP?: number;
  LCP?: number;
  FID?: number;
  CLS?: number;
  TTFB?: number;
  loadTime?: number;
  interactiveTime?: number;
  domContentLoaded?: number;
}

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

export const measurePageLoad = (): WebVitalsMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const perfData = window.performance.timing;
  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (!perfData || !navigation) return null;

  return {
    FCP: navigation.responseStart - navigation.fetchStart,
    LCP: navigation.loadEventEnd - navigation.loadEventStart,
    FID: 0,
    CLS: 0,
    TTFB: navigation.responseStart - navigation.requestStart,
    loadTime: perfData.loadEventEnd - perfData.navigationStart,
    interactiveTime: perfData.domInteractive - perfData.navigationStart,
    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart
  };
};

export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metrics);
  }
};

class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics = new Map<string, number>();

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  lazyLoadImages(): void {
    lazyLoadImages();
  }

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

  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  measurePageLoad(): WebVitalsMetrics | null {
    return measurePageLoad();
  }

  reportWebVitals(metrics: WebVitalsMetrics): void {
    reportWebVitals(metrics);
  }
}

export const performanceOptimizer = PerformanceOptimizer.getInstance();

export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
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

export const initialize = (): void => {
  lazyLoadImages();
};

export default {
  debounce,
  throttle,
  lazyLoadImages,
  measurePageLoad,
  reportWebVitals,
  performanceOptimizer,
  getMetrics: () => performanceOptimizer.getMetrics(),
  initialize,
  monitorLongTasks
};
