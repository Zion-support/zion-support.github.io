// Performance monitoring utilities
export const performanceMonitor = {
  startMeasure: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(`${name}-start`);
    }
  },

  endMeasure: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
    }
  },

  reportCoreWebVitals: () => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      // This would integrate with web-vitals library
      console.log('Core Web Vitals monitoring initialized');
    }
  }
};