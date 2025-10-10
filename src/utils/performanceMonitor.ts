// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure component render time
  measureRender(componentName: string, startTime: number): void {
    const renderTime = performance.now() - startTime;
    this.metrics.set(`${componentName}_render`, renderTime);
    
    if (renderTime > 16) { // More than one frame at 60fps

    }
  }

  // Measure API call performance
  measureApiCall(endpoint: string, startTime: number): void {
    const duration = performance.now() - startTime;
    this.metrics.set(`${endpoint}_api`, duration);
    
    if (duration > 1000) { // More than 1 second

    }
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  }

  // Report performance to analytics
  reportMetrics(): void {
    const metrics = this.getMetrics();
    
    if (typeof window !== 'undefined' && 'gtag' in window) {
      Object.entries(metrics).forEach(([key, value]) => {
        (window as any).gtag('event', 'performance_metric', {
          metric_name: key,
          metric_value: Math.round(value),
          event_category: 'performance'
        });
      });
    }
  }
}

// Web Vitals monitoring
export const measureWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Measure Largest Contentful Paint (LCP)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];

  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Measure First Input Delay (FID)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {

    });
  }).observe({ entryTypes: ['first-input'] });

  // Measure Cumulative Layout Shift (CLS)
  let clsValue = 0;
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
      }
    });

  }).observe({ entryTypes: ['layout-shift'] });
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, quality: number = 80): string => {
  // Add image optimization parameters
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  params.set('f', 'auto'); // Auto format
  
  return `${src}?${params.toString()}`;
};

// Lazy loading utility
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce utility for performance
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

// Throttle utility for performance
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