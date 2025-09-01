import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {

  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  CreditCard,
  Clock,
  Headphones,
  Rocket,
  Award,
  Lock,
  Brain,
  Heart,
  Scale,
  Coins,
  Network,
  TrendingUp,
  Workflow,
  ShoppingCart,
  Atom,
  Satellite,
  Factory,
  Leaf,
  Home,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';

// Import the comprehensive pricing guide data
import { COMPREHENSIVE_PRICING_GUIDE_2034 } from '../data/comprehensivePricingGuide2034';

export default function ComprehensivePricingGuide2034() {

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {

    const iconMap: { [key: string]: any } = {

      'Legal Technology': Scale,
      'Healthcare Technology': Heart,
      'Quantum Computing': Atom,
      'Marketing Technology': TrendingUp,
      'Smart Home Technology': Home,
      'Cybersecurity': Shield,
      'Space Technology': Satellite,
      'Manufacturing Technology': Factory,
      'Sustainability Technology': Leaf,
      'Financial Technology': Coins,
      'Supply Chain Technology': Network,
      'Customer Experience': Users,
      'DevOps & Automation': Workflow,
      'E-commerce Technology': ShoppingCart,
      'Edge Computing': Brain
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {

    const colorMap: { [key: string]: string } = {

      'Legal Technology': 'from-blue-400 to-indigo-500',
      'Healthcare Technology': 'from-green-400 to-emerald-500',
      'Quantum Computing': 'from-indigo-400 to-purple-500',
      'Marketing Technology': 'from-red-400 to-pink-500',
      'Smart Home Technology': 'from-yellow-400 to-green-500',
      'Cybersecurity': 'from-red-400 to-orange-500',
      'Space Technology': 'from-slate-400 to-gray-500',
      'Manufacturing Technology': 'from-blue-400 to-cyan-500',
      'Sustainability Technology': 'from-green-400 to-teal-500',
      'Financial Technology': 'from-yellow-400 to-orange-500',
      'Supply Chain Technology': 'from-purple-400 to-pink-500',
      'Customer Experience': 'from-cyan-400 to-blue-500',
      'DevOps & Automation': 'from-gray-400 to-slate-500',
      'E-commerce Technology': 'from-orange-400 to-red-500',
      'Edge Computing': 'from-purple-400 to-indigo-500'
    };
    return colorMap[category] || 'from-gray-400 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Comprehensive Pricing Guide 2034 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive pricing guide for 2034. Discover competitive pricing for AI, IT, and micro-SaaS services with detailed features and ROI analysis." />
        <meta name="keywords" content="pricing guide, AI services pricing, IT solutions pricing, micro-SaaS pricing, 2034 pricing, competitive pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-guide-2034" />
      </Helmet>

      {/* Header Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                2034
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover competitive pricing for our innovative AI, IT, and micro-SaaS services. Each service is designed to deliver exceptional ROI and transform your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Flexible Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Services & Pricing
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COMPREHENSIVE_PRICING_GUIDE_2034.map((service, index) => {

              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Tiers Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Pricing Tiers:</h4>
                    <div className="space-y-2">
                      {service.pricingTiers.map((tier, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                          <div>
                            <span className="text-white font-semibold">{tier.name}</span>
                            <span className="text-gray-400 text-sm ml-2">({tier.supportLevel})</span>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-bold">
                              {tier.currency}{tier.price}
                              <span className="text-gray-400 text-sm">/{tier.period}</span>
                            </div>
                            <div className="text-cyan-400 text-xs">ROI: {tier.roi}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    View Detailed Pricing
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {COMPREHENSIVE_PRICING_GUIDE_2034.find(s => s.id === selectedService)?.title}
                </h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {(() => {

                const service = COMPREHENSIVE_PRICING_GUIDE_2034.find(s => s.id === selectedService);
                if (!service) return null;

                return (
                  <div className="space-y-8">
                    {/* Service Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Service Overview</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Target Audience</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.targetAudience.map((audience, idx) => (
                                <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
                                  {audience}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                            <div className="space-y-1">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Market Positioning</h3>
                        <p className="text-gray-300 mb-4">{service.marketPositioning}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Competitive Advantages</h4>
                            <div className="space-y-1">
                              {service.competitiveAdvantages.map((advantage, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                  <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <span>{advantage}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits</h4>
                            <div className="space-y-1">
                              {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                  <Star className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Pricing Tiers */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Pricing Tiers</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {service.pricingTiers.map((tier, idx) => (
                          <div
                            key={idx}
                            className={`relative p-6 rounded-2xl border transition-all duration-200 ${

                              tier.popular
                                ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                                : 'border-slate-700 bg-slate-800/50'
                            }`}
                          >
                            {tier.popular && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                  Most Popular
                                </span>
                              </div>
                            )}

                            <div className="text-center mb-6">
                              <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                              <div className="mb-2">
                                <span className="text-3xl font-bold text-white">
                                  {tier.currency}{tier.price}
                                </span>
                                <span className="text-gray-400">/{tier.period}</span>
                              </div>
                              {tier.savings && (
                                <span className="text-cyan-400 text-sm font-semibold">{tier.savings}</span>
                              )}
                              <p className="text-gray-300 text-sm mt-2">{tier.description}</p>
                            </div>

                            <div className="space-y-3 mb-6">
                              {tier.features.map((feature, featureIdx) => (
                                <div key={featureIdx} className="flex items-center gap-2 text-sm text-gray-300">
                                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-3 mb-6">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">ROI:</span>
                                <span className="text-green-400 font-semibold">{tier.roi}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">Delivery:</span>
                                <span className="text-blue-400">{tier.estimatedDelivery}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">Support:</span>
                                <span className="text-cyan-400 capitalize">{tier.supportLevel}</span>
                              </div>
                            </div>

                            <button
                              onClick={() => setSelectedTier(tier.name)}
                              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${

                                tier.popular
                                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                                  : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                              }`}
                            >
                              {tier.cta}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonials and Case Studies */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Customer Testimonials</h3>
                        <div className="space-y-4">
                          {service.testimonials.map((testimonial, idx) => (
                            <div key={idx} className="bg-slate-800/50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <Star className="w-4 h-4 text-yellow-400" />
                                <Star className="w-4 h-4 text-yellow-400" />
                                <Star className="w-4 h-4 text-yellow-400" />
                                <Star className="w-4 h-4 text-yellow-400" />
                              </div>
                              <p className="text-gray-300 text-sm italic">"{testimonial}"</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Case Studies</h3>
                        <div className="space-y-4">
                          {service.caseStudies.map((caseStudy, idx) => (
                            <div key={idx} className="bg-slate-800/50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <TrendingUpIcon className="w-4 h-4 text-green-400" />
                                <span className="text-sm font-semibold text-green-400">Success Story</span>
                              </div>
                              <p className="text-gray-300 text-sm">{caseStudy}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-slate-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Get Started Today</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
                        <div>
                          <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400">Phone</p>
                          <p className="text-cyan-400 font-semibold">{service.contactInfo.phone}</p>
                        </div>
                        <div>
                          <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="text-cyan-400 font-semibold">{service.contactInfo.email}</p>
                        </div>
                        <div>
                          <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400">Address</p>
                          <p className="text-cyan-400 font-semibold text-xs">{service.contactInfo.address}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <a
                          href={service.contactInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
                        >
                          Visit Service Page
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your specific requirements and get a customized quote for any of our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                Contact Us Today
              </a>
              <a
                href="/innovative-services-showcase-2034"
                className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200"
              >
                <Globe className="w-5 h-5" />
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}