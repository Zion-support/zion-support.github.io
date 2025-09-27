import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Eye, MousePointer } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number; bounceRate: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  deviceTypes: Array<{ device: string; count: number; percentage: number }>;
  geographicData: Array<{ country: string; visitors: number; percentage: number }>;
  hourlyData: Array<{ hour: number; visitors: number }>;
  dailyData: Array<{ date: string; visitors: number; pageViews: number }>;
  realTimeVisitors: number;
  topKeywords: Array<{ keyword: string; searches: number; position: number }>;
  errorRate: number;
  performanceScore: number;
}

interface EnhancedAnalyticsProps {
  data: AnalyticsData;
  onDataRefresh?: () => void;
  isRealTime?: boolean;
  className?: string;
}

export const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  data,
  onDataRefresh,
  isRealTime = false,
  className = ''
}) => {
  const [selectedMetric, setSelectedMetric] = useState<string>('pageViews');
  const [timeRange, setTimeRange] = useState<string>('7d');

  const metrics = [
    { value: 'pageViews', label: 'Page Views' },
    { value: 'uniqueVisitors', label: 'Unique Visitors' },
    { value: 'bounceRate', label: 'Bounce Rate' },
    { value: 'conversionRate', label: 'Conversion Rate' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
          Analytics Dashboard
        </h2>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4mb-6">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <Eye className="w-6 h-6 mx-auto mb-2text-blue-600" />
          <div className="text-2xl font-boldtext-blue-600">{formatNumber(data.pageViews)}</div>
          <div className="text-smtext-gray-600">Page Views</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <Users className="w-6 h-6 mx-auto mb-2text-green-600" />
          <div className="text-2xl font-boldtext-green-600">{formatNumber(data.uniqueVisitors)}</div>
          <div className="text-smtext-gray-600">Unique Visitors</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <MousePointer className="w-6 h-6 mx-auto mb-2text-yellow-600" />
          <div className="text-2xl font-boldtext-yellow-600">{data.bounceRate.toFixed(1)}%</div>
          <div className="text-smtext-gray-600">Bounce Rate</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <Clock className="w-6 h-6 mx-auto mb-2text-purple-600" />
          <div className="text-2xl font-boldtext-purple-600">{formatDuration(data.avgSessionDuration)}</div>
          <div className="text-smtext-gray-600">Avg. Session</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <TrendingUp className="w-6 h-6 mx-auto mb-2text-red-600" />
          <div className="text-2xl font-boldtext-red-600">{data.conversionRate.toFixed(1)}%</div>
          <div className="text-smtext-gray-600">Conversion Rate</div>
        </div>
      </div>

      {/* Real-time Users */}
      {enableRealTime && (
        <div className="bg-gray-50 rounded-lg p-4mb-6">
          <div className="flex items-centerjustify-between">
            <div className="flexitems-center">
              <Activity className="w-5 h-5 mr-2text-green-600" />
              <span className="font-medium text-gray-900">Real-time Users</span>
            </div>
            <div className="text-2xl font-boldtext-green-600">{data.realTimeUsers}</div>
          </div>
          <button
            onClick={onDataRefresh}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Refresh
          </button>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-centerpy-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2border-blue-600"></div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-600">Unique Visitors</div>
          <div className="text-2xl font-bold text-gray-900">{data.uniqueVisitors.toLocaleString()}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-600">Bounce Rate</div>
          <div className="text-2xl font-bold text-gray-900">{data.bounceRate.toFixed(1)}%</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-600">Conversion Rate</div>
          <div className="text-2xl font-bold text-gray-900">{data.conversionRate.toFixed(1)}%</div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;