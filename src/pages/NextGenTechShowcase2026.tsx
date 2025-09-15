import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NextGenTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Next-Generation AI",
      description: "Revolutionary artificial intelligence that thinks, learns, and adapts like never before",
      features: [
        "Quantum-Enhanced Neural Networks",
        "Autonomous Learning Systems", 
        "Emotional Intelligence AI",
        "Predictive Decision Making"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    quantum: {
      title: "Quantum Computing",
      description: "Breakthrough quantum technology solving impossible problems in seconds",
      features: [
        "Exponential Processing Power",
        "Quantum Cryptography",
        "Molecular Simulation",
        "Optimization Algorithms"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    neural: {
      title: "Neural Interfaces",
      description: "Direct brain-computer interfaces revolutionizing human-machine interaction",
      features: [
        "Non-Invasive BCI Technology",
        "Thought-Controlled Systems",
        "Neural Feedback Loops",
        "Cognitive Enhancement"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    space: {
      title: "Space Technology",
      description: "Advanced space exploration and colonization technologies",
      features: [
        "Interplanetary Communication",
        "Space Manufacturing",
        "Asteroid Mining",
        "Mars Colonization"
      ],
      icon: "🚀",
      color: "from-orange-600 to-red-600"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-semibold mb-6">
              🌟 NEXT-GEN TECHNOLOGY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Next-Gen Tech Showcase
            </h1>
            <p className="text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">
              Explore the cutting-edge technologies that are reshaping our world and 
              defining the future of human civilization.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Technologies</h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-12">
              Discover the breakthrough technologies that are transforming industries and 
              creating new possibilities for humanity.
            </p>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(technologies).map(([key, tech]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                      : 'bg-white/10 text-indigo-200 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-6xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
                    <h3 className="text-4xl font-bold text-white mb-6">
                      {technologies[activeTab as keyof typeof technologies].title}
                    </h3>
                    <p className="text-xl text-indigo-200 mb-8">
                      {technologies[activeTab as keyof typeof technologies].description}
                    </p>
                    <ul className="space-y-4">
                      {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center text-indigo-100"
                        >
                          <span className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-4"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className={`w-full h-96 bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].color} rounded-xl flex items-center justify-center`}>
                      <div className="text-8xl opacity-80">
                        {technologies[activeTab as keyof typeof technologies].icon}
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl">
                      ✨
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Innovation Stats */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Innovation by the Numbers</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Our next-generation technologies are already making a global impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1M+", label: "AI Models Deployed", icon: "🤖" },
              { number: "500+", label: "Quantum Algorithms", icon: "⚡" },
              { number: "10K+", label: "Neural Interfaces", icon: "🧬" },
              { number: "50+", label: "Space Missions", icon: "🚀" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-indigo-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">The Future is Here</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Experience the technologies that will define the next decade and beyond. 
              Join us in shaping the future of human civilization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Immediate Impact",
                description: "Deploy today, see results tomorrow",
                icon: "⚡"
              },
              {
                title: "Scalable Solutions",
                description: "Grow from startup to enterprise",
                icon: "📈"
              },
              {
                title: "Future-Proof",
                description: "Built for the next generation",
                icon: "🔮"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-indigo-200">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Explore All Technologies →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2026;