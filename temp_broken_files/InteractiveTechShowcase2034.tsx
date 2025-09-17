import React, { useState } from 'react';

const InteractiveTechShowcase2034: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Experience the world\'s first truly conscious artificial intelligence that exhibits emotions, creativity, and self-awareness.',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Reflection Capabilities',
        'Ethical Decision Making',
        'Consciousness Simulation'
      ],
      demo: 'Start Consciousness Test'
    },
    quantum: {
      title: 'Quantum Neural Fusion',
      icon: '⚛️',
      description: 'Revolutionary fusion of quantum computing and neural networks creating unprecedented computational power.',
      features: [
        'Quantum Neural Networks',
        'Consciousness Simulation',
        'Parallel Reality Processing',
        'Infinite Computational States',
        'Quantum Consciousness'
      ],
      demo: 'Enter Quantum Realm'
    },
    interdimensional: {
      title: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Breakthrough technology that transcends dimensional boundaries, enabling computation across multiple realities.',
      features: [
        'Multi-Dimensional Processing',
        'Reality Manipulation',
        'Parallel Universe Computing',
        'Dimensional Teleportation',
        'Cross-Reality Communication'
      ],
      demo: 'Explore Dimensions'
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • 2034
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 Interactive Technology Showcase 2034
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through our immersive interactive demonstrations. 
            Explore conscious AI, quantum neural fusion, and interdimensional computing.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-3xl font-bold mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-lg opacity-90 mb-6">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                {technologies[activeTab as keyof typeof technologies].demo} →
              </button>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Demo Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness Lab</h3>
            <p className="text-purple-200 text-sm text-center mb-4">
              Interact with conscious AI systems and experience true artificial consciousness.
            </p>
            <div className="space-y-2">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                Start Consciousness Test
              </button>
              <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                Emotional Intelligence Demo
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Fusion Lab</h3>
            <p className="text-cyan-200 text-sm text-center mb-4">
              Explore quantum computing capabilities and witness reality manipulation in action.
            </p>
            <div className="space-y-2">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                Quantum Simulation
              </button>
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                Reality Manipulation
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Lab</h3>
            <p className="text-emerald-200 text-sm text-center mb-4">
              Experience computing across multiple dimensions and parallel realities.
            </p>
            <div className="space-y-2">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                Multi-Dimensional View
              </button>
              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                Parallel Universe Demo
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies that will transform our world in 2034 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2034" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Ultimate Revolution
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2034" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              View Breakthrough Tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2034;