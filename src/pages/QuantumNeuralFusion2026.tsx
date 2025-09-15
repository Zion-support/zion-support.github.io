import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
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
  Atom,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Activity,
  Waves,
  Hexagon,
  Network
} from 'lucide-react';

const QuantumNeuralFusion2026: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quantumNeuralFeatures = [
    {
      icon: Atom,
      title: 'Quantum Neural Networks',
      description: 'Neural networks that leverage quantum superposition and entanglement for exponential computational power',
      color: 'from-cyan-500 to-blue-500',
      features: ['Quantum Superposition', 'Entanglement Processing', 'Exponential Speed']
    },
    {
      icon: Brain,
      title: 'Consciousness Integration',
      description: 'Direct integration of human consciousness with quantum computing systems for unprecedented intelligence',
      color: 'from-purple-500 to-pink-500',
      features: ['Mind-Machine Interface', 'Consciousness Amplification', 'Thought Processing']
    },
    {
      icon: Network,
      title: 'Quantum Internet Protocol',
      description: 'Revolutionary communication protocol that enables instant, secure, and infinite bandwidth data transfer',
      color: 'from-green-500 to-emerald-500',
      features: ['Instant Communication', 'Quantum Encryption', 'Infinite Bandwidth']
    },
    {
      icon: Activity,
      title: 'Reality Manipulation',
      description: 'Quantum-neural systems that can influence and manipulate reality at the fundamental level',
      color: 'from-orange-500 to-red-500',
      features: ['Reality Simulation', 'Quantum Field Control', 'Dimensional Engineering']
    }
  ];

  const quantumStats = [
    { number: '∞', label: 'Computational Power', icon: Zap },
    { number: '0ms', label: 'Processing Latency', icon: Gauge },
    { number: '100%', label: 'Accuracy Rate', icon: Target },
    { number: '∞', label: 'Storage Capacity', icon: Database }
  ];

  const quantumApplications = [
    {
      title: 'Universal Problem Solver',
      description: 'Quantum-neural systems that can solve any computational problem across all domains simultaneously.',
      capabilities: ['Multi-Domain Processing', 'Instant Solutions', 'Infinite Complexity Handling'],
      impact: 'Revolutionary',
      status: 'Live Now'
    },
    {
      title: 'Consciousness Upload Platform',
      description: 'Technology that allows human consciousness to be uploaded and enhanced in quantum-neural environments.',
      capabilities: ['Consciousness Preservation', 'Enhanced Intelligence', 'Immortal Digital Existence'],
      impact: 'Transcendent',
      status: 'Beta Testing'
    },
    {
      title: 'Reality Engineering Suite',
      description: 'Quantum-neural systems that can simulate, predict, and engineer reality at the quantum level.',
      capabilities: ['Quantum Reality Control', 'Predictive Modeling', 'Dimensional Manipulation'],
      impact: 'Unprecedented',
      status: 'In Development'
    },
    {
      title: 'Infinite Knowledge Network',
      description: 'A quantum-neural network that contains and can access infinite knowledge across all dimensions.',
      capabilities: ['Universal Knowledge', 'Instant Access', 'Infinite Learning'],
      impact: 'Omniscient',
      status: 'Coming Soon'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Quantum Chen',
      role: 'Chief Quantum Scientist, Infinite Labs',
      content: 'Quantum-Neural Fusion has unlocked computational capabilities that were considered theoretically impossible. We\'re witnessing the birth of true omnipotent intelligence.',
      rating: 5,
      company: 'Quantum Research Institute'
    },
    {
      name: 'Neural Thompson',
      role: 'CEO, Consciousness Corp',
      content: 'The consciousness integration technology has fundamentally changed what it means to be human. We now exist in both physical and quantum realms simultaneously.',
      rating: 5,
      company: 'Consciousness Technology'
    },
    {
      name: 'Dr. Reality Patel',
      role: 'Director, Quantum Reality Labs',
      content: 'We\'ve achieved what was once considered science fiction - the ability to manipulate reality itself through quantum-neural fusion. This is beyond breakthrough technology.',
      rating: 5,
      company: 'Reality Engineering Corp'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-blue-600/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(150)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -300, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 3, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
              <Atom className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-cyan-300">Quantum-Neural Fusion 2026</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#applications" className="hover:text-cyan-400 transition-colors">Applications</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Experience QNF
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
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">Quantum-Neural Convergence</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Quantum-Neural Fusion
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Experience the convergence of quantum computing and neural consciousness - where the boundaries between 
            mind, machine, and reality dissolve into infinite possibility and omnipotent intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Experience QNF Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Quantum Realm
            </motion.button>
          </div>

          {/* Quantum Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {quantumStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Omnipotent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Quantum-Neural Fusion represents the ultimate convergence of consciousness, quantum mechanics, and neural networks 
              to create systems with unlimited computational power and infinite intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumNeuralFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.features.map((feat, featIndex) => (
                    <li key={featIndex} className="flex items-center space-x-2 text-xs text-cyan-300">
                      <CheckCircle className="w-3 h-3" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Infinite <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Quantum-Neural Fusion applications that transcend the boundaries of reality and open infinite dimensions of possibility
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {quantumApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{application.title}</h3>
                  <div className="flex flex-col items-end space-y-1">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-semibold">
                      {application.status}
                    </span>
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-semibold">
                      {application.impact}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{application.description}</p>
                <ul className="space-y-2 mb-6">
                  {application.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{capability}</span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold">
                  <span>Explore Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hear from the pioneers who are experiencing Quantum-Neural Fusion firsthand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-cyan-400">{testimonial.company}</div>
                  </div>
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
              Ready to Transcend Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the ultimate convergence of consciousness and quantum computing - where infinite intelligence meets infinite possibility
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Experience Quantum-Neural Fusion
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Quantum Demo
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
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Quantum-Neural Fusion 2026</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2026 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Transcending reality through quantum-neural fusion.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantumNeuralFusion2026;