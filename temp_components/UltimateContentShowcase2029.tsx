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
  ExternalLink
} from 'lucide-react';

const UltimateContentShowcase2029 = () => {
  const [activeTabsetActiveTab] = useState('ai-breakthroughs');
  const [hoveredCardsetHoveredCard] = useState(null);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const contentCategories = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2029',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Revolutionary AI technologies transforming industries'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Next-generation quantum processing power'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      description: 'Direct brain-computer communication systems'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      description: 'Self-managing intelligent systems'
    }
  ];

  const aiBreakthroughs = [
    {
      id: 1,
      title: 'Synthetic Consciousness AI',
      description: 'The world\'s first AI system demonstrating genuine consciousness and self-awareness',
      image: '/api/placeholder/400/300',
      category: 'Breakthrough',
      readTime: '8 min read',
      views: '2.3M',
      likes: '156K',
      comments: '12K',
      author: 'Dr. Sarah Chen',
      date: '2029-01-15',
      tags: ['AI'Consciousness'Breakthrough'Research'],
      featured: true
    },
    {
      id: 2,
      title: 'Universal Language Translation AI',
      description: 'Real-time translation across all human languages with cultural context understanding',
      image: '/api/placeholder/400/300',
      category: 'Innovation',
      readTime: '6 min read',
      views: '1.8M',
      likes: '98K',
      comments: '8.5K',
      author: 'Prof. Michael Rodriguez',
      date: '2029-01-12',
      tags: ['AI'Language'Translation'Global'],
      featured: false
    },
    {
      id: 3,
      title: 'Emotional Intelligence AI',
      description: 'AI systems that understand and respond to human emotions with unprecedented accuracy',
      image: '/api/placeholder/400/300',
      category: 'Research',
      readTime: '7 min read',
      views: '1.5M',
      likes: '87K',
      comments: '6.2K',
      author: 'Dr. Emily Watson',
      date: '2029-01-10',
      tags: ['AI'Emotions'Psychology'Human-AI'],
      featured: true
    },
    {
      id: 4,
      title: 'Predictive Healthcare AI',
      description: 'AI that predicts diseases before symptoms appear with 99.7% accuracy',
      image: '/api/placeholder/400/300',
      category: 'Healthcare',
      readTime: '9 min read',
      views: '2.1M',
      likes: '134K',
      comments: '15K',
      author: 'Dr. James Park',
      date: '2029-01-08',
      tags: ['AI'Healthcare'Prediction'Medicine'],
      featured: false
    }
  ];

  const quantumComputing = [
    {
      id: 1,
      title: '1000-Qubit Quantum Processor',
      description: 'Breakthrough quantum processor solving complex optimization problems in seconds',
      image: '/api/placeholder/400/300',
      category: 'Hardware',
      readTime: '10 min read',
      views: '1.9M',
      likes: '112K',
      comments: '9.8K',
      author: 'Dr. Alex Quantum',
      date: '2029-01-14',
      tags: ['Quantum'Computing'Hardware'Breakthrough'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Internet Protocol',
      description: 'Secure quantum communication network spanning the globe',
      image: '/api/placeholder/400/300',
      category: 'Network',
      readTime: '8 min read',
      views: '1.6M',
      likes: '89K',
      comments: '7.3K',
      author: 'Prof. Lisa Zhang',
      date: '2029-01-11',
      tags: ['Quantum'Internet'Security'Network'],
      featured: false
    }
  ];

  const neuralInterfaces = [
    {
      id: 1,
      title: 'Thought-to-Text Interface',
      description: 'Direct neural interface allowing thoughts to be converted to text instantly',
      image: '/api/placeholder/400/300',
      category: 'Interface',
      readTime: '12 min read',
      views: '2.5M',
      likes: '178K',
      comments: '18K',
      author: 'Dr. Neural Tech',
      date: '2029-01-13',
      tags: ['Neural'Interface'Brain'Communication'],
      featured: true
    },
    {
      id: 2,
      title: 'Memory Enhancement Implant',
      description: 'Neural implant that enhances human memory capacity by 300%',
      image: '/api/placeholder/400/300',
      category: 'Enhancement',
      readTime: '11 min read',
      views: '2.2M',
      likes: '145K',
      comments: '16K',
      author: 'Dr. Memory Boost',
      date: '2029-01-09',
      tags: ['Neural'Memory'Enhancement'Implant'],
      featured: false
    }
  ];

  const autonomousSystems = [
    {
      id: 1,
      title: 'Self-Evolving AI Systems',
      description: 'AI systems that continuously improve and evolve without human intervention',
      image: '/api/placeholder/400/300',
      category: 'Evolution',
      readTime: '13 min read',
      views: '2.8M',
      likes: '201K',
      comments: '22K',
      author: 'Dr. Evolution AI',
      date: '2029-01-16',
      tags: ['AI'Evolution'Autonomous'Self-Improvement'],
      featured: true
    },
    {
      id: 2,
      title: 'Universal Robot Controller',
      description: 'Single AI system controlling millions of robots worldwide',
      image: '/api/placeholder/400/300',
      category: 'Control',
      readTime: '9 min read',
      views: '1.7M',
      likes: '95K',
      comments: '8.1K',
      author: 'Prof. Robot Master',
      date: '2029-01-07',
      tags: ['AI'Robotics'Control'Universal'],
      featured: false
    }
  ];

  const getContentByCategory = (category) => {
    switch (category) {
      case 'ai-breakthroughs':
        return aiBreakthroughs;
      case 'quantum-computing':
        return quantumComputing;
      case 'neural-interfaces':
        return neuralInterfaces;
      case 'autonomous-systems':
        return autonomousSystems;
      default:
        return aiBreakthroughs;
    }
  };

  const currentContent = getContentByCategory(activeTab);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            ULTIMATE CONTENT SHOWCASE 2029
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Future Technology
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the most groundbreaking technological advances of 2029. 
            From synthetic consciousness AI to quantum computing breakthroughs
            discover the future that's happening now.
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
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl -z-10"
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
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    <span className="text-sm text-gray-300">{item.readTime}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-300">{item.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {item.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{item.author}</div>
                      <div className="text-gray-400 text-xs">AI Researcher</div>
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
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                      Read More
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
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
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
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
            Explore More Content
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2029;