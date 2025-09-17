import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
  connectionSpeed?: string;
}

const ModernPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (!window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const fidEntries = performance.getEntriesByType('first-input');
      const clsEntries = performance.getEntriesByType('layout-shift');

      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = lcpEntries[lcpEntries.length - 1]?.startTime || 0;
      const firstInputDelay = fidEntries[0]?.processingStart - fidEntries[0]?.startTime || 0;
      const cumulativeLayoutShift = clsEntries.reduce((acc, entry) => acc + (entry as any).value, 0);

      // Memory usage (if available)
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : undefined;

      // Connection speed (if available)
      const connection = (navigator as any).connection;
      const connectionSpeed = connection ? connection.effectiveType : undefined;

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        memoryUsage,
        connectionSpeed
      });
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Measure performance on visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        measurePerformance();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('load', measurePerformance);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const getPerformanceScore = (metric: number, thresholds: { good: number; needsImprovement: number }) => {
    if (metric <= thresholds.good) return { score: 'Good', color: 'text-green-600' };
    if (metric <= thresholds.needsImprovement) return { score: 'Needs Improvement', color: 'text-yellow-600' };
    return { score: 'Poor', color: 'text-red-600' };
  };

  const formatTime = (ms: number) => `${ms.toFixed(2)}ms`;
  const formatMemory = (mb: number) => `${mb.toFixed(2)}MB`;

  if (!metrics) return null;

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-40"
        aria-label="Toggle performance monitor"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {isVisible && (
        <div className="fixed bottom-20 left-4 bg-white rounded-lg shadow-2xl p-6 max-w-sm z-50 border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close performance monitor"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">Load Time</span>
                <span className={`text-sm font-semibold ${getPerformanceScore(metrics.loadTime, { good: 1000, needsImprovement: 3000 }).color}`}>
                  {formatTime(metrics.loadTime)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${Math.min((metrics.loadTime / 3000) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">First Contentful Paint</span>
                <span className={`text-sm font-semibold ${getPerformanceScore(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }).color}`}>
                  {formatTime(metrics.firstContentfulPaint)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${Math.min((metrics.firstContentfulPaint / 3000) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">Largest Contentful Paint</span>
                <span className={`text-sm font-semibold ${getPerformanceScore(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }).color}`}>
                  {formatTime(metrics.largestContentfulPaint)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full" 
                  style={{ width: `${Math.min((metrics.largestContentfulPaint / 4000) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">First Input Delay</span>
                <span className={`text-sm font-semibold ${getPerformanceScore(metrics.firstInputDelay, { good: 100, needsImprovement: 300 }).color}`}>
                  {formatTime(metrics.firstInputDelay)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-600 h-2 rounded-full" 
                  style={{ width: `${Math.min((metrics.firstInputDelay / 300) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">Cumulative Layout Shift</span>
                <span className={`text-sm font-semibold ${getPerformanceScore(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 }).color}`}>
                  {metrics.cumulativeLayoutShift.toFixed(3)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-600 h-2 rounded-full" 
                  style={{ width: `${Math.min((metrics.cumulativeLayoutShift / 0.25) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            {metrics.memoryUsage && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Memory Usage</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {formatMemory(metrics.memoryUsage)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${Math.min((metrics.memoryUsage / 100) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            )}

            {metrics.connectionSpeed && (
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Connection</span>
                  <span className="text-sm font-semibold text-gray-900 capitalize">
                    {metrics.connectionSpeed}
                  </span>
                </div>
              </div>
            )}

            <div className="pt-2 border-t">
              <button
                onClick={() => {
                  setMetrics(null);
                  window.location.reload();
                }}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
              >
                Refresh Metrics
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModernPerformanceMonitor;