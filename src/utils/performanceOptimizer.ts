/**
 * Performance optimization utilities
 */

export interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  firstContentfulPaint?: number;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {};

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  setMetric(key: keyof PerformanceMetrics, value: number): void {
    this.metrics[key] = value;
  }

  clearMetrics(): void {
    this.metrics = {};
  }

  // Add other performance optimization methods as needed
}

export const performanceOptimizer = new PerformanceOptimizer();