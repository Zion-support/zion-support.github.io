// Performance optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = "lazy";
    }
    if (!img.decoding) {
      img.decoding = "async";
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
  });
};

export const optimizeFonts = () => {
  const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  fontLinks.forEach(link => {
    link.rel = 'preload';
    link.as = 'font';
    link.crossOrigin = 'anonymous';
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

:src/utils/performance-optimizer.ts
pr-12243
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

// Performance optimization utilities;
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');'
  images.forEach(img => {)
    if (!img.loading) {'
      img.loading = 'lazy';'
    }
    if (!img.decoding) {'
      img.decoding = 'async';'
    }
  });
};

export const preloadCriticalResources = () => {
  const criticalResources = ['
    '/fonts/main.woff2',''
    '/css/critical.css'']
  ];
  
  criticalResources.forEach(resource => {)'
    const link = document.createElement('link');''
    link.rel = 'preload';'
    link.href = resource;'
    link.as = resource.endsWith('.css') ? 'style' : 'font';'
    document.head.appendChild(link);
:temp-disabled/src/utils/performance-optimizer.ts
  });
};

export const optimizeBundleSize = () => {
:src/utils/performance-optimizer.ts
  // Dynamic imports for non-critical components

export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

export const optimizeAnimations = () => {
  const elements = document.querySelectorAll('[data-animate]');
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  elements.forEach(el => animationObserver.observe(el));
};

export const initPerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    optimizeImages();
    preloadCriticalResources();
    optimizeFonts();
    lazyLoadImages();
    optimizeAnimations();
  }
};
  return { load_component }
}

  const loadComponent = componentName => {    return import(`./components/${componentName}`);
// Performance optimization utilities;
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {)
    if (!img.loading) {
      img.loading = 'lazy';
    }
    if (!img.decoding) {
      img.decoding = 'async';
  });
};

export const preloadCriticalResources = () => {
  const criticalResources = [
    '/fonts/main.woff2',
    '/css/critical.css]
  ];
  
  criticalResources.forEach(resource => {)
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);

export const optimizeBundleSize = () => {
:temp-disabled/src/utils/performance-optimizer.ts
  // Dynamic imports for non-critical components;
  const loadComponent = (componentName: string) => {
    return import(`./components/${componentName}`);
pr-12325

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
pr-12243
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    timeout = setTimeout(later, wait);

export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);

export const optimizeScrollPerformance = () => {
  let ticking = false;
  
  const updateScrollPosition = () => {
    // Update scroll position logic here;
    ticking = false;
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
  
  window.addEventListener('scroll', requestTick, { passive: true });

export const preloadRoute = (route: string) => {
  // Preload route components;
  link.rel = 'prefetch';
  link.href = route;

export const optimizeMemoryUsage = () => {
  // Clean up unused event listeners and references;
  if (typeof window !== 'undefined') {
    // Remove unused event listeners;
    window.removeEventListener('scroll', () => {});
    window.removeEventListener('resize', () => {});

export const measurePerformance = (name: string, fn: Function) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();`;
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
:src/utils/performance-optimizer.ts
};`;
pr-12325
};'

:temp-disabled/src/utils/performance-optimizer.ts
