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
}

export default PerformanceUtils;