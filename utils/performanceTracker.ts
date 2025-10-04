/**
 * Performance Tracker Utility
 * Advanced performance monitoring and optimization for React applications
 */

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  tti: number; // Time to Interactive
}

export interface ResourceTiming {
  name: string;
  duration: number;
  size: number;
  type: string;
}

/**
 * Measure Core Web Vitals
 */
export class PerformanceTracker {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    // Observe Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observation not supported');
      }

      // Observe First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observation not supported');
      }

      // Observe Cumulative Layout Shift
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              this.metrics.cls = clsValue;
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observation not supported');
      }
    }

    // Measure First Contentful Paint and TTFB
    if (window.performance && window.performance.timing) {
      window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const navigationStart = perfData.navigationStart;

        // Time to First Byte
        this.metrics.ttfb = perfData.responseStart - navigationStart;

        // Get FCP from Paint Timing API
        if (window.performance.getEntriesByType) {
          const paintEntries = window.performance.getEntriesByType('paint');
          const fcpEntry = paintEntries.find((entry) => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            this.metrics.fcp = fcpEntry.startTime;
          }
        }
      });
    }
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  /**
   * Get resource timing information
   */
  getResourceTimings(): ResourceTiming[] {
    if (!window.performance || !window.performance.getEntriesByType) {
      return [];
    }

    const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    return resources.map((resource) => ({
      name: resource.name,
      duration: resource.duration,
      size: resource.transferSize || 0,
      type: resource.initiatorType,
    }));
  }

  /**
   * Get page load time
   */
  getPageLoadTime(): number {
    if (!window.performance || !window.performance.timing) {
      return 0;
    }

    const perfData = window.performance.timing;
    return perfData.loadEventEnd - perfData.navigationStart;
  }

  /**
   * Get DOM content loaded time
   */
  getDOMContentLoadedTime(): number {
    if (!window.performance || !window.performance.timing) {
      return 0;
    }

    const perfData = window.performance.timing;
    return perfData.domContentLoadedEventEnd - perfData.navigationStart;
  }

  /**
   * Measure component render time
   */
  measureComponentRender(componentName: string, callback: () => void) {
    const startTime = performance.now();
    callback();
    const endTime = performance.now();
    const duration = endTime - startTime;

    console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
    return duration;
  }

  /**
   * Monitor memory usage (if available)
   */
  getMemoryUsage(): any {
    if ('memory' in performance) {
      return {
        usedJSHeapSize: (performance as any).memory.usedJSHeapSize / 1048576, // Convert to MB
        totalJSHeapSize: (performance as any).memory.totalJSHeapSize / 1048576,
        jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit / 1048576,
      };
    }
    return null;
  }

  /**
   * Track custom user timing
   */
  mark(name: string) {
    if (window.performance && window.performance.mark) {
      window.performance.mark(name);
    }
  }

  measure(name: string, startMark: string, endMark: string) {
    if (window.performance && window.performance.measure) {
      try {
        window.performance.measure(name, startMark, endMark);
        const measures = window.performance.getEntriesByName(name, 'measure');
        if (measures.length > 0) {
          return measures[measures.length - 1].duration;
        }
      } catch (e) {
        console.warn('Performance measurement failed', e);
      }
    }
    return 0;
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
    const metrics = this.getMetrics();
    const resources = this.getResourceTimings();
    const memory = this.getMemoryUsage();

    let report = '=== Performance Report ===\n\n';

    report += 'Core Web Vitals:\n';
    report += `- LCP (Largest Contentful Paint): ${metrics.lcp?.toFixed(2) || 'N/A'}ms\n`;
    report += `- FID (First Input Delay): ${metrics.fid?.toFixed(2) || 'N/A'}ms\n`;
    report += `- CLS (Cumulative Layout Shift): ${metrics.cls?.toFixed(4) || 'N/A'}\n`;
    report += `- FCP (First Contentful Paint): ${metrics.fcp?.toFixed(2) || 'N/A'}ms\n`;
    report += `- TTFB (Time to First Byte): ${metrics.ttfb?.toFixed(2) || 'N/A'}ms\n\n`;

    report += 'Page Load Metrics:\n';
    report += `- Page Load Time: ${this.getPageLoadTime().toFixed(2)}ms\n`;
    report += `- DOM Content Loaded: ${this.getDOMContentLoadedTime().toFixed(2)}ms\n\n`;

    report += `Resource Count: ${resources.length}\n`;
    const totalSize = resources.reduce((sum, r) => sum + r.size, 0);
    report += `Total Resource Size: ${(totalSize / 1024).toFixed(2)} KB\n\n`;

    if (memory)       report += 'Memory Usage:\n';
      report += `- Used: ${memory.usedJSHeapSize.toFixed(2)} MB\n`;
      report += `- Total: ${memory.totalJSHeapSize.toFixed(2)} MB\n`;
      report += `- Limit: ${memory.jsHeapSizeLimit.toFixed(2)} MB\n`;
    }

    return report;
  }

  /**
   * Check if metrics meet performance budgets
   */
  checkPerformanceBudget(budget: Partial<PerformanceMetrics>): boolean     const metrics = this.getMetrics();
    let passes = true;

    if (budget.lcp && metrics.lcp && metrics.lcp > budget.lcp)       console.warn(`LCP budget exceeded: ${metrics.lcp}ms > ${budget.lcp}ms`);
      passes = false;
    }

    if (budget.fid && metrics.fid && metrics.fid > budget.fid)       console.warn(`FID budget exceeded: ${metrics.fid}ms > ${budget.fid}ms`);
      passes = false;
    }

    if (budget.cls && metrics.cls && metrics.cls > budget.cls)       console.warn(`CLS budget exceeded: ${metrics.cls} > ${budget.cls}`);
      passes = false;
    }

    return passes;
  }

  /**
   * Send metrics to analytics endpoint
   */
  async sendToAnalytics(endpoint: string)     const metrics = this.getMetrics();
    const data =       metrics,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    try       await fetch(endpoint,         method: 'POST',
        headers:           'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error)       console.error('Failed to send performance metrics', error);
    }
  }

  /**
   * Cleanup observers
   */
  cleanup()     this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

/**
 * Singleton instance
 */
let trackerInstance: PerformanceTracker | null = null;

export function getPerformanceTracker(): PerformanceTracker   if (!trackerInstance)     trackerInstance = new PerformanceTracker();
  }
  return trackerInstance;
}

/**
 * Performance budget recommendations
 */
export const PERFORMANCE_BUDGETS =   EXCELLENT:     lcp: 2500, // 2.5s
    fid: 100, // 100ms
    cls: 0.1,
    ttfb: 600, // 600ms
  },
  GOOD:     lcp: 4000, // 4s
    fid: 300, // 300ms
    cls: 0.25,
    ttfb: 1000, // 1s
  },
  NEEDS_IMPROVEMENT:     lcp: 6000, // 6s
    fid: 500, // 500ms
    cls: 0.5,
    ttfb: 1500, // 1.5s
  },
};

export default   PerformanceTracker,
  getPerformanceTracker,
  PERFORMANCE_BUDGETS,
};
