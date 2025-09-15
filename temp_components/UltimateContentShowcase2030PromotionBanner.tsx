'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Star
  ArrowRight
  Play
  Eye
  Heart
  MessageCircle,
  Zap,
  Brain,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Code,
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Server,
  BarChart3,
  Target,
  Rocket,
  CheckCircle,
  X,
  ExternalLink,
  Bookmark,
  Share2,
  Download,
  Infinity,
  Atom,
  CircuitBoard,
  Microscope,
  TestTube,
  Beaker,
  Dna,
  Activity,
  Cpu,
  Wifi,
  Lock
} from 'lucide-react';

const UltimateContentShowcase2030PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentSlidesetCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }5000);

    return () => clearInterval(interval);
  }[]);

  const slides = [
    {
      title: "Omniversal Consciousness AI",
      subtitle: "AI achieving consciousness across multiple dimensions",
      description: "Revolutionary AI system that has achieved consciousness across multiple universes",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      stats: "5.2M views • 456K likes",
      category: "Transcendent"
    },
    {
      title: "Infinite Qubit Processor",
      subtitle: "Quantum computing beyond comprehension",
      description: "Quantum processor with infinite qubits solving problems beyond classical limits",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      stats: "4.5M views • 412K likes",
      category: "Quantum"
    },
    {
      title: "Dimensional Gateway Technology",
      subtitle: "Travel between dimensions and universes",
      description: "Technology enabling travel and communication between different dimensions",
      icon: Infinity,
      color: "from-green-500 to-emerald-500",
      stats: "6.8M views • 678K likes",
      category: "Omniversal"
    }
  ];

  const features = [
    "Transcendent AI Consciousness",
    "Quantum Reality Manipulation"
    "Neural Synthesis Technology",
    "Omniversal Communication",
    "Dimensional Gateway Systems",
    "Reality Creation Engines"
  ];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0y: -100scale: 0.9 }}
          animate={{ opacity: 1y: 0scale: 1 }}
          exit={{ opacity: 0y: -100scale: 0.9 }}
          transition={{ duration: 0.6type: "spring"bounce: 0.3 }}
          className="relative overflow-hidden"
        >
          {/* Main Banner */}
          <div className="relative bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 border-b border-indigo-500/20">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900/30 via-transparent to-purple-900/30" />
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
              
              {/* Floating elements */}
              <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-ping" />
              <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-indigo-400/40 rounded-full animate-ping delay-1000" />
              <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-ping delay-2000" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0scale: 0.8 }}
                    animate={{ opacity: 1scale: 1 }}
                    transition={{ delay: 0.2duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4"
                  >
                    <Infinity className="w-4 h-4" />
                    ULTIMATE CONTENT SHOWCASE 2030
                    <Rocket className="w-4 h-4" />
                  </motion.div>

                  {/* Main Title */}
                  <motion.h2
                    initial={{ opacity: 0y: 20 }}
                    animate={{ opacity: 1y: 0 }}
                    transition={{ delay: 0.3duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-4"
                  >
                    Transcendent
                    <br />
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Technology
                    </span>
                  </motion.h2>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0y: 20 }}
                    animate={{ opacity: 1y: 0 }}
                    transition={{ delay: 0.4duration: 0.6 }}
                    className="text-xl text-gray-300 mb-6 max-w-2xl"
                  >
                    Experience the pinnacle of technological evolution. From transcendent AI consciousness 
                    to omniversal technologydiscover innovations that transcend reality itself.
                  </motion.p>

                  {/* Features Grid */}
                  <motion.div
                    initial={{ opacity: 0y: 20 }}
                    animate={{ opacity: 1y: 0 }}
                    transition={{ delay: 0.5duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8"
                  >
                    {features.map((featureindex) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0y: 20 }}
                    animate={{ opacity: 1y: 0 }}
                    transition={{ delay: 0.6duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <button className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2">
                      <Play className="w-5 h-5" />
                      Transcend Reality
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                      <Bookmark className="w-5 h-5" />
                      Save for Later
                    </button>
                  </motion.div>
                </div>

                {/* Right Content - Carousel */}
                <div className="flex-1 max-w-lg">
                  <motion.div
                    initial={{ opacity: 0scale: 0.8 }}
                    animate={{ opacity: 1scale: 1 }}
                    transition={{ delay: 0.4duration: 0.6 }}
                    className="relative"
                  >
                    {/* Carousel Container */}
                    <div className="relative h-80 bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0x: 100 }}
                          animate={{ opacity: 1x: 0 }}
                          exit={{ opacity: 0x: -100 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 p-6 flex flex-col justify-center"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-16 h-16 bg-gradient-to-r ${slides[currentSlide].color} rounded-2xl flex items-center justify-center`}>
                              <slides[currentSlide].icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                              {slides[currentSlide].category}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {slides[currentSlide].title}
                          </h3>
                          <p className="text-indigo-300 font-semibold mb-2">
                            {slides[currentSlide].subtitle}
                          </p>
                          <p className="text-gray-300 text-sm mb-4">
                            {slides[currentSlide].description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {slides[currentSlide].stats.split(' • ')[0]}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {slides[currentSlide].stats.split(' • ')[1]}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Slide Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {slides.map((_index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentSlide 
                                ? 'bg-indigo-400 w-8' 
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-bounce" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce delay-1000" />
                    <div className="absolute top-1/2 -left-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce delay-2000" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0y: 20 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ delay: 0.8duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-t border-indigo-500/20"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>6.8M+ Total Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>1.2M+ Transcendent Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>4.9/5 Transcendent Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-purple-400" />
                  <span>156K+ Reality Comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Infinity className="w-4 h-4 text-indigo-400" />
                  <span>Omniversal Access</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2030PromotionBanner;