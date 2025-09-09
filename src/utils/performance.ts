/**
 * Performance monitoring utilities
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  bundleSize: number;
  memoryUsage: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    bundleSize: 0,
    memoryUsage: 0,
  };

  private startTime: number = 0;

  constructor() {
    this.startTime = performance.now();
    this.measureLoadTime();
    this.measureMemoryUsage();
  }

  private measureLoadTime() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        this.metrics.loadTime = performance.now() - this.startTime;
        this.reportMetrics();
      });
    }
  }

  private measureMemoryUsage() {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
    }
  }

  private reportMetrics() {
    if (process.env.NODE_ENV === 'development') {
      console.group('🚀 Performance Metrics');
      console.log(`Load Time: ${this.metrics.loadTime.toFixed(2)}ms`);
      console.log(`Memory Usage: ${this.metrics.memoryUsage.toFixed(2)}MB`);
      console.log(`Bundle Size: ${this.metrics.bundleSize}KB`);
      console.groupEnd();
    }
  }

  public measureRenderTime(componentName: string) {
    const start = performance.now();
    return () => {
      const end = performance.now();
      const renderTime = end - start;
      this.metrics.renderTime = renderTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }
    };
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
}

export const performanceMonitor = new PerformanceMonitor();

/**
 * Hook for measuring component performance
 */
export function usePerformanceMeasure(componentName: string) {
  const measure = performanceMonitor.measureRenderTime(componentName);
  return measure;
}

/**
 * Bundle size analyzer
 */
export function analyzeBundleSize() {
  if (typeof window !== 'undefined') {
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    let totalSize = 0;
    
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('assets/')) {
        // Estimate size based on file name patterns
        const sizeMatch = src.match(/-([a-zA-Z0-9]+)\.js$/);
        if (sizeMatch) {
          totalSize += sizeMatch[1].length * 0.1; // Rough estimate
        }
      }
    });
    
    return totalSize;
  }
  return 0;
}

/**
 * Performance optimization utilities
 */
export const performanceUtils = {
  /**
   * Debounce function for performance
   */
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  /**
   * Throttle function for performance
   */
  throttle<T extends (...args: any[]) => any>(
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
  },

  /**
   * Memoize function for expensive calculations
   */
  memoize<T extends (...args: any[]) => any>(func: T): T {
    const cache = new Map();
    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = func(...args);
      cache.set(key, result);
      return result;
    }) as T;
  },
};