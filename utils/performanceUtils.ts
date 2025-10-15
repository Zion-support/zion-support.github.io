export const performanceUtils = {
  // Measure performance
  measure: (name: string, fn: () => void): void => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  },

  // Get performance metrics
  getMetrics: (): PerformanceMetrics => {
    return {
      fps: 0,
      memoryUsage: 0,
      loadTime: 0
    };
  }
};

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
}