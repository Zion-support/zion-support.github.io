import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEURAL INTERFACE REVOLUTION • JANUARY 2025
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Neural Interface Revolution 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of human-computer interaction with direct neural interfaces that bridge the gap between mind and machine.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Direct Neural Control</h3>
              <p className="text-gray-300 mb-6">
                Control devices and applications directly with your thoughts using advanced neural interface technology.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 99.9% accuracy</li>
                <li>• Real-time processing</li>
                <li>• Zero latency response</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enhanced Cognition</h3>
              <p className="text-gray-300 mb-6">
                Augment your cognitive abilities with AI-powered neural enhancements and memory expansion.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Memory augmentation</li>
                <li>• Enhanced learning</li>
                <li>• Cognitive boost</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            >
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Network Access</h3>
              <p className="text-gray-300 mb-6">
                Connect directly to neural networks and AI systems for seamless human-AI collaboration.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Direct AI access</li>
                <li>• Neural collaboration</li>
                <li>• Enhanced creativity</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl p-12 border border-emerald-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Neural Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of human-computer interaction with our revolutionary neural interface technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🧠 Start Neural Journey
              </a>
              <a
                href="/neural-demo"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                ⚡ Try Neural Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2025;