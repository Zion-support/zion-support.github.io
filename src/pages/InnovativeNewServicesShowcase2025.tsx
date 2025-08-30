import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Globe,
  MapPin,
  Clock,
  Users,
  Target,
  BarChart3,
  Cpu,
  Database,
  Lock,
  Eye,
  Search,
  FileText,
  Video,
  Settings,
  Leaf,
  Rocket,
  Award,
  DollarSign,
  PieChart,
  Activity,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import { innovativeMicroSaasServices2025, innovativeITServices2025, innovativeAIServices2025 } from '../data/innovativeNewServices2025';

const InnovativeNewServicesShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('micro-saas');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const tabs = [
    { id: 'micro-saas', label: 'Micro SAAS Services', icon: <Server className="w-5 h-5" />, count: innovativeMicroSaasServices2025.length },
    { id: 'it-services', label: 'IT Services', icon: <Cpu className="w-5 h-5" />, count: innovativeITServices2025.length },
    { id: 'ai-services', label: 'AI Services', icon: <Brain className="w-5 h-5" />, count: innovativeAIServices2025.length }
  ];

  const getServicesByTab = () => {
    switch (activeTab) {
      case 'micro-saas':
        return innovativeMicroSaasServices2025;
      case 'it-services':
        return innovativeITServices2025;
      case 'ai-services':
        return innovativeAIServices2025;
      default:
        return [];
    }
  };

  const getServiceIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'customer analytics':
        return <BarChart3 className="w-6 h-6" />;
      case 'document security':
        return <Shield className="w-6 h-6" />;
      case 'video intelligence':
        return <Video className="w-6 h-6" />;
      case 'business automation':
        return <Settings className="w-6 h-6" />;
      case 'energy management':
        return <Leaf className="w-6 h-6" />;
      case 'cybersecurity':
        return <Lock className="w-6 h-6" />;
      case 'infrastructure':
        return <Server className="w-6 h-6" />;
      case 'devops':
        return <Rocket className="w-6 h-6" />;
      case 'research & development':
        return <Search className="w-6 h-6" />;
      case 'financial ai':
        return <DollarSign className="w-6 h-6" />;
      case 'healthcare ai':
        return <Activity className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Innovative New Services 2025 - Zion Tech Group | Cutting-Edge Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary new services for 2025. AI-powered platforms, quantum-ready solutions, and cutting-edge micro SAAS services that transform businesses." />
        <meta name="keywords" content="AI services, micro SAAS, IT services, quantum computing, edge AI, cybersecurity, business automation, Zion Tech Group" />
        <meta property="og:title" content="Innovative New Services 2025 - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI, IT, and micro SAAS services for 2025. Transform your business with cutting-edge technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-new-services-2025" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-new-services-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary Services 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with Zion Tech Group's cutting-edge AI, IT infrastructure, and micro SAAS solutions. 
                Transform your business with unprecedented innovation and intelligence.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span>Quantum-Ready</span>
                </div>
                <div className="flex items-center gap-2 bg-green-600/20 px-4 py-2 rounded-full border border-green-500/30">
                  <Leaf className="w-5 h-5 text-green-400" />
                  <span>Sustainable</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700 border border-zinc-600'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getServicesByTab().map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer"
                  onClick={() => openServiceModal(service)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                      {getServiceIcon(service.category)}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">
                        ${service.price}
                      </div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zinc-700 text-xs rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Target className="w-4 h-4" />
                      <span>{service.targetAudience[0]}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company. We're your innovation partner, 
                committed to delivering cutting-edge solutions that drive real business transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Industry Leader",
                  description: "Recognized as a top innovator in AI, quantum computing, and edge technologies"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Expert Team",
                  description: "World-class engineers, scientists, and business strategists with decades of experience"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Enterprise Security",
                  description: "SOC2, ISO27001, and industry-specific compliance with military-grade security"
                },
                {
                  icon: <Clock className="w-12 h-12" />,
                  title: "24/7 Support",
                  description: "Round-the-clock technical support and dedicated success managers"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 mb-4">
                    <div className="text-blue-400">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Market Analysis & ROI
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services deliver exceptional returns on investment, with proven results across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Micro SAAS Services",
                  roi: "300-800%",
                  timeframe: "6-12 months",
                  marketSize: "$15-45B",
                  growth: "35-50% YoY"
                },
                {
                  title: "IT Services",
                  roi: "250-600%",
                  timeframe: "8-20 weeks",
                  marketSize: "$15-25B",
                  growth: "25-40% YoY"
                },
                {
                  title: "AI Services",
                  roi: "400-1000%",
                  timeframe: "3-8 months",
                  marketSize: "$12-45B",
                  growth: "40-60% YoY"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700 text-center"
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">{stat.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-2">{stat.roi}</div>
                      <div className="text-gray-400">ROI</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-purple-400 mb-2">{stat.timeframe}</div>
                      <div className="text-gray-400">Time to Value</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-green-400 mb-2">{stat.marketSize}</div>
                      <div className="text-gray-400">Market Size</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-cyan-400 mb-2">{stat.growth}</div>
                      <div className="text-gray-400">Growth Rate</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join the future of technology with Zion Tech Group's revolutionary services. 
                Get started with a free consultation and discover how we can accelerate your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                  Schedule Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                  View All Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                      {getServiceIcon(selectedService.category)}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
                      <p className="text-gray-400">{selectedService.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Description</h3>
                    <p className="text-gray-300 mb-6">{selectedService.description}</p>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">Features</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold mb-4 text-white">Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-zinc-800/50 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-bold mb-4 text-white">Pricing & Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Starting Price:</span>
                          <span className="text-2xl font-bold text-blue-400">${selectedService.price}/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Market Price:</span>
                          <span className="text-white">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">ROI:</span>
                          <span className="text-green-400">{selectedService.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Setup Time:</span>
                          <span className="text-white">{selectedService.setupTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800/50 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-bold mb-4 text-white">Target Audience</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.targetAudience.map((audience: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                          >
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-zinc-800/50 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-blue-400" />
                          <span>+1 302 464 0950</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-blue-400" />
                          <span>kleber@ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-blue-400" />
                          <span>ziontechgroup.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all">
                    Get Started Now
                  </button>
                  <button className="flex-1 border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InnovativeNewServicesShowcase2025;