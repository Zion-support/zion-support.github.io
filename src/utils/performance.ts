// Performance optimization utilities

// Debounce function for search inputs and other frequent events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for scroll events and other high-frequency events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Lazy loading utility for images
export function lazyLoadImage(img: HTMLImageElement, src: string) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.src = src;
          observer.unobserve(img);
        }
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(img);
}

// Performance monitoring
export function measurePerformance(name: string, fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
}

// Memory usage monitoring
export function getMemoryUsage() {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
    };
  }
  return null;
}

// Preload critical resources
export function preloadResource(href: string, as: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
}

// Optimize images based on device pixel ratio
export function getOptimizedImageSrc(
  baseSrc: string,
  sizes: number[] = [1, 2, 3]
) {
  const pixelRatio = window.devicePixelRatio || 1;
  const closestSize = sizes.reduce((prev, curr) =>
    Math.abs(curr - pixelRatio) < Math.abs(prev - pixelRatio) ? curr : prev
  );

  return baseSrc.replace(/\.(jpg|jpeg|png|webp)/, `@${closestSize}x.$1`);
}
