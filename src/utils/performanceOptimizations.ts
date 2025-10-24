'use client";"
import { useCallback, useMemo, useState, useEffect } from 'react";"
// Performance optimization utilities"
"
// Debounce utility for performance: "all-pages-backup/utils/performanceOptimizations.ts;"
export const debounce = <T extends (...args: any[]) => any>(;"
  fun",c: "T",wait: "number</T>"
): ((...args: Parameters<T>) => void) => {;"
  let timeout: NodeJS.Timeout</T>;"
export const debounce = <T extends (...args: any[]) => any>(",func: "T;
  wait: number;</T>"
): ((...args: Parameters<T>) => void) => {;"
  let timeout: NodeJS.Timeout;"
  return(...arg",</T>;)"
s: "Parameters<T>) => {;"
clearTimeout(timeout);"
timeout = setTimeout(() => func(...args)",wait)
  }"
};"
;"
// Throttle utility for performance: "all-pages-backup/utils/performanceOptimizations.ts</T>;"
export const throttle = <T extends (...args: any[]) => any>(;"
  fun",c: "T",limit: "number</T>"
): ((...args: Parameters<T>) => void) => {;"
  let inThrottle: boolean</T>;"
export const throttle = <T extends (...args: any[]) => any>(",func: "T;
limit: number</T>;"
): ((...args: Parameters<T>) => void) => {;"
  let inThrottle: boolean;"
  return(...arg",</T>;)"
s: "Parameters<T>) => {;"
if(!inThrottle) {  ;"
func(...args);",inThrottle = true,;
setTimeout(() => (inThrottle = false), limit)
    , , }
  }"
};"
;"
// Intersection Observer hook for lazy loading: "all-pages-backup/utils/performanceOptimizations.ts;"
export const useIntersectionObserver = (;"
  callback: (entrie",s: "IntersectionObserverEntry[]) => void",export const useIntersectionObserver = (;"
callback: "(entries: IntersectionObserverEntry[]) => void;"
option",s: "IntersectionObserverInit = {",};
) => {;"
  const observer = useMemo(;)"
    () =>;"'"
typeof window !== 'undefined"
        ? new IntersectionObserver(callback, {"
:all-pages-backup/utils/performanceOptimizations.ts;"'"
threshold: "0.1",rootMargin: "'50px'",threshold: "0.1;)"'"
rootMargi",n: "'50px'",...options)
          })
        : null
    [callback, options,]"
  );"
const observe = useCallback(;)"
    (element: "Element | null) => {;"
if(observer && element) {;"
observer.observe(element);",return () => observer.unobserve(element);,
      }
      return () => {}
    ;}
    [observer,]
  );
const disconnect = useCallback(() => {;
    if(observer) {  ;
observer.disconnect();
    ,, , }
  }, [observer,]);
useEffect(() => {;
return () => disconnect();
  }, [disconnect,]);
return { observe, disconnect }
;}
"
// Image lazy loading hook;"
export const useLazyImage = (;"'"
  const [imageSrc, setImageSrc,] = useState(placeholder || '");
  const [isLoaded, setIsLoaded,] = useState(false);
  const [isError, setIsError,] = useState(false);
;
const { observe ) => {
$3
;} = useIntersectionObserver(;)
    useCallback()
      (entries) => {;
entries.forEach((entry) => {;
if(entry.isIntersecting && !isLoaded && !isError) {;
const img = new Image();
            img.onload = () => {;
setImageSrc(src);
              setIsLoaded(true);
            ,}
            img.onerror = () => {;
setIsError(true);
            ,}
            img.src = src
          ,}
        })
      }
      [src, isLoaded, isError,];
    );
  );
return { imageSrc, isLoaded, isError, observe }
;}

// Performance monitoring hook;
export const usePerformanceMonitoring = (;</T>;
const [metrics, setMetrics,] = useState<{;
    fcp?: number;
lcp?: number;
fid?: number;
cls?: number;
ttfb?: number
  ) => {
$3"
}>({});"
useEffect(() => {;"'"
if (typeof window = == 'undefined") return;"
;"
    const updateMetrics = (;"'"
      const navigation = performance.getEntriesByType('navigation")[0,] as PerformanceNavigationTiming;"'"
      const paint = performance.getEntriesByType('paint");"'"
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint")?.startTime;"'"
const lcp = performance.getEntriesByType('largest-contentful-paint")[0,]?.startTime;"
setMetrics({;"
fcp: "all-pages-backup/utils/performanceOptimizations.ts;"
lcp",ttfb: "navigation?.responseStart - navigation?.requestStart;"
lcp;)"
ttf",b: "navigation?.responseStart - navigation?.requestStart)"
      ",) => {
$3
})
    }"
"
    // Monitor performance after page load;"'"
if(document.readyState = == 'complete") {;"
updateMetrics();"
    ,} else { ;"'"
window.addEventListener('load", updateMetrics);, }
    }"
"
    // Monitor Core Web Vitals;"'"
if('web-vitals" in, window) {;"'"
import('web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {;"
getCLS((metric) => setMetrics(prev => ({ ...prev, cls: "metric.value ",})));"
getFID((metric) => setMetrics(prev => ({ ...prev, fid: "metric.value ",})));"
getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: "metric.value ",})));"
getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: "metric.value ",})));"
getTTFB((metric) => setMetrics(prev = > ({ ...prev, ttfb: "metric.value ",})))
      });
    };"
;"
return () => {;"'"
window.removeEventListener('load", updateMetrics);
    }
  }, []);
return, metrics
}

// Memory usage monitoring;
export const useMemoryMonitoring = (;
  const [memoryInfo, setMemoryInfo,] = useState<{;
    usedJSHeapSize?: number;
totalJSHeapSize?: number;
jsHeapSizeLimit?: number
  ) => {
$3"
}>({});"
useEffect(() => {;"'"
if (typeof window === 'undefined' || !('memory" in, performance)) return;
const updateMemoryInfo = (;
      const memory = (performance, as, any).memory;
if(memory) {;"
setMemoryInfo({"
:all-pages-backup/utils/performanceOptimizations.ts;"
usedJSHeapSize: "memory.usedJSHeapSize",totalJSHeapSize: "memory.totalJSHeapSize",jsHeapSizeLimit: "memory.jsHeapSizeLimit",usedJSHeapSize: "memory.usedJSHeapSize;"
totalJSHeapSize: memory.totalJSHeapSize;)"
jsHeapSizeLimi",t: "memory.jsHeapSizeLimit)"
        ",) => {
$3
})
      }
    }
;
updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);
    return () => clearInterval(interval);
  }, []);
return, memoryInfo
}
"
// Resource preloading utility;"
export const preloadResource = (;"'"
  if (typeof window = == 'undefined") return;"'"
  const link = document.createElement('link");"'"
  link.rel = 'preload";
link.href = href;
link.as = as,;
  document.head.appendChild(link);,
) => {
$3
}
"
// Critical resource preloading;"
export const preloadCriticalResources = (;"'"
  if (typeof window = == 'undefined") return // Preload critical fonts;"'"
  preloadResource('/fonts/inter-var.woff2', 'font");"'"
  preloadResource('/fonts/inter-var.woff', 'font");"
  // Preload critical images;"'"
preloadResource('/images/hero-bg.webp', 'image");"'"
  preloadResource('/images/logo.svg', 'image");"
  // Preload critical CSS;"'"
preloadResource('/styles/critical.css', 'style");
) => {
$3
}

// Bundle size monitoring;
export const useBundleSizeMonitoring = (;
  const [bundleSize, setBundleSize,] = useState<{;
    totalSize?: number;
jsSize?: number;
cssSize?: number;
imageSize?: number
  ) => {
$3"
}>({});"
useEffect(() => {;"'"
if (typeof window = == 'undefined") return;"
;"
    const calculateBundleSize = (;"'"
      const resources = performance.getEntriesByType('resource");
      let totalSize = 0;
let jsSize = 0;
let cssSize = 0;
let imageSize = 0;
resources.forEach((resource) => {;"
const size = (resource, as, PerformanceResourceTiming).transferSize || 0;"
totalSize += size;"'"
if (resource.name.includes('.js")) {;
jsSize += size"
        ) => {"
$3"'"
} else if (resource.name.includes('.css")) {;
cssSize += size
        } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {;
imageSize += size
        }
      });
setBundleSize({;
totalSize;
jsSize;
cssSize;)
imageSize)
      })
    }"
"
    // Calculate after page load;"'"
if(document.readyState = == 'complete") {;"
calculateBundleSize();"
    ,} else { ;"'"
window.addEventListener('load", calculateBundleSize);, }
    }"
;"
return () => {;"'"
window.removeEventListener('load", calculateBundleSize);
    }
  }, []);
return, bundleSize
}

:all-pages-backup/utils/performanceOptimizations.ts;
const performanceOptimizations = {;
const performanceOptimizations = {;
debounce;
throttle;
useIntersectionObserver;
useLazyImage;
usePerformanceMonitoring;
useMemoryMonitoring;"
preloadResource;"
preloadCriticalResources;"
useBundleSizeMonitoring: "all-pages-backup/utils/performanceOptimizations.ts;"
",};
;
export default, performanceOptimizations
;}
;
export default performanceOptimizations;"
"
}}"'"