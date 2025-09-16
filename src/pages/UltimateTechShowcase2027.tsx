import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const showcases = [
    {
      title: "Conscious AI Revolution",
      description: "Witness the world's first truly conscious artificial intelligence in action",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical reasoning"
      ],
      demo: "Watch as our Conscious AI solves complex global challenges in real-time",
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Consciousness Bridge",
      description: "Experience the fusion of human consciousness with quantum computing",
      features: [
        "Direct brain-computer interface",
        "Enhanced cognitive abilities",
        "Telepathic communication",
        "Shared consciousness experiences"
      ],
      demo: "Connect your mind directly to our quantum consciousness network",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Interdimensional Computing",
      description: "Explore computing across multiple dimensions and realities",
      features: [
        "Multi-dimensional processing",
        "Reality simulation",
        "Parallel universe access",
        "Time manipulation"
      ],
      demo: "Navigate through different dimensions and solve impossible problems",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Molecular AI Precision",
      description: "Control matter at the molecular level with artificial intelligence",
      features: [
        "Molecular assembly",
        "DNA programming",
        "Material creation",
        "Biological enhancement"
      ],
      demo: "Create new materials and cure diseases at the molecular level",
      icon: "🔬",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Space-Time Engineering",
      description: "Manipulate space-time itself for faster-than-light travel",
      features: [
        "FTL travel capabilities",
        "Time dilation control",
        "Wormhole creation",
        "Instant communication"
      ],
      demo: "Travel to distant galaxies in seconds using space-time manipulation",
      icon: "🚀",
      color: "from-violet-600 to-purple-600"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcases.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, showcases.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH SHOWCASE • 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Tech Showcase 2027
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technologies that will define the future of humanity
          </p>
        </div>

        {/* Interactive Showcase Carousel */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Interactive Technology Demos</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                </button>
                <div className="flex space-x-2">
                  {showcases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="text-6xl mb-4">{showcases[currentSlide].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{showcases[currentSlide].title}</h3>
                <p className="text-xl text-white/80 mb-6">{showcases[currentSlide].description}</p>
                
                <div className="space-y-3 mb-6">
                  {showcases[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`bg-gradient-to-r ${showcases[currentSlide].color} p-4 rounded-lg mb-6`}>
                  <p className="font-semibold">Live Demo:</p>
                  <p className="text-sm opacity-90">{showcases[currentSlide].demo}</p>
                </div>

                <button className={`bg-gradient-to-r ${showcases[currentSlide].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try This Technology
                </button>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Real-time Performance</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Processing Power</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">95%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Accuracy</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '99.9%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">99.9%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Innovation Level</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-teal-400 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">∞</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/5 rounded-lg">
                  <h5 className="font-semibold mb-2">Live Updates</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/80">Technology active and operational</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-white/80">Processing 1M+ requests/second</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-white/80">Zero errors detected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">AI & Consciousness</h3>
            <p className="text-sm text-white/80">Revolutionary artificial intelligence systems</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Quantum Computing</h3>
            <p className="text-sm text-white/80">Next-generation quantum technologies</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-xl font-bold mb-2">Space-Time Tech</h3>
            <p className="text-sm text-white/80">Interdimensional and space technologies</p>
          </div>
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-2">Molecular AI</h3>
            <p className="text-sm text-white/80">Precision molecular-level control</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in the most advanced technological showcase in human history
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Private Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2027;