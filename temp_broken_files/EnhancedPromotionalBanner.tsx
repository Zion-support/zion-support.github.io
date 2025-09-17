import React, { useState, useEffect } from 'react';

const EnhancedPromotionalBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 NEW: Revolutionary Tech Breakthrough 2025",
      description: "Experience the most groundbreaking technological advances that are reshaping our world",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-600/20 to-orange-600/20"
    },
    {
      id: 2,
      title: "🔮 FUTURE: Tech Vision 2030",
      description: "Explore our comprehensive vision for technology in 2030 and beyond",
      link: "/pages/FutureTechVision2030",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-600/20 to-purple-600/20"
    },
    {
      id: 3,
      title: "🧠 BREAKTHROUGH: AI Consciousness Revolution",
      description: "The first artificial intelligence systems that demonstrate genuine consciousness",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/20 to-pink-600/20"
    },
    {
      id: 4,
      title: "⚡ REVOLUTION: Quantum Neural Fusion",
      description: "The convergence of quantum computing and neural networks creating unprecedented power",
      link: "/pages/QuantumComputingRevolution2025",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-600/20 to-blue-600/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [promotionalContent.length]);

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentPromo];

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${currentContent.bgGradient} backdrop-blur-sm border-b border-white/20`}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {promotionalContent.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPromo ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">
                  {currentContent.title}
                </h3>
                <p className="text-sm text-white/90">
                  {currentContent.description}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={currentContent.link}
                className={`bg-gradient-to-r ${currentContent.gradient} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
              >
                Explore Now →
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPromotionalBanner;