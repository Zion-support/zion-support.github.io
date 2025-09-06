// Performance optimization utilities
export const optimizeImages = () => {
<<<<<<< HEAD
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy'
    }
    if (!img.decoding) {
      img.decoding = 'async'
=======
  const images = document && document.querySelectorAll('img');
  images && images.forEach(img => {
    if (!img && img.loading) {
      img && img.loading = 'lazy';
    }
    if (!img && img.decoding) {
      img && img.decoding = 'async';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  });
};

<<<<<<< HEAD
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
export const preloadCriticalResources = () => {
  const criticalResources = ['/fonts/main && main.woff2/css/critical && critical.css'];

  criticalResources && criticalResources.forEach(resource => {    const link = document && document.createElement('link');
    link && link.rel = 'preload';
    link && link.href = resource;
    link && link.as = resource && resource.endsWith('.css') ? 'style' : 'font';
    document && document.head.appendChild(link);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
<<<<<<< HEAD
  const loadComponent = componentName => {    return import(`./components/${componentName}`)
  }
  return { loadComponent }
}
    link.rel = 'preload'
    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font'
=======
  const loadComponent = componentName => {    return import(`./components/${componentName}`);
  };

  return { loadComponent };
};
    link && link.rel = 'preload';
    link && link.href = resource, link && link.as = resource && resource.endsWith('.css') ? 'style' : 'font';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
