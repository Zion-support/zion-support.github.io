// Performance monitoring
export const performanceMonitor = {
  // Measure page load time
  measurePageLoad() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        
        console.log(`Page load time: ${loadTime}ms`);
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_load_time' {
            value: Math.round(loadTime),
            event_category: 'Performance'
          })}
      })}
  },
  
  // Measure Core Web Vitals
  measureWebVitals() {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log)})}
  },
  
  // Monitor memory usage
  monitorMemory() {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        console.log(`Memory usage: ${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`)}, 30000); // Every 30 seconds
    }
  }
};

export default performanceMonitor;
