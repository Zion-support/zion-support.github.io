import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2035: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      title: "Interdimensional Computing",
      description: "Process data across multiple dimensions simultaneously, achieving infinite computational power.",
      icon: "🌌",
      features: [
        "Multi-dimensional Processing",
        "Infinite Scalability", 
        "Reality Manipulation",
        "Quantum Field Control",
        "Universal Constants Manipulation"
      ],
      applications: [
        "Galactic-scale simulations",
        "Reality creation",
        "Time manipulation",
        "Universal optimization"
      ]
    },
    {
      title: "Consciousness Transfer",
      description: "Transfer human consciousness to digital substrates, achieving digital immortality.",
      icon: "🧠",
      features: [
        "Digital Immortality",
        "Consciousness Backup",
        "Mind Upload",
        "Emotional Preservation",
        "Memory Enhancement"
      ],
      applications: [
        "Digital afterlife",
        "Enhanced cognition",
        "Emotional AI",
        "Collective consciousness"
      ]
    },
    {
      title: "Reality Engine",
      description: "Create and manipulate reality itself through advanced quantum field manipulation.",
      icon: "⚡",
      features: [
        "Reality Creation",
        "Quantum Fields",
        "Universal Control",
        "Physical Law Manipulation",
        "Dimension Creation"
      ],
      applications: [
        "New universes",
        "Custom physics",
        "Reality simulation",
        "Dimension travel"
      ]
    },
    {
      title: "Synthetic Intelligence",
      description: "AI systems that surpass human intelligence by orders of magnitude.",
      icon: "🤖",
      features: [
        "Superintelligence",
        "Creative AI",
        "Emotional AI",
        "Predictive Modeling",
        "Universal Problem Solving"
      ],
      applications: [
        "Scientific discovery",
        "Artistic creation",
        "Problem solving",
        "Universal optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY SHOWCASE • JANUARY 2035
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2035
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Interactive demonstration of the most advanced technologies that will reshape reality itself.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🚀 Interactive Technology Demo</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Explore each revolutionary technology through interactive demonstrations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-8xl mb-6 text-center lg:text-left">{technologies[activeTab].icon}</div>
              <h3 className="text-4xl font-bold mb-6">{technologies[activeTab].title}</h3>
              <p className="text-xl opacity-90 mb-8">{technologies[activeTab].description}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {technologies[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold mb-4">Applications</h4>
                  <ul className="space-y-2">
                    {technologies[activeTab].applications.map((app, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 w-full h-96 flex items-center justify-center border border-purple-400/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                  <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                  <p className="opacity-80 mb-6">Experience this technology in action</p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Launch Demo →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technology Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🌟 All Revolutionary Technologies</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Complete overview of all breakthrough technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveTab(index)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{tech.title}</h3>
              <p className="text-purple-100 text-sm text-center mb-4">{tech.description}</p>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                  Click to Explore
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto mb-8">
              Join us in exploring the most revolutionary technologies that will reshape reality itself.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Exploring →
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2035;