import React from 'react';
// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.initializeObservers();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeObservers(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Monitor Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.set('lcp', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (e) {

    }

    // Monitor First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: React.MouseEvent<HTMLElement>) => {
          this.metrics.set('fid', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (e) {

    }

    // Monitor Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.set('cls', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (e) {

    }
  }

  public getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public getCoreWebVitals(): {
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  } {
    const metrics = this.getMetrics();
    const vitals: React.MouseEvent<HTMLElement> = {};

    // Get FCP from performance API
    if (typeof window !== 'undefined' && 'performance' in window) {
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        vitals.fcp = fcpEntry.startTime;
      }

      // Get TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        vitals.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }
    }

    return {
      ...vitals,
      lcp: metrics.lcp,
      fid: metrics.fid,
      cls: metrics.cls,
    };
  }

  public reportMetrics(): void {
    const vitals = this.getCoreWebVitals();

    // Send to analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      Object.entries(vitals).forEach(([metric, value]) => {
        if (value !== undefined) {
          (window as Window & typeof globalThis).gtag('event', metric, {
            event_category: 'Web Vitals',
            value: Math.round(value),
            non_interaction: true,
          });
        }
      });
    }
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Initialize performance monitoring
export const performanceMonitor = PerformanceMonitor.getInstance();

// Report metrics after page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.reportMetrics();
    }, 1000);
  });
}