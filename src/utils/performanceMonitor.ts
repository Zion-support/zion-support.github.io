// Minimal, type-safe Performance Monitor

type MetricName = 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'SLOW_RESOURCE' | 'MEMORY_USAGE';

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  id: string;
}

interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  constructor() {
    this.init();
  }

  private init(): void {
    if (this.initialized || typeof window === 'undefined') return;

    this.initialized = true;
    this.observeWebVitals();
    this.observeResourceTiming();
    this.observeNavigationTiming();
  }

  private observeWebVitals(): void {
    // First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const anyEntry = entry as any;
            if (typeof anyEntry.processingStart === 'number' && typeof entry.startTime === 'number') {
              const fid = (anyEntry.processingStart as number) - entry.startTime;
              this.recordMetric({
                name: 'FID',
                value: fid,
                timestamp: Date.now(),
                id: this.generateId()
              });
            }
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observation failed:', e);
      }

      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.recordMetric({
              name: 'LCP',
              value: lastEntry.startTime,
              timestamp: Date.now(),
              id: this.generateId()
            });
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observation failed:', e);
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          this.recordMetric({
            name: 'CLS',
            value: clsValue,
            timestamp: Date.now(),
            id: this.generateId()
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observation failed:', e);
      }
    }
  }

  private observeResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 1000) { // Only track slow resources
              this.recordMetric({
                name: 'SLOW_RESOURCE',
                value: entry.duration,
                timestamp: Date.now(),
                id: this.generateId()
              });
            }
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      } catch (e) {
        console.warn('Resource timing observation failed:', e);
      }
    }
  }

  private observeNavigationTiming(): void {
    if ('PerformanceObserver' in window) {
      try {
        const navObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const navEntry = entry as PerformanceNavigationTiming;
            this.recordMetric({
              name: 'TTFB',
              value: navEntry.responseStart - navEntry.requestStart,
              timestamp: Date.now(),
              id: this.generateId()
            });
          }
        });
        navObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navObserver);
      } catch (e) {
        console.warn('Navigation timing observation failed:', e);
      }
    }
  }

  private recordMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    
    // Keep only last 100 metrics to prevent memory leaks
    if (this.metrics.length > 100) {
      this.metrics = this.metrics.slice(-100);
    }

    // Send to analytics if available
    this.sendToAnalytics(metric);
  }

  private sendToAnalytics(metric: PerformanceMetric): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: metric.name,
        metric_value: Math.round(metric.value),
        metric_id: metric.id
      });
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getWebVitals(): { [key: string]: number } {
    const vitals: { [key: string]: number } = {};
    this.metrics.forEach(metric => {
      if (['CLS', 'FID', 'FCP', 'LCP', 'TTFB'].includes(metric.name)) {
        vitals[metric.name] = metric.value;
      }
    });
    return vitals;
  }

  public getPerformanceScore(): number {
    const vitals = this.getWebVitals();
    let score = 100;

    // LCP scoring (good: <2.5s, needs improvement: 2.5-4s, poor: >4s)
    if (vitals.LCP) {
      if (vitals.LCP > 4000) score -= 30;
      else if (vitals.LCP > 2500) score -= 15;
    }

    // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
    if (vitals.FID) {
      if (vitals.FID > 300) score -= 25;
      else if (vitals.FID > 100) score -= 10;
    }

    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (vitals.CLS) {
      if (vitals.CLS > 0.25) score -= 20;
      else if (vitals.CLS > 0.1) score -= 10;
    }

    return Math.max(0, score);
  }

  public disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }

  public reportPerformance(): void {
    const score = this.getPerformanceScore();
    const vitals = this.getWebVitals();
    
    console.log('Performance Report:', {
      score,
      vitals,
      timestamp: new Date().toISOString()
    });

    // Send performance report to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_report', {
        performance_score: score,
        web_vitals: JSON.stringify(vitals)
      });
    }
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Auto-report performance after page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.reportPerformance();
    }, 5000); // Report after 5 seconds
  });
}
