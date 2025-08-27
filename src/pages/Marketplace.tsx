import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye,
  Download,
  Code,
  Brain,
  Cloud,
  Shield,
  ShoppingBag,
  Users,
  Clock,
  Tag,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Award,
  Zap,
  Rocket,
  Crown,
  Target,
  BarChart3,
  Globe,
  Lock,
  Database,
  Smartphone,
  Server,
  Network,
  Cpu,
  Atom,
  Leaf,
  Satellite,
  Truck,
  Building,
  GraduationCap,
  BookOpen,
  Video,
  Image,
  FileText,
  Link
} from 'lucide-react';

interface MarketplaceItem {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  price: string;
  pricingType: 'one-time' | 'subscription' | 'custom' | 'free';
  rating: number;
  reviews: number;
  downloads: number;
  featured: boolean;
  new: boolean;
  popular: boolean;
  tags: string[];
  image: string;
  demoUrl?: string;
  documentationUrl?: string;
  supportLevel: 'basic' | 'standard' | 'premium';
  compatibility: string[];
  lastUpdated: string;
  author: string;
  icon: any;
  color: string;
}

const marketplaceItems: MarketplaceItem[] = [
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with AI-powered task prioritization and risk assessment',
    category: 'AI & Machine Learning',
    subcategory: 'Project Management',
    price: '$299',
    pricingType: 'subscription',
    rating: 4.8,
    reviews: 1247,
    downloads: 15420,
    featured: true,
    new: false,
    popular: true,
    tags: ['AI', 'Project Management', 'Task Automation', 'Risk Assessment'],
    image: '/images/ai-project-manager.jpg',
    demoUrl: '/demo/ai-project-manager',
    documentationUrl: '/docs/ai-project-manager',
    supportLevel: 'premium',
    compatibility: ['Web', 'Mobile', 'Desktop'],
    lastUpdated: '2024-01-15',
    author: 'Zion Tech Group',
    icon: Target,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Suite',
    description: 'Create engaging content 10x faster with AI-powered writing and image generation',
    category: 'AI & Machine Learning',
    subcategory: 'Content Creation',
    price: '$199',
    pricingType: 'subscription',
    rating: 4.9,
    reviews: 2156,
    downloads: 28940,
    featured: true,
    new: false,
    popular: true,
    tags: ['AI', 'Content Creation', 'Writing', 'Image Generation'],
    image: '/images/ai-content-generator.jpg',
    demoUrl: '/demo/ai-content-generator',
    documentationUrl: '/docs/ai-content-generator',
    supportLevel: 'premium',
    compatibility: ['Web', 'API'],
    lastUpdated: '2024-01-10',
    author: 'Zion Tech Group',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud-migration-toolkit',
    name: 'Cloud Migration Toolkit',
    description: 'Complete toolkit for seamless cloud migration with automated assessment and planning',
    category: 'Cloud & Infrastructure',
    subcategory: 'Migration Tools',
    price: '$1500',
    pricingType: 'one-time',
    rating: 4.7,
    reviews: 892,
    downloads: 5670,
    featured: false,
    new: true,
    popular: false,
    tags: ['Cloud', 'Migration', 'Automation', 'Assessment'],
    image: '/images/cloud-migration.jpg',
    demoUrl: '/demo/cloud-migration',
    documentationUrl: '/docs/cloud-migration',
    supportLevel: 'standard',
    compatibility: ['AWS', 'Azure', 'GCP'],
    lastUpdated: '2024-01-20',
    author: 'Zion Tech Group',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'cybersecurity-audit-suite',
    name: 'Cybersecurity Audit Suite',
    description: 'Comprehensive security auditing and compliance checking for enterprise environments',
    category: 'Cybersecurity',
    subcategory: 'Audit Tools',
    price: '$2500',
    pricingType: 'one-time',
    rating: 4.6,
    reviews: 634,
    downloads: 4230,
    featured: false,
    new: false,
    popular: false,
    tags: ['Security', 'Audit', 'Compliance', 'Enterprise'],
    image: '/images/cybersecurity-audit.jpg',
    demoUrl: '/demo/cybersecurity-audit',
    documentationUrl: '/docs/cybersecurity-audit',
    supportLevel: 'premium',
    compatibility: ['Windows', 'Linux', 'macOS'],
    lastUpdated: '2024-01-05',
    author: 'Zion Tech Group',
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'micro-saas-template',
    name: 'Micro SaaS Starter Template',
    description: 'Ready-to-deploy SaaS template with user management, billing, and analytics',
    category: 'Micro SaaS Solutions',
    subcategory: 'Templates',
    price: '$99',
    pricingType: 'one-time',
    rating: 4.9,
    reviews: 1876,
    downloads: 23450,
    featured: true,
    new: false,
    popular: true,
    tags: ['SaaS', 'Template', 'User Management', 'Billing'],
    image: '/images/micro-saas-template.jpg',
    demoUrl: '/demo/micro-saas-template',
    documentationUrl: '/docs/micro-saas-template',
    supportLevel: 'standard',
    compatibility: ['React', 'Node.js', 'PostgreSQL'],
    lastUpdated: '2024-01-12',
    author: 'Zion Tech Group',
    icon: ShoppingBag,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'data-analytics-dashboard',
    name: 'Advanced Data Analytics Dashboard',
    description: 'Real-time data visualization and analytics dashboard with AI-powered insights',
    category: 'Data & Analytics',
    subcategory: 'Dashboards',
    price: '$799',
    pricingType: 'subscription',
    rating: 4.8,
    reviews: 1456,
    downloads: 18920,
    featured: false,
    new: false,
    popular: true,
    tags: ['Analytics', 'Dashboard', 'Data Visualization', 'AI Insights'],
    image: '/images/data-analytics-dashboard.jpg',
    demoUrl: '/demo/data-analytics-dashboard',
    documentationUrl: '/docs/data-analytics-dashboard',
    supportLevel: 'premium',
    compatibility: ['Web', 'Mobile'],
    lastUpdated: '2024-01-08',
    author: 'Zion Tech Group',
    icon: BarChart3,
    color: 'from-orange-500 to-red-500'
  }
];

