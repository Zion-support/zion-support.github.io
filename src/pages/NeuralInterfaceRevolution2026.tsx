import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const NeuralInterfaceRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of human-computer interaction with direct brain-computer interfaces that enable thought control and enhanced cognitive capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Experience Neural Interface →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Revolutionary Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">🧠 Revolutionary Neural Interface Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the groundbreaking capabilities of our next-generation neural interface technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Non-Invasive BCI</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Advanced brain-computer interfaces that read neural signals without surgery, enabling seamless mind-machine interaction
            </p>
            <ul className="text-emerald-300 space-y-2 text-sm">
              <li>• EEG signal processing</li>
              <li>• Machine learning algorithms</li>
              <li>• Real-time neural decoding</li>
              <li>• Wireless connectivity</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🎮</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Thought Control</h3>
            <p className="text-teal-200 mb-6 text-center">
              Control devices, applications, and systems using only your thoughts, opening new possibilities for accessibility and efficiency
            </p>
            <ul className="text-teal-300 space-y-2 text-sm">
              <li>• Device control via thoughts</li>
              <li>• Virtual reality interaction</li>
              <li>• Smart home automation</li>
              <li>• Accessibility solutions</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔄</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Neural Feedback</h3>
            <p className="text-cyan-200 mb-6 text-center">
              Receive direct feedback from digital systems to your brain, creating immersive experiences and enhanced learning capabilities
            </p>
            <ul className="text-cyan-300 space-y-2 text-sm">
              <li>• Sensory feedback loops</li>
              <li>• Enhanced learning</li>
              <li>• Memory augmentation</li>
              <li>• Cognitive enhancement</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🏥</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Medical Applications</h3>
            <p className="text-blue-200 mb-6 text-center">
              Revolutionary medical applications for rehabilitation, therapy, and cognitive enhancement
            </p>
            <ul className="text-blue-300 space-y-2 text-sm">
              <li>• Stroke rehabilitation</li>
              <li>• Cognitive therapy</li>
              <li>• Memory restoration</li>
              <li>• Motor function recovery</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🎓</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Enhanced Learning</h3>
            <p className="text-indigo-200 mb-6 text-center">
              Accelerate learning and enhance cognitive abilities through direct neural stimulation and feedback
            </p>
            <ul className="text-indigo-300 space-y-2 text-sm">
              <li>• Accelerated learning</li>
              <li>• Memory enhancement</li>
              <li>• Skill acquisition</li>
              <li>• Knowledge retention</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Future Applications</h3>
            <p className="text-purple-200 mb-6 text-center">
              Explore the limitless possibilities of neural interface technology in space exploration and beyond
            </p>
            <ul className="text-purple-300 space-y-2 text-sm">
              <li>• Space exploration</li>
              <li>• Telepresence</li>
              <li>• Virtual reality</li>
              <li>• Human augmentation</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Technology Specifications */}
      <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">⚡ Technology Specifications</h2>
            <p className="text-xl text-gray-300">Advanced specifications that make our neural interface technology revolutionary</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-2">
                99.9%
              </div>
              <div className="text-xl text-white font-semibold mb-2">Accuracy Rate</div>
              <div className="text-gray-300">Neural signal interpretation accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text mb-2">
                1ms
              </div>
              <div className="text-xl text-white font-semibold mb-2">Response Time</div>
              <div className="text-gray-300">Ultra-low latency neural interface</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                256
              </div>
              <div className="text-xl text-white font-semibold mb-2">Channels</div>
              <div className="text-gray-300">High-resolution neural signal acquisition</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text mb-2">
                24/7
              </div>
              <div className="text-xl text-white font-semibold mb-2">Monitoring</div>
              <div className="text-gray-300">Continuous neural activity monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Connect Mind and Machine</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience the future of human-computer interaction with our revolutionary neural interface technology that bridges the gap between mind and machine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
              Start Neural Journey →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NeuralInterfaceRevolution2026;