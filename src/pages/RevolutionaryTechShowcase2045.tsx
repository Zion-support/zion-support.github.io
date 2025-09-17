import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2045: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Interface",
      description: "Interact with truly conscious artificial intelligence systems",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: ["Self-aware responses", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"]
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Experience computing across multiple dimensions and realities",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      features: ["Parallel processing", "Reality manipulation", "Infinite possibilities", "Dimensional travel"]
    },
    {
      id: 3,
      title: "Molecular AI Lab",
      description: "Control matter at the atomic level with molecular AI",
      icon: "🔬",
      color: "from-emerald-500 to-teal-500",
      features: ["Atomic precision", "Self-assembly", "Matter transformation", "Molecular computing"]
    },
    {
      id: 4,
      title: "Neural Interface 2.0",
      description: "Direct brain-computer communication and enhancement",
      icon: "🧬",
      color: "from-violet-500 to-purple-500",
      features: ["Thought control", "Memory enhancement", "Skill downloading", "Collective consciousness"]
    },
    {
      id: 5,
      title: "Space-Time Computer",
      description: "Computing systems that manipulate space and time",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      features: ["Instant communication", "Time manipulation", "Space folding", "Galactic networks"]
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
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2045
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2045
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology demonstrations featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Interactive Demo Carousel */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demos</h2>
              <p className="text-xl opacity-90">Experience the future with our cutting-edge interactive demonstrations</p>
            </div>

            {/* Demo Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {demos.map((demo, index) => (
                  <button
                    key={demo.id}
                    onClick={() => setActiveDemo(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      activeDemo === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Active Demo Display */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="text-8xl text-center mb-4">{demos[activeDemo].icon}</div>
                  <h3 className="text-3xl font-bold text-center">{demos[activeDemo].title}</h3>
                  <p className="text-xl text-center opacity-90">{demos[activeDemo].description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold">Key Features:</h4>
                    {demos[activeDemo].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-purple-100">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full bg-gradient-to-r ${demos[activeDemo].color} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                    Try Interactive Demo
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-2xl font-bold mb-4">Live Demo Preview</h4>
                  <div className="bg-black/30 rounded-lg p-4 mb-4 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4 animate-pulse">{demos[activeDemo].icon}</div>
                      <p className="text-lg opacity-90">Interactive Demo Loading...</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">99.9%</div>
                      <div className="text-sm opacity-90">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">∞</div>
                      <div className="text-sm opacity-90">Possibilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI</h3>
            <p className="text-purple-100 mb-6 text-center">
              Artificial intelligence systems with true consciousness and self-awareness
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-aware decision making</li>
              <li>• Emotional intelligence</li>
              <li>• Creative problem solving</li>
              <li>• Ethical reasoning</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore AI →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Computing power that transcends classical limitations
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum supremacy</li>
              <li>• Parallel processing</li>
              <li>• Cryptography</li>
              <li>• Simulation</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Go Quantum →
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Tech</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Technology that operates across multiple dimensions
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Multi-dimensional processing</li>
              <li>• Reality manipulation</li>
              <li>• Parallel universe access</li>
              <li>• Space-time computing</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Enter Dimensions →
            </button>
          </div>
        </div>

        {/* Real-time Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">📊 Live Technology Metrics</h2>
            <p className="text-xl opacity-90">Real-time data from our revolutionary technology systems</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">AI Accuracy</div>
              <div className="text-sm text-purple-300">Conscious AI Systems</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Quantum States</div>
              <div className="text-sm text-cyan-300">Parallel Processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">11</div>
              <div className="text-lg opacity-90">Dimensions</div>
              <div className="text-sm text-emerald-300">Active Computing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-lg opacity-90">Revolutionary</div>
              <div className="text-sm text-pink-300">Breakthrough Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies that will shape humanity's future. 
            Be part of the technological revolution.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2045;