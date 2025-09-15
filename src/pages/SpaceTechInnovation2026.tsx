import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const SpaceTechInnovation2026: React.FC = () => {
  const [activeMission, setActiveMission] = useState('mars');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const spaceMissions = {
    mars: {
      title: "Mars Colonization",
      description: "Establishing permanent human settlements on Mars",
      icon: "🔴",
      features: ["Habitat Construction", "Life Support Systems", "Resource Utilization"],
      color: "from-red-600 to-orange-600"
    },
    moon: {
      title: "Lunar Base",
      description: "Building sustainable lunar infrastructure",
      icon: "🌙",
      features: ["Lunar Mining", "Space Manufacturing", "Gateway Station"],
      color: "from-gray-600 to-slate-600"
    },
    asteroid: {
      title: "Asteroid Mining",
      description: "Extracting resources from near-Earth asteroids",
      icon: "☄️",
      features: ["Resource Extraction", "Space Manufacturing", "Economic Development"],
      color: "from-yellow-600 to-amber-600"
    }
  };

  const spaceTechnologies = [
    { icon: "🚀", title: "Advanced Propulsion", description: "Nuclear thermal and antimatter engines" },
    { icon: "🏠", title: "Space Habitats", description: "Self-sustaining space colonies and stations" },
    { icon: "⚡", title: "Power Systems", description: "Fusion reactors and solar power arrays" },
    { icon: "🌱", title: "Life Support", description: "Closed-loop environmental systems" },
    { icon: "🔬", title: "Space Manufacturing", description: "Zero-gravity manufacturing processes" },
    { icon: "🛰️", title: "Satellite Networks", description: "Global communication and navigation systems" }
  ];

  return (
    <>
      <Helmet>
        <title>Space Tech Innovation 2026 | Zion Tech Group</title>
        <meta name="description" content="Revolutionary space technology innovations including Mars colonization, lunar bases, asteroid mining, and advanced propulsion systems." />
        <meta name="keywords" content="Space Technology 2026, Mars Colonization, Lunar Base, Asteroid Mining, Space Exploration, Advanced Propulsion" />
        <meta property="og:title" content="Space Tech Innovation 2026 | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary space technology innovations for the future of space exploration" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Space Tech Innovation 2026" />
        <meta name="twitter:description" content="Revolutionary space technology innovations for the future of space exploration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-gray-600/20 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 SPACE INNOVATION • JANUARY 2025
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                Space Tech Innovation 2026
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Revolutionary space technology innovations that are making Mars colonization, 
                lunar bases, and interstellar travel a reality.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Explore Space Tech →
                </button>
                <button className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg hover:bg-slate-400 hover:text-white transition-colors font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Space Missions */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Revolutionary Space Missions</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Discover the groundbreaking space missions that are expanding human presence 
                beyond Earth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(spaceMissions).map(([key, mission]) => (
                <div
                  key={key}
                  className={`bg-gradient-to-br ${mission.color} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer ${
                    activeMission === key ? 'ring-2 ring-slate-400 scale-105' : ''
                  }`}
                  onClick={() => setActiveMission(key)}
                >
                  <div className="text-5xl mb-6 text-center">{mission.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{mission.title}</h3>
                  <p className="text-center opacity-90 mb-6">{mission.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {mission.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white hover:text-slate-600 transition-all duration-300 font-semibold">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Space Technologies */}
        <div className="py-20 px-4 bg-gradient-to-r from-slate-600/20 to-gray-600/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Advanced Space Technologies</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Cutting-edge technologies that are enabling the next generation of space exploration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaceTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{tech.title}</h3>
                  <p className="text-slate-100 text-center text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">The Future of Space Exploration</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12">
                We stand at the threshold of a new space age, where human civilization 
                will expand beyond Earth and establish a multi-planetary presence.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-slate-500 to-gray-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">2026-2027</h3>
                  <p className="text-slate-100">First permanent lunar base and Mars mission launch</p>
                </div>
                <div className="bg-gradient-to-br from-gray-500 to-zinc-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">2028-2030</h3>
                  <p className="text-gray-100">Mars colony establishment and asteroid mining operations</p>
                </div>
                <div className="bg-gradient-to-br from-zinc-500 to-slate-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">2030+</h3>
                  <p className="text-zinc-100">Interstellar travel and multi-planetary civilization</p>
                </div>
              </div>
              <div className="mt-12">
                <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Join the Space Revolution
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceTechInnovation2026;