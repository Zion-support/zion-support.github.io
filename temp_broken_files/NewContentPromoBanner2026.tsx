import React, { useState, useEffect } from 'react';

const NewContentPromoBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const newContent = [
    {
      title: "🚀 Advanced Space Tech 2026",
      description: "Revolutionary space technologies, quantum propulsion, and interplanetary AI networks",
      link: "/pages/AdvancedSpaceTech2026",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-600/20 to-blue-600/20"
    },
    {
      title: "🧬 Advanced Biotech AI 2026", 
      description: "AI-powered biotechnology revolutionizing healthcare, agriculture, and human enhancement",
      link: "/pages/AdvancedBiotechAI2026",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-600/20 to-emerald-600/20"
    },
    {
      title: "🛡️ Advanced Cybersecurity Suite 2026",
      description: "Next-gen security with AI threat detection, quantum encryption, and autonomous defense",
      link: "/pages/AdvancedCybersecuritySuite2026", 
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-600/20 to-orange-600/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [newContent.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-bounce">
            🌟 NEW CONTENT 2026 • BREAKTHROUGH TECHNOLOGIES
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our latest cutting-edge content covering space technology, biotechnology, 
            and cybersecurity innovations that are reshaping the future
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.bgGradient} backdrop-blur-sm rounded-xl p-8 border border-white/20`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4">{content.title}</h3>
                        <p className="text-gray-200 text-lg mb-6">{content.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <a 
                            href={content.link}
                            className={`bg-gradient-to-r ${content.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                          >
                            Explore Now →
                          </a>
                          <button className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                            Learn More
                          </button>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-8xl mb-4 opacity-80">
                          {content.title.includes('Space') ? '🚀' : 
                           content.title.includes('Biotech') ? '🧬' : '🛡️'}
                        </div>
                        <div className="text-white/60 text-sm">
                          Revolutionary Technology
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Quick Access to New Content</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {newContent.map((content, index) => (
              <a
                key={index}
                href={content.link}
                className={`bg-gradient-to-r ${content.bgGradient} backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:scale-105 transition-all duration-300 group`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {content.title.includes('Space') ? '🚀' : 
                     content.title.includes('Biotech') ? '🧬' : '🛡️'}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{content.title}</h4>
                  <p className="text-white/80 text-sm">{content.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-300 mb-4">Ready to explore the future of technology?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              View All New Content
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner2026;