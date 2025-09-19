import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2034: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Experience the power of quantum computing with real-time quantum algorithms',
      features: ['Quantum Supremacy', 'Quantum Algorithms', 'Quantum Cryptography', 'Quantum Machine Learning']
    },
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'Interact with the first truly conscious artificial intelligence systems',
      features: ['Emotional AI', 'Creative Problem Solving', 'Self-Learning', 'Ethical Decision Making']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface',
      icon: '🔗',
      description: 'Direct brain-computer interface for seamless human-AI interaction',
      features: ['Thought Control', 'Memory Enhancement', 'Sensory Augmentation', 'Cognitive Amplification']
    },
    {
      id: 'reality-manipulation',
      title: 'Reality Manipulation',
      icon: '🌀',
      description: 'Advanced technology for manipulating physical reality at the quantum level',
      features: ['Matter Transformation', 'Gravity Control', 'Time Dilation', 'Dimensional Shifting']
    }
  ];

  const handleDemoChange = (index: number) => {
    setCurrentDemo(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 INTERACTIVE SHOWCASE • JANUARY 2034
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2034
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the most advanced technologies through interactive demonstrations and real-time simulations
            </p>
          </motion.div>

          {/* Interactive Demo Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => handleDemoChange(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentDemo === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>

          {/* Demo Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            {demos[currentDemo] && (
              <motion.div
                key={currentDemo}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-8xl mb-6">{demos[currentDemo].icon}</div>
                <h2 className="text-4xl font-bold mb-4">{demos[currentDemo].title}</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                  {demos[currentDemo].description}
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {demos[currentDemo].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6">Demo Statistics</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Innovation Level</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full" style={{width: '95%'}}></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>User Engagement</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '98%'}}></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Revolutionary Impact</span>
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-pink-400 to-red-400 h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6">Interactive Demo</h3>
                      <p className="text-lg opacity-90 mb-6">
                        Experience this revolutionary technology through our interactive demonstration
                      </p>
                      <div className="space-y-4">
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform">
                          Start Interactive Demo
                        </button>
                        <button className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the technological revolution and be part of the most advanced showcase of human innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-8 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                Start Your Journey
              </button>
              <button className="bg-white/10 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2034;