import React, { useState } from 'react';
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
  Phone,
  Mail,
  MapPin,
  Star as StarIcon,
  Award,
  Users as UsersIcon,
  Globe as GlobeIcon,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { CYBERSECURITY_SERVICES } from '../data/cybersecurityServices';
import { DEVOPS_CLOUD_SERVICES } from '../data/devopsCloudServices';
import { DATA_ANALYTICS_SERVICES } from '../data/dataAnalyticsServices';
import { INDUSTRY_SOLUTIONS } from '../data/industrySolutions';

export default function ComprehensiveServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = [
    ...ADVANCED_AI_SERVICES,
    ...CYBERSECURITY_SERVICES,
    ...DEVOPS_CLOUD_SERVICES,
    ...DATA_ANALYTICS_SERVICES,
    ...INDUSTRY_SOLUTIONS
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Financial Services', name: 'AI & Financial Services', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Legal Services', name: 'AI & Legal Services', icon: Brain, color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'AI & Supply Chain', name: 'AI & Supply Chain', icon: Network, color: 'from-green-500 to-blue-500' },
    { id: 'AI & Energy', name: 'AI & Energy', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'DevOps & Cloud', name: 'DevOps & Cloud', icon: Cloud, color: 'from-blue-500 to-indigo-500' },
    { id: 'Data Analytics', name: 'Data Analytics', icon: BarChart3, color: 'from-green-500 to-teal-500' },
    { id: 'Healthcare', name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'Financial Services', name: 'Financial Services', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { id: 'Manufacturing', name: 'Manufacturing', icon: Building, color: 'from-gray-500 to-blue-500' },
    { id: 'Retail', name: 'Retail', icon: ShoppingCart, color: 'from-blue-500 to-purple-500' },
    { id: 'Education', name: 'Education', icon: Users, color: 'from-indigo-500 to-purple-500' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $2,000', range: 'Under $2,000/month' },
    { id: 'medium', name: '$2,000 - $3,000', range: '$2,000 - $3,000/month' },
    { id: 'high', name: 'Over $3,000', range: 'Over $3,000/month' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && service.price < 2000) ||
                        (selectedPriceRange === 'medium' && service.price >= 2000 && service.price <= 3000) ||
                        (selectedPriceRange === 'high' && service.price > 3000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const foundCategory = categories.find(cat => cat.id === category);
    return foundCategory ? foundCategory.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const foundCategory = categories.find(cat => cat.id === category);
    return foundCategory ? foundCategory.color : 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of innovative AI, cybersecurity, DevOps, and industry-specific solutions designed to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <UsersIcon className="h-12 w-12 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUpIcon className="h-12 w-12 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <GlobeIcon className="h-12 w-12 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, features, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="lg:w-48">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Solutions Available
            </h2>
            <p className="text-gray-400 text-lg">
              Each solution is designed to address real business challenges with proven technology and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div
                  key={service.id}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
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

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-400">
                          <Star className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Market Price & Delivery */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-green-400 font-medium">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Delivery:</span>
                      <span className="text-blue-400">{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Support:</span>
                      <span className="text-purple-400 capitalize">{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">
                No services found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today to start your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
              <p className="text-gray-400">Available 24/7</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
              <p className="text-gray-400">Response within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">364 E Main St STE 1008</p>
              <p className="text-gray-400">Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Brain className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
              <p className="text-gray-400">
                Leverage the latest artificial intelligence and machine learning technologies to gain competitive advantages.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400">
                Bank-grade security and compliance built into every solution to protect your business and data.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Rocket className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-400">
                Get up and running quickly with our proven implementation methodologies and expert support.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-gray-400">
                24/7 technical support and dedicated success managers to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}