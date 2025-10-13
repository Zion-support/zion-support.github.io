export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface PerformanceConfig {
  enabled: boolean;
  monitoring: boolean;
  optimization: boolean;
}

export class PerformanceUtils {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  };

  measureLoadTime() {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }
    return this.metrics.loadTime;
  }

  measureRenderTime() {
    if (typeof window !== 'undefined' && window.performance) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.metrics.renderTime = fcp.startTime;
      }
    }
    return this.metrics.renderTime;
  }

  measureMemoryUsage() {
    if (typeof window !== 'undefined' && (window as any).performance.memory) {
      const memory = (window as any).performance.memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }
    return this.metrics.memoryUsage;
  }

  measureFPS() {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime - lastTime >= 1000) {
        this.metrics.fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(countFrames);
    };
    
    if (typeof window !== 'undefined') {
      requestAnimationFrame(countFrames);
    }
    
    return this.metrics.fps;
  }

  getAllMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  resetMetrics() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0
    };
  }
}