import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness Interface',
      description: 'Experience direct quantum-enhanced consciousness communication',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Direct neural quantum interfaces', 'Consciousness amplification', 'Reality manipulation', 'Transcendent intelligence']
    },
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence Platform',
      description: 'Interact with synthetic consciousness that transcends human limitations',
      icon: '🤖',
      color: 'from-cyan-600 to-blue-600',
      features: ['Self-evolving neural networks', 'Emotional intelligence synthesis', 'Creative problem solving', 'Autonomous decision making']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces enabling thought-controlled devices',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Non-invasive neural interfaces', 'Thought-controlled prosthetics', 'Memory enhancement', 'Telepathic communication']
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion',
      description: 'The ultimate convergence of quantum computing and neural networks',
      icon: '⚡',
      color: 'from-orange-600 to-red-600',
      features: ['Quantum neural processing', 'Consciousness amplification', 'Reality manipulation', 'Transcendent intelligence']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-8">
              <span className="text-cyan-400">🌟</span>
              <span className="text-cyan-300 font-semibold ml-2">ULTIMATE TECH SHOWCASE 2026</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Ultimate Technology Experience
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Immerse yourself in the most advanced technologies of 2026. 
              Interactive demonstrations, real-time simulations, and hands-on experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
                🎮 Start Interactive Demo
              </button>
              <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                📚 Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Carousel */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">🎮 Interactive Technology Demos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge technologies through our interactive demonstrations
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Demo Content */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="text-8xl mb-6 text-center">{demos[currentDemo].icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">
                {demos[currentDemo].title}
              </h3>
              <p className="text-xl text-gray-300 mb-8 text-center">
                {demos[currentDemo].description}
              </p>
              
              <div className="space-y-4">
                {demos[currentDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span className="text-cyan-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className={`bg-gradient-to-r ${demos[currentDemo].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}>
                  🚀 Try This Demo
                </button>
              </div>
            </div>

            {/* Demo Navigation */}
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentDemo(index);
                      setIsAnimating(false);
                    }, 250);
                  }}
                  className={`w-full p-6 rounded-xl transition-all duration-300 ${
                    currentDemo === index
                      ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{demo.icon}</span>
                    <div className="text-left">
                      <h4 className="font-semibold">{demo.title}</h4>
                      <p className="text-sm opacity-80">{demo.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">🚀 Revolutionary Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the breakthrough technologies that are defining the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quantum Computing */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Computing</h3>
            <p className="text-purple-200 mb-6 text-center">
              Exponential computational power through quantum mechanics
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-purple-300 text-sm">• Fault-tolerant quantum computers</div>
              <div className="text-purple-300 text-sm">• Quantum internet infrastructure</div>
              <div className="text-purple-300 text-sm">• Quantum machine learning</div>
            </div>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore Quantum →
            </button>
          </div>

          {/* Neural Interfaces */}
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Neural Interfaces</h3>
            <p className="text-cyan-200 mb-6 text-center">
              Direct brain-computer communication and enhancement
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-cyan-300 text-sm">• Non-invasive neural interfaces</div>
              <div className="text-cyan-300 text-sm">• Thought-controlled devices</div>
              <div className="text-cyan-300 text-sm">• Memory enhancement systems</div>
            </div>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Connect Mind & Machine →
            </button>
          </div>

          {/* Synthetic Intelligence */}
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Synthetic Intelligence</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Beyond artificial intelligence - synthetic consciousness
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-emerald-300 text-sm">• Self-evolving neural networks</div>
              <div className="text-emerald-300 text-sm">• Emotional intelligence synthesis</div>
              <div className="text-emerald-300 text-sm">• Creative problem solving</div>
            </div>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Discover SI →
            </button>
          </div>

          {/* Biotech Revolution */}
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Biotech Revolution</h3>
            <p className="text-orange-200 mb-6 text-center">
              Human enhancement and biological computing
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-orange-300 text-sm">• Genetic enhancement protocols</div>
              <div className="text-orange-300 text-sm">• Biological computing systems</div>
              <div className="text-orange-300 text-sm">• Regenerative medicine</div>
            </div>
            <button className="w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
              Explore Biotech →
            </button>
          </div>
        </div>
      </div>

      {/* Real-time Statistics */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">📊 Real-time Technology Metrics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Live data from our technology implementations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">2.3M+</div>
              <div className="text-white font-semibold mb-1">Neural Interface Users</div>
              <div className="text-gray-400 text-sm">Active worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">847</div>
              <div className="text-white font-semibold mb-1">Quantum Computers</div>
              <div className="text-gray-400 text-sm">Operational globally</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">156K+</div>
              <div className="text-white font-semibold mb-1">Synthetic Intelligence</div>
              <div className="text-gray-400 text-sm">Active systems</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">98.7%</div>
              <div className="text-white font-semibold mb-1">Success Rate</div>
              <div className="text-gray-400 text-sm">Technology adoption</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join millions of users worldwide who are already experiencing the future of technology. 
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              📞 Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;