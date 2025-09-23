import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        const layoutShiftEntries = performance.getEntriesByType('layout-shift');
        const firstInputEntries = performance.getEntriesByType('first-input');

        const newMetrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: 0, // Will be updated by LCP observer
          cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry) => sum + (entry as any).value, 0),
          firstInputDelay: firstInputEntries[0]?.processingStart ? (firstInputEntries[0] as any).processingStart - (firstInputEntries[0] as any).startTime : 0
        };

        setMetrics(newMetrics);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  useEffect(() => {
    // Show performance monitor after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const getPerformanceScore = (metric: keyof PerformanceMetrics): { score: number; color: string; label: string } => {
    if (!metrics) return { score: 0, color: 'text-gray-400', label: 'N/A' };

    const value = metrics[metric];
    let score = 0;
    let color = 'text-red-400';
    let label = 'Poor';

    switch (metric) {
      case 'loadTime':
        if (value < 1000) { score = 100; color = 'text-green-400'; label = 'Excellent'; }
        else if (value < 2000) { score = 80; color = 'text-yellow-400'; label = 'Good'; }
        else if (value < 4000) { score = 60; color = 'text-orange-400'; label = 'Fair'; }
        else { score = 40; color = 'text-red-400'; label = 'Poor'; }
        break;
      
      case 'firstContentfulPaint':
        if (value < 1000) { score = 100; color = 'text-green-400'; label = 'Excellent'; }
        else if (value < 2000) { score = 80; color = 'text-yellow-400'; label = 'Good'; }
        else if (value < 3000) { score = 60; color = 'text-orange-400'; label = 'Fair'; }
        else { score = 40; color = 'text-red-400'; label = 'Poor'; }
        break;
      
      case 'cumulativeLayoutShift':
        if (value < 0.1) { score = 100; color = 'text-green-400'; label = 'Excellent'; }
        else if (value < 0.25) { score = 80; color = 'text-yellow-400'; label = 'Good'; }
        else if (value < 0.5) { score = 60; color = 'text-orange-400'; label = 'Fair'; }
        else { score = 40; color = 'text-red-400'; label = 'Poor'; }
        break;
      
      default:
        score = 75;
        color = 'text-blue-400';
        label = 'Good';
    }

    return { score, color, label };
  };

  if (!isVisible || !metrics) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-4 right-4 bg-zion-slate-dark/90 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-4 shadow-2xl shadow-zion-cyan/10 z-50 max-w-sm"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white flex items-center">
            <Activity className="w-4 h-4 mr-2 text-zion-cyan" />
            Performance Monitor
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-zion-slate-light hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-zion-slate-light">
              <Clock className="w-3 h-3 mr-1" />
              Load Time
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-white">
                {metrics.loadTime.toFixed(0)}ms
              </div>
              <div className={`text-xs ${getPerformanceScore('loadTime').color}`}>
                {getPerformanceScore('loadTime').label}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-zion-slate-light">
              <Zap className="w-3 h-3 mr-1" />
              FCP
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-white">
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </div>
              <div className={`text-xs ${getPerformanceScore('firstContentfulPaint').color}`}>
                {getPerformanceScore('firstContentfulPaint').label}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-zion-slate-light">
              <TrendingUp className="w-3 h-3 mr-1" />
              CLS
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-white">
                {metrics.cumulativeLayoutShift.toFixed(3)}
              </div>
              <div className={`text-xs ${getPerformanceScore('cumulativeLayoutShift').color}`}>
                {getPerformanceScore('cumulativeLayoutShift').label}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-zion-slate-light/20">
          <div className="text-xs text-zion-slate-light text-center">
            Performance insights for developers
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;