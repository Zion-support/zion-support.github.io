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

export const optimizeFonts = () => {
  // Preload critical fonts
  const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
  fontLinks.forEach(link => {
    link.setAttribute('crossorigin', 'anonymous');
  });
};

export const optimizeScripts = () => {
  // Add defer to non-critical scripts
  const scripts = document.querySelectorAll('script:not([defer]):not([async])');
  scripts.forEach(script => {
    if (!script.src.includes('critical')) {
      script.defer = true;
    }
  });
};

export const optimizeStyles = () => {
  // Inline critical CSS
  const criticalStyles = document.querySelectorAll('style[data-critical]');
  criticalStyles.forEach(style => {
    style.setAttribute('media', 'all');
  });
};

export const optimizeResources = () => {
  // Preload critical resources
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/images/hero-bg.webp'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'image';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
    };
  }
  return null;
};

export const optimizeLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
  const lazyComponents = document.querySelectorAll('[data-lazy-component]');
  lazyComponents.forEach(element => {
    const componentName = element.getAttribute('data-lazy-component');
    if (componentName) {
      import(`../components/${componentName}`).then(module => {
        // Component loaded
        element.classList.add('loaded');
      });
    }
  });
};

export const initPerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeImages();
        optimizeFonts();
        optimizeScripts();
        optimizeStyles();
        optimizeResources();
        optimizeLazyLoading();
        optimizeBundleSize();
      });
    } else {
      optimizeImages();
      optimizeFonts();
      optimizeScripts();
      optimizeStyles();
      optimizeResources();
      optimizeLazyLoading();
      optimizeBundleSize();
    }
  }
};

export default {
  optimizeImages,
  optimizeFonts,
  optimizeScripts,
  optimizeStyles,
  optimizeResources,
  measurePerformance,
  optimizeLazyLoading,
  optimizeBundleSize,
  initPerformanceOptimizations
};