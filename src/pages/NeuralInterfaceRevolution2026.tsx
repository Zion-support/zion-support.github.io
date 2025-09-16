import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Eye, Ear, Hand, Heart } from 'lucide-react';

const NeuralInterfaceRevolution2026 = () => {
  const interfaceTypes = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Direct Neural Link",
      description: "Seamless brain-computer interface that allows direct thought-to-computer communication without any physical interaction.",
      capabilities: ["Thought Control", "Memory Upload", "Instant Learning", "Telepathic Communication"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Neural Interface",
      description: "Augmented reality directly integrated into your visual cortex, overlaying digital information onto your natural sight.",
      capabilities: ["AR Overlay", "Night Vision", "Microscopic Vision", "X-Ray Vision"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Ear className="w-8 h-8" />,
      title: "Auditory Enhancement",
      description: "Neural audio processing that enhances hearing capabilities and enables direct audio-to-brain communication.",
      capabilities: ["Super Hearing", "Language Translation", "Audio Memory", "Sound Visualization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: "Tactile Neural Feedback",
      description: "Advanced haptic feedback that allows you to feel virtual objects and textures through neural stimulation.",
      capabilities: ["Virtual Touch", "Texture Simulation", "Force Feedback", "Temperature Sensing"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional Interface",
      description: "Neural systems that can read, interpret, and enhance emotional states for optimal human-AI collaboration.",
      capabilities: ["Emotion Reading", "Mood Enhancement", "Stress Reduction", "Empathy Amplification"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cognitive Enhancement",
      description: "Neural implants that boost cognitive abilities, memory, and processing speed beyond natural human limits.",
      capabilities: ["Memory Boost", "Speed Thinking", "Enhanced Focus", "Creative Amplification"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const revolutionStats = [
    { number: "99.9%", label: "Accuracy", description: "Neural signal interpretation precision" },
    { number: "0.001s", label: "Response Time", description: "Instant thought-to-action processing" },
    { number: "1000x", label: "Enhancement", description: "Cognitive ability amplification" },
    { number: "24/7", label: "Operation", description: "Continuous neural interface availability" }
  ];

  const applications = [
    {
      title: "Medical Breakthroughs",
      description: "Restore sight to the blind, hearing to the deaf, and mobility to the paralyzed through direct neural interfaces.",
      impact: "Transform healthcare forever"
    },
    {
      title: "Education Revolution",
      description: "Instant knowledge transfer and skill acquisition through direct neural learning protocols.",
      impact: "Learn anything instantly"
    },
    {
      title: "Creative Expression",
      description: "Create art, music, and literature directly from your thoughts and emotions.",
      impact: "Unleash unlimited creativity"
    },
    {
      title: "Communication Evolution",
      description: "Telepathic communication and shared experiences between connected individuals.",
      impact: "Revolutionize human connection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Neural Interface
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Revolution
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-300">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Direct brain-computer interfaces that merge human consciousness with artificial intelligence. 
              Experience the future of human-computer interaction through seamless neural integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Experience Neural Link
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
              >
                View Capabilities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolution Stats */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {revolutionStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interface Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Six Types of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Neural Interfaces
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary neural interface technology offers six distinct types of 
              human-computer integration, each designed for specific capabilities and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interfaceTypes.map((interfaceType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${interfaceType.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {interfaceType.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{interfaceType.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{interfaceType.description}</p>
                  <div className="space-y-2">
                    {interfaceType.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transformative
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Applications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Neural interfaces will revolutionize every aspect of human life, 
              from healthcare to creativity to communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{app.description}</p>
                <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {app.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Merge with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Technology?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              The future of human-computer interaction is here. Experience the seamless 
              integration of human consciousness with artificial intelligence.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300">
                Begin Neural Integration
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;