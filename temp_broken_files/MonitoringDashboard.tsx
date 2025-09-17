import React, { useState, useEffect, useCallback } from 'react';

interface MonitoringDashboardProps {
  children: React.ReactNode;
  showDashboard?: boolean;
}

interface SystemMetrics {
  cpu: number;
  memory: number;
  network: number;
  errors: number;
  warnings: number;
  performance: number;
}

const MonitoringDashboard: React.FC<MonitoringDashboardProps> = ({ 
  children, 
  showDashboard = process.env.NODE_ENV === 'development' 
}) => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    network: 0,
    errors: 0,
    warnings: 0,
    performance: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [logs, setLogs] = useState<Array<{ timestamp: string; level: string; message: string }>>([]);

  // Collect system metrics
  const collectMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Memory usage
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? 
      ((memoryInfo.usedJSHeapSize / memoryInfo.totalJSHeapSize) * 100) : 0;

    // Performance metrics
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    const performanceScore = Math.max(0, 100 - (loadTime / 100));

    // Network status
    const networkStatus = navigator.onLine ? 100 : 0;

    // Error count (simulated)
    const errorCount = document.querySelectorAll('[data-error="true"]').length;
    const warningCount = document.querySelectorAll('[data-warning="true"]').length;

    setMetrics({
      cpu: Math.random() * 100, // Simulated CPU usage
      memory: memoryUsage,
      network: networkStatus,
      errors: errorCount,
      warnings: warningCount,
      performance: performanceScore
    });
  }, []);

  // Log system events
  const logEvent = useCallback((level: string, message: string) => {
    const timestamp = new Date().toISOString();
    setLogs(prev => [...prev.slice(-99), { timestamp, level, message }]);
  }, []);

  // Monitor performance
  const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          logEvent('info', `LCP: ${entry.startTime.toFixed(2)}ms`);
        } else if (entry.entryType === 'first-input') {
          logEvent('info', `FID: ${(entry as any).processingStart - entry.startTime}ms`);
        } else if (entry.entryType === 'layout-shift') {
          logEvent('info', `CLS: ${(entry as any).value}`);
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, [logEvent]);

  // Monitor errors
  const monitorErrors = useCallback(() => {
    const handleError = (event: ErrorEvent) => {
      logEvent('error', `Error: ${event.message} at ${event.filename}:${event.lineno}`);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logEvent('error', `Unhandled Promise Rejection: ${event.reason}`);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [logEvent]);

  // Monitor network
  const monitorNetwork = useCallback(() => {
    const handleOnline = () => {
      logEvent('info', 'Network: Online');
    };

    const handleOffline = () => {
      logEvent('warning', 'Network: Offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [logEvent]);

  useEffect(() => {
    if (!showDashboard) return;

    // Initial metrics collection
    collectMetrics();

    // Set up monitoring intervals
    const metricsInterval = setInterval(collectMetrics, 5000);
    const performanceCleanup = monitorPerformance();
    const errorCleanup = monitorErrors();
    const networkCleanup = monitorNetwork();

    return () => {
      clearInterval(metricsInterval);
      performanceCleanup();
      errorCleanup();
      networkCleanup();
    };
  }, [showDashboard, collectMetrics, monitorPerformance, monitorErrors, monitorNetwork]);

  if (!showDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Monitoring Dashboard */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          title="Toggle Monitoring Dashboard"
        >
          📊
        </button>
        
        {isVisible && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">System Monitor</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-600">CPU Usage</div>
                  <div className="text-lg font-semibold text-blue-600">
                    {metrics.cpu.toFixed(1)}%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${metrics.cpu}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-600">Memory Usage</div>
                  <div className="text-lg font-semibold text-green-600">
                    {metrics.memory.toFixed(1)}%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${metrics.memory}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-600">Network</div>
                  <div className="text-lg font-semibold text-purple-600">
                    {metrics.network === 100 ? 'Online' : 'Offline'}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${metrics.network}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-600">Performance</div>
                  <div className="text-lg font-semibold text-orange-600">
                    {metrics.performance.toFixed(1)}%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${metrics.performance}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Error/Warning Counts */}
              <div className="flex space-x-4">
                <div className="flex-1 bg-red-50 p-3 rounded text-center">
                  <div className="text-sm text-red-600">Errors</div>
                  <div className="text-2xl font-bold text-red-600">{metrics.errors}</div>
                </div>
                <div className="flex-1 bg-yellow-50 p-3 rounded text-center">
                  <div className="text-sm text-yellow-600">Warnings</div>
                  <div className="text-2xl font-bold text-yellow-600">{metrics.warnings}</div>
                </div>
              </div>
              
              {/* Logs */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Recent Logs</h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded text-xs font-mono max-h-32 overflow-y-auto">
                  {logs.slice(-10).map((log, index) => (
                    <div key={index} className="mb-1">
                      <span className="text-gray-500">[{log.timestamp.split('T')[1].split('.')[0]}]</span>
                      <span className={`ml-2 ${
                        log.level === 'error' ? 'text-red-400' :
                        log.level === 'warning' ? 'text-yellow-400' :
                        'text-green-400'
                      }`}>
                        [{log.level.toUpperCase()}]
                      </span>
                      <span className="ml-2">{log.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MonitoringDashboard;