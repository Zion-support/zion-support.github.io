// Performance monitoring script
export const performanceMonitor = {
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        console.log('Page load time:', loadTime + 'ms');
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_load_time', {
            value: Math.round(loadTime),
            event_category: 'performance'
          });
        }
      });
    }
  },
  
  measureCoreWebVitals: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime + 'ms');
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            console.log('FID:', (fidEntry.processingStart || fidEntry.startTime) - entry.startTime + 'ms');
          }
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }
  },

  reportMetrics: () => {
    // Report performance metrics
    console.log('Performance metrics reported');
  },

  getReport: () => {
    // Get performance report
    return {
      pageLoad: performance.now(),
      timestamp: Date.now()
    };
  }
};