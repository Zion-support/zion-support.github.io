import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {

  Brain, 
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
  PenTool,
  Briefcase,
  Heart,
  Home,
  BookOpen,
  ShoppingCart,
  Car,
  Factory,
  Building2
} from 'lucide-react';

// Import the new service data
import { INNOVATIVE_MICRO_SAAS_SERVICES_2034 } from '../data/innovativeMicroSaasServices2034';
import { INNOVATIVE_IT_SERVICES_2034 } from '../data/innovativeITServices2034';
import { COMPREHENSIVE_PRICING_GUIDE_2034 } from '../data/comprehensivePricingGuide2034';

export default function InnovativeServicesShowcase2034() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2034,
    ...INNOVATIVE_IT_SERVICES_2034
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: allServices.filter(s => s.tags.includes('AI')).length },
    { id: 'legal', name: 'Legal Technology', icon: Scale, count: allServices.filter(s => s.category === 'Legal Technology').length },
    { id: 'healthcare', name: 'Healthcare Technology', icon: Heart, count: allServices.filter(s => s.category === 'Healthcare Technology').length },
    { id: 'financial', name: 'Financial Technology', icon: Coins, count: allServices.filter(s => s.category === 'Financial Technology').length },
    { id: 'supply-chain', name: 'Supply Chain Technology', icon: Network, count: allServices.filter(s => s.category === 'Supply Chain Technology').length },
    { id: 'marketing', name: 'Marketing Technology', icon: TrendingUp, count: allServices.filter(s => s.category === 'Marketing Technology').length },
    { id: 'customer-experience', name: 'Customer Experience', icon: Users, count: allServices.filter(s => s.category === 'Customer Experience').length },
    { id: 'devops', name: 'DevOps & Automation', icon: Workflow, count: allServices.filter(s => s.category === 'DevOps & Automation').length },
    { id: 'ecommerce', name: 'E-commerce Technology', icon: ShoppingCart, count: allServices.filter(s => s.category === 'E-commerce Technology').length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.tags.includes('Quantum Computing')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: allServices.filter(s => s.tags.includes('Cybersecurity')).length },
    { id: 'space', name: 'Space Technology', icon: Satellite, count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'manufacturing', name: 'Manufacturing Technology', icon: Factory, count: allServices.filter(s => s.category === 'Manufacturing Technology').length },
    { id: 'sustainability', name: 'Sustainability Technology', icon: Leaf, count: allServices.filter(s => s.category === 'Sustainability Technology').length },
    { id: 'smart-home', name: 'Smart Home Technology', icon: Home, count: allServices.filter(s => s.category === 'Smart Home Technology').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {

        if (selectedCategory === 'ai') return service.tags.includes('AI');
        if (selectedCategory === 'legal') return service.category === 'Legal Technology';
        if (selectedCategory === 'healthcare') return service.category === 'Healthcare Technology';
        if (selectedCategory === 'financial') return service.category === 'Financial Technology';
        if (selectedCategory === 'supply-chain') return service.category === 'Supply Chain Technology';
        if (selectedCategory === 'marketing') return service.category === 'Marketing Technology';
        if (selectedCategory === 'customer-experience') return service.category === 'Customer Experience';
        if (selectedCategory === 'devops') return service.category === 'DevOps & Automation';
        if (selectedCategory === 'ecommerce') return service.category === 'E-commerce Technology';
        if (selectedCategory === 'quantum') return service.tags.includes('Quantum Computing');
        if (selectedCategory === 'cybersecurity') return service.tags.includes('Cybersecurity');
        if (selectedCategory === 'space') return service.category === 'Space Technology';
        if (selectedCategory === 'manufacturing') return service.category === 'Manufacturing Technology';
        if (selectedCategory === 'sustainability') return service.category === 'Sustainability Technology';
        if (selectedCategory === 'smart-home') return service.category === 'Smart Home Technology';
        return false;
      });

  const getCategoryIcon = (category: string) => {

    const iconMap: { [key: string]: any } = {

      'Legal Technology': Scale,
      'Healthcare Technology': Heart,
      'Financial Technology': Coins,
      'Supply Chain Technology': Network,
      'Marketing Technology': TrendingUp,
      'Customer Experience': Users,
      'DevOps & Automation': Workflow,
      'E-commerce Technology': ShoppingCart,
      'Quantum Computing': Atom,
      'Space Technology': Satellite,
      'Manufacturing Technology': Factory,
      'Sustainability Technology': Leaf,
      'Smart Home Technology': Home,
      'Cybersecurity': Shield,
      'Edge Computing': Cpu
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {

    const colorMap: { [key: string]: string } = {

      'Legal Technology': 'from-blue-400 to-indigo-500',
      'Healthcare Technology': 'from-green-400 to-emerald-500',
      'Financial Technology': 'from-yellow-400 to-orange-500',
      'Supply Chain Technology': 'from-purple-400 to-pink-500',
      'Marketing Technology': 'from-red-400 to-pink-500',
      'Customer Experience': 'from-cyan-400 to-blue-500',
      'DevOps & Automation': 'from-gray-400 to-slate-500',
      'E-commerce Technology': 'from-orange-400 to-red-500',
      'Quantum Computing': 'from-indigo-400 to-purple-500',
      'Space Technology': 'from-slate-400 to-gray-500',
      'Manufacturing Technology': 'from-blue-400 to-cyan-500',
      'Sustainability Technology': 'from-green-400 to-teal-500',
      'Smart Home Technology': 'from-yellow-400 to-green-500',
      'Cybersecurity': 'from-red-400 to-orange-500',
      'Edge Computing': 'from-purple-400 to-indigo-500'
    };
    return colorMap[category] || 'from-gray-400 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Innovative Services Showcase 2034 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of innovative AI, IT, and micro-SaaS services for 2034. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, IT solutions, micro-SaaS, quantum computing, cybersecurity, healthcare technology, legal technology, financial technology" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2034" />
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
              Innovative Services Showcase
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                2034
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of cutting-edge AI, IT, and micro-SaaS services designed to transform your business and drive innovation in 2034 and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>25+ Innovative Services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Expert Support</span>
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

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${

                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {

              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                        <CategoryIcon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-gray-400">{service.category}</span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <DollarSign className="w-5 h-5 text-cyan-400" />
                      <span className="text-2xl font-bold text-white">
                        {service.currency}{service.price}
                      </span>
                      <span className="text-gray-400">/{service.pricingModel}</span>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ROI and Delivery */}
                    <div className="flex items-center justify-between mb-6 text-sm">
                      <div className="flex items-center gap-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>ROI: {service.roi}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-400">
                        <Clock className="w-4 h-4" />
                        <span>{service.estimatedDelivery}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => setSelectedService(service.id)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </button>

                    {/* Innovation Level Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${

                        service.innovationLevel === 'Breakthrough' 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : service.innovationLevel === 'Advanced'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                      }`}>
                        {service.innovationLevel}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No services found in this category.</div>
            </div>
          )}
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {allServices.find(s => s.id === selectedService)?.title}
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

                const service = allServices.find(s => s.id === selectedService);
                if (!service) return null;

                return (
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Benefits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Use Cases</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <Target className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Target Audience</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.targetAudience.map((audience, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specifications */}
                    {service.technicalSpecs && (
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Technical Specifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Technology</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technicalSpecs.technology.map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Integrations</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technicalSpecs.integrations.map((integration, idx) => (
                                <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                                  {integration}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contact Information */}
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <h3 className="text-lg font-semibold text-white mb-4">Get Started Today</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
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
                      <div className="mt-4 text-center">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of organizations already leveraging our innovative services to drive growth, efficiency, and competitive advantage.
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
                href="/pricing"
                className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200"
              >
                <DollarSign className="w-5 h-5" />
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}