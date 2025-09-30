// Enhanced performance monitor
export const enhancedPerformanceMonitor = {
  initialize: () => {
    console.log('Enhanced Performance Monitor initialized');
  },
  trackMetric: (name: string, value: number) => {
    console.log('Performance Metric:', { name, value });
  },
  getMetrics: () => {
    return {
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0
    };
  }
};