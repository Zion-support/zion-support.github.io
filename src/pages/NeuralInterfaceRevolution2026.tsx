import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of human-machine interaction with direct neural interfaces 
              that enable seamless thought control and enhanced cognitive capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Neural Tech
              </button>
              <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Technology Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Neural Technologies</h2>
          <p className="text-xl opacity-80">Breakthrough technologies that bridge mind and machine</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Direct Brain-Computer Interface</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Non-invasive neural interfaces that enable direct communication between the brain and digital systems.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Non-invasive EEG technology</li>
              <li>• Real-time neural signal processing</li>
              <li>• Thought-to-action translation</li>
              <li>• Multi-modal neural feedback</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-teal-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">💡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Enhanced Cognition</h3>
            <p className="text-teal-100 mb-6 text-center">
              Augment human intelligence and memory with advanced neural feedback systems and cognitive enhancement.
            </p>
            <ul className="text-teal-200 space-y-2 text-sm">
              <li>• Memory enhancement protocols</li>
              <li>• Cognitive load optimization</li>
              <li>• Neural pattern recognition</li>
              <li>• Adaptive learning algorithms</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Network Integration</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Connect human neural networks directly to AI systems for unprecedented data interaction and processing.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Human-AI neural fusion</li>
              <li>• Collective intelligence networks</li>
              <li>• Distributed cognitive processing</li>
              <li>• Neural data synchronization</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-gradient-to-r from-emerald-800/50 to-cyan-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Applications</h2>
            <p className="text-xl opacity-80">See how neural interfaces are transforming industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">Medical Applications</h3>
              <p className="text-white/80 mb-6">
                Neural interfaces are revolutionizing healthcare with thought-controlled prosthetics and medical devices.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>Thought-controlled prosthetics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Neural rehabilitation therapy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  <span>Real-time health monitoring</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">Professional Applications</h3>
              <p className="text-white/80 mb-6">
                Enhance productivity and creativity with neural interfaces designed for professional environments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>Thought-controlled design tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Neural data visualization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  <span>Collaborative neural workspaces</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Neural Interface Performance</h2>
          <p className="text-xl opacity-80">Unprecedented capabilities and precision</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-xl font-semibold mb-2">Accuracy Rate</div>
            <div className="text-emerald-200">Neural signal interpretation</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-cyan-400 mb-2">5ms</div>
            <div className="text-xl font-semibold mb-2">Response Time</div>
            <div className="text-cyan-200">Thought to action latency</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-teal-400 mb-2">256</div>
            <div className="text-xl font-semibold mb-2">Channels</div>
            <div className="text-teal-200">Simultaneous neural signals</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-indigo-400 mb-2">24/7</div>
            <div className="text-xl font-semibold mb-2">Monitoring</div>
            <div className="text-indigo-200">Continuous neural tracking</div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for the Neural Revolution?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join the neural interface revolution and unlock the full potential of human-machine collaboration.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Neural Journey
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;