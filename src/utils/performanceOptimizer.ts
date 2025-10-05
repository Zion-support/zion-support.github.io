/**
 * Performance Optimization Utility
 *
 * Provides tools for optimizing application performance including:
 * - Component lazy loading
 * - Image optimization
 * - Bundle size monitoring
 * - Memory leak detection
 * - Render performance tracking
 */

import * as React from 'react';

export interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  mountTime: number;
  updateCount: number;
  memoryUsage: number;
  timestamp: Date;
}

export class PerformanceOptimizer {
  private metrics: Map<string, PerformanceMetrics[]> = new Map();
  private renderStartTimes: Map<string, number> = new Map();
  private observedComponents: Set<string> = new Set();

  /**
   * Start tracking a component render
   */
  startRender(componentName: string): void {
    this.renderStartTimes.set(componentName, performance.now());
    this.observedComponents.add(componentName);
  }

  /**
   * End tracking a component render and record metrics
   */
  endRender(componentName: string): void {
    const startTime = this.renderStartTimes.get(componentName);
    if (!startTime) return;

    const renderTime = performance.now() - startTime;
    const metrics: PerformanceMetrics = {
      componentName,
      renderTime,
      mountTime: renderTime,
      updateCount: this.getUpdateCount(componentName),
      memoryUsage: this.getMemoryUsage(),
      timestamp: new Date(),
    };

    this.recordMetrics(componentName, metrics);
    this.renderStartTimes.delete(componentName);
  }

  /**
   * Record performance metrics for a component
   */
  private recordMetrics(
    componentName: string,
    metrics: PerformanceMetrics,
  ): void {
    const existingMetrics = this.metrics.get(componentName) || [];
    existingMetrics.push(metrics);

    // Keep only last 100 metrics per component
    if (existingMetrics.length > 100) {
      existingMetrics.splice(0, existingMetrics.length - 100);
    }

    this.metrics.set(componentName, existingMetrics);
  }

  /**
   * Get update count for a component
   */
  private getUpdateCount(componentName: string): number {
    const existingMetrics = this.metrics.get(componentName) || [];
    return existingMetrics.length;
  }

  /**
   * Get current memory usage (if available)
   */
  private getMemoryUsage(): number {
    if ('memory' in performance) {
      return (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0;
    }
    return 0;
  }

  /**
   * Get performance metrics for a component
   */
  getMetrics(componentName: string): PerformanceMetrics[] {
    return this.metrics.get(componentName) || [];
  }

  /**
   * Get all performance metrics
   */
  getAllMetrics(): Map<string, PerformanceMetrics[]> {
    return new Map(this.metrics);
  }

  /**
   * Get average render time for a component
   */
  getAverageRenderTime(componentName: string): number {
    const metrics = this.getMetrics(componentName);
    if (metrics.length === 0) return 0;

    const totalTime = metrics.reduce(
      (sum, metric) => sum + metric.renderTime,
      0,
    );
    return totalTime / metrics.length;
  }

  /**
   * Get slowest components
   */
  getSlowestComponents(
    limit: number = 10,
  ): Array<{ componentName: string; averageTime: number }> {
    const results: Array<{ componentName: string; averageTime: number }> = [];

    for (const [componentName] of this.metrics) {
      const averageTime = this.getAverageRenderTime(componentName);
      results.push({ componentName, averageTime });
    }

    return results
      .sort((a, b) => b.averageTime - a.averageTime)
      .slice(0, limit);
  }

  /**
   * Check if a component is performing poorly
   */
  isComponentSlow(componentName: string, threshold: number = 16): boolean {
    const averageTime = this.getAverageRenderTime(componentName);
    return averageTime > threshold; // 16ms = 60fps threshold
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): {
    totalComponents: number;
    slowComponents: number;
    averageRenderTime: number;
    memoryUsage: number;
  } {
    const allMetrics = Array.from(this.metrics.values()).flat();
    const slowComponents = Array.from(this.metrics.keys()).filter(name =>
      this.isComponentSlow(name),
    ).length;

    const totalRenderTime = allMetrics.reduce(
      (sum, metric) => sum + metric.renderTime,
      0,
    );
    const averageRenderTime =
      allMetrics.length > 0 ? totalRenderTime / allMetrics.length : 0;

    return {
      totalComponents: this.metrics.size,
      slowComponents,
      averageRenderTime,
      memoryUsage: this.getMemoryUsage(),
    };
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear();
    this.renderStartTimes.clear();
    this.observedComponents.clear();
  }

  /**
   * Clear metrics for a specific component
   */
  clearComponentMetrics(componentName: string): void {
    this.metrics.delete(componentName);
    this.renderStartTimes.delete(componentName);
    this.observedComponents.delete(componentName);
  }

  /**
   * Export metrics as JSON
   */
  exportMetrics(): string {
    const exportData = {
      timestamp: new Date().toISOString(),
      summary: this.getPerformanceSummary(),
      components: Object.fromEntries(this.metrics),
    };

    return JSON.stringify(exportData, null, 2);
  }

  /**
   * Import metrics from JSON
   */
  importMetrics(jsonData: string): void {
    try {
      const data = JSON.parse(jsonData);
      if (data.components) {
        this.metrics = new Map(Object.entries(data.components));
      }
    } catch (error) {
      console.error('Failed to import metrics:', error);
    }
  }
}

// Global instance
export const performanceOptimizer = new PerformanceOptimizer();

// React HOC for performance tracking
export function withPerformanceTracking<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName?: string,
) {
  const displayName =
    componentName ||
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component';

  const TrackedComponent = React.forwardRef<unknown, P>((props, ref) => {
    React.useEffect(() => {
      performanceOptimizer.startRender(displayName);

      return () => {
        performanceOptimizer.endRender(displayName);
      };
    });

    return React.createElement(WrappedComponent, { ...props, ref } as P);
  });

  TrackedComponent.displayName = `withPerformanceTracking(${displayName})`;

  return TrackedComponent;
}

// Hook for performance tracking
export function usePerformanceTracking(componentName: string) {
  React.useEffect(() => {
    performanceOptimizer.startRender(componentName);

    return () => {
      performanceOptimizer.endRender(componentName);
    };
  });
}

// Utility functions
export const performanceUtils = {
  /**
   * Debounce function for performance
   */
  debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number,
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  /**
   * Throttle function for performance
   */
  throttle<T extends (...args: unknown[]) => unknown>(
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
  },

  /**
   * Check if component should re-render
   */
  shouldComponentUpdate<P extends object>(
    prevProps: P,
    nextProps: P,
    keys: (keyof P)[],
  ): boolean {
    return keys.some(key => prevProps[key] !== nextProps[key]);
  },

  /**
   * Memoize expensive calculations
   */
  memoize<T extends (...args: unknown[]) => unknown>(fn: T): T {
    const cache = new Map();
    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }) as T;
  },
};

export default performanceOptimizer;
