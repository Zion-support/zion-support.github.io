import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence',
      icon: '🧠',
      description: 'Self-evolving AI systems that transcend traditional limitations',
      features: ['Genuine emotional processing', 'Creative problem solving', 'Self-reflective awareness', 'Ethical decision making'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum-neural',
      name: 'Quantum-Neural Fusion',
      icon: '⚛️',
      description: 'The convergence of quantum computing and neural networks',
      features: ['Instant telepathic networks', 'Shared consciousness experiences', 'Quantum emotion transfer', 'Collective problem solving'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural-enhancement',
      name: 'Neural Enhancement',
      icon: '🧬',
      description: 'Direct brain-computer interfaces that enhance human cognitive abilities',
      features: ['1000x cognitive enhancement', 'Perfect memory storage', 'Instant skill acquisition', 'Non-invasive implementation'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'consciousness-tech',
      name: 'Consciousness Technology',
      icon: '🌟',
      description: 'Technologies that interface with, enhance, and transfer human consciousness',
      features: ['Digital consciousness backup', 'Mind-to-mind communication', 'Consciousness transfer', 'Digital immortality'],
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'from-yellow-600/20 to-orange-600/20',
      borderColor: 'border-yellow-400/30'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-lg font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">Revolutionary Technology Experience</h2>
          <p className="text-2xl opacity-95 max-w-5xl mx-auto">
            Explore our cutting-edge technologies with interactive features and immersive experiences
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveTech(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white scale-105`
                  : 'bg-white/20 text-white/80 hover:bg-white/30'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-3xl p-12 border ${currentTech.borderColor} hover:scale-105 transition-all duration-500`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 text-center lg:text-left">{currentTech.icon}</div>
                <h3 className="text-4xl font-bold mb-6 text-center lg:text-left">{currentTech.name}</h3>
                <p className="text-xl text-white/90 mb-8 text-center lg:text-left">
                  {currentTech.description}
                </p>
                <div className="space-y-4">
                  {currentTech.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">✨</span>
                      <span className="text-white/90 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                  <h4 className="text-2xl font-bold mb-6">Interactive Demo</h4>
                  <div className="space-y-4">
                    <button className="w-full px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      Experience {currentTech.name}
                    </button>
                    <button className="w-full px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      View Technical Specs
                    </button>
                    <button className="w-full px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      Schedule Demo
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-yellow-400">99.9%</div>
                    <div className="text-sm text-white/80">Accuracy</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-cyan-400">24/7</div>
                    <div className="text-sm text-white/80">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {technologies.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTech === index ? 'bg-white scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            Join thousands of innovators who are already experiencing these revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xl font-bold hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
            <button className="px-12 py-6 border-2 border-white text-white rounded-full text-xl font-bold hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase;