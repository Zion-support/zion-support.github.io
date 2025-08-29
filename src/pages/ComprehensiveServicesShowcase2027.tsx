import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Atom,
  // Blockchain icon removed - not available in lucide-react
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  Eye,
  Download,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  PieChart,
  Activity,
  Gauge,
  ShieldCheck,
  X
} from 'lucide-react';

// Import our existing service data
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from '../data/ultimateInnovativeServices2026';
import { comprehensiveServices } from '../data/comprehensiveServices';

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    billingCycle: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: string;
  marketPrice: string;
  estimatedDelivery: string;
  website?: string;
  contactInfo?: {
    phone: string;
    email: string;
    address: string;
  };
}

const ComprehensiveServicesShowcase2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'newest'>('name');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Combine services from multiple sources
  const allServices: Service[] = useMemo(() => {
    const services: Service[] = [];
    
    // Add services from ULTIMATE_INNOVATIVE_SERVICES_2026
    ULTIMATE_INNOVATIVE_SERVICES_2026.forEach(service => {
      services.push({
        id: service.id,
        name: service.name,
        category: service.category,
        description: service.description,
        features: service.features,
        benefits: service.benefits,
        pricing: {
          starter: service.pricing.starter,
          professional: service.pricing.professional,
          enterprise: service.pricing.enterprise,
          currency: service.pricing.currency,
          billingCycle: service.pricing.billingCycle
        },
        rating: service.rating,
        reviewCount: service.reviewCount,
        launchDate: service.launchDate,
        status: service.status,
        marketPrice: service.marketPrice,
        estimatedDelivery: service.estimatedDelivery,
        website: service.website,
        contactInfo: service.contactInfo
      });
    });

    // Add services from comprehensiveServices
    comprehensiveServices.forEach(service => {
      services.push({
        id: service.id,
        name: service.name,
        category: service.category,
        description: service.description,
        features: service.features,
        benefits: service.benefits,
        pricing: {
          starter: service.pricing.starter,
          professional: service.pricing.professional,
          enterprise: service.pricing.enterprise,
          currency: service.pricing.currency,
          billingCycle: service.pricing.billingCycle
        },
        rating: service.rating,
        reviewCount: service.reviewCount,
        launchDate: service.launchDate,
        status: service.status,
        marketPrice: service.marketPrice,
        estimatedDelivery: service.estimatedDelivery,
        website: service.website,
        contactInfo: service.contactInfo
      });
    });

    return services;
  }, []);

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];
    return cats.sort();
  }, [allServices]);

  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => a.pricing.starter - b.pricing.starter);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Artificial Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Atom className="w-6 h-6" />;
      case 'Neuromorphic Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Synthetic Biology':
        return <Heart className="w-6 h-6" />;
      case 'Blockchain':
        return <Blockchain className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Internet of Things':
        return <Network className="w-6 h-6" />;
      case 'Metaverse':
        return <Globe className="w-6 h-6" />;
      case 'Robotics':
        return <Factory className="w-6 h-6" />;
      case 'Space Technology':
        return <Satellite className="w-6 h-6" />;
      default:
        return <Lightbulb className="w-6 h-6" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live':
        return 'bg-green-100 text-green-800';
      case 'beta':
        return 'bg-blue-100 text-blue-800';
      case 'coming soon':
        return 'bg-yellow-100 text-yellow-800';
      case 'preview':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Comprehensive Services 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge micro SAAS, IT services, and AI solutions. 
              From quantum computing to autonomous business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                    <span className="text-xs text-gray-400">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">Starting from</span>
                    <span className="text-lg font-bold text-green-400">
                      {service.pricing.currency}{service.pricing.starter.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-400">/{service.pricing.billingCycle}</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Market price: {service.marketPrice}
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started
                  </button>
                  <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {getCategoryIcon(selectedService.category)}
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedService.status)}`}>
                        {selectedService.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                    <p className="text-gray-300 mb-6">{selectedService.description}</p>

                    <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing Plans</h3>
                    <div className="space-y-4 mb-6">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-white">Starter</span>
                          <span className="text-2xl font-bold text-green-400">
                            {selectedService.pricing.currency}{selectedService.pricing.starter.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-white">Professional</span>
                          <span className="text-2xl font-bold text-blue-400">
                            {selectedService.pricing.currency}{selectedService.pricing.professional.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-white">Enterprise</span>
                          <span className="text-2xl font-bold text-purple-400">
                            {selectedService.pricing.currency}{selectedService.pricing.enterprise.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-6">
                      <h4 className="text-white font-semibold mb-2">Market Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-200">Market Price:</span>
                          <span className="text-white">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-200">Launch Date:</span>
                          <span className="text-white">{selectedService.launchDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-200">Delivery:</span>
                          <span className="text-white">{selectedService.estimatedDelivery}</span>
                        </div>
                      </div>
                    </div>

                    {selectedService.contactInfo && (
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3">Contact Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Phone className="w-4 h-4" />
                            {selectedService.contactInfo.phone}
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Mail className="w-4 h-4" />
                            {selectedService.contactInfo.email}
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-4 h-4" />
                            {selectedService.contactInfo.address}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/20">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started Now
                  </button>
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
                    Schedule Demo
                  </button>
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
                    Download Brochure
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about our comprehensive services and how they can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              Email kleber@ziontechgroup.com
            </motion.button>
          </div>
          <div className="mt-6 text-gray-400">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Visit us at: <a href="https://ziontechgroup.com" className="text-purple-400 hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2027;