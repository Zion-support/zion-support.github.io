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
  ExternalLink,
  Award,
  Clock,
  Users as UsersIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Check,
  X,
  Info
} from 'lucide-react';
import { allPricingData2032 } from '../data/comprehensivePricingGuide2032';

export default function ComprehensivePricingGuide2032() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [
    ...allPricingData2032.microSaas.map(service => ({
      ...service,
      type: 'Micro SaaS',
      icon: ShoppingCart,
      color: 'from-blue-600 to-cyan-600'
    })),
    ...allPricingData2032.itServices.map(service => ({
      ...service,
      type: 'IT Services',
      icon: Server,
      color: 'from-green-600 to-emerald-600'
    })),
    ...allPricingData2032.aiServices.map(service => ({
      ...service,
      type: 'AI Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Settings, count: allServices.length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: ShoppingCart, count: allPricingData2032.microSaas.length },
    { id: 'IT Services', name: 'IT Services', icon: Server, count: allPricingData2032.itServices.length },
    { id: 'AI Services', name: 'AI Services', icon: Brain, count: allPricingData2032.aiServices.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    return matchesCategory;
  });

  const openServiceModal = (service: any) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-futuristic pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-medium rounded-full">
                <DollarSign className="h-4 w-4 mr-2" />
                Transparent Pricing
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Comprehensive
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pricing Guide 2032
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Transparent pricing for all our innovative services. Compare plans, understand costs, 
              and choose the perfect solution for your business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Custom Quote
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <Mail className="h-5 w-5 mr-2" />
                Request Pricing
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Competitive Pricing Analysis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our innovative services compare to market leaders in terms of pricing and value.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Service</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-white">Zion Pricing</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-white">Market Average</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-white">Savings</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Value Proposition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {allPricingData2032.comparison.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="hover:bg-gray-700/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-white font-medium">{item.serviceName}</td>
                        <td className="px-6 py-4 text-center text-sm text-blue-400 font-semibold">{item.zionPricing}</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">{item.marketAverage}</td>
                        <td className="px-6 py-4 text-center text-sm text-green-400 font-semibold">{item.savings}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">{item.valueProposition}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Pricing Details</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for all our innovative services with multiple tiers to fit your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.serviceId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                    <Star className="h-3 w-3 mr-1" />
                    New 2032
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.serviceName}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>

                <div className="mb-6">
                  <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded-full">
                    {service.type}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  {service.pricingTiers.map((tier, tierIndex) => (
                    <div
                      key={tierIndex}
                      className={`p-4 rounded-lg border ${
                        tier.popular
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-gray-600 bg-gray-700/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white">{tier.name}</h4>
                        {tier.popular && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <span className="text-2xl font-bold text-blue-400">
                          ${tier.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 ml-2">/{tier.billingCycle}</span>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-300 mb-2">Best for: {tier.bestFor}</p>
                      </div>

                      <div className="space-y-2">
                        {tier.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {tier.features.length > 4 && (
                          <div className="text-sm text-gray-500">
                            +{tier.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openServiceModal(service)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Details
                  </button>
                  <a
                    href={`tel:+13024640950`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact our team to discuss your specific needs and get a personalized quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-blue-500/20 mb-4">
                  <Phone className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-4">
                  <Mail className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-500">Response within 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-purple-500/20 mb-4">
                  <MapPin className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400 mb-2">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-500">Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Visit Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${selectedService.color}`}>
                    <selectedService.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.serviceName}</h2>
                    <p className="text-gray-400">{selectedService.type}</p>
                  </div>
                </div>
                <button
                  onClick={closeServiceModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Pricing Tiers */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-white mb-6">Pricing Tiers</h3>
                  <div className="space-y-6">
                    {selectedService.pricingTiers.map((tier, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-lg border ${
                          tier.popular
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-gray-600 bg-gray-700/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-semibold text-white">{tier.name}</h4>
                          {tier.popular && (
                            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-full">
                              <Star className="h-4 w-4 mr-1" />
                              Most Popular
                            </span>
                          )}
                        </div>

                        <div className="mb-6">
                          <span className="text-3xl font-bold text-blue-400">
                            ${tier.price.toLocaleString()}
                          </span>
                          <span className="text-gray-400 ml-2">/{tier.billingCycle}</span>
                        </div>

                        <div className="mb-6">
                          <p className="text-gray-300 mb-4">Best for: {tier.bestFor}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-sm font-semibold text-white mb-3 flex items-center">
                              <Check className="h-4 w-4 text-green-400 mr-2" />
                              Features
                            </h5>
                            <ul className="space-y-2">
                              {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-sm text-gray-300">
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold text-white mb-3 flex items-center">
                              <X className="h-4 w-4 text-red-400 mr-2" />
                              Limitations
                            </h5>
                            <ul className="space-y-2">
                              {tier.limitations.map((limitation, limitationIndex) => (
                                <li key={limitationIndex} className="text-sm text-gray-300">
                                  {limitation}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-6">
                  <div className="bg-gray-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Service Details</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-white font-semibold">{selectedService.marketPrice}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-white font-semibold">{selectedService.roi}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup Cost:</span>
                        <span className="text-white font-semibold">
                          ${selectedService.setupCost.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Free Trial:</span>
                        <span className="text-white font-semibold">
                          {selectedService.freeTrial ? 'Yes' : 'No'}
                        </span>
                      </div>
                      
                      {selectedService.freeTrial && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Trial Period:</span>
                          <span className="text-white font-semibold">{selectedService.trialPeriod}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Money Back:</span>
                        <span className="text-white font-semibold">
                          {selectedService.moneyBackGuarantee ? 'Yes' : 'No'}
                        </span>
                      </div>
                      
                      {selectedService.moneyBackGuarantee && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Guarantee Period:</span>
                          <span className="text-white font-semibold">{selectedService.guaranteePeriod}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Competitors</h3>
                    <div className="space-y-2">
                      {selectedService.competitors.map((competitor, index) => (
                        <div key={index} className="text-sm text-gray-300">
                          • {competitor}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-300">
                        <Phone className="h-4 w-4 mr-2 text-blue-400" />
                        <a href="tel:+13024640950" className="hover:text-white">
                          +1 302 464 0950
                        </a>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-300">
                        <Mail className="h-4 w-4 mr-2 text-green-400" />
                        <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">
                          kleber@ziontechgroup.com
                        </a>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-300">
                        <Globe className="h-4 w-4 mr-2 text-purple-400" />
                        <a 
                          href="https://ziontechgroup.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-white"
                        >
                          ziontechgroup.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Custom Quote
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Request Information
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}