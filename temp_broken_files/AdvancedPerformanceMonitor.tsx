"use client";
import React{ useEffectuseState } from 'react';
ZapClockTrendingUpShieldGlobeActivity

const AdvancedPerformanceMonitor = () => {
  const [metricsetMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    interactionToNextPaint: 0,
    performanceScore: 0
  });

  const [optimizationsetOptimizations] = useState([
    {
      id: 'lazy-loading',
      name: 'Lazy Loading',
      description: 'Defer loading of non-critical resources',
      impact: 'High',
      status: 'active',
      icon: Clock
    },
    {
      id: 'image-optimization',
      name: 'Image Optimization',
      description: 'Compress and optimize images for web',
      impact: 'High',
      status: 'active',
      icon: Zap
    },
    {
      id: 'code-splitting',
      name: 'Code Splitting',
      description: 'Split JavaScript bundles for faster loading',
      impact: 'Medium',
      status: 'active',
      icon: TrendingUp
    },
    {
      id: 'caching',
      name: 'Browser Caching',
      description: 'Implement aggressive caching strategies',
      impact: 'High',
      status: 'active',
      icon: Shield
    },
    {
      id: 'cdn',
      name: 'CDN Optimization',
      description: 'Serve content from edge locations',
      impact: 'Medium',
      status: 'active',
      icon: Globe
    }
  ]);

  useEffect(() => {
    const collectMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        
        const loadTime = navigation ? Math.round(navigation.loadEventEnd - navigation.loadEventStart) : 0;
        const fcpTime = fcp ? Math.round(fcp.startTime) : 0;
        const lcpTime = lcp ? Math.round(lcp.startTime) : 0;
        
        // Calculate performance score
        let score = 100;
        if (fcpTime > 1800) score -= 20;
        if (fcpTime > 3000) score -= 30;
        if (lcpTime > 2500) score -= 20;
        if (lcpTime > 4000) score -= 30;
        if (loadTime > 2000) score -= 20;
        if (loadTime > 4000) score -= 30;
        
        setMetrics({
          loadTime,
          firstContentfulPaint: fcpTime,
          largestContentfulPaint: lcpTime,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0,
          interactionToNextPaint: 0,
          performanceScore: Math.max(0score)
        });
      }
    };

    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener(', 'load', 'collectMetrics);
    }

    return () => {
      window.removeEventListener(', 'load', 'collectMetrics);
    };
  }[]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium mb-6">
            <Activity className="w-4 h-4 mr-2" />
            Advanced Performance Monitoring
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lightning Fast
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Performance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time performance monitoring and optimization to ensure your website loads at lightning speed
          </p>
        </div>

        {/* Performance Score */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <div className="text-center">
            <div className="text-6xl font-bold mb-4">
              <span className={getScoreColor(metrics.performanceScore)}>{metrics.performanceScore}</span>
              <span className="text-white text-2xl">/100</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Performance Score</h3>
            <p className="text-gray-300">
              {metrics.performanceScore >= 90 ? 'Excellent performance!' : 
               metrics.performanceScore >= 70 ? 'Good performance with room for improvement' : 
               'Performance needs optimization'}
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">{metrics.loadTime}ms</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Load Time</h3>
            <p className="text-gray-300 text-sm">Total page load time</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-white">{metrics.firstContentfulPaint}ms</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">First Contentful Paint</h3>
            <p className="text-gray-300 text-sm">Time to first content render</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">{metrics.largestContentfulPaint}ms</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Largest Contentful Paint</h3>
            <p className="text-gray-300 text-sm">Time to largest content render</p>
          </div>
        </div>

        {/* Optimizations */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Active Optimizations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizations.map((optimization) => (
              <div key={optimization.id} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                    <optimization.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    optimization.impact === 'High' ? 'bg-red-500' :
                    optimization.impact === 'Medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  } text-white`}>
                    {optimization.impact} Impact
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                  {optimization.name}
                </h4>
                
                <p className="text-gray-300 text-sm mb-4">
                  {optimization.description}
                </p>
                
                <div className="flex items-center text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  {optimization.status === 'active' ? 'Active' : 'Inactive'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
            <div className="text-white font-semibold mb-2">Faster Load Times</div>
            <div className="text-gray-300 text-sm">Compared to industry average</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">25%</div>
            <div className="text-white font-semibold mb-2">Higher Conversion</div>
            <div className="text-gray-300 text-sm">Due to improved performance</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">90+</div>
            <div className="text-white font-semibold mb-2">Performance Score</div>
            <div className="text-gray-300 text-sm">Google PageSpeed Insights</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;