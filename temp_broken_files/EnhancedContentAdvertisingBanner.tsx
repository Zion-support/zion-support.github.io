import React, { useState, useEffect } from 'react';

const EnhancedContentAdvertisingBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const advertisements = [
    {
      id: 1,
      title: "🚀 NEW: Business Automation Guide 2025",
      description: "Complete 90-day roadmap to automate 80% of business operations",
      link: "/pages/BusinessAutomationGuide2025",
      gradient: "from-purple-600 to-pink-600",
      cta: "Get Your Roadmap →"
    },
    {
      id: 2,
      title: "⚡ BREAKTHROUGH: Advanced Tech Solutions 2026",
      description: "Neural Networks 3.0, Quantum Computing, and Consciousness AI",
      link: "/pages/AdvancedTechSolutions2026",
      gradient: "from-cyan-600 to-blue-600",
      cta: "Explore Technologies →"
    },
    {
      id: 3,
      title: "🌟 REVOLUTIONARY: Innovation Showcase 2026",
      description: "Consciousness AI, Quantum Internet, and Neural Interface Technology",
      link: "/pages/InnovationShowcase2026",
      gradient: "from-violet-600 to-fuchsia-600",
      cta: "See Innovations →"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-8 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🔥 EXCLUSIVE NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-3xl font-bold mb-4">🌟 Revolutionary Content Just Released</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest breakthrough content that will transform your understanding of technology and business
          </p>
        </div>

        {/* Rotating Ad Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentAd * 100}%)` }}
            >
              {advertisements.map((ad) => (
                <div key={ad.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${ad.gradient} rounded-xl p-8 text-center`}>
                    <h3 className="text-2xl font-bold mb-4">{ad.title}</h3>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">{ad.description}</p>
                    <a 
                      href={ad.link}
                      className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                    >
                      {ad.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {advertisements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAd ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/pages/BusinessAutomationGuide2025" className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300 border border-purple-400/30">
            <div className="text-2xl mb-2">📋</div>
            <h4 className="font-bold mb-1">Business Automation</h4>
            <p className="text-sm opacity-80">90-day roadmap guide</p>
          </a>
          <a href="/pages/AdvancedTechSolutions2026" className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-cyan-600/40 transition-all duration-300 border border-cyan-400/30">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-bold mb-1">Advanced Tech</h4>
            <p className="text-sm opacity-80">Next-gen solutions</p>
          </a>
          <a href="/pages/InnovationShowcase2026" className="bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-violet-600/40 transition-all duration-300 border border-violet-400/30">
            <div className="text-2xl mb-2">🌟</div>
            <h4 className="font-bold mb-1">Innovation Lab</h4>
            <p className="text-sm opacity-80">Breakthrough showcase</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentAdvertisingBanner;