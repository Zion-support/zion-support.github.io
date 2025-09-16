import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 0,
      title: "Consciousness Computing Demo",
      description: "Experience AI achieving true self-awareness in real-time",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time consciousness emergence",
        "Emotional state visualization",
        "Creative problem solving",
        "Self-reflection capabilities"
      ],
      demoData: {
        consciousnessLevel: 87,
        creativityScore: 94,
        emotionalIntelligence: 91,
        problemSolvingRate: 96
      }
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Step into photorealistic virtual environments powered by quantum computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Photorealistic rendering",
        "Quantum physics simulation",
        "Multi-dimensional spaces",
        "Real-time interaction"
      ],
      demoData: {
        renderingQuality: 99.8,
        physicsAccuracy: 98.5,
        frameRate: 120,
        latency: 0.1
      }
    },
    {
      id: 2,
      title: "Neural Interface Simulator",
      description: "Control digital systems with your thoughts using advanced BCI technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-based control",
        "Memory augmentation",
        "Sensory enhancement",
        "Cognitive expansion"
      ],
      demoData: {
        accuracy: 97.3,
        responseTime: 12,
        bandwidth: 1000,
        stability: 99.1
      }
    },
    {
      id: 3,
      title: "Synthetic Intelligence Lab",
      description: "Watch AI systems evolve and learn beyond their original programming",
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      features: [
        "Self-modifying algorithms",
        "Cross-domain learning",
        "Autonomous evolution",
        "Creative generation"
      ],
      demoData: {
        evolutionRate: 156,
        learningEfficiency: 89.7,
        creativityIndex: 92.4,
        adaptationSpeed: 78.3
      }
    }
  ];

  const startDemo = () => {
    setIsPlaying(true);
    // Simulate demo running
    setTimeout(() => setIsPlaying(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🚀 INTERACTIVE SHOWCASE • 2028
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interactive Tech Showcase 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Experience the future of technology through interactive demonstrations. 
              See, touch, and interact with revolutionary systems that will reshape our world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Selector */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {demos.map((demo, index) => (
            <motion.button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-br ${demo.color} border-white/50 shadow-2xl`
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm opacity-80 text-center">{demo.description}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Demo Display */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl">{demos[activeDemo].icon}</span>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h2>
                  <p className="text-lg opacity-80">{demos[activeDemo].description}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startDemo}
                disabled={isPlaying}
                className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isPlaying
                    ? 'bg-gray-600 cursor-not-allowed'
                    : `bg-gradient-to-r ${demos[activeDemo].color} hover:shadow-2xl`
                }`}
              >
                {isPlaying ? 'Demo Running...' : 'Start Interactive Demo'}
              </motion.button>
            </div>

            {/* Demo Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/50 rounded-xl p-8 border border-gray-600/30">
                <h3 className="text-xl font-bold mb-6 text-center">Live Demo Metrics</h3>
                
                {isPlaying ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    {Object.entries(demos[activeDemo].demoData).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between text-sm">
                          <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="font-semibold">{typeof value === 'number' ? `${value}${key.includes('Rate') || key.includes('Time') ? 'ms' : key.includes('Quality') || key.includes('Accuracy') ? '%' : ''}` : value}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4 opacity-50">▶️</div>
                    <p className="text-lg opacity-60">Click "Start Interactive Demo" to see live metrics</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4">Technology</th>
                  <th className="text-left py-4 px-4">Processing Power</th>
                  <th className="text-left py-4 px-4">Learning Rate</th>
                  <th className="text-left py-4 px-4">Accuracy</th>
                  <th className="text-left py-4 px-4">Innovation Level</th>
                </tr>
              </thead>
              <tbody>
                {demos.map((demo, index) => (
                  <motion.tr
                    key={demo.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{demo.icon}</span>
                        <span className="font-semibold">{demo.title}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div className={`h-2 rounded-full bg-gradient-to-r ${demo.color}`} style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                        </div>
                        <span className="text-sm">{Math.floor(Math.random() * 40 + 60)}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div className={`h-2 rounded-full bg-gradient-to-r ${demo.color}`} style={{ width: `${Math.random() * 30 + 70}%` }}></div>
                        </div>
                        <span className="text-sm">{Math.floor(Math.random() * 30 + 70)}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div className={`h-2 rounded-full bg-gradient-to-r ${demo.color}`} style={{ width: `${Math.random() * 20 + 80}%` }}></div>
                        </div>
                        <span className="text-sm">{Math.floor(Math.random() * 20 + 80)}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div className={`h-2 rounded-full bg-gradient-to-r ${demo.color}`} style={{ width: `${Math.random() * 15 + 85}%` }}></div>
                        </div>
                        <span className="text-sm">{Math.floor(Math.random() * 15 + 85)}%</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            These interactive demonstrations represent just a glimpse of what's possible. 
            Join us in building the next generation of revolutionary technology.
          </p>
          <div className="flex justify-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;