import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Store, 
  ShoppingCart, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Grid3X3,
  List,
  Globe,
  Server,
  Database,
  Monitor,
  Smartphone,
  Code,
  Palette,
  Lightbulb,
  BookOpen,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Award,
  Eye,
  Settings,
  PenTool,
  Building2,
  Handshake,
  Briefcase,
  GraduationCap,
  Video,
  FileText,
  HelpCircle,
  BarChart3,
  Rocket,
  Target,
  Network,
  Cpu,
  Atom,
  Workflow,
  BarChart3 as BarChart3Icon,
  MessageCircle,
  Eye as EyeIcon
} from 'lucide-react';

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'category' | 'popularity' | 'price'>('popularity');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: Store, count: 35, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, count: 12, color: 'from-purple-500 to-pink-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Zap, count: 8, color: 'from-yellow-500 to-orange-500' },
    { id: 'cloud-services', name: 'Cloud Services', icon: Cloud, count: 6, color: 'from-blue-500 to-indigo-500' },
    { id: 'security', name: 'Security', icon: Shield, count: 5, color: 'from-red-500 to-pink-500' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, count: 4, color: 'from-green-500 to-emerald-500' }
  ];

  const marketplaceItems = [
    // AI Solutions
    {
      id: 'ai-chatbot',
      name: 'AI Website Chatbot',
      category: 'ai-solutions',
      description: 'Intelligent chatbot that answers questions, qualifies leads, and books meetings 24/7',
      features: ['Natural language processing', 'Lead qualification', 'Meeting scheduling', 'CRM integration'],
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/website-ai-chatbot',
      popularity: 95,
      pricing: '$299/month',
      rating: 4.8,
      reviews: 127,
      delivery: 'Instant',
      type: 'SaaS'
    },
    {
      id: 'ai-content-studio',
      name: 'AI Content Creation Studio',
      category: 'ai-solutions',
      description: 'AI-powered content creation platform for marketing, blogs, and social media',
      features: ['Content generation', 'SEO optimization', 'Brand consistency', 'Performance tracking'],
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-content-creation-studio',
      popularity: 92,
      pricing: '$199/month',
      rating: 4.7,
      reviews: 89,
      delivery: '24 hours',
      type: 'SaaS'
    },
    {
      id: 'ai-analytics',
      name: 'AI Business Analytics',
      category: 'ai-solutions',
      description: 'Advanced analytics platform with AI-powered insights and predictions',
      features: ['Predictive analytics', 'Real-time dashboards', 'Custom reports', 'Data visualization'],
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-business-intelligence',
      popularity: 88,
      pricing: '$399/month',
      rating: 4.6,
      reviews: 156,
      delivery: '1 week',
      type: 'SaaS'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      category: 'security',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection',
      features: ['Threat detection', 'Behavioral analysis', 'Incident response', 'Compliance monitoring'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      link: '/services/ai-cybersecurity-platform',
      popularity: 94,
      pricing: '$599/month',
      rating: 4.9,
      reviews: 203,
      delivery: '1 week',
      type: 'SaaS'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Analytics',
      category: 'ai-solutions',
      description: 'AI-powered healthcare analytics for patient care and operational efficiency',
      features: ['Patient analytics', 'Diagnostic support', 'Treatment optimization', 'Health monitoring'],
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/ai-healthcare-analytics-platform',
      popularity: 87,
      pricing: '$799/month',
      rating: 4.7,
      reviews: 78,
      delivery: '2 weeks',
      type: 'SaaS'
    },
    {
      id: 'ai-quantum',
      name: 'AI Quantum Platform',
      category: 'ai-solutions',
      description: 'Hybrid AI platform combining classical and quantum computing',
      features: ['Quantum algorithms', 'Hybrid optimization', 'Quantum ML', 'Performance scaling'],
      icon: Atom,
      color: 'from-violet-500 to-purple-500',
      link: '/services/ai-quantum-hybrid-platform',
      popularity: 82,
      pricing: '$1,299/month',
      rating: 4.5,
      reviews: 45,
      delivery: '4 weeks',
      type: 'Enterprise'
    },
    // Micro SaaS Solutions
    {
      id: 'micro-crm',
      name: 'Micro CRM Platform',
      category: 'micro-saas',
      description: 'Lightweight CRM solution for small businesses and startups',
      features: ['Contact management', 'Lead tracking', 'Sales pipeline', 'Email integration'],
      icon: Users,
      color: 'from-orange-500 to-red-500',
      link: '/services/micro-crm',
      popularity: 89,
      pricing: '$49/month',
      rating: 4.6,
      reviews: 234,
      delivery: 'Instant',
      type: 'SaaS'
    },
    {
      id: 'micro-project-management',
      name: 'Micro Project Management',
      category: 'micro-saas',
      description: 'Simple project management tool for teams and small projects',
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Progress reporting'],
      icon: Calendar,
      color: 'from-indigo-500 to-blue-500',
      link: '/services/ai-project-management-platform',
      popularity: 85,
      pricing: '$29/month',
      rating: 4.5,
      reviews: 167,
      delivery: 'Instant',
      type: 'SaaS'
    },
    {
      id: 'micro-marketing',
      name: 'Micro Marketing Suite',
      category: 'micro-saas',
      description: 'All-in-one marketing platform for small businesses',
      features: ['Email marketing', 'Social media', 'Analytics', 'Automation'],
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      link: '/services/ai-marketing-automation',
      popularity: 83,
      pricing: '$79/month',
      rating: 4.4,
      reviews: 145,
      delivery: '24 hours',
      type: 'SaaS'
    },
    // Cloud Services
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps Platform',
      category: 'cloud-services',
      description: 'Complete DevOps solution for cloud-native applications',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring', 'Security'],
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/cloud-devops',
      popularity: 91,
      pricing: '$299/month',
      rating: 4.8,
      reviews: 189,
      delivery: '1 week',
      type: 'SaaS'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Platform',
      category: 'cloud-services',
      description: 'Edge computing solution for IoT and real-time applications',
      features: ['Real-time processing', 'Low latency', 'IoT integration', 'Distributed AI'],
      icon: Cpu,
      color: 'from-slate-500 to-gray-500',
      link: '/services/edge-computing-solutions',
      popularity: 79,
      pricing: '$199/month',
      rating: 4.3,
      reviews: 67,
      delivery: '2 weeks',
      type: 'SaaS'
    },
    // Security Solutions
    {
      id: 'blockchain-security',
      name: 'Blockchain Security',
      category: 'security',
      description: 'Enterprise blockchain solutions with advanced security features',
      features: ['Smart contracts', 'Supply chain tracking', 'Identity management', 'Financial services'],
      icon: Network,
      color: 'from-amber-500 to-orange-500',
      link: '/services/blockchain-enterprise-solutions',
      popularity: 76,
      pricing: '$899/month',
      rating: 4.4,
      reviews: 89,
      delivery: '3 weeks',
      type: 'Enterprise'
    },
    // Analytics Solutions
    {
      id: 'customer-analytics',
      name: 'Customer Experience Analytics',
      category: 'analytics',
      description: 'Comprehensive customer experience analysis platform',
      features: ['Customer journey mapping', 'Sentiment analysis', 'Behavioral insights', 'Personalization'],
      icon: EyeIcon,
      color: 'from-teal-500 to-green-500',
      link: '/services/ai-customer-experience-analytics-platform',
      popularity: 84,
      pricing: '$349/month',
      rating: 4.6,
      reviews: 123,
      delivery: '1 week',
      type: 'SaaS'
    },
    {
      id: 'supply-chain-analytics',
      name: 'Supply Chain Analytics',
      category: 'analytics',
      description: 'AI-powered supply chain optimization and analytics',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Cost reduction'],
      icon: Workflow,
      color: 'from-cyan-500 to-blue-500',
      link: '/services/ai-supply-chain-optimization',
      popularity: 81,
      pricing: '$449/month',
      rating: 4.5,
      reviews: 98,
      delivery: '2 weeks',
      type: 'SaaS'
    }
  ];

  const filteredItems = marketplaceItems
    .filter(item => 
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'price':
          return parseFloat(a.pricing.replace(/[^0-9.]/g, '')) - parseFloat(b.pricing.replace(/[^0-9.]/g, ''));
        case 'popularity':
        default:
          return b.popularity - a.popularity;
      }
    });

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.color || 'from-gray-500 to-slate-500';
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || 'Other';
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-current text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-current text-yellow-400" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />);
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <div className="bg-zinc-800/50 border-b border-zinc-700/50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-6">
              <Store className="w-10 h-10 text-zion-cyan" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Marketplace</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Discover ready-to-deploy solutions in our technology marketplace. From AI-powered applications 
              to enterprise-grade platforms, find the perfect solution for your business needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search marketplace..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zinc-600 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="ml-2 px-2 py-1 bg-zinc-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-zinc-700/50 border border-zinc-600 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'category' | 'popularity' | 'price')}
                className="px-4 py-2 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-zinc-400">
            Showing {filteredItems.length} of {marketplaceItems.length} solutions
          </p>
        </div>

        {/* Marketplace Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="group relative"
                >
                  <Link to={item.link}>
                    <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 h-full hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-zinc-700/50 rounded-full text-xs text-zinc-300">
                            {getCategoryName(item.category)}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.type === 'Enterprise' 
                              ? 'bg-purple-500/20 text-purple-300' 
                              : 'bg-green-500/20 text-green-300'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {item.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-zinc-300">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-zinc-700/50 pt-4">
                        {/* Rating */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-1">
                            {renderStars(item.rating)}
                            <span className="text-sm text-zinc-400 ml-2">({item.reviews})</span>
                          </div>
                          <div className="flex items-center text-yellow-400">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            <span className="text-xs">{item.popularity}</span>
                          </div>
                        </div>
                        
                        {/* Price and Delivery */}
                        <div className="flex items-center justify-between text-sm text-zinc-400 mb-3">
                          <span className="flex items-center font-semibold text-white">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {item.pricing}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.delivery}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                          <span className="text-sm font-medium">View Solution</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="group"
                >
                  <Link to={item.link}>
                    <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
                      <div className="flex items-start space-x-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex items-center space-x-3">
                              <span className="px-3 py-1 bg-zinc-700/50 rounded-full text-sm text-zinc-300">
                                {getCategoryName(item.category)}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-sm ${
                                item.type === 'Enterprise' 
                                  ? 'bg-purple-500/20 text-purple-300' 
                                  : 'bg-green-500/20 text-green-300'
                              }`}>
                                {item.type}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-zinc-400 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium text-zinc-300 mb-2">Key Features:</h4>
                              <div className="space-y-1">
                                {item.features.slice(0, 3).map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-zinc-400">
                                    <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-zinc-300 mb-2">Solution Details:</h4>
                              <div className="space-y-2 text-sm text-zinc-400">
                                <div className="flex items-center justify-between">
                                  <span>Rating:</span>
                                  <div className="flex items-center">
                                    {renderStars(item.rating)}
                                    <span className="ml-1">({item.reviews})</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span>Price:</span>
                                  <span className="font-semibold text-white">{item.pricing}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span>Delivery:</span>
                                  <span>{item.delivery}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span>Popularity:</span>
                                  <div className="flex items-center text-yellow-400">
                                    <TrendingUp className="w-4 h-4 mr-1" />
                                    <span>{item.popularity}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                            <span className="font-medium">Learn More</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Our team can create custom solutions tailored to your specific business requirements. 
            Let us build the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to Expert
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
