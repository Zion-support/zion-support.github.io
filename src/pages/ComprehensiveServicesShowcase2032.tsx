import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Search,
  Filter,
  Target,
  Palette,
  Truck,
  Play,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2032 } from '../data/innovativeMicroSaasServices2032';
import { INNOVATIVE_IT_SERVICES_2032 } from '../data/innovativeITServices2032';
import { COMPREHENSIVE_PRICING_GUIDE_2032, CONTACT_INFORMATION, PRICING_BENEFITS, SERVICE_GUARANTEES } from '../data/comprehensivePricingGuide2032';

export default function ComprehensiveServicesShowcase2032() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2032,
    ...INNOVATIVE_IT_SERVICES_2032
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'Healthcare Technology', name: 'Healthcare Technology', icon: Heart },
    { id: 'Supply Chain', name: 'Supply Chain', icon: Truck },
    { id: 'Financial Technology', name: 'Financial Technology', icon: DollarSign },
    { id: 'Customer Experience', name: 'Customer Experience', icon: MessageCircle },
    { id: 'Infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Atom }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Sparkles;
  };

  const openServiceDetails = (service: any) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-slate to-zion-cyan">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-zion-slate-light">
              Comprehensive Services Showcase 2032
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge AI, IT, and micro SAAS solutions designed to transform your business 
              and drive innovation in the digital age.
            </p>
            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-zion-slate-light">{CONTACT_INFORMATION.phone}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-zion-slate-light">{CONTACT_INFORMATION.email}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-zion-slate-light text-sm">{CONTACT_INFORMATION.address}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search services, features, or use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white border-zion-cyan'
                      : 'bg-white/10 text-zion-slate-light border-white/20 hover:bg-white/20 hover:border-zion-cyan'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-zion-cyan transition-all duration-300 cursor-pointer group"
                onClick={() => openServiceDetails(service)}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                      <div className="flex items-center gap-2">
                        <CategoryIcon className="w-4 h-4 text-zion-cyan" />
                        <span className="text-sm text-zion-slate-light">{service.category}</span>
                      </div>
                    </div>
                  </div>
                  {service.badge && (
                    <span className="px-2 py-1 text-xs font-medium bg-zion-cyan text-white rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Description */}
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Service Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white">{service.rating}</span>
                    <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-zion-cyan" />
                    <span className="text-sm text-white">{service.aiScore || service.techScore}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">${service.price}</span>
                    <span className="text-sm text-zion-slate-light">/month</span>
                  </div>
                  <p className="text-xs text-zion-slate-light">Market: {service.marketPrice}</p>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/10 text-zion-slate-light rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-zion-cyan/20 text-zion-cyan rounded">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group-hover:bg-zion-cyan-dark">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </div>

      {/* Pricing Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide comprehensive solutions with competitive pricing, exceptional support, and guaranteed results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <CheckCircle className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <p className="text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Service Guarantees Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Service Guarantees</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We stand behind our services with comprehensive guarantees and commitments to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_GUARANTEES.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <ShieldCheck className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <p className="text-white font-medium">{guarantee}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact us today to discuss your needs and discover how our innovative solutions can drive your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT_INFORMATION.phone}`}
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`mailto:${CONTACT_INFORMATION.email}`}
              className="bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
          
          <div className="mt-8 text-zion-slate-light">
            <p className="mb-2">{CONTACT_INFORMATION.businessHours}</p>
            <p>{CONTACT_INFORMATION.supportHours}</p>
          </div>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{selectedService.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedService.title}</h2>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-zion-cyan text-white text-sm rounded-full">
                        {selectedService.category}
                      </span>
                      {selectedService.badge && (
                        <span className="px-3 py-1 bg-zion-slate text-white text-sm rounded-full">
                          {selectedService.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeServiceDetails}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Service Description */}
              <p className="text-gray-600 text-lg mb-6">{selectedService.description}</p>

              {/* Pricing Information */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-zion-cyan">${selectedService.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Market Price: {selectedService.marketPrice}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-zion-cyan" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Use Cases</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.useCases.map((useCase: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zion-slate/20 text-zion-slate rounded-full text-sm"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Target Audience</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.targetAudience.map((audience: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-zion-cyan/10 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Started</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Contact Email:</p>
                    <p className="font-medium text-gray-900">{selectedService.contactEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone:</p>
                    <p className="font-medium text-gray-900">{CONTACT_INFORMATION.phone}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedService.link}
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Service Details
                </a>
                <a
                  href={`mailto:${selectedService.contactEmail}`}
                  className="bg-white hover:bg-gray-50 text-zion-cyan py-3 px-6 rounded-lg border border-zion-cyan transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Request Quote
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}