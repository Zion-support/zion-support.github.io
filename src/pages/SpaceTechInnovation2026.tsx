import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const SpaceTechInnovation2026: React.FC = () => {
  const [activeMission, setActiveMission] = useState('mars');
  const [missionStatus, setMissionStatus] = useState('active');
  const spaceMissions = {
    mars: {
      title: "Mars Colonization",
      icon: "🔴",
      description: "Establishing permanent human settlements on Mars",
      features: [
        "Habitat construction",
        "Life support systems",
        "Resource extraction",
        "Sustainable agriculture"
      ],
      timeline: "2026-2030",
      status: "In Progress"
    },
    moon: {
      title: "Lunar Base Alpha",
      icon: "🌙",
      description: "Building the first permanent lunar base",
      features: [
        "Lunar mining operations",
        "Research facilities",
        "Launch platform",
        "Tourism hub"
      ],
      timeline: "2026-2028",
      status: "Active"
    },
    asteroid: {
      title: "Asteroid Mining",
      icon: "☄️",
      description: "Extracting valuable resources from near-Earth asteroids",
      features: [
        "Precious metals extraction",
        "Water ice harvesting",
        "Rare earth elements",
        "Fuel production"
      ],
      timeline: "2026-2029",
      status: "Pilot Phase"
    },
    deepspace: {
      title: "Deep Space Exploration",
      icon: "🌌",
      description: "Missions to the outer solar system and beyond",
      features: [
        "Jupiter exploration",
        "Saturn moon missions",
        "Interstellar probes",
        "Exoplanet discovery"
      ],
      timeline: "2026-2035",
      status: "Planning"
    }
  };
  const technologies = [
    {
      title: "Advanced Propulsion",
      icon: "🚀",
      description: "Next-generation propulsion systems for faster space travel",
      capabilities: [
        "Nuclear thermal propulsion",
        "Ion drive systems",
        "Solar sail technology",
        "Antimatter engines"
      ],
      impact: "10x faster travel",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Space Habitats",
      icon: "🏠",
      description: "Self-sustaining habitats for long-term space living",
      capabilities: [
        "Closed-loop life support",
        "Artificial gravity",
        "Radiation shielding",
        "Modular construction"
      ],
      impact: "100% self-sufficient",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Space Systems",
      icon: "🤖",
      description: "Autonomous AI systems for space operations",
      capabilities: [
        "Mission planning",
        "Autonomous navigation",
        "Resource management",
        "Emergency response"
      ],
      impact: "Fully autonomous",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Space Manufacturing",
      icon: "🏭",
      description: "Zero-gravity manufacturing and construction",
      capabilities: [
        "3D printing in space",
        "Crystal growth",
        "Metal alloy production",
        "Pharmaceutical manufacturing"
      ],
      impact: "Superior quality products",
      color: "from-yellow-500 to-orange-500"
    }
  ];
  const spaceTimeline = [
    {
      year: "2026",
      event: "Lunar Base Alpha Launch",
      description: "First permanent human settlement on the Moon",
      status: "Completed"
    },
    {
      year: "2027",
      event: "Mars Mission Launch",
      description: "First crewed mission to Mars",
      status: "In Progress"
    },
    {
      year: "2028",
      event: "Asteroid Mining Begins",
      description: "First commercial asteroid mining operations",
      status: "Planned"
    },
    {
      year: "2030",
      event: "Mars Colony Established",
      description: "First self-sustaining Mars colony",
      status: "Vision"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setMissionStatus(prev => prev === 'active' ? 'standby' : 'active');
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Space Tech Innovation 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore the final frontier with our revolutionary space technology solutions that are 
            making interplanetary travel, space colonization, and cosmic exploration a reality.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Space Tech →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Next-generation propulsion systems that enable faster-than-light travel 
              and efficient interplanetary missions.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Ion drive technology</li>
              <li>• Nuclear propulsion</li>
              <li>• Antimatter engines</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Habitats</h3>
            <p className="text-purple-100 mb-6 text-center">
              Self-sustaining space habitats that support human life in the harsh 
              environment of space and other planets.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Life support systems</li>
              <li>• Artificial gravity</li>
              <li>• Closed-loop ecosystems</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Satellite Networks</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Global satellite constellations that provide worldwide internet coverage, 
              Earth observation, and space-based services.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Global internet coverage</li>
              <li>• Real-time Earth monitoring</li>
              <li>• Space-based manufacturing</li>
            </ul>
          </div>
        </div>
        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Revolutionary Space Technologies</h2>
            <p className="text-xl opacity-90">Cutting-edge technologies that are making space exploration accessible</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌌</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Warp Drive Technology</h3>
                  <p className="text-gray-300">Theoretical faster-than-light travel using space-time manipulation for interstellar exploration.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Terraforming Systems</h3>
                  <p className="text-gray-300">Advanced systems for making other planets habitable for human colonization.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Space Solar Power</h3>
                  <p className="text-gray-300">Orbital solar power stations that beam clean energy to Earth and space colonies.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🔬</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Space Manufacturing</h3>
                  <p className="text-gray-300">Zero-gravity manufacturing facilities that produce materials impossible to create on Earth.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Autonomous Spacecraft</h3>
                  <p className="text-gray-300">AI-powered spacecraft that can operate independently for long-duration missions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌙</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lunar Base Technology</h3>
                  <p className="text-gray-300">Permanent lunar bases with advanced life support and resource extraction systems.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                2028
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">First Human Mission</h3>
                <p className="text-gray-300">First humans land on Mars and begin colonization</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                2030
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Self-Sustaining Colony</h3>
                <p className="text-gray-300">Mars colony becomes fully self-sustaining</p>
              </div>
            </div>
          </div>
        </div>
        {/* Technology Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Propulsion Systems</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Fusion Engine Power</span>
                <span className="text-white font-bold">10 GW</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Mars Transit Time</span>
                <span className="text-white font-bold">30 days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Payload Capacity</span>
                <span className="text-white font-bold">1000 tons</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Fuel Efficiency</span>
                <span className="text-white font-bold">1000x better</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Life Support Systems</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Oxygen Generation</span>
                <span className="text-white font-bold">100% recycled</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Water Recycling</span>
                <span className="text-white font-bold">99.9% efficient</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Food Production</span>
                <span className="text-white font-bold">Hydroponic farms</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Radiation Protection</span>
                <span className="text-white font-bold">99.9% effective</span>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-8 py-4 rounded-full text-xl font-bold inline-block hover:scale-105 transition-transform duration-300 cursor-pointer">
            Join the Space Revolution →
          </div>
        </div>
        {/* Mission Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🎯 Mission Capabilities</h2>
            <p className="text-xl opacity-90">Comprehensive space technology solutions for every mission type</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
              <div className="text-4xl mb-4">🪐</div>
              <h3 className="text-lg font-semibold mb-2">Planetary Exploration</h3>
              <p className="text-sm text-gray-300">Robotic missions to explore Mars, Europa, and other celestial bodies.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2">Space Colonization</h3>
              <p className="text-sm text-gray-300">Establishing permanent human settlements on Mars and the Moon.</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-6 border border-green-400/30">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Space Mining</h3>
              <p className="text-sm text-gray-300">Extracting valuable resources from asteroids and other space objects.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-lg font-semibold mb-2">Deep Space Observation</h3>
              <p className="text-sm text-gray-300">Advanced telescopes and observatories for studying the universe.</p>
            </div>
          </div>
        </div>
        {/* Future Vision */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 The Future of Space Technology</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              By 2030, we envision a future where space technology has transformed humanity's relationship 
              with the cosmos, enabling sustainable space colonization and interplanetary commerce.
            </p>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-bold mb-6">
              🚀 SPACE TECH INNOVATION • 2026
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Space Technology Innovation 2026
            </h1>
            <p className="text-2xl text-blue-200 max-w-4xl mx-auto mb-8">
              Pioneering the future of space exploration with cutting-edge technology that's making the impossible possible
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Missions →
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors font-semibold">
                View Space Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Mission Control Center */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">🛰️ Mission Control Center</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Monitor our active space missions and explore the future of space exploration
            </p>
          </motion.div>
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Mission Status: {missionStatus.toUpperCase()}</h3>
                <p className="text-lg text-blue-200 mb-6">
                  Our advanced AI systems are continuously monitoring and optimizing all space missions, 
                  ensuring maximum efficiency and safety.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-green-200">All systems operational</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-blue-200">Navigation systems active</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-cyan-200">Communication established</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4 animate-pulse">🛰️</div>
                <p className="text-lg font-semibold text-cyan-400">Mission Control Active</p>
                <div className="mt-4 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-200">Active Missions: 12</p>
                  <p className="text-sm text-blue-200">Success Rate: 99.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Space Missions */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">🌌 Active Space Missions</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Explore our current and planned space missions that are pushing the boundaries of exploration
            </p>
          </motion.div>
          {/* Mission Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(spaceMissions).map(([key, mission]) => (
              <button
                key={key}
                onClick={() => setActiveMission(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeMission === key
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800 text-blue-200 hover:bg-slate-700 border border-cyan-400/30'
                }`}
              >
                <span className="mr-2">{mission.icon}</span>
                {mission.title}
              </button>
            ))}
          </div>
          {/* Mission Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMission}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12 border border-cyan-400/30"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{spaceMissions[activeMission as keyof typeof spaceMissions].icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {spaceMissions[activeMission as keyof typeof spaceMissions].title}
                  </h3>
                  <p className="text-lg text-blue-200 mb-6">
                    {spaceMissions[activeMission as keyof typeof spaceMissions].description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {spaceMissions[activeMission as keyof typeof spaceMissions].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-blue-200">
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-4">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-sm text-cyan-300">Timeline:</p>
                      <p className="font-semibold text-white">{spaceMissions[activeMission as keyof typeof spaceMissions].timeline}</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-sm text-cyan-300">Status:</p>
                      <p className="font-semibold text-green-400">{spaceMissions[activeMission as keyof typeof spaceMissions].status}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl p-8 text-center">
                  <div className="text-8xl mb-4">{spaceMissions[activeMission as keyof typeof spaceMissions].icon}</div>
                  <p className="text-cyan-200 font-semibold mb-4">Mission Simulation Available</p>
                  <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Run Simulation →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      {/* Space Technologies */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-blue-800/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">🔬 Space Technologies</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Revolutionary technologies that are making space exploration and colonization possible
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{tech.title}</h3>
                <p className="text-blue-200 mb-4 text-sm">{tech.description}</p>
                <ul className="space-y-1 mb-4">
                  {tech.capabilities.slice(0, 2).map((capability, idx) => (
                    <li key={idx} className="text-cyan-200 text-xs">• {capability}</li>
                  ))}
                </ul>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${tech.color} text-white text-xs font-semibold rounded-full`}>
                  {tech.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Space Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">📅 Space Exploration Timeline</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our roadmap to becoming a multi-planetary species
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            {spaceTimeline.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🚀</span>
                      <span className="text-cyan-400 font-bold text-lg">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                    <p className="text-blue-200 mb-3">{milestone.description}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      milestone.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      milestone.status === 'Planned' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {milestone.status}
                    </span>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-slate-900 shadow-lg"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Space Economy */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">💰 Space Economy</h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              The trillion-dollar space economy that's reshaping our future
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4">Asteroid Mining</h3>
              <p className="text-cyan-100 mb-4">Extracting precious metals and rare earth elements from asteroids</p>
              <div className="text-3xl font-bold text-white">$1T+ Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4">Space Manufacturing</h3>
              <p className="text-cyan-100 mb-4">Zero-gravity manufacturing for superior products</p>
              <div className="text-3xl font-bold text-white">$500B+ Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Space Tourism</h3>
              <p className="text-cyan-100 mb-4">Commercial space travel and lunar tourism</p>
              <div className="text-3xl font-bold text-white">$200B+ Market</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Reach for the Stars?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join us in pioneering the future of space exploration and becoming a multi-planetary species
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Join Space Mission →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold">
                Download Space Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTechInnovation2026;
