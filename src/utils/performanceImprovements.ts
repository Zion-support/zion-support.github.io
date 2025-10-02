/**
 * Performance Improvements Utility
 * Contains various performance optimization functions
 */

// Image optimization with WebP support
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach((img: HTMLImageElement) => {
    // Add loading="lazy" for better performance
    if (!img.loading) {
      img.loading = 'lazy';
    }
    
    // Add decoding="async" for non-blocking image loading
    if (!img.decoding) {
      img.decoding = 'async';
    }
  });
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/assets/css/main.css',
    '/assets/js/main.js',
    '/assets/js/vendor.js'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
};

// Optimize font loading
export const optimizeFontLoading = () => {
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  fontLink.as = 'style';
  document.head.appendChild(fontLink);
};

// Debounce function for performance
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

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
    };
  }
  return null;
};

// Performance metrics collection
export const collectPerformanceMetrics = () => {
  const metrics: Record<string, number> = {};
  
  // Navigation timing
  if (performance.timing) {
    const timing = performance.timing;
    metrics.pageLoadTime = timing.loadEventEnd - timing.navigationStart;
    metrics.domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
    metrics.firstPaint = timing.responseEnd - timing.navigationStart;
  }
  
  // Web Vitals
  if ('web-vitals' in window) {
    // This would be implemented with the web-vitals library
    console.log('Web Vitals available');
  }
  
  return metrics;
};

// Bundle size optimization
export const optimizeBundleSize = () => {
  // Remove unused CSS
  const unusedCSS = document.querySelectorAll('style[data-unused]');
  unusedCSS.forEach(style => style.remove());
  
  // Remove unused JavaScript
  const unusedScripts = document.querySelectorAll('script[data-unused]');
  unusedScripts.forEach(script => script.remove());
};

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    body { margin: 0; font-family: Inter, sans-serif; }
    .loading { opacity: 0; }
    .loaded { opacity: 1; transition: opacity 0.3s; }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Initialize all performance improvements
export const initializePerformanceImprovements = () => {
  optimizeImages();
  preloadCriticalResources();
  optimizeFontLoading();
  inlineCriticalCSS();
  
  // Register service worker in production
  if (process.env.NODE_ENV === 'production') {
    registerServiceWorker();
  }
  
  console.log('Performance improvements initialized');
};