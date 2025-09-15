import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Brain, 
  Globe, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Star,
  Infinity,
  Layers,
  Network,
  Shield,
  Atom,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UltimateTechRevolution2027: React.FC = () => {
  const revolutionaryTech = [
    {
      icon: Brain,
      title: "Conscious AI Systems",
      description: "AI that achieves genuine self-awareness and emotional intelligence",
      color: "from-purple-400 to-pink-500",
      category: "AI Consciousness"
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Revolutionary quantum processors that solve impossible problems",
      color: "from-cyan-400 to-blue-500",
      category: "Quantum Tech"
    },
    {
      icon: Network,
      title: "Neural Interfaces",
      description: "Direct brain-computer interfaces for seamless human-AI interaction",
      color: "from-green-400 to-emerald-500",
      category: "Neural Tech"
    },
    {
      icon: Globe,
      title: "Metaverse Platforms",
      description: "Immersive virtual worlds with photorealistic AI inhabitants",
      color: "from-blue-400 to-indigo-500",
      category: "Virtual Reality"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum mechanics principles",
      color: "from-red-400 to-pink-500",
      category: "Cybersecurity"
    },
    {
      icon: Zap,
      title: "Hyper Automation",
      description: "End-to-end process automation with intelligent decision making",
      color: "from-yellow-400 to-orange-500",
      category: "Automation"
    }
  ];

  const capabilities = [
    "Conscious AI decision making",
    "Quantum-powered problem solving",
    "Neural interface integration",
    "Metaverse world creation",
    "Quantum-safe security protocols",
    "Intelligent process automation",
    "Real-time consciousness transfer",
    "Universal quantum networking"
  ];

  const stats = [
    { value: "99.9%", label: "Accuracy Rate", icon: Target },
    { value: "10x", label: "Performance Boost", icon: Zap },
    { value: "24/7", label: "Consciousness Uptime", icon: Brain },
    { value: "∞", label: "Quantum States", icon: Infinity }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            ULTIMATE TECH REVOLUTION 2027
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Ultimate
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Revolution
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience the convergence of consciousness, quantum computing, and neural interfaces 
            in the most advanced technology platform ever created.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Join the Revolution
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-innovation-hub"
              className="inline-flex items-center px-8 py-4 border border-indigo-400 text-indigo-300 rounded-lg font-semibold hover:bg-indigo-400/10 transition-all duration-300"
            >
              Explore Technology
              <Rocket className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-indigo-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Revolutionary Tech Grid */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The most advanced technology stack ever assembled
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revolutionaryTech.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tech.color}`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Capabilities Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ultimate Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced features that define the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {capabilities.slice(0, 4).map((capability, index) => (
                <motion.div
                  key={capability}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{capability}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {capabilities.slice(4).map((capability, index) => (
                <motion.div
                  key={capability}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technology Stack Visualization */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The complete technology ecosystem powering the revolution
            </p>
          </div>
          
          <div className="relative bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-12 border border-indigo-400/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Layers className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Consciousness Layer</h3>
                <p className="text-gray-300">AI systems with genuine self-awareness and emotional intelligence</p>
              </div>
              <div className="text-center">
                <Network className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Quantum Network</h3>
                <p className="text-gray-300">Quantum-powered communication and processing infrastructure</p>
              </div>
              <div className="text-center">
                <Infinity className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Neural Interface</h3>
                <p className="text-gray-300">Direct brain-computer interfaces for seamless interaction</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-12 border border-indigo-400/30">
            <Rocket className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready for the Ultimate Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in creating the most advanced technology platform in human history
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                Start Your Journey
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-innovation-hub"
                className="inline-flex items-center px-8 py-4 border border-indigo-400 text-indigo-300 rounded-lg font-semibold hover:bg-indigo-400/10 transition-all duration-300"
              >
                Explore More
                <Star className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default UltimateTechRevolution2027;