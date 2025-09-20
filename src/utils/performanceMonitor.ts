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
    metric.endTime = endTime;
    metric.duration = duration;
    this.logMetric(name, duration);

    return duration;
  }

  measureFunction<T extends (...args: any[]) => any>(
    name: string,
    func: T
  ): (...args: Parameters<T>) => ReturnType<T> {
    return (...args: Parameters<T>): ReturnType<T> => {
      this.startTiming(name);
      try {
        const result = func(...args);
        this.endTiming(name);
        return result;
      } catch (error) {
        this.endTiming(name);
        throw error;
      }
    };
  }

  async measureAsync<T>(
    name: string,
    asyncFunc: () => Promise<T>
  ): Promise<T> {
    this.startTiming(name);
    try {
      const result = await asyncFunc();
      this.endTiming(name);
      return result;
    } catch (error) {
      this.endTiming(name);
      throw error;
    }
  }

  private logMetric(name: string, value: number): void {
    if (typeof window !== "undefined" && "gtag" in window) {
      // Send to Google Analytics
      (window as any).gtag("event", "timing_complete", {
        name: name,
        value: Math.round(value),
        custom_map: {
          metric_category: "performance"
        }
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
    LCP: 2500, // Good: < 2.5s
    FID: 100,  // Good: < 100ms
    CLS: 0.1,  // Good: < 0.1
    FCP: 1800, // Good: < 1.8s
    TTFB: 600  // Good: < 600ms
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
    return { ...this.metrics };
  }

  public checkThresholds(): { [K in keyof PerformanceThresholds]: boolean } {
    const results = {} as { [K in keyof PerformanceThresholds]: boolean };
    
    Object.keys(this.thresholds).forEach(key => {
      const metricKey = key as keyof PerformanceThresholds;
      const metricValue = this.metrics[metricKey];
      if (metricValue !== undefined) {
        results[metricKey] = metricValue <= this.thresholds[metricKey];
      }
    });

    return results;
  }

  public getPerformanceScore(): number {
    const thresholds = this.checkThresholds();
    const passed = Object.values(thresholds).filter(Boolean).length;
    const total = Object.keys(thresholds).length;
    
    return total > 0 ? Math.round((passed / total) * 100) : 0;
  }

  public setThresholds(thresholds: Partial<PerformanceThresholds>): void {
    this.thresholds = { ...this.thresholds, ...thresholds };
  }
}

export { PerformanceMonitor, PerformanceAnalyzer };
export type { PerformanceMetric, PerformanceThresholds, PerformanceMetrics };