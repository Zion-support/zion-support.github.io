'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  BarChart3
  TrendingUp
  Users
  Eye
  MousePointer
  Clock
  Zap
  Target,
  Brain,
  Cpu,
  Database,
  Network,
  Shield,
  Star,
  Award,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Maximize,
  Minimize,
  Filter,
  SortAsc,
  SortDesc,
  Download,
  Share,
  Settings,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info,
  Activity,
  Globe,
  Smartphone,
  Laptop,
  Server,
  Cloud,
  Lock,
  Heart,
  Sparkles
} from 'lucide-react';

const AIAdvancedAnalyticsDashboard2030 = () => {
  const [activeTabsetActiveTab] = useState('overview');
  const [isAnalyzingsetIsAnalyzing] = useState(false);
  const [analysisProgressetAnalysisProgress] = useState(0);
  const [currentMetricsetCurrentMetric] = useState(0);

  const analyticsTabs = {
    overview: {
      title: 'Overview',
      subtitle: 'Complete business intelligence overview',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    users: {
      title: 'Users',
      subtitle: 'User behavior and engagement analytics',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    performance: {
      title: 'Performance',
      subtitle: 'System performance and optimization metrics',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    revenue: {
      title: 'Revenue',
      subtitle: 'Financial metrics and conversion tracking',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    }
  };

  const realTimeMetrics = [
    {
      label: 'Active Users',
      value: '2.3M',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-green-400'
    },
    {
      label: 'Page Views',
      value: '45.2M',
      change: '+8%',
      trend: 'up',
      icon: Eye,
      color: 'text-blue-400'
    },
    {
      label: 'Conversion Rate',
      value: '3.8%',
      change: '+0.5%',
      trend: 'up',
      icon: Target,
      color: 'text-purple-400'
    },
    {
      label: 'Revenue',
      value: '$2.1M',
      change: '+15%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-yellow-400'
    }
  ];

  const userInsights = [
    {
      title: 'User Engagement Peak',
      description: 'Peak engagement occurs at 2:00 PM EST',
      value: '2.3M users',
      trend: 'up',
      change: '+12%',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile Usage Surge',
      description: 'Mobile traffic increased by 25% this week',
      value: '68% mobile',
      trend: 'up',
      change: '+25%',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Recommendations',
      description: 'AI-powered recommendations driving 40% of conversions',
      value: '40% conversions',
      trend: 'up',
      change: '+8%',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Performance Score',
      description: 'Website performance score improved significantly',
      value: '94/100',
      trend: 'up',
      change: '+6 points',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const performanceData = [
    {
      metric: 'Page Load Time',
      current: 1.2,
      target: 0.8,
      unit: 's',
      improvement: 33,
      icon: Clock,
      status: 'Good'
    },
    {
      metric: 'First Contentful Paint',
      current: 0.8,
      target: 0.5,
      unit: 's',
      improvement: 37,
      icon: Eye,
      status: 'Excellent'
    },
    {
      metric: 'Largest Contentful Paint',
      current: 2.1,
      target: 1.5,
      unit: 's',
      improvement: 28,
      icon: Maximize,
      status: 'Good'
    },
    {
      metric: 'Cumulative Layout Shift',
      current: 0.05,
      target: 0.1,
      unit: '',
      improvement: 50,
      icon: Activity,
      status: 'Excellent'
    }
  ];

  const aiFeatures = [
    {
      title: 'Predictive Analytics',
      description: 'AI predicts user behavior and trends with 94% accuracy',
      icon: Brain,
      status: 'Active',
      impact: 'High'
    },
    {
      title: 'Automated Insights',
      description: 'AI automatically generates actionable business insights',
      icon: Sparkles,
      status: 'Active',
      impact: 'Critical'
    },
    {
      title: 'Real-time Optimization',
      description: 'AI continuously optimizes user experience in real-time',
      icon: Zap,
      status: 'Beta',
      impact: 'High'
    },
    {
      title: 'Anomaly Detection',
      description: 'AI detects unusual patterns and potential issues',
      icon: AlertTriangle,
      status: 'Active',
      impact: 'Medium'
    }
  ];

  const charts = [
    {
      title: 'User Growth Over Time',
      type: 'line',
      data: [12001900300050007500120001800023000],
      labels: ['Jan'Feb'Mar'Apr'May'Jun'Jul'Aug']
    },
    {
      title: 'Revenue by Source',
      type: 'pie',
      data: [45252010],
      labels: ['Organic'Paid'Social'Direct']
    },
    {
      title: 'Page Performance',
      type: 'bar',
      data: [8592789688949087],
      labels: ['Home'About'Services'Products'Blog'Contact'Pricing'Support']
    }
  ];

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            setIsAnalyzing(false);
            return 100;
          }
          return prev + 2;
        });
      }100);
      return () => clearInterval(interval);
    }
  }[isAnalyzing]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % realTimeMetrics.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0y: 20 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3repeat: Infinityease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-lg font-semibold text-blue-300 uppercase tracking-wider">
                AI Advanced Analytics Dashboard 2030
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligent Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced AI-powered analytics dashboard providing real-time insights
              predictive analyticsand automated business intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startAnalysis}
                disabled={isAnalyzing}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Activity className="inline-block mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className="inline-block mr-2" />
                    Start AI Analysis
                  </>
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 rounded-full text-blue-400 font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Download className="inline-block mr-2" />
                Export Report
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-time Metrics</h2>
            <p className="text-xl text-gray-300">Live monitoring of key performance indicators</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {realTimeMetrics.map((metricindex) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0y: 20 }}
                animate={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className={`flex items-center justify-center gap-1 text-sm ${metric.color}`}>
                  <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                  {metric.change}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Tabs */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Analytics Dashboard</h2>
            <p className="text-xl text-gray-300">Choose a category to explore detailed analytics</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(analyticsTabs).map(([keytab]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <tab.icon className="inline-block mr-2" />
                {tab.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              exit={{ opacity: 0y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {analyticsTabs[activeTab].title}
                </h3>
                <p className="text-xl text-gray-300">
                  {analyticsTabs[activeTab].subtitle}
                </p>
              </div>

              {/* User Insights */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {userInsights.map((insightindex) => (
                  <motion.div
                    key={insight.title}
                    initial={{ opacity: 0y: 20 }}
                    animate={{ opacity: 1y: 0 }}
                    transition={{ duration: 0.6delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${insight.color} rounded-xl flex items-center justify-center`}>
                        <insight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`text-sm font-semibold ${
                        insight.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {insight.change}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold mb-2">{insight.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{insight.description}</p>
                    <div className="text-2xl font-bold text-white">{insight.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* Performance Data */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-6">Performance Metrics</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {performanceData.map((perfindex) => (
                    <motion.div
                      key={perf.metric}
                      initial={{ opacity: 0x: -20 }}
                      animate={{ opacity: 1x: 0 }}
                      transition={{ duration: 0.6delay: index * 0.1 }}
                      className="p-4 bg-gray-700/50 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <perf.icon className="w-5 h-5 text-blue-400" />
                          <span className="font-semibold">{perf.metric}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          perf.status === 'Excellent' ? 'bg-green-500/20 text-green-400' :
                          perf.status === 'Good' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {perf.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-white">
                          {perf.current}{perf.unit}
                        </div>
                        <div className="text-sm text-gray-400">
                          Target: {perf.target}{perf.unit}
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div 
                          className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" 
                          style={{ width: `${(perf.current / perf.target) * 100}%` }}
                        />
                      </div>
                      
                      <div className="text-sm text-green-400 mt-2">
                        {perf.improvement}% improvement
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* AI Features */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Features</h2>
            <p className="text-xl text-gray-300">Advanced AI capabilities for intelligent analytics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((featureindex) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0y: 20 }}
                animate={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    feature.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    feature.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {feature.status}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                
                <div className="text-sm text-gray-400">
                  Impact: <span className="text-blue-400 font-semibold">{feature.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">AI Analysis in Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Analyzing data patterns and trends...</span>
                  <span>{analysisProgress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    style={{ width: `${analysisProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="text-sm text-gray-400">
                  Generating insights and recommendations...
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Intelligent Analytics?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Unlock the power of AI-driven insights and transform your business with data.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Start Analytics
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 rounded-full text-blue-400 font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              View Documentation
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAdvancedAnalyticsDashboard2030;