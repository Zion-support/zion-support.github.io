import type { PerformanceMetrics } from '../../app/utils/performanceOptimizer';
import type {
  
/**
 * Enhanced Performance Monitoring
 * Comprehensive performance tracking and optimization utilities
 */
 * Performance Observer Wrapper
export class PerformanceMonitor {
  
  private metrics: Map
          
          
          
          
          
          
          
          
          <string, number[]> = new Map();
  private observers: PerformanceObserver[] = [];
  constructor() {
  
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
  
      this.initializeObservers();
    }
   * Initialize performance observers
  private initializeObservers(): void {
  
    // Monitor navigation timing
    if (PerformanceObserver.supportedEntryTypes.includes('navigation')) {
        for (const entry of list.getEntries()) {
  
          this.recordMetric('navigation', entry.duration);
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
          this.recordMetric('resource', entry.duration);
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
          this.recordMetric(entry.name, entry.startTime);
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
          const fidEntry = entry as PerformanceEventTiming;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          this.recordMetric('fid', fid);
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
// Types
//   PerformanceReport,
//   ResourceStats,
//   MemoryStats,
//   PerformanceWithMemory,
//   LayoutShift
} from '../types/app.types';
// Utility Functions
 * Throttle function
export function throttle
          
          
          
          
          
          
          
          
          <T extends (...args: unknown[]) => any>(
 * Request idle callback wrapper
export function runWhenIdle(callback: () => void, timeout = 1000): void {
  
  if (typeof window === 'undefined') {
    return;
  if ('requestIdleCallback' in window) {
  
    window.requestIdleCallback(callback, { timeout });
  } else {
  
    setTimeout(callback, 0);
* Default performance monitor instance
export const performanceMonitor = new PerformanceMonitor();