/**
 * Code Splitting and Lazy Loading Optimization Utilities
 */

import { lazy, ComponentType, LazyExoticComponent } from 'react';

export interface LoadingOptions {
  /**
   * Delay before showing loading state (prevents flash of loading)
   */
  delay?: number;

  /**
   * Timeout for loading component
   */
  timeout?: number;

  /**
   * Retry attempts on failure
   */
  retries?: number;

  /**
   * Delay between retries (ms)
   */
  retryDelay?: number;
}

export interface PreloadOptions {
  /**
   * Preload on hover
   */
  onHover?: boolean;

  /**
   * Preload on viewport visibility
   */
  onVisible?: boolean;

  /**
   * Priority for preloading
   */
  priority?: 'high' | 'medium' | 'low';
}

/**
 * Enhanced lazy loading with retry logic
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: LoadingOptions = {}
): LazyExoticComponent<T> {
  const {
    retries = 3,
    retryDelay = 1000,
    timeout = 10000,
  } = options;

  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
      let attempts = 0;
      const timeoutId = setTimeout(() => {
        reject(new Error(`Timeout loading component after ${timeout}ms`));
      }, timeout);

      const attemptLoad = async () => {
        try {
          const result = await importFunc();
          clearTimeout(timeoutId);
          resolve(result);
        } catch (error) {
          attempts++;

          if (attempts >= retries) {
            clearTimeout(timeoutId);
            reject(
              new Error(
                `Failed to load component after ${attempts} attempts: ${error}`
              )
            );
            return;
          }

          // Wait before retrying
          setTimeout(attemptLoad, retryDelay * attempts);
        }
      };

      attemptLoad();
    });
  });
}

/**
 * Preload a lazy component
 */
export function preloadComponent<T extends ComponentType<any>>(
  lazyComponent: LazyExoticComponent<T>
): Promise<void> {
  // Access the _init method to trigger preload
  const component = lazyComponent as any;
  if (component._init) {
    return component._init(component._payload);
  }
  return Promise.resolve();
}

/**
 * Lazy load with automatic preloading
 */
export function lazyWithPreload<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  preloadOptions: PreloadOptions = {}
): LazyExoticComponent<T> & { preload: () => Promise<void> } {
  const lazyComponent = lazy(importFunc);
  let preloadPromise: Promise<void> | null = null;

  const preload = () => {
    if (!preloadPromise) {
      preloadPromise = preloadComponent(lazyComponent);
    }
    return preloadPromise;
  };

  // Add preload method to component
  (lazyComponent as any).preload = preload;

  return lazyComponent as LazyExoticComponent<T> & { preload: () => Promise<void> };
}

/**
 * Create route-based code splitting configuration
 */
export interface RouteConfig {
  path: string;
  component: () => Promise<{ default: ComponentType<any> }>;
  preload?: boolean;
  priority?: 'high' | 'medium' | 'low';
}

export function createRouteSplitting(routes: RouteConfig[]) {
  const lazyRoutes = routes.map((route) => ({
    ...route,
    Component: lazyWithPreload(route.component, {
      priority: route.priority || 'medium',
    }),
  }));

  /**
   * Preload routes based on priority
   */
  const preloadRoutes = (priority: 'high' | 'medium' | 'low' = 'high') => {
    lazyRoutes
      .filter((route) => route.preload && route.priority === priority)
      .forEach((route) => {
        if (route.Component.preload) {
          route.Component.preload();
        }
      });
  };

  /**
   * Preload route by path
   */
  const preloadRoute = (path: string) => {
    const route = lazyRoutes.find((r) => r.path === path);
    if (route && route.Component.preload) {
      route.Component.preload();
    }
  };

  return {
    routes: lazyRoutes,
    preloadRoutes,
    preloadRoute,
  };
}

/**
 * Dynamic chunk loading with prefetch
 */
export function prefetchChunk(chunkName: string): void {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'script';
  link.href = `/chunks/${chunkName}.js`;
  document.head.appendChild(link);
}

/**
 * Monitor chunk loading performance
 */
export class ChunkLoadMonitor {
  private static chunks: Map<
    string,
    { startTime: number; endTime?: number; size?: number; error?: Error }
  > = new Map();

  static startLoad(chunkName: string): void {
    this.chunks.set(chunkName, { startTime: performance.now() });
  }

