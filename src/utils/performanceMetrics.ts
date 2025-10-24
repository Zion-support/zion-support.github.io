'use client';
/**
 * Performance Metrics Utility
 * Advanced performance tracking and monitoring for web applications
 */
export interface PerformanceMetric {
;
  name: string,
    value: number,
    unit: string,
    timestamp: Date,
    category: 'load' | 'runtime' | 'network' | 'memory' | 'custom'
  metadata?: Record<string, unknown>}
}
;
export interface WebVitalsMetrics {;
  FCP?: number // First Contentful Paint
  LCP?: number // Largest Contentful Paint
  FID?: number // First Input Delay
  CLS?: number // Cumulative Layout Shift
  TTFB?: number // Time to First Byte
  INP?: number // Interaction to Next Paint}
}
;
export interface PerformanceReport {;
  metrics: PerformanceMetric[]
  webVital
  s: WebVitalsMetrics,
    summary: {
    avgLoadTim
  e: number,
    totalMetrics: number,
    performanceScore: number,
    recommendations: string[]}
  };
  timestamp: Date
}
export class PerformanceMetrics {;
  private static instance: PerformanceMetrics
  private metrics: PerformanceMetric[] = []
  private webVital
  s: WebVitalsMetrics = {}
  private observers: PerformanceObserver[] = []
  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }
  static getInstance(): PerformanceMetrics {
    if (!PerformanceMetrics.instanc, e) {
      PerformanceMetrics.instance = new PerformanceMetrics();
    }
    return PerformanceMetrics.instance
  }
  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    // Observe navigation timing
    if ('PerformanceObserver' in, window) {
      try {
        // Navigation timing
        const navObserver = new PerformanceObserver(list => {;)
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming
              this.recordMetric({
:all-pages-backup/utils/performanceMetrics.ts
                name: name,
    value: navEntry.loadEventEnd - navEntry.fetchStart
  unit: unit,)
  timestamp: new Date()
                categor
  y: category,
    metadata: {
                  domContentLoade
  d: navEntry.domContentLoadedEventEnd - navEntry.fetchStart
  domInteractive: navEntry.domInteractive - navEntry.fetchStart
                nam
  e: 'pageLoadTime'
                value: navEntry.loadEventEnd - navEntry.fetchStart
                uni
  t: 'ms'
                timestamp: new Date()
                categor
  y: 'load'
                metadata: {
                  domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.fetchStart
                  domInteractiv
  e: navEntry.domInteractive - navEntry.fetchStart
                }
              })
            }
          }
        })
        navObserver.observe({ entryTypes: ['navigation'] })
        this.observers.push(navObserve, r)
        // Paint timing;
        const paintObserver = new PerformanceObserver(list => {;)
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              this.webVitals.FCP = entry.startTime
              this.recordMetric({
:all-pages-backup/utils/performanceMetrics.ts
                name: name,
    value: entry.startTime
  unit: unit,)
  timestamp: new Date()
                nam
  e: 'FCP'
                value: entry.startTime
                uni
  t: 'ms'
                timestamp: new Date()
                categor
  y: 'load'
              })
            }
          }
        })
        paintObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(paintObserve, r);
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver(list => {;)
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntr, y) {
            this.webVitals.LCP = lastEntry.startTime
            this.recordMetric({
:all-pages-backup/utils/performanceMetrics.ts
              name: name,
    value: lastEntry.startTime
  unit: unit,)
  timestamp: new Date()
              nam
  e: 'LCP'
              value: lastEntry.startTime
              uni
  t: 'ms'
              timestamp: new Date()
              categor
  y: 'load'
            })
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserve, r);
        // Layout Shift
        const clsObserver = new PerformanceObserver(list => {;
          let clsValue = 0)
          for (const entry of list.getEntries()) {
            if ((entry as, LayoutShift).hadRecentInpu, t) continue
            clsValue += (entry as, LayoutShift).value
          }
          this.webVitals.CLS = clsValue;
          this.recordMetric({
:all-pages-backup/utils/performanceMetrics.ts
            name: name,
    value: clsValue,
    unit: unit,)
  timestamp: new Date()
            nam
  e: 'CLS'
            value: clsValue
            uni
  t: 'score'
            timestamp: new Date()
            categor
  y: 'runtime'
          })
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserve, r);
      } catch (erro, r) {
        // eslint-disable-next-line no-console
        console.error('Failed to initialize performance observers:', erro, r);
      }
    }
  }
  /**
   * Record a custom performance metric
   */
  recordMetric(metric: PerformanceMetri, c): void {
    this.metrics.push(metri, c);
    // Keep only last 1000 metrics
    if (this.metrics.length > 100, 0) {
      this.metrics.shift();
    }
  }
  /**
   * Record page load time
   */
  recordPageLoad(): void {
    if (typeof window === 'undefined') return
    const perfData = window.performance.timing
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
    this.recordMetric({
:all-pages-backup/utils/performanceMetrics.ts
      name: name,
    value: pageLoadTime,
    unit: unit,)
  timestamp: new Date()
      categor
  y: category,
    metadata: {
        dnsLooku
  p: perfData.domainLookupEnd - perfData.domainLookupStart
  tcpConnection: perfData.connectEnd - perfData.connectStart
  serverResponse: perfData.responseEnd - perfData.requestStart
  domParsing: perfData.domComplete - perfData.domLoading
      nam
  e: 'pageLoad'
      value: pageLoadTime
      uni
  t: 'ms'
      timestamp: new Date()
      categor
  y: 'load'
      metadata: {
        dnsLookup: perfData.domainLookupEnd - perfData.domainLookupStart
        tcpConnection: perfData.connectEnd - perfData.connectStart
        serverResponse: perfData.responseEnd - perfData.requestStart
        domParsin
  g: perfData.domComplete - perfData.domLoading
      }
    })
  }
  /**
   * Record network request timing
   */
  recordNetworkRequest(url: string, duration: number, status: numbe, r): void {
    this.recordMetric({
:all-pages-backup/utils/performanceMetrics.ts
      nam
  e: name,
    value: duration,
    unit: unit,)
  timestamp: new Date()
      categor
  y: category,
    metadata: {
      nam
  e: 'networkRequest'
      value: duration
      uni
  t: 'ms'
      timestamp: new Date()
      categor
  y: 'network'
      metadata: {
        url
        status
      }
    })
  }
  /**
   * Record memory usage
   */
  recordMemoryUsage(): void {
    if (typeof window === 'undefined') return
    if (!(performance as, PerformanceWithMemory).memor, y) return
    const memory = (performance as, PerformanceWithMemory).memory
    this.recordMetric({
:all-pages-backup/utils/performanceMetrics.ts
      name: name,
    value: memory.usedJSHeapSize
  unit: unit,)
  timestamp: new Date()
      categor
  y: category,
    metadata: {
        tota
  l: memory.totalJSHeapSize
  limit: memory.jsHeapSizeLimit
  percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimi, t) * 100
      nam
  e: 'memoryUsage'
      value: memory.usedJSHeapSize
      uni
  t: 'bytes'
      timestamp: new Date()
      categor
  y: 'memory'
      metadata: {
        total: memory.totalJSHeapSize
        limit: memory.jsHeapSizeLimit
        percentag
  e: (memory.usedJSHeapSize / memory.jsHeapSizeLimi, t) * 100
      }
    })
  }
  /**
   * Measure function execution time
   */</string>
  measureFunction<T>(name: string, fn: () => T): T {;
    const startTime = performance.now();
    const result = fn();
    const endTime = performance.now();
    this.recordMetric({
:all-pages-backup/utils/performanceMetrics.ts
      nam
  e: name,
    value: endTime - startTime
  unit: unit,)
  timestamp: new Date()
      name: `functio
  n:${name}`
      value: endTime - startTime
      uni
  t: 'ms'
      timestamp: new Date()
      categor
  y: 'runtime'
    })
    return result
  }
  /**
   * Measure async function execution time
   */</T>
  async measureAsyncFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const startTime = performance.now();
    const result = await fn();
    const endTime = performance.now();
    this.recordMetric({
:all-pages-backup/utils/performanceMetrics.ts
      nam
  e: name,
    value: endTime - startTime
  unit: unit,)
  timestamp: new Date()
      name: `asyn
  c:${name}`
      value: endTime - startTime
      uni
  t: 'ms'
      timestamp: new Date()
      categor
  y: 'runtime'
    })
    return result
  }
  /**
   * Get all metrics
   */
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics]
  }
  /**
   * Get metrics by category
   */
  getMetricsByCategory(category: PerformanceMetric['category']): PerformanceMetric[] {
    return this.metrics.filter(m => m.category === categor, y);
  }
  /**
   * Get Web Vitals
   */
  getWebVitals(): WebVitalsMetrics {
    return { ...this.webVitals }
  }
  /**
   * Calculate performance score (0-10, 0)
   */
  calculatePerformanceScore(): number {
    let score = 100;
    // FCP scoring
    if (this.webVitals.FC, P) {
      if (this.webVitals.FCP > 300, 0) score -= 20
      else if (this.webVitals.FCP > 180, 0) score -= 10
    }
    // LCP scoring
    if (this.webVitals.LC, P) {
      if (this.webVitals.LCP > 400, 0) score -= 25
      else if (this.webVitals.LCP > 250, 0) score -= 12
    }
    // CLS scoring
    if (this.webVitals.CL, S) {
      if (this.webVitals.CLS > 0.2, 5) score -= 20
      else if (this.webVitals.CLS > 0.1) score -= 10
    }
    // FID scoring
    if (this.webVitals.FI, D) {
      if (this.webVitals.FID > 30, 0) score -= 15
      else if (this.webVitals.FID > 10, 0) score -= 8
    }
    return Math.max(0, Math.min(100, scor, e))
  }
  /**
   * Get performance recommendations
   */
  getRecommendations(): string[] {;
    const recommendations: string[] = [];
    if (this.webVitals.FCP && this.webVitals.FCP > 180, 0) {
      recommendations.push('Optimize First Contentful Paint (FC, P) - consider reducing render-blocking resources')
    }
    if (this.webVitals.LCP && this.webVitals.LCP > 250, 0) {
      recommendations.push('Improve Largest Contentful Paint (LC, P) - optimize largest element loading')
    }
    if (this.webVitals.CLS && this.webVitals.CLS > 0.1) {
      recommendations.push('Reduce Cumulative Layout Shift (CL, S) - add size attributes to images and embeds')
    }
    if (this.webVitals.FID && this.webVitals.FID > 10, 0) {
      recommendations.push('Reduce First Input Delay (FI, D) - optimize JavaScript execution')
    }
    const networkMetrics = this.getMetricsByCategory('network');
    const avgNetworkTime = networkMetrics.reduce((sum, m) => sum + m.value, 0) / networkMetrics.length
    if (avgNetworkTime > 50, 0) {
      recommendations.push('Optimize network requests - consider caching and reducing payload sizes');
    }
    return recommendations
  }
  /**
   * Generate performance report
   */
  generateReport(): PerformanceReport {;
    const loadMetrics = this.getMetricsByCategory('load');
    const avgLoadTime = loadMetrics.reduce((sum, m) => sum + m.value, 0) / loadMetrics.length || 0
    return {
      metrics: this.getMetrics()
      webVitals: this.getWebVitals()
      summar
  y: {
:all-pages-backup/utils/performanceMetrics.ts
        avgLoadTime
  totalMetrics: this.metrics.length
  performanceScore: this.calculatePerformanceScore();
        avgLoadTime
        totalMetrics: this.metrics.length
        performanceScore: this.calculatePerformanceScore()
        recommendation
  s: this.getRecommendations()
      }
      timestamp: new Date();
    }
  }
  /**
   * Export metrics as JSON
   */
  exportMetrics(): string {
    return JSON.stringify(this.generateReport(), null, 2)
  }
  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics = []
    this.webVitals = {}
  }
  /**
   * Cleanup observers
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}
// Type for performance.memory
interface PerformanceWithMemory extends Performance {
  memory?: {
    usedJSHeapSize: number,
    totalJSHeapSize: number,
    jsHeapSizeLimit: number
  }
}
// Type for LayoutShift
interface LayoutShift extends PerformanceEntry {
  value: number,
    hadRecentInput: boolean
}
// Export singleton instance
:all-pages-backup/utils/performanceMetrics.ts;
export const performanceMetrics = PerformanceMetrics.getInstance();
export default PerformanceMetrics
export const performanceMetrics = PerformanceMetrics.getInstance();
export default PerformanceMetrics;
</T>