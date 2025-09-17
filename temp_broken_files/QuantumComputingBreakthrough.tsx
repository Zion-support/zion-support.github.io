import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Brain, 
  Network,
  Lock,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';
const QuantumComputingBreakthrough: React.FC = () => {
  const breakthroughs = [
    {
      icon: Atom,
      title: "Quantum Supremacy Achieved",
      description: "Breakthrough in quantum computing that outperforms classical computers by orders of magnitude.",
      benefits: ["10,000x faster calculations", "Exponential speedup", "Real-world applications"],
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Brain,
      title: "Quantum AI Integration",
      description: "Revolutionary integration of quantum computing with artificial intelligence for unprecedented capabilities.",
      benefits: ["Enhanced AI reasoning", "Quantum neural networks", "Superhuman intelligence"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption systems based on quantum mechanics principles for ultimate security.",
      benefits: ["Unhackable encryption", "Quantum key distribution", "Future-proof security"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Quantum Data Processing",
      description: "Revolutionary data processing capabilities that can handle massive datasets in real-time.",
      benefits: ["Instant data analysis", "Parallel processing", "Unlimited scalability"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Network,
      title: "Quantum Internet",
      description: "Next-generation internet infrastructure powered by quantum entanglement and teleportation.",
      benefits: ["Instant communication", "Quantum teleportation", "Global quantum network"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Quantum Energy Solutions",
      description: "Revolutionary energy technologies harnessing quantum effects for clean, unlimited power.",
      benefits: ["Clean energy", "Unlimited power", "Zero emissions"],
      color: "from-teal-500 to-blue-500"
    }
  ];
  const applications = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research by simulating molecular interactions at quantum scale.",
      impact: "1000x faster drug development"
    },
    {
      title: "Climate Modeling",
      description: "Precise climate predictions using quantum simulations of atmospheric and oceanic systems.",
      impact: "Perfect weather forecasting"
    },
    {
      title: "Financial Optimization",
      description: "Revolutionary portfolio optimization and risk analysis using quantum algorithms.",
      impact: "Optimal investment strategies"
    },
    {
      title: "Material Science",
      description: "Design new materials with desired properties using quantum simulations.",
      impact: "Breakthrough materials"
    },
    {
      title: "Space Exploration",
      description: "Advanced propulsion systems and navigation using quantum technologies.",
      impact: "Interstellar travel"
    },
    {
      title: "Artificial Intelligence",
      description: "Next-generation AI systems with quantum-enhanced learning and reasoning capabilities.",
      impact: "Superintelligent AI"
    }
  ];
  const stats = [
    { icon: Zap, value: "1M+", label: "Qubits Processed" },
    { icon: Target, value: "99.9%", label: "Accuracy Rate" },
    { icon: TrendingUp, value: "1000x", label: "Performance Gain" },
    { icon: Globe, value: "Global", label: "Quantum Network" }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-medium">Quantum Breakthrough</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum Computing
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Breakthrough
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with revolutionary quantum technologies that will 
              transform every aspect of human civilization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Explore Quantum World
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-6 rounded-2xl border border-purple-500/20"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Breakthroughs Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Breakthroughs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the revolutionary quantum technologies that are reshaping the future of computing and human civilization.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breakthroughs.map((breakthrough, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${breakthrough.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <breakthrough.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {breakthrough.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {breakthrough.description}
                  </p>
                  <ul className="space-y-2">
                    {breakthrough.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-400">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Applications Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing is transforming industries and solving humanity's greatest challenges.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {application.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {application.description}
                </p>
                <div className="text-cyan-400 font-semibold">
                  {application.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Quantum Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the quantum computing breakthrough that will define the next century of human progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Start Quantum Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Contact Quantum Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default QuantumComputingBreakthrough;
