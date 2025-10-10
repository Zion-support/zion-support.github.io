interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  customMetrics: Record<string, number>;
}

class PerformanceMonitor {
  private _metrics: PerformanceMetrics = {
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    customMetrics: {}
  };
  
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    this.isInitialized = true;
    this.setupWebVitals();
    this.setupCustomMetrics();
  }

  private setupWebVitals(): void {
    // First Contentful Paint
    this.observePaint('first-contentful-paint', 'fcp');
    
    // Largest Contentful Paint
    this.observeLCP();
    
    // First Input Delay
    this.observeFID();
    
    // Cumulative Layout Shift
    this.observeCLS();
    
    // Time to First Byte
    this.observeTTFB();
  }

  private observePaint(name: string, metric: keyof PerformanceMetrics): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const entry = entries[entries.length - 1];
        if (entry) {
          (this._metrics as any)[metric] = entry.startTime;
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Failed to observe ${name}:`, error);
    }
  }

  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this._metrics.lcp = lastEntry.startTime;
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe LCP:', error);
    }
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this._metrics.fid = entry.processingStart - entry.startTime;
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe FID:', error);
    }
  }

  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this._metrics.cls = clsValue;
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe CLS:', error);
    }
  }

  private observeTTFB(): void {
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this._metrics.ttfb = navigation.responseStart - navigation.requestStart;
      }
    } catch (error) {
      console.warn('Failed to observe TTFB:', error);
    }
  }

  private setupCustomMetrics(): void {
    // Custom metrics can be added here
    this.observeCustomMetric('page-load-time', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return navigation ? navigation.loadEventEnd - navigation.fetchStart : 0;
    });
  }

  private observeCustomMetric(name: string, getValue: () => number): void {
    try {
      const value = getValue();
      this._metrics.customMetrics[name] = value;
    } catch (error) {
      console.warn(`Failed to observe custom metric ${name}:`, error);
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this._metrics };
  }

  reportMetrics(): void {
    if (typeof window !== 'undefined' && 'console' in window) {
      console.log('Performance Metrics:', this._metrics);
    }
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export function for easy use
export function measureWebVitals(): void {
  performanceMonitor.init();
}

// Export metrics getter
export function getPerformanceMetrics(): PerformanceMetrics {
  return performanceMonitor.getMetrics();
}