import React from 'react';
import { motion } from 'framer-motion';

const TechTrends2026: React.FC = () => {
  const trends = [
    {
      id: 1,
      title: "Artificial General Intelligence (AGI) Breakthrough",
      category: "AI & Machine Learning",
      description: "The emergence of AGI systems that can perform any intellectual task that a human can do, marking a paradigm shift in AI capabilities.",
      impact: "Transformative",
      timeline: "2026-2027",
      icon: "🧠",
      details: [
        "Multi-modal reasoning across different domains",
        "Autonomous problem-solving without human intervention",
        "Creative and artistic capabilities surpassing human levels",
        "Ethical decision-making in complex scenarios"
      ]
    },
    {
      id: 2,
      title: "Quantum Computing Commercialization",
      category: "Quantum Technology",
      description: "Quantum computers becoming commercially viable for solving real-world problems in cryptography, optimization, and drug discovery.",
      impact: "Revolutionary",
      timeline: "2026-2028",
      icon: "⚡",
      details: [
        "1000+ qubit quantum processors",
        "Quantum advantage in practical applications",
        "Quantum internet infrastructure",
        "Quantum machine learning algorithms"
      ]
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      category: "Biotechnology",
      description: "Direct brain-computer interfaces enabling thought-controlled devices and enhanced cognitive capabilities.",
      impact: "Transformative",
      timeline: "2026-2029",
      icon: "🧬",
      details: [
        "Non-invasive neural interfaces",
        "Thought-to-text communication",
        "Memory enhancement and storage",
        "Direct neural control of prosthetics"
      ]
    },
    {
      id: 4,
      title: "Space Economy Expansion",
      category: "Space Technology",
      description: "The emergence of a trillion-dollar space economy with asteroid mining, space manufacturing, and interplanetary travel.",
      impact: "Revolutionary",
      timeline: "2026-2030",
      icon: "🚀",
      details: [
        "Asteroid mining operations",
        "Space-based manufacturing",
        "Lunar and Mars colonies",
        "Space tourism industry"
      ]
    },
    {
      id: 5,
      title: "Advanced Robotics Revolution",
      category: "Robotics",
      description: "Autonomous robots with human-like capabilities becoming ubiquitous in manufacturing, healthcare, and service industries.",
      impact: "Transformative",
      timeline: "2026-2028",
      icon: "🤖",
      details: [
        "Humanoid service robots",
        "Autonomous manufacturing systems",
        "Medical surgery robots",
        "Swarm robotics coordination"
      ]
    },
    {
      id: 6,
      title: "Synthetic Biology Breakthrough",
      category: "Biotechnology",
      description: "Engineering biological systems to create new materials, medicines, and sustainable solutions for global challenges.",
      impact: "Revolutionary",
      timeline: "2026-2029",
      icon: "🔬",
      details: [
        "Lab-grown organs and tissues",
        "Synthetic food production",
        "Bio-manufacturing materials",
        "Environmental remediation"
      ]
    }
  ];

  const categories = [
    "All Trends",
    "AI & Machine Learning",
    "Quantum Technology", 
    "Biotechnology",
    "Space Technology",
    "Robotics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📈 TECH TRENDS 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology Trends 2026
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the revolutionary technologies that will reshape our world in 2026 and beyond. 
              From AI breakthroughs to space exploration, explore the trends driving the future.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Trends Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl">{trend.icon}</div>
                <div>
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs font-semibold">
                    {trend.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{trend.title}</h3>
              <p className="text-gray-300 mb-6">{trend.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Impact:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    trend.impact === 'Revolutionary' 
                      ? 'bg-red-500/30 text-red-300' 
                      : 'bg-blue-500/30 text-blue-300'
                  }`}>
                    {trend.impact}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Timeline:</span>
                  <span className="text-sm text-purple-300">{trend.timeline}</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-purple-300">Key Features:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  {trend.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="text-purple-400">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Impact Section */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Impact</h2>
            <p className="text-xl opacity-90">How these trends will transform major industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-sm opacity-90">AI diagnostics, personalized medicine, and neural interfaces revolutionizing patient care</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-sm opacity-90">Autonomous robots and quantum optimization transforming production processes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Finance</h3>
              <p className="text-sm opacity-90">Quantum cryptography and AI trading systems securing and optimizing financial markets</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Environment</h3>
              <p className="text-sm opacity-90">Synthetic biology and space-based solutions addressing climate change</p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Predictions */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Future Predictions</h2>
          <p className="text-xl opacity-90">What to expect in the next decade</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">The Convergence Era</h3>
            <p className="text-lg opacity-90 mb-6">
              By 2030, we'll see the convergence of multiple breakthrough technologies creating 
              unprecedented possibilities. AI will work alongside quantum computers, neural 
              interfaces will connect human minds to digital systems, and space technology 
              will enable off-world manufacturing and resource extraction.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-purple-400">✓</span>
                <span>Human-AI collaboration at scale</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400">✓</span>
                <span>Quantum-enhanced AI systems</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400">✓</span>
                <span>Space-based manufacturing</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400">✓</span>
                <span>Biological-digital integration</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
          >
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h4 className="text-xl font-bold mb-4 text-center">2030 Vision</h4>
            <p className="text-center opacity-90">
              A world where technology seamlessly integrates with human capabilities, 
              creating a new era of possibilities and opportunities for all of humanity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Don't just observe the future – be part of creating it. Join us in developing 
            and deploying these revolutionary technologies that will transform our world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Innovation Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTrends2026;