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

interface RealTimeAnalyticsProps {
  data: AnalyticsData;
  onDataRefresh?: () => void;
  isLive?: boolean;
  className?: string;
}

export const RealTimeAnalytics: React.FC<RealTimeAnalyticsProps> = ({
  data = {
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    geographicData: [],
    hourlyData: [],
    dailyData: [],
    realTimeVisitors: 0,
    topKeywords: [],
    errorRate: 0,
    performanceScore: 0
  },
  onDataRefresh,
  isLive = false,
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
<<<<<<< HEAD
    <div className={`real-time-analytics ${className}` }>
      <div className="bg-white rounded-lg shadow-lgp-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flexitems-center">
            <BarChart 3 className="w-5h-5mr-2" />
            Real-Time Analytics
          </h3>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}` }></div>
            <span className="text-sm font-medium text-gray-600">
              {isLive ? 'Live' : 'Paused'}
            </span>
            <button
              onClick={() => setIsLive(!isLive)}
              className="ml-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            </button>
=======
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <BarChart3 className="w-5 h-5 mr-2" />
          Real-Time Analytics
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isLive ? 'Live' : 'Paused'}
            </span>
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
          </div>
          <button
            onClick={onDataRefresh}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Refresh
          </button>
        </div>
<<<<<<< HEAD

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Eye className="w-5 h-5" />
              <span className="text-sm opacity-90">Page Views</span>
            </div>
            <div className="text-2xl font-bold">{analytics.pageViews.toLocaleString()}</div>
            <div className="text-sm opacity-90">+12% from yesterday</div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5" />
              <span className="text-sm opacity-90">Unique Visitors</span>
            </div>
            <div className="text-2xl font-bold">{analytics.uniqueVisitors.toLocaleString()}</div>
            <div className="text-sm opacity-90">+8% from yesterday</div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <MousePointer className="w-5 h-5" />
              <span className="text-sm opacity-90">Bounce Rate</span>
            </div>
            <div className="text-2xl font-bold">{analytics.bounceRate.toFixed(1)}%</div>
            <div className="text-sm opacity-90">-2% from yesterday</div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm opacity-90">Avg. Session</span>
            </div>
            <div className="text-2xl font-bold">{formatDuration(analytics.avgSessionDuration)}</div>
            <div className="text-sm opacity-90">+15% from yesterday</div>
          </div>
=======
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <div className="text-sm font-medium opacity-90">Page Views</div>
          <div className="text-2xl font-bold">{data.pageViews.toLocaleString()}</div>
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
          <div className="text-sm font-medium opacity-90">Unique Visitors</div>
          <div className="text-2xl font-bold">{data.uniqueVisitors.toLocaleString()}</div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
          <div className="text-sm font-medium opacity-90">Bounce Rate</div>
          <div className="text-2xl font-bold">{data.bounceRate.toFixed(1)}%</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="text-sm font-medium opacity-90">Conversion Rate</div>
          <div className="text-2xl font-bold">{data.conversionRate.toFixed(1)}%</div>
        </div>
      </div>

<<<<<<< HEAD
        <div className="grid grid-cols-1lg:grid-cols-2gap-6">
          <div className="bg-gray-50 rounded-lgp-4">
            <h4 className="font-semibold text-gray-800 mb-4flexitems-center">
              <TrendingUp className="w-4h-4mr-2" />
              Top Pages
            </h4>
            <div className="space-y-3">
              {analytics.topPages.map((page, index) => (
                <div key={index} className="flex items-centerjustify-between">
                  <span className="text-smtext-gray-600">{page.page}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-fullh-2">
                      <div 
                        className="bg-blue-500 h-2rounded-full" 
                        style={{ width: `${(page.views / analytics.topPages[0].views) * 100}%` }}</p></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800">{page.views.toLocaleString()}</span>
=======
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Pages</h3>
          <div className="space-y-3">
            {data.topPages.slice(0, 5).map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{page.page}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(page.views / data.topPages[0].views) * 100}%` }}
                    ></div>
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
                  </div>
                  <span className="text-sm font-medium text-gray-800">{page.views.toLocaleString()}</span>
                </div>
<<<<<<< HEAD
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lgp-4">
            <h4 className="font-semibold text-gray-800 mb-4flexitems-center">
              <Globe className="w-4h-4mr-2" />
              Traffic Sources
            </h4>
            <div className="space-y-3">
              {analytics.trafficSources.map((source, index) => (
                <div key={index} className="flex items-centerjustify-between">
                  <span className="text-smtext-gray-600">{source.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-fullh-2">
                      <div 
                        className="bg-green-500 h-2rounded-full" 
                        style={{ width: `${source.percentage}%` }}</p></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800">{source.percentage.toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6bg-blue-50 border border-blue-200 rounded-lgp-4">
          <div className="flex items-center justify-between">
            <div className="flexitems-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulsemr-2"></div>
              <span className="text-sm font-medium text-blue-800">
                {analytics.realTimeUsers} users online now
              </span>
            </div>
            <span className="text-xstext-blue-600">Last updated: {new Date().toLocaleTimeString()}</span>
=======
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {data.trafficSources.slice(0, 5).map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{source.source}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{source.percentage.toFixed(1)}%</span>
                </div>
              </div>
            ))}
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeAnalytics;