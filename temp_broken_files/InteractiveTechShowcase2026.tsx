import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [activeDemo, setActiveDemo] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showcases = [
    // Add showcase items here
  ];

  const techDemos = [
    // Add tech demo items here
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showcases = [
    {
      id: 1,
      title: "AI Consciousness Engine",
      description: "Revolutionary AI that exhibits true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Quantum computing meets neural networks for unprecedented processing power",
      icon: "⚡",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Molecular Manufacturing",
      description: "Build anything atom by atom with molecular precision",
      icon: "🔬",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const techDemos = [
    {
      id: 1,
      name: "Neural Interface",
      description: "Direct brain-computer communication",
      status: "Live Demo"
    },
    {
      id: 2,
      name: "Quantum Processor",
      description: "Real-time quantum computation",
      status: "Beta Testing"
    },
    {
      id: 3,
      name: "Molecular Assembler",
      description: "Atomic-level manufacturing",
      status: "Prototype"
    }
  ];

  const technologies = [
    {
      name: "Conscious AI",
      description: "AI systems with true consciousness",
      progress: 85
    },
    {
      name: "Quantum Computing",
      description: "Quantum supremacy achieved",
      progress: 92
    },
    {
      name: "Neural Interfaces",
      description: "Direct brain-computer connection",
      progress: 78
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our revolutionary innovations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {showcases.map((showcase, index) => (
            <motion.div
              key={showcase.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`bg-gradient-to-br ${showcase.color} p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-4xl mb-4">{showcase.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{showcase.title}</h3>
              <p className="text-gray-200 mb-6">{showcase.description}</p>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-300">
                Explore
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-8 text-center">Live Technology Demos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {techDemos.map((demo, index) => (
              <div key={demo.id} className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{demo.name}</h3>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {demo.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;