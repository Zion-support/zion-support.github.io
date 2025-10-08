/**
 * Enhanced Performance Monitoring
 * Comprehensive performance tracking and optimization utilities
 */

import type { PerformanceMetrics } from '../types/app.types';

/**
 * Performance Observer Wrapper
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
   * Initialize performance observers
   */
  private initializeObservers(): void {
    // Monitor navigation timing
    if (PerformanceObserver.supportedEntryTypes.includes('navigation')) {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric('navigation', entry.duration);
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    }
    
    // Monitor resource timing
    if (PerformanceObserver.supportedEntryTypes.includes('resource')) {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric('resource', entry.duration);
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    }
    
    // Monitor paint timing
    if (PerformanceObserver.supportedEntryTypes.includes('paint')) {
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric(entry.name, entry.startTime);
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    }
    
    // Monitor largest contentful paint
    if (PerformanceObserver.supportedEntryTypes.includes('largest-contentful-paint')) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this.recordMetric('lcp', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    }
    
    // Monitor first input delay
    if (PerformanceObserver.supportedEntryTypes.includes('first-input')) {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming;
const fid = fidEntry.processingStart - fidEntry.startTime;
          this.recordMetric('fid', fid);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    }
    
    // Monitor layout shift
    if (PerformanceObserver.supportedEntryTypes.includes('layout-shift')) {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShift;
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
   * Record a metric
   */
  private recordMetric(name: string, value: number): void {
    const values = this.metrics.get(name) || [];
    values.push(value);
    this.metrics.set(name, values);
  }
  
  /**
   * Get Web Vitals metrics
   */
  getWebVitals(): Partial<PerformanceMetrics> {
    return {
      fcp: this.getMetric('first-contentful-paint'),
      lcp: this.getMetric('lcp'),
      fid: this.getMetric('fid'),
      cls: this.getMetric('cls'),
      ttfb: this.getTTFB(),
    };
  }
  
  /**
   * Get a specific metric
   */
  getMetric(name: string): number {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) return 0;
    
    // Return the most recent value
    return values[values.length - 1];
  }
  
  /**
   * Get average of a metric
   */
  getAverageMetric(name: string): number {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) return 0;
    
const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  }
  
  /**
   * Get Time to First Byte
   */
  private getTTFB(): number {
    if (typeof window === 'undefined') return 0;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return 0;
    
    return navigation.responseStart - navigation.requestStart;
  }
  
  /**
   * Mark a custom timing
   */
  mark(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
    }
  }
  
  /**
   * Measure between two marks
   */
  measure(name: string, startMark: string, endMark: string): number {
    if (typeof performance === 'undefined' || !performance.measure) return 0;
    
    try {
      performance.measure(name, startMark, endMark);
      const measures = performance.getEntriesByName(name, 'measure');
      return measures[measures.length - 1]?.duration || 0;
    } catch (error) {
//       console.error('Performance measurement failed:', error);
      return 0;
    }
  }
  
  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics.clear();
    if (typeof performance !== 'undefined' && performance.clearMarks) {
      performance.clearMarks();
      performance.clearMeasures();
    }
  }
  
  /**
   * Get performance report
   */
  getReport(): PerformanceReport {
const webVitals = this.getWebVitals();
    
    return {
      webVitals,
      resources: this.getResourceStats(),
      memory: this.getMemoryStats(),
      timestamp: Date.now(),
    };
  }
  
  /**
   * Get resource loading statistics
   */
  private getResourceStats(): ResourceStats {
    if (typeof performance === 'undefined') {
      return { total: 0, scripts: 0, styles: 0, images: 0, fonts: 0 };
    }
    
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    return {
      total: resources.length,
      scripts: resources.filter(r => r.initiatorType === 'script').length,
      styles: resources.filter(r => r.initiatorType === 'css' || r.initiatorType === 'link').length,
      images: resources.filter(r => r.initiatorType === 'img').length,
      fonts: resources.filter(r => r.initiatorType === 'font').length,
    };
  }
  
  /**
   * Get memory statistics
   */
  private getMemoryStats(): MemoryStats | null {
    if (typeof performance === 'undefined' || !('memory' in performance)) {
      return null;
    }
    
    const memory = (performance as PerformanceWithMemory).memory;
    
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    };
  }
  
  /**
   * Disconnect all observers
   */
  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// ============================================================================
// Types
// ============================================================================

interface PerformanceReport {
  webVitals: Partial<PerformanceMetrics>;
  resources: ResourceStats;
  memory: MemoryStats | null;
  timestamp: number;
}

interface ResourceStats {
  total: number;
  scripts: number;
  styles: number;
  images: number;
  fonts: number;
}

interface MemoryStats {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface PerformanceWithMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Measure function execution time
 */
export function measureExecutionTime<T extends (...args: unknown[]) => any>(
  fn: T,
  label?: string
): T {
  return ((...args: Parameters<T>): ReturnType<T> => {
const start = performance.now();
const result = fn(...args);
const end = performance.now();
    
//     console.log(`${label || fn.name} took ${(end - start).toFixed(2)}ms`);
    
    return result;
  }) as T;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: unknown[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  
  return (...args: Parameters<T>) => {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

/**
 * Request idle callback wrapper
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
 * Default performance monitor instance
 */
export const performanceMonitor = new PerformanceMonitor();

export default PerformanceMonitor;