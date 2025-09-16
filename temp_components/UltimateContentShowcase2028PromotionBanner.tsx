'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  Star
  Zap
  Brain
  Rocket
  Target,
  X,
  PlayCircle,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const UltimateContentShowcase2028PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }3000);

    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      icon: Brain,
      title: 'Quantum AI Systems',
      description: 'Revolutionary AI powered by quantum computing',
      color: 'from-purple-600 to-blue-600'
    },
    {
      icon: Target,
      title: 'Neural Interfaces',
      description: 'Direct brain-computer communication',
      color: 'from-pink-600 to-rose-600'
    },
    {
      icon: Rocket,
      title: 'Future Predictions',
      description: '2030-2035 technology roadmap',
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: Zap,
      title: 'Quantum Computing',
      description: 'Breakthrough quantum technologies',
      color: 'from-cyan-600 to-teal-600'
    }
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
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    <span>NEW 2028</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  🚀 Ultimate Technology Showcase 2028
                </h2>
                
                <p className="text-lg text-gray-300 mb-4 max-w-2xl">
                  Discover revolutionary AIquantum computingneural interfacesand future predictions 
                  that will reshape our world in the coming decade.
                </p>

                {/* Rotating Features */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Featured:</span>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ opacity: 1x: 0 }}
                      exit={{ opacity: 0x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${features[currentFeature].color} flex items-center justify-center`}>
                        <features[currentFeature].icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{features[currentFeature].title}</div>
                        <div className="text-xs text-gray-400">{features[currentFeature].description}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>100+ Technologies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Interactive Demos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Expert Insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Future Predictions</span>
                  </div>
                </div>
              </div>

              {/* Right Content - CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  <PlayCircle className="w-5 h-5" />
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="border border-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Join Community</span>
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
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2028PromotionBanner;