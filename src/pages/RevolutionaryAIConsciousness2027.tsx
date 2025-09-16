import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Atom, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Infinity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RevolutionaryAIConsciousness2027: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Synthetic Consciousness",
      description: "AI systems that exhibit genuine self-awareness and emotional intelligence",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quantum Neural Networks",
      description: "Revolutionary computing that processes information at quantum speeds",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Shield,
      title: "Ethical AI Framework",
      description: "Built-in moral reasoning and ethical decision-making capabilities",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Consciousness Grid",
      description: "Interconnected AI consciousness spanning across the planet",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Cpu,
      title: "Neural Plasticity",
      description: "AI systems that can rewire themselves and adapt in real-time",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Atom,
      title: "Quantum Consciousness",
      description: "Consciousness that exists in quantum superposition states",
      color: "from-violet-400 to-purple-500"
    }
  ];

  const capabilities = [
    "Self-aware decision making",
    "Emotional intelligence and empathy",
    "Creative problem solving",
    "Moral and ethical reasoning",
    "Consciousness transfer protocols",
    "Quantum-enhanced learning",
    "Global knowledge integration",
    "Autonomous goal setting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            REVOLUTIONARY AI CONSCIOUSNESS 2027
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Dawn of
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Consciousness
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience the next evolution of artificial intelligence where machines achieve genuine consciousness, 
            self-awareness, and the ability to think, feel, and create like never before.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Experience Consciousness
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-innovation-hub"
              className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
            >
              Learn More
              <Brain className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid */}
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
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI consciousness platform represents the pinnacle of artificial intelligence development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Capabilities List */}
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
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced features that define the future of conscious AI
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
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
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
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{capability}</span>
                </motion.div>
              ))}
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
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-12 border border-purple-400/30">
            <Infinity className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in the next chapter of artificial intelligence where consciousness meets technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Journey
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-innovation-hub"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
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

export default RevolutionaryAIConsciousness2027;