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

=======

=======
    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font';
;
=======
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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
