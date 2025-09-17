import React from 'react';
// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  };
  // Measure component render time
  measureRender(componentName: string, startTime: number): void {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    this.metrics.set(componentName, renderTime);
    // Log slow renders (> 100ms)
    if (renderTime > 100) {
      console.warn(`Slow render detected: ${componentName} took ${renderTime.toFixed(2)}ms`);
    }
  };
  // Measure bundle size impact
  measureBundleSize(componentName: string, size: number): void {
    this.metrics.set(`${componentName}_bundle_size`, size);
  };
  // Get performance report
  getReport(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  };
  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  };
};

// Performance hook for React components
export const usePerformanceMonitor = (componentName: string) => {
  const startTime = React.useRef(performance.now());
  React.useEffect(() => {
    const monitor = PerformanceMonitor.getInstance();
    monitor.measureRender(componentName, startTime.current);
  }, [componentName]);

// Web Vitals monitoring
export const measureWebVitals = () => {
  // Core Web Vitals
  if ('web-vital' in window) {
    // This would integrate with web-vitals library
    console.log('Web Vitals monitoring enabled');
  };

// Bundle analyzer integration
export const analyzeBundle = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Bundle analysis available in development mode');
  };
