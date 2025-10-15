interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export const performanceUtils = {
  init: () => {
    console.log('performanceUtils initialized');
  }
};

export default performanceUtils;

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
    if (typeof window !== 'undefined' && (window as any).performance?.memory) {
      const memory = (window as any).performance.memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024;
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

  setupPerformanceMonitoring() {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }

  optimizeImages() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  setupLazyLoading() {
    const criticalResources = [
      '/app/styles/main.css',
      '/app/styles/components.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'style';
      document.head.appendChild(link);
    });
  }

  cleanup() {
    if (typeof window !== 'undefined') {
      const observers = (window as any).__performanceObservers || [];
      observers.forEach((observer: any) => observer.disconnect());
    }
  }
}

export const optimizeImage = (src: string, width?: number, height?: number, quality = 80) => {
  if (!src) return src;
  if (src.includes('w_') || src.includes('q_')) return src;
  if (src.includes('placeholder') || src.includes('api.placeholder.com')) return src;
  
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  params.set('f', 'auto');
  
  const separator = src.includes('?') ? '&' : '?';
  return `${src}${separator}${params.toString()}`;
};

export const optimizeBundle = {
  lazyLoadComponent: (importFn: () => Promise<any>) => {
    return React.lazy(importFn);
  },
  preloadRoute: (routePath: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = routePath;
      document.head.appendChild(link);
    }
  }
};

export const memoryOptimizer = {
  cleanup: () => {
    if (typeof window !== 'undefined' && 'gc' in window) {
      (window as any).gc();
    }
  },
  getMemoryUsage: () => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  }
};

export const cacheOptimizer = {
  setCacheHeaders: (response: Response) => {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  },
  clearCache: () => {
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
  }
};

export default PerformanceUtils;