const categories = [
  { name: 'AI & Machine Learning', icon: Brain, count: 45 },
  { name: 'Cloud & Infrastructure', icon: Cloud, count: 32 },
  { name: 'Cybersecurity', icon: Shield, count: 28 },
  { name: 'Micro SaaS Solutions', icon: ShoppingBag, count: 67 },
  { name: 'Data & Analytics', icon: BarChart3, count: 38 },
  { name: 'Digital Transformation', icon: Rocket, count: 23 },
  { name: 'Emerging Technologies', icon: Atom, count: 19 },
  { name: 'Industry Solutions', icon: Building, count: 41 }
];

export function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'rating' | 'price'>('popular');

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zion Tech Marketplace
            </h1>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
              Discover cutting-edge technology solutions, tools, and services to accelerate your digital transformation
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, services, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50"
                />
              </div>
              
              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-zion-slate-dark/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price">Price: Low to High</option>
                </select>
                
                <div className="flex bg-zion-slate-dark/50 rounded-lg border border-cyan-400/20 p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-zion-slate-dark/50 text-gray-300 hover:text-white hover:bg-zion-slate-dark/70 border border-cyan-400/20'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-zion-slate-dark/50 text-gray-300 hover:text-white hover:bg-zion-slate-dark/70 border border-cyan-400/20'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marketplace Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="relative">
                  <div className={`w-full h-48 bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-20 h-20 text-white" />
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  {item.new && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                        New
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{item.price}</span>
                    <span className="text-sm text-gray-400 capitalize">{item.pricingType}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <span>{item.downloads.toLocaleString()} downloads</span>
                    <span>{item.reviews} reviews</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={item.demoUrl || '#'}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Try Demo
                    </a>
                    <a
                      href={item.documentationUrl || '#'}
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-24 h-24 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Category: {item.category}</span>
                          <span>Support: {item.supportLevel}</span>
                          <span>Updated: {item.lastUpdated}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{item.price}</div>
                        <div className="flex items-center space-x-1 mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{item.rating} ({item.reviews})</span>
                        </div>
                        <span className="text-sm text-gray-400 capitalize">{item.pricingType}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{item.downloads.toLocaleString()} downloads</span>
                        <span>Compatible with: {item.compatibility.join(', ')}</span>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={item.demoUrl || '#'}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                        >
                          Try Demo
                        </a>
                        <a
                          href={item.documentationUrl || '#'}
                          className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300"
                        >
                          Documentation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We offer custom development and consulting services. Let's discuss your specific requirements and create a tailored solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold text-lg"
            >
              <Code className="w-5 h-5 mr-2" />
              Request Custom Solution
            </a>
            <a
              href="/services"
              className="inline-flex items-center border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore All Services
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Marketplace;
