import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const NextGenTechShowcase2025: React.FC = () => {
  const technologies = [
    {
      title: "Quantum Computing",
      description: "Revolutionary quantum processors that solve complex problems exponentially faster than classical computers.",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      applications: ["Cryptography", "Optimization", "Drug Discovery", "Climate Modeling"]
    },
    {
      title: "Neural Interfaces",
      description: "Direct brain-computer communication enabling thought-controlled devices and enhanced cognitive abilities.",
      icon: "🧬",
      color: "from-emerald-500 to-teal-500",
      applications: ["Medical Rehabilitation", "Gaming", "Education", "Accessibility"]
    },
    {
      title: "Synthetic Intelligence",
      description: "AI systems with synthetic consciousness that can think, create, and reason like humans.",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      applications: ["Creative Arts", "Scientific Research", "Customer Service", "Decision Making"]
    },
    {
      title: "Cyber-Physical Systems",
      description: "Intelligent systems that seamlessly integrate digital and physical worlds for enhanced automation.",
      icon: "🌐",
      color: "from-indigo-500 to-purple-500",
      applications: ["Smart Cities", "Manufacturing", "Transportation", "Healthcare"]
    },
    {
      title: "Advanced Biotechnology",
      description: "Revolutionary biotech solutions merging biology and technology for medical breakthroughs.",
      icon: "🧪",
      color: "from-green-500 to-emerald-500",
      applications: ["Gene Therapy", "Personalized Medicine", "Bioengineering", "Drug Development"]
    },
    {
      title: "Space Technology",
      description: "Cutting-edge space exploration and satellite technology for interplanetary communication.",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      applications: ["Satellite Networks", "Space Mining", "Mars Colonization", "Deep Space Exploration"]
    }
  ];

  const innovations = [
    {
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently and continuously evolve",
      impact: "High",
      timeline: "2025-2026"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Combining quantum computing with neural networks for unprecedented processing power",
      impact: "Revolutionary",
      timeline: "2026-2027"
    },
    {
      title: "Consciousness Computing",
      description: "AI systems that exhibit self-awareness and emotional intelligence",
      impact: "Transformative",
      timeline: "2027-2028"
    },
    {
      title: "Transdimensional AI",
      description: "AI systems that can operate across multiple dimensions and realities",
      impact: "Breakthrough",
      timeline: "2028-2030"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-6">
            🚀 NEXT-GEN TECH SHOWCASE 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            The Future of Technology is Here
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore revolutionary technologies that are reshaping our world and creating 
            unprecedented opportunities for innovation and growth.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Technologies
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-colors">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className={`text-5xl mb-4 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
              <p className="text-gray-300 mb-6">{tech.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.applications.map((app, appIndex) => (
                    <span key={appIndex} className={`px-3 py-1 bg-gradient-to-r ${tech.color} text-white text-xs rounded-full`}>
                      {app}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More →
              </button>
            </div>
          ))}
        </motion.div>

        {/* Innovation Timeline */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Innovation Roadmap</h2>
            <p className="text-xl text-gray-300">Upcoming breakthroughs that will define the next decade</p>
          </div>
          
          <div className="space-y-8">
            {innovations.map((innovation, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${
                    innovation.impact === 'Revolutionary' ? 'from-red-500 to-pink-500' :
                    innovation.impact === 'Transformative' ? 'from-purple-500 to-indigo-500' :
                    innovation.impact === 'Breakthrough' ? 'from-orange-500 to-red-500' :
                    'from-cyan-500 to-blue-500'
                  } rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-2xl font-bold text-white">{innovation.title}</h3>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      innovation.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-300' :
                      innovation.impact === 'Transformative' ? 'bg-purple-500/20 text-purple-300' :
                      innovation.impact === 'Breakthrough' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-cyan-500/20 text-cyan-300'
                    }`}>
                      {innovation.impact}
                    </span>
                    <span className="text-gray-400 text-sm">{innovation.timeline}</span>
                  </div>
                  <p className="text-gray-300">{innovation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <p className="text-gray-300">Companies Transformed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">$2.5B+</div>
            <p className="text-gray-300">Value Created</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
            <p className="text-gray-300">Success Rate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <p className="text-gray-300">Innovation Support</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Embrace the Future?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join the technological revolution and transform your business with 
            cutting-edge solutions that will define the next decade.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Your Journey
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors">
              Contact Our Experts
            </button>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NextGenTechShowcase2025;