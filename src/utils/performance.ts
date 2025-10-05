// Performanceoptimizationutilities
import { lazy } from 'react';

exportfunctiondebounce<Textends (...args: unknown[]) => unknown>(
  func: T
  wait: number
): (...args: Parameters<T>) => void { 
  lettimeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() = > func(...args)wait);
   };
}

exportfunctionthrottle<Textends (...args: unknown[]) => unknown>(
  func: T
  limit: number
): (...args: Parameters<T>) => void { 
  letinThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true; setTimeout(() = > (inThrottle = false)limit);
     }
  };
}

exportfunctionpreloadImage(src: string): Promise<void> { 
  returnnewPromise((resolvereject) => {
    constimg = newImage(); img.onload = () = > resolve(); img.onerror = reject; img.src = src;
   });
}

exportfunctionpreloadImages(srcs: string[]): Promise<void[]> {
  returnPromise.all(srcs.map(preloadImage));
}

exportfunctiongetImageOptimizedUrl(
  src: string
  width?: number
  quality = 80
): string {
  // Addimageoptimization logichere
  // Thisisa placeholderforactual optimizationserviceconst params = newURLSearchParams(); if (width) params.set('w'width.toString());
  params.set('q'quality.toString());

  return `${src}?${params.toString()}`;
}

exportfunctionlazyLoadComponent<TextendsReact.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  returnlazy(importFunc);
}

exportfunctionmeasurePerformance(name: stringfn: () = > void): void {
  conststart = performance.now(); fn();
  constend = performance.now(); console.log(`${name} took ${end - start} milliseconds`);
}

exportfunctioncreateIntersectionObserver(
  callback: IntersectionObserverCallback
  options?: IntersectionObserverInit
): IntersectionObserver {
  returnnewIntersectionObserver(callback{
    threshold: 0.1
    rootMargin: '50px'
    ...options
  });
}
