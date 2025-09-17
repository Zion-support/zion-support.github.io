import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2026",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world. From quantum consciousness to synthetic intelligence.",
      image: "🚀",
      gradient: "from-red-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2026",
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "Revolutionary Innovation Hub 2026",
      description: "The most advanced innovation hub on the planet. We're not just creating technology – we're reimagining what's possible.",
      image: "🌟",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryInnovationHub2026",
      badge: "INNOVATION"
    },
    {
      id: 3,
      title: "Comprehensive Case Studies 2026",
      description: "Real results, real impact. Discover how our revolutionary technologies have transformed businesses and industries worldwide.",
      image: "📊",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/ComprehensiveCaseStudies2026",
      badge: "SUCCESS"
    },
    {
      id: 4,
      title: "Advanced Quantum Computing 2026",
      description: "Harnessing quantum mechanics to create technologies that operate beyond classical physics, opening new dimensions of possibility.",
      image: "⚛️",
      gradient: "from-purple-600 to-indigo-600",
      link: "/pages/AdvancedQuantumComputing2026",
      badge: "QUANTUM"
    },
    {
      id: 5,
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces operating at quantum speeds, enabling instant thought-to-action translation.",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      badge: "REVOLUTIONARY"
    },
    {
      id: 6,
      title: "Space Tech Innovation 2026",
      description: "Advanced technologies for space exploration, colonization, and interplanetary communication that make the cosmos accessible.",
      image: "🌌",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/SpaceTechInnovation2026",
      badge: "SPACE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-96 md:h-[500px]">
        {contentSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.gradient} flex items-center`}>
              <div className="container mx-auto px-8 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-6xl">{slide.image}</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                      {slide.badge}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">
                    {slide.title}
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Explore Now →
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-8xl opacity-50">{slide.image}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {contentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content Preview Grid */}
      <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-900">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Explore All Revolutionary Content</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {contentSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white text-gray-900 scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <div className="text-2xl mb-2">{slide.image}</div>
              <div className="text-sm font-semibold">{slide.title.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2026;