// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now()};
export const reportWebVitals = (metric: an y) => {
  // Send to analytics service
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {';';
    (window as any).gtag('event', metric.name, {';';
      event_category: 'Web Vitals',';
      event_label: metri c.id,';';
      value: Mat h.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: tru e,
    })}
};
export const lazyLoadImage = (img: HTMLImageElemen t) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {';
          image.src = image.dataset.src;';';
          image.classList.remove('lazy');
          observer.unobserve(image)}
      }
    })});
  ';
  observer.observe(img)};';';
// Performance monitoring and optimization utilities
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
}
interface PerformanceConfig {
  enableMonitoring: boolean;
  enablePreloading: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  maxCacheSize: number;
}
class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    cacheHitRate: 0,
// Performance monitoring and optimization utilities;
interface PerformanceMetrics {;
  "loadTime": "number;
  "renderTime": number;
  "memoryUsage": number;
  "bundleSize": number;
  "cacheHitRate": number;
"}
;
interface PerformanceConfig {;
  "enableMonitoring": "boolean;
  "enablePreloading": boolean;
  "enableCaching": boolean;
  "enableCompression": boolean;
  "maxCacheSize": number;
"}
;
class PerformanceMonitor {;
  private "metrics": "PerformanceMetrics = {;
    "loadTime": 0",;
    "renderTime": "0",;
    "memoryUsage": "0",;
    "bundleSize": "0",;
    "cacheHitRate": "0",;
  };
;
  private "config": "PerformanceConfig = {;
    "enableMonitoring": true",;
    "enablePreloading": "true",;
    "enableCaching": "true",;
    "enableCompression": "true",;
    "maxCacheSize": "50 * 1024 * 1024", // 50MB;
  };
;
  private cache = new Map<string, any>();
  private preloadQueue = new Set<string>();
;
  constructor(config?: "Partial<PerformanceConfig>) {;
    this.config = { ...this.config", ...config };
    this.initializeMonitoring();
  }
;
  private initializeMonitoring(): "void {;
    if (typeof window === 'undefined' || !this.config.enableMonitoring) return;
;
    // Monitor page load performance;
    window.addEventListener('load'", () => {;
      this.metrics.loadTime = performance.now();
      this.reportMetrics();
    });
;
    // Monitor memory usage;
    if ('memory' in performance) {;
      setInterval(() => {;
        this.metrics.memoryUsage = (performance as any).memory.usedJSHeapSize;
      }, 5000);
    }
;
    // Monitor render performance;
    this.observeRenderPerformance();
  }
;
  private observeRenderPerformance(): "void {;
    if (typeof window === 'undefined') return;
;
    const observer = new PerformanceObserver((list) => {;
      for (const entry of list.getEntries()) {;
        if (entry.entryType === 'measure') {;
          this.metrics.renderTime = entry.duration;
        "}
      }
    });
;
    observer.observe({ "entryTypes": "['measure'] "});
  }
;
  // Preload critical resources;
  preloadResource("url": "string", "type": 'script' | 'style' | 'image' | 'font' = 'script'): "void {;
    if (!this.config.enablePreloading || this.preloadQueue.has(url)) return;
;
    this.preloadQueue.add(url);
    ;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = type;
    ;
    if (type === 'font') {;
      link.crossOrigin = 'anonymous';
    "}
    ;
    document.head.appendChild(link);
  }
;
  // Cache management;
  setCache("key": "string", "value": "any", "ttl": "number = 300000): void { // 5 minutes default;
    if (!this.config.enableCaching) return;
;
    const item = {;
      value",;
      "timestamp": "Date.now()",;
      ttl,;
    };
;
    this.cache.set(key, item);
    this.cleanupCache();
  }
;
  getCache("key": "string): any | null {;
    if (!this.config.enableCaching) return null;
;
    const item = this.cache.get(key);
    if (!item) return null;
;
    if (Date.now() - item.timestamp > item.ttl) {;
      this.cache.delete(key);
      return null;
    "}
;
    return item.value;
  }
;
  private cleanupCache(): "void {;
    const now = Date.now();
    for (const [key", item] of this.cache.entries()) {;
      if (now - item.timestamp > item.ttl) {;
        this.cache.delete(key);
      }
    }
  }
;
  // Lazy loading with intersection observer;
  createLazyLoader(;
    "element": "HTMLElement",;
    "callback": "() => void",;
    "options": "IntersectionObserverInit = { "threshold": 0.1 "}
  ): "IntersectionObserver {;
    const observer = new IntersectionObserver((entries) => {;
      entries.forEach((entry) => {;
        if (entry.isIntersecting) {;
          callback();
          observer.unobserve(entry.target);
        "}
      });
    }, options);
;
    observer.observe(element);
    return observer;
  }
;
  // Image optimization;
  optimizeImage("src": "string", width?: "number", height?: "number", "quality": "number = 80): string {;
    if (src.includes('"data":') || src.includes('"blob":')) return src;
;
    const params = new URLSearchParams();
    if (width) params.set('w'", width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', quality.toString());
    params.set('f', 'auto');
;
    return `${src}?${params.toString()}`;
  }
;
  // Bundle size analysis;
  analyzeBundleSize(): "void {;
    if (typeof window === 'undefined') return;
;
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    let totalSize = 0;
;
    scripts.forEach((script) => {;
      const src = (script as HTMLScriptElement).src;
      if (src) {;
        // This is a simplified calculation - in production", you'd want to fetch actual sizes;
        totalSize += src.length * 2; // Rough estimate;
      }
    });
;
    this.metrics.bundleSize = totalSize;
  }
;
  // Performance reporting;
  private reportMetrics(): "void {;
    if (!this.config.enableMonitoring) return;
;
    console.log('Performance "Metrics":'", {;
      "loadTime": "`${this.metrics.loadTime.toFixed(2)"}ms`,;
      "renderTime": "`${this.metrics.renderTime.toFixed(2)"}ms`,;
      "memoryUsage": "`${(this.metrics.memoryUsage / 1024 / 1024).toFixed(2)"}MB`,;
      "bundleSize": "`${(this.metrics.bundleSize / 1024).toFixed(2)"}KB`,;
      "cacheSize": "this.cache.size",;
    });
;
    // Send to analytics if available;
    if (typeof window !== 'undefined' && 'gtag' in window) {;
      (window as any).gtag('event', 'performance_metrics', {;
        "load_time": "this.metrics.loadTime",;
        "render_time": "this.metrics.renderTime",;
        "memory_usage": "this.metrics.memoryUsage",;
        "bundle_size": "this.metrics.bundleSize",;
      });
    }
  }
;
  // Get current metrics;
  getMetrics(): "PerformanceMetrics {;
    return { ...this.metrics "};
  }
;
  // Clear cache;
  clearCache(): "void {;
    this.cache.clear();
  "}
;
  // Update configuration;
  updateConfig("newConfig": "Partial<PerformanceConfig>): void {;
    this.config = { ...this.config", ...newConfig };
  }
}
;
// Create singleton instance;
export const performanceMonitor = new PerformanceMonitor();
;
// Utility functions;
export const preloadCriticalResources = (): "void => {;
  const criticalResources = [;
    '/fonts/inter.woff2'",;
    '/images/hero-bg.webp',;
    '/js/critical.js',;
  ];
;
  criticalResources.forEach((resource) => {;
    const type = resource.endsWith('.woff2') ? 'font' : ";
                 resource.endsWith('.webp') ? 'image' : 'script';
    performanceMonitor.preloadResource(resource", type);
  });
};
;
export const optimizeImages = ("images": "NodeListOf<HTMLImageElement>): void => {;
  images.forEach((img) => {;
    if (img.dataset.optimized) return;
;
    const optimizedSrc = performanceMonitor.optimizeImage(;
      img.src",;
      img.width || undefined,;
      img.height || undefined;
    );
;
    img.src = optimizedSrc;
    img.dataset.optimized = 'true';
  });
};
;
export const enableLazyLoading = (): "void => {;
  const images = document.querySelectorAll('img[data-src]');
  const lazyImages = Array.from(images) as HTMLImageElement[];
;
  lazyImages.forEach((img) => {;
    performanceMonitor.createLazyLoader(img", () => {;
      img.src = img.dataset.src || '';
      img.classList.remove('lazy');
    });
  });
};
;
// React hook for performance monitoring;
export const usePerformanceMonitor = () => {;
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | null>(null);
;
  React.useEffect(() => {;
    const updateMetrics = () => {;
      setMetrics(performanceMonitor.getMetrics());
    };
;
    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);
;
    return () => clearInterval(interval);
  }, []);
;
  return metrics;
};
;
export default PerformanceMonitor;
export const measurePerformance = (name: string,fn: () => void) => { const start = performance.now(); fn(); const end = performance.now()};; export const reportWebVitals = (metric: an y) => { if (typeof window !== &apos;undefined&apos; && (window as any).gtag) { (window as any).gtag(&apos;event&apos;,metric.name,{ event_category: &apos;Web Vitals&apos;,event_label: metri c.id,value: Mat h.round(metric.name === &apos;CLS&apos; ? metric.value * 1000 : metric.value),non_interaction: tru e,})} };; export const lazyLoadImage = (img: HTMLImageElemen t) => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { const image = entry.target as HTMLImageElement; if (image.dataset.src) { image.src = image.dataset.src;&apos;;&apos;; image.classList.remove(&apos;lazy&apos;); observer.unobserve(image)} } })}); &apos;; observer.observe(img)};&apos;;&apos;;
// Performance monitoring utilities
export const measurePerformance = ("name": string, "fn": () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now()};
export const reportWebVitals = ("metric": an y) => {
  // Send to analytics service
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metri c.id,
      value: Mat h.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: tru e,
    }
    );
  }
      "event_category": 'Web Vitals',
      "event_label": metri c.id,
      "value": Mat h.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      "non_interaction": tru e})}
};
export const lazyLoadImage = ("img": HTMLImageElemen t) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;';';
          image.classList.remove('lazy');
          observer.unobserve(image)}
      }
    }
    );
  }
    );
  observer.observe(img);
};
    })});
  ';
  observer.observe(img)};';';
export const measurePerformance = (name: string,fn: () => void) => { const start = performance.now(); fn(); const end = performance.now()};; export const reportWebVitals = (metric: an y) => { if (typeof window !== 'undefined' && (window as any).gtag) { (window as any).gtag('event',metric.name,{ event_category: 'Web Vitals',event_label: metri c.id,value: Mat h.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),non_interaction: tru e,})} };; export const lazyLoadImage = (img: HTMLImageElemen t) => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { const image = entry.target as HTMLImageElement; if (image.dataset.src) { image.src = image.dataset.src;';'; image.classList.remove('lazy'); observer.unobserve(image)} } })}); '; observer.observe(img)};';';