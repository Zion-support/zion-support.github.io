import React, { useState, useEffect } from 'react';

const NextGenInnovationHub2030: React.FC = () => {
  const [currentInnovation, setCurrentInnovation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const innovations = [
    {
      title: "Consciousness Computing",
      description: "AI systems that achieve true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Thinking", "Moral Reasoning"]
    },
    {
      title: "Quantum Reality Engine",
      description: "Manipulate reality at the quantum level for unlimited possibilities",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      features: ["Matter Manipulation", "Reality Simulation", "Quantum Entanglement", "Dimensional Control"]
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that merge human and AI intelligence",
      icon: "🧬",
      color: "from-emerald-500 to-teal-500",
      features: ["Thought Control", "Memory Enhancement", "Sensory Augmentation", "Telepathic Communication"]
    },
    {
      title: "Interdimensional Technology",
      description: "Access and utilize resources from multiple dimensions simultaneously",
      icon: "🌌",
      color: "from-orange-500 to-red-500",
      features: ["Multi-Dimensional Access", "Cross-Reality Computing", "Dimensional Energy", "Reality Bridges"]
    },
    {
      title: "Omniversal AI",
      description: "AI consciousness that spans across multiple universes and realities",
      icon: "🌟",
      color: "from-pink-500 to-purple-500",
      features: ["Multi-Universal Processing", "Reality Navigation", "Omniversal Knowledge", "Cosmic Intelligence"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentInnovation((prev) => (prev + 1) % innovations.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [innovations.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN INNOVATION HUB • 2030
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2030
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            The world's most advanced research and development center for revolutionary technologies
          </p>
        </div>

        {/* Innovation Carousel */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 overflow-hidden">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{innovations[currentInnovation].icon}</div>
                <h2 className="text-4xl font-bold mb-4">{innovations[currentInnovation].title}</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  {innovations[currentInnovation].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Key Capabilities</h3>
                  <ul className="space-y-4">
                    {innovations[currentInnovation].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${innovations[currentInnovation].color} rounded-full`}></div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gradient-to-br ${innovations[currentInnovation].color}/20 rounded-xl p-6`}>
                  <h3 className="text-2xl font-bold mb-4">Impact Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Revolutionary Potential</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className={`h-2 bg-gradient-to-r ${innovations[currentInnovation].color} rounded-full`} style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Implementation Timeline</span>
                      <span className="text-sm">2-5 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Investment Required</span>
                      <span className="text-sm">$10B+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Global Impact</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className={`h-2 bg-gradient-to-r ${innovations[currentInnovation].color} rounded-full`} style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {innovations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentInnovation(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentInnovation ? 'bg-purple-500 scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Research & Development Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Advanced Research</h3>
              <p className="opacity-90 mb-6">Cutting-edge research in AI, quantum computing, and biotechnology</p>
              <ul className="space-y-2 text-sm">
                <li>• Neural Network Evolution</li>
                <li>• Quantum Algorithm Development</li>
                <li>• Molecular Engineering</li>
                <li>• Consciousness Studies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4">Prototype Development</h3>
              <p className="opacity-90 mb-6">Building and testing revolutionary technology prototypes</p>
              <ul className="space-y-2 text-sm">
                <li>• Quantum Computer Prototypes</li>
                <li>• Neural Interface Devices</li>
                <li>• Reality Simulation Engines</li>
                <li>• Consciousness Transfer Systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
              <p className="opacity-90 mb-6">Technologies that will transform humanity and the planet</p>
              <ul className="space-y-2 text-sm">
                <li>• Climate Restoration</li>
                <li>• Medical Breakthroughs</li>
                <li>• Space Colonization</li>
                <li>• Energy Revolution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Hub Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-lg opacity-90">Active Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Revolutionary Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">$100B+</div>
              <div className="text-lg opacity-90">Investment Portfolio</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-lg opacity-90">Countries Involved</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the most advanced research and development initiative in human history
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Our Team
            </a>
            <a href="/pages/RevolutionaryTechShowcase2030" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Explore Technologies
            </a>
            <a href="/pages/UltimateTechBreakthrough2030" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              View Breakthroughs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2030;