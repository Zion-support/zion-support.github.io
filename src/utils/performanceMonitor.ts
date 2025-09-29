/**
 * Minimal Performance Monitoring System
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
    this.initialize();
  }

  private initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;

    if (!('PerformanceObserver' in window)) return;

    // LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) {
          this.recordMetric({ name: 'LCP', value: last.startTime, timestamp: Date.now(), id: this.generateId() });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch {}

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
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch {}

    // FCP
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.recordMetric({ name: 'FCP', value: entry.startTime, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch {}

    // TTFB
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const nav = entry as PerformanceNavigationTiming;
          this.recordMetric({ name: 'TTFB', value: nav.responseStart - nav.requestStart, timestamp: Date.now(), id: this.generateId() });
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch {}

    // FID
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any) {
          if (typeof entry.processingStart === 'number' && typeof entry.startTime === 'number') {
            const fid = entry.processingStart - entry.startTime;
            this.recordMetric({ name: 'FID', value: fid, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch {}
  }

  private recordMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    if (this.metrics.length > 200) this.metrics = this.metrics.slice(-200);
  }

  private generateId(): string {
    return Math.random().toString(36).slice(2, 11);
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getWebVitals(): Record<string, number> {
    const out: Record<string, number> = {};
    for (const m of this.metrics) {
      if (!out[m.name]) out[m.name] = m.value;
    }
    return out;
  }

  public reportPerformance(): void {
    const vitals = this.getWebVitals();
    // eslint-disable-next-line no-console
    console.log('Performance Report', vitals);
  }
}

export const performanceMonitor = new PerformanceMonitor();

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => performanceMonitor.reportPerformance(), 5000);
  });
}