import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Bridge the gap between mind and machine with direct neural interfaces that enable thought control and brain-computer communication
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#technology" className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Explore Technology →
              </a>
              <a href="#contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors">
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Section */}
      <section id="technology" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🧠 Revolutionary Neural Technology</h2>
            <p className="text-xl text-emerald-200">Experience the future of brain-computer interfaces</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Non-Invasive BCI</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Advanced brain-computer interfaces that read neural signals without invasive procedures
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• EEG signal processing</li>
                <li>• Neural pattern recognition</li>
                <li>• Real-time decoding</li>
                <li>• Wireless connectivity</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Thought Control</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Control devices and applications directly with your thoughts using advanced neural decoding
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• Motor imagery detection</li>
                <li>• Intent recognition</li>
                <li>• Multi-class classification</li>
                <li>• Adaptive learning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🔄</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Neural Feedback</h3>
              <p className="text-purple-100 mb-6 text-center">
                Receive real-time feedback to improve neural control and enhance cognitive performance
              </p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Real-time visualization</li>
                <li>• Performance metrics</li>
                <li>• Training protocols</li>
                <li>• Cognitive enhancement</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🏥</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Medical Applications</h3>
              <p className="text-orange-100 mb-6 text-center">
                Revolutionary medical applications for rehabilitation and cognitive therapy
              </p>
              <ul className="text-orange-200 space-y-2 text-sm">
                <li>• Stroke rehabilitation</li>
                <li>• Motor recovery</li>
                <li>• Cognitive training</li>
                <li>• Neuroplasticity enhancement</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">AI Integration</h3>
              <p className="text-violet-100 mb-6 text-center">
                Seamless integration with AI systems for enhanced neural interface capabilities
              </p>
              <ul className="text-violet-200 space-y-2 text-sm">
                <li>• Machine learning algorithms</li>
                <li>• Pattern recognition</li>
                <li>• Predictive modeling</li>
                <li>• Adaptive interfaces</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Neural Networking</h3>
              <p className="text-rose-100 mb-6 text-center">
                Connect multiple neural interfaces for collaborative brain-computer networks
              </p>
              <ul className="text-rose-200 space-y-2 text-sm">
                <li>• Multi-user interfaces</li>
                <li>• Collaborative control</li>
                <li>• Shared neural data</li>
                <li>• Distributed cognition</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-800/50 to-teal-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Neural Interface Applications</h2>
            <p className="text-xl text-emerald-200">Transform how we interact with technology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">♿</div>
              <h3 className="text-2xl font-bold text-white mb-2">Accessibility</h3>
              <p className="text-emerald-200">Enhanced accessibility for disabled users</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-2">Gaming</h3>
              <p className="text-emerald-200">Immersive gaming experiences</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-2">Industry</h3>
              <p className="text-emerald-200">Industrial control and automation</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
              <p className="text-emerald-200">Enhanced learning and training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">📊 Neural Interface Performance</h2>
            <p className="text-xl text-emerald-200">Experience unprecedented brain-computer interaction</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
              <p className="text-emerald-200">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-2">&lt;50ms</h3>
              <p className="text-emerald-200">Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-2">64</h3>
              <p className="text-emerald-200">Channels</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold text-white mb-2">24h</h3>
              <p className="text-emerald-200">Battery Life</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Connect Mind & Machine?</h2>
          <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
            Join the neural interface revolution and experience the future of human-computer interaction
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Neural Journey →
            </a>
            <a href="/pages/NeuralInterfaceRevolution2026" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors">
              Explore Advanced Neural
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeuralInterfaceRevolution2025;