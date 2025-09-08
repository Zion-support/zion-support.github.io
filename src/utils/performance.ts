/**
 * Performance monitoring utilities
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  bundleSize?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private startTime: number = 0;

  /**
   * Start performance monitoring
   */
  start(): void {
    this.startTime = performance.now();
  }

  /**
   * End performance monitoring and record metrics
   */
  end(): PerformanceMetrics {
    const endTime = performance.now();
    const loadTime = endTime - this.startTime;
    
    const metrics: PerformanceMetrics = {
      loadTime,
      renderTime: endTime,
      memoryUsage: this.getMemoryUsage(),
    };

    this.metrics.push(metrics);
    return metrics;
  }

  /**
   * Get memory usage if available
   */
  private getMemoryUsage(): number | undefined {
    if ('memory' in performance) {
      return (performance as any).memory.usedJSHeapSize;
    }
    return undefined;
  }

  /**
   * Get average performance metrics
   */
  getAverageMetrics(): Partial<PerformanceMetrics> {
    if (this.metrics.length === 0) return {};

    const total = this.metrics.reduce(
      (acc, metric) => ({
        loadTime: acc.loadTime + metric.loadTime,
        renderTime: acc.renderTime + metric.renderTime,
        memoryUsage: acc.memoryUsage + (metric.memoryUsage || 0),
      }),
      { loadTime: 0, renderTime: 0, memoryUsage: 0 }
    );

    return {
      loadTime: total.loadTime / this.metrics.length,
      renderTime: total.renderTime / this.metrics.length,
      memoryUsage: total.memoryUsage / this.metrics.length,
    };
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics = [];
  }

  /**
   * Get all metrics
   */
  getAllMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

/**
 * Hook for React components to monitor performance
 */
export const usePerformanceMonitor = () => {
  const startMonitoring = () => performanceMonitor.start();
  const endMonitoring = () => performanceMonitor.end();
  const getMetrics = () => performanceMonitor.getAllMetrics();
  const clearMetrics = () => performanceMonitor.clear();

  return {
    startMonitoring,
    endMonitoring,
    getMetrics,
    clearMetrics,
  };
};

/**
 * Utility to measure function execution time
 */
export const measureExecutionTime = async <T>(
  fn: () => Promise<T> | T,
  label?: string
): Promise<{ result: T; executionTime: number }> => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  const executionTime = end - start;

  if (label) {
    console.log(`${label} executed in ${executionTime.toFixed(2)}ms`);
  }

  return { result, executionTime };
};

/**
 * Utility to debounce function calls for performance
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Utility to throttle function calls for performance
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
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

export default performanceMonitor;