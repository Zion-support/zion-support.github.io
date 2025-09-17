import React, { useState, useEffect } from 'react';

const AdvancedTechBreakthroughBanner: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const breakthroughFeatures = [
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces with 99.9% accuracy",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Computing 2.0",
      description: "1000x faster processing with room temperature quantum chips",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Autonomous AI Systems",
      description: "Self-evolving AI that learns and adapts continuously",
      icon: "🤖",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Genetic Computing Interface",
      description: "DNA-based storage with 1 billion TB per gram capacity",
      icon: "🧬",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Space-Time Computing",
      description: "Manipulate space-time for instantaneous computation",
      icon: "🌌",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % breakthroughFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [breakthroughFeatures.length]);

  const currentItem = breakthroughFeatures[currentFeature];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-8 mb-12 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 animate-pulse"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-40 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-bounce">
            🚀 BREAKTHROUGH TECHNOLOGY 2025 • EXCLUSIVE LAUNCH
          </div>
          <h2 className="text-5xl font-bold mb-4">🌟 Advanced Tech Breakthrough</h2>
          <p className="text-2xl opacity-95 max-w-5xl mx-auto">
            Revolutionary technological innovations that are reshaping industries and transforming the future
          </p>
        </div>

        {/* Featured Technology Carousel */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className={`bg-gradient-to-r ${currentItem.gradient} rounded-2xl p-8 text-center transition-all duration-500 ease-in-out`}>
            <div className="text-8xl mb-6 animate-pulse">
              {currentItem.icon}
            </div>
            <h3 className="text-4xl font-bold mb-4">
              {currentItem.title}
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              {currentItem.description}
            </p>
            <a
              href="/pages/AdvancedTechBreakthrough2025"
              className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              Explore Breakthrough →
            </a>
          </div>

          {/* Feature Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {breakthroughFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentFeature
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-bold mb-2">1000x Performance</h4>
            <p className="text-sm opacity-90">
              Revolutionary quantum processors delivering unprecedented computational power
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h4 className="text-xl font-bold mb-2">99.9% Accuracy</h4>
            <p className="text-sm opacity-90">
              Neural interfaces with near-perfect precision in thought recognition
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h4 className="text-xl font-bold mb-2">Self-Evolving</h4>
            <p className="text-sm opacity-90">
              AI systems that continuously learn and improve without human intervention
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/pages/AdvancedTechBreakthrough2025"
              className="bg-white text-purple-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              🚀 Experience Breakthrough
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              💬 Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTechBreakthroughBanner;