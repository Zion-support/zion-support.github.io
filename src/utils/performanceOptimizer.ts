/**
 * Performance Optimization Utilities
 * Enhanced performance monitoring and optimization tools
 */

// Performance monitoring
export class PerformanceMonitor {
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  init() {
    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeTTFB();
  }

  private observeLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('LCP', lastEntry.startTime);
      this.reportMetric('LCP', lastEntry.startTime);
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(observer);
  }

  private observeFID() {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.metrics.set('FID', entry.processingStart - entry.startTime);
        this.reportMetric('FID', entry.processingStart - entry.startTime);
      }
    });
    observer.observe({ entryTypes: ['first-input'] });
    this.observers.push(observer);
  }

  private observeCLS() {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          this.metrics.set('CLS', clsValue);
          this.reportMetric('CLS', clsValue);
        }
      }
    });
    observer.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(observer);
  }

  private observeFCP() {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.set('FCP', entry.startTime);
          this.reportMetric('FCP', entry.startTime);
        }
      }
    });
    observer.observe({ entryTypes: ['paint'] });
    this.observers.push(observer);
  }

  private observeTTFB() {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const ttfb = entry.responseStart - entry.requestStart;
          this.metrics.set('TTFB', ttfb);
          this.reportMetric('TTFB', ttfb);
        }
      }
    });
    observer.observe({ entryTypes: ['navigation'] });
    this.observers.push(observer);
  }

  private reportMetric(name: string, value: number) {
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        value: Math.round(value),
        event_category: 'Web Vitals',
        event_label: name
      });
    }
    
    console.log(`📊 ${name}: ${Math.round(value)}ms`);
  }

  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
  }
}

// Image optimization
export const optimizeImage = (src: string, width?: number, quality: number = 80): string => {
  if (src.includes('placeholder.com') || src.startsWith('data:')) {
    return src;
  }

  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  params.set('f', 'auto');

  return `${src}?${params.toString()}`;
};

export const getResponsiveImage = (src: string, sizes: number[] = [320, 640, 1024, 1920]) => {
  return sizes.map(size => ({
    src: optimizeImage(src, size),
    width: size
  }));
};

// Code splitting utilities
export const lazyLoad = async <T>(importFunc: () => Promise<{ default: T }>): Promise<T> => {
  try {
    const module = await importFunc();
    return module.default;
  } catch (error) {
    console.error('Failed to load module:', error);
    throw error;
  }
};

// Bundle optimization
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/images/hero-bg.jpg',
    '/styles/critical.css'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    if (link.as === 'font') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Performance utilities
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Initialize performance monitoring
export const performanceMonitor = new PerformanceMonitor();