interface PerformanceMetric {
  name: string;
  startTime: number;
  endTime?: number;
  duration?: number;
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric> = new Map();
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers(): void {
    // Monitor Core Web Vitals
    if ("PerformanceObserver" in window) {
      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.logMetric("LCP", lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
        this.observers.push(lcpObserver);
      } catch (error) {
        console.warn("LCP observer failed:", error);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            this.logMetric("FID", entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });
        this.observers.push(fidObserver);
      } catch (error) {
        console.warn("FID observer failed:", error);
      }
      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          if (clsValue > 0) {
            this.logMetric("CLS", clsValue);
          }
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
        this.observers.push(clsObserver);
      } catch (error) {
        console.warn("CLS observer failed:", error);
      }
    }
  }

  startTiming(name: string): void {
    this.metrics.set(name, {
      name,
      startTime: performance.now()
    });
  }

  endTiming(name: string): number {
    const metric = this.metrics.get(name);
    if (!metric) {
      console.warn(`No timing started for: ${name}`);
      return 0;
    }

    const endTime = performance.now();
    const duration = endTime - metric.startTime;
    
    this.metrics.set(name, {
      ...metric,
      endTime,
      duration
    });

    return duration;
  }

  measureFunction<T extends (...args: any[]) => any>(
    name: string,
    func: T,
    ...args: Parameters<T>
  ): ReturnType<T> {
    this.startTiming(name);
    try {
      const result = func(...args);
      this.endTiming(name);
      return result;
    } catch (error) {
      this.endTiming(name);
      throw error;
    }
  }

  private logMetric(name: string, value: number): void {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as any).gtag("event", "performance_metric", {
        metric_name: name,
        metric_value: value,
        event_category: "Performance"
      });
    }
    
    console.log(`Performance Metric - ${name}: ${value.toFixed(2)}ms`);
  }

  getMetrics(): Record<string, PerformanceMetric> {
    const result: Record<string, PerformanceMetric> = {};
    this.metrics.forEach((metric, name) => {
      result[name] = { ...metric };
    });
    return result;
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
  }
}

// Performance thresholds for monitoring
interface PerformanceThresholds {
  LCP: number; // Largest Contentful Paint (ms)
  FID: number; // First Input Delay (ms)
  CLS: number; // Cumulative Layout Shift
  FCP: number; // First Contentful Paint (ms)
  TTFB: number; // Time to First Byte (ms)
}

interface PerformanceMetrics {
  LCP?: number;
  FID?: number;
  CLS?: number;
  FCP?: number;
  TTFB?: number;
}

class PerformanceAnalyzer {
  private metrics: PerformanceMetrics = {};
  private thresholds: PerformanceThresholds = {
    LCP: 2500, // Good: < 2.5s, Needs Improvement: 2.5-4s, Poor: > 4s
    FID: 100,  // Good: < 100ms, Needs Improvement: 100-300ms, Poor: > 300ms
    CLS: 0.1,  // Good: < 0.1, Needs Improvement: 0.1-0.25, Poor: > 0.25
    FCP: 1800, // Good: < 1.8s, Needs Improvement: 1.8-3s, Poor: > 3s
    TTFB: 800  // Good: < 800ms, Needs Improvement: 800-1800ms, Poor: > 1800ms
  };

  constructor() {
    this.initializeMetrics();
  }

  private initializeMetrics(): void {
    if (typeof window !== "undefined" && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.TTFB = navigation.responseStart - navigation.requestStart;
        this.metrics.FCP = navigation.domContentLoadedEventStart - navigation.navigationStart;
      }
    }
  }

  public getMetrics(): PerformanceMetrics | null {
    if (typeof window === "undefined" || !window.performance) {
      return null;
    }

    return {
      LCP: this.getLCP(),
      FID: this.getFID(),
      CLS: this.getCLS(),
      FCP: this.getFCP(),
      TTFB: this.getTTFB()
    };
  }

  public checkThresholds(): { [K in keyof PerformanceThresholds]: boolean } {
    const metrics = this.getMetrics();
    if (!metrics) {
      return {} as { [K in keyof PerformanceThresholds]: boolean };
    }

    return {
      LCP: (metrics.LCP ?? Infinity) <= this.thresholds.LCP,
      FID: (metrics.FID ?? Infinity) <= this.thresholds.FID,
      CLS: (metrics.CLS ?? Infinity) <= this.thresholds.CLS,
      FCP: (metrics.FCP ?? Infinity) <= this.thresholds.FCP,
      TTFB: (metrics.TTFB ?? Infinity) <= this.thresholds.TTFB
    };
  }

  public getPerformanceScore(): number {
    const thresholds = this.checkThresholds();
    const totalChecks = Object.keys(thresholds).length;
    const passedChecks = Object.values(thresholds).filter(Boolean).length;
    
    return totalChecks > 0 ? Math.round((passedChecks / totalChecks) * 100) : 0;
  }

  public setThresholds(thresholds: Partial<PerformanceThresholds>): void {
    this.thresholds = { ...this.thresholds, ...thresholds };
  }

  private getLCP(): number | undefined {
    const entries = performance.getEntriesByType("largest-contentful-paint");
    return entries.length > 0 ? entries[entries.length - 1].startTime : undefined;
  }

  private getFID(): number | undefined {
    const entries = performance.getEntriesByType("first-input");
    return entries.length > 0 ? entries[0].processingStart - entries[0].startTime : undefined;
  }

  private getCLS(): number | undefined {
    // CLS calculation would require more complex logic
    // This is a simplified version
    return undefined;
  }

  private getFCP(): number | undefined {
    const entries = performance.getEntriesByType("paint");
    const fcpEntry = entries.find(entry => entry.name === "first-contentful-paint");
    return fcpEntry ? fcpEntry.startTime : undefined;
  }

  private getTTFB(): number | undefined {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    return navigation ? navigation.responseStart - navigation.requestStart : undefined;
  }
}

// Export instances
export const performanceMonitor = new PerformanceMonitor();
export const performanceAnalyzer = new PerformanceAnalyzer();

export { PerformanceMonitor, PerformanceAnalyzer };
export type { PerformanceMetric, PerformanceThresholds, PerformanceMetrics };