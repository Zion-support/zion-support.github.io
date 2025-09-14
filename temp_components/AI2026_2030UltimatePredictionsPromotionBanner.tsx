'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Calendar
  ArrowRight
  Star,
  TrendingUp,
  Clock,
  Sparkles,
  Target,
  Rocket
} from 'lucide-react';

const AI2026_2030UltimatePredictionsPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentFeaturesetCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      text: "Neural Interface Revolution",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      text: "Quantum AI Fusion",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      text: "Autonomous Everything",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      text: "Consciousness Integration",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0y: -50 }}
      animate={{ opacity: 1y: 0 }}
      exit={{ opacity: 0y: -50 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left side - Main content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ delay: 0.2duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>NEW CONTENT</span>
                <Clock className="w-4 h-4 text-blue-400" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  AI 2026-2030
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Ultimate Predictions
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
                Discover the revolutionary AI breakthroughs that will reshape our world over the next five years. 
                From neural interfaces to consciousness integration.
              </p>
            </motion.div>

            {/* Rotating features */}
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0y: 10 }}
              animate={{ opacity: 1y: 0 }}
              exit={{ opacity: 0y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${features[currentFeature].color}`}>
                <features[currentFeature].icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-medium">{features[currentFeature].text}</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Predictions
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Download Report
              </motion.button>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0scale: 0.8 }}
              animate={{ opacity: 1scale: 1 }}
              transition={{ delay: 0.4duration: 0.6 }}
              className="relative"
            >
              {/* Animated prediction cards */}
              <div className="grid grid-cols-2 gap-4">
                {[0123].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0y: 20 }}
                    animate={{ opacity: 1y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1duration: 0.5 }}
                    className={`p-4 rounded-lg bg-gradient-to-br ${features[index].color} bg-opacity-20 backdrop-blur-sm border border-white/20`}
                  >
                    <features[index].icon className="w-8 h-8 text-white mb-2" />
                    <div className="text-sm font-medium text-white">
                      {features[index].text}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0-10],
                  rotate: [050]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [010],
                  rotate: [0-50]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center"
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

export default AI2026_2030UltimatePredictionsPromotionBanner;