import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2025: React.FC = () => {
  const [activeQubit, setActiveQubit] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [quantumState, setQuantumState] = useState({
    superposition: 0,
    entanglement: 0,
    coherence: 0,
    interference: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate quantum state evolution
    const interval = setInterval(() => {
      setQuantumState(prev => ({
        superposition: Math.min(100, prev.superposition + Math.random() * 3),
        entanglement: Math.min(100, prev.entanglement + Math.random() * 2),
        coherence: Math.min(100, prev.coherence + Math.random() * 4),
        interference: Math.min(100, prev.interference + Math.random() * 2)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const quantumTechnologies = [
    {
      id: 0,
      title: "Quantum Superposition",
      description: "Qubits existing in multiple states simultaneously",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      data: quantumState.superposition,
      applications: [
        "Parallel processing",
        "Optimization algorithms",
        "Cryptography",
        "Machine learning"
      ]
    },
    {
      id: 1,
      title: "Quantum Entanglement",
      description: "Instantaneous correlation between quantum particles",
      icon: "🔗",
      color: "from-purple-600 to-pink-600",
      data: quantumState.entanglement,
      applications: [
        "Quantum communication",
        "Teleportation protocols",
        "Secure networks",
        "Distributed computing"
      ]
    },
    {
      id: 2,
      title: "Quantum Coherence",
      description: "Maintaining quantum states without decoherence",
      icon: "🌊",
      color: "from-emerald-600 to-teal-600",
      data: quantumState.coherence,
      applications: [
        "Error correction",
        "Quantum memory",
        "Precision measurements",
        "Quantum sensors"
      ]
    },
    {
      id: 3,
      title: "Quantum Interference",
      description: "Wave-like behavior enabling quantum algorithms",
      icon: "🌊",
      color: "from-indigo-600 to-purple-600",
      data: quantumState.interference,
      applications: [
        "Quantum algorithms",
        "Search optimization",
        "Factor decomposition",
        "Simulation acceleration"
      ]
    }
  ];

  const quantumApplications = [
    {
      title: "Drug Discovery",
      description: "Simulating molecular interactions for pharmaceutical research",
      impact: "1000x faster than classical computers",
      icon: "💊",
      progress: 85
    },
    {
      title: "Climate Modeling",
      description: "Complex climate simulations for environmental solutions",
      impact: "Predict weather patterns 10 years ahead",
      icon: "🌍",
      progress: 72
    },
    {
      title: "Financial Optimization",
      description: "Portfolio optimization and risk analysis",
      impact: "99.9% accuracy in market predictions",
      icon: "💰",
      progress: 91
    },
    {
      title: "Space Exploration",
      description: "Navigation and communication for deep space missions",
      impact: "Enable interstellar travel",
      icon: "🚀",
      progress: 68
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚛️ QUANTUM COMPUTING REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Quantum Computing Revolution
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the power of quantum computing that will solve problems impossible for classical computers
            </p>
          </motion.div>

          {/* Quantum State Visualization */}
          <motion.div className="max-w-6xl mx-auto mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-12">Quantum State Evolution</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quantumTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    activeQubit === index ? 'ring-4 ring-white/50' : ''
                  }`}
                  onClick={() => setActiveQubit(index)}
                >
                  <div className="text-5xl mb-4 text-center">{tech.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{tech.title}</h3>
                  <p className="text-sm opacity-90 mb-4 text-center">{tech.description}</p>
                  
                  {/* Real-time quantum state */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold">Quantum State</span>
                      <span className="text-lg font-bold">{Math.round(tech.data)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-white rounded-full"
                        style={{ width: `${tech.data}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {tech.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-xs">{app}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Active Quantum Technology Details */}
          <motion.div
            key={activeQubit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{quantumTechnologies[activeQubit].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{quantumTechnologies[activeQubit].title}</h3>
                  <p className="text-xl opacity-90 mb-6">{quantumTechnologies[activeQubit].description}</p>
                  
                  {/* Quantum State Visualization */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold">Quantum Coherence</span>
                        <span className="text-2xl font-bold">{Math.round(quantumTechnologies[activeQubit].data)}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <motion.div
                          className={`h-3 bg-gradient-to-r ${quantumTechnologies[activeQubit].color} rounded-full`}
                          style={{ width: `${quantumTechnologies[activeQubit].data}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-cyan-400">∞</div>
                        <div className="text-sm opacity-80">Processing Power</div>
                      </div>
                      <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-400">0.001s</div>
                        <div className="text-sm opacity-80">Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className={`w-full h-80 bg-gradient-to-br ${quantumTechnologies[activeQubit].color} rounded-xl flex items-center justify-center text-8xl opacity-20 relative overflow-hidden`}>
                    {quantumTechnologies[activeQubit].icon}
                    
                    {/* Animated quantum particles */}
                    <div className="absolute inset-0">
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white/60 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real-World Applications */}
          <motion.div className="max-w-6xl mx-auto mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {quantumApplications.map((app, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{app.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                      <p className="text-lg opacity-90 mb-4">{app.description}</p>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold">Development Progress</span>
                          <span className="text-sm font-bold">{app.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                            style={{ width: `${app.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-3">
                        <p className="text-sm font-semibold text-cyan-200">Impact: {app.impact}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quantum Simulator */}
          <motion.div className="max-w-4xl mx-auto mb-20" variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Quantum Computing Simulator</h2>
              <p className="text-xl opacity-90">Experience quantum computing through interactive simulation</p>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-6">⚛️</div>
                <h3 className="text-2xl font-bold mb-4">Quantum Circuit Simulator</h3>
                <p className="text-lg opacity-90 mb-6">
                  Build and test quantum circuits with our advanced simulator
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Start Simulation
                  </button>
                  <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    View Tutorial
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6">Join the Quantum Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Be part of the most significant computing breakthrough in human history
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Explore Quantum Computing
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuantumComputingRevolution2025;