import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UltimateTechBreakthrough2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const breakthroughTechnologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "AI that demonstrates genuine understanding, creativity, and emotional intelligence",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Contextual Understanding",
        "Creative Problem Solving", 
        "Emotional Intelligence",
        "Self-Reflection Capabilities"
      ],
      demo: "AI Assistant demonstrating contextual conversation and creative thinking"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Hybrid quantum-classical neural networks achieving unprecedented computational power",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "Exponential Speed Increase",
        "Quantum Entanglement Processing",
        "Parallel Universe Simulation",
        "Superposition Learning"
      ],
      demo: "Real-time quantum algorithm processing complex optimization problems"
    },
    {
      id: 3,
      title: "Neural Reality Engine",
      description: "Direct neural interface technology that creates immersive virtual experiences",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "Direct Brain Interface",
        "Immersive Virtual Reality",
        "Thought-Based Control",
        "Neural Feedback Systems"
      ],
      demo: "Interactive neural interface demonstration with thought-controlled navigation"
    },
    {
      id: 4,
      title: "Autonomous Business AI",
      description: "Self-managing AI systems that operate entire business operations independently",
      icon: "🤖",
      gradient: "from-orange-600 to-red-600",
      features: [
        "Autonomous Decision Making",
        "Self-Optimization",
        "Predictive Analytics",
        "Adaptive Strategy"
      ],
      demo: "Live dashboard showing autonomous AI managing multiple business processes"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % breakthroughTechnologies.length);
        setIsAnimating(false);
      }, 300);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentTech = breakthroughTechnologies[activeDemo];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 ULTIMATE BREAKTHROUGH • 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate Tech Breakthrough 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Witness the most revolutionary technological breakthroughs in human history. These innovations will reshape reality itself.
            </p>
          </div>

          {/* Breakthrough Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {breakthroughs.map((breakthrough, index) => (
              <motion.div
                key={breakthrough.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{breakthrough.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold">{breakthrough.title}</h3>
                    <p className="text-purple-300 text-sm">{breakthrough.timeline}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {breakthrough.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Impact:</h4>
                  <p className="text-gray-300 text-sm">{breakthrough.impact}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">Key Features:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    {breakthrough.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{breakthrough.stats.efficiency}</div>
                    <div className="text-xs text-gray-300">Efficiency</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{breakthrough.stats.accuracy}</div>
                    <div className="text-xs text-gray-300">Accuracy</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">{breakthrough.stats.speed}</div>
                    <div className="text-xs text-gray-300">Speed</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-400">{breakthrough.stats.cost}</div>
                    <div className="text-xs text-gray-300">Cost Reduction</div>
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${breakthrough.gradient} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore Breakthrough →
                </button>
              </motion.div>
            ))}
          </div>

          {/* Applications Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Applications</h2>
              <p className="text-xl opacity-90">Transforming every aspect of human existence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="text-5xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{app.category}</h3>
                  <p className="text-gray-300 mb-6 text-sm">{app.description}</p>
                  <ul className="text-gray-400 space-y-2 text-xs text-left">
                    {app.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expert Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">💬 Expert Testimonials</h2>
              <p className="text-xl opacity-90">Hear from leading experts in the field</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.7 + 0.1 * index }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                  <p className="text-gray-300 mb-6 text-center italic">"{testimonial.content}"</p>
                  <div className="text-center">
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold mb-4">Be Part of the Revolution</h2>
              <p className="text-xl mb-8 opacity-90">
                Join the select few who will experience these breakthrough technologies first
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  Join Early Access →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UltimateTechBreakthrough2025;
