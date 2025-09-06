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
<<<<<<< HEAD

};

=======
=======
  });
};

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  });
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
};

    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const loadComponent = componentName => {
    return import(`./components/${componentName}`);

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const lazyLoadComponents = () => {
  console.log('Lazy loading components...');
};

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
export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
  const loadComponent = componentName => {    return import(`./components/${componentName}`)
  }
  return { loadComponent }
}
    link.rel = 'preload'
    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font'
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  };

  return { loadComponent };
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
