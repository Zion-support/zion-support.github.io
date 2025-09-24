import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL BREAKTHROUGH • 2025
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Neural Interface Revolution 2025
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Bridge the gap between mind and machine with direct neural interfaces that enable seamless brain-computer communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Neural Interface Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🧠 Neural Interface Technologies</h2>
            <p className="text-xl text-gray-600">Revolutionary brain-computer interfaces</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🎧</div>
              <h3 className="text-2xl font-bold mb-4">Non-Invasive BCI</h3>
              <p className="text-gray-600 mb-6">
                Safe, comfortable neural interfaces that read brain signals without surgery.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• EEG-based control</li>
                <li>• Thought recognition</li>
                <li>• Real-time feedback</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Invasive BCI</h3>
              <p className="text-gray-600 mb-6">
                High-precision neural implants for maximum signal quality and control.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Microelectrode arrays</li>
                <li>• Direct neural recording</li>
                <li>• Precise motor control</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-4">Optical BCI</h3>
              <p className="text-gray-600 mb-6">
                Light-based neural interfaces for high-resolution brain activity monitoring.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Optical imaging</li>
                <li>• High resolution</li>
                <li>• Non-destructive</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎯 Neural Interface Applications</h2>
            <p className="text-xl text-gray-600">Transforming lives through brain-computer interfaces</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-2xl">♿</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Medical Rehabilitation</h3>
                  <p className="text-gray-600 mb-4">Restore mobility and communication for patients with paralysis or neurological conditions</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Prosthetic limb control</li>
                    <li>• Communication devices</li>
                    <li>• Motor function restoration</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-2xl">🎮</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Gaming & Entertainment</h3>
                  <p className="text-gray-600 mb-4">Immersive gaming experiences controlled directly by thoughts and emotions</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Thought-controlled games</li>
                    <li>• Emotional feedback</li>
                    <li>• Virtual reality integration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-2xl">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Cognitive Enhancement</h3>
                  <p className="text-gray-600 mb-4">Augment human intelligence and memory through direct brain interfaces</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Memory augmentation</li>
                    <li>• Learning acceleration</li>
                    <li>• Cognitive monitoring</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-2xl">🏭</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Industrial Control</h3>
                  <p className="text-gray-600 mb-4">Control complex machinery and systems through direct neural commands</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Hands-free operation</li>
                    <li>• Multi-tasking control</li>
                    <li>• Safety monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⚙️ Neural Interface Technology Stack</h2>
            <p className="text-xl opacity-90">Complete brain-computer interface infrastructure</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">🧠</div>
              <h3 className="text-xl font-bold mb-2">Neural Sensors</h3>
              <p className="text-emerald-100">Advanced electrodes and optical sensors for brain signal capture</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">💻</div>
              <h3 className="text-xl font-bold mb-2">Signal Processing</h3>
              <p className="text-emerald-100">Real-time neural signal analysis and interpretation</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI Integration</h3>
              <p className="text-emerald-100">Machine learning algorithms for pattern recognition</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">🔌</div>
              <h3 className="text-xl font-bold mb-2">Device Control</h3>
              <p className="text-emerald-100">Seamless integration with external devices and systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Ethics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🛡️ Safety & Ethics</h2>
            <p className="text-xl text-gray-600">Prioritizing user safety and ethical considerations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Data Privacy</h3>
              <p className="text-gray-600">Advanced encryption and privacy protection for neural data</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">⚕️</div>
              <h3 className="text-2xl font-bold mb-4">Medical Safety</h3>
              <p className="text-gray-600">Rigorous testing and FDA approval for medical applications</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold mb-4">Ethical Guidelines</h3>
              <p className="text-gray-600">Comprehensive ethical framework for neural interface development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Neural Interface Performance</h2>
            <p className="text-xl opacity-90">Proven accuracy and reliability</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">99.7%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10ms</div>
              <div className="text-lg opacity-90">Response Time</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Continuous Operation</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Neural Channels</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Connect Mind and Machine?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the future of human-computer interaction with our revolutionary neural interface technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Neural Journey
            </a>
            <a
              href="/pages/ComprehensiveServices2025"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeuralInterfaceRevolution2025;