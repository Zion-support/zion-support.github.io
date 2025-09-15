import React from 'react';
import { motion } from 'framer-motion';

const FutureTechTrends2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🔮 FUTURE TECH TRENDS • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-cyan-600 bg-clip-text text-transparent">
              Future Tech Trends 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Explore the emerging technology trends that will shape the future of business, society, 
              and human interaction in 2026 and beyond.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Trends →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top Trends Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🌟 Top Technology Trends 2026</h2>
          <p className="text-xl opacity-90">The most impactful trends shaping our digital future</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Trend 1: Synthetic Intelligence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Intelligence</h3>
            <p className="text-purple-100 mb-6 text-center">
              AI that transcends human cognitive capabilities with synthetic reasoning and creativity
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-purple-200">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Meta-cognitive reasoning</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-purple-200">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Artificial creativity</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-purple-200">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Self-evolving systems</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-xs bg-purple-500/30 px-3 py-1 rounded-full">Emerging</span>
            </div>
          </motion.div>

          {/* Trend 2: Quantum-Neural Fusion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum-Neural Fusion</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary fusion of quantum computing and neural networks for unprecedented processing
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-cyan-200">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Quantum machine learning</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-cyan-200">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Exponential speed gains</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-cyan-200">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Quantum optimization</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-xs bg-cyan-500/30 px-3 py-1 rounded-full">Breakthrough</span>
            </div>
          </motion.div>

          {/* Trend 3: Neural Interface Revolution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Revolution</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces enabling seamless mind-machine communication
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span>Non-invasive BCI</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span>Thought control</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span>Neural feedback</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-xs bg-emerald-500/30 px-3 py-1 rounded-full">Revolutionary</span>
            </div>
          </motion.div>

          {/* Trend 4: Autonomous AI Systems */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Autonomous AI Systems</h3>
            <p className="text-orange-100 mb-6 text-center">
              Self-evolving AI systems that operate independently and continuously improve
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-orange-200">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>Self-learning algorithms</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-orange-200">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>Autonomous decision making</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-orange-200">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>Continuous evolution</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-xs bg-orange-500/30 px-3 py-1 rounded-full">Growing</span>
            </div>
          </motion.div>

          {/* Trend 5: Metaverse Integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Metaverse Integration</h3>
            <p className="text-violet-100 mb-6 text-center">
              Seamless integration of physical and digital worlds through immersive technologies
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-violet-200">
                <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                <span>Virtual reality</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-violet-200">
                <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                <span>Augmented reality</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-violet-200">
                <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                <span>Digital twins</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-xs bg-violet-500/30 px-3 py-1 rounded-full">Expanding</span>
            </div>
          </motion.div>

          {/* Trend 6: Edge AI Computing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Edge AI Computing</h3>
            <p className="text-pink-100 mb-6 text-center">
              AI processing at the edge for real-time, low-latency intelligent applications
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-pink-200">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                <span>Real-time processing</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-pink-200">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                <span>Low latency</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-pink-200">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                <span>Offline capability</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-xs bg-pink-500/30 px-3 py-1 rounded-full">Mature</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industry Impact Section */}
      <div className="bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🏭 Industry Impact</h2>
            <p className="text-xl opacity-90">How these trends are transforming industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-300 text-sm">
                AI-powered diagnostics, personalized medicine, and neural interfaces for medical applications
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-gray-300 text-sm">
                Autonomous production systems, predictive maintenance, and smart factory optimization
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-2">Transportation</h3>
              <p className="text-gray-300 text-sm">
                Autonomous vehicles, smart traffic management, and quantum-optimized logistics
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-2">Finance</h3>
              <p className="text-gray-300 text-sm">
                AI-powered trading, quantum cryptography, and decentralized financial systems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Predictions */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🔮 Future Predictions</h2>
          <p className="text-xl opacity-90">What to expect in the coming years</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">2026-2027: The AI Revolution</h3>
              <p className="text-gray-300 mb-4">
                Synthetic intelligence will become mainstream, with AI systems that can reason, 
                create, and learn at levels surpassing human capabilities in specific domains.
              </p>
              <div className="flex items-center space-x-2 text-sm text-green-400">
                <span>✓</span>
                <span>AI surpasses human performance in most tasks</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">2027-2028: Quantum Breakthrough</h3>
              <p className="text-gray-300 mb-4">
                Quantum computers will achieve practical applications, solving problems 
                that are impossible for classical computers and revolutionizing cryptography.
              </p>
              <div className="flex items-center space-x-2 text-sm text-green-400">
                <span>✓</span>
                <span>Quantum supremacy in real-world applications</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">2028-2029: Neural Integration</h3>
              <p className="text-gray-300 mb-4">
                Brain-computer interfaces will become commercially available, enabling 
                direct communication between human minds and digital systems.
              </p>
              <div className="flex items-center space-x-2 text-sm text-green-400">
                <span>✓</span>
                <span>Non-invasive BCI becomes mainstream</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">2029-2030: The Metaverse Era</h3>
              <p className="text-gray-300 mb-4">
                The metaverse will become the primary interface for work, education, 
                and social interaction, blurring the lines between physical and digital reality.
              </p>
              <div className="flex items-center space-x-2 text-sm text-green-400">
                <span>✓</span>
                <span>Metaverse becomes the new internet</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Trends</h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive insights into the latest technology trends and be the first to know about emerging innovations
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Subscribe to Updates
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechTrends2026;