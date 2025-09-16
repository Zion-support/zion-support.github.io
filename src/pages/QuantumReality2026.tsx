import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuantumReality2026: React.FC = () => {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);

  const quantumTechnologies = [
    {
      id: 'supremacy',
      title: 'Quantum Supremacy',
      description: 'Quantum computers that have achieved computational supremacy over classical systems',
      icon: '⚡',
      capabilities: [
        'Exponential speedup over classical computers',
        'Solving problems in seconds that would take millennia',
        'Quantum advantage in optimization',
        'Cryptographic breakthrough potential'
      ],
      applications: ['Drug discovery', 'Financial modeling', 'Climate simulation', 'AI training acceleration']
    },
    {
      id: 'entanglement',
      title: 'Quantum Entanglement Networks',
      description: 'Instantaneous communication across any distance using quantum entanglement',
      icon: '🔗',
      capabilities: [
        'Instantaneous information transfer',
        'Unhackable quantum communication',
        'Quantum internet infrastructure',
        'Global quantum network connectivity'
      ],
      applications: ['Secure communications', 'Quantum internet', 'Space exploration', 'Military applications']
    },
    {
      id: 'teleportation',
      title: 'Quantum Teleportation',
      description: 'Transferring quantum states across space without physical movement',
      icon: '🚀',
      capabilities: [
        'Instant quantum state transfer',
        'Perfect information preservation',
        'No physical particle movement',
        'Quantum error correction'
      ],
      applications: ['Quantum computing', 'Secure data transfer', 'Quantum sensing', 'Space communication']
    },
    {
      id: 'simulation',
      title: 'Quantum Reality Simulation',
      description: 'Simulating entire universes and realities using quantum computational power',
      icon: '🌌',
      capabilities: [
        'Full universe simulation',
        'Alternative reality modeling',
        'Quantum field simulation',
        'Multiverse exploration'
      ],
      applications: ['Scientific research', 'Reality testing', 'Parallel universe study', 'Cosmological modeling']
    }
  ];

  const quantumSimulations = [
    {
      id: 'molecular',
      title: 'Molecular Quantum Simulator',
      description: 'Simulate complex molecular interactions with quantum precision',
      status: 'active',
      complexity: 'High'
    },
    {
      id: 'universe',
      title: 'Universe Quantum Simulator',
      description: 'Model entire universes and their quantum behavior',
      status: 'active',
      complexity: 'Extreme'
    },
    {
      id: 'cryptography',
      title: 'Quantum Cryptography Demo',
      description: 'Experience unhackable quantum encryption',
      status: 'active',
      complexity: 'Medium'
    },
    {
      id: 'entanglement',
      title: 'Quantum Entanglement Visualizer',
      description: 'Visualize quantum entanglement in real-time',
      status: 'coming-soon',
      complexity: 'High'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM REALITY 2026 • BREAKTHROUGH PHYSICS
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Reality 2026
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-12">
              Step into a world where quantum mechanics reshapes reality itself. 
              Experience quantum supremacy, entanglement networks, and the simulation 
              of entire universes through the power of quantum computing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Enter Quantum Realm →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Watch Quantum Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Technologies Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">⚡ Quantum Technologies</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Revolutionary quantum technologies that are reshaping our understanding of reality and computation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {quantumTechnologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{tech.title}</h3>
              <p className="text-blue-100 mb-6 text-center">{tech.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Capabilities:</h4>
                <ul className="space-y-2">
                  {tech.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="text-blue-200 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.applications.map((app, appIndex) => (
                    <span key={appIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore {tech.title} →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quantum Simulations Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-12 border border-blue-400/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🌌 Quantum Simulations</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Experience the power of quantum computing through interactive simulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {quantumSimulations.map((sim, index) => (
              <motion.div
                key={sim.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer ${
                  sim.status === 'coming-soon' ? 'opacity-60' : 'hover:bg-white/20'
                }`}
                onClick={() => sim.status === 'active' && setActiveSimulation(sim.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{sim.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      sim.status === 'active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                    }`}>
                      {sim.status === 'active' ? 'Available' : 'Coming Soon'}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      sim.complexity === 'Extreme' 
                        ? 'bg-red-500/20 text-red-400 border border-red-400/30'
                        : sim.complexity === 'High'
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-400/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    }`}>
                      {sim.complexity}
                    </span>
                  </div>
                </div>
                <p className="text-blue-200 mb-4">{sim.description}</p>
                {sim.status === 'active' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    Launch Simulation →
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quantum Physics Insights */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">🔬 Quantum Physics Insights</h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Our quantum technologies are based on the most advanced understanding of quantum mechanics, 
            pushing the boundaries of what's possible in the quantum realm.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"
          >
            <div className="text-4xl mb-4 text-center">🌊</div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Wave-Particle Duality</h3>
            <p className="text-blue-200 text-center">
              Our quantum systems exploit the fundamental wave-particle duality of matter, 
              enabling unprecedented computational capabilities through quantum superposition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
          >
            <div className="text-4xl mb-4 text-center">🔗</div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Quantum Entanglement</h3>
            <p className="text-cyan-200 text-center">
              We harness quantum entanglement to create instantaneous connections across any distance, 
              enabling communication and computation that defies classical physics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="text-4xl mb-4 text-center">🎲</div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Quantum Uncertainty</h3>
            <p className="text-purple-200 text-center">
              We leverage quantum uncertainty and probability to create systems that exist in 
              multiple states simultaneously, exponentially increasing computational power.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Enter the Quantum Realm?</h2>
          <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
            Experience the future of quantum computing and discover how quantum mechanics 
            is reshaping reality itself. The quantum revolution starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-xl hover:shadow-2xl transition-all duration-300"
            >
              Enter Quantum Realm →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-400 text-blue-400 px-12 py-4 rounded-lg font-semibold text-xl hover:bg-blue-400/10 transition-all duration-300"
            >
              Learn Quantum Physics
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumReality2026;