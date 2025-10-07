/**
 * Performance Optimizer Utilities
 */

import React, { forwardRef } from 'react';
import type { ComponentType } from 'react';

interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: number;
  memoryUsage?: number | undefined;
  renderCount: number;
}

interface OptimizationConfig {
  enableLazyLoading?: boolean;
  enableMemoization?: boolean;
  enableVirtualization?: boolean;
  maxRenderTime?: number;
  enableMemoryMonitoring?: boolean;
}

export class PerformanceOptimizer {
  private metrics: Map<string, PerformanceMetrics[]> = new Map();
  private renderStartTimes: Map<string, number> = new Map();
  private observedComponents: Set<string> = new Set();
  private config: OptimizationConfig;

  constructor(config: OptimizationConfig = {}) {
    this.config = {
      enableLazyLoading: true,
      enableMemoization: true,
      enableVirtualization: false,
      maxRenderTime: 16, // 60fps
      enableMemoryMonitoring: true,
      ...config,
    };
  }

  /**
   * Start tracking a component render
   */
  startRender(componentName: string): void {
    this.renderStartTimes.set(componentName, performance.now());
    this.observedComponents.add(componentName);
  }

  /**
   * End tracking a component render
   */
  endRender(componentName: string): void {
    const startTime = this.renderStartTimes.get(componentName);
    if (!startTime) return;

    const renderTime = performance.now() - startTime;
    const memoryUsage = this.config.enableMemoryMonitoring
      ? this.getMemoryUsage()
      : undefined;

    const metric: PerformanceMetrics = {
      componentName,
      renderTime,
      timestamp: Date.now(),
      memoryUsage,
      renderCount: this.getRenderCount(componentName) + 1,
    };

    this.recordMetric(metric);
    this.renderStartTimes.delete(componentName);

    // Check if optimization is needed
    if (renderTime > (this.config.maxRenderTime || 16)) {
      this.suggestOptimization(componentName, renderTime);
    }
  }

  /**
   * Record a performance metric
   */
  private recordMetric(metric: PerformanceMetrics): void {
    const existingMetrics = this.metrics.get(metric.componentName) || [];
    existingMetrics.push(metric);

    // Keep only last 100 metrics per component
    if (existingMetrics.length > 100) {
      existingMetrics.splice(0, existingMetrics.length - 100);
    }

    this.metrics.set(metric.componentName, existingMetrics);
  }

  /**
   * Get render count for a component
   */
  private getRenderCount(componentName: string): number {
    const metrics = this.metrics.get(componentName) || [];
    return metrics.length;
  }

  /**
   * Get memory usage if available
   */
  private getMemoryUsage(): number | undefined {
    if ('memory' in performance) {
      return (
        performance as Performance & { memory: { usedJSHeapSize: number } }
      ).memory.usedJSHeapSize;
    }
    return undefined;
  }

  /**
   * Suggest optimization for slow components
   */
  private suggestOptimization(componentName: string, renderTime: number): void {
    console.warn(
      `Performance warning: ${componentName} took ${renderTime.toFixed(2)}ms to render`
    );

    const suggestions = [];

    if (renderTime > 50) {
      suggestions.push('Consider using React.memo() for memoization');
    }

    if (renderTime > 100) {
      suggestions.push('Consider code splitting or lazy loading');
    }

    if (renderTime > 200) {
      suggestions.push('Consider virtualization for large lists');
    }

    if (suggestions.length > 0) {
      console.log(
        `Optimization suggestions for ${componentName}:`,
        suggestions
      );
    }
  }

  /**
   * Get performance metrics for a component
   */
  getMetrics(componentName: string): PerformanceMetrics[] {
    return this.metrics.get(componentName) || [];
  }

  /**
   * Get average render time for a component
   */
  getAverageRenderTime(componentName: string): number {
    const metrics = this.getMetrics(componentName);
    if (metrics.length === 0) return 0;

    const totalTime = metrics.reduce(
      (sum, metric) => sum + metric.renderTime,
      0
    );
    return totalTime / metrics.length;
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): object {
    const summary = {
      totalComponents: this.observedComponents.size,
      slowComponents: [] as Array<{ name: string; avgTime: number }>,
      totalRenders: 0,
      averageRenderTime: 0,
      memoryUsage: this.getMemoryUsage(),
    };

    let totalRenderTime = 0;
    let totalRenders = 0;

    this.observedComponents.forEach(componentName => {
      const metrics = this.getMetrics(componentName);
      const avgTime = this.getAverageRenderTime(componentName);

      totalRenders += metrics.length;
      totalRenderTime += metrics.reduce(
        (sum, metric) => sum + metric.renderTime,
        0
      );

      if (avgTime > (this.config.maxRenderTime || 16)) {
        summary.slowComponents.push({
          name: componentName,
          avgTime: Math.round(avgTime * 100) / 100,
        });
      }
    });

    summary.totalRenders = totalRenders;
    summary.averageRenderTime =
      totalRenders > 0
        ? Math.round((totalRenderTime / totalRenders) * 100) / 100
        : 0;

    return summary;
  }

