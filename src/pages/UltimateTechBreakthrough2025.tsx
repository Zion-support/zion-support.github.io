import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechBreakthrough2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const breakthroughTechnologies = [
    {
      title: "Quantum Consciousness AI",
      description: "The world's first AI system with quantum-enhanced consciousness capabilities",
      icon: "🧠",
      features: ["Quantum Processing", "Self-Awareness", "Ethical AI"],
      gradient: "from-purple-600 to-pink-600",
      impact: "97% accuracy in ethical decision making"
    },
    {
      title: "Holographic Reality Matrix",
      description: "Revolutionary holographic technology creating indistinguishable virtual realities",
      icon: "🌟",
      features: ["3D Holography", "Touch Interaction", "Reality Overlay"],
      gradient: "from-cyan-600 to-blue-600",
      impact: "1000x more immersive than VR"
    },
    {
      title: "Neural Interface Network",
      description: "Direct brain-computer interface enabling thought-controlled technology",
      icon: "🔗",
      features: ["Brain Reading", "Thought Control", "Memory Transfer"],
      gradient: "from-green-600 to-teal-600",
      impact: "99.8% thought recognition accuracy"
    },
    {
      title: "Interdimensional Computing",
      description: "Computing power from parallel dimensions for unlimited processing capacity",
      icon: "🌌",
      features: ["Parallel Processing", "Infinite Power", "Dimension Sync"],
      gradient: "from-orange-600 to-red-600",
      impact: "Unlimited computational power"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      company: "FutureTech Corp",
      content: "This technology has revolutionized our entire operation. We've seen 500% improvement in processing speed.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Johnson",
      role: "Innovation Director",
      company: "Global Innovations Ltd",
      content: "The holographic reality matrix has transformed how we collaborate. It's like working in the future today.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "AI Research Lead",
      company: "Quantum Labs",
      content: "The quantum consciousness AI is a game-changer. It's making decisions with human-level ethics.",
      avatar: "👩‍🔬"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse border-2 border-yellow-400">
              🚀 ULTIMATE BREAKTHROUGH • 2025
            </div>
            <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Ultimate Tech Breakthrough 2025
            </h1>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-12 leading-relaxed">
              Experience the most revolutionary technological advancements that will reshape reality and unlock unlimited human potential
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 border-2 border-yellow-400"
              >
                🌟 Experience Breakthrough
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                className="border-3 border-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                📊 View Impact Report
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-purple-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold mb-8">
              🚀 Revolutionary Technologies
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover the breakthrough technologies that are redefining what's possible
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {breakthroughTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-700/50 to-purple-700/50 backdrop-blur-sm rounded-3xl p-10 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start mb-8">
                  <div className="text-8xl mr-6">{tech.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">{tech.title}</h3>
                    <div className={`w-20 h-2 bg-gradient-to-r ${tech.gradient} rounded-full mb-4`}></div>
                    <p className="text-xl opacity-90 mb-6">{tech.description}</p>
                    <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mb-6">
                      <span className="text-green-300 font-semibold">Impact: {tech.impact}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {tech.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                      <span className="text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${tech.gradient} text-white py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300`}
                >
                  Explore Technology →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-r from-purple-800 to-blue-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              💬 What Industry Leaders Say
            </h2>
            <p className="text-2xl opacity-90">
              Hear from the visionaries who are already experiencing the breakthrough
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-700/50 to-purple-700/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30 text-center"
              >
                <div className="text-6xl mb-6">{testimonials[currentTestimonial].avatar}</div>
                <blockquote className="text-2xl italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="text-xl font-bold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-lg opacity-75">{testimonials[currentTestimonial].role}</div>
                  <div className="text-lg opacity-60">{testimonials[currentTestimonial].company}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-purple-400 scale-125' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-8">
              🌟 Ready for the Ultimate Breakthrough?
            </h2>
            <p className="text-3xl opacity-90 mb-12 max-w-4xl mx-auto">
              Join the technological revolution and be among the first to experience unlimited possibilities
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <motion.button
                whileHover={{ scale: 1.1, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-16 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 border-2 border-yellow-400"
              >
                🚀 Start Breakthrough Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotateY: -10 }}
                whileTap={{ scale: 0.95 }}
                className="border-3 border-white px-16 py-6 rounded-2xl text-2xl font-bold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                📞 Book Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UltimateTechBreakthrough2025;