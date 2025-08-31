import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  Quantum,
  Space,
  Climate,
  Business,
  Finance,
  Research,
  Infrastructure,
  Security,
  DevOps,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { comprehensivePricingGuide2033 } from '../data/comprehensivePricingGuide2033';

export default function ComprehensivePricingGuide2033() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: comprehensivePricingGuide2033.aiServices.length + comprehensivePricingGuide2033.microSaasServices.length + comprehensivePricingGuide2033.itInfrastructureServices.length },
    { id: 'ai', name: 'AI Services', icon: Brain, count: comprehensivePricingGuide2033.aiServices.length },
    { id: 'microsaas', name: 'Micro SAAS', icon: Rocket, count: comprehensivePricingGuide2033.microSaasServices.length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Server, count: comprehensivePricingGuide2033.itInfrastructureServices.length }
  ];

  const filteredServices = () => {
    let services: any[] = [];
    
    if (activeCategory === 'all' || activeCategory === 'ai') {
      services.push(...comprehensivePricingGuide2033.aiServices);
    }
    if (activeCategory === 'all' || activeCategory === 'microsaas') {
      services.push(...comprehensivePricingGuide2033.microSaasServices);
    }
    if (activeCategory === 'all' || activeCategory === 'infrastructure') {
      services.push(...comprehensivePricingGuide2033.itInfrastructureServices);
    }

    return services;
  };

  const toggleServiceExpansion = (serviceId: number) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const getServiceIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Business') || category.includes('Financial') || category.includes('Research')) return Rocket;
    if (category.includes('IT') || category.includes('Cybersecurity') || category.includes('DevOps')) return Server;
    return Globe;
  };

  const getServiceColor = (category: string) => {
    if (category.includes('AI')) return 'from-cyan-400 to-blue-500';
    if (category.includes('Business') || category.includes('Financial') || category.includes('Research')) return 'from-purple-400 to-pink-500';
    if (category.includes('IT') || category.includes('Cybersecurity') || category.includes('DevOps')) return 'from-green-400 to-emerald-500';
    return 'from-gray-400 to-slate-500';
  };

  const formatPrice = (price: number, billingCycle: string) => {
    if (billingCycle === 'hour') {
      return `$${price.toLocaleString()}/hour`;
    } else if (billingCycle === 'month') {
      return `$${price.toLocaleString()}/month`;
    } else if (billingCycle === 'project') {
      return `$${price.toLocaleString()}/project`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Pricing Guide 2033 - Zion Tech Group</title>
        <meta name="description" content="Complete pricing guide for Zion Tech Group's revolutionary AI, Micro SAAS, and IT Infrastructure services for 2025-2033. Detailed pricing, ROI analysis, and market comparisons." />
        <meta name="keywords" content="pricing guide, AI services pricing, micro SAAS pricing, IT infrastructure pricing, ROI analysis, market comparison, Zion Tech Group" />
        <meta property="og:title" content="Comprehensive Pricing Guide 2033 - Zion Tech Group" />
        <meta property="og:description" content="Complete pricing guide for Zion Tech Group's revolutionary services for 2025-2033." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-pricing-guide-2033" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Complete Pricing Guide 2025-2033
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Comprehensive
                </span>
                <br />
                <span className="text-white">Pricing Guide</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transparent pricing for Zion Tech Group's revolutionary AI, Micro SAAS, and IT Infrastructure services. 
                Real market prices, proven ROI, and detailed comparisons to help you make informed decisions.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-cyan-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Proven ROI</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Market Comparisons</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="py-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-cyan-400">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Visit Website
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30'
                    }`}
                  >
                    <category.icon className="w-5 h-5 mr-2" />
                    {category.name}
                    <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Services Pricing */}
            <div className="space-y-12">
              {filteredServices().map((service, index) => {
                const IconComponent = getServiceIcon(service.category);
                const colorClass = getServiceColor(service.category);
                const isExpanded = expandedServices.has(service.id);
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${colorClass}`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-400 mb-2">{service.category}</p>
                          <p className="text-gray-300 max-w-3xl">{service.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </button>
                    </div>

                    {/* Pricing Tiers */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {service.pricingTiers.map((tier, tierIndex) => (
                        <div
                          key={tierIndex}
                          className={`p-6 rounded-lg border transition-all duration-300 ${
                            tierIndex === 1
                              ? 'border-cyan-500/50 bg-cyan-500/5 scale-105'
                              : 'border-gray-600/30 bg-gray-800/20'
                          }`}
                        >
                          <div className="text-center mb-4">
                            <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                            <div className="text-3xl font-bold text-cyan-400 mb-2">
                              {formatPrice(tier.price, tier.billingCycle)}
                            </div>
                            {tierIndex === 1 && (
                              <div className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                                Most Popular
                              </div>
                            )}
                          </div>

                          {/* Features */}
                          <div className="space-y-3 mb-6">
                            {tier.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* ROI & Setup */}
                          <div className="space-y-2 mb-4">
                            <div className="text-sm">
                              <span className="text-gray-400">ROI: </span>
                              <span className="text-green-400 font-medium">{tier.roi}</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-400">Setup: </span>
                              <span className="text-cyan-400">{tier.setupTime}</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-400">Support: </span>
                              <span className="text-purple-400">{tier.support}</span>
                            </div>
                          </div>

                          {/* Best For */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-gray-300 mb-2">Best For:</h5>
                            <div className="flex flex-wrap gap-1">
                              {tier.bestFor.map((audience, audienceIndex) => (
                                <span
                                  key={audienceIndex}
                                  className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                                >
                                  {audience}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <a
                            href="#contact"
                            className={`w-full text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                              tierIndex === 1
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                            }`}
                          >
                            Get Started
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-700/50 pt-6"
                      >
                        {/* Market Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-gray-800/20 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <BarChart3 className="w-5 h-5 mr-2 text-cyan-400" />
                              Market Comparison
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Market Average:</span>
                                <span className="text-white font-medium">{service.marketComparison.average}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Our Advantage:</span>
                                <span className="text-green-400 font-medium">{service.marketComparison.ourAdvantage}</span>
                              </div>
                              <div>
                                <span className="text-gray-400 text-sm">Competitors:</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {service.marketComparison.competitors.map((competitor, compIndex) => (
                                    <span
                                      key={compIndex}
                                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                                    >
                                      {competitor}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* ROI Analysis */}
                          <div className="bg-gray-800/20 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                              ROI Analysis
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Short Term:</span>
                                <span className="text-green-400 font-medium">{service.roiAnalysis.shortTerm}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Long Term:</span>
                                <span className="text-green-400 font-medium">{service.roiAnalysis.longTerm}</span>
                              </div>
                              <div>
                                <span className="text-gray-400 text-sm">Case Studies:</span>
                                <div className="space-y-1 mt-1">
                                  {service.roiAnalysis.caseStudies.map((caseStudy, caseIndex) => (
                                    <div key={caseIndex} className="text-xs text-gray-300">
                                      • {caseStudy}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Limitations */}
                        <div className="bg-gray-800/20 p-6 rounded-lg">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Eye className="w-5 h-5 mr-2 text-yellow-400" />
                            Important Considerations
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {service.pricingTiers.map((tier, tierIndex) => (
                              <div key={tierIndex}>
                                <h5 className="text-sm font-medium text-gray-300 mb-2">{tier.name} Limitations:</h5>
                                <ul className="space-y-1">
                                  {tier.limitations.map((limitation, limitIndex) => (
                                    <li key={limitIndex} className="text-xs text-gray-400 flex items-start">
                                      <span className="text-red-400 mr-1">•</span>
                                      {limitation}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Our Pricing is Better */}
        <section className="py-20 px-4 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Our <span className="text-cyan-400">Pricing</span> is Better
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don't just offer competitive prices - we provide revolutionary value that 
                transforms your business and delivers measurable returns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  description: "No hidden fees, no surprises. What you see is what you pay, with clear ROI expectations.",
                  color: "from-green-400 to-emerald-500"
                },
                {
                  icon: TrendingUp,
                  title: "Proven ROI",
                  description: "Our clients see 200-800% ROI within 6-18 months. Real results, not promises.",
                  color: "from-blue-400 to-indigo-500"
                },
                {
                  icon: Scale,
                  title: "Market Competitive",
                  description: "30-50% cost reduction compared to market leaders while delivering superior performance.",
                  color: "from-purple-400 to-pink-500"
                },
                {
                  icon: Clock,
                  title: "Fast Setup",
                  description: "From 30 minutes to 4 weeks setup time, depending on your needs and complexity.",
                  color: "from-orange-400 to-red-500"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level security with SOC 2, ISO 27001, and FedRAMP compliance included.",
                  color: "from-cyan-400 to-blue-500"
                },
                {
                  icon: Users,
                  title: "Dedicated Support",
                  description: "From email support to dedicated teams, we scale support with your business needs.",
                  color: "from-indigo-400 to-purple-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to discuss your specific needs, get a custom quote, 
              and discover how our revolutionary services can transform your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Response within 2 hours</p>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-cyan-400 font-medium">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm">Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Visit Our Website
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}