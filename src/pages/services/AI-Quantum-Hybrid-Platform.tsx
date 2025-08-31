import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Network,
  Clock,
  Star,
  Rocket,
  Target,
  Lightbulb,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Cpu,
  Cloud
} from 'lucide-react';

export default function AIQuantumHybridPlatform() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing Integration",
      description: "Seamlessly integrate quantum algorithms with classical AI for unprecedented computational power"
    },
    {
      icon: Brain,
      title: "Hybrid AI Models",
      description: "Advanced neural networks that leverage both classical and quantum computing paradigms"
    },
    {
      icon: Zap,
      title: "Quantum-Classical Optimization",
      description: "Optimize complex problems using quantum annealing and classical machine learning"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography and quantum-resistant encryption protocols"
    }
  ];

  const benefits = [
    "Solve previously intractable problems 1000x faster",
    "Achieve quantum advantage in specific domains",
    "Future-proof your applications against quantum threats",
    "Enable breakthroughs in drug discovery and materials science",
    "Optimize complex logistics and supply chains",
    "Accelerate financial modeling and risk assessment"
  ];

  const useCases = [
    {
      title: "Drug Discovery",
      description: "Quantum-enhanced molecular simulation for pharmaceutical research",
      icon: Cpu
    },
    {
      title: "Financial Modeling",
      description: "Quantum algorithms for portfolio optimization and risk assessment",
      icon: BarChart3
    },
    {
      title: "Materials Science",
      description: "Quantum chemistry simulations for new material development",
      icon: Atom
    },
    {
      title: "Logistics Optimization",
      description: "Quantum-classical hybrid solutions for complex routing problems",
      icon: Network
    }
  ];

  const quantumCapabilities = [
    "Quantum Machine Learning",
    "Quantum Neural Networks",
    "Quantum Annealing",
    "Quantum Error Correction",
    "Quantum-Classical Hybrid Algorithms",
    "Post-Quantum Cryptography"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Next-Generation Computing
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">Quantum Hybrid Platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of computing with our revolutionary AI-Quantum hybrid platform. 
              Combine the power of artificial intelligence with quantum computing to solve previously impossible problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Quantum Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing with advanced AI for unprecedented capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Quantum AI?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience exponential performance improvements and solve previously impossible problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Speed Improvement</span>
                  <span className="text-purple-400 font-bold">1000x+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Problem Complexity</span>
                  <span className="text-blue-400 font-bold">Exponential</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Accuracy</span>
                  <span className="text-cyan-400 font-bold">99.9%+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Future-Proof</span>
                  <span className="text-green-400 font-bold">100%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Quantum AI Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform industries with quantum-enhanced artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Capabilities Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced quantum technologies integrated with classical AI systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumCapabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Atom className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{capability}</h3>
                  <p className="text-gray-300">State-of-the-art quantum technology</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge quantum and classical computing technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Quantum Processors", icon: Microchip, description: "IBM, Google, and custom quantum hardware" },
              { name: "AI Frameworks", icon: Brain, description: "TensorFlow, PyTorch, and quantum ML libraries" },
              { name: "Cloud Infrastructure", icon: Cloud, description: "AWS, Azure, and quantum cloud services" },
              { name: "Security Protocols", icon: Shield, description: "Post-quantum cryptography standards" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready for the Quantum Future?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-Quantum hybrid platform and solve previously impossible problems
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Quantum AI Assessment
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}