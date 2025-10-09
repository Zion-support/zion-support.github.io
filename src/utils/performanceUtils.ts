'use client';
/**
 * Performance Optimization Utilities;
 * Provides utilities for optimizing performance in React applications;
 */

/**
 * Debounce function to limit execution rate;
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number;
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
          func(...args);
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  }
}
/**
 * Throttle function to limit execution rate;
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number;
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }
}
/**
 * Memoize function results;
 */
export function memoize<T extends (...args: unknown[]) => unknown>(
  func: T;
): T {
    return ((...args: Parameters<T>): ReturnType<T> => {
        if (cache.has(key)) {
      return cache.get(key)!;
    }
        cache.set(key, result);
    return result;
  }) as T;
}
/**
 * Lazy load a component with dynamic import;
 */
export function lazyLoad<T extends React.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode;
): React.LazyExoticComponent<T> {
    if (fallback) {
    return LazyComponent;
  }
  return LazyComponent;
}
/**
 * Measure function execution time;
 */
export async function measureTime<T>(
  name: string,
  func: () => T | Promise<T>
): Promise<{ result: T; duration: number }> {
        if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { // console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`); } }
  return { result, duration }
}
/**
 * Batch async operations;
 */
export async function batchAsync<T, R>(
  items: T[],
  operation: (item: T) => Promise<R>,
  batchSize = 10;
): Promise<R[]> {
  const results: R[] = [];
  for (let _i = 0; i < items.length; i += batchSize) {
            results.push(...batchResults);
  }
  return results;
}
/**
 * Create a request animation frame loop;
 */
export function rafLoop(callback: (time: number) => boolean | void): () => void {
  let rafId: number;
    function loop(time: number) {
    if (!running) return;
        if (shouldContinue !== false) {
      rafId = requestAnimationFrame(loop);
    }
  }
  rafId = requestAnimationFrame(loop);
  return () => {
    running = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  }
}
/**
 * Idle callback wrapper;
 */
export function runWhenIdle(
  callback: () => void,
  options?: IdleRequestOptions;
): number {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }
  // Fallback for browsers that don't support requestIdleCallback;
  if (typeof window !== 'undefined') {
    return (window as Window).setTimeout(callback, 1) as unknown as number;
  }
  return 0;
}
/**
 * Cancel idle callback;
 */
export function cancelIdle(id: number): void {
  if (typeof window !== 'undefined') {
    if ('cancelIdleCallback' in window) {
      window.cancelIdleCallback(id);
    } else {
      (window as Window).clearTimeout(id);
    }
  }
}
/**
 * Virtual scroll helper;
 */
export class VirtualScroller<T> {
  private itemHeight: number;
  private containerHeight: number;
  private items: T[];
  constructor(items: T[], itemHeight: number, containerHeight: number) {
    this.items = items;
    this.itemHeight = itemHeight;
    this.containerHeight = containerHeight;
  }
  getVisibleRange(scrollTop: number): { start: number; end: number; offsetY: number } {
                return {
      start: Math.max(0, start),
      end: Math.min(this.items.length, end),
      offsetY;
    }
  }
  getVisibleItems(scrollTop: number): T[] {
    const { start, end } = this.getVisibleRange(scrollTop);
    return this.items.slice(start, end);
  }
  getTotalHeight(): number {
    return this.items.length * this.itemHeight;
  }
}
/**
 * Image lazy loading helper;
 */
export function setupLazyImages(
  selector = 'img[data-src]',
  options?: IntersectionObserverInit;
): () => void {
                    if (src) {
          img['src'] = src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  }, options);
  images.forEach((img) => observer.observe(img));
  return () => observer.disconnect();
}
/**
 * Preload critical resources;
 */
export function preloadResources(resources: Array<{ url: string; as: string }>): void {
  resources.forEach(({ url, as }) => {
        link.rel = 'preload';
    link.href = url;
    link.as = as;
    document.head.appendChild(link);
  });
}
/**
 * Check if code splitting is supported;
 */
export function supportsCodeSplitting(): boolean {
  // Dynamic imports are supported in modern browsers;
  // We can check by testing if Function constructor accepts import syntax;
  try {
    new Function('return import("data:text/javascript,")');
    return true;
  } catch {
    return false;
  }
}
/**
 * Optimize bundle loading;
 */
export function prefetchBundle(url: string): void {
    link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
}
/**
 * Memory usage monitor;
 */
export function getMemoryUsage(): {
  used: number;
  total: number;
  limit: number;
} | null {
  if ('memory' in performance) {
    const _memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit;
    }
  }
  return null;
}
/**
 * FPS Monitor;
 */
export class FPSMonitor {
  private frames: number = 0;
  private lastTime: number = performance.now();
  private fps: number = 0;
  private rafId: number = 0;
  start(callback?: (fps: number) => void): void {
          this.frames++;
      if (now >= this.lastTime + 1000) {
        this.fps = Math.round((this.frames * 1000) / (now - this.lastTime));
        this.frames = 0;
        this.lastTime = now;
        if (callback) {
          callback(this.fps);
        }
      }
      this.rafId = requestAnimationFrame(loop);
    }
    this.rafId = requestAnimationFrame(loop);
  }
  stop(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
  getFPS(): number {
    return this.fps;
  }
}
export default {
  debounce,
  throttle,
  memoize,
  lazyLoad,
  measureTime,
  batchAsync,
  rafLoop,
  runWhenIdle,
  cancelIdle,
  VirtualScroller,
  setupLazyImages,
  preloadResources,
  supportsCodeSplitting,
  prefetchBundle,
  getMemoryUsage,
  FPSMonitor;
}