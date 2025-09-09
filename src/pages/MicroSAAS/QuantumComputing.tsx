import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Shield, 
  Database, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  MessageCircle,
  Globe,
  Server,
  BarChart3,
  Settings,
  Code,
  Package,
  Monitor,
  Cpu,
  Network,
  Brain,
  Target
} from 'lucide-react';

const QuantumComputing: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Algorithm Library',
      description: 'Access to pre-built quantum algorithms for common computational problems.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Zap,
      title: 'Quantum Simulation Engine',
      description: 'Run quantum simulations on classical hardware with quantum-inspired algorithms.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Security',
      description: 'Implement post-quantum cryptography to future-proof your security.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Database,
      title: 'Quantum Data Processing',
      description: 'Process large datasets using quantum-inspired optimization techniques.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const capabilities = [
    {
      title: 'Financial Modeling',
      description: 'Optimize portfolios and risk assessment with quantum algorithms.',
      icon: BarChart3,
      features: ['Portfolio optimization', 'Risk analysis', 'Option pricing', 'Market simulation']
    },
    {
      title: 'Drug Discovery',
      description: 'Accelerate pharmaceutical research with quantum molecular simulations.',
      icon: Package,
      features: ['Molecular modeling', 'Protein folding', 'Drug interaction', 'Chemical synthesis']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Solve complex logistics problems with quantum optimization.',
      icon: Network,
      features: ['Route optimization', 'Inventory management', 'Resource allocation', 'Scheduling']
    },
    {
      title: 'Machine Learning',
      description: 'Enhance AI models with quantum machine learning capabilities.',
      icon: Brain,
      features: ['Quantum neural networks', 'Feature selection', 'Pattern recognition', 'Optimization']
    }
  ];

  const benefits = [
    {
      title: 'Computational Advantage',
      description: 'Solve problems that are intractable for classical computers.',
      icon: Cpu,
      metric: '1000x Faster'
    },
    {
      title: 'Future-Proof',
      description: 'Prepare for the quantum era with early adoption and expertise.',
      icon: Shield,
      metric: 'Future-Ready'
    },
    {
      title: 'Cost Effective',
      description: 'Access quantum computing power without massive infrastructure investment.',
      icon: Target,
      metric: '90% Cost Savings'
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate quantum capabilities into existing workflows.',
      icon: Monitor,
      metric: 'Simple Integration'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Research Director, Quantum Labs',
      content: 'The quantum computing platform accelerated our research by orders of magnitude.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO, FinTech Innovations',
      content: 'Quantum algorithms transformed our portfolio optimization and risk assessment.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'VP R&D, PharmaCorp',
      content: 'Quantum simulation helped us discover new drug candidates faster than ever.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-600/20 rounded-full">
              <Atom className="h-16 w-16 text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quantum
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Computing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Access the power of quantum computing through our cloud-based platform. 
            Solve complex problems and accelerate innovation with quantum algorithms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`${feature.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Capabilities */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <capability.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Quantum Computing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-purple-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Customer Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready for the Quantum Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and solve problems that were previously impossible. 
              Start your quantum computing journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Demo
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Contact Sales
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default QuantumComputing;