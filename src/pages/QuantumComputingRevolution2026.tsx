import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        "Exponential speedup",
        "Real-world applications"
      ],
      power: "10^15 operations/second"
    },
    algorithms: {
      title: "Quantum Algorithms",
      icon: "🧮",
      description: "Revolutionary algorithms that leverage quantum mechanics",
      features: [
        "Shor's algorithm",
        "Grover's search",
        "Quantum machine learning",
        "Optimization problems"
      ],
      power: "Quadratic speedup"
    },
    cryptography: {
      title: "Quantum Cryptography",
      icon: "🔐",
      description: "Unbreakable security through quantum principles",
      features: [
        "Quantum key distribution",
        "Post-quantum cryptography",
        "Quantum random numbers",
        "Secure communications"
      ],
      power: "Unbreakable security"
    },
    simulation: {
      title: "Quantum Simulation",
      icon: "🔬",
      description: "Simulating complex quantum systems for scientific discovery",
      features: [
        "Molecular modeling",
        "Material science",
        "Drug discovery",
        "Climate modeling"
      ],
      power: "Exponential advantage"
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-white text-sm font-bold mb-6">
              ⚛️ QUANTUM REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Quantum Computing Revolution 2026
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Experience the quantum leap in computing power with exponential processing capabilities, 
              unbreakable cryptography, and revolutionary applications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Quantum Tech →
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">⚛️ Quantum Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  activeQuantum === key ? 'ring-2 ring-indigo-500' : ''
                }`}
                onClick={() => setActiveQuantum(key)}
              >
                <div className="text-5xl mb-6 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{tech.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{tech.description}</p>
                <div className="space-y-3 mb-6">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-500 text-sm">
                      <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">Processing Power</div>
                  <div className="text-lg font-bold text-indigo-600">{tech.power}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Technology Details */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuantum}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">{quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].icon}</div>
              <h2 className="text-4xl font-bold mb-6">
                {quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].title}
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                {quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].description}
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Performance</h3>
                  <div className="text-3xl font-bold text-indigo-300 mb-2">
                    {quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].power}
                  </div>
                  <p className="text-white/80">
                    Revolutionary processing capabilities that exceed classical computing limits
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🚀 Quantum Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications of quantum computing that are transforming industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Drug Discovery",
                icon: "💊",
                description: "Accelerating pharmaceutical research with quantum molecular simulation",
                impact: "10x faster drug development"
              },
              {
                title: "Financial Modeling",
                icon: "💰",
                description: "Revolutionary risk analysis and portfolio optimization",
                impact: "Exponential accuracy gains"
              },
              {
                title: "Climate Science",
                icon: "🌍",
                description: "Advanced climate modeling and environmental prediction",
                impact: "Unprecedented precision"
              },
              {
                title: "AI & Machine Learning",
                icon: "🤖",
                description: "Quantum-enhanced machine learning algorithms",
                impact: "Breakthrough performance"
              },
              {
                title: "Cybersecurity",
                icon: "🔒",
                description: "Quantum-resistant encryption and secure communications",
                impact: "Future-proof security"
              },
              {
                title: "Materials Science",
                icon: "🔬",
                description: "Designing new materials with quantum simulation",
                impact: "Revolutionary discoveries"
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-6 text-center">{app.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{app.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{app.description}</p>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">Impact</div>
                  <div className="text-lg font-bold text-indigo-600">{app.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">📅 Quantum Roadmap 2026</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The timeline for quantum computing breakthroughs and commercial deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                quarter: "Q1 2026",
                milestone: "1000+ Qubit Systems",
                description: "Commercial quantum computers with 1000+ logical qubits"
              },
              {
                quarter: "Q2 2026",
                milestone: "Quantum Supremacy",
                description: "Demonstration of quantum advantage in real-world problems"
              },
              {
                quarter: "Q3 2026",
                milestone: "Quantum Internet",
                description: "First quantum communication networks go live"
              },
              {
                quarter: "Q4 2026",
                milestone: "Commercial Deployment",
                description: "Widespread adoption of quantum computing solutions"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-indigo-300 text-sm font-semibold mb-2">{milestone.quarter}</div>
                <h3 className="text-xl font-bold mb-2">{milestone.milestone}</h3>
                <p className="text-white/80 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the quantum computing revolution and transform your business with exponential processing power
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Quantum Journey →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingRevolution2026;