
    // Initialize performance monitoring
    if ($1) {}
  // If body

}
<<<<<<< HEAD

export class PerformanceUtils {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  };

  measureLoadTime(): number {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }
    return this.metrics.loadTime;
  }

  measureRenderTime(): number {
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
    if (typeof window !== 'undefined' && (window as unknown as { performance?: { memory?: { usedJSHeapSize: number } } }).performance?.memory) {
      const memory = (window as unknown as { performance: { memory: { usedJSHeapSize: number } } }).performance.memory;
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
=======
      this.setupPerformanceMonitoring()
      this.optimizeImages()
      this.setupLazyLoading()
>>>>>>> main
    };
  };
  setupPerformanceMonitoring() {};
    // Core Web Vitals


}getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)

              observer.unobserve(img)
            };
          };
        })
      })

      // Remove any performance observers;
      const observers = (window as any).__performanceObservers || []: value;
      observers.forEach((observer: any) => observer.disconnect())

      (window as any).gc()
    };
  };
  // memory usage

      return (performance as any).memory
    };
    return null;


      caches.keys().then(names => {};)
}names.forEach(name => {};)

}caches.delete(name)


