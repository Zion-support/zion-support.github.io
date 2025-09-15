import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Brain,
  Layers
} from 'lucide-react';

const QuantumComputingSolutions2025: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quantumSolutions = [
    {
      icon: Atom,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms designed for your specific business challenges',
      features: ['Optimization Problems', 'Cryptography', 'Machine Learning', 'Simulation'],
      price: 'Starting at $15,000/month',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Cryptography',
      description: 'Post-quantum cryptographic solutions to secure your data against quantum attacks',
      features: ['Lattice-Based Crypto', 'Hash-Based Signatures', 'Code-Based Crypto', 'Implementation'],
      price: 'Starting at $8,999/month',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Leverage quantum computing power for advanced AI and machine learning tasks',
      features: ['Quantum Neural Networks', 'Optimization', 'Pattern Recognition', 'Quantum Data Processing'],
      price: 'Starting at $12,999/month',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems with quantum annealing and gate-based approaches',
      features: ['Supply Chain Optimization', 'Portfolio Management', 'Logistics', 'Resource Allocation'],
      price: 'Starting at $10,999/month',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quantumStats = [
    { number: '1000x', label: 'Faster Processing', icon: Zap },
    { number: '99.99%', label: 'Security Level', icon: Shield },
    { number: '50+', label: 'Quantum Algorithms', icon: Brain },
    { number: '24/7', label: 'Quantum Support', icon: Users }
  ];

  const quantumFeatures = [
    {
      title: 'Quantum Advantage Realization',
      description: 'Achieve quantum advantage in your specific use cases with our expert guidance and implementation.',
      benefits: ['Exponential Speedup', 'Complex Problem Solving', 'Optimized Resource Usage', 'Future-Proof Solutions']
    },
    {
      title: 'Hybrid Quantum-Classical Systems',
      description: 'Seamlessly integrate quantum computing with your existing classical infrastructure.',
      benefits: ['Smooth Integration', 'Hybrid Workflows', 'Classical Fallbacks', 'Scalable Architecture']
    },
    {
      title: 'Quantum Error Correction',
      description: 'Advanced error correction techniques to ensure reliable quantum computation.',
      benefits: ['Fault Tolerance', 'Error Mitigation', 'Reliable Results', 'Production Ready']
    },
    {
      title: 'Quantum Cloud Access',
      description: 'Access to leading quantum computers through our cloud platform.',
      benefits: ['Multiple Providers', 'Cost Effective', 'No Hardware Investment', 'Global Access']
    }
  ];

  const caseStudies = [
    {
      company: 'Global Logistics Corp',
      challenge: 'Optimizing supply chain routes across 50+ countries',
      solution: 'Quantum annealing for route optimization',
      results: ['40% reduction in delivery time', '25% cost savings', '99.8% on-time delivery'],
      industry: 'Logistics'
    },
    {
      company: 'Financial Services Inc',
      challenge: 'Portfolio optimization for 10,000+ assets',
      solution: 'Quantum machine learning for risk assessment',
      results: ['35% better risk-adjusted returns', '60% faster calculations', 'Real-time optimization'],
      industry: 'Finance'
    },
    {
      company: 'Pharmaceutical Research',
      challenge: 'Drug discovery molecular simulation',
      solution: 'Quantum chemistry algorithms',
      results: ['10x faster simulations', 'New drug candidates identified', 'Reduced R&D costs by 30%'],
      industry: 'Healthcare'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-xl flex items-center justify-center">
              <Atom className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-purple-300">Quantum Computing Solutions</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-purple-400 transition-colors">Solutions</a>
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#case-studies" className="hover:text-purple-400 transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full border border-purple-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300">Next-Generation Computing</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Quantum Future
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Unlock the power of quantum computing with our cutting-edge solutions. 
            Experience exponential speedups and solve problems that were previously impossible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Solutions
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {quantumStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
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
              Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive quantum computing solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {quantumSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-semibold text-purple-400 mb-6">{solution.price}</div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge quantum computing capabilities that set us apart
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {quantumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications and measurable results from our quantum solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                    {study.industry}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="text-gray-300 mb-4 text-sm">
                  <strong>Solution:</strong> {study.solution}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
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
              Ready for Quantum Advantage?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the quantum revolution and unlock unprecedented computational power for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Start Quantum Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
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
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Quantum Computing Solutions</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Quantum computing for the future.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantumComputingSolutions2025;