import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Microscope,
  Code,
  BarChart3,
  Lightbulb,
  Layers,
  Activity,
  Wifi,
  CpuIcon
} from 'lucide-react';

const QuantumComputingSolutions2025: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const quantumSolutions = [
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum key distribution and quantum-resistant algorithms',
      icon: Shield,
      status: 'Production Ready',
      impact: '100% Secure',
      color: 'from-blue-500 to-cyan-500',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Number Generation']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Exponential speedup in machine learning algorithms using quantum computing',
      icon: Brain,
      status: 'Beta Testing',
      impact: '1000x Faster',
      color: 'from-purple-500 to-pink-500',
      features: ['Quantum Neural Networks', 'Quantum Optimization', 'Quantum Feature Maps']
    },
    {
      title: 'Quantum Simulation',
      description: 'Accurate simulation of quantum systems for drug discovery and materials science',
      icon: Atom,
      status: 'Research Phase',
      impact: 'Exponential Accuracy',
      color: 'from-green-500 to-emerald-500',
      features: ['Molecular Simulation', 'Chemical Reaction Modeling', 'Material Design']
    },
    {
      title: 'Quantum Optimization',
      description: 'Solving complex optimization problems with quantum annealing and variational algorithms',
      icon: Target,
      status: 'Live Demo',
      impact: 'NP-Hard Solutions',
      color: 'from-orange-500 to-red-500',
      features: ['Portfolio Optimization', 'Supply Chain Optimization', 'Traffic Routing']
    }
  ];

  const quantumHardware = [
    {
      name: 'Zion Quantum Processor',
      qubits: '128',
      coherence: '100μs',
      gateFidelity: '99.9%',
      type: 'Superconducting',
      status: 'Available Now'
    },
    {
      name: 'Quantum Annealing System',
      qubits: '2048',
      coherence: '50ms',
      gateFidelity: '99.5%',
      type: 'Adiabatic',
      status: 'Beta Testing'
    },
    {
      name: 'Ion Trap Quantum Computer',
      qubits: '64',
      coherence: '1s',
      gateFidelity: '99.99%',
      type: 'Trapped Ions',
      status: 'Research Only'
    }
  ];

  const applications = [
    {
      industry: 'Financial Services',
      icon: TrendingUp,
      useCases: ['Portfolio Optimization', 'Risk Analysis', 'Fraud Detection', 'Algorithmic Trading'],
      quantumAdvantage: 'Exponential speedup in complex calculations'
    },
    {
      industry: 'Healthcare & Pharma',
      icon: Microscope,
      useCases: ['Drug Discovery', 'Protein Folding', 'Molecular Simulation', 'Personalized Medicine'],
      quantumAdvantage: 'Accurate molecular modeling and drug design'
    },
    {
      industry: 'Cybersecurity',
      icon: Shield,
      useCases: ['Quantum Cryptography', 'Secure Communications', 'Key Distribution', 'Post-Quantum Security'],
      quantumAdvantage: 'Unbreakable encryption and secure protocols'
    },
    {
      industry: 'Logistics & Supply Chain',
      icon: Globe,
      useCases: ['Route Optimization', 'Inventory Management', 'Resource Allocation', 'Demand Forecasting'],
      quantumAdvantage: 'Optimal solutions for complex routing problems'
    }
  ];

  const stats = [
    { number: '128', label: 'Qubits Available', icon: Atom },
    { number: '99.9%', label: 'Gate Fidelity', icon: Award },
    { number: '100μs', label: 'Coherence Time', icon: Gauge },
    { number: '24/7', label: 'Quantum Access', icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -120, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
              <Atom className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Quantum Solutions</h1>
              <p className="text-sm text-blue-300">Quantum Computing Excellence</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
            <a href="#hardware" className="hover:text-blue-400 transition-colors">Hardware</a>
            <a href="#applications" className="hover:text-blue-400 transition-colors">Applications</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Access Quantum Cloud
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300">Next-Generation Quantum Computing</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Quantum Future
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Harness the power of quantum mechanics to solve the world's most complex problems 
            with unprecedented speed and accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Quantum Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Solutions
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quantum Solutions Section */}
      <section id="solutions" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary quantum computing solutions for the most challenging problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {quantumSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-semibold">
                    {solution.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center space-x-2 text-sm mb-4">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">{solution.impact}</span>
                </div>
                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Hardware Section */}
      <section id="hardware" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Hardware</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              State-of-the-art quantum computing hardware with industry-leading performance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {quantumHardware.map((hardware, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CpuIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{hardware.name}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold">
                    {hardware.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Qubits:</span>
                    <span className="text-white font-semibold">{hardware.qubits}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Coherence:</span>
                    <span className="text-white font-semibold">{hardware.coherence}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Gate Fidelity:</span>
                    <span className="text-white font-semibold">{hardware.gateFidelity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-white font-semibold">{hardware.type}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Request Access
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your industry with quantum computing solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{app.industry}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-300">Use Cases:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {app.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Quantum Advantage:</h4>
                  <p className="text-sm text-gray-300">{app.quantumAdvantage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Quantum Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the quantum computing revolution and solve problems that were previously impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Start Quantum Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Quantum Solutions</h3>
                <p className="text-sm text-gray-400">Quantum Computing Excellence</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion Quantum Solutions. All rights reserved.</p>
              <p className="text-sm text-gray-500">Unlocking quantum potential for humanity.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantumComputingSolutions2025;