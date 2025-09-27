import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, TrendingUp, Users, Zap, Shield, BarChart3 } from 'lucide-react';

interface DashboardMetrics {
  performance: {
    score: number;
    lcp: number;
    fid: number;
    cls: number;
  };
  analytics: {
    pageViews: number;
    uniqueVisitors: number;
    bounceRate: number;
    conversionRate: number;
  };
  security: {
    score: number;
    vulnerabilities: number;
    threatsBlocked: number;
  };
  system: {
    cpu: number;
    memory: number;
    disk: number;
    uptime: number;
  };
}

interface ComprehensiveDashboardProps {
  onMetricsUpdate?: (metrics: DashboardMetrics) => void;
  refreshInterval?: number;
  className?: string;
}

export const ComprehensiveDashboard: React.FC<ComprehensiveDashboardProps> = ({
  onMetricsUpdate,
  refreshInterval = 10000,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getOverallScore = () => {
    if (!metrics) return 0;
    const performanceScore = metrics.performance.score;
    const securityScore = metrics.security.score;
    const systemHealth = 100 - (metrics.system.cpu + metrics.system.memory + metrics.system.disk) / 3;
    return Math.round((performanceScore + securityScore + systemHealth) / 3);
  };

  const collectMetrics = useCallback(async () => {
    setIsLoading(true);
    
    // Simulate metrics collection
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockMetrics: DashboardMetrics = {
      performance: {
        score: 85,
        lcp: 2.5,
        fid: 50,
        cls: 0.1
      },
      analytics: {
        pageViews: 12500,
        uniqueVisitors: 8500,
        bounceRate: 35.2,
        conversionRate: 4.8
      },
      security: {
        score: 92,
        vulnerabilities: 0,
        threatsBlocked: 15
      },
      system: {
        cpu: 45,
        memory: 60,
        disk: 55,
        uptime: 99.9
      }
    };
    
    setMetrics(mockMetrics);
    setIsLoading(false);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(mockMetrics);
    }
  }, [onMetricsUpdate]);

  useEffect(() => {
    collectMetrics();
    const interval = setInterval(collectMetrics, refreshInterval);
    return () => clearInterval(interval);
  }, [collectMetrics, refreshInterval]);

  const overallScore = getOverallScore();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Comprehensive Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Complete overview of your application's performance, analytics, and security
          </p>
        </div>

        {/* Overall Score */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {overallScore}%
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Overall Health Score</p>
          </div>
        </div>

        {/* Metrics Grid */}
        {metrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance</h3>
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {metrics.performance.score}%
              </div>
              <p className="text-gray-600 dark:text-gray-400">Performance Score</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Analytics</h3>
                <BarChart3 className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {metrics.analytics.pageViews.toLocaleString()}
              </div>
              <p className="text-gray-600 dark:text-gray-400">Page Views</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security</h3>
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">
                {metrics.security.score}%
              </div>
              <p className="text-gray-600 dark:text-gray-400">Security Score</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System</h3>
                <Zap className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {metrics.system.uptime}%
              </div>
              <p className="text-gray-600 dark:text-gray-400">Uptime</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveDashboard;