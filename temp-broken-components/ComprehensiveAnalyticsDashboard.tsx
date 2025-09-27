import React, { useState  useEffect  useCallback } from 'react';
import { motion  AnimatePresence  } from "framer-motion";
import { BarChartBarXAxisYAxisCartesianGridTooltipResponsiveContainerLineChartLinePieChartPieCell  } from "recharts";
import { ActivityZapShieldEye  } from "lucide-react";

interface ChartData {
  name: string;
  value: number;
  color: string}

interface CardProps {
  children: React.ReactNode;
  className?: string}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string}

interface CardContentProps {
  children: React.ReactNode;
  className?: string}

const Card: React.FC<CardProps> = ({ childrenclassName = ' }) => (
  <div className={`bg-white rounded-lg shadow-md border ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ childrenclassName = ' }) => (
  <div className={`p-6 border-b ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ childrenclassName = ' }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

const CardContent: React.FC<CardContentProps> = ({ childrenclassName = ' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

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
  performance: {
    pageSpeed: number;
    loadTime: number;
    bounceRate: number;
    conversionRate: number};
  security: {
    score: number;
    threats: number;
    vulnerabilities: number};
  seo: {
    score: number};
  accessibility: {
    score: number}}

interface ComprehensiveAnalyticsDashboardProps {
  data: AnalyticsData;
  onDataRefresh?: () => void;
  isRealTime?: boolean;
  className?: string}

export const ComprehensiveAnalyticsDashboard: React.FC<ComprehensiveAnalyticsDashboardProps> = ({
  data 
  onDataRefreshisRealTime = falseclassName = '
}) => {
  const [selectedMetricsetSelectedMetric] = useState<string>('pageViews');
  const [timeRangesetTimeRange] = useState<string>('7d');
  const [isLoadingsetIsLoading] = useState(false);
  const [activeTabsetActiveTab] = useState<string>('overview');

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600'};

  const getGrowthColor = (growth: number): string => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600'};

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )}

  const performanceData: ChartData[] = [
    { name: 'Page Speed'value: data.performance.pageSpeedcolor: '#10B981' }{ name: 'Load Time'value: data.performance.loadTime / 100color: '#F59E0B' }{ name: 'Bounce Rate'value: data.performance.bounceRatecolor: '#EF4444' },
    { name: 'Conversion'value: data.performance.conversionRate * 10color: '#8B5CF6' }
  ];

  const securityData: ChartData[] = [
    { name: 'Security Score'value: data.security.scorecolor: '#10B981' }{ name: 'Threats'value: data.security.threats * 20color: '#EF4444' }{ name: 'Vulnerabilities'value: data.security.vulnerabilities * 10color: '#F59E0B' }
  ];

  const seoAccessibilityData: ChartData[] = [{ name: 'SEO Score'value: data.seo.scorecolor: '#3B82F6' }{ name: 'Accessibility'value: data.accessibility.scorecolor: '#8B5CF6' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-blue-600" />
            <span>Comprehensive Analytics Dashboard</span>
          </CardTitle>
          <CardDescription>
            Monitor your application's performancesecurityand SEO metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
            {[
              { id: 'overview'label: 'Overview'icon: Activity }{ id: 'performance'label: 'Performance'icon: Zap }{ id: 'security'label: 'Security'icon: Shield }{ id: 'seo'label: 'SEO & A11y'icon: Eye }
            ].map(({ idlabelicon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="text-2 xl font-bold">{analyticsData.visitors.total.toLocaleString()}</div>
                        <div className="text-smtext-gray-600">Total Visitors</div>
                        <div className={`text-xs ${getGrowthColor(analyticsData.visitors.growth)}`}>
                          {analyticsData.visitors.growth >= 0 ? '+' : '},
        {analyticsData.visitors.growth}%                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-8 w-8 text-green-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.performance.pageSpeed)}`}>
                          {analyticsData.performance.pageSpeed}
                        </div>
                        <div className="text-smtext-gray-600">Performance Score</div>
                        <div className="text-xs text-gray-500">{analyticsData.performance.loadTime}ms load</div>                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-8 w-8 text-purple-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.security.score)}`}>
                          {analyticsData.security.score}
                        </div>
                        <div className="text-smtext-gray-600">Security Score</div>
                        <div className="text-xs text-red-500">{analyticsData.security.vulnerabilities} issues</div>                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-8 w-8 text-orange-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.seo.score)}`}>
                          {analyticsData.seo.score}
                        </div>
                        <div className="text-smtext-gray-600">SEO Score</div>
                        <div className="text-xs text-gray-500">{analyticsData.seo.keywords} keywords</div>                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#10B981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security & SEO Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={[...securityData...seoAccessibilityData]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={ 2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Alerts and Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <span>Priority Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {analyticsData.performance.pageSpeed < 70 && (
                      <div className="p-4 border border-red-200 rounded-lgbg-red-50">
                        <div className="font-medium text-red-800 mb-1">Performance Issue</div>
                        <div className="text-smtext-red-600">Page speed below optimal threshold</div>
                      </div>
                    )}
                    {analyticsData.security.vulnerabilities > 5 && (
                      <div className="p-4 border border-orange-200 rounded-lgbg-orange-50">
                        <div className="font-medium text-orange-800 mb-1">Security Alert</div>
                        <div className="text-smtext-orange-600">Multiple vulnerabilities detected</div>
                      </div>
                    )}
                    {analyticsData.accessibility.issues > 5 && (
                      <div className="p-4 border border-yellow-200 rounded-lgbg-yellow-50">
                        <div className="font-medium text-yellow-800 mb-1">Accessibility Issues</div>
                        <div className="text-smtext-yellow-600">Several accessibility improvements needed</div>                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            <button
              onClick={onDataRefresh}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Refresh
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600">Page Views</div>
            <div className="text-2 xl font-bold text-gray-900">{data.pageViews.toLocaleString()}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600">Unique Visitors</div>
            <div className="text-2 xl font-bold text-gray-900">{data.uniqueVisitors.toLocaleString()}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600">Bounce Rate</div>
            <div className="text-2 xl font-bold text-gray-900">{data.bounceRate.toFixed(1)}%</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600">Conversion Rate</div>
            <div className="text-2 xl font-bold text-gray-900">{data.conversionRate.toFixed(1)}%</div>
          </div>
        </div>
      </div>
    </div>
  )};

export default ComprehensiveAnalyticsDashboard;