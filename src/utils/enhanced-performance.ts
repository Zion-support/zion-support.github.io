/**
 * Enhanced Performance Monitoring;
 * Comprehensive performance tracking and optimization utilities;
 */

import type { PerformanceMetrics } from '../../app/utils/performanceOptimizer';
/**
 * Performance Observer Wrapper;
 */
export class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  private observers: PerformanceObserver[] = [];
  
  constructor() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      this.initializeObservers();
    }
  }
  
  /**
   * Initialize performance observers;
   */
  private initializeObservers(): void {
    // Monitor navigation timing;
    if (PerformanceObserver.supportedEntryTypes.includes('navigation')) {
              }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    }
    
    // Monitor resource timing;
    if (PerformanceObserver.supportedEntryTypes.includes('resource')) {
              }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    }
    
    // Monitor paint timing;
    if (PerformanceObserver.supportedEntryTypes.includes('paint')) {
              }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    }
    
    // Monitor largest contentful paint;
    if (PerformanceObserver.supportedEntryTypes.includes('largest-contentful-paint')) {
                      if (lastEntry) {
          this.recordMetric('lcp', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    }
    
    // Monitor first input delay;
    if (PerformanceObserver.supportedEntryTypes.includes('first-input')) {
                          this.recordMetric('fid', fid);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    }
    
    // Monitor layout shift;
    if (PerformanceObserver.supportedEntryTypes.includes('layout-shift')) {
                      if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
            this.recordMetric('cls', clsValue);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    }
  }
  
  /**
   * Record a metric;
   */
  private recordMetric(name: string, value: number): void {
        values.push(value);
    this.metrics.set(name, values);
  }
  
  /**
   * Get Web Vitals metrics;
   */
  getWebVitals(): Partial<PerformanceMetrics> {
    return {
      fcp: this.getMetric('first-contentful-paint'),
      lcp: this.getMetric('lcp'),
      fid: this.getMetric('fid'),
      cls: this.getMetric('cls'),
      ttfb: this.getTTFB(),
    }
  }
  
  /**
   * Get a specific metric;
   */
  getMetric(name: string): number {
        if (!values || values.length === 0) return 0;
    
    // Return the most recent value;
    return values[values.length - 1];
  }
  
  /**
   * Get average of a metric;
   */
  getAverageMetric(name: string): number {
        if (!values || values.length === 0) return 0;
    
        return sum / values.length;
  }
  
  /**
   * Get Time to First Byte;
   */
  private getTTFB(): number {
    if (typeof window === 'undefined') return 0;
    
        if (!navigation) return 0;
    
    return navigation.responseStart - navigation.requestStart;
  }
  
  /**
   * Mark a custom timing;
   */
  mark(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
    }
  }
  
  /**
   * Measure between two marks;
   */
  measure(name: string, startMark: string, endMark: string): number {
    if (typeof performance === 'undefined' || !performance.measure) return 0;
    
    try {
      performance.measure(name, startMark, endMark);
            return measures[measures.length - 1]?.duration || 0;
    } catch (error) {
//       // console.error('Performance measurement failed:', error);
      return 0;
    }
  }
  
  /**
   * Clear all metrics;
   */
  clear(): void {
    this.metrics.clear();
    if (typeof performance !== 'undefined' && performance.clearMarks) {
      performance.clearMarks();
      performance.clearMeasures();
    }
  }
  
  /**
   * Get performance report;
   */
  getReport(): PerformanceReport {
        return {
      webVitals,
      resources: this.getResourceStats(),
      memory: this.getMemoryStats(),
      timestamp: Date.now(),
    }
  }
  
  /**
   * Get resource loading statistics;
   */
  private getResourceStats(): ResourceStats {
    if (typeof performance === 'undefined') {
      return { total: 0, scripts: 0, styles: 0, images: 0, fonts: 0 }
    }
    
        return {
      total: resources.length,
      scripts: resources.filter(r => r.initiatorType === 'script').length,
      styles: resources.filter(r => r.initiatorType === 'css' || r.initiatorType === 'link').length,
      images: resources.filter(r => r.initiatorType === 'img').length,
      fonts: resources.filter(r => r.initiatorType === 'font').length,
    }
  }
  
  /**
   * Get memory statistics;
   */
  private getMemoryStats(): MemoryStats | null {
    if (typeof performance === 'undefined' || !('memory' in performance)) {
      return null;
    }
    
        return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    }
  }
  
  /**
   * Disconnect all observers;
   */
  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Types;
import type { 
  PerformanceReport, 
  ResourceStats, 
  MemoryStats, 
  PerformanceWithMemory, 
  LayoutShift;
} from '../types/app.types';

// Utility Functions;
/**
 * Measure function execution time;
 */
export function measureExecutionTime<T extends (...args: unknown[]) => any>(
  fn: T,
  label?: string;
): T {
  return ((...args: Parameters<T>): ReturnType<T> => {
                // console.log(`Function ${fn.name} took ${(end - start).toFixed(2)}ms`);
    
    return result;
  }) as T;
}

/**
 * Debounce function;
 */
export function debounce<T extends (...args: unknown[]) => any>(
  fn: T,
  delay: number;
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

/**
 * Throttle function;
 */
export function throttle<T extends (...args: unknown[]) => any>(
  fn: T,
  delay: number;
): (...args: Parameters<T>) => void {
    return (...args: Parameters<T>) => {
        if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  }
}

/**
 * Request idle callback wrapper;
 */
export function runWhenIdle(callback: () => void, timeout = 1000): void {
  if (typeof window === 'undefined') {
    callback();
    return;
  }
  
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 0);
  }
}

/**
 * Default performance monitor instance;
 */
export export default PerformanceMonitor;
