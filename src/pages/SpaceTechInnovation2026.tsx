import React from 'react';
import { motion } from 'framer-motion';

const SpaceTechInnovation2026: React.FC = () => {
  const technologies = [
    {
      name: "Faster-Than-Light Propulsion",
      icon: "🚀",
      description: "Revolutionary propulsion systems that enable faster-than-light travel across the galaxy",
      capabilities: ["Warp Drive Technology", "Quantum Tunneling", "Space-Time Manipulation", "Interstellar Navigation"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Space Habitat Systems",
      icon: "🏠",
      description: "Self-sustaining space habitats with advanced life support and artificial gravity",
      capabilities: ["Artificial Gravity", "Life Support Systems", "Resource Recycling", "Atmospheric Generation"],
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Asteroid Mining Platform",
      icon: "⛏️",
      description: "Advanced mining systems for extracting resources from asteroids and celestial bodies",
      capabilities: ["Automated Mining", "Resource Processing", "Transport Systems", "Quality Control"],
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Interplanetary Communication",
      icon: "📡",
      description: "Quantum communication networks connecting all planets in the solar system",
      capabilities: ["Quantum Entanglement", "Instant Communication", "Data Encryption", "Network Redundancy"],
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌌 SPACE TECHNOLOGY • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Space Technology Innovation 2026
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Revolutionary space technologies that will enable humanity to explore and colonize the cosmos
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold">{tech.name}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {tech.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-300">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tech.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <button className={`w-full bg-gradient-to-r ${tech.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore Technology →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Explore the Final Frontier?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in revolutionizing space exploration with cutting-edge technologies that make the impossible possible
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Mission Planning →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;