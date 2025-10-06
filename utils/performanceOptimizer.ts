/**
 * Performance Optimizer Utilities
 */

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
   * Start tracking a component (alias for startRender for compatibility)
   */
  startTracking(componentName: string): void {
    this.startRender(componentName);
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
    metrics: PerformanceMetrics
  ): void {
    if (!this.metrics.has(componentName)) {
      this.metrics.set(componentName, []);
    }
    this.metrics.get(componentName)!.push(metrics);
  }

  /**
   * Get update count for a component
   */
  private getUpdateCount(componentName: string): number {
    const componentMetrics = this.metrics.get(componentName);
    return componentMetrics ? componentMetrics.length : 0;
  }

  /**
   * Get current memory usage
   */
  private getMemoryUsage(): number {
    if ('memory' in performance) {
      return (performance as any).memory.usedJSHeapSize;
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
    const componentMetrics = this.metrics.get(componentName);
    if (!componentMetrics || componentMetrics.length === 0) return 0;

    const totalTime = componentMetrics.reduce(
      (sum, metric) => sum + metric.renderTime,
      0
    );
    return totalTime / componentMetrics.length;
  }

  /**
   * Get slowest components
   */
  getSlowestComponents(limit: number = 10): Array<{
    componentName: string;
    averageRenderTime: number;
  }> {
    const results: Array<{
      componentName: string;
      averageRenderTime: number;
    }> = [];

    for (const [componentName] of this.metrics) {
      const averageTime = this.getAverageRenderTime(componentName);
      results.push({ componentName, averageRenderTime: averageTime });
    }

    return results
      .sort((a, b) => b.averageRenderTime - a.averageRenderTime)
      .slice(0, limit);
  }

  /**
   * Clear metrics for a component
   */
  clearMetrics(componentName: string): void {
    this.metrics.delete(componentName);
  }

  /**
   * Clear all metrics
   */
  clearAllMetrics(): void {
    this.metrics.clear();
    this.renderStartTimes.clear();
    this.observedComponents.clear();
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): {
    totalComponents: number;
    totalRenders: number;
    averageRenderTime: number;
    slowestComponent: string | null;
  } {
    const totalComponents = this.metrics.size;
    let totalRenders = 0;
    let totalRenderTime = 0;
    let slowestComponent: string | null = null;
    let slowestTime = 0;

    for (const [componentName, metrics] of this.metrics) {
      totalRenders += metrics.length;
      const componentTotalTime = metrics.reduce(
        (sum, metric) => sum + metric.renderTime,
        0
      );
      totalRenderTime += componentTotalTime;

      const averageTime = componentTotalTime / metrics.length;
      if (averageTime > slowestTime) {
        slowestTime = averageTime;
        slowestComponent = componentName;
      }
    }

    return {
      totalComponents,
      totalRenders,
      averageRenderTime: totalRenders > 0 ? totalRenderTime / totalRenders : 0,
      slowestComponent,
    };
  }

  /**
   * Optimize performance by identifying bottlenecks
   */
  optimize(): void {
    const summary = this.getPerformanceSummary();
    const slowestComponents = this.getSlowestComponents(5);

    console.log('Performance Summary:', summary);
    console.log('Slowest Components:', slowestComponents);

    // Log optimization recommendations
    if (summary.averageRenderTime > 16) {
      console.warn(
        'Average render time exceeds 16ms. Consider optimizing components.'
      );
    }

    slowestComponents.forEach(({ componentName, averageRenderTime }) => {
      if (averageRenderTime > 50) {
        console.warn(
          `Component "${componentName}" has high render time: ${averageRenderTime.toFixed(2)}ms`
        );
      }
    });
  }
}

// Create singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

export default performanceOptimizer;