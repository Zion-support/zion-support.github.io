import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Lock, 
  Database, 
  Globe, 
  FileText,
  MessageCircle,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Leaf,
  Sparkles,
  Target,
  BarChart3,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Cpu,
  Network,
  Eye,
  Building,
  Video,
  Image,
  Music,
  Code,
  CpuIcon,
  CircuitBoard,
  Microchip,
  Binary,
  Calculator,
  TestTube,
  Beaker,
  Search,
  BookOpen,
  Heart,
  Shield
} from 'lucide-react';

export default function QuantumComputingPage() {
  const quantumServices = [
    {
      icon: Atom,
      title: 'Quantum Processing',
      description: 'Advanced quantum algorithms for complex computational problems',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Quantum machine learning and neural network optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CircuitBoard,
      title: 'Quantum Circuits',
      description: 'Custom quantum circuit design and optimization',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TestTube,
      title: 'Research & Development',
      description: 'Cutting-edge quantum research and experimental platforms',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: CpuIcon,
      title: 'Hybrid Systems',
      description: 'Quantum-classical hybrid computing solutions',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Quantum Simulation',
      description: 'Complex system modeling and simulation capabilities',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Solve problems 1000x faster than classical computers',
    'Breakthrough in cryptography and security',
    'Revolutionary drug discovery and materials science',
    'Advanced optimization for logistics and finance',
    'Next-generation AI and machine learning',
    'Climate modeling and environmental research'
  ];

  const useCases = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Computing - Zion Tech Group"
        description="Revolutionary quantum computing solutions for complex problem solving, AI optimization, and breakthrough research applications."
        keywords="quantum computing, quantum algorithms, quantum AI, quantum simulation, quantum research, quantum technology"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Quantum Technology
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Quantum
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Computing
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of computing with quantum technology that solves 
                previously impossible problems. Revolutionize your research and operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our quantum platform provides cutting-edge capabilities for the most complex computational challenges.
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience computational power that was previously impossible with classical computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
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
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of computing with our quantum technology platform. 
              Get in touch to explore quantum solutions for your challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}