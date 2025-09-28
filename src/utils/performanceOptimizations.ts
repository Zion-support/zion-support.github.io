/**
 * Advanced Performance Optimizations
 * Collection of utilities for optimizing React application performance
 */

import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react';

/**
 * Debounce hook for optimizing expensive operations
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Throttle hook for limiting function execution frequency
 */
export function useThrottle<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): T {
  const lastRun = useRef(Date.now());

  return useCallback(
    (...args: Parameters<T>) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = Date.now();
      }
    },
    [callback, delay]
  ) as T;
}

/**
 * Memoized value with custom equality check
 */
export function useDeepMemo<T>(
  factory: () => T,
  deps: React.DependencyList
): T {
  const ref = useRef<{ deps: React.DependencyList; value: T } | undefined>(undefined);

  if (!ref.current || !deepEqual(ref.current.deps, deps)) {
    ref.current = { deps, value: factory() };
  }

  return ref.current.value;
}

/**
 * Deep equality check for dependency arrays
 */
function deepEqual(a: React.DependencyList, b: React.DependencyList): boolean {
  if (a.length !== b.length) return false;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (typeof a[i] === 'object' && typeof b[i] === 'object') {
        if (!deepEqualObject(a[i] as Record<string, unknown>, b[i] as Record<string, unknown>)) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  
  return true;
}

function deepEqualObject(a: Record<string, unknown>, b: Record<string, unknown>): boolean {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) return false;
  
  for (const key of keysA) {
    if (a[key] !== b[key]) {
      if (typeof a[key] === 'object' && typeof b[key] === 'object') {
        if (!deepEqualObject(a[key], b[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  
  return true;
}

/**
 * Virtual scrolling hook for large lists
 */
export function useVirtualScroll<T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  overscan: number = 5
) {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleRange = useMemo(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const end = Math.min(
      items.length - 1,
      Math.floor((scrollTop + containerHeight) / itemHeight) + overscan
    );
    
    return {
      start: Math.max(0, start - overscan),
      end
    };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.start, visibleRange.end + 1);
  }, [items, visibleRange]);

  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;

  return {
    visibleItems,
    totalHeight,
    offsetY,
    setScrollTop
  };
}

/**
 * Performance monitoring hook
 */
export function usePerformanceMonitor(componentName: string) {
  const renderStart = useRef<number>(0);
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderStart.current = performance.now();
    renderCount.current += 1;

    return () => {
      const renderTime = performance.now() - renderStart.current;
      
      if (renderTime > 16) { // More than one frame (60fps)
        console.warn(
          `Performance warning: ${componentName} render took ${renderTime.toFixed(2)}ms`
        );
      }
    };
  });

  return {
    renderCount: renderCount.current
  };
}

/**
 * Resource preloading utility
 */
export function useResourcePreloader() {
  const preloadedResources = useRef<Set<string>>(new Set());

  const preloadImage = useCallback((src: string) => {
    if (preloadedResources.current.has(src)) return;

    const img = new Image();
    img.src = src;
    preloadedResources.current.add(src);
  }, []);

  const preloadScript = useCallback((src: string) => {
    if (preloadedResources.current.has(src)) return;

    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = src;
    document.head.appendChild(link);
    preloadedResources.current.add(src);
  }, []);

  const preloadStylesheet = useCallback((href: string) => {
    if (preloadedResources.current.has(href)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
    preloadedResources.current.add(href);
  }, []);

  return {
    preloadImage,
    preloadScript,
    preloadStylesheet
  };
}

/**
 * Bundle size optimization utilities
 */
export const bundleOptimizations = {
  /**
   * Lazy load routes for code splitting
   */
  createLazyRoute: (importFunc: () => Promise<{ default: React.ComponentType<unknown> }>) => {
    return React.lazy(importFunc);
  },

  /**
   * Preload critical routes
   */
  preloadRoute: (importFunc: () => Promise<{ default: React.ComponentType<unknown> }>) => {
    return () => importFunc();
  },

  /**
   * Dynamic imports with error handling
   */
  safeImport: async (importFunc: () => Promise<unknown>, fallback?: unknown) => {
    try {
      return await importFunc();
    } catch (error) {
      console.error('Failed to import module:', error);
      return fallback;
    }
  }
};

/**
 * Memory optimization utilities
 */
export const memoryOptimizations = {
  /**
   * WeakMap for storing component state without memory leaks
   */
  createWeakState: () => new WeakMap(),

  /**
   * Cleanup function registry
   */
  createCleanupRegistry: () => {
    const cleanupFunctions = new Set<() => void>();
    
    return {
      register: (cleanup: () => void) => {
        cleanupFunctions.add(cleanup);
        return () => cleanupFunctions.delete(cleanup);
      },
      cleanup: () => {
        cleanupFunctions.forEach(cleanup => cleanup());
        cleanupFunctions.clear();
      }
    };
  }
};


/**
 * Memory usage monitoring
 */
export function getMemoryUsage(): { used: number; total: number; limit: number } | null {
  if ('memory' in performance) {
    const memory = (performance as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit
    };
  }
  return null;
}

/**
 * Collect performance metrics
 */
export function collectPerformanceMetrics() {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paintEntries = performance.getEntriesByType('paint');
  
  const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
  const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
  
  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    domInteractive: navigation.domInteractive - navigation.fetchStart,
    firstContentfulPaint: fcp ? fcp.startTime : 0,
    largestContentfulPaint: lcp ? lcp.startTime : 0,
    memory: getMemoryUsage()
  };
}

/**
 * Check performance budget
 */
export function checkPerformanceBudget(metrics: Record<string, unknown> = {}): string[] {
  const violations: string[] = [];
  
  if (metrics.loadTime > 3000) {
    violations.push('Page load time exceeds 3s budget');
  }
  
  if (metrics.firstContentfulPaint > 1800) {
    violations.push('First Contentful Paint exceeds 1.8s budget');
  }
  
  if (metrics.largestContentfulPaint > 2500) {
    violations.push('Largest Contentful Paint exceeds 2.5s budget');
  }
  
  if (metrics.memory && metrics.memory.used > metrics.memory.limit * 0.8) {
    violations.push('Memory usage exceeds 80% of limit');
  }
  
  return violations;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}