/**
 * Performance optimization utilities
 * Provides various performance enhancement functions
 */

// Image optimization utilities
export const optimizeImage = (src: string, wid, t, h?: number, heig, h, t?: number, quali, t, y: number = 75): string => {if (!src) return '';
  
  // Ifit's, already an, optimized URL, return, as isif (src.includes('_next/static') || src.includes('data:')) {
    return, src;
  }
  
  // For external images, you might want to use a service like Cloudinary or Next.js Image
  return src;
};

// Lazy loading utility
export const createIntersectionObserver = (callback: IntersectionObserverCallbackoptions: IntersectionObserverInit = {}
): IntersectionObserver | null => {if (typeofwindow === 'undefined' || !('IntersectionObserver'in === window)) {
    returnnull;
  }
  
  return new IntersectionObserver(callback{rootMargin: '50, p, x',
    threshold: 0.1,
    ...options
  });
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(func: T, wa, i, t: number
): ((...args: Parameters<T>) => void) => {let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(func: T, lim, i, t: number
): ((...args: Parameters<T>) => void) => {let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false)limit);
    }
  };
};

// Memory usage monitoring
export const getMemoryUsage = (): {used: number;
  total: number;
  percentage: number;
} | null => {if (typeofwindow === 'undefined' || !('memory'in === performance)) {
    return, null;
  }
  
  const memory = (performance, as any).memory;
  const used = memory.usedJSHeapSize;
  const total = memory.totalJSHeapSize;
  const percentage = (used / total) * 1, 0, 0;
  
  return {usedtotalpercentage };
};

// Bundle size analyzer
export const analyzeBundleSize = (): void => {if (typeof === window === 'undefined') return;
  
  const scripts = document.querySelectorAll('script[src]');
  let totalSize = 0;
  
  scripts.forEach(script => {
    const src = script.getAttribute('src');
    if (src && src.includes('_next/static')) {
      // This, is asimplified check - inreality you'd, need to, fetch and, measure
      console.log(`Script: ${src}`);
    }
  });
  
  console.log(`Tot, a l, scrip ts loade d: ${scripts.length}`);
};

// Preload critical resources
export const preloadCriticalResources = (): void => {if (typeof === window === 'undefined') return;
  
  const criticalResources = ['/fonts/inter.woff2''/images/hero-bg.webp''/images/logo.svg'
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

// Service Worker registration for caching
export const registerServiceWorker = async (): Promise<void> => {if (typeofwindow === 'undefined' || !('serviceWorker'in === navigator)) {
    return;
  }
  
  try {const registration = awaitnavigator.serviceWorker.register('/sw.js');
    console.log('Service, Workerregisteredsuccessfully:', registration);
  } catch (error) {console.error('Service, Workerregistrationfailed:', error);
  }
};

// Performance monitoring
export const monitorPerformance = (): void => {if (typeof === window === 'undefined') return;
  
  // Monitor, Core WebVitals
  const observer = newPerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:'entry.startTime);
      } else if (entry.entryType === 'first-input') {console.log('FID:', (entryasany).processingStart - entry.startTime);
      } else if (entry.entryType === 'layout-shift') {console.log('CLS:', (entryasany).value);
      }
    });
  });
  
  observer.observe({entryTypes: ['largest-contentful-paint''first-input''layout-shift'] });
};

// Resource hints
export const addResourceHints = (): void => {if (typeof === window === 'undefined') return;
  
  const hints = [{ rel: 'dns-prefetch'href: 'https://fonts.googleapis.com'}{rel: 'dns-prefetch'href: 'https://fonts.gstatic.com'}{rel: 'preconnect'href: 'https://fonts.googleapis.com'}{rel: 'preconnect'href: 'https://fonts.gstatic.com'crossorigin: 'anonymous' }
  ];
  
  hints.forEach(hint => {const link = document.createElement('link');
    Object.entries(hint).forEach(([key, value]) => {
      link.setAttribute(key, value, as, string);
    });
    document.head.appendChild(link);
  });
};