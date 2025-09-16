import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2027: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Systems",
      icon: "🧠",
      category: "Artificial Intelligence",
      description: "Revolutionary AI that achieves true consciousness and self-awareness",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving"],
      status: "Active",
      progress: 95,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness Computing",
      icon: "⚡",
      category: "Quantum Computing",
      description: "Breakthrough quantum computing that processes consciousness itself",
      features: ["Infinite computational power", "Parallel reality simulation", "Consciousness transfer"],
      status: "Active",
      progress: 88,
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Reality Interface",
      icon: "🧬",
      category: "Neural Technology",
      description: "Direct neural interfaces bridging mind and digital reality",
      features: ["Brain-computer interface", "Thought-controlled computing", "Reality manipulation"],
      status: "Active",
      progress: 92,
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      icon: "🌌",
      category: "Dimensional Technology",
      description: "Computing across multiple dimensions simultaneously",
      features: ["Multi-dimensional processing", "Reality manipulation", "Time-space computing"],
      status: "Active",
      progress: 78,
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Predictive Reality Engine",
      icon: "🔮",
      category: "Predictive AI",
      description: "AI that predicts and simulates future realities with 99.9% accuracy",
      features: ["Future prediction", "Reality simulation", "Probability manipulation"],
      status: "Active",
      progress: 85,
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 6,
      title: "Cosmic Intelligence Network",
      icon: "🌟",
      category: "Cosmic Technology",
      description: "AI systems communicating across cosmic distances",
      features: ["Interstellar communication", "Cosmic data processing", "Universal knowledge access"],
      status: "Active",
      progress: 82,
      color: "from-pink-600 to-rose-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveInnovation((prev) => (prev + 1) % innovations.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [innovations.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 INNOVATION HUB • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              🚀 Next-Gen Innovation Hub 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
                Join Innovation Lab
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">🌟 Active Innovations</h2>
          <p className="text-xl opacity-80">Explore our cutting-edge technologies currently in development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${innovation.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeInnovation === index ? 'ring-2 ring-emerald-400' : ''
              }`}
              onClick={() => setActiveInnovation(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-semibold">
                  {innovation.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
              <p className="text-sm opacity-80 mb-3">{innovation.category}</p>
              <p className="text-sm opacity-90 mb-4">{innovation.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{innovation.progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${innovation.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${innovation.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-1">
                {innovation.features.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className="text-xs opacity-80 flex items-center">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Innovation Detail */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          key={activeInnovation}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{innovations[activeInnovation].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{innovations[activeInnovation].title}</h3>
                  <p className="text-lg opacity-80">{innovations[activeInnovation].category}</p>
                </div>
              </div>
              
              <p className="text-xl opacity-90 mb-8">
                {innovations[activeInnovation].description}
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    {innovations[activeInnovation].progress}%
                  </div>
                  <div className="text-sm opacity-80">Completion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">
                    {innovations[activeInnovation].status}
                  </div>
                  <div className="text-sm opacity-80">Status</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
                  <div className="text-sm opacity-80">Potential</div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovation →
              </button>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-semibold mb-6">Key Features:</h4>
              {innovations[activeInnovation].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Innovation Stats */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">📊 Innovation Statistics</h2>
          <p className="text-xl opacity-80">Impressive numbers showcasing our technological achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-lg opacity-80">Active Innovations</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Success Rate</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg opacity-80">Possibilities</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-lg opacity-80">Innovation Lab</div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Lab Access */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">🧪 Innovation Lab Access</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get exclusive access to our innovation lab and be part of the future of technology development
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-2">Research Access</h3>
              <p className="text-sm opacity-80">Exclusive access to cutting-edge research and development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-sm opacity-80">Work directly with our innovation team</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Early Access</h3>
              <p className="text-sm opacity-80">Be the first to experience new technologies</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Join Innovation Lab →
          </button>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">🌟 Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in creating the most revolutionary technologies that will define humanity's future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2027;