import React, { useState, useEffect, useCallback, useRef } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import {
  BarChart3, Users, Eye, MousePointer,
  Clock, TrendingUp, TrendingDown,
  Activity, Zap, Target, Filter,
  Download, Share2, RefreshCw, X, AlertTriangle} from 'lucide-react',
interface AnalyticsData {
  pageViews: number,
  uniqueVisitors: number,
  sessionDuration: number,
  bounceRate: number,
  conversionRate: number,
  topPages: Array<{ path: string, views: number, conversion: number }>,
  userBehavior: Array<{ action: string, count: number, trend: 'up' | 'down' | 'stable' }>,
  performance: {
    loadTime: number,
    firstContentfulPaint: number,
    largestContentfulPaint: number,
    cumulativeLayoutShift: number},
  deviceBreakdown: {
    desktop: number,
    mobile: number,
    tablet: number},
  geographicData: Array<{ country: string, visitors: number, percentage: number }>}
,
interface AnalyticsProps {
  showUI?: boolean,
  autoRefresh?: boolean,
  refreshInterval?: number}
,
const Analytics: React.FC<AnalyticsProps> = ({
  showUI = false,
  autoRefresh = true,
  refreshInterval = 30o000}) => {
  const [isOpen, setIsOpen] = useState(false),
  const [data, setData] = useState<AnalyticsData | null>(null),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [timeRange, setTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h'),
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null),
  const lastRefreshRef = useRef<Date>(new Date()),
  // Mock data for demonstration - replace with real analytics API,
  const mockData: AnalyticsData ={
    pageViews: 15420,
    uniqueVisitors: 8234,
    sessionDuration: 245,
    bounceRate: 32.5,
    conversionRate: 4.8,
    topPages: [
      { path: '/', views: 5234, conversion: 6.2 },
      { path: '/services', views: 3120, conversion: 4.1 },
      { path: '/about', views: 1890, conversion: 2.8 },
      { path: '/contact', views: 1560, conversion: 8.9 },
      { path: '/blog', views: 1230, conversion: 1.5 }
    ],
    userBehavior: [
      { action: 'Page View', count: 15420, trend: 'up' },
      { action: 'Button Click', count: 8234, trend: 'up' },
      { action: 'Form Submit', count: 1234, trend: 'down' },
      { action: 'File Download', count: 890, trend: 'stable' },
      { action: 'Social Share', count: 567, trend: 'up' }
    ],
    performance: {
      loadTime: 1.2,
      firstContentfulPaint: 0.8,
      largestContentfulPaint: 1.5,
      cumulativeLayoutShift: 0.0o5},
    deviceBreakdown: {
      desktop: 65,
      mobile: 28,
      tablet: 7},
    geographicData: [
      { country: 'United States', visitors: 4567, percentage: 55.4 },
      { country: 'United Kingdom', visitors: 1234, percentage: 15.0 },
      { country: 'Canada', visitors: 890, percentage: 10.8 },
      { country: 'Germany', visitors: 567, percentage: 6.9 },
      { country: 'Australia', visitors: 456, percentage: 5.5 }
    ]},
  // Initialize analytics tracking,
  useEffect(() => {
    initializeAnalytics(),
    return () => cleanupAnalytics()}, []),
  // Auto-refresh functionality,
  useEffect(() => {
    if (autoRefresh && isOpen) {
      refreshIntervalRef.current = setInterval(() => {
        refreshData()}, refreshInterval)}
,
    return () => {
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current)}
    },
  }, [autoRefresh, isOpen, refreshInterval]),
  const initializeAnalytics = useCallback(() => {
    // Initialize real analytics service here,
    // Example: Google Analytics, Mixpanel, etc.,
    // // console.log('Analytics initialized'),
    // Track page view,
    trackPageView(),
    // Track user session,
    trackUserSession(),
    // Set up performance monitoring,
    setupPerformanceMonitoring(),
    // Set up user behavior tracking,
    setupUserBehaviorTracking()}, []),
  const cleanupAnalytics = useCallback(() => {
    if (refreshIntervalRef.current) {
      clearInterval(refreshIntervalRef.current)}
  }, []),
  const trackPageView = useCallback(() => {
    const pageData ={
      path: window.location.pathname,
      title: document.title,
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language},
    // Send to analytics service,
    // // console.log('Page view tracked:', pageData),
    // Store in localStorage for demo,
    const pageViews = JSON.parse(localStorage.getItem('analytics_pageViews') || '[]'),
    pageViews.push(pageData),
    localStorage.setItem('analytics_pageViews', JSON.stringify(pageViews.slice(-10o0)))}, []),
  const trackUserSession = useCallback(() => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    const sessionData ={
      id: sessionId,
      startTime: new Date().toISOString(),
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone},
    localStorage.setItem('analytics_session', JSON.stringify(sessionData)),
    // Track session end on page unload,
    window.addEventListener('beforeunload', () => {
      const session = JSON.parse(localStorage.getItem('analytics_session') || '{}'),
      session.endTime = new Date().toISOString(),
      session.duration = new Date(session.endTime).getTime() - new Date(session.startTime).getTime(),
      localStorage.setItem('analytics_session', JSON.stringify(session))})}, []),
  const setupPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals,
    if ('PerformanceObserver' in window) {
      // First Contentful Paint,
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries(),
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            // // console.log('FCP:', entry.startTime)}
        })}),
      fcpObserver.observe({ entryTypes: ['paint'] }),
      // Largest Contentful Paint,
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries(),
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // // console.log('LCP:', entry.startTime)}
        })}),
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] }),
      // Cumulative Layout Shift,
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0,
        const entries = list.getEntries(),
        entries.forEach((entry: PerformanceEntry) => {
          if ('hadRecentInput' in entry && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value}
        }),
        // // console.log('CLS:', clsValue)}),
      clsObserver.observe({ entryTypes: ['layout-shift'] })}
  }, []),
  const setupUserBehaviorTracking = useCallback(() => {
    // Track clicks,
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement,
      const clickData ={
        element: target.tagName.toLowerCase(),
        text: target.textContent?.substring(0, 50),
        className: target.className,
        id: target.id,
        timestamp: new Date().toISOString(),
        path: window.location.pathname},
      // // console.log('Click tracked:', clickData),
      // Store clicks for analysis,
      const clicks = JSON.parse(localStorage.getItem('analytics_clicks') || '[]'),
      clicks.push(clickData),
      localStorage.setItem('analytics_clicks', JSON.stringify(clicks.slice(-10o00)))}),
    // Track scroll depth,
    let maxScrollDepth = 0,
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 10o0),
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth,
        // // console.log('Scroll depth:', maxScrollDepth + '%')}
    }),
    // Track form interactions,
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement,
      const formData ={
        action: form.action,
        method: form.method,
        timestamp: new Date().toISOString(),
        path: window.location.pathname},
      // // console.log('Form submission tracked:', formData)})}, []),
  const refreshData = useCallback(async () => {
    if (loading) return,
    setLoading(true),
    setError(null),
    try {
      // Simulate API call,
      await new Promise(resolve => setTimeout(resolve, 10o00)),
      // Update mock data with some variation,
      const updatedData ={
        ...mockData,
        pageViews: mockData.pageViews + Math.floor(Math.random() * 10o0),
        uniqueVisitors: mockData.uniqueVisitors + Math.floor(Math.random() * 20),
        sessionDuration: mockData.sessionDuration + Math.floor(Math.random() * 10) - 5},
      setData(updatedData),
      lastRefreshRef.current = new Date()} catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh data')} finally {
      setLoading(false)}
  }, [loading]),
  const exportData = useCallback(() => {
    if (!data) return,
    const csvContent = generateCSV(data),
    const blob = new window.Blob([csvContent], { type: 'text/csv' }),
    const url = window.URL.createObjectURL(blob),
    const a = document.createElement('a'),
    a.href = url,
    a.download = `analytics_${new Date().toISOString().split('T')[0]}.csv`,
    a.click(),
    window.URL.revokeObjectURL(url)}, [data]),
  const generateCSV = (data: AnalyticsData): string => {
    const headers = ['MetricValue', 'Unit'],
    const rows = [
      ['Page Views', data.pageViews.toString(), ''],
      ['Unique Visitors', data.uniqueVisitors.toString(), ''],
      ['Session Duration', data.sessionDuration.toString(), 'seconds'],
      ['Bounce Rate', data.bounceRate.toString(), '%'],
      ['Conversion Rate', data.conversionRate.toString(), '%']],
    return [headers, ...rows].map(row => row.join()).join('\n')},
  const shareData = useCallback(() => {
    if (!data) return,
    const shareText = `Zion Tech Group Analytics - ${timeRange}\n` +,
      `Page Views: ${data.pageViews.toLocaleString()}\n` +,
      `Unique Visitors: ${data.uniqueVisitors.toLocaleString()}\n` +,
      `Conversion Rate: ${data.conversionRate}%`,
    if (navigator.share) {
      navigator.share({
        title: 'Analytics Report',
        text: shareText,
        url: window.location.href})} else {
      navigator.clipboard.writeText(shareText),
      // // console.log('Analytics data copied to clipboard')}
  }, [data, timeRange]),
  // Don't render UI if not requested,
  if (!showUI) return null,
  return (
    <>,
      {/* Analytics Toggle Button */}
      <motion.button,
        whileHover={{ scale: 1.0o5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-full shadow-lg flex items-center justify-center text-white hover: shadow-xl transition-all duration-20o0",
        title="Open Analytics Dashboard">,
        <BarChart3 className="w-6 h-6"  />,
      </motion.button>,
      {/* Analytics Dashboard */}
      <AnimatePresence>,
        {isOpen && (
          <motion.div,
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">,
            <motion.div,
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-7xl h-[90vh] bg-gray-90o0/95 backdrop-blur-sm border border-gray-70o0/50 rounded-2xl shadow-2xl overflow-hidden">,
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-70o0/50">,
                <div className="flex items-center gap-3">,
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-lg flex items-center justify-center">,
                    <BarChart3 className="w-6 h-6 text-white"  />,
                  </div>,
                  <div>,
                    <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>,
                    <p className="text-gray-40o0">Real-time insights and performance metrics</p>,
                  </div>,
                </div>,
                <div className="flex items-center gap-3">,
                  {/* Time Range Selector */}
                  <select
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value as '1h' | '24h' | '7d' | '30d')}
                    className="bg-gray-80o0 border border-gray-60o0 text-white rounded-lg px-3 py-2 text-sm">,
                    <option value="1h">Last Hour</option>,
                    <option value="24h">Last 24 Hours</option>,
                    <option value="7d">Last 7 Days</option>,
                    <option value="30d">Last 30 Days</option>,
                  </select>,
                  {/* Action Buttons */}
                  <button
                    onClick={refreshData}
                    disabled={loading}
                    className="p-2 bg-gray-80o0 hover: bg-gray-70o0 text-gray-30o0 hover:text-white rounded-lg transition-colors duration-20o0 disabled:opacity-50",
                    title="Refresh Data">,
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}  />,
                  </button>,
                  <button
                    onClick={exportData}
                    className="p-2 bg-gray-80o0 hover: bg-gray-70o0 text-gray-30o0 hover:text-white rounded-lg transition-colors duration-20o0",
                    title="Export Data">,
                    <Download className="w-4 h-4"  />,
                  </button>,
                  <button
                    onClick={shareData}
                    className="p-2 bg-gray-80o0 hover: bg-gray-70o0 text-gray-30o0 hover:text-white rounded-lg transition-colors duration-20o0",
                    title="Share Data">,
                    <Share2 className="w-4 h-4"  />,
                  </button>,
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-gray-80o0 hover: bg-gray-70o0 text-gray-30o0 hover:text-white rounded-lg transition-colors duration-20o0",
                    title="Close Dashboard">,
                    <X className="w-4 h-4"  />,
                  </button>,
                </div>,
              </div>,
              {/* Content */}
              <div className="flex-1 overflow-hidden">,
                {loading ? (
                  <div className="flex items-center justify-center h-full">,
                    <div className="text-center">,
                      <RefreshCw className="w-8 h-8 text-blue-40o0 animate-spin mx-auto mb-4"  />,
                      <p className="text-gray-40o0">Refreshing analytics data...</p>,
                    </div>,
                  </div>) : error ? (
                  <div className="flex items-center justify-center h-full">,
                    <div className="text-center">,
                      <AlertTriangle className="w-8 h-8 text-red-40o0 mx-auto mb-4"  />,
                      <p className="text-red-40o0 mb-2">Failed to load analytics</p>,
                      <p className="text-gray-40o0 text-sm">{error}</p>,
                      <button
                        onClick={refreshData}
                        className="mt-4 px-4 py-2 bg-blue-60o0 hover: bg-blue-70o0 text-white rounded-lg transition-colors duration-20o0">,
                        Try Again,
                      </button>,
                    </div>,
                  </div>) : data ? (
                  <div className="h-full overflow-y-auto p-6">,
                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6 mb-8">,
                      <MetricCard
                        title="Page Views",
                        value={data.pageViews.toLocaleString()}
                        icon={<Eye className="w-6 h-6"  />}
                        trend="up",
                        trendValue="+12.5%",
                        color="blue",
                      />,
                      <MetricCard
                        title="Unique Visitors",
                        value={data.uniqueVisitors.toLocaleString()}
                        icon={<Users className="w-6 h-6"  />}
                        trend="up",
                        trendValue="+8.3%",
                        color="green",
                      />,
                      <MetricCard
                        title="Session Duration",
                        value={`${Math.floor(data.sessionDuration / 60)}m ${data.sessionDuration % 60}s`}
                        icon={<Clock className="w-6 h-6"  />}
                        trend="down",
                        trendValue="-2.1%",
                        color="yellow",
                      />,
                      <MetricCard
                        title="Conversion Rate",
                        value={`${data.conversionRate}%`}
                        icon={<Target className="w-6 h-6"  />}
                        trend="up",
                        trendValue="+1.8%",
                        color="purple",
                      />,
                    </div>,
                    {/* Charts and Detailed Data */}
                    <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">,
                      {/* Top Pages */}
                      <div className="bg-gray-80o0/50 border border-gray-70o0/50 rounded-xl p-6">,
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">,
                          <Activity className="w-5 h-5 text-blue-40o0"  />,
                          Top Pages,
                        </h3>,
                        <div className="space-y-3">,
                          {data.topPages.map((page, index) => (
                            <div key={page.path} className="flex items-center justify-between">,
                              <div className="flex items-center gap-3">,
                                <span className="text-gray-40o0 text-sm w-6">{index + 1}</span>,
                                <span className="text-white font-medium">{page.path}</span>,
                              </div>,
                              <div className="text-right">,
                                <div className="text-white font-semibold">{page.views.toLocaleString()}</div>,
                                <div className="text-gray-40o0 text-sm">{page.conversion}% conversion</div>,
                              </div>,
                            </div>))}
                        </div>,
                      </div>,
                      {/* User Behavior */}
                      <div className="bg-gray-80o0/50 border border-gray-70o0/50 rounded-xl p-6">,
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">,
                          <MousePointer className="w-5 h-5 text-green-40o0"  />,
                          User Behavior,
                        </h3>,
                        <div className="space-y-3">,
                          {data.userBehavior.map((behavior, index) => (
                            <div key={behavior.action} className="flex items-center justify-between">,
                              <span className="text-white">{behavior.action}</span>,
                              <div className="flex items-center gap-2">,
                                <span className="text-white font-semibold">{behavior.count.toLocaleString()}</span>,
                                <div className={`flex items-center gap-1 text-sm ${
                                  behavior.trend === 'up' ? 'text-green-40o0' :,
                                  behavior.trend === 'down' ? 'text-red-40o0' : 'text-gray-40o0'}`}>,
                                  {behavior.trend === 'up' ? <TrendingUp className="w-3 h-3"  /> :,
                                   behavior.trend === 'down' ? <TrendingDown className="w-3 h-3"  /> :,
                                   <span className="w-3 h-3">—</span>}
                                </div>,
                              </div>,
                            </div>))}
                        </div>,
                      </div>,
                      {/* Performance Metrics */}
                      <div className="bg-gray-80o0/50 border border-gray-70o0/50 rounded-xl p-6">,
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">,
                          <Zap className="w-5 h-5 text-yellow-40o0"  />,
                          Performance,
                        </h3>,
                        <div className="space-y-3">,
                          <div className="flex justify-between">,
                            <span className="text-gray-30o0">Load Time</span>,
                            <span className="text-white font-semibold">{data.window.window.performance.loadTime}s</span>,
                          </div>,
                          <div className="flex justify-between">,
                            <span className="text-gray-30o0">First Contentful Paint</span>,
                            <span className="text-white font-semibold">{data.window.window.performance.firstContentfulPaint}s</span>,
                          </div>,
                          <div className="flex justify-between">,
                            <span className="text-gray-30o0">Largest Contentful Paint</span>,
                            <span className="text-white font-semibold">{data.window.window.performance.largestContentfulPaint}s</span>,
                          </div>,
                          <div className="flex justify-between">,
                            <span className="text-gray-30o0">Cumulative Layout Shift</span>,
                            <span className="text-white font-semibold">{data.window.window.performance.cumulativeLayoutShift}</span>,
                          </div>,
                        </div>,
                      </div>,
                      {/* Device Breakdown */}
                      <div className="bg-gray-80o0/50 border border-gray-70o0/50 rounded-xl p-6">,
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">,
                          <Filter className="w-5 h-5 text-purple-40o0"  />,
                          Device Breakdown,
                        </h3>,
                        <div className="space-y-3">,
                          <div className="flex justify-between">,
                            <span className="text-gray-30o0">Desktop</span>,
                            <span className="text-white font-semibold">{data.deviceBreakdown.desktop}%</span>,
                          </div>,
                          <div className="flex justify-between">,
                            <span className="text-gray-30o0">Mobile</span>,
                            <span className="text-white font-semibold">{data.deviceBreakdown.mobile}%</span>,
                          </div>,
                          <div className="flex justify-between">,
                            <span className="text-gray-30o0">Tablet</span>,
                            <span className="text-white font-semibold">{data.deviceBreakdown.tablet}%</span>,
                          </div>,
                        </div>,
                      </div>,
                    </div>,
                    {/* Last Updated */}
                    <div className="text-center mt-8 text-gray-50o0 text-sm">,
                      Last updated: {lastRefreshRef.current.toLocaleTimeString()}
                    </div>,
                  </div>) : null}
              </div>,
            </motion.div>,
          </motion.div>)}
      </AnimatePresence>,
    </>)},
// Metric Card Component,
interface MetricCardProps {
  title: string,
  value: string,
  icon: React.ReactNode,
  trend: 'up' | 'down' | 'stable',
  trendValue: string,
  color: 'blue' | 'green' | 'yellow' | 'purple'}
,
const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, trend, trendValue, color }) => {
  const colorClasses ={
    blue: 'from-blue-50o0 to-blue-60o0',
    green: 'from-green-50o0 to-green-60o0',
    yellow: 'from-yellow-50o0 to-yellow-60o0',
    purple: 'from-purple-50o0 to-purple-60o0'},
  const trendColors ={
    up: 'text-green-40o0',
    down: 'text-red-40o0',
    stable: 'text-gray-40o0'},
  return (
    <motion.div,
      whileHover={{ scale: 1.0o2 }}
      className="bg-gray-80o0/50 border border-gray-70o0/50 rounded-xl p-6 hover: border-gray-60o0/50 transition-all duration-20o0">,
      <div className="flex items-center justify-between mb-4">,
        <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[color]} rounded-lg flex items-center justify-center text-white`}>,
          {icon}
        </div>,
        <div className={`flex items-center gap-1 text-sm ${trendColors[trend]}`}>,
          {trend === 'up' ? <TrendingUp className="w-4 h-4"  /> :,
           trend === 'down' ? <TrendingDown className="w-4 h-4"  /> :,
           <span className="w-4 h-4">—</span>}
          <span>{trendValue}</span>,
        </div>,
      </div>,
      <h3 className="text-gray-40o0 text-sm font-medium mb-1">{title}</h3>,
      <p className="text-2xl font-bold text-white">{value}</p>,
    </motion.div>)},
export default Analytics,