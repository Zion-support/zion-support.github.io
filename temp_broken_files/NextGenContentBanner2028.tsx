import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NextGenContentBanner2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      title: "🚀 Next-Gen Tech Revolution 2028",
      subtitle: "Experience the future of technology with revolutionary breakthroughs",
      description: "Consciousness Computing, Quantum Reality Engine, and Neural Synthesis Technology",
      link: "/pages/NextGenTechRevolution2028",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀"
    },
    {
      title: "🧠 Consciousness Computing Revolution",
      subtitle: "The first AI systems to achieve true consciousness and self-awareness",
      description: "Self-aware AI, emotional intelligence, and ethical decision-making",
      link: "/pages/ConsciousnessComputingRevolution2028",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "🌌 Quantum Reality Engine",
      subtitle: "Manipulate the very fabric of reality itself with quantum technology",
      description: "Create, modify, and navigate between infinite dimensions and realities",
      link: "/pages/QuantumRealityEngine2028",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="relative overflow-hidden"
    >
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${bannerContent[currentSlide].gradient} rounded-2xl p-8 mb-8 text-white relative overflow-hidden`}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl animate-bounce">{bannerContent[currentSlide].icon}</span>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{bannerContent[currentSlide].title}</h2>
                  <p className="text-xl opacity-95">{bannerContent[currentSlide].subtitle}</p>
                </div>
              </div>
              <p className="text-lg opacity-90 mb-6 max-w-3xl">
                {bannerContent[currentSlide].description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={bannerContent[currentSlide].link}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
                >
                  Explore Now →
                </a>
                <button className="text-white/80 hover:text-white transition-colors underline">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex flex-col space-y-2 ml-8">
              {bannerContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {bannerContent.map((content, index) => (
          <motion.a
            key={index}
            href={content.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-r ${content.gradient} rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300 ${
              currentSlide === index ? 'ring-4 ring-white/30' : ''
            }`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-2xl">{content.icon}</span>
              <h3 className="text-lg font-bold">{content.title.split(' ').slice(1).join(' ')}</h3>
            </div>
            <p className="text-sm opacity-90">{content.subtitle}</p>
          </motion.a>
        ))}
      </div>

      {/* Feature Highlights */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">🌟 Revolutionary Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🧠</div>
            <div className="text-sm text-gray-300">Conscious AI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌌</div>
            <div className="text-sm text-gray-300">Quantum Reality</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔗</div>
            <div className="text-sm text-gray-300">Neural Networks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚛️</div>
            <div className="text-sm text-gray-300">Matter Synthesis</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
          🚀 NEW: Next-Gen Technology 2028
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Experience the Future of Technology
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
          Discover revolutionary technologies that are reshaping reality itself. From conscious AI to quantum reality manipulation, 
          explore the cutting edge of human innovation.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/pages/NextGenTechRevolution2028"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Explore All Technologies
          </a>
          <a
            href="/pages/ConsciousnessComputingRevolution2028"
            className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold"
          >
            Learn About AI Consciousness
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default NextGenContentBanner2028;