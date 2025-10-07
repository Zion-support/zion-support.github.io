/**
 * Performance Optimizer Utilities
 */
export interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: number;
  memoryUsage?: number | undefined;
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
    const memoryUsage = this.getMemoryUsage();

    const metric: PerformanceMetrics = {
      componentName,
      renderTime,
      timestamp: Date.now(),
      memoryUsage,
    };

    if (!this.metrics.has(componentName)) {
      this.metrics.set(componentName, []);
    }
    this.metrics.get(componentName)!.push(metric);

    this.renderStartTimes.delete(componentName);
  }

  /**
   * End tracking a component (alias for endRender for compatibility)
   */
  endTracking(componentName: string): void {
    this.endRender(componentName);
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
      0
    );
    return totalTime / metrics.length;
  }

  /**
   * Get slowest components
   */
  getSlowestComponents(
    limit: number = 10
  ): Array<{ componentName: string; averageTime: number }> {
    const components: Array<{ componentName: string; averageTime: number }> =
      [];

    for (const [componentName] of this.metrics) {
      const averageTime = this.getAverageRenderTime(componentName);
      components.push({ componentName, averageTime });
    }

    return components
      .sort((a, b) => b.averageTime - a.averageTime)
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
   * Get memory usage if available
   */
  private getMemoryUsage(): number | undefined {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return memory ? memory.usedJSHeapSize / 1024 / 1024 : undefined;
    }
    return undefined;
  }

  /**
   * Get performance report
   */
  getReport(): {
    totalComponents: number;
    totalRenders: number;
    averageRenderTime: number;
    slowestComponents: Array<{ componentName: string; averageTime: number }>;
  } {
    const totalComponents = this.metrics.size;
    let totalRenders = 0;
    let totalRenderTime = 0;

    for (const metrics of this.metrics.values()) {
      totalRenders += metrics.length;
      totalRenderTime += metrics.reduce(
        (sum, metric) => sum + metric.renderTime,
        0
      );
    }

    const averageRenderTime =
      totalRenders > 0 ? totalRenderTime / totalRenders : 0;
    const slowestComponents = this.getSlowestComponents(5);

    return {
      totalComponents,
      totalRenders,
      averageRenderTime,
      slowestComponents,
    };
  }
}

// Create singleton instance
const performanceOptimizer = new PerformanceOptimizer();

export default performanceOptimizer;
