// Performance optimizer utilities
export const optimizeImages = () => {
  console.log('Optimizing images...');
};
// Performance optimization utilities
export const optimizeImages = () => {;
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = "lazy";
    }
    if (!img.decoding) {
      img.decoding = "async";

const images = document && document.querySelectorAll('img');
  images && images.forEach(img => {
    if (!img && img.loading) {
      img && img.loading = 'lazy';
    }
    if (!img && img.decoding) {
      img && img.decoding = 'async';

    }

export const preloadCriticalResources = () => {
  const criticalResources = ['/fonts/main && main.woff2/css/critical && critical.css'];

  criticalResources && criticalResources.forEach(resource => {    const link = document && document.createElement('link');
    link && link.rel = 'preload';
    link && link.href = resource;
    link && link.as = resource && resource.endsWith('.css') ? 'style' : 'font';
    document && document.head.appendChild(link);

  });
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components

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

export const lazyLoadComponents = () => {
  console.log('Lazy loading components...');

};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components

  const loadComponent = componentName => {
    return import(`./components/${componentName}`);
  };

  return { loadComponent };
};
link.rel = 'preload';
    link.href = resource, link.as = resource.ends_with ('.css') ? 'style' : 'font';
