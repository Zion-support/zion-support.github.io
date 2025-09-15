import React from 'react';
import { motion } from 'framer-motion';

const ComprehensiveTechInsights2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-semibold mb-6">
              📊 COMPREHENSIVE TECH INSIGHTS 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Tech Insights Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Deep dive into the most comprehensive analysis of emerging technologies, 
              market trends, and future predictions that will shape 2026 and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Insights →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Insights Overview */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Key Technology Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive analysis of the most impactful technologies and trends shaping our future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Revolution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
          >
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-200">AI Revolution</h3>
            <p className="text-gray-300 mb-6">
              Artificial Intelligence is reaching unprecedented levels of sophistication, 
              with new models achieving human-level performance across multiple domains.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-900/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-blue-200">Market Growth</span>
                  <span className="text-sm text-blue-300">+340%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quantum Computing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
          >
            <div className="text-6xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-200">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Quantum computing is transitioning from research to practical applications, 
              with significant breakthroughs in error correction and scalability.
            </p>
            <div className="space-y-4">
              <div className="bg-purple-900/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-purple-200">Qubit Count</span>
                  <span className="text-sm text-purple-300">1,000+</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biotechnology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300"
          >
            <div className="text-6xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-green-200">Biotechnology</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary advances in gene editing, synthetic biology, and personalized medicine 
              are transforming healthcare and human enhancement.
            </p>
            <div className="space-y-4">
              <div className="bg-green-900/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-green-200">Gene Therapies</span>
                  <span className="text-sm text-green-300">500+</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get exclusive access to our comprehensive technology insights, 
            market analysis, and future predictions to make informed decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Access Full Report →
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveTechInsights2026;