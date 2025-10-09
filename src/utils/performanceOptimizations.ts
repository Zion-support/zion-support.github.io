
'use client';
<<<<<<< HEAD
/**
 * Advanced Performance Optimizations for Zion Tech Group
 * Implements cutting-edge performance techniques
 */

// Critical resource preloading
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/css/critical.css', as: 'style' },
    { href: '/js/vendor.js', as: 'script' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    document.head.appendChild(link);
  });
};

// Image optimization with WebP support
export const optimizeImages = () => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    // Add loading="lazy" for better performance
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add proper alt text if missing
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', 'Zion Tech Group content');
    }
    
    // Convert to WebP if supported
    if (supportsWebP() && (img.src.includes('.jpg') || img.src.includes('.jpeg'))) {
      img.src = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
    }
  });
};

// Check WebP support
const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Advanced lazy loading with Intersection Observer
export const setupAdvancedLazyLoading = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const lazyElements = document.querySelectorAll('[data-lazy]');
  const lazyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const src = element.getAttribute('data-lazy');
          if (src) {
            if (element.tagName === 'IMG') {
              (element as HTMLImageElement).src = src;
            } else {
              element.style.backgroundImage = `url(${src})`;
            }
            element.removeAttribute('data-lazy');
            lazyObserver.unobserve(element);
          }
        }
      });
    },
    { rootMargin: '50px' }
  );

  lazyElements.forEach((element) => {
    lazyObserver.observe(element);
  });
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      // Service Worker registered successfully
    })
    .catch((error) => {
      // Service Worker registration failed - handled silently
    });
};

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  if (typeof window === 'undefined') return;

  const criticalCSS = `
    /* Critical CSS for above-the-fold content */
    .cyber-grid { background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px); background-size: 50px 50px; }
    .neon-text { color: #00ffff; text-shadow: 0 0 10px #00ffff; }
    .cyber-button { background: linear-gradient(45deg, #00ffff, #8b5cf6); border: none; padding: 12px 24px; border-radius: 8px; color: white; font-weight: 600; }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Performance monitoring
export const monitorPerformance = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'largest-contentful-paint') {
        // Track LCP
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            metric_name: 'LCP',
            metric_value: Math.round(entry.startTime),
            metric_rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs-improvement' : 'poor'
          });
        }
      }
    });
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
};

// Initialize all optimizations
export const initializePerformanceOptimizations = () => {
  preloadCriticalResources();
  optimizeImages();
  setupAdvancedLazyLoading();
  registerServiceWorker();
  inlineCriticalCSS();
  monitorPerformance();
};
=======
// Performance optimization utilities;
// Debounce utility for performance;
export const _debounce = 
          
          
          
          
          
          
          
          
          <T extends (...args: any[]) => any>(),
    func: T,
  wait: number,
): ((...args: Parameters;
          <T>) => void) => {// TODO: Add content;}
}
  let timeout: NodeJS.Timeout;
  return (...args: Parameters;
          <T>) => {// TODO: Add content;}
}
// Throttle utility for performance
export const throttle = 
          
          
          
          
          
          
          
          
          <T extends (...args: any[]) => any>(),
    func: T,
  limit: number,
): ((...args: Parameters;
          <T>) => void) => {// TODO: Add content;}

}
  let,
  inThrottle: boolean;
  return (...arg,
  s: Parameters;)
          <T>) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    if (!inThrottle) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }
}
// Intersection Observer hook for lazy loading;
export const useIntersectionObserver = ()

  callback: (entries: IntersectionObserverEntry[]) => void,
  _options: IntersectionObserverInit = {}
) => {// TODO: Add content;}

}
  const observer = useMemo()
    () =>
      typeof window !== 'undefined'
        ? new IntersectionObserver(callback, {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  threshol,
  d: 0.1,
            rootMargi,
  n: '50px',
//             ...options;)
          })
        : null,
//     [callback, options]
  )
  const observe = useCallback()

    (element: Element | null) => {// TODO: Add content;}

}
      if (observer && element) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
        observer.observe(element);
        return () => observer.unobserve(element);
      }
      return () => {}
    },
//     [observer]
  );
  const disconnect = useCallback(() => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    if (observer) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      observer.disconnect();
    }
  }, [observer]);
  useEffect(() => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    return () => disconnect();
  }, [disconnect]);
  return { observe, disconnect };
};
// Image lazy loading hook;
export const useLazyImage = (sr,)
  c: string, placeholder?: string) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { observe } = useIntersectionObserver()
//     useCallback()
      (entries) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
        entries.forEach((entry) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
          if (entry.isIntersecting && !isLoaded && !isError) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
            const img = new Image();
            img.onload = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
              setImageSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
              setIsError(true);
            };
            img.src = src;
          }
        }
  )
      },
//       [src, isLoaded, isError]
//     )
  );
  return { imageSrc, isLoaded, isError, observe };
};
// Performance monitoring hook;
export const usePerformanceMonitoring = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
  const [metrics, setMetrics] = useState;
          <{/* TODO: Fix JSX expression */}
  O: Add content;}
}
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
  }>({});
  useEffect(() => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    if (typeof window === 'undefined') return;
    const updateMetrics = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime;
      setMetrics({/* TODO: Fix JSX expression */}
  O: Add content;}
}
//         fcp,
//         lcp,
        ttf,
  b: navigation?.responseStart - navigation?.requestStart;)
      });
    };
    // Monitor performance after page load;
    if (document.readyState === 'complete') {/* TODO: Fix JSX expression */}
    } else {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      window.addEventListener('load', updateMetrics);
    }
    // Monitor Core Web Vitals;
    if ('web-vitals' in window) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
        getCLS((metric) => setMetrics(prev => ({/* TODO: Fix JSX expression */})
  s: metric.value })));
        getFID((metric) => setMetrics(prev => ({/* TODO: Fix JSX expression */})
  d: metric.value })));
        getFCP((metric) => setMetrics(prev => ({/* TODO: Fix JSX expression */})
  p: metric.value })));
        getLCP((metric) => setMetrics(prev => ({/* TODO: Fix JSX expression */})
  p: metric.value })));
        getTTFB((metric) => setMetrics(prev => ({/* TODO: Fix JSX expression */})
  b: metric.value })));
      });
    }
    return () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      window.removeEventListener('load', updateMetrics);
    };
  }, []);
  return metrics;
};
// Memory usage monitoring;
export const useMemoryMonitoring = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
  const [memoryInfo, setMemoryInfo] = useState;
          <{/* TODO: Fix JSX expression */}
  O: Add content;}
}
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
  }>({});
  useEffect(() => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    if (typeof window === 'undefined' || !('memory' in performance)) return;
    const updateMemoryInfo = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      const memory = (performance as any).memory;
      if (memory) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
        setMemoryInfo({/* TODO: Fix JSX expression */}
  O: Add content;}
};
  usedJSHeapSiz,
  e: memory.usedJSHeapSize,
          totalJSHeapSiz,
  e: memory.totalJSHeapSize,
          jsHeapSizeLimi,
  t: memory.jsHeapSizeLimit;)
        });
      }
    };
    const interval = setInterval(updateMemoryInfo, 5000);
    return () => clearInterval(interval);
  }, []);
  return memoryInfo;
};
// Resource preloading utility;
export const preloadResource = (hre,
  f: string, a,)
  s: string) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
  if (typeof window === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};
// Critical resource preloading;
export const preloadCriticalResources = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
  if (typeof window === 'undefined') return;
  // Preload critical fonts;
  preloadResource('/fonts/inter-var.woff2', 'font');
  preloadResource('/fonts/inter-var.woff', 'font');
  // Preload critical images;
  preloadResource('/images/hero-bg.webp', 'image');
  preloadResource('/images/logo.svg', 'image');
  // Preload critical CSS;
  preloadResource('/styles/critical.css', 'style');
};
// Bundle size monitoring;
export const useBundleSizeMonitoring = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
  const [bundleSize, setBundleSize] = useState;
          <{/* TODO: Fix JSX expression */}
  O: Add content;}
}
    totalSize?: number;
    jsSize?: number;
    cssSize?: number;
    imageSize?: number;
  }>({});
  useEffect(() => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    if (typeof window === 'undefined') return;
    const calculateBundleSize = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      const resources = performance.getEntriesByType('resource');
      let jsSize = 0;
      let cssSize = 0;
      let imageSize = 0;
      resources.forEach((resource) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
        const size = (resource as PerformanceResourceTiming).transferSize || 0;
        totalSize += size;
        if (resource.name.includes('.js')) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
          jsSize += size;
        } else if (resource.name.includes('.css')) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
          cssSize += size;
        } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
          imageSize += size;
        }
      });
      setBundleSize({/* TODO: Fix JSX expression */}
  O: Add content;}
}
//         totalSize,
//         jsSize,
//         cssSize,
//         imageSize;)
      });
    };
    // Calculate after page load;
    if (document.readyState === 'complete') {/* TODO: Fix JSX expression */}
    } else {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      window.addEventListener('load', calculateBundleSize);
    }
    return () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      window.removeEventListener('load', calculateBundleSize);
    };
  }, []);
  return bundleSize;
};
export default {/* TODO: Fix JSX expression */}
  O: Add content;}
}
//   debounce,
//   throttle,
//   useIntersectionObserver,
//   useLazyImage,
//   usePerformanceMonitoring,
//   useMemoryMonitoring,
//   preloadResource,
//   preloadCriticalResources,
//   useBundleSizeMonitoring;
};



>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