  /**
   * Optimize component with memoization
   */
  optimizeWithMemo<T extends React.ComponentType<Record<string, unknown>>>(
    Component: T
  ): T {
    if (!this.config.enableMemoization) return Component;

    return React.memo(Component) as unknown as T;
  }

  /**
   * Create lazy loaded component
   */
  createLazyComponent<T extends React.ComponentType<Record<string, unknown>>>(
    importFunc: () => Promise<{ default: T }>
  ): React.LazyExoticComponent<T> {
    if (!this.config.enableLazyLoading) {
      throw new Error('Lazy loading is disabled');
    }

    return React.lazy(importFunc);
  }

  /**
   * Check if component needs optimization
   */
  needsOptimization(componentName: string): boolean {
    const avgTime = this.getAverageRenderTime(componentName);
    return avgTime > (this.config.maxRenderTime || 16);
  }

  /**
   * Get optimization recommendations
   */
  getOptimizationRecommendations(componentName: string): string[] {
    const recommendations = [];
    const avgTime = this.getAverageRenderTime(componentName);
    const metrics = this.getMetrics(componentName);

    if (avgTime > 16) {
      recommendations.push('Consider using React.memo() for memoization');
    }

    if (avgTime > 50) {
      recommendations.push('Consider code splitting or lazy loading');
    }

    if (avgTime > 100) {
      recommendations.push('Consider virtualization for large lists');
    }

    if (metrics.length > 10) {
      recommendations.push(
        'Component is rendering frequently - check for unnecessary re-renders'
      );
    }

    return recommendations;
  }

  /**
   * Clear metrics for a component
   */
  clearMetrics(componentName: string): void {
    this.metrics.delete(componentName);
    this.observedComponents.delete(componentName);
  }

  /**
   * Clear all metrics
   */
  clearAllMetrics(): void {
    this.metrics.clear();
    this.observedComponents.clear();
    this.renderStartTimes.clear();
  }

  /**
   * Export metrics as JSON
   */
  exportMetrics(): string {
    const data = {
      summary: this.getPerformanceSummary(),
      componentMetrics: Object.fromEntries(this.metrics),
      config: this.config,
      timestamp: new Date().toISOString(),
    };

    return JSON.stringify(data, null, 2);
  }

  /**
   * Destroy the optimizer
   */
  destroy(): void {
    this.clearAllMetrics();
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(): void {
    if (typeof window === 'undefined') return;

    // Preload critical CSS
    const criticalCSS = document.querySelector(
      'link[rel="preload"][as="style"]'
    );
    if (criticalCSS) {
      criticalCSS.setAttribute('rel', 'stylesheet');
    }

    // Preload critical fonts
    const fontLinks = document.querySelectorAll(
      'link[rel="preload"][as="font"]'
    );
    fontLinks.forEach(link => {
      link.setAttribute('rel', 'stylesheet');
    });
  }

  /**
   * Lazy load images
   */
  lazyLoadImages(): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset['src'] || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  /**
   * Add critical resource hints for performance optimization
   */
  addCriticalResourceHints(): void {
    if (typeof document === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) {
        link.crossOrigin = hint.crossOrigin;
      }
      document.head.appendChild(link);
    });
  }

  /**
   * Measure page load performance
   */
  measurePageLoad(): Record<string, unknown> | null {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return null;
    }

    const timing = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming;
    if (!timing) return null;

    return {
      domContentLoaded:
        timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart,
      loadComplete: timing.loadEventEnd - timing.loadEventStart,
      totalTime: timing.loadEventEnd - timing.fetchStart,
    };
  }

  /**
   * Report Web Vitals
   */
  reportWebVitals(metrics: Record<string, unknown>): void {
    if (typeof window === 'undefined') return;

    console.log('Web Vitals:', metrics);

    // Send to analytics if available
    if ('gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
        'event',
        'web_vitals',
        {
          event_category: 'Performance',
          event_label: 'Page Load',
          value: Math.round((metrics.totalTime as number) || 0),
        }
      );
    }
  }
}

// Utility functions
export const createPerformanceOptimizer = (
  config?: OptimizationConfig
): PerformanceOptimizer => {
  return new PerformanceOptimizer(config);
};

export const withPerformanceTracking = <P extends object>(
  Component: ComponentType<P>,
  componentName?: string
): ComponentType<P> => {
  const optimizer = createPerformanceOptimizer();
  const name =
    componentName || Component.displayName || Component.name || 'Unknown';

  const WrappedComponent = forwardRef<unknown, P>((props, ref) => {
    React.useEffect(() => {
      optimizer.startRender(name);
      return () => optimizer.endRender(name);
    });

    return React.createElement(Component, { ...props, ref } as P);
  });

  WrappedComponent.displayName = `withPerformanceTracking(${name})`;
  return WrappedComponent as unknown as ComponentType<P>;
};

// Create and export a default instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export utility functions
export const prefetchResources = (urls: string[]): void => {
  if (typeof window === 'undefined') return;

  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

export default PerformanceOptimizer;
