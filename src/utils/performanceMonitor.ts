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
          if (anyEntry.processingStart && entry.startTime) {
            const fid = anyEntry.processingStart - entry.startTime;
            this.recordMetric({ name: 'FID', value: fid, timestamp: Date.now(), id: this.generateId() });
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] as any });
      this.observers.push(fidObserver);
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

    // LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) {
          this.recordMetric({ name: 'LCP', value: last.startTime, timestamp: Date.now(), id: this.generateId() });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] as any });
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
      clsObserver.observe({ entryTypes: ['layout-shift'] as any });
      this.observers.push(clsObserver);
    } catch {}
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
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch {}
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
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch {}
  }

  private recordMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    if (this.metrics.length > 100) this.metrics = this.metrics.slice(-100);
    this.sendToAnalytics(metric);
  }

  private sendToAnalytics(metric: PerformanceMetric): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: metric.name,
        metric_value: Math.round(metric.value),
        metric_id: metric.id,
      });
    }
  }

  private generateId(): string {
    return Math.random().toString(36).slice(2, 11);
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public disconnect(): void {
    this.observers.forEach((o) => o.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }

  public reportPerformance(): void {
    const totals = this.metrics.reduce<Record<string, number>>((acc, m) => {
      acc[m.name] = m.value;
      return acc;
    }, {});
    // eslint-disable-next-line no-console
    console.log('Performance Report', { totals, timestamp: new Date().toISOString() });
  }
}

export const performanceMonitor = new PerformanceMonitor();

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => performanceMonitor.reportPerformance(), 5000);
  });
}

