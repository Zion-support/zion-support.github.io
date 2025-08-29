import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Atom, Brain, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Cpu, Network, Database, Cloud, Smartphone, Laptop, Server, Globe, Target, TrendingUp, Clock, RefreshCw, Eye, FileText, MessageSquare, Bell, Search, Filter, Download, Share, Star, Heart, ThumbsUp, ThumbsDown, AlertTriangle, Info, HelpCircle, ExternalLink, Phone, Mail, MapPin, UserCheck, Lock, Key, Fingerprint, Bug, AlertCircle, ShieldCheck, Globe2, LockKeyhole, ChartBar, PieChart, LineChart, ScatterPlot, Histogram, BellRing, AlertOctagon, CheckSquare, XCircle, Clock3, Calendar, User, Users2, UserPlus, UserMinus, UserX, UserCheck2, UserClock, UserCog, UserEdit, UserSearch, UserVoice, UserCheck3, UserX2, UserMinus2, UserPlus2, UserCheck4, UserX3, UserMinus3, UserPlus3, UserCheck5, UserX4, UserMinus4, UserPlus4, UserCheck6, UserX5, UserMinus5, UserPlus5, UserCheck7, UserX6, UserMinus6, UserPlus6, UserCheck8, UserX7, UserMinus7, UserPlus7, UserCheck9, UserX8, UserMinus8, UserPlus8, UserCheck10, UserX9, UserMinus9, UserPlus9 } from 'lucide-react';

export default function QuantumAIPlatform() {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Computing Power',
      description: 'Access to quantum processors with exponential computational capabilities for complex problem solving',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI-Quantum Hybrid',
      description: 'Seamless integration of classical AI with quantum algorithms for enhanced machine learning',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Quantum Speedup',
      description: 'Achieve quantum advantage with algorithms that solve problems exponentially faster than classical computers',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Security',
      description: 'Post-quantum cryptography and quantum-resistant encryption for future-proof security',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Collaborative Research',
      description: 'Multi-user quantum computing environment with shared resources and collaborative tools',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Quantum Analytics',
      description: 'Advanced analytics and visualization tools for quantum computing results and insights',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const services = [
    {
      title: 'Quantum Computing Access',
      description: 'Direct access to quantum processors with various qubit configurations and error correction',
      price: 'From $10,000/month',
      features: ['Quantum processor access', 'Error correction', 'Qubit management', 'Performance monitoring']
    },
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithm development and optimization for specific use cases',
      price: 'From $25,000',
      features: ['Algorithm design', 'Quantum optimization', 'Testing & validation', 'Documentation']
    },
    {
      title: 'Quantum AI Integration',
      description: 'Integration of quantum computing with existing AI and machine learning workflows',
      price: 'From $35,000',
      features: ['Hybrid workflows', 'API integration', 'Performance optimization', 'Training support']
    },
    {
      title: 'Quantum Research Platform',
      description: 'Full-featured research platform with advanced quantum computing capabilities',
      price: 'From $50,000/month',
      features: ['Research tools', 'Collaboration features', 'Advanced analytics', 'Dedicated support']
    }
  ];

  const quantumApplications = [
    {
      title: 'Financial Modeling',
      icon: TrendingUp,
      description: 'Quantum algorithms for portfolio optimization, risk assessment, and financial forecasting',
      features: ['Portfolio optimization', 'Risk modeling', 'Option pricing', 'Market simulation']
    },
    {
      title: 'Drug Discovery',
      icon: Microscope,
      description: 'Molecular simulation and drug discovery using quantum chemistry algorithms',
      features: ['Molecular modeling', 'Drug screening', 'Protein folding', 'Chemical simulation']
    },
    {
      title: 'Cryptography',
      icon: Lock,
      description: 'Quantum-safe cryptography and post-quantum encryption solutions',
      features: ['Post-quantum crypto', 'Key distribution', 'Encryption algorithms', 'Security protocols']
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      description: 'Quantum-enhanced machine learning with quantum neural networks and algorithms',
      features: ['Quantum ML', 'Neural networks', 'Feature selection', 'Model optimization']
    }
  ];

  const quantumTechnologies = [
    { name: 'Superconducting Qubits', icon: '⚡', status: 'Available', description: 'High-fidelity superconducting quantum processors' },
    { name: 'Trapped Ions', icon: '🔬', status: 'Available', description: 'Stable trapped ion quantum computers' },
    { name: 'Topological Qubits', icon: '🔺', status: 'Research', description: 'Fault-tolerant topological quantum computing' },
    { name: 'Photonic Quantum', icon: '💡', status: 'Available', description: 'Photon-based quantum computing systems' },
    { name: 'Quantum Annealing', icon: '❄️', status: 'Available', description: 'Optimization-focused quantum annealing' },
    { name: 'Hybrid Quantum-Classical', icon: '🔄', status: 'Available', description: 'Combined quantum and classical computing' }
  ];

  const useCases = [
    {
      title: 'Optimization Problems',
      description: 'Solve complex optimization problems in logistics, manufacturing, and operations',
      icon: Target,
      benefits: ['Exponential speedup', 'Better solutions', 'Cost reduction', 'Efficiency gains']
    },
    {
      title: 'Simulation & Modeling',
      description: 'Accurate simulation of quantum systems, materials, and chemical processes',
      icon: Microscope,
      benefits: ['High accuracy', 'Faster simulation', 'Complex modeling', 'Scientific breakthroughs']
    },
    {
      title: 'Cryptography & Security',
      description: 'Develop quantum-resistant encryption and secure communication protocols',
      icon: Shield,
      benefits: ['Future-proof security', 'Advanced encryption', 'Secure communications', 'Threat protection']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Enhance AI capabilities with quantum computing for better pattern recognition',
      icon: Brain,
      benefits: ['Improved AI performance', 'Better pattern recognition', 'Faster training', 'Enhanced accuracy']
    }
  ];

  const integrations = [
    { name: 'Python', icon: '🐍', category: 'Programming' },
    { name: 'Qiskit', icon: '🔮', category: 'Quantum Framework' },
    { name: 'Cirq', icon: '⚛️', category: 'Quantum Framework' },
    { name: 'PennyLane', icon: '🚀', category: 'Quantum ML' },
    { name: 'TensorFlow', icon: '🧠', category: 'Machine Learning' },
    { name: 'PyTorch', icon: '🔥', category: 'Machine Learning' },
    { name: 'Jupyter', icon: '📓', category: 'Development' },
    { name: 'AWS Braket', icon: '☁️', category: 'Cloud Platform' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum AI Platform - Zion Tech Group"
        description="Revolutionary quantum computing platform with AI integration. Solve complex problems exponentially faster with quantum advantage and advanced computational capabilities."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum AI Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Unlock the future of computing with quantum advantage and AI integration for solving previously impossible problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Quantum Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Quantum AI Features
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge quantum computing capabilities combined with artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-300">
              Access to the future of computing with comprehensive quantum solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Applications
            </h2>
            <p className="text-xl text-gray-300">
              Revolutionary applications that leverage quantum advantage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumApplications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{app.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Technologies */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Technologies
            </h2>
            <p className="text-xl text-gray-300">
              Access to multiple quantum computing architectures and technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quantumTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-colors"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="text-lg font-semibold text-white mb-2">{tech.name}</div>
                <div className="text-sm text-green-400 mb-3">{tech.status}</div>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Quantum Applications
            </h2>
            <p className="text-xl text-gray-300">
              See how quantum computing transforms industries and solves complex problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development & Integration Tools
            </h2>
            <p className="text-xl text-gray-300">
              Seamlessly integrate quantum computing into your existing workflows
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 text-center hover:border-purple-500/50 transition-colors"
              >
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm font-medium text-white">{integration.name}</div>
                <div className="text-xs text-gray-400">{integration.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Future of Computing
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and solve problems that were previously impossible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-colors text-lg font-semibold"
              >
                <Mail className="w-6 h-6 mr-2" />
                Get Quantum Consultation
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}