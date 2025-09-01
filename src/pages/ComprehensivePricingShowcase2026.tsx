import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, TrendingUp, Clock, Users, CheckCircle, Star,
  Phone, Mail, MapPin, ExternalLink, ArrowRight, Zap,
  Shield, Globe, Cpu, Brain, Atom, Rocket, Target,
  BarChart3, Settings, Award, Headphones, Code, Database
} from 'lucide-react';
import { comprehensivePricingGuide2026, pricingCategories } from '../data/comprehensivePricingGuide2026';

export default function ComprehensivePricingShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? comprehensivePricingGuide2026 
    : comprehensivePricingGuide2026.filter(s => s.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Pricing Guide 2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for cutting-edge technology solutions. Choose the perfect plan for your business needs with proven ROI and exceptional value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-400 mb-2" />
              <p className="text-white font-semibold">Phone</p>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-purple-400 mb-2" />
              <p className="text-white font-semibold">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-green-400 mb-2" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Technology Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                  : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10'
              }`}
            >
              <div className="text-center">
                <Rocket className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">All Services</p>
                <p className="text-sm opacity-75">Complete portfolio</p>
              </div>
            </button>
            {pricingCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                    : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10'
                }`}
              >
                <div className="text-center">
                  {category.name.includes('Micro SaaS') && <Settings className="w-8 h-8 mx-auto mb-2" />}
                  {category.name.includes('AI') && <Brain className="w-8 h-8 mx-auto mb-2" />}
                  {category.name.includes('Quantum') && <Atom className="w-8 h-8 mx-auto mb-2" />}
                  {category.name.includes('Emerging') && <Rocket className="w-8 h-8 mx-auto mb-2" />}
                  <p className="font-semibold">{category.name}</p>
                  <p className="text-sm opacity-75">{category.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
            >
              {/* Service Header */}
              <div className="p-8 border-b border-white/10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {service.category}
                      </span>
                      {service.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          <Star className="w-4 h-4 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-2 mx-auto">
                          <DollarSign className="w-6 h-6 text-blue-400" />
                        </div>
                        <p className="text-gray-400 text-sm">Market Size</p>
                        <p className="text-white font-bold">{service.marketSize}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-2 mx-auto">
                          <TrendingUp className="w-6 h-6 text-green-400" />
                        </div>
                        <p className="text-gray-400 text-sm">Average ROI</p>
                        <p className="text-white font-bold">{service.averageROI}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-2 mx-auto">
                          <Clock className="w-6 h-6 text-purple-400" />
                        </div>
                        <p className="text-gray-400 text-sm">Implementation</p>
                        <p className="text-white font-bold">{service.implementationTime}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-2 mx-auto">
                          <Headphones className="w-6 h-6 text-orange-400" />
                        </div>
                        <p className="text-gray-400 text-sm">Support</p>
                        <p className="text-white font-bold text-sm">{service.supportLevel}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologyStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Real World Examples */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Real World Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.realWorldExamples.map((example, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-300 text-sm">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.pricingTiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={`relative bg-white/5 rounded-xl border transition-all duration-300 hover:border-white/30 ${
                        tier.popular ? 'border-purple-500 bg-purple-500/10' : 'border-white/20'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="text-center mb-6">
                          <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                          <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                          <div className="mb-4">
                            <span className="text-3xl font-bold text-white">{tier.price}</span>
                            {tier.billing !== 'project' && (
                              <span className="text-gray-400">/month</span>
                            )}
                          </div>
                          {tier.savings && (
                            <p className="text-green-400 text-sm font-medium">{tier.savings}</p>
                          )}
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-3">What's Included:</h5>
                          <ul className="space-y-2">
                            {tier.included.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Not Included */}
                        {tier.notIncluded.length > 0 && (
                          <div className="mb-6">
                            <h5 className="text-white font-semibold mb-3">Not Included:</h5>
                            <ul className="space-y-2">
                              {tier.notIncluded.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 rounded-full border border-gray-500"></div>
                                  <span className="text-gray-400 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Additional Info */}
                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div className="text-center">
                            <p className="text-gray-400">ROI</p>
                            <p className="text-green-400 font-semibold">{tier.roi}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-gray-400">Implementation</p>
                            <p className="text-white font-semibold">{tier.implementationTime}</p>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <a
                          href={tier.href}
                          className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                            tier.popular
                              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                          }`}
                        >
                          {tier.ctaLabel}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-8 bg-white/5 border-t border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-white mb-4 mt-6">Use Cases</h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start">
                          <Target className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Target Industries</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.targetIndustries.map((industry, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">Compliance & Integrations</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Compliance:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.compliance.map((item, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800"
                            >
                              <Shield className="w-3 h-3 mr-1" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Integrations:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.integrations.map((item, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-100 text-purple-800"
                            >
                              <Globe className="w-3 h-3 mr-1" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you choose the perfect plan and implement the solution that will transform your business. Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Contact Info */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Leading provider of innovative technology solutions with transparent pricing and proven ROI.
              </p>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-green-400 mt-0.5" />
                  <div>
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Transparent pricing with no hidden fees
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Proven ROI and measurable results
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Expert consultation and support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Industry-leading technology solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}