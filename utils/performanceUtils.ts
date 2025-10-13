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

<<<<<<< HEAD
  measureRenderTime(): number {
    if (typeof window !== 'undefined' && window.performance) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.metrics.renderTime = fcp.startTime;
        return this.metrics.renderTime;
=======
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
>>>>>>> origin/clean-main-20251013-145848
      }
    }
    return 0;
  }

  measureMemoryUsage(): number {
    if (typeof window !== 'undefined' && (window as any).performance?.memory) {
      const memory = (window as any).performance.memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / memory.totalJSHeapSize;
      return this.metrics.memoryUsage;
    }
    return 0;
  }

  measureFPS(): number {
    if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
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
    return 0;
  }

  getMetrics(): PerformanceMetrics {
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

  isPerformanceGood(): boolean {
    return this.metrics.loadTime < 3000 && 
           this.metrics.renderTime < 1000 && 
           this.metrics.memoryUsage < 0.8 && 
           this.metrics.fps > 30;
  }

  optimizePerformance(): void {
    if (!this.config.optimization) return;

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img['src'] = img.dataset['src'] || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const criticalResources = document.querySelectorAll('link[rel="preload"]');
    criticalResources.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = href;
        preloadLink.as = link.getAttribute('as') || 'script';
        document.head.appendChild(preloadLink);
      }
    });
  }

  startMonitoring(): void {
    if (!this.config.monitoring) return;

    // Monitor performance metrics
    this.measureLoadTime();
    this.measureRenderTime();
    this.measureMemoryUsage();
    this.measureFPS();

    // Log performance issues
    if (!this.isPerformanceGood()) {
      console.warn('Performance issues detected:', this.getMetrics());
    }
  }

  stopMonitoring(): void {
    this.config.monitoring = false;
  }
}

export const performanceUtils = new PerformanceUtils();