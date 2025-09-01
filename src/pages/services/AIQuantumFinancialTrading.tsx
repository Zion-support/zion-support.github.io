import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Cpu, Zap, DollarSign, Shield } from 'lucide-react';

const AIQuantumFinancialTrading: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Quantum Algorithms",
      description: "Advanced quantum computing algorithms for portfolio optimization and risk analysis"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "AI-powered market analysis and predictive modeling for trading decisions"
    },
    {
      icon: Cpu,
      title: "High-Performance Computing",
      description: "Quantum-enhanced computational power for complex financial calculations"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies using quantum AI"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              AI Quantum Financial
            </span>
            <br />
            Trading Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary quantum-enhanced AI trading platform for institutional and high-frequency trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl mr-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>
              
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Platform Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Portfolio Optimization</h3>
              <p className="text-gray-300">Quantum algorithms for optimal asset allocation and risk-return optimization</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">High-Frequency Trading</h3>
              <p className="text-gray-300">Ultra-low latency execution with quantum-enhanced decision making</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-gray-300">Advanced pattern recognition and predictive analytics</p>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-8 border border-yellow-400/30"
          >
            <h2 className="text-3xl font-bold mb-4">Enterprise Trading Solutions</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Partner with us to implement cutting-edge quantum AI trading technology. 
              Our platform combines quantum computing power with advanced machine learning 
              for unparalleled trading performance.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 inline-block"
              >
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 inline-block"
              >
                Schedule Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIQuantumFinancialTrading;