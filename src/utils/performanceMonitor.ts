// Basic performance monitoring
export const measureWebVitals = () => {
  // Basic performance monitoring implementation
  if (typeof window !== 'undefined') {
    // Measure page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log('Page load time:', loadTime);
    });
  }
};
