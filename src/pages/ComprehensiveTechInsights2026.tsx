import React from 'react';
import { motion } from 'framer-motion';

const ComprehensiveTechInsights2026: React.FC = () => {
  const insights = [
    {
      category: "AI & Machine Learning",
      title: "Synthetic Intelligence: The Next Frontier",
      description: "Exploring how synthetic intelligence is creating new possibilities in human-AI collaboration and autonomous decision-making.",
      impact: "High",
      trend: "Rising",
      icon: "🧠",
      color: "purple"
    },
    {
      category: "Quantum Computing",
      title: "Quantum Supremacy in Real-World Applications",
      description: "How quantum computing is moving beyond theoretical concepts to solve practical problems in cryptography, optimization, and scientific research.",
      impact: "Very High",
      trend: "Explosive",
      icon: "⚡",
      color: "cyan"
    },
    {
      category: "Neural Technology",
      title: "Brain-Computer Interfaces: From Science Fiction to Reality",
      description: "The rapid advancement of neural interfaces and their potential to revolutionize healthcare, education, and human capabilities.",
      impact: "High",
      trend: "Rising",
      icon: "🧬",
      color: "emerald"
    },
    {
      category: "IoT & Smart Systems",
      title: "Cyber-Physical Systems: The Digital-Physical Convergence",
      description: "How intelligent cyber-physical systems are creating seamless integration between digital and physical worlds.",
      impact: "Medium",
      trend: "Stable",
      icon: "🌐",
      color: "blue"
    },
    {
      category: "Biotechnology",
      title: "Advanced Biotechnology: Merging Biology and Technology",
      description: "Revolutionary biotech solutions that are merging biology and technology for unprecedented medical breakthroughs.",
      impact: "Very High",
      trend: "Rising",
      icon: "🧬",
      color: "green"
    },
    {
      category: "AI & Automation",
      title: "Autonomous AI Agents: The Future of Work",
      description: "Self-directed AI systems that can plan, execute, and adapt without human intervention, transforming business operations.",
      impact: "High",
      trend: "Rising",
      icon: "🤖",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "from-purple-50 to-pink-50 border-purple-200 text-purple-700",
      cyan: "from-cyan-50 to-blue-50 border-cyan-200 text-cyan-700",
      emerald: "from-emerald-50 to-teal-50 border-emerald-200 text-emerald-700",
      blue: "from-blue-50 to-indigo-50 border-blue-200 text-blue-700",
      green: "from-green-50 to-emerald-50 border-green-200 text-green-700",
      orange: "from-orange-50 to-red-50 border-orange-200 text-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || "from-gray-50 to-gray-100 border-gray-200 text-gray-700";
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Very High": return "bg-red-100 text-red-700";
      case "High": return "bg-orange-100 text-orange-700";
      case "Medium": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "Explosive": return "bg-green-100 text-green-700";
      case "Rising": return "bg-blue-100 text-blue-700";
      case "Stable": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              🔍 COMPREHENSIVE TECH INSIGHTS • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Comprehensive Tech Insights
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Deep dive into the latest technology trends, breakthrough innovations, and their impact on industries worldwide
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Insights
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📊 Technology Impact Metrics</h2>
            <p className="text-xl text-gray-600">Key indicators showing the transformative power of emerging technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">85%</div>
              <div className="text-lg text-gray-600 mb-2">AI Adoption Rate</div>
              <div className="text-sm text-gray-500">Across Fortune 500 companies</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">$2.3T</div>
              <div className="text-lg text-gray-600 mb-2">Quantum Market Value</div>
              <div className="text-sm text-gray-500">Projected by 2030</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-2">500%</div>
              <div className="text-lg text-gray-600 mb-2">Neural Interface Growth</div>
              <div className="text-sm text-gray-500">Year-over-year increase</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">1B+</div>
              <div className="text-lg text-gray-600 mb-2">Connected Devices</div>
              <div className="text-sm text-gray-500">In cyber-physical systems</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Insights Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔬 Deep Technology Insights</h2>
            <p className="text-xl text-gray-600">Comprehensive analysis of the most impactful technology trends and innovations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${getColorClasses(insight.color)} rounded-2xl p-8 border hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-5xl mb-4">{insight.icon}</div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-white/50 text-sm rounded-full font-semibold">
                    {insight.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {insight.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {insight.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getImpactColor(insight.impact)}`}>
                      {insight.impact} Impact
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTrendColor(insight.trend)}`}>
                      {insight.trend} Trend
                    </span>
                  </div>
                  
                  <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Impact Analysis */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏭 Industry Impact Analysis</h2>
            <p className="text-xl text-gray-600">How emerging technologies are transforming different industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-gray-600 text-sm mb-4">
                AI-powered diagnostics, personalized medicine, and neural interfaces for rehabilitation
              </p>
              <div className="text-2xl font-bold text-blue-600">40%</div>
              <div className="text-sm text-gray-500">Efficiency Improvement</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-gray-600 text-sm mb-4">
                Smart factories, predictive maintenance, and autonomous quality control systems
              </p>
              <div className="text-2xl font-bold text-green-600">60%</div>
              <div className="text-sm text-gray-500">Cost Reduction</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Finance</h3>
              <p className="text-gray-600 text-sm mb-4">
                Quantum cryptography, AI-powered trading, and blockchain-based secure transactions
              </p>
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-500">Security Enhancement</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Autonomous vehicles, smart traffic management, and predictive logistics optimization
              </p>
              <div className="text-2xl font-bold text-orange-600">80%</div>
              <div className="text-sm text-gray-500">Safety Improvement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Future Predictions */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔮 Future Technology Predictions</h2>
            <p className="text-xl text-gray-600">Expert insights into what the next decade holds for technology</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2026-2030 Technology Roadmap</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Synthetic Intelligence becomes mainstream</div>
                    <div className="text-sm text-gray-600">AI systems with human-like reasoning and creativity</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Quantum computing reaches practical applications</div>
                    <div className="text-sm text-gray-600">Solving real-world problems in cryptography and optimization</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Neural interfaces become consumer-ready</div>
                    <div className="text-sm text-gray-600">Direct brain-computer communication for everyday use</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emerging Technology Trends</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Cyber-physical systems integration</div>
                    <div className="text-sm text-gray-600">Seamless digital-physical world convergence</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Advanced biotechnology breakthroughs</div>
                    <div className="text-sm text-gray-600">Gene editing and personalized medicine advances</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Autonomous AI agent ecosystems</div>
                    <div className="text-sm text-gray-600">Self-managing AI systems in business operations</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Stay Ahead of Technology Trends?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Get exclusive access to our comprehensive technology insights and stay informed about the latest breakthroughs
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Insights
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
              Contact Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveTechInsights2026;