
interface PerformanceMetric {name: string; startTime: number;
}
endTime?: number;}
interface PerformanceMetric {
name: string; startTime: number;
endTime?: number;
duration?: number}

class PerformanceMonitor {private metrics: Map<string; PerformanceMetric> = new Map();private observers: PerformanceObserver[] = [];

constructor() {
this.initializeObservers()}

private initializeObservers() {// Monitor Core Web Vitals;
if ("PerformanceObserver" in window) {
// Largest Contentful Paint;
try {
const lcpObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
const lastEntry = entries[entries.length - 1];
this.logMetric("LCP", lastEntry.startTime)});
lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
this.observers.push(lcpObserver);
} catch (error) {console.warn("LCP observer failed:", error)}

// First Input Delay;
try {const fidObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
entries.forEach(entry => {
this.logMetric("FID", entry.processingStart - entry.startTime)});
});
fidObserver.observe({ entryTypes: ["first-input"] });
this.observers.push(fidObserver);
} catch (error) {console.warn("FID observer failed:", error)}
} catch (error) {
console.warn("FID observer failed:", error)}this.startTiming(name);
try {
const result = func(...args);
this.endTiming(name);
return result} catch (error) {this.endTiming(name);
return result} catch (error) {
this.endTiming(name);throw error}
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
  }
}

    // Measure FID (simplified)
    const fidEntries = performance.getEntriesByType("first-input");
    if (fidEntries.length > 0) {
      metrics.firstInputDelay = (fidEntries[0] as any).processingStart - fidEntries[0].startTime;
    }

export const usePerformanceMonitor = () => {
  return {
    startTiming: performanceMonitor.startTiming.bind(performanceMonitor),
    endTiming: performanceMonitor.endTiming.bind(performanceMonitor),
    measureFunction: performanceMonitor.measureFunction.bind(performanceMonitor),
    measureAsync: performanceMonitor.measureAsync.bind(performanceMonitor),
    getMetrics: performanceMonitor.getMetrics.bind(performanceMonitor),
    cleanup: performanceMonitor.cleanup.bind(performanceMonitor)
  };
};

    // Measure memory usage if available
    if ((performance as any).memory) {
      metrics.memoryUsage = (performance as any).memory.usedJSHeapSize;
    }

    this.metrics = metrics;
    return metrics;
  }

  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  public checkThresholds(): { [K in keyof PerformanceThresholds]: boolean } {
    if (!this.metrics) {
      throw new Error("No performance metrics available. Call measurePerformance() first.");
    }

    const results = {} as { [K in keyof PerformanceThresholds]: boolean };
    
    for (const [key, threshold] of Object.entries(this.thresholds)) {
      const metricKey = key as keyof PerformanceThresholds;
      const metricValue = this.metrics[metricKey as keyof PerformanceMetrics] as number;
      results[metricKey] = metricValue <= threshold;
    }

    return results;
  }

  public getPerformanceScore(): number {
    if (!this.metrics) {
      return 0;
    }

    const thresholdResults = this.checkThresholds();
    const passedThresholds = Object.values(thresholdResults).filter(Boolean).length;
    const totalThresholds = Object.keys(this.thresholds).length;
    
    return Math.round((passedThresholds / totalThresholds) * 100);
  }

  public setThresholds(thresholds: Partial<PerformanceThresholds>): void {
    this.thresholds = { ...this.thresholds, ...thresholds };
  }
}