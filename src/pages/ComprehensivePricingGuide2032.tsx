import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Shield,
  Brain,
  Cloud,
  Heart,
  Truck,
  MessageCircle,
  Server,
  Atom,
  Zap,
  Users,
  Globe,
  Lock,
  BarChart3,
  Database,
  Network,
  Code,
  FileText,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { COMPREHENSIVE_PRICING_GUIDE_2032, CONTACT_INFORMATION, PRICING_BENEFITS, SERVICE_GUARANTEES } from '../data/comprehensivePricingGuide2032';

export default function ComprehensivePricingGuide2032() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Machine Learning Services', name: 'AI & ML Services', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'Cloud & DevOps Services', name: 'Cloud & DevOps', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { id: 'Healthcare Technology Services', name: 'Healthcare Tech', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'Supply Chain & Logistics', name: 'Supply Chain', icon: Truck, color: 'from-orange-500 to-yellow-500' },
    { id: 'Financial Technology Services', name: 'FinTech', icon: DollarSign, color: 'from-green-600 to-blue-600' },
    { id: 'Customer Experience & Marketing', name: 'CX & Marketing', icon: MessageCircle, color: 'from-purple-600 to-indigo-600' }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? COMPREHENSIVE_PRICING_GUIDE_2032 
    : COMPREHENSIVE_PRICING_GUIDE_2032.filter(cat => cat.name === selectedCategory);

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.icon : Sparkles;
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.color : 'from-gray-500 to-gray-600';
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
              Comprehensive Pricing Guide
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-zion-slate-light">
              Zion Tech Group Services 2032
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Transparent pricing for our cutting-edge AI, IT, and micro SAAS solutions. 
              Choose the perfect plan for your business needs and budget.
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

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Browse by Category</h3>
            <p className="text-zion-slate-light">Select a service category to view detailed pricing and features</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white border-transparent shadow-lg'
                      : 'bg-white/10 text-zion-slate-light border-white/20 hover:bg-white/20 hover:border-zion-cyan'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Services and Pricing */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-7xl mx-auto"
        >
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + categoryIndex * 0.2 }}
              className="mb-20"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                  {React.createElement(getCategoryIcon(category.name), { className: "w-8 h-8 text-white" })}
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.name}</h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + categoryIndex * 0.2 + serviceIndex * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-zion-cyan transition-all duration-300"
                  >
                    {/* Service Header */}
                    <div className="text-center mb-8">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-zion-slate-light mb-4">{service.description}</p>
                      
                      {service.badge && (
                        <span className="inline-block px-3 py-1 bg-zion-cyan text-white text-sm font-medium rounded-full mb-4">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Pricing Tiers */}
                    <div className="space-y-6 mb-8">
                      {service.pricing.map((tier, tierIndex) => (
                        <div
                          key={tier.name}
                          className={`relative p-6 rounded-xl border transition-all duration-300 ${
                            tier.popular
                              ? 'bg-gradient-to-r from-zion-cyan to-zion-blue border-zion-cyan shadow-lg scale-105'
                              : 'bg-white/5 border-white/20 hover:border-zion-cyan'
                          }`}
                        >
                          {tier.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-zion-cyan text-white px-4 py-1 rounded-full text-sm font-medium">
                                Most Popular
                              </span>
                            </div>
                          )}
                          
                          <div className="text-center mb-4">
                            <h4 className={`text-xl font-semibold mb-2 ${
                              tier.popular ? 'text-white' : 'text-white'
                            }`}>
                              {tier.name}
                            </h4>
                            <div className="flex items-baseline justify-center gap-1">
                              <span className={`text-3xl font-bold ${
                                tier.popular ? 'text-white' : 'text-white'
                              }`}>
                                {tier.currency}{tier.price}
                              </span>
                              <span className={`text-sm ${
                                tier.popular ? 'text-white/80' : 'text-zion-slate-light'
                              }`}>
                                /{tier.billingCycle}
                              </span>
                            </div>
                          </div>

                          {/* Features */}
                          <ul className="space-y-2">
                            {tier.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className={`w-4 h-4 ${
                                  tier.popular ? 'text-white' : 'text-zion-cyan'
                                }`} />
                                <span className={`text-sm ${
                                  tier.popular ? 'text-white/90' : 'text-zion-slate-light'
                                }`}>
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Service Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                        </div>
                        <p className="text-xs text-zion-slate-light">({service.reviewCount} reviews)</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <TrendingUp className="w-4 h-4 text-zion-cyan" />
                          <span className="text-white font-semibold">{service.score}</span>
                        </div>
                        <p className="text-xs text-zion-slate-light">Score</p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => openServiceDetails(service)}
                      className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 font-medium"
                    >
                      View Full Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pricing Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
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
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
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
          transition={{ duration: 0.8, delay: 2.0 }}
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
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <Shield className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
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
          transition={{ duration: 0.8, delay: 2.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact us today to discuss your needs, get a custom quote, or schedule a consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Business Hours & Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zion-slate-light">
              <div>
                <p className="font-medium text-white mb-1">Business Hours:</p>
                <p>{CONTACT_INFORMATION.businessHours}</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Technical Support:</p>
                <p>{CONTACT_INFORMATION.supportHours}</p>
              </div>
            </div>
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
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
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

              {/* Detailed Pricing */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedService.pricing.map((tier: any, index: number) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        tier.popular
                          ? 'bg-zion-cyan text-white border-zion-cyan'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      {tier.popular && (
                        <span className="block text-center text-xs font-medium mb-2 bg-white text-zion-cyan px-2 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                      <h4 className={`text-lg font-semibold mb-2 text-center ${
                        tier.popular ? 'text-white' : 'text-gray-900'
                      }`}>
                        {tier.name}
                      </h4>
                      <div className="text-center mb-4">
                        <span className={`text-2xl font-bold ${
                          tier.popular ? 'text-white' : 'text-zion-cyan'
                        }`}>
                          ${tier.price}
                        </span>
                        <span className={`text-sm ${
                          tier.popular ? 'text-white/80' : 'text-gray-600'
                        }`}>
                          /month
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {tier.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className={`w-4 h-4 ${
                              tier.popular ? 'text-white' : 'text-green-500'
                            }`} />
                            <span className={tier.popular ? 'text-white/90' : 'text-gray-700'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">All Features</h3>
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