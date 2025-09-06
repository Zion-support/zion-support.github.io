const images = document && document.querySelectorAll('img');
  images && images.forEach(img => {
    if (!img && img.loading) {
      img && img.loading = 'lazy';
    }
    if (!img.decoding) {
      img.decoding = 'async'
    }
  });
};

export const preloadCriticalResources = null;
    '/css/critical.css'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
  const loadComponent = componentName => {
    return import(`./components/${componentName}`);

  };

  return { loadComponent };
};

<<<<<<< HEAD
<<<<<<< HEAD
