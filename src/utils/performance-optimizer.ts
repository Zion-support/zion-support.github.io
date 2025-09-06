// Performance optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy'
    }
    if (!img.decoding) {
      img.decoding = 'async'
    }
export const preloadCriticalResources = null;
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

    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font'
  const loadComponent = componentName => {
    return import(`./components/${componentName}`);

  };

  return { loadComponent };
};

>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 