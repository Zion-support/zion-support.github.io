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

export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver {
  return new IntersectionObserver(callback, options);
}

export function getMemoryUsage(): any {
  if (typeof performance !== 'undefined' && performance.memory) {
    return performance.memory;
  }
  return null;
}

export function preloadCriticalResources(): void {
  // Preload critical resources
  const criticalResources = [
    '/fonts/inter.woff2',
    '/images/hero-bg.jpg',
    '/css/critical.css'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 
              resource.endsWith('.css') ? 'style' : 'image';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
}

export function measurePerformance(name: string, fn: () => void): void {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
}

export function getPerformanceMetrics() {
  if (typeof performance === 'undefined') {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  return {
    navigation: {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart
    },
    paint: {
      firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
    }
  };
}

export function optimizeImages(): void {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

export function lazyLoadComponents(): void {
  const lazyComponents = document.querySelectorAll('[data-lazy-component]');
  const componentObserver = createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const componentName = element.dataset.lazyComponent;
        if (componentName) {
          // Load component dynamically
          import(`../components/${componentName}`).then(() => {
            // Component loaded
            element.classList.add('loaded');
          });
          componentObserver.unobserve(element);
        }
      }
    });
  });

  lazyComponents.forEach(component => componentObserver.observe(component));
}

export function optimizeScrollPerformance(): void {
  let ticking = false;
  
  function updateScrollPosition() {
    // Update scroll position
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick, { passive: true });
}

export function preloadRoute(route: string): void {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
}

export function getConnectionInfo() {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    };
  }
  return null;
}

export function adaptToConnectionSpeed(): void {
  const connection = getConnectionInfo();
  if (connection) {
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      // Reduce quality for slow connections
      document.body.classList.add('slow-connection');
    }
    if (connection.saveData) {
      // Enable data saver mode
      document.body.classList.add('data-saver');
    }
  }
}