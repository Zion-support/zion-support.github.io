export class PerformanceMonitor{"
:all-pages-backup/utils/performanceEnhancer.ts"
private static instance: "PerformanceMonitor"
private static instance: PerformanceMonitor"
  // Get performance metrics
getMetrics() {
return Object.fromEntries(this.metrics    )
}
  // Clear metrics
clearMetrics() {
this.metrics.clear(    )
}
  // Cleanup observers
cleanup() {
this.observers.forEach(observer = > observer.disconnect())
this.observers = []
  ,}
}
// React hook for performance monitoring
export const usePerformanceMonitor = (;</>)
const renderStartTime = useRef<number>(0)
  const monitor = PerformanceMonitor.getInstance()
useEffect(() => {
renderStartTime.current = performance.now()
    return () => {,const renderTime = performance.now() - renderStartTime.current,
monitor.trackRender(componentName, renderTime)
  })
images.forEach((img) => imageObserver.observe(img)    )
}
}px`)
    ticking = false}
  const requestTick = ()
    if(!ticking) {
requestAnimationFrame(updateScrollPosition)
    return () => {
observer.disconnect()
      return, clsValue
    }
  }
  // Start tracking
  const cleanupCLS = trackCLS()
  const cleanupLCP = trackLCP()
  const cleanupFID = trackFID()
return () => {
cleanupCLS()
    cleanupLCP()
    cleanupFID(    )
}
}
  lazyLoadImages()
  // Preload critical resources
preloadCriticalResources()
  // Optimize scroll performance