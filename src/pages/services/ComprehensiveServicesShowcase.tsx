import React, { useState, useEffect } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Target, 
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  Calendar,
  Award,
  Zap,
  Shield,
  Brain,
  Heart,
  Leaf,
  Scale,
  Link,
  GraduationCap,
  Drone,
  Rocket
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES, MARKET_INSIGHTS } from '../../data/innovativeNewServices';

export default function ComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_NEW_SERVICES.map(s => s.category.split(' & ')[0])))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-200', label: '$0 - $200' },
    { value: '200-500', label: '$200 - $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500+', label: '$2,500+' }
  ];
  const innovationLevels = ['all', 'Advanced', 'Cutting-edge', 'Revolutionary', 'Breakthrough'];

  const filteredServices = INNOVATIVE_NEW_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    
    const matchesPrice = (() => {
      if (selectedPriceRange === 'all') return true;
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (selectedPriceRange === '2500+') return service.price >= 2500;
      return service.price >= min && service.price <= max;
    })();
    
    const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'innovation':
        const innovationOrder = { 'Advanced': 1, 'Cutting-edge': 2, 'Revolutionary': 3, 'Breakthrough': 4 };
        return innovationOrder[a.innovationLevel as keyof typeof innovationOrder] - innovationOrder[b.innovationLevel as keyof typeof innovationOrder];
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI': Brain,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'IoT': Zap,
      'Legal': Scale,
      'Blockchain': Link,
      'FinTech': TrendingUp,
      'Education': GraduationCap,
      'Robotics': Drone,
      'Quantum': Star
    };
    
    for (const [key, icon] of Object.entries(iconMap)) {
      if (category.includes(key)) return icon;
    }
    return Rocket;
  };

  const getInnovationLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'Advanced': 'text-blue-500',
      'Cutting-edge': 'text-purple-500',
      'Revolutionary': 'text-orange-500',
      'Breakthrough': 'text-red-500'
    };
    return colorMap[level] || 'text-gray-500';
  };

  const getInnovationLevelBg = (level: string) => {
    const bgMap: { [key: string]: string } = {
      'Advanced': 'bg-blue-500/20',
      'Cutting-edge': 'bg-purple-500/20',
      'Revolutionary': 'bg-orange-500/20',
      'Breakthrough': 'bg-red-500/20'
    };
    return bgMap[level] || 'bg-gray-500/20';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase - Zion Tech Group" 
        description="Explore our complete portfolio of innovative micro SAAS services, IT solutions, and AI innovations. Find the perfect solution for your business needs."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Comprehensive Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of {INNOVATIVE_NEW_SERVICES.length}+ innovative services 
              designed to transform your business and drive growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Market Overview & Growth Potential
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Total Market</h3>
              <p className="text-2xl font-bold text-cyan-400">{MARKET_INSIGHTS.totalAddressableMarket}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Growth Rate</h3>
              <p className="text-2xl font-bold text-green-400">{MARKET_INSIGHTS.growthRate}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Services Available</h3>
              <p className="text-2xl font-bold text-purple-400">{INNOVATIVE_NEW_SERVICES.length}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Industries Served</h3>
              <p className="text-2xl font-bold text-orange-400">15+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value} className="bg-gray-800 text-white">
                    {range.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level} className="bg-gray-800 text-white">
                    {level === 'all' ? 'All Levels' : level}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
                <option value="innovation" className="bg-gray-800 text-white">Innovation Level</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Showing {filteredServices.length} of {INNOVATIVE_NEW_SERVICES.length} services
            </p>
          </div>
        </div>
      </div>

      {/* Services Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationLevelColor(service.innovationLevel)} ${getInnovationLevelBg(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>Market Price: {service.marketPrice}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Delivery: {service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Target className="w-4 h-4 mr-2" />
                      <span>ROI: {service.roi}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-300 mb-3">{service.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getInnovationLevelColor(service.innovationLevel)} ${getInnovationLevelBg(service.innovationLevel)}`}>
                            {service.innovationLevel}
                          </span>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-cyan-400">
                              ${service.price.toLocaleString()}
                              <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <div className="space-y-1">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                          <div className="space-y-1">
                            {service.benefits.slice(0, 4).map((benefit, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-400">
                                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Details:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-400">
                              <DollarSign className="w-4 h-4 mr-2" />
                              <span>Market: {service.marketPrice}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <Clock className="w-4 h-4 mr-2" />
                              <span>Delivery: {service.estimatedDelivery}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <Target className="w-4 h-4 mr-2" />
                              <span>ROI: {service.roi}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 5).map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300">
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Contact our team to discuss your needs and find the perfect solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 text-lg font-semibold">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-purple-400 text-lg font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick response guaranteed</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-green-400 text-lg font-semibold">ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Explore our full portfolio</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <p className="text-gray-400">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}