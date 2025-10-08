/**
 * Performance Monitoring Utility
 */

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  getMetrics(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');

    return {
      loadTime: navigation?.loadEventEnd - navigation?.loadEventStart || 0,
      domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart || 0,
      firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    };
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();