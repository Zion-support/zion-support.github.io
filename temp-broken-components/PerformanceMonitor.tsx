import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  fmp: number;
  tbt: number;
  si: number;
  overallScore: number;
  timestamp: Date;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showDashboard?: boolean;
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  showDashboard = true,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const collectMetrics = useCallback(async () => {
    if (typeof window === 'undefined') return;

    setIsMonitoring(true);
    
    // Simulate metrics collection
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockMetrics: PerformanceMetrics = {
      lcp: 2.5,
      fid: 50,
      cls: 0.1,
      fcp: 1.2,
      ttfb: 200,
      fmp: 1.5,
      tbt: 100,
      si: 2.0,
      overallScore: 85,
      timestamp: new Date()
    };
    
    setMetrics(mockMetrics);
    setIsMonitoring(false);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(mockMetrics);
    }
  }, [onMetricsUpdate]);

  useEffect(() => {
    collectMetrics();
  }, [collectMetrics]);

  const formatTime = (ms: number) => `${ms.toFixed(0)}ms`;
  const formatScore = (value: number) => value.toFixed(2);

  if (!showDashboard || !metrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span className="text-sm text-gray-600">
            {isMonitoring ? 'Monitoring' : 'Paused'}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">LCP</span>
            <Activity className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatTime(metrics.lcp * 1000)}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">FID</span>
            <Zap className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatTime(metrics.fid)}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">CLS</span>
            <TrendingUp className="w-4 h-4 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatScore(metrics.cls)}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Overall Score</span>
            <Clock className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.overallScore}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          sendToAnalytics({ cls: clsValue });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            sendToAnalytics({ fcp: entry.startTime });
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }

    // Measure Time to First Byte
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            sendToAnalytics({ ttfb: (entry as any).responseStart - (entry as any).requestStart });
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }

    measureWebVitals();
  }, []);

  return null;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}