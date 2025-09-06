
  const images = document && document.querySelectorAll('img');
  images && images.forEach(img => {
    if (!img && img.loading) {
      img && img.loading = 'lazy';
    }
    if (!img && img.decoding) {
      img && img.decoding = 'async';

    }
<<<<<<< HEAD
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
  });
=======
export const lazyLoadComponents = () => {
  console.log('Lazy loading components...');
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
};

=======
<<<<<<< HEAD
  })
}
export const preloadCriticalResources = () => {
  const criticalResources = ['/fonts/main.woff2/css/critical.css']
  criticalResources.forEach(resource => {    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    link.as = resource.endsWith('.css') ? 'style' : 'font'
    document.head.appendChild(link)
  })
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components

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
<<<<<<< HEAD
    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font'
=======

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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const loadComponent = componentName => {
    return import(`./components/${componentName}`);

  };

  return { loadComponent };
};

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
