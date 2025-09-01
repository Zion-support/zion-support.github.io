import React, { useState } from 'react';
import SEO from "@/components/SEO";
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Database,
  Users,
  TrendingUp,
  Globe,
  Lock,
  Cloud,
  Briefcase,
  Scale,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  DollarSign,
  Clock,
  Award,
  Heart,
  Atom,
  Activity,
  Truck,
  FileText,
  Bot,
  Sparkles,
  Cpu,
  Building2,
  ShoppingCart,
  Video,
  GraduationCap,
  Calendar,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ULTIMATE_REAL_SERVICES_2025, ULTIMATE_SERVICE_CATEGORIES_2025, ULTIMATE_SERVICE_SUBCATEGORIES_2025, ULTIMATE_PRICING_TIERS_2025, ULTIMATE_CONTACT_INFO_2025, ULTIMATE_SERVICE_GUARANTEES_2025 } from '@/data/ultimateRealServices2025';

export default function UltimateServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['all', ...Object.keys(ULTIMATE_SERVICE_CATEGORIES_2025)];

  const filteredServices = ULTIMATE_REAL_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'budget' && service.price <= 2000) ||
                        (priceRange === 'mid-range' && service.price > 2000 && service.price <= 5000) ||
                        (priceRange === 'enterprise' && service.price > 5000);
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    if (category === 'all') return <Rocket className="w-6 h-6" />;
    return ULTIMATE_SERVICE_CATEGORIES_2025[category]?.icon ? 
      <span className="text-2xl">{ULTIMATE_SERVICE_CATEGORIES_2025[category].icon}</span> : 
      <Rocket className="w-6 h-6" />;
  };

  const getInnovationBadge = (level: string) => {
    const colors = {
      'Revolutionary': 'bg-gradient-to-r from-purple-600 to-pink-600',
      'Advanced': 'bg-gradient-to-r from-blue-600 to-cyan-600',
      'Innovative': 'bg-gradient-to-r from-green-600 to-emerald-600'
    };
    return (
      <span className={`${colors[level as keyof typeof colors] || colors.Advanced} text-white text-xs px-2 py-1 rounded-full font-medium`}>
        {level}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Ultimate Innovative Services 2025 | Zion Tech Group"
        description="Discover our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, autonomous systems, cybersecurity, business automation, Zion Tech Group"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ultimate Innovative
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Revolutionary AI-powered, quantum-secure, and autonomous business solutions that transform industries and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <a href="tel:+13024640950" className="text-blue-400 font-semibold hover:text-blue-300">
                  {ULTIMATE_CONTACT_INFO_2025.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <a href={`mailto:${ULTIMATE_CONTACT_INFO_2025.email}`} className="text-blue-400 font-semibold hover:text-blue-300">
                  {ULTIMATE_CONTACT_INFO_2025.email}
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <span className="text-blue-400 font-semibold">
                  {ULTIMATE_CONTACT_INFO_2025.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Prices</option>
              <option value="budget">Budget ($0 - $2,000)</option>
              <option value="mid-range">Mid-Range ($2,000 - $5,000)</option>
              <option value="enterprise">Enterprise ($5,000+)</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
              <option value="innovation">Innovation Level</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  {getInnovationBadge(service.innovationLevel)}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="p-6">
                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-white">
                      ${service.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400">per {service.pricingModel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Market Price</p>
                    <p className="text-sm text-green-400 font-medium">{service.marketPrice}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-xs text-blue-400">+{service.features.length - 3} more features</p>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-400">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 border border-gray-600 text-gray-300 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>

      {/* Pricing Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Pricing Tiers</h2>
          <p className="text-xl text-gray-300">Choose the perfect plan for your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(ULTIMATE_PRICING_TIERS_2025).map(([tier, details]) => (
            <div
              key={tier}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
              <p className="text-3xl font-bold text-blue-400 mb-4">{details.range}</p>
              <p className="text-gray-300 mb-6">{details.description}</p>
              
              <ul className="space-y-3 mb-8">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Service Guarantees */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Guarantees</h2>
          <p className="text-xl text-gray-300">We stand behind our services with comprehensive guarantees</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(ULTIMATE_SERVICE_GUARANTEES_2025).map(([key, guarantee]) => (
            <div
              key={key}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <p className="text-gray-300">{guarantee}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have already revolutionized their operations with our cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Speak with an Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
