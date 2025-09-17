import React, { useState, useEffect } from 'react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  featured: boolean;
}

const AdvancedContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Advanced Tech Trends 2026',
      description: 'Discover the revolutionary technologies reshaping our world in 2026 and beyond',
      image: '🚀',
      link: '/pages/AdvancedTechTrends2026',
      category: 'Technology Trends',
      featured: true
    },
    {
      id: '2',
      title: 'AI Revolutionary Breakthrough 2026',
      description: 'Experience the most significant AI breakthroughs creating unprecedented opportunities',
      image: '🤖',
      link: '/pages/AIRevolutionaryBreakthrough2026',
      category: 'Artificial Intelligence',
      featured: true
    },
    {
      id: '3',
      title: 'Quantum Computing Revolution 2026',
      description: 'Experience the quantum leap in computing power solving impossible problems',
      image: '⚡',
      link: '/pages/QuantumComputingRevolution2026',
      category: 'Quantum Computing',
      featured: true
    },
    {
      id: '4',
      title: 'Synthetic Intelligence 2026',
      description: 'Create and deploy AI agents with synthetic consciousness and autonomous capabilities',
      image: '🧠',
      link: '/pages/SyntheticIntelligence2026',
      category: 'Synthetic Intelligence',
      featured: false
    },
    {
      id: '5',
      title: 'Neural Interface Revolution 2026',
      description: 'Bridge mind and machine with direct brain-computer communication',
      image: '🧬',
      link: '/pages/NeuralInterfaceRevolution2026',
      category: 'Neural Interfaces',
      featured: false
    },
    {
      id: '6',
      title: 'Advanced Quantum Computing 2026',
      description: 'Experience exponential processing power with 1000+ qubit quantum processors',
      image: '⚛️',
      link: '/pages/AdvancedQuantumComputing2026',
      category: 'Quantum Computing',
      featured: false
    }
  ];

  const featuredItems = contentItems.filter(item => item.featured);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-4">
          🌟 FEATURED CONTENT 2026
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Technology Showcase</h2>
        <p className="text-xl text-gray-600">Explore our latest breakthrough content and cutting-edge innovations</p>
      </div>

      {/* Main Carousel */}
      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredItems.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-6xl">{item.image}</span>
                        <div>
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{item.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href={item.link}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
                        >
                          Explore Now →
                        </a>
                        <button 
                          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                          className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
                        >
                          {isAutoPlaying ? 'Pause' : 'Play'}
                        </button>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className="w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-8xl animate-pulse">
                          {item.image}
                        </div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                          ✨
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        >
          →
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {featuredItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* All Content Grid */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">All Revolutionary Content</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl">{item.image}</span>
                <div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="ml-2 px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded text-xs font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a 
                href={item.link}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedContentCarousel;