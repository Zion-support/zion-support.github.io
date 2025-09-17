import React, { useEffect, useState } from 'react';
import { ChartBarIcon, EyeIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  averageTimeOnSite: string;
  bounceRate: string;
  topPages: Array<{ path: string; views: number }>;
  realtimeUsers: number;
}

interface AdvancedAnalyticsTrackerProps {
  showRealtime?: boolean;
  showTopPages?: boolean;
  className?: string;
}

const AdvancedAnalyticsTracker: React.FC<AdvancedAnalyticsTrackerProps> = ({
  showRealtime = true,
  showTopPages = true,
  className = ""
}) => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    averageTimeOnSite: '0:00',
    bounceRate: '0%',
    topPages: [],
    realtimeUsers: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate analytics data loading
    const loadAnalytics = async () => {
      try {
        // In a real application, this would fetch from your analytics API
        const mockData: AnalyticsData = {
          pageViews: Math.floor(Math.random() * 10000) + 5000,
          uniqueVisitors: Math.floor(Math.random() * 3000) + 1500,
          averageTimeOnSite: `${Math.floor(Math.random() * 5) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
          bounceRate: `${Math.floor(Math.random() * 30) + 25}%`,
          topPages: [
            { path: '/pages/AIInnovationHub2026', views: Math.floor(Math.random() * 500) + 200 },
            { path: '/pages/QuantumComputingSolutions2026', views: Math.floor(Math.random() * 400) + 150 },
            { path: '/pages/NeuralInterfaceTechnology2026', views: Math.floor(Math.random() * 350) + 100 },
            { path: '/pages/ComprehensiveBlog2026', views: Math.floor(Math.random() * 300) + 80 },
            { path: '/pages/ComprehensiveCaseStudies2026', views: Math.floor(Math.random() * 250) + 60 }
          ],
          realtimeUsers: Math.floor(Math.random() * 50) + 10
        };

        setAnalytics(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading analytics:', error);
        setIsLoading(false);
      }
    };

    loadAnalytics();

    // Update realtime users every 30 seconds
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        realtimeUsers: Math.floor(Math.random() * 50) + 10
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <ChartBarIcon className="h-5 w-5 mr-2 text-blue-600" />
          Analytics Overview
        </h3>
        {showRealtime && (
          <div className="flex items-center text-sm text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            {analytics.realtimeUsers} users online
          </div>
        )}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">Page Views</p>
              <p className="text-2xl font-bold text-blue-900">{analytics.pageViews.toLocaleString()}</p>
            </div>
            <EyeIcon className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">Unique Visitors</p>
              <p className="text-2xl font-bold text-green-900">{analytics.uniqueVisitors.toLocaleString()}</p>
            </div>
            <UserGroupIcon className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 font-medium">Avg. Time</p>
              <p className="text-2xl font-bold text-purple-900">{analytics.averageTimeOnSite}</p>
            </div>
            <ClockIcon className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 font-medium">Bounce Rate</p>
              <p className="text-2xl font-bold text-orange-900">{analytics.bounceRate}</p>
            </div>
            <ChartBarIcon className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Top Pages */}
      {showTopPages && analytics.topPages.length > 0 && (
        <div>
          <h4 className="text-md font-semibold text-gray-900 mb-3">Top Performing Pages</h4>
          <div className="space-y-2">
            {analytics.topPages.map((page, index) => (
              <div key={page.path} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-700 truncate">{page.path}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{page.views.toLocaleString()} views</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Insights */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Performance Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-600">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            High engagement on AI content pages
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            Strong conversion rate from blog to services
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            Mobile traffic increasing by 15%
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            Peak activity during business hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsTracker;