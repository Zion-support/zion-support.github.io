/**
 * Advanced Performance Metrics Collection
 * Provides comprehensive performance monitoring and analytics
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  category: 'navigation' | 'resource' | 'paint' | 'layout' | 'script' | 'user';
  unit: 'ms' | 'bytes' | 'count' | 'score';
}

export interface PerformanceReport {
  timestamp: number;
  url: string;
  userAgent: string;
  connectionType?: string;
  metrics: PerformanceMetric[];
  coreWebVitals: {
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  };
  summary: {
    totalLoadTime: number;
    domContentLoaded: number;
    firstPaint: number;
    firstContentfulPaint: number;
    largestContentfulPaint?: number;
    cumulativeLayoutShift?: number;
    firstInputDelay?: number;
    timeToFirstByte?: number;
  };
}

class AdvancedPerformanceMetrics {
  private static instance: AdvancedPerformanceMetrics;
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  public static getInstance(): AdvancedPerformanceMetrics {
    if (!AdvancedPerformanceMetrics.instance) {
      AdvancedPerformanceMetrics.instance = new AdvancedPerformanceMetrics();
    }
    return AdvancedPerformanceMetrics.instance;
  }

  public initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }

    this.setupPerformanceObservers();
    this.collectInitialMetrics();
    this.isInitialized = true;
  }

  private setupPerformanceObservers(): void {
    // Navigation timing
    if ('PerformanceObserver' in window) {
      try {
        const navObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            this.addMetric({
              name: entry.name,
              value: entry.duration,
              timestamp: entry.startTime,
              category: 'navigation',
              unit: 'ms'
            });
          });
        });
        navObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navObserver);
      } catch (error) {
        console.warn('Failed to setup navigation observer:', error);
      }

      // Resource timing
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            this.addMetric({
              name: entry.name,
              value: entry.duration,
              timestamp: entry.startTime,
              category: 'resource',
              unit: 'ms'
            });
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      } catch (error) {
        console.warn('Failed to setup resource observer:', error);
      }

      // Paint timing
      try {
        const paintObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            this.addMetric({
              name: entry.name,
              value: entry.startTime,
              timestamp: entry.startTime,
              category: 'paint',
              unit: 'ms'
            });
          });
        });
        paintObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(paintObserver);
      } catch (error) {
        console.warn('Failed to setup paint observer:', error);
      }

      // Layout shift
      try {
        const layoutShiftObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            this.addMetric({
              name: 'layout-shift',
              value: entry.value,
              timestamp: entry.startTime,
              category: 'layout',
              unit: 'score'
            });
          });
        });
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(layoutShiftObserver);
      } catch (error) {
        console.warn('Failed to setup layout shift observer:', error);
      }

      // Long tasks
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            this.addMetric({
              name: 'long-task',
              value: entry.duration,
              timestamp: entry.startTime,
              category: 'script',
              unit: 'ms'
            });
          });
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        this.observers.push(longTaskObserver);
      } catch (error) {
        console.warn('Failed to setup long task observer:', error);
      }
    }
  }

  private collectInitialMetrics(): void {
    // Navigation timing
    if (performance.timing) {
      const timing = performance.timing;
      const navigationStart = timing.navigationStart;

      this.addMetric({
        name: 'dns-lookup',
        value: timing.domainLookupEnd - timing.domainLookupStart,
        timestamp: timing.domainLookupStart - navigationStart,
        category: 'navigation',
        unit: 'ms'
      });

      this.addMetric({
        name: 'tcp-handshake',
        value: timing.connectEnd - timing.connectStart,
        timestamp: timing.connectStart - navigationStart,
        category: 'navigation',
        unit: 'ms'
      });

      this.addMetric({
        name: 'request-response',
        value: timing.responseEnd - timing.requestStart,
        timestamp: timing.requestStart - navigationStart,
        category: 'navigation',
        unit: 'ms'
      });

      this.addMetric({
        name: 'dom-processing',
        value: timing.domComplete - timing.domLoading,
        timestamp: timing.domLoading - navigationStart,
        category: 'navigation',
        unit: 'ms'
      });

      this.addMetric({
        name: 'load-event',
        value: timing.loadEventEnd - timing.loadEventStart,
        timestamp: timing.loadEventStart - navigationStart,
        category: 'navigation',
        unit: 'ms'
      });
    }

    // Memory usage
    if ((performance as unknown as { memory?: { usedJSHeapSize?: number; totalJSHeapSize?: number } }).memory) {
      const memory = (performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
      this.addMetric({
        name: 'memory-used',
        value: memory.usedJSHeapSize,
        timestamp: performance.now(),
        category: 'script',
        unit: 'bytes'
      });

      this.addMetric({
        name: 'memory-total',
        value: memory.totalJSHeapSize,
        timestamp: performance.now(),
        category: 'script',
        unit: 'bytes'
      });
    }
  }

  private addMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    
    // Keep only last 1000 metrics to prevent memory leaks
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }
  }

  public getCoreWebVitals(): PerformanceReport['coreWebVitals'] {
    const vitals: PerformanceReport['coreWebVitals'] = {};

    // Get LCP
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      vitals.lcp = lcpEntries[lcpEntries.length - 1].startTime;
    }

    // Get FCP
    const fcpEntries = performance.getEntriesByName('first-contentful-paint');
    if (fcpEntries.length > 0) {
      vitals.fcp = fcpEntries[0].startTime;
    }

    // Get CLS
    const clsEntries = this.metrics.filter(m => m.name === 'layout-shift');
    if (clsEntries.length > 0) {
      vitals.cls = clsEntries.reduce((sum, entry) => sum + entry.value, 0);
    }

    // Get TTFB
    if (performance.timing) {
      vitals.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
    }

    return vitals;
  }

  public getPerformanceReport(): PerformanceReport {
    const coreWebVitals = this.getCoreWebVitals();
    
    // Calculate summary metrics
    const summary = {
      totalLoadTime: performance.timing ? 
        performance.timing.loadEventEnd - performance.timing.navigationStart : 0,
      domContentLoaded: performance.timing ?
        performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart : 0,
      firstPaint: 0,
      firstContentfulPaint: coreWebVitals.fcp || 0,
      largestContentfulPaint: coreWebVitals.lcp,
      cumulativeLayoutShift: coreWebVitals.cls,
      firstInputDelay: coreWebVitals.fid,
      timeToFirstByte: coreWebVitals.ttfb
    };

    // Get first paint
    const paintEntries = performance.getEntriesByType('paint');
    const fpEntry = paintEntries.find(entry => entry.name === 'first-paint');
    if (fpEntry) {
      summary.firstPaint = fpEntry.startTime;
    }

    return {
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connectionType: (navigator as any).connection?.effectiveType,
      metrics: [...this.metrics],
      coreWebVitals,
      summary
    };
  }

  public getMetricsByCategory(category: PerformanceMetric['category']): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.category === category);
  }

  public getAverageMetricValue(name: string): number {
    const metrics = this.metrics.filter(m => m.name === name);
    if (metrics.length === 0) return 0;
    
    const sum = metrics.reduce((total, metric) => total + metric.value, 0);
    return sum / metrics.length;
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics = [];
    this.isInitialized = false;
  }
}

export const advancedPerformanceMetrics = AdvancedPerformanceMetrics.getInstance();