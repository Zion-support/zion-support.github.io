/**
 * Performance Monitor utility
 * Tracks and reports application performance metrics
 */

export interface PerformanceMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {};

  private constructor() {
    this.initializeMonitoring();
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Initialize performance monitoring
   */
  private initializeMonitoring(): void {
    if (typeof window === 'undefined' || !window.performance) {
      return;
    }

    // Monitor Web Vitals
    this.monitorWebVitals();
  }

  /**
   * Monitor Web Vitals metrics
   */
  private monitorWebVitals(): void {
    // Monitor FCP (First Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.FCP = entry.startTime;
            }
          });
        });
        observer.observe({ type: 'paint', buffered: true });
      } catch (error) {
        console.warn('Failed to observe FCP', error);
      }
    }

    // Monitor LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.LCP = lastEntry.startTime;
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (error) {
        console.warn('Failed to observe LCP', error);
      }
    }
  }

  /**
   * Get current metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Clear metrics
   */
  clearMetrics(): void {
    this.metrics = {};
  }

  /**
   * Log metrics to console
   */
  logMetrics(): void {
    console.log('Performance Metrics:', this.metrics);
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

export default PerformanceMonitor;