import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Users, 
  Globe, 
  Target,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Award,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Import service data
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES } from '../data/specializedITInfrastructureServices';

const ComprehensiveServicesOverview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_NEW_SERVICES,
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_SERVICES,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Price ranges
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: '$0 - $500/month' },
    { value: '500-1000', label: '$500 - $1,000/month' },
    { value: '1000-2000', label: '$1,000 - $2,000/month' },
    { value: '2000+', label: '$2,000+/month' }
  ];

  // Helper function to get service price
  const getServicePrice = (service: any) => {
    if (typeof service.price === 'number') {
      return service.price;
    }
    if (service.price && typeof service.price === 'object' && service.price.monthly) {
      return service.price.monthly;
    }
    return 0;
  };

  // Helper function to get service tags
  const getServiceTags = (service: any) => {
    if (service.tags && Array.isArray(service.tags)) {
      return service.tags;
    }
    return [];
  };

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const serviceTitle = 'title' in service ? service.title : 'name' in service ? service.name : '';
      const matchesSearch = serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           getServiceTags(service).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const servicePrice = getServicePrice(service);
      const matchesPrice = selectedPriceRange === 'all' || 
        (selectedPriceRange === '0-500' && servicePrice <= 500) ||
        (selectedPriceRange === '500-1000' && servicePrice > 500 && servicePrice <= 1000) ||
        (selectedPriceRange === '1000-2000' && servicePrice > 1000 && servicePrice <= 2000) ||
        (selectedPriceRange === '2000+' && servicePrice > 2000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return getServicePrice(a) - getServicePrice(b);
        case 'price-high':
          return getServicePrice(b) - getServicePrice(a);
        case 'innovation':
          const aTags = getServiceTags(a);
          const bTags = getServiceTags(b);
          return bTags.filter(tag => ['AI', 'Quantum', 'Autonomous', 'Innovation'].includes(tag)).length - 
                 aTags.filter(tag => ['AI', 'Quantum', 'Autonomous', 'Innovation'].includes(tag)).length;
        case 'name':
          const aTitle = 'title' in a ? a.title : 'name' in a ? a.name : '';
          const bTitle = 'title' in b ? b.title : 'name' in b ? b.name : '';
          return aTitle.localeCompare(bTitle);
        default:
          return 0;
      }
    });

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Digital Marketing':
      case 'AI & Customer Service':
      case 'AI & Legal Tech':
      case 'AI & Supply Chain':
      case 'AI & Human Resources':
      case 'AI & Financial Services':
      case 'AI & Healthcare':
      case 'AI & Consciousness':
        return Brain;
      case 'Quantum Computing':
        return Zap;
      case 'Cybersecurity':
        return Shield;
      case 'IT Infrastructure':
        return Cpu;
      case 'Space Technology':
        return Rocket;
      case 'Neurotechnology':
        return Target;
      case 'Autonomous Systems':
        return Users;
      case 'Blockchain & Web3':
        return Globe;
      case 'Internet of Things':
        return Cpu;
      default:
        return Lightbulb;
    }
  };

  const getServiceColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Digital Marketing':
      case 'AI & Customer Service':
      case 'AI & Legal Tech':
      case 'AI & Supply Chain':
      case 'AI & Human Resources':
      case 'AI & Financial Services':
      case 'AI & Healthcare':
      case 'AI & Consciousness':
        return 'from-blue-500 to-purple-600';
      case 'Quantum Computing':
        return 'from-purple-500 to-pink-600';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-600';
      case 'IT Infrastructure':
        return 'from-green-500 to-emerald-600';
      case 'Space Technology':
        return 'from-indigo-500 to-blue-600';
      case 'Neurotechnology':
        return 'from-pink-500 to-red-600';
      case 'Autonomous Systems':
        return 'from-yellow-500 to-orange-600';
      case 'Blockchain & Web3':
        return 'from-cyan-500 to-blue-600';
      case 'Internet of Things':
        return 'from-emerald-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <SEOHead 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Explore our comprehensive portfolio of cutting-edge technology services including AI, Quantum Computing, Cybersecurity, IT Infrastructure, and more. Transform your business with innovative solutions."
        keywords="technology services, AI services, quantum computing, cybersecurity, IT infrastructure, micro SaaS, autonomous systems, space technology, neurotechnology"
        ogImage="/images/services-overview-og.jpg"
        canonical="https://ziontechgroup.com/comprehensive-services-overview"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Cutting-Edge Technology Solutions
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Technology
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Services Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our extensive range of innovative technology services designed to accelerate your business growth, 
              enhance security, and drive digital transformation. From AI-powered solutions to quantum computing, 
              we deliver cutting-edge technology that gives you a competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>500+ Services Available</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span>Industry Leading Innovation</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                <span>Global Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Options */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setSortBy('innovation')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'innovation'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <Lightbulb className="w-4 h-4 inline mr-2" />
                Most Innovative
              </button>
              <button
                onClick={() => setSortBy('price-low')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'price-low'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <DollarSign className="w-4 h-4 inline mr-2" />
                Price: Low to High
              </button>
              <button
                onClick={() => setSortBy('price-high')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'price-high'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <DollarSign className="w-4 h-4 inline mr-2" />
                Price: High to Low
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'name'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                A-Z
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-gray-400">
                Discover innovative solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = getServiceIcon(service.category);
                const colorClass = getServiceColor(service.category);
                
                return (
                  <div
                    key={service.id}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Service Header */}
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${colorClass} rounded-lg mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {'title' in service ? service.title : 'name' in service ? service.name : ''}
                        </h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price and Delivery */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-green-400">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span className="font-semibold">${getServicePrice(service).toLocaleString()}</span>
                        <span className="text-gray-400 text-sm ml-1">/month</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{('estimatedDelivery' in service ? service.estimatedDelivery : '4-6 weeks')}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {getServiceTags(service).slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Benefits:</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Price */}
                    <div className="mb-6 p-3 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-yellow-400 font-medium">{service.marketPrice}</span>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-6 p-4 bg-gray-700/30 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Contact Information:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-300">
                          <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                          <a href={`tel:${service.contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                            {service.contactInfo.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                          <a href={`mailto:${service.contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                            {service.contactInfo.email}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                          <span>364 E Main St STE 1008, Middletown DE 19709</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={`https://ziontechgroup.com/contact?service=${service.id}`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </a>
                      <a
                        href={`https://ziontechgroup.com/services/${service.id}`}
                        className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our team of experts is ready to help you implement the perfect technology solution. 
              Get in touch today to discuss your needs and discover how we can accelerate your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-lg text-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-400">Experienced professionals with deep industry knowledge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400">Track record of successful implementations and ROI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Support</h3>
                <p className="text-gray-400">24/7 support and maintenance worldwide</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesOverview;