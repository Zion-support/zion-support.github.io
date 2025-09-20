import React from 'react';

const QuantumAIRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚛️ QUANTUM AI REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quantum AI Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Experience the convergence of quantum computing and artificial intelligence, 
              creating unprecedented capabilities that transcend traditional computational limits.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Quantum AI →
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Stats */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Quantum Performance Metrics</h2>
            <p className="text-xl opacity-80">Revolutionary improvements over classical computing</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quantumStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm opacity-80 mb-1">{stat.unit}</div>
                <div className="text-lg font-semibold mb-2">{stat.metric}</div>
                <div className="text-sm text-green-400 font-semibold">+{stat.improvement}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default QuantumAIRevolution2026;
