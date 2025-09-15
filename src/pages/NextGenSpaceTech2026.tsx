import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NextGenSpaceTech2026: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState('mars');

  const missions = [
    {
      id: 'mars',
      title: 'Mars Colonization',
      description: 'Establishing permanent human settlements on Mars',
      icon: '🔴',
      timeline: '2026-2030',
      status: 'In Progress'
    },
    {
      id: 'moon',
      title: 'Lunar Base',
      description: 'Building sustainable lunar infrastructure',
      icon: '🌙',
      timeline: '2026-2028',
      status: 'Active'
    },
    {
      id: 'asteroid',
      title: 'Asteroid Mining',
      description: 'Extracting resources from near-Earth asteroids',
      icon: '☄️',
      timeline: '2026-2029',
      status: 'Planning'
    },
    {
      id: 'europa',
      title: 'Europa Mission',
      description: 'Exploring Jupiter\'s moon for signs of life',
      icon: '🪐',
      timeline: '2026-2032',
      status: 'Development'
    }
  ];

  const technologies = [
    {
      title: "Quantum Propulsion",
      description: "Revolutionary propulsion systems using quantum mechanics for faster-than-light travel",
      icon: "⚡",
      features: ["Quantum Field Manipulation", "Warp Drive Technology", "Zero-Point Energy", "Spacetime Folding"],
      applications: ["Interstellar Travel", "Rapid Transit", "Deep Space Exploration", "Time Dilation"]
    },
    {
      title: "AI Space Navigation",
      description: "Autonomous navigation systems that can pilot spacecraft through complex space environments",
      icon: "🧠",
      features: ["Autonomous Piloting", "Collision Avoidance", "Route Optimization", "Emergency Response"],
      applications: ["Unmanned Missions", "Cargo Transport", "Satellite Maintenance", "Deep Space Probes"]
    },
    {
      title: "Space Manufacturing",
      description: "Zero-gravity manufacturing facilities for producing advanced materials and components",
      icon: "🏭",
      features: ["Zero-G Production", "Advanced Materials", "3D Printing", "Quality Control"],
      applications: ["Spacecraft Components", "Medical Devices", "Research Materials", "Consumer Products"]
    },
    {
      title: "Life Support Systems",
      description: "Advanced closed-loop life support systems for long-duration space missions",
      icon: "🌱",
      features: ["Air Recycling", "Water Purification", "Food Production", "Waste Management"],
      applications: ["Space Stations", "Mars Colonies", "Long Missions", "Emergency Systems"]
    },
    {
      title: "Space Elevator",
      description: "Revolutionary transportation system connecting Earth to space using carbon nanotube cables",
      icon: "🛗",
      features: ["Carbon Nanotube Cables", "Counterweight Systems", "Climber Technology", "Safety Systems"],
      applications: ["Cargo Transport", "Tourism", "Research Access", "Emergency Evacuation"]
    },
    {
      title: "Terraforming Tech",
      description: "Technologies for modifying planetary environments to make them habitable for humans",
      icon: "🌍",
      features: ["Atmosphere Generation", "Temperature Control", "Water Creation", "Ecosystem Development"],
      applications: ["Mars Terraforming", "Venus Modification", "Moon Habitation", "Asteroid Colonies"]
    }
  ];

  const achievements = [
    { year: "2024", title: "First Quantum Drive Test", description: "Successful test of quantum propulsion system" },
    { year: "2025", title: "Lunar Base Alpha", description: "First permanent human settlement on the Moon" },
    { year: "2026", title: "Mars Mission Launch", description: "First crewed mission to Mars departs" },
    { year: "2027", title: "Asteroid Mining Begins", description: "First commercial asteroid mining operation" },
    { year: "2028", title: "Space Elevator Complete", description: "First space elevator becomes operational" },
    { year: "2029", title: "Mars Colony Established", description: "First permanent human settlement on Mars" },
    { year: "2030", title: "Interstellar Probe", description: "First probe sent to Alpha Centauri" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN SPACE TECH • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Next-Generation Space Technology 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Pioneering the future of space exploration with revolutionary technologies that will take humanity to the stars
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Missions →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                View Technology
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Selector */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🌌 Active Space Missions</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Select a mission to explore our current space exploration initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {missions.map((mission) => (
            <motion.button
              key={mission.id}
              onClick={() => setSelectedMission(mission.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                selectedMission === mission.id
                  ? 'border-indigo-400 bg-indigo-500/20'
                  : 'border-white/20 bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-4">{mission.icon}</div>
              <h3 className="text-lg font-bold mb-2">{mission.title}</h3>
              <p className="text-sm opacity-90 mb-4">{mission.description}</p>
              <div className="text-xs text-indigo-300">{mission.timeline}</div>
              <div className={`text-xs px-2 py-1 rounded-full mt-2 ${
                mission.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                mission.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300' :
                mission.status === 'Planning' ? 'bg-blue-500/20 text-blue-300' :
                'bg-purple-500/20 text-purple-300'
              }`}>
                {mission.status}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mission Details */}
        <motion.div
          key={selectedMission}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          {selectedMission === 'mars' && (
            <div>
              <h3 className="text-3xl font-bold mb-6">🔴 Mars Colonization Mission</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Mission Overview</h4>
                  <p className="text-white/90 mb-6">
                    Our Mars colonization mission aims to establish the first permanent human settlement on the Red Planet. 
                    Using advanced life support systems, terraforming technology, and AI-powered infrastructure, we're 
                    creating a sustainable colony that will serve as humanity's gateway to the solar system.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>Advanced life support systems</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>In-situ resource utilization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>AI-powered colony management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>Terraforming technology</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Timeline & Milestones</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span>2026: First crewed mission launch</span>
                      <span className="text-green-400">✓ Complete</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span>2027: First habitat modules deployed</span>
                      <span className="text-yellow-400">In Progress</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span>2028: First permanent residents arrive</span>
                      <span className="text-blue-400">Planned</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span>2029: Self-sustaining colony achieved</span>
                      <span className="text-purple-400">Future</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Add other mission details here */}
        </motion.div>
      </div>

      {/* Technologies Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🛸 Revolutionary Space Technologies</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Cutting-edge technologies that are making space exploration faster, safer, and more efficient
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-white/90 mb-6 text-center">{tech.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1 bg-indigo-500/20 rounded-full text-xs">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">📅 Space Exploration Timeline</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our roadmap for the next decade of space exploration and colonization
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-pink-500"></div>
          
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
            >
              <div className="absolute top-0 w-4 h-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transform -translate-x-1/2 left-1/2"></div>
              <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                <div className="text-2xl font-bold text-indigo-400 mb-2">{achievement.year}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="opacity-90">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold mb-4">Join the Space Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of humanity's greatest adventure as we expand beyond Earth and explore the cosmos
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Apply to Join Mission →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2026;