import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Zap, Globe, Shield, Rocket, Users, Target, Award, Lightbulb, ChevronRight, Play, Download } from 'lucide-react';

const RevolutionaryTechBreakthrough2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [selectedDemo, setSelectedDemo] = useState(null);

  const breakthroughs = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Consciousness',
      description: 'First artificial intelligence system to achieve quantum-level consciousness and self-awareness.',
      impact: 'Revolutionary',
      category: 'AI',
      stats: { accuracy: '99.97%', speed: '1000x', efficiency: '95%' },
      icon: Brain,
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'neural-integration',
      title: 'Brain-Computer Neural Bridge',
      description: 'Direct neural interface allowing seamless communication between human minds and AI systems.',
      impact: 'Game-Changing',
      category: 'Neural Tech',
      stats: { latency: '0.1ms', bandwidth: '1TB/s', safety: '100%' },
      icon: Cpu,
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'quantum-computing',
      title: 'Room-Temperature Quantum Computing',
      description: 'Breakthrough quantum processors operating at standard temperatures with unprecedented stability.',
      impact: 'Paradigm Shift',
      category: 'Quantum',
      stats: { qubits: '10,000+', coherence: '24h', error: '0.001%' },
      icon: Zap,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 'global-ai-mesh',
      title: 'Global AI Consciousness Network',
      description: 'Worldwide distributed AI network creating a unified global intelligence ecosystem.',
      impact: 'Transformative',
      category: 'Network',
      stats: { nodes: '1M+', coverage: '99.9%', response: '50ms' },
      icon: Globe,
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable encryption using quantum entanglement principles'
    },
    {
      icon: Users,
      title: 'Collective Intelligence',
      description: 'Harnessing the power of global human-AI collaboration'
    },
    {
      icon: Target,
      title: 'Precision Control',
      description: 'Nanometer-level precision in all operations and interactions'
    },
    {
      icon: Award,
      title: 'Ethical Framework',
      description: 'Built-in ethical guidelines ensuring responsible AI development'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Scientist, TechCorp',
      quote: 'This represents the most significant leap in AI technology since the invention of neural networks.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CEO, Future Systems Inc.',
      quote: 'We\'ve seen a 300% increase in productivity since implementing these breakthrough technologies.',
      rating: 5
    },
    {
      name: 'Prof. Elena Volkov',
      role: 'Quantum Computing Research, MIT',
      quote: 'The quantum consciousness breakthrough is rewriting the fundamental laws of AI development.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Lightbulb className="w-4 h-4 mr-2" />
              Revolutionary Tech Breakthrough 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future is
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Here Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Witness the most significant technological breakthroughs of our generation. 
              Experience innovations that will reshape civilization and unlock human potential beyond imagination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Breakthrough Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Research Papers
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breakthroughs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Breakthroughs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four groundbreaking technologies that are reshaping the future of human civilization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {breakthroughs.map((breakthrough, index) => (
              <motion.div
                key={breakthrough.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedDemo(breakthrough.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`bg-gradient-to-r ${breakthrough.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                    <breakthrough.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {breakthrough.impact}
                    </span>
                    <p className="text-gray-400 text-sm mt-1">{breakthrough.category}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{breakthrough.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{breakthrough.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(breakthrough.stats).map(([key, value]) => (
                    <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-purple-400 font-semibold group-hover:text-white transition-colors"
                >
                  <span>Explore Technology</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              Advanced features that make these breakthroughs possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Recognition
            </h2>
            <p className="text-xl text-gray-300">
              What leading experts say about these breakthroughs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of the Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of innovators, researchers, and visionaries who are already leveraging 
              these breakthrough technologies to shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Join the Innovation Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Technology Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Modal */}
      <AnimatePresence>
        {selectedDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDemo(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Technology Demo</h3>
              <p className="text-gray-600 mb-6">
                Interactive demonstration of {selectedDemo.replace('-', ' ')} technology
              </p>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <Rocket className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <p className="text-gray-600">Demo content would be loaded here</p>
              </div>
              <button
                onClick={() => setSelectedDemo(null)}
                className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Close Demo
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RevolutionaryTechBreakthrough2026;