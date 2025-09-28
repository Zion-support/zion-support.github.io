/**
 * Performance Helper Functions
 * Utility functions for performance monitoring
 */

export const getMemoryUsage = () => {
  const memory = (
    performance as {
      memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number };
    }
  ).memory;
  return {
    used: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
    total: memory ? Math.round(memory.jsHeapSizeLimit / 1024 / 1024) : 0,
  };
};

export const collectPerformanceMetrics = () => {
  const navigation = performance.getEntriesByType(
    "navigation",
  )[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType("paint");

  return {
    loadTime: navigation ? navigation.loadEventEnd - navigation.fetchStart : 0,
    renderTime:
      paint.find((p) => p.name === "first-contentful-paint")?.startTime || 0,
    memoryUsage: getMemoryUsage().used,
    bundleSize: 0,
    cacheHitRate: 0,
  };
};

export const checkPerformanceBudget = (metrics: any) => {
  let violations = 0;

  if (metrics.loadTime > 3000) violations++;
  if (metrics.renderTime > 1500) violations++;
  if (metrics.memoryUsage > 100) violations++;

  return violations;
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
