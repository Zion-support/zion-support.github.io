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
<<<<<<< HEAD
  const loadComponent = componentName => {    return import(`./components/${componentName}`)
  }
  return { loadComponent }
}
    link.rel = 'preload'
<<<<<<< HEAD
    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font'
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
