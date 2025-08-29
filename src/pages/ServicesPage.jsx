import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Cloud, 
  Globe, 
  Code, 
  Database,
  Network,
  Lock,
  Cpu,
  BarChart3,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Server,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'quantum', name: 'Quantum Tech', icon: Zap },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'data', name: 'Data & Analytics', icon: Database },
    { id: 'iot', name: 'IoT & Edge', icon: Network },
    { id: 'blockchain', name: 'Blockchain', icon: Lock }
  ];

  const services = [
    {
      id: 'ai-content-generation',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content, code, and creative assets with our advanced AI models.',
      category: 'ai',
      price: 29,
      currency: '$',
      tags: ['AI Content', 'Text Generation', 'Code Generation'],
      author: {
        name: 'Zion AI Labs',
        id: 'zion-ai-labs',
        avatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100',
      },
      images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500'],
      createdAt: '2024-01-15T10:00:00.000Z',
      aiScore: 98,
      rating: 4.9,
      reviewCount: 156,
      popular: true
    },
    {
      id: 'ai-media-editing',
      title: 'AI Image & Video Editor',
      description: 'Professional-grade AI-powered image and video editing tools for creators and businesses.',
      category: 'ai',
      price: 19,
      currency: '$',
      tags: ['Image Editing', 'Video Editing', 'AI Enhancement'],
      author: {
        name: 'Zion Media Studio',
        id: 'zion-media-studio',
        avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100',
      },
      images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500'],
      createdAt: '2024-01-20T14:30:00.000Z',
      aiScore: 95,
      rating: 4.8,
      reviewCount: 89,
      popular: false
    },
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant',
      description: 'Intelligent code completion, debugging, and optimization powered by advanced language models.',
      category: 'ai',
      price: 39,
      currency: '$',
      tags: ['Code Completion', 'Debugging', 'Code Review'],
      author: {
        name: 'Zion Dev Tools',
        id: 'zion-dev-tools',
        avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100',
      },
      images: ['https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500'],
      createdAt: '2024-01-25T09:15:00.000Z',
      aiScore: 97,
      rating: 4.9,
      reviewCount: 203,
      popular: true
    },
    {
      id: 'ai-analytics',
      title: 'AI Data Analytics Platform',
      description: 'Transform raw data into actionable insights with our AI-powered analytics suite.',
      category: 'ai',
      price: 199,
      currency: '$',
      tags: ['Data Analytics', 'Predictive Analytics', 'Data Visualization'],
      author: {
        name: 'Zion Analytics',
        id: 'zion-analytics',
        avatarUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100',
      },
      images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'],
      createdAt: '2024-02-01T11:00:00.000Z',
      aiScore: 96,
      rating: 4.8,
      reviewCount: 67,
      popular: false
    },
    {
      id: 'ai-threat-detection',
      title: 'AI Threat Detection',
      description: 'Real-time cybersecurity threat detection and response using advanced AI algorithms.',
      category: 'security',
      price: 99,
      currency: '$',
      tags: ['Threat Detection', 'AI Security', '24/7 Monitoring'],
      author: {
        name: 'Zion Security',
        id: 'zion-security',
        avatarUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100',
      },
      images: ['https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500'],
      createdAt: '2024-02-05T15:00:00.000Z',
      aiScore: 99,
      rating: 4.9,
      reviewCount: 134,
      popular: true
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Platform',
      description: 'Access to quantum computing resources for complex problem solving and research.',
      category: 'quantum',
      price: 299,
      currency: '$',
      tags: ['Quantum Computing', 'Research', 'Complex Algorithms'],
      author: {
        name: 'Zion Quantum Labs',
        id: 'zion-quantum-labs',
        avatarUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=100&h=100',
      },
      images: ['https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500'],
      createdAt: '2024-02-10T12:00:00.000Z',
      aiScore: 100,
      rating: 5.0,
      reviewCount: 45,
      popular: false
    },
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps Platform',
      description: 'Comprehensive cloud infrastructure and DevOps automation platform.',
      category: 'cloud',
      price: 149,
      currency: '$',
      tags: ['Cloud Infrastructure', 'DevOps', 'Automation'],
      author: {
        name: 'Zion Cloud Solutions',
        id: 'zion-cloud-solutions',
        avatarUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=100&h=100',
      },
      images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500'],
      createdAt: '2024-02-15T10:00:00.000Z',
      aiScore: 94,
      rating: 4.7,
      reviewCount: 89,
      popular: false
    },
    {
      id: 'blockchain-platform',
      title: 'Enterprise Blockchain Platform',
      description: 'Scalable blockchain solutions for enterprise applications and DeFi.',
      category: 'blockchain',
      price: 199,
      currency: '$',
      tags: ['Blockchain', 'DeFi', 'Smart Contracts'],
      author: {
        name: 'Zion Blockchain',
        id: 'zion-blockchain',
        avatarUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100',
      },
      images: ['https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500'],
      createdAt: '2024-02-20T14:00:00.000Z',
      aiScore: 93,
      rating: 4.6,
      reviewCount: 67,
      popular: false
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : Star;
  };

  const getCategoryColor = (categoryId) => {
    const colors = {
      ai: 'from-zion-cyan to-zion-blue',
      quantum: 'from-zion-purple to-zion-cyan',
      security: 'from-zion-red to-zion-orange',
      cloud: 'from-zion-blue to-zion-cyan',
      data: 'from-zion-green to-zion-blue',
      iot: 'from-zion-yellow to-zion-orange',
      blockchain: 'from-zion-purple to-zion-pink'
    };
    return colors[categoryId] || 'from-zion-slate to-zion-slate-light';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Comprehensive Service Portfolio
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of cutting-edge technology services designed to transform your business and drive innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan/20 text-zion-cyan' 
                    : 'text-zion-slate-light hover:text-zion-cyan'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan/20 text-zion-cyan' 
                    : 'text-zion-slate-light hover:text-zion-cyan'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                View All Services
              </button>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`bg-zion-blue-dark/30 p-6 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:bg-zion-blue-dark/50 backdrop-blur-sm ${
                    viewMode === 'list' ? 'flex gap-6' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Service Image */}
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {service.popular && (
                        <div className="absolute top-2 right-2 bg-zion-cyan text-white px-2 py-1 rounded-full text-xs font-medium">
                          Popular
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg`}>
                        {React.createElement(getCategoryIcon(service.category), { className: 'w-4 h-4 text-white' })}
                      </div>
                      <span className="text-zion-cyan text-sm font-medium">
                        {serviceCategories.find(cat => cat.id === service.category)?.name}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats and Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          {service.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {service.reviewCount}
                        </div>
                        <div className="flex items-center gap-1">
                          <Brain className="w-4 h-4 text-zion-cyan" />
                          {service.aiScore}%
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.currency}{service.price}
                        </div>
                        <div className="text-xs text-zion-slate-light">per month</div>
                      </div>
                    </div>

                    {/* Author and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={service.author.avatarUrl}
                          alt={service.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="text-sm font-medium text-white">{service.author.name}</div>
                          <div className="text-xs text-zion-slate-light">{service.createdAt}</div>
                        </div>
                      </div>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors group-hover:translate-x-1 transition-transform"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team of experts can create tailored solutions to meet your specific business needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
