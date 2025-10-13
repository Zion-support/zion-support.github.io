<<<<<<< HEAD
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export class PerformanceUtils {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  };

  measureLoadTime() {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }
  }

  measureRenderTime() {
    if (typeof window !== 'undefined' && window.performance) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.metrics.renderTime = fcp.startTime;
      }
    }
  }

  measureMemoryUsage() {
    if (typeof window !== 'undefined' && (window as unknown as { performance?: { memory?: { usedJSHeapSize: number } } }).performance?.memory) {
      const memory = (window as unknown as { performance: { memory: { usedJSHeapSize: number } } }).performance.memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }
  }

  measureFPS() {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFrame = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        this.metrics.fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFrame);
    };
    
    requestAnimationFrame(measureFrame);
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  reset() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0
=======
interface PerformanceUtilsConfig {
  enabled: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
// Utility functions;
export function utilityFunction() {
  // Implementation here;
  return null;
}

export class performanceUtils {
  private config: performanceUtilsConfig;
=======
  monitoring: boolean;
  optimization: boolean;
}

export class PerformanceUtils {
  private config: PerformanceUtilsConfig;
=======
  measureCoreWebVitals?: boolean;
  measureResourceTiming?: boolean;
  measureUserTiming?: boolean;
  measureNavigationTiming?: boolean;
  reportToAnalytics?: boolean;
}

export class PerformanceUtils {
  private config: PerformanceUtilsConfig;
  private metrics: Map<string, number> = new Map();

  constructor(config: Partial<PerformanceUtilsConfig> = {}) {
    this.config = {
      enabled: true,
<<<<<<< HEAD
      monitoring: true,
      optimization: true,
=======
      measureCoreWebVitals: true,
      measureResourceTiming: true,
      measureUserTiming: true,
      measureNavigationTiming: true,
      reportToAnalytics: false,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
<<<<<<< HEAD
      console.log('Performance utils initialized');
    }
  }

  measurePerformance(name: string, fn: () => void): void {
    if (this.config.monitoring) {
      const start = performance.now();
      fn();
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    } else {
      fn();
    }
  }

  optimizeImages(): void {
    if (this.config.optimization) {
      console.log('Optimizing images...');
    }
  }
}

<<<<<<< HEAD
export const performanceutils = new performanceUtils();
export default performanceutils;
export default utilityFunction;
  optimizeImages() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  },

  setupLazyLoading() {
    // Preload critical resources
    const criticalResources = [
//       '/app/styles/futuristic.css',
//       '/app/styles/futuristic-enhanced.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'style';
      document.head.appendChild(link);
    });
  },

  cleanup() {
    // Cleanup performance monitoring
    if (typeof window !== 'undefined') {
      // Remove any performance observers
      const observers = (window as any).__performanceObservers || [];
      observers.forEach((observer: any) => observer.disconnect());
    }
=======
/**
 * Performance utility functions
 */;
export const measurePerformance = (nam,
  e: string, f)
  n: () => void) => {/* TODO: Fix JSX expression */}
    //     } else {/* TODO: Fix JSX expression */}
  }
}
;
export const getPageLoadTime = (): number | null => {/* TODO: Fix JSX expression */}
  }
  return null
}
;
export const optimizeImages = () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
  if (typeof window !== 'undefined') {;';
const _images = document.querySelectorAll('img')'
    images.forEach(img => {)
      if (!img.loading) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        img.loading = 'lazy';';
export const optimizeImages = () => {/* TODO: Fix JSX expression */}
      }
    })
  }
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, height?: number, quality = 80) => {
  if (!src) return src;

  // If it's already an optimized URL, return as is
  if (src.includes('w_') || src.includes('q_')) return src;

  // For placeholder images, return as is
  if (src.includes('placeholder') || src.includes('api/placeholder')) return src;

  // Add optimization parameters
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  params.set('f', 'auto'); // Auto format

  const separator = src.includes('?') ? '&' : '?';
  return `${src}${separator}${params.toString()}`;
};

// Bundle size optimization
export const optimizeBundle = {
  // Lazy load non-critical components
  lazyLoadComponent: (importFn: () => Promise<any>) => {
    return React.lazy(importFn);
  },

  // Preload critical routes
  preloadRoute: (routePath: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = routePath;
      document.head.appendChild(link);
    }
  }
};

// Memory optimization
export const memoryOptimizer = {
  // Clean up unused objects
  cleanup: () => {
    if (typeof window !== 'undefined' && 'gc' in window) {
      (window as any).gc();
    }
  },

  // Monitor memory usage
  getMemoryUsage: () => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  }
};

