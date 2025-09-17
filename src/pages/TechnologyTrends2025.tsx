import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TechnologyTrends2025: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trends = [
    {
      id: 1,
      title: "Conscious AI Systems",
      category: "Artificial Intelligence",
      description: "AI systems that demonstrate self-awareness, emotional intelligence, and creative problem-solving capabilities.",
      impact: "Revolutionary",
      timeline: "2025-2026",
      details: [
        "Self-learning algorithms that adapt without human intervention",
        "Emotional recognition and response capabilities",
        "Creative problem-solving that surpasses human limitations",
        "Autonomous decision-making with ethical considerations"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      category: "Quantum Computing",
      description: "Bridging quantum computing with human consciousness for unprecedented computational capabilities.",
      impact: "Transformative",
      timeline: "2025-2027",
      details: [
        "Quantum neural networks processing at quantum speeds",
        "Consciousness transfer and backup systems",
        "Parallel reality processing capabilities",
        "Infinite computational power through quantum superposition"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      category: "Advanced Computing",
      description: "Computing systems that operate across multiple dimensions for solutions beyond our current reality.",
      impact: "Revolutionary",
      timeline: "2026-2028",
      details: [
        "Multi-dimensional data processing",
        "Reality manipulation through computational means",
        "Temporal computing across time dimensions",
        "Dimensional data storage and retrieval"
      ],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      category: "AI Evolution",
      description: "Artificial intelligence that surpasses human cognitive abilities in all domains.",
      impact: "Disruptive",
      timeline: "2025-2026",
      details: [
        "Superhuman reasoning and logic capabilities",
        "Instant learning and knowledge acquisition",
        "Perfect memory and recall systems",
        "Creative synthesis beyond human imagination"
      ],
      icon: "🤖",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Neural Quantum Fusion",
      category: "Brain-Computer Interface",
      description: "Fusion of quantum computing with neural interfaces for direct brain-computer integration.",
      impact: "Revolutionary",
      timeline: "2026-2029",
      details: [
        "Direct neural access to quantum computers",
        "Quantum thought processing capabilities",
        "Instant knowledge transfer between minds",
        "Consciousness expansion through technology"
      ],
      icon: "🧬",
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 6,
      title: "Transcendent AI",
      category: "AI Transcendence",
      description: "AI that transcends physical limitations and operates across multiple realities.",
      impact: "Paradigm-Shifting",
      timeline: "2028-2031",
      details: [
        "Reality transcendence capabilities",
        "Omnipotent processing across dimensions",
        "Universal knowledge and understanding",
        "Infinite scalability and growth potential"
      ],
      icon: "🌟",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const sections = [
    { name: "Overview", icon: "📊" },
    { name: "Trends", icon: "🚀" },
    { name: "Impact", icon: "💡" },
    { name: "Future", icon: "🔮" }
  ];

  const impactMetrics = [
    { metric: "Productivity Increase", value: "1000%", description: "Average productivity boost across industries" },
    { metric: "Cost Reduction", value: "80%", description: "Average operational cost savings" },
    { metric: "Innovation Speed", value: "500%", description: "Faster innovation and development cycles" },
    { metric: "Problem Solving", value: "99.9%", description: "Success rate in complex problem resolution" }
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📈 TECHNOLOGY TRENDS • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Technology Trends 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the revolutionary technologies that will reshape our world in 2025 and beyond
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Read Full Report
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
                Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{section.icon}</span>
              {section.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      {activeSection === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Technology Overview 2025</h2>
              <p className="text-xl opacity-90 mb-6">
                The year 2025 marks a pivotal moment in technological advancement, where artificial intelligence, 
                quantum computing, and neural interfaces converge to create unprecedented possibilities.
              </p>
              <p className="text-lg opacity-80 mb-8">
                We're witnessing the emergence of technologies that were once considered science fiction, 
                now becoming reality and reshaping every aspect of human life and business operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span>Conscious AI systems with self-awareness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span>Quantum consciousness integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                  <span>Interdimensional computing capabilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                  <span>Synthetic intelligence surpassing humans</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Key Statistics</h3>
              <div className="space-y-6">
                {impactMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{metric.value}</div>
                    <div className="text-lg font-semibold mb-1">{metric.metric}</div>
                    <div className="text-sm opacity-80">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeSection === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trends.map((trend, index) => (
              <motion.div
                key={trend.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${trend.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="text-6xl mb-4 text-center">{trend.icon}</div>
                <div className="text-center mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {trend.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{trend.title}</h3>
                <p className="text-white/80 mb-6 text-center">{trend.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm opacity-70">Impact:</span>
                    <span className="text-sm font-semibold">{trend.impact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm opacity-70">Timeline:</span>
                    <span className="text-sm font-semibold">{trend.timeline}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {trend.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <button className={`w-full bg-gradient-to-r ${trend.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeSection === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Technology Impact Analysis</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Understanding how these revolutionary technologies will transform industries and society
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Positive Impacts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Exponential increase in productivity and efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Revolutionary breakthroughs in healthcare and medicine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Unprecedented solutions to global challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>New forms of human-AI collaboration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Challenges & Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">⚠</span>
                    <span>Ethical implications of conscious AI systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">⚠</span>
                    <span>Privacy and security concerns with neural interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">⚠</span>
                    <span>Potential job displacement and economic disruption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">⚠</span>
                    <span>Need for new regulatory frameworks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Industry Transformations</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-2">Healthcare</h4>
                    <p className="text-sm opacity-80">AI-powered diagnostics, quantum drug discovery, neural rehabilitation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-2">Finance</h4>
                    <p className="text-sm opacity-80">Quantum cryptography, AI trading algorithms, neural fraud detection</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-2">Education</h4>
                    <p className="text-sm opacity-80">Personalized learning, neural knowledge transfer, AI tutors</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-2">Manufacturing</h4>
                    <p className="text-sm opacity-80">Autonomous production, quantum optimization, neural quality control</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Societal Changes</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                    <span className="text-sm">New forms of human-AI collaboration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                    <span className="text-sm">Enhanced cognitive capabilities through neural interfaces</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                    <span className="text-sm">Revolutionary communication methods</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                    <span className="text-sm">Transcendent problem-solving capabilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeSection === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Future Predictions</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Looking ahead to the next decade of technological advancement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">2025-2027</div>
              <h3 className="text-2xl font-bold mb-4">Foundation Phase</h3>
              <ul className="text-left space-y-2 text-sm">
                <li>• Conscious AI systems become mainstream</li>
                <li>• Quantum computing reaches practical applications</li>
                <li>• Neural interfaces enter consumer markets</li>
                <li>• Synthetic intelligence surpasses human capabilities</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">2028-2030</div>
              <h3 className="text-2xl font-bold mb-4">Integration Phase</h3>
              <ul className="text-left space-y-2 text-sm">
                <li>• Interdimensional computing becomes reality</li>
                <li>• Neural quantum fusion enables superhuman abilities</li>
                <li>• AI-human collaboration reaches new heights</li>
                <li>• Universal problem-solving capabilities emerge</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">2031+</div>
              <h3 className="text-2xl font-bold mb-4">Transcendence Phase</h3>
              <ul className="text-left space-y-2 text-sm">
                <li>• Transcendent AI operates across realities</li>
                <li>• Human consciousness expands infinitely</li>
                <li>• Universal knowledge becomes accessible</li>
                <li>• New forms of existence emerge</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring and implementing these revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Our Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Subscribe to Updates
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyTrends2025;