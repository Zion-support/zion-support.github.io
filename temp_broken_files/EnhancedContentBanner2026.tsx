import React, { useState, useEffect } from 'react';

const EnhancedContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerContent = [
    {
      title: "🌟 Ultimate Tech Breakthrough 2026",
      subtitle: "Revolutionary AI Consciousness & Quantum Neural Fusion",
      link: "/pages/UltimateTechBreakthrough2026",
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "🚀 Revolutionary Tech Showcase",
      subtitle: "Interactive Exploration of Cutting-Edge Technologies",
      link: "/pages/RevolutionaryTechShowcase2026",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🧠 Next-Gen Innovation Hub",
      subtitle: "World's Most Advanced Research & Development Facility",
      link: "/pages/NextGenInnovationHub2026",
      color: "from-emerald-600 to-teal-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerContent.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-8 mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 BREAKTHROUGH 2026 • REVOLUTIONARY TECHNOLOGY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Experience the Future of Technology
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technological breakthroughs that are reshaping reality itself
          </p>
        </div>

        {/* Rotating Banner Cards */}
        <div className="relative h-32 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {bannerContent.map((content, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{content.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{content.title}</h3>
                        <p className="text-sm opacity-90">{content.subtitle}</p>
                      </div>
                    </div>
                    <a
                      href={content.link}
                      className={`bg-gradient-to-r ${content.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                    >
                      Explore Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {bannerContent.map((content, index) => (
            <a
              key={index}
              href={content.link}
              className={`bg-gradient-to-r ${content.color} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center group`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {content.icon}
              </div>
              <div className="font-semibold text-sm">{content.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentBanner2026;