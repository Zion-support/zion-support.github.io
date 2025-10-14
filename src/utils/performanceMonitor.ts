// Performance monitoring utilities
export interface PerformanceMetrics {
  fcp: number
  lcp: number
  fid: number
  cls: number
  ttfb: number
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  }

  private isInitialized = false
  private observers: PerformanceObserver[] = []

  constructor() {
    if (typeof window !== 'undefined') {
      this.init()
    }
  }

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;
    this.setupWebVitals();
    this.setupCustomMetrics();
  }

  private setupWebVitals(): void {
    // First Contentful Paint
    try {
      const observer = new PerformanceObserver((list) =>
                {
        const entries = list.getEntries()
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime
          this.reportMetric('FCP', this.metrics.fcp)
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe FCP:', error)
    }

    // Largest Contentful Paint
    try {
      const observer = new PerformanceObserver((list) =>
                {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        if (lastEntry) {
          this.metrics.lcp = lastEntry.startTime
          this.reportMetric('LCP', this.metrics.lcp)
        }
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(observer)
    } catch (error) {
      console.warn('Failed to observe LCP:', error);
    }
  }

  private setupCustomMetrics(): void {
    // First Input Delay
    try {
      const observer = new PerformanceObserver((list) =>
                {
        const entries = list.getEntries();
        entries.forEach((entry) =>
                {
          const fidEntry = entry as PerformanceEventTiming
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime
          this.reportMetric('FID', this.metrics.fid)
        })
      })
      observer.observe({ entryTypes: ['first-input'] })
      this.observers.push(observer)
    } catch (error) {
      console.warn('Failed to observe FID:', error);
    }

    // Cumulative Layout Shift
    this.setupCLSObserver()
  }

  private setupCLSObserver(): void {
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) =>
                {
        const entries = list.getEntries()
        entries.forEach((entry) =>
                {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
            this.metrics.cls = clsValue
            this.reportMetric('CLS', this.metrics.cls)
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(clsObserver)
    } catch (error) {
      console.warn('Failed to observe CLS:', error);
    }
  }

  private reportMetric(name: string, value: number): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value)
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Global performance monitoring
let performanceMonitor: PerformanceMonitor | null = null

export const measureWebVitals = (): void =>
                {
  if (typeof window === 'undefined') return
  
  if (!performanceMonitor) {
    performanceMonitor = new PerformanceMonitor()
  }
}

export const getPerformanceMetrics = (): PerformanceMetrics | null =>
                {
  return performanceMonitor?.getMetrics() || null
}

export const cleanupPerformanceMonitoring = (): void =>
                {
  performanceMonitor?.destroy()
  performanceMonitor = null
}
