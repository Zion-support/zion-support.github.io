import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Brain, 
  Server, 
  Shield, 
  TrendingUp, 
  ArrowRight,
  Heart,
  Eye,
  Download,
  Play,
  BookOpen,
  Code,
  Cloud,
  Lock,
  Globe,
  Target,
  Rocket,
  Cpu,
  Database,
  Network,
  BarChart3,
  MessageCircle,
  Workflow,
  Atom,
  Satellite
} from 'lucide-react';

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: ShoppingCart, count: 150 },
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain, count: 45 },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, count: 32 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 28 },
    { id: 'cloud-solutions', name: 'Cloud Solutions', icon: Cloud, count: 25 },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3, count: 20 }
  ];

  const products = [
    {
      id: 1,
      name: 'AI Business Intelligence Dashboard',
      description: 'Comprehensive business intelligence platform powered by advanced AI algorithms for real-time insights and decision making.',
      category: 'ai-automation',
      price: '$2,999',
      monthlyPrice: '$299',
      rating: 4.9,
      reviews: 127,
      users: '2.5K+',
      image: '/api/placeholder/400/300',
      features: ['Real-time Analytics', 'AI-powered Insights', 'Custom Dashboards', 'Multi-source Integration'],
      tags: ['AI', 'Analytics', 'Dashboard', 'Business Intelligence'],
      isPopular: true,
      isNew: false
    },
    {
      id: 2,
      name: 'AI Customer Support Automation',
      description: 'Intelligent customer support system that automates responses and provides 24/7 assistance using natural language processing.',
      category: 'ai-automation',
      price: '$1,799',
      monthlyPrice: '$179',
      rating: 4.8,
      reviews: 89,
      users: '1.8K+',
      image: '/api/placeholder/400/300',
      features: ['24/7 Support', 'NLP Processing', 'Multi-language', 'Ticket Management'],
      tags: ['AI', 'Customer Support', 'Automation', 'NLP'],
      isPopular: false,
      isNew: true
    },
    {
      id: 3,
      name: 'AI Project Management Platform',
      description: 'Advanced project management solution with AI-powered task prioritization, resource optimization, and predictive analytics.',
      category: 'ai-automation',
      price: '$3,499',
      monthlyPrice: '$349',
      rating: 4.7,
      reviews: 156,
      users: '3.2K+',
      image: '/api/placeholder/400/300',
      features: ['AI Task Prioritization', 'Resource Optimization', 'Predictive Analytics', 'Team Collaboration'],
      tags: ['AI', 'Project Management', 'Collaboration', 'Analytics'],
      isPopular: true,
      isNew: false
    },
    {
      id: 4,
      name: 'Cybersecurity Threat Intelligence',
      description: 'Comprehensive cybersecurity platform with real-time threat detection, AI-powered analysis, and automated response systems.',
      category: 'cybersecurity',
      price: '$4,999',
      monthlyPrice: '$499',
      rating: 4.9,
      reviews: 203,
      users: '4.1K+',
      image: '/api/placeholder/400/300',
      features: ['Real-time Detection', 'AI Analysis', 'Automated Response', 'Compliance Reporting'],
      tags: ['Cybersecurity', 'Threat Detection', 'AI', 'Compliance'],
      isPopular: true,
      isNew: false
    },
    {
      id: 5,
      name: 'Cloud DevOps Automation',
      description: 'End-to-end DevOps automation platform for cloud-native applications with CI/CD pipelines and infrastructure as code.',
      category: 'cloud-solutions',
      price: '$2,799',
      monthlyPrice: '$279',
      rating: 4.6,
      reviews: 94,
      users: '1.6K+',
      image: '/api/placeholder/400/300',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Multi-cloud Support', 'Monitoring & Logging'],
      tags: ['DevOps', 'Cloud', 'Automation', 'CI/CD'],
      isPopular: false,
      isNew: false
    },
    {
      id: 6,
      name: 'Data Analytics Platform',
      description: 'Enterprise-grade data analytics platform with AI-powered insights, predictive modeling, and interactive visualizations.',
      category: 'data-analytics',
      price: '$3,999',
      monthlyPrice: '$399',
      rating: 4.8,
      reviews: 178,
      users: '2.9K+',
      image: '/api/placeholder/400/300',
      features: ['AI Insights', 'Predictive Modeling', 'Interactive Visualizations', 'Real-time Processing'],
      tags: ['Data Analytics', 'AI', 'Visualization', 'Predictive'],
      isPopular: false,
      isNew: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.users.localeCompare(a.users, undefined, { numeric: true });
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace(',', '')) - parseInt(a.price.replace('$', '').replace(',', ''));
      case 'newest':
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
                <ShoppingCart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Solutions Marketplace
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover cutting-edge AI solutions, enterprise software, and technology services 
              from Zion Tech Group and our trusted partners.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search for AI solutions, services, or tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Categories */}
      <div className="py-12 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-transparent'
                      : 'bg-zion-slate-dark/50 border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-zion-slate-light" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or browse all categories.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map(product => (
                <div key={product.id} className="group relative">
                  <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 h-full transition-all duration-300 hover:border-zion-cyan/50 hover:shadow-lg hover:shadow-zion-cyan/20">
                    {/* Product Image */}
                    <div className="relative mb-6">
                      <div className="w-full h-48 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <Brain className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-zion-slate-light text-sm">AI Solution</p>
                        </div>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {product.isPopular && (
                          <span className="px-2 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-xs rounded-full font-medium">
                            Popular
                          </span>
                        )}
                        {product.isNew && (
                          <span className="px-2 py-1 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs rounded-full font-medium">
                            New
                          </span>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-8 h-8 bg-zion-slate-dark/80 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 bg-zion-slate-dark/80 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-zion-slate-light text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white">Key Features:</h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-xs text-zion-slate-light">
                              <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {product.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{product.rating}</span>
                            <span className="text-zion-slate-light">({product.reviews})</span>
                          </div>
                          <div className="flex items-center space-x-1 text-zion-slate-light">
                            <Users className="w-4 h-4" />
                            <span>{product.users}</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="border-t border-zion-purple/20 pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-2xl font-bold text-white">{product.price}</div>
                            <div className="text-sm text-zion-slate-light">or {product.monthlyPrice}/month</div>
                          </div>
                          <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-24 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse our comprehensive collection of AI-powered solutions and enterprise technology services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI & Automation</h3>
              <p className="text-zion-slate-light mb-6">
                Transform your business with intelligent automation, machine learning, and AI-powered decision making.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-3" />
                  <span className="text-sm">Business Intelligence</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-3" />
                  <span className="text-sm">Process Automation</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-3" />
                  <span className="text-sm">Predictive Analytics</span>
                </div>
              </div>
              <Link
                to="/services/ai-automation"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                Explore AI Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">IT Infrastructure</h3>
              <p className="text-zion-slate-light mb-6">
                Modernize your technology foundation with cloud migration, DevOps automation, and scalable infrastructure.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-3" />
                  <span className="text-sm">Cloud Migration</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-3" />
                  <span className="text-sm">DevOps Automation</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-3" />
                  <span className="text-sm">Infrastructure as Code</span>
                </div>
              </div>
              <Link
                to="/services/it-infrastructure"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                Explore Infrastructure
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Cybersecurity</h3>
              <p className="text-zion-slate-light mb-6">
                Protect your digital assets with advanced threat detection, AI-powered analysis, and compliance management.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-3" />
                  <span className="text-sm">Threat Detection</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-3" />
                  <span className="text-sm">AI Analysis</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-3" />
                  <span className="text-sm">Compliance Management</span>
                </div>
              </div>
              <Link
                to="/services/cybersecurity"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                Explore Security
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? Our team can create custom AI solutions 
              tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Discuss Custom Solution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-xl hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for checkmark
function CheckCircle({ className, ...props }: any) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
