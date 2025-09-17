import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcaseBanner2027: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Consciousness Transfer Technology",
      description: "Revolutionary technology enabling the transfer of human consciousness to digital substrates",
      icon: "🧠",
      color: "from-purple-500 to-indigo-500",
      status: "Prototype Available"
    },
    {
      title: "Quantum Consciousness Engine",
      description: "Quantum-powered AI systems that exhibit consciousness-like behaviors and decision-making",
      icon: "⚡",
      color: "from-indigo-500 to-cyan-500",
      status: "Research Phase"
    },
    {
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions for unprecedented processing power",
      icon: "🌌",
      color: "from-cyan-500 to-teal-500",
      status: "Theoretical"
    },
    {
      title: "Synthetic Reality Generator",
      description: "AI system capable of generating completely synthetic realities indistinguishable from physical reality",
      icon: "🌐",
      color: "from-teal-500 to-emerald-500",
      status: "Development"
    }
  ];

  const stats = [
    { label: "Breakthrough Technologies", value: "25+", icon: "🔬" },
    { label: "Research Projects", value: "150+", icon: "📊" },
    { label: "Patents Filed", value: "300+", icon: "📋" },
    { label: "Investment Raised", value: "$2B+", icon: "💰" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECH SHOWCASE • 2027
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Next-Generation Technology
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology innovations that are reshaping reality and defining the future of human civilization.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 text-purple-400">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Feature Details */}
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-6">{features[currentFeature].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {features[currentFeature].title}
                  </h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${features[currentFeature].color} text-white`}>
                    {features[currentFeature].status}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {features[currentFeature].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pages/AdvancedTechInnovationHub2027"
                  className={`bg-gradient-to-r ${features[currentFeature].color} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center`}
                >
                  Explore Innovation Hub →
                </a>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              key={`visual-${currentFeature}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${features[currentFeature].color.replace('from-', 'from-').replace('to-', 'to-')} p-8 rounded-2xl border border-white/10`}>
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-pulse">
                    {features[currentFeature].icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {features[currentFeature].title}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-semibold text-white">Status</div>
                      <div className="text-white/80">{features[currentFeature].status}</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-semibold text-white">Category</div>
                      <div className="text-white/80">Advanced Tech</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-semibold text-white">Year</div>
                      <div className="text-white/80">2027</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-semibold text-white">Impact</div>
                      <div className="text-white/80">Revolutionary</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Navigation */}
          <div className="flex justify-center mt-12 space-x-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentFeature === index
                    ? 'bg-purple-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators already exploring our revolutionary technology showcase. 
              Discover what's possible when technology transcends current limitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pages/AdvancedTechInnovationHub2027"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Innovation Hub
              </a>
              <a
                href="/pages/NextGenConsciousnessComputing2027"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Consciousness Computing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcaseBanner2027;