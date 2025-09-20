export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
}

export interface PerformanceThresholds {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics | null = null;
  private thresholds: PerformanceThresholds;

  private constructor() {
    this.thresholds = {
      loadTime: 3000, // 3 seconds
      firstContentfulPaint: 1500, // 1.5 seconds
      largestContentfulPaint: 2500, // 2.5 seconds
      firstInputDelay: 100, // 100ms
      cumulativeLayoutShift: 0.1 // 0.1
    };
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public async measurePerformance(): Promise<PerformanceMetrics> {
    if (typeof window === "undefined") {
      throw new Error("Performance monitoring is only available in browser environment");
    }

    const metrics: PerformanceMetrics = {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0
    };

    // Measure load time
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (navigation) {
      metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }

    // Measure Core Web Vitals
    const paintEntries = performance.getEntriesByType("paint");
    const fcpEntry = paintEntries.find(entry => entry.name === "first-contentful-paint");
    if (fcpEntry) {
      metrics.firstContentfulPaint = fcpEntry.startTime;
    }

    // Measure LCP
    const lcpEntries = performance.getEntriesByType("largest-contentful-paint");
    if (lcpEntries.length > 0) {
      metrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
    }

    // Measure FID (simplified)
    const fidEntries = performance.getEntriesByType("first-input");
    if (fidEntries.length > 0) {
      metrics.firstInputDelay = (fidEntries[0] as any).processingStart - fidEntries[0].startTime;
    }

    // Measure CLS (simplified)
    const clsEntries = performance.getEntriesByType("layout-shift");
    metrics.cumulativeLayoutShift = clsEntries.reduce((cls, entry) => {
      return cls + ((entry as any).value || 0);
    }, 0);

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