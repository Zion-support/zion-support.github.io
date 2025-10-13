
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export class PerformanceUtils {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  };

  measureLoadTime() {
<<<<<<< HEAD

interface PerformanceConfig {
  enabled: boolean;
  monitoring: boolean;
  optimization: boolean;
}


=======
>>>>>>> cursor/fix-errors-and-merge-to-main-82b8
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }
  }


  measureRenderTime() {
    if (typeof window !== 'undefined' && window.performance) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.metrics.renderTime = fcp.startTime;
      }
    }
  }

  measureMemoryUsage() {
    if (typeof window !== 'undefined' && (window as unknown as { performance?: { memory?: { usedJSHeapSize: number } } }).performance?.memory) {
      const memory = (window as unknown as { performance: { memory: { usedJSHeapSize: number } } }).performance.memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }
  }

  measureFPS() {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFrame = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        this.metrics.fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFrame);
    };
    
    requestAnimationFrame(measureFrame);
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  reset() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0
    };
  }

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enabled: true,
      monitoring: true,
      optimization: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('Performance utils initialized');
    }
  }

  measurePerformance(name: string, fn: () => void): void {
    if (this.config.monitoring) {
      const start = performance.now();
      fn();
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    } else {
      fn();
    }
  }

  optimizeImages(): void {
    if (this.config.optimization) {
      console.log('Optimizing images...');
    }
  }

}

export default PerformanceUtils;