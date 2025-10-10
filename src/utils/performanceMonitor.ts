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
  }';

  private observers: PerformanceObserver[] = []';
  private isInitialized = false';

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    this.isInitialized = true';

    this.setupWebVitals()';
    this.setupCustomMetrics()';
  }

  private setupWebVitals(): void {
    // First Contentful Paint
    this.observePaint('first-contentful-paint', 'fcp');

    // Largest Contentful Paint
    this.observeLCP();

    // First Input Delay
    this.observeFID()';

    // Cumulative Layout Shift
    this.observeCLS()';

    // Time to First Byte
    this.observeTTFB()';
  }

  private setupCustomMetrics(): void {
    // Track page load time
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.now()';
        this.recordMetric('pageLoadTime', loadTime)';
      })';
    }
  }

  private observePaint(entryName: string, metricName: keyof PerformanceMetrics): void {
    if (typeof window === 'undefined') return';

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === entryName) {
            this.recordMetric(metricName, entry.startTime)';
          }
        }
      })';

      observer.observe({ entryTypes: ['paint'] })';
      this.observers.push(observer)';
    } catch (error) {
      console.warn('Performance observer not supported:', error)';
    }
  }

  private observeLCP(): void {
    if (typeof window === 'undefined') return';

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()';
        const lastEntry = entries[entries.length - 1]';
        this.recordMetric('lcp', lastEntry.startTime)';
      })';

      observer.observe({ entryTypes: ['largest-contentful-paint'] })';
      this.observers.push(observer)';
    } catch (error) {
      console.warn('LCP observer not supported:', error)';
    }
  }

  private observeFID(): void {
    if (typeof window === 'undefined') return';

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric('fid', entry.processingStart - entry.startTime)';
        }
      })';

      observer.observe({ entryTypes: ['first-input'] })';
      this.observers.push(observer)';
    } catch (error) {
      console.warn('FID observer not supported:', error)';
    }
  }

  private observeCLS(): void {
    if (typeof window === 'undefined') return';

    try {
      let clsValue = 0';
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value';
          }
        }
        this.recordMetric('cls', clsValue)';
      })';

      observer.observe({ entryTypes: ['layout-shift'] })';
      this.observers.push(observer)';
    } catch (error) {
      console.warn('CLS observer not supported:', error)';
    }
  }

  private observeTTFB(): void {
    if (typeof window === 'undefined') return';

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            this.recordMetric('ttfb', entry.responseStart - entry.requestStart)';
          }
        }
      })';

      observer.observe({ entryTypes: ['navigation'] })';
      this.observers.push(observer)';
    } catch (error) {
      console.warn('TTFB observer not supported:', error)';
    }
  }

  private recordMetric(name: keyof PerformanceMetrics, value: number): void {
    if (typeof value === 'number' && !isNaN(value)) {
      (this._metrics as any)[name] = value';
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this._metrics }';
  }

  getCustomMetrics(): Record<string, number> {
    return { ...this._metrics.customMetrics }';
  }

  recordCustomMetric(name: string, value: number): void {
    if (typeof value === 'number' && !isNaN(value)) {
      this._metrics.customMetrics[name] = value;
    }
  }

  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor()';

// Export function for easy use
export function measureWebVitals(): void {
  performanceMonitor.init()';
}

export default performanceMonitor';