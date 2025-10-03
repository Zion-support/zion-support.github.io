
export interface PerformanceMetrics {
  componentName: string;
  mountTime: number;
  unmountTime?: number;
  totalTime?: number;
  renderCount: number;
  avgRenderTime?: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private maxMetrics = 100;

  public startMonitoring(_componentName: string): { mountTime: number, renderCount: number } {
    const mountTime = Date.now();
    const renderCount = 0;
    return { mountTime, renderCount };
  }

  public stopMonitoring(_componentName: string, mountTime: number, renderCount: number): void {
    const unmountTime = Date.now();
    const totalTime = unmountTime - mountTime;
    const avgRenderTime = renderCount > 0 ? totalTime / renderCount : 0;

    const newMetrics: PerformanceMetrics = {
      componentName,
      mountTime,
      unmountTime,
      totalTime,
      renderCount,
      avgRenderTime,
      timestamp: Date.now(),
    };

    this.addMetrics(newMetrics);
    this.logMetrics(newMetrics);
  }

  private addMetrics(newMetrics: PerformanceMetrics): void {
    this.metrics.push(newMetrics);
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }
  }

  private logMetrics(metrics: PerformanceMetrics): void {
    if (import.meta.env.DEV) {
      console.log(`[Performance] ${metrics.componentName}:`, {
        renderCount: metrics.renderCount,
        totalTime: `${metrics.totalTime}ms`,
        avgRenderTime: `${metrics.avgRenderTime}ms`
      });
    }
  }

  public getMetrics(): PerformanceMetrics[] {
    return this.metrics;
  }
}

export const performanceMonitor = new PerformanceMonitor();

export const usePerformanceMonitorHook = (componentName: string) => {
  const mountTimeRef = useRef<number>(0);
  const renderCountRef = useRef<number>(0);

  useEffect(() => {
    const { mountTime, renderCount } = performanceMonitor.startMonitoring(componentName);
    mountTimeRef.current = mountTime;
    renderCountRef.current = renderCount;

    return () => {
      performanceMonitor.stopMonitoring(componentName, mountTimeRef.current, renderCountRef.current);
    };
  }, [componentName]);

  const markRender = useCallback(() => {
    renderCountRef.current += 1;
  }, []);

  return { markRender };
};