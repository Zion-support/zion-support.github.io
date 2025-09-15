import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> a138f30b15304af49b19e9920ab7ee61e74c407f
>>>>>>> main
import Header from '../Header';
import Footer from '../Footer';

const NextGenSpaceTech2026: React.FC = () => {
  return (
      <Header />
      
      <main className="container mx-auto px-4 py-16">
<<<<<<< HEAD
=======
=======

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> main
        {/* Hero Section */}
            </div>
          </div>
        </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Space Missions and Applications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">🎯 Revolutionary Space Missions</h2>
            <p className="text-2xl text-gray-300">Pioneering missions that will expand humanity's presence in space</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-blue-300 font-semibold">{tech.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{tech.price}</div>
                  <button className={`bg-gradient-to-r ${tech.color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center`}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Success Stories */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mission Success Stories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real achievements from our revolutionary space technology missions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
            >
              <div className="text-6xl mb-6 text-center">🌙</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Lunar Gateway</h3>
              <p className="text-purple-200 mb-6 text-center">
                International space station orbiting the Moon for deep space exploration
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full font-semibold">2025-2026</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
            >
              <div className="text-6xl mb-6 text-center">🔴</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Mars Sample Return</h3>
              <p className="text-cyan-200 mb-6 text-center">
                Mission to return samples from Mars for detailed analysis on Earth
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full font-semibold">2026-2027</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30"
            >
              <div className="text-6xl mb-6 text-center">🪐</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Europa Clipper</h3>
              <p className="text-emerald-200 mb-6 text-center">
                Mission to study Jupiter's moon Europa for signs of life
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full font-semibold">2024-2030</span>
              </div>
            </motion.div>
=======
        {/* Future Vision */}
        <div className="bg-gradient-to-r from-slate-800/50 to-indigo-800/50 rounded-3xl p-12 mb-16 backdrop-blur-sm border border-slate-400/30">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">🔮 The Future of Space</h2>
            <p className="text-2xl text-slate-200">Our vision for humanity's future in space</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
=======
        {/* Mission Timeline */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Space Mission Timeline 2026</h2>
          <div className="grid md:grid-cols-4 gap-8">
>>>>>>> cursor/create-and-deploy-new-content-8735
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Q1 2026</div>
              <div className="text-gray-300">Lunar Base Alpha</div>
              <div className="text-sm text-gray-400 mt-2">First permanent lunar settlement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Q2 2026</div>
              <div className="text-gray-300">Mars Mission Launch</div>
              <div className="text-sm text-gray-400 mt-2">First manned mission to Mars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Q3 2026</div>
              <div className="text-gray-300">Asteroid Mining</div>
              <div className="text-sm text-gray-400 mt-2">First commercial asteroid mining</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Q4 2026</div>
              <div className="text-gray-300">Space Tourism</div>
              <div className="text-sm text-gray-400 mt-2">Commercial space tourism begins</div>
            </div>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">Quantum Space Navigation</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum navigation systems that use quantum entanglement 
              for precise positioning and navigation across vast distances in space.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Navigation Accuracy</span>
                <span className="text-cyan-400 font-bold">99.999%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Range</span>
                <span className="text-cyan-400 font-bold">Unlimited</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Real-time Updates</span>
                <span className="text-cyan-400 font-bold">Instantaneous</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900 to-blue-900 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6 text-emerald-400">Space Habitat Technology</h3>
            <p className="text-gray-300 mb-6">
              Advanced habitat systems that create comfortable living environments 
              in space, complete with artificial gravity and life support systems.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Artificial Gravity</span>
                <span className="text-emerald-400 font-bold">Earth-like</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Life Support</span>
                <span className="text-emerald-400 font-bold">Self-sustaining</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Capacity</span>
                <span className="text-emerald-400 font-bold">10,000+ people</span>
              </div>
            </div>
>>>>>>> a138f30b15304af49b19e9920ab7ee61e74c407f
>>>>>>> main
          </div>
        </div>

        {/* Call to Action */}
<<<<<<< HEAD
      </main>
      
      <Footer />
=======
<<<<<<< HEAD
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-16"
        >
          <h2 className="text-6xl font-bold text-white mb-8">Ready to Explore the Cosmos?</h2>
          <p className="text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto">
            Join us on this incredible journey through the most advanced space technologies of 2026
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/pages/UltimateTechShowcase2025" className="bg-white text-cyan-600 px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              🚀 Ultimate Tech Showcase
            </a>
            <a href="/pages/RevolutionaryTechInsights2025" className="border-2 border-white text-white px-12 py-6 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-xl">
              🔮 Tech Insights
            </a>
            <a href="/pages/SyntheticIntelligence2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              🧠 Synthetic AI
            </a>
          </div>
        </motion.div>
=======
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Cosmos?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in the greatest adventure in human history. The universe is waiting, 
            and the future of space exploration starts with you.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-lg text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Join Mission
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-10 py-4 rounded-lg text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> a138f30b15304af49b19e9920ab7ee61e74c407f
      </main>
      
      <Footer />
=======
      </div>
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> main
    </div>
  );
};

export default NextGenSpaceTech2026;