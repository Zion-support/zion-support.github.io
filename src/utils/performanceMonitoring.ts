/**
 * Performance Monitoring Utility
 * Comprehensive performance monitoring and optimization
 */

export interface PerformanceMetrics {
  // Core Web Vitals
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  fcp: number | null; // First Contentful Paint
  ttfb: number | null; // Time to First Byte
  
  // Additional metrics
  domContentLoaded: number | null;
  domInteractive: number | null;
  loadComplete: number | null;
  
  // Resource metrics
  resourceCount: number;
  resourceSize: number;
  
  // Memory usage
  memoryUsage: {
    used: number;
    total: number;
    limit: number;
  } | null;
  
  // Network information
  connectionType: string | null;
  effectiveType: string | null;
  downlink: number | null;
  rtt: number | null;
  
  // Custom metrics
  customMetrics: Record<string, number>;
}

export interface PerformanceObserver {
  onMetricUpdate: (metrics: PerformanceMetrics) => void;
  onThresholdExceeded: (metric: string, value: number, threshold: number) => void;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[] = [];
  private thresholds: Record<string, number> = {
    lcp: 2500, // 2.5s
    fid: 100,  // 100ms
    cls: 0.1,  // 0.1
    fcp: 1800, // 1.8s
    ttfb: 800  // 800ms
  };
  private isInitialized = false;

