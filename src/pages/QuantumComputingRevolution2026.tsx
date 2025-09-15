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
        "Shor's algorithm for factoring",
        "Grover's search algorithm",
        "Quantum machine learning",
        "Optimization algorithms"
      ],
      power: "10^12 speedup factor"
    },
    cryptography: {
      title: "Quantum Cryptography",
      icon: "🔐",
      description: "Unbreakable security through quantum principles",
      features: [
        "Quantum key distribution",
        "Post-quantum cryptography",
        "Quantum secure communication",
        "Future-proof encryption"
      ],
      power: "Theoretically unbreakable"
    },
    ai: {
      title: "Quantum AI",
      icon: "🧠",
      description: "Quantum-enhanced artificial intelligence",
      features: [
        "Quantum neural networks",
        "Quantum machine learning",
        "Quantum optimization",
        "Hybrid quantum-classical AI"
      ],
      power: "10^8 faster training"
    }
  };

  const quantumApplications = [
    {
      industry: "Healthcare",
      icon: "🏥",
      applications: [
        "Drug discovery acceleration",
        "Protein folding simulation",
        "Personalized medicine",
        "Cancer treatment optimization"
      ],
      impact: "10x faster drug development"
    },
    {
      industry: "Finance",
      icon: "💰",
      applications: [
        "Portfolio optimization",
        "Risk analysis",
        "Fraud detection",
        "Algorithmic trading"
      ],
      impact: "Real-time risk assessment"
    },
    {
      industry: "Climate Science",
      icon: "🌍",
      applications: [
        "Climate modeling",
        "Carbon capture optimization",
        "Weather prediction",
        "Environmental monitoring"
      ],
      impact: "1000x more accurate models"
    },
    {
      industry: "Space Exploration",
      icon: "🚀",
      applications: [
        "Trajectory optimization",
        "Communication networks",
        "Materials science",
        "Astrophysics simulations"
      ],
      impact: "Revolutionary space missions"
    }
  ];

  // Animate quantum state
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/quantum-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-bold mb-6">
              ⚛️ QUANTUM REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Quantum Computing Revolution 2026
            </h1>
            <p className="text-2xl text-cyan-100 max-w-4xl mx-auto mb-8">
              Experience the quantum leap in computing power that will reshape industries and solve impossible problems
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Quantum Tech →
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors font-semibold">
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
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">⚛️ Quantum Technologies</h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Revolutionary quantum technologies that are transforming the future of computing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {Object.entries(quantumTechnologies).map(([key, tech], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeQuantum === key ? 'ring-2 ring-cyan-400' : ''
                }`}
                onClick={() => setActiveQuantum(key)}
              >
                <div className="text-5xl mb-6 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-cyan-300">{tech.title}</h3>
                <p className="text-cyan-100 mb-6 text-center">{tech.description}</p>
                <div className="text-center">
                  <div className="text-sm text-cyan-200 mb-4">Processing Power:</div>
                  <div className="text-lg font-bold text-cyan-400">{tech.power}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Technology Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuantum}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-300 mb-2">
                    {quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].title}
                  </h3>
                  <p className="text-cyan-100">
                    {quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-cyan-300 mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-cyan-100">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6">
                    <div className="text-cyan-200 text-sm mb-2">Processing Power</div>
                    <div className="text-3xl font-bold text-white">
                      {quantumTechnologies[activeQuantum as keyof typeof quantumTechnologies].power}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-300">🚀 Industry Applications</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Quantum computing is revolutionizing industries across the globe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumApplications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
              >
                <div className="text-5xl mb-6 text-center">{app.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">{app.industry}</h3>
                <ul className="space-y-2 mb-6">
                  {app.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-purple-100 text-sm">
                      • {application}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-sm text-purple-200 mb-2">Impact:</div>
                  <div className="text-sm font-bold text-purple-300">{app.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">📅 Quantum Timeline</h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              The roadmap to quantum supremacy and beyond
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                year: "2026",
                milestone: "Quantum Supremacy",
                description: "Achieving quantum advantage in practical applications",
                status: "current"
              },
              {
                year: "2027",
                milestone: "Error Correction",
                description: "Implementing fault-tolerant quantum computing",
                status: "upcoming"
              },
              {
                year: "2028",
                milestone: "Quantum Internet",
                description: "Global quantum communication network",
                status: "future"
              },
              {
                year: "2030",
                milestone: "Quantum AI",
                description: "Fully integrated quantum artificial intelligence",
                status: "vision"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4">{item.milestone}</h3>
                  <p className="text-cyan-100 text-sm">{item.description}</p>
                  <div className={`mt-4 inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === 'current' ? 'bg-green-600 text-white' :
                    item.status === 'upcoming' ? 'bg-yellow-600 text-white' :
                    item.status === 'future' ? 'bg-blue-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {item.status.toUpperCase()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in the quantum computing revolution and transform your business with exponential computational power
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Quantum Journey →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold">
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