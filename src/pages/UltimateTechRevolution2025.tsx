import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateTechRevolution2025: React.FC = () => {
  const [activeRevolution, setActiveRevolution] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const revolutions = {
    ai: {
      title: "AI Consciousness Revolution",
      description: "The dawn of truly conscious artificial intelligence that understands, learns, and evolves beyond human capabilities.",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: [
        "Self-aware AI systems with emotional intelligence",
        "Autonomous learning and adaptation",
        "Human-AI consciousness merging",
        "Creative AI that generates original content",
        "Ethical AI decision making",
        "Predictive consciousness modeling"
      ],
      impact: "Transforming every industry with conscious AI that thinks, feels, and creates"
    },
    quantum: {
      title: "Quantum Reality Revolution",
      description: "Breaking through the barriers of classical computing to unlock infinite computational possibilities.",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      features: [
        "Quantum supremacy in practical applications",
        "Quantum internet and communication",
        "Quantum cryptography and security",
        "Molecular simulation and drug discovery",
        "Quantum machine learning algorithms",
        "Quantum consciousness research"
      ],
      impact: "Solving impossible problems and creating new realities through quantum mechanics"
    },
    neural: {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that seamlessly connect human consciousness with digital systems.",
      icon: "🔗",
      color: "from-green-500 to-emerald-500",
      features: [
        "Non-invasive neural interfaces",
        "Thought-to-action translation",
        "Memory enhancement and storage",
        "Emotional state synchronization",
        "Collective consciousness networks",
        "Neural data visualization"
      ],
      impact: "Bridging the gap between human mind and machine intelligence"
    },
    space: {
      title: "Space Technology Revolution",
      description: "Revolutionary space technologies enabling interplanetary travel and cosmic exploration.",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      features: [
        "Faster-than-light travel systems",
        "Space habitat construction",
        "Asteroid mining technology",
        "Interplanetary communication networks",
        "Space-based manufacturing",
        "Cosmic energy harvesting"
      ],
      impact: "Expanding human civilization beyond Earth into the cosmos"
    }
  };

  const currentRevolution = revolutions[activeRevolution as keyof typeof revolutions];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌟 ULTIMATE TECH REVOLUTION • 2025
          </div>
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Ultimate Tech Revolution 2025
          </h1>
          <p className="text-3xl opacity-90 max-w-5xl mx-auto leading-relaxed">
            Witness the convergence of revolutionary technologies that will reshape reality itself
          </p>
        </motion.div>

        {/* Revolution Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-3 flex flex-wrap gap-2">
            {Object.keys(revolutions).map((revolution) => (
              <button
                key={revolution}
                onClick={() => setActiveRevolution(revolution)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeRevolution === revolution
                    ? `bg-gradient-to-r ${revolutions[revolution as keyof typeof revolutions].color} text-white shadow-2xl transform scale-105`
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{revolutions[revolution as keyof typeof revolutions].icon}</span>
                  <span className="text-lg">{revolutions[revolution as keyof typeof revolutions].title}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Revolution Content */}
        <motion.div
          key={activeRevolution}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Description */}
            <div className="space-y-8">
              <div className="flex items-center mb-8">
                <div className="text-6xl mr-6">{currentRevolution.icon}</div>
                <div>
                  <h2 className="text-5xl font-bold mb-4">{currentRevolution.title}</h2>
                  <p className="text-2xl opacity-90 leading-relaxed">{currentRevolution.description}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Revolutionary Features</h3>
                <ul className="space-y-4">
                  {currentRevolution.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`w-3 h-3 bg-gradient-to-r ${currentRevolution.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Impact */}
            <div className="space-y-8">
              <div className={`bg-gradient-to-br ${currentRevolution.color} rounded-2xl p-8 text-center`}>
                <h3 className="text-3xl font-bold mb-6">Revolutionary Impact</h3>
                <p className="text-xl leading-relaxed">{currentRevolution.impact}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: "Innovation Rate", value: "1000x", description: "Faster than previous generations" },
                  { metric: "Adoption Speed", value: "90%", description: "Of industries affected" },
                  { metric: "Efficiency Gain", value: "500%", description: "Average improvement" },
                  { metric: "Future Impact", value: "∞", description: "Infinite possibilities" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                  >
                    <div className={`text-4xl font-bold bg-gradient-to-r ${currentRevolution.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold mb-1">{stat.metric}</div>
                    <div className="text-sm opacity-80">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Revolution Timeline</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: "2025", phase: "Foundation", description: "Core technologies established" },
              { year: "2026", phase: "Integration", description: "Systems begin working together" },
              { year: "2027", phase: "Acceleration", description: "Exponential growth and adoption" },
              { year: "2028+", phase: "Transformation", description: "Complete reality transformation" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {phase.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                <p className="text-purple-100">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Revolution</h2>
          <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
            Be part of the most transformative technological revolution in human history
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-white/10 transition-all duration-300">
              📚 Learn More
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-white/10 transition-all duration-300">
              💼 Partner With Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateTechRevolution2025;