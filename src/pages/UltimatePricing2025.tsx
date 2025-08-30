import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  X,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Building,
  Heart,
  Activity,
  Brain,
  Server,
  Rocket,
  Sparkles,
  Award,
  Globe,
  Target,
  Briefcase,
  Clock,
  Calendar,
  CreditCard,
  ShieldCheck,
  Lock,
  Eye,
  BarChart3,
  Cpu,
  Database,
  Network,
  Cloud,
  Atom,
  Bot,
  GitFork,
  Eye,
  MessageSquare,
  FileText,
  Search,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { allUltimateZionPricing2025 } from '../data/ultimateZionPricingGuide2025';

const UltimatePricing2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('micro-saas');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const tabs = [
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, color: 'from-blue-500 to-cyan-500' },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, color: 'from-green-500 to-emerald-500' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-orange-500 to-red-500' },
    { id: 'industry', name: 'Industry Solutions', icon: Building, color: 'from-purple-500 to-pink-500' }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'financial', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Activity }
  ];

  const getCurrentServices = () => {
    if (activeTab === 'industry') {
      if (selectedIndustry === 'all') {
        return allUltimateZionPricing2025.industry.flatMap(ind => ind.services);
      }
      return allUltimateZionPricing2025.industry.find(ind => ind.industry.toLowerCase().includes(selectedIndustry))?.services || [];
    }
    return allUltimateZionPricing2025[activeTab as keyof typeof allUltimateZionPricing2025] || [];
  };

  const currentServices = getCurrentServices();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
          >
            Ultimate Pricing Guide 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Transparent, competitive pricing for our revolutionary Micro SAAS, IT Infrastructure, and AI Services
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
              <DollarSign className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300">Proven ROI</span>
            </div>
            <div className="flex items-center gap-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30">
              <Shield className="w-5 h-5 text-pink-400" />
              <span className="text-pink-300">Money-Back Guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} border-transparent text-white shadow-lg`
                    : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-semibold">{tab.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Industry Filter for Industry Tab */}
          {activeTab === 'industry' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'border-purple-500 text-purple-400 bg-purple-500/20'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                  }`}
                >
                  <industry.icon className="w-4 h-4" />
                  <span>{industry.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentServices.map((service, index) => (
              <motion.div
                key={service.serviceId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.serviceName}</h3>
                    <p className="text-gray-400 mb-4">{service.category}</p>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-cyan-300 text-sm font-semibold">Market Leader</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-center">
                    {service.description}
                  </p>

                  {/* Pricing Tiers */}
                  <div className="space-y-4 mb-6">
                    {service.pricingTiers.map((tier, tierIndex) => (
                      <div
                        key={tierIndex}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          tier.popular
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-gray-600 bg-gray-700/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-white">{tier.name}</h4>
                          {tier.popular && (
                            <span className="px-2 py-1 bg-cyan-500 text-white text-xs rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-cyan-400 mb-2">
                          ${tier.price.toLocaleString()}
                          <span className="text-sm text-gray-400 font-normal">/{tier.billingCycle}</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{tier.bestFor}</p>
                        <ul className="space-y-2 mb-3">
                          {tier.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {tier.limitations.length > 0 && (
                          <div className="text-xs text-gray-500">
                            <strong>Limitations:</strong> {tier.limitations.join(', ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Market Analysis */}
                  <div className="bg-gray-700/30 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-cyan-400" />
                      Market Analysis
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-cyan-400 font-semibold">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup Cost:</span>
                        <span className="text-gray-300">{service.setupCosts}</span>
                      </div>
                    </div>
                  </div>

                  {/* Competitors */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-400" />
                      Competitive Analysis
                    </h4>
                    <div className="space-y-2">
                      {service.competitors.slice(0, 2).map((competitor, compIndex) => (
                        <div key={compIndex} className="text-sm">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300 font-medium">{competitor.name}</span>
                            <span className="text-gray-400">{competitor.pricing}</span>
                          </div>
                          <div className="flex gap-2 text-xs">
                            <span className="text-green-400">✓ {competitor.pros[0]}</span>
                            <span className="text-red-400">✗ {competitor.cons[0]}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Costs */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-yellow-400" />
                      Additional Costs
                    </h4>
                    <div className="space-y-1 text-sm">
                      {service.additionalCosts.slice(0, 3).map((cost, costIndex) => (
                        <div key={costIndex} className="text-gray-300">
                          • {cost}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Discounts & Guarantees */}
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-400" />
                      Special Offers & Guarantees
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Annual Discount:</span>
                        <span className="text-green-400 font-semibold">{service.discounts.annual}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Enterprise Discount:</span>
                        <span className="text-green-400 font-semibold">{service.discounts.enterprise}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Startup Discount:</span>
                        <span className="text-green-400 font-semibold">{service.discounts.startup}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Nonprofit Discount:</span>
                        <span className="text-green-400 font-semibold">{service.discounts.nonprofit}</span>
                      </div>
                    </div>
                  </div>

                  {/* Trial & Guarantee */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">{service.trialPeriod} Trial</span>
                    </div>
                    {service.moneyBackGuarantee && (
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{service.guaranteePeriod} Guarantee</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Get Custom Quote
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="/ultimate-services-2025"
                      className="w-full border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contact our team to discuss your specific needs and get a customized quote
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="flex items-center gap-3 justify-center">
              <Phone className="w-6 h-6 text-cyan-400" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Mail className="w-6 h-6 text-purple-400" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <MapPin className="w-6 h-6 text-pink-400" />
              <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/ultimate-services-2025"
              className="border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View All Services
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UltimatePricing2025;