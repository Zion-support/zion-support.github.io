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
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the future of human-computer interaction with direct neural interfaces 
              that enable seamless communication between mind and machine.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Technology Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Brain-Computer Interface</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct neural interfaces that read brain signals and translate them into digital commands.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Non-invasive EEG sensors</li>
              <li>• Real-time signal processing</li>
              <li>• Machine learning algorithms</li>
              <li>• Adaptive calibration</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Thought Control</h3>
            <p className="text-teal-100 mb-6 text-center">
              Control devices and applications using only your thoughts with unprecedented precision.
            </p>
            <ul className="text-teal-200 space-y-2 text-sm">
              <li>• Intention recognition</li>
              <li>• Motor imagery decoding</li>
              <li>• Cognitive state analysis</li>
              <li>• Emotional response detection</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Feedback</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Receive direct neural feedback that enhances cognitive abilities and learning.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Memory enhancement</li>
              <li>• Learning acceleration</li>
              <li>• Focus improvement</li>
              <li>• Cognitive training</li>
            </ul>
          </motion.div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Medical Rehabilitation",
                description: "Help patients with paralysis control prosthetics and communicate",
                icon: "🏥",
                impact: "95% success rate"
              },
              {
                title: "Gaming & Entertainment",
                description: "Immersive gaming experiences controlled by thoughts and emotions",
                icon: "🎮",
                impact: "1000x immersion"
              },
              {
                title: "Education & Learning",
                description: "Accelerate learning with direct neural feedback and memory enhancement",
                icon: "📚",
                impact: "5x faster learning"
              },
              {
                title: "Communication",
                description: "Enable communication for people with speech disabilities",
                icon: "💬",
                impact: "100% accessibility"
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-emerald-800/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{app.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{app.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-emerald-500 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold">
                    {app.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-r from-slate-800/50 to-emerald-800/50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-300">Neural Interface Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span>256-channel EEG array</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span>Real-time signal processing</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span>Machine learning algorithms</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span>Adaptive calibration</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-teal-300">Performance Metrics</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  <span>99.9% accuracy</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  <span>10ms response time</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  <span>24/7 continuous use</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  <span>Wireless connectivity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect Mind and Machine?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the revolutionary potential of neural interfaces. 
            Be part of the next generation of human-computer interaction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Your Journey
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-3 rounded-lg hover:bg-emerald-400 hover:text-emerald-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;