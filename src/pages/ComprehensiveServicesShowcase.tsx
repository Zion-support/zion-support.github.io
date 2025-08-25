import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  Clock, 
  TrendingUp,
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
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Microchip,
  Globe2,
  ShieldCheck,
  Zap as ZapIcon,
  Award,
  Calendar,
  Headphones,
  FileText,
  Settings,
  Monitor,
  Smartphone,
  Tablet,
  Server,
  Wifi,
  Key,
  Shield as ShieldIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Lock as LockIcon,
  BarChart as BarChartIcon,
  Users as UsersIcon,
  Code as CodeIcon,
  Rocket as RocketIcon,
  Target as TargetIcon,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  ShoppingCart as ShoppingCartIcon,
  Building as BuildingIcon,
  Eye as EyeIcon,
  Zap as ZapIcon2,
  Globe as GlobeIcon,
  ArrowRight as ArrowRightIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Sparkles as SparklesIcon,
  Microchip as MicrochipIcon,
  Globe2 as Globe2Icon,
  ShieldCheck as ShieldCheckIcon,
  Award as AwardIcon,
  Calendar as CalendarIcon,
  Headphones as HeadphonesIcon,
  FileText as FileTextIcon,
  Settings as SettingsIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Server as ServerIcon,
  Wifi as WifiIcon,
  Key as KeyIcon
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES } from '../data/enhancedInnovativeServices';

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = Array.from(new Set(ENHANCED_INNOVATIVE_SERVICES.map(service => service.category)));
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Under $2,000/month' },
    { value: 'medium', label: '$2,000 - $4,000/month' },
    { value: 'high', label: 'Over $4,000/month' }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Financial Technology': DollarSign,
      'AI & Healthcare Technology': Heart,
      'AI & Supply Chain': Truck,
      'AI & Customer Experience': Users,
      'AI & Legal Technology': FileText,
      'AI & Energy Technology': Zap,
      'AI & Manufacturing': Cpu,
      'AI & Real Estate': Building,
      'AI & Human Resources': Users,
      'AI & Digital Marketing': Target,
      'AI & Security': Shield,
      'AI & Industrial IoT': Network,
      'AI & Content Creation': FileText,
      'AI & Video Technology': Monitor,
      'AI & Voice Technology': Headphones
    };
    return iconMap[category] || Brain;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Financial Technology': 'from-green-500 to-emerald-600',
      'AI & Healthcare Technology': 'from-red-500 to-pink-600',
      'AI & Supply Chain': 'from-blue-500 to-cyan-600',
      'AI & Customer Experience': 'from-purple-500 to-indigo-600',
      'AI & Legal Technology': 'from-yellow-500 to-orange-600',
      'AI & Energy Technology': 'from-yellow-500 to-green-600',
      'AI & Manufacturing': 'from-gray-500 to-blue-600',
      'AI & Real Estate': 'from-blue-500 to-purple-600',
      'AI & Human Resources': 'from-pink-500 to-red-600',
      'AI & Digital Marketing': 'from-purple-500 to-pink-600',
      'AI & Security': 'from-red-500 to-orange-600',
      'AI & Industrial IoT': 'from-blue-500 to-indigo-600',
      'AI & Content Creation': 'from-green-500 to-blue-600',
      'AI & Video Technology': 'from-purple-500 to-blue-600',
      'AI & Voice Technology': 'from-indigo-500 to-purple-600'
    };
    return colorMap[category] || 'from-cyan-500 to-blue-600';
  };

  const filteredServices = ENHANCED_INNOVATIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'low') matchesPrice = service.price < 2000;
    else if (selectedPriceRange === 'medium') matchesPrice = service.price >= 2000 && service.price <= 4000;
    else if (selectedPriceRange === 'high') matchesPrice = service.price > 4000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const Truck = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Comprehensive AI & Technology Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our extensive portfolio of innovative AI-powered solutions, micro SAAS services, and cutting-edge technology services designed to transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-400">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div
                  key={service.id}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Service Header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${categoryColor} rounded-lg mr-4`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-gray-500 mt-1">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                      Key Benefits:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Details */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Starting Price:</span>
                      <span className="text-lg font-bold text-cyan-400">
                        ${service.price.toLocaleString()}/month
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Market Price:</span>
                      <span className="text-sm text-gray-300">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Delivery:</span>
                      <span className="text-sm text-gray-300">{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Support:</span>
                      <span className="text-sm text-gray-300 capitalize">{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  {service.technologyStack && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-blue-400" />
                        Technology Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologyStack.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-md border border-blue-700/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologyStack.length > 3 && (
                          <span className="text-xs text-gray-500 self-center">
                            +{service.technologyStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Compliance */}
                  {service.compliance && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                        <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
                        Compliance:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.compliance.slice(0, 3).map((comp, compIndex) => (
                          <span
                            key={compIndex}
                            className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-md border border-green-700/30"
                          >
                            {comp}
                          </span>
                        ))}
                        {service.compliance.length > 3 && (
                          <span className="text-xs text-gray-500 self-center">
                            +{service.compliance.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3">
                    <Link
                      to={service.websiteUrl}
                      className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full px-4 py-3 border border-cyan-500 text-cyan-400 text-center rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">Ready to get started?</p>
                      <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Phone className="w-3 h-3" />
                          <span>{service.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Mail className="w-3 h-3" />
                          <span>{service.contactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or browse all our services
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today to start your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase;