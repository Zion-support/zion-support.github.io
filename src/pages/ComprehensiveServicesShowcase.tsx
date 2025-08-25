import React, { useState, useEffect } from 'react';
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
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star as StarIcon
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { EMERGING_TECH_INNOVATIVE_SERVICES } from '../data/emergingTechInnovativeServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  websiteUrl?: string;
}

export default function ComprehensiveServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices: Service[] = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_INNOVATIVE_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const matchesPrice = selectedPriceRange === 'all' || 
        (selectedPriceRange === 'low' && service.price < 1000) ||
        (selectedPriceRange === 'medium' && service.price >= 1000 && service.price < 5000) ||
        (selectedPriceRange === 'high' && service.price >= 5000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return Brain;
      case 'Cybersecurity':
        return Shield;
      case 'Cloud & Infrastructure':
        return Cloud;
      case 'Data & Analytics':
        return BarChart3;
      case 'Blockchain & Web3':
        return Network;
      case 'Internet of Things':
        return Cpu;
      case 'Quantum Technology':
        return Zap;
      case 'Metaverse & Virtual Reality':
        return Eye;
      case 'Edge Computing & 5G':
        return Globe;
      case 'Neuromorphic Computing':
        return Brain;
      case 'Synthetic Biology & BioTech':
        return Heart;
      case 'Autonomous Systems & Robotics':
        return Rocket;
      case 'Digital Twin & Simulation':
        return Building;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return 'from-purple-500 to-pink-500';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'Cloud & Infrastructure':
        return 'from-blue-500 to-cyan-500';
      case 'Data & Analytics':
        return 'from-green-500 to-teal-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'Internet of Things':
        return 'from-indigo-500 to-purple-500';
      case 'Quantum Technology':
        return 'from-cyan-500 to-blue-500';
      case 'Metaverse & Virtual Reality':
        return 'from-pink-500 to-purple-500';
      case 'Edge Computing & 5G':
        return 'from-teal-500 to-green-500';
      case 'Neuromorphic Computing':
        return 'from-violet-500 to-purple-500';
      case 'Synthetic Biology & BioTech':
        return 'from-emerald-500 to-green-500';
      case 'Autonomous Systems & Robotics':
        return 'from-orange-500 to-red-500';
      case 'Digital Twin & Simulation':
        return 'from-sky-500 to-blue-500';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive Suite of Innovative Micro SAAS Services, IT Solutions, and AI-Powered Technologies
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under $1,000/month</option>
                  <option value="medium">$1,000 - $5,000/month</option>
                  <option value="high">Over $5,000/month</option>
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            {filteredServices.length} Innovative Services Available
          </h2>
          <p className="text-gray-400 text-center">
            Discover our comprehensive portfolio of cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div
                key={service.id}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">
                      {formatPrice(service.price)}
                    </div>
                    <div className="text-sm text-gray-400">per {service.pricingModel}</div>
                  </div>
                </div>

                {/* Service Title and Category */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-400">{service.category}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-sm text-gray-400">{service.subcategory}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Price and Delivery */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="text-gray-400">
                    Market: <span className="text-yellow-400">{service.marketPrice}</span>
                  </div>
                  <div className="text-gray-400">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {service.estimatedDelivery}
                  </div>
                </div>

                {/* Support Level */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    service.supportLevel === 'enterprise' 
                      ? 'bg-purple-100 text-purple-800' 
                      : service.supportLevel === 'premium'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {service.supportLevel.charAt(0).toUpperCase() + service.supportLevel.slice(1)} Support
                  </span>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Phone className="w-4 h-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                    
                    <a
                      href={service.websiteUrl || service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 group"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our team of experts to discuss how our innovative solutions can drive your digital transformation and competitive advantage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-blue-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-purple-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}