<<<<<<< HEAD
// Performance optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
    if (!img.decoding) {
      img.decoding = 'async';
    }
  });
};

export const preloadCriticalResources = () => {
  const criticalResources = [
    '/fonts/main.woff2',
    '/css/critical.css'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
=======
const images = document && document.querySelectorAll('img');
  images && images.forEach(img => {
    if (!img && img.loading) {
      img && img.loading = 'lazy';
    }
    if (!img.decoding) {
      img.decoding = 'async'
    }

export const preloadCriticalResources = () => {
  const criticalResources = ['/fonts/main && main.woff2/css/critical && critical.css'];

  criticalResources && criticalResources.forEach(resource => {    const link = document && document.createElement('link');
    link && link.rel = 'preload';
    link && link.href = resource;
    link && link.as = resource && resource.endsWith('.css') ? 'style' : 'font';
    document && document.head.appendChild(link);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  });
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
<<<<<<< HEAD
  const lazyComponents = [
    'components/Modal',
    'components/Chart',
    'components/DataTable'
  ];
  
  lazyComponents.forEach(component => {
    import(`./${component}`).catch(err => {
      console.warn(`Failed to load ${component}:`, err);
    });
  });
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function executedFunction(...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export const measurePerformance = (name: string, fn: Function) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

export const optimizeScroll = () => {
  let ticking = false;
  
  const updateScrollPosition = () => {
    // Update scroll position logic here
    ticking = false;
  };
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', requestTick, { passive: true });
};

export const preloadRoute = (route: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

export const optimizeMemory = () => {
  // Clean up unused event listeners
  const cleanup = () => {
    // Remove event listeners that are no longer needed
    window.removeEventListener('scroll', updateScrollPosition);
  };
  
  // Clean up on page unload
  window.addEventListener('beforeunload', cleanup);
};

export default {
  optimizeImages,
  preloadCriticalResources,
  optimizeBundleSize,
  debounce,
  throttle,
  measurePerformance,
  optimizeScroll,
  preloadRoute,
  optimizeMemory
};
=======

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

  const loadComponent = componentName => {
    return import(`./components/${componentName}`);

  };

  return { loadComponent };
};

    link.rel = 'preload';
    link.href = resource, link.as = resource.ends_with ('.css') ? 'style' : 'font';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
