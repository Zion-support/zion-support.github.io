import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Eye, Hand, Heart, Cpu } from 'lucide-react';

const NeuralInterfaceRevolution2026 = () => {
  const interfaceFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Direct Brain-Computer Interface",
      description: "Seamless communication between human thoughts and digital systems, enabling control through pure mental commands.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Neural Signal Processing",
      description: "Advanced algorithms that decode neural patterns in real-time, translating thoughts into digital actions instantly.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Neural Enhancement",
      description: "Augmented reality directly integrated into the visual cortex, overlaying digital information onto natural sight.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: "Tactile Feedback Systems",
      description: "Haptic interfaces that provide realistic touch sensations for virtual objects and remote manipulation.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional State Monitoring",
      description: "Continuous monitoring of emotional and cognitive states to optimize human-AI interaction and well-being.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Cognitive Enhancement",
      description: "Neural implants that enhance memory, processing speed, and cognitive abilities beyond natural human limits.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const revolutionStats = [
    { number: "99.8%", label: "Accuracy", description: "Neural signal interpretation accuracy for seamless brain-computer communication" },
    { number: "0.1ms", label: "Latency", description: "Ultra-low latency neural processing for real-time interaction" },
    { number: "10TB", label: "Data Rate", description: "Massive data transfer rates between brain and computer systems" },
    { number: "24/7", label: "Operation", description: "Continuous neural interface operation without fatigue or discomfort" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              The future of human-computer interaction is here. Direct neural interfaces that connect 
              your mind to digital systems, enabling unprecedented control and enhancement of human capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Experience Neural Control
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolution Stats */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {revolutionStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl border border-purple-500/30"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-purple-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interface Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Neural Interface Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary capabilities that bridge the gap between human consciousness and digital systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interfaceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Neural interfaces are transforming every aspect of human life, from medical rehabilitation 
              to creative expression, from education to entertainment. The possibilities are limitless.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-8 rounded-xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Medical Applications</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Restore movement for paralyzed patients</li>
                  <li>• Treat neurological disorders</li>
                  <li>• Enhance sensory perception</li>
                  <li>• Monitor brain health in real-time</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-8 rounded-xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Creative & Professional</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Direct thought-to-digital creation</li>
                  <li>• Enhanced learning and memory</li>
                  <li>• Remote control of devices</li>
                  <li>• Collaborative thinking networks</li>
                </ul>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300">
                Join the Neural Revolution
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;