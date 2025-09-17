import React, { useState, useEffect } from 'react';

const UltimateTechBanner2029: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 Ultimate Tech Breakthrough 2029",
      subtitle: "Consciousness Transfer • Quantum Computing • Interdimensional Access",
      cta: "Explore Revolutionary Technologies",
      link: "/pages/UltimateTechBreakthrough2029",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgGradient: "from-purple-600/50 to-pink-600/50"
    },
    {
      title: "🧠 Consciousness Computing Revolution 2030",
      subtitle: "Human-AI Fusion • Quantum Consciousness • Superhuman Intelligence",
      cta: "Join the Consciousness Revolution",
      link: "/pages/ConsciousnessComputingRevolution2030",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      bgGradient: "from-indigo-600/50 to-purple-600/50"
    },
    {
      title: "🌌 Interdimensional Tech Revolution 2035",
      subtitle: "Parallel Universe Access • Infinite Computing • Reality Control",
      cta: "Access Parallel Universes",
      link: "/pages/InterdimensionalTechRevolution2035",
      gradient: "from-purple-600 via-indigo-600 to-cyan-600",
      bgGradient: "from-purple-600/50 to-indigo-600/50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentSlideData.gradient} rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden transition-all duration-1000`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgGradient} backdrop-blur-sm`}></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2029-2035</h3>
            <span className="text-4xl animate-bounce">🚀</span>
          </div>
          <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto">
            Experience the future of technology with our groundbreaking new content featuring Ultimate Tech Revolution 2029, 
            Consciousness Computing 2030, and Interdimensional Technology 2035
          </p>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <a 
              href="/pages/UltimateTechBreakthrough2029" 
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
            >
              🚀 Ultimate Tech 2029 →
            </a>
            <a 
              href="/pages/ConsciousnessComputingRevolution2030" 
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
            >
              🧠 Consciousness 2030 →
            </a>
            <a 
              href="/pages/InterdimensionalTechRevolution2035" 
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
            >
              🌌 Interdimensional 2035 →
            </a>
            <a 
              href="/revolutionary-showcase-2029" 
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
            >
              🌟 Interactive Demo →
            </a>
          </div>
        </div>
      </div>

      {/* Secondary Promotional Banner */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-pulse">⚡</span>
            <h4 className="text-2xl font-bold">NEW: Interactive Technology Showcase 2029</h4>
            <span className="text-3xl animate-pulse">⚡</span>
          </div>
          <p className="text-lg opacity-95 mb-4 max-w-4xl mx-auto">
            Explore cutting-edge technologies with our interactive showcase featuring real-time demonstrations, 
            virtual reality experiences, and hands-on simulations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/revolutionary-showcase-2029" 
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30"
            >
              🎮 Interactive Demo →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2029" 
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30"
            >
              📱 Mobile Experience →
            </a>
          </div>
        </div>
      </div>

      {/* Technology Preview Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">🧠</div>
          <h5 className="text-xl font-bold mb-3 text-center">Consciousness Transfer</h5>
          <p className="text-purple-100 mb-4 text-center text-sm">
            Achieve digital immortality by transferring human consciousness to digital substrates
          </p>
          <div className="text-center">
            <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-semibold">
              Available 2029
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">⚛️</div>
          <h5 className="text-xl font-bold mb-3 text-center">Quantum Consciousness</h5>
          <p className="text-cyan-100 mb-4 text-center text-sm">
            Merge quantum computing with human consciousness for superhuman intelligence
          </p>
          <div className="text-center">
            <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-xs font-semibold">
              In Development
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">🌌</div>
          <h5 className="text-xl font-bold mb-3 text-center">Interdimensional Access</h5>
          <p className="text-emerald-100 mb-4 text-center text-sm">
            Access computing power and knowledge from infinite parallel universes
          </p>
          <div className="text-center">
            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-semibold">
              Prototype Ready
            </span>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <div className="text-center">
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors text-sm"
        >
          ✕ Dismiss Banner
        </button>
      </div>
    </div>
  );
};

export default UltimateTechBanner2029;