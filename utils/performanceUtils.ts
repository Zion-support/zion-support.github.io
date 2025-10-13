export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export interface PerformanceConfig {
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

<<<<<<< HEAD
=======
  private config: PerformanceConfig = {
    enabled: true,
    monitoring: true,
    optimization: true
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-6995
  measureLoadTime(): number {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      return this.metrics.loadTime;
    }
<<<<<<< HEAD
    return this.metrics.loadTime;
=======
    return 0;
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
  }

  measureRenderTime(): number {
    if (typeof window !== 'undefined' && window.performance) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.metrics.renderTime = fcp.startTime;
        return this.metrics.renderTime;
      }
    }
<<<<<<< HEAD
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
=======
    return 0;
  }

  measureMemoryUsage(): number {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      return this.metrics.memoryUsage;
    }
    return 0;
  }

  measureFPS(): number {
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
    return this.metrics.fps;
  }

  getAllMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

<<<<<<< HEAD
  resetMetrics(): void {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0
    };
  }

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
}

export const performanceUtils = new PerformanceUtils();
=======
  optimizeImages(): void {
    if (!this.config.optimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  preloadCriticalResources(): void {
    if (!this.config.optimization) return;
    
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });
  }

  enableMonitoring(): void {
    this.config.monitoring = true;
    this.measureLoadTime();
    this.measureRenderTime();
    this.measureMemoryUsage();
    this.measureFPS();
  }

  disableMonitoring(): void {
    this.config.monitoring = false;
  }

  getConfig(): PerformanceConfig {
    return { ...this.config };
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
