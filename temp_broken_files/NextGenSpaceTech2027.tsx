import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Globe, Star, Zap, Shield, Cpu, Brain, Infinity } from 'lucide-react';

const NextGenSpaceTech2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Rocket className="w-12 h-12 text-cyan-400 animate-pulse" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                NEXT-GEN SPACE TECH 2027
              </h1>
              <Rocket className="w-12 h-12 text-cyan-400 animate-pulse" />
            </div>
            <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto opacity-90">
              Revolutionary space technologies that will enable humanity to explore and colonize the entire universe
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300"
              >
                Explore Space Tech
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 px-8 py-4 rounded-full text-xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                Watch Launch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Revolutionary Space Technologies */}
      <div className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Revolutionary Space Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Rocket className="w-16 h-16" />,
              title: "Warp Drive Technology",
              description: "Revolutionary propulsion systems that enable faster-than-light travel across the galaxy.",
              features: ["FTL Travel", "Galactic Exploration", "Wormhole Creation", "Time Dilation Control"]
            },
            {
              icon: <Globe className="w-16 h-16" />,
              title: "Terraforming AI",
              description: "Advanced AI systems that can transform any planet into a habitable world for humans.",
              features: ["Planet Transformation", "Ecosystem Creation", "Atmosphere Generation", "Life Support Systems"]
            },
            {
              icon: <Star className="w-16 h-16" />,
              title: "Stellar Engineering",
              description: "Technology to harness and control the power of entire star systems for energy.",
              features: ["Star Harvesting", "Energy Extraction", "Solar System Control", "Infinite Power"]
            },
            {
              icon: <Zap className="w-16 h-16" />,
              title: "Quantum Teleportation",
              description: "Instantaneous transportation of matter and energy across vast distances.",
              features: ["Instant Travel", "Matter Transport", "Energy Transfer", "Universal Access"]
            },
            {
              icon: <Shield className="w-16 h-16" />,
              title: "Universal Defense Grid",
              description: "Protective systems that shield entire solar systems from cosmic threats.",
              features: ["Cosmic Protection", "Asteroid Defense", "Radiation Shielding", "Universal Security"]
            },
            {
              icon: <Cpu className="w-16 h-16" />,
              title: "Space AI Network",
              description: "Distributed AI systems that manage and coordinate all space operations.",
              features: ["Autonomous Operations", "Universal Coordination", "Predictive Analytics", "Infinite Intelligence"]
            }
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-cyan-400 mb-6">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{tech.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <ArrowRight className="w-4 h-4 mr-2 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Space Exploration Achievements */}
      <div className="bg-gradient-to-r from-blue-800/30 to-indigo-800/30 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Space Exploration Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Infinity className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-yellow-400">Galactic Colonization</h3>
                  </div>
                  <p className="text-gray-300">Successfully colonized 1,000+ planets across the galaxy with thriving human settlements</p>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Star className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-yellow-400">Stellar Harvesting</h3>
                  </div>
                  <p className="text-gray-300">Harvesting energy from 10,000+ star systems to power galactic civilization</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-yellow-400">Universal AI Network</h3>
                  </div>
                  <p className="text-gray-300">AI systems managing operations across the entire known universe</p>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-yellow-400">Quantum Teleportation</h3>
                  </div>
                  <p className="text-gray-300">Instantaneous travel between any two points in the universe</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Future Missions */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Upcoming Space Missions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Andromeda Expedition</h3>
              <p className="text-gray-300 mb-4">First human mission to the Andromeda Galaxy using warp drive technology</p>
              <div className="text-cyan-400 font-bold">Launch: 2027</div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Universal AI Network</h3>
              <p className="text-gray-300 mb-4">Deploying AI systems across the entire observable universe</p>
              <div className="text-cyan-400 font-bold">Completion: 2028</div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Galactic Federation</h3>
              <p className="text-gray-300 mb-4">Establishing diplomatic relations with advanced alien civilizations</p>
              <div className="text-cyan-400 font-bold">In Progress</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-gradient-to-r from-slate-800/30 to-blue-800/30 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Space Tech Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-6xl font-bold text-cyan-400 mb-4">∞</div>
                <h3 className="text-2xl font-bold mb-4">Reach</h3>
                <p className="text-gray-300">Unlimited space exploration</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-400 mb-4">1000+</div>
                <h3 className="text-2xl font-bold mb-4">Colonies</h3>
                <p className="text-gray-300">Planets colonized</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-pink-400 mb-4">∞</div>
                <h3 className="text-2xl font-bold mb-4">Energy</h3>
                <p className="text-gray-300">Unlimited power from stars</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-purple-400 mb-4">∞</div>
                <h3 className="text-2xl font-bold mb-4">Travel</h3>
                <p className="text-gray-300">Instant universal travel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Join the Space Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of humanity's greatest adventure as we explore and colonize the entire universe
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300"
            >
              Join Mission
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 px-8 py-4 rounded-full text-xl font-bold hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2027;