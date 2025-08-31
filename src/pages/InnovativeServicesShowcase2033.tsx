import React, { useState, useEffect } from 'react';
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
  DevOps
} from 'lucide-react';
import { allInnovativeServices2033 } from '../data/innovativeServices2033';

export default function InnovativeServicesShowcase2033() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allInnovativeServices2033.aiServices.length + allInnovativeServices2033.microSaasServices.length + allInnovativeServices2033.itInfrastructureServices.length },
    { id: 'ai', name: 'AI Services', icon: Brain, count: allInnovativeServices2033.aiServices.length },
    { id: 'microsaas', name: 'Micro SAAS', icon: Rocket, count: allInnovativeServices2033.microSaasServices.length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Server, count: allInnovativeServices2033.itInfrastructureServices.length }
  ];

  const filteredServices = () => {
    let services: any[] = [];
    
    if (activeCategory === 'all' || activeCategory === 'ai') {
      services.push(...allInnovativeServices2033.aiServices);
    }
    if (activeCategory === 'all' || activeCategory === 'microsaas') {
      services.push(...allInnovativeServices2033.microSaasServices);
    }
    if (activeCategory === 'all' || activeCategory === 'infrastructure') {
      services.push(...allInnovativeServices2033.itInfrastructureServices);
    }

    if (searchTerm) {
      services = services.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return services;
  };

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI & Quantum Computing':
      case 'AI & Space Technology':
      case 'AI & Environmental Science':
        return Brain;
      case 'Business Automation':
      case 'Financial Technology':
      case 'Research & Development':
        return Rocket;
      case 'IT Infrastructure':
      case 'Cybersecurity & Infrastructure':
      case 'DevOps & Automation':
        return Server;
      default:
        return Globe;
    }
  };

  const getServiceColor = (category: string) => {
    if (category.includes('AI')) return 'from-cyan-400 to-blue-500';
    if (category.includes('Business') || category.includes('Financial') || category.includes('Research')) return 'from-purple-400 to-pink-500';
    if (category.includes('IT') || category.includes('Cybersecurity') || category.includes('DevOps')) return 'from-green-400 to-emerald-500';
    return 'from-gray-400 to-slate-500';
  };

  return (
    <>
      <Helmet>
        <title>Revolutionary Innovative Services 2033 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary AI, Micro SAAS, and IT Infrastructure services for 2025-2033. Cutting-edge solutions with real market prices and proven ROI." />
        <meta name="keywords" content="AI services, micro SAAS, IT infrastructure, quantum computing, space technology, climate AI, business automation, financial technology, research AI, cybersecurity, DevOps" />
        <meta property="og:title" content="Revolutionary Innovative Services 2033 - Zion Tech Group" />
        <meta property="og:description" content="Discover Zion Tech Group's revolutionary AI, Micro SAAS, and IT Infrastructure services for 2025-2033." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase-2033" />
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
                <Sparkles className="w-4 h-4 mr-2" />
                Revolutionary Services 2025-2033
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">Innovative Services</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover Zion Tech Group's cutting-edge AI, Micro SAAS, and IT Infrastructure services 
                that are reshaping the future of technology. Real solutions with proven ROI and market-leading innovation.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-cyan-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Real Market Prices</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Proven ROI</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Revolutionary Technology</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Get Started
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

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
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

              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices().map((service, index) => {
                const IconComponent = getServiceIcon(service.category);
                const colorClass = getServiceColor(service.category);
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Service Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${colorClass} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Service Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {service.category}
                      </p>
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.aiScore || 5) ? 'fill-current' : 'text-gray-600'}`} />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-400">
                          {service.aiScore || 'N/A'}
                        </span>
                      </div>
                    </div>

                    {/* Service Description */}
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Starting Price:</span>
                        <span className="text-lg font-bold text-cyan-400">
                          {service.pricing ? service.pricing.split(',')[0] : `$${service.price?.toLocaleString()}/month`}
                        </span>
                      </div>
                      {service.marketPrice && (
                        <div className="text-sm text-gray-500">
                          Market Average: {service.marketPrice}
                        </div>
                      )}
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features?.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features?.length > 3 && (
                          <div className="text-sm text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ROI & Setup */}
                    {service.roi && (
                      <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="text-sm text-green-400 font-medium">
                          ROI: {service.roi}
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="flex justify-between items-center">
                      <a
                        href="#contact"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <a
                        href="#contact"
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Started
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* No Results Message */}
            {filteredServices().length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company. We're pioneers in revolutionary AI, 
                Micro SAAS, and IT Infrastructure solutions that are reshaping the future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Rocket,
                  title: "Revolutionary Innovation",
                  description: "Our services are built on cutting-edge technology that's 5-10 years ahead of the market.",
                  color: "from-cyan-400 to-blue-500"
                },
                {
                  icon: DollarSign,
                  title: "Proven ROI",
                  description: "Real results with measurable returns. Our clients see 200-500% ROI within 6-12 months.",
                  color: "from-green-400 to-emerald-500"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level security with SOC 2, ISO 27001, and FedRAMP compliance.",
                  color: "from-purple-400 to-pink-500"
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "World-class engineers, scientists, and business experts with decades of experience.",
                  color: "from-orange-400 to-red-500"
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Serving clients worldwide with 24/7 support and local presence in key markets.",
                  color: "from-indigo-400 to-purple-500"
                },
                {
                  icon: Lightbulb,
                  title: "Future-Focused",
                  description: "We don't just solve today's problems, we build tomorrow's solutions.",
                  color: "from-yellow-400 to-orange-500"
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the revolution and discover how our innovative services can accelerate your growth, 
              reduce costs, and give you a competitive advantage in the market.
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