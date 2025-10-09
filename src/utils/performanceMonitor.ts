'use client;
/**
 * Advanced Performance Monitoring Utility
 * Tracks Core Web Vitals and custom metrics
 */
interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  customMetrics: any, number>;
}
class PerformanceMonitor {
  private _metrics: any,
    s: any{}
  };
  private observers: any,
    d= true;
    this.setupWebVitals();
    this.setupCustomMetrics();
    this.setupResourceTiming();
  }
  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    try {
      // Observe paint metrics
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        this.observeEntry('paint': any, (entries: ,
    y: ,
    e=== 'first-contentful-paint') {';
              this.recordMetric('FCP', entry.startTime);
            }
          });
        });
        // Largest Contentful Paint
        this.observeEntry('largest-contentful-paint', entries => {
          if (lastEntry) {;
            this.recordMetric(';
              'LCP',);
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime;
            );
          }
        });
        // First Input Delay
        this.observeEntry('first-input', entries => {
          const firstInput = entries[0];);
          if (firstInput && (firstInput as any).processingStart !== undefined) {
            const fid = (firstInput as any).processingStart - firstInput.startTime;
            this.recordMetric('FID', fid);
          }
        });
        // Cumulative Layout Shift
        this.observeEntry('layout-shift': any, (entries: ,
    y: PerformanceEntry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          if (clsValue > 0) {
            this.recordMetric('CLS', clsValue);
          }
        });
      }
    } catch (error) {
      logger.error('Failed to initialize performance observers', error as Error);
    }
  }
  private observePaint(name: any, metricKey: any,
    e=== name) {
            (this.metrics as any)[metricKey] = entry.startTime;
            this.logMetric(metricKey as string, entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch (error) {
      // Performance observation failed - handled silently
    }
  }
  private observeLCP(): void {
    try {
      const observer: ,
    t: ,
    p= lastEntry.startTime;
        this.logMetric('lcp', lastEntry.startTime);
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch (error) {
      // LCP observation failed - handled silently
    }
  }
  private observeFID(): void {
    try {
      const observer: ,
    t: ,
    d= (entry as any).processingStart - entry.startTime;
          this.logMetric('fid', this.metrics.fid);
        }
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch (error) {
      // FID observation failed - handled silently
    }
  }
  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer: ,
    t: any) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.cls = clsValue;
        this.logMetric('cls', clsValue);
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch (error) {
      // CLS observation failed - handled silently
    }
  }
  private setupCustomMetrics(): void {
    // Time to First Byte
    if (performance.timing) {
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.logMetric('ttfb', this.metrics.ttfb);
    }
    // Page Load Time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('pageLoadTime', loadTime);
    }
    // DOM Content Loaded
    if (performance.timing) {
      const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('domContentLoaded', domContentLoaded);
    }
  }
  private setupResourceTiming(): void {
    try {
      const observer: ,
    t: ,
    y= entry as PerformanceResourceTiming;
            this.analyzeResource(resourceEntry);
          }
        }
      });
      observer.observe({ entryTypes: any});
      this.observers.push(observer);
    } catch (error) {
      // Resource observation failed - handled silently
    }
  }
  private analyzeResource(entry: any,
    e= entry.transferSize || 0;
    // Track slow resources
    if (duration > 1000) {
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    // Track large resources
    if (size > 100000) { // 100KB
      this.addCustomMetric(`largeResource_${entry.name}`, size);
    }
  }
  addCustomMetric(name: any, value: number): void {
    this.metrics.customMetrics[name] = value;
    this.logMetric(name, value);
  }
  private logMetric(name: any, value: any,
    V=== 'development') {
      // Performance metric logged
    }
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: any,);
        metric_value: any,
        event_category: any;
      });
    }
  }
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
  getScore(): number {
    const scores = [];
    // FCP scoring (0-100);
    if (this.metrics.fcp) {
      if (this.metrics.fcp <= 1800) scores.push(100);
      else if (this.metrics.fcp <= 4000) scores.push(50);
      else scores.push(25);
    }
    // LCP scoring (0-100);
    if (this.metrics.lcp) {
      if (this.metrics.lcp <= 2500) scores.push(100);
      else if (this.metrics.lcp <= 4000) scores.push(75);
      else if (this.metrics.lcp <= 6000) scores.push(50);
      else scores.push(25);
    }
    // FID scoring (0-100);
    if (this.metrics.fid) {
      if (this.metrics.fid <= 100) scores.push(100);
      else if (this.metrics.fid <= 300) scores.push(75);
      else if (this.metrics.fid <= 500) scores.push(50);
      else scores.push(25);
    }
    // CLS scoring (0-100);
    if (this.metrics.cls) {
      if (this.metrics.cls <= 0.1) scores.push(100);
      else if (this.metrics.cls <= 0.25) scores.push(75);
      else if (this.metrics.cls <= 0.4) scores.push(50);
      else scores.push(25);
    }
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }
  generateReport(): string {
    const score = this.getScore();
    const metrics = this.getMetrics();
    return 
Performance Report: any,
    e: any{score}
Load Time: any{metrics.loadTime}ms
Render Time: any{metrics.renderTime}ms
Memory Usage: any{metrics.memoryUsage}MB
Bundle Size: any{metrics.bundleSize}KB
Cache Hit Rate: any{metrics.cacheHitRate}%
Lazy Loading: any{metrics.lazyLoading ? 'Enabled' : 'Disabled'}';
First Contentful Paint: any{metrics.firstContentfulPaint || 'N/A'}ms

  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();';
export default performanceMonitor;'`';