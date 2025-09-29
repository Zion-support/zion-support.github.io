/**
 * Advanced Performance Monitoring System
 * Tracks Core Web Vitals, resource loading, and user interactions
 */

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  id: string;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  constructor() {
    this.init();
  }

  private init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    this.isInitialized = true;
    this.observeWebVitals();
    this.observeResourceTiming();
    this.observeNavigationTiming();
  }

  private observeWebVitals(): void {
    if (!('PerformanceObserver' in window)) return;

    // FID
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const anyEntry = entry as any;
          if (typeof anyEntry.processingStart === 'number' && typeof anyEntry.startTime === 'number') {
            const fid = anyEntry.processingStart - anyEntry.startTime;
            this.recordMetric({ name: 'FID', value: fid, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      fidObserver.observe({ type: 'first-input', buffered: true } as any);
      this.observers.push(fidObserver);
    } catch (e) {
      // no-op
    }

    // LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1] as any;
        if (last) {
          this.recordMetric({ name: 'LCP', value: last.startTime, timestamp: Date.now(), id: this.generateId() });
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true } as any);
      this.observers.push(lcpObserver);
    } catch (e) {
      // no-op
    }

    // CLS
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any) {
          if (!entry.hadRecentInput && typeof entry.value === 'number') {
            clsValue += entry.value;
          }
        }
        this.recordMetric({ name: 'CLS', value: clsValue, timestamp: Date.now(), id: this.generateId() });
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true } as any);
      this.observers.push(clsObserver);
    } catch (e) {
      // no-op
    }

    // FCP
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if ((entry as any).name === 'first-contentful-paint') {
            this.recordMetric({ name: 'FCP', value: entry.startTime, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      fcpObserver.observe({ type: 'paint', buffered: true } as any);
      this.observers.push(fcpObserver);
    } catch (e) {
      // no-op
    }
  }

  private observeResourceTiming(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 1000) {
            this.recordMetric({ name: 'SLOW_RESOURCE', value: entry.duration, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      resourceObserver.observe({ type: 'resource', buffered: true } as any);
      this.observers.push(resourceObserver);
    } catch (e) {
      // no-op
    }
  }

  private observeNavigationTiming(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const nav = entry as PerformanceNavigationTiming;
          this.recordMetric({ name: 'TTFB', value: nav.responseStart - nav.requestStart, timestamp: Date.now(), id: this.generateId() });
        }
      });
      navObserver.observe({ type: 'navigation', buffered: true } as any);
      this.observers.push(navObserver);
    } catch (e) {
      // no-op
    }
  }

  private recordMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    if (this.metrics.length > 100) {
      this.metrics = this.metrics.slice(-100);
    }
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
    return Math.random().toString(36).slice(2, 11);
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getWebVitals(): { [key: string]: number } {
    const vitals: { [key: string]: number } = {};
    for (const metric of this.metrics) {
      if (metric.name === 'CLS' || metric.name === 'FID' || metric.name === 'FCP' || metric.name === 'LCP' || metric.name === 'TTFB') {
        vitals[metric.name] = metric.value;
      }
    }
    return vitals;
  }

  public getPerformanceScore(): number {
    const vitals = this.getWebVitals();
    let score = 100;
    if (vitals.LCP) {
      if (vitals.LCP > 4000) score -= 30; else if (vitals.LCP > 2500) score -= 15;
    }
    if (vitals.FID) {
      if (vitals.FID > 300) score -= 25; else if (vitals.FID > 100) score -= 10;
    }
    if (vitals.CLS) {
      if (vitals.CLS > 0.25) score -= 20; else if (vitals.CLS > 0.1) score -= 10;
    }
    return Math.max(0, score);
  }

  public disconnect(): void {
    this.observers.forEach((o) => o.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }

  public reportPerformance(): void {
    const score = this.getPerformanceScore();
    const vitals = this.getWebVitals();
    // eslint-disable-next-line no-console
    console.log('Performance Report:', { score, vitals, timestamp: new Date().toISOString() });
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_report', {
        performance_score: score,
        web_vitals: JSON.stringify(vitals)
      });
    }
  }
}

export const performanceMonitor = new PerformanceMonitor();

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.reportPerformance();
    }, 5000);
  });
}