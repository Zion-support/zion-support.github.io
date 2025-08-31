import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  Atom,
  Car,
  Building2,
  PenTool,
  MessageSquare as MessageSquareIcon,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  ExternalLink,
  Calendar,
  DollarSign,
  Target,
  Lightbulb,
  Heart,
  Truck,
  Coins
} from 'lucide-react';
import { newMicroSaasServices, serviceCategories, getServicesByCategory, MicroSaasService } from '../data/newMicroSaasServices';

const EnhancedServices: React.FC = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  const filteredServices = getServicesByCategory(activeCategory)
    .filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return parseFloat(a.pricing.split('$')[1]) - parseFloat(b.pricing.split('$')[1]);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const ServiceCard: React.FC<{ service: MicroSaasService; index: number }> = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          <service.icon className="w-12 h-12" />
          {service.featured && (
            <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-white/90 text-sm">{service.description}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{service.pricing}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{service.marketPrice}</span>
          </div>
          <div className="space-y-2">
            {Object.entries(service.pricingDetails).map(([key, value]) => (
              <div key={key} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="capitalize">{key}:</span>
                <span className="ml-2 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {service.features.slice(0, 6).map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits</h4>
          <div className="space-y-2">
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                <Target className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Contact Information</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <a href={`tel:${service.contactInfo.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {service.contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <a href={`mailto:${service.contactInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {service.contactInfo.email}
              </a>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Globe className="w-4 h-4 mr-2" />
              <a 
                href={service.contactInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {service.contactInfo.website.replace('https://', '')}
                <ExternalLink className="w-3 h-3 ml-1 inline" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex space-x-3">
          <Link
            to={service.href}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Learn More
          </Link>
          <a
            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
            className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
          >
            Get Quote
          </a>
        </div>
      </div>
    </motion.div>
  );

  const ServiceList: React.FC<{ service: MicroSaasService; index: number }> = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
    >
      <div className="flex items-start space-x-6">
        {/* Icon */}
        <div className={`bg-gradient-to-r ${service.color} p-4 rounded-lg text-white`}>
          <service.icon className="w-8 h-8" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{service.pricing}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{service.marketPrice}</div>
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
              <div className="space-y-1">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Benefits</h4>
              <div className="space-y-1">
                {service.benefits.slice(0, 4).map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Target className="w-4 h-4 text-blue-500 mr-2" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <a href={`tel:${service.contactInfo.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {service.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <a href={`mailto:${service.contactInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {service.contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link
                to={service.href}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Learn More
              </Link>
              <a
                href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary Micro-SaaS Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Micro-SaaS Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our comprehensive range of AI-powered micro-SaaS solutions, quantum computing platforms, 
              and innovative business tools designed to transform your business and drive exponential growth.
            </p>
            
            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-4 text-white">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
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
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="all">All Categories</option>
                  {serviceCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex-shrink-0">
                <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-l-lg transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-r-lg transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => 
                viewMode === 'grid' ? (
                  <ServiceCard key={service.id} service={service} index={index} />
                ) : (
                  <ServiceList key={service.id} service={service} index={index} />
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative micro-SaaS solutions can drive exponential growth 
              and competitive advantage for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedServices;
