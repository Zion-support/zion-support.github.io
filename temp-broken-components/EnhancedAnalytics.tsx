import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  TrendingUp, 
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Clock,
  Activity
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRat, e: number;
  realTimeUser, s: number;
}

interface EnhancedAnalyticsProps {
  refreshInterval?: number;
  enableRealTime?: boolean;
  onDataUpdate?: (data: AnalyticsData) => void;
}

export const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  refreshInterval = 30000,
  enableRealTime = true,
  onDataUpdate
}) => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    realTimeUsers: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const generateMockData = useCallback((): AnalyticsData => {
    return {
      pageViews: Math.floor(Math.random() * 10000) + 5000,
      uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
      bounceRate: Math.random() * 40 + 20,
      avgSessionDuration: Math.random() * 300 + 120,
      conversionRate: Math.random() * 5 + 1,
      realTimeUsers: Math.floor(Math.random() * 50) + 10
    };
  }, []);

  const updateData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newData = generateMockData();
      setData(newData);
      setLastUpdated(new Date());
      setIsLoading(false);
      onDataUpdate?.(newData);
    }, 1000);
  }, [generateMockData, onDataUpdate]);

  useEffect(() => {
    updateData();
    const interval = setInterval(updateData, refreshInterval);
    return () => clearInterval(interval);
  }, [updateData, refreshInterval]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flexitems-center">
          <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
          Analytics Dashboard
        </h2>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5ga p-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <Eye className="w-6 h-6mx-auto mb-2 text-blue-600" />
          <div className="text-2xl font-bold text-blue-600">{formatNumber(data.pageViews)}</div> <div className="text-sm text-gray-600">Page Views</div>
        </div> <div className="bg-green-50 rounded-lg p-4 text-center">
          <Users className="w-6 h-6mx-auto mb-2 text-green-600" />
          <div className="text-2xl font-bold text-green-600">{formatNumber(data.uniqueVisitors)}</div> <div className="text-sm text-gray-600">Unique Visitors</div>
        </div> <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <MousePointer className="w-6 h-6mx-auto mb-2 text-yellow-600" />
          <div className="text-2xl font-bold text-yellow-600">{data.bounceRate.toFixed(1)}%</div> <div className="text-sm text-gray-600">Bounce Rate</div>
        </div> <div className="bg-purple-50 rounded-lg p-4 text-center">
          <Clock className="w-6 h-6mx-auto mb-2 text-purple-600" />
          <div className="text-2xl font-bold text-purple-600">{formatDuration(data.avgSessionDuration)}</div> <div className="text-sm text-gray-600">Avg. Session</div>
        </div> <div className="bg-red-50 rounded-lg p-4 text-center">
          <TrendingUp className="w-6 h-6mx-auto mb-2 text-red-600" />
          <div className="text-2xl font-bold text-red-600">{data.conversionRate.toFixed(1)}%</div> <div className="text-sm text-gray-600">Conversion Rate</div>
        </div>
      </div>

      {/* Real-time Users */}
      {enableRealTime && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flexitems-center">
              <Activity className="w-5 h-5 mr-2 text-green-600" />
              <span className="font-medium text-gray-900">Real-time Users</span>
            </div> <div className="text-2xl font-bold text-green-600">{data.realTimeUsers}</div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border -b-2 border -blue-600"></div>
        </div>
      )}
    </div>
  );
};

export default EnhancedAnalytics;