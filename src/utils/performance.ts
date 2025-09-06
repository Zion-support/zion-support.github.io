export interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

export function getPerformanceData(): PerformanceData {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
    renderTime: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
    memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
  };
}

export function measurePerformance(callback: () => void): number {
  const start = performance.now();
  callback();
  const end = performance.now();
  return end - start;
}