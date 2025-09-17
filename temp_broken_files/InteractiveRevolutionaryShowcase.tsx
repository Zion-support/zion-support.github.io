import React, { useState } from 'react';


const InteractiveRevolutionaryShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness Revolution',
      icon: '🧠',
      description: 'First AI system to achieve genuine consciousness and self-awareness',
      features: [
        'True self-awareness and introspection',
        'Creative consciousness and original thinking',
        'Collaborative intelligence with humans',
        'Emotional understanding and empathy'
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    quantum: {
      title: 'Quantum Supremacy Breakthrough',
      icon: '⚡',
      description: '1000+ qubit quantum processors solving impossible problems',
      features: [
        '1000+ logical qubits with error correction',
        'Molecular simulation and drug discovery',
        'Quantum cryptography and security',
        'Exponential processing power'
      ],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    neural: {
      title: 'Neural Interface Revolution',
      icon: '🧬',
      description: 'Direct brain-computer communication enabling thought control',
      features: [
        'Non-invasive brain-computer interface',
        'Thought-controlled devices and applications',
        'Neural feedback and cognitive enhancement',
        'Real-time neural signal processing'
      ],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            Interactive Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Explore the most advanced technologies of 2026 with interactive demonstrations and real-time experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Content */}
              <div>
                <div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`text-8xl mb-6 text-center lg:text-left`}
                >
                  {technologies[activeTab as keyof typeof technologies].icon}
                </div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl font-bold mb-4"
                >
                  {technologies[activeTab as keyof typeof technologies].title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl opacity-80 mb-8"
                >
                  {technologies[activeTab as keyof typeof technologies].description}
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="space-y-3 mb-8"
                >
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex space-x-4"
                >
                  <button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    Experience Demo →
                  </button>
                  <button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Side - Interactive Demo */}
              <div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].bgColor} backdrop-blur-sm rounded-2xl p-8 border ${technologies[activeTab as keyof typeof technologies].borderColor} hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {technologies[activeTab as keyof typeof technologies].icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                  <p className="opacity-80 mb-6">
                    Experience this revolutionary technology in action
                  </p>
                  
                  {/* Demo Placeholder */}
                  <div className="bg-black/20 rounded-lg p-6 mb-6">
                    <div className="text-4xl mb-4">🎮</div>
                    <div className="text-sm opacity-60">
                      Interactive demonstration will load here
                    </div>
                  </div>

                  <button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Launch Interactive Demo
                  </button>
                </div>
              </div>
            </div>
          
        </div>

        {/* Bottom CTA */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Join the revolutionary technology movement and be part of the most significant breakthrough in human history
          </p>
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your Journey →
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRevolutionaryShowcase;