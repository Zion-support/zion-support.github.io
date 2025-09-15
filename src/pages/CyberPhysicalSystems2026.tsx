import React from 'react';
import { motion } from 'framer-motion';

const CyberPhysicalSystems2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌐 BREAKTHROUGH 2026 • CYBER-PHYSICAL SYSTEMS
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Cyber-Physical Systems
          </h1>
          <p className="text-2xl text-slate-200 max-w-4xl mx-auto">
            Experience the seamless integration of cyber and physical worlds with intelligent orchestration, 
            quantum-enhanced control, and revolutionary digital-physical convergence
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-600/30 to-gray-600/30 backdrop-blur-sm rounded-xl p-8 border border-slate-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Intelligent Network Orchestration</h3>
            <p className="text-slate-100 mb-6 text-center">
              Advanced AI systems that seamlessly coordinate between digital and physical infrastructure 
              for optimal performance and efficiency
            </p>
            <ul className="text-slate-200 space-y-2 text-sm">
              <li>• Real-time coordination</li>
              <li>• Predictive maintenance</li>
              <li>• Autonomous optimization</li>
              <li>• Cross-domain integration</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Digital Twin Integration</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Perfect digital replicas of physical systems that enable real-time monitoring, 
              simulation, and optimization
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Real-time synchronization</li>
              <li>• Predictive modeling</li>
              <li>• Virtual testing</li>
              <li>• Performance optimization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🛡️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Cybersecurity Mesh</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced security architecture that protects both cyber and physical systems 
              with quantum-enhanced encryption and AI-powered threat detection
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Quantum encryption</li>
              <li>• AI threat detection</li>
              <li>• Zero-trust architecture</li>
              <li>• Real-time protection</li>
            </ul>
          </motion.div>
        </div>

        {/* Revolutionary Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-600/20 to-slate-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Revolutionary Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏭</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart Manufacturing</h3>
                  <p className="text-slate-200">
                    Fully automated factories with cyber-physical systems that self-optimize, 
                    predict maintenance needs, and adapt to changing demands
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏙️</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart Cities</h3>
                  <p className="text-slate-200">
                    Urban infrastructure that seamlessly integrates digital and physical systems 
                    for optimal resource management and citizen services
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🚗</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Autonomous Vehicles</h3>
                  <p className="text-slate-200">
                    Self-driving cars that communicate with infrastructure, other vehicles, 
                    and traffic systems for safe and efficient transportation
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Healthcare Systems</h3>
                  <p className="text-slate-200">
                    Medical devices and systems that integrate with digital health records 
                    and AI diagnostics for personalized patient care
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Energy Grids</h3>
                  <p className="text-slate-200">
                    Smart energy systems that balance supply and demand, 
                    integrate renewable sources, and optimize distribution
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Environmental Monitoring</h3>
                  <p className="text-slate-200">
                    Sensor networks that monitor environmental conditions and automatically 
                    adjust systems to maintain optimal conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-slate-600/20 to-gray-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">System Architecture</h3>
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span>Distributed cyber-physical nodes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span>Real-time communication protocols</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span>AI-powered orchestration engines</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span>Quantum-enhanced security layers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span>Digital twin synchronization</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">System Integration</span>
                    <span className="text-slate-300 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-slate-500 to-gray-500 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Real-time Response</span>
                    <span className="text-slate-300 font-bold">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Security Level</span>
                    <span className="text-slate-300 font-bold">100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* System Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">System Components</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-lg font-bold text-white mb-2">Network Layer</h3>
              <p className="text-cyan-200 text-sm">Intelligent orchestration</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-lg font-bold text-white mb-2">Digital Twins</h3>
              <p className="text-cyan-200 text-sm">Real-time synchronization</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-lg font-bold text-white mb-2">Security Mesh</h3>
              <p className="text-cyan-200 text-sm">Quantum protection</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">AI Control</h3>
              <p className="text-cyan-200 text-sm">Autonomous optimization</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build the Future with Cyber-Physical Systems?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Transform your infrastructure with intelligent cyber-physical systems that seamlessly 
            integrate digital and physical worlds for unprecedented efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/AdvancedBiotechSolutions2026" 
              className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Advanced Biotech →
            </a>
            <a 
              href="/pages/ConsciousnessComputing2026" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Discover Consciousness Computing →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-600 transition-all duration-300 font-semibold text-lg"
            >
              Contact Our Experts
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CyberPhysicalSystems2026;