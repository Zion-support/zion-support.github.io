// Performance Optimizer Utility
export const performanceOptimizer = {
  getMetrics: () => {
    if (typeof window === 'undefined' || !window.performance) return null;
    const navigation = window.performance.timing;
    const paint = window.performance.getEntriesByType('paint');
    return {
      loadTime: navigation.loadEventEnd - navigation.navigationStart,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
    };
  }
};