import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Brain, 
  Shield, 
  Cpu, 
  Network, 
  Rocket, 
  Target, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Code,
  Database,
  Lock,
  Eye,
  BarChart3,
  Users,
  Globe,
  Activity,
  Server,
  Cloud,
  Heart,
  DollarSign,
  FileText,
  Calendar,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function QuantumComputingPage() {
  const quantumServices = [
    {
      category: 'Core Quantum Solutions',
      services: [
        {
          name: 'Quantum Computing Platform',
          description: 'Access to cutting-edge quantum computing resources and algorithms',
          icon: Atom,
          features: ['Quantum Algorithms', 'Quantum Circuits', 'Quantum Error Correction', 'Scalable Architecture'],
          href: '/services/quantum-computing-platform'
        },
        {
          name: 'Quantum AI Hybrid Platform',
          description: 'Combining quantum computing with artificial intelligence for breakthrough solutions',
          icon: Brain,
          features: ['Quantum Neural Networks', 'Hybrid Algorithms', 'AI-Quantum Integration', 'Advanced Optimization'],
          href: '/services/ai-quantum-hybrid-platform'
        },
        {
          name: 'Quantum Machine Learning',
          description: 'Quantum-enhanced machine learning algorithms and frameworks',
          icon: TrendingUp,
          features: ['Quantum Neural Networks', 'Quantum Feature Selection', 'Quantum Clustering', 'Quantum Classification'],
          href: '/services/quantum-machine-learning'
        },
        {
          name: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum mechanics principles',
          icon: Shield,
          features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Number Generation', 'Secure Communication'],
          href: '/services/quantum-cryptography'
        }
      ]
    },
    {
      category: 'Advanced Quantum Services',
      services: [
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum algorithms for high-frequency trading and portfolio optimization',
          icon: DollarSign,
          features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading'],
          href: '/services/quantum-ai-trading-platform'
        },
        {
          name: 'Quantum Optimization',
          description: 'Solving complex optimization problems with quantum algorithms',
          icon: Target,
          features: ['Combinatorial Optimization', 'Linear Programming', 'Constraint Satisfaction', 'Global Optimization'],
          href: '/services/quantum-optimization'
        },
        {
          name: 'Quantum Simulation',
          description: 'Simulating quantum systems for research and development',
          icon: Cpu,
          features: ['Molecular Dynamics', 'Material Science', 'Chemical Reactions', 'Physical Systems'],
          href: '/services/quantum-simulation'
        },
        {
          name: 'Quantum Internet',
          description: 'Building the infrastructure for quantum communication networks',
          icon: Network,
          features: ['Quantum Repeaters', 'Entanglement Distribution', 'Quantum Routing', 'Network Security'],
          href: '/services/quantum-internet'
        }
      ]
    },
    {
      category: 'Specialized Quantum Solutions',
      services: [
        {
          name: 'Quantum Edge Computing',
          description: 'Quantum computing at the edge for real-time applications',
          icon: Activity,
          features: ['Edge Quantum Processing', 'Real-time Optimization', 'Local Quantum Resources', 'Distributed Computing'],
          href: '/services/quantum-edge-computing'
        },
        {
          name: 'Quantum Cloud Services',
          description: 'Cloud-based access to quantum computing resources',
          icon: Cloud,
          features: ['Quantum Cloud Platform', 'API Access', 'Scalable Resources', 'Pay-per-Use Model'],
          href: '/services/quantum-cloud-services'
        },
        {
          name: 'Quantum Research & Development',
          description: 'Custom quantum computing research and development services',
          icon: Code,
          features: ['Algorithm Development', 'Hardware Research', 'Software Development', 'Testing & Validation'],
          href: '/services/quantum-research-development'
        },
        {
          name: 'Quantum Consulting',
          description: 'Expert guidance on quantum computing implementation',
          icon: Users,
          features: ['Strategy Development', 'Technology Assessment', 'Implementation Planning', 'Training & Education'],
          href: '/services/quantum-consulting'
        }
      ]
    }
  ];

  const benefits = [
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
      title: 'Exponential Speed',
      description: 'Solve complex problems in seconds that would take classical computers years'
    },
    {
      icon: Brain,
      title: 'Quantum Advantage',
      description: 'Achieve computational advantages impossible with classical computing'
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
      title: 'Unbreakable Security',
      description: 'Quantum cryptography provides theoretically unbreakable encryption'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'Position your business at the forefront of the quantum revolution'
    }
  ];

  const stats = [
    { number: '1000x', label: 'Speed Increase' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Availability' },
    { number: '∞', label: 'Scalability' }
  ];

  const pricingTiers = [
    {
      industry: 'Finance',
      applications: ['Portfolio Optimization', 'Risk Assessment', 'Fraud Detection', 'Algorithmic Trading'],
      icon: DollarSign
    },
    {
      industry: 'Healthcare',
      applications: ['Drug Discovery', 'Protein Folding', 'Medical Imaging', 'Personalized Medicine'],
      icon: Heart
    },
    {
      industry: 'Manufacturing',
      applications: ['Supply Chain Optimization', 'Quality Control', 'Predictive Maintenance', 'Resource Planning'],
      icon: Building
    },
    {
      industry: 'Research',
      applications: ['Material Science', 'Climate Modeling', 'Particle Physics', 'Cryptography'],
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with our quantum solutions. 
              Harness the power of quantum mechanics to solve previously impossible problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Explore Quantum
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quantum Computing Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum computing solutions span across multiple domains, 
              providing access to the most advanced computational capabilities available.
            </p>
          </motion.div>

          <div className="space-y-16">
            {quantumServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold">{service.name}</h4>
                      </div>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quantum Computing Use Cases</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries 
              and solving previously intractable problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <useCase.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400">{useCase.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Quantum Computing?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum computing represents the next frontier in computational power, 
              offering capabilities that were once thought impossible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Future?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the quantum revolution and gain access to computational power 
              that will transform your business and research capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Start Quantum Journey
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}