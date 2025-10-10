'use client';
/**
 * Performance Enhancement Utilities
 * Advanced performance optimization tools for the application
 */
import React from 'react';
import { useEffect, useRef } from 'react';

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Track component render time
  trackRender(componentName: string, renderTime: number) {
    this.metrics.set(`${componentName}_render`, renderTime);
    if (process.env['NODE_ENV'] === 'development') {
      }
  }

  // Track API call duration
  trackApiCall(endpoint: string, duration: number) {
    this.metrics.set(`api_${endpoint}`, duration);
    if (process.env['NODE_ENV'] === 'development') {
      }
  }

  // Track user interaction
  trackInteraction(action: string, duration: number) {
    this.metrics.set(`interaction_${action}`, duration);
    if (process.env['NODE_ENV'] === 'development') {
      }
  }

  // Get all metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  }

  // Start observing performance entries
  startObserving(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Observe paint timing
    try {
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            this.metrics.set(`paint_${entry.name}`, entry.startTime);
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    } catch (error) {
      }

    // Observe navigation timing
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.metrics.set('dom_content_loaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
            this.metrics.set('load_complete', navEntry.loadEventEnd - navEntry.loadEventStart);
          }
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch (error) {
      }
  }

  // Stop observing
  stopObserving(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const monitor = PerformanceMonitor.getInstance();
  const renderStart = useRef<number>(0);

  useEffect(() => {
    renderStart.current = performance.now();
  });

  useEffect(() => {
    const renderTime = performance.now() - renderStart.current;
    monitor.trackRender(componentName, renderTime);
  });
};

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const trackCLS = () => {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
    });
    observer.observe({ entryTypes: ['layout-shift'] });
    return () => {
      observer.disconnect();
      return clsValue;
    };
  };

  const trackLCP = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (process.env['NODE_ENV'] === 'development') {
          }
      }
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    return () => observer.disconnect();
  };

  const trackFID = () => {
    interface FirstInputEntry extends PerformanceEntry {
      processingStart: number;
    }
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as FirstInputEntry;
        const fid = fidEntry.processingStart - entry.startTime;
        if (process.env['NODE_ENV'] === 'development') {
          }
      }
    });
    observer.observe({ entryTypes: ['first-input'] });
    return () => observer.disconnect();
  };

  // Start tracking
  const stopCLS = trackCLS();
  const stopLCP = trackLCP();
  const stopFID = trackFID();

  // Return cleanup function
  return () => {
    stopCLS();
    stopLCP();
    stopFID();
  };
};

// Image lazy loading utility
export const useLazyImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder || '');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return { ref: imgRef, src: imageSrc, isLoaded };
};

// Code splitting utility
export const lazyLoadComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> => {
  return React.lazy(importFunc);
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }

  const memory = (performance as any).memory;
  return {
    used: memory.usedJSHeapSize,
    total: memory.totalJSHeapSize,
    limit: memory.jsHeapSizeLimit
  };
};

// Bundle size monitoring
export const trackBundleSize = () => {
  if (typeof window === 'undefined') return;

  const scripts = document.querySelectorAll('script[src]');
  let totalSize = 0;

  scripts.forEach(script => {
    const src = script.getAttribute('src');
    if (src && src.includes('chunk')) {
      // This is a simplified approach - in reality you'd need to fetch and measure
      totalSize += 1000; // Placeholder
    }
  });

  if (process.env['NODE_ENV'] === 'development') {
    }

  return totalSize;
};

export default PerformanceMonitor;