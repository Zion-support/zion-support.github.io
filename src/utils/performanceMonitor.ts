'use client';
/**
 * Advanced Performance Monitoring Utility;
 * Tracks Core Web Vitals and custom metrics;
 */
interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint;
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;
  fmp?: number; // First Meaningful Paint;
  customMetrics: Record<string, number>;
}
class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    customMetrics: {}
  }
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;
  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;
    this.setupWebVitals();
    this.setupCustomMetrics();
    this.setupResourceTiming();
  }
  /**
   * Initialize performance observers;
   */
  private initializeObservers(): void {
    try {
      // Observe paint metrics;
      if ('PerformanceObserver' in window) {
        // First Contentful Paint;
        this.observeEntry('paint', (entries) => {
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.recordMetric('FCP', entry.startTime);
            }
          });
        });
        // Largest Contentful Paint;
        this.observeEntry('largest-contentful-paint', entries => {
                    if (lastEntry) {
            this.recordMetric(
              'LCP',
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime;
            );
          }
        });
        // First Input Delay;
        this.observeEntry('first-input', entries => {
                    if (firstInput && (firstInput as any).processingStart !== undefined) {
                        this.recordMetric('FID', fid);
          }
        });
        // Cumulative Layout Shift;
        this.observeEntry('layout-shift', (entries) => {
                    entries.forEach((entry: PerformanceEntry) => {
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
  private observePaint(name: string, metricKey: keyof PerformanceMetrics): void {
    try {
                  this.logMetric(metricKey as string, entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      // Performance observation failed - handled silently;
    }
  }
  private observeLCP(): void {
    try {
                      this.metrics.lcp = lastEntry.startTime;
        this.logMetric('lcp', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      // LCP observation failed - handled silently;
    }
  }
  private observeFID(): void {
    try {
                this.logMetric('fid', this.metrics.fid);
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      // FID observation failed - handled silently;
    }
  }
  private observeCLS(): void {
    try {
                      }
        }
        this.metrics.cls = clsValue;
        this.logMetric('cls', clsValue);
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      // CLS observation failed - handled silently;
    }
  }
  private setupCustomMetrics(): void {
    // Time to First Byte;
    if (performance.timing) {
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.logMetric('ttfb', this.metrics.ttfb);
    }
    // Page Load Time;
    if (performance.timing) {
            this.addCustomMetric('pageLoadTime', loadTime);
    }
    // DOM Content Loaded;
    if (performance.timing) {
            this.addCustomMetric('domContentLoaded', domContentLoaded);
    }
  }
  private setupResourceTiming(): void {
    try {
                  this.analyzeResource(resourceEntry);
          }
        }
      });
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch (error) {
      // Resource observation failed - handled silently;
    }
  }
  private analyzeResource(entry: PerformanceResourceTiming): void {
            // Track slow resources;
    if (duration > 1000) {
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    // Track large resources;
    if (size > 100000) { // 100KB;
      this.addCustomMetric(`largeResource_${entry.name}`, size);
    }
  }
  addCustomMetric(name: string, value: number): void {
    this.metrics.customMetrics[name] = value;
    this.logMetric(name, value);
  }
  private logMetric(name: string, value: number): void {
    if (process.env.NODE_ENV === 'development') {
      // Performance metric logged;
    }
    // Send to analytics if available;
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: Math.round(value),
        event_category: 'performance'
      });
    }
  }
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }
  getScore(): number {
        // FCP scoring (0-100)
    if (this.metrics.fcp) {
      if (this.metrics.fcp <= 1800) scores.push(100);
      else if (this.metrics.fcp <= 4000) scores.push(50);
      else scores.push(25);
    }
    // LCP scoring (0-100)
    if (this.metrics.lcp) {
      if (this.metrics.lcp <= 2500) scores.push(100);
      else if (this.metrics.lcp <= 4000) scores.push(75);
      else if (this.metrics.lcp <= 6000) scores.push(50);
      else scores.push(25);
    }
    // FID scoring (0-100)
    if (this.metrics.fid) {
      if (this.metrics.fid <= 100) scores.push(100);
      else if (this.metrics.fid <= 300) scores.push(75);
      else if (this.metrics.fid <= 500) scores.push(50);
      else scores.push(25);
    }
    // CLS scoring (0-100)
    if (this.metrics.cls) {
      if (this.metrics.cls <= 0.1) scores.push(100);
      else if (this.metrics.cls <= 0.25) scores.push(75);
      else if (this.metrics.cls <= 0.4) scores.push(50);
      else scores.push(25);
    }
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }
  generateReport(): string {
            return `
Performance Report:
Score: ${score}
Load Time: ${metrics.loadTime}ms;
Render Time: ${metrics.renderTime}ms;
Memory Usage: ${metrics.memoryUsage}MB;
Bundle Size: ${metrics.bundleSize}KB;
Cache Hit Rate: ${metrics.cacheHitRate}%
Lazy Loading: ${metrics.lazyLoading ? 'Enabled' : 'Disabled'}
First Contentful Paint: ${metrics.firstContentfulPaint || 'N/A'}ms;
`;
  }
}

// Export singleton instance;
export export default performanceMonitor;