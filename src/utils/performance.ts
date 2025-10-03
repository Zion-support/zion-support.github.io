import { onCLS, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  timestamp: string;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    timestamp: new Date().toISOString(),
  };

  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeWebVitals();
    this.initializePerformanceObserver();
  }

  private initializeWebVitals() {
    // Core Web Vitals
    onCLS((metric: Metric) => {
      this.metrics.cls = metric.value;
    });

    onFCP((metric: Metric) => {
      this.metrics.fcp = metric.value;
    });

    onLCP((metric: Metric) => {
      this.metrics.lcp = metric.value;
    });

    onTTFB((metric: Metric) => {
      this.metrics.ttfb = metric.value;
    });
  }

  private initializePerformanceObserver() {
    try {
      // Long Task Observer
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'longtask') {
            console.log('Long task detected:', entry);
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.push(longTaskObserver);
    } catch (error) {
      console.warn('Long Task Observer not supported:', error);
    }

    try {
      // Layout Shift Observer
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            console.log('Layout shift detected:', entry);
          }
        }
      });
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(layoutShiftObserver);
    } catch (error) {
      console.warn('Layout Shift Observer not supported:', error);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    let score = 100;
    
    // CLS scoring (0-100)
    if (this.metrics.cls !== null) {
      if (this.metrics.cls > 0.25) score -= 30;
      else if (this.metrics.cls > 0.1) score -= 20;
      else if (this.metrics.cls > 0.05) score -= 10;
    }
    
    // FCP scoring (0-100)
    if (this.metrics.fcp !== null) {
      if (this.metrics.fcp > 3000) score -= 25;
      else if (this.metrics.fcp > 1800) score -= 15;
      else if (this.metrics.fcp > 1000) score -= 5;
    }
    
    // LCP scoring (0-100)
    if (this.metrics.lcp !== null) {
      if (this.metrics.lcp > 4000) score -= 25;
      else if (this.metrics.lcp > 2500) score -= 15;
      else if (this.metrics.lcp > 1200) score -= 5;
    }
    
    // TTFB scoring (0-100)
    if (this.metrics.ttfb !== null) {
      if (this.metrics.ttfb > 800) score -= 20;
      else if (this.metrics.ttfb > 600) score -= 10;
      else if (this.metrics.ttfb > 400) score -= 5;
    }
    
    return Math.max(0, score);
  }

  public getPerformanceGrade(): string {
    const score = this.getPerformanceScore();
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  public disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();