export const performanceOptimizer = {
  metrics: {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  },

  clearMetrics: () => {
    performanceOptimizer.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0
    };
  },

  updateMetrics: (newMetrics: Partial<typeof performanceOptimizer.metrics>) => {
    performanceOptimizer.metrics = {
      ...performanceOptimizer.metrics,
      ...newMetrics
    };
  },

  getMetrics: () => {
    return { ...performanceOptimizer.metrics };
  }
};