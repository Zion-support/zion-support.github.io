import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Brain, 
  Server, 
  Shield, 
  Target, 
  Rocket, 
  Atom, 
  Network, 
  Cpu, 
  Wifi, 
  Workflow, 
  Eye, 
  BarChart3, 
  TrendingUp, 
  MessageCircle, 
  Calendar, 
  PenTool, 
  Activity, 
  DollarSign, 
  Clock, 
  Award, 
  Globe, 
  Building2, 
  Briefcase, 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Crown,
  Gem,
  ShieldCheck,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Server as ServerIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Atom as AtomIcon,
  Network as NetworkIcon,
  Cpu as CpuIcon,
  Wifi as WifiIcon,
  Workflow as WorkflowIcon,
  Eye as EyeIcon,
  BarChart3 as BarChart3Icon,
  TrendingUp as TrendingUpIcon,
  MessageCircle as MessageCircleIcon,
  Calendar as CalendarIcon,
  PenTool as PenToolIcon,
  Activity as ActivityIcon,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  Award as AwardIcon,
  Globe as GlobeIcon,
  Building2 as Building2Icon,
  Briefcase as BriefcaseIcon,
  FileText as FileTextIcon,
  HelpCircle as HelpCircleIcon
} from 'lucide-react';
import { allInnovativeServices2026 } from '../data/innovativeServices2026';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showFeatures, setShowFeatures] = useState<{ [key: string]: boolean }>({});

  const { microSaas, itInfrastructure, aiServices } = allInnovativeServices2026;
  const allServices = [...microSaas, ...itInfrastructure, ...aiServices];

  const toggleFeatures = (serviceId: number) => {
    setShowFeatures(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const getPriceDisplay = (service: any) => {
    if (service.price) {
      return billingCycle === 'monthly' 
        ? `$${service.price}/month`
        : `$${Math.round(service.price * 10.8)}/year`;
    }
    if (service.hourlyRate) {
      return `$${service.hourlyRate}/hour`;
    }
    if (service.projectRate) {
      return `$${service.projectRate.toLocaleString()}`;
    }
    return 'Contact Us';
  };

  const getSavings = (service: any) => {
    if (service.price && billingCycle === 'yearly') {
      const yearlyPrice = service.price * 12;
      const discountedPrice = Math.round(service.price * 10.8);
      const savings = yearlyPrice - discountedPrice;
      return savings > 0 ? `Save $${savings}/year` : null;
    }
    return null;
  };

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

  const pricingTabs = [
    { id: 'all', label: 'All Services', count: allServices.length, icon: Globe },
    { id: 'micro-saas', label: 'Micro SAAS', count: microSaas.length, icon: Zap },
    { id: 'it-infrastructure', label: 'IT Infrastructure', count: itInfrastructure.length, icon: Server },
    { id: 'ai-services', label: 'AI Services', count: aiServices.length, icon: Brain }
  ];

  const filteredServices = allServices.filter(service => {
    if (activeTab === 'all') return true;
    if (activeTab === 'micro-saas') return service.price && !service.hourlyRate;
    if (activeTab === 'it-infrastructure') return service.hourlyRate;
    if (activeTab === 'ai-services') return service.aiModel;
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's revolutionary AI, micro SAAS, and IT infrastructure services. Real market prices with proven ROI guarantees." />
        <meta name="keywords" content="pricing, AI services pricing, micro SAAS pricing, IT infrastructure pricing, Zion Tech Group pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {" "}Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary services with real market prices, proven ROI, and no hidden fees. 
                Choose the plan that fits your business needs and budget.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                    billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-zinc-700'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                  <span className="ml-2 text-sm text-cyan-400">Save 10%</span>
                </span>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>30-Day Money Back</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tabs */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {pricingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-3">
                          {service.category}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {service.featured && (
                          <Crown className="w-5 h-5 text-yellow-400" />
                        )}
                        {service.trending && (
                          <TrendingUp className="w-5 h-5 text-green-400" />
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-cyan-400">
                        {getPriceDisplay(service)}
                      </div>
                      <div className="text-sm text-gray-400">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    {getSavings(service) && (
                      <div className="text-sm text-green-400 font-medium mb-4">
                        {getSavings(service)}
                      </div>
                    )}

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">ROI: {service.roi}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">Setup: {service.setupTime}</span>
                      </div>
                      {service.freeTier && (
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-300">Free Trial Available</span>
                        </div>
                      )}
                      {service.trialPeriod && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-300">{service.trialPeriod} Trial</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <button
                      onClick={() => toggleFeatures(service.id)}
                      className="flex items-center justify-between w-full text-left text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <span>Key Features</span>
                      {showFeatures[service.id] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {showFeatures[service.id] && (
                      <div className="mt-3 space-y-2">
                        {service.features.slice(0, 5).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 5 && (
                          <div className="text-xs text-gray-500">
                            +{service.features.length - 5} more features
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zinc-700/50 text-cyan-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </Link>
                    <button className="px-4 py-3 border border-zinc-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try selecting a different category or contact us for custom solutions.</p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're innovators, problem-solvers, and your strategic technology partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-First Approach",
                  description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation."
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level security with SOC 2, ISO 27001, and GDPR compliance built into every service."
                },
                {
                  icon: Zap,
                  title: "Proven ROI",
                  description: "Our clients see an average 300% ROI within 6-12 months of implementation."
                },
                {
                  icon: Globe,
                  title: "Global Support",
                  description: "24/7 support across all time zones with dedicated account managers and technical experts."
                },
                {
                  icon: Rocket,
                  title: "Rapid Deployment",
                  description: "Most solutions are deployed in 2-8 weeks, not months or years."
                },
                {
                  icon: Award,
                  title: "Customer Success",
                  description: "We don't just sell solutions; we ensure your success with comprehensive training and support."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us for a free consultation and custom pricing tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/innovative-services-showcase-2026"
                  className="border border-zinc-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}