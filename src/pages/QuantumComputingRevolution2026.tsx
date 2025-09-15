import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuantumComputingRevolution2026: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [quantumState, setQuantumState] = useState(0);

  // Simulate quantum state animation
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const quantumStates = ['|0⟩', '|1⟩', '|+⟩', '|-⟩'];
  const quantumColors = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500'];

  const sections = [
    { id: 'overview', label: 'Quantum Overview', icon: '⚛️' },
    { id: 'technology', label: 'Technology', icon: '🔬' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'breakthroughs', label: 'Breakthroughs', icon: '💡' },
    { id: 'future', label: 'Future Vision', icon: '🔮' }
  ];

  const quantumTechnologies = [
    {
      name: "Quantum Supremacy",
      description: "Achieving computational tasks impossible for classical computers",
      qubits: 1000,
      coherence: "100ms",
      errorRate: "0.01%",
      status: "Achieved",
      icon: "👑",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Quantum Error Correction",
      description: "Advanced error correction enabling stable quantum computation",
      qubits: 10000,
      coherence: "1s",
      errorRate: "0.001%",
      status: "In Development",
      icon: "🛡️",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Quantum Machine Learning",
      description: "Exponential speedup in machine learning algorithms",
      qubits: 5000,
      coherence: "500ms",
      errorRate: "0.05%",
      status: "Beta Testing",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum principles",
      qubits: 100,
      coherence: "10ms",
      errorRate: "0.1%",
      status: "Production Ready",
      icon: "🔐",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Simulating molecular interactions for pharmaceutical research",
      impact: "1000x faster drug development",
      icon: "💊",
      gradient: "from-blue-500 to-cyan-500",
      examples: ["Protein folding", "Drug interactions", "Side effect prediction"]
    },
    {
      title: "Financial Modeling",
      description: "Complex risk analysis and portfolio optimization",
      impact: "Real-time market analysis",
      icon: "💰",
      gradient: "from-green-500 to-emerald-500",
      examples: ["Risk assessment", "Portfolio optimization", "Fraud detection"]
    },
    {
      title: "Climate Simulation",
      description: "Modeling climate systems for environmental solutions",
      impact: "Accurate climate predictions",
      icon: "🌍",
      gradient: "from-teal-500 to-blue-500",
      examples: ["Weather patterns", "Carbon capture", "Renewable energy"]
    },
    {
      title: "Artificial Intelligence",
      description: "Quantum-enhanced machine learning algorithms",
      impact: "Exponential AI capabilities",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500",
      examples: ["Pattern recognition", "Optimization", "Neural networks"]
    }
  ];

  const breakthroughs = [
    {
      title: "1000-Qubit Quantum Processor",
      date: "January 2026",
      description: "First commercially viable 1000-qubit quantum processor",
      impact: "Revolutionary computational power",
      icon: "⚡",
      details: "Achieved quantum supremacy with practical applications"
    },
    {
      title: "Room Temperature Quantum Computing",
      date: "March 2026",
      description: "Quantum computers operating at room temperature",
      impact: "Massive cost reduction and accessibility",
      icon: "🌡️",
      details: "Eliminated need for expensive cooling systems"
    },
    {
      title: "Quantum Internet Protocol",
      date: "June 2026",
      description: "First quantum internet connecting multiple quantum computers",
      impact: "Global quantum network",
      icon: "🌐",
      details: "Secure quantum communication across continents"
    },
    {
      title: "Quantum AI Integration",
      date: "September 2026",
      description: "Seamless integration of quantum and classical AI",
      impact: "Hybrid intelligence systems",
      icon: "🧠",
      details: "Combining quantum speed with AI intelligence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Animated Quantum Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 1000, 0],
              y: [0, Math.random() * 1000, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              ⚛️ QUANTUM REVOLUTION 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Computing Revolution
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the dawn of a new computational era. Quantum computing is no longer science fiction—it's reality, 
              and it's transforming everything from drug discovery to artificial intelligence.
            </p>
            
            {/* Quantum State Display */}
            <div className="mb-8">
              <div className="inline-block bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-sm opacity-70 mb-2">Current Quantum State:</div>
                <motion.div
                  key={quantumState}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`text-4xl font-bold bg-gradient-to-r ${quantumColors[quantumState]} bg-clip-text text-transparent`}
                >
                  {quantumStates[quantumState]}
                </motion.div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Quantum Tech →
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-colors font-semibold">
                Watch Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Quantum Computing Overview</h2>
                <p className="text-xl opacity-90 max-w-4xl mx-auto">
                  Quantum computing harnesses the principles of quantum mechanics to process information in ways 
                  that classical computers cannot. This revolutionary technology is unlocking new possibilities 
                  across every industry.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4">Exponential Speed</h3>
                  <p className="opacity-90 mb-4">
                    Quantum computers can solve certain problems exponentially faster than classical computers.
                  </p>
                  <div className="text-3xl font-bold text-cyan-400">10^300x</div>
                  <div className="text-sm opacity-70">Speed Improvement</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl mb-4">🔗</div>
                  <h3 className="text-2xl font-bold mb-4">Quantum Entanglement</h3>
                  <p className="opacity-90 mb-4">
                    Particles can be connected in ways that classical physics cannot explain.
                  </p>
                  <div className="text-3xl font-bold text-purple-400">∞</div>
                  <div className="text-sm opacity-70">Instantaneous Connection</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold mb-4">Superposition</h3>
                  <p className="opacity-90 mb-4">
                    Quantum bits can exist in multiple states simultaneously.
                  </p>
                  <div className="text-3xl font-bold text-pink-400">2^n</div>
                  <div className="text-sm opacity-70">Parallel States</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">🌟 The Quantum Advantage</h3>
                <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
                  We're not just building faster computers—we're creating entirely new ways of thinking about 
                  computation, problem-solving, and the nature of reality itself.
                </p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Discover Quantum Possibilities →
                </button>
              </div>
            </motion.div>
          )}

          {activeSection === 'technology' && (
            <motion.div
              key="technology"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Quantum Technologies</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Explore the cutting-edge quantum technologies that are making the impossible possible.
                </p>
              </div>

              <div className="space-y-8">
                {quantumTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${tech.gradient} rounded-2xl flex items-center justify-center text-3xl`}>
                        {tech.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">{tech.name}</h3>
                          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            tech.status === 'Production Ready' ? 'bg-green-500/20 text-green-400' :
                            tech.status === 'Beta Testing' ? 'bg-blue-500/20 text-blue-400' :
                            tech.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {tech.status}
                          </span>
                        </div>
                        <p className="opacity-90 mb-6 text-lg">{tech.description}</p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          <div className="bg-black/20 rounded-lg p-4">
                            <div className="text-sm opacity-70 mb-1">Qubits</div>
                            <div className="text-2xl font-bold text-cyan-400">{tech.qubits.toLocaleString()}</div>
                          </div>
                          <div className="bg-black/20 rounded-lg p-4">
                            <div className="text-sm opacity-70 mb-1">Coherence Time</div>
                            <div className="text-2xl font-bold text-purple-400">{tech.coherence}</div>
                          </div>
                          <div className="bg-black/20 rounded-lg p-4">
                            <div className="text-sm opacity-70 mb-1">Error Rate</div>
                            <div className="text-2xl font-bold text-pink-400">{tech.errorRate}</div>
                          </div>
                        </div>

                        <button className={`bg-gradient-to-r ${tech.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                          Learn More →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'applications' && (
            <motion.div
              key="applications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Quantum Applications</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  See how quantum computing is revolutionizing industries and solving previously impossible problems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {applications.map((app, index) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${app.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                      {app.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                    <p className="opacity-90 mb-6 text-lg">{app.description}</p>
                    
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6">
                      <div className="flex items-center mb-2">
                        <span className="text-green-400 font-semibold">📈 Impact:</span>
                      </div>
                      <p className="text-green-300 font-semibold">{app.impact}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Applications:</h4>
                      <ul className="space-y-2">
                        {app.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center opacity-90">
                            <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className={`w-full bg-gradient-to-r ${app.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                      Explore Application →
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'breakthroughs' && (
            <motion.div
              key="breakthroughs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Quantum Breakthroughs 2026</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Major milestones that are reshaping the quantum computing landscape and bringing us closer to practical quantum applications.
                </p>
              </div>

              <div className="space-y-8">
                {breakthroughs.map((breakthrough, index) => (
                  <motion.div
                    key={breakthrough.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="text-5xl">{breakthrough.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">{breakthrough.title}</h3>
                          <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold">
                            {breakthrough.date}
                          </span>
                        </div>
                        <p className="opacity-90 mb-4 text-lg">{breakthrough.description}</p>
                        
                        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg p-4 mb-4">
                          <div className="flex items-center mb-2">
                            <span className="text-cyan-400 font-semibold">🚀 Impact:</span>
                          </div>
                          <p className="text-cyan-300 font-semibold">{breakthrough.impact}</p>
                        </div>

                        <p className="opacity-80">{breakthrough.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'future' && (
            <motion.div
              key="future"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Quantum Future Vision</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  A glimpse into the quantum-powered future where the impossible becomes possible.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center mb-12">
                <h3 className="text-4xl font-bold mb-6">🌟 The Quantum-Powered Future</h3>
                <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
                  By 2030, quantum computing will be as common as smartphones today. We envision a world where 
                  quantum computers solve climate change, cure diseases, and unlock the mysteries of the universe.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl mb-4">🌍</div>
                    <h4 className="text-xl font-bold mb-3">Global Impact</h4>
                    <p className="opacity-90">Quantum solutions for climate change, healthcare, and global challenges</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl mb-4">🔬</div>
                    <h4 className="text-xl font-bold mb-3">Scientific Discovery</h4>
                    <p className="opacity-90">Unlocking the fundamental mysteries of physics and chemistry</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl mb-4">🚀</div>
                    <h4 className="text-xl font-bold mb-3">Infinite Possibilities</h4>
                    <p className="opacity-90">Computational power beyond our current imagination</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">Ready to Enter the Quantum Era?</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join us in building the quantum future. The revolution starts now.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Start Quantum Journey →
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2026;