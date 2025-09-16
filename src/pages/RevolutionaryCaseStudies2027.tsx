import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudies2027: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation: 300% Efficiency Gain",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $50M annual losses",
      solution: "Implemented conscious AI systems for autonomous decision-making and process optimization",
      results: [
        "300% increase in operational efficiency",
        "40% reduction in operational costs",
        "$50M annual savings achieved",
        "99.9% system uptime maintained"
      ],
      technologies: ["Conscious AI", "Process Automation", "Predictive Analytics"],
      duration: "18 months",
      teamSize: "25 experts",
      image: "🏭",
      category: "ai",
      featured: true
    },
    {
      id: 2,
      title: "Quantum-Enhanced Financial Modeling: $2B Portfolio Optimization",
      company: "Investment Banking Group",
      industry: "Finance",
      challenge: "Complex portfolio optimization taking 72 hours with traditional computing",
      solution: "Deployed quantum-enhanced AI for real-time portfolio optimization and risk analysis",
      results: [
        "99.7% reduction in computation time (72 hours → 2 minutes)",
        "$2B portfolio optimized in real-time",
        "15% improvement in risk-adjusted returns",
        "Zero calculation errors achieved"
      ],
      technologies: ["Quantum Computing", "Machine Learning", "Risk Analytics"],
      duration: "12 months",
      teamSize: "18 experts",
      image: "💰",
      category: "quantum",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Healthcare: 90% Faster Patient Diagnosis",
      company: "Metropolitan Medical Center",
      industry: "Healthcare",
      challenge: "Diagnostic delays causing patient safety issues and increased costs",
      solution: "Implemented neural interface AI for instant medical image analysis and diagnosis",
      results: [
        "90% faster diagnostic processes",
        "95% accuracy in early disease detection",
        "60% reduction in diagnostic errors",
        "40% improvement in patient outcomes"
      ],
      technologies: ["Neural Interfaces", "Medical AI", "Image Processing"],
      duration: "15 months",
      teamSize: "30 experts",
      image: "🏥",
      category: "neural",
      featured: false
    },
    {
      id: 4,
      title: "Synthetic Intelligence R&D: 500% Innovation Acceleration",
      company: "Tech Innovation Labs",
      industry: "Research & Development",
      challenge: "R&D processes too slow to keep up with market demands",
      solution: "Deployed synthetic intelligence systems for autonomous research and development",
      results: [
        "500% acceleration in R&D processes",
        "200 new patents filed in 6 months",
        "80% reduction in time-to-market",
        "300% increase in innovation output"
      ],
      technologies: ["Synthetic Intelligence", "Autonomous R&D", "Patent Analytics"],
      duration: "24 months",
      teamSize: "40 experts",
      image: "🔬",
      category: "ai",
      featured: false
    },
    {
      id: 5,
      title: "Quantum Cryptography: Unbreakable Security Implementation",
      company: "National Defense Systems",
      industry: "Defense & Security",
      challenge: "Traditional encryption vulnerable to quantum attacks",
      solution: "Implemented quantum cryptography for ultra-secure communications",
      results: [
        "100% quantum-resistant security achieved",
        "Zero security breaches in 2 years",
        "99.99% communication reliability",
        "50% reduction in security costs"
      ],
      technologies: ["Quantum Cryptography", "Secure Communications", "Key Distribution"],
      duration: "20 months",
      teamSize: "35 experts",
      image: "🛡️",
      category: "quantum",
      featured: true
    },
    {
      id: 6,
      title: "Neural Enhancement Education: 400% Learning Acceleration",
      company: "Global University Network",
      industry: "Education",
      challenge: "Traditional learning methods too slow for modern knowledge requirements",
      solution: "Implemented neural interface learning systems for enhanced cognitive processing",
      results: [
        "400% faster learning rates achieved",
        "95% knowledge retention improvement",
        "80% reduction in learning time",
        "300% increase in student engagement"
      ],
      technologies: ["Neural Interfaces", "Cognitive Enhancement", "Learning Analytics"],
      duration: "16 months",
      teamSize: "28 experts",
      image: "🎓",
      category: "neural",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Case Studies', icon: '📚' },
    { id: 'ai', label: 'AI & Machine Learning', icon: '🧠' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', label: 'Neural Interfaces', icon: '🧬' }
  ];

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'from-purple-600 to-pink-600';
      case 'quantum': return 'from-cyan-600 to-blue-600';
      case 'neural': return 'from-emerald-600 to-teal-600';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🏆 REVOLUTIONARY CASE STUDIES • 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our cutting-edge technology solutions have transformed businesses across industries, delivering unprecedented results and measurable impact.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "500+", label: "Successful Projects", icon: "🚀" },
              { number: "99.8%", label: "Client Satisfaction", icon: "⭐" },
              { number: "$2B+", label: "Cost Savings Delivered", icon: "💰" },
              { number: "50+", label: "Industries Served", icon: "🏢" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <span className="text-xl mr-2">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🌟 Featured Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.filter(study => study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl">{study.image}</div>
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-semibold">
                    FEATURED
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <div className="text-purple-400 font-semibold mb-2">{study.company}</div>
                <div className="text-sm text-gray-400 mb-4">{study.industry} • {study.duration}</div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-sm text-gray-300 mb-4">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 3).map((result, idx) => (
                      <li key={idx} className="text-sm text-green-400 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(study.category)} rounded-full text-xs font-semibold`}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Full Case Study
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{study.image}</div>
                {study.featured && (
                  <div className="px-2 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full text-xs font-semibold">
                    FEATURED
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{study.title}</h3>
              <div className="text-purple-400 font-semibold mb-2 text-sm">{study.company}</div>
              <div className="text-xs text-gray-400 mb-4">{study.industry} • {study.duration}</div>
              
              <p className="text-gray-300 mb-4 text-sm">{study.challenge}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Key Results:</h4>
                <ul className="space-y-1">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <li key={idx} className="text-xs text-green-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {study.technologies.slice(0, 2).map((tech, idx) => (
                  <span key={idx} className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(study.category)} rounded-full text-xs font-semibold`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                View Case Study
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their operations with our revolutionary technology solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Project
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2027;