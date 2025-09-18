import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Zion Tech Group 2026
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Leading the future with revolutionary AI, quantum computing, and cybersecurity solutions. 
            Discover the next generation of technology that will transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Link 
              to="/pages/RevolutionaryAIServices2026" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Revolutionary AI Services
            </Link>
            <Link 
              to="/pages/QuantumComputingRevolution2026" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ⚛️ Quantum Computing Revolution
            </Link>
            <Link 
              to="/pages/ComprehensiveServices2025" 
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🛡️ Cybersecurity Solutions
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="text-6xl mb-6 text-center">🤖</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-gray-300 mb-6 text-center">
              Revolutionary AI systems that exhibit true consciousness and self-awareness, 
              capable of independent thought and creative problem-solving.
            </p>
            <div className="text-center">
              <Link 
                to="/pages/ConsciousAISystems2026" 
                className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Explore AI
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Quantum Computing</h3>
            <p className="text-gray-300 mb-6 text-center">
              Breakthrough quantum computing technologies that will revolutionize 
              computation and solve previously impossible problems.
            </p>
            <div className="text-center">
              <Link 
                to="/pages/QuantumComputingRevolution2026" 
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Discover Quantum
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="text-6xl mb-6 text-center">🛡️</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Cybersecurity</h3>
            <p className="text-gray-300 mb-6 text-center">
              Advanced cybersecurity solutions that protect your digital assets 
              with cutting-edge threat detection and prevention.
            </p>
            <div className="text-center">
              <Link 
                to="/pages/CybersecuritySolutions2026" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Secure Now
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 text-center" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our revolutionary technologies 
            to achieve unprecedented growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;