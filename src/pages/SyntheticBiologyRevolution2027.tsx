import React from 'react';
import { motion } from 'framer-motion';

const SyntheticBiologyRevolution2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 SYNTHETIC BIOLOGY • 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Synthetic Biology Revolution 2027
            </h1>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto">
              Revolutionary advances in synthetic biology that will transform medicine, agriculture, and environmental restoration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Synthetic DNA</h3>
              <p className="text-gray-300 text-center mb-6">
                Create entirely new DNA sequences and biological systems that don't exist in nature.
              </p>
              <div className="text-center">
                <span className="text-emerald-400 font-bold">Revolutionary</span>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">💊</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Bio-Medicine</h3>
              <p className="text-gray-300 text-center mb-6">
                Custom-designed biological medicines that can cure previously incurable diseases.
              </p>
              <div className="text-center">
                <span className="text-cyan-400 font-bold">Life-Saving</span>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Bio-Agriculture</h3>
              <p className="text-gray-300 text-center mb-6">
                Genetically engineered crops that can grow in any environment and produce maximum yield.
              </p>
              <div className="text-center">
                <span className="text-green-400 font-bold">Sustainable</span>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Ready for the Biology Revolution?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join the Revolution
              </a>
              <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Explore All Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SyntheticBiologyRevolution2027;