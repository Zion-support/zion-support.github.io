/**
 * Performance Metrics Dashboard Utility
 * 
 * Comprehensive performance monitoring and metrics collection for
 * web vitals, resource timing, and custom performance markers.
 * 
 * Features:
 * - Core Web Vitals tracking (LCP, FID, CLS, FCP, TTFB)
 * - Custom performance markers
 * - Resource timing analysis
 * - Performance budgets and alerts
 * - Real-time performance dashboard data
 */

export interface PerformanceMetric {
name: string;
value: number;
rating: 'good' | 'needs-improvement' | 'poor';
timestamp: number;
}

export interface ResourceTiming {
name: string;
duration: number;
size: number;
type: string;
}

export interface PerformanceBudget {
metric: string;
budget: number;
current: number;
status: 'pass' | 'warn' | 'fail';
}

export interface PerformanceReport {
webVitals: {,
lcp?: PerformanceMetric;
fid?: PerformanceMetric;
cls?: PerformanceMetric;
fcp?: PerformanceMetric;
ttfb?: PerformanceMetric;
};
  customMetrics: PerformanceMetric[];
  resourceTimings: ResourceTiming[];
  budgets: PerformanceBudget[];
  timestamp: Date;
}

class PerformanceMetricsTracker {
  private metrics: Map<string, PerformanceMetric> = new Map();
  private customMarkers: Map<string, number> = new Map();
  private budgets: PerformanceBudget[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.setupObservers();
    this.trackWebVitals();
  }

  /**
   * Setup performance observers
   */
  private setupObservers(): void {
    // Observe resource timing
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'resource') {
              this.trackResourceTiming(entry as PerformanceResourceTiming);
            }
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      } catch (e) {
        console.warn('Failed to setup resource observer:', e);
      }
    }
  }

  /**
   * Track Core Web Vitals
   */
  private trackWebVitals(): void {
    // LCP - Largest Contentful Paint
    this.observeLCP();

    // FID - First Input Delay
    this.observeFID();

    // CLS - Cumulative Layout Shift
    this.observeCLS();

    // FCP - First Contentful Paint
    this.observeFCP();

    // TTFB - Time to First Byte
    this.trackTTFB();
  }

  /**
   * Observe Largest Contentful Paint (LCP)
   */
  private observeLCP(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime: number; loadTime: number };
          const lcp = lastEntry.renderTime || lastEntry.loadTime;
          
          this.recordMetric('LCP', lcp, this.getRatingForLCP(lcp));
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('Failed to observe LCP:', e);
      }
    }
  }

  /**
   * Observe First Input Delay (FID)
   */
  private observeFID(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstInput = entries[0] as PerformanceEventTiming;
          const fid = firstInput.processingStart - firstInput.startTime;
          
          this.recordMetric('FID', fid, this.getRatingForFID(fid));
        });
        observer.observe({ entryTypes: ['first-input'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('Failed to observe FID:', e);
      }
    }
  }

  /**
   * Observe Cumulative Layout Shift (CLS)
   */
  private observeCLS(): void {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              this.recordMetric('CLS', clsValue, this.getRatingForCLS(clsValue));
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('Failed to observe CLS:', e);
      }
    }
  }

  /**
   * Observe First Contentful Paint (FCP)
   */
  private observeFCP(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[0]?.startTime;
          if (fcp) {
            this.recordMetric('FCP', fcp, this.getRatingForFCP(fcp));
          }
        });
        observer.observe({ entryTypes: ['paint'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('Failed to observe FCP:', e);
      }
    }
  }

  /**
   * Track Time to First Byte (TTFB)
   */
  private trackTTFB(): void {
    if (window.performance && window.performance.timing) {
      const ttfb = window.performance.timing.responseStart - window.performance.timing.requestStart;
      this.recordMetric('TTFB', ttfb, this.getRatingForTTFB(ttfb));
    }
  }

  /**
   * Record a performance metric
   */
  private recordMetric(
    name: string,
    value: number,
    rating: 'good' | 'needs-improvement' | 'poor'
  ): void {const metric: PerformanceMetric = {
      name,
      value: Math.round(value),
      rating,
      timestamp: Date.now()};
    
    this.metrics.set(name, metric);
    
    // Check budgets
    this.checkBudgets();
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}: ${metric.value}ms (${rating})`);
    }
  }

  /**
   * Track custom performance marker
   */
  startMark(name: string): void {
    this.customMarkers.set(name, performance.now());
    performance.mark(`${name}-start`);
  }

  /**
   * End custom performance marker and record metric
   */
  endMark(name: string): number | null {
    const startTime = this.customMarkers.get(name);
    if (!startTime) {
      console.warn(`No start mark found for: ${name}`);
      return null;
    }

    const endTime = performance.now();
    const duration = endTime - startTime;
    
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    
    this.recordMetric(name, duration, this.getRatingForCustomMetric(duration));
    this.customMarkers.delete(name);
    
    return duration;
  }

  /**
   * Track resource timing
   */
  private trackResourceTiming(entry: PerformanceResourceTiming): void {
    // const resourceType = this.getResourceType(entry.name); // Available for future use
    const size = entry.transferSize || 0;
    
    // Track large resources
    if (size > 100000) { // 100KB
      console.warn(`Large resource detected: ${entry.name} (${Math.round(size / 1024)}KB)`);
    }
  }

  /**
   * Get resource type from URL
   */
  private getResourceType(url: string): string {
    if (url.match(/\.(js|mjs)$/)) return 'script';
    if (url.match(/\.css$/)) return 'stylesheet';
    if (url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
    return 'other';
  }

  /**
   * Set performance budget
   */
  setBudget(metric: string, budget: number): void {
    const existingBudget = this.budgets.find(b => b.metric === metric);
    if (existingBudget) {
      existingBudget.budget = budget;
    } else {
      this.budgets.push({
        metric,
        budget,
        current: 0,
        status: 'pass',
      });
    }
    this.checkBudgets();
  }

  /**
   * Check performance budgets
   */
  private checkBudgets(): void {
    this.budgets.forEach(budget => {
      const metric = this.metrics.get(budget.metric);
      if (metric) {
        budget.current = metric.value;
        
        if (metric.value > budget.budget * 1.2) {
          budget.status = 'fail';
        } else if (metric.value > budget.budget) {
          budget.status = 'warn';
        } else {
          budget.status = 'pass';
        }
      }
    });
  }

  /**
   * Get performance report
   */
  getReport(): PerformanceReport {return {
      webVitals: {
        lcp: this.metrics.get('LCP'),
        fid: this.metrics.get('FID'),
        cls: this.metrics.get('CLS'),
        fcp: this.metrics.get('FCP'),
        ttfb: this.metrics.get('TTFB')}
      customMetrics: Array.from(this.metrics.values()).filter(
        m => !['LCP', 'FID', 'CLS', 'FCP', 'TTFB'].includes(m.name)
      ),
      resourceTimings: this.getResourceTimings(),
      budgets: [...this.budgets],
      timestamp: new Date(),
    };
  }

  /**
   * Get resource timings
   */
  private getResourceTimings(): ResourceTiming[] {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    return resources.map(resource => ({
      name: resource.name,
      duration: Math.round(resource.duration),
      size: resource.transferSize || 0,
      type: this.getResourceType(resource.name),
    }));
  }

  /**
   * Get rating for LCP
   */
  private getRatingForLCP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Get rating for FID
   */
  private getRatingForFID(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 100) return 'good';
    if (value <= 300) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Get rating for CLS
   */
  private getRatingForCLS(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Get rating for FCP
   */
  private getRatingForFCP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1800) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Get rating for TTFB
   */
  private getRatingForTTFB(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 800) return 'good';
    if (value <= 1800) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Get rating for custom metrics
   */
  private getRatingForCustomMetric(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1000) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Cleanup observers
   */
  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
export const performanceMetrics = new PerformanceMetricsTracker();

// Setup default budgets
performanceMetrics.setBudget('LCP', 2500);
performanceMetrics.setBudget('FID', 100);
performanceMetrics.setBudget('CLS', 0.1);
performanceMetrics.setBudget('FCP', 1800);
performanceMetrics.setBudget('TTFB', 800);

export default performanceMetrics;
