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