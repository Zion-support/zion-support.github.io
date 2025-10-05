// Performance optimization utilities
import { lazy } from 'react';

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

export function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(srcs.map(preloadImage));
}

export function getImageOptimizedUrl(
  src: string,
  width?: number,
  quality = 80,
): string {
  // Add image optimization logic here
  // This is a placeholder for actual optimization service
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());

  return `${src}?${params.toString()}`;
}

export function lazyLoadComponent<T extends React.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
): React.LazyExoticComponent<T> {
  return lazy(importFunc);
}

export function measurePerformance(name: string, fn: () => void): void {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
}

export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
): IntersectionObserver {
  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  });
}
