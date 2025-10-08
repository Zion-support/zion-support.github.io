/**
 * Advanced Performance Monitoring System
 * Tracks Web Vitals, custom metrics, and provides performance insights
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export interface WebVitals {
  CLS?: PerformanceMetric;  // Cumulative Layout Shift
  FID?: PerformanceMetric;  // First Input Delay
  FCP?: PerformanceMetric;  // First Contentful Paint
  LCP?: PerformanceMetric;  // Largest Contentful Paint
  TTFB?: PerformanceMetric; // Time to First Byte
  INP?: PerformanceMetric;  // Interaction to Next Paint
}

export interface CustomMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
  tags?: Record<string, string>;
}

class PerformanceMonitor {
  private metrics: CustomMetric[] = [];
  private webVitals: WebVitals = {};
  private observers: PerformanceObserver[] = [];
  private callbacks: Array<(metric: PerformanceMetric) => void> = [];

  /**
   * Initialize performance monitoring
   */
  init(): void {
    if (typeof window === 'undefined') return;

    this.observeWebVitals();
    this.observeNavigationTiming();
    this.observeResourceTiming();
  }

  /**
   * Track a custom performance metric
   */
  trackMetric(name: string, value: number, unit: string = 'ms', tags?: Record<string, string>): void {
    const metric: CustomMetric = {
      name,
      value,
      unit,
      timestamp: Date.now(),
      tags,
    };

    this.metrics.push(metric);

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
//       console.log(`[Performance] ${name}: ${value}${unit}`, tags);
    }
  }

  /**
   * Measure execution time of a function
   */
  async measureAsync<T>(
    name: string,
    fn: () => Promise<T>,
    tags?: Record<string, string>
  ): Promise<T> {
    const start = performance.now();
    try {
      const result = await fn();
      const duration = performance.now() - start;
      this.trackMetric(name, duration, 'ms', tags);
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      this.trackMetric(`${name}_error`, duration, 'ms', { ...tags, error: 'true' });
      throw error;
    }
  }

  /**
   * Measure execution time of a synchronous function
   */
  measure<T>(name: string, fn: () => T, tags?: Record<string, string>): T {
    const start = performance.now();
    try {
      const result = fn();
      const duration = performance.now() - start;
      this.trackMetric(name, duration, 'ms', tags);
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      this.trackMetric(`${name}_error`, duration, 'ms', { ...tags, error: 'true' });
      throw error;
    }
  }

  /**
   * Create a performance mark
   */
  mark(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
    }
  }

  /**
   * Measure between two marks
   */
  measureBetween(name: string, startMark: string, endMark: string): number | null {
    if (typeof performance === 'undefined' || !performance.measure) return null;

    try {
      performance.measure(name, startMark, endMark);
      const entries = performance.getEntriesByName(name, 'measure');
      if (entries.length > 0) {
        const duration = entries[entries.length - 1].duration;
        this.trackMetric(name, duration, 'ms');
        return duration;
      }
    } catch (error) {
      console.warn('Failed to measure performance:', error);
    }
    return null;
  }

  /**
   * Get all tracked metrics
   */
  getMetrics(name?: string): CustomMetric[] {
    if (name) {
      return this.metrics.filter((m) => m.name === name);
    }
    return [...this.metrics];
  }

  /**
   * Get Web Vitals metrics
   */
  getWebVitals(): WebVitals {
    return { ...this.webVitals };
  }

  /**
   * Register callback for metric updates
   */
  onMetric(callback: (metric: PerformanceMetric) => void): () => void {
    this.callbacks.push(callback);
    return () => {
      this.callbacks = this.callbacks.filter((cb) => cb !== callback);
    };
  }

  /**
   * Get performance statistics
   */
  getStatistics(): {
    totalMetrics: number;
    averagesByName: Record<string, number>;
    webVitals: WebVitals;
  } {
    const averagesByName: Record<string, number> = {};

    // Group metrics by name and calculate averages
    const metricsByName = this.metrics.reduce((acc, metric) => {
      if (!acc[metric.name]) {
        acc[metric.name] = [];
      }
      acc[metric.name].push(metric.value);
      return acc;
    }, {} as Record<string, number[]>);

    Object.entries(metricsByName).forEach(([name, values]) => {
      averagesByName[name] = values.reduce((sum, val) => sum + val, 0) / values.length;
    });

    return {
      totalMetrics: this.metrics.length,
      averagesByName,
      webVitals: this.webVitals,
    };
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics = [];
  }

  /**
   * Observe Web Vitals
   */
  private observeWebVitals(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      // Observe Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        if (lastEntry) {
          const metric = this.createMetric('LCP', lastEntry.renderTime || lastEntry.loadTime);
          this.webVitals.LCP = metric;
          this.notifyCallbacks(metric);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // Observe First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const metric = this.createMetric('FID', entry.processingStart - entry.startTime);
          this.webVitals.FID = metric;
          this.notifyCallbacks(metric);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // Observe Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        const metric = this.createMetric('CLS', clsValue);
        this.webVitals.CLS = metric;
        this.notifyCallbacks(metric);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
//       console.warn('Failed to observe Web Vitals:', error);
    }
  }

  /**
   * Observe navigation timing
   */
  private observeNavigationTiming(): void {
    if (typeof window === 'undefined' || !performance.getEntriesByType) return;

    window.addEventListener('load', () => {
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0];
        
        // Track various navigation metrics
        this.trackMetric('dns_lookup', nav.domainLookupEnd - nav.domainLookupStart);
        this.trackMetric('tcp_connection', nav.connectEnd - nav.connectStart);
        this.trackMetric('request_time', nav.responseStart - nav.requestStart);
        this.trackMetric('response_time', nav.responseEnd - nav.responseStart);
        this.trackMetric('dom_interactive', nav.domInteractive - nav.fetchStart);
        this.trackMetric('dom_complete', nav.domComplete - nav.fetchStart);
        this.trackMetric('load_event', nav.loadEventEnd - nav.loadEventStart);

        // TTFB (Time to First Byte)
        const ttfb = nav.responseStart - nav.requestStart;
        const ttfbMetric = this.createMetric('TTFB', ttfb);
        this.webVitals.TTFB = ttfbMetric;
        this.notifyCallbacks(ttfbMetric);

        // FCP (First Contentful Paint)
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          const fcpMetric = this.createMetric('FCP', fcpEntry.startTime);
          this.webVitals.FCP = fcpMetric;
          this.notifyCallbacks(fcpMetric);
        }
      }
    });
  }

  /**
   * Observe resource timing
   */
  private observeResourceTiming(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.initiatorType) {
            this.trackMetric(
              `resource_${entry.initiatorType}`,
              entry.duration,
              'ms',
              { name: entry.name }
            );
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (error) {
//       console.warn('Failed to observe resource timing:', error);
    }
  }

  /**
   * Create a performance metric with rating
   */
  private createMetric(name: string, value: number): PerformanceMetric {
    return {
      name,
      value,
      rating: this.getRating(name, value),
      timestamp: Date.now(),
    };
  }

  /**
   * Get rating for a metric based on thresholds
   */
  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: Record<string, { good: number; poor: number }> = {
      LCP: { good: 2500, poor: 4000 },
      FID: { good: 100, poor: 300 },
      CLS: { good: 0.1, poor: 0.25 },
      FCP: { good: 1800, poor: 3000 },
      TTFB: { good: 800, poor: 1800 },
      INP: { good: 200, poor: 500 },
    };

    const threshold = thresholds[name];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Notify all callbacks
   */
  private notifyCallbacks(metric: PerformanceMetric): void {
    this.callbacks.forEach((callback) => {
      try {
        callback(metric);
      } catch (error) {
//         console.error('Error in performance callback:', error);
      }
    });
  }

  /**
   * Clean up observers
   */
  cleanup(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Initialize on browser
if (typeof window !== 'undefined') {
  performanceMonitor.init();
}

export default performanceMonitor;
