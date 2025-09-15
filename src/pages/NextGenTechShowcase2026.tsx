import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NextGenTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🧠',
      description: 'Revolutionary AI systems that think, learn, and adapt',
      features: [
        'Synthetic Intelligence Platforms',
        'Quantum-Enhanced Neural Networks',
        'Autonomous Decision Making',
        'Emotional AI Integration',
        'Self-Improving Algorithms'
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Exponential computing power for impossible problems',
      features: [
        'Quantum Supremacy Achieved',
        'Exponential Speed Improvements',
        'Quantum Cryptography',
        'Molecular Simulation',
        'Optimization Revolution'
      ]
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct mind-machine communication',
      features: [
        'Non-Invasive Brain-Computer Interfaces',
        'Thought-to-Text Conversion',
        'Neural Pattern Recognition',
        'Cognitive Enhancement',
        'Mind-Controlled Systems'
      ]
    },
    biotech: {
      title: 'Biotechnology',
      icon: '🧪',
      description: 'Revolutionary biological solutions',
      features: [
        'Gene Editing Technologies',
        'Synthetic Biology',
        'Personalized Medicine',
        'Bio-Integrated Systems',
        'Regenerative Medicine'
      ]
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      description: 'Next-generation space exploration',
      features: [
        'Advanced Propulsion Systems',
        'Space Manufacturing',
        'Interplanetary Communication',
        'Asteroid Mining',
        'Mars Colonization Tech'
      ]
    }
  };

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6">
              🌟 NEXT-GENERATION TECHNOLOGY • 2026
            </div>
            <h1 className="text-7xl font-bold text-white mb-6">
              Next-Gen Tech Showcase
            </h1>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary innovations 
              that are reshaping industries and transforming human capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-500/20 transition-colors text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Technology Tabs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              🚀 Revolutionary Technologies
            </h2>
            <p className="text-xl text-blue-200">
              Explore our cutting-edge innovations across multiple domains
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-blue-200 hover:bg-white/20'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {technologies[activeTab as keyof typeof technologies].title}
                </h3>
                <p className="text-xl text-blue-200 mb-8">
                  {technologies[activeTab as keyof typeof technologies].description}
                </p>
                <div className="space-y-4">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-blue-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-400/30">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-pulse">
                      {technologies[activeTab as keyof typeof technologies].icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Interactive Demo
                    </h4>
                    <p className="text-blue-200 mb-6">
                      Experience this technology in action
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Launch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              📊 Innovation by the Numbers
            </h2>
            <p className="text-xl text-blue-200">
              Our technologies are driving measurable impact across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-white text-lg">Patents Filed</div>
              <div className="text-blue-200 text-sm">Revolutionary innovations</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white text-lg">Uptime</div>
              <div className="text-blue-200 text-sm">System reliability</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-pink-400 mb-2">10x</div>
              <div className="text-white text-lg">Performance</div>
              <div className="text-blue-200 text-sm">Speed improvement</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-white text-lg">Users</div>
              <div className="text-blue-200 text-sm">Global adoption</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              🔮 The Future is Here
            </h2>
            <p className="text-xl text-blue-200">
              Join us in shaping tomorrow's technology landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30"
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
              <p className="text-blue-200">
                Our technologies are transforming industries worldwide, from healthcare to finance, 
                creating a more connected and efficient world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation Speed</h3>
              <p className="text-purple-200">
                We're accelerating the pace of innovation, bringing breakthrough technologies 
                to market faster than ever before.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Partnership</h3>
              <p className="text-cyan-200">
                We believe in collaborative innovation, working with partners to create 
                solutions that benefit humanity as a whole.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of innovators who are already using our next-generation technologies 
            to build tomorrow's solutions today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-500/20 transition-colors text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextGenTechShowcase2026;