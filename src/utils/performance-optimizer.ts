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

<<<<<<< HEAD
export const lazyLoadComponents = () => {
  console.log('Lazy loading components...');
=======
export const preloadCriticalResources = () => {

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
  });
>>>>>>> main
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
<<<<<<< HEAD
  const loadComponent = componentName => {
=======

>>>>>>> main
    return import(`./components/${componentName}`);
  };

  return { loadComponent };
};
<<<<<<< HEAD

=======
    link.rel = 'preload';
    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font';
>>>>>>> main
