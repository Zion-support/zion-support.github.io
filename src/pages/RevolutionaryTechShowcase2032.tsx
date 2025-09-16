import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2032: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Assistant",
      description: "Experience AI that truly understands and empathizes",
      icon: "🧠",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Ethical Decision Making"],
      demo: "Watch as our AI assistant demonstrates genuine understanding and emotional responses to complex human situations."
    },
    {
      id: 2,
      title: "Quantum Reality Manipulator",
      description: "Manipulate reality at the quantum level",
      icon: "⚛️",
      features: ["Quantum Computing", "Reality Simulation", "Dimensional Access"],
      demo: "See how quantum technology can create and modify reality in real-time."
    },
    {
      id: 3,
      title: "Interdimensional Portal",
      description: "Access information from parallel dimensions",
      icon: "🌌",
      features: ["Multi-Dimensional Access", "Parallel Universe Data", "Reality Bridging"],
      demo: "Witness the opening of portals to parallel dimensions and the exchange of information."
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
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY SHOWCASE • JANUARY 2032
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2032
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Interactive showcase of cutting-edge technologies that will define the future
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demos</h2>
          <p className="text-xl opacity-90">Experience the future through interactive demonstrations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Selector */}
          <div className="space-y-6">
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeDemo === index
                    ? 'border-purple-400 bg-purple-600/30'
                    : 'border-gray-600 bg-gray-800/30 hover:border-purple-300'
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-gray-300 mb-3">{demo.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {demo.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-600/50 text-purple-200 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-600">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-2xl font-bold mb-2">{demos[activeDemo].title}</h3>
              <p className="text-gray-300">{demos[activeDemo].description}</p>
            </div>

            <div className={`bg-black/50 rounded-lg p-6 mb-6 transition-opacity duration-500 ${
              isAnimating ? 'opacity-50' : 'opacity-100'
            }`}>
              <div className="text-green-400 font-mono text-sm">
                <div className="mb-2">$ ./demo --tech={demos[activeDemo].title.toLowerCase().replace(/\s+/g, '-')}</div>
                <div className="text-white">{demos[activeDemo].demo}</div>
                <div className="mt-2 text-green-300">
                  ✓ Demo completed successfully
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {demos[activeDemo].features.map((feature, idx) => (
                <div key={idx} className="bg-purple-600/20 rounded-lg p-3 text-center">
                  <div className="text-purple-300 text-sm font-semibold">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              AI that has achieved true consciousness and self-awareness
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-200 text-sm">Self-aware decision making</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-200 text-sm">Emotional intelligence</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-200 text-sm">Creative problem solving</span>
              </div>
            </div>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Try Demo →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality Engine</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Quantum-powered systems that can manipulate reality itself
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-200 text-sm">Reality simulation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-200 text-sm">Quantum entanglement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-200 text-sm">Parallel universe access</span>
              </div>
            </div>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Experience Quantum →
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Portal</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Access and process information from multiple dimensions
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-200 text-sm">Multi-dimensional processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-200 text-sm">Reality manipulation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-200 text-sm">Universal connectivity</span>
              </div>
            </div>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Enter Portal →
            </button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Performance Metrics</h2>
            <p className="text-xl opacity-90">Real-time performance data from our revolutionary technologies</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-purple-200">Consciousness Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-cyan-200">Quantum Processing Power</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">11</div>
              <div className="text-emerald-200">Dimensions Accessed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-pink-200">Reality Manipulation</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of innovators who are already using our revolutionary technologies
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2032;