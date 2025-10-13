
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

<<<<<<< HEAD
  measureLoadTime(): number {
=======
  measureLoadTime() {
<<<<<<< HEAD

interface PerformanceConfig {
  enabled: boolean;
  monitoring: boolean;
  optimization: boolean;
}


=======
>>>>>>> cursor/fix-errors-and-merge-to-main-82b8
>>>>>>> d86d082fc493e5b136e1baa1e02a40320c4cbc61
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }
    return this.metrics.loadTime;
  }

<<<<<<< HEAD
  measureRenderTime(): number {
=======

  measureRenderTime() {
>>>>>>> d86d082fc493e5b136e1baa1e02a40320c4cbc61
    if (typeof window !== 'undefined' && window.performance) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.metrics.renderTime = fcp.startTime;
      }
    }
    return this.metrics.renderTime;
  }

  measureMemoryUsage(): number {
    if (typeof window !== 'undefined' && (window as any).performance?.memory) {
      const memory = (window as any).performance.memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }
    return this.metrics.memoryUsage;
  }

  measureFPS(): number {
    if (typeof window !== 'undefined') {
      let lastTime = performance.now();
      let frameCount = 0;
      
      const measureFrame = (currentTime: number) => {
        frameCount++;
        if (currentTime - lastTime >= 1000) {
          this.metrics.fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          frameCount = 0;
          lastTime = currentTime;
        }
        requestAnimationFrame(measureFrame);
      };
      
      requestAnimationFrame(measureFrame);
    }
    return this.metrics.fps;
  }

  getAllMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  resetMetrics(): void {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0
    };
  }

<<<<<<< HEAD
  isPerformanceGood(): boolean {
    return (
      this.metrics.loadTime < 3000 && // Less than 3 seconds
      this.metrics.renderTime < 1500 && // Less than 1.5 seconds
      this.metrics.memoryUsage < 100 && // Less than 100MB
      this.metrics.fps > 30 // More than 30 FPS
    );
  }

  getPerformanceScore(): number {
    let score = 100;
    
    // Deduct points for slow load time
    if (this.metrics.loadTime > 3000) score -= 30;
    else if (this.metrics.loadTime > 2000) score -= 20;
    else if (this.metrics.loadTime > 1000) score -= 10;
    
    // Deduct points for slow render time
    if (this.metrics.renderTime > 1500) score -= 25;
    else if (this.metrics.renderTime > 1000) score -= 15;
    else if (this.metrics.renderTime > 500) score -= 5;
    
    // Deduct points for high memory usage
    if (this.metrics.memoryUsage > 100) score -= 20;
    else if (this.metrics.memoryUsage > 50) score -= 10;
    else if (this.metrics.memoryUsage > 25) score -= 5;
    
    // Deduct points for low FPS
    if (this.metrics.fps < 30) score -= 25;
    else if (this.metrics.fps < 45) score -= 15;
    else if (this.metrics.fps < 60) score -= 5;
    
    return Math.max(0, score);
  }
=======
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

>>>>>>> d86d082fc493e5b136e1baa1e02a40320c4cbc61
}

export const performanceUtils = new PerformanceUtils();