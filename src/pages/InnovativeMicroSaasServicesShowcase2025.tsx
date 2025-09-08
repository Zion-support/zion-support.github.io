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
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Heart,
  ShoppingCart,
  Target,
  BarChart3,
  PenTool,
  Eye,
  Smartphone,
  Monitor,
  Atom,
  Car,
  Scale,
  Leaf,
  Factory,
  Building,
  Truck,
  Gauge,
  MessageSquare,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  PlayCircle,
  MailIcon,
  Calendar,
  Award,
  Crown,
  Sparkles,
  Flame,
  Infinity,
  X
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "@/data/innovativeMicroSaasServices2025";

export default function InnovativeMicroSaasServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai-finance', name: 'AI & Finance', icon: TrendingUp, color: 'from-zion-purple to-zion-blue' },
    { id: 'ai-legal', name: 'AI & Legal', icon: Shield, color: 'from-zion-blue to-zion-cyan' },
    { id: 'ai-healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-zion-cyan to-zion-green' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'ai-education', name: 'AI & Education', icon: BookOpen, color: 'from-zion-blue to-zion-cyan' },
    { id: 'ai-real-estate', name: 'AI & Real Estate', icon: Building, color: 'from-zion-purple to-zion-green' },
    { id: 'ai-hospitality', name: 'AI & Hospitality', icon: Users, color: 'from-zion-orange to-zion-blue' },
    { id: 'ai-health', name: 'AI & Health', icon: Heart, color: 'from-zion-pink to-zion-purple' },
    { id: 'ai-energy', name: 'AI & Energy', icon: Zap, color: 'from-zion-green to-zion-blue' },
    { id: 'ai-ecommerce', name: 'AI & E-commerce', icon: ShoppingCart, color: 'from-zion-blue to-zion-orange' },
    { id: 'ai-content', name: 'AI & Content', icon: PenTool, color: 'from-zion-orange to-zion-red' }
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
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
                           service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      case 'popular':
        return b.price - a.price; // Using price as popularity proxy
      default:
        return 0;
    }
  });

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Micro SAAS Services 2025 - Zion Tech Group"
        description="Discover cutting-edge AI-powered micro SAAS services and solutions. From business intelligence to cybersecurity, healthcare to finance - transform your business with our innovative technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Micro SAAS Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                {' '}2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI-powered micro SAAS solutions. 
              From business intelligence to cybersecurity, healthcare to finance - we deliver 
              innovative technology that drives growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
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
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-700 text-zion-cyan text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Service Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-zion-cyan">
                      {service.innovationLevel}
                    </div>
                  </div>

                  {/* Service Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Our team of AI experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how our innovative 
              micro SAAS services can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Service Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price:</span>
                        <span className="text-white font-semibold">${selectedService.price.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white">{selectedService.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Delivery:</span>
                        <span className="text-white">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-zion-cyan font-semibold">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Use Cases</h3>
                    <ul className="space-y-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <ArrowRight className="w-4 h-4 text-zion-cyan mr-2 mt-1 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                        <a href={`tel:${selectedService.contactInfo.phone}`} className="hover:text-white transition-colors">
                          {selectedService.contactInfo.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                        <a href={`mailto:${selectedService.contactInfo.email}`} className="hover:text-white transition-colors">
                          {selectedService.contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Globe className="w-4 h-4 mr-2 text-zion-cyan" />
                        <a href={selectedService.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          {selectedService.contactInfo.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Request Quote
                </Link>
                <a
                  href={`tel:${selectedService.contactInfo.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}