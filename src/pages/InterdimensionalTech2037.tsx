import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Globe, 
  Zap, 
  Eye,
  Compass,
  Infinity,
  Sparkles,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Rocket,
  Navigation
} from 'lucide-react';

const InterdimensionalTech2037: React.FC = () => {
  const dimensions = [
    {
      number: "Dimension 1",
      title: "Physical Reality",
      description: "Our current three-dimensional space-time continuum",
      icon: Globe,
      color: "from-blue-400 to-cyan-500"
    },
    {
      number: "Dimension 2", 
      title: "Quantum Realm",
      description: "Subatomic quantum field interactions and probabilities",
      icon: Zap,
      color: "from-purple-400 to-pink-500"
    },
    {
      number: "Dimension 3",
      title: "Consciousness Plane",
      description: "Realm of pure thought and consciousness",
      icon: Eye,
      color: "from-green-400 to-blue-500"
    },
    {
      number: "Dimension 4",
      title: "Time Streams",
      description: "Multiple temporal dimensions and parallel timelines",
      icon: Compass,
      color: "from-yellow-400 to-orange-500"
    },
    {
      number: "Dimension 5+",
      title: "Infinite Realities",
      description: "Unlimited dimensions beyond human comprehension",
      icon: Infinity,
      color: "from-red-400 to-purple-500"
    }
  ];

  const technologies = [
    {
      icon: Layers,
      title: "Dimension Gateway",
      description: "Portal technology for interdimensional travel and communication"
    },
    {
      icon: Navigation,
      title: "Reality Navigator",
      description: "AI system for navigating between infinite realities"
    },
    {
      icon: Target,
      title: "Probability Manipulator",
      description: "Technology to influence quantum probabilities across dimensions"
    },
    {
      icon: Sparkles,
      title: "Consciousness Bridge",
      description: "Interface between physical and consciousness dimensions"
    }
  ];

  const applications = [
    "Instantaneous travel between any dimensions or realities",
    "Access to infinite knowledge from parallel universes",
    "Ability to modify reality through dimensional manipulation",
    "Communication with beings from other dimensions",
    "Creation of new realities and dimensions",
    "Transcendence of all physical and temporal limitations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <Layers className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Interdimensional
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Technology 2037
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Break through the barriers of reality and access infinite dimensions. 
              Experience technology that transcends space, time, and consciousness itself.
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
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              Enter New Realities
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/ai-2025"
              className="border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Dimensions
            </Link>
          </motion.div>
        </div>

        {/* Animated dimensional portals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: Math.random() * 12 + 8,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute w-3 h-3 border-2 border-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </section>

      {/* Dimensions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Infinite Dimensions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through infinite dimensions and realities, each with unique laws of physics and consciousness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dimensions.map((dimension, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${dimension.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <dimension.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{dimension.number}</h3>
                  <h4 className="text-xl font-bold text-white mb-4">{dimension.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{dimension.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Revolutionary Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced interdimensional technology that enables access to infinite realities and dimensions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
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
              Unlimited Possibilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the infinite applications of interdimensional technology in reshaping reality itself.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{application}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
            >
              <Layers className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-300">Dimensions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
            >
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-300">Realities</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
            >
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Portal Accuracy</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
            >
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">2037</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transcend Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Step through the dimensional gateway and experience infinite realities. 
              Your journey across dimensions begins now.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
            >
              Enter Dimensions
              <Rocket className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InterdimensionalTech2037;