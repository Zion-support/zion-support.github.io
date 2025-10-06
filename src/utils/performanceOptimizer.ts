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
};

/**
 * Measure page load performance
 */
export const measurePageLoad = (): WebVitalsMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    interactiveTime: navigation.domInteractive - navigation.fetchStart,
    TTFB: navigation.responseStart - navigation.fetchStart,
  };
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !window.PerformanceObserver) {
    return null;
  }

  try {
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
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
      }
    });
  }

  public preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];
    prefetchResources(criticalResources);
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();
export default performanceOptimizer;