  static endLoad(chunkName: string, size?: number): void {
    const chunk = this.chunks.get(chunkName);
    if (chunk) {
      chunk.endTime = performance.now();
      chunk.size = size;
    }
  }

  static recordError(chunkName: string, error: Error): void {
    const chunk = this.chunks.get(chunkName);
    if (chunk) {
      chunk.error = error;
      chunk.endTime = performance.now();
    }
  }

  static getMetrics(chunkName: string) {
    const chunk = this.chunks.get(chunkName);
    if (!chunk) return null;

    const loadTime =
      chunk.endTime && chunk.startTime
        ? chunk.endTime - chunk.startTime
        : undefined;

    return {
      chunkName,
      loadTime,
      size: chunk.size,
      error: chunk.error,
      cached: loadTime !== undefined && loadTime < 50, // Likely from cache
    };
  }

  static getAllMetrics() {
    const metrics: Array<ReturnType<typeof ChunkLoadMonitor.getMetrics>> = [];
    for (const [chunkName] of this.chunks) {
      const m = this.getMetrics(chunkName); if (m) metrics.push(m);
    }
    return metrics.filter((m) => m !== null);
  }

  static clearMetrics(): void {
    this.chunks.clear();
  }
}

/**
 * Intelligent preloading based on user behavior
 */
export class IntelligentPreloader {
  private preloadedChunks: Set<string> = new Set();
  private hoverTimeout: NodeJS.Timeout | null = null;

  /**
   * Preload on hover with delay
   */
  onHover(
    element: HTMLElement,
    preloadFn: () => void,
    delay: number = 200
  ): () => void {
    const handleMouseEnter = () => {
      this.hoverTimeout = setTimeout(preloadFn, delay);
    };

    const handleMouseLeave = () => {
      if (this.hoverTimeout) {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = null;
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Return cleanup function
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (this.hoverTimeout) {
        clearTimeout(this.hoverTimeout);
      }
    };
  }

  /**
   * Preload on viewport visibility
   */
  onVisible(
    element: HTMLElement,
    preloadFn: () => void,
    threshold: number = 0.5
  ): () => void {
    if (!('IntersectionObserver' in window)) {
      return () => {};
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            preloadFn();
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    // Return cleanup function
    return () => observer.disconnect();
  }

  /**
   * Preload on idle
   */
  onIdle(preloadFn: () => void, timeout: number = 2000): () => void {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(preloadFn, { timeout });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(preloadFn, timeout);
      return () => clearTimeout(id);
    }
  }

  /**
   * Preload based on connection speed
   */
  preloadByConnection(preloadFn: () => void): void {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;

      // Only preload on fast connections
      if (
        connection.effectiveType === '4g' ||
        connection.effectiveType === '3g'
      ) {
        // Check if user has data saver enabled
        if (!connection.saveData) {
          preloadFn();
        }
      }
    } else {
      // If connection API not available, preload anyway
      preloadFn();
    }
  }

  /**
   * Track preloaded chunks
   */
  markAsPreloaded(chunkName: string): void {
    this.preloadedChunks.add(chunkName);
  }

  /**
   * Check if chunk is already preloaded
   */
  isPreloaded(chunkName: string): boolean {
    return this.preloadedChunks.has(chunkName);
  }

  /**
   * Clear preload cache
   */
  clearCache(): void {
    this.preloadedChunks.clear();
  }
}

/**
 * Bundle size analyzer
 */
export function analyzeBundleSize(): {
  totalSize: number;
  chunks: Array<{ name: string; size: number }>;
} {
  if (typeof window === 'undefined') {
    return { totalSize: 0, chunks: [] };
  }

  const scripts = Array.from(document.querySelectorAll('script[src]'));
  const chunks: Array<{ name: string; size: number }> = [];
  let totalSize = 0;

  scripts.forEach((script) => {
    const src = script.getAttribute('src');
    if (src) {
      // This is a rough estimate - in production, you'd track actual sizes
      const estimatedSize = src.length * 100; // Very rough estimate
      chunks.push({ name: src, size: estimatedSize });
      totalSize += estimatedSize;
    }
  });

  return { totalSize, chunks };
}

export default {
  lazyWithRetry,
  lazyWithPreload,
  preloadComponent,
  createRouteSplitting,
  prefetchChunk,
  ChunkLoadMonitor,
  IntelligentPreloader,
  analyzeBundleSize,
};