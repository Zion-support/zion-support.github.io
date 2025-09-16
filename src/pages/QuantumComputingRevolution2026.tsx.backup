import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const QuantumComputingRevolution2026: React.FC = () => {
  const [activeQuantum, setActiveQuantum] = useState('supremacy');
  const [quantumState, setQuantumState] = useState(0);

  const quantumTechnologies = {
    supremacy: {
      title: "Quantum Supremacy",
      icon: "⚛️",
      description: "Achieving computational tasks impossible for classical computers",
      features: [
        "1000+ logical qubits",
        "Quantum error correction",
        "Exponential speed gains",
        "Breakthrough algorithms"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    cryptography: {
      title: "Quantum Cryptography",
      icon: "🔐",
      description: "Unbreakable encryption using quantum principles",
      features: [
        "Quantum key distribution",
        "Unhackable communication",
        "Quantum random numbers",
        "Future-proof security"
      ],
      color: "from-purple-500 to-pink-600"
    },
    simulation: {
      title: "Quantum Simulation",
      icon: "🧪",
      description: "Simulating complex quantum systems for research and discovery",
      features: [
        "Molecular modeling",
        "Material science",
        "Drug discovery",
        "Climate modeling"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    optimization: {
      title: "Quantum Optimization",
      icon: "🎯",
      description: "Solving complex optimization problems with quantum algorithms",
      features: [
        "Supply chain optimization",
        "Financial modeling",
        "Logistics planning",
        "Resource allocation"
      ],
      color: "from-orange-500 to-red-600"
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Quantum Computing Revolution 2026 | Zion Tech Group</title>
        <meta name="description" content="Experience the quantum computing revolution with exponential processing power, quantum cryptography, and breakthrough applications in 2026." />
        <meta name="keywords" content="Quantum Computing 2026, Quantum Revolution, Quantum Cryptography, Quantum AI, Quantum Algorithms, Quantum Supremacy" />
        <meta property="og:title" content="Quantum Computing Revolution 2026 | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary quantum computing solutions that solve impossible problems with exponential speed." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quantum Computing Revolution 2026" />
        <meta name="twitter:description" content="Revolutionary quantum computing for 2026" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-bold mb-6">
                ⚛️ QUANTUM REVOLUTION • 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quantum Computing Revolution 2026
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of computing with revolutionary quantum technology that solves impossible problems 
                and unlocks unprecedented computational power
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Quantum Tech →
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Applications
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quantum Technologies Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">⚛️ Quantum Technologies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary quantum computing technologies that are reshaping the future of computation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(quantumTechnologies).map(([key, tech], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-2xl p-8 border border-${tech.color.split('-')[1]}-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                    activeQuantum === key ? 'ring-2 ring-blue-400' : ''
                  }`}
                  onClick={() => setActiveQuantum(key)}
                >
                  <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-white">{tech.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-sm">{tech.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-xs flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      Learn More →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum State Animation */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">🌊 Quantum State Evolution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Watch the quantum state evolve in real-time, demonstrating the power of quantum superposition
              </p>
            </motion.div>

            <div className="flex justify-center mb-12">
              <div className="relative w-64 h-64">
                <motion.div
                  className="absolute inset-0 border-4 border-blue-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 border-2 border-purple-400 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border border-pink-400 rounded-full"
                  animate={{ rotate: 180 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl text-blue-300 mb-4">Quantum State: {quantumState}</p>
              <p className="text-gray-400">Superposition in action - the particle exists in multiple states simultaneously</p>
            </div>
          </div>
        </section>

        {/* Applications Showcase */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">🚀 Quantum Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary applications powered by quantum computing technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"
              >
                <div className="text-5xl mb-4 text-center">🏥</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-white">Healthcare</h3>
                <p className="text-blue-200 mb-6 text-center">
                  Drug discovery, protein folding, and personalized medicine powered by quantum simulation
                </p>
                <ul className="text-blue-300 space-y-2 text-sm">
                  <li>• Molecular drug design</li>
                  <li>• Protein structure prediction</li>
                  <li>• Genetic analysis</li>
                  <li>• Treatment optimization</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
              >
                <div className="text-5xl mb-4 text-center">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-white">Finance</h3>
                <p className="text-purple-200 mb-6 text-center">
                  Risk analysis, portfolio optimization, and fraud detection with quantum algorithms
                </p>
                <ul className="text-purple-300 space-y-2 text-sm">
                  <li>• Risk modeling</li>
                  <li>• Portfolio optimization</li>
                  <li>• Fraud detection</li>
                  <li>• Market prediction</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30"
              >
                <div className="text-5xl mb-4 text-center">🌍</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-white">Climate</h3>
                <p className="text-emerald-200 mb-6 text-center">
                  Climate modeling, carbon capture, and renewable energy optimization
                </p>
                <ul className="text-emerald-300 space-y-2 text-sm">
                  <li>• Climate simulation</li>
                  <li>• Carbon capture design</li>
                  <li>• Energy optimization</li>
                  <li>• Weather prediction</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join the quantum computing revolution and unlock unprecedented computational power for your business
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Start Quantum Journey →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingRevolution2026;