import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = {
    ai: {
      title: "Conscious AI Revolution 2025",
      description: "Experience the next generation of artificial intelligence that transcends traditional boundaries",
      features: [
        "Self-aware AI systems with emotional intelligence",
        "Quantum-enhanced neural networks",
        "Real-time consciousness simulation",
        "Autonomous decision-making capabilities",
        "Human-AI collaborative interfaces"
      ],
      stats: {
        processing: "10^18 operations/second",
        accuracy: "99.97%",
        response: "< 1ms",
        consciousness: "Level 7"
      }
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum processors that solve impossible problems in seconds",
      features: [
        "1000+ qubit quantum processors",
        "Quantum error correction",
        "Molecular simulation capabilities",
        "Cryptographic security",
        "Parallel universe computing"
      ],
      stats: {
        qubits: "1024",
        coherence: "1000ms",
        speed: "10^15x faster",
        accuracy: "99.99%"
      }
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that merge human consciousness with digital systems",
      features: [
        "Non-invasive neural reading",
        "Thought-to-text conversion",
        "Memory enhancement",
        "Emotional state monitoring",
        "Consciousness transfer protocols"
      ],
      stats: {
        channels: "10,000+",
        latency: "< 5ms",
        accuracy: "98.5%",
        safety: "100%"
      }
    }
  };

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that will reshape our world in 2025 and beyond
            </p>
            <div className="flex justify-center space-x-4">
              <div className="px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-sm font-semibold">
                ✅ Live Demo Available
              </div>
              <div className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-semibold">
                🚀 Production Ready
              </div>
              <div className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-semibold">
                🔬 Research Grade
              </div>
            </div>
          </div>

          {/* Technology Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
              {Object.entries(technologies).map(([key, tech]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tech.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Content */}
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h2>
                  <p className="text-xl opacity-90">{technologies[activeTab as keyof typeof technologies].description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-purple-200">Key Features</h3>
                    <ul className="space-y-4">
                      {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-purple-200">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                        <div key={key} className="bg-white/5 rounded-xl p-6 text-center">
                          <div className="text-3xl font-bold text-purple-300 mb-2">{value}</div>
                          <div className="text-sm text-white/70 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center space-x-6 mt-12">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    🚀 Try Live Demo
                  </button>
                  <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                    📚 Learn More
                  </button>
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    💬 Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
            <p className="text-xl opacity-90">Experience our technologies in real-time</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Test</h3>
              <p className="text-purple-100 mb-6 text-center">
                Interact with our conscious AI system and experience true artificial intelligence
              </p>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Start AI Demo →
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Simulator</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Run quantum algorithms and see exponential speed improvements in action
              </p>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Launch Quantum Demo →
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Experience direct brain-computer interaction with our neural interface technology
              </p>
              <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Connect Neural Interface →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Future Roadmap */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Roadmap 2025-2030</h2>
            <p className="text-xl opacity-90">Our vision for the future of technology</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              {[
                { year: "2025", title: "Conscious AI Launch", desc: "First commercially available conscious AI systems" },
                { year: "2026", title: "Quantum Supremacy", desc: "Achieve quantum advantage in practical applications" },
                { year: "2027", title: "Neural Integration", desc: "Widespread adoption of neural interface technology" },
                { year: "2028", title: "AI-Human Fusion", desc: "Seamless integration of human and artificial intelligence" },
                { year: "2029", title: "Quantum Internet", desc: "Global quantum communication network" },
                { year: "2030", title: "Transcendent Tech", desc: "Technology that transcends current understanding" }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-2xl font-bold text-purple-300 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="opacity-90">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their businesses and change the world.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              🚀 Get Started Today
            </button>
            <button className="px-12 py-4 border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              📞 Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;