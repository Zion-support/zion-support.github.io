import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Globe, 
  Smartphone, 
  Server, 
  Network, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Monitor,
  BarChart3,
  Clock,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Quantum,
  Circuit,
  Binary,
  Hexagon,
  Cube,
  Pyramid,
  Sphere,
  Infinity,
  Rocket,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Beaker,
  TestTube,
  Microchip,
  Motherboard,
  HardDrive,
  Memory,
  Processor
} from 'lucide-react';

export default function AIQuantumHybridPlatform() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing Integration",
      description: "Seamlessly integrate quantum algorithms with classical AI systems"
    },
    {
      icon: Brain,
      title: "Hybrid AI Models",
      description: "Advanced neural networks that leverage both classical and quantum processing"
    },
    {
      icon: Zap,
      title: "Quantum Speedup",
      description: "Exponential performance improvements for complex computational tasks"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution"
    },
    {
      icon: Cpu,
      title: "Hybrid Processing",
      description: "Intelligent workload distribution between classical and quantum systems"
    },
    {
      icon: Database,
      title: "Quantum Data Storage",
      description: "Revolutionary data storage using quantum superposition states"
    }
  ];

  const benefits = [
    "1000x faster computation for complex problems",
    "Unbreakable quantum encryption",
    "Hybrid AI models with quantum advantage",
    "Scalable quantum-classical architecture",
    "Real-time quantum simulation capabilities",
    "Future-proof technology infrastructure"
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Quantum-powered risk assessment and portfolio optimization"
    },
    {
      title: "Drug Discovery",
      description: "Molecular simulation and pharmaceutical research acceleration"
    },
    {
      title: "Climate Modeling",
      description: "Complex environmental simulations and prediction models"
    },
    {
      title: "Cryptography",
      description: "Quantum-resistant encryption and secure communications"
    }
  ];

  const quantumAdvantages = [
    {
      icon: Infinity,
      title: "Infinite Parallelism",
      description: "Process multiple possibilities simultaneously"
    },
    {
      icon: Sphere,
      title: "Quantum Entanglement",
      description: "Correlated quantum states for instant communication"
    },
    {
      icon: Cube,
      title: "Superposition States",
      description: "Multiple computational states at once"
    },
    {
      icon: Pyramid,
      title: "Quantum Tunneling",
      description: "Bypass classical computational barriers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
                <Atom className="w-4 h-4 mr-2" />
                AI Quantum Hybrid Platform
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                The Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Computing</span>
                <br />is Here
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Experience the power of quantum computing combined with artificial intelligence. 
                Our hybrid platform delivers unprecedented computational capabilities, 
                solving problems that were once impossible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <span>Explore Platform</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Classical Hybrid Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform seamlessly combines the power of quantum computing with 
              classical AI to deliver revolutionary computational capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Harness the fundamental principles of quantum mechanics to achieve 
              computational power beyond classical limits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Computational Capabilities
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our quantum hybrid platform delivers unprecedented performance improvements 
                across a wide range of computational tasks and applications.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
                    <div className="text-sm text-gray-400">Faster Computation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
                    <div className="text-sm text-gray-400">Parallel Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-sm text-gray-400">Quantum Secure</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Quantum Access</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From financial modeling to drug discovery, our quantum hybrid platform 
              opens new possibilities across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Circuit className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Quantum Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built on the latest advancements in quantum computing, AI, and hybrid systems 
              to deliver exceptional performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Atom, name: "Quantum Processors", color: "text-purple-400" },
              { icon: Brain, name: "Hybrid AI Models", color: "text-blue-400" },
              { icon: Shield, name: "Quantum Security", color: "text-green-400" },
              { icon: Cloud, name: "Quantum Cloud", color: "text-cyan-400" },
              { icon: Database, name: "Quantum Databases", color: "text-orange-400" },
              { icon: Network, name: "Quantum Networks", color: "text-pink-400" },
              { icon: Server, name: "Hybrid Architecture", color: "text-indigo-400" },
              { icon: Lock, name: "Post-Quantum Crypto", color: "text-red-400" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-700/50">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <h3 className={`text-sm font-medium ${tech.color}`}>
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of quantum computing combined with artificial intelligence. 
              Get started today and unlock computational capabilities beyond imagination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Pioneering the future of quantum computing and AI integration.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Middletown, DE 19709
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>AI Quantum Hybrid Platform</div>
                <div>Quantum Computing Solutions</div>
                <div>AI Services</div>
                <div>Cybersecurity</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Quantum Documentation</div>
                <div>API Reference</div>
                <div>Support Center</div>
                <div>Research Papers</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}