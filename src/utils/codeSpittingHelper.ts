/**
 * Code Splitting Helper Utilities
 * 
 * Provides utilities for intelligent code splitting and lazy loading
 */

import { lazy, ComponentType } from 'react';

/**
 * Retry mechanism for lazy-loaded components
 * Useful for handling network errors during chunk loading
 */
export const lazyWithRetry = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  retries = 3,
  interval = 1000
): React.LazyExoticComponent<T> => {
  return lazy(() =>
    new Promise<{ default: T }>((resolve, reject) => {
      const attemptImport = async (retriesLeft: number) => {
        try {
          const module = await importFunc();
          resolve(module);
        } catch (error) {
          if (retriesLeft > 0) {
            console.warn(
              `Failed to load component, retrying... (${retriesLeft} attempts left)`
            );
            setTimeout(() => attemptImport(retriesLeft - 1), interval);
          } else {
            console.error('Failed to load component after multiple retries');
            reject(error);
          }
        }
      };

      attemptImport(retries);
    })
  );
};

/**
 * Preload a lazy component
 * Useful for prefetching components before they're needed
 */
export const preloadComponent = (
  importFunc: () => Promise<any>
): Promise<void> => {
  return importFunc().then(() => {}).catch((error) => {
    console.error('Failed to preload component:', error);
  });
};

/**
 * Route-based code splitting helper
 * Creates lazy-loaded route components with error boundaries
 */
export const createLazyRoute = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazyWithRetry(importFunc);
  
  return {
    Component: LazyComponent,
    preload: () => preloadComponent(importFunc),
  };
};

/**
 * Intersection Observer hook for lazy loading components when visible
 */
export const useLazyLoadOnVisible = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  options?: IntersectionObserverInit
): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.01,
      ...options,
    }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  return () => observer.disconnect();
};

/**
 * Bundle size analyzer helper
 * Logs component bundle sizes in development
 */
export const logBundleSize = (componentName: string): void => {
  if (process.env.NODE_ENV !== 'development') return;

  const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  const jsChunks = entries.filter(
    (entry) => entry.name.includes('.js') && entry.name.includes('chunk')
  );

  if (jsChunks.length > 0) {
    const latestChunk = jsChunks[jsChunks.length - 1];
    const sizeMB = (latestChunk.transferSize / 1024 / 1024).toFixed(2);
    console.log(`📦 ${componentName} bundle size: ${sizeMB} MB`);
  }
};

/**
 * Smart preloading strategy
 * Preloads components based on user behavior and connection speed
 */
export const createSmartPreloader = () => {
  const preloadQueue: Array<() => Promise<any>> = [];
  let isPreloading = false;

  const getConnectionSpeed = (): 'slow' | 'fast' | 'unknown' => {
    if (typeof navigator === 'undefined') return 'unknown';
    
    const connection = (navigator as any).connection;
    if (!connection) return 'unknown';

    const effectiveType = connection.effectiveType;
    return effectiveType === '4g' || effectiveType === '5g' ? 'fast' : 'slow';
  };

  const shouldPreload = (): boolean => {
    const speed = getConnectionSpeed();
    return speed === 'fast' || speed === 'unknown';
  };

  const processQueue = async () => {
    if (isPreloading || preloadQueue.length === 0) return;
    if (!shouldPreload()) return;

    isPreloading = true;

    while (preloadQueue.length > 0) {
      const importFunc = preloadQueue.shift();
      if (importFunc) {
        try {
          await importFunc();
          // Small delay between preloads to avoid overwhelming the network
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          console.error('Preload error:', error);
        }
      }
    }

    isPreloading = false;
  };

  return {
    add: (importFunc: () => Promise<any>) => {
      preloadQueue.push(importFunc);
      // Start processing after idle
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => processQueue());
      } else {
        setTimeout(() => processQueue(), 0);
      }
    },
    clear: () => {
      preloadQueue.length = 0;
    },
  };
};

/**
 * Export a singleton smart preloader
 */
export const smartPreloader = createSmartPreloader();
