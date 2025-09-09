// Performance monitoring utilities for better application insights

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  memoryUsage?: number;
  timestamp: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics[] = [];
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.initializeObservers();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeObservers() {
    // Only run in browser environment
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.recordMetric('firstContentfulPaint', fcpEntry.startTime);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordMetric('largestContentfulPaint', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.recordMetric('firstInputDelay', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.recordMetric('cumulativeLayoutShift', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);

    } catch (error) {
      console.warn('Performance monitoring initialization failed:', error);
    }
  }

  private recordMetric(key: keyof PerformanceMetrics, value: number) {
    const currentMetrics = this.getCurrentMetrics();
    (currentMetrics as any)[key] = value;
  }

  private getCurrentMetrics(): PerformanceMetrics {
    const now = Date.now();
    const loadTime = now - performance.timeOrigin;
    
    return {
      loadTime,
      timestamp: now,
    };
  }

  public getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getLatestMetrics(): PerformanceMetrics | null {
    return this.metrics.length > 0 ? this.metrics[this.metrics.length - 1] : null;
  }

  public measureFunction<T>(name: string, fn: () => T): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    console.log(`⏱️ ${name} took ${(end - start).toFixed(2)}ms`);
    return result;
  }

  public async measureAsyncFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    
    console.log(`⏱️ ${name} took ${(end - start).toFixed(2)}ms`);
    return result;
  }

  public measureResourceLoad(url: string): Promise<number> {
    return new Promise((resolve) => {
      const start = performance.now();
      
      const img = new Image();
      img.onload = () => {
        const end = performance.now();
        resolve(end - start);
      };
      img.onerror = () => {
        const end = performance.now();
        resolve(end - start);
      };
      img.src = url;
    });
  }

  public getMemoryUsage(): number | null {
    if ('memory' in performance) {
      return (performance as any).memory.usedJSHeapSize;
    }
    return null;
  }

  public reportMetrics(): void {
    const metrics = this.getLatestMetrics();
    if (!metrics) return;

    const report = {
      ...metrics,
      memoryUsage: this.getMemoryUsage(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    console.log('📊 Performance Metrics:', report);

    // In production, you might want to send this to an analytics service
    if (import.meta.env.PROD) {
      // Example: Send to analytics service
      // sendToAnalytics(report);
    }
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Convenience functions
export const performanceMonitor = PerformanceMonitor.getInstance();

export const measurePerformance = <T>(name: string, fn: () => T): T => {
  return performanceMonitor.measureFunction(name, fn);
};

export const measureAsyncPerformance = <T>(name: string, fn: () => Promise<T>): Promise<T> => {
  return performanceMonitor.measureAsyncFunction(name, fn);
};

export default performanceMonitor;