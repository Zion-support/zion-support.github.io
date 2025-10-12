/**
 * Performance optimization utilities for the Zion Tech Group application
 */

// Debounce function for performance optimization
export function debounce<T e xtends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: Node JS.Timeout;
  return (...args: Parameters<T>) => {
    clear Timeout(timeout);
    timeout = set Timeout(() => func(...args), wait);
  };
}

// Throttle function for performance optimization
export function throttle<T e xtends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let in Throttle: boolean;
  return (...args: Parameters<T>) => {
    if (!in Throttle) {
      func(...args);
      in Throttle = true;
      set Timeout(() => (in Throttle = false), limit);
    }
  };
}

// Intersection Observer for lazy loading
export function create Intersection Observer(
  callback: Intersection Observer Callback,
  options?: Intersection Observer Init
): Intersection Observer | null {
  if (typeof window === 'undefined' || !('Intersection Observer' in window)) {
    return null;
  }
  
  return new Intersection Observer(callback, {
    root Margin: '50px',
    threshold: 0.1,
    ...options,
  });
}

// Performance monitoring utilities
export function measure Performance(name: string, fn: () => void): void {
  if (typeof window === 'undefined' || !('performance' in window)) {
    fn();
    return;
  }

  const start = performance.now();
  fn();
  const end = performance.now();
  
  if (process.env.N OD E_ EN V === 'development') {
    console.log(`${name} took ${end - start} milliseconds`);
  }
}

// Memory usage monitoring
export function get Memory Usage(): any {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }
  
  return (performance as any).memory;
}

// Bundle size optimization - preload critical resources
export function preload Critical Resources(): void {
  if (typeof window === 'undefined') return;
  
  const critical Resources = [
    '/fonts/inter.woff2',
    '/images/logo.png',
    '/images/og-image.jpg'
  ];
  
  critical Resources.for Each(resource => {
    const link = document.create Element('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.ends With('.woff2') ? 'font' : 'image';
    if (resource.ends With('.woff2')) {
      link.cross Origin = 'anonymous';
    }
    document.head.append Child(link);
  });
}

// Image optimization utility
export function optimize Image(src: string, width?: number, height?: number): string {
  // Add image optimization parameters if needed
  const url = new U RL(src, window.location.origin);
  if (width) url.search Params.set('w', width.to String());
  if (height) url.search Params.set('h', height.to String());
  url.search Params.set('q', '80'); // Quality
  url.search Params.set('f', 'webp'); // Format
  return url.to String();
}

// Lazy loading utility for images
export function create Lazy Image Observer(): Intersection Observer | null {
  return create Intersection Observer((entries) => {
    entries.for Each(entry => {
      if (entry.is Intersecting) {
        const img = entry.target as H TM LImage Element;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.class List.remove('lazy');
          img.class List.add('loaded');
        }
      }
    });
  });
}

// Performance budget monitoring
export function check Performance Budget(): void {
  if (typeof window === 'undefined') return;
  
  const navigation = performance.get Entries By Type('navigation')[0] as Performance Navigation Timing;
  if (!navigation) return;
  
  const load Time = navigation.load Event End - navigation.fetch Start;
  const budget = 3000; // 3 seconds
  
  if (load Time > budget) {
    console.warn(`Performance budget exceeded: ${load Time}ms > ${budget}ms`);
  }
}

// Resource hints for better performance
export function add Resource Hints(): void {
  if (typeof window === 'undefined') return;
  
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  ];
  
  hints.for Each(hint => {
    const link = document.create Element('link');
    Object.assign(link, hint);
    document.head.append Child(link);
  });
}