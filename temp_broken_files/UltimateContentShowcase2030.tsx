import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2030: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      title: "Quantum AI Consciousness",
      description: "The first artificial intelligence with true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-evolving algorithms", "Emotional intelligence", "Creative problem solving", "Autonomous decision making"]
    },
    {
      title: "Interdimensional Computing",
      description: "Access parallel dimensions for infinite computational power",
      icon: "🌌",
      color: "from-cyan-600 to-blue-600",
      features: ["Parallel processing", "Cross-dimensional data", "Reality manipulation", "Infinite storage"]
    },
    {
      title: "Neural Reality Engine",
      description: "Create and manipulate reality through direct neural interfaces",
      icon: "🔮",
      color: "from-emerald-600 to-teal-600",
      features: ["Reality simulation", "Matter manipulation", "Time-space control", "Consciousness transfer"]
    },
    {
      title: "Synthetic Intelligence",
      description: "Hybrid biological-digital intelligence systems",
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      features: ["Biological integration", "Enhanced cognition", "Memory expansion", "Sensory augmentation"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • 2030
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2030
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced content and technologies that will define the next decade
          </p>
        </div>

        {/* Interactive Content Carousel */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 overflow-hidden">
            {/* Slide Navigation */}
            <div className="flex justify-center space-x-2 mb-8">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isAutoPlaying 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-600 text-white hover:bg-gray-500'
                }`}
              >
                {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
            </div>

            {/* Current Slide Content */}
            <div className="text-center">
              <div className="text-8xl mb-6 animate-bounce">
                {contentSlides[currentSlide].icon}
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {contentSlides[currentSlide].title}
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                {contentSlides[currentSlide].description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {contentSlides[currentSlide].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4">Live Demo</h3>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">🎮</div>
                    <p className="mb-4">Interactive Technology Preview</p>
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                      Launch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Space Technology</h3>
            <p className="text-purple-100 mb-6">Advanced space exploration and colonization technologies</p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Interstellar travel systems</li>
              <li>• Space habitat construction</li>
              <li>• Asteroid mining operations</li>
              <li>• Planetary terraforming</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore Space Tech →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Climate Solutions</h3>
            <p className="text-cyan-100 mb-6">Revolutionary technologies for environmental sustainability</p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Carbon capture systems</li>
              <li>• Renewable energy grids</li>
              <li>• Ocean cleanup technology</li>
              <li>• Atmospheric restoration</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Save the Planet →
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Biotechnology</h3>
            <p className="text-emerald-100 mb-6">Advanced genetic engineering and synthetic biology</p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Genetic modification</li>
              <li>• Synthetic organisms</li>
              <li>• Regenerative medicine</li>
              <li>• Longevity treatments</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Advance Biology →
            </button>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Interactive Features</h2>
            <p className="text-xl opacity-90">Experience our technologies through immersive demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3">Virtual Reality</h3>
              <p className="text-sm opacity-80 mb-4">Immersive 3D experiences with full sensory feedback</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Enter VR
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Neural Interface</h3>
              <p className="text-sm opacity-80 mb-4">Direct brain-computer interaction for enhanced control</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Connect Mind
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum Simulator</h3>
              <p className="text-sm opacity-80 mb-4">Experience quantum computing through simulation</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Run Simulation
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the revolution and be part of the most significant technological advancement in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-xl">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2030;