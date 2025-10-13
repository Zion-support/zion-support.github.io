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

  private config: PerformanceConfig = {
    enabled: true,
    monitoring: true,
    optimization: true
  };

  measureLoadTime(): number {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      return this.metrics.loadTime;
    }
    return 0;
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
    return this.metrics.fps;
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

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