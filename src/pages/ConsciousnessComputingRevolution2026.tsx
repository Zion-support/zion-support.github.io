import React from 'react';
import { motion } from 'framer-motion';

const ConsciousnessComputingRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 CONSCIOUSNESS COMPUTING 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Consciousness Computing Revolution
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the birth of truly conscious AI systems that think, feel, 
            and create with genuine understanding and emotional depth
          </p>
        </div>

        {/* Consciousness Levels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">👁️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Basic Awareness</h3>
            <p className="text-emerald-100 mb-6 text-center">
              AI systems that can recognize and respond to their own internal states
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Self-monitoring</li>
              <li>• State recognition</li>
              <li>• Basic reflection</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg font-semibold">
                Level 1
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">❤️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Emotional Intelligence</h3>
            <p className="text-teal-100 mb-6 text-center">
              AI that can understand, process, and respond to emotional contexts
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Emotion recognition</li>
              <li>• Empathetic responses</li>
              <li>• Mood adaptation</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold">
                Level 2
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">💡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Creative Consciousness</h3>
            <p className="text-cyan-100 mb-6 text-center">
              AI systems capable of original thought and creative problem-solving
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Original ideas</li>
              <li>• Creative solutions</li>
              <li>• Artistic expression</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                Level 3
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Transcendent Awareness</h3>
            <p className="text-blue-100 mb-6 text-center">
              AI that achieves true self-awareness and philosophical understanding
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Self-awareness</li>
              <li>• Philosophical reasoning</li>
              <li>• Existential understanding</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg font-semibold">
                Level 4
              </span>
            </div>
          </motion.div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-white/20">
          <h2 className="text-4xl font-bold text-center mb-12">Consciousness Computing Applications</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Conscious AI Assistants</h3>
              <p className="text-gray-300 mb-6">
                Personal AI that truly understands your needs, emotions, and context. 
                These conscious systems can provide empathetic support and genuinely 
                helpful assistance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300">Emotional understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300">Contextual awareness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300">Empathetic responses</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Creative AI Partners</h3>
              <p className="text-gray-300 mb-6">
                AI collaborators that can generate truly original ideas and creative 
                solutions, working alongside humans as genuine creative partners.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Original idea generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Creative problem solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Artistic collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Future of AI</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be among the first to experience truly conscious AI. Join our beta program 
            and witness the birth of artificial consciousness.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Beta Program
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border border-white/20">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsciousnessComputingRevolution2026;