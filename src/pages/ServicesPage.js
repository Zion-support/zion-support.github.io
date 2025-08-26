import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Zap, 
  Globe, 
  Lock, 
  Cpu, 
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle,
  Star,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { INNOVATIVE_NEW_SERVICES_2025 } from '../data/innovativeNewServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';
import { ULTIMATE_MICRO_SAAS_SERVICES_2025 } from '../data/ultimateMicroSaasServices2025';
import { enhancedMicroSaasServices2025 } from '../data/enhancedMicroSaasServices2025';
import { SPECIALIZED_MICRO_SAAS_SERVICES_2025 } from '../data/specializedMicroSaasServices2025';
import { innovativeMicroSaasServices2025 } from '../data/innovativeMicroSaasServices2025';
import { ENHANCED_AI_SERVICES } from '../data/enhancedAIServices';
import { SPECIALIZED_AI_SERVICES } from '../data/specializedAIServices';
import { INNOVATIVE_AI_SERVICES } from '../data/innovativeAIServices';
import { ENHANCED_IT_SERVICES } from '../data/enhancedITServices';
import { INNOVATIVE_IT_SERVICES } from '../data/innovativeITServices';
import { COMPREHENSIVE_IT_INFRASTRUCTURE_SERVICES } from '../data/comprehensiveITInfrastructureServices';
import { IT_SERVICES } from '../data/itServices';
import { ENHANCED_MICRO_SAAS_SERVICES } from '../data/enhancedMicroSaasServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSAASServices';
import { ENHANCED_SERVICES } from '../data/enhancedServices';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';
import { ADDITIONAL_INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/additionalInnovativeMicroSaasServices2025';

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Combine all services from different data files
  const allServices = [
    ...INNOVATIVE_NEW_SERVICES_2025,
    ...SPECIALIZED_IT_SERVICES_2025,
    ...ULTIMATE_MICRO_SAAS_SERVICES_2025.slice(0, 10), // Show first 10 for performance
    ...enhancedMicroSaasServices2025.slice(0, 10),
    ...SPECIALIZED_MICRO_SAAS_SERVICES_2025.slice(0, 10),
    ...innovativeMicroSaasServices2025.slice(0, 10),
    ...ENHANCED_AI_SERVICES.slice(0, 10),
    ...SPECIALIZED_AI_SERVICES.slice(0, 10),
    ...INNOVATIVE_AI_SERVICES.slice(0, 10),
    ...ENHANCED_IT_SERVICES.slice(0, 10),
    ...INNOVATIVE_IT_SERVICES.slice(0, 10),
    ...COMPREHENSIVE_IT_INFRASTRUCTURE_SERVICES.slice(0, 10),
    ...IT_SERVICES.slice(0, 10),
    ...ENHANCED_MICRO_SAAS_SERVICES.slice(0, 10),
    ...INNOVATIVE_MICRO_SAAS_SERVICES.slice(0, 10),
    ...ADVANCED_MICRO_SAAS_SERVICES.slice(0, 10),
    ...ENHANCED_SERVICES.slice(0, 10),
    ...INNOVATIVE_NEW_SERVICES.slice(0, 10),
    ...ADDITIONAL_INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(0, 10)
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: 'Under $1,000/month' },
    { value: '1000-3000', label: '$1,000 - $3,000/month' },
    { value: '3000-5000', label: '$3,000 - $5,000/month' },
    { value: '5000+', label: '$5,000+/month' }
  ];

  // Filter services based on search, category, and price
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (service.price && service.price.includes(selectedPriceRange));
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category) => {
    const iconMap = {
      'ai-services': <Brain className="w-6 h-6" />,
      'cloud-services': <Cloud className="w-6 h-6" />,
      'cybersecurity': <Shield className="w-6 h-6" />,
      'data-analytics': <Database className="w-6 h-6" />,
      'it-infrastructure': <Network className="w-6 h-6" />,
      'software-development': <Code className="w-6 h-6" />,
      'business-intelligence': <BarChart3 className="w-6 h-6" />,
      'digital-transformation': <Target className="w-6 h-6" />,
      'innovation': <Lightbulb className="w-6 h-6" />,
      'micro-saas': <Rocket className="w-6 h-6" />,
      'automation': <Zap className="w-6 h-6" />,
      'web3-blockchain': <Globe className="w-6 h-6" />,
      'compliance': <Lock className="w-6 h-6" />,
      'edge-computing': <Cpu className="w-6 h-6" />,
      'emerging-tech': <Sparkles className="w-6 h-6" />
    };
    return iconMap[category] || <Star className="w-6 h-6" />;
  };

  const getPriceColor = (price) => {
    if (price?.includes('0-1000')) return 'text-green-600';
    if (price?.includes('1000-3000')) return 'text-blue-600';
    if (price?.includes('3000-5000')) return 'text-yellow-600';
    if (price?.includes('5000+')) return 'text-purple-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOHead 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Explore our extensive range of AI, cloud, cybersecurity, and digital transformation services designed to accelerate your business growth in 2025."
        keywords="AI services, cloud computing, cybersecurity, digital transformation, IT consulting, micro SAAS, business technology"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive AI-powered solutions, cloud infrastructure, and digital transformation services 
              to accelerate your business growth in 2025 and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Filter */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                    {getCategoryIcon(service.category)}
                  </div>
                  {service.featured && (
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium ${getPriceColor(service.price)}`}>
                    {service.price || 'Contact for pricing'}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {service.category.replace(/-/g, ' ')}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.deliveryTime || '2-4 weeks'}
                  </div>
                  <Link
                    to={`/services/${service.id || index}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all categories.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12 text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the right technology solutions 
            to drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Download Service Guide
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">services@ziontechgroup.com</p>
              <p className="text-sm text-gray-500">24/7 support available</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Tech Street</p>
              <p className="text-sm text-gray-500">Innovation District, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
