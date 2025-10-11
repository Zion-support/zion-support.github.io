interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceEntry {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  };

  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  constructor() {
    this.initializeObservers();
    this.trackCustomMetrics();
  }

  private initializeObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // LCP Observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        this.metrics.lcp = lastEntry.value;
        this.reportMetric('LCP', this.metrics.lcp);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      console.warn('Failed to observe LCP:', error);
    }

    // FID Observer
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          this.reportMetric('FID', this.metrics.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('Failed to observe FID:', error);
    }

    // CLS Observer
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.cls = clsValue;
        this.reportMetric('CLS', this.metrics.cls);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('Failed to observe CLS:', error);
    }
  }

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;
    this.setupWebVitals();
    this.setupCustomMetrics();
  }

  private setupWebVitals(): void {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            this.metrics.fcp = fcpEntry.startTime;
            this.reportMetric('FCP', this.metrics.fcp);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch (error) {
        console.warn('Failed to observe FCP:', error);
      }
    }

    // Time to First Byte
    if ('PerformanceObserver' in window) {
      try {
        const ttfbObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const ttfbEntry = entries.find(entry => entry.entryType === 'navigation');
          if (ttfbEntry) {
            this.metrics.ttfb = ttfbEntry.responseStart - ttfbEntry.fetchStart;
            this.reportMetric('TTFB', this.metrics.ttfb);
          }
        });
        ttfbObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(ttfbObserver);
      } catch (error) {
        console.warn('Failed to observe TTFB:', error);
      }
    }
  }

  private setupCustomMetrics(): void {
    // Page Load Time
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        this.reportMetric('Page Load Time', loadTime);
      });

      // DOM Content Loaded
      window.addEventListener('DOMContentLoaded', () => {
        const domContentLoadedTime = performance.now();
        this.reportMetric('DOM Content Loaded', domContentLoadedTime);
      });
    }
  }

  private trackCustomMetrics(): void {
    // Memory Usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.reportMetric('Memory Used', memory.usedJSHeapSize);
      this.reportMetric('Memory Total', memory.totalJSHeapSize);
    }

    // Connection Information
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      this.reportMetric('Connection Type', connection.effectiveType || 'unknown');
      this.reportMetric('Connection Speed', connection.downlink || 0);
    }
  }

  private reportMetric(name: string, value: number): void {
    // Send to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      gtag('event', 'performance_metric', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value)
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export class for testing
export { PerformanceMonitor };