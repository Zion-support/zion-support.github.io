import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Atom,
  Zap,
  Target,
  Users,
  BarChart3,
  Shield,
  Heart,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Eye,
  Lock,
  Cloud,
  Activity,
  Code,
  Database,
  Network,
  Server,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Award,
  Clock,
  DollarSign,
  Brain,
  Microscope,
  TestTube,
  CircuitBoard,
  Atom
} from 'lucide-react';

export function QuantumComputingPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const quantumServices = [
    {
      category: 'Quantum Computing Platforms',
      services: [
        {
          title: 'Quantum Computing as a Service',
          description: 'Access to quantum computing resources and quantum algorithms',
          features: ['Quantum Algorithm Development', 'Quantum Circuit Design', 'Quantum Error Correction', 'Performance Optimization'],
          price: '$5,000',
          duration: '8-12 weeks',
          icon: Atom,
          href: '/services/quantum-computing-as-a-service'
        },
        {
          title: 'Quantum Edge Computing Platform',
          description: 'Hybrid quantum-classical computing for edge applications',
          features: ['Hybrid Algorithms', 'Edge Optimization', 'Real-time Processing', 'Low Latency'],
          price: '$4,200',
          duration: '6-8 weeks',
          icon: Cpu,
          href: '/services/quantum-edge-computing-platform'
        },
        {
          title: 'Quantum Neural Network Platform',
          description: 'Quantum machine learning and neural network implementations',
          features: ['Quantum ML Algorithms', 'Neural Network Training', 'Pattern Recognition', 'Optimization'],
          price: '$4,800',
          duration: '8-10 weeks',
          icon: Brain,
          href: '/services/quantum-neural-network-platform'
        }
      ]
    },
    {
      category: 'Quantum AI Solutions',
      services: [
        {
          title: 'Quantum AI Trading Platform',
          description: 'Quantum algorithms for financial trading and market analysis',
          features: ['Quantum Trading Algorithms', 'Risk Assessment', 'Portfolio Optimization', 'Market Prediction'],
          price: '$6,500',
          duration: '10-14 weeks',
          icon: TrendingUp,
          href: '/services/quantum-ai-trading-platform'
        },
        {
          title: 'Quantum AI Hybrid Platform',
          description: 'Combines quantum and classical AI for optimal performance',
          features: ['Hybrid AI Models', 'Quantum-Classical Integration', 'Performance Optimization', 'Scalability'],
          price: '$7,200',
          duration: '12-16 weeks',
          icon: Atom,
          href: '/services/ai-quantum-hybrid-platform'
        }
      ]
    },
    {
      category: 'Quantum Security & Cryptography',
      services: [
        {
          title: 'Quantum Cryptography Solutions',
          description: 'Post-quantum cryptography and quantum-safe security',
          features: ['Quantum Key Distribution', 'Post-Quantum Algorithms', 'Security Auditing', 'Compliance'],
          price: '$4,500',
          duration: '6-8 weeks',
          icon: Shield,
          href: '/services/quantum-cryptography'
        },
        {
          title: 'Quantum Random Number Generation',
          description: 'True quantum randomness for cryptographic applications',
          features: ['Quantum Entropy', 'High Entropy Output', 'Cryptographic Grade', 'Real-time Generation'],
          price: '$2,800',
          duration: '4-6 weeks',
          icon: Lock,
          href: '/services/quantum-random-generation'
        }
      ]
    },
    {
      category: 'Quantum Research & Development',
      services: [
        {
          title: 'Quantum Algorithm Research',
          description: 'Custom quantum algorithm development and optimization',
          features: ['Algorithm Design', 'Performance Analysis', 'Optimization', 'Documentation'],
          price: '$8,000',
          duration: '12-20 weeks',
          icon: Microscope,
          href: '/services/quantum-algorithm-research'
        },
        {
          title: 'Quantum Machine Learning Research',
          description: 'Research and development in quantum machine learning',
          features: ['QML Algorithm Development', 'Model Training', 'Performance Evaluation', 'Research Papers'],
          price: '$9,500',
          duration: '16-24 weeks',
          icon: TestTube,
          href: '/services/quantum-machine-learning'
        }
      ]
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Globe },
    { id: 'services', name: 'Services', icon: Zap },
    { id: 'benefits', name: 'Benefits', icon: Star },
    { id: 'technology', name: 'Technology', icon: Atom },
    { id: 'pricing', name: 'Pricing', icon: DollarSign }
  ];

  const benefits = [
    {
      title: 'Exponential Speedup',
      description: 'Solve complex problems exponentially faster than classical computers',
      icon: Zap,
      color: 'text-cyan-400'
    },
    {
      title: 'Quantum Advantage',
      description: 'Achieve computational advantages impossible with classical systems',
      icon: Star,
      color: 'text-yellow-400'
    },
    {
      title: 'Future-Proof Solutions',
      description: 'Prepare for the quantum computing revolution',
      icon: Rocket,
      color: 'text-blue-400'
    },
    {
      title: 'Breakthrough Innovation',
      description: 'Enable new possibilities in AI, cryptography, and optimization',
      icon: Lightbulb,
      color: 'text-purple-400'
    },
    {
      title: 'Competitive Edge',
      description: 'Stay ahead of competitors with quantum technology',
      icon: Target,
      color: 'text-green-400'
    },
    {
      title: 'Research Leadership',
      description: 'Lead in quantum computing research and development',
      icon: Award,
      color: 'text-orange-400'
    }
  ];

  const technologyFeatures = [
    {
      title: 'Quantum Bits (Qubits)',
      description: 'Fundamental units of quantum information with superposition and entanglement',
      icon: Atom,
      details: ['Superposition States', 'Quantum Entanglement', 'Quantum Interference', 'Measurement Collapse']
    },
    {
      title: 'Quantum Gates',
      description: 'Operations that manipulate qubits to perform quantum computations',
      icon: CircuitBoard,
      details: ['Single Qubit Gates', 'Multi-Qubit Gates', 'Quantum Circuits', 'Gate Optimization']
    },
    {
      title: 'Quantum Algorithms',
      description: 'Specialized algorithms that leverage quantum mechanical properties',
      icon: Code,
      details: ['Shor\'s Algorithm', 'Grover\'s Algorithm', 'Quantum Fourier Transform', 'Quantum Phase Estimation']
    },
    {
      title: 'Quantum Error Correction',
      description: 'Techniques to protect quantum information from decoherence and noise',
      icon: Shield,
      details: ['Error Detection', 'Error Correction Codes', 'Fault Tolerance', 'Logical Qubits']
    }
  ];

  const pricingTiers = [
    {
      name: 'Quantum Starter',
      price: '$3,500',
      description: 'Basic quantum computing integration',
      features: [
        'Quantum Algorithm Implementation',
        'Basic Quantum Circuit Design',
        'Standard Support',
        '4-6 Week Delivery'
      ],
      bestFor: 'Small teams exploring quantum computing'
    },
    {
      name: 'Quantum Professional',
      price: '$7,500',
      description: 'Advanced quantum computing solutions',
      features: [
        'Custom Quantum Algorithms',
        'Quantum-Classical Hybrid Systems',
        'Priority Support',
        '8-12 Week Delivery',
        'Performance Optimization'
      ],
      bestFor: 'Growing companies implementing quantum solutions'
    },
    {
      name: 'Quantum Enterprise',
      price: '$15,000+',
      description: 'Full-scale quantum computing infrastructure',
      features: [
        'Complete Quantum Platform',
        'Custom Research & Development',
        '24/7 Support',
        '16-24 Week Delivery',
        'Dedicated Quantum Team',
        'Ongoing Research Partnership'
      ],
      bestFor: 'Large enterprises leading quantum innovation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Atom className="w-4 h-4" />
                <span>Quantum Computing Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Unlock the Power of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
                  {' '}Quantum Computing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the revolutionary power of quantum mechanics to solve previously 
                impossible problems and accelerate innovation across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-cyan-700 transition-all duration-200"
                >
                  <span>Explore Quantum</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center space-x-2 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-200"
                >
                  <span>View Pricing</span>
                  <DollarSign className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Overview Content */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Future of Computing is Quantum
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Quantum computing represents the next frontier in computational power, 
                offering exponential speedups for complex problems in cryptography, 
                optimization, machine learning, and scientific research.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/30 transition-all duration-200"
                >
                  <div className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Quantum vs Classical Comparison */}
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Quantum vs Classical Computing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-purple-400">Classical Computing</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-gray-500" />
                      <span>Binary bits (0 or 1)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-gray-500" />
                      <span>Sequential processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-gray-500" />
                      <span>Deterministic algorithms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-gray-500" />
                      <span>Mature technology</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-cyan-400">Quantum Computing</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>Quantum bits (superposition)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>Parallel processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>Probabilistic algorithms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>Emerging technology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Quantum Computing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From quantum algorithm development to full quantum computing platforms, 
                we provide comprehensive solutions for the quantum era.
              </p>
            </div>

            {quantumServices.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/30 transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.duration}</div>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span className="text-sm font-medium">Learn More</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Quantum Computing Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum computing can revolutionize your business operations 
                and research capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className={`w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Quantum Computing Use Cases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Cryptography', description: 'Break current encryption, develop quantum-safe alternatives', icon: Lock },
                  { title: 'Optimization', description: 'Solve complex optimization problems in logistics and finance', icon: Target },
                  { title: 'Machine Learning', description: 'Accelerate AI training and pattern recognition', icon: Brain },
                  { title: 'Drug Discovery', description: 'Simulate molecular interactions for pharmaceutical research', icon: TestTube },
                  { title: 'Financial Modeling', description: 'Complex risk assessment and portfolio optimization', icon: TrendingUp },
                  { title: 'Climate Modeling', description: 'Advanced climate simulations and weather prediction', icon: Globe }
                ].map((useCase, index) => (
                  <div key={useCase.title} className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <useCase.icon className="w-5 h-5 text-purple-400" />
                      <h4 className="font-semibold text-white">{useCase.title}</h4>
                    </div>
                    <p className="text-sm text-gray-400">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'technology' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Quantum Computing Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the fundamental principles and technologies behind quantum computing.
              </p>
            </div>

            <div className="space-y-8">
              {technologyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Quantum Computing Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Competitive pricing for cutting-edge quantum computing solutions with 
                flexible deployment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-800/50 p-8 rounded-lg border ${
                    tier.name === 'Quantum Professional' 
                      ? 'border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-cyan-500/10' 
                      : 'border-gray-700'
                  } relative`}
                >
                  {tier.name === 'Quantum Professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-purple-400 mb-6">{tier.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-sm text-gray-400 mb-6">
                    <strong>Best for:</strong> {tier.bestFor}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-200 ${
                      tier.name === 'Quantum Professional'
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Explore the Quantum Frontier?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how quantum computing can revolutionize your business 
              and research capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-cyan-700 transition-all duration-200"
              >
                <span>Start Quantum Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-200"
              >
                <span>View Full Pricing</span>
                <DollarSign className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}