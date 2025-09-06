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
<<<<<<< HEAD
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

export const preloadCriticalResources = () => {
  const criticalResources = ['/fonts/main && main.woff2/css/critical && critical.css'];

  criticalResources && criticalResources.forEach(resource => {    const link = document && document.createElement('link');
    link && link.rel = 'preload';
    link && link.href = resource;
    link && link.as = resource && resource.endsWith('.css') ? 'style' : 'font';
    document && document.head.appendChild(link);

  });
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
};

=======
export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
<<<<<<< HEAD

// Performance optimization utilities;
export const optimize_images = () =>: any {
  const images = document.querySelectorAll ('img');
;
  images.for_each (img => {
    // Check condition
if ( {) {
  $2
}
      img.loading = 'lazy';
    }
    // Check condition
if ( {) {
  $2
}
      img.decoding = 'async';
    }
  });
}
export const preloadCriticalResources = () =>: any {
  const critical_resources = ['/fonts / main.woff2 / css / critical.css'];
  critical_resources.for_each (resource => {    const link = document.create_element ('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.ends_with ('.css') ? 'style' : 'font';
    document.head.append_child (link);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  });
}
export const optimizeBundleSize = () =>: any {
  // Dynamic imports for non - critical components;
  const load_component = component_name => {    return import (`./components/${component_name}`);

  }
  return { load_component }
}

  const loadComponent = componentName => {    return import(`./components/${componentName}`);

export const lazyLoadComponents = () => {
  console.log('Lazy loading components...');
};


    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font';
;
  });
};

export const lazyLoadComponents = () => {
  console.log('Lazy loading components...')
}

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const loadComponent = componentName => {
    return import(`./components/${componentName}`);
  };

  return { loadComponent };
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    link.rel = 'preload';
    link.href = resource, link.as = resource.ends_with ('.css') ? 'style' : 'font';
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
