import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Cpu, Zap, Infinity, Brain, Network } from 'lucide-react';

const QuantumComputingBreakthrough2026 = () => {
  const quantumFeatures = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Supremacy Achieved",
      description: "Breakthrough quantum processors that solve problems in seconds that would take classical computers millennia to complete.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Stable Quantum States",
      description: "Revolutionary error correction and quantum state stabilization that maintains coherence for unprecedented durations.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Room Temperature Operation",
      description: "Quantum computers that operate at room temperature, making quantum computing accessible and practical for everyday use.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Infinity className="w-8 h-8" />,
      title: "Infinite Parallel Processing",
      description: "Quantum entanglement enables infinite parallel processing capabilities, solving complex optimization problems instantly.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Quantum AI Integration",
      description: "Seamless integration with AI systems, creating quantum-enhanced artificial intelligence with exponential capabilities.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Quantum Internet",
      description: "Ultra-secure quantum communication networks that enable instant, unhackable data transmission across any distance.",
      color: "from-red-500 to-pink-500"
    }
  ];

  const quantumStats = [
    { number: "1M+", label: "Qubits", description: "Million-qubit quantum processors with unprecedented computational power" },
    { number: "99.9%", label: "Accuracy", description: "Quantum error correction achieving near-perfect computational accuracy" },
    { number: "10^18", label: "Speed Increase", description: "Exponential speedup over classical computing for specific problems" },
    { number: "0°C", label: "Operating Temp", description: "Room temperature quantum computing without cryogenic cooling" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
              Quantum Computing Breakthrough 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Revolutionary quantum processors that operate at room temperature with million-qubit capacity, 
              achieving quantum supremacy and unlocking infinite computational possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Explore Quantum Power
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400/10 transition-all duration-300"
              >
                View Specifications
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Stats */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {quantumStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl border border-blue-500/30"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-blue-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quantum Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary quantum computing features that redefine computational possibilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              From drug discovery to climate modeling, quantum computing is revolutionizing every industry. 
              Our breakthrough technology enables solutions to problems that were previously impossible to solve, 
              opening new frontiers in science, medicine, finance, and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 p-6 rounded-xl border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-300 mb-3">Drug Discovery</h3>
                <p className="text-gray-300">Simulate molecular interactions to discover new medicines in days instead of years.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 p-6 rounded-xl border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-300 mb-3">Climate Modeling</h3>
                <p className="text-gray-300">Accurate climate predictions to combat global warming and environmental challenges.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 p-6 rounded-xl border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-300 mb-3">Financial Optimization</h3>
                <p className="text-gray-300">Portfolio optimization and risk analysis with unprecedented computational power.</p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300">
                Start Quantum Computing
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingBreakthrough2026;