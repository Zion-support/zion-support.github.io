/**
 * Performance Monitoring Utility
 * Tracks and reports on website performance metrics
 */

export interface PerformanceMetrics {
  // Core Web Vitals
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  
  // Custom Metrics
  pageLoadTime?: number;
  resourceLoadTime?: number;
  apiResponseTime?: number;
  
  // Context
  url: string;
  userAgent: string;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    timestamp: Date.now(),
  };

  private observer: PerformanceObserver | null = null;

  constructor() {
    if (typeof window === 'undefined') return;

    // Observe Core Web Vitals
    this.observeWebVitals();
    this.observeNavigationTiming();
  }

  private observeWebVitals() {
    if (typeof PerformanceObserver === 'undefined') return;

    try {
      // Observe LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // Observe FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });

      // Observe CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = clsValue;
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (error) {
      console.warn('Performance Observer not fully supported:', error);
    }
  }

  private observeNavigationTiming() {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as any;
        
        if (perfData) {
          this.metrics.fcp = perfData.responseEnd - perfData.fetchStart;
          this.metrics.ttfb = perfData.responseStart - perfData.requestStart;
          this.metrics.pageLoadTime = perfData.loadEventEnd - perfData.fetchStart;
          this.metrics.resourceLoadTime = perfData.domContentLoadedEventEnd - perfData.fetchStart;
        }
      }, 0);
    });
  }

  /**
   * Track API response time
   */
  trackAPICall(endpoint: string, duration: number) {
    if (!this.metrics.apiResponseTime) {
      this.metrics.apiResponseTime = duration;
    } else {
      // Calculate running average
      this.metrics.apiResponseTime = (this.metrics.apiResponseTime + duration) / 2;
    }
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Report metrics to analytics endpoint
   */
  async reportMetrics(endpoint: string = '/api/analytics/performance') {
    if (typeof window === 'undefined') return;

    try {
      // Only report if we have meaningful data
      if (this.metrics.lcp || this.metrics.fcp || this.metrics.pageLoadTime) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.metrics),
          // Use sendBeacon for better reliability on page unload
          keepalive: true,
        });
      }
    } catch (error) {
      console.warn('Failed to report performance metrics:', error);
    }
  }

  /**
   * Get performance grade based on Core Web Vitals
   */
  getPerformanceGrade(): {
    overall: 'good' | 'needs-improvement' | 'poor';
    details: { metric: string; value: number; grade: string }[];
  } {
    const details = [];
    let goodCount = 0;
    let poorCount = 0;
    let totalMetrics = 0;

    // LCP grading (< 2.5s good, 2.5s-4s needs improvement, > 4s poor)
    if (this.metrics.lcp) {
      totalMetrics++;
      const lcpSeconds = this.metrics.lcp / 1000;
      let grade = 'poor';
      if (lcpSeconds <= 2.5) {
        grade = 'good';
        goodCount++;
      } else if (lcpSeconds <= 4) {
        grade = 'needs-improvement';
      } else {
        poorCount++;
      }
      details.push({ metric: 'LCP', value: lcpSeconds, grade });
    }

    // FID grading (< 100ms good, 100ms-300ms needs improvement, > 300ms poor)
    if (this.metrics.fid) {
      totalMetrics++;
      let grade = 'poor';
      if (this.metrics.fid <= 100) {
        grade = 'good';
        goodCount++;
      } else if (this.metrics.fid <= 300) {
        grade = 'needs-improvement';
      } else {
        poorCount++;
      }
      details.push({ metric: 'FID', value: this.metrics.fid, grade });
    }

    // CLS grading (< 0.1 good, 0.1-0.25 needs improvement, > 0.25 poor)
    if (this.metrics.cls !== undefined) {
      totalMetrics++;
      let grade = 'poor';
      if (this.metrics.cls <= 0.1) {
        grade = 'good';
        goodCount++;
      } else if (this.metrics.cls <= 0.25) {
        grade = 'needs-improvement';
      } else {
        poorCount++;
      }
      details.push({ metric: 'CLS', value: this.metrics.cls, grade });
    }

    // Overall grade
    let overall: 'good' | 'needs-improvement' | 'poor' = 'needs-improvement';
    if (totalMetrics > 0) {
      if (goodCount === totalMetrics) {
        overall = 'good';
      } else if (poorCount > 0) {
        overall = 'poor';
      }
    }

    return { overall, details };
  }

  /**
   * Log performance summary to console (development only)
   */
  logPerformanceSummary() {
    if (process.env.NODE_ENV !== 'development') return;

    console.group('🚀 Performance Metrics');
    console.log('Page Load Time:', this.metrics.pageLoadTime, 'ms');
    console.log('First Contentful Paint:', this.metrics.fcp, 'ms');
    console.log('Largest Contentful Paint:', this.metrics.lcp, 'ms');
    console.log('First Input Delay:', this.metrics.fid, 'ms');
    console.log('Cumulative Layout Shift:', this.metrics.cls);
    console.log('Time to First Byte:', this.metrics.ttfb, 'ms');
    
    const grade = this.getPerformanceGrade();
    console.log('Overall Grade:', grade.overall.toUpperCase());
    console.table(grade.details);
    console.groupEnd();
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Automatically report metrics on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    performanceMonitor.reportMetrics();
  });

  // Also report after 10 seconds for long-running sessions
  setTimeout(() => {
    performanceMonitor.reportMetrics();
    performanceMonitor.logPerformanceSummary();
  }, 10000);
}

export default performanceMonitor;
