import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Technologies', icon: '🌟', count: 24 },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🧠', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: 6 },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬', count: 4 },
    { id: 'biotech', name: 'Biotechnology', icon: '🧪', count: 3 },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: 3 }
  ];

  const technologies = [
    {
      id: 1,
      title: "Synthetic Consciousness AI",
      description: "AI systems with self-awareness and creative problem-solving capabilities",
      category: "ai",
      icon: "🧠",
      gradient: "from-blue-500 to-indigo-600",
      href: "/pages/AIInnovationHub2026",
      features: ["Self-Awareness", "Creative Thinking", "Emotional Intelligence"],
      status: "Revolutionary",
      impact: "Transformative",
      price: "Enterprise",
      rating: 5,
      tags: ["AI", "Consciousness", "Revolutionary"]
    },
    {
      id: 2,
      title: "Quantum Supremacy Computing",
      description: "1000-qubit quantum processors achieving computational supremacy",
      category: "quantum",
      icon: "⚛️",
      gradient: "from-cyan-500 to-purple-600",
      href: "/pages/QuantumComputingRevolution2026",
      features: ["1000 Qubits", "Quantum Supremacy", "Error Correction"],
      status: "Breakthrough",
      impact: "Revolutionary",
      price: "Premium",
      rating: 5,
      tags: ["Quantum", "Computing", "Supremacy"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling thought-controlled technology",
      category: "neural",
      icon: "🧬",
      gradient: "from-teal-500 to-emerald-600",
      href: "/pages/NeuralInterfaceRevolution2026",
      features: ["Brain-Computer Interface", "Thought Control", "Medical Applications"],
      status: "Future",
      impact: "Transformative",
      price: "Research",
      rating: 4,
      tags: ["Neural", "Interface", "Future"]
    },
    {
      id: 4,
      title: "Advanced AI Systems 2026",
      description: "Next-generation AI systems with autonomous capabilities and self-healing",
      category: "ai",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-600",
      href: "/pages/AdvancedAISystems2026",
      features: ["Autonomous Operation", "Self-Healing", "Decision Making"],
      status: "Production",
      impact: "High",
      price: "Standard",
      rating: 4,
      tags: ["AI", "Autonomous", "Systems"]
    },
    {
      id: 5,
      title: "Quantum Neural Fusion",
      description: "Revolutionary fusion of quantum computing and neural interface technology",
      category: "quantum",
      icon: "⚡",
      gradient: "from-indigo-500 to-purple-600",
      href: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Processing", "Neural Networks", "Fusion Technology"],
      status: "Breakthrough",
      impact: "Revolutionary",
      price: "Premium",
      rating: 5,
      tags: ["Quantum", "Neural", "Fusion"]
    },
    {
      id: 6,
      title: "Synthetic Intelligence",
      description: "AI systems with synthetic consciousness and creative capabilities",
      category: "ai",
      icon: "🎨",
      gradient: "from-rose-500 to-pink-600",
      href: "/pages/SyntheticIntelligence2026",
      features: ["Creative AI", "Conscious Systems", "Ethical Reasoning"],
      status: "Revolutionary",
      impact: "Transformative",
      price: "Enterprise",
      rating: 5,
      tags: ["AI", "Synthetic", "Consciousness"]
    },
    {
      id: 7,
      title: "Biotech AI Revolution",
      description: "AI-powered biotechnology solutions for healthcare and life sciences",
      category: "biotech",
      icon: "🧪",
      gradient: "from-green-500 to-emerald-600",
      href: "/pages/BiotechRevolution2026",
      features: ["Drug Discovery", "Gene Therapy", "Personalized Medicine"],
      status: "Production",
      impact: "High",
      price: "Standard",
      rating: 4,
      tags: ["Biotech", "AI", "Healthcare"]
    },
    {
      id: 8,
      title: "Space Tech Innovation",
      description: "Advanced space technology solutions for exploration and colonization",
      category: "space",
      icon: "🚀",
      gradient: "from-purple-500 to-indigo-600",
      href: "/pages/SpaceTechInnovation2026",
      features: ["Space Exploration", "Colonization", "Resource Mining"],
      status: "Development",
      impact: "High",
      price: "Premium",
      rating: 4,
      tags: ["Space", "Technology", "Innovation"]
    },
    {
      id: 9,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive analytics platform with AI-powered insights",
      category: "ai",
      icon: "📊",
      gradient: "from-blue-500 to-cyan-500",
      href: "/pages/AdvancedAnalyticsDashboard2026",
      features: ["Real-time Analytics", "AI Insights", "Predictive Modeling"],
      status: "Production",
      impact: "Medium",
      price: "Standard",
      rating: 4,
      tags: ["Analytics", "AI", "Dashboard"]
    },
    {
      id: 10,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum principles",
      category: "quantum",
      icon: "🔐",
      gradient: "from-emerald-500 to-teal-600",
      href: "/pages/QuantumComputingRevolution2026",
      features: ["Quantum Encryption", "Unbreakable Security", "Quantum Key Distribution"],
      status: "Production",
      impact: "High",
      price: "Standard",
      rating: 5,
      tags: ["Quantum", "Cryptography", "Security"]
    }
  ];

  const filteredTechnologies = technologies.filter(tech => {
    const matchesCategory = activeCategory === 'all' || tech.category === activeCategory;
    const matchesSearch = tech.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tech.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tech.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Breakthrough': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Production': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'Development': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Future': return 'bg-gradient-to-r from-indigo-500 to-purple-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Transformative': return 'text-red-500';
      case 'Revolutionary': return 'text-purple-500';
      case 'High': return 'text-blue-500';
      case 'Medium': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              🌟 ULTIMATE TECH SHOWCASE 2026
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Revolutionary Technologies 2026
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Explore the most advanced technologies that are reshaping our world. 
              From AI consciousness to quantum computing, discover the future today.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Explore All Technologies →
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Watch Tech Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Grid/List */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {activeCategory === 'all' ? 'All Technologies' : categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <div className="text-gray-600">
            Showing {filteredTechnologies.length} of {technologies.length} technologies
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${tech.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{tech.icon}</span>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(tech.status)} text-white`}>
                          {tech.status}
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < tech.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                    <p className="text-white/90 text-sm">{tech.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Impact Level</div>
                      <div className={`font-semibold ${getImpactColor(tech.impact)}`}>{tech.impact}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Pricing</div>
                      <div className="font-semibold text-gray-900">{tech.price}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={tech.href}
                    className={`block w-full bg-gradient-to-r ${tech.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
                  >
                    Explore Technology →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${tech.gradient} rounded-2xl flex items-center justify-center text-3xl`}>
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                      <div className="flex items-center space-x-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(tech.status)} text-white`}>
                          {tech.status}
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < tech.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">{tech.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {tech.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Impact & Pricing</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Impact:</span>
                            <span className={`font-semibold ${getImpactColor(tech.impact)}`}>{tech.impact}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Pricing:</span>
                            <span className="font-semibold text-gray-900">{tech.price}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {tech.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <a
                      href={tech.href}
                      className={`inline-block bg-gradient-to-r ${tech.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                    >
                      Explore Technology →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredTechnologies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No technologies found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">🌟 Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators exploring revolutionary technologies that are reshaping our world. 
            The future is here, and it's more exciting than ever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Journey →
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;