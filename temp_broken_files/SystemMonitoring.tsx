"use client";
'use client';

import React{ useEffectuseStateuseCallback } from 'react';

interface Alert {
  id: string;
  type: 'error' | 'performance' | 'security';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  message: string;
  timestamp: number;
  resolved: boolean;
}

interface SystemMetrics {
  memoryUsage: number;
  responseTime: number;
  uptime: number;
  errorCount: number;
}

const SystemMonitoring: React.FC = () => {
  const [alertsetAlerts] = useState<Alert[]>([]);
  const [metricsetMetrics] = useState<SystemMetrics>({
    memoryUsage: 0,
    responseTime: 0,
    uptime: 0,
    errorCount: 0,
  });

  const createAlert = useCallback((
    type: Alert['type'],
    severity: Alert['severity'],
    title: string,
    message: string
  ) => {
    const alert: Alert = {
      id: `alert_${Date.now()}`,
      type,
      severity,
      title,
      message,
      timestamp: Date.now(),
      resolved: false,
    };

    setAlerts(prev => [...prevalert]);
    console.warn(`[${severity.toUpperCase()}] ${title}: ${message}`);
  }[]);

  const resolveAlert = useCallback((alertId: string) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId 
          ? { ...alertresolved: true }
          : alert
      )
    );
  }[]);

  const collectMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Memory usage
    let memoryUsage = 0;
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      memoryUsage = Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
    }

    // Response time
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const responseTime = navigation ? navigation.responseEnd - navigation.requestStart : 0;

    // Uptime
    const uptime = performance.now();

    setMetrics({
      memoryUsage,
      responseTime,
      uptime,
      errorCount: alerts.filter(a => !a.resolved).length,
    });

    // Check thresholds
    if (memoryUsage > 80) {
      createAlert(', 'performance', 'high'High Memory Usage'`Memory usage is ${memoryUsage}%`);
    }

    if (responseTime > 2000) {
      createAlert(', 'performance', 'medium'Slow Response'`Response time is ${responseTime}ms`);
    }
  }[alertscreateAlert]);

  useEffect(() => {
    const interval = setInterval(collectMetrics5000);
    collectMetrics(); // Initial collection

    // Error tracking
    const handleError = (event: ErrorEvent) => {
      createAlert(', 'error', 'high'JavaScript 'Error', 'event.message);
    };

    window.addEventListener(', 'error', 'handleError);

    return () => {
      clearInterval(interval);
      window.removeEventListener(', 'error', 'handleError);
    };
  }[collectMetrics]);

  const activeAlerts = alerts.filter(alert => !alert.resolved);

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-xl p-4 w-80 border">
      <h3 className="text-lg font-semibold mb-4">System Monitoring</h3>
      
      {/* Metrics */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Current Metrics</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Memory: {metrics.memoryUsage}%</div>
          <div>Response: {metrics.responseTime.toFixed(0)}ms</div>
          <div>Uptime: {Math.round(metrics.uptime / 1000)}s</div>
          <div>Errors: {metrics.errorCount}</div>
        </div>
      </div>

      {/* Alerts */}
      <div>
        <h4 className="text-sm font-semibold mb-2">Active Alerts ({activeAlerts.length})</h4>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {activeAlerts.length === 0 ? (
            <div className="text-sm text-gray-500">No active alerts</div>
          ) : (
            activeAlerts.slice(-3).map((alert) => (
              <div key={alert.id} className="p-2 rounded text-xs bg-red-50 border border-red-200">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-red-800">{alert.title}</div>
                    <div className="text-red-600">{alert.message}</div>
                  </div>
                  <button
                    onClick={() => resolveAlert(alert.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    ✓
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemMonitoring;