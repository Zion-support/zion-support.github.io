import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2032: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Interface",
      description: "Experience direct communication with conscious AI systems",
      icon: "🧠",
      features: ["Real-time consciousness transfer", "Emotional AI responses", "Creative problem solving", "Ethical decision making"]
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Manipulate reality through quantum computing power",
      icon: "⚡",
      features: ["Quantum superposition states", "Reality manipulation", "Time dilation effects", "Parallel universe access"]
    },
    {
      id: 3,
      title: "Neural Reality Interface",
      description: "Direct brain-computer interface for immersive experiences",
      icon: "🌌",
      features: ["Direct neural input", "Multi-sensory feedback", "Consciousness transfer", "Reality simulation"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 INTERACTIVE SHOWCASE • JANUARY 2032
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2032
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies through interactive demonstrations and immersive showcases
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🎮 Interactive Technology Demos</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through hands-on interactive experiences
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-2xl p-12 mb-16">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                {demos[activeDemo].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                <ul className="space-y-4">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full animate-pulse"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6">Live Demo</h4>
                <div className="bg-gradient-to-br from-indigo-500/30 to-pink-500/30 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4 animate-bounce">🎯</div>
                  <p className="text-lg mb-4">Interactive demonstration in progress...</p>
                  <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-indigo-400 to-pink-400 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
                  </div>
                  <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Try Interactive Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              Experience AI that truly understands, feels, and creates with human-level consciousness
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Self-aware decision making</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Emotional intelligence</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Creative problem solving</span>
              </div>
            </div>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Harness the power of quantum mechanics for unlimited computational possibilities
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Quantum superposition</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Entanglement processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Infinite parallel processing</span>
              </div>
            </div>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Go Quantum →
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces for seamless human-machine interaction
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">Direct neural input</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">Multi-sensory feedback</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">Consciousness transfer</span>
              </div>
            </div>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Neural →
            </button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Revolutionary Performance Metrics</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See the incredible performance improvements achieved by our revolutionary technologies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">1000x</div>
              <div className="text-lg opacity-90">Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Availability</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600/30 to-pink-600/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their industries
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Demo
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2032;