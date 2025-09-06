// Performance optimization utilities
export const optimizeImages = () => {;
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
<<<<<<< HEAD
  const criticalResources = ['/fonts/main.woff2/css/critical.css'];

  criticalResources.forEach(resource => {
=======
  const criticalResources = [
    '/fonts/main.woff2',
    '/css/critical.css';
  ];
  
  criticalResources.forEach(resource => {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
  });
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
<<<<<<< HEAD
  const loadComponent = componentName => {
=======
  const loadComponent = (componentName,) => {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    return import(`./components/${componentName}`);
  };

  return { loadComponent };
};
    link.rel = 'preload';
    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
