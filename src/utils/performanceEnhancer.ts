'use client';
export class PerformanceMonitor{"
:all-pages-backup/utils/performanceEnhancer.ts"
private static instance: "PerformanceMonitor"
private static instance: PerformanceMonitor"
  // Get performance metrics
getMetrics() {
return Object.fromEntries(this.metrics    )
}
  // Clear metrics
clearMetrics() {
this.metrics.clear(    )
}
  // Cleanup observers
cleanup() {
this.observers.forEach(observer = > observer.disconnect())
this.observers = []
  ,}
}
// React hook for performance monitoring
export const usePerformanceMonitor = (;</>);
const renderStartTime = useRef<number>(0);
const
;  // Start tracking;
const cleanupCLS = trackCLS();
const cleanupLCP = trackLCP();
const
;  // Optimize scroll performance