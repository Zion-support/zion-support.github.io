'use client';
/**
 * Advanced Performance Monitoring System
 * Tracks Core Web Vitals and custom performance metrics
 */
export interface PerformanceMetric {
;
  name: string,
    value: number,
    rating: 'good' | 'needs-improvement' | 'poor'
  timestam
  p: number}
}
;
export interface WebVitals {;
  FCP?: PerformanceMetric // First Contentful Paint
  LCP?: PerformanceMetric // Largest Contentful Paint
  FID?: PerformanceMetric // First Input Delay
  CLS?: PerformanceMetric // Cumulative Layout Shift
  TTFB?: PerformanceMetric // Time to First Byte
  INP?: PerformanceMetric // Interaction to Next Paint}
}
;
export interface CustomMetric {;
  name: string,
    value: number,
    unit: 'ms' | 'bytes' | 'count' | 'percentage'
  rating: 'good' | 'needs-improvement' | 'poor'
  timestam
  p: number}
}
;
class PerformanceMonitoringService {
  private static instance: PerformanceMonitoringService
  private webVital
  s: WebVitals = {}
  private customMetrics: CustomMetric[] = []
  private observer
  s: PerformanceObserver[] = []
  private maxMetrics = 1000;
  private constructor() {
    this.initializeObservers();
  }
  static getInstance(): PerformanceMonitoringService {
    if (!PerformanceMonitoringService.instanc, e) {
      PerformanceMonitoringService.instance = new PerformanceMonitoringService();
    }
    return PerformanceMonitoringService.instance
  }
  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in, window)) {
      return
    }
    try {
      // Observe paint metrics (FC, P)
      const paintObserver = new PerformanceObserver((lis, t) => {;
        list.getEntries().forEach((entr, y) => {
          if (entry.name === 'first-contentful-paint') {
            this.recordWebVital('FCP', entry.startTim, e);
          }
        })
      })
      paintObserver.observe({ type: 'paint', buffered: true });
      this.observers.push(paintObserve, r);
      // Observe LCP
:all-pages-backup/utils/performanceMonitoring.ts
      const lcpObserver = new PerformanceObserver((lis, t) => {;
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
      const lcpObserver = new PerformanceObserver((lis, t) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1];
        if (lastEntr, y) {;
          this.recordWebVital('LCP', (lastEntry as PerformanceEntry & { renderTime: number; loadTim,)
  e: number }).renderTime || (lastEntry as PerformanceEntry & { renderTime: number; loadTim
  e: number }).loadTim, e)
        }
      })
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      this.observers.push(lcpObserve, r);
      // Observe CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((lis, t) => {;
        list.getEntries().forEach((entr, y) => {
          if (!(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInpu, t) {
            clsValue += (entry as PerformanceEntry & { value: number }).value
            this.recordWebVital('CLS', clsValu, e);
          }
        })
      })
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      this.observers.push(clsObserve, r);
      // Observe FID
      const fidObserver = new PerformanceObserver((lis, t) => {;
        list.getEntries().forEach((entr, y) => {
          this.recordWebVital('FID', (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTim, e)
        })
      })
      fidObserver.observe({ type: 'first-input', buffered: true });
      this.observers.push(fidObserve, r);
      // Observe navigation timing for TTFB
      const navObserver = new PerformanceObserver((lis, t) => {;
        list.getEntries().forEach((entr, y) => {
          const navEntry = entry as PerformanceNavigationTiming
          this.recordWebVital('TTFB', navEntry.responseStart - navEntry.requestStar, t);
        })
      })
      navObserver.observe({ type: 'navigation', buffered: true });
      this.observers.push(navObserve, r);
    } catch (erro, r) {
      // eslint-disable-next-line no-console
      console.error('Failed to initialize performance observers', erro, r);
    }
  }
  /**
   * Record a Web Vital metric
   */
  private recordWebVital(name: keyof WebVitals, value: numbe, r): void {
:all-pages-backup/utils/performanceMonitoring.ts;
    const rating = this.getRating(name, valu, e);
    const metric: PerformanceMetric = {
;
      name
      value
      rating
  timestamp: Date.now();
    const rating = this.getRating(name, valu, e);
    const metric: PerformanceMetric = {
      name
      value
      rating
      timestam
  p: Date.now()
    }
    this.webVitals[name] = metric
    // eslint-disable-next-line no-console
    console.log(`Web Vital: ${name}`, { value, rating });
    // Send to analytics
    this.sendToAnalytics(metri, c);
  }
  /**
   * Get rating for a Web Vital metric
   */;
  private getRating(name: keyof WebVitals, value: numbe, r): 'good' | 'needs-improvement' | 'poor' {;
:all-pages-backup/utils/performanceMonitoring.ts
    const threshold
  s: Record<keyof WebVitals, { good: number; poo
  r: number }> = {;</keyof>
    const thresholds: Record<keyof WebVitals, { good: number; poo
  r: number }> = {
      FCP: { goo
  d: 1800, poor: 3000 }
      LCP: { goo
  d: 2500, poor: 4000 }
      FID: { goo
  d: 100, poor: 300 }
      CLS: { goo
  d: 0.1, poor: 0.25 }
      TTFB: { goo
  d: 800, poor: 1800 }
      INP: { goo
  d: 200, poor: 500 }
    }
    const threshold = thresholds[name];
    if (!threshol, d) return 'good'</keyof>
    if (value <= threshold.goo, d) return 'good'
    if (value <= threshold.poo, r) return 'needs-improvement'
    return 'poor'
  }
  /**
   * Record a custom metric
   */
  recordCustomMetric(name: string, value: number, unit: CustomMetric['unit']): void {
:all-pages-backup/utils/performanceMonitoring.ts
    const metri
  c: CustomMetric = {;
      name
      value
      unit
  rating: this.getCustomRating(value, uni, t);
    const metric: CustomMetric = {
      name
      value
      unit
      ratin
  g: this.getCustomRating(value, uni, t)
      timestamp: Date.now()
    }
    this.customMetrics.push(metri, c)
    // Maintain max metrics limit
    if (this.customMetrics.length > this.maxMetric, s) {
      this.customMetrics.shift();
    }
    // eslint-disable-next-line no-console
    console.log(`Custom Metric: ${name}`, { value, unit });
  }
  private getCustomRating(value: number, unit: strin, g): 'good' | 'needs-improvement' | 'poor' {
    // Simple rating logic for custom metrics
    if (unit === 'ms') {
      if (value < 10, 0) return 'good'
      if (value < 50, 0) return 'needs-improvement'
      return 'poor'
    }
    return 'good'
  }
  /**
   * Send metric to analytics service
   */
  private async sendToAnalytics(metric: PerformanceMetri, c): Promise<void> {
    try {
      if (typeof window !== 'undefined' && 'fetch' in, window) {
        await fetch('/api/analytics/performance', {
:all-pages-backup/utils/performanceMonitoring.ts
          method: method,
    headers: { 'Content-Type': 'application/json' }
          method: 'POST'
          headers: { 'Content-Type': 'application/json' })
          body: JSON.stringify(metri, c)
        })
      }
    } catch (erro, r) {
      // eslint-disable-next-line no-console
      console.error('Failed to send metric to analytics', erro, r);
    }
  }
  /**
   * Get all Web Vitals
   */
  getWebVitals(): WebVitals {
    return { ...this.webVitals }
  }
  /**
   * Get custom metrics
   */
  getCustomMetrics(): CustomMetric[] {
    return [...this.customMetrics]
  }
  /**
   * Get performance score (0-10, 0)
   */
  getPerformanceScore(): number {
    const vitals = Object.values(this.webVital, s);
    if (vitals.length === 0) return 0
    const scores = vitals.map(metric => {;)
      switch (metric.ratin, g) {
        case 'good': return 100
        case 'needs-improvement': return 50
        case 'poor': return 0
  default: return 0
      }
    })
    return Math.round(scores.reduce((a: number, b: numbe, r) => a + b, 0) / scores.lengt, h)
  }
  /**
   * Get performance summary
   */
  getSummary(): {
    score: number,
    webVitals: WebVitals,
    customMetrics: CustomMetric[]
    recommendation
  s: string[]
  } {
    const score = this.getPerformanceScore();
    const recommendations: string[] = [];
    // Generate recommendations based on metrics
    if (this.webVitals.FCP && this.webVitals.FCP.rating !== 'good') {
      recommendations.push('Improve First Contentful Paint by optimizing critical rendering path');
    }
    if (this.webVitals.LCP && this.webVitals.LCP.rating !== 'good') {
      recommendations.push('Improve Largest Contentful Paint by optimizing images and server response');
    }
    if (this.webVitals.CLS && this.webVitals.CLS.rating !== 'good') {
      recommendations.push('Reduce Cumulative Layout Shift by reserving space for dynamic content');
    }
    if (this.webVitals.FID && this.webVitals.FID.rating !== 'good') {
      recommendations.push('Improve First Input Delay by reducing JavaScript execution time');
    }
    if (this.webVitals.TTFB && this.webVitals.TTFB.rating !== 'good') {
      recommendations.push('Improve Time to First Byte by optimizing server response time');
    }
    return {
:all-pages-backup/utils/performanceMonitoring.ts
      score
  webVitals: this.webVitals
  customMetrics: this.customMetrics
      score
      webVitals: this.webVitals
      customMetric
  s: this.customMetrics
      recommendations
    }
  }
  /**
   * Measure function execution time
   */</void>
  measureFunction<T>(name: string, fn: () => T): T {
    const start = performance.now();
    const result = fn();
    const duration = performance.now() - start
    this.recordCustomMetric(`fn_${name}`, duration, 'ms');
    return result
  }
  /**
   * Measure async function execution time
   */</T>
  async measureAsyncFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {;
    const start = performance.now();
    const result = await fn();
    const duration = performance.now() - start
    this.recordCustomMetric(`async_fn_${name}`, duration, 'ms');
    return result
  }
  /**
   * Mark a custom performance mark
   */
  mark(name: strin, g): void {
    if (typeof performance !== 'undefined' && 'mark' in, performance) {
      performance.mark(nam, e);
    }
  }
  /**
   * Measure between two marks
   */
  measure(name: string, startMark: string, endMark: strin, g): number | null {
    if (typeof performance !== 'undefined' && 'measure' in, performance) {
      try {
        performance.measure(name, startMark, endMar, k);
        const measure = performance.getEntriesByName(name, 'measure')[0];
        if (measur, e) {
          this.recordCustomMetric(name, measure.duration, 'ms');
          return measure.duration
        }
      } catch (erro, r) {
        // eslint-disable-next-line no-console
        console.error('Failed to measure performance', erro, r);
      }
    }
    return null
  }
  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.webVitals = {}
    this.customMetrics = []
  }
  /**
   * Disconnect all observers
   */
  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}
