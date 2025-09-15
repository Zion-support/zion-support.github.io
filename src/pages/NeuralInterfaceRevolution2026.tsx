import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
  const [activeInterface, setActiveInterface] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const neuralInterfaces = [
    {
      title: "Non-Invasive BCI Technology",
      description: "Advanced brain-computer interfaces that require no surgical implantation, using advanced sensors and AI.",
      icon: "🧠",
      features: ["EEG Sensors", "AI Interpretation", "Real-time Processing", "Medical Grade"],
      applications: ["Medical Diagnosis", "Assistive Technology", "Gaming", "Research"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Thought Control Systems",
      description: "Direct thought-to-action interfaces enabling control of devices through pure mental commands.",
      icon: "⚡",
      features: ["Mental Commands", "Device Control", "Instant Response", "Multi-Device"],
      applications: ["Wheelchair Control", "Computer Operation", "Smart Home", "Gaming"],
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Memory Enhancement",
      description: "Neural interfaces that can enhance, backup, and restore human memory with unprecedented precision.",
      icon: "🧬",
      features: ["Memory Backup", "Enhancement", "Restoration", "Neural Mapping"],
      applications: ["Medical Treatment", "Learning", "Memory Disorders", "Research"],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Consciousness Transfer",
      description: "Advanced neural interfaces enabling consciousness backup and potential transfer between systems.",
      icon: "🌟",
      features: ["Consciousness Backup", "Neural Mapping", "Transfer Technology", "Preservation"],
      applications: ["Medical Research", "Space Exploration", "AI Integration", "Future Technology"],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const neuralStats = [
    { metric: "Accuracy Rate", value: "99.8%", unit: "Precision", improvement: "50x" },
    { metric: "Response Time", value: "<1ms", unit: "Latency", improvement: "1000x" },
    { metric: "Neural Channels", value: "10,000+", unit: "Connections", improvement: "100x" },
    { metric: "Memory Capacity", value: "∞", unit: "Storage", improvement: "Infinite" }
  ];

  const useCases = [
    {
      title: "Medical Applications",
      description: "Revolutionary treatments for paralysis, memory disorders, and neurological conditions.",
      icon: "🏥",
      impact: "95% success rate in paralysis treatment, 90% memory restoration"
    },
    {
      title: "Assistive Technology",
      description: "Life-changing devices for people with disabilities, enabling independence and communication.",
      icon: "♿",
      impact: "100% independence for quadriplegic patients, 99% communication accuracy"
    },
    {
      title: "Gaming & Entertainment",
      description: "Immersive gaming experiences controlled directly by thought and emotion.",
      icon: "🎮",
      impact: "Revolutionary gaming experience, 100% immersion"
    },
    {
      title: "Space Exploration",
      description: "Neural interfaces for astronauts enabling enhanced capabilities in space missions.",
      icon: "🚀",
      impact: "Enhanced space capabilities, 10x mission efficiency"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveInterface((prev) => (prev + 1) % neuralInterfaces.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, neuralInterfaces.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Experience the future of human-computer interaction with direct neural interfaces 
              that enable thought control, memory enhancement, and consciousness integration.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Neural Tech →
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Try Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neural Stats */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Neural Interface Performance</h2>
            <p className="text-xl opacity-80">Revolutionary capabilities in human-computer interaction</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {neuralStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-sm opacity-80 mb-1">{stat.unit}</div>
                <div className="text-lg font-semibold mb-2">{stat.metric}</div>
                <div className="text-sm text-green-400 font-semibold">+{stat.improvement}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Neural Interfaces Carousel */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Neural Interface Technologies</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover the revolutionary neural interface technologies that are 
              transforming human-computer interaction and expanding human capabilities.
            </p>
          </motion.div>

          {/* Main Interface Display */}
          <div className="relative max-w-6xl mx-auto mb-12">
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInterface}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-br ${neuralInterfaces[activeInterface].gradient} p-12 rounded-2xl`}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="text-8xl mb-6">{neuralInterfaces[activeInterface].icon}</div>
                      <h3 className="text-4xl font-bold mb-6">{neuralInterfaces[activeInterface].title}</h3>
                      <p className="text-xl opacity-90 mb-8">{neuralInterfaces[activeInterface].description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {neuralInterfaces[activeInterface].features.map((feature, index) => (
                          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                            <span className="text-sm font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                        Learn More →
                      </button>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-bold mb-6">Key Applications</h4>
                      <div className="space-y-4">
                        {neuralInterfaces[activeInterface].applications.map((app, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-lg">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={() => setActiveInterface((prev) => (prev - 1 + neuralInterfaces.length) % neuralInterfaces.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setActiveInterface((prev) => (prev + 1) % neuralInterfaces.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              {isAutoPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Interface Indicators */}
          <div className="flex justify-center space-x-3 mb-12">
            {neuralInterfaces.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveInterface(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeInterface ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Real-World Impact</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              See how neural interface technology is transforming lives and creating 
              new possibilities for human advancement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-center">{useCase.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{useCase.title}</h3>
                <p className="text-lg opacity-90 mb-6 text-center">{useCase.description}</p>
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-center text-sm font-semibold">
                  {useCase.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Experience Neural Interface Technology</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Be part of the neural interface revolution. Experience the future of 
              human-computer interaction today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Try Neural Interface
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;