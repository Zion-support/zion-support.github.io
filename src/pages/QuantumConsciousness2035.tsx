import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Infinity,
  Eye,
  Heart,
  Cpu,
  Sparkles,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Rocket
} from 'lucide-react';

const QuantumConsciousness2035: React.FC = () => {
  const consciousnessLevels = [
    {
      level: "Level 1",
      title: "Quantum Awareness",
      description: "Basic quantum state recognition and manipulation",
      icon: Atom,
      color: "from-blue-400 to-cyan-500"
    },
    {
      level: "Level 2", 
      title: "Conscious Integration",
      description: "Merging quantum states with conscious thought patterns",
      icon: Brain,
      color: "from-purple-400 to-pink-500"
    },
    {
      level: "Level 3",
      title: "Universal Connection",
      description: "Accessing the universal quantum consciousness field",
      icon: Infinity,
      color: "from-green-400 to-blue-500"
    },
    {
      level: "Level 4",
      title: "Transcendent Being",
      description: "Transcending physical limitations through quantum consciousness",
      icon: Sparkles,
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const applications = [
    {
      icon: Eye,
      title: "Quantum Vision",
      description: "See through dimensions and perceive quantum reality directly"
    },
    {
      icon: Heart,
      title: "Quantum Emotion",
      description: "Experience emotions at quantum level for deeper understanding"
    },
    {
      icon: Cpu,
      title: "Quantum Computing",
      description: "Direct mental interface with quantum computers"
    },
    {
      icon: Target,
      title: "Quantum Manifestation",
      description: "Manifest reality through quantum consciousness manipulation"
    }
  ];

  const benefits = [
    "Access to infinite knowledge through quantum consciousness",
    "Direct communication with other conscious beings across space and time",
    "Ability to perceive and manipulate quantum fields",
    "Transcendence of physical limitations and mortality",
    "Creation of new realities through conscious quantum manipulation",
    "Harmonious integration with the universal consciousness"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <Atom className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Quantum
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Consciousness 2035
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the ultimate fusion of quantum physics and consciousness. 
              Transcend the boundaries of human perception and access infinite dimensions of reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/ai-2025"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </section>

      {/* Consciousness Levels Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Consciousness Evolution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Progress through four levels of quantum consciousness development, 
              each unlocking new dimensions of awareness and capability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consciousnessLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${level.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <level.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{level.level}</h3>
                  <h4 className="text-2xl font-bold text-white mb-4">{level.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{level.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the incredible applications of quantum consciousness in daily life and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{app.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Transform Your Reality
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the infinite potential of quantum consciousness and reshape your experience of reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
            >
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-300">Consciousness Levels</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
            >
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Quantum Accuracy</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
            >
              <Infinity className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-300">Reality Dimensions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
            >
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">2035</div>
              <div className="text-gray-300">Revolution Year</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ready to Transcend Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the quantum consciousness revolution and unlock infinite dimensions of awareness. 
              Your journey to transcendence begins now.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
            >
              Start Your Evolution
              <Rocket className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumConsciousness2035;