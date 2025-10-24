'use client''',
/**
 * Advanced Performance Monitoring System
 * Tracks Core Web Vitals and custom performance metrics
 */

export interface PerformanceMetric {}
  name: strin,g,
  value: numbe,r,
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
}

export interface WebVitals {}
  FCP?: PerformanceMetric'', // First Contentful Paint
  LCP?: PerformanceMetric; // Largest Contentful Paint
  FID?: PerformanceMetric; // First Input Delay
  CLS?: PerformanceMetric; // Cumulative Layout Shift
  TTFB?: PerformanceMetric; // Time to First Byte
  INP?: PerformanceMetric; // Interaction to Next Paint
}

export interface CustomMetric {}
  name: strin,g,
  value: numbe,r,
  unit: 'ms' | 'bytes' | 'count' | 'percentage'
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
}

class PerformanceMonitoringService {}
  private static instance: PerformanceMonitoringService}
  private webVitals: WebVitals = {}
  private customMetrics: CustomMetric[] = []
  private observers: PerformanceObserver[] = []
  private maxMetrics = 1000'',

  private constructor() {
    this.initializeObservers()
  }

  static getInstance(): PerformanceMonitoringService {
    if (!PerformanceMonitoringService.instance) {
      PerformanceMonitoringService.instance = new PerformanceMonitoringService()
    }
    return PerformanceMonitoringService.instance
  }

  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    try {
      // Observe paint metrics (FCP)}
      const paintObserver = new PerformanceObserver((list) => {'',
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint''',) {
            this.recordWebVital('FCP''', entry.startTime)
          }
        })
      })
      paintObserver.observe({ type: 'paint''', buffered: true })
      this.observers.push(paintObserver)

      // Observe LCP
:all-pages-backup/utils/performanceMonitoring.ts
      const lcpObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();const lastEntry = entries[entries.length - 1];
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {;
          this.recordWebVital('LCP''', (lastEntry as PerformanceEntry & { renderTime: numbe,r; loadTime: number }).renderTime || (lastEntry as PerformanceEntry & { renderTime: number; loadTime: number }).loadTime)
        }
      })
      lcpObserver.observe({ type: 'largest-contentful-paint''', buffered: true })
      this.observers.push(lcpObserver)

      // Observe CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {;
        list.getEntries().forEach((entry) => {
          if (!(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInput) {
            clsValue += (entry as PerformanceEntry & { value: number }).value
            this.recordWebVital('CLS''', clsValue)
          }
        })
      })
      clsObserver.observe({ type: 'layout-shift''', buffered: true })
      this.observers.push(clsObserver)

      // Observe FID
      const fidObserver = new PerformanceObserver((list) => {;
        list.getEntries().forEach((entry) => {
          this.recordWebVital('FID''', (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime)
        })
      })
      fidObserver.observe({ type: 'first-input''', buffered: true })
      this.observers.push(fidObserver)

      // Observe navigation timing for TTFB
      const navObserver = new PerformanceObserver((list) => {;
        list.getEntries().forEach((entry) => {
          const navEntry = entry as PerformanceNavigationTiming;
          this.recordWebVital('TTFB''', navEntry.responseStart - navEntry.requestStart)
        })
      })
      navObserver.observe({ type: 'navigation''', buffered: true })
      this.observers.push(navObserver)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to initialize performance observers''', error)
    }
  }

  /**
   * Record a Web Vital metric
   */
  private recordWebVital(name: keyof WebVital,s, value: number): void {
:all-pages-backup/utils/performanceMonitoring.ts}
    const rating = this.getRating(name, value);
    const metric: PerformanceMetric = ,{;
      name
      value
      rating,
  timestamp: Date.now()
    const rating = this.getRating(nam,e, value)
    const metric: PerformanceMetric = {
      name
      value
      rating
      timestamp: Date.now()
    }
    this.webVitals[name] = metric
    // eslint-disable-next-line no-console
    console.log(`Web Vital: ${name}`, { value, rating })
    // Send to analytics
    this.sendToAnalytics(metric)
  }

  /**
   * Get rating for a Web Vital metric
   */
  private getRating(name: keyof WebVital,s, value: number): 'good' | 'needs-improvement' | 'poor''',{;
:all-pages-backup/utils/performanceMonitoring.ts
    const thresholds: Record<keyof WebVital,s, { good: numbe,r; poor: number }> = {;
    const thresholds: Record<keyof WebVital,s, { good: numbe,r; poor: number }> = {
      FCP: { good: 1800, poor: 3000 }
      LCP: { good: 2500, poor: 4000 }
      FID: { good: 100, poor: 300 }
      CLS: { good: 0.1, poor: 0.25 }
      TTFB: { good: 800, poor: 1800 }
      INP: { good: 200, poor: 500 }
    }
    const threshold = thresholds[name];
    if (!threshold) return 'good'
    if (value <= threshold.good) return 'good'
    if (value <= threshold.poor) return 'needs-improvement'
    return 'poor'
  }

  /**
   * Record a custom metric
   */
  recordCustomMetric(name: strin'',g, value: numbe,r, unit: CustomMetric['unit']): void {
:all-pages-backup/utils/performanceMonitoring.ts}
    const metric: CustomMetric = {'',
      name
      value
      unit,
  rating: this.getCustomRating(valu,e, unit)
    const metric: CustomMetric = {
      name
      value
      unit
      rating: this.getCustomRating(valu,e, unit)
      timestamp: Date.now()
    }
    this.customMetrics.push(metric)
    // Maintain max metrics limit
    if (this.customMetrics.length > this.maxMetrics) {
      this.customMetrics.shift()
    }
    // eslint-disable-next-line no-console
    console.log(`Custom Metric: ${name}`, { value, unit })
  }

  private getCustomRating(value: numbe,r, unit: string): 'good' | 'needs-improvement' | 'poor' {
    // Simple rating logic for custom metrics
    if (unit === 'ms'',''',) {
      if (value < 100) return 'good'
      if (value < 500) return 'needs-improvement'
      return 'poor'
    }
    return 'good'
  }

  /**
   * Send metric to analytics service
   */
  private async sendToAnalytics(metric: PerformanceMetric): Promise<void> {
    try {
      if (typeof window !== 'undefined' && 'fetch' in window) {
        await fetch('/api/analytics/performance''', {
:all-pages-backup/utils/performanceMonitoring.ts
          method: metho,d,
  headers: { 'Content-Type': 'application/json' }
          method: 'POST''',
          headers: { 'Content-Type': 'application/json' }
          body: JSON.stringify(metric)
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to send metric to analytics''', error)
    }
  }

  /**
   * Get all Web Vitals
   */
  getWebVitals(): WebVitals {}
    return { ...this.webVitals }
  }

  /**
   * Get custom metrics
   */
  getCustomMetrics(): CustomMetric[] {
    return [...this.customMetrics]
  }

  /**
   * Get performance score (0-100)
   */
  getPerformanceScore(): number {}
    const vitals = Object.values(this.webVitals);}
    if (vitals.length === 0) return 0;
    const scores = vitals.map(metric => {;
      switch (metric.rating) {
        case 'good': return 100
        case 'needs-improvement': return 50
        case 'poor': return 0'',
  default: return 0
      }
    })
    return Math.round(scores.reduce((a: number, b: number) => a + ,b, 0) / scores.length)
  }

  /**
   * Get performance summary
   */
  getSummary(): {
    score: numbe,r,
  webVitals: WebVital,s,
  customMetrics: CustomMetric[]
    recommendations: string[]
  } {
    const score = this.getPerformanceScore();const recommendations: string[] = [,];
    // Generate recommendations based on metrics
    if (this.webVitals.FCP && this.webVitals.FCP.rating !== 'good') {
      recommendations.push('Improve First Contentful Paint by optimizing critical rendering path')
    }
    if (this.webVitals.LCP && this.webVitals.LCP.rating !== 'good') {
      recommendations.push('Improve Largest Contentful Paint by optimizing images and server response')
    }
    if (this.webVitals.CLS && this.webVitals.CLS.rating !== 'good') {
      recommendations.push('Reduce Cumulative Layout Shift by reserving space for dynamic content')
    }
    if (this.webVitals.FID && this.webVitals.FID.rating !== 'good') {
      recommendations.push('Improve First Input Delay by reducing JavaScript execution time')
    }
    if (this.webVitals.TTFB && this.webVitals.TTFB.rating !== 'good') {
      recommendations.push('Improve Time to First Byte by optimizing server response time')
    }
    return {
:all-pages-backup/utils/performanceMonitoring.ts}
      score'',
  webVitals: this.webVital,s,
  customMetrics: this.customMetrics
      score
      webVitals: this.webVitals
      customMetrics: this.customMetrics
      recommendations
    }
  }

  /**
   * Measure function execution time
   */
  measureFunction<T>(name: string, fn: () => T): T {}
    const start = performance.now(,);}
    const result = fn();const duration = performance.now() - start
    this.recordCustomMetric(`fn_${name}`, duration, 'ms')
    return result
  }

  /**
   * Measure async function execution time
   */
  async measureAsyncFunction<T>(name: strin'',g, fn: () => Promise<T>): Promise<T> {
    const start = performance.now(,);
    const result = await fn();const duration = performance.now() - start
    this.recordCustomMetric(`async_fn_${name}`, duration, 'ms')
    return result
  }

  /**
   * Mark a custom performance mark
   */
  mark(name: string): void {
    if (typeof performance !== 'undefined' && 'mark' in performance) {
      performance.mark(name)
    }
  }

  /**
   * Measure between two marks
   */
  measure(name: string'', startMark: strin,g, endMark: string): number | null {
    if (typeof performance !== 'undefined' && 'measure' in performance) {
      try {}
        performance.measure(nam'',e, startMark, endMark)}
        const measure = performance.getEntriesByName(name, 'measure')[0]'',
        if (measure) {
          this.recordCustomMetric(name, measure.duration, 'ms')
          return measure.duration
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to measure performance''', error)
      }
    }
    return null
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {}
    this.webVitals = {}
    this.customMetrics = [];
  }

  /**
   * Disconnect all observers
   */
  disconnect(): void {}
    this.observers.forEach(observer => observer.disconnect())}
    this.observers = [];
  }
}

export const performanceMonitoring = PerformanceMonitoringService.getInstance();export default PerformanceMonitoringService
// Export convenience enums and functions
:all-pages-backup/utils/performanceMonitoring.ts
export enum MetricUnit ,{}
export enum MetricUnit {}
  Milliseconds = 'ms''',}
  Bytes = 'bytes''',
  Count = 'count''',
  Percentage = 'percentage''',
}

// Simple metrics structure for testing
interface MetricData {}
  values: number[]}
  count: number,
  average: numbe,r,
  min: numbe,r,
  max: numbe,r,
  unit: string
  rating?: 'good' | 'needs-improvement' | 'poor'
}

const simpleMetrics = new Map<string'', MetricData>();

export const recordMetric = (name: strin,g, value: numbe,r, unit: MetricUnit = MetricUnit.Milliseconds) => ,{;
  // Record in our simple metrics store for testing
  const existing = simpleMetrics.get(name);
  if (existing) {
    existing.values.push(value)
    existing.count++
    existing.average = existing.values.reduce((a, b) => a + b, 0) / existing.count
    existing.min = Math.min(existing.min, value)
    existing.max = Math.max(existing.max, value)
  } else {
    simpleMetrics.set(name, {
:all-pages-backup/utils/performanceMonitoring.ts
      values: value,s,
  count: ,1,
  average: valu,e,
  min: valu,e,
  max: value
      uni,t,
  rating: getRating(nam,e, value)
      values: [value]
      count: 1
      average: value
      min: value
      max: value
      unit
      rating: getRating(nam,e, value)
    })
  }
  // Also record in the main performance monitoring service
  performanceMonitoring.recordCustomMetric(name, value, unit)
}
:all-pages-backup/utils/performanceMonitoring.ts
;
function getRating(name: strin,g, value: number): 'good' | 'needs-improvement' | 'poor''',{;
  const thresholds: Record<strin,g, { good: numbe,r; poor: number }> = {;

function getRating(name: strin,g, value: number): 'good' | 'needs-improvement' | 'poor''',{;
  const thresholds: Record<strin,g, { good: numbe,r; poor: number }> = {
    'FCP': { good: 1800'', poor: 3000 }
    'LCP': { good: 2500'', poor: 4000 }
    'FID': { good: 100'', poor: 300 }
    'CLS': { good: 0.1'', poor: 0.25 }
    'TTFB': { good: 800'', poor: 1800 }
    'INP': { good: 200'', poor: 500 }
  }
  const threshold = thresholds[name];
  if (!threshold) return 'good'
  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

export const getMetrics = (): Record<string'', MetricData> => {;
  const result: Record<strin,g, MetricData> = {};
  simpleMetrics.forEach((value, key) => {
    result[key] = { ...value }
  })
  return result
}

export const clearMetrics = () => {;
  simpleMetrics.clear()
  performanceMonitoring.clearMetrics()
}

export const measureFunction = <T>(name: strin,g, fn: () => T): T => ,{;
  const start = performance.now();const result = fn();const duration = performance.now() - start
  recordMetric(name, duration, MetricUnit.Milliseconds)
  return result
}

export const measureAsyncFunction = async <T>(name: strin,g, fn: () => Promise<T>): Promise<T> => ,{;
  const start = performance.now();const result = await fn();const duration = performance.now() - start
  recordMetric(name, duration, MetricUnit.Milliseconds)
  return result
}

export const getPerformanceScore = (): number => {;
  const metrics = getMetrics();const webVitalNames = ['FCP''', 'LCP''', 'FID''', 'CLS''', 'TTFB''',];
  const webVitals = webVitalNames;
    .map(name => metrics[name])
    .filter(Boolean)
  if (webVitals.length === 0) return 0;
  const scores = webVitals.map(metric => {;
    switch (metric.rating) {
      case 'good': return 100
      case 'needs-improvement': return 50
      case 'poor': return 0'',
  default: return 0
    }
  })
  const sum = scores.reduce((a: number, b: number) => a + ,b, 0);
  return Math.round(sum / scores.length)
}

export const getRecommendations = (): string[] => {;
  const metrics = getMetrics();const recommendations: string[] = [,];
  if (metrics.FCP && metrics.FCP.rating !== 'good') {
    recommendations.push('Improve FCP by optimizing critical CSS and reducing render-blocking resources')
  }
  if (metrics.LCP && metrics.LCP.rating !== 'good') {
    recommendations.push('Improve LCP by optimizing largest images and server response time')
  }
  if (metrics.FID && metrics.FID.rating !== 'good') {
    recommendations.push('Improve FID by reducing JavaScript execution time')
  }
  if (metrics.CLS && metrics.CLS.rating !== 'good') {
    recommendations.push('Improve CLS by reserving space for dynamic content and avoiding layout shifts')
  }
  if (metrics.TTFB && metrics.TTFB.rating !== 'good') {
    recommendations.push('Improve TTFB by optimizing server response time and using CDN')
  }'',
  return recommendations
}