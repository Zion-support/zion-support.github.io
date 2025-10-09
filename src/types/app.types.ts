/**
 * Application Type Definitions;
 * Centralized type definitions for the application;
 */

/**
 * Performance Metrics Interface;
 * Defines the structure for performance monitoring data;
 */
export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint;
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;
  fmp?: number; // First Meaningful Paint;
  customMetrics?: Record<string, number>;
}

/**
 * Performance Report Interface;
 * Complete performance report structure;
 */
export interface PerformanceReport {
  webVitals: Partial<PerformanceMetrics>;
  resources: ResourceStats;
  memory: MemoryStats | null;
  timestamp: number;
}

/**
 * Resource Statistics Interface;
 * Tracks resource loading statistics;
 */
export interface ResourceStats {
  total: number;
  script,

  s: number;
  style,

  s: number;
  image,

  s: number;
  font,

  s: number;
}

/**
 * Memory Statistics Interface;
 * Browser memory usage statistics;
 */
export interface MemoryStats {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

/**
 * Performance Alert Interface;
 * Structure for performance alerts and warnings;
 */
export interface PerformanceAlert {
  type: 'warning' | 'error' | 'info';
  message: string;
  metri,

  c: keyof PerformanceMetrics;
  valu,

  e: number;
  threshol,

  d: number;
  timestam,

  p: number;
}

/**
 * Layout Shift Interface;
 * Extends PerformanceEntry for layout shift tracking;
 */
export interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

/**
 * Performance with Memory Interface;
 * Extends Performance API with memory information;
 */
export interface PerformanceWithMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  }
}