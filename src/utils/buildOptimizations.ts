/**
 * Build and runtime optimization utilities
 */

// Lazy loading utilities
export const lazyImport = <T extends Record<string, any>>(
  factory: () => Promise<T>,
  name?: keyof T
) => {
  return React.lazy(() =>
    factory().then((module) => ({
      default: name ? module[name] : module.default || module,
    }))
  );
};

// Dynamic import with error boundary
export const dynamicImport = async <T>(
  importFn: () => Promise<T>,
  fallback?: T
): Promise<T> => {
  try {
    return await importFn();
  } catch (error) {
    console.error('Dynamic import failed:', error);
    if (fallback) {
      return fallback;
    }
    throw error;
  }
};

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  }
};

// Prefetch non-critical resources
export const prefetchResource = (href: string) => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }
};

// Critical CSS inlining helper
export const inlineCSS = (css: string) => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }
};

// Resource hints for better performance
export const addResourceHints = () => {
  if (typeof document !== 'undefined') {
    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.google-analytics.com',
      '//www.googletagmanager.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical origins
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }
};

// Bundle analyzer helper for development
export const analyzeBundle = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Bundle analysis available at build time with --analyze flag');
  }
};

// Tree shaking optimization hints
export const optimizeTreeShaking = {
  // Mark functions as side-effect free for better tree shaking
  markAsPure: <T extends (...args: unknown[]) => unknown>(fn: T): T => {
    // This is a hint for bundlers, actual implementation depends on build tools
    return fn;
  },
  
  // Dynamic imports for code splitting
  splitComponent: <T>(importFn: () => Promise<{ default: T }>) => {
    return React.lazy(importFn);
  }
};

// Runtime performance monitoring
export const runtimeOptimizations = {
  // Debounce function calls
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(null, args), wait);
    };
  },

  // Throttle function calls
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(null, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Memoization utility
  memoize: <T extends (...args: any[]) => any>(fn: T): T => {
    const cache = new Map();
    return ((...args: any[]) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }) as T;
  }
};

// Initialize optimizations
export const initOptimizations = () => {
  // Add resource hints
  addResourceHints();
  
  // Initialize performance monitoring if available
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Mark app initialization
    performance.mark('app-init-start');
  }
};

// Import React for lazy loading utilities
import React from 'react';