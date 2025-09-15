import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpaceTechInnovation2026: React.FC = () => {
  const [activeMission, setActiveMission] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const spaceMissions = [
    {
      id: 1,
      title: "Mars Colony Establishment",
      description: "Establishing the first permanent human settlement on Mars",
      icon: "🚀",
      status: "In Progress",
      timeline: "2026-2030",
      technologies: ["Advanced Life Support", "Mars Terraforming", "3D Printing", "AI Navigation"],
      color: "from-red-500 to-orange-600"
    },
    {
      id: 2,
      title: "Lunar Research Station",
      description: "Advanced research facility on the Moon for scientific discovery",
      icon: "🌙",
      status: "Planning",
      timeline: "2026-2028",
      technologies: ["Lunar Mining", "Solar Power", "Communication Arrays", "Robotic Systems"],
      color: "from-gray-500 to-blue-600"
    },
    {
      id: 3,
      title: "Asteroid Mining Operations",
      description: "Extracting valuable resources from near-Earth asteroids",
      icon: "☄️",
      status: "Development",
      timeline: "2026-2029",
      technologies: ["Autonomous Mining", "Resource Processing", "Space Transportation", "AI Pilots"],
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 4,
      title: "Interplanetary Communication Network",
      description: "High-speed communication network across the solar system",
      icon: "📡",
      status: "Testing",
      timeline: "2026-2027",
      technologies: ["Quantum Communication", "Laser Networks", "Satellite Arrays", "AI Routing"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 5,
      title: "Space Tourism Platform",
      description: "Commercial space travel and orbital tourism experiences",
      icon: "🌍",
      status: "Active",
      timeline: "2026-2027",
      technologies: ["Reusable Rockets", "Space Hotels", "Zero-G Training", "Safety Systems"],
      color: "from-green-500 to-teal-600"
    },
    {
      id: 6,
      title: "Deep Space Exploration",
      description: "Unmanned missions to the outer planets and beyond",
      icon: "🛸",
      status: "Planning",
      timeline: "2026-2032",
      technologies: ["Ion Propulsion", "Nuclear Power", "AI Navigation", "Long-range Communication"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const innovations = [
    {
      title: "Advanced Propulsion Systems",
      description: "Next-generation engines for faster and more efficient space travel",
      icon: "⚡",
      impact: "Revolutionary"
    },
    {
      title: "Space Manufacturing",
      description: "Zero-gravity manufacturing for advanced materials and structures",
      icon: "🏭",
      impact: "Breakthrough"
    },
    {
      title: "AI Space Pilots",
      description: "Autonomous AI systems for spacecraft navigation and operation",
      icon: "🤖",
      impact: "Game-Changing"
    },
    {
      title: "Space Agriculture",
      description: "Growing food in space for long-duration missions",
      icon: "🌱",
      impact: "Essential"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveMission((prev) => (prev + 1) % spaceMissions.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, spaceMissions.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-bold mb-6">
              🚀 SPACE TECH INNOVATION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Space Technology Innovation 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Pioneering the future of space exploration with revolutionary technologies and ambitious missions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Missions →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                View Innovations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Carousel */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🚀 Space Missions</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Revolutionary space missions that are pushing the boundaries of human exploration
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMission}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-br ${spaceMissions[activeMission].color} p-12 md:p-16`}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-6xl mb-6">{spaceMissions[activeMission].icon}</div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                          {spaceMissions[activeMission].status}
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                          {spaceMissions[activeMission].timeline}
                        </span>
                      </div>
                      <h3 className="text-4xl font-bold mb-6">
                        {spaceMissions[activeMission].title}
                      </h3>
                      <p className="text-xl opacity-90 mb-8">
                        {spaceMissions[activeMission].description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {spaceMissions[activeMission].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                        Learn More →
                      </button>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <div className="text-8xl opacity-50">
                          {spaceMissions[activeMission].icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {spaceMissions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMission(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeMission ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                {isAutoPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-800/50 to-indigo-800/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🔬 Space Innovations</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Revolutionary technologies that are making space exploration possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-5xl mb-4">{innovation.icon}</div>
                <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{innovation.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-300 text-xs font-semibold rounded-full">
                    {innovation.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">📅 Mission Timeline</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The roadmap for space exploration and technology development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {spaceMissions.map((mission, index) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${mission.color} rounded-full flex items-center justify-center text-2xl`}>
                      {mission.icon}
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold">{mission.title}</h3>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                        {mission.status}
                      </span>
                    </div>
                    <p className="text-white/80 mb-2">{mission.description}</p>
                    <div className="text-sm text-white/60">{mission.timeline}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Join the Space Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Be part of the next generation of space explorers and innovators
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Apply for Mission →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTechInnovation2026;