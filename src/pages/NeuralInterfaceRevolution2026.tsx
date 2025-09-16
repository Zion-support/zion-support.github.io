import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
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
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Bridge the gap between mind and machine with direct neural interfaces that enable thought-controlled computing and enhanced human capabilities
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Neural Tech
              </button>
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Try Neural Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neural Interface Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Revolutionary Neural Interface Technology</h2>
          <p className="text-emerald-100 mb-6 text-center">
            Advanced brain-computer interfaces that read neural signals without surgery, enabling seamless mind-machine communication
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-800/30 to-teal-800/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Non-Invasive Neural Reading</h3>
            <p className="text-emerald-100 mb-4">
              Advanced EEG and fNIRS technology that reads brain activity without implants
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Real-time neural signal processing</li>
              <li>• 99.9% accuracy in thought recognition</li>
              <li>• Zero surgical intervention required</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-teal-800/30 to-cyan-800/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Thought-Controlled Computing</h3>
            <p className="text-teal-100 mb-4">
              Control devices and applications directly with your thoughts
            </p>
            <ul className="text-teal-200 space-y-2 text-sm">
              <li>• Instant device control</li>
              <li>• Multi-device synchronization</li>
              <li>• Learning adaptation algorithms</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Enhanced Human Capabilities</h3>
            <p className="text-cyan-100 mb-4">
              Augment human intelligence and capabilities through neural enhancement
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Memory enhancement</li>
              <li>• Cognitive acceleration</li>
              <li>• Sensory augmentation</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the neural interface revolution and be among the first to experience thought-controlled computing
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;