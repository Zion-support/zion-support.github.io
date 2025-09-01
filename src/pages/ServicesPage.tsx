import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Smartphone,
  Code,
  Chip,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart3,
  Users2,
  Settings,
  Palette,
  Rocket,
  Award,
  TrendingUp,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Lock,
  Users,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Star,
  Search,
  Filter,
  ChevronDown,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Package
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { ULTIMATE_REAL_SERVICES_2025 } from "@/data/ultimateRealServices2025";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-500 to-blue-600' },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-cyan-500 to-purple-600' },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, color: 'from-blue-500 to-cyan-600' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-purple-500 to-blue-600' },
    { id: 'iot', name: 'IoT & Edge', icon: Cpu, color: 'from-green-500 to-cyan-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-purple-500 to-red-600' },
    { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-pink-500 to-purple-600' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-green-500 to-blue-600' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Server, color: 'from-blue-500 to-purple-600' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-orange-500 to-green-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' }
  ];

  // Filter and sort services
  const allServices = ULTIMATE_REAL_SERVICES_2025;
  
  const filteredServices = allServices.filter(service => {
    const title = service.title || service.name || '';
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory);
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.price || 0) - (b.price || 0);
      case 'price-high':
        return (b.price || 0) - (a.price || 0);
      case 'newest':
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
      case 'popular':
        return (b.popularity || 0) - (a.popularity || 0);
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with AI-powered analytics',
          price: 'From $5,000',
          features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Machine Learning Models'],
        },
        {
          name: 'AI Automation',
          description: 'Automate repetitive tasks and processes with intelligent AI solutions',
          price: 'From $3,000',
          features: ['Process Automation', 'Document Processing', 'Customer Service Bots', 'Workflow Optimization'],
        },
        {
          name: 'AI Consulting',
          description: 'Strategic guidance for implementing AI in your organization',
          price: 'From $2,000',
          features: ['AI Strategy', 'Technology Assessment', 'Implementation Planning', 'Team Training'],
        },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'Security Assessment',
          description: 'Comprehensive security audits and vulnerability assessments',
          price: 'From $4,000',
          features: ['Penetration Testing', 'Security Audits', 'Compliance Reviews', 'Risk Assessment'],
        },
        {
          name: 'Security Implementation',
          description: 'Deploy and configure enterprise-grade security solutions',
          price: 'From $6,000',
          features: ['Firewall Configuration', 'Intrusion Detection', 'Access Control', 'Encryption'],
        },
        {
          name: 'Security Monitoring',
          description: '24/7 security monitoring and incident response services',
          price: 'From $2,500/month',
          features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Security Reports'],
        },
      ],
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions for growing businesses',
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamlessly migrate your infrastructure to the cloud',
          price: 'From $8,000',
          features: ['Infrastructure Assessment', 'Migration Planning', 'Data Migration', 'Testing & Validation'],
        },
        {
          name: 'Cloud Architecture',
          description: 'Design and implement scalable cloud architectures',
          price: 'From $10,000',
          features: ['Architecture Design', 'Performance Optimization', 'Cost Optimization', 'Security Integration'],
        },
        {
          name: 'DevOps Services',
          description: 'Implement modern DevOps practices and automation',
          price: 'From $5,000',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Performance Tuning'],
        },
      ],
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: BarChart3,
      description: 'Transform raw data into actionable business intelligence',
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Data Strategy',
          description: 'Develop a comprehensive data strategy for your organization',
          price: 'From $3,000',
          features: ['Data Assessment', 'Strategy Development', 'Implementation Roadmap', 'Team Training'],
        },
        {
          name: 'Business Intelligence',
          description: 'Build powerful dashboards and reporting systems',
          price: 'From $4,000',
          features: ['Dashboard Design', 'Data Visualization', 'Report Automation', 'KPI Tracking'],
        },
        {
          name: 'Advanced Analytics',
          description: 'Implement predictive analytics and machine learning models',
          price: 'From $6,000',
          features: ['Predictive Modeling', 'Statistical Analysis', 'Data Mining', 'Performance Optimization'],
        },
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive AI, cybersecurity, cloud, and data analytics services. Transform your business with cutting-edge technology solutions."
        keywords="AI services, cybersecurity, cloud solutions, data analytics, IT consulting, Zion Tech Group"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to transform your business. 
              From AI and cybersecurity to cloud infrastructure and data analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-semibold rounded-lg transition-all duration-200"
              >
                <Package className="w-5 h-5 mr-2" />
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of technology services designed to drive innovation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${categories.find(c => c.id === service.category)?.color || 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>
                    {React.createElement(categories.find(c => c.id === service.category)?.icon || Zap, { className: 'w-6 h-6 text-white' })}
                  </div>
                  {service.featured && (
                    <div className="inline-flex items-center px-2 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">
                  {service.title || service.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}
                </p>

                <div className="mb-4">
                  <span className="text-cyan-400 font-semibold">
                    {service.price ? `$${service.price.toLocaleString()}` : 'Contact for pricing'}
                  </span>
                </div>

                {service.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  to={`/contact?service=${service.id || service.title}`}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Categories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our specialized service categories designed to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>

                <div className="space-y-4 mb-6">
                  {category.services.map((service, index) => (
                    <div key={index} className="border-l-2 border-cyan-500 pl-4">
                      <h4 className="font-semibold text-white mb-1">{service.name}</h4>
                      <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-medium">{service.price}</span>
                        <div className="flex space-x-1">
                          {service.features.slice(0, 2).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/contact?category=${category.id}`}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Users className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
