import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Atom,
  Zap,
  Brain,
  Cpu,
  BarChart3,
  Users,
  Target,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Code,
  Database,
  Network,
  Eye,
  Heart,
  DollarSign,
  Building,
  Shield,
  Lock,
  Activity
} from 'lucide-react';

const QuantumComputingPage = () => {
  const quantumServices = [
    {
      icon: Brain,
      title: 'Quantum AI Platform',
      description: 'Combine quantum computing power with artificial intelligence for unprecedented computational capabilities.',
      features: ['Quantum ML Models', 'Hybrid Algorithms', 'Quantum Neural Networks', 'AI Optimization'],
      href: '/services/quantum-ai-platform'
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Secure Communications', 'Quantum Randomness'],
      href: '/services/quantum-cryptography'
    },
    {
      icon: BarChart3,
      title: 'Quantum Financial Modeling',
      description: 'Revolutionary financial analysis and risk assessment using quantum algorithms.',
      features: ['Portfolio Optimization', 'Risk Assessment', 'Market Simulation', 'Quantum Monte Carlo'],
      href: '/services/quantum-financial-modeling'
    },
    {
      icon: Target,
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems that are impossible for classical computers.',
      features: ['Supply Chain Optimization', 'Logistics Planning', 'Resource Allocation', 'Scheduling Problems'],
      href: '/services/quantum-optimization'
    },
    {
      icon: Database,
      title: 'Quantum Database Search',
      description: 'Exponentially faster database searches using quantum algorithms like Grover\'s algorithm.',
      features: ['Unstructured Search', 'Database Indexing', 'Pattern Recognition', 'Data Mining'],
      href: '/services/quantum-database-search'
    },
    {
      icon: Rocket,
      title: 'Quantum Simulation',
      description: 'Accurate simulation of quantum systems for materials science and drug discovery.',
      features: ['Molecular Modeling', 'Chemical Reactions', 'Material Properties', 'Drug Discovery'],
      href: '/services/quantum-simulation'
    }
  ];

  const quantumCapabilities = [
    {
      icon: Atom,
      title: 'Quantum Gates',
      description: 'Implementation of quantum logic gates for quantum circuit design and optimization.'
    },
    {
      icon: Network,
      title: 'Quantum Entanglement',
      description: 'Harnessing quantum entanglement for secure communications and quantum networking.'
    },
    {
      icon: Code,
      title: 'Quantum Algorithms',
      description: 'Development of custom quantum algorithms for specific business applications.'
    },
    {
      icon: Eye,
      title: 'Quantum Sensing',
      description: 'Ultra-sensitive measurement and detection using quantum phenomena.'
    },
    {
      icon: TrendingUp,
      title: 'Quantum Machine Learning',
      description: 'Machine learning algorithms enhanced with quantum computing capabilities.'
    },
    {
      icon: Lock,
      title: 'Quantum Security',
      description: 'Next-generation security protocols based on quantum principles.'
    }
  ];

  const benefits = [
    'Exponential speedup for complex calculations',
    'Unbreakable encryption and security',
    'Revolutionary optimization capabilities',
    'Accurate simulation of quantum systems',
    'Future-proof technology investment',
    'Competitive advantage in research and development'
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      applications: ['Portfolio Optimization', 'Risk Assessment', 'Algorithmic Trading', 'Fraud Detection']
    },
    {
      industry: 'Healthcare & Pharma',
      applications: ['Drug Discovery', 'Protein Folding', 'Medical Imaging', 'Personalized Medicine']
    },
    {
      industry: 'Manufacturing',
      applications: ['Supply Chain Optimization', 'Quality Control', 'Predictive Maintenance', 'Process Optimization']
    },
    {
      industry: 'Cybersecurity',
      applications: ['Quantum Cryptography', 'Post-Quantum Security', 'Threat Detection', 'Secure Communications']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum Computing
              <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
                {' '}Solutions{' '}
              </span>
              for Tomorrow
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve problems that are impossible for classical computers. 
              Our quantum computing solutions open new frontiers in computation, security, and optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore Quantum Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From quantum algorithms to hybrid quantum-classical systems, we offer comprehensive 
              quantum computing solutions that push the boundaries of what's possible.
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
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Capabilities */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our expertise spans the full spectrum of quantum computing technologies, 
              from quantum algorithms to quantum hardware integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quantum computing is transforming industries across the board. 
              Discover how your sector can benefit from quantum solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Building className="w-6 h-6 text-purple-400" />
                  <span>{useCase.industry}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {useCase.applications.map((application) => (
                    <div key={application} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Quantum computing represents the next frontier in computational power, 
                offering capabilities that are simply impossible with classical computers.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <Star className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-400/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Quantum Advantage
                  </h3>
                  <div className="space-y-4 text-center">
                    <div className="text-3xl font-bold text-purple-400">1000x</div>
                    <div className="text-gray-300">Faster than classical computers</div>
                    <div className="text-3xl font-bold text-purple-400">∞</div>
                    <div className="text-gray-300">Unlimited potential applications</div>
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-gray-300">Future-proof technology</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Quantum Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Quantum computing is not just the future—it's happening now. 
              Let's discuss how quantum solutions can transform your business and give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule a Quantum Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingPage;