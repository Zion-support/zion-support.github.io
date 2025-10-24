export const performanceMetrics = {
  getLoadTime: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return performance.timing.loadEventEnd - performance.timing.navigationStart;
    }
    return 0;
  }
};
