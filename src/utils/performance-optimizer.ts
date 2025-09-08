
// Performance optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
    if (!img.decoding) {
      img.decoding = 'async';
    }
  });
};
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/fonts/main.woff2'
    '/css/critical.css'
  ];
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
  const loadComponent = (componentName) => {
    return import(`./components/${componentName}`);
  };
  return { loadComponent };
};