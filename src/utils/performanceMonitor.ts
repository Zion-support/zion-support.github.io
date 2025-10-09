// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.initializeObservers();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeObservers() {
    // Observe navigation timing
    if ('PerformanceObserver' in window) {
      const navObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            this.recordMetric('navigation', entry.duration);
          }
        });
      });
      
      try {
        navObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navObserver);
      } catch (e) {
        console.warn('Navigation timing not supported');
      }

      // Observe paint timing
      const paintObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            this.recordMetric(entry.name, entry.startTime);
          }
        });
      });
      
      try {
        paintObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(paintObserver);
      } catch (e) {
        console.warn('Paint timing not supported');
      }

      // Observe LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordMetric('lcp', lastEntry.startTime);
      });
      
      try {
        lcpObserver.observe({ entryType: 'largest-contentful-paint' });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP not supported');
      }

      // Observe FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.recordMetric('fid', entry.processingStart - entry.startTime);
        });
      });
      
      try {
        fidObserver.observe({ entryType: 'first-input' });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID not supported');
      }

      // Observe CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.recordMetric('cls', clsValue);
          }
        });
      });
      
      try {
        clsObserver.observe({ entryType: 'layout-shift' });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS not supported');
      }
    }
  }

  public recordMetric(name: string, value: number): void {
    this.metrics.set(name, value);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance metric: ${name} = ${value}ms`);
    }
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        event_category: 'performance'
      });
    }
  }

  public getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  public getAllMetrics(): Record<string, number> {
    const result: Record<string, number> = {};
    this.metrics.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }

  public getCoreWebVitals(): {
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  } {
    return {
      lcp: this.getMetric('lcp'),
      fid: this.getMetric('fid'),
      cls: this.getMetric('cls'),
      fcp: this.getMetric('first-contentful-paint'),
      ttfb: this.getMetric('navigation')
    };
  }

  public isPerformanceGood(): boolean {
    const vitals = this.getCoreWebVitals();
    
    // Core Web Vitals thresholds
    const lcpGood = !vitals.lcp || vitals.lcp < 2500;
    const fidGood = !vitals.fid || vitals.fid < 100;
    const clsGood = !vitals.cls || vitals.cls < 0.1;
    
    return lcpGood && fidGood && clsGood;
  }

  public generateReport(): string {
    const metrics = this.getAllMetrics();
    const vitals = this.getCoreWebVitals();
    
    return `
Performance Report:
==================
Core Web Vitals:
- LCP: ${vitals.lcp ? `${vitals.lcp.toFixed(2)}ms` : 'N/A'} ${vitals.lcp && vitals.lcp < 2500 ? '✅' : '❌'}
- FID: ${vitals.fid ? `${vitals.fid.toFixed(2)}ms` : 'N/A'} ${vitals.fid && vitals.fid < 100 ? '✅' : '❌'}
- CLS: ${vitals.cls ? vitals.cls.toFixed(3) : 'N/A'} ${vitals.cls && vitals.cls < 0.1 ? '✅' : '❌'}

All Metrics:
${Object.entries(metrics).map(([key, value]) => `- ${key}: ${value.toFixed(2)}ms`).join('\n')}

Overall Performance: ${this.isPerformanceGood() ? '✅ Good' : '❌ Needs Improvement'}
    `.trim();
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Utility functions
export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now();
  fn();
  const end = performance.now();
  performanceMonitor.recordMetric(name, end - start);
};

export const measureAsyncPerformance = async (name: string, fn: () => Promise<void>): Promise<void> => {
  const start = performance.now();
  await fn();
  const end = performance.now();
  performanceMonitor.recordMetric(name, end - start);
};