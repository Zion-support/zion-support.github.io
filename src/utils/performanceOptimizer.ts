/**
 * Performance Optimization Utilities
 * Provides tools for optimizing React application performance
 */
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private observer: PerformanceObserver | null = null;
  private metrics: Map<string, number> = new Map();
  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }
  /**
   * Initialize performance monitoring
   */
  init(): void {
    if (typeof window === 'undefined') return;
    // Monitor Core Web Vitals
    this.observeCoreWebVitals();
    // Monitor resource loading
    this.observeResourceTiming();
    // Monitor long tasks
    this.observeLongTasks();
  }
  /**
   * Monitor Core Web Vitals (LCP, FID, CLS)
   */
  private observeCoreWebVitals(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      // Largest Contentful Paint
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        this.metrics.set('LCP', lastEntry.startTime);
        console.log('LCP:', lastEntry.startTime);
      });
      this.observer.observe({ entryTypes: ['largest-contentful-paint'] });
      // First Input Delay
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.set('FID', entry.processingStart - entry.startTime);
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      this.observer.observe({ entryTypes: ['first-input'] });
      // Cumulative Layout Shift
      this.observer = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.set('CLS', clsValue);
        console.log('CLS:', clsValue);
      });
      this.observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }
  /**
   * Monitor resource loading performance
   */
  private observeResourceTiming(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.initiatorType === 'script' || entry.initiatorType === 'link') {
            const loadTime = entry.responseEnd - entry.startTime;
            console.log(`${entry.name}: ${loadTime}ms`);
          }
        });
      });
      this.observer.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.warn('Resource timing not supported:', error);
    }
  }
  /**
   * Monitor long tasks that block the main thread
   */
  private observeLongTasks(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          console.warn('Long task detected:', entry.duration);
        });
      });
      this.observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.warn('Long task monitoring not supported:', error);
    }
  }
  /**
   * Get performance metrics
   */
  getMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }
  /**
   * Report performance metrics to analytics
   */
  reportMetrics(): void {
    const metrics = this.getMetrics();
    console.log('Performance Metrics:', Object.fromEntries(metrics));
    // Send to analytics service if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      metrics.forEach((value, key) => {
        (window as any).gtag('event', 'performance_metric', {
          metric_name: key,
          metric_value: value,
          event_category: 'Performance'
        });
      });
    }
  }
  /**
   * Cleanup observers
   */
  cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
/**
 * React hook for performance optimization
 */
export function usePerformanceOptimization() {
  const [metrics, setMetrics] = React.useState<Map<string, number>>(new Map());
  React.useEffect(() => {
    const optimizer = PerformanceOptimizer.getInstance();
    optimizer.init();
    const interval = setInterval(() => {
      setMetrics(optimizer.getMetrics());
    }, 5000);
    return () => {
      optimizer.cleanup();
      clearInterval(interval);
    };
  }, []);
  return metrics;
}
/**
 * Debounce utility for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
/**
 * Throttle utility for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
/**
 * Memoization utility for expensive calculations
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();
  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
/**
 * Image lazy loading utility
 */
export function createLazyImageObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
}
/**
 * Preload critical resources
 */
export function preloadCriticalResources(resources: string[]): void {
  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    if (resource.endsWith('.css')) {
      link.as = 'style';
    } else if (resource.endsWith('.js')) {
      link.as = 'script';
    } else if (resource.match(/\.(jpg|jpeg|png|webp|svg)$/)) {
      link.as = 'image';
    }
    document.head.appendChild(link);
  });
}
/**
 * Bundle size analyzer
 */
export function analyzeBundleSize(): void {
  if (typeof window === 'undefined') return;
  const scripts = Array.from(document.scripts);
  const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  console.log('Bundle Analysis:');
  console.log('Scripts:', scripts.length);
  console.log('Stylesheets:', stylesheets.length);
  // Analyze script sizes
  scripts.forEach((script, index) => {
    if (script.src) {
      console.log(`Script ${index + 1}: ${script.src}`);
    }
  });
}
export default PerformanceOptimizer;
