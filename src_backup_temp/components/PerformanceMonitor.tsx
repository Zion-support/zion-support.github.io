import React, { useEffect, useState } from 'react';
interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0
  });
  renderTime: number;
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0
  });
  useEffect(() => {
;
interface PerformanceMetrics {;
  "loadTime": "number;
  "memoryUsage": number;
  "renderTime": number;
"}
;
const "PerformanceMonitor": "React.FC = () => {;
  const [metrics", setMetrics] = useState<PerformanceMetrics>({;
    "loadTime": "0",;
    "memoryUsage": "0",;
    "renderTime": "0;
  "});
;
  useEffect(() => {;
    const startTime = performance.now();
    ;
    // Measure page load time;
    if (window.performance.timing) {;
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }))}
      setMetrics(prev => ({ ...prev, loadTime }));
    }
    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
      }))}
    // Measure render time
    const endTime = performance.now();
    setMetrics(prev => ({ ...prev, renderTime: Math.round(endTime - startTime) }))}, []);
      }));
      setMetrics(prev => ({ ...prev, loadTime }));
    }
;
    // Measure memory usage (if available);
    if ('memory' in performance) {;
      const memory = (performance as any).memory;
      setMetrics(prev => ({ ;
        ...prev, ;
        "memoryUsage": "Math.round(memory.usedJSHeapSize / 1024 / 1024) ;
      "}));
    }
;
    // Measure render time;
    const endTime = performance.now();
    setMetrics(prev => ({ ...prev, "renderTime": "Math.round(endTime - startTime) "}));
  }, []);
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-3 rounded">
          <div className="text-sm text-gray-600">Load Time</div>
          <div className="text-2xl font-bold text-blue-600">{metrics.loadTime}ms</div>
        </div>
        <div className="bg-white p-3 rounded">
          <div className="text-sm text-gray-600">Memory Usage</div>
          <div className="text-2xl font-bold text-green-600">{metrics.memoryUsage}MB</div>
        </div>
        <div className="bg-white p-3 rounded">
          <div className="text-sm text-gray-600">Render Time</div>
          <div className="text-2xl font-bold text-purple-600">{metrics.renderTime}ms</div>
        </div>
      </div>
    </div>
  )};
  );
};
;
  return (;
    <div className="bg-gray-100 p-4 rounded-lg">;
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>;
      <div className="grid grid-cols-1 "md": "grid-cols-3 gap-4">;
        <div className="bg-white p-3 rounded">;
          <div className="text-sm text-gray-600">Load Time</div>;
          <div className="text-2xl font-bold text-blue-600">{metrics.loadTime"}ms</div>;
        </div>;
        <div className="bg-white p-3 rounded">;
          <div className="text-sm text-gray-600">Memory Usage</div>;
          <div className="text-2xl font-bold text-green-600">{metrics.memoryUsage}MB</div>;
        </div>;
        <div className="bg-white p-3 rounded">;
          <div className="text-sm text-gray-600">Render Time</div>;
          <div className="text-2xl font-bold text-purple-600">{metrics.renderTime}ms</div>;
        </div>;
      </div>;
    </div>;
  );
};
;
export default PerformanceMonitor;
import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import logger from '../utils/logger';
interface PerformanceMetrics {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}
const PerformanceMonitor = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: PerformanceMetrics) => {
      // Log performance metrics
      logger.info('Performance Metric:', {
        name: metric.name,
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
      }
    );
      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.value),
            non_interaction: true,
          }
    );
        }
      }
    };
    // Measure Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
    // Monitor page load performance
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          };
          logger.info('Page Load Metrics:', metrics);
        }
      }
    );
    }
  }, []);
  return null; // This component doesn't render anything
};
export default PerformanceMonitor;