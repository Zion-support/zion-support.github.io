'use client';
/**
 * Performance Metrics Utility
 * Advanced performance tracking and monitoring for web applications
 */
export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: Date;
  category: 'load' | 'runtime' | 'network' | 'memory' | 'custom';
  metadata?: Record<string, unknown>;
}
export interface WebVitalsMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
  INP?: number; // Interaction to Next Paint
}
export interface PerformanceReport {
  metrics: PerformanceMetric[];
  webVitals: WebVitalsMetrics;
  summary: {
    avgLoadTime: number;
    totalMetrics: number;
    performanceScore: number;
    recommendations: string[];
  };
  timestamp: Date;
}
export class PerformanceMetrics {
  private static instance: PerformanceMetrics;
  private metrics: PerformanceMetric[] = [];
  private _webVitals: WebVitalsMetrics = {};
  private observers: PerformanceObserver[] = [];
  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }
  static getInstance(): PerformanceMetrics {
    if (!PerformanceMetrics.instance) {
      PerformanceMetrics.instance = new PerformanceMetrics();
    }
    return PerformanceMetrics.instance;
  }
  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    // Observe navigation timing
    if ('PerformanceObserver' in window) {
      try {
        // Navigation timing
        const _navObserver = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              this.recordMetric({
                name: 'pageLoadTime',
                value: navEntry.loadEventEnd - navEntry.fetchStart,
                unit: 'ms',
                timestamp: new Date(),
                category: 'load',
                metadata: {
                  domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.fetchStart,
                  domInteractive: navEntry.domInteractive - navEntry.fetchStart
                }
              });
            }
          }
        });
        navObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navObserver);
        // Paint timing
        const paintObserver = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              this.webVitals.FCP = entry.startTime;
              this.recordMetric({
                name: 'FCP',
                value: entry.startTime,
                unit: 'ms',
                timestamp: new Date(),
                category: 'load'
              });
            }
          }
        });
        paintObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(paintObserver);
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.webVitals.LCP = lastEntry.startTime;
            this.recordMetric({
              name: 'LCP',
              value: lastEntry.startTime,
              unit: 'ms',
              timestamp: new Date(),
              category: 'load'
            });
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
        // Layout Shift
        const clsObserver = new PerformanceObserver(list => {
          let _clsValue = 0;
          for (const entry of list.getEntries()) {
            if ((entry as LayoutShift).hadRecentInput) continue;
            clsValue += (entry as LayoutShift).value;
          }
          this.webVitals.CLS = clsValue;
          this.recordMetric({
            name: 'CLS',
            value: clsValue,
            unit: 'score',
            timestamp: new Date(),
            category: 'runtime'
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (error) {
        }
    }
  }
  /**
   * Record a custom performance metric
   */
  recordMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    // Keep only last 1000 metrics
    if (this.metrics.length > 1000) {
      this.metrics.shift();
    }
  }
  /**
   * Record page load time
   */
  recordPageLoad(): void {
    if (typeof window === 'undefined') return;
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    this.recordMetric({
      name: 'pageLoad',
      value: pageLoadTime,
      unit: 'ms',
      timestamp: new Date(),
      category: 'load',
      metadata: {
        dnsLookup: perfData.domainLookupEnd - perfData.domainLookupStart,
        tcpConnection: perfData.connectEnd - perfData.connectStart,
        serverResponse: perfData.responseEnd - perfData.requestStart,
        domParsing: perfData.domComplete - perfData.domLoading
      }
    });
  }
  /**
   * Record network request timing
   */
  recordNetworkRequest(url: string, duration: number, status: number): void {
    this.recordMetric({
      name: 'networkRequest',
      value: duration,
      unit: 'ms',
      timestamp: new Date(),
      category: 'network',
      metadata: {
        url,
        status
      }
    });
  }
  /**
   * Record memory usage
   */
  recordMemoryUsage(): void {
    if (typeof window === 'undefined') return;
    if (!(performance as PerformanceWithMemory).memory) return;
    const memory = (performance as PerformanceWithMemory).memory;
    this.recordMetric({
      name: 'memoryUsage',
      value: memory.usedJSHeapSize,
      unit: 'bytes',
      timestamp: new Date(),
      category: 'memory',
      metadata: {
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
        percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
      }
    });
  }
  /**
   * Measure function execution time
   */
  measureFunction<T>(name: string, fn: () => T): T {
    const startTime = performance.now();
    const result = fn();
    const endTime = performance.now();
    this.recordMetric({
      name: `function:${name}`,
      value: endTime - startTime,
      unit: 'ms',
      timestamp: new Date(),
      category: 'runtime'
    });
    return result;
  }
  /**
   * Measure async function execution time
   */
  async measureAsyncFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const startTime = performance.now();
    const result = await fn();
    const endTime = performance.now();
    this.recordMetric({
      name: `async:${name}`,
      value: endTime - startTime,
      unit: 'ms',
      timestamp: new Date(),
      category: 'runtime'
    });
    return result;
  }
  /**
   * Get all metrics
   */
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }
  /**
   * Get metrics by category
   */
  getMetricsByCategory(category: PerformanceMetric['category']): PerformanceMetric[] {
    return this.metrics.filter(m => m.category === category);
  }
  /**
   * Get Web Vitals
   */
  getWebVitals(): WebVitalsMetrics {
    return { ...this.webVitals };
  }
  /**
   * Calculate performance score (0-100)
   */
  calculatePerformanceScore(): number {
    let score = 100;
    // FCP scoring
    if (this.webVitals.FCP) {
      if (this.webVitals.FCP > 3000) score -= 20;
      else if (this.webVitals.FCP > 1800) score -= 10;
    }
    // LCP scoring
    if (this.webVitals.LCP) {
      if (this.webVitals.LCP > 4000) score -= 25;
      else if (this.webVitals.LCP > 2500) score -= 12;
    }
    // CLS scoring
    if (this.webVitals.CLS) {
      if (this.webVitals.CLS > 0.25) score -= 20;
      else if (this.webVitals.CLS > 0.1) score -= 10;
    }
    // FID scoring
    if (this.webVitals.FID) {
      if (this.webVitals.FID > 300) score -= 15;
      else if (this.webVitals.FID > 100) score -= 8;
    }
    return Math.max(0, Math.min(100, score));
  }
  /**
   * Get performance recommendations
   */
  getRecommendations(): string[] {
    const recommendations: string[] = [];
    if (this.webVitals.FCP && this.webVitals.FCP > 1800) {
      recommendations.push(
        'Optimize First Contentful Paint (FCP) - consider reducing render-blocking resources'
      );
    }
    if (this.webVitals.LCP && this.webVitals.LCP > 2500) {
      recommendations.push(
        'Improve Largest Contentful Paint (LCP) - optimize largest element loading'
      );
    }
    if (this.webVitals.CLS && this.webVitals.CLS > 0.1) {
      recommendations.push(
        'Reduce Cumulative Layout Shift (CLS) - add size attributes to images and embeds'
      );
    }
    if (this.webVitals.FID && this.webVitals.FID > 100) {
      recommendations.push('Reduce First Input Delay (FID) - optimize JavaScript execution');
    }
    const networkMetrics = this.getMetricsByCategory('network');
    const avgNetworkTime =
      networkMetrics.reduce((sum, m) => sum + m.value, 0) / networkMetrics.length;
    if (avgNetworkTime > 500) {
      recommendations.push(
        'Optimize network requests - consider caching and reducing payload sizes'
      );
    }
    return recommendations;
  }
  /**
   * Generate performance report
   */
  generateReport(): PerformanceReport {
    const loadMetrics = this.getMetricsByCategory('load');
    const avgLoadTime = loadMetrics.reduce((sum, m) => sum + m.value, 0) / loadMetrics.length || 0;
    return {
      metrics: this.getMetrics(),
      webVitals: this.getWebVitals(),
      summary: {
        avgLoadTime,
        totalMetrics: this.metrics.length,
        performanceScore: this.calculatePerformanceScore(),
        recommendations: this.getRecommendations()
      },
      timestamp: new Date()
    };
  }
  /**
   * Export metrics as JSON
   */
  exportMetrics(): string {
    return JSON.stringify(this.generateReport(), null, 2);
  }
  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics = [];
    this.webVitals = {};
  }
  /**
   * Cleanup observers
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}
// Type for performance.memory
interface PerformanceWithMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}
// Type for LayoutShift
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}
// Export singleton instance
export const performanceMetrics = PerformanceMetrics.getInstance();
export default PerformanceMetrics;
