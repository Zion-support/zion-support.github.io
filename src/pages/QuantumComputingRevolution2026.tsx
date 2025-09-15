import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuantumComputingRevolution2026: React.FC = () => {
  const [activeQuantum, setActiveQuantum] = useState('supremacy');
  const [quantumState, setQuantumState] = useState(0);

  const quantumPhases = {
    supremacy: {
      title: "Quantum Supremacy",
      description: "Achieving computational tasks impossible for classical computers",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500"
    },
    cryptography: {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum principles",
      icon: "🔐",
      color: "from-purple-500 to-pink-500"
    },
    simulation: {
      title: "Quantum Simulation",
      description: "Modeling complex molecular and atomic systems",
      icon: "🧬",
      color: "from-emerald-500 to-teal-500"
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-bold mb-6">
              ⚛️ QUANTUM REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Quantum Computing Revolution 2026
            </h1>
            <p className="text-2xl text-cyan-200 max-w-4xl mx-auto mb-8">
              Experience the future of computing with quantum processors that solve impossible problems
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Quantum Power →
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
                View Quantum Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Phases */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Quantum Computing Phases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the revolutionary phases of quantum computing that are reshaping our world
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            {Object.entries(quantumPhases).map(([key, phase]) => (
              <button
                key={key}
                onClick={() => setActiveQuantum(key)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeQuantum === key
                    ? `bg-gradient-to-r ${phase.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-3">{phase.icon}</span>
                {phase.title}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{quantumPhases[activeQuantum as keyof typeof quantumPhases].icon}</div>
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {quantumPhases[activeQuantum as keyof typeof quantumPhases].title}
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                {quantumPhases[activeQuantum as keyof typeof quantumPhases].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Capabilities */}
      <div className="py-20 px-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the groundbreaking capabilities that quantum computing brings to the table
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Exponential Speed",
                description: "Process information at speeds impossible for classical computers",
                icon: "⚡",
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Quantum Cryptography",
                description: "Unbreakable encryption using quantum key distribution",
                icon: "🔐",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Molecular Simulation",
                description: "Simulate complex molecular structures for drug discovery",
                icon: "🧬",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Optimization Problems",
                description: "Solve complex optimization problems in seconds",
                icon: "🎯",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Machine Learning",
                description: "Quantum-enhanced machine learning algorithms",
                icon: "🤖",
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Financial Modeling",
                description: "Revolutionary financial risk analysis and modeling",
                icon: "💰",
                color: "from-green-500 to-emerald-500"
              }
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-6 text-center">{capability.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300 text-center">{capability.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{capability.description}</p>
                <div className={`w-full h-2 bg-gradient-to-r ${capability.color} rounded-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join the Quantum Revolution
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Be part of the most transformative computing revolution in human history
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Start Quantum Journey →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-2xl text-xl font-bold hover:bg-cyan-400/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2026;