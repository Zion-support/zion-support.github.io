/**
 * Enhanced Performance Monitoring Utility
 * Tracks and reports application performance metrics
 */

import { logger } from './logger';

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
  category: PerformanceCategory;
  metadata?: Record<string, unknown>;
}

export enum PerformanceCategory {
  LOAD = 'load',
  RENDER = 'render',
  API = 'api',
  INTERACTION = 'interaction',
  CUSTOM = 'custom',
}

export interface PerformanceThresholds {
  load: number;
  render: number;
  api: number;
  interaction: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetric[] = [];
  private maxMetrics = 1000;
  private thresholds: PerformanceThresholds = {
    load: 3000,      // 3 seconds
    render: 100,     // 100ms
    api: 1000,       // 1 second
    interaction: 50, // 50ms
  };

  private constructor() {
    if (typeof window !== 'undefined') {
      this.initializeWebVitals();
    }
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Initialize Web Vitals monitoring
   */
  private initializeWebVitals(): void {
    if ('PerformanceObserver' in window) {
      try {
        // Observe Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.recordMetric({
            name: 'LCP',
            value: lastEntry.startTime,
            unit: 'ms',
            timestamp: Date.now(),
            category: PerformanceCategory.LOAD,
          });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.recordMetric({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              unit: 'ms',
              timestamp: Date.now(),
              category: PerformanceCategory.INTERACTION,
            });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Observe Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.recordMetric({
            name: 'CLS',
            value: clsValue,
            unit: 'score',
            timestamp: Date.now(),
            category: PerformanceCategory.LOAD,
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        logger.warn('Failed to initialize Web Vitals monitoring', error);
      }
    }
  }

  /**
   * Record a performance metric
   */
  public recordMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    
    // Keep only recent metrics
    if (this.metrics.length > this.maxMetrics) {
      this.metrics.shift();
    }

    // Check if metric exceeds threshold
    const threshold = this.getThreshold(metric.category);
    if (threshold && metric.value > threshold) {
      logger.warn(`Performance threshold exceeded for ${metric.name}`, {
        value: metric.value,
        threshold,
        unit: metric.unit,
      });
    }

    // Log metric in development
    if (process.env.NODE_ENV === 'development') {
      logger.debug(`Performance metric: ${metric.name}`, {
        value: metric.value,
        unit: metric.unit,
        category: metric.category,
      });
    }
  }

  /**
   * Measure execution time of a function
   */
  public async measureAsync<T>(
    name: string,
    fn: () => Promise<T>,
    category: PerformanceCategory = PerformanceCategory.CUSTOM
  ): Promise<T> {
    const startTime = performance.now();
    try {
      const result = await fn();
      const duration = performance.now() - startTime;
      
      this.recordMetric({
        name,
        value: duration,
        unit: 'ms',
        timestamp: Date.now(),
        category,
      });
      
      return result;
    } catch (error) {
      const duration = performance.now() - startTime;
      this.recordMetric({
        name: `${name} (error)`,
        value: duration,
        unit: 'ms',
        timestamp: Date.now(),
        category,
        metadata: { error: true },
      });
      throw error;
    }
  }

  /**
   * Measure execution time of a synchronous function
   */
  public measure<T>(
    name: string,
    fn: () => T,
    category: PerformanceCategory = PerformanceCategory.CUSTOM
  ): T {
    const startTime = performance.now();
    try {
      const result = fn();
      const duration = performance.now() - startTime;
      
      this.recordMetric({
        name,
        value: duration,
        unit: 'ms',
        timestamp: Date.now(),
        category,
      });
      
      return result;
    } catch (error) {
      const duration = performance.now() - startTime;
      this.recordMetric({
        name: `${name} (error)`,
        value: duration,
        unit: 'ms',
        timestamp: Date.now(),
        category,
        metadata: { error: true },
      });
      throw error;
    }
  }

  /**
   * Start a performance mark
   */
  public mark(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
    }
  }

  /**
   * Measure between two marks
   */
  public measureBetween(
    name: string,
    startMark: string,
    endMark: string,
    category: PerformanceCategory = PerformanceCategory.CUSTOM
  ): void {
    if (typeof performance !== 'undefined' && performance.measure) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name, 'measure')[0];
        
        if (measure) {
          this.recordMetric({
            name,
            value: measure.duration,
            unit: 'ms',
            timestamp: Date.now(),
            category,
          });
        }
      } catch (error) {
        logger.warn(`Failed to measure between marks: ${startMark} - ${endMark}`, error);
      }
    }
  }

  /**
   * Get metrics by category
   */
  public getMetricsByCategory(category: PerformanceCategory): PerformanceMetric[] {
    return this.metrics.filter(m => m.category === category);
  }

  /**
   * Get recent metrics
   */
  public getRecentMetrics(count: number = 10): PerformanceMetric[] {
    return this.metrics.slice(-count);
  }

  /**
   * Get metrics summary
   */
  public getSummary(): Record<string, { avg: number; max: number; min: number; count: number }> {
    const summary: Record<string, { avg: number; max: number; min: number; count: number }> = {};
    
    this.metrics.forEach(metric => {
      if (!summary[metric.name]) {
        summary[metric.name] = {
          avg: 0,
          max: metric.value,
          min: metric.value,
          count: 0,
        };
      }
      
      const entry = summary[metric.name];
      entry.count++;
      entry.avg = (entry.avg * (entry.count - 1) + metric.value) / entry.count;
      entry.max = Math.max(entry.max, metric.value);
      entry.min = Math.min(entry.min, metric.value);
    });
    
    return summary;
  }

  /**
   * Clear all metrics
   */
  public clearMetrics(): void {
    this.metrics = [];
  }

  /**
   * Set performance thresholds
   */
  public setThresholds(thresholds: Partial<PerformanceThresholds>): void {
    this.thresholds = { ...this.thresholds, ...thresholds };
  }

  /**
   * Get threshold for category
   */
  private getThreshold(category: PerformanceCategory): number | undefined {
    switch (category) {
      case PerformanceCategory.LOAD:
        return this.thresholds.load;
      case PerformanceCategory.RENDER:
        return this.thresholds.render;
      case PerformanceCategory.API:
        return this.thresholds.api;
      case PerformanceCategory.INTERACTION:
        return this.thresholds.interaction;
      default:
        return undefined;
    }
  }

  /**
   * Export metrics as JSON
   */
  public exportMetrics(): string {
    return JSON.stringify({
      metrics: this.metrics,
      summary: this.getSummary(),
      thresholds: this.thresholds,
    }, null, 2);
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Utility functions
export const measureAsync = <T>(
  name: string,
  fn: () => Promise<T>,
  category?: PerformanceCategory
): Promise<T> => performanceMonitor.measureAsync(name, fn, category);

export const measure = <T>(
  name: string,
  fn: () => T,
  category?: PerformanceCategory
): T => performanceMonitor.measure(name, fn, category);

export default performanceMonitor;
