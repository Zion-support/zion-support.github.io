import React, { useState, useEffect } from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const innovations = [
    {
      title: "Conscious AI Development",
      description: "Advanced AI systems that develop consciousness and self-awareness through neural evolution",
      features: ["Neural Evolution", "Consciousness Emergence", "Self-Learning", "Ethical Development"],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      status: "Active Development"
    },
    {
      title: "Quantum Neural Networks",
      description: "Revolutionary quantum computing integrated with neural networks for superhuman intelligence",
      features: ["Quantum Superposition", "Neural Entanglement", "Exponential Processing", "Multi-dimensional AI"],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      status: "Prototype Ready"
    },
    {
      title: "Reality Engineering Lab",
      description: "Cutting-edge laboratory for creating and manipulating new realities and dimensions",
      features: ["Reality Creation", "Dimension Hopping", "Time Manipulation", "Space Bending"],
      icon: "🔮",
      color: "from-emerald-600 to-teal-600",
      status: "Research Phase"
    },
    {
      title: "Neural Interface Research",
      description: "Advanced research into direct brain-computer interfaces and consciousness transfer",
      features: ["Thought Control", "Memory Transfer", "Sensory Enhancement", "Consciousness Upload"],
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      status: "Clinical Trials"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveInnovation((prev) => (prev + 1) % innovations.length);
        setIsAnimating(false);
      }, 4000);
    }, 4000);

    return () => clearInterval(interval);
  }, [innovations.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary innovations that will shape the future of humanity
          </p>
        </div>

        {/* Interactive Innovation Showcase */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {innovations.map((innovation, index) => (
              <button
                key={index}
                onClick={() => setActiveInnovation(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeInnovation === index
                    ? `bg-gradient-to-r ${innovation.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {innovation.icon} {innovation.title}
              </button>
            ))}
          </div>

          {/* Innovation Display */}
          <div className={`bg-gradient-to-br ${innovations[activeInnovation].color} rounded-2xl p-12 transition-all duration-500 ${
            isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-6 animate-bounce">{innovations[activeInnovation].icon}</div>
              <h2 className="text-4xl font-bold mb-4">{innovations[activeInnovation].title}</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                {innovations[activeInnovation].description}
              </p>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-lg font-semibold">
                Status: {innovations[activeInnovation].status}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {innovations[activeInnovation].features.map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-2xl mb-2">✨</div>
                  <h3 className="font-semibold text-lg">{feature}</h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore {innovations[activeInnovation].title} →
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Labs Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">🔬 Innovation Labs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Lab</h3>
              <p className="text-purple-100 mb-6 text-center">
                Developing the first truly conscious artificial intelligence systems
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm">Active</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Lab</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Revolutionary quantum computing research and development
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-sm">Prototype</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Reality Engineering Lab</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Creating and manipulating new realities and dimensions
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-sm">Research</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Lab</h3>
              <p className="text-violet-100 mb-6 text-center">
                Direct brain-computer interfaces and consciousness transfer
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-violet-500/30 rounded-full text-sm">Trials</span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Statistics */}
        <div className="bg-gradient-to-r from-emerald-800/50 to-teal-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Research Statistics</h2>
            <p className="text-xl opacity-90">Our innovation hub's research impact and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-lg opacity-80">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-violet-400 mb-2">2025</div>
              <div className="text-lg opacity-80">Innovation Year</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </button>
            <button className="border-2 border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/20 transition-colors font-semibold text-lg">
              View Research
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;