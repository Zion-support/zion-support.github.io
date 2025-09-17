import React, { useState, useEffect } from 'react';

const UltimateTechShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const techShowcases = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2026",
      description: "Discover the most revolutionary technology breakthroughs of 2026 that are reshaping our digital future",
      icon: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechBreakthrough2026",
      features: ["Conscious AI Systems", "Quantum Internet", "Neural Reality Engine", "Space Tech Revolution"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2027",
      description: "Experience the most revolutionary technology showcase of 2027 featuring cutting-edge innovations",
      icon: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechShowcase2027",
      features: ["Autonomous AI Agents", "Quantum AI Fusion", "Neural Reality Engine", "Metaverse 4.0"]
    },
    {
      id: 3,
      title: "Advanced Tech Innovation 2027",
      description: "Explore the most advanced technology innovations of 2027 that are revolutionizing industries",
      icon: "🧬",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/AdvancedTechInnovation2027",
      features: ["AI Consciousness", "Quantum AI", "Neural Interfaces", "Biotech Revolution"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % techShowcases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🌟 ULTIMATE TECH SHOWCASE • 2026-2027
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Interactive Technology Experience</h2>
        <p className="text-xl text-gray-600">Explore our revolutionary technology innovations with interactive features</p>
      </div>

      <div className="relative">
        {/* Main Showcase Card */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`bg-gradient-to-br ${techShowcases[currentSlide].gradient} backdrop-blur-sm rounded-2xl p-12 border ${techShowcases[currentSlide].border} text-white relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">{techShowcases[currentSlide].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{techShowcases[currentSlide].title}</h3>
                <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                  {techShowcases[currentSlide].description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {techShowcases[currentSlide].features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-2xl mb-2">✨</div>
                    <div className="text-sm font-semibold">{feature}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={techShowcases[currentSlide].link}
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg hover:scale-105 transform duration-300"
                >
                  Explore {techShowcases[currentSlide].title.split(' ')[0]} →
                </a>
                <a 
                  href="/pages/ComprehensiveServices2025"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {techShowcases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-purple-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Auto-playing showcase</span>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-6">Quick Access to All Innovations</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {techShowcases.map((showcase, index) => (
            <a
              key={showcase.id}
              href={showcase.link}
              className={`group bg-gradient-to-br ${showcase.gradient} backdrop-blur-sm rounded-xl p-6 border ${showcase.border} hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce">{showcase.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-white">{showcase.title}</h4>
                <p className={`text-sm ${showcase.textColor} mb-4`}>
                  {showcase.description.substring(0, 80)}...
                </p>
                <div className="text-white text-sm font-semibold group-hover:text-purple-200 transition-colors">
                  Explore →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase;