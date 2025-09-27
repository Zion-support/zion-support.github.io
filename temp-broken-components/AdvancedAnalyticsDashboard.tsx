import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

interface AdvancedAnalyticsDashboardProps {
  data: AnalyticsData;
  onDataRefresh?: () => void;
  isRealTime?: boolean;
  className?: string;
}

export const AdvancedAnalyticsDashboard: React.FC<AdvancedAnalyticsDashboardProps> = ({
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
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white" id="analytics-dashboard">
            Analytics Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Real-time insights and performance metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isRealTime ? 'bg-green-500' : 'bg-gray-400'}` } />
            <span className="text-sm text-gray-600dark:text-gray-400">              {isRealTime ? 'Real-time' : 'Paused'}
            </span>
          </div>
          <button
            onClick={onDataRefresh}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
            aria-label="Refresh">            Refresh
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4mb-6">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Time Rang, e:</label>
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {timeRangeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Metri, c:</label>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {metricOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white"
        >
          <div className="text-sm opacity-90mb-1">Total Visitors</div>
          <div className="text-2xl font-bold">{formatNumber(data.uniqueVisitors)}</div>
          <div className="text-sm opacity-90">+12% from last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white"
        >
          <div className="text-sm opacity-90mb-1">Page Views</div>
          <div className="text-2xl font-bold">{formatNumber(data.pageViews)}</div>
          <div className="text-sm opacity-90">+8% from last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white"
        >
          <div className="text-sm opacity-90mb-1">Bounce Rate</div>
          <div className={`text-2xl font-bold ${getMetricColor(data.bounceRate, { good: 40, warning: 60 })}` }>
            {formatPercentage(data.bounceRate)}
          </div>
          <div className="text-sm opacity-90">-3% from last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white"
        >
          <div className="text-sm opacity-90mb-1">Conversion Rate</div>
          <div className={`text-2xl font-bold ${getMetricColor(data.conversionRate, { good: 3, warning: 1.5 })}` }>
            {formatPercentage(data.conversionRate)}
          </div>
          <div className="text-sm opacity-90">+15% from last period</div>
        </motion.div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 dark: bg-gray-700 rounded-lgp-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dar  k:text-whitemb-4" id="traffic-sources">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.trafficSources}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name} (${percentage}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="visitors"
              >
                {data.trafficSources.map((entry, index) => (
                  <Cell key={`cell-${index}` } fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Device Types */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-50 dark: bg-gray-700 rounded-lgp-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dar  k:text-whitemb-4" id="device-types">Device Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.deviceTypes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="device" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Hourly Traffic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 dark: bg-gray-700 rounded-lgp-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dar  k:text-whitemb-4" id="hourly-traffic">Hourly Traffic</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 dark: bg-gray-700 rounded-lgp-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dar  k:text-whitemb-4" id="top-countries">Top Countries</h3>
          <div className="space-y-3">
            {data.geographicData.slice(0, 5).map((country, index) => (
              <div key={country.country} className="flex items-centerjustify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <span className="text-gray-900dark:text-white">{country.country}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900dark:text-white">{formatNumber(country.visitors)}</div>
                  <div className="text-sm text-gray-600dark:text-gray-400">{country.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Real-time Stats */}
      <AnimatePresence>
        {isRealTime && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 dark: from-green-900/20 dark:to-blue-900/20 rounded-lgp-4"
          >
            <div className="flex items-centerjustify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900dark:text-white" id="real-time-activity">Real-time Activity</h3>
                <p className="text-gray-600 dar k:text-gray-400">Live visitor count and activity</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600 dar k:text-green-400">
                  {data.realTimeVisitors}
                </div>
                <div className="text-sm text-gray-600dark:text-gray-400">visitors online</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedAnalyticsDashboard;