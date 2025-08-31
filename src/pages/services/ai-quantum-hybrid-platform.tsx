import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Zap, Cpu, Database, Network, 
  BarChart3, CheckCircle, ArrowRight, Play, 
  Download, BookOpen, MessageCircle, Phone,
  Quantum, Circuit, Globe, Server, Shield
} from 'lucide-react';

const AIQuantumHybridPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Leverage quantum bits for exponential computational power',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamless integration of classical and quantum AI algorithms',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Circuit,
      title: 'Hybrid Architecture',
      description: 'Optimized workflows combining quantum and classical computing',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Ultra-fast computation for complex problem solving',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const capabilities = [
    'Quantum machine learning',
    'Optimization algorithms',
    'Cryptography and security',
    'Financial modeling',
    'Drug discovery',
    'Climate modeling',
    'Logistics optimization',
    'Quantum simulation'
  ];

  const benefits = [
    {
      title: 'Computational Speed',
      value: '1000x',
      description: 'Faster than classical computing'
    },
    {
      title: 'Problem Solving',
      value: '100x',
      description: 'Complex problem resolution'
    },
    {
      title: 'Energy Efficiency',
      value: '90%',
      description: 'Lower power consumption'
    },
    {
      title: 'Accuracy',
      value: '99.9%',
      description: 'Precision in calculations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Atom className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Quantum <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Hybrid Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The future of computing is here. Our AI Quantum Hybrid Platform combines 
              the power of quantum computing with artificial intelligence to solve 
              previously impossible problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="px-8 py-4 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Platform Features</h2>
            <p className="text-xl text-gray-300">Combining quantum and classical computing for unprecedented power</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quantum-Classical Capabilities</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our hybrid platform provides unprecedented computational power for 
                solving the most complex problems in science, finance, and industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.value}</div>
                      <div className="text-sm text-gray-300">{benefit.title}</div>
                      <div className="text-xs text-gray-400 mt-1">{benefit.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready for the Quantum Future?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and solve problems that were once impossible. 
              Our hybrid platform is the bridge to the future of computing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-gray-300">Complete setup guides</p>
              </div>
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Expert assistance</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Demo</h3>
                <p className="text-gray-300">See it in action</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumHybridPlatform;