import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Rocket, 
  TrendingUp,
  X,
  Play,
  Sparkles
} from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 1,
      title: "AI Innovation Showcase 2026",
      subtitle: "Revolutionary AI Technologies",
      description: "Discover cutting-edge autonomous AI systems, quantum-enhanced computing, and consciousness-driven solutions transforming industries worldwide.",
      features: ["Autonomous AI Agents", "Quantum-Enhanced AI", "Consciousness Computing"],
      link: "/ai-innovation-showcase-2026",
      icon: Brain,
      gradient: "from-blue-600 to-purple-600",
      accent: "blue",
      stats: "99.7% Success Rate"
    },
    {
      id: 2,
      title: "Next-Gen Tech Trends 2026",
      subtitle: "Future Technology Predictions",
      description: "Explore the revolutionary technologies defining the next decade - from interdimensional computing to neural-quantum interfaces.",
      features: ["Market Predictions", "Technology Timeline", "Investment Insights"],
      link: "/next-gen-tech-trends-2026",
      icon: TrendingUp,
      gradient: "from-purple-600 to-pink-600",
      accent: "purple",
      stats: "$45B Invested in 2025"
    },
    {
      id: 3,
      title: "Advanced AI Solutions",
      subtitle: "Enterprise AI Transformation",
      description: "Transform your business with our comprehensive AI solutions designed for enterprise-scale deployment and autonomous operations.",
      features: ["Enterprise Integration", "Autonomous Operations", "Real-time Analytics"],
      link: "/advanced-ai-solutions-2026",
      icon: Rocket,
      gradient: "from-green-600 to-blue-600",
      accent: "green",
      stats: "500+ Enterprise Clients"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  const currentPromo = promotions[currentSlide];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        {/* Background with animated gradient */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-r ${currentPromo.gradient} opacity-90`}></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        {/* Animated sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl"
              >
                {/* Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">NEW CONTENT</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-semibold">{currentPromo.stats}</span>
                  </div>
                </div>

                {/* Title and Subtitle */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {currentPromo.title}
                </h2>
                <p className="text-lg text-white/90 mb-4 font-medium">
                  {currentPromo.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/80 mb-6 leading-relaxed max-w-2xl">
                  {currentPromo.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {currentPromo.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
                    >
                      <Zap className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  Explore Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>

            {/* Icon */}
            <div className="hidden lg:flex items-center justify-center ml-8">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <currentPromo.icon className="w-16 h-16 text-white" />
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentPromo.gradient} rounded-3xl blur-xl opacity-30 -z-10`}></div>
              </motion.div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300 z-20"
        >
          <X className="w-6 h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;