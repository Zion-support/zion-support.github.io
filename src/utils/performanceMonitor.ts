/**
 * Performance Monitoring Utility
 * Tracks and reports application performance metrics
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, PerformanceMetric[]> = new Map();
  private readonly maxMetricsPerType = 100;

  private constructor() {
    this.initializeObservers();
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeObservers(): void {
    if (typeof window === 'undefined') return;

    // Observe long tasks
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.recordMetric('long-task', entry.duration);
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.warn('Failed to observe long tasks:', e);
      }
    }
  }

  /**
   * Record a performance metric
   */
  recordMetric(name: string, value: number): void {
    const rating = this.getRating(name, value);
    const metric: PerformanceMetric = {
      name,
      value,
      rating,
      timestamp: Date.now(),
    };

    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }

    const metricsArray = this.metrics.get(name)!;
    metricsArray.push(metric);

    // Keep only the last N metrics
    if (metricsArray.length > this.maxMetricsPerType) {
      metricsArray.shift();
    }
  }

  /**
   * Get rating for a metric based on web vitals thresholds
   */
  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: Record<string, { good: number; poor: number }> = {
      'FCP': { good: 1800, poor: 3000 },
      'LCP': { good: 2500, poor: 4000 },
      'FID': { good: 100, poor: 300 },
      'CLS': { good: 0.1, poor: 0.25 },
      'TTFB': { good: 800, poor: 1800 },
      'long-task': { good: 50, poor: 100 },
    };

    const threshold = thresholds[name] || { good: 100, poor: 500 };

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Get all metrics for a specific type
   */
  getMetrics(name?: string): PerformanceMetric[] {
    if (name) {
      return this.metrics.get(name) || [];
    }

    const allMetrics: PerformanceMetric[] = [];
    this.metrics.forEach((metrics) => {
      allMetrics.push(...metrics);
    });
    return allMetrics;
  }

  /**
   * Get average value for a metric
   */
  getAverage(name: string): number {
    const metrics = this.metrics.get(name) || [];
    if (metrics.length === 0) return 0;

    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / metrics.length;
  }

  /**
   * Get performance summary
   */
  getSummary(): Record<string, { average: number; count: number; rating: string }> {
    const summary: Record<string, { average: number; count: number; rating: string }> = {};

    this.metrics.forEach((metrics, name) => {
      const average = this.getAverage(name);
      const rating = this.getRating(name, average);
      summary[name] = {
        average,
        count: metrics.length,
        rating,
      };
    });

    return summary;
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics.clear();
  }

  /**
   * Measure execution time of a function
   */
  async measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    try {
      const result = await fn();
      const duration = performance.now() - start;
      this.recordMetric(name, duration);
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      this.recordMetric(`${name}-error`, duration);
      throw error;
    }
  }

  /**
   * Measure execution time of a synchronous function
   */
  measure<T>(name: string, fn: () => T): T {
    const start = performance.now();
    try {
      const result = fn();
      const duration = performance.now() - start;
      this.recordMetric(name, duration);
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      this.recordMetric(`${name}-error`, duration);
      throw error;
    }
  }
}

export default PerformanceMonitor.getInstance();