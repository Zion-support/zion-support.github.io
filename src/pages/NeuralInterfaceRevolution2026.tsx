import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧬 NEURAL REVOLUTION • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            Neural Interface Revolution 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of human-computer interaction with direct neural interfaces 
            that enable thought-controlled devices and enhanced cognitive capabilities.
          </p>
        </motion.div>

        {/* Core Technology Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30"
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Non-Invasive BCI</h3>
            <p className="text-rose-100 mb-6 text-center">
              Advanced brain-computer interfaces that read neural signals without invasive procedures.
            </p>
            <ul className="text-rose-200 space-y-2 text-sm">
              <li>• EEG signal processing</li>
              <li>• Machine learning algorithms</li>
              <li>• Real-time neural decoding</li>
              <li>• High accuracy recognition</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
          >
            <div className="text-6xl mb-4 text-center">🎮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Thought Control</h3>
            <p className="text-purple-100 mb-6 text-center">
              Control devices and applications using only your thoughts with unprecedented precision.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Device control</li>
              <li>• Application navigation</li>
              <li>• Text input</li>
              <li>• Gaming interfaces</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Enhanced Cognition</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Augment human cognitive abilities with neural enhancement technologies.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Memory enhancement</li>
              <li>• Focus improvement</li>
              <li>• Learning acceleration</li>
              <li>• Cognitive augmentation</li>
            </ul>
          </motion.div>
        </div>

        {/* Applications Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Applications</h2>
            <p className="text-xl text-gray-300">How neural interfaces are transforming human capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-lg p-6 border border-rose-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">Medical Rehabilitation</h3>
                <p className="text-gray-300 mb-4">
                  Help patients with paralysis regain movement and communication through 
                  neural interface technology and brain-computer interfaces.
                </p>
                <div className="flex items-center space-x-2 text-sm text-rose-300">
                  <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                  <span>Restore movement for paralyzed patients</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg p-6 border border-purple-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">Gaming & Entertainment</h3>
                <p className="text-gray-300 mb-4">
                  Experience immersive gaming and entertainment through thought-controlled 
                  interfaces that respond to your mental commands.
                </p>
                <div className="flex items-center space-x-2 text-sm text-purple-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Thought-controlled gaming experiences</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-6 border border-emerald-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">Education & Learning</h3>
                <p className="text-gray-300 mb-4">
                  Accelerate learning and knowledge acquisition through neural interfaces 
                  that enhance memory and cognitive processing.
                </p>
                <div className="flex items-center space-x-2 text-sm text-emerald-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>Enhanced learning capabilities</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-6 border border-orange-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">Professional Applications</h3>
                <p className="text-gray-300 mb-4">
                  Enhance productivity and efficiency in professional environments through 
                  neural interfaces for complex task management.
                </p>
                <div className="flex items-center space-x-2 text-sm text-orange-300">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Enhanced professional productivity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-rose-400 mb-2">99.9%</div>
            <div className="text-lg text-white mb-2">Accuracy Rate</div>
            <div className="text-gray-400 text-sm">Neural signal recognition</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">0.1s</div>
            <div className="text-lg text-white mb-2">Response Time</div>
            <div className="text-gray-400 text-sm">Thought to action latency</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-lg text-white mb-2">Continuous Operation</div>
            <div className="text-gray-400 text-sm">Non-invasive monitoring</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
            <div className="text-lg text-white mb-2">Neural Channels</div>
            <div className="text-gray-400 text-sm">Simultaneous signal processing</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-rose-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-rose-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Neural Revolution</h2>
          <p className="text-xl text-rose-200 mb-8 max-w-3xl mx-auto">
            Join the neural revolution and discover how direct brain-computer interfaces 
            can enhance your capabilities and transform the way you interact with technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Try Neural Interface
            </button>
            <button className="border-2 border-rose-400 text-rose-200 px-12 py-4 rounded-lg hover:bg-rose-400 hover:text-rose-900 transition-colors font-semibold text-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;