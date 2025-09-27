// Performance monitoring utilities

// Declare gtag for Google Analytics
declare global {
  function gtag(...args: unknown[]): void;
}

interface PerformanceEntryWithProcessingStart extends PerformanceEntry {
  processingStart: number;
}

interface PerformanceEntryWithValue extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];
  private intervalId: NodeJS.Timeout | null = null;

  private constructor() {
    this.initializeObservers();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeObservers(): void {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.set('LCP', lastEntry.startTime);
          this.reportMetric('LCP', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch {
        console.warn('LCP observer not supported');
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntryWithProcessingStart;
            if ('processingStart' in fidEntry) {
              this.metrics.set('FID', fidEntry.processingStart - fidEntry.startTime);
              this.reportMetric('FID', fidEntry.processingStart - fidEntry.startTime);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch {
        console.warn('FID observer not supported');
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const clsEntry = entry as PerformanceEntryWithValue;
            if ('value' in clsEntry && 'hadRecentInput' in clsEntry && !clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          });
          this.metrics.set('CLS', clsValue);
          this.reportMetric('CLS', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch {
        console.warn('CLS observer not supported');
      }

      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.set('FCP', entry.startTime);
              this.reportMetric('FCP', entry.startTime);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch {
        console.warn('FCP observer not supported');
      }
    }
  }

  private reportMetric(name: string, value: number): void {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }

    // Send to analytics service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: name,
          value: Math.round(value),
          non_interaction: true
        });
      }
    }
  }

  public measurePageLoad(): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          this.metrics.set('TTFB', navigation.responseStart - navigation.requestStart);
          this.metrics.set('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.fetchStart);
          this.metrics.set('LoadComplete', navigation.loadEventEnd - navigation.fetchStart);
          
          this.reportMetric('TTFB', navigation.responseStart - navigation.requestStart);
          this.reportMetric('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.fetchStart);
          this.reportMetric('LoadComplete', navigation.loadEventEnd - navigation.fetchStart);
        }
      }, 0);
    });
  }

  public measureCustomMetric(name: string, startTime: number): void {
    const endTime = performance.now();
    const duration = endTime - startTime;
    this.metrics.set(name, duration);
    this.reportMetric(name, duration);
  }

  public getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Utility functions
export const measurePerformance = (name: string, fn: () => void): void => {
  const startTime = performance.now();
  fn();
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${duration.toFixed(2)}ms`);
  }
};

export const measureAsyncPerformance = async <T>(name: string, fn: () => Promise<T>): Promise<T> => {
  const startTime = performance.now();
  const result = await fn();
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${duration.toFixed(2)}ms`);
  }
  
  return result;
};

// React hook for performance monitoring
export const usePerformanceMonitor = () => {
  const monitor = PerformanceMonitor.getInstance();
  
  return {
    measureCustomMetric: (name: string, startTime: number) => monitor.measureCustomMetric(name, startTime),
    getMetrics: () => monitor.getMetrics(),
    getMetric: (name: string) => monitor.getMetric(name),
    measurePageLoad: () => monitor.measurePageLoad()
  };
};

// Enhanced performance utilities
export class ResourceMonitor {
  private static instance: ResourceMonitor;
  private resourceTimings: Map<string, PerformanceResourceTiming[]> = new Map();

  public static getInstance(): ResourceMonitor {
    if (!ResourceMonitor.instance) {
      ResourceMonitor.instance = new ResourceMonitor();
    }
    return ResourceMonitor.instance;
  }

  public startMonitoring(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const domain = new URL(resourceEntry.name).hostname;
            
            if (!this.resourceTimings.has(domain)) {
              this.resourceTimings.set(domain, []);
            }
            this.resourceTimings.get(domain)!.push(resourceEntry);
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
    }
  }

  public getResourceMetrics(): Record<string, {
    count: number;
    totalSize: number;
    averageLoadTime: number;
    slowestResource: string;
  }> {
    const metrics: Record<string, unknown> = {};
    
    this.resourceTimings.forEach((timings, domain) => {
      const totalSize = timings.reduce((sum, timing) => sum + (timing.transferSize || 0), 0);
      const totalLoadTime = timings.reduce((sum, timing) => sum + timing.duration, 0);
      const averageLoadTime = totalLoadTime / timings.length;
      const slowestResource = timings.reduce((slowest, timing) => 
        timing.duration > slowest.duration ? timing : slowest
      ).name;

      metrics[domain] = {
        count: timings.length,
        totalSize,
        averageLoadTime,
        slowestResource
      };
    });

    return metrics as Record<string, { count: number; totalSize: number; averageLoadTime: number; slowestResource: string; }>;
  }
}

// Memory monitoring utilities
export class MemoryMonitor {
  private static instance: MemoryMonitor;
  private memoryHistory: Array<{
    timestamp: number;
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  }> = [];
  private intervalId: NodeJS.Timeout | null = null;

  public static getInstance(): MemoryMonitor {
    if (!MemoryMonitor.instance) {
      MemoryMonitor.instance = new MemoryMonitor();
    }
    return MemoryMonitor.instance;
  }

  public startMonitoring(intervalMs: number = 5000): void {
    if ('memory' in performance) {
      const interval = setInterval(() => {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
        this.memoryHistory.push({
          timestamp: Date.now(),
          usedJSHeapSize: memory?.usedJSHeapSize || 0,
          totalJSHeapSize: memory?.totalJSHeapSize || 0,
          jsHeapSizeLimit: memory?.jsHeapSizeLimit || 0
        });

        // Keep only last 100 measurements
        if (this.memoryHistory.length > 100) {
          this.memoryHistory.shift();
        }
      }, intervalMs);

      // Store interval ID for cleanup
      this.intervalId = interval;
    }
  }

  public getMemoryMetrics(): {
    current: number;
    average: number;
    peak: number;
    trend: 'increasing' | 'decreasing' | 'stable';
  } {
    const current = this.memoryHistory[this.memoryHistory.length - 1];
    const average = this.memoryHistory.reduce((sum, m) => sum + m.usedJSHeapSize, 0) / this.memoryHistory.length;
    const peak = Math.max(...this.memoryHistory.map(m => m.usedJSHeapSize));
    
    // Calculate trend (last 10 measurements)
    const recent = this.memoryHistory.slice(-10);
    const trend = recent.length >= 2 ? 
      (recent[recent.length - 1].usedJSHeapSize > recent[0].usedJSHeapSize ? 'increasing' : 'decreasing') :
      'stable';

    return { current: current.usedJSHeapSize, average, peak, trend };
  }

  public stopMonitoring(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}