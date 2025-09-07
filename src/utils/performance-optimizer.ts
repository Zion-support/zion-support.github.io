
// Performance optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll($2);
  images.forEach(img = $2;
export const preloadCriticalResources = $2;
  criticalResources.forEach($2);
    link.rel = $2;
    link.href = $2;
    link.as = $2;
    document.head.appendChild(link)
  })
},

export const preloadCriticalResources = () => {
  const criticalResources = [
    '/fonts/main.woff2',
    '/css/critical.css';
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
  });
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
  const loadComponent = (componentName) => {;
    return import(`./components/${componentName}`);
  };
  
  return { loadComponent };
};

