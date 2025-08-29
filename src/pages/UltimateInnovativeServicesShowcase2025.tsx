import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Globe,
  Database,
  Smartphone,
  Rocket,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Users,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Clock,
  Shield as ShieldIcon
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2025, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/ultimateInnovativeServices2025';

export default function UltimateInnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('innovation');

  const filteredServices = useMemo(() => {
    let filtered = ULTIMATE_INNOVATIVE_SERVICES_2025;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(service => service.subcategory === selectedSubcategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'roi':
        filtered = [...filtered].sort((a, b) => {
          const aRoi = parseInt(a.roi.split('%')[0]);
          const bRoi = parseInt(b.roi.split('%')[0]);
          return bRoi - aRoi;
        });
        break;
      case 'delivery':
        filtered = [...filtered].sort((a, b) => {
          const aWeeks = parseInt(a.estimatedDelivery.split('-')[0]);
          const bWeeks = parseInt(b.estimatedDelivery.split('-')[0]);
          return aWeeks - bWeeks;
        });
        break;
      default: // innovation
        filtered = [...filtered].sort((a, b) => {
          const innovationOrder = ['Revolutionary', 'Breakthrough', 'Advanced'];
          const aIndex = innovationOrder.indexOf(a.innovationLevel.split(' - ')[0]);
          const bIndex = innovationOrder.indexOf(b.innovationLevel.split(' - ')[0]);
          return aIndex - bIndex;
        });
    }

    return filtered;
  }, [selectedCategory, selectedSubcategory, searchTerm, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return <Brain className="w-6 h-6" />;
      case 'Quantum Computing': return <Cpu className="w-6 h-6" />;
      case 'Blockchain & Web3': return <Globe className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'IoT & Edge Computing': return <Network className="w-6 h-6" />;
      case 'Metaverse & AR/VR': return <Smartphone className="w-6 h-6" />;
      case 'Robotics & Automation': return <Rocket className="w-6 h-6" />;
      case 'Biotechnology': return <Database className="w-6 h-6" />;
      case 'Space Technology': return <Zap className="w-6 h-6" />;
      case 'Green Technology': return <BarChart3 className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
    }
  };

  const getInnovationBadge = (level: string) => {
    const type = level.split(' - ')[0];
    switch (type) {
      case 'Revolutionary':
        return <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">🚀 Revolutionary</span>;
      case 'Breakthrough':
        return <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">💡 Breakthrough</span>;
      case 'Advanced':
        return <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">⚡ Advanced</span>;
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">🔬 Innovative</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Ultimate Innovative Services 2025
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover the future of technology with our revolutionary micro SAAS services.
              From AI and quantum computing to space technology and biotechnology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>10 Revolutionary Services</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>300-1000% ROI</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>Global Innovation Leader</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubcategory('all');
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Subcategories</option>
                {selectedCategory !== 'all' && SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof SERVICE_SUBCATEGORIES]?.map(subcategory => (
                  <option key={subcategory} value={subcategory}>{subcategory}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="roi">Sort by ROI</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="delivery">Fastest Delivery</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500">{service.category}</p>
                    </div>
                  </div>
                  {getInnovationBadge(service.innovationLevel)}
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {service.description}
                </p>

                {/* Price and ROI */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    ${service.price.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500">/month</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">ROI</div>
                    <div className="text-lg font-semibold text-green-600">{service.roi}</div>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technical Specs</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>
                        <span className="font-medium">Uptime:</span> {service.technicalSpecs.uptime}
                      </div>
                      <div>
                        <span className="font-medium">APIs:</span> {service.technicalSpecs.apiEndpoints}
                      </div>
                    </div>
                  </div>
                )}

                {/* Delivery and Support */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{service.supportLevel.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Sales
                  </button>
                  <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      <span>{service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>{service.contactInfo.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary services.
              Get in touch to discuss how we can help you achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${ULTIMATE_INNOVATIVE_SERVICES_2025[0].contactInfo.phone}`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`mailto:${ULTIMATE_INNOVATIVE_SERVICES_2025[0].contactInfo.email}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p className="text-lg font-medium mb-2">Zion Tech Group</p>
              <p className="text-sm">364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="text-sm">https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}