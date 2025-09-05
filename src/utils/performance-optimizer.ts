<<<<<<< HEAD

// Performance optimization utilities;
export const optimizeImages = () => {;
  const images = document.querySelectorAll('img');
  images.forEach(img => {;
    if (!img.loading) {;
      img.loading = 'lazy';
    }
    if (!img.decoding) {;
      img.decoding = 'async';
    }
  });
};
;
export const preloadCriticalResources = () => {;
  const criticalResources = ['/fonts/main.woff2/css/critical.css'];
;
  criticalResources.forEach(resource => {;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' :'font';
    document.head.appendChild(link);
  });
};
;
export const optimizeBundleSize = () => {;
  // Dynamic imports for non-critical components;
  const loadComponent = componentName => {;
    return import(`./components/${componentName}`);
  };
;
=======
// Performance optimizer utilities
export const optimizeImages = () => {
  console.log('Optimizing images...');
};

export const lazyLoadComponents = () => {
  console.log('Lazy loading components...');
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
  const loadComponent = componentName => {
    return import(`./components/${componentName}`),
  },

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  return { loadComponent };
};
;
