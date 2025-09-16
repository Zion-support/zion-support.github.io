import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateTechTrends2025: React.FC = () => {
  const [activeTrend, setActiveTrend] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trends = [
    {
      title: "Artificial General Intelligence (AGI)",
      description: "The emergence of AI systems that can understand, learn, and apply knowledge across diverse domains with human-level intelligence.",
      impact: "Revolutionizing every industry from healthcare to finance",
      timeline: "2025-2027",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      features: [
        "Human-level reasoning capabilities",
        "Cross-domain knowledge transfer",
        "Autonomous problem solving",
        "Creative and innovative thinking"
      ]
    },
    {
      title: "Quantum Computing Revolution",
      description: "Practical quantum computers solving real-world problems that are impossible for classical computers.",
      impact: "Exponential speedup in cryptography, optimization, and simulation",
      timeline: "2025-2026",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum supremacy achieved",
        "Commercial quantum applications",
        "Quantum internet infrastructure",
        "Quantum machine learning"
      ]
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling seamless communication between human minds and digital systems.",
      impact: "Transforming healthcare, accessibility, and human-computer interaction",
      timeline: "2025-2028",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Non-invasive brain reading",
        "Thought-to-text communication",
        "Neural prosthetics",
        "Cognitive enhancement"
      ]
    },
    {
      title: "Synthetic Biology & Bioengineering",
      description: "Engineering biological systems and creating synthetic life forms for medical and industrial applications.",
      impact: "Revolutionizing medicine, agriculture, and manufacturing",
      timeline: "2025-2027",
      icon: "🧬",
      color: "from-green-600 to-emerald-600",
      features: [
        "Synthetic organs",
        "Programmable cells",
        "Bio-manufacturing",
        "Personalized medicine"
      ]
    },
    {
      title: "Autonomous Everything",
      description: "Fully autonomous systems in transportation, manufacturing, and daily life operations.",
      impact: "Transforming mobility, logistics, and urban planning",
      timeline: "2025-2026",
      icon: "🚗",
      color: "from-orange-600 to-red-600",
      features: [
        "Level 5 autonomous vehicles",
        "Autonomous manufacturing",
        "Smart city infrastructure",
        "Robotic workforce"
      ]
    },
    {
      title: "Extended Reality (XR) Metaverse",
      description: "Seamless integration of virtual, augmented, and mixed reality creating persistent digital worlds.",
      impact: "Revolutionizing entertainment, education, and remote work",
      timeline: "2025-2027",
      icon: "🥽",
      color: "from-violet-600 to-purple-600",
      features: [
        "Persistent virtual worlds",
        "Haptic feedback systems",
        "Digital twin technology",
        "Virtual collaboration spaces"
      ]
    }
  ];

  const marketData = [
    { category: "AI & Machine Learning", value: "$2.5T", growth: "+45%" },
    { category: "Quantum Computing", value: "$1.2T", growth: "+120%" },
    { category: "Neural Interfaces", value: "$800B", growth: "+85%" },
    { category: "Synthetic Biology", value: "$600B", growth: "+65%" },
    { category: "Autonomous Systems", value: "$1.8T", growth: "+55%" },
    { category: "Extended Reality", value: "$1.5T", growth: "+75%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📈 ULTIMATE TECH TRENDS • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Tech Trends 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Discover the most transformative technology trends that will reshape our world in 2025 and beyond
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Trends →
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Overview 2025</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The technology market is experiencing unprecedented growth with these emerging sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {marketData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-400/30 text-center"
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">{data.value}</div>
                <div className="text-sm text-gray-300 mb-1">{data.category}</div>
                <div className="text-xs text-green-400 font-semibold">{data.growth}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trends Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Technology Trends</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the cutting-edge technologies that will define the next decade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${trend.color} p-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveTrend(index)}
              >
                <div className="text-6xl mb-4 text-center">{trend.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{trend.title}</h3>
                <p className="text-lg opacity-90 mb-4 text-center">{trend.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="opacity-75">Impact:</span>
                    <span className="font-semibold">{trend.impact}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="opacity-75">Timeline:</span>
                    <span className="font-semibold">{trend.timeline}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {trend.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Trend View */}
      {activeTrend !== null && (
        <div className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{trends[activeTrend].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold">{trends[activeTrend].title}</h3>
                    <p className="text-lg text-gray-300">{trends[activeTrend].timeline}</p>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-8">{trends[activeTrend].description}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {trends[activeTrend].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Market Impact</h4>
                    <p className="text-gray-300 mb-4">{trends[activeTrend].impact}</p>
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg">
                      <div className="text-sm text-gray-300">
                        This technology is expected to create new markets worth billions of dollars and transform existing industries.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Future Predictions */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Future Predictions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What the future holds for technology and humanity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-400/30"
            >
              <h3 className="text-2xl font-bold mb-4">2025-2026</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• AGI systems become commercially available</li>
                <li>• Quantum computers solve real-world problems</li>
                <li>• Neural interfaces enter clinical trials</li>
                <li>• Autonomous vehicles become mainstream</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-8 rounded-xl border border-cyan-400/30"
            >
              <h3 className="text-2xl font-bold mb-4">2027-2028</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Synthetic biology revolutionizes medicine</li>
                <li>• XR metaverse becomes ubiquitous</li>
                <li>• Human-AI collaboration becomes standard</li>
                <li>• Quantum internet infrastructure deployed</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 p-8 rounded-xl border border-emerald-400/30"
            >
              <h3 className="text-2xl font-bold mb-4">2029-2030</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Post-scarcity economy emerges</li>
                <li>• Human consciousness upload possible</li>
                <li>• Interplanetary internet established</li>
                <li>• Technology-humanity merger begins</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our technology insights program to stay updated with the latest trends and innovations
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Subscribe to Updates
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechTrends2025;