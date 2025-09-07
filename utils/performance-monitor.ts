/**
 * Performance monitoring utilities for the application
 */

// Type definitions for performance entries
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: Array<{
    node?: Node;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }>;
}

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics | null = null;

  private constructor() {}

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public async measurePerformance(): Promise<PerformanceMetrics> {
    if (typeof window === 'undefined') {
      throw new Error('Performance monitoring is only available in the browser');
    }

    return new Promise((resolve) => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        const metrics: PerformanceMetrics = {
          loadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0,
          timeToInteractive: 0,
        };

        entries.forEach((entry) => {
          switch (entry.entryType) {
            case 'navigation':
              if (entry.name === 'navigation') {
                metrics.loadTime = entry.loadEventEnd - entry.loadEventStart;
              }
              break;
            case 'paint':
              if (entry.name === 'first-contentful-paint') {
                metrics.firstContentfulPaint = entry.startTime;
              }
              break;
            case 'largest-contentful-paint':
              metrics.largestContentfulPaint = entry.startTime;
              break;
            case 'layout-shift':
              const clsEntry = entry as LayoutShiftEntry;
              if (!clsEntry.hadRecentInput) {
                metrics.cumulativeLayoutShift += clsEntry.value;
              }
              break;
            case 'first-input':
              const fidEntry = entry as PerformanceEventTiming;
              metrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
              break;
          }
        });

        this.metrics = metrics;
        resolve(metrics);
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });

      // Fallback timeout
      setTimeout(() => {
        observer.disconnect();
        if (!this.metrics) {
          resolve({
            loadTime: 0,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0,
            cumulativeLayoutShift: 0,
            firstInputDelay: 0,
            timeToInteractive: 0,
          });
        }
      }, 5000);
    });
  }

  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  public logMetrics(): void {
    if (this.metrics) {
      console.log('Performance Metrics:', this.metrics);
    }
  }

  public async sendMetricsToAnalytics(): Promise<void> {
    if (!this.metrics) {
      await this.measurePerformance();
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        load_time: this.metrics?.loadTime,
        first_contentful_paint: this.metrics?.firstContentfulPaint,
        largest_contentful_paint: this.metrics?.largestContentfulPaint,
        cumulative_layout_shift: this.metrics?.cumulativeLayoutShift,
        first_input_delay: this.metrics?.firstInputDelay,
      });
    }
  }
}

// Web Vitals integration
export function reportWebVitals(metric: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

// Performance budget checker
export function checkPerformanceBudget(metrics: PerformanceMetrics): {
  passed: boolean;
  violations: string[];
} {
  const violations: string[] = [];
  
  // Performance budgets (in milliseconds)
  const budgets = {
    loadTime: 3000,
    firstContentfulPaint: 1800,
    largestContentfulPaint: 2500,
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100,
  };

  if (metrics.loadTime > budgets.loadTime) {
    violations.push(`Load time exceeded budget: ${metrics.loadTime}ms > ${budgets.loadTime}ms`);
  }

  if (metrics.firstContentfulPaint > budgets.firstContentfulPaint) {
    violations.push(`FCP exceeded budget: ${metrics.firstContentfulPaint}ms > ${budgets.firstContentfulPaint}ms`);
  }

  if (metrics.largestContentfulPaint > budgets.largestContentfulPaint) {
    violations.push(`LCP exceeded budget: ${metrics.largestContentfulPaint}ms > ${budgets.largestContentfulPaint}ms`);
  }

  if (metrics.cumulativeLayoutShift > budgets.cumulativeLayoutShift) {
    violations.push(`CLS exceeded budget: ${metrics.cumulativeLayoutShift} > ${budgets.cumulativeLayoutShift}`);
  }

  if (metrics.firstInputDelay > budgets.firstInputDelay) {
    violations.push(`FID exceeded budget: ${metrics.firstInputDelay}ms > ${budgets.firstInputDelay}ms`);
  }

  return {
    passed: violations.length === 0,
    violations,
  };
}