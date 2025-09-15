import React from 'react';
import { motion } from 'framer-motion';

const NextGenTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN TECHNOLOGY • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Next-Gen Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Comprehensive showcase of next-generation technologies that are reshaping our world and defining the future of innovation
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                View Roadmap
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Categories */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Revolutionary Technology Categories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the cutting-edge technologies that are transforming industries and creating new possibilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial Intelligence & Machine Learning",
                description: "Advanced AI systems that learn, adapt, and make decisions with human-like intelligence",
                technologies: ["Deep Learning", "Neural Networks", "Computer Vision", "Natural Language Processing"],
                icon: "🤖",
                color: "from-blue-600 to-cyan-600"
              },
              {
                title: "Quantum Computing",
                description: "Revolutionary computing power that leverages quantum mechanics for exponential processing capabilities",
                technologies: ["Quantum Algorithms", "Quantum Cryptography", "Quantum Simulation", "Quantum Machine Learning"],
                icon: "⚛️",
                color: "from-purple-600 to-indigo-600"
              },
              {
                title: "Blockchain & Web3",
                description: "Decentralized technologies that enable secure, transparent, and autonomous systems",
                technologies: ["Smart Contracts", "DeFi", "NFTs", "DAO Governance"],
                icon: "🔗",
                color: "from-green-600 to-emerald-600"
              },
              {
                title: "Internet of Things (IoT)",
                description: "Connected devices and sensors that create intelligent, responsive environments",
                technologies: ["Edge Computing", "Sensor Networks", "Smart Cities", "Industrial IoT"],
                icon: "🌐",
                color: "from-teal-600 to-cyan-600"
              },
              {
                title: "Augmented & Virtual Reality",
                description: "Immersive technologies that blend digital and physical worlds seamlessly",
                technologies: ["AR Applications", "VR Experiences", "Mixed Reality", "Spatial Computing"],
                icon: "🥽",
                color: "from-pink-600 to-rose-600"
              },
              {
                title: "Robotics & Automation",
                description: "Intelligent machines that perform complex tasks with precision and autonomy",
                technologies: ["Autonomous Robots", "Collaborative Robots", "Service Robotics", "Industrial Automation"],
                icon: "🦾",
                color: "from-orange-600 to-red-600"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{category.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{category.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-300 mb-3">Key Technologies:</h4>
                  <ul className="space-y-2">
                    {category.technologies.map((tech, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`mt-6 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer`}>
                  Explore Category →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Innovations */}
      <div className="py-20 bg-gradient-to-r from-red-900/50 to-pink-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Featured Innovations</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Breakthrough technologies that are making headlines and changing the world
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Autonomous Everything",
                description: "From self-driving cars to autonomous factories, AI-powered systems are taking over complex tasks with unprecedented precision and safety.",
                impact: "Revolutionizing transportation, manufacturing, and service industries",
                stats: ["95% reduction in accidents", "40% increase in efficiency", "24/7 operation capability"],
                icon: "🚗"
              },
              {
                title: "Brain-Computer Interfaces",
                description: "Direct neural interfaces that allow humans to control devices and communicate through thought alone, opening new possibilities for accessibility and human enhancement.",
                impact: "Transforming healthcare, accessibility, and human-computer interaction",
                stats: ["1000x faster communication", "99% accuracy in thought recognition", "Real-time neural feedback"],
                icon: "🧠"
              },
              {
                title: "Space Technology Revolution",
                description: "Advanced space technologies including reusable rockets, space manufacturing, and interplanetary communication systems that are making space more accessible.",
                impact: "Enabling space colonization and interplanetary commerce",
                stats: ["90% cost reduction in launches", "10x faster space travel", "Sustainable space habitats"],
                icon: "🚀"
              },
              {
                title: "Climate Tech Solutions",
                description: "Breakthrough technologies for carbon capture, renewable energy storage, and climate monitoring that are addressing the global climate crisis.",
                impact: "Accelerating the transition to a sustainable future",
                stats: ["50% reduction in carbon emissions", "99% renewable energy efficiency", "Real-time climate monitoring"],
                icon: "🌍"
              }
            ].map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{innovation.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{innovation.title}</h3>
                    <p className="text-orange-100 mb-4">{innovation.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-orange-300 mb-2">Impact:</h4>
                  <p className="text-orange-200 text-sm">{innovation.impact}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-300 mb-3">Key Statistics:</h4>
                  <ul className="space-y-2">
                    {innovation.stats.map((stat, idx) => (
                      <li key={idx} className="text-orange-200 text-sm flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Timeline */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Technology Evolution Timeline</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The progression of next-generation technologies from concept to reality
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 to-pink-500 h-full"></div>
              
              {[
                { year: "2020", title: "AI Acceleration", description: "Deep learning breakthroughs and AI democratization" },
                { year: "2021", title: "Quantum Milestones", description: "First quantum advantage demonstrations" },
                { year: "2022", title: "Web3 Explosion", description: "Blockchain and decentralized technologies mainstream adoption" },
                { year: "2023", title: "AI Integration", description: "AI becomes embedded in everyday applications" },
                { year: "2024", title: "Quantum Commercialization", description: "First commercial quantum computing applications" },
                { year: "2025", title: "Convergence Era", description: "Multiple technologies converge for breakthrough innovations" }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {milestone.year}
                  </div>
                  <div className={`${index % 2 === 0 ? 'ml-8' : 'mr-8'} bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex-1 max-w-md`}>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Future Predictions */}
      <div className="py-20 bg-gradient-to-r from-pink-900/50 to-purple-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Future Technology Predictions</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Expert predictions for the next decade of technological advancement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                timeframe: "2026-2027",
                prediction: "General AI Emergence",
                description: "First truly general artificial intelligence systems that can perform any intellectual task a human can do",
                probability: "75%",
                icon: "🧠"
              },
              {
                timeframe: "2028-2029",
                prediction: "Quantum Internet",
                description: "Global quantum communication network enabling unbreakable encryption and quantum computing access",
                probability: "60%",
                icon: "🌐"
              },
              {
                timeframe: "2030-2031",
                prediction: "Mars Colonization",
                description: "First permanent human settlements on Mars with sustainable life support systems",
                probability: "40%",
                icon: "🚀"
              },
              {
                timeframe: "2032-2033",
                prediction: "Neural Enhancement",
                description: "Widespread adoption of brain-computer interfaces for cognitive enhancement and communication",
                probability: "55%",
                icon: "🧬"
              },
              {
                timeframe: "2034-2035",
                prediction: "Climate Reversal",
                description: "Advanced climate technologies successfully reverse global warming and restore environmental balance",
                probability: "70%",
                icon: "🌍"
              },
              {
                timeframe: "2035+",
                prediction: "Singularity Event",
                description: "Technological singularity where AI surpasses human intelligence and accelerates progress exponentially",
                probability: "30%",
                icon: "⚡"
              }
            ].map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{prediction.icon}</div>
                  <div className="text-sm font-semibold text-pink-300">{prediction.timeframe}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{prediction.prediction}</h3>
                <p className="text-pink-100 text-sm mb-4">{prediction.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-pink-300">Probability:</span>
                  <span className="text-lg font-bold text-pink-300">{prediction.probability}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Be Part of the Future</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the next generation of innovators and help shape the future of technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Join Innovation Lab
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold text-lg">
                Explore Opportunities
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2025;