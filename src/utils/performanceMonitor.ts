import React from 'react';

export interface PerformanceMetrics {
  renderTime: number;
  componentName: string;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private startTimes: Map<string, number> = new Map();

  startRender(componentName: string): void {
    this.startTimes.set(componentName, performance.now());
  }

  endRender(componentName: string): number {
    const startTime = this.startTimes.get(componentName);
    if (!startTime) return 0;

    const renderTime = performance.now() - startTime;
    this.metrics.push({
      renderTime,
      componentName,
      timestamp: Date.now()
    });

    this.startTimes.delete(componentName);
    return renderTime;
  }

  getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  getAverageRenderTime(componentName: string): number {
    const componentMetrics = this.metrics.filter(m => m.componentName === componentName);
    if (componentMetrics.length === 0) return 0;

    const totalTime = componentMetrics.reduce((sum, m) => sum + m.renderTime, 0);
    return totalTime / componentMetrics.length;
  }

  clearMetrics(): void {
    this.metrics = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();

// React Hook for performance monitoring
export function usePerformanceMonitor(componentName: string) {
  React.useEffect(() => {
    performanceMonitor.startRender(componentName);
    
    return () => {
      performanceMonitor.endRender(componentName);
    };
  });
}

// HOC for performance monitoring
export function withPerformanceMonitoring<P extends object>(
  Component: React.ComponentType<P>,
  componentName?: string
): React.ComponentType<P> {
  const name = componentName || Component.displayName || Component.name || 'Unknown';
  
  return (props: P) => {
    usePerformanceMonitor(name);
    return React.createElement(Component, props);
  };
}

export default performanceMonitor;
