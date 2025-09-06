// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.initializeWebVitals();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeWebVitals(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.set('lcp', lastEntry.startTime);
        this.logMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP observer failed:', error);
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          this.metrics.set('fid', fid);
          this.logMetric('FID', fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('FID observer failed:', error);
    }

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.set('cls', clsValue);
        this.logMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS observer failed:', error);
    }

    // First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.set('fcp', entry.startTime);
          this.logMetric('FCP', entry.startTime);
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP observer failed:', error);
    }
  }

  private logMetric(name: string, value: number): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }
  }

  public getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public getMemoryUsage(): Record<string, number> | null {
    if (typeof window === 'undefined' || !('memory' in performance)) {
      return null;
    }

    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576),
      total: Math.round(memory.totalJSHeapSize / 1048576),
      limit: Math.round(memory.jsHeapSizeLimit / 1048576)
    };
  }

  public getNavigationTiming(): Record<string, number> | null {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return null;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      domInteractive: navigation.domInteractive - navigation.navigationStart,
      firstByte: navigation.responseStart - navigation.navigationStart
    };
  }

  public measureCustomMetric(name: string, fn: () => void): number {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    this.metrics.set(name, duration);
    this.logMetric(name, duration);
    
    return duration;
  }

  public async measureAsyncMetric(name: string, fn: () => Promise<void>): Promise<number> {
    const start = performance.now();
    await fn();
    const end = performance.now();
    const duration = end - start;
    
    this.metrics.set(name, duration);
    this.logMetric(name, duration);
    
    return duration;
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Utility functions for performance monitoring
export const measurePerformance = (name: string, fn: () => void): number => {
  return PerformanceMonitor.getInstance().measureCustomMetric(name, fn);
};

export const measureAsyncPerformance = async (name: string, fn: () => Promise<void>): Promise<number> => {
  return PerformanceMonitor.getInstance().measureAsyncMetric(name, fn);
};

export const getPerformanceMetrics = (): Record<string, number> => {
  return PerformanceMonitor.getInstance().getMetrics();
};

export const getMemoryUsage = (): Record<string, number> | null => {
  return PerformanceMonitor.getInstance().getMemoryUsage();
};

export const getNavigationTiming = (): Record<string, number> | null => {
  return PerformanceMonitor.getInstance().getNavigationTiming();
};

// Performance thresholds
export const PERFORMANCE_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 },
  FID: { good: 100, needsImprovement: 300 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 }
} as const;

export const getPerformanceScore = (metric: string, value: number): 'good' | 'needsImprovement' | 'poor' => {
  const threshold = PERFORMANCE_THRESHOLDS[metric as keyof typeof PERFORMANCE_THRESHOLDS];
  if (!threshold) return 'poor';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needsImprovement';
  return 'poor';
};