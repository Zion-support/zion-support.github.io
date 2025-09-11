import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Car,
  Satellite,
  TestTube,
  Leaf,
  ShieldCheck,
  ChartLine,
  Factory,
  Zap as Lightning
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_INNOVATIVE_SERVICES } from '../data/advancedInnovativeServices';

export default function InnovativeServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...ADVANCED_INNOVATIVE_SERVICES];

  const categories = [
    { id: 'all', title: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-content', title: 'AI & Content', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'ai-business', title: 'AI & Business', icon: Building, color: 'from-green-500 to-emerald-500' },
    { id: 'ai-financial', title: 'AI & Financial', icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
    { id: 'ai-hr', title: 'AI & HR', icon: Users, color: 'from-indigo-500 to-purple-500' },
    { id: 'ai-supply-chain', title: 'AI & Supply Chain', icon: Network, color: 'from-red-500 to-pink-500' },
    { id: 'ai-legal', title: 'AI & Legal', icon: Shield, color: 'from-gray-500 to-blue-500' },
    { id: 'ai-healthcare', title: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'ai-real-estate', title: 'AI & Real Estate', icon: Building, color: 'from-blue-500 to-indigo-500' },
    { id: 'ai-education', title: 'AI & Education', icon: BookOpen, color: 'from-green-500 to-blue-500' },
    { id: 'ai-marketing', title: 'AI & Marketing', icon: Target, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', title: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { id: 'space-tech', title: 'Space Technology', icon: Satellite, color: 'from-indigo-500 to-purple-500' },
    { id: 'biotech', title: 'Biotechnology', icon: TestTube, color: 'from-green-500 to-emerald-500' },
    { id: 'climate-tech', title: 'Climate Technology', icon: Leaf, color: 'from-green-500 to-blue-500' },
    { id: 'cybersecurity', title: 'Cybersecurity', icon: ShieldCheck, color: 'from-red-500 to-pink-500' },
    { id: 'financial-trading', title: 'Financial Trading', icon: ChartLine, color: 'from-yellow-500 to-orange-500' },
    { id: 'manufacturing', title: 'Manufacturing', icon: Factory, color: 'from-gray-500 to-blue-500' },
    { id: 'energy-grid', title: 'Energy Grid', icon: Lightning, color: 'from-yellow-500 to-orange-500' },
    { id: 'autonomous-vehicles', title: 'Autonomous Vehicles', icon: Car, color: 'from-blue-500 to-indigo-500' }
  ];

  const priceRanges = [
    { id: 'all', title: 'All Prices', range: 'All' },
    { id: 'budget', title: 'Budget ($199-$499)', range: '199-499' },
    { id: 'mid-range', title: 'Mid-Range ($500-$999)', range: '500-999' },
    { id: 'premium', title: 'Premium ($1,000-$2,999)', range: '1000-2999' },
    { id: 'enterprise', title: 'Enterprise ($3,000+)', range: '3000+' }
  ];

  const getCategoryIcon = (category: string) => {
    const categoryObj = categories.find(cat => 
      category.toLowerCase().includes(cat.id.replace('-', ' ')) ||
      cat.title.toLowerCase().includes(category.toLowerCase())
    );
    return categoryObj?.icon || Globe;
  };

  const getCategoryColor = (category: string) => {
    const categoryObj = categories.find(cat => 
      category.toLowerCase().includes(cat.id.replace('-', ' ')) ||
      cat.title.toLowerCase().includes(category.toLowerCase())
    );
    return categoryObj?.color || 'from-gray-500 to-blue-500';
  };

  const filterServices = () => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryObj = categories.find(cat => cat.id === selectedCategory);
      if (categoryObj) {
        filtered = filtered.filter(service => 
          service.category.toLowerCase().includes(categoryObj.title.toLowerCase().replace('AI & ', '').replace('AI ', '').toLowerCase()) ||
          service.subcategory.toLowerCase().includes(categoryObj.title.toLowerCase().replace('AI & ', '').replace('AI ', '').toLowerCase())
        );
      }
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      const rangeObj = priceRanges.find(range => range.id === selectedPriceRange);
      if (rangeObj && rangeObj.range !== 'All') {
        if (rangeObj.range === '3000+') {
          filtered = filtered.filter(service => service.price >= 3000);
        } else {
          const [min, max] = rangeObj.range.split('-').map(Number);
          filtered = filtered.filter(service => service.price >= min && service.price <= max);
        }
      }
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredServices = filterServices();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Micro SAAS</span> Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge AI-powered micro SAAS solutions designed to transform your business operations, 
            drive innovation, and deliver measurable ROI across all industries.
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap justify-center gap-3">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.title}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Sort by Price (Low to High)</option>
                <option value="price-high">Sort by Price (High to Low)</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
              <div className="text-gray-400">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">20+</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">400%+</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${categoryColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Category & Price */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full">
                    {service.category}
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">
                      ${service.price.toLocaleString()}/month
                    </div>
                    <div className="text-xs text-gray-400">
                      Market: {service.marketPrice}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-gray-500">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIdx) => (
                      <li key={benefitIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology & ROI */}
                <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-300">
                      <div className="font-medium">ROI:</div>
                      <div className="text-green-400">{service.roi}</div>
                    </div>
                    <div className="text-gray-300">
                      <div className="font-medium">Delivery:</div>
                      <div className="text-cyan-400">{service.estimatedDelivery}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  
                  {service.demoUrl && (
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Demo</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you implement the right innovative technology solutions to drive growth, 
              efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Missing icon components
const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const Atom = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);