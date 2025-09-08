import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Cpu, Brain, Shield, Users, Globe, Award, BarChart3, CheckCircle, Target, Database } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function QuantumEmergingTech() {
  const services = [
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Explore quantum algorithms and applications for optimization, cryptography, and simulation"
    },
    {
      icon: Brain,
      title: "Neuromorphic Computing",
      description: "Brain-inspired computing systems for AI and machine learning applications"
    },
    {
      icon: Cpu,
      title: "Edge AI",
      description: "AI processing at the edge for real-time decision making and reduced latency"
    },
    {
      icon: Zap,
      title: "5G & Next-Gen Networks",
      description: "Advanced networking solutions for ultra-fast connectivity and IoT applications"
    },
    {
      icon: Shield,
      title: "Post-Quantum Cryptography",
      description: "Future-proof cryptographic solutions resistant to quantum attacks"
    },
    {
      icon: Users,
      title: "Emerging Tech Strategy",
      description: "Strategic guidance on adopting and integrating cutting-edge technologies"
    }
  ];

  const benefits = [
    "Solve previously intractable computational problems",
    "Achieve exponential performance improvements",
    "Enable breakthrough scientific discoveries",
    "Create competitive advantages in your industry",
    "Future-proof your technology investments",
    "Access to cutting-edge research and development"
  ];

  const technologies = [
    {
      title: "Quantum Computing",
      description: "Leverage quantum mechanics for unprecedented computational power in optimization, cryptography, and simulation"
    },
    {
      title: "Neuromorphic Computing",
      description: "Brain-inspired hardware that processes information like neural networks for efficient AI applications"
    },
    {
      title: "Edge Computing",
      description: "Process data closer to the source for real-time insights and reduced network dependency"
    },
    {
      title: "Blockchain & DLT",
      description: "Distributed ledger technology for secure, transparent, and decentralized applications"
    }
  ];

  const capabilities = [
    "Quantum algorithm development and optimization",
    "Neuromorphic computing system design",
    "Edge AI implementation and optimization",
    "5G network architecture and deployment",
    "Post-quantum cryptography implementation",
    "Emerging technology strategy and consulting",
    "Research and development partnerships",
    "Technology readiness assessment and planning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum & Emerging Tech Services - Zion Tech Group"
        description="Explore the future of computing with our quantum computing, neuromorphic computing, and emerging technology services."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Future Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum & Emerging Tech
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Explore the cutting edge of technology with quantum computing, neuromorphic 
              computing, and other emerging technologies that will define the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Explore Technology
              </button>
              <button className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
                Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From quantum computing to neuromorphic systems, we help you explore 
              and implement the technologies of tomorrow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Explore Emerging Technologies?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Early adoption of emerging technologies provides significant advantages 
              and positions your organization for future success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These breakthrough technologies are reshaping industries and creating 
              new possibilities for innovation and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-slate-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technology Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with deep research expertise and cutting-edge development capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Shape the Future of Technology
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Be at the forefront of technological innovation with our emerging 
              technology expertise and strategic guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Explore Technologies
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}