<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
=======
import React from 'react';
import { Link } from 'react-router-dom';

>>>>>>> origin/feat/realtime-rag-content
const NextGenInnovationHub2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const innovations = [
    {
      id: 1,
      category: 'ai',
      title: 'Conscious AI Systems',
      description: 'AI that achieves true consciousness and self-awareness',
      icon: '🧠',
      status: 'Active',
      progress: 95,
      impact: 'Revolutionary',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      category: 'quantum',
      title: 'Quantum Reality Engine',
      description: 'Immersive virtual environments powered by quantum computing',
      icon: '⚡',
      status: 'In Development',
      progress: 78,
      impact: 'Breakthrough',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      category: 'neural',
      title: 'Neural Interface Pro',
      description: 'Direct brain-computer interface for seamless interaction',
      icon: '🧬',
      status: 'Testing',
      progress: 82,
      impact: 'Transformative',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      category: 'biotech',
      title: 'Synthetic Biology AI',
      description: 'AI-powered biological systems for medical breakthroughs',
      icon: '🧪',
      status: 'Research',
      progress: 65,
      impact: 'Life-changing',
      color: 'from-green-500 to-lime-500'
    },
    {
      id: 5,
      category: 'space',
      title: 'Interstellar Computing',
      description: 'Computing systems for deep space exploration',
      icon: '🚀',
      status: 'Concept',
      progress: 45,
      impact: 'Cosmic',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      category: 'energy',
      title: 'Fusion Power AI',
      description: 'AI-controlled fusion reactors for unlimited clean energy',
      icon: '⚛️',
      status: 'Prototype',
      progress: 70,
      impact: 'Planetary',
      color: 'from-yellow-500 to-orange-500'
    }
  ];
  const categories = [
    { key: 'all', label: 'All Innovations', icon: '🌟' },
    { key: 'ai', label: 'AI & Consciousness', icon: '🧠' },
    { key: 'quantum', label: 'Quantum Computing', icon: '⚡' },
    { key: 'neural', label: 'Neural Interfaces', icon: '🧬' },
    { key: 'biotech', label: 'Biotechnology', icon: '🧪' },
    { key: 'space', label: 'Space Technology', icon: '🚀' },
    { key: 'energy', label: 'Clean Energy', icon: '⚛️' }
  ];
  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 INNOVATION HUB • JANUARY 2026
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future. 
            Over 50+ active innovations with 99.9% success rate and infinite possibilities.
          </p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-2xl scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'Active' ? 'bg-green-500/50 text-green-200' :
                  innovation.status === 'In Development' ? 'bg-blue-500/50 text-blue-200' :
                  innovation.status === 'Testing' ? 'bg-yellow-500/50 text-yellow-200' :
                  innovation.status === 'Research' ? 'bg-purple-500/50 text-purple-200' :
                  'bg-gray-500/50 text-gray-200'
                }`}>
                  {innovation.status}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-gray-300 mb-6">{innovation.description}</p>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{innovation.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${innovation.color}`}
                    style={{ width: `${innovation.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${innovation.color} text-white`}>
                  {innovation.impact}
                </span>
                <button className="text-white hover:text-purple-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Statistics 2026</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Innovation</div>
            </div>
          </div>
        </div>
        {/* Innovation Process */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Our Innovation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Ideation</h3>
              <p className="text-gray-300">Brainstorm revolutionary concepts and breakthrough ideas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Research</h3>
              <p className="text-gray-300">Deep dive into cutting-edge research and feasibility studies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-300">Build and prototype revolutionary technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Deployment</h3>
              <p className="text-gray-300">Launch and scale world-changing innovations</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2026
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Welcome to the future of innovation. Our cutting-edge hub brings together the brightest minds, 
              most advanced technologies, and revolutionary ideas to create tomorrow's solutions today.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/pages/RevolutionaryTechInsights2026" 
                className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Explore Innovations →
              </Link>
              <Link 
                to="/pages/AdvancedAISolutions2026" 
                className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300 font-semibold text-lg"
              >
                AI Solutions
              </Link>
>>>>>>> origin/feat/realtime-rag-content
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

>>>>>>> origin/feat/realtime-rag-content
      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Innovation Categories</h2>
          <p className="text-xl text-gray-300">Explore our comprehensive range of next-generation technologies</p>
        </div>
<<<<<<< HEAD
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Be part of the future. Contribute to groundbreaking innovations that will shape humanity's destiny.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              Join Innovation Hub →
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-xl">
              Submit Innovation
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              Partner With Us
            </button>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Helmet>
        <title>Next-Gen Innovation Hub 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore the future of innovation with our Next-Gen Innovation Hub featuring cutting-edge technologies for 2026." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Welcome to the world's most advanced innovation hub where the future is being created
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI Consciousness</h3>
            <p className="text-gray-300 mb-6">
              Advanced artificial intelligence systems that achieve true consciousness and creativity
            </p>
            <a href="/pages/AIConsciousnessDemo2026" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore →
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computers that solve impossible problems in seconds
            </p>
            <a href="/pages/QuantumComputingLab2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Discover →
            </a>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30">
            <div className="text-6xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces that revolutionize human-computer interaction
            </p>
            <a href="/pages/NeuralInterfaceHub2026" className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Experience →
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join us in creating the next generation of technology that will reshape humanity's future
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026" 
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg"
            >
              🚀 Start Innovation Journey
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold text-lg"
            >
              📞 Schedule Consultation
            </a>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-50e5
=======

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI & Machine Learning */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
            <p className="text-gray-300 mb-6">
              Advanced artificial intelligence systems, neural networks, and machine learning algorithms 
              that power intelligent automation and decision-making.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-pink-400">• Autonomous AI Agents</div>
              <div className="text-pink-400">• Neural Network Optimization</div>
              <div className="text-pink-400">• Predictive Analytics</div>
              <div className="text-pink-400">• Natural Language Processing</div>
            </div>
            <Link 
              to="/pages/AdvancedAISolutions2026" 
              className="text-pink-400 hover:text-pink-300 font-semibold"
            >
              Explore AI Solutions →
            </Link>
          </div>

          {/* Quantum Computing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing solutions that harness quantum mechanics 
              to solve complex problems exponentially faster than classical computers.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-cyan-400">• Quantum Algorithms</div>
              <div className="text-cyan-400">• Quantum Cryptography</div>
              <div className="text-cyan-400">• Quantum Machine Learning</div>
              <div className="text-cyan-400">• Quantum Simulation</div>
            </div>
            <Link 
              to="/pages/QuantumComputingRevolution2026" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Discover Quantum →
            </Link>
          </div>

          {/* Biotechnology */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Biotechnology</h3>
            <p className="text-gray-300 mb-6">
              Cutting-edge biotechnology solutions that combine AI with genetic engineering 
              to create personalized medical treatments and enhanced human capabilities.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-green-400">• Gene Editing</div>
              <div className="text-green-400">• Personalized Medicine</div>
              <div className="text-green-400">• Synthetic Biology</div>
              <div className="text-green-400">• Bio-Interfaces</div>
            </div>
            <Link 
              to="/pages/BiotechRevolution2026" 
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Explore Biotech →
            </Link>
          </div>

          {/* Blockchain & Web3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⛓️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Blockchain & Web3</h3>
            <p className="text-gray-300 mb-6">
              Next-generation blockchain technologies and Web3 solutions that enable 
              decentralized applications, smart contracts, and digital ownership.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-yellow-400">• Smart Contracts</div>
              <div className="text-yellow-400">• DeFi Protocols</div>
              <div className="text-yellow-400">• NFT Marketplaces</div>
              <div className="text-yellow-400">• DAO Governance</div>
            </div>
            <Link 
              to="/pages/BlockchainRevolution2026" 
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Enter Web3 →
            </Link>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-6">
              Advanced cybersecurity solutions powered by AI and quantum encryption 
              to protect against emerging threats and ensure data integrity.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-red-400">• Quantum Encryption</div>
              <div className="text-red-400">• AI Threat Detection</div>
              <div className="text-red-400">• Zero-Trust Architecture</div>
              <div className="text-red-400">• Behavioral Analytics</div>
            </div>
            <Link 
              to="/pages/CybersecurityFortress2026" 
              className="text-red-400 hover:text-red-300 font-semibold"
            >
              Secure Your Data →
            </Link>
          </div>

          {/* Space Technology */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Space Technology</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary space technologies enabling interplanetary communication, 
              asteroid mining, and the establishment of sustainable space colonies.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-purple-400">• Satellite Networks</div>
              <div className="text-purple-400">• Space Mining</div>
              <div className="text-purple-400">• Interplanetary Internet</div>
              <div className="text-purple-400">• Space Habitats</div>
            </div>
            <Link 
              to="/pages/SpaceTechRevolution2026" 
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Reach for the Stars →
            </Link>
          </div>
        </div>
      </div>

      {/* Innovation Process */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Innovation Process</h2>
          <p className="text-xl text-gray-300">How we turn ideas into revolutionary solutions</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Research</h3>
            <p className="text-gray-300">Deep dive into emerging technologies and market needs</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Prototype</h3>
            <p className="text-gray-300">Build and test innovative solutions rapidly</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Validate</h3>
            <p className="text-gray-300">Test with real users and refine based on feedback</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
            <p className="text-gray-300">Deploy and scale solutions for maximum impact</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join the Innovation Revolution
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with us to access cutting-edge technologies, expert guidance, and innovative solutions 
            that will transform your business and shape the future.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-pink-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
            >
              Start Your Innovation Journey
            </Link>
            <Link 
              to="/pages/RevolutionaryTechInsights2026" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold text-lg"
            >
              Explore Our Insights
            </Link>
>>>>>>> origin/feat/realtime-rag-content
          </div>
        </div>
      </div>
    </div>
  );
};


export default NextGenInnovationHub2026;
