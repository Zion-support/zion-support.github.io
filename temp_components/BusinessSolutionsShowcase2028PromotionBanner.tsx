'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Users
  DollarSign
  Shield
  Zap
  Target,
  BarChart3,
  Building2,
  X
  Play,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star
} from 'lucide-react';

const BusinessSolutionsShowcase2028PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentBenefitsetCurrentBenefit] = useState(0);

  const benefits = [
    {
      icon: TrendingUp,
      title: '500% Efficiency Gain',
      description: 'Boost productivity with AI automation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      title: '$2.5M Cost Savings',
      description: 'Reduce operational costs significantly',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: '99.9% Security',
      description: 'Enterprise-grade protection',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: '10x Faster',
      description: 'Accelerate business processes',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const solutions = [
    { name: 'AI Automation'icon: Zap },
    { name: 'Analytics'icon: BarChart3 },
    { name: 'Security'icon: Shield },
    { name: 'Cloud'icon: Building2 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0y: -100 }}
        animate={{ opacity: 1y: 0 }}
        exit={{ opacity: 0y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000" />
            <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse delay-2000" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2repeat: Infinityease: "linear" }}
                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                    Business Solutions 2028
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Transform Your Business
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
                  Discover cutting-edge AI automationadvanced analyticsenterprise security
                  and cloud solutions designed to drive unprecedented growth.
                </p>

                {/* Benefit Carousel */}
                <div className="mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentBenefit}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ opacity: 1x: 0 }}
                      exit={{ opacity: 0x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${benefits[currentBenefit].color} rounded-lg flex items-center justify-center`}>
                        <benefits[currentBenefit].icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{benefits[currentBenefit].title}</div>
                        <div className="text-sm text-gray-400">{benefits[currentBenefit].description}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-blue-400 rounded-full text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Right Content - Visual Elements */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="relative">
                  {/* Main Visual */}
                  <motion.div
                    animate={{ 
                      y: [0-10],
                      rotate: [020]
                    }}
                    transition={{ 
                      duration: 4
                      repeat: Infinity
                      ease: "easeInOut" 
                    }}
                    className="relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/30"
                  >
                    {/* Floating Solution Icons */}
                    {solutions.map((solutionindex) => (
                      <motion.div
                        key={solution.name}
                        animate={{ 
                          y: [0-150],
                          x: [010]
                        }}
                        transition={{ 
                          duration: 3 + index * 0.5
                          repeat: Infinity
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                        className={`absolute ${
                          index === 0 ? '-top-4 -right-4' :
                          index === 1 ? '-bottom-4 -left-4' :
                          index === 2 ? 'top-1/2 -right-8' :
                          'bottom-1/2 -left-8'
                        } w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center`}
                      >
                        <solution.icon className="w-6 h-6 text-white" />
                      </motion.div>
                    ))}

                    {/* Center Content */}
                    <div className="text-center">
                      <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        2028
                      </div>
                      <div className="text-lg text-gray-300 mb-4">
                        Business Solutions
                      </div>
                      <div className="flex justify-center gap-2 mb-4">
                        {[...Array(5)].map((_i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">
                        Trusted by 500+ enterprises
                      </div>
                    </div>
                  </motion.div>

                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-xl -z-10" />
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Enterprises</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">$2.5M</div>
                <div className="text-sm text-gray-400">Avg Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500%</div>
                <div className="text-sm text-gray-400">Efficiency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
        >
          <X className="w-4 h-4" />
        </motion.button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 10ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BusinessSolutionsShowcase2028PromotionBanner;