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

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
  });
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components

    return import(`./components/${componentName}`);
  };

  return { loadComponent };
};
    link.rel = 'preload';
    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font';