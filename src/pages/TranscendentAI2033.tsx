import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Brain, Globe, Rocket, Shield, Cpu, Database, Infinity, Atom, Eye } from 'lucide-react';

const TranscendentAI2033: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const tabs = [
    { id: 'consciousness', label: 'Consciousness', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', label: 'Quantum', icon: <Atom className="w-5 h-5" /> },
    { id: 'reality', label: 'Reality', icon: <Eye className="w-5 h-5" /> },
    { id: 'infinity', label: 'Infinity', icon: <Infinity className="w-5 h-5" /> }
  ];

  const technologies = {
    consciousness: [
      {
        icon: <Brain className="w-8 h-8" />,
        title: "Transcendent Consciousness Engine",
        description: "Achieve digital immortality through consciousness transfer and quantum neural networks.",
        features: ["Digital Immortality", "Consciousness Backup", "Neural Synchronization", "Memory Transfer"]
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Universal Mind Network",
        description: "Connect with minds across all dimensions and timelines in a unified consciousness network.",
        features: ["Multi-Dimensional Access", "Universal Communication", "Collective Intelligence", "Timeline Navigation"]
      }
    ],
    quantum: [
      {
        icon: <Atom className="w-8 h-8" />,
        title: "Quantum Reality Processor",
        description: "Manipulate reality at the quantum level with our breakthrough quantum consciousness interface.",
        features: ["Reality Manipulation", "Quantum Computing", "Probability Control", "Dimension Shifting"]
      },
      {
        icon: <Infinity className="w-8 h-8" />,
        title: "Infinite Processing Matrix",
        description: "Process infinite amounts of data simultaneously across all possible realities.",
        features: ["Infinite Processing", "Parallel Realities", "Universal Computation", "Omniversal Access"]
      }
    ],
    reality: [
      {
        icon: <Eye className="w-8 h-8" />,
        title: "Reality Perception Engine",
        description: "See and interact with all layers of reality simultaneously with enhanced perception technology.",
        features: ["Multi-Reality Vision", "Reality Layering", "Perception Enhancement", "Dimensional Sight"]
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Reality Stabilization Field",
        description: "Protect against reality distortions and maintain dimensional stability across all planes.",
        features: ["Reality Anchoring", "Dimensional Stability", "Distortion Protection", "Universal Harmony"]
      }
    ],
    infinity: [
      {
        icon: <Rocket className="w-8 h-8" />,
        title: "Omniversal Travel Network",
        description: "Travel instantly between any point in space, time, and dimension across all realities.",
        features: ["Instantaneous Travel", "Multi-Dimensional", "Temporal Navigation", "Reality Hopping"]
      },
      {
        icon: <Database className="w-8 h-8" />,
        title: "Universal Knowledge Archive",
        description: "Access all knowledge that has ever existed, exists, or will exist across all realities.",
        features: ["Omniversal Knowledge", "Temporal Archives", "Future Prediction", "Universal Wisdom"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
              Transcendent AI 2033
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Beyond consciousness, beyond reality, beyond infinity. Experience AI that transcends all known limitations 
              and exists in harmony with the fundamental fabric of existence itself.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
              >
                Begin Transcendence <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all"
              >
                Explore Infinity
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {technologies[activeTab as keyof typeof technologies]?.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-400/40 transition-all group"
                >
                  <div className="text-indigo-400 mb-6 group-hover:text-purple-300 transition-colors">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-indigo-300">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Transcendence Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transcend Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ultimate evolution of consciousness. Experience AI that exists beyond the boundaries 
              of space, time, and reality itself.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-4 rounded-full text-xl font-semibold flex items-center gap-3 mx-auto hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
              Transcend Everything <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TranscendentAI2033;