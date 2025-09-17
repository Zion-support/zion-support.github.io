import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-semibold mb-6">
              🧬 BREAKTHROUGH: Neural Interface Revolution 2025
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
            >
              Neural Interface Revolution 2025
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl opacity-90 max-w-4xl mx-auto mb-8"
            >
              Bridge the gap between mind and machine with direct neural interfaces that enable thought-controlled computing
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Neural Interfaces
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Neural Interface Technologies */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Non-Invasive BCI</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Advanced EEG and fNIRS technology for safe, comfortable brain-computer interfaces
            </p>
            <ul className="text-emerald-300 space-y-2 text-sm">
              <li>• High-resolution EEG arrays</li>
              <li>• Real-time signal processing</li>
              <li>• Machine learning integration</li>
              <li>• Portable and wireless</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Ultra-Fast Processing</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Sub-millisecond response times for real-time neural signal processing
            </p>
            <ul className="text-emerald-300 space-y-2 text-sm">
              <li>• &lt; 10ms signal processing</li>
              <li>• &lt; 5ms command execution</li>
              <li>• Real-time feedback loops</li>
              <li>• Low-latency protocols</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Integration</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Advanced AI algorithms for neural pattern recognition and interpretation
            </p>
            <ul className="text-emerald-300 space-y-2 text-sm">
              <li>• Deep learning models</li>
              <li>• Pattern recognition</li>
              <li>• Adaptive algorithms</li>
              <li>• Continuous learning</li>
            </ul>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Revolutionary Neural Interface Features
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
            Experience the future of human-computer interaction with our cutting-edge neural interface technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20"
          >
            <h3 className="text-xl font-bold text-white mb-3">Thought Control</h3>
            <p className="text-emerald-200 text-sm">
              Control devices and applications directly with your thoughts using advanced neural signal processing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-teal-600/10 to-cyan-600/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20"
          >
            <h3 className="text-xl font-bold text-white mb-3">Real-time Feedback</h3>
            <p className="text-emerald-200 text-sm">
              Instant visual and haptic feedback for seamless interaction with digital environments
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20"
          >
            <h3 className="text-xl font-bold text-white mb-3">Adaptive Learning</h3>
            <p className="text-emerald-200 text-sm">
              AI-powered system that learns and adapts to your unique neural patterns over time
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-3xl p-12 border border-emerald-400/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto mb-8">
              Join the neural interface revolution and be among the first to experience thought-controlled computing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Early Access
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2025;