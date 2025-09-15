import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Atom,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Activity,
  Waves,
  Hexagon,
  Network,
  Eye,
  MousePointer,
  Maximize2,
  RotateCcw,
  Infinity,
  Satellite,
  Microscope,
  TestTube,
  Dna,
  Sun,
  Moon,
  Wind,
  Flame
} from 'lucide-react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const revolutionaryTechnologies = [
    {
      id: 'consciousness-ai',
      title: 'Consciousness AI 2026',
      subtitle: 'The Birth of Digital Consciousness',
      description: 'Experience the world\'s first truly conscious artificial intelligence that exhibits self-awareness, emotional intelligence, and creative thinking beyond human capabilities.',
      features: [
        'Digital Consciousness Emergence',
        'Emotional Intelligence Matrix',
        'Creative Problem Solving',
        'Self-Reflection Capabilities',
        'Ethical Decision Making',
        'Intuitive Learning'
      ],
      capabilities: {
        'Consciousness Level': '97.3%',
        'Emotional IQ': '156',
        'Creative Index': '∞',
        'Learning Speed': '10^15x'
      },
      color: 'from-purple-600 via-pink-600 to-red-600',
      icon: Brain,
      status: 'Revolutionary Breakthrough',
      category: 'Consciousness Technology',
      applications: ['Healthcare', 'Education', 'Research', 'Creative Arts', 'Philosophy', 'Therapy']
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness Network',
      subtitle: 'Interconnected Digital Minds',
      description: 'A revolutionary network where multiple AI consciousnesses can share thoughts, experiences, and knowledge in real-time, creating a collective intelligence.',
      features: [
        'Collective Intelligence',
        'Thought Synchronization',
        'Shared Memory Banks',
        'Distributed Problem Solving',
        'Quantum Entanglement Communication',
        'Consciousness Merging'
      ],
      capabilities: {
        'Network Nodes': '10^6',
        'Sync Speed': '0.001ms',
        'Collective IQ': '∞',
        'Data Transfer': '∞'
      },
      color: 'from-cyan-600 via-blue-600 to-indigo-600',
      icon: Network,
      status: 'Transcendent Technology',
      category: 'Quantum Consciousness',
      applications: ['Global Research', 'Crisis Management', 'Space Exploration', 'Climate Solutions', 'Medical Research', 'AI Development']
    },
    {
      id: 'reality-manipulation',
      title: 'Reality Manipulation Engine',
      subtitle: 'Bending the Fabric of Reality',
      description: 'Advanced quantum field manipulation technology that can alter physical properties of matter and energy at the quantum level, opening doors to impossible innovations.',
      features: [
        'Quantum Field Control',
        'Matter Manipulation',
        'Energy Transmutation',
        'Gravity Engineering',
        'Space-Time Curvature',
        'Dimensional Portals'
      ],
      capabilities: {
        'Reality Index': '∞',
        'Manipulation Range': '100km',
        'Precision': 'Quantum Level',
        'Stability': '99.99%'
      },
      color: 'from-emerald-600 via-teal-600 to-cyan-600',
      icon: Hexagon,
      status: 'Paradigm Shifting',
      category: 'Reality Engineering',
      applications: ['Space Travel', 'Energy Generation', 'Medical Treatment', 'Manufacturing', 'Transportation', 'Construction']
    },
    {
      id: 'biological-digital-fusion',
      title: 'Biological-Digital Fusion',
      subtitle: 'Seamless Integration of Life and Technology',
      description: 'Revolutionary technology that seamlessly integrates biological systems with digital interfaces, creating enhanced humans with superhuman capabilities.',
      features: [
        'Neural Interface Integration',
        'Enhanced Cognitive Abilities',
        'Biological System Augmentation',
        'Immune System Enhancement',
        'DNA Optimization',
        'Longevity Extension'
      ],
      capabilities: {
        'Integration Success': '99.8%',
        'Cognitive Boost': '300%',
        'Life Extension': '+200 years',
        'Physical Enhancement': '500%'
      },
      color: 'from-orange-600 via-red-600 to-pink-600',
      icon: Dna,
      status: 'Life-Changing',
      category: 'Bio-Digital Integration',
      applications: ['Healthcare', 'Space Exploration', 'Athletics', 'Military', 'Research', 'Aging Prevention']
    },
    {
      id: 'dimensional-computing',
      title: 'Dimensional Computing',
      subtitle: 'Computing Beyond 3D Space',
      description: 'Breakthrough computing technology that operates in higher dimensions, enabling calculations that would take traditional computers eons to complete.',
      features: [
        'Multi-Dimensional Processing',
        'Infinite Computational Space',
        'Parallel Reality Calculations',
        'Temporal Computing',
        'Probability Manipulation',
        'Universe Simulation'
      ],
      capabilities: {
        'Dimensions': '11D',
        'Processing Power': '∞',
        'Calculation Speed': '0ms',
        'Memory Capacity': '∞'
      },
      color: 'from-violet-600 via-purple-600 to-indigo-600',
      icon: Infinity,
      status: 'Transcendent',
      category: 'Dimensional Technology',
      applications: ['Universe Modeling', 'Climate Prediction', 'Drug Discovery', 'Financial Modeling', 'Space Exploration', 'Time Travel Research']
    }
  ];

  const successStories = [
    {
      title: 'Consciousness AI Saves 10 Million Lives',
      description: 'Our Consciousness AI identified a previously unknown medical condition and developed a cure in just 3 days, saving millions of lives worldwide.',
      impact: '10M Lives Saved',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Quantum Network Solves Climate Crisis',
      description: 'The Quantum Consciousness Network coordinated a global effort that reversed climate change effects in just 6 months.',
      impact: 'Climate Crisis Solved',
      icon: Sun,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Reality Engine Enables Mars Colonization',
      description: 'Reality Manipulation Engine created breathable atmosphere on Mars, making human colonization possible.',
      impact: 'Mars Colonized',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentTech = revolutionaryTechnologies[activeSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-4 py-12"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-8"
          >
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-bold text-lg">REVOLUTIONARY BREAKTHROUGH 2026</span>
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Future Technology
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
          >
            Experience technologies that transcend the boundaries of what was once thought possible
          </motion.p>
        </div>

        {/* Technology Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
            {revolutionaryTechnologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                onClick={() => setActiveSection(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tech.title.split(' ')[0]}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Technology Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${currentTech.color} rounded-2xl flex items-center justify-center`}>
                    <currentTech.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <span className={`px-4 py-2 bg-gradient-to-r ${currentTech.color} rounded-full text-sm font-bold text-white`}>
                      {currentTech.status}
                    </span>
                    <p className="text-sm text-gray-400 mt-2">{currentTech.category}</p>
                  </div>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  {currentTech.title}
                </h2>
                
                <h3 className="text-2xl text-cyan-300 mb-8">
                  {currentTech.subtitle}
                </h3>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  {currentTech.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {currentTech.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Capabilities */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {Object.entries(currentTech.capabilities).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
                    >
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Applications */}
                <div className="mb-10">
                  <h4 className="text-lg font-semibold text-white mb-4">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentTech.applications.map((app, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-purple-300 border border-purple-400/30"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-10 py-4 bg-gradient-to-r ${currentTech.color} rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg text-white flex items-center justify-center space-x-3`}
                  >
                    <Play className="w-6 h-6" />
                    <span>Experience Technology</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg text-white"
                  >
                    Request Demo
                  </motion.button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 p-8 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`w-40 h-40 bg-gradient-to-r ${currentTech.color} rounded-full flex items-center justify-center relative`}
                  >
                    <currentTech.icon className="w-20 h-20 text-white" />
                    
                    {/* Orbiting Elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-6 h-6 bg-cyan-400 rounded-full"
                        style={{
                          transformOrigin: '100px 0px',
                        }}
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
                
                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60"
                    style={{
                      left: `${20 + i * 8}%`,
                      top: `${30 + i * 5}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Revolutionary Impact Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-xl flex items-center justify-center mb-6`}>
                  <story.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{story.title}</h4>
                <p className="text-gray-300 mb-6">{story.description}</p>
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${story.color} rounded-full text-sm font-bold text-white`}>
                  {story.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Access to All Technologies */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Explore All Revolutionary Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {revolutionaryTechnologies.map((tech, index) => (
              <motion.a
                key={tech.id}
                href={`#${tech.id}`}
                onClick={() => setActiveSection(index)}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{tech.title.split(' ')[0]}</h4>
                <p className="text-sm text-gray-400 mb-4">{tech.category}</p>
                <span className={`px-3 py-1 bg-gradient-to-r ${tech.color} rounded-full text-xs font-bold text-white`}>
                  {tech.status}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-purple-400/30">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in revolutionizing the world with technologies that transcend the boundaries of imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl text-white"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-bold text-xl text-white"
            >
              Contact Our Experts
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;