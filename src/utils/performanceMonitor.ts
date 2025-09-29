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

interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

class PerformanceMonitor {
  private recordedMetrics: RecordedMetric[] = [];
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
    if (!('PerformanceObserver' in window)) {
      return;
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any) {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
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
        const lastEntry = entries[entries.length - 1] as PerformanceEntry | undefined;
        if (lastEntry) {
          this.recordMetric({
            name: 'LCP',
            value: (lastEntry as any).startTime ?? 0,
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
        for (const entry of list.getEntries() as any) {
          if (!entry.hadRecentInput && typeof entry.value === 'number') {
            clsValue += entry.value;
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

    // First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if ((entry as any).name === 'first-contentful-paint') {
            this.recordMetric({
              name: 'FCP',
              value: (entry as any).startTime ?? 0,
              timestamp: Date.now(),
              id: this.generateId()
            });
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (e) {
      console.warn('FCP observation failed:', e);
    }

    // Time to First Byte (TTFB)
    try {
      const ttfbObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const nav = entry as PerformanceNavigationTiming;
            this.recordMetric({
              name: 'TTFB',
              value: nav.responseStart - nav.requestStart,
              timestamp: Date.now(),
              id: this.generateId()
            });
          }
        }
      });
      ttfbObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(ttfbObserver);
    } catch (e) {
      console.warn('TTFB observation failed:', e);
    }
  }

  private observeMemoryUsage(): void {
    const perfWithMemory = performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } };
    if (perfWithMemory.memory) {
      const ratio = perfWithMemory.memory.usedJSHeapSize / perfWithMemory.memory.jsHeapSizeLimit;
      this.recordMetric({
        name: 'MEMORY_USAGE',
        value: ratio,
        timestamp: Date.now(),
        id: this.generateId()
      });
    }
  }

  // (Removed duplicate web vitals block; logic is handled in observeWebVitals)

  private observeResourceTiming(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const anyEntry = entry as unknown as { processingStart?: number; startTime?: number };
          if (typeof anyEntry.processingStart === 'number' && typeof anyEntry.startTime === 'number') {
            this.record({ name: 'FID', value: anyEntry.processingStart - anyEntry.startTime });
          }
        }
      });
      resourceObserver.observe({ type: 'resource', buffered: true } as any);
      this.observers.push(resourceObserver);
    } catch (e) {
      console.warn('Resource timing observation failed:', e);
    }
  }

  private observePaintTimings(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.record({ name: 'FCP', value: entry.startTime });
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    } catch (error) {
      console.warn('Paint timing observation failed:', error);
    }
  }

  private observeNavigationTTFB(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming;
          this.recordMetric({ name: 'TTFB', value: navEntry.responseStart - navEntry.requestStart, timestamp: Date.now(), id: this.generateId() });
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
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
    return Math.random().toString(36).slice(2, 11);
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
    // Lazy read metrics shortly after load
    setTimeout(() => {
      void performanceMonitor.getMetrics();
    }, 3000);
  });
}