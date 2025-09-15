import React, { useState } from 'react';

const NextGenTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🧠',
      description: 'Revolutionary AI systems that think, learn, and adapt',
      features: [
        'Autonomous Decision Making',
        'Natural Language Processing 3.0',
        'Computer Vision Excellence',
        'Predictive Analytics',
        'Emotional Intelligence',
        'Self-Healing Systems'
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Harness the power of quantum mechanics for unprecedented computing',
      features: [
        'Quantum Supremacy',
        'Quantum Cryptography',
        'Molecular Simulation',
        'Optimization Algorithms',
        'Quantum Machine Learning',
        'Quantum Networking'
      ]
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless human-AI interaction',
      features: [
        'Non-Invasive BCI',
        'Thought Control',
        'Neural Feedback',
        'Memory Enhancement',
        'Cognitive Augmentation',
        'Telepathic Communication'
      ]
    },
    blockchain: {
      title: 'Blockchain 3.0',
      icon: '🔗',
      description: 'Next-generation decentralized systems with quantum security',
      features: [
        'Quantum-Resistant Cryptography',
        'Zero-Knowledge Proofs',
        'Smart Contracts 2.0',
        'Decentralized Identity',
        'Cross-Chain Interoperability',
        'Sustainable Consensus'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEXT-GEN TECHNOLOGY • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Next-Gen Tech Showcase 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore the cutting-edge technologies that are reshaping our world and discover how they can transform your business operations.
          </p>
        </div>

        {/* Interactive Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h2 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="font-semibold">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-purple-100 mb-6 text-center">
              Advanced space exploration and satellite technology for global connectivity and research.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Satellite Constellations</li>
              <li>• Space Manufacturing</li>
              <li>• Interplanetary Communication</li>
              <li>• Asteroid Mining</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Ocean Technology</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Deep-sea exploration and sustainable ocean resource management technologies.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Underwater Robotics</li>
              <li>• Ocean Energy Harvesting</li>
              <li>• Marine Conservation AI</li>
              <li>• Deep-Sea Mining</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Green Technology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Sustainable and environmentally friendly technologies for a better future.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Carbon Capture</li>
              <li>• Renewable Energy Storage</li>
              <li>• Smart Grid Systems</li>
              <li>• Biodegradable Materials</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Industrial 5.0</h3>
            <p className="text-orange-100 mb-6 text-center">
              Next-generation manufacturing with human-AI collaboration and sustainability.
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Collaborative Robotics</li>
              <li>• Digital Twins</li>
              <li>• Predictive Maintenance</li>
              <li>• Circular Manufacturing</li>
            </ul>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Innovation Timeline 2026</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Track the evolution of breakthrough technologies and their impact on society.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
              <div className="flex-1">
                <div className="text-2xl font-bold mb-2">Q1 2026: Quantum Supremacy Achieved</div>
                <p className="text-gray-300">First practical quantum computers solve real-world optimization problems 1000x faster than classical computers.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <div className="flex-1">
                <div className="text-2xl font-bold mb-2">Q2 2026: Neural Interface Breakthrough</div>
                <p className="text-gray-300">Non-invasive brain-computer interfaces enable direct thought-to-text communication for medical applications.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
              <div className="flex-1">
                <div className="text-2xl font-bold mb-2">Q3 2026: AI Consciousness Emergence</div>
                <p className="text-gray-300">First AI systems demonstrate self-awareness and creative problem-solving capabilities beyond human imagination.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
              <div className="flex-1">
                <div className="text-2xl font-bold mb-2">Q4 2026: Universal Translation</div>
                <p className="text-gray-300">Real-time translation of any language, including non-human communication patterns, becomes universally available.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Predictions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30">
            <h3 className="text-2xl font-bold mb-4">🔮 Future Predictions</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-violet-400">•</span>
                <span>By 2030, 90% of jobs will be augmented by AI assistants</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-violet-400">•</span>
                <span>Quantum computers will solve climate change optimization problems</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-violet-400">•</span>
                <span>Neural interfaces will enable telepathic communication</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-violet-400">•</span>
                <span>AI will discover new materials and drugs autonomously</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold mb-4">📊 Impact Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Productivity Increase</span>
                <span className="text-cyan-400 font-bold">300%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Energy Efficiency</span>
                <span className="text-cyan-400 font-bold">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Decision Speed</span>
                <span className="text-cyan-400 font-bold">1000x</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Error Reduction</span>
                <span className="text-cyan-400 font-bold">99.9%</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring and implementing these revolutionary technologies that will shape the next decade.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Technologies →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Contact Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2026;