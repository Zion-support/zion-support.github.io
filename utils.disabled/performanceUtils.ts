/**
 * Performance Utilities
 */

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    return (performance as any).memory;
  }
  return null;
};

// Lazy loading utility
export const lazyLoad = (callback: () => void, options?: IntersectionObserverInit) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  return observer;
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, height?: number): string => {
  // This is a placeholder for image optimization logic
  return src;
};

// Bundle size monitoring
export const getBundleSize = () => {
  // This would typically integrate with webpack-bundle-analyzer or similar
  return {
    totalSize: 0,
    gzippedSize: 0,
    chunks: []
  };
};

// Performance metrics collection
export const collectMetrics = () => {
  const metrics = {
    loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
    domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    totalBlockingTime: 0
  };

  // Collect Web Vitals if available
  if ('web-vitals' in window) {
    // This would integrate with the web-vitals library
    console.log('Web Vitals available');
  }

  return metrics;
};

// Performance optimization recommendations
export const getOptimizationRecommendations = () => {
  const recommendations = [];
  
  // Check for large images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.naturalWidth > 1920 || img.naturalHeight > 1080) {
      recommendations.push('Consider optimizing large images');
    }
  });

  // Check for unused CSS
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  if (stylesheets.length > 5) {
    recommendations.push('Consider reducing the number of stylesheets');
  }

  return recommendations;
};

export default {
  debounce,
  throttle,
  measurePerformance,
  getMemoryUsage,
  lazyLoad,
  optimizeImage,
  getBundleSize,
  collectMetrics,
  getOptimizationRecommendations
};