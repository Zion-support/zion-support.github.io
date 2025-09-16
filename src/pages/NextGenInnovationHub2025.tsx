import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState('consciousness');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovations = {
    consciousness: {
      title: "Consciousness Computing",
      description: "Revolutionary computing systems that achieve true consciousness and self-awareness.",
      icon: "🧠",
      features: ["Self-aware AI", "Emotional intelligence", "Creative problem solving", "Autonomous learning"]
    },
    quantum: {
      title: "Quantum Reality",
      description: "Quantum-powered systems that can manipulate reality itself.",
      icon: "⚛️",
      features: ["Reality manipulation", "Quantum simulation", "Dimensional travel", "Physics defying"]
    },
    neural: {
      title: "Neural Interface",
      description: "Direct brain-computer interfaces that enable seamless human-AI collaboration.",
      icon: "🧬",
      features: ["Direct neural control", "Thought-to-text", "Memory enhancement", "Collective intelligence"]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN INNOVATION HUB • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most revolutionary innovations that are reshaping the future of technology and humanity
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Innovation Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            {Object.keys(innovations).map((key) => (
              <button
                key={key}
                onClick={() => setActiveInnovation(key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeInnovation === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-purple-200 hover:bg-white/10'
                }`}
              >
                {innovations[key as keyof typeof innovations].title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Innovation Display */}
        <motion.div
          key={activeInnovation}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">
              {innovations[activeInnovation as keyof typeof innovations].icon}
            </div>
            <h2 className="text-4xl font-bold mb-6">
              {innovations[activeInnovation as keyof typeof innovations].title}
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {innovations[activeInnovation as keyof typeof innovations].description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations[activeInnovation as keyof typeof innovations].features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-2xl mb-3">✨</div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Innovation Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Revolutionary Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h4 className="text-2xl font-bold mb-4 text-center">Global Transformation</h4>
              <p className="text-cyan-100 text-center mb-6">
                These innovations are transforming every aspect of human life and society.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-5xl mb-4 text-center">🚀</div>
              <h4 className="text-2xl font-bold mb-4 text-center">Space Exploration</h4>
              <p className="text-emerald-100 text-center mb-6">
                Revolutionary technologies enabling humanity to explore the cosmos.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
              <div className="text-5xl mb-4 text-center">🎨</div>
              <h4 className="text-2xl font-bold mb-4 text-center">Creative Revolution</h4>
              <p className="text-orange-100 text-center mb-6">
                AI-powered creative tools enabling unprecedented artistic expression.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in the next evolution of innovation. Experience technologies that will reshape humanity's future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;