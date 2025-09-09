// Performance monitoring and optimization utilities

export interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  memoryUsage: number;
  renderTime: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
}

export class PerformanceTracker {
  private static instance: PerformanceTracker;
  private metrics: PerformanceMetrics | null = null;
  private observers: ((metrics: PerformanceMetrics) => void)[] = [];

  static getInstance(): PerformanceTracker {
    if (!PerformanceTracker.instance) {
      PerformanceTracker.instance = new PerformanceTracker();
    }
    return PerformanceTracker.instance;
  }

  private constructor() {
    this.initializeTracking();
  }

  private initializeTracking() {
    if (typeof window === 'undefined') return;

    // Track page load performance
    window.addEventListener('load', () => {
      this.captureMetrics();
    });

    // Track navigation timing
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          bundleSize: this.estimateBundleSize(),
          memoryUsage: this.getMemoryUsage(),
          renderTime: performance.now(),
          firstContentfulPaint: this.getFirstContentfulPaint(),
          largestContentfulPaint: this.getLargestContentfulPaint(),
          cumulativeLayoutShift: this.getCumulativeLayoutShift(),
        };
      }
    }
  }

  private estimateBundleSize(): number {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('assets/')) {
        // Rough estimation based on common bundle sizes
        totalSize += 200; // KB
      }
    });
    
    return totalSize;
  }

  private getMemoryUsage(): number {
    if ('memory' in performance) {
      return (performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
    }
    return 0;
  }

  private getFirstContentfulPaint(): number | undefined {
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcp ? fcp.startTime : undefined;
  }

  private getLargestContentfulPaint(): number | undefined {
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    const lcp = lcpEntries[lcpEntries.length - 1];
    return lcp ? lcp.startTime : undefined;
  }

  private getCumulativeLayoutShift(): number | undefined {
    const clsEntries = performance.getEntriesByType('layout-shift');
    return clsEntries.reduce((total, entry) => {
      return total + (entry as any).value;
    }, 0);
  }

  private captureMetrics() {
    if (this.metrics) {
      this.notifyObservers(this.metrics);
    }
  }

  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  public subscribe(callback: (metrics: PerformanceMetrics) => void): () => void {
    this.observers.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.observers.indexOf(callback);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    };
  }

  private notifyObservers(metrics: PerformanceMetrics) {
    this.observers.forEach(callback => callback(metrics));
  }

  public logMetrics() {
    if (this.metrics) {
      console.group('🚀 Performance Metrics');
      console.log('Load Time:', `${this.metrics.loadTime.toFixed(2)}ms`);
      console.log('Bundle Size:', `~${this.metrics.bundleSize}KB`);
      console.log('Memory Usage:', `${this.metrics.memoryUsage.toFixed(2)}MB`);
      console.log('Render Time:', `${this.metrics.renderTime.toFixed(2)}ms`);
      
      if (this.metrics.firstContentfulPaint) {
        console.log('First Contentful Paint:', `${this.metrics.firstContentfulPaint.toFixed(2)}ms`);
      }
      if (this.metrics.largestContentfulPaint) {
        console.log('Largest Contentful Paint:', `${this.metrics.largestContentfulPaint.toFixed(2)}ms`);
      }
      if (this.metrics.cumulativeLayoutShift) {
        console.log('Cumulative Layout Shift:', this.metrics.cumulativeLayoutShift.toFixed(4));
      }
      
      console.groupEnd();
    }
  }
}

// Export singleton instance
export const performanceTracker = PerformanceTracker.getInstance();

// Utility functions
export const measurePerformance = (fn: () => void, label: string): number => {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;
  
  if (import.meta.env.MODE === 'development') {
    console.log(`⏱️ ${label}: ${duration.toFixed(2)}ms`);
  }
  
  return duration;
};

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