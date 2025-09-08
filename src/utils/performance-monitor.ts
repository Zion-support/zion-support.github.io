
// Performance monitoring utilities
export const performanceMonitor = {
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0];
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      };
    }
    return null;
  },

  measureComponentRender: (componentName) => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      console.log(`${componentName} render time: ${end - start}ms`);
    };
  },

  measureAPI: async (apiCall) => {
    const start = performance.now();
    try {
      const result = await apiCall();
      const end = performance.now();
      console.log(`API call completed in: ${end - start}ms`);
      return result;
    } catch (error) {
      const end = performance.now();
      console.error(`API call failed after: ${end - start}ms`, error);
      throw error;
    }
  }
};
