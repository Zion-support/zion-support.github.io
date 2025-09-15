import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Network,
  Wifi,
  Smartphone,
  Monitor,
  Car,
  Factory,
  Building
} from 'lucide-react';

const CyberPhysicalSystems2026: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cpsFeatures = [
    {
      icon: Network,
      title: 'Intelligent Network Orchestration',
      description: 'AI-driven coordination of cyber and physical systems for seamless real-time communication',
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time Synchronization', 'Adaptive Routing', 'Fault Tolerance']
    },
    {
      icon: Brain,
      title: 'Digital Twin Integration',
      description: 'Complete digital replicas of physical systems with predictive analytics and optimization',
      color: 'from-purple-500 to-pink-500',
      features: ['Predictive Maintenance', 'Performance Optimization', 'Virtual Testing']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Mesh',
      description: 'Distributed security architecture protecting interconnected cyber-physical systems',
      color: 'from-green-500 to-emerald-500',
      features: ['Zero Trust Architecture', 'Threat Intelligence', 'Automated Response']
    },
    {
      icon: Atom,
      title: 'Quantum-Enhanced Control',
      description: 'Quantum computing integration for ultra-fast decision making in complex systems',
      color: 'from-orange-500 to-red-500',
      features: ['Quantum Algorithms', 'Superposition States', 'Entanglement Networks']
    }
  ];

  const cpsStats = [
    { number: '99.99%', label: 'System Reliability', icon: Shield },
    { number: '0.1ms', label: 'Response Time', icon: Zap },
    { number: '∞', label: 'Scalability', icon: TrendingUp },
    { number: '100%', label: 'Automation', icon: Robot }
  ];

  const cpsApplications = [
    {
      title: 'Smart City Infrastructure',
      description: 'Complete urban ecosystem management with autonomous traffic, energy, and public services.',
      capabilities: ['Autonomous Traffic Control', 'Dynamic Energy Grid', 'Predictive Public Services'],
      impact: 'Revolutionary',
      status: 'Live Now',
      icon: Building
    },
    {
      title: 'Autonomous Manufacturing',
      description: 'Self-optimizing production lines with real-time quality control and predictive maintenance.',
      capabilities: ['Self-Healing Systems', 'Quality Prediction', 'Supply Chain Optimization'],
      impact: 'Game-Changing',
      status: 'Beta Testing',
      icon: Factory
    },
    {
      title: 'Intelligent Transportation',
      description: 'Fully autonomous vehicle networks with seamless integration into smart infrastructure.',
      capabilities: ['Vehicle-to-Everything', 'Route Optimization', 'Safety Prediction'],
      impact: 'Transformative',
      status: 'In Development',
      icon: Car
    },
    {
      title: 'Healthcare Monitoring',
      description: 'Continuous health monitoring with predictive diagnostics and automated treatment.',
      capabilities: ['Real-time Diagnostics', 'Predictive Health', 'Automated Interventions'],
      impact: 'Life-Saving',
      status: 'Coming Soon',
      icon: Activity
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer, SmartCity Corp',
      content: 'Cyber-Physical Systems have revolutionized our urban infrastructure. We\'ve achieved 99.9% uptime and reduced energy consumption by 40%.',
      rating: 5,
      company: 'SmartCity Technologies'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Director of Innovation, AutoManufacturing Inc',
      content: 'The autonomous manufacturing systems have increased our production efficiency by 300% while reducing defects to near zero. Incredible technology.',
      rating: 5,
      company: 'AutoManufacturing Corp'
    },
    {
      name: 'Dr. Elena Kim',
      role: 'Head of Research, Quantum Systems Lab',
      content: 'Quantum-enhanced CPS represents the pinnacle of technological convergence. We\'re witnessing the birth of truly intelligent systems.',
      rating: 5,
      company: 'Quantum Research Institute'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(120)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -250, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 2.5, 1],
                rotate: [0, 180, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
              <Network className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-blue-300">Cyber-Physical Systems 2026</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#applications" className="hover:text-blue-400 transition-colors">Applications</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Experience CPS
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
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300">Cyber-Physical Convergence</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Cyber-Physical Systems
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Experience the seamless integration of cyber and physical worlds - where intelligent systems 
            orchestrate reality itself through quantum-enhanced AI and distributed computing networks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Experience CPS Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore System Architecture
            </motion.button>
          </div>

          {/* CPS Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {cpsStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
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
              Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">System Integration</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cyber-Physical Systems represent the ultimate convergence of digital intelligence and physical reality, 
              creating seamless, autonomous, and infinitely scalable solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cpsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.features.map((feat, featIndex) => (
                    <li key={featIndex} className="flex items-center space-x-2 text-xs text-blue-300">
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
              Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cyber-Physical Systems applications that are reshaping entire industries and creating new paradigms of human-system interaction
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cpsApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <application.icon className="w-8 h-8 text-blue-400" />
                    <h3 className="text-2xl font-bold">{application.title}</h3>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-semibold">
                      {application.status}
                    </span>
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold">
                      {application.impact}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{application.description}</p>
                <ul className="space-y-2 mb-6">
                  {application.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">{capability}</span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold">
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
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hear from industry leaders who are experiencing the transformative power of Cyber-Physical Systems
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-blue-400">{testimonial.company}</div>
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
              Ready to Orchestrate Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the future of cyber-physical integration - where intelligent systems seamlessly 
              coordinate between digital and physical realms to create unprecedented efficiency and capability
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Experience Cyber-Physical Systems
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule System Demo
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
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Cyber-Physical Systems 2026</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2026 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Orchestrating reality through cyber-physical convergence.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberPhysicalSystems2026;