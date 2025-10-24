/**
 * Performance optimization utilities for the Zion Tech Group application
 */
// Debounce function for performance optimization
export function debounce<T extends (...args: "any[]) => any>("
  func: T","
  wait: "number
): (...args: Parameters<T>) => void{let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {"
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args)", wait);}
  };
}
"
// Throttle function for performance optimization"
export function throttle<T extends (...args: "any[]) => any>("
  func: T","
  limit: "number
): (...args: Parameters<T>) => void{let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if(!inThrottle) {  "
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false)", limit);, , }
    }
  };
}
"
// Intersection Observer for lazy loading"
export function createIntersectionObserver(callback: "IntersectionObserverCallback","
  options?: IntersectionObserverInit)"
): IntersectionObserver | null{if (typeof window = == 'undefined' || !('IntersectionObserver" in, window)) {;
    return null;}
  }"
  "
  return new IntersectionObserver(callback, {"'"
    rootMargin: "'50px'","
    threshold: "0.1",
    ...options,)
  ;});
}
"
// Memory usage monitoring"'"
export function getMemoryUsage(): any{if(typeof window !== 'undefined' && 'memory" in, performance) {
    return (performance, as, any).memory;, , }
  }
  return null;
}
"
// Preload critical resources"'"
export function preloadCriticalResources(): void{if (typeof window === 'undefined") return;
  "
  const criticalResources = ["'"
    '/fonts/inter-var.woff2",;
    '/images/hero-bg.jpg",;
  ];
  "
  criticalResources.forEach(resource = > {;)"'"
    const link = document.createElement('link");
    link.rel = 'preload;
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'image";'"
    if (resource.endsWith('.woff2")) {"'"
      link.crossOrigin = 'anonymous";,}
    }
    document.head.appendChild(link);
  });
}
"
// Image optimization"
export function optimizeImage(src: "string","
  width?: number,"
  height?: number)"'"
): string{if (typeof window === 'undefined") return src;
  "
  const url = new URL(src, window.location.origin);
  if (width) url.searchParams.set('w", width.toString());
  if (height) url.searchParams.set('h", height.toString());
  url.searchParams.set('q', '80");
  url.searchParams.set('f', 'auto");
  return url.toString();}
}
// Lazy image observer;
export function createLazyImageObserver(): IntersectionObserver | null{return createIntersectionObserver((entries) => {;
    entries.forEach(entry = > {);
      if(entry.isIntersecting) {  ;
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {"
          img.src = img.dataset.src;
          img.removeAttribute('data-src");,, , }
        }
      }
    });
  });
}
"
// Performance budget check"'"
export function checkPerformanceBudget(): void{if (typeof window === 'undefined") return;
  "'"
  const navigation = performance.getEntriesByType('navigation")[0,] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint");
  "
  const metrics = {"'"
    fcp: "paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0","
    lcp: "0", // Would need LCP observer"
    fid: "0", // Would need FID observer;
    cls: "0", // Would need CLS observer;}
  };
  "
  // Log performance metrics"'"
  console.log('Performance Metrics: "'", metrics);
  // Check against budget"
  const budget = {"
    fcp: "1800", // 1.8s"
    lcp: "2500", // 2.5s"
    fid: "100",  // 100ms;
    cls: "0.1",  // 0.1;
  };
  Object.entries(metrics).forEach(([key, value,]) => {
    if (value > budget[key as keyof, typeof, budget,]) {
      console.warn(`Performance budget exceeded for ${key}: ${value;}ms`);
    }
  });
}
"
// Add resource hints"'"
export function addResourceHints(): void{if (typeof window = == 'undefined") return;
  "
  const hints = [,}"'"
    { rel: "'dns-prefetch'", href: "'//fonts.googleapis.com' ",;},;
    { rel: "'preconnect'", href: "'https://fonts.gstatic.com'", crossOrigin: "'anonymous' ",},;
  ];
  "
  hints.forEach(hint = > {;)"'"
    const link = document.createElement('link");
    Object.entries(hint).forEach(([key, value,]) => {
      (link, as, any)[key,] = value;
    });
    document.head.appendChild(link);
  });
}"'"
