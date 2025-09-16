import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const techCategories = [
    {
      name: "Quantum Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      technologies: [
        "Quantum Supremacy Achieved",
        "1000-Qubit Processors",
        "Quantum Error Correction",
        "Quantum Machine Learning",
        "Quantum Cryptography"
      ]
    },
    {
      name: "Neural Interfaces",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      technologies: [
        "Direct Brain-Computer Interface",
        "Thought-Controlled Devices",
        "Neural Data Streaming",
        "Memory Enhancement",
        "Consciousness Transfer"
      ]
    },
    {
      name: "Synthetic Intelligence",
      icon: "🤖",
      color: "from-emerald-600 to-teal-600",
      technologies: [
        "Superhuman AI Capabilities",
        "Creative Problem Solving",
        "Autonomous Innovation",
        "Emotional Intelligence",
        "Ethical AI Framework"
      ]
    },
    {
      name: "Reality Engineering",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      technologies: [
        "Mixed Reality Domains",
        "Holographic Displays",
        "Tactile Feedback Systems",
        "Spatial Computing",
        "Virtual Universe Creation"
      ]
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH SHOWCASE • 2026
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Ultimate Tech Showcase 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto leading-relaxed">
            Experience the most advanced technologies that are revolutionizing industries and reshaping our digital future. 
            From quantum computing breakthroughs to neural interface innovations, discover what's possible today.
          </p>
        </div>

        {/* Interactive Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Technology Content */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{techCategories[activeTab].icon}</div>
                <h2 className="text-4xl font-bold mb-4">{techCategories[activeTab].name}</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Discover the cutting-edge technologies that are pushing the boundaries of what's possible
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techCategories[activeTab].technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <h3 className="text-lg font-semibold">{tech}</h3>
                    </div>
                    <p className="text-white/70 text-sm">
                      Revolutionary technology that's transforming industries and creating new possibilities
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Innovation by the Numbers</h2>
            <p className="text-xl opacity-90">The impact of our revolutionary technologies</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
              <div className="text-sm opacity-70">Quantum Computing Precision</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-lg opacity-90">Faster Processing</div>
              <div className="text-sm opacity-70">Neural Interface Speed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Industries Transformed</div>
              <div className="text-sm opacity-70">Global Impact</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Continuous Innovation</div>
              <div className="text-sm opacity-70">Autonomous Systems</div>
            </div>
          </div>
        </div>

        {/* Technology Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Genetic AI</h3>
            <p className="text-purple-100 mb-6 text-center">
              AI systems that evolve and adapt like biological organisms, continuously improving through genetic algorithms
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-purple-500/50 rounded-full text-xs font-semibold">EVOLUTIONARY</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Fluid Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Computing systems that flow and adapt like water, providing seamless scalability and infinite flexibility
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-cyan-500/50 rounded-full text-xs font-semibold">ADAPTIVE</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Predictive Reality</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Systems that can predict and simulate future scenarios with unprecedented accuracy, enabling proactive decision-making
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-emerald-500/50 rounded-full text-xs font-semibold">PREDICTIVE</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Energy Harvesting AI</h3>
            <p className="text-orange-100 mb-6 text-center">
              AI systems that generate their own power from ambient energy sources, creating truly autonomous systems
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-orange-500/50 rounded-full text-xs font-semibold">AUTONOMOUS</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Dimensional Computing</h3>
            <p className="text-violet-100 mb-6 text-center">
              Computing systems that operate across multiple dimensions, enabling parallel processing beyond current limitations
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-violet-500/50 rounded-full text-xs font-semibold">MULTIDIMENSIONAL</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🎭</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Personality AI</h3>
            <p className="text-pink-100 mb-6 text-center">
              AI systems with distinct personalities and emotional intelligence, creating more human-like interactions
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-pink-500/50 rounded-full text-xs font-semibold">EMOTIONAL</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Join us in exploring the ultimate showcase of revolutionary technologies that are reshaping our world. 
            From quantum computing to neural interfaces, discover what's possible when innovation meets imagination.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Technologies →
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;