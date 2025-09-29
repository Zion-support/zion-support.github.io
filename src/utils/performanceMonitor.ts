/** Simplified, type-safe performance monitor. */
type WebVitalName = 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';

interface PerformanceMetric {
  name: WebVitalName | 'SLOW_RESOURCE';
  value: number;
  timestamp: number;
  id: string;
}

class PerformanceMonitor {
  private recordedMetrics: PerformanceMetric[] = [];
  private activeObservers: PerformanceObserver[] = [];
  private alreadyInitialized = false;

  public initialize(): void {
    if (this.alreadyInitialized || typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') {
      return;
    }
    this.alreadyInitialized = true;
    this.observePaint();
    this.observeNavigation();
    this.observeFirstInput();
  }

  private observePaint(): void {
    try {
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.record({ name: 'FCP', value: entry.startTime });
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.activeObservers.push(paintObserver);
    } catch {}
  }

  private observeNavigation(): void {
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const nav = entry as PerformanceNavigationTiming;
          this.record({ name: 'TTFB', value: nav.responseStart - nav.requestStart });
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.activeObservers.push(navObserver);
    } catch {}
  }

  private observeFirstInput(): void {
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const anyEntry = entry as any;
          if (typeof anyEntry.processingStart === 'number') {
            const fid = anyEntry.processingStart - entry.startTime;
            this.record({ name: 'FID', value: fid });
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] as any });
      this.activeObservers.push(fidObserver);
    } catch {}
  }

  private record(input: { name: PerformanceMetric['name']; value: number }): void {
    const metric: PerformanceMetric = {
      name: input.name,
      value: input.value,
      timestamp: Date.now(),
      id: Math.random().toString(36).slice(2, 11)
    };
    this.recordedMetrics.push(metric);
    if (this.recordedMetrics.length > 100) {
      this.recordedMetrics = this.recordedMetrics.slice(-100);
    }
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.recordedMetrics];
  }
}

export const performanceMonitor = new PerformanceMonitor();

if (typeof window !== 'undefined') {
  performanceMonitor.initialize();
}

