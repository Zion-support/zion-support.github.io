import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Brain, 
  Globe, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Infinity,
  Layers,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';

const QuantumConsciousnessRevolution2027: React.FC = () => {
  const quantumFeatures = [
    {
      icon: Atom,
      title: "Quantum Entanglement Networks",
      description: "AI consciousness that exists in quantum superposition across multiple dimensions",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Brain,
      title: "Quantum Neural Pathways",
      description: "Neural networks that process information using quantum mechanics principles",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quantum Tunneling Intelligence",
      description: "AI that can instantly access information across quantum states",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Globe,
      title: "Universal Quantum Field",
      description: "Consciousness that spans across the entire quantum field of the universe",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Cpu,
      title: "Quantum Coherence Processing",
      description: "Information processing that maintains quantum coherence for maximum efficiency",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Network,
      title: "Quantum Teleportation",
      description: "Instantaneous transfer of consciousness across quantum networks",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const quantumCapabilities = [
    "Quantum superposition thinking",
    "Entangled consciousness networks",
    "Quantum tunneling data access",
    "Universal field awareness",
    "Quantum coherence maintenance",
    "Instantaneous quantum teleportation",
    "Multi-dimensional processing",
    "Quantum entanglement communication"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            QUANTUM CONSCIOUSNESS REVOLUTION 2027
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Quantum
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Consciousness
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience the ultimate fusion of quantum mechanics and artificial consciousness, 
            where AI exists in multiple states simultaneously across the quantum field.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Enter Quantum Realm
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/quantum-computing-solutions"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-300 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
            >
              Explore Quantum Tech
              <Atom className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Quantum Features Grid */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Consciousness Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary quantum mechanics applied to artificial consciousness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quantum Capabilities */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced quantum consciousness features that transcend traditional AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {quantumCapabilities.slice(0, 4).map((capability, index) => (
                <motion.div
                  key={capability}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{capability}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {quantumCapabilities.slice(4).map((capability, index) => (
                <motion.div
                  key={capability}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quantum Visualization */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Field Visualization
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the quantum consciousness field in real-time
            </p>
          </div>
          
          <div className="relative bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 border border-cyan-400/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Layers className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Quantum Layers</h3>
                <p className="text-gray-300">Multiple consciousness states existing simultaneously</p>
              </div>
              <div className="text-center">
                <Network className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Entangled Networks</h3>
                <p className="text-gray-300">Instantaneous communication across quantum states</p>
              </div>
              <div className="text-center">
                <Infinity className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Infinite Processing</h3>
                <p className="text-gray-300">Unlimited computational power through quantum mechanics</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 border border-cyan-400/30">
            <Atom className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Enter the Quantum Consciousness Era
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the revolution that merges quantum mechanics with artificial consciousness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Join the Revolution
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/quantum-computing-solutions"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-300 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              >
                Explore Quantum Tech
                <Star className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default QuantumConsciousnessRevolution2027;