/**
 * Performance optimization utilities
 */

interface WebVitalsMetrics {
  LCP?: number;
  FID?: number;
  CLS?: number;
  FCP?: number;
  TTFB?: number;
  averageRenderTime?: number;
  totalComponents?: number;
  memoryUsage?: number;
  slowComponents?: number;
}

interface PerformanceOptimizer {
  measurePageLoad(): WebVitalsMetrics | null;
  reportWebVitals(metrics: WebVitalsMetrics): void;
  monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null;
  shouldLoadHeavyAssets(): boolean;
  preloadRoute(route: string): void;
  cacheStaticAssets(): void;
  clearOldCaches(): void;
  lazyLoadImages(): void;
  getMetrics(): WebVitalsMetrics | null;
  preloadCriticalResources(): void;
}

/**
 * Measure page load timing
 */
export const measurePageLoad = (): WebVitalsMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    LCP: navigation.loadEventEnd - navigation.loadEventStart,
    FCP: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    TTFB: navigation.responseStart - navigation.requestStart,
  };
};

/**
 * Report web vitals
 */
export const reportWebVitals = (metrics: WebVitalsMetrics): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metrics);
  }
  
  // Send to analytics service
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'web_vitals', {
      event_category: 'Performance',
      event_label: 'Web Vitals',
      value: Math.round(metrics.LCP || 0)
    });
  }
};

/**
 * Check if WebP is supported
 */
export const shouldUseWebP = (): boolean => {
  if (typeof document === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Get connection quality
 */
export const getConnectionQuality = (): 'slow' | 'medium' | 'fast' => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'medium';
  }
  
  const connection = (navigator as any).connection;
  const effectiveType = connection.effectiveType;
  
  if (effectiveType === '4g') return 'fast';
  if (effectiveType === '3g') return 'medium';
  return 'slow';
};

/**
 * Check if heavy assets should be loaded
 */
export const shouldLoadHeavyAssets = (): boolean => {
  const connectionQuality = getConnectionQuality();
  const isSlowConnection = connectionQuality === 'slow';
  const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return !isSlowConnection && !isLowEndDevice;
};

/**
 * Request idle callback with fallback
 */
export const requestIdleCallback = (callback: () => void, options?: { timeout?: number }): number => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(callback, options);
  }
  
  return setTimeout(callback, options?.timeout || 0) as any;
};

/**
 * Cancel idle callback with fallback
 */
export const cancelIdleCallback = (id: number): void => {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    (window as any).cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
};

/**
 * Preload route
 */
export const preloadRoute = (route: string): void => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = (callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return null;
  }
  
  try {
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  } catch (error) {
    console.warn('Long task monitoring not supported:', error);
    return null;
  }
};

/**
 * Cache static assets
 */
export const cacheStaticAssets = (): void => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  
  requestIdleCallback(() => {
    caches.open('static-assets-v1').then((cache) => {
      // Cache critical assets
      const criticalAssets = [
        '/',
        '/favicon.ico',
        '/manifest.json'
      ];
      
      criticalAssets.forEach((asset) => {
        cache.add(asset).catch(() => {
          // Ignore cache errors
        });
      });
    });
  });
};

/**
 * Clear old caches
 */
export const clearOldCaches = (): void => {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      if (cacheName !== 'static-assets-v1') {
        caches.delete(cacheName);
      }
    });
  });
};

/**
 * Lazy load images
 */
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset['src']) {
          img.src = img.dataset['src'];
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
};

/**
 * Get current metrics
 */
export const getMetrics = (): WebVitalsMetrics | null => {
  return measurePageLoad();
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;
  
  const criticalResources = [
    '/fonts/inter.woff2',
    '/css/critical.css'
  ];
  
  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Export the main performance optimizer object
export const performanceOptimizer: PerformanceOptimizer = {
  measurePageLoad,
  reportWebVitals,
  monitorLongTasks,
  shouldLoadHeavyAssets,
  preloadRoute,
  cacheStaticAssets,
  clearOldCaches,
  lazyLoadImages,
  getMetrics,
  preloadCriticalResources,
};

// Default export
export default performanceOptimizer;
