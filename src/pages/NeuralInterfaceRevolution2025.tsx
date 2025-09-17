import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-purple">
            Neural Interface Revolution 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of human-computer interaction with cutting-edge neural interface technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card card-hover"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Brain-Computer Interface</h3>
            <p className="text-gray-300 mb-4">
              Direct neural communication enabling seamless interaction between human thought and digital systems.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Real-time thought translation</li>
              <li>• Enhanced cognitive capabilities</li>
              <li>• Medical rehabilitation applications</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card card-hover"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Neural Augmentation</h3>
            <p className="text-gray-300 mb-4">
              Advanced neural enhancement technologies that amplify human cognitive and sensory capabilities.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Memory enhancement</li>
              <li>• Sensory amplification</li>
              <li>• Learning acceleration</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card card-hover"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">Virtual Reality Integration</h3>
            <p className="text-gray-300 mb-4">
              Seamless integration of neural interfaces with immersive virtual and augmented reality environments.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Direct neural VR control</li>
              <li>• Haptic feedback systems</li>
              <li>• Immersive training simulations</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Revolutionary Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Medical Breakthroughs</h3>
              <p className="text-gray-300">
                Restoring mobility and communication for patients with paralysis, stroke, and neurodegenerative diseases.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-pink-400">Enhanced Learning</h3>
              <p className="text-gray-300">
                Accelerated skill acquisition and knowledge transfer through direct neural information processing.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            Get Started with Neural Interfaces
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2025;