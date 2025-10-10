// PerformanceOptimizations utility
// This file contains utility functions and configurations for performance optimization

export const initializePerformanceOptimizations = () => {
  // Preload critical resources
  if (typeof window !== 'undefined') {
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);

    // Preload critical images
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/logo.png',
      '/og-image.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });

    // Initialize performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          console.log('Performance metrics:', {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
            totalTime: perfData.loadEventEnd - perfData.fetchStart
          });
        }
      });
    }
  }
};

export default initializePerformanceOptimizations;
