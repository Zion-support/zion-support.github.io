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
  ChevronDown,
  ChevronUp,
  ExternalLink,
  TrendingDown,
  Award,
  Zap as ZapIcon,
  Crown,
  Check,
  X
} from 'lucide-react';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2025 } from '../data/revolutionaryMicroSaasServices2025';

export default function RevolutionaryPricingGuide2025() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedPricingModel, setSelectedPricingModel] = useState('monthly');

  const pricingModels = [
    { id: 'monthly', name: 'Monthly', discount: 0 },
    { id: 'quarterly', name: 'Quarterly', discount: 10 },
    { id: 'annually', name: 'Annually', discount: 25 }
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Rocket, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.length },
    { id: 'AI & Business Automation', name: 'AI & Business Automation', icon: Brain, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Business Automation').length },
    { id: 'AI & Quantum Computing', name: 'AI & Quantum Computing', icon: Atom, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Quantum Computing').length },
    { id: 'AI & Customer Experience', name: 'AI & Customer Experience', icon: Users, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Customer Experience').length },
    { id: 'AI & Sales Automation', name: 'AI & Sales Automation', icon: Target, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Sales Automation').length },
    { id: 'AI & Compliance', name: 'AI & Compliance', icon: Shield, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Compliance').length },
    { id: 'Cloud & FinOps', name: 'Cloud & FinOps', icon: Cloud, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Cloud & FinOps').length },
    { id: 'AI & IoT', name: 'AI & IoT', icon: Cpu, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & IoT').length },
    { id: 'AI & Human Resources', name: 'AI & Human Resources', icon: Users2, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Human Resources').length },
    { id: 'AI & Financial Services', name: 'AI & Financial Services', icon: Coins, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Financial Services').length },
    { id: 'AI & Content Creation', name: 'AI & Content Creation', icon: FileText, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Content Creation').length },
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: Wifi, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Edge Computing & IoT').length }
  ];

  const getCategoryIcon = (category: string) => {
    const categoryData = serviceCategories.find(c => c.id === category);
    return categoryData?.icon || Rocket;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Business Automation': 'from-purple-500 to-pink-500',
      'AI & Quantum Computing': 'from-indigo-500 to-purple-500',
      'AI & Customer Experience': 'from-blue-500 to-cyan-500',
      'AI & Sales Automation': 'from-green-500 to-emerald-500',
      'AI & Compliance': 'from-red-500 to-pink-500',
      'Cloud & FinOps': 'from-blue-500 to-indigo-500',
      'AI & IoT': 'from-green-500 to-blue-500',
      'AI & Human Resources': 'from-orange-500 to-red-500',
      'AI & Financial Services': 'from-yellow-500 to-orange-500',
      'AI & Content Creation': 'from-purple-500 to-blue-500',
      'Edge Computing & IoT': 'from-cyan-500 to-blue-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const calculateDiscountedPrice = (basePrice: number, discount: number) => {
    return basePrice * (1 - discount / 100);
  };

  const getPricingTier = (price: number) => {
    if (price >= 10000) return { name: 'Enterprise', icon: Crown, color: 'from-purple-500 to-pink-500' };
    if (price >= 5000) return { name: 'Professional', icon: Award, color: 'from-blue-500 to-cyan-500' };
    if (price >= 2000) return { name: 'Business', icon: Star, color: 'from-green-500 to-emerald-500' };
    return { name: 'Starter', icon: ZapIcon, color: 'from-yellow-500 to-orange-500' };
  };

  const toggleServiceDetails = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Revolutionary Pricing Guide 2025 | Zion Tech Group</title>
        <meta name="description" content="Comprehensive pricing guide for our revolutionary micro SAAS services. Compare pricing tiers, features, and ROI for AI-powered solutions." />
        <meta name="keywords" content="pricing guide, micro SAAS pricing, AI services pricing, quantum computing pricing, edge computing pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-pricing-guide-2025" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Pricing Guide
              </span>
              <span className="block text-3xl md:text-4xl text-gray-300 mt-4">2025 Edition</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our cutting-edge micro SAAS services. Compare features, 
              calculate ROI, and choose the perfect solution for your business transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">ROI Calculator</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Scale className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Feature Comparison</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-white mb-2" />
              <span className="text-white font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-white mb-2" />
              <span className="text-white font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-white mb-2" />
              <span className="text-white font-medium text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Model Selection */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Billing Cycle</h2>
            <p className="text-gray-300">Select the billing cycle that works best for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricingModels.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedPricingModel(model.id)}
                className={`p-6 rounded-xl border transition-all ${
                  selectedPricingModel === model.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent'
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                  {model.discount > 0 && (
                    <div className="bg-white/20 rounded-full px-3 py-1 text-sm mb-2">
                      Save {model.discount}%
                    </div>
                  )}
                  <p className="text-sm opacity-80">
                    {model.id === 'monthly' && 'Pay month by month'}
                    {model.id === 'quarterly' && 'Pay every 3 months'}
                    {model.id === 'annually' && 'Pay once per year'}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Service Pricing Overview</h2>
            <p className="text-xl text-gray-300">Compare our revolutionary services and find the perfect fit for your business</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.map((service) => {
              const discountedPrice = calculateDiscountedPrice(service.price, 
                pricingModels.find(m => m.id === selectedPricingModel)?.discount || 0
              );
              const pricingTier = getPricingTier(service.price);
              const IconComponent = pricingTier.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {React.createElement(getCategoryIcon(service.category), { 
                          className: "w-8 h-8 text-white" 
                        })}
                        <span className="text-white font-semibold text-sm">
                          {service.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">
                          {pricingTier.name}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2">{service.description}</p>
                  </div>

                  {/* Pricing Information */}
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-white">
                          ${discountedPrice.toLocaleString()}
                        </span>
                        <span className="text-gray-400 text-sm">/{selectedPricingModel}</span>
                      </div>
                      {selectedPricingModel !== 'monthly' && (
                        <div className="text-sm text-gray-400">
                          <span className="line-through">${service.price.toLocaleString()}</span>
                          <span className="text-green-400 ml-2">
                            Save ${(service.price - discountedPrice).toLocaleString()}
                          </span>
                        </div>
                      )}
                      <div className="text-green-400 font-semibold text-lg mt-2">{service.roi} ROI</div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mb-4">
                      <button
                        onClick={() => toggleServiceDetails(service.id)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                      >
                        {selectedService === service.id ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            Less Details
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            More Details
                          </>
                        )}
                      </button>
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Learn More
                      </a>
                    </div>

                    {/* Quick Contact */}
                    <div className="text-center">
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
                      >
                        <Phone className="w-4 h-4" />
                        Get Started
                      </a>
                    </div>

                    {/* Expanded Details */}
                    {selectedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        {/* Technical Specifications */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Technical Specs</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Technology:</span>
                              <div className="text-white">
                                {service.technicalSpecs?.technology.slice(0, 3).join(', ')}
                              </div>
                            </div>
                            <div>
                              <span className="text-gray-400">Uptime:</span>
                              <div className="text-white">{service.technicalSpecs?.uptime}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">API Endpoints:</span>
                              <div className="text-white">{service.technicalSpecs?.apiEndpoints}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Delivery:</span>
                              <div className="text-white">{service.estimatedDelivery}</div>
                            </div>
                          </div>
                        </div>

                        {/* Market Information */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Market Information</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Market Price:</span>
                              <div className="text-white">{service.marketPrice}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Market Trend:</span>
                              <div className="text-white">{service.marketTrend}</div>
                            </div>
                          </div>
                        </div>

                        {/* ROI Analysis */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">ROI Analysis</h4>
                          <div className="bg-white/5 rounded-lg p-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-400">Expected ROI:</span>
                                <div className="text-green-400 font-semibold">{service.roi}</div>
                              </div>
                              <div>
                                <span className="text-gray-400">Innovation Level:</span>
                                <div className="text-white">{service.innovationLevel}</div>
                              </div>
                            </div>
                            <div className="mt-3 text-xs text-gray-400">
                              *ROI based on industry benchmarks and client success stories
                            </div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Get Started Today</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Phone className="w-4 h-4 text-cyan-400" />
                              <span>{service.contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Mail className="w-4 h-4 text-cyan-400" />
                              <span>{service.contactInfo.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <MapPin className="w-4 h-4 text-cyan-400" />
                              <span>{service.contactInfo.address}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Tiers Comparison</h2>
            <p className="text-xl text-gray-300">Understand our pricing structure and choose the right tier for your business</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="grid grid-cols-5 gap-0">
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-white font-bold text-lg">Features</h3>
                </div>
                <div className="p-6 border-b border-white/10 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                  <div className="text-center">
                    <ZapIcon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <h3 className="text-white font-bold text-lg">Starter</h3>
                    <p className="text-gray-400 text-sm">$2,000 - $4,999</p>
                  </div>
                </div>
                <div className="p-6 border-b border-white/10 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <div className="text-center">
                    <Star className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h3 className="text-white font-bold text-lg">Business</h3>
                    <p className="text-gray-400 text-sm">$5,000 - $9,999</p>
                  </div>
                </div>
                <div className="p-6 border-b border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h3 className="text-white font-bold text-lg">Professional</h3>
                    <p className="text-gray-400 text-sm">$10,000 - $19,999</p>
                  </div>
                </div>
                <div className="p-6 border-b border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <div className="text-center">
                    <Crown className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <h3 className="text-white font-bold text-lg">Enterprise</h3>
                    <p className="text-gray-400 text-sm">$20,000+</p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-4 border-b border-white/10 text-white font-medium">Core Features</div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>

                <div className="p-4 border-b border-white/10 text-white font-medium">Advanced AI</div>
                <div className="p-4 border-b border-white/10 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>

                <div className="p-4 border-b border-white/10 text-white font-medium">Quantum Computing</div>
                <div className="p-4 border-b border-white/10 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>

                <div className="p-4 border-b border-white/10 text-white font-medium">24/7 Support</div>
                <div className="p-4 border-b border-white/10 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>

                <div className="p-4 border-b border-white/10 text-white font-medium">Custom Integration</div>
                <div className="p-4 border-b border-white/10 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>

                <div className="p-4 border-b border-white/10 text-white font-medium">Dedicated Account Manager</div>
                <div className="p-4 border-b border-white/10 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 border-b border-white/10 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>

                <div className="p-4 text-white font-medium">ROI Expectation</div>
                <div className="p-4 text-center">
                  <span className="text-yellow-400 font-semibold">200-400%</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-green-400 font-semibold">400-800%</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-blue-400 font-semibold">800-1200%</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-purple-400 font-semibold">1200-2000%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your requirements, get a custom quote, 
              and start your business transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 text-lg font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                Get Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 text-sm">
                Leading provider of revolutionary micro SAAS services and innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors block">
                  Home
                </a>
                <a href="https://ziontechgroup.com/services" className="text-gray-300 hover:text-cyan-400 transition-colors block">
                  All Services
                </a>
                <a href="https://ziontechgroup.com/about" className="text-gray-300 hover:text-cyan-400 transition-colors block">
                  About Us
                </a>
                <a href="https://ziontechgroup.com/contact" className="text-gray-400 hover:text-cyan-400 transition-colors block">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com/privacy" className="text-cyan-400 hover:text-cyan-300 ml-2">
                Privacy Policy
              </a>
              | 
              <a href="https://ziontechgroup.com/terms" className="text-cyan-400 hover:text-cyan-300 ml-2">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}