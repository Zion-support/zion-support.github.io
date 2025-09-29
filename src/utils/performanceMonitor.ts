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
    if (this.initialized) return;
    this.initialized = true;

    if (!('PerformanceObserver' in window)) return;

    // FCP
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.record('FCP', entry.startTime);
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch {}

    // LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) this.record('LCP', last.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch {}

    // CLS
    try {
      let cls = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as (PerformanceEntry & { hadRecentInput?: boolean; value?: number })[]) {
          if (!entry.hadRecentInput && typeof entry.value === 'number') {
            cls += entry.value;
          }
        }
        this.record('CLS', cls);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch {}

    // TTFB
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const nav = entry as PerformanceNavigationTiming;
            this.record('TTFB', nav.responseStart - nav.requestStart);
          }
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch {}

    // FID
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const perfEvent = entry as PerformanceEventTiming;
          if (typeof perfEvent.processingStart === 'number' && typeof perfEvent.startTime === 'number') {
            const fid = perfEvent.processingStart - perfEvent.startTime;
            this.record('FID', fid);
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch {}
  }

  private record(name: MetricName, value: number): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      id: Math.random().toString(36).slice(2, 11)
    };
    this.metrics.push(metric);
    if (this.metrics.length > 200) this.metrics = this.metrics.slice(-200);
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public disconnect(): void {
    this.observers.forEach((o) => o.disconnect());
    this.observers = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();