  private constructor() {
    this.metrics = this.initializeMetrics();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Initialize performance monitoring
   */
  public initialize(): void {
    if (this.isInitialized) return;

    console.log('📊 Initializing Performance Monitor...');

    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeTTFB();

    // Monitor additional metrics
    this.observeDOMContentLoaded();
    this.observeResourceTiming();
    this.observeMemoryUsage();
    this.observeNetworkInfo();

    // Monitor custom metrics
    this.observeCustomMetrics();

    this.isInitialized = true;
    console.log('✅ Performance Monitor initialized');
  }

  /**
   * Initialize metrics object
   */
  private initializeMetrics(): PerformanceMetrics {
    return {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      domContentLoaded: null,
      domInteractive: null,
      loadComplete: null,
      resourceCount: 0,
      resourceSize: 0,
      memoryUsage: null,
      connectionType: null,
      effectiveType: null,
      downlink: null,
      rtt: null,
      customMetrics: {}
    };
  }

  /**
   * Observe Largest Contentful Paint (LCP)
   */
  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        this.updateMetric('lcp', lastEntry.startTime);
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP observation not supported:', error);
    }
  }

  /**
   * Observe First Input Delay (FID)
   */
  private observeFID(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.updateMetric('fid', entry.processingStart - entry.startTime);
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID observation not supported:', error);
    }
  }

  /**
   * Observe Cumulative Layout Shift (CLS)
   */
  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.updateMetric('cls', clsValue);
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS observation not supported:', error);
    }
  }

  /**
   * Observe First Contentful Paint (FCP)
   */
  private observeFCP(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.updateMetric('fcp', entry.startTime);
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('FCP observation not supported:', error);
    }
  }

  /**
   * Observe Time to First Byte (TTFB)
   */
  private observeTTFB(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.entryType === 'navigation') {
            this.updateMetric('ttfb', entry.responseStart - entry.requestStart);
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      console.warn('TTFB observation not supported:', error);
    }
  }

  /**
   * Observe DOM Content Loaded
   */
  private observeDOMContentLoaded(): void {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.updateMetric('domContentLoaded', performance.now());
      });
    } else {
      this.updateMetric('domContentLoaded', performance.now());
    }

    if (document.readyState === 'interactive') {
      this.updateMetric('domInteractive', performance.now());
    } else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'interactive') {
          this.updateMetric('domInteractive', performance.now());
        }
      });
    }

    window.addEventListener('load', () => {
      this.updateMetric('loadComplete', performance.now());
    });
  }

  /**
   * Observe Resource Timing
   */
  private observeResourceTiming(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        let resourceCount = 0;
        let resourceSize = 0;

        entries.forEach((entry: any) => {
          resourceCount++;
          if (entry.transferSize) {
            resourceSize += entry.transferSize;
          }
        });

        this.metrics.resourceCount = resourceCount;
        this.metrics.resourceSize = resourceSize;
        this.notifyObservers();
      });

      observer.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.warn('Resource timing observation not supported:', error);
    }
  }

  /**
   * Observe Memory Usage
   */
  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
    }
  }

  /**
   * Observe Network Information
   */
  private observeNetworkInfo(): void {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      this.metrics.connectionType = connection.type;
      this.metrics.effectiveType = connection.effectiveType;
      this.metrics.downlink = connection.downlink;
      this.metrics.rtt = connection.rtt;
    }
  }

  /**
   * Observe Custom Metrics
   */
  private observeCustomMetrics(): void {
    // Monitor page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.recordCustomMetric('page_hidden', performance.now());
      } else {
        this.recordCustomMetric('page_visible', performance.now());
      }
    });

    // Monitor user interactions
    ['click', 'scroll', 'keydown'].forEach(eventType => {
      document.addEventListener(eventType, () => {
        this.recordCustomMetric(`user_${eventType}`, performance.now());
      });
    });
  }

  /**
   * Update a specific metric
   */
  private updateMetric(metric: keyof PerformanceMetrics, value: number): void {
    if (metric in this.metrics) {
      (this.metrics as any)[metric] = value;
      this.checkThreshold(metric, value);
      this.notifyObservers();
    }
  }

  /**
   * Record a custom metric
   */
  public recordCustomMetric(name: string, value: number): void {
    this.metrics.customMetrics[name] = value;
    this.notifyObservers();
  }

  /**
   * Check if metric exceeds threshold
   */
  private checkThreshold(metric: string, value: number): void {
    const threshold = this.thresholds[metric];
    if (threshold && value > threshold) {
      this.notifyThresholdExceeded(metric, value, threshold);
    }
  }

  /**
   * Notify observers of metric updates
   */
  private notifyObservers(): void {
    this.observers.forEach(observer => {
      try {
        observer.onMetricUpdate(this.metrics);
      } catch (error) {
        console.error('Error in performance observer:', error);
      }
    });
  }

  /**
   * Notify observers of threshold exceeded
   */
  private notifyThresholdExceeded(metric: string, value: number, threshold: number): void {
    this.observers.forEach(observer => {
      try {
        observer.onThresholdExceeded(metric, value, threshold);
      } catch (error) {
        console.error('Error in performance threshold observer:', error);
      }
    });
  }

  /**
   * Add performance observer
   */
  public addObserver(observer: PerformanceObserver): void {
    this.observers.push(observer);
  }

  /**
   * Remove performance observer
   */
  public removeObserver(observer: PerformanceObserver): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Get current metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Get specific metric
   */
  public getMetric(metric: keyof PerformanceMetrics): any {
    return this.metrics[metric];
  }

  /**
   * Set threshold for a metric
   */
  public setThreshold(metric: string, threshold: number): void {
    this.thresholds[metric] = threshold;
  }

  /**
   * Get performance score based on Core Web Vitals
   */
  public getPerformanceScore(): number {
    const scores = [];
    
    if (this.metrics.lcp !== null) {
      scores.push(this.metrics.lcp <= 2500 ? 100 : Math.max(0, 100 - (this.metrics.lcp - 2500) / 25));
    }
    
    if (this.metrics.fid !== null) {
      scores.push(this.metrics.fid <= 100 ? 100 : Math.max(0, 100 - (this.metrics.fid - 100) / 1));
    }
    
    if (this.metrics.cls !== null) {
      scores.push(this.metrics.cls <= 0.1 ? 100 : Math.max(0, 100 - (this.metrics.cls - 0.1) * 1000));
    }
    
    if (this.metrics.fcp !== null) {
      scores.push(this.metrics.fcp <= 1800 ? 100 : Math.max(0, 100 - (this.metrics.fcp - 1800) / 18));
    }
    
    if (this.metrics.ttfb !== null) {
      scores.push(this.metrics.ttfb <= 800 ? 100 : Math.max(0, 100 - (this.metrics.ttfb - 800) / 8));
    }

    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  /**
   * Get performance recommendations
   */
  public getRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics.lcp && this.metrics.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint - consider image optimization and critical resource prioritization');
    }

    if (this.metrics.fid && this.metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time');
    }

    if (this.metrics.cls && this.metrics.cls > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift - ensure stable layout and avoid dynamic content insertion');
    }

    if (this.metrics.fcp && this.metrics.fcp > 1800) {
      recommendations.push('Optimize First Contentful Paint - reduce render-blocking resources');
    }

    if (this.metrics.ttfb && this.metrics.ttfb > 800) {
      recommendations.push('Improve Time to First Byte - optimize server response time');
    }

    if (this.metrics.resourceSize > 1024 * 1024) { // 1MB
      recommendations.push('Reduce resource size - consider code splitting and compression');
    }

    if (this.metrics.resourceCount > 50) {
      recommendations.push('Reduce number of resources - combine and minify files');
    }

    return recommendations;
  }

  /**
   * Reset metrics
   */
  public reset(): void {
    this.metrics = this.initializeMetrics();
    this.notifyObservers();
  }

  /**
   * Check if monitoring is initialized
   */
  public isReady(): boolean {
    return this.isInitialized;
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();