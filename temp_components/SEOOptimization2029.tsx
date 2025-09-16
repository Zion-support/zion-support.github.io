'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Search
  TrendingUp
  Target
  BarChart3
  Globe
  Eye
  Users
  MousePointer,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowUp,
  ArrowDown,
  Minus,
  Star,
  Award,
  BookOpen,
  Code,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Maximize,
  Minimize,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

const SEOOptimization2029 = () => {
  const [activeMetricsetActiveMetric] = useState('ranking');
  const [isAnalyzingsetIsAnalyzing] = useState(false);
  const [analysisProgressetAnalysisProgress] = useState(0);
  const [currentKeywordsetCurrentKeyword] = useState(0);

  const seoMetrics = {
    ranking: {
      title: 'Search Rankings',
      subtitle: 'Track your position in search results',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      currentValue: 8.5,
      targetValue: 10,
      unit: '/10',
      description: 'Average ranking score',
      improvements: [
        'Keyword optimization',
        'Content quality enhancement',
        'Technical SEO fixes',
        'Backlink building',
        'User experience improvement',
        'Page speed optimization'
      ]
    },
    traffic: {
      title: 'Organic Traffic',
      subtitle: 'Monitor your organic search traffic growth',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      currentValue: 125000,
      targetValue: 200000,
      unit: 'visitors/month',
      description: 'Monthly organic visitors',
      improvements: [
        'Content marketing strategy',
        'Long-tail keyword targeting',
        'Featured snippet optimization',
        'Local SEO enhancement',
        'Voice search optimization',
        'Mobile-first indexing'
      ]
    },
    visibility: {
      title: 'Search Visibility',
      subtitle: 'Measure your overall search presence',
      icon: Eye,
      color: 'from-purple-500 to-indigo-500',
      currentValue: 65,
      targetValue: 85,
      unit: '%',
      description: 'Search visibility score',
      improvements: [
        'Schema markup implementation',
        'Rich snippets optimization',
        'Image SEO enhancement',
        'Video SEO strategy',
        'FAQ optimization',
        'Knowledge panel targeting'
      ]
    },
    conversion: {
      title: 'Conversion Rate',
      subtitle: 'Track SEO-driven conversions',
      icon: MousePointer,
      color: 'from-orange-500 to-red-500',
      currentValue: 3.2,
      targetValue: 5.5,
      unit: '%',
      description: 'SEO conversion rate',
      improvements: [
        'Landing page optimization',
        'Call-to-action enhancement',
        'User journey mapping',
        'A/B testing implementation',
        'Conversion tracking setup',
        'Goal configuration'
      ]
    }
  };

  const keywords = [
    {
      keyword: 'AI technology 2029',
      position: 3,
      volume: 12500,
      difficulty: 'Medium',
      trend: 'up',
      change: '+2',
      icon: Star
    },
    {
      keyword: 'quantum computing',
      position: 7,
      volume: 8900,
      difficulty: 'High',
      trend: 'up',
      change: '+1',
      icon: Zap
    },
    {
      keyword: 'machine learning',
      position: 2,
      volume: 15600,
      difficulty: 'Medium',
      trend: 'up',
      change: '+3',
      icon: Brain
    },
    {
      keyword: 'artificial intelligence',
      position: 5,
      volume: 22100,
      difficulty: 'High',
      trend: 'down',
      change: '-1',
      icon: Cpu
    }
  ];

  const seoFeatures = [
    {
      title: 'AI-Powered SEO Analysis',
      description: 'Advanced AI algorithms analyze your content and provide optimization recommendations',
      icon: Brain,
      status: 'Active',
      impact: 'High'
    },
    {
      title: 'Real-time Ranking Tracking',
      description: 'Monitor your search rankings across multiple search engines in real-time',
      icon: Target,
      status: 'Deployed',
      impact: 'Critical'
    },
    {
      title: 'Content Optimization',
      description: 'Automated content analysis and optimization suggestions',
      icon: BookOpen,
      status: 'Beta',
      impact: 'Medium'
    },
    {
      title: 'Technical SEO Audit',
      description: 'Comprehensive technical SEO analysis and fix recommendations',
      icon: Settings,
      status: 'Active',
      impact: 'High'
    }
  ];

  const realTimeData = [
    { label: 'Organic Traffic'value: '125K'change: '+12%'trend: 'up' },
    { label: 'Average Position'value: '4.2'change: '-0.8'trend: 'up' },
    { label: 'Click-Through Rate'value: '8.5%'change: '+1.2%'trend: 'up' },
    { label: 'Conversion Rate'value: '3.2%'change: '+0.5%'trend: 'up' }
  ];

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            setIsAnalyzing(false);
            return 100;
          }
          return prev + 3;
        });
      }100);
      return () => clearInterval(interval);
    }
  }[isAnalyzing]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword(prev => (prev + 1) % keywords.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20" />
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
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
              >
                <Search className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-lg font-semibold text-green-300 uppercase tracking-wider">
                SEO Optimization 2029
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Dominate Search Results
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced SEO optimization powered by AI to help you rank #1 in search results 
              and drive massive organic traffic to your website.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startAnalysis}
                disabled={isAnalyzing}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Search className="inline-block mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="inline-block mr-2" />
                    Start SEO Analysis
                  </>
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-400 rounded-full text-green-400 font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                <BarChart3 className="inline-block mr-2" />
                View Reports
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-time SEO Metrics</h2>
            <p className="text-xl text-gray-300">Live monitoring of your search performance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {realTimeData.map((metricindex) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0y: 20 }}
                animate={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className={`flex items-center justify-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  {metric.change}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Metrics */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">SEO Performance Metrics</h2>
            <p className="text-xl text-gray-300">Choose a metric to explore optimization strategies</p>
          </div>

          {/* Metric Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(seoMetrics).map(([keymetric]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveMetric(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeMetric === key
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <metric.icon className="inline-block mr-2" />
                {metric.title}
              </motion.button>
            ))}
          </div>

          {/* Metric Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMetric}
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              exit={{ opacity: 0y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {seoMetrics[activeMetric].title}
                </h3>
                <p className="text-xl text-gray-300 mb-4">
                  {seoMetrics[activeMetric].subtitle}
                </p>
              </div>

              {/* Current vs Target */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                  <h4 className="text-2xl font-bold mb-6">Current Performance</h4>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-400 mb-2">
                      {seoMetrics[activeMetric].currentValue.toLocaleString()}
                      <span className="text-2xl text-gray-400">{seoMetrics[activeMetric].unit}</span>
                    </div>
                    <div className="text-gray-300">{seoMetrics[activeMetric].description}</div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                  <h4 className="text-2xl font-bold mb-6">Target Performance</h4>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-emerald-400 mb-2">
                      {seoMetrics[activeMetric].targetValue.toLocaleString()}
                      <span className="text-2xl text-gray-400">{seoMetrics[activeMetric].unit}</span>
                    </div>
                    <div className="text-gray-300">Optimized target</div>
                  </div>
                </div>
              </div>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
                  <h4 className="text-2xl font-bold mb-6">SEO Analysis Progress</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Analyzing {seoMetrics[activeMetric].title.toLowerCase()}...</span>
                      <span>{analysisProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className="h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                        style={{ width: `${analysisProgress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Improvements List */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-6">Optimization Strategies</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {seoMetrics[activeMetric].improvements.map((improvementindex) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0x: -20 }}
                      animate={{ opacity: 1x: 0 }}
                      transition={{ duration: 0.5delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{improvement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Keyword Tracking */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Keyword Performance</h2>
            <p className="text-xl text-gray-300">Track your most important keywords</p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentKeyword}
                initial={{ opacity: 0x: 50 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <keywords[currentKeyword].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{keywords[currentKeyword].keyword}</h4>
                      <p className="text-gray-400">Keyword tracking</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">
                      #{keywords[currentKeyword].position}
                    </div>
                    <div className="text-sm text-gray-400">Current Position</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Search Volume</div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {keywords[currentKeyword].volume.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">monthly searches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Difficulty</div>
                    <div className={`text-2xl font-bold mb-2 ${
                      keywords[currentKeyword].difficulty === 'High' ? 'text-red-400' :
                      keywords[currentKeyword].difficulty === 'Medium' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {keywords[currentKeyword].difficulty}
                    </div>
                    <div className="text-sm text-gray-400">competition level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Trend</div>
                    <div className={`text-2xl font-bold mb-2 flex items-center justify-center gap-1 ${
                      keywords[currentKeyword].trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {keywords[currentKeyword].trend === 'up' ? <ArrowUp className="w-6 h-6" /> : <ArrowDown className="w-6 h-6" />}
                      {keywords[currentKeyword].change}
                    </div>
                    <div className="text-sm text-gray-400">position change</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Keyword Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {keywords.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentKeyword(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentKeyword ? 'bg-green-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SEO Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced SEO Features</h2>
            <p className="text-xl text-gray-300">Cutting-edge tools for maximum search visibility</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoFeatures.map((featureindex) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0y: 20 }}
                animate={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    feature.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    feature.status === 'Deployed' ? 'bg-blue-500/20 text-blue-400' :
                    feature.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {feature.status}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                
                <div className="text-sm text-gray-400">
                  Impact: <span className="text-green-400 font-semibold">{feature.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your SEO optimization journey and watch your organic traffic soar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Start SEO Analysis
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-green-400 rounded-full text-green-400 font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300"
            >
              View SEO Guide
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOOptimization2029;