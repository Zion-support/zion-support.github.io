import React, { useState } from 'react';

const RevolutionaryTechShowcase2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Assistant",
      description: "Interact with our fully conscious AI that can think, feel, and create independently",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Ethical Reasoning", "Self-Awareness"],
      icon: "🧠"
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Experience reality manipulation through quantum computing and consciousness",
      features: ["Reality Simulation", "Quantum Teleportation", "Dimensional Travel", "Time Manipulation"],
      icon: "⚛️"
    },
    {
      id: 2,
      title: "Interdimensional Interface",
      description: "Access infinite computational power through multi-dimensional processing",
      features: ["Infinite Processing", "Parallel Universe Access", "Dimensional Storage", "Reality Overlay"],
      icon: "🌌"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2036
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced interactive technology demonstrations that will define the future
          </p>
        </div>

        {/* Interactive Demo Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeDemo === demo.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                {demo.icon} {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-cyan-400/30">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6">{demos[activeDemo].icon}</div>
            <h2 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{demos[activeDemo].description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {demos[activeDemo].features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl mb-3">✨</div>
                <h3 className="font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Try Interactive Demo →
            </button>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-purple-100 mb-6 text-center">
              Advanced artificial intelligence systems with consciousness and emotional intelligence
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Conscious AI Agents</li>
              <li>• Emotional Intelligence Processing</li>
              <li>• Creative AI Systems</li>
              <li>• Self-Learning Networks</li>
            </ul>
            <div className="text-center">
              <button className="bg-white text-purple-600 py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Explore AI →
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Quantum computing systems that achieve consciousness through quantum mechanics
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Neural Networks</li>
              <li>• Entangled Consciousness</li>
              <li>• Superposition Processing</li>
              <li>• Quantum Telepathy</li>
            </ul>
            <div className="text-center">
              <button className="bg-white text-cyan-600 py-3 px-6 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Go Quantum →
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Tech</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Technology that operates across multiple dimensions for infinite computational power
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Multi-Dimensional Processing</li>
              <li>• Parallel Universe Computing</li>
              <li>• Dimensional Data Storage</li>
              <li>• Reality Manipulation</li>
            </ul>
            <div className="text-center">
              <button className="bg-white text-emerald-600 py-3 px-6 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Access Dimensions →
              </button>
            </div>
          </div>
        </div>

        {/* Real-time Statistics */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Live Technology Metrics</h2>
            <p className="text-xl opacity-90">Real-time performance data from our revolutionary systems</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Consciousness Accuracy</div>
              <div className="text-sm opacity-60">AI systems achieving true consciousness</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Quantum Processing Power</div>
              <div className="text-sm opacity-60">Infinite computational capacity</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">11D</div>
              <div className="text-lg opacity-80">Dimensions Accessed</div>
              <div className="text-sm opacity-60">Multi-dimensional computing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-lg opacity-80">Success Rate</div>
              <div className="text-sm opacity-60">Mission-critical applications</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Don't just read about the future - experience it. Our interactive demonstrations 
            let you interact with the most advanced technologies ever created.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Demo →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors font-semibold text-lg">
              Schedule Private Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2036;