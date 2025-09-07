/**
 * Performance Improvements Utility
 * Provides various performance optimization functions
 */

import { NextRequest, NextResponse } from 'next/server';

// Image optimization utilities
export const imageOptimization = {
  // Generate responsive image srcSet
  generateSrcSet: (baseUrl: string, sizes: number[] = [320, 640, 768, 1024, 1280, 1920]) => {
    return sizes.map(size => `${baseUrl}?w=${size} ${size}w`).join(', ');
  },

  // Get optimal image format based on browser support
  getOptimalFormat: (userAgent: string): 'webp' | 'avif' | 'jpg' => {
    if (userAgent.includes('Chrome') && !userAgent.includes('Edge')) return 'avif';
    if (userAgent.includes('Chrome') || userAgent.includes('Firefox')) return 'webp';
    return 'jpg';
  },

  // Lazy loading intersection observer options
  lazyLoadOptions: {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  }
};

// Caching utilities
export const cacheOptimization = {
  // Set cache headers for static assets
  setStaticAssetHeaders: (response: NextResponse, maxAge: number = 31536000) => {
    response.headers.set('Cache-Control', `public, max-age=${maxAge}, immutable`);
    response.headers.set('Expires', new Date(Date.now() + maxAge * 1000).toUTCString());
    return response;
  },

  // Set cache headers for API responses
  setApiCacheHeaders: (response: NextResponse, maxAge: number = 300) => {
    response.headers.set('Cache-Control', `public, max-age=${maxAge}, s-maxage=${maxAge}`);
    return response;
  },

  // Generate ETag for content
  generateETag: (content: string): string => {
    const hash = require('crypto').createHash('md5').update(content).digest('hex');
    return `"${hash}"`;
  }
};

// Bundle optimization utilities
export const bundleOptimization = {
  // Dynamic import wrapper with error handling
  dynamicImport: async <T>(importFn: () => Promise<T>): Promise<T | null> => {
    try {
      return await importFn();
    } catch (error) {
      console.error('Dynamic import failed:', error);
      return null;
    }
  },

  // Preload critical resources
  preloadResource: (href: string, as: string, type?: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      document.head.appendChild(link);
    }
  },

  // Prefetch next page resources
  prefetchPage: (href: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    }
  }
};

// Memory optimization utilities
export const memoryOptimization = {
  // Debounce function to limit function calls
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function to limit function calls
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Cleanup function for removing event listeners
  cleanup: (element: Element, eventType: string, handler: EventListener) => {
    element.removeEventListener(eventType, handler);
  }
};

// Network optimization utilities
export const networkOptimization = {
  // Check network connection quality
  getConnectionQuality: (): 'slow' | 'fast' | 'unknown' => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection.effectiveType === '4g') return 'fast';
      if (connection.effectiveType === '3g' || connection.effectiveType === '2g') return 'slow';
    }
    return 'unknown';
  },

  // Adaptive loading based on connection
  shouldLoadHighQuality: (): boolean => {
    const quality = networkOptimization.getConnectionQuality();
    return quality === 'fast' || quality === 'unknown';
  },

  // Service worker registration
  registerServiceWorker: async (): Promise<boolean> => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js');
        return true;
      } catch (error) {
        console.error('Service worker registration failed:', error);
        return false;
      }
    }
    return false;
  }
};

// Performance monitoring utilities
export const performanceMonitoring = {
  // Measure and report Core Web Vitals
  measureWebVitals: () => {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  },

  // Performance observer for monitoring
  observePerformance: (callback: (entries: PerformanceEntry[]) => void) => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      return observer;
    }
    return null;
  }
};

export default {
  imageOptimization,
  cacheOptimization,
  bundleOptimization,
  memoryOptimization,
  networkOptimization,
  performanceMonitoring
};