import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWebVitals } from '../hooks/useWebVitals';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceDashboard: React.FC = () => {
  const { vitals, isSupported, getVitalScore, getVitalColor } = useWebVitals();
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const firstPaint = paint.find(entry => entry.name === 'first-paint')?.startTime || 0;
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;

      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        firstPaint,
        firstContentfulPaint,
        largestContentfulPaint: vitals.LCP || 0,
        firstInputDelay: vitals.FID || 0,
        cumulativeLayoutShift: vitals.CLS || 0,
      });
    };

    // Update metrics when vitals change
    updateMetrics();

    // Update metrics on page load
    window.addEventListener('load', updateMetrics);
    
    return () => window.removeEventListener('load', updateMetrics);
  }, [vitals]);

  const getPerformanceScore = (): number => {
    if (!metrics) return0;

    let score = 100;
    
    // LCP scoring
    if (metrics.largestContentfulPaint > 4000) score -= 30;
    else if (metrics.largestContentfulPaint > 2500) score -= 15;
    
    // FID scoring
    if (metrics.firstInputDelay > 300) score -= 25;
    else if (metrics.firstInputDelay > 100) score -= 10;
    
    // CLS scoring
    if (metrics.cumulativeLayoutShift > 0.25) score -= 25;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    
    // Load time scoring
    if (metrics.loadTime > 5000) score -= 20;
    else if (metrics.loadTime > 3000) score -= 10;

    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (!isSupported) {
    return (
      <div className="p-4 bg-yellow-50border border-yellow-200rounded-md">
        <p className="text-sm text-yellow-800">
          Performance monitoring is not supported in this browser.
        </p>
      </div>
    );
  }

  const performanceScore = getPerformanceScore();

  return (

:temp-broken-components/PerformanceDashboard.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/PerformanceDashboard.tsx
        </button>
      </div>

      {/* Overall Performance Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Score</span>

:temp-broken-components/PerformanceDashboard.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/PerformanceDashboard.tsx
            {performanceScore}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div

            className={`h-2 rounded-full ${getScoreBgColor(performanceScore)}` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/PerformanceDashboard.tsx
            style={{ width: `${performanceScore}%` }}
          ></div>
        </div>
      </div>

      {/* Core Web Vitals */}

:temp-broken-components/PerformanceDashboard.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/PerformanceDashboard.tsx
              {vitals.LCP ? `${Math.round(vitals.LCP)}ms` : 'N/A'}
            </span>
          </div>
          <p className="text-xs text-gray-500">Largest Contentful Paint</p>
        </div>


:temp-broken-components/PerformanceDashboard.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/PerformanceDashboard.tsx
              {vitals.FID ? `${Math.round(vitals.FID)}ms` : 'N/A'}
            </span>
          </div>
          <p className="text-xs text-gray-500">First Input Delay</p>
        </div>


:temp-broken-components/PerformanceDashboard.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/PerformanceDashboard.tsx
              {vitals.CLS ? vitals.CLS.toFixed(3) : 'N/A'}
            </span>
          </div>
          <p className="text-xs text-gray-500">Cumulative Layout Shift</p>
        </div>
      </div>


:temp-broken-components/PerformanceDashboard.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/PerformanceDashboard.tsx
        <AnimatePresence>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-4border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">

:temp-broken-components/PerformanceDashboard.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/PerformanceDashboard.tsx
                  {getStatusIcon(metric.status)}
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
:temp-broken-components/PerformanceDashboard.tsx
                  {metric.value.toFixed(metric.unit === 'score' ? 2 : 0)}
                </span>
                <span className="text-sm text-gray-500">{metric.unit}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{metric.description}</span>
                <div className="flex items-center">
                  {getTrendIcon(metric.trend)}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detailed Metrics */}
      {isVisible && metrics && (
        <div className="space-y-4">

:temp-broken-components/PerformanceDashboard.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/PerformanceDashboard.tsx
          
          <div className="grid grid-cols-1 md:grid-cols-2gap-4">
            <div className="p-3 bg-gray-50rounded">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Load Time</span>
                <span className="text-sm font-medium">{Math.round(metrics.loadTime)}ms</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-50rounded">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">DOM Content Loaded</span>
                <span className="text-sm font-medium">{Math.round(metrics.domContentLoaded)}ms</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-50rounded">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">First Paint</span>
                <span className="text-sm font-medium">{Math.round(metrics.firstPaint)}ms</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-50rounded">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">First Contentful Paint</span>
                <span className="text-sm font-medium">{Math.round(metrics.firstContentfulPaint)}ms</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;