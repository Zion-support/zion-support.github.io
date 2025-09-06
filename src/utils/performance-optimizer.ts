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
export const lazyLoadComponents = () => {
  console.log('Lazy loading components...');
};


// Performance optimization utilities;
export const optimize_images = () =>: any {
  const images = document.querySelectorAll ('img');
;
  images.for_each (img => {
    // Check condition
if ( {) {
  $2
}
    link.rel = 'preload'

export const lazyLoadComponents = () => {
  console.log('Lazy loading components...');

};


    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font';
;
  });
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