// Cache optimization
export const cacheOptimizer = {
  // Set cache headers for static assets
  setCacheHeaders: (response: Response) => {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  },

  // Clear cache when needed
  clearCache: () => {
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
  }
};

export default performanceOptimizer;
=======
export const performanceUtils = new PerformanceUtils();
export default performanceUtils;
=======
      this.setupCoreWebVitals();
      this.setupResourceTiming();
      this.setupUserTiming();
      this.setupNavigationTiming();
      console.log('PerformanceUtils initialized');
    }
  }

  private setupCoreWebVitals(): void {
    if (!this.config.measureCoreWebVitals) return;

    // Measure Largest Contentful Paint (LCP)
    this.measureLCP();
    
    // Measure First Input Delay (FID)
    this.measureFID();
    
    // Measure Cumulative Layout Shift (CLS)
    this.measureCLS();
    
    // Measure First Contentful Paint (FCP)
    this.measureFCP();
  }

  private measureLCP(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('LCP', lastEntry.startTime);
      this.reportMetric('LCP', lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private measureFID(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.processingStart) {
          this.metrics.set('FID', entry.processingStart - entry.startTime);
          this.reportMetric('FID', entry.processingStart - entry.startTime);
        }
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
  }

  private measureCLS(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.set('CLS', clsValue);
      this.reportMetric('CLS', clsValue);
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  }

  private measureFCP(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.set('FCP', entry.startTime);
        this.reportMetric('FCP', entry.startTime);
      });
    });

    observer.observe({ entryTypes: ['paint'] });
  }

  private setupResourceTiming(): void {
    if (!this.config.measureResourceTiming) return;

    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const resourceName = entry.name;
        const loadTime = entry.responseEnd - entry.requestStart;
        this.metrics.set(`resource_${resourceName}`, loadTime);
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }

  private setupUserTiming(): void {
    if (!this.config.measureUserTiming) return;

    // Example user timing measurements
    this.mark('app-start');
    
    // Measure component render times
    this.measureComponentRender = (componentName: string, renderFn: () => void) => {
      this.mark(`${componentName}-start`);
      renderFn();
      this.mark(`${componentName}-end`);
      this.measure(`${componentName}-render`, `${componentName}-start`, `${componentName}-end`);
    };
  }

  private setupNavigationTiming(): void {
    if (!this.config.measureNavigationTiming) return;

    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      this.metrics.set('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      this.metrics.set('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
      this.metrics.set('TotalLoadTime', navigation.loadEventEnd - navigation.fetchStart);
      
      this.reportMetric('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      this.reportMetric('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
      this.reportMetric('TotalLoadTime', navigation.loadEventEnd - navigation.fetchStart);
    });
  }

  mark(name: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
    }
  }

  measure(name: string, startMark: string, endMark: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name)[0];
        if (measure) {
          this.metrics.set(name, measure.duration);
        }
      } catch (error) {
        console.warn(`Failed to measure ${name}:`, error);
      }
    }
  }

  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  private reportMetric(name: string, value: number): void {
    if (!this.config.reportToAnalytics) return;

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        event_category: 'Performance'
      });
    }
  }

  // Public method for measuring component renders
  measureComponentRender: (componentName: string, renderFn: () => void) => void = () => {};

  // Method to measure async operations
  async measureAsync<T>(name: string, asyncFn: () => Promise<T>): Promise<T> {
    this.mark(`${name}-start`);
    try {
      const result = await asyncFn();
      this.mark(`${name}-end`);
      this.measure(name, `${name}-start`, `${name}-end`);
      return result;
    } catch (error) {
      this.mark(`${name}-error`);
      this.measure(`${name}-error`, `${name}-start`, `${name}-error`);
      throw error;
    }
  }

  // Method to measure function execution time
  measureFunction<T extends any[], R>(name: string, fn: (...args: T) => R) {
    return (...args: T): R => {
      this.mark(`${name}-start`);
      try {
        const result = fn(...args);
        this.mark(`${name}-end`);
        this.measure(name, `${name}-start`, `${name}-end`);
        return result;
      } catch (error) {
        this.mark(`${name}-error`);
        this.measure(`${name}-error`, `${name}-start`, `${name}-error`);
        throw error;
      }
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
    };
  }
}

<<<<<<< HEAD
export default PerformanceUtils;
=======
export const performanceUtils = new PerformanceUtils();
export default performanceUtils;
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
