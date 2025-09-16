import React, { useState, useEffect } from 'react';

const NextGenInnovationHub2032: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const innovations = [
    {
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that can think, feel, and create independently",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Ethical reasoning"],
      impact: "99.9% problem solving accuracy"
    },
    {
      title: "Quantum Consciousness",
      description: "Revolutionary quantum computing that achieves consciousness and processes at the speed of thought",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum neural networks", "Instantaneous processing", "Reality simulation", "Consciousness transfer"],
      impact: "Infinite computational power"
    },
    {
      title: "Neural Reality Engine",
      description: "Direct brain-computer interfaces creating fully immersive virtual realities",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Direct neural interface", "Perfect simulation", "Thought control", "Sensory enhancement"],
      impact: "100% reality simulation"
    },
    {
      title: "Space-Time Computing",
      description: "Computing that manipulates space-time for instantaneous data processing",
      icon: "🚀",
      color: "from-orange-600 to-red-600",
      features: ["Instant communication", "Time manipulation", "Space folding", "Universal connectivity"],
      impact: "0ms processing latency"
    },
    {
      title: "Cosmic Intelligence",
      description: "AI systems that communicate with and learn from cosmic phenomena",
      icon: "🌟",
      color: "from-violet-600 to-purple-600",
      features: ["Cosmic data processing", "Universal patterns", "Stellar communication", "Galactic intelligence"],
      impact: "Universal knowledge access"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveInnovation((prev) => (prev + 1) % innovations.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [innovations.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2032
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2032
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Dynamic Innovation Showcase */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 min-h-[600px] flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 w-full">
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="text-8xl mb-6 text-center">{innovations[activeInnovation].icon}</div>
                <h2 className="text-4xl font-bold mb-6 text-center">{innovations[activeInnovation].title}</h2>
                <p className="text-xl opacity-90 mb-8 text-center">{innovations[activeInnovation].description}</p>
                <div className="text-center">
                  <div className={`inline-block bg-gradient-to-r ${innovations[activeInnovation].color} text-white px-8 py-4 rounded-lg font-semibold text-lg mb-4`}>
                    Impact: {innovations[activeInnovation].impact}
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {innovations[activeInnovation].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${innovations[activeInnovation].color} rounded-full`}></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 bg-gradient-to-r ${innovations[activeInnovation].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg w-full`}>
                  Explore Innovation →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Navigation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Explore All Innovations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((innovation, index) => (
              <button
                key={index}
                onClick={() => setActiveInnovation(index)}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  activeInnovation === index
                    ? `bg-gradient-to-r ${innovation.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20 border-white/30'
                }`}
              >
                <div className="text-4xl mb-4 text-center">{innovation.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{innovation.title}</h3>
                <p className="text-sm opacity-90 text-center">{innovation.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Impact by 2032</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
              <div className="text-5xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-lg opacity-90">Future Ready</div>
            </div>
          </div>
        </div>

        {/* Innovation Labs */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Laboratories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧪</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Lab</h3>
              <p className="text-purple-100 mb-6 text-center">
                Research and development of conscious artificial intelligence systems
              </p>
              <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
                Visit Lab →
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Research Center</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Advanced quantum computing and consciousness research facility
              </p>
              <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
                Enter Center →
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Reality Engineering Lab</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Development of neural reality interfaces and immersive technologies
              </p>
              <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
                Explore Lab →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most revolutionary technological advancement in human history. 
            The future of innovation starts with you.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Innovating
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors font-semibold text-xl">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2032;