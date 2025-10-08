/**
 * Performance Optimizer Utilities
 */

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
    const memoryUsage = this.config.enableMemoryMonitoring ? this.getMemoryUsage() : undefined;

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
  }

  /**
   * Get render count for a component
   */
   */
  private getMemoryUsage(): number | undefined {
    if ('memory' in performance) {
      return (performance as any).memory.usedJSHeapSize;
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
    };

    let totalRenderTime = 0;
    let totalRenders = 0;

    this.observedComponents.forEach(componentName => {
      const metrics = this.getMetrics(componentName);
      const avgTime = this.getAverageRenderTime(componentName);
      
      totalRenders += metrics.length;
      totalRenderTime += metrics.reduce((sum, metric) => sum + metric.renderTime, 0);
      
      if (avgTime > (this.config.maxRenderTime || 16)) {
        summary.slowComponents.push({
          name: componentName,
          avgTime: Math.round(avgTime * 100) / 100,
        });
      }
    });

    summary.totalRenders = totalRenders;
    summary.averageRenderTime = totalRenders > 0 ? 
      Math.round((totalRenderTime / totalRenders) * 100) / 100 : 0;

    return summary;
  }

  /**
   * Optimize component with memoization
   */
  optimizeWithMemo<T extends React.ComponentType<any>>(Component: T): T {
    if (!this.config.enableMemoization) return Component;
    
    return React.memo(Component) as T;
  }

  /**
   * Create lazy loaded component
   */
  createLazyComponent<T extends React.ComponentType<any>>(
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
      recommendations.push('Component is rendering frequently - check for unnecessary re-renders');
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
   * Optimize performance by identifying bottlenecks
   */
