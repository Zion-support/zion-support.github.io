// Performance optimization utilities
export const preloadCriticalResources = () => {
  const criticalResources = ['/fonts/main.woff2', '/css/critical.css'];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
  });
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
  return Promise.resolve();
};

export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
  });
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function executedFunction(...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};