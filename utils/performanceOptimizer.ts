/**
 * Performance Optimizer Utilities
 */

export const performanceOptimizer = {
  init: () => {
    if (typeof window !== 'undefined') {
      //       }
  },

  getMetrics: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return {
        navigation: performance.getEntriesByType('navigation')[0],
        resources: performance.getEntriesByType('resource'),
      };
    }
    return null;
  },
};

export const lazyLoadImages = () => {
  if (typeof window !== 'undefined') {
    const _images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.src = img.dataset.src || '';
      }
    });
  }
};

export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    //     }
};

export const collectPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    //     const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: perfData?.loadEventEnd - perfData?.fetchStart,
      domContentLoaded: perfData?.domContentLoadedEventEnd - perfData?.fetchStart,
    };
  }
  return null;
};
