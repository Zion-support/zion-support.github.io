import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Target, 
  Rocket, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  ShoppingCart,
  Heart,
  Eye,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Building2,
  Factory,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  ShoppingBag,
  GraduationCap,
  Globe,
  Lock,
  BarChart3,
  Workflow,
  Palette,
  Video,
  Mic,
  Image,
  FileText,
  Atom,
  Satellite,
  Truck
} from 'lucide-react';

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'cloud-infra', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'specialized', name: 'Specialized AI', icon: <Target className="w-5 h-5" /> },
    { id: 'emerging', name: 'Emerging Tech', icon: <Rocket className="w-5 h-5" /> },
    { id: 'content', name: 'Content & Creative', icon: <Palette className="w-5 h-5" /> }
  ];

  const marketplaceItems = [
    {
      id: 'ai-bi-dashboard',
      name: 'AI Business Intelligence Dashboard',
      category: 'ai-ml',
      description: 'Advanced analytics and insights powered by AI for data-driven decision making.',
      price: '$299/month',
      rating: 4.9,
      reviews: 127,
      users: '2.5K+',
      features: ['Real-time Analytics', 'AI Insights', 'Custom Dashboards', 'API Integration'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-business-intelligence-dashboard',
      popular: true,
      badge: 'Most Popular'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      category: 'ai-ml',
      description: 'Intelligent customer service with 24/7 availability and automated responses.',
      price: '$199/month',
      rating: 4.8,
      reviews: 89,
      users: '1.8K+',
      features: ['24/7 Support', 'AI Chatbots', 'Multi-language', 'Integration APIs'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-customer-support-automation',
      popular: false
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      category: 'ai-ml',
      description: 'Smart project planning and resource optimization with AI-powered insights.',
      price: '$399/month',
      rating: 4.7,
      reviews: 156,
      users: '3.2K+',
      features: ['AI Planning', 'Resource Optimization', 'Team Collaboration', 'Progress Tracking'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-project-management-platform',
      popular: false
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Solutions',
      category: 'cloud-infra',
      description: 'End-to-end cloud infrastructure and deployment automation.',
      price: '$799/month',
      rating: 4.9,
      reviews: 203,
      users: '4.1K+',
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure as Code', 'Monitoring'],
      image: '/api/placeholder/400/300',
      link: '/services/cloud-devops',
      popular: true,
      badge: 'Best Seller'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      category: 'cybersecurity',
      description: 'AI-powered threat detection and response for enterprise security.',
      price: '$899/month',
      rating: 4.9,
      reviews: 178,
      users: '2.9K+',
      features: ['Threat Detection', 'AI Response', 'Compliance', 'Real-time Monitoring'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-cybersecurity-platform',
      popular: false
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Analytics Platform',
      category: 'specialized',
      description: 'Healthcare data analytics and patient insights for improved care.',
      price: '$1,199/month',
      rating: 4.8,
      reviews: 92,
      users: '1.5K+',
      features: ['Patient Analytics', 'HIPAA Compliant', 'Predictive Insights', 'Integration Ready'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-healthcare-analytics-platform',
      popular: false
    },
    {
      id: 'quantum-computing',
      name: 'AI Quantum Computing Solutions',
      category: 'emerging',
      description: 'Quantum computing integration and optimization for complex problems.',
      price: '$2,499/month',
      rating: 4.9,
      reviews: 67,
      users: '850+',
      features: ['Quantum Algorithms', 'Hybrid Computing', 'Optimization', 'Research Tools'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-quantum-computing-solutions',
      popular: false
    },
    {
      id: 'ai-content-creation',
      name: 'AI Content Creation Studio',
      category: 'content',
      description: 'AI-powered content generation and optimization for creators.',
      price: '$99/month',
      rating: 4.7,
      reviews: 234,
      users: '5.6K+',
      features: ['Content Generation', 'SEO Optimization', 'Multi-format', 'Brand Voice'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-content-creation-studio',
      popular: true,
      badge: 'Trending'
    }
  ];

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'users':
        return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, ''));
      default:
        return b.reviews - a.reviews; // popularity
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Technology Marketplace
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Marketplace
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover and deploy cutting-edge AI services, cloud solutions, and emerging technology platforms. 
              Choose from our curated selection of enterprise-grade solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-gray-200'
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="users">Most Users</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Marketplace Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={item.link}
                  className="block bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full"
                >
                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute -top-2 -right-2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Brain className="w-8 h-8 text-cyan-400" />
                      </div>
                      <p className="text-sm">Service Preview</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {item.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-gray-300">{item.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-blue-400 mr-1" />
                          <span className="text-gray-300">{item.users}</span>
                        </div>
                      </div>
                      <span className="text-cyan-400 font-semibold">{item.price}</span>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                          Learn More
                        </span>
                        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {sortedItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={`/services?category=${category.id}`}
                  className="block bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Explore Services</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Can't find what you're looking for? Our team can create custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
