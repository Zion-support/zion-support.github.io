import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Atom,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Cpu,
  Rocket,
  Eye,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Heart,
  Building,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Play,
  ChevronRight,
  Brain,
  Lock,
  Key,
  CircuitBoard,
  Microscope,
  TestTube,
  Flask
} from 'lucide-react';

export default function QuantumComputingPage() {
  const quantumServices = [
    {
      title: 'Quantum AI Hybrid Platform',
      description: 'Combine quantum computing power with AI algorithms for unprecedented performance',
      icon: Brain,
      href: '/services/ai-quantum-hybrid-platform',
      features: ['Quantum Machine Learning', 'Hybrid Algorithms', 'Quantum Neural Networks', 'AI Optimization'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Quantum Security Solutions',
      description: 'Unbreakable encryption and security protocols powered by quantum mechanics',
      icon: Shield,
      href: '/services/quantum-security',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Number Generation', 'Secure Communications'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems with quantum algorithms',
      icon: Target,
      href: '/services/quantum-optimization',
      features: ['Combinatorial Optimization', 'Supply Chain Optimization', 'Financial Portfolio Optimization', 'Logistics Planning'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Quantum Simulation',
      description: 'Model complex quantum systems for research and development',
      icon: Microscope,
      href: '/services/quantum-simulation',
      features: ['Molecular Modeling', 'Material Science', 'Drug Discovery', 'Chemical Reactions'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Revolutionary machine learning algorithms leveraging quantum computing',
      icon: TrendingUp,
      href: '/services/quantum-machine-learning',
      features: ['Quantum Neural Networks', 'Quantum Feature Maps', 'Quantum Kernels', 'Quantum Classification'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Quantum Financial Modeling',
      description: 'Advanced financial modeling and risk assessment using quantum algorithms',
      icon: Building,
      href: '/services/quantum-financial-modeling',
      features: ['Portfolio Optimization', 'Risk Assessment', 'Option Pricing', 'Market Simulation'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const quantumCapabilities = [
    {
      title: 'Quantum Supremacy',
      description: 'Achieve computational power beyond classical computers',
      icon: Zap,
      features: ['Exponential Speedup', 'Parallel Processing', 'Quantum Parallelism', 'Superposition States']
    },
    {
      title: 'Quantum Entanglement',
      description: 'Leverage quantum entanglement for secure communications',
      icon: Network,
      features: ['Entangled Qubits', 'Quantum Teleportation', 'Bell States', 'EPR Paradox']
    },
    {
      title: 'Quantum Algorithms',
      description: 'Specialized algorithms designed for quantum computers',
      icon: Code,
      features: ['Shor\'s Algorithm', 'Grover\'s Algorithm', 'Quantum Fourier Transform', 'Quantum Phase Estimation']
    },
    {
      title: 'Quantum Error Correction',
      description: 'Maintain quantum coherence and accuracy',
      icon: Shield,
      features: ['Surface Codes', 'Stabilizer Codes', 'Fault Tolerance', 'Error Syndromes']
    }
  ];

  const applications = [
    { name: 'Cryptography', icon: Lock, description: 'Unbreakable encryption and secure communications' },
    { name: 'Drug Discovery', icon: Flask, description: 'Molecular modeling and pharmaceutical research' },
    { name: 'Financial Modeling', icon: Building, description: 'Complex financial calculations and risk assessment' },
    { name: 'Climate Modeling', icon: Globe, description: 'Advanced climate and weather prediction' },
    { name: 'Material Science', icon: TestTube, description: 'New material discovery and properties' },
    { name: 'Artificial Intelligence', icon: Brain, description: 'Enhanced AI algorithms and machine learning' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-indigo-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of quantum mechanics to solve previously intractable problems and unlock 
              new possibilities in computing, security, and scientific discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Quantum Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive quantum computing solutions designed to tackle the most complex computational challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quantum Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leverage the fundamental principles of quantum mechanics to achieve computational breakthroughs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quantum Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving previously impossible problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={application.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{application.name}</h3>
                <p className="text-gray-400 text-sm">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum vs Classical */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quantum vs Classical Computing</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understand the fundamental differences and advantages of quantum computing over classical approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Classical Computing</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  Binary bits (0 or 1)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  Sequential processing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  Deterministic algorithms
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  Established technology
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/50 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Atom className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Quantum Computing</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  Quantum bits (qubits)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  Parallel processing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  Probabilistic algorithms
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  Exponential speedup potential
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Quantum Computing?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how quantum computing can solve your most complex challenges and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/research-development"
                className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                Research & Development
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}