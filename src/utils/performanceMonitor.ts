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
   * Collect performance metrics
   */
  public collectMetrics(): PerformanceMetrics {
    if (typeof window === 'undefined' || !window.performance) {
      return {};
    }

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = window.performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');

    return {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
    };
  }

  /**
   * Report metrics to analytics
   */
  public reportMetrics(metrics: PerformanceMetrics): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== undefined) {
          (window as any).gtag('event', key, {
            value: Math.round(value),
            event_category: 'Performance',
            non_interaction: true,
          });
        }
      });
    }
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();
export default performanceMonitor;