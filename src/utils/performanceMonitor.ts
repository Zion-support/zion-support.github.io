// Minimal, type-safe Performance Monitor

type MetricName = 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'SLOW_RESOURCE' | 'MEMORY_USAGE';

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

  public initialize(): void {
    this.init();
  }

  private init(): void {
    if (this.initialized || typeof window === 'undefined') return;

    this.initialized = true;
    this.observeWebVitals();
    if (typeof (window as any).PerformanceObserver !== 'undefined') {
      // Stubbed guards to satisfy references; detailed implementations can be added as needed
      this.observeResourceTiming();
      this.observeNavigationTiming();
    }
  }

  // Minimal stubs to satisfy references; can be expanded with real logic later
  private observeResourceTiming(): void {
    // no-op for now
  }

  private observeNavigationTiming(): void {
    // no-op for now
  }

  private observeWebVitals(): void {
    if ('PerformanceObserver' in window) {
      // FID - First Input Delay
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

      // LCP - Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.recordMetric({
              name: 'LCP',
              value: (lastEntry as any).startTime,
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

      // CLS - Cumulative Layout Shift
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value || 0;
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

      // FCP - First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if ((entry as any).name === 'first-contentful-paint') {
              this.recordMetric({
                name: 'FCP',
                value: (entry as any).startTime,
                timestamp: Date.now(),
                id: this.generateId()
              });
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch (e) {
        console.warn('FCP observation failed:', e);
      }

      // TTFB - Time to First Byte
      try {
        const ttfbObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              this.recordMetric({
                name: 'TTFB',
                value: navEntry.responseStart - navEntry.requestStart,
                timestamp: Date.now(),
                id: this.generateId()
              });
            }
          });
        });
        ttfbObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(ttfbObserver);
      } catch (e) {
        console.warn('TTFB observation failed:', e);
      }
    }
  }

  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory) {
        // @ts-ignore augment metrics map
        (this.metrics as any).memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
      }
    }
  }

	public getWebVitals(): Record<string, number> {
		const vitals: Record<string, number> = {};
		for (const m of this.metrics) {
			if (m.name === 'CLS' || m.name === 'FID' || m.name === 'FCP' || m.name === 'LCP' || m.name === 'TTFB') {
				vitals[m.name] = m.value;
			}
		}
		return vitals;
	}

	public getPerformanceScore(): number {
		const v = this.getWebVitals();
		let score = 100;
		if (v.LCP) score -= v.LCP > 4000 ? 30 : v.LCP > 2500 ? 15 : 0;
		if (v.FID) score -= v.FID > 300 ? 25 : v.FID > 100 ? 10 : 0;
		if (v.CLS) score -= v.CLS > 0.25 ? 20 : v.CLS > 0.1 ? 10 : 0;
		return Math.max(0, score);
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

  // Removed duplicate getWebVitals method to avoid TypeScript duplicate implementation error

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
