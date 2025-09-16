import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuantumComputingBreakthrough2025: React.FC = () => {
  const [quantumState, setQuantumState] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [quantumBits, setQuantumBits] = useState<boolean[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumBits(prev => 
        Array.from({ length: 8 }, () => Math.random() > 0.5)
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const quantumApplications = [
    {
      title: "🔬 Drug Discovery",
      description: "Simulate molecular interactions at quantum level for breakthrough medicines",
      impact: "1000x faster drug development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "🌍 Climate Modeling",
      description: "Accurate climate predictions using quantum atmospheric simulations",
      impact: "99.9% prediction accuracy",
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "🔐 Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution",
      impact: "Theoretically unbreakable security",
      color: "from-teal-500 to-green-500"
    },
    {
      title: "🚀 Space Exploration",
      description: "Optimize space missions with quantum trajectory calculations",
      impact: "50% fuel efficiency improvement",
      color: "from-green-500 to-purple-500"
    }
  ];

  const quantumMetrics = [
    { name: "Qubit Count", value: 1000, unit: "qubits" },
    { name: "Coherence Time", value: 100, unit: "ms" },
    { name: "Gate Fidelity", value: 99.9, unit: "%" },
    { name: "Error Rate", value: 0.01, unit: "%" },
    { name: "Processing Speed", value: 10, unit: "Mx faster" }
  ];

  const startQuantumCalculation = () => {
    setIsCalculating(true);
    let state = 0;
    const interval = setInterval(() => {
      state += 0.1;
      setQuantumState(state);
      if (state >= 1) {
        clearInterval(interval);
        setIsCalculating(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM BREAKTHROUGH • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Computing Breakthrough 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the power of quantum computing that solves impossible problems in seconds
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={startQuantumCalculation}
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                {isCalculating ? 'Calculating...' : 'Start Quantum Calculation'}
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum State Visualization */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⚡ Quantum State Visualization</h2>
          <p className="text-xl opacity-80">Watch quantum superposition and entanglement in real-time</p>
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Quantum Superposition</h3>
              <div className="mb-6">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  {quantumState.toFixed(2)}
                </div>
                <div className="text-xl opacity-80">
                  {quantumState < 0.3 ? 'Classical State' : 
                   quantumState < 0.7 ? 'Superposition' : 'Entangled State'}
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${quantumState * 100}%` }}
                ></div>
              </div>
              <p className="text-lg opacity-80">
                Quantum bits exist in multiple states simultaneously, enabling exponential computational power
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quantum Bit States</h4>
              <div className="bg-black/50 rounded-lg p-4 h-64 flex items-center justify-center space-x-2">
                {quantumBits.map((bit, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full transition-all duration-300 ${
                      bit 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}
                    style={{
                      transform: bit ? 'scale(1.2)' : 'scale(0.8)',
                      opacity: 0.7 + Math.random() * 0.3
                    }}
                  ></div>
                ))}
              </div>
              <div className="text-center mt-4">
                <div className="text-sm opacity-80">
                  {quantumBits.filter(bit => bit).length} | {quantumBits.filter(bit => !bit).length}
                </div>
                <div className="text-xs opacity-60">1s | 0s</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Applications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quantumApplications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${app.color} rounded-xl p-6 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-4 text-center">{app.title.split(' ')[0]}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{app.title}</h3>
              <p className="text-sm opacity-90 mb-4 text-center">{app.description}</p>
              <div className="text-center">
                <div className="text-lg font-bold">{app.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quantum Metrics */}
      <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Quantum Performance Metrics</h2>
            <p className="text-xl opacity-80">Real-time quantum computer performance indicators</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {quantumMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-400/30"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {metric.value}{metric.unit}
                </div>
                <div className="text-sm opacity-80">{metric.name}</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(metric.value / 100, 1) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quantum Advantage Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Quantum Advantage</h2>
          <p className="text-xl opacity-80">Problems that only quantum computers can solve efficiently</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Classical Computing</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Factorization (2048-bit)</span>
                <span className="text-red-400">~300 trillion years</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Database Search (1M items)</span>
                <span className="text-red-400">~500,000 operations</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Optimization (TSP 20 cities)</span>
                <span className="text-red-400">~2.4 × 10^18 operations</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Quantum Computing</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Factorization (2048-bit)</span>
                <span className="text-green-400">~8 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Database Search (1M items)</span>
                <span className="text-green-400">~1,000 operations</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Optimization (TSP 20 cities)</span>
                <span className="text-green-400">~400 operations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Future Vision */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">The Quantum Future is Here</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the quantum revolution and solve problems that were once impossible
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Access Quantum Cloud
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
              Start Quantum Development
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2025;