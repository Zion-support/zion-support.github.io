import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL BREAKTHROUGH • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Neural Interface Revolution
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Direct brain-computer interfaces that enable seamless communication between 
              human consciousness and digital systems, revolutionizing how we interact with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                🚀 Experience Neural Interface
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300"
              >
                📚 Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Technology Section */}
      <div className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Revolutionary Core Technology</h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Our Neural Interface technology creates direct pathways between the human brain 
              and digital systems, enabling unprecedented levels of interaction and control.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Neural Signal Processing</h3>
              <p className="text-purple-200 mb-6">
                Advanced algorithms that decode and interpret neural signals in real-time, 
                enabling seamless communication between brain and computer.
              </p>
              <ul className="text-purple-300 space-y-2 text-sm">
                <li>• EEG signal analysis</li>
                <li>• Neural pattern recognition</li>
                <li>• Real-time processing</li>
                <li>• Adaptive learning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-4">Interface Hardware</h3>
              <p className="text-blue-200 mb-6">
                Non-invasive, high-resolution neural interface devices that capture 
                brain activity with unprecedented accuracy and comfort.
              </p>
              <ul className="text-blue-300 space-y-2 text-sm">
                <li>• Non-invasive sensors</li>
                <li>• High-resolution capture</li>
                <li>• Wireless connectivity</li>
                <li>• Comfortable design</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Bidirectional Communication</h3>
              <p className="text-emerald-200 mb-6">
                Two-way communication that allows both reading neural signals and 
                sending feedback directly to the brain.
              </p>
              <ul className="text-emerald-300 space-y-2 text-sm">
                <li>• Neural feedback loops</li>
                <li>• Sensory augmentation</li>
                <li>• Memory enhancement</li>
                <li>• Cognitive training</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Revolutionary Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Neural Interface technology opens up unprecedented possibilities 
              for human-computer interaction and cognitive enhancement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-xl p-8 border border-purple-400/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Medical Applications</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-purple-400">🏥</span>
                  <span>Prosthetic control and rehabilitation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-purple-400">🧠</span>
                  <span>Neurological disorder treatment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-purple-400">👁️</span>
                  <span>Visual and auditory restoration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-purple-400">🦽</span>
                  <span>Mobility assistance systems</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm rounded-xl p-8 border border-blue-400/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Consumer Applications</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">🎮</span>
                  <span>Immersive gaming experiences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">💻</span>
                  <span>Thought-controlled computing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">🎵</span>
                  <span>Music and art creation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">📚</span>
                  <span>Enhanced learning systems</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="py-20 bg-gradient-to-br from-purple-900 to-pink-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Performance Metrics</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Neural Interface technology delivers unprecedented performance improvements 
              in human-computer interaction and cognitive enhancement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg text-purple-200">Accuracy Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">1ms</div>
              <div className="text-lg text-purple-200">Response Time</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-pink-400 mb-2">256</div>
              <div className="text-lg text-purple-200">Channels</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-lg text-purple-200">Continuous Use</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Mind and Machine?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join us in revolutionizing human-computer interaction with Neural Interface technology. 
              Experience the future of direct brain-computer communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                🚀 Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                📞 Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;