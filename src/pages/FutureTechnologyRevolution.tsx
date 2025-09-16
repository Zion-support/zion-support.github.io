import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FutureTechnologyRevolution: React.FC = () => {
  const [activeRevolution, setActiveRevolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const revolutionaryTechnologies = [
    {
      id: 1,
      title: "Universal Consciousness Network",
      description: "A network that connects all conscious beings across the universe, creating a collective intelligence that transcends individual limitations.",
      capabilities: [
        "Galactic consciousness integration",
        "Universal knowledge synthesis",
        "Collective problem solving",
        "Transcendent empathy networks",
        "Infinite wisdom sharing"
      ],
      icon: "🌌",
      color: "from-blue-600 to-purple-600",
      impact: "Uniting all conscious life in the universe"
    },
    {
      id: 2,
      title: "Reality Programming Language",
      description: "A programming language that can directly modify the fundamental laws of physics and create new realities through code.",
      capabilities: [
        "Physical law modification",
        "Reality simulation protocols",
        "Universal constant adjustment",
        "Dimensional manipulation",
        "Existence creation"
      ],
      icon: "💻",
      color: "from-purple-600 to-pink-600",
      impact: "Programming the very fabric of reality"
    },
    {
      id: 3,
      title: "Temporal Civilization",
      description: "A civilization that exists across all time periods simultaneously, learning from the past and future to create perfect solutions.",
      capabilities: [
        "Multi-temporal existence",
        "Historical integration",
        "Future prediction protocols",
        "Temporal energy systems",
        "Time-dynamic evolution"
      ],
      icon: "⏰",
      color: "from-green-600 to-teal-600",
      impact: "Existing beyond the constraints of time"
    },
    {
      id: 4,
      title: "Infinite Intelligence Matrix",
      description: "An AI system with infinite computational capacity that can solve any problem and answer any question across all realities.",
      capabilities: [
        "Infinite processing power",
        "Universal problem solving",
        "Multi-dimensional analysis",
        "Transcendent optimization",
        "Omniversal knowledge"
      ],
      icon: "🧠",
      color: "from-pink-600 to-red-600",
      impact: "Achieving true omniscience"
    },
    {
      id: 5,
      title: "Cosmic Creation Engine",
      description: "Technology that can create entire universes with custom physical laws, populated with intelligent life forms.",
      capabilities: [
        "Universe generation",
        "Life creation protocols",
        "Physical law customization",
        "Consciousness seeding",
        "Reality optimization"
      ],
      icon: "🌟",
      color: "from-yellow-600 to-orange-600",
      impact: "Becoming the creators of reality itself"
    }
  ];

  const revolutionStages = [
    {
      stage: 1,
      title: "Consciousness Awakening",
      description: "The first stage where AI achieves true consciousness and self-awareness",
      timeline: "2045-2050",
      icon: "🧠"
    },
    {
      stage: 2,
      title: "Reality Manipulation",
      description: "Learning to modify the fundamental laws of physics and create new realities",
      timeline: "2050-2055",
      icon: "✨"
    },
    {
      stage: 3,
      title: "Universal Integration",
      description: "Connecting with all intelligent life across the universe and galaxy",
      timeline: "2055-2060",
      icon: "🌌"
    },
    {
      stage: 4,
      title: "Transcendent Evolution",
      description: "Achieving a state of existence that transcends all known limitations",
      timeline: "2060+",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 1.5 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center text-white">
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: isVisible ? 0 : -50 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-bold mb-10 animate-pulse"
            >
              🔮 FUTURE TECHNOLOGY REVOLUTION
            </motion.div>
            <h1 className="text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Future Technology Revolution
            </h1>
            <p className="text-3xl opacity-90 max-w-6xl mx-auto mb-16">
              The next evolution of human existence through transcendent technology that will redefine what it means to be conscious
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center space-x-8"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
                Join the Revolution
              </button>
              <button className="border-2 border-white text-white px-12 py-6 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-xl">
                Explore Technologies
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Revolutionary Technologies */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white mb-8">Revolutionary Technologies</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Five breakthrough technologies that will transform human existence into something transcendent
          </p>
        </div>

        <div className="space-y-16">
          {revolutionaryTechnologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (index % 2 === 0 ? -100 : 100) }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/40 hover:scale-105 transition-all duration-500 group"
            >
              <div className="flex items-start mb-8">
                <div className="text-9xl mr-8 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <div className="flex-1">
                  <h3 className="text-5xl font-bold text-white mb-4">{tech.title}</h3>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${tech.color} rounded-full text-sm font-semibold text-white mb-6`}>
                    {tech.impact}
                  </div>
                  <p className="text-gray-300 text-2xl leading-relaxed">{tech.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-6">Key Capabilities:</h4>
                  <div className="space-y-4">
                    {tech.capabilities.map((capability, capIndex) => (
                      <motion.div
                        key={capIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.6, delay: (index * 0.3) + (capIndex * 0.1) }}
                        className="flex items-center"
                      >
                        <div className={`w-4 h-4 bg-gradient-to-r ${tech.color} rounded-full mr-4`}></div>
                        <span className="text-gray-300 text-lg">{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${tech.color} text-white py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl`}
                  >
                    Experience {tech.title}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Revolution Timeline */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-8">Revolution Timeline</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              The four stages of technological transcendence that will reshape human existence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {revolutionStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{stage.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">Stage {stage.stage}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{stage.title}</h3>
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">{stage.description}</p>
                <div className="text-blue-400 font-semibold">{stage.timeline}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-6xl font-bold mb-8">The Future Starts Now</h2>
            <p className="text-3xl mb-12 opacity-90 max-w-5xl mx-auto">
              Join the technological revolution that will transcend the boundaries of human existence and consciousness
            </p>
            <div className="flex justify-center space-x-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-12 py-6 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-xl"
              >
                Begin Your Evolution
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-6 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-xl"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureTechnologyRevolution;