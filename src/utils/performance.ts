export class PerformanceMonitor {
  private observer: PerformanceObserver | null = null;

  constructor() {
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      try {
        this.observer = new PerformanceObserver(() => {});
      } catch {
        this.observer = null;
      }
    }
  }

  reportMetrics(): void {
    if (typeof window === "undefined") return;
    try {
      const timing = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      const clsEntry = (performance as any).getEntriesByType?.("layout-shift")?.[0];
      const fcp = performance.getEntriesByName("first-contentful-paint")[0] as PerformanceEntry | undefined;

      const metrics = {
        timeToFirstByteMs: timing ? timing.responseStart : undefined,
        domContentLoadedMs: timing ? timing.domContentLoadedEventEnd : undefined,
        firstContentfulPaintMs: fcp ? fcp.startTime : undefined,
        cumulativeLayoutShift: clsEntry ? clsEntry.value : undefined,
      };

      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.log("Performance metrics", metrics);
      }
    } catch {
      // no-op
    }
  }

  cleanup(): void {
    try {
      this.observer?.disconnect();
    } catch {
      // no-op
    }
  }
}

export default PerformanceMonitor;

