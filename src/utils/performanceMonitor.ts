'use client';

/**
 * Advanced Performance Monitoring Utility
 * Tracks Core Web Vitals and custom metrics
 */

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  customMetrics: Record<string, number>;
}

class PerformanceMonitor {
  private _metrics: PerformanceMetrics = {
    customMetrics: {}
  };
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;
    this.setupWebVitals();
    this.setupCustomMetrics();
    this.setupResourceTiming();
  }

  private setupWebVitals(): void {
    try {
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        this.observeEntry('paint', (entries) => {
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.recordMetric('FCP', entry.startTime);
            }
          });
        });

        // Largest Contentful Paint
        this.observeEntry('largest-contentful-paint', entries => {
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.recordMetric('LCP', lastEntry.startTime);
          }
        });

        // First Input Delay
        this.observeEntry('first-input', entries => {
          const firstInput = entries[0];
          if (firstInput && (firstInput as any).processingStart !== undefined) {
            const fid = (firstInput as any).processingStart - firstInput.startTime;
            this.recordMetric('FID', fid);
          }
        });

        // Cumulative Layout Shift
        this.observeEntry('layout-shift', (entries) => {
          let clsValue = 0;
          entries.forEach((entry: PerformanceEntry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          if (clsValue > 0) {
            this.recordMetric('CLS', clsValue);
          }
        });
      }
    } catch (error) {
      console.error('Failed to setup web vitals', error);
    }
  }

  private observeEntry(entryType: string, callback: (entries: PerformanceEntry[]) => void): void {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ entryTypes: [entryType] });
      this.observers.push(observer);
    } catch (error) {
      // Performance observation failed - handled silently
    }
  }

  private recordMetric(name: string, value: number): void {
    (this._metrics as any)[name.toLowerCase()] = value;
    this.logMetric(name, value);
  }

  private setupCustomMetrics(): void {
    // Time to First Byte
    if (performance.timing) {
      this._metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.logMetric('TTFB', this._metrics.ttfb);
    }

    // Page Load Time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('pageLoadTime', loadTime);
    }
  }

  private setupResourceTiming(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            this.analyzeResource(resourceEntry);
          }
        }
      });
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch (error) {
      // Resource observation failed - handled silently
    }
  }

  private analyzeResource(entry: PerformanceResourceTiming): void {
    const duration = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;
    
    if (duration > 1000) {
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    
    if (size > 100000) {
      this.addCustomMetric(`largeResource_${entry.name}`, size);
    }
  }

  addCustomMetric(name: string, value: number): void {
    this._metrics.customMetrics[name] = value;
    this.logMetric(name, value);
  }

  private logMetric(name: string, value: number): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance metric: ${name} = ${value}ms`);
    }
  }

  get metrics(): PerformanceMetrics {
    return { ...this._metrics };
  }

  getMetrics(): PerformanceMetrics {
    return { ...this._metrics };
  }

  getScore(): number {
    const scores = [];
    
    if (this._metrics.fcp) {
      if (this._metrics.fcp <= 1800) scores.push(100);
      else if (this._metrics.fcp <= 4000) scores.push(50);
      else scores.push(25);
    }
    
    if (this._metrics.lcp) {
      if (this._metrics.lcp <= 2500) scores.push(100);
      else if (this._metrics.lcp <= 4000) scores.push(75);
      else if (this._metrics.lcp <= 6000) scores.push(50);
      else scores.push(25);
    }
    
    if (this._metrics.fid) {
      if (this._metrics.fid <= 100) scores.push(100);
      else if (this._metrics.fid <= 300) scores.push(75);
      else if (this._metrics.fid <= 500) scores.push(50);
      else scores.push(25);
    }
    
    if (this._metrics.cls) {
      if (this._metrics.cls <= 0.1) scores.push(100);
      else if (this._metrics.cls <= 0.25) scores.push(75);
      else if (this._metrics.cls <= 0.4) scores.push(50);
      else scores.push(25);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

export const performanceMonitor = new PerformanceMonitor();

export const measureWebVitals = (): void => {
  performanceMonitor.init();
};

export default performanceMonitor;