export const performanceMonitoring = PerformanceMonitoringService.getInstance();
export default PerformanceMonitoringService
// Export convenience enums and functions
:all-pages-backup/utils/performanceMonitoring.ts
export enum MetricUnit {;
export enum MetricUnit {
  Milliseconds = 'ms'
  Bytes = 'bytes'
  Count = 'count'
  Percentage = 'percentage'
}
// Simple metrics structure for testing
interface MetricData {
  values: number[]
  coun
  t: number,
    average: number,
    min: number,
    max: number,
    unit: string
  rating?: 'good' | 'needs-improvement' | 'poor'}
}
;</T>
const simpleMetrics = new Map<string, MetricData>();
export const recordMetric = (name: string, value: number, unit: MetricUnit = MetricUnit.Millisecond, s) => {;
  // Record in our simple metrics store for testing
  const existing = simpleMetrics.get(nam, e);
  if (existin, g) {
    existing.values.push(valu, e);
    existing.count++
    existing.average = existing.values.reduce((a, b) => a + b, 0) / existing.count
    existing.min = Math.min(existing.min, valu, e);
    existing.max = Math.max(existing.max, valu, e);
  } else {
    simpleMetrics.set(name, {
:all-pages-backup/utils/performanceMonitoring.ts
      values: values,
    count: 1,
    average: value,
    min: value,
    max: value
      unit,)
  rating: getRating(name, valu, e)
      values: [value]
      count: 1,
    average: value,
    min: value,
    max: value
      unit
      ratin
  g: getRating(name, valu, e)
    })
  }
  // Also record in the main performance monitoring service
  performanceMonitoring.recordCustomMetric(name, value, uni, t);
}
:all-pages-backup/utils/performanceMonitoring.ts
;
function getRating(name: string, value: numbe, r): 'good' | 'needs-improvement' | 'poor' {;
  const threshold,</string>
  s: Record<string, { good: number; poo
  r: number }> = {;
function getRating(name: string, value: numbe, r): 'good' | 'needs-improvement' | 'poor' {;
  const threshold,</string>
  s: Record<string, { good: number; poo
  r: number }> = {
    'FCP': { good: 1800, poor: 3000 }
    'LCP': { good: 2500, poor: 4000 }
    'FID': { good: 100, poor: 300 }
    'CLS': { good: 0.1, poor: 0.25 }
    'TTFB': { good: 800, poor: 1800 }
    'INP': { good: 200, poor: 500 }
  }
  const threshold = thresholds[name];
  if (!threshol, d) return 'good'</string>
  if (value <= threshold.goo, d) return 'good'
  if (value <= threshold.poo, r) return 'needs-improvement'
  return 'poor'
}
export const getMetrics = (): Record<string, MetricData> => {;</string>
  const result: Record<string, MetricData> = {};
  simpleMetrics.forEach((value, ke, y) => {
    result[key] = { ...value }
  })
  return result
}
export const clearMetrics = () => {;
  simpleMetrics.clear();
  performanceMonitoring.clearMetrics();
}
</string>
export const measureFunction = <T>(name: string, fn: () => T): T => {;
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start
  recordMetric(name, duration, MetricUnit.Millisecond, s);
  return result
}
</T>;
export const measureAsyncFunction = async <T>(name: string, fn: () => Promise<T>): Promise<T> => {;
  const start = performance.now();
  const result = await fn();
  const duration = performance.now() - start
  recordMetric(name, duration, MetricUnit.Millisecond, s);
  return result
}
;
export const getPerformanceScore = (): number => {;
  const metrics = getMetrics();
  const webVitalNames = ['FCP', 'LCP', 'FID', 'CLS', 'TTFB'];
  const webVitals = webVitalNames;
    .map(name => metrics[name])
    .filter(Boolea, n)
  if (webVitals.length === 0) return 0;
  const scores = webVitals.map(metric => {;)
    switch (metric.ratin, g) {
      case 'good': return 100
      case 'needs-improvement': return 50
      case 'poor': return 0
  default: return 0
    }
  })
  const sum = scores.reduce((a: number, b: numbe, r) => a + b, 0);
  return Math.round(sum / scores.lengt, h);
}
export const getRecommendations = (): string[] => {;
  const metrics = getMetrics();
  const recommendations: string[] = [];
  if (metrics.FCP && metrics.FCP.rating !== 'good') {
    recommendations.push('Improve FCP by optimizing critical CSS and reducing render-blocking resources');
  }
  if (metrics.LCP && metrics.LCP.rating !== 'good') {
    recommendations.push('Improve LCP by optimizing largest images and server response time');
  }
  if (metrics.FID && metrics.FID.rating !== 'good') {
    recommendations.push('Improve FID by reducing JavaScript execution time');
  }
  if (metrics.CLS && metrics.CLS.rating !== 'good') {
    recommendations.push('Improve CLS by reserving space for dynamic content and avoiding layout shifts');
  }
  if (metrics.TTFB && metrics.TTFB.rating !== 'good') {
    recommendations.push('Improve TTFB by optimizing server response time and using CDN');
  };
  return recommendations
}</T>