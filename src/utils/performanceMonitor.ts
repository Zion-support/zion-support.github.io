/**
 * Performance Monitoring System (clean implementation)
 * Tracks key metrics using PerformanceObserver where available.
 */

interface RecordedMetric {
  name: string;
  value: number;
  timestamp: number;
  id: string;
}

class PerformanceMonitor {
  private recordedMetrics: RecordedMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private initialized: boolean = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (this.initialized || typeof window === 'undefined') return;
    this.initialized = true;
    this.observeLCP();
    this.observeCLS();
    this.observeFID();
    this.observePaintTimings();
    this.observeNavigationTTFB();
  }

  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) {
          this.record({ name: 'LCP', value: last.startTime });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP observation failed:', error);
    }
  }

  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return;
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const anyEntry = entry as unknown as { hadRecentInput?: boolean; value?: number };
          if (!anyEntry.hadRecentInput && typeof anyEntry.value === 'number') {
            clsValue += anyEntry.value;
          }
        }
        this.record({ name: 'CLS', value: clsValue });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS observation failed:', error);
    }
  }

  private observeFID(): void {
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
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('FID observation failed:', error);
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
          const nav = entry as PerformanceNavigationTiming;
          const ttfb = nav.responseStart - nav.requestStart;
          if (Number.isFinite(ttfb)) {
            this.record({ name: 'TTFB', value: ttfb });
          }
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch (error) {
      console.warn('Navigation timing observation failed:', error);
    }
  }

  private record(metric: { name: string; value: number }): void {
    const recorded: RecordedMetric = {
      name: metric.name,
      value: metric.value,
      timestamp: Date.now(),
      id: Math.random().toString(36).slice(2, 11)
    };
    this.recordedMetrics.push(recorded);
    if (this.recordedMetrics.length > 200) {
      this.recordedMetrics = this.recordedMetrics.slice(-200);
    }
  }

  public getMetrics(): RecordedMetric[] {
    return [...this.recordedMetrics];
  }

  public disconnect(): void {
    this.observers.forEach((o) => o.disconnect());
    this.observers = [];
    this.initialized = false;
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