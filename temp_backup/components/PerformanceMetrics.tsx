<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Clock, Target, Activity } from 'lucide-react';

interface PerformanceMetricsProps {
  className?: string;
}

interface Metrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<Metrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate performance metrics for demo purposes
    // In production, this would use the Web Vitals API
    const simulateMetrics = () => {
      setMetrics({
        lcp: Math.random() * 2000 + 500, // 500-2500ms
        fid: Math.random() * 100 + 10,   // 10-110ms
        cls: Math.random() * 0.1 + 0.01, // 0.01-0.11
        ttfb: Math.random() * 300 + 50,  // 50-350ms
        fcp: Math.random() * 1500 + 300  // 300-1800ms
      });
    };

    simulateMetrics();
    setIsVisible(true);

    // Update metrics every 30 seconds
    const interval = setInterval(simulateMetrics, 30000);

    return () => clearInterval(interval);
  }, []);

  const getScoreColor = (value: number, threshold: number, isLowerBetter: boolean = true) => {
    if (isLowerBetter) {
      return value <= threshold ? 'text-green-400' : value <= threshold * 1.5 ? 'text-yellow-400' : 'text-red-400';
    } else {
      return value >= threshold ? 'text-green-400' : value >= threshold * 0.7 ? 'text-yellow-400' : 'text-red-400';
    }
  };

  const getScoreLabel = (value: number, threshold: number, isLowerBetter: boolean = true) => {
    if (isLowerBetter) {
      return value <= threshold ? 'Good' : value <= threshold * 1.5 ? 'Needs Improvement' : 'Poor';
    } else {
      return value >= threshold ? 'Good' : value >= threshold * 0.7 ? 'Needs Improvement' : 'Poor';
    }
  };

  const metricsData = [
    {
      name: 'Largest Contentful Paint',
      value: metrics.lcp,
      unit: 'ms',
      threshold: 2500,
      icon: Clock,
      description: 'Time to render the largest content element',
      isLowerBetter: true
    },
    {
      name: 'First Input Delay',
      value: metrics.fid,
      unit: 'ms',
      threshold: 100,
      icon: Zap,
      description: 'Time from first interaction to response',
      isLowerBetter: true
    },
    {
      name: 'Cumulative Layout Shift',
      value: metrics.cls,
      unit: '',
      threshold: 0.1,
      icon: Target,
      description: 'Visual stability during page load',
      isLowerBetter: true
    },
    {
      name: 'Time to First Byte',
      value: metrics.ttfb,
      unit: 'ms',
      threshold: 200,
      icon: Activity,
      description: 'Server response time',
      isLowerBetter: true
    },
    {
      name: 'First Contentful Paint',
      value: metrics.fcp,
      unit: 'ms',
      threshold: 1800,
      icon: TrendingUp,
      description: 'Time to first content render',
      isLowerBetter: true
    }
  ];
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">PerformanceMetrics</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default PerformanceMetrics;
