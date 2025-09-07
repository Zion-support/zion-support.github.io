import React from 'react';
export default function PerformanceMonitor() {
  return (
    <div className="performance-monitor">
      <p>Performance Monitor</p>
    </div>
  );
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = process.env.NODE_ENV === 'development',
  logToConsole = true,
  sendToAnalytics = false
}) => {
  const { measurePerformance, logPerformance } = usePerformance();

  useEffect(() => {
    if (!enabled) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Re-measure performance when page becomes visible
        setTimeout(logPerformance, 1000);
      }
    };

    const handleBeforeUnload = () => {
      // Log final performance metrics before page unload
      logPerformance();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled, logPerformance]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (logToConsole) {
          console.log(`Performance Entry: ${entry.name}`, {
            duration: entry.duration,
            startTime: entry.startTime,
            entryType: entry.entryType
          });
        }

        if (sendToAnalytics) {
          // Send to analytics service
          // analytics.track('performance_entry', {
          //   name: entry.name,
          //   duration: entry.duration,
          //   startTime: entry.startTime,
          //   entryType: entry.entryType
          // });
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'largest-contentful-paint'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }, [location.pathname]),;
,;
  // Show performance issues,;
  useEffect(() => {,;
    const hasPerformanceIssues =,;
      metrics.pageLoadTime > 3000 || // > 3 seconds,;
      metrics.memoryUsage > 100 || // > 100 MB,;
      !metrics.isOnline,;
,;
    if (hasPerformanceIssues) {,;
      setIsVisible(true),;
      // Auto-hide after 10 seconds,;
      const timer = setTimeout(() => setIsVisible(false), 10000),;
      return () => clearTimeout(timer);
    }
  }, [metrics]),;
,;
  if (!isVisible) return null,;
,;
  return (,;
    <div className="fixed bottom-4 right-4 z-50">,;
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">,;
        <div className="flex items-center gap-3 mb-3">,;
          <BarChart3 className="w-5 h-5 text-blue-400" />,;
          <span className="text-sm font-medium text-white">Performance Monitor</span>,;
          <button,;
            onClick={() => setIsVisible(false)},;
interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const startTime = performance.now()
    
    // Monitor page load time
    const handleLoad = () => {
      const loadTime = performance.now() - startTime
      const renderTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
      
      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: memoryUsage ? Math.round(memoryUsage / 1024 / 1024) : undefined
      })
    }

    // Monitor render performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          console.log(`Performance: ${entry.name} took ${entry.duration}ms`)
        }
      })
    })

    observer.observe({ entryTypes: ['measure'] })

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
      observer.disconnect()
    }
  }, [])

  if (!metrics || process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-blue-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 min-w-64">
          <h3 className="font-semibold text-gray-900 mb-2">Performance Metrics</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className="font-medium">{metrics.loadTime}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Render Time:</span>
              <span className="font-medium">{metrics.renderTime}ms</span>
            </div>
            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span className="text-gray-600">Memory:</span>
                <span className="font-medium">{metrics.memoryUsage}MB</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PerformanceMonitor
