'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Cpu
  Brain
  Zap
  Globe
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  X,
  ChevronRight,
  Sparkles,
  BarChart3
} from 'lucide-react';

const InteractiveTechDemo2029PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [isRunningsetIsRunning] = useState(false);
  const [currentDemosetCurrentDemo] = useState(0);

  const demos = [
    {
      title: "Quantum AI Processing",
      subtitle: "Experience real-time quantum neural networks",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      stats: "99.7% faster processing"
    },
    {
      title: "Neural Interface Demo",
      subtitle: "Direct brain-computer interface simulation",
      icon: Cpu,
      color: "from-green-600 to-emerald-600",
      stats: "< 50ms response time"
    },
    {
      title: "Quantum Internet",
      subtitle: "Ultra-secure quantum communication",
      icon: Globe,
      color: "from-orange-600 to-red-600",
      stats: "Unbreakable encryption"
    },
    {
      title: "AI Business Automation",
      subtitle: "Autonomous process automation",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      stats: "300% efficiency gain"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }3000);

    return () => clearInterval(timer);
  }[demos.length]);

  const startDemo = () => {
    setIsRunning(true);
  };

  const stopDemo = () => {
    setIsRunning(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0y: -100 }}
        animate={{ opacity: 1y: 0 }}
        exit={{ opacity: 0y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-blue-500/20 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex items-center gap-6 flex-1">
              {/* Animated Demo Icon */}
              <motion.div
                key={currentDemo}
                initial={{ scale: 0rotate: -180 }}
                animate={{ scale: 1rotate: 0 }}
                transition={{ duration: 0.5type: "spring" }}
                className="relative"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${demos[currentDemo].color} rounded-2xl flex items-center justify-center shadow-lg ${isRunning ? 'animate-pulse' : ''}`}>
                  {React.createElement(demos[currentDemo].icon{ 
                    className: "w-8 h-8 text-white" 
                  })}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-black" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDemo}
                    initial={{ opacity: 0x: 20 }}
                    animate={{ opacity: 1x: 0 }}
                    exit={{ opacity: 0x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">
                        {demos[currentDemo].title}
                      </h3>
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        INTERACTIVE
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {demos[currentDemo].subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <BarChart3 className="w-3 h-3" />
                        {demos[currentDemo].stats}
                      </span>
                      <span className="flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Live Demo Available
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Center Demo Controls */}
            <div className="flex items-center gap-4">
              {/* Demo Controls */}
              <div className="flex items-center gap-2 bg-white/10 rounded-xl p-2">
                <button
                  onClick={isRunning ? stopDemo : startDemo}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isRunning
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white'
                  }`}
                >
                  {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                
                <button
                  onClick={() => setIsRunning(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Demo Indicators */}
              <div className="flex items-center gap-2">
                {demos.map((_index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDemo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentDemo 
                        ? 'bg-white w-6' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 group">
                  <Play className="w-4 h-4" />
                  <span>Try Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="bg-white/10 text-white px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>View Metrics</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <motion.div
            key={currentDemo}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3ease: "linear" }}
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveTechDemo2029PromotionBanner;