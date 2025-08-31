import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Heart, 
  Eye,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe,
  TrendingUp,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Play,
  BookOpen,
  ShoppingCart
} from 'lucide-react';

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Solutions', count: 45, icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', count: 18, icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', count: 8, icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: 15, icon: Cloud },
    { id: 'iot', name: 'IoT & Edge Computing', count: 10, icon: Zap },
    { id: 'blockchain', name: 'Blockchain', count: 6, icon: Globe },
    { id: 'healthcare', name: 'Healthcare Tech', count: 9, icon: Brain }
  ];

  const types = [
    { id: 'all', name: 'All Types', count: 48 },
    { id: 'software', name: 'Software', count: 25 },
    { id: 'service', name: 'Services', count: 15 },
    { id: 'hardware', name: 'Hardware', count: 8 }
  ];

  const marketplaceItems = [
    {
      id: 'ml-pipeline',
      name: 'ML Pipeline Automation',
      category: 'ai',
      type: 'software',
      icon: TrendingUp,
      description: 'Automated machine learning pipeline for data scientists',
      features: [
        'AutoML capabilities',
        'Model versioning',
        'A/B testing',
        'Performance monitoring',
        'Scalable infrastructure',
        'Cloud deployment'
      ],
      pricing: '$499/month',
      rating: 4.9,
      reviews: 89,
      downloads: 567,
      status: 'popular',
      tags: ['Machine Learning', 'Automation', 'Data Science', 'MLOps'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/ml-pipeline',
      documentation: 'https://docs.ziontechgroup.com/ml-pipeline'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision API',
      category: 'ai',
      type: 'service',
      icon: Eye,
      description: 'Advanced computer vision services for image and video analysis',
      features: [
        'Object detection',
        'Face recognition',
        'Image classification',
        'Video analysis',
        'Real-time processing',
        'Custom model training'
      ],
      pricing: '$0.01 per image',
      rating: 4.7,
      reviews: 203,
      downloads: 34,
      status: 'trending',
      tags: ['Computer Vision', 'AI', 'Image Processing', 'API'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/computer-vision',
      documentation: 'https://docs.ziontechgroup.com/computer-vision'
    },
    {
      id: 'kubernetes-manager',
      name: 'Kubernetes Management Platform',
      category: 'cloud',
      type: 'software',
      icon: Cloud,
      description: 'Enterprise-grade Kubernetes cluster management solution',
      features: [
        'Multi-cluster management',
        'Auto-scaling',
        'Monitoring & alerting',
        'Security policies',
        'Backup & recovery',
        'Cost optimization'
      ],
      pricing: '$199/month',
      rating: 4.8,
      reviews: 134,
      downloads: 456,
      status: 'popular',
      tags: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Cloud Native'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/kubernetes-manager',
      documentation: 'https://docs.ziontechgroup.com/kubernetes-manager'
    },
    {
      id: 'threat-detection',
      name: 'Advanced Threat Detection',
      category: 'cybersecurity',
      type: 'software',
      icon: Shield,
      description: 'AI-powered threat detection and response system',
      features: [
        'Real-time monitoring',
        'Behavioral analysis',
        'Threat intelligence',
        'Automated response',
        'Compliance reporting',
        '24/7 SOC support'
      ],
      pricing: '$399/month',
      rating: 4.9,
      reviews: 178,
      downloads: 678,
      status: 'featured',
      tags: ['Cybersecurity', 'Threat Detection', 'AI Security', 'SOC'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/threat-detection',
      documentation: 'https://docs.ziontechgroup.com/threat-detection'
    },
    {
      id: 'data-warehouse',
      name: 'Data Warehouse Solution',
      category: 'ai',
      type: 'software',
      icon: TrendingUp,
      description: 'Scalable data warehouse with advanced analytics',
      features: [
        'Multi-cloud support',
        'Real-time processing',
        'Advanced analytics',
        'Data governance',
        'Security & encryption',
        'Auto-scaling'
      ],
      pricing: '$599/month',
      rating: 4.7,
      reviews: 92,
      downloads: 345,
      status: 'trending',
      tags: ['Data Warehouse', 'Big Data', 'Analytics', 'Business Intelligence'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/data-warehouse',
      documentation: 'https://docs.ziontechgroup.com/data-warehouse'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Device',
      category: 'iot',
      type: 'hardware',
      icon: Zap,
      description: 'High-performance edge computing device for IoT applications',
      features: [
        'Intel i7 processor',
        '16GB RAM',
        '512GB SSD',
        'Dual network ports',
        'Industrial grade',
        '5-year warranty'
      ],
      pricing: '$1,299',
      rating: 4.9,
      reviews: 78,
      downloads: 234,
      status: 'featured',
      tags: ['Edge Computing', 'IoT', 'Hardware', 'Industrial'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/edge-computing',
      documentation: 'https://docs.ziontechgroup.com/edge-computing'
    }
  ];

  const featuredItems = marketplaceItems.filter(item => item.status === 'featured');
  const popularItems = marketplaceItems.filter(item => item.status === 'popular');
  const trendingItems = marketplaceItems.filter(item => item.status === 'trending');

  const toggleItemExpansion = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const filteredItems = marketplaceItems.filter(item => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (selectedType !== 'all' && item.type !== selectedType) return false;
    if (searchQuery) {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'bg-purple-500/20 text-purple-400';
      case 'cloud': return 'bg-blue-500/20 text-blue-400';
      case 'cybersecurity': return 'bg-red-500/20 text-red-400';
      case 'iot': return 'bg-green-500/20 text-green-400';
      case 'quantum': return 'bg-indigo-500/20 text-indigo-400';
      case 'blockchain': return 'bg-orange-500/20 text-orange-400';
      case 'healthcare': return 'bg-pink-500/20 text-pink-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'software': return 'bg-blue-500/20 text-blue-400';
      case 'service': return 'bg-green-500/20 text-green-400';
      case 'hardware': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'featured': return 'bg-yellow-500/20 text-yellow-400';
      case 'popular': return 'bg-blue-500/20 text-blue-400';
      case 'trending': return 'bg-green-500/20 text-green-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-current" />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />);
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
            <Store className="w-5 h-5 text-white mr-2" />
            <span className="text-white font-medium">Technology Marketplace</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology Solutions Marketplace
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
            Discover cutting-edge AI, quantum computing, cybersecurity, and cloud solutions 
            from leading technology vendors. All solutions are vetted and enterprise-ready.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search solutions, vendors, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters and Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-8 px-4"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="lg:w-48">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
              >
                {types.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name} ({type.count})
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-blue-400/20 text-blue-400' 
                    : 'bg-slate-800/50 text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-blue-400/20 text-blue-400' 
                    : 'bg-slate-800/50 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-16 px-4"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>
            <p className="text-xl text-gray-300">Handpicked solutions for enterprise success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {types.find(t => t.id === item.type)?.name}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                        <item.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                        {item.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        {renderStars(item.rating)}
                        <span className="text-gray-400 ml-1">({item.reviews})</span>
                      </div>
                      <div className="text-gray-400">•</div>
                      <div className="text-gray-400">{item.downloads} downloads</div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-blue-400">{item.pricing}</div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => toggleItemExpansion(item.id)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105"
                    >
                      {expandedItem === item.id ? 'Show Less' : 'Learn More'}
                    </button>
                    
                    {expandedItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {item.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href={item.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-500/30 transition-all duration-200 text-center"
                          >
                            <Play className="w-4 h-4 inline mr-1" />
                            Demo
                          </a>
                          <a
                            href={item.documentation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-3 py-2 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-lg hover:bg-purple-500/30 transition-all duration-200 text-center"
                          >
                            <BookOpen className="w-4 h-4 inline mr-1" />
                            Docs
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* All Marketplace Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">All Marketplace Items</h2>
            <p className="text-xl text-gray-300">
              Browse our complete collection of technology solutions
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {categories.find(c => c.id === item.category)?.name}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                          {types.find(t => t.id === item.type)?.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                          <item.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-3 text-xs">
                        <div className="flex items-center gap-1">
                          {renderStars(item.rating)}
                          <span className="text-gray-400">({item.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-lg font-bold text-blue-400">{item.pricing}</div>
                        <div className="flex items-center gap-1">
                          <button className="p-1 text-gray-400 hover:text-white transition-colors duration-200">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-white transition-colors duration-200">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                          <item.icon className="w-8 h-8 text-blue-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {categories.find(c => c.id === item.category)?.name}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                            {types.find(t => t.id === item.type)?.name}
                          </span>
                          {item.status !== 'regular' && (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 mb-2">
                          {item.name}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            {renderStars(item.rating)}
                            <span className="text-gray-400 ml-1">({item.reviews})</span>
                          </div>
                          <div className="text-gray-400">•</div>
                          <div className="text-gray-400">{item.downloads} downloads</div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 text-right">
                        <div className="text-2xl font-bold text-blue-400 mb-3">{item.pricing}</div>
                        <div className="flex items-center gap-2 mb-3">
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team can create custom solutions tailored to your specific needs. 
            Let's discuss your requirements and build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105">
              Request Custom Solution
            </button>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Marketplace;
