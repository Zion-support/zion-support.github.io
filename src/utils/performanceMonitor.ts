/**
 * Performance monitoring utilities
 */

export interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Measure performance metrics
   */
  measureMetrics(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    try {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = window.performance.getEntriesByType('paint');
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint');

      return {
        loadTime: navigation?.loadEventEnd - navigation?.loadEventStart,
        firstContentfulPaint: fcp?.startTime,
      };
    } catch (error) {
      console.error('Failed to measure performance:', error);
      return null;
    }
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();
export default performanceMonitor;
