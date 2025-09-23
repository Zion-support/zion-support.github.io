'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Play
  Pause
  RotateCcw
  Brain
  Zap
  Globe
  Cloud,
  X
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star,
  Code,
  Database,
  BarChart3
} from 'lucide-react';

const InteractiveTechDemo2028PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [isPlayingsetIsPlaying] = useState(false);
  const [currentTechsetCurrentTech] = useState(0);

  const technologies = [
    {
      icon: Brain,
      name: 'AI Automation',
      description: 'Intelligent process optimization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      name: 'Quantum Computing',
      description: '1000x faster processing',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Globe,
      name: 'Neural Interfaces',
      description: 'Direct brain-computer interaction',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Cloud,
      name: 'Cloud Optimization',
      description: 'Intelligent resource management',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    'Real-time Processing',
    'Interactive Controls',
    'Live Metrics',
    'Visual Analytics'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
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
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
            <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000" />
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
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                    Interactive Demo 2028
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Experience the Future
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
                  Interact with cutting-edge AIquantum computingand neural interface 
                  technologies in real-time. See how they work before you implement them.
                </p>

                {/* Technology Carousel */}
                <div className="mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTech}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ opacity: 1x: 0 }}
                      exit={{ opacity: 0x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${technologies[currentTech].color} rounded-lg flex items-center justify-center`}>
                        <technologies[currentTech].icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{technologies[currentTech].name}</div>
                        <div className="text-sm text-gray-400">{technologies[currentTech].description}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {features.map((featureindex) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0scale: 0.8 }}
                        animate={{ opacity: 1scale: 1 }}
                        transition={{ duration: 0.3delay: index * 0.1 }}
                        className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-600"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? 'Pause' : 'Start'} Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Explore All
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Right Content - Interactive Demo Visual */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="relative">
                  {/* Demo Interface */}
                  <motion.div
                    animate={{ 
                      y: [0-10],
                      rotate: [010]
                    }}
                    transition={{ 
                      duration: 4
                      repeat: Infinity
                      ease: "easeInOut" 
                    }}
                    className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30"
                  >
                    {/* Demo Controls */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <motion.button
                          animate={{ scale: isPlaying ? [1.1] : 1 }}
                          transition={{ duration: 1repeat: isPlaying ? Infinity : 0 }}
                          className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                        >
                          {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                        </motion.button>
                        <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                          <RotateCcw className="w-4 h-4 text-gray-300" />
                        </button>
                      </div>
                      <div className="text-sm text-gray-400">
                        {isPlaying ? 'Live Demo' : 'Ready to Start'}
                      </div>
                    </div>

                    {/* Demo Visualization */}
                    <div className="relative h-32 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden mb-4">
                      {/* Animated Center Element */}
                      <motion.div
                        animate={{
                          scale: isPlaying ? [1.21] : 1,
                          opacity: isPlaying ? [0.510.5] : 0.7
                        }}
                        transition={{
                          duration: 2,
                          repeat: isPlaying ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${technologies[currentTech].color} rounded-full flex items-center justify-center`}>
                          <technologies[currentTech].icon className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>

                      {/* Floating Data Points */}
                      {isPlaying && (
                        <>
                          {[...Array(4)].map((_i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0scale: 0 }}
                              animate={{ 
                                opacity: [010],
                                scale: [010],
                                x: [0Math.random() * 100 - 50],
                                y: [0Math.random() * 100 - 50]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeOut"
                              }}
                              className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
                            />
                          ))}
                        </>
                      )}

                      {/* Progress Bar */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="w-full bg-gray-700 rounded-full h-1">
                          <motion.div
                            className={`h-1 bg-gradient-to-r ${technologies[currentTech].color} rounded-full`}
                            animate={{ width: isPlaying ? '100%' : '0%' }}
                            transition={{ duration: 5ease: "linear" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Demo Info */}
                    <div className="text-center">
                      <div className="text-lg font-bold text-white mb-2">
                        {technologies[currentTech].name}
                      </div>
                      <div className="text-sm text-gray-400 mb-3">
                        {technologies[currentTech].description}
                      </div>
                      <div className="flex justify-center gap-1">
                        {[...Array(4)].map((_i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i <= currentTech ? 'bg-purple-400' : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-xl -z-10" />
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">4</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">Real-time</div>
                <div className="text-sm text-gray-400">Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">Interactive</div>
                <div className="text-sm text-gray-400">Controls</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Live</div>
                <div className="text-sm text-gray-400">Metrics</div>
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
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 10ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveTechDemo2028PromotionBanner;