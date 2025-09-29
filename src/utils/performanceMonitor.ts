// Minimal, type-safe Performance Monitor

type MetricName = 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';

interface PerformanceMetric {
  name: MetricName;
  value: number;
  timestamp: number;
  id: string;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private initialized = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    this.isInitialized = true;
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeLCP();
    this.observeTTFB();
    this.observeResourceTiming();
    this.observeNavigationTiming();
  }

  private observeFID(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceEventTiming[]) {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
            this.recordMetric({ name: 'FID', value: fid, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      observer.observe({ type: 'first-input', buffered: true } as any);
      this.observers.push(observer);
    } catch (e) {
      console.warn('FID observation failed:', e);
    }
  }

  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput && typeof entry.value === 'number') {
            clsValue += entry.value;
          }
        }
        this.recordMetric({ name: 'CLS', value: clsValue, timestamp: Date.now(), id: this.generateId() });
      });
      observer.observe({ type: 'layout-shift', buffered: true } as any);
      this.observers.push(observer);
    } catch (e) {
      console.warn('CLS observation failed:', e);
    }
  }

  private observeFCP(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if ((entry as any).name === 'first-contentful-paint') {
            this.recordMetric({ name: 'FCP', value: entry.startTime, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      observer.observe({ type: 'paint', buffered: true } as any);
      this.observers.push(observer);
    } catch (e) {
      console.warn('FCP observation failed:', e);
    }
  }

  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this.recordMetric({ name: 'LCP', value: lastEntry.startTime, timestamp: Date.now(), id: this.generateId() });
        }
      });
      observer.observe({ type: 'largest-contentful-paint', buffered: true } as any);
      this.observers.push(observer);
    } catch (e) {
      console.warn('LCP observation failed:', e);
    }
  }

  private observeTTFB(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceNavigationTiming[]) {
          if (entry.entryType === 'navigation') {
            const ttfb = entry.responseStart - entry.requestStart;
            this.recordMetric({ name: 'TTFB', value: ttfb, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      observer.observe({ type: 'navigation', buffered: true } as any);
      this.observers.push(observer);
    } catch (e) {
      console.warn('TTFB observation failed:', e);
    }
  }

  private observeResourceTiming(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceResourceTiming[]) {
          if (entry.duration > 1000) {
            this.recordMetric({ name: 'SLOW_RESOURCE', value: entry.duration, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      observer.observe({ type: 'resource', buffered: true } as any);
      this.observers.push(observer);
    } catch (e) {
      console.warn('Resource timing observation failed:', e);
    }
  }

  private observeNavigationTiming(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceNavigationTiming[]) {
          const value = entry.responseStart - entry.requestStart;
          this.recordMetric({ name: 'TTFB', value, timestamp: Date.now(), id: this.generateId() });
        }
      });
      observer.observe({ type: 'navigation', buffered: true } as any);
      this.observers.push(observer);
    } catch (e) {
      console.warn('Navigation timing observation failed:', e);
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
    return Math.random().toString(36).substr(2, 9);
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getWebVitals(): { [key: string]: number } {
    const vitals: { [key: string]: number } = {};
    this.metrics.forEach((metric) => {
      if (['CLS', 'FID', 'FCP', 'LCP', 'TTFB'].includes(metric.name)) {
        vitals[metric.name] = metric.value;
      }
    });
    return vitals;
  }

  public getPerformanceScore(): number {
    const vitals = this.getWebVitals();
    let score = 100;

    if (vitals.LCP) {
      if (vitals.LCP > 4000) score -= 30;
      else if (vitals.LCP > 2500) score -= 15;
    }

    if (vitals.FID) {
      if (vitals.FID > 300) score -= 25;
      else if (vitals.FID > 100) score -= 10;
    }

    if (vitals.CLS) {
      if (vitals.CLS > 0.25) score -= 20;
      else if (vitals.CLS > 0.1) score -= 10;
    }

    return Math.max(0, score);
  }

  public disconnect(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }

  public reportPerformance(): void {
    const score = this.getPerformanceScore();
    const vitals = this.getWebVitals();

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
