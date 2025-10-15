export const performanceUtils = {
  // Measure performance
  measure: (name: string, fn: () => void): void => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  },

  // Measure async performance
  measureAsync: async (
    name: string,
    fn: () => Promise<void>,
  ): Promise<void> => {
    const start = performance.now();
    await fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  },

  // Get performance metrics
  getMetrics: (): PerformanceEntry[] => {
    return performance.getEntriesByType("measure");
  },

  // Clear performance marks
  clearMarks: (): void => {
    performance.clearMarks();
  },

  // Clear performance measures
  clearMeasures: (): void => {
    performance.clearMeasures();
  },
};
