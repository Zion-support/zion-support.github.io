'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  TrendingUp
  DollarSign
  Building2
  Brain
  Zap
  Target,
  X,
  PlayCircle,
  Users,
  Award,
  BarChart3
} from 'lucide-react';

const BusinessTransformation2028PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentMetricsetCurrentMetric] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate metrics
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }2500);

    return () => clearInterval(interval);
  }[]);

  const metrics = [
    {
      icon: TrendingUp,
      value: '500%+',
      label: 'Average ROI',
      color: 'text-green-400'
    },
    {
      icon: DollarSign,
      value: '$2.5M',
      label: 'Average Savings',
      color: 'text-blue-400'
    },
    {
      icon: BarChart3,
      value: '300%',
      label: 'Efficiency Gain',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Businesses Transformed',
      color: 'text-cyan-400'
    }
  ];

  const solutions = [
    { icon: Brainlabel: 'AI Automation' },
    { icon: Zaplabel: 'Quantum Optimization' },
    { icon: Targetlabel: 'Neural Business' },
    { icon: Building2label: 'Future Operations' }
  ];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0y: -100 }}
          animate={{ opacity: 1y: 0 }}
          exit={{ opacity: 0y: -100 }}
          transition={{ duration: 0.6ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-blue-500/20"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Building2 className="w-4 h-4" />
                    <span>BUSINESS TRANSFORMATION 2028</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_i) => (
                      <Award key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  🚀 Transform Your Business with Future Tech
                </h2>
                
                <p className="text-lg text-gray-300 mb-4 max-w-2xl">
                  Leverage AI automationquantum optimizationeural interfacesand future-ready operations 
                  to achieve unprecedented growth and competitive advantage.
                </p>

                {/* Rotating Metrics */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Proven Results:</span>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentMetric}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ opacity: 1x: 0 }}
                      exit={{ opacity: 0x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center`}>
                        <metrics[currentMetric].icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className={`font-bold text-lg ${metrics[currentMetric].color}`}>{metrics[currentMetric].value}</div>
                        <div className="text-xs text-gray-400">{metrics[currentMetric].label}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Solutions */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-gray-300">
                  <span className="text-gray-400">Solutions:</span>
                  {solutions.map((solutionindex) => (
                    <div key={index} className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                      <solution.icon className="w-3 h-3" />
                      <span>{solution.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  <PlayCircle className="w-5 h-5" />
                  <span>Start Transformation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="border border-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </button>
              </div>

              {/* Dismiss Button */}
              <button
                onClick={() => setIsDismissed(true)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessTransformation2028PromotionBanner;