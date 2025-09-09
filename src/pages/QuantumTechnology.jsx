import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Zap, 
  Shield, 
  Brain, 
  Cpu, 
  Eye, 
  Target, 
  Rocket, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Cog,
  Microchip,
  Globe,
  Users,
  BarChart3
} from 'lucide-react';

export default function QuantumTechnology() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedUseCase, setSelectedUseCase] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'services', label: 'Services', icon: Cog },
    { id: 'use-cases', label: 'Use Cases', icon: Target },
    { id: 'technologies', label: 'Technologies', icon: Microchip },
    { id: 'benefits', label: 'Benefits', icon: Star }
  ];

  const quantumServices = [
    {
      icon: Atom,
      title: "Quantum Neural Networks",
      description: "Next-generation neural networks powered by quantum computing principles",
      features: ["Quantum Superposition", "Entanglement Processing", "Quantum Memory", "Faster Training"],
      path: "/quantum-neural-network-platform"
    },
    {
      icon: Cpu,
      title: "Quantum Computing Solutions",
      description: "Access to quantum computing resources for complex problem solving",
      features: ["Quantum Algorithms", "Cloud Access", "Expert Consultation", "Custom Development"],
      path: "/quantum-computing"
    },
    {
      icon: Globe,
      title: "Quantum Edge Computing",
      description: "Distributed quantum computing at the edge for real-time processing",
      features: ["Low Latency", "High Performance", "Scalable Architecture", "Edge Optimization"],
      path: "/quantum-edge-computing-platform"
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum mechanical principles",
      features: ["Quantum Key Distribution", "Post-Quantum Security", "Quantum Random Numbers", "Future-Proof Encryption"],
      path: "/quantum-cryptography"
    },
    {
      icon: Zap,
      title: "Quantum Financial Trading",
      description: "Advanced trading algorithms leveraging quantum computing power",
      features: ["Risk Assessment", "Portfolio Optimization", "Market Prediction", "High-Frequency Trading"],
      path: "/quantum-financial-trading"
    },
    {
      icon: Brain,
      title: "Quantum AI Integration",
      description: "Seamless integration of quantum computing with artificial intelligence",
      features: ["Hybrid Systems", "Quantum ML", "Optimization", "Pattern Recognition"],
      path: "/quantum-ai-integration"
    }
  ];

  const applications = [
    {
      icon: Rocket,
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular modeling"
    },
    {
      icon: Target,
      title: "Optimization",
      description: "Solve complex optimization problems in logistics and manufacturing"
    },
    {
      icon: Users,
      title: "Machine Learning",
      description: "Enhance AI capabilities with quantum-enhanced algorithms"
    },
    {
      icon: BarChart3,
      title: "Financial Modeling",
      description: "Advanced risk assessment and portfolio optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Atom className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of quantum mechanics to solve the world's most complex problems. 
                Our quantum technology solutions are revolutionizing industries from finance to healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                  Get Started
                </Link>
                <button className="px-8 py-4 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-zinc-800/50 text-zion-slate-light hover:bg-zinc-700/50 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Quantum Technology Overview</h2>
                <p className="text-xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                  Quantum technology represents the next frontier in computing, cryptography, and artificial intelligence. 
                  By leveraging the principles of quantum mechanics, we can process information in ways that were previously impossible, 
                  opening new possibilities for solving complex problems across industries.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {applications.map((app, index) => (
                    <motion.div
                      key={app.title}
                      className="bg-zinc-800/50 rounded-lg p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <app.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-white font-semibold mb-2">{app.title}</h3>
                      <p className="text-zion-slate-light text-sm">{app.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'services' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white text-center mb-12">Our Quantum Services</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {quantumServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      className="bg-zinc-800/50 rounded-lg p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-8 h-8 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                          <p className="text-zion-slate-light mb-4">{service.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-zion-slate-light">{feature}</span>
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

            {activeTab === 'use-cases' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Quantum Use Cases</h2>
                <p className="text-xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                  Discover how quantum technology is transforming industries and solving real-world problems.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {applications.map((app, index) => (
                    <motion.div
                      key={app.title}
                      className="bg-zinc-800/50 rounded-lg p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <app.icon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-white font-semibold text-xl mb-3">{app.title}</h3>
                      <p className="text-zion-slate-light mb-4">{app.description}</p>
                      <Link to="/contact" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'technologies' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Quantum Technologies</h2>
                <p className="text-xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                  Explore the cutting-edge quantum technologies that power our solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: Atom, title: "Quantum Computing", desc: "Superposition and entanglement-based computation" },
                    { icon: Shield, title: "Quantum Cryptography", desc: "Unbreakable encryption using quantum principles" },
                    { icon: Brain, title: "Quantum Machine Learning", desc: "AI enhanced with quantum algorithms" },
                    { icon: Globe, title: "Quantum Networks", desc: "Secure quantum communication networks" },
                    { icon: Zap, title: "Quantum Sensors", desc: "Ultra-sensitive quantum measurement devices" },
                    { icon: Cpu, title: "Quantum Processors", desc: "Specialized quantum processing units" }
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.title}
                      className="bg-zinc-800/50 rounded-lg p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <tech.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-white font-semibold mb-2">{tech.title}</h3>
                      <p className="text-zion-slate-light text-sm">{tech.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'benefits' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Quantum Technology Benefits</h2>
                <p className="text-xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                  Discover the transformative benefits that quantum technology brings to your business.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: TrendingUp, title: "Exponential Performance", desc: "Solve problems that are impossible for classical computers" },
                    { icon: Shield, title: "Unbreakable Security", desc: "Quantum-resistant cryptography for future-proof protection" },
                    { icon: Brain, title: "Advanced AI", desc: "Enhanced machine learning with quantum algorithms" },
                    { icon: Rocket, title: "Innovation Leadership", desc: "Stay ahead of the competition with cutting-edge technology" }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      className="bg-zinc-800/50 rounded-lg p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <benefit.icon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-white font-semibold text-xl mb-3">{benefit.title}</h3>
                      <p className="text-zion-slate-light">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Go Quantum?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and discover how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform">
                Get Started Today
              </Link>
              <Link to="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}