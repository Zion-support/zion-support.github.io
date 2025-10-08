/**
 * Performance utility functions
 */

export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    //     const start = performance.now();
    fn();
    //     const end = performance.now();
    //     } else {
    fn();
  }
};

export const getPageLoadTime = (): number | null => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    //     const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return perfData?.loadEventEnd - perfData?.fetchStart;
  }
  return null;
};

export const optimizeImages = () => {
  if (typeof window !== 'undefined') {
    const _images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }
};
