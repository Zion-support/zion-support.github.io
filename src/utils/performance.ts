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
    onCLS((metric) => {
      this.metrics.cls = metric.value;
    });

    onFCP((metric) => {
      this.metrics.fcp = metric.value;
    });

    onLCP((metric) => {
      this.metrics.lcp = metric.value;
    });

    onTTFB((metric) => {
      this.metrics.ttfb = metric.value;
    });
  }

  private initializePerformanceObserver() {
    if (typeof window === 'undefined') return;

    // Long Task Observer
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Long task detected:', entry.duration);
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.push(longTaskObserver);
    } catch (error) {
      console.warn('Long Task Observer not supported:', error);
    }

    // Layout Shift Observer
    try {
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Layout shift detected:', entry.value);
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
    
    // CLS scoring
    if (this.metrics.cls !== null) {
      if (this.metrics.cls > 0.25) score -= 30;
      else if (this.metrics.cls > 0.1) score -= 15;
    }
    
    // FCP scoring
    if (this.metrics.fcp !== null) {
      if (this.metrics.fcp > 3000) score -= 25;
      else if (this.metrics.fcp > 1800) score -= 15;
    }
    
    // LCP scoring
    if (this.metrics.lcp !== null) {
      if (this.metrics.lcp > 4000) score -= 25;
      else if (this.metrics.lcp > 2500) score -= 15;
    }
    
    // TTFB scoring
    if (this.metrics.ttfb !== null) {
      if (this.metrics.ttfb > 800) score -= 20;
      else if (this.metrics.ttfb > 600) score -= 10;
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

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

