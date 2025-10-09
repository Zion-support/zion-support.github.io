// Performance optimization utilities
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Preload critical resources
  const preloadCriticalResources = () => {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/icons/favicon.ico'
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

  // Optimize images
  const optimizeImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  };

  // Debounce scroll events
  const debounceScroll = () => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Handle scroll events here
        const scrolled = window.scrollY > 50;
        document.body.classList.toggle('scrolled', scrolled);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  // Optimize animations
  const optimizeAnimations = () => {
    // Use requestAnimationFrame for smooth animations
    const animate = (callback: () => void) => {
      requestAnimationFrame(callback);
    };

    // Add CSS for smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      .lazy {
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .lazy.loaded {
        opacity: 1;
      }
      
      .scrolled nav {
        backdrop-filter: blur(10px);
        background: rgba(15, 23, 42, 0.95);
      }
    `;
    document.head.appendChild(style);
  };

  // Initialize all optimizations
  preloadCriticalResources();
  optimizeImages();
  debounceScroll();
  optimizeAnimations();
};

// Performance monitoring
export const performanceMonitor = {
  metrics: {
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  },

  reportMetrics: () => {
    if (typeof window === 'undefined') return;

    // Report Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            performanceMonitor.metrics.lcp = entry.startTime;
          }
          if (entry.entryType === 'first-input') {
            performanceMonitor.metrics.fid = (entry as any).processingStart - entry.startTime;
          }
          if (entry.entryType === 'layout-shift') {
            performanceMonitor.metrics.cls += (entry as any).value;
          }
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            performanceMonitor.metrics.fcp = entry.startTime;
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    }

    // Report TTFB
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      performanceMonitor.metrics.ttfb = navigation.responseStart - navigation.requestStart;
    }

    // Send to analytics
    setTimeout(() => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'performance',
          lcp: performanceMonitor.metrics.lcp,
          fid: performanceMonitor.metrics.fid,
          cls: performanceMonitor.metrics.cls,
          fcp: performanceMonitor.metrics.fcp,
          ttfb: performanceMonitor.metrics.ttfb
        });
      }
    }, 2000);
  }
};

// Image optimization
export const optimizeImage = (src: string, width?: number, height?: number): string => {
  if (!src) return '';
  
  // Add WebP support detection
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  // Add responsive image parameters
  let optimizedSrc = src;
  
  if (width && height) {
    optimizedSrc += `?w=${width}&h=${height}`;
  }
  
  if (supportsWebP()) {
    optimizedSrc = optimizedSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  return optimizedSrc;
};

// Lazy loading utility
export const lazyLoad = (element: HTMLElement, callback: () => void) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(element);
};

// Memory management
export const cleanup = () => {
  // Clean up event listeners
  window.removeEventListener('scroll', () => {});
  window.removeEventListener('resize', () => {});
  
  // Clear intervals and timeouts
  const highestTimeoutId = setTimeout(() => {}, 0);
  for (let i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
  
  const highestIntervalId = setInterval(() => {}, 0);
  for (let i = 0; i < highestIntervalId; i++) {
    clearInterval(i);
  }
};