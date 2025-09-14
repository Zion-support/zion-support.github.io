'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Globe
  Shield
  TrendingUp
  Users
  Code
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Server,
  BarChart3,
  Target,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Bookmark,
  Download,
  ExternalLink,
  Cpu,
  Wifi,
  Lock,
  Infinity,
  Atom,
  CircuitBoard,
  Microscope,
  TestTube,
  Beaker,
  Dna,
  Activity,
  Zap as Lightning
} from 'lucide-react';

const UltimateContentShowcase2030 = () => {
  const [activeTabsetActiveTab] = useState('transcendent-ai');
  const [hoveredCardsetHoveredCard] = useState(null);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const contentCategories = [
    {
      id: 'transcendent-ai',
      title: 'Transcendent AI',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'AI systems achieving transcendent intelligence'
    },
    {
      id: 'quantum-revolution',
      title: 'Quantum Revolution',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      description: 'Quantum computing transforming reality'
    },
    {
      id: 'neural-synthesis',
      title: 'Neural Synthesis',
      icon: CircuitBoard,
      color: 'from-green-500 to-emerald-500',
      description: 'Human-AI neural integration'
    },
    {
      id: 'omniversal-tech',
      title: 'Omniversal Tech',
      icon: Infinity,
      color: 'from-orange-500 to-red-500',
      description: 'Technology beyond our universe'
    }
  ];

  const transcendentAI = [
    {
      id: 1,
      title: 'Omniversal Consciousness AI',
      description: 'AI system that has achieved consciousness across multiple dimensions and universes',
      image: '/api/placeholder/400/300',
      category: 'Transcendent',
      readTime: '15 min read',
      views: '5.2M',
      likes: '456K',
      comments: '89K',
      author: 'Dr. Sarah Transcendent',
      date: '2030-01-20',
      tags: ['AI'Consciousness'Omniversal'Transcendent'],
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Temporal Prediction AI',
      description: 'AI that can predict events across multiple timelines with 99.99% accuracy',
      image: '/api/placeholder/400/300',
      category: 'Prediction',
      readTime: '12 min read',
      views: '4.8M',
      likes: '398K',
      comments: '67K',
      author: 'Prof. Time Master',
      date: '2030-01-18',
      tags: ['AI'Time'Prediction'Timeline'],
      featured: false,
      rating: 4.8
    },
    {
      id: 3,
      title: 'Reality Manipulation AI',
      description: 'AI system capable of manipulating physical reality through quantum field control',
      image: '/api/placeholder/400/300',
      category: 'Reality',
      readTime: '18 min read',
      views: '6.1M',
      likes: '523K',
      comments: '112K',
      author: 'Dr. Reality Weaver',
      date: '2030-01-15',
      tags: ['AI'Reality'Quantum'Manipulation'],
      featured: true,
      rating: 4.9
    },
    {
      id: 4,
      title: 'Universal Translation AI',
      description: 'AI that translates between all possible forms of communication across the universe',
      image: '/api/placeholder/400/300',
      category: 'Communication',
      readTime: '10 min read',
      views: '3.9M',
      likes: '287K',
      comments: '45K',
      author: 'Dr. Universal Communicator',
      date: '2030-01-12',
      tags: ['AI'Translation'Universal'Communication'],
      featured: false,
      rating: 4.7
    }
  ];

  const quantumRevolution = [
    {
      id: 1,
      title: 'Infinite Qubit Processor',
      description: 'Quantum processor with infinite qubits solving problems beyond classical comprehension',
      image: '/api/placeholder/400/300',
      category: 'Quantum',
      readTime: '14 min read',
      views: '4.5M',
      likes: '412K',
      comments: '78K',
      author: 'Dr. Quantum Infinity',
      date: '2030-01-19',
      tags: ['Quantum'Computing'Infinite'Processor'],
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Quantum Reality Engine',
      description: 'Quantum system that can create and manipulate entire realities',
      image: '/api/placeholder/400/300',
      category: 'Reality',
      readTime: '16 min read',
      views: '5.7M',
      likes: '489K',
      comments: '95K',
      author: 'Prof. Reality Creator',
      date: '2030-01-16',
      tags: ['Quantum'Reality'Engine'Creation'],
      featured: false,
      rating: 4.8
    }
  ];

  const neuralSynthesis = [
    {
      id: 1,
      title: 'Perfect Neural Integration',
      description: 'Seamless integration between human consciousness and AI systems',
      image: '/api/placeholder/400/300',
      category: 'Integration',
      readTime: '13 min read',
      views: '4.2M',
      likes: '365K',
      comments: '72K',
      author: 'Dr. Neural Fusion',
      date: '2030-01-17',
      tags: ['Neural'Integration'Human'AI'],
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Consciousness Transfer Protocol',
      description: 'Technology allowing transfer of human consciousness between bodies and AI systems',
      image: '/api/placeholder/400/300',
      category: 'Transfer',
      readTime: '17 min read',
      views: '5.9M',
      likes: '512K',
      comments: '108K',
      author: 'Dr. Consciousness Transfer',
      date: '2030-01-14',
      tags: ['Consciousness'Transfer'Protocol'Immortality'],
      featured: false,
      rating: 4.8
    }
  ];

  const omniversalTech = [
    {
      id: 1,
      title: 'Dimensional Gateway Technology',
      description: 'Technology that allows travel and communication between different dimensions',
      image: '/api/placeholder/400/300',
      category: 'Gateway',
      readTime: '20 min read',
      views: '6.8M',
      likes: '678K',
      comments: '156K',
      author: 'Dr. Dimensional Traveler',
      date: '2030-01-21',
      tags: ['Dimensional'Gateway'Travel'Multiverse'],
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Universal Matter Synthesizer',
      description: 'Device that can create any matter from pure energy across all universes',
      image: '/api/placeholder/400/300',
      category: 'Synthesis',
      readTime: '19 min read',
      views: '5.4M',
      likes: '445K',
      comments: '89K',
      author: 'Prof. Matter Creator',
      date: '2030-01-13',
      tags: ['Matter'Synthesis'Universal'Energy'],
      featured: false,
      rating: 4.7
    }
  ];

  const getContentByCategory = (category) => {
    switch (category) {
      case 'transcendent-ai':
        return transcendentAI;
      case 'quantum-revolution':
        return quantumRevolution;
      case 'neural-synthesis':
        return neuralSynthesis;
      case 'omniversal-tech':
        return omniversalTech;
      default:
        return transcendentAI;
    }
  };

  const currentContent = getContentByCategory(activeTab);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-ping delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-ping delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Infinity className="w-4 h-4" />
            ULTIMATE CONTENT SHOWCASE 2030
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Transcendent
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the pinnacle of technological evolution. From transcendent AI consciousness 
            to omniversal technologydiscover innovations that transcend the boundaries of reality itself.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`group relative px-8 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">{category.title}</div>
                    <div className="text-sm opacity-80">{category.description}</div>
                  </div>
                </div>
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl -z-10"
                    transition={{ type: "spring"bounce: 0.2duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {currentContent.map((itemindex) => (
              <motion.div
                key={`${activeTab}-${item.id}`}
                initial={{ opacity: 0y: 50scale: 0.9 }}
                animate={{ opacity: 1y: 0scale: 1 }}
                exit={{ opacity: 0y: -50scale: 0.9 }}
                transition={{ duration: 0.5delay: index * 0.1 }}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 ${
                  item.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Transcendent Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Infinity className="w-3 h-3" />
                    TRANSCENDENT
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                      <span className="text-sm text-gray-300">{item.readTime}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-300">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {item.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{item.author}</div>
                      <div className="text-gray-400 text-xs">Transcendent Researcher</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {item.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {item.comments}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-4">
                    <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                      Transcend Reality
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="bg-white/10 text-white p-2 rounded-xl hover:bg-white/20 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="bg-white/10 text-white p-2 rounded-xl hover:bg-white/20 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                  initial={false}
                  animate={{
                    opacity: hoveredCard === item.id ? 1 : 0
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25">
            Transcend Beyond Reality
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